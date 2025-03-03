import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <div className="bg-white p-4 rounded-lg inline-block mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VOIGUARD%20sin%20bg-s8CqROEpj5ACWgmYe2L40m7f5b5KKR.png"
                alt="VoiGuard Logo"
                width={220}
                height={63}
                className="mx-auto lg:mx-0"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Answer with confidence.</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary-light mb-6">
              VoiGuard tells you who's calling, when, and why.
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Receive a verified notification before every important call. No more guessing, no more uncertainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#signup" className="cta-button-primary">
                Sign up for early access
              </Link>
              <Link href="#how-it-works" className="cta-button-secondary">
                How it works
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              <Image
                src="/images/void-guard.webp"
                alt="VoiGuard App Demo"
                width={300}
                height={600}
                className=""
              />
              <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-sm font-medium">Verified Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

