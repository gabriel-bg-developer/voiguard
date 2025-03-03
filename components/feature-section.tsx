import { Clock } from "lucide-react"
import Image from "next/image"

export default function FeatureSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Real-Time Context</h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Have you spoken with this company before? What was your last conversation about? During the call, access:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="feature-icon">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Previous Interactions</h3>
              <p className="text-gray-dark mb-6">
                Access a complete history of your previous interactions with the company calling you. Never forget where
                you left off again.
              </p>

              <div className="border-t border-gray-light pt-6">
                <h4 className="text-lg font-medium mb-3 text-primary">Key information for better communication</h4>
                <ul className="space-y-3 text-gray-dark">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    Previous interactions with the company
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    Key information for better communication
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              <Image
                src="/images/voiguard-context.webp"
                alt="VoiGuard Real-Time Context"
                width={300}
                height={600}
                className=""
              />
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Active Context</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

