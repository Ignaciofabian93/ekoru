"use client";
import Button from "@/components/buttons/button";
import Form from "@/components/contact/form";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import ScreenWrapper from "@/components/screen/screenWrapper";
import Image from "next/image";

const InfoSection = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id}>
      <div className="w-full h-full px-4 py-6 flex flex-col items-start justify-between">{children}</div>
    </section>
  );
};

const SectionTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="w-full max-w-[1100px] mx-auto border-[4px] border-primary rounded-[11px] flex flex-col items-center justify-center px-4 py-4 text-center mb-8 backdrop-blur-2xl">
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="w-[10px] h-[10px] rounded-full bg-primary" />
        <h3 className="text-sm md:text-lg lg:text-xl font-semibold uppercase">{title}</h3>
        <div className="w-[10px] h-[10px] rounded-full bg-primary" />
      </div>
      <p className="text-xs md:text-base lg:text-md">{subTitle}</p>
    </div>
  );
};

const AboutSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center justify-center mb-8">
      <h2 className="text-3xl text-primary font-semibold mb-4">{title}</h2>
      <div className="w-full text-base flex flex-col items-center justify-center text-center">{children}</div>
    </div>
  );
};

const WorkerInfo = ({
  photo,
  name,
  description,
  subtitle,
  phrase,
  text,
  analogy,
}: {
  photo: string;
  name: string;
  description: string;
  subtitle: string;
  phrase: string;
  text: string;
  analogy: string;
}) => {
  return (
    <div className="w-full max-w-[400px] h-[650px] flex flex-col items-center justify-start px-4 py-8">
      <div className="w-full flex items-center justify-center mb-4">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-full object-cover"
          />
        ) : (
          <div className="w-[200px] h-[200px] rounded-full bg-primary" />
        )}
      </div>
      <div className="w-full text-left mb-4">
        <h5 className="text-xl font-semibold">{name}</h5>
        <span className="text-sm">{description}</span>
      </div>
      <div className="w-full text-left">
        <h6 className="text-base font-semibold">{subtitle}</h6>
        <span className="text-sm italic">&quot;{phrase}&quot;</span>
        <p className="mt-4 text-base">{text}</p>
        <p className="text-base">
          Si <strong>EKORU</strong> {analogy}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <ScreenWrapper>
      <Hero />
      <InfoSection id="ekoru">
        <SectionTitle
          title="No fue una idea. Fue una inquietud"
          subTitle="Donde muchos vieron problemas, nosotros vimos una semilla"
        />
        <div className="w-full max-w-[1100px] h-full flex flex-col justify-center items-center mx-auto gap-4 text-center">
          <p>
            <strong>EKORU no nació de una idea brillante, nació de una incomodidad real.</strong> Y de la convicción de
            que sí hay otra forma de vivir. Basta de tanto consumo, tanto desecho, tanta desconexión.
          </p>
          <p>
            No estamos aquí para venderte cosas, estamos para ayudarte a
            <strong>soltar, intercambiar y dar segundas vidas.</strong>
            Porque lo que ya no usas, puede inspirar una nueva historia.
          </p>
          <p>
            <strong>EKORU es una comunidad</strong> que no espera que el mundo cambie… lo cambia. No somos perfectos, y
            no nos interesa serlo, pero cada persona que se suma enciende una chispa. Y juntas,
            <strong>encendemos el futuro.</strong>
          </p>
        </div>
      </InfoSection>
      <InfoSection id="about">
        <SectionTitle
          title="Soñamos con una economía que empiece por el corazón"
          subTitle="Cambiar lo que haces, cambia lo que eres"
        />
        <AboutSection title="Nuestra Misión">
          <p>Inspirar y facilitar una vida circular.</p>
          <p>Transformar el consumo en conciencia, y lo cotidiano en impacto.</p>
          <p>
            Queremos que cada persona, producto y decisión sume a un planeta más sano y una comunidad más despierta.
          </p>
        </AboutSection>
        <AboutSection title="Nuestra Visión">
          <p>Creemos en un mundo donde soltar es transformar.</p>
          <p>Donde lo que ya existe vuelve a tener valor.</p>
          <p>Hacer de la sostenibilidad un hábito diario, colectivo, circular… y profundamente humano.</p>
          <p>En EKORU, somos el puente; el cambio, lo hacemos juntos.</p>
        </AboutSection>
        <AboutSection title="Valores que nos mueven">
          <p>
            <strong>Cuidado:</strong> Por las personas, por los objetos, por el planeta.
          </p>
          <p>
            <strong>Confianza:</strong> somos comunidad, no competencia.
          </p>
          <p>
            <strong>Acción:</strong> no queremos solo ideas lindas, queremos cambios reales.
          </p>
          <p>
            <strong>Cercanía:</strong> hablamos como tú, pensamos contigo.
          </p>
        </AboutSection>
        <SectionTitle
          title="Un equipo pequeño. Una intención enorme"
          subTitle="Un espacio que se construye con alma, no con cargos"
        />
        <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center justify-center">
          <div className="w-full text-center">
            <p>Somos un equipo pequeño aún, pero con una certeza:</p>
            <p>
              <strong>El cambio empieza con lo que ya tenemos.</strong>
            </p>
            <p>
              Algunos ven basura, nosotros vemos historias. Algunos ven objetos, nosotros vemos puentes. Algunos ven una
              app, nosotros vemos comunidad.
            </p>
            <p>Esto es EKORU.</p>
            <p>
              Y estos somos nosotros, los que le están metiendo alma, tiempo y pasión para que esto circule de verdad.
            </p>
          </div>
          <div className="w-full flex flex-wrap items-center justify-evenly">
            <WorkerInfo
              photo="/images/brandIcon.webp"
              name="Jorge Conejeros"
              description="Tiene mil notas con cosas que 'podrían funcionar'."
              subtitle="Conector con propósito"
              phrase="Aún no lideramos el cambio, pero lo empujamos con lo que hay"
              text="Jorge es quien que no espera a tener todo resuelto para empezar. Propone ideas medio locas y aún así logra que tenga sentido. No le interesa liderar desde arriba, sino empujar desde al medio. Con más dudas que certezas y con más ganas que excusas."
              analogy="fuera una fogata, Jorge sería quien trae los primeros palitos, y quien reúne a todos"
            />
            <WorkerInfo
              photo="/images/brandIcon.webp"
              name="Ignacio Rodríguez"
              description="Fan del café y de los bugs difíciles"
              subtitle="Mago de las teclas"
              phrase="Solo un deploy más y me acuesto (mentira)"
              text="Ignacio es quien convierte nuestras locuras circulares en botones que sí funcionan, pantallas que sí cargan y experiencias que no te hacen odiar la tecnología. No solo desarrolla la app. La escucha, la prueba, la rompe… y la vuelve a armar mejor."
              analogy="fuera una bicicleta circular, Ignacio sería la cadena y también el que la engrasa."
            />
            <WorkerInfo
              photo="/images/brandIcon.webp"
              name="Sebastián Muñoz"
              description="Habla con compost como si fueran colegas."
              subtitle="Embajador de los árboles"
              phrase="Le gustan los datos duros y las hojas blanditas"
              text="Sebastián es el radar verde del equipo: detecta incoherencias a kilómetros y aterriza cada decisión en lo que realmente importa: el planeta y las personas. Convierte métricas en impacto, ideas en acciones, y residuos en oportunidades."
              analogy="fuera una compostera, él sería el que sabe qué sí y qué no va adentro."
            />
          </div>
        </div>
      </InfoSection>
      <InfoSection id="services">
        <SectionTitle title="App EKORU" subTitle="Una app que crece junto contigo" />
        <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="mb-8 w-1/3">
            <Image src={"/images/app.png"} alt="app ekoru" width={200} height={400} className="w-full h-full" />
          </div>
          <div className="text-center">
            <p>Nuestra App es una plataforma web en donde tu actividad circular no pasa desapercibida.</p>
            <p>Se parte de la comunidad y ayúdanos a mejorar esta red según tus necesidades.</p>
            <p>¡Te esperamos!</p>
            <div className="mt-8 flex items-center justify-center">
              <Button text="Ir a la App" as="link" href="https://app.ekoru.cl" variant="primary" size="md" />
            </div>
          </div>
        </div>
      </InfoSection>
      <InfoSection id="contact">
        <SectionTitle
          title="Contáctanos"
          subTitle="Si tienes preguntas no dudes en escribirnos. Tu opinión nos importa"
        />
        <Form />
      </InfoSection>
      <Footer />
    </ScreenWrapper>
  );
}
