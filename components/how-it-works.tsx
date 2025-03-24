import { Bell, ShieldCheck, MessageSquare, Headphones, Clock, FileText } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">How does it work?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="feature-card">
            <div className="feature-icon">
              <Bell size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Pre-call notifications</h3>
            <p className="text-gray-dark">
              No more unknown numbers. Before receiving a call, VoiGuard sends you a notification telling you:
            </p>
            <ul className="mt-3 space-y-2 text-gray-dark">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Who will call you.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                When they will call.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                The reason for the call.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>A security code to verify its authenticity.
              </li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Fraud Protection</h3>
            <ul className="space-y-2 text-gray-dark">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                If the call comes from a verified company, you will receive a pre-call notification.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                If it's not in our system, VoiGuard will alert you so you can think twice before answering.
              </li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">VoiText: Verified Messages Within the App</h3>
            <p className="text-gray-dark">
              Forget about fake SMS with suspicious links. All messages in VoiText come from verified companies that
              work with us.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Headphones size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Live Captions</h3>
            <ul className="space-y-2 text-gray-dark">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Receiving a call from another country and don't understand the language?
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Need assistance to hear the conversation?
              </li>
            </ul>
            <p className="mt-3 text-gray-dark">
              VoiGuard translates and transcribes your calls in real time, ensuring nothing gets lost in communication.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Smart Call History</h3>
            <p className="text-gray-dark">Never lose track of your calls. VoiGuard allows you to:</p>
            <ul className="mt-3 space-y-2 text-gray-dark">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Review the calls you've received.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                See pending calls.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Check the context of past conversations.
              </li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Smart Forms</h3>
            <p className="text-gray-dark">
              Fill out forms during or after your calls without wasting time. From confirming an appointment to
              accepting terms and conditions in seconds.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-primary mb-6 max-w-3xl mx-auto">
            VoiGuard transforms every call into a safe, clear, and risk-free experience. Leave the fear of answering
            behind. Join the new era of secure calls.
          </p>
          <a href="#signup" className="cta-button-primary inline-block">
            Sign up for early access
          </a>
        </div>
      </div>
    </section>
  )
}

