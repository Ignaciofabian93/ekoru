"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Recycle,
  Leaf,
  Users,
  ShoppingBag,
  Repeat,
  Package,
} from "lucide-react";

const ekoruLogo = "/brand/logo.webp";
const slogan = "La nueva forma de circular";

const features = [
  { icon: ShoppingBag, title: "Compra", color: "from-primary to-primary-dark" },
  { icon: Recycle, title: "Vende", color: "from-secondary to-primary" },
  { icon: Repeat, title: "Intercambia", color: "from-primary-dark to-primary" },
  { icon: Package, title: "Repara", color: "from-primary to-secondary" },
  { icon: Leaf, title: "Recicla", color: "from-primary-light to-primary" },
  { icon: Users, title: "Conecta", color: "from-secondary to-primary-dark" },
];

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("who-we-are");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full text-center px-4 py-10 overflow-hidden bg-gradient-to-br from-primary-light/20 via-white to-secondary/10">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center space-y-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={ekoruLogo}
            alt="Ekoru Logo"
            className="w-auto h-[50px] md:h-[70px] drop-shadow-xl"
            width={800}
            height={400}
            priority
          />
        </motion.div>

        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary-dark bg-clip-text text-transparent tracking-tight"
        >
          {slogan}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-gray-700 max-w-2xl font-light mb-4"
        >
          Una plataforma que conecta personas y transforma la forma de consumir
        </motion.p>

        {/* Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 w-full max-w-4xl mt-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                  type: "spring",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-2 p-3 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-primary/10"
              >
                <div
                  className={`p-2 md:p-3 bg-gradient-to-br ${feature.color} rounded-full`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-700">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-6"
        >
          <div className="px-6 py-2.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-lg">
            <p className="text-white font-bold text-sm md:text-base">
              🚀 Próximamente disponible
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          onClick={scrollToNextSection}
          className="mt-8 flex flex-col items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-light tracking-wider">
            Descubre más
          </span>
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
