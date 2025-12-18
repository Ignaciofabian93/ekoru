"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary" | "outlined" | "ghost";
};

export default function Banner({
  title,
  description,
  variant = "default",
}: Props) {
  const bannerClass = clsx(
    "p-4 md:p-5 rounded-xl w-[95%] mx-auto overflow-hidden relative",
    {
      "bg-gradient-to-r from-primary via-primary to-primary-dark text-white shadow-lg":
        variant === "primary" || variant === "default",
      "bg-transparent text-white": variant === "secondary",
      "border-3 border-primary shadow-lg shadow-primary/30 bg-white/80 backdrop-blur":
        variant === "outlined",
      "bg-white/50 backdrop-blur": variant === "ghost",
    }
  );

  const dotClass = clsx("w-3 h-3 rounded-full inline-block", {
    "bg-white shadow-lg shadow-white/50":
      variant === "primary" || variant === "default",
    "bg-white": variant === "secondary",
    "bg-primary": variant === "outlined",
    "bg-gray-600": variant === "ghost",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={bannerClass}
    >
      {/* Subtle animated background for primary variant */}
      {(variant === "primary" || variant === "default") && (
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      )}

      <div className="relative z-10">
        <div className="flex flex-1 justify-center items-center gap-2 md:gap-3 mb-3">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className={dotClass}
          />
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-2xl font-bold text-center tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className={dotClass}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-center leading-snug md:leading-normal font-light"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
