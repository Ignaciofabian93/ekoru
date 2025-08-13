"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import Banner from "../banners/banner";
import Input from "../inputs/input";
import Textarea from "../inputs/textarea";
import MainButton from "../buttons/mainButton";
import useAlert from "@/hooks/useAlert";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { notify, notifyError } = useAlert();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        notify("¡Mensaje enviado con éxito!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        notifyError("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError("Hubo un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative max-w-4xl mx-auto px-4 md:px-10 py-12 bg-white/80"
    >
      <div className="relative z-10">
        <Banner
          title="HABLEMOS COMO COMUNIDAD"
          description="Pregúntanos, propón, súmate o desahógate... ¡todo suma!"
          variant="outlined"
        />
        <p className="text-gray-800 font-light my-8 text-center">
          Para ideas que suman, preguntas que inspiran o mensajes que quieren
          ser escuchados. Completa tus datos y prometemos responderte con
          atención, cariño y circularidad.
        </p>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-[500px] mx-auto p-4 md:p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur border border-gray-100 flex flex-col gap-6"
        >
          <Input
            label="¿Cuál es tu nombre?"
            name="name"
            value={formData.name}
            placeholder="Ingresa tu nombre"
            onChange={(e) =>
              handleChange(e as React.ChangeEvent<HTMLInputElement>)
            }
            type="text"
            icon={UserRound}
          />
          <Input
            label="¿Dónde podemos contestar tu mensaje?"
            name="email"
            type="email"
            value={formData.email}
            placeholder="ejemplo@correo.com"
            onChange={(e) =>
              handleChange(e as React.ChangeEvent<HTMLInputElement>)
            }
          />
          <Textarea
            label="Cuéntanos, lo que escribas lo leemos con ganas"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            required
          />

          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <MainButton
              text="Enviar"
              className="w-full max-w-xs"
              isLoading={loading}
              loadingText="Enviando..."
              type="submit"
            />
            <span className="text-xs text-gray-600 text-center italic mt-4">
              Gracias por compartir. Esto también es circular.
            </span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
