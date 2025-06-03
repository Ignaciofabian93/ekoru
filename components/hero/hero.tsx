"use client";
import { motion } from "motion/react";
import clsx from "clsx";
import Button from "../buttons/button";

export default function Hero() {
  return (
    <section id="home" className={clsx("w-full max-w-screen h-[calc(100vh_-_40px)]", "relative", "overflow-hidden")}>
      <div
        className={clsx(
          "absolute inset-0",
          "flex flex-col items-center justify-center",
          "z-10",
          "text-primary",
          "px-4"
        )}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[48px] sm:text-[56px] font-extrabold leading-tight text-center"
        >
          Bienvenid@s a EKORU
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[28px] sm:text-[36px] mt-4 text-center"
        >
          Donde nada se desperdicia
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-[28px] sm:text-[36px] text-center"
        >
          Ni tus ganas de cambiar
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="w-10/12 min-w-[120px] max-w-[350px] flex items-center justify-center mt-6">
            <Button
              text="Contáctanos"
              size="full"
              variant="primary"
              className="mt-4"
              as="link"
              href="#contact"
              newTab={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
