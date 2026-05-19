export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Our Club</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A Legacy of Excellence and Community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* History Card */}
          <div className="group bg-gradient-to-br from-foreground/5 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-primary">📚</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Heritage</h3>
            <p className="text-foreground/70 leading-relaxed">
              Founded with a vision to create a sanctuary of excellence, 
              The Taj United Club has been a cornerstone of community 
              and tradition for decades.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-foreground/5 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-primary">🎯</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-foreground/70 leading-relaxed">
              To provide our members with exceptional facilities, meaningful 
              social connections, and unforgettable experiences in an 
              environment of elegance and respect.
            </p>
          </div>

          {/* Values Card */}
          <div className="group bg-gradient-to-br from-foreground/5 to-primary/5 border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-primary">✨</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-foreground/70 leading-relaxed">
              Excellence in service, integrity in relationships, and 
              commitment to creating a welcoming community where every 
              member feels valued.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
