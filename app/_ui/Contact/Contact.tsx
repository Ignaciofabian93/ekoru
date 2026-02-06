"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, Send, CheckCircle } from "lucide-react";
import useAlert from "@/hooks/useAlert";
import { Banner, Button, Textarea, TextInput } from "@ekoru/ui";

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
  const [success, setSuccess] = useState(false);
  const { notify, notifyError } = useAlert();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
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
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success state after animation
        setTimeout(() => setSuccess(false), 3000);
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
      className="relative max-w-5xl mx-auto px-4 md:px-10 py-16 bg-gradient-to-b from-white/80 to-neutral-light/30 rounded-2xl my-16"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Banner
            title="HABLEMOS COMO COMUNIDAD"
            description="Pregúntanos, propón, súmate o desahógate... ¡todo suma!"
            variant="outlined"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-800 font-light text-lg my-8 text-center max-w-2xl mx-auto"
        >
          Para ideas que suman, preguntas que inspiran o mensajes que quieren
          ser escuchados. Completa tus datos y prometemos responderte con
          atención, cariño y circularidad.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-[540px] mx-auto p-6 md:p-10 rounded-2xl shadow-2xl bg-gradient-to-br from-white via-white to-neutral-light/20 backdrop-blur border-2 border-primary/10 flex flex-col gap-6"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <CheckCircle className="w-20 h-20 text-primary mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600 text-center">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <TextInput
                    label="¿Cuál es tu nombre?"
                    name="name"
                    value={formData.name}
                    placeholder="Ingresa tu nombre"
                    onChange={(e) =>
                      handleChange(e as React.ChangeEvent<HTMLInputElement>)
                    }
                    type="text"
                    leftIcon={UserRound}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <TextInput
                    label="¿Dónde podemos contestar tu mensaje?"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="ejemplo@correo.com"
                    onChange={(e) =>
                      handleChange(e as React.ChangeEvent<HTMLInputElement>)
                    }
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Textarea
                    label="Cuéntanos, lo que escribas lo leemos con ganas"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center justify-center gap-2 mt-4"
                >
                  <Button
                    rightIcon={Send}
                    className="w-full max-w-xs"
                    isLoading={loading}
                    loadingText="Enviando..."
                    type="submit"
                  >
                    Enviar
                  </Button>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-gray-600 text-center italic mt-4"
                  >
                    Gracias por compartir. Esto también es circular.
                  </motion.span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
      />
    </section>
  );
}
