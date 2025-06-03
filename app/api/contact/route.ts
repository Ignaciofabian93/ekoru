import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com", // O tu SMTP
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contacto Ekoru" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // tu correo personal o el de la empresa
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
  }
}
