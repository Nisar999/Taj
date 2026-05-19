'use client'

export default function Events() {
  const events = [
    {
      title: 'Annual Gala Dinner',
      date: 'June 15, 2024',
      description: 'An evening of elegance and celebration with our distinguished members.',
      category: 'Social',
    },
    {
      title: 'Wine & Dine Evening',
      date: 'June 22, 2024',
      description: 'Savor exquisite wines paired with gourmet cuisine.',
      category: 'Dining',
    },
    {
      title: 'Wellness Retreat',
      date: 'July 1, 2024',
      description: 'A rejuvenating experience focused on health and wellbeing.',
      category: 'Wellness',
    },
    {
      title: 'Cultural Performance',
      date: 'July 10, 2024',
      description: 'Experience captivating performances by acclaimed artists.',
      category: 'Culture',
    },
  ]

  return (
    <section id="events" className="py-20 bg-background/50 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join us for memorable moments and exceptional experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-foreground/5 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-primary font-semibold flex items-center gap-2">
                    📅 {event.date}
                  </p>
                </div>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold whitespace-nowrap">
                  {event.category}
                </span>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {event.description}
              </p>
              <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-background px-6 py-2 rounded font-semibold transition-all duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-background px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}
