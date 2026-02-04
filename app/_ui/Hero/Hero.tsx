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
        "min-h-[80vh] w-full",
        "text-center",
        "px-4 py-10",
        "overflow-hidden",
        "bg-gradient-to-br from-primary-light/20 via-white to-secondary/10",
      )}
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full flex flex-wrap justify-center gap-4 my-10 px-4 md:px-0"
        >
          {ekoruFeatures.map((feature, index) => {
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
                className={clsx(
                  "flex flex-col",
                  "items-center",
                  "gap-2",
                  "p-3 md:p-4",
                  "w-full max-w-[120px]",
                  "bg-white",
                  "rounded-xl",
                  "shadow-lg",
                  "hover:shadow-xl",
                  "transition-all",
                )}
              >
                <div className={`p-2 md:p-3 ${feature.color} rounded-full`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-700">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <Button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
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
