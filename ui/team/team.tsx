import Image from "next/image";
import Banner from "../banners/banner";

const teamData = [
  {
    name: "Ignacio Rodríguez",
    description: "Mago de las teclas. Fan del café y de los bugs difíciles.",
    image: "/ignacio.webp",
    summary:
      "Ignacio es quien convierte nuestras locuras circulares en botones que sí funcionan, pantallas que sí cargan y experiencias que no te hacen odiar la tecnología. No solo desarrolla la app. La escucha, la prueba, la rompe… y la vuelve a armar mejor. Si EKORU fuera una bicicleta circular, Ignacio sería la cadena y también el que la engrasa.",
  },
  {
    name: "Jorge Conejeros",
    description:
      'Conector con propósito. Tiene mil notas con cosas que "podrían funcionar".',
    image: "/jorge.webp",
    summary:
      "Jorge es quien que no espera a tener todo resuelto para empezar. Propone ideas medio locas y aún así logra que tenga sentido. No le interesa liderar desde arriba, sino empujar desde al medio. Con más dudas que certezas y con más ganas que excusas. Si EKORU fuera una fogata, Jorge sería quien trae los primeros palitos, y quien reúne a todos.",
  },
  {
    name: "Joaquín Martinovich",
    description: "El arte de la síntesis.",
    image: "/joaquin.webp",
    summary:
      "Joaquín es quien toma la información más compleja y la transforma en algo comprensible para todos. Su habilidad para ver el panorama general y al mismo tiempo los detalles lo convierte en un miembro invaluable del equipo. Si EKORU fuera un libro, Joaquín sería el editor que asegura que cada palabra cuente.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-white/80 max-w-5xl mx-auto mt-12 mb-6 p-0 md:p-8"
    >
      <Banner
        title="UN EQUIPO PEQUEÑO. UNA INTENCIÓN ENORME"
        description="Un espacio que se construye con alma, no con cargos."
        variant="primary"
      />
      <div className="flex flex-wrap mt-8">
        {teamData.map((member) => (
          <div
            key={member.name}
            className="w-[90%] max-w-[380px] mx-auto m-4 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
          >
            <div className="relative mb-8 flex items-center justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="w-50 h-50 rounded-full object-contain relative z-10"
                style={{ objectPosition: "center" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-1 tracking-tight">
              {member.name}
            </h3>
            <p className="text-base text-gray-700 italic mb-2">
              {member.description}
            </p>
            <p className="text-sm text-gray-800 font-light leading-relaxed px-2">
              {member.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
