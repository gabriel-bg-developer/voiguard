import { Users, Building2, BarChart3, ShieldCheck } from "lucide-react"

export default function ForWhoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Who is VoiGuard for?</h2>
          <p className="section-subtitle">
            The future of communication starts here. Whether you're a user, a business, or a security expert, VoiGuard
            is designed to reinvent the way you connect—with confidence, clarity, and no uncertainty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">For Individuals</h3>
            <p className="text-gray-dark mb-4">
              <span className="font-medium">Stop ignoring important calls.</span>
            </p>
            <p className="text-gray-dark">
              VoiGuard ensures you never miss key calls from banks, healthcare providers, recruiters, or service
              companies. You'll know who is calling, why, and when—before your phone even rings.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">For Businesses</h3>
            <p className="text-gray-dark mb-4">
              <span className="font-medium">Break the silence, connect with confidence.</span>
            </p>
            <p className="text-gray-dark">
              Customers ignore unknown numbers, but not verified and trusted calls. With VoiGuard, make sure your calls
              get answered, not blocked.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">For Analytics & Insights</h3>
            <p className="text-gray-dark mb-4">
              <span className="font-medium">Turn calls into valuable data.</span>
            </p>
            <p className="text-gray-dark">
              Access real-time summaries, trends, and insights to enhance customer experience and service quality. Every
              call tells a story—make sure you're listening.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">For Security</h3>
            <p className="text-gray-dark mb-4">
              <span className="font-medium">Stop fraud before it happens.</span>
            </p>
            <p className="text-gray-dark">
              VoiGuard protects users from scams, fake calls, and phone fraud with advanced verification technology.
              Ensure secure communications and build trust in every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

