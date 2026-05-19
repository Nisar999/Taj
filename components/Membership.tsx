export default function Membership() {
  const plans = [
    {
      name: 'Silver',
      price: '$199',
      period: 'per month',
      features: [
        'Access to all facilities',
        'Monthly events',
        'Dining discounts (10%)',
        'Basic wellness programs',
        'Community access',
      ],
      highlight: false,
    },
    {
      name: 'Gold',
      price: '$399',
      period: 'per month',
      features: [
        'Priority facility access',
        'Unlimited events',
        'Dining discounts (20%)',
        'Advanced wellness programs',
        'Guest privileges',
        'Concierge service',
      ],
      highlight: true,
    },
    {
      name: 'Platinum',
      price: '$699',
      period: 'per month',
      features: [
        'VIP facility access',
        'Exclusive events',
        'Dining discounts (30%)',
        'Premium wellness programs',
        'Unlimited guests',
        '24/7 concierge service',
        'Personal trainer access',
      ],
      highlight: false,
    },
  ]

  return (
    <section id="membership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan to match your lifestyle and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg transition-all duration-300 transform hover:scale-105 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-primary to-primary-dark border-2 border-primary shadow-2xl shadow-primary/30 p-8 relative scale-105'
                  : 'bg-gradient-to-br from-foreground/5 to-primary/5 border-2 border-primary/20 hover:border-primary/50 p-8'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-background text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3 className={`text-3xl font-bold mb-2 ${plan.highlight ? 'text-background' : 'text-foreground'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-background' : 'text-primary'}`}>
                  {plan.price}
                </span>
                <span className={plan.highlight ? 'text-background/70' : 'text-foreground/70'}>
                  {plan.period}
                </span>
              </div>

              <ul className={`space-y-4 mb-8 ${plan.highlight ? 'text-background' : 'text-foreground/70'}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={`text-lg ${plan.highlight ? 'text-background' : 'text-primary'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-background text-primary hover:bg-accent'
                    : 'bg-primary hover:bg-primary-dark text-background'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary-dark/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Have Questions About Membership?
          </h3>
          <p className="text-foreground/70 mb-6">
            Our membership team is here to help. Contact us to learn more about how to join The Taj United Club.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-background px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
