import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Guessing. Start Connecting.</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Every call should be an opportunity, not a risk. Welcome to the new era of trusted communication.
          </p>

          <div id="signup" className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Sign up now
              </button>
            </form>
            <p className="text-sm mt-3 opacity-75">Be part of the change. Join the secure calling revolution.</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="bg-white p-3 rounded-lg inline-block mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VOIGUARD%20sin%20bg-s8CqROEpj5ACWgmYe2L40m7f5b5KKR.png"
                  alt="VoiGuard Logo"
                  width={160}
                  height={46}
                  className="mx-auto md:mx-0"
                />
              </div>
              <p className="text-sm opacity-75">© {new Date().getFullYear()} VoiGuard. All rights reserved.</p>
            </div>

            <div className="flex gap-8">
              <Link href="#" className="hover:text-accent transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

