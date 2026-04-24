import Link from "next/link"
import { Gauge, Truck, Mail, Phone, Wrench, Zap, ShieldCheck, Clock, CheckCircle } from "lucide-react"
import { ImprovedHeader } from "@/components/improved-header"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import { ContactForm } from "@/app/components/contact-form"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ImprovedHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-gray-900 via-black to-black border-b border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-red/20 text-brand-red border border-brand-red/40">
                Nationwide Mail-In & Remote Tuning
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Custom Diesel Tuning, <span className="text-brand-red">Shipped to Your Driveway</span>
              </h1>
              <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl">
                Dyno-proven ECU calibrations for Cummins, Powerstroke, and Duramax trucks. Built by experienced
                diesel calibrators — no dyno trip required.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center pt-4">
                <AnimatedCTAButton href="#contact">Request a Tune</AnimatedCTAButton>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-semibold transition-all duration-200 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-black text-white"
                >
                  View Services
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-6 text-sm text-gray-400">
                <span className="flex items-center gap-2"><CheckCircle className="size-4 text-brand-red" /> Cummins · Powerstroke · Duramax</span>
                <span className="flex items-center gap-2"><CheckCircle className="size-4 text-brand-red" /> Performance & economy tunes</span>
                <span className="flex items-center gap-2"><CheckCircle className="size-4 text-brand-red" /> Fast turnaround</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="w-full py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Tuning that respects your truck.</h2>
                <p className="text-gray-300 text-lg mb-4">
                  Every calibration is built for your specific truck, modifications, and how you actually drive.
                  We tune for drivability first — smooth shifts, clean throttle response, and reliable EGTs — then
                  layer in the power.
                </p>
                <p className="text-gray-300 text-lg">
                  Whether you're towing heavy, chasing fuel economy, or pushing big numbers on the dyno, we have
                  a calibration strategy that fits.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                  <Gauge className="size-8 text-brand-red mb-3" />
                  <div className="text-3xl font-bold">+150 HP</div>
                  <p className="text-gray-400 text-sm mt-1">typical gains on tow/daily calibrations</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                  <Truck className="size-8 text-brand-red mb-3" />
                  <div className="text-3xl font-bold">1000+</div>
                  <p className="text-gray-400 text-sm mt-1">trucks tuned across the country</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                  <Clock className="size-8 text-brand-red mb-3" />
                  <div className="text-3xl font-bold">24–48 hr</div>
                  <p className="text-gray-400 text-sm mt-1">average file turnaround</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                  <ShieldCheck className="size-8 text-brand-red mb-3" />
                  <div className="text-3xl font-bold">Support</div>
                  <p className="text-gray-400 text-sm mt-1">revisions included after delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="w-full py-16 md:py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Services</h2>
              <p className="text-gray-300 text-lg">
                Calibrations built for how you use your truck — from daily drivers to heavy tow rigs to
                competition builds.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Performance Tunes",
                  body: "Multi-level power calibrations with clean fueling, controlled EGTs, and transmission-safe torque management.",
                },
                {
                  icon: Truck,
                  title: "Tow & Daily Tunes",
                  body: "Smooth drivability and better mileage for daily duty, plus dedicated tow calibrations for fifth-wheel and gooseneck loads.",
                },
                {
                  icon: Gauge,
                  title: "Economy Tunes",
                  body: "MPG-focused calibrations targeting improved fuel economy without sacrificing drivability.",
                },
                {
                  icon: Wrench,
                  title: "Transmission Tuning",
                  body: "Shift schedules, line pressure, and torque converter lockup dialed in to match your engine calibration.",
                },
                {
                  icon: ShieldCheck,
                  title: "Diagnostics & Support",
                  body: "Help sorting out existing issues, DTC review, and revisions to your tune based on real-world feedback.",
                },
                {
                  icon: Mail,
                  title: "Remote & Mail-In",
                  body: "Ship us your ECU or send data files — we handle the calibration and send it right back. No dyno trip required.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="p-6 rounded-lg bg-black border border-gray-800 hover:border-brand-red transition-colors">
                  <Icon className="size-10 text-brand-red mb-4" />
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="w-full py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Trucks we tune</h2>
              <p className="text-gray-300 text-lg">
                Deep calibration experience across the big three diesel platforms.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Cummins", body: "5.9L 24V, 6.7L common rail — Ram 2500/3500 from 2003 through current." },
                { name: "Powerstroke", body: "6.0L, 6.4L, 6.7L — Ford Super Duty from 2003 through current." },
                { name: "Duramax", body: "LB7, LLY, LBZ, LMM, LML, L5P — Chevy/GMC 2500/3500 from 2001 through current." },
              ].map((p) => (
                <div key={p.name} className="p-8 rounded-lg bg-gray-900 border border-gray-800 text-center">
                  <h3 className="text-2xl font-bold text-brand-red mb-3">{p.name}</h3>
                  <p className="text-gray-300">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="w-full py-16 md:py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">How remote tuning works</h2>
              <p className="text-gray-300 text-lg">Three straightforward steps, start to finish.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Tell us about your truck", body: "Year, engine, mods, and goals. We'll confirm the right calibration strategy and required hardware." },
                { step: "02", title: "Send the file or ECU", body: "Pull the stock file with supported hardware (EFILive, HP Tuners, EZ LYNK, etc.) or mail in your ECU." },
                { step: "03", title: "Drive and refine", body: "We deliver your custom tune, you flash and drive. Feedback and revisions included." },
              ].map((s) => (
                <div key={s.step} className="p-8 rounded-lg bg-black border border-gray-800">
                  <div className="text-5xl font-bold text-brand-red mb-3">{s.step}</div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a tune</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Tell us about your truck and what you're trying to accomplish. We'll reply with a quote and
                  the next steps.
                </p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <a href="mailto:info@remotedieseltuning.com" className="text-gray-400 hover:text-brand-red">
                        info@remotedieseltuning.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-400">By appointment — use the form to get started</div>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="font-bold text-white">REMOTE DIESEL TUNING</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Custom ECU Calibrations</div>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Remote Diesel Tuning. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <StickyContactButton />
    </div>
  )
}
