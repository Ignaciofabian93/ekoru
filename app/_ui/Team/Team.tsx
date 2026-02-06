"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Code, Lightbulb, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Banner } from "@ekoru/ui";
import { useTeamTranslations } from "./useTeamTranslations";

const teamImages = ["/ignacio.webp", "/jorge.webp"];
const teamIcons = [Code, Lightbulb];
const teamColors = [
  "from-primary/20 to-secondary/20",
  "from-info/20 to-primary-light/20",
];
const teamSocials = [
  {
    github: "https://github.com/Ignaciofabian93",
    linkedin: "https://www.linkedin.com/in/ignacio-rodríguez-rulas/",
  },
  {
    linkedin:
      "https://www.linkedin.com/in/jorge-andrés-conejeros-rulas-358242215/",
  },
];

export default function Team() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const { sectionId, banner, members, ui } = useTeamTranslations();

  return (
    <section
      id={sectionId}
      className="bg-gradient-to-b from-white/80 to-neutral-light/30 max-w-6xl mx-auto p-4 md:p-8 rounded-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Banner
          title={banner.title}
          description={banner.description}
          variant="primary"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-12 px-4">
        {members.map((member, index) => {
          const Icon = teamIcons[index];
          const socials = teamSocials[index];

          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ perspective: "1000px" }}
              className="w-full max-w-[380px]"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => setFlipped(flipped === index ? null : index)}
                className="cursor-pointer"
              >
                {/* Card */}
                <div className="w-full h-[480px]">
                  <motion.div
                    animate={{ rotateY: flipped === index ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full relative"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front of card */}
                    <div
                      className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${teamColors[index]}`}
                      />
                      <div className="relative h-full bg-white/90 backdrop-blur p-8 flex flex-col items-center text-center">
                        {/* Icon badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.3 + index * 0.15,
                            type: "spring",
                          }}
                          className="absolute top-4 right-4 p-2 bg-primary/10 rounded-full"
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </motion.div>

                        {/* Image with gradient border */}
                        <div className="relative mb-6 mt-4">
                          <div
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${teamColors[index]} blur-md`}
                          />
                          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <Image
                              src={teamImages[index]}
                              alt={member.name}
                              width={160}
                              height={160}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-1 tracking-tight">
                          {member.name}
                        </h3>

                        <p className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wide">
                          {member.role}
                        </p>

                        <p className="text-base text-gray-700 italic mb-4 px-2">
                          {member.description}
                        </p>

                        {/* Click indicator */}
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mt-auto text-xs text-gray-500 flex items-center gap-1"
                        >
                          <span>{ui.clickToSeeMore}</span>
                          <span className="text-primary">→</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div
                      className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${teamColors[index]}`}
                      />
                      <div className="relative h-full bg-white/95 backdrop-blur p-8 flex flex-col">
                        <h3 className="text-xl font-bold text-primary mb-4">
                          {ui.about} {member.name.split(" ")[0]}
                        </h3>

                        <p className="text-sm text-gray-800 font-light leading-relaxed flex-grow">
                          {member.summary}
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3 mt-6 justify-center">
                          {socials.github && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                            >
                              <Link
                                href={socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-5 h-5 text-primary" />
                              </Link>
                            </motion.button>
                          )}
                          {socials.linkedin && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                            >
                              <Link
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Linkedin className="w-5 h-5 text-primary" />
                              </Link>
                            </motion.button>
                          )}
                        </div>

                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mt-4 text-xs text-gray-500 text-center"
                        >
                          {ui.clickToGoBack}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
