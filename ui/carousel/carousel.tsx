"use client";
import { useState } from "react";
import { features } from "@/constants/features";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Box,
  Store,
  Wrench,
  UsersRound,
  BookOpen,
} from "lucide-react";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const total = features.length;

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const feature = features[current];

  // Animation variants for sliding effect
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeInOut },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: easeInOut },
    }),
  };

  // Icon mapping for each feature (example, you can customize)
  const icons: Record<string, React.ReactNode> = {
    Mercado: <Box className="w-10 h-10 mx-auto text-primary" />,
    Tiendas: <Store className="w-10 h-10 mx-auto text-primary" />,
    Servicios: <Wrench className="w-10 h-10 mx-auto text-primary" />,
    Comunidad: <UsersRound className="w-10 h-10 mx-auto text-primary" />,
    Blog: <BookOpen className="w-10 h-10 mx-auto text-primary" />,
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-6 md:py-8 mx-auto">
      <div className="w-[90%] max-w-2xl min-h-[360px] bg-white/90 rounded-lg shadow-lg p-3 md:p-6 text-center relative">
        {/* Navigation buttons on sides, mid-level */}
        <button
          className="absolute -left-4 z-50 top-1/2 -translate-y-1/2 p-2 bg-primary/80 text-white rounded-full hover:bg-primary transition"
          style={{ touchAction: "manipulation" }}
          onClick={handlePrev}
          aria-label="Anterior"
        >
          <ChevronLeft size={22} className="md:w-7 md:h-7 w-5 h-5" />
        </button>
        <button
          className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-primary/80 text-white rounded-full hover:bg-primary transition z-10"
          style={{ touchAction: "manipulation" }}
          onClick={handleNext}
          aria-label="Siguiente"
        >
          <ChevronRight size={22} className="md:w-7 md:h-7 w-5 h-5" />
        </button>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={feature.name}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4">{icons[feature.name]}</div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              {feature.name}
            </h3>
            <p className="text-lg text-gray-800 mb-4 animate-fadeIn">
              {feature.firstDescription}
            </p>
            <motion.div
              className="text-gray-800 font-light mb-4 animate-fadeIn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              dangerouslySetInnerHTML={{ __html: feature.secondDescription }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots under the container */}
      <div className="flex justify-center items-center gap-3 md:gap-2 mt-4">
        {features.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-primary scale-125" : "bg-gray-300"
            }`}
            style={{ touchAction: "manipulation" }}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            aria-label={`Ir a la funcionalidad ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
