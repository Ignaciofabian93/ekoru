import Image from "next/image";
import Banner from "../banners/banner";

const sectionImage = "/phone.jpg";

export default function About() {
  return (
    <section
      id="who-we-are"
      className="bg-white/80 max-w-5xl mx-auto my-12 p-0 md:p-8"
    >
      <Banner
        title="EKORU ES DONDE EMPIEZA EL CAMBIO"
        description="Desde lo cotidiano, desde lo que tienes, desde ti"
        variant="outlined"
      />
      <div className="w-full flex flex-col md:flex-row items-start justify-center px-4 py-8 gap-8">
        <div className="w-1/2 flex justify-center mx-auto">
          <Image
            src={sectionImage}
            alt="Celulares"
            width={800}
            height={600}
            className="w-auto h-[260px] md:h-[400px] object-cover mb-6 md:mb-0"
          />
        </div>
        <div className="w-11/12 md:w-1/2 text-left text-gray-800 font-light space-y-6 mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            ¿Qué es EKORU?
          </h2>
          <p className="text-lg leading-relaxed">
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
          </p>
          <p className="text-lg leading-relaxed">
            Aquí no solo conectas con objetos,{" "}
            <span className="font-semibold text-primary">
              conectas con historias
            </span>
            . No solo reduces residuos,{" "}
            <span className="font-semibold text-primary">das nuevas vidas</span>
            . Y no solo haces impacto,{" "}
            <span className="font-semibold text-primary">lo compartes</span>.
          </p>
          <p className="text-lg leading-relaxed italic">
            EKORU es circularidad, es economía, es comunidad, y no giramos en
            círculos,{" "}
            <span className="font-semibold text-primary">
              avanzamos en espiral
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
