"use client";
import logo from "@/assets/logo.png";
import clsx from "clsx";
import Image from "next/image";

const navInfo = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header
      className={clsx(
        "fixed top-0 w-full max-w-screen z-50 transition-all duration-300",
        "navbar-gradient",
        "backdrop-blur-lg"
      )}
    >
      <nav className={clsx("h-[80px]", "flex items-center justify-between", "px-4 sm:px-8")}>
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="logo ekoru" width={160} height={40} />
        </div>

        {/* Nav Links */}
        <ul className={clsx("hidden md:flex gap-8 text-[18px] font-medium")}>
          {navInfo.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-primary transition-colors duration-200">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
