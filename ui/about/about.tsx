"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Recycle, Heart, Users } from "lucide-react";
import Banner from "../banners/banner";

const sectionImage = "/app-demo.webp";

const highlights = [
  { icon: Recycle, text: "Compra, vende e intercambia", color: "text-primary" },
  { icon: Leaf, text: "Repara y recicla", color: "text-secondary" },
  { icon: Heart, text: "Consume consciente", color: "text-secondary" },
  { icon: Users, text: "Construye comunidad", color: "text-primary" },
];

export default function About() {
  return (
    <section
      id="who-we-are"
      className="bg-gradient-to-b from-white/80 to-neutral-light/30 max-w-6xl mx-auto my-16 p-0 md:p-8 rounded-2xl"
    >
      <Banner
        title="EKORU ES DONDE EMPIEZA EL CAMBIO"
        description="Desde lo cotidiano, desde lo que tienes, desde ti"
        variant="primary"
      />

      <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 py-12 gap-12">
        {/* Image with hover effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={sectionImage}
              alt="Celulares"
              width={800}
              height={600}
              className="w-auto h-[280px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Text content with stagger animations */}
        <div className="w-11/12 md:w-1/2 text-left text-gray-800 font-light space-y-6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
          >
            ¿Qué es EKORU?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="leading-relaxed text-lg"
          >
            <span className="font-semibold text-primary">EKORU</span> es mucho
            más que una app: es una nueva forma de habitar el consumo. Una
            plataforma que te permite{" "}
            <span className="font-semibold text-primary">
              comprar, vender, intercambiar, reparar y reciclar
            </span>{" "}
            de forma consciente, práctica y entretenida. Creemos que lo que ya
            tienes vale, que lo que otros sueltan puede volver a florecer, y que
            cada decisión cotidiana puede sumar a un planeta más sano y una
            comunidad más despierta.
          </motion.p>

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
                <span className="text-sm font-medium text-gray-700">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="leading-relaxed text-lg"
          >
            Aquí no solo conectas con objetos,{" "}
            <span className="font-semibold text-primary">
              conectas con historias
            </span>
            . No solo reduces residuos,{" "}
            <span className="font-semibold text-primary">das nuevas vidas</span>
            . Y no solo haces impacto,{" "}
            <span className="font-semibold text-primary">lo compartes</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="leading-relaxed italic text-xl font-medium text-primary-dark"
          >
            EKORU es circularidad, es economía, es comunidad, y no giramos en
            círculos,{" "}
            <span className="font-bold text-primary">avanzamos en espiral</span>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
}
