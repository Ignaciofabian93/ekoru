"use client";
import { motion } from "framer-motion";
import { Recycle, Users, BarChart, ShieldCheck } from "lucide-react";
import Button from "@/components/buttons/button";
import Form from "@/components/contact/form";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import ScreenWrapper from "@/components/screen/screenWrapper";
import Image from "next/image";

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md">
    <div className="text-primary">{icon}</div>
    <p className="text-main text-sm font-medium">{text}</p>
  </div>
);

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full px-4 py-12 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">¿Qué puedes hacer con nuestra App?</h2>
        <p className="mt-2 text-main">Funciones pensadas para ayudarte en tu camino hacia un futuro más sustentable</p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
        >
          <motion.div variants={item}>
            <Feature icon={<Recycle />} text="Registra materiales reciclados" />
          </motion.div>
          <motion.div variants={item}>
            <Feature icon={<Users />} text="Conecta con recicladores locales" />
          </motion.div>
          <motion.div variants={item}>
            <Feature icon={<BarChart />} text="Visualiza tu impacto ambiental" />
          </motion.div>
          <motion.div variants={item}>
            <Feature icon={<ShieldCheck />} text="Datos seguros y privados" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const InfoSection = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="w-full py-12 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 items-center justify-between">{children}</div>
    </section>
  );
};

const SectionTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1100px] mx-auto border-[4px] bg-white border-primary rounded-[12px] flex flex-col items-center justify-center px-6 py-6 text-center mb-8 shadow-md"
    >
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="w-[12px] h-[12px] rounded-full bg-primary" />
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wide">{title}</h3>
        <div className="w-[12px] h-[12px] rounded-full bg-primary" />
      </div>
      <p className="text-sm md:text-base text-muted-foreground font-medium">{subTitle}</p>
    </motion.div>
  );
};

const AboutSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[1000px] mx-auto flex flex-col items-center justify-center text-center gap-4 mb-12"
    >
      <h2 className="text-2xl lg:text-3xl text-primary font-bold mb-2">{title}</h2>
      <div className="text-base text-main leading-relaxed space-y-2">{children}</div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-[360px] h-[600px] bg-white rounded-xl shadow-lg p-6 mb-8 flex flex-col items-center text-left hover:shadow-2xl transition-all duration-300"
    >
      <Image
        src={photo || "/default-avatar.png"}
        alt={name}
        width={180}
        height={180}
        className="rounded-full object-cover mb-4"
      />
      <h5 className="text-xl font-semibold text-primary mb-1">{name}</h5>
      <p className="text-sm text-muted-foreground mb-2 italic">{description}</p>
      <h6 className="text-base font-semibold mt-4 mb-1">{subtitle}</h6>
      <p className="text-sm italic text-gray-500 mb-2">&quot;{phrase}&quot;</p>
      <p className="text-sm mb-2 leading-relaxed">{text}</p>
      <p className="text-sm">
        Si <strong>EKORU</strong> {analogy}
      </p>
    </motion.div>
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
          <div className="w-full flex flex-wrap items-center justify-evenly gap-8 mt-8">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-evenly gap-4"
        >
          <div className="mb-8 w-1/3">
            <Image src={"/images/app.png"} alt="app ekoru" width={200} height={400} className="w-full h-full" />
          </div>
          <div className="text-center">
            <FeaturesSection />
            <p className="max-w-2xl">
              EKORU es tu aliada en el camino hacia una economía circular más conectada. Nuestra plataforma web te
              permite registrar, visualizar y potenciar tu impacto ambiental de manera fácil y transparente.
            </p>
            <p className="max-w-2xl">
              Únete a una comunidad comprometida con el cambio, comparte tus logros y ayúdanos a construir un ecosistema
              más sostenible.
            </p>
            <p className="max-w-2xl">¡Tú haces la diferencia! Sé parte del movimiento EKORU.</p>

            <div className="mt-8 flex items-center justify-center">
              <Button
                text="¡Regístrate gratis y comienza hoy!"
                as="link"
                href="https://app.ekoru.cl"
                variant="primary"
                size="lg"
                className="hover:scale-105"
                newTab
              />
            </div>
          </div>
        </motion.div>
      </InfoSection>
      <InfoSection id="contact">
        <SectionTitle
          title="Contáctanos"
          subTitle="Si tienes preguntas no dudes en escribirnos. Tu opinión nos importa"
        />
        <p className="text-center text-lg max-w-2xl mx-auto mb-6 text-main">
          ¿Tienes dudas, sugerencias o simplemente quieres saludar? ¡Nos encanta escucharte! Completa el siguiente
          formulario y te responderemos lo antes posible.
        </p>
        <Form />
      </InfoSection>
      <Footer />
    </ScreenWrapper>
  );
}
