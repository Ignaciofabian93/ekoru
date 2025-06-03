"use client";
import { useState } from "react";
import clsx from "clsx";
import Button from "../buttons/button";

type Input = React.ComponentProps<"input"> & {};

type TextArea = React.ComponentProps<"textarea"> & {};

const TextArea = ({ value, onChange, ...rest }: TextArea) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      {...rest}
      className={clsx(
        "w-full px-4 py-2 rounded-[11px] border-[2px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
        "mt-2 mb-8",
        "placeholder:text-placeholder",
        "placeholder:italic",
        "text-primary",
        "resize-none"
      )}
    />
  );
};

const Input = ({ value, onChange, ...rest }: Input) => {
  return (
    <input
      value={value}
      onChange={onChange}
      {...rest}
      className={clsx(
        "w-full px-4 py-2 rounded-[11px] border-[2px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
        "my-2",
        "placeholder:text-placeholder",
        "placeholder:italic",
        "text-primary"
      )}
    />
  );
};

type Form = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Mensaje enviado");
    } else {
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <form className="w-full max-w-[550px] mx-auto flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Nombre" onChange={handleForm} />
      <Input type="email" name="email" placeholder="Email" onChange={handleForm} />
      <TextArea name="message" placeholder="Mensaje" onChange={handleForm} />
      <Button text="Enviar" type="submit" variant="primary" />
    </form>
  );
}
