import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">PS Premier Construction</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-brand-amber">
                Home
              </Link>
              <Link href="/#about" className="text-white hover:text-brand-amber">
                About
              </Link>
              <Link href="/#services" className="text-white hover:text-brand-amber">
                Services
              </Link>
              <Link href="/testimonials" className="text-white hover:text-brand-amber">
                Testimonials
              </Link>
              <Link href="/#contact" className="text-white hover:text-brand-amber">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="max-w-3xl mx-auto text-gray-300 mb-12">
              Hear what our clients have to say about their experience working with PS Premier Construction.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 text-brand-amber fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-gray-300 mb-4">
                  "PS Premier Construction transformed our outdated home into a modern masterpiece. Their attention to
                  detail exceeded our expectations."
                </blockquote>
                <p className="font-semibold text-brand-amber">Michael Rodriguez</p>
                <p className="text-sm text-gray-400">Austin, TX</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 text-brand-amber fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-gray-300 mb-4">
                  "We couldn't be happier with our kitchen renovation. The design team understood our vision perfectly,
                  and the craftsmanship is impeccable."
                </blockquote>
                <p className="font-semibold text-brand-amber">Jennifer Chang</p>
                <p className="text-sm text-gray-400">Austin, TX</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 text-brand-amber fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-gray-300 mb-4">
                  "Our office space was completely transformed by PS Premier Construction. The premium upgrades have
                  impressed our clients and created a more productive environment."
                </blockquote>
                <p className="font-semibold text-brand-amber">David Wilson</p>
                <p className="text-sm text-gray-400">Cedar Park, TX</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} PS Premier Construction. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                Facebook
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
