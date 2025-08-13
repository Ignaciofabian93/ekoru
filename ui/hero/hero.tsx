"use client";
import Image from "next/image";
import MainButton from "../buttons/mainButton";

const ekoruLogo = "/brand/logo.webp";
const slogan = "La nueva forma de circular";
const welcome = "¡Bienvenidos!";
const heroImage = "/hero-image.jpg";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full text-center px-4 py-12 overflow-hidden">
      {/* Responsive background image */}
      <Image
        src={heroImage}
        alt="Hero Image"
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        <Image
          src={ekoruLogo}
          alt="Ekoru Logo"
          className="w-auto h-[40px] mb-2"
          width={800}
          height={400}
          priority
        />
        <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">
          {slogan}
        </h3>
        <h2 className="text-2xl mb-6 text-white drop-shadow">{welcome}</h2>
        <div className="w-[250px]">
          <MainButton
            text="Comenzar"
            variant="primary"
            onClick={() => {
              window.location.href = "https://app.ekoru.cl";
            }}
          />
        </div>
      </div>
    </section>
  );
}
