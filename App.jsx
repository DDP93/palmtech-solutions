import { useState } from 'react';

const services = [
  {
    title: 'Business Automation',
    description:
      'Automate repetitive workflows, approvals, scheduling, invoicing, and reporting systems for businesses and schools.',
  },
  {
    title: 'AI Communication Systems',
    description:
      'Deploy AI-powered WhatsApp, email, and web communication systems to improve customer and parent engagement.',
  },
  {
    title: 'Web & App Development',
    description:
      'Modern responsive websites and custom web applications built for growth, speed, and scalability.',
  },
  {
    title: 'School Technology Solutions',
    description:
      'Digital school systems for registrations, fee management, learner communication, and administration.',
  },
];

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-black text-lg">
        P
      </span>
      <span className="font-bold tracking-tight text-lg">
        PalmTech<span className="text-cyan-300"> Solutions</span>
      </span>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-black text-white font-sans selection:bg-cyan-400 selection:text-black">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-black/95 px-6 py-4 space-y-3 text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-1.5 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold"
            >
              Get Started
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center rounded-full border border-cyan-400/40 px-4 py-2 text-sm mb-6 bg-cyan-400/10">
              PALMTECH SOLUTIONS • AUTOMATION SPECIALISTS
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Smarter Automation For Modern Businesses
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              PalmTech Solutions helps businesses, schools, and organizations
              automate operations using AI-powered systems, web technologies,
              and digital transformation solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-6 border border-cyan-400/20">
                  <h3 className="text-3xl font-bold">AI</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Smart automation and AI integrations
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <h3 className="text-3xl font-bold">24/7</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Automated communication systems
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-6 border border-white/10 col-span-2">
                  <h3 className="text-2xl font-bold mb-3">Automation Services</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We specialize in automating business processes, customer
                    communication, data handling, school administration, and
                    workflow systems to help organizations work smarter, faster,
                    and more efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What We Specialize In</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            PalmTech Solutions delivers digital automation services designed to
            improve productivity, communication, and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-5 flex items-center justify-center text-cyan-300 font-bold text-xl">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-white/10 bg-white/5 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose PalmTech Solutions?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We combine modern technology, automation, and AI systems to help
              businesses reduce manual work, save time, and increase efficiency.
              Our solutions are tailored for schools, startups, local businesses,
              and government-focused projects.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>✔ Automation-focused digital systems</li>
              <li>✔ AI-driven customer communication</li>
              <li>✔ Mobile-friendly responsive designs</li>
              <li>✔ Scalable solutions for growth</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-10">
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              To help businesses across South Africa embrace smart automation, AI
              technologies, and digital innovation without being left behind in
              the modern technology revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready To Automate Your Business?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's talk about how PalmTech Solutions can streamline your operations
            with AI-powered automation and modern digital systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@palmtechsolutions.co.za"
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            Update the email and WhatsApp number in <span className="font-mono text-gray-400">src/App.jsx</span> with your real contact details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-gray-400">
        <h3 className="text-2xl font-bold text-white mb-2">PALMTECH SOLUTIONS</h3>
        <p>Automation • AI Solutions • Digital Transformation • Web Development</p>
        <p className="text-sm text-gray-600 mt-4">
          © {new Date().getFullYear()} PalmTech Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
