import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email template for admin notification
const getAdminEmailTemplate = (
  name: string,
  email: string,
  message: string
) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #71b64a 0%, #9bc53d 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; opacity: 0.95; font-size: 14px;">EKORU - Economía Circular</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.6;">
                Has recibido un nuevo mensaje a través del formulario de contacto:
              </p>
              
              <!-- Contact Info Card -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px; background-color: #f9fafb; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #71b64a; font-size: 14px;">Nombre:</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0;">
                          <p style="margin: 0; color: #1f2937; font-size: 16px;">${name}</p>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #71b64a; font-size: 14px;">Email:</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0;">
                          <p style="margin: 0;">
                            <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 16px;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #71b64a; font-size: 14px;">Mensaje:</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0;">
                          <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Quick Action Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="text-align: center; padding: 20px 0;">
                    <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #71b64a 0%, #9bc53d 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 2px 4px rgba(113, 182, 74, 0.3);">
                      Responder a ${name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 13px;">
                Este mensaje fue enviado desde el formulario de contacto de <strong>EKORU</strong>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} EKORU - Economía Circular
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Email template for user confirmation
const getUserConfirmationTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por contactarnos</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #71b64a 0%, #9bc53d 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">¡Gracias por contactarnos!</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; opacity: 0.95; font-size: 14px;">EKORU - Economía Circular</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #1f2937; font-size: 18px; font-weight: 600;">
                Hola ${name} 👋
              </p>
              
              <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Hemos recibido tu mensaje y queremos agradecerte por ponerte en contacto con nosotros.
              </p>
              
              <p style="margin: 0 0 30px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Nuestro equipo revisará tu mensaje y te responderá lo antes posible, generalmente dentro de las próximas 24-48 horas.
              </p>
              
              <!-- Info Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 8px; border: 1px solid #9bc53d;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 10px 0; color: #71b64a; font-weight: 600; font-size: 15px;">
                      💚 Mientras tanto...
                    </p>
                    <p style="margin: 0 0 15px 0; color: #2d5016; font-size: 14px; line-height: 1.6;">
                      Te invitamos a conocer más sobre nuestra visión de economía circular y cómo estamos transformando la manera en que consumimos en nuestro Instagram.
                    </p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="text-align: center; padding-top: 10px;">
                          <a href="https://www.instagram.com/ekoru_chile/" target="_blank" style="display: inline-block; padding: 10px 24px; background: linear-gradient(135deg, #E1306C 0%, #C13584 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px;">
                            📸 Síguenos en Instagram
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 15px 0; color: #1f2937; font-weight: 600; font-size: 14px;">
                Equipo EKORU
              </p>
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 13px;">
                La nueva forma de circular
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} EKORU - Economía Circular
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Todos los campos son requeridos" },
      { status: 400 }
    );
  }
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: `"Contacto EKORU" <${emailUser?.toLowerCase()}>`,
      to: emailTo,
      subject: `Nuevo mensaje de ${name}`,
      html: getAdminEmailTemplate(name, email, message),
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"EKORU - Economía Circular" <${emailUser?.toLowerCase()}>`,
      to: email,
      subject: "Gracias por contactarnos - EKORU",
      html: getUserConfirmationTemplate(name),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
