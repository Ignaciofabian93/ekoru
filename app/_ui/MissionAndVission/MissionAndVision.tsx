"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Handshake,
  Zap,
  Users2,
  LucideIcon,
} from "lucide-react";
import { Banner } from "@ekoru/ui";

const image = "/missionIcons.webp";

const valueIcons = [Heart, Handshake, Zap, Users2];

const info = [
  {
    title: "Nuestra Misión",
    icon: Target,
    description: (
      <>
        Inspiramos otra forma de consumir: más consciente, más circular y mucho
        más humana. Estamos aquí para{" "}
        <span className="font-semibold text-primary">
          transformar lo cotidiano en impacto
        </span>
        , lo usado en tesoro, y lo individual en comunidad. Queremos que{" "}
        <span className="font-semibold text-primary">
          cada persona, cada objeto y cada decisión sume a un planeta más sano
        </span>{" "}
        y una forma de vivir que se parezca más a lo que sentimos.
      </>
    ),
  },
  {
    title: "Nuestra Visión",
    icon: Eye,
    description: (
      <>
        Creemos en un mundo donde{" "}
        <span className="font-semibold text-primary">
          soltar también es cuidar
        </span>
        . Donde lo que ya existe puede volver a brillar.{" "}
        <span className="font-semibold text-primary">
          Soñamos con hacer de la sostenibilidad un hábito diario, colectivo y
          circular.
        </span>{" "}
        No como una carga, sino como una forma más liviana, coherente y viva de
        habitar. En EKORU no queremos hacerlo por ti, queremos hacerlo contigo.
        <span className="font-semibold text-primary">
          {" "}
          Porque el cambio no es una meta, es una forma de caminar distinto,
          todos los días.
        </span>
      </>
    ),
  },
  {
    title: "Nuestros Valores",
    icon: Heart,
    description: (
      <ul className="space-y-3">
        {[
          {
            title: "Creemos en el cuidado.",
            text: "Por las personas, por las cosas, por el planeta que compartimos.",
          },
          {
            title: "Creemos en la confianza.",
            text: "No estamos aquí para competir. Estamos aquí para construir comunidad.",
          },
          {
            title: "Creemos en la acción.",
            text: "No venimos a decorar discursos. Venimos a hacer que pasen cosas.",
          },
          {
            title: "Creemos en la cercanía.",
            text: "No hablamos como marca. Hablamos como tú. Y pensamos contigo.",
          },
        ].map((value, idx) => (
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
              <span className="font-semibold text-primary">{value.title}</span>{" "}
              {value.text}
            </div>
          </motion.li>
        ))}
      </ul>
    ),
  },
];

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
  return (
    <section
      id="mission&vision"
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
            title="NO FUE UNA IDEA. FUE UNA INQUIETUD"
            description="Donde muchos vieron problemas, nosotros vimos una semilla"
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
          <span className="font-semibold text-primary">
            EKORU no nació de una idea brillante, nació de una incomodidad real,
          </span>{" "}
          y de la convicción de que sí hay otra forma de vivir. Basta de tanto
          consumo, tanto desecho, tanta desconexión.{" "}
          <span className="font-semibold text-primary">
            EKORU es una comunidad
          </span>{" "}
          que no espera que el mundo cambie… lo cambia. No somos perfectos, y no
          nos interesa serlo, pero cada persona que se suma enciende una chispa.
          Y juntas,{" "}
          <span className="font-semibold text-primary">
            encendemos el futuro.
          </span>
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
          alt="Icons representing our mission and vision"
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
            title="QUE VIVIR EMPIECE POR LO QUE SIENTES"
            description="Cambiar cómo consumes, cambia cómo habitas."
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
