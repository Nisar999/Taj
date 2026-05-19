export default function Features() {
  const features = [
    {
      icon: '🏆',
      title: 'Premium Membership',
      description: 'Exclusive benefits and privileges reserved for our valued members.',
    },
    {
      icon: '🎭',
      title: 'Cultural Events',
      description: 'Curated experiences celebrating arts, culture, and traditions.',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Build meaningful connections with like-minded individuals.',
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Exceptional service and attention to detail in everything we do.',
    },
    {
      icon: '🎪',
      title: 'Entertainment',
      description: 'World-class entertainment and social gatherings throughout the year.',
    },
    {
      icon: '🏅',
      title: 'Prestige',
      description: 'Be part of an elite community known for its distinction.',
    },
  ]

  return (
    <section className="py-20 bg-background/50 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">The Taj</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the difference with our premium offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-primary/5 to-primary-dark/5 border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
