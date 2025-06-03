"use client";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "../buttons/button";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}: React.ComponentProps<"input"> & { label: string }) => (
  <div className="w-full mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className={clsx(
        "w-full px-4 py-2 rounded-[11px] border-2 border-gray-300",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
        "placeholder:italic text-primary"
      )}
    />
  </div>
);

const TextArea = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: React.ComponentProps<"textarea"> & { label: string }) => (
  <div className="w-full mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={5}
      className={clsx(
        "w-full px-4 py-2 rounded-[11px] border-2 border-gray-300",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
        "placeholder:italic text-primary resize-none"
      )}
    />
  </div>
);

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-[550px] mx-auto p-6 rounded-2xl shadow-md bg-white/70 backdrop-blur-sm border border-gray-200"
    >
      <Input
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
        required
      />
      <Input
        label="Correo electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ejemplo@correo.com"
        required
      />
      <TextArea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="¿En qué podemos ayudarte?"
        required
      />

      {status === "success" && <p className="text-green-600 text-sm mt-2 mb-4">✅ ¡Mensaje enviado con éxito!</p>}
      {status === "error" && <p className="text-red-500 text-sm mt-2 mb-4">❌ Hubo un error al enviar el mensaje.</p>}

      <div className="flex justify-center">
        <Button
          text={loading ? "Enviando..." : "Enviar"}
          type="submit"
          variant="primary"
          disabled={loading}
          className={clsx({ "opacity-50 cursor-not-allowed": loading })}
        />
      </div>
    </motion.form>
  );
}
