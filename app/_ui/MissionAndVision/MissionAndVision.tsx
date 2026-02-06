"use client";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  Handshake,
  Zap,
  Users2,
  LucideIcon,
} from "lucide-react";
import { Banner, Text } from "@ekoru/ui";
import { useMissionAndVisionTranslations } from "./useMissionAndVisionTranslations";

const image = "/missionIcons.webp";

const valueIcons = [Heart, Handshake, Zap, Users2];

const InfoColumn = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex-1 bg-gradient-to-br from-white to-neutral-light/30 p-6 rounded-xl shadow-lg border border-primary/10 hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h4 className="text-2xl text-primary font-bold">{title}</h4>
      </div>
      <div className="text-gray-700 leading-relaxed">{description}</div>
    </motion.article>
  );
};

export default function MissionAndVision() {
  const { sectionId, banners, introText, imageAlt, mission, vision, values } =
    useMissionAndVisionTranslations();

  const info = [
    {
      title: mission.title,
      icon: Target,
      description: (
        <>
          {mission.part1}{" "}
          <Text variant="span" className="font-semibold text-primary">
            {mission.highlight1}
          </Text>
          {mission.part2}{" "}
          <Text variant="span" className="font-semibold text-primary">
            {mission.highlight2}
          </Text>{" "}
          {mission.part3}
        </>
      ),
    },
    {
      title: vision.title,
      icon: Eye,
      description: (
        <>
          {vision.part1}{" "}
          <Text variant="span" className="font-semibold text-primary">
            {vision.highlight1}
          </Text>
          {vision.part2}{" "}
          <Text variant="span" className="font-semibold text-primary">
            {vision.highlight2}
          </Text>{" "}
          {vision.part3}
          <Text variant="span" className="font-semibold text-primary">
            {" "}
            {vision.highlight3}
          </Text>
        </>
      ),
    },
    {
      title: values.title,
      icon: Heart,
      description: (
        <ul className="space-y-3">
          {values.items.map((value, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 mt-1">
                {valueIcons[idx] && (
                  <div className="p-1.5 bg-primary/10 rounded-full">
                    {(() => {
                      const Icon = valueIcons[idx];
                      return <Icon className="w-4 h-4 text-primary" />;
                    })()}
                  </div>
                )}
              </div>
              <div>
                <Text variant="span" className="font-semibold text-primary">
                  {value.title}
                </Text>{" "}
                {value.text}
              </div>
            </motion.li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section
      id={sectionId}
      className="bg-gradient-to-b from-white/80 to-neutral-light/20 mx-auto py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Banner
            title={banners.top.title}
            description={banners.top.description}
            variant="primary"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-11/12 md:w-9/12 mx-auto text-gray-800 font-light text-lg leading-relaxed my-12 text-center"
        >
          <Text variant="span" className="font-semibold text-primary">
            {introText.part1}
          </Text>{" "}
          {introText.part2}{" "}
          <Text variant="span" className="font-semibold text-primary">
            {introText.part3}
          </Text>{" "}
          {introText.part4}{" "}
          <Text variant="span" className="font-semibold text-primary">
            {introText.part5}
          </Text>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 relative"
      >
        <Image
          src={image}
          alt={imageAlt}
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Banner
            title={banners.bottom.title}
            description={banners.bottom.description}
            variant="outlined"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-around items-stretch gap-6 p-4 md:p-8 text-left">
          {info.map((item, index) => (
            <InfoColumn
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
