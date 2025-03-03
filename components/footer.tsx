"use client"; // Marca el componente como Client Component

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa los estilos de react-toastify

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Obtener el email del formulario
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email"); // "email" debe coincidir con el atributo `name` del input

    try {
      // Enviar el email a la API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        throw new Error("Error al enviar el email");
      }
    } catch (error) {
      toast.error("Failed to send email", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Guessing. Start Connecting.
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Every call should be an opportunity, not a risk. Welcome to the new
            era of trusted communication.
          </p>

          <div id="signup" className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email" // Agregar el atributo `name` para que FormData lo detecte
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Sign up now"}
              </button>
            </form>
            <p className="text-sm mt-3 opacity-75">
              Be part of the change. Join the secure calling revolution.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-10 mt-10"></div>
      </div>

      <div className="bg-white text-primary py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="p-3 rounded-lg inline-block mb-4">
              <Image
                src="/images/Voiguard-logo.png"
                alt="VoiGuard Logo"
                width={160}
                height={46}
                className="mx-auto md:mx-0"
              />
            </div>
            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} VoiGuard. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="#" className="text-gray-700 hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-700 hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
}