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
  const [direction, setDirection] = useState(0);
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

  const icons: Record<string, React.ReactNode> = {
    Mercado: <Box className="w-12 h-12 mx-auto text-primary" />,
    Tiendas: <Store className="w-12 h-12 mx-auto text-primary" />,
    Servicios: <Wrench className="w-12 h-12 mx-auto text-primary" />,
    Comunidad: <UsersRound className="w-12 h-12 mx-auto text-primary" />,
    Blog: <BookOpen className="w-12 h-12 mx-auto text-primary" />,
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-6 md:py-8 mx-auto">
      <div className="w-[90%] max-w-3xl min-h-[420px] bg-gradient-to-br from-white via-white to-neutral-light/30 rounded-2xl shadow-2xl p-4 md:p-8 text-center relative border border-primary/10">
        {/* Enhanced navigation buttons */}
        <motion.button
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -left-5 z-50 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          style={{ touchAction: "manipulation" }}
          onClick={handlePrev}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -right-5 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all z-10"
          style={{ touchAction: "manipulation" }}
          onClick={handleNext}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

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
            {/* Animated icon with background */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full"
            >
              {icons[feature.name]}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-primary mb-3 tracking-tight"
            >
              {feature.name}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-800 mb-5 font-medium px-2"
            >
              {feature.firstDescription}
            </motion.p>

            <motion.div
              className="text-gray-700 font-light leading-relaxed px-2 md:px-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: feature.secondDescription }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced dots navigation */}
      <div className="flex justify-center items-center gap-3 mt-6">
        {features.map((_, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-10 h-3 bg-gradient-to-r from-primary to-primary-dark"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
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
