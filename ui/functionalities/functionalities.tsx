import Image from "next/image";
import Banner from "../banners/banner";
import Carousel from "../carousel/carousel";

const impactImage = "/impactImage.webp";

export default function Functionalities() {
  return (
    <section id="features" className="bg-white/80 mx-auto my-12">
      <Banner
        title="TODO ESTO TAMBIÉN PUEDE CIRCULAR"
        description="Haz scroll, toca y descubre lo que podrías estar cambiando sin darte cuenta."
        variant="ghost"
      />
      <div>
        <Image
          src={impactImage}
          alt="Impact"
          width={500}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="p-0 md:p-8 mx-auto bg-gradient-to-b from-primary to-white">
        <div className="max-w-5xl mx-auto pt-4">
          <Banner
            title="FUNCIONALIDADES QUE TRANSFORMAN"
            description="Acciones simples, impacto real. Cada clic, cada trueque, cada decisión… suma."
            variant="secondary"
          />
          <Carousel />
        </div>
      </div>
    </section>
  );
}
