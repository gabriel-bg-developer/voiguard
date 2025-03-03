// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json(); // Obtener el email del cuerpo de la solicitud

  // Configurar el transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Tu correo de Gmail desde .env
      pass: process.env.EMAIL_PASS, // Tu contraseña o App Password desde .env
    },
  });

  // Configurar el contenido del email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "gquiroz.alvprojects@gmail.com", // Reemplaza con tu correo real
    subject: "Nuevo email desde el voiguard",
    text: `Alguien ingresó este email en el formulario: ${email}`,
  };

  try {
    // Enviar el email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email enviado con éxito" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error enviando email:", error);
    return new Response(JSON.stringify({ message: "Error al enviar el email" }), {
      status: 500,
    });
  }
}