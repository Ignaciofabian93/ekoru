"use client";
import { motion } from "motion/react";
import Image from "next/image";
import heroImage from "@/assets/hero.png";
import clsx from "clsx";
import Button from "../buttons/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className={clsx("w-full max-w-screen h-[calc(100vh_-_40px)]", "relative", "overflow-hidden")}>
      <Image src={heroImage} alt="Ekoru" fill className="object-cover object-top" priority />
      <div className="bg-black/30 w-full h-full absolute z-10" />
      <div
        className={clsx("absolute inset-0", "flex flex-col items-center justify-center", "z-10", "text-white", "px-4")}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[48px] sm:text-[56px] font-extrabold leading-tight text-center text-shadow-md text-shadow-gray-950"
        >
          Bienvenid@s a EKORU
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[28px] sm:text-[36px] mt-4 text-center text-shadow-md text-shadow-gray-950"
        >
          Donde nada se desperdicia
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-[28px] sm:text-[36px] text-center text-shadow-md text-shadow-gray-950"
        >
          Ni tus ganas de cambiar
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center w-full"
        >
          <Link
            href="https://app.ekoru.cl"
            target="_blank"
            className="w-10/12 min-w-[120px] max-w-[350px] flex items-center justify-center"
          >
            <Button text="Comienza a circular" className="mt-8 shadow-lg shadow-gray-950/60" size="full" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
