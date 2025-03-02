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

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">75%</div>
            <p className="text-lg">of people never answer calls from unknown numbers.</p>
            <p className="mt-4 text-sm opacity-75">Based on a survey by Transaction Network Services. tnsi.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">£11.4B</div>
            <p className="text-lg">lost annually due to phone scams in the UK.</p>
            <p className="mt-4 text-sm opacity-75">According to a report by Cifas. cifas.org.uk</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3">500%</div>
            <p className="text-lg">increase in fraud attempts through calls and SMS in the last decade.</p>
            <p className="mt-4 text-sm opacity-75">Source: infobae.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

