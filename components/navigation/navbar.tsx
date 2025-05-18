"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { House, Sprout, TabletSmartphone, Mail, Menu, X } from "lucide-react";
import { YouTubeIcon, InstagramIcon, FacebookIcon, LinkedinIcon, XIcon } from "@/assets/icons/index";
import logo from "@/assets/logo.png";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const navInfo = [
  { name: "Inicio", href: "#inicio", icon: <House size={20} /> },
  { name: "Nosotros", href: "#nosotros", icon: <Sprout size={20} /> },
  { name: "Servicios", href: "#servicios", icon: <TabletSmartphone size={20} /> },
  { name: "Contacto", href: "#contacto", icon: <Mail size={20} /> },
];

const socialMedia = [
  { name: "Instagram", icon: <InstagramIcon width={30} height={30} />, href: "" },
  { name: "Facebook", icon: <FacebookIcon width={30} height={30} />, href: "" },
  { name: "LinkedIn", icon: <LinkedinIcon width={30} height={30} />, href: "" },
  { name: "X", icon: <XIcon width={30} height={30} />, href: "" },
  { name: "YouTube", icon: <YouTubeIcon width={30} height={30} />, href: "" },
];

export default function Navbar() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "navbar-gradient",
        "backdrop-blur-lg",
        "shadow-md shadow-black/30"
      )}
    >
      <nav className={clsx("h-[80px]", "flex items-center justify-between", "px-8 mx-auto")}>
        {/* Logo */}
        <a href="#inicio" className="flex items-center cursor-pointer">
          <Image src={logo} alt="logo ekoru" width={160} className="drop-shadow-xs drop-shadow-gray-700" priority />
        </a>

        {/* Nav Links */}
        <ul className={clsx("hidden md:flex gap-8")}>
          {navInfo.map(({ name, href, icon }) => (
            <li
              key={name}
              className={clsx(
                "flex items-center justify-center",
                "mx-1",
                "gap-2",
                "text-base font-semibold",
                "border-b-[1px] border-transparent",
                "text-white",
                "hover:text-primary-dark transition-colors duration-300",
                "hover:border-b-[1px] hover:border-primary-dark"
              )}
            >
              {icon}
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
        <div className="absolute right-6 flex md:hidden">
          <AnimatePresence mode="wait">
            {isOpened ? (
              <motion.div
                key="x-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X className="text-white cursor-pointer" size={40} onClick={() => setIsOpened(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu className="text-white cursor-pointer" size={40} onClick={() => setIsOpened(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <aside
        className={clsx(
          "fixed top-[80px] right-0 w-[60%]",
          "h-[calc(100dvh-80px)]",
          "bg-white/95",
          "flex flex-col items-center justify-start",
          "transform transition-transform duration-500 ease-in-out",
          "backdrop-blur-2xl",
          isOpened ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="w-full h-1/2 flex flex-col items-start justify-start gap-8 text-[18px] font-medium py-8 px-6">
          {navInfo.map(({ name, href, icon }) => (
            <li
              key={name}
              className={clsx(
                "w-full",
                "flex items-center justify-start",
                "mx-1",
                "gap-2",
                "text-base",
                "hover:text-gray transition-colors duration-300"
              )}
            >
              {icon}
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
        <div className="w-full h-1/2 flex flex-col items-center justify-evenly px-4">
          <p className="text-base font-semibold text-pretty">Síguenos en nuestras redes</p>
          {socialMedia.map(({ name, icon, href }) => (
            <Link key={name} href={href} className="flex items-center w-full justify-start" target="_blank">
              {icon}
              <p className="ml-2 text-base font-semibold">{name}</p>
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
}
