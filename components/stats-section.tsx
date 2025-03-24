export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Statistics</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Data that demonstrates the importance of secure and verified communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Primer item */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">70%</div>
            <p className="text-lg">of people never answer calls from unknown numbers, a study said.</p>
            {/* <p className="mt-4 text-sm opacity-75">Based on a survey by Transaction Network Services. tnsi.com</p> */}
          </div>

          {/* Segundo item */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">£807B</div>
            <p className="text-lg">billion, according to the Global Anti-Scam Alliance, represents the staggering annual losses from scams across the globe.</p>
            {/* <p className="mt-4 text-sm opacity-75">According to a report by Cifas. cifas.org.uk</p> */}
          </div>

          {/* Tercer item */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">500%</div>
            <p className="text-lg">increase in fraud attempts through calls and SMS in the last decade.</p>
            {/* <p className="mt-4 text-sm opacity-75">Source: infobae.com</p> */}
          </div>

          {/* Cuarto item */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">£65B</div>
            <p className="text-lg">billion is lost annually by UK companies due to unanswered calls.</p>
            {/* <p className="mt-4 text-sm opacity-75">Source: infobae.com</p> */}
          </div>
        </div>

      </div>
    </section>
  )
}


