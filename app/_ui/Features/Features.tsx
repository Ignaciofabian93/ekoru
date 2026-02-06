"use client";
import { motion } from "motion/react";
import { Banner } from "@ekoru/ui";

// Mock product data
const demoProducts = [
  {
    name: "iPhone 12 Pro Reacondicionado",
    description:
      "Excelente estado, batería al 95%, incluye cargador y caja original",
    price: 450000,
    originalPrice: 750000,
    brand: "Apple",
    condition: "Como nuevo",
    image: "/products/iphone12.webp",
    environmentalImpact: {
      co2Saved: 47.3,
      waterSaved: 2840.5,
      materials: [
        { type: "Aluminio", percentage: 45.2 },
        { type: "Vidrio", percentage: 28.7 },
        { type: "Plástico", percentage: 15.3 },
        { type: "Cobre", percentage: 10.8 },
      ],
    },
  },
  {
    name: "MacBook Air M1 Segunda Mano",
    description:
      "Perfecto para trabajo y estudio, 8GB RAM, 256GB SSD, sin rayones",
    price: 680000,
    originalPrice: 1200000,
    brand: "Apple",
    condition: "Excelente",
    image: "/products/macbook.webp",
    environmentalImpact: {
      co2Saved: 156.8,
      waterSaved: 8920.3,
      materials: [
        { type: "Aluminio", percentage: 52.5 },
        { type: "Vidrio", percentage: 18.2 },
        { type: "Plástico", percentage: 16.8 },
        { type: "Metales raros", percentage: 12.5 },
      ],
    },
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-white via-primary-light/20 to-white mx-auto py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Banner
          title="Ejemplos de Productos en EKORU"
          description="Así se verán los productos en nuestra plataforma."
          variant="secondary"
        />

        {/* Explanation Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mt-8 mb-12"
        >
          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Al comprar productos de segunda mano en EKORU, no solo estás
              ahorrando dinero,
              <span className="font-semibold text-primary">
                {" "}
                estás tomando una decisión consciente
              </span>{" "}
              que beneficia al planeta y a tu bolsillo.
            </p>
            <p>
              Cada producto viene con información detallada sobre su
              <span className="font-semibold text-success">
                {" "}
                impacto ambiental positivo
              </span>
              : cuánto CO₂ evitas emitir, cuánta agua ahorras y qué materiales
              estás reutilizando.
            </p>
          </div>
        </motion.div>

        {/* Product Demo Cards - Fully Responsive */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 sm:gap-8 lg:gap-10 mt-14">
          {/* {demoProducts.map((product, index) => (
            <ProductDemoCard
              key={product.name}
              product={product}
              index={index}
            />
          ))} */}
        </div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl p-6 sm:p-8 border-2 border-primary/10 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
              🌍 Impacto de Comprar Segunda Mano
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl sm:text-4xl font-bold text-success mb-2">
                  204 kg
                </p>
                <p className="text-sm text-gray-600">
                  CO₂ ahorrado en estos 2 productos
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl sm:text-4xl font-bold text-info mb-2">
                  11,760 L
                </p>
                <p className="text-sm text-gray-600">Agua ahorrada</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  100%
                </p>
                <p className="text-sm text-gray-600">Vida útil extendida</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
