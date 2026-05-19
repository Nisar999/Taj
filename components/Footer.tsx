import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="TUC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-primary">TUC</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              The Taj United Club - Where elegance meets community and tradition embraces excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Facilities', 'Events', 'Membership'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms & Conditions', 'FAQs', 'Contact Us', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">📍</span>
                <span>123 Grand Avenue, City Center</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">📞</span>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✉️</span>
                <a href="mailto:info@taj.club" className="hover:text-primary transition-colors duration-200">
                  info@taj.club
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary hover:text-background transition-all duration-200 text-foreground hover:text-background text-lg"
                aria-label={social}
              >
                {social === 'Facebook' && '📘'}
                {social === 'Instagram' && '📷'}
                {social === 'Twitter' && '𝕏'}
                {social === 'LinkedIn' && '💼'}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-primary/20 pt-8">
          <p className="text-foreground/70 text-sm">
            © {currentYear} The Taj United Club. All rights reserved. | Crafted with elegance and excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
