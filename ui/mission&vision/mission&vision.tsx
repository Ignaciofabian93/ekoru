import Image from "next/image";
import Banner from "../banners/banner";

const image = "/missionIcons.webp";

const info = [
  {
    title: "Nuestra Misión",
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
          Porque el cambio no es una meta, es una forma de caminar distinto,
          todos los días.
        </span>
      </>
    ),
  },
  {
    title: "Nuestros Valores",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold text-primary">
            Creemos en el cuidado.
          </span>{" "}
          Por las personas, por las cosas, por el planeta que compartimos.
        </li>
        <li>
          <span className="font-semibold text-primary">
            Creemos en la confianza.
          </span>{" "}
          No estamos aquí para competir. Estamos aquí para construir comunidad.
        </li>
        <li>
          <span className="font-semibold text-primary">
            Creemos en la acción.
          </span>{" "}
          No venimos a decorar discursos. Venimos a hacer que pasen cosas.
        </li>
        <li>
          <span className="font-semibold text-primary">
            Creemos en la cercanía.
          </span>{" "}
          No hablamos como marca. Hablamos como tú. Y pensamos contigo.
        </li>
      </ul>
    ),
  },
];

const InfoColumn = ({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) => {
  return (
    <article className="flex-1 bg-white/70 p-4">
      <h4 className="text-2xl text-primary font-bold mb-2">{title}</h4>
      <div>{description}</div>
    </article>
  );
};

export default function MissionAndVision() {
  return (
    <section id="mission&vision" className="bg-white/80 mx-auto my-12">
      <div className="bg-white/80 max-w-5xl mx-auto">
        <Banner
          title="NO FUE UNA IDEA. FUE UNA INQUIETUD"
          description="Donde muchos vieron problemas, nosotros vimos una semilla"
        />
        <p className="w-11/12 md:w-8/12 mx-auto text-gray-800 font-light space-y-6 leading-relaxed my-12">
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
        </p>
      </div>
      <div className="mb-12">
        <Image
          src={image}
          alt="Icons representing our mission and vision"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <div className="bg-white/80 max-w-5xl mx-auto">
        <Banner
          title="QUE VIVIR EMPIECE POR LO QUE SIENTES"
          description="Cambiar cómo consumes, cambia cómo habitas."
          variant="outlined"
        />
        <div className="flex flex-col md:flex-row justify-around items-start gap-8 md:gap-4 p-4 md:p-8 text-left text-gray-800 font-light">
          {info.map((item, index) => (
            <InfoColumn
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
