export default function Facilities() {
  const facilities = [
    {
      name: 'Fine Dining Restaurant',
      description: 'Gourmet cuisine prepared by world-class chefs in an elegant setting.',
      icon: '🍽️',
    },
    {
      name: 'State-of-the-art Gym',
      description: 'Equipped with the latest fitness technology and expert trainers.',
      icon: '💪',
    },
    {
      name: 'Luxurious Spa',
      description: 'Rejuvenate and relax with our premium wellness treatments.',
      icon: '🧖',
    },
    {
      name: 'Library & Lounge',
      description: 'A serene space to read, work, and connect with fellow members.',
      icon: '📚',
    },
    {
      name: 'Ballroom & Event Spaces',
      description: 'Host your special occasions in our magnificent halls.',
      icon: '🎉',
    },
    {
      name: 'Gaming & Billiards',
      description: 'Premium gaming facilities and table games for entertainment.',
      icon: '🎱',
    },
    {
      name: 'Concierge Service',
      description: 'Dedicated staff available to assist with your every need.',
      icon: '🎩',
    },
    {
      name: 'Swimming Pool',
      description: 'Olympic-sized pool with professional lifeguard services.',
      icon: '🏊',
    },
  ]

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need for comfort, wellness, and enjoyment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-foreground/5 to-accent/5 border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">
                {facility.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {facility.name}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
