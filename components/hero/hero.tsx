"use client";
import Image from "next/image";
import heroImage from "@/assets/hero.png";
import clsx from "clsx";
import Button from "../buttons/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="inicio" className={clsx("w-full max-w-screen h-[calc(100vh_-_40px)]", "relative", "overflow-hidden")}>
      <Image src={heroImage} alt="Ekoru" fill className="object-cover object-top" priority />
      <div className="bg-black/30 w-full h-full absolute z-10" />
      <div className={clsx("absolute inset-0", "flex flex-col items-center justify-center", "z-10", "text-white")}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[48px] sm:text-[56px] font-extrabold leading-tight"
        >
          Bienvenid@s a EKORU.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[28px] sm:text-[36px] mt-4"
        >
          Donde nada se desperdicia.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-[28px] sm:text-[36px]"
        >
          Ni tus ganas de cambiar
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center w-full"
        >
          <Button text="Comienza a circular" onClick={() => {}} className="text-[30px] mt-8" size="sm" />
        </motion.div>
      </div>
    </section>
  );
}
