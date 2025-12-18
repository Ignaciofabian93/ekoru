"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { laws } from "@/constants/laws";

const navItems = [
  { id: "who-we-are", label: "¿EKORU?" },
  { id: "features", label: "Funcionalidades" },
  { id: "mission&vision", label: "Misión y Visión" },
  { id: "team", label: "Equipo" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark shadow-md border-b border-neutral/20 sticky top-0 z-50 backdrop-blur-sm"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/brand/logo.webp"
                  alt="EKORU"
                  width={100}
                  height={50}
                  className="h-full max-h-[50px] w-auto drop-shadow-lg"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 items-center justify-end space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  href={`#${item.id}`}
                  className={`relative text-white hover:text-primary-light transition-all duration-200 ease-in-out font-medium text-sm group ${
                    activeSection === item.id ? "text-primary-light" : ""
                  }`}
                >
                  {item.label}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeSection === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light origin-left"
                  />
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:hidden flex items-center"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-primary-light transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
            {/* Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-[70%] max-w-sm h-full bg-white shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral/20 bg-gradient-to-r from-primary/5 to-primary-dark/5">
                <h2 className="text-lg font-semibold text-text-primary">
                  Menú
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-neutral hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Menu Content */}
              <div className="h-full overflow-y-auto pb-20">
                <div className="p-4 space-y-1">
                  <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
                    Navegación
                  </h3>
                  <button
                    onClick={() => handleScrollToSection("who-we-are")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-neutral-light/50 transition-colors rounded-lg border-b border-neutral/10"
                  >
                    <span className="font-medium text-text-primary">
                      ¿EKORU?
                    </span>
                  </button>
                  <button
                    onClick={() => handleScrollToSection("features")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-neutral-light/50 transition-colors rounded-lg border-b border-neutral/10"
                  >
                    <span className="font-medium text-text-primary">
                      Funcionalidades
                    </span>
                  </button>
                  <button
                    onClick={() => handleScrollToSection("mission&vision")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-neutral-light/50 transition-colors rounded-lg border-b border-neutral/10"
                  >
                    <span className="font-medium text-text-primary">
                      Misión y Visión
                    </span>
                  </button>
                  <button
                    onClick={() => handleScrollToSection("team")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-neutral-light/50 transition-colors rounded-lg border-b border-neutral/10"
                  >
                    <span className="font-medium text-text-primary">
                      Equipo
                    </span>
                  </button>
                  <button
                    onClick={() => handleScrollToSection("contact")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-neutral-light/50 transition-colors rounded-lg"
                  >
                    <span className="font-medium text-text-primary">
                      Contacto
                    </span>
                  </button>
                </div>
                <div className="p-4 border-t border-neutral/10">
                  <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
                    Información
                  </h3>
                  <div className="space-y-1">
                    <Link
                      href="/privacy-policy"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-3 py-2 text-sm text-text-secondary hover:bg-neutral-light hover:text-primary transition-colors rounded-lg"
                    >
                      Política de Privacidad
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-3 py-2 text-sm text-text-secondary hover:bg-neutral-light hover:text-primary transition-colors rounded-lg"
                    >
                      Términos y Condiciones
                    </Link>
                    {/* Laws Accordion */}
                    <button
                      onClick={() => setOpenAccordion(!openAccordion)}
                      className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-text-secondary hover:bg-neutral-light hover:text-primary transition-colors rounded-lg"
                      aria-expanded={openAccordion}
                    >
                      <span>Artículos y Leyes</span>
                      <span
                        className={`transition-transform duration-200 ${
                          openAccordion ? "rotate-180" : ""
                        }`}
                      >
                        <ArrowDown className="w-4 h-4 text-primary" />
                      </span>
                    </button>
                    <AnimatePresence>
                      {openAccordion && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-neutral-light/20 rounded-lg mt-1"
                        >
                          <ul className="py-2">
                            {laws.map((law) => (
                              <li key={law.name}>
                                <a
                                  href={law.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-6 py-2 text-sm text-text-primary hover:text-primary-dark hover:bg-white/50 transition-colors"
                                >
                                  {law.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
