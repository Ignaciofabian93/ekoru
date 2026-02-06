"use client";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Recycle,
  Leaf,
  Users,
  ShoppingBag,
  Repeat,
  Package,
  ArrowDown,
} from "lucide-react";
import { Button, Text, Title } from "@ekoru/ui";
import { useHeroTranslations } from "./useHeroTranslations";
import clsx from "clsx";

// Floating leaf decoration with randomized movement
const FloatingLeaf = ({
  delay = 0,
  className,
  size = "w-6 h-6",
  color = "text-primary",
  duration = 12,
  swayPattern = 1,
}: {
  delay?: number;
  className?: string;
  size?: string;
  color?: string;
  duration?: number;
  swayPattern?: number;
}) => {
  // Different sway patterns for variety
  const swayVariants = {
    1: { x: [0, 80, -60, 40, 0], rotate: [0, 45, -30, 60, 0] },
    2: { x: [0, -70, 50, -30, 0], rotate: [0, -60, 45, -90, 0] },
    3: { x: [0, 40, -80, 60, 0], rotate: [0, 90, -45, 30, 0] },
    4: { x: [0, -50, 70, -40, 0], rotate: [0, -30, 75, -60, 0] },
    5: { x: [0, 60, -40, 80, 0], rotate: [0, 120, -60, 45, 0] },
  };

  const sway =
    swayVariants[swayPattern as keyof typeof swayVariants] || swayVariants[1];

  return (
    <motion.div
      className={clsx("absolute pointer-events-none", color, className)}
      initial={{ y: -30, x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: [0, 400, 800],
        x: sway.x,
        rotate: sway.rotate,
        opacity: [0, 0.4, 0.25, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Leaf className={size} />
    </motion.div>
  );
};

// Animated background component with more visible transitions
const AnimatedBackground = () => (
  <>
    <motion.div
      className="absolute inset-0 -z-10"
      animate={{
        background: [
          // Green: rgba(34, 197, 94) → Light green: rgba(134, 239, 172) → Pale green: rgba(240, 253, 244) → White
          "linear-gradient(180deg, rgba(34, 197, 94, 0.6) 0%, rgba(134, 239, 172, 0.4) 30%, rgba(240, 253, 244, 0.8) 65%, rgba(255, 255, 255, 1) 100%)",
          // Emerald: rgba(16, 185, 129) → Light emerald: rgba(110, 231, 183) → Pale emerald: rgba(236, 253, 245) → White
          "linear-gradient(180deg, rgba(16, 185, 129, 0.65) 0%, rgba(110, 231, 183, 0.45) 30%, rgba(236, 253, 245, 0.8) 65%, rgba(255, 255, 255, 1) 100%)",
          // Teal: rgba(20, 184, 166) → Light teal: rgba(94, 234, 212) → Pale teal: rgba(240, 253, 250) → White
          "linear-gradient(180deg, rgba(20, 184, 166, 0.6) 0%, rgba(94, 234, 212, 0.4) 30%, rgba(240, 253, 250, 0.8) 65%, rgba(255, 255, 255, 1) 100%)",
          // Forest green: rgba(22, 163, 74) → Light green: rgba(134, 239, 172) → Pale green: rgba(220, 252, 231) → White
          "linear-gradient(180deg, rgba(22, 163, 74, 0.65) 0%, rgba(134, 239, 172, 0.45) 30%, rgba(220, 252, 231, 0.8) 65%, rgba(255, 255, 255, 1) 100%)",
          // Green: rgba(34, 197, 94) → Light green: rgba(134, 239, 172) → Pale green: rgba(240, 253, 244) → White
          "linear-gradient(180deg, rgba(34, 197, 94, 0.6) 0%, rgba(134, 239, 172, 0.4) 30%, rgba(240, 253, 244, 0.8) 65%, rgba(255, 255, 255, 1) 100%)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </>
);

export default function Hero() {
  const { slogan, subtitle, ctaButton, features, nextSection } =
    useHeroTranslations();

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById(nextSection);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ekoruFeatures = [
    {
      icon: ShoppingBag,
      title: features.buy,
      color: "bg-primary",
    },
    {
      icon: Recycle,
      title: features.sell,
      color: "bg-secondary",
    },
    {
      icon: Repeat,
      title: features.exchange,
      color: "bg-primary-dark",
    },
    {
      icon: Package,
      title: features.repair,
      color: "bg-danger",
    },
    {
      icon: Leaf,
      title: features.recycle,
      color: "bg-success",
    },
    {
      icon: Users,
      title: features.connect,
      color: "bg-warning",
    },
  ];

  const ekoruLogo = "/brand/logo.webp";

  const Logo = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-6"
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
  );

  return (
    <section
      className={clsx(
        "relative flex flex-col items-center justify-center",
        "h-dvh w-full",
        "text-center",
        "px-4 py-4",
        "overflow-hidden",
      )}
    >
      {/* Animated gradient background */}
      <AnimatedBackground />

      {/* Floating leaves background - reduced for cleaner look */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingLeaf
          delay={0}
          className="left-[5%] top-[-2%]"
          size="w-6 h-6"
          color="text-green-500/70"
          duration={14}
          swayPattern={1}
        />
        <FloatingLeaf
          delay={3}
          className="left-[15%] top-[-8%]"
          size="w-5 h-5"
          color="text-emerald-500/70"
          duration={12}
          swayPattern={3}
        />
        <FloatingLeaf
          delay={6}
          className="left-[30%] top-[-5%]"
          size="w-6 h-6"
          color="text-green-600/70"
          duration={15}
          swayPattern={2}
        />
        <FloatingLeaf
          delay={2}
          className="left-[45%] top-[-10%]"
          size="w-5 h-5"
          color="text-emerald-600/70"
          duration={13}
          swayPattern={4}
        />
        <FloatingLeaf
          delay={8}
          className="left-[60%] top-[-3%]"
          size="w-6 h-6"
          color="text-green-500/70"
          duration={11}
          swayPattern={5}
        />
        <FloatingLeaf
          delay={4}
          className="left-[75%] top-[-7%]"
          size="w-5 h-5"
          color="text-emerald-500/70"
          duration={14}
          swayPattern={1}
        />
        <FloatingLeaf
          delay={10}
          className="left-[90%] top-[-4%]"
          size="w-6 h-6"
          color="text-green-600/70"
          duration={12}
          swayPattern={3}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center drop-shadow-sm">
        {/* Logo */}
        <Logo />

        {/* Slogan */}
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          level="h3"
          as="h1"
          className={clsx(
            "font-bold",
            "bg-gradient-to-r from-primary via-secondary to-primary-dark",
            "bg-clip-text",
            "text-transparent",
            "tracking-tight",
            "pb-4",
            "text-center",
          )}
        >
          {slogan}
        </Title>

        {/* Subtitle */}
        <Text
          variant="p"
          className="text-gray-700 text-lg max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {subtitle}
        </Text>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full flex flex-wrap justify-center gap-3 md:gap-4 my-10 px-4 md:px-0"
        >
          {ekoruFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className={clsx(
                  "flex flex-col",
                  "items-center",
                  "gap-2.5",
                  "p-4 md:p-5",
                  "w-full max-w-[110px] md:max-w-[120px]",
                  "bg-white/95",
                  "backdrop-blur-sm",
                  "rounded-xl",
                  "border border-gray-100",
                  "shadow-sm",
                  "hover:shadow-md",
                  "transition-all duration-200",
                )}
              >
                <div
                  className={clsx(
                    "w-10 h-10 md:w-11 md:h-11",
                    "flex items-center justify-center",
                    feature.color,
                    "rounded-xl",
                  )}
                >
                  <Icon className="w-5 h-5 md:w-5.5 md:h-5.5 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          variant="primary"
          size="md"
          onClick={scrollToNextSection}
          rightIcon={ArrowDown}
        >
          {ctaButton}
        </Button>
      </div>
    </section>
  );
}
