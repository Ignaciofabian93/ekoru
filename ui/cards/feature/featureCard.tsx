"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ShoppingCart, Leaf, Droplets } from "lucide-react";
import Image from "next/image";

type Product = {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  brand: string;
  condition: string;
  image: string;
  environmentalImpact: {
    co2Saved: number;
    waterSaved: number;
    materials: Array<{ type: string; percentage: number }>;
  };
};

type Props = {
  product: Product;
  index: number;
};

export default function ProductDemoCard({ product, index }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("es-CL").format(num);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[480px] sm:h-[500px] card-flip-perspective"
    >
      <div
        className={`card-flip-inner ${isFlipped ? "card-flip-flipped" : ""}`}
      >
        {/* Front Side - Product Info */}
        <div className="card-flip-front bg-white rounded-xl shadow-lg border border-primary/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
          <figure className="relative aspect-[4/3] bg-gray-100">
            {!imageError ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}

            {/* Condition Badge */}
            <span className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full capitalize shadow-md">
              {product.condition}
            </span>

            {/* Discount Badge */}
            {discount > 0 && (
              <span className="absolute top-2 left-2 bg-error text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                -{discount}%
              </span>
            )}

            {/* Flip Button */}
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="absolute top-2 right-2 bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full shadow-lg transition-all duration-200"
              aria-label="Ver impacto ambiental"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </figure>

          <div className="p-5">
            <header className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-xs truncate">
                {product.brand}
              </span>
            </header>

            <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800">
              {product.name}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>

            <footer className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">
                  ${formatNumber(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 text-sm line-through">
                    ${formatNumber(product.originalPrice)}
                  </span>
                )}
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white p-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </footer>
          </div>
        </div>

        {/* Back Side - Environmental Impact */}
        <div className="card-flip-back">
          <div className="py-5 px-6 w-full h-full flex flex-col overflow-y-auto scrollbar-hide">
            {/* Flip Button */}
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="absolute top-2 right-2 bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full shadow-lg transition-all duration-200 z-10"
              aria-label="Ver producto"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <h4 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-success" />
                Impacto Ambiental
              </h4>

              {/* CO2 and Water Savings */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-success/10 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Leaf className="w-4 h-4 text-success" />
                    <span className="text-xs text-gray-600">CO₂</span>
                  </div>
                  <p className="text-lg font-bold text-success">
                    {formatNumber(product.environmentalImpact.co2Saved)} kg
                  </p>
                </div>

                <div className="bg-info/10 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Droplets className="w-4 h-4 text-info" />
                    <span className="text-xs text-gray-600">Agua</span>
                  </div>
                  <p className="text-lg font-bold text-info">
                    {formatNumber(product.environmentalImpact.waterSaved)} L
                  </p>
                </div>
              </div>

              {/* Material Breakdown */}
              {product.environmentalImpact.materials.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-600 mb-2">
                    Materiales:
                  </p>
                  {product.environmentalImpact.materials.map(
                    (material, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-700 truncate">
                          {material.type}
                        </span>
                        <span className="font-semibold text-gray-800 ml-2">
                          {material.percentage.toFixed(1)}%
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Impact Message */}
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4">
                <p className="text-sm text-primary font-semibold text-center">
                  💚 Al comprar este producto de segunda mano, contribuyes a
                  reducir el impacto ambiental
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
