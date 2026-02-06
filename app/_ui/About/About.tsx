"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Leaf, Recycle, Heart, Users } from "lucide-react";
import { Banner, Text, Title } from "@ekoru/ui";
import { useAboutTranslations } from "./useAboutTranslations";
import clsx from "clsx";

const sectionImage = "/app-demo.webp";

export default function About() {
  const { t } = useAboutTranslations();

  const highlights = [
    {
      icon: Recycle,
      text: t.highlights.buySellExchange,
      color: "text-primary",
    },
    { icon: Leaf, text: t.highlights.repairRecycle, color: "text-secondary" },
    {
      icon: Heart,
      text: t.highlights.consciousConsumption,
      color: "text-secondary",
    },
    { icon: Users, text: t.highlights.buildCommunity, color: "text-primary" },
  ];

  return (
    <section
      id={t.sectionId}
      className={clsx(
        "bg-gradient-to-b from-white/80 to-neutral-light/30",
        "max-w-6xl",
        "mx-auto",
        "p-0 md:p-8",
        "rounded-2xl",
      )}
    >
      <Banner
        title={t.banner.title}
        description={t.banner.description}
        variant="primary"
      />

      <div className="w-full flex flex-col-reverse md:flex-row items-start justify-center px-4 py-12">
        {/* Image with hover effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/4 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={sectionImage}
              alt="Celulares"
              width={800}
              height={600}
              className="w-full h-full max-w-xl object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Text content with stagger animations */}
        <div className="w-11/12 md:w-3/4 text-left text-gray-800 font-light space-y-6 mx-auto">
          <Title
            level="h5"
            as="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
          >
            {t.content.title}
          </Title>

          <Text
            variant="p"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="leading-relaxed"
          >
            <Text variant="span" className="font-semibold text-primary">
              EKORU
            </Text>{" "}
            {t.content["paragraph1-1"]}{" "}
            <Text variant="span" className="font-semibold text-primary">
              {t.content["paragraph1Highlight"]}
            </Text>{" "}
            {t.content["paragraph1-2"]}
          </Text>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 my-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 p-3 bg-white/80 rounded-lg shadow-md border border-primary/20"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <Text
                  variant="span"
                  className="text-sm font-medium text-gray-700"
                >
                  {item.text}
                </Text>
              </motion.div>
            ))}
          </motion.div>

          <Text
            variant="p"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="leading-relaxed"
          >
            {t.content["paragraph2-1"]}{" "}
            <Text variant="span" className="font-semibold text-primary">
              {t.content["paragraphHighlight-1"]}
            </Text>
            {t.content["paragraph2-2"]}{" "}
            <Text variant="span" className="font-semibold text-primary">
              {t.content["paragraphHighlight-2"]}
            </Text>
            {t.content["paragraph2-3"]}{" "}
            <Text variant="span" className="font-semibold text-primary">
              {t.content["paragraphHighlight-3"]}
            </Text>
            .
          </Text>

          <Text
            variant="blockquote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="leading-relaxed italic font-medium"
          >
            {t.content.blockquote}{" "}
            <Text variant="span" className="font-bold text-primary">
              {t.content.blockquoteHighlight}
            </Text>
          </Text>
        </div>
      </div>
    </section>
  );
}
