import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-9xl font-bold text-brand-red">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-lg text-gray-400">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-dark text-white">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-900">
            <Link href="/#contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
        <div className="pt-8 border-t border-gray-800 mt-8">
          <p className="text-sm text-gray-400 mb-4">Need help? Contact us:</p>
          <a href="mailto:info@remotedieseltuning.com" className="text-brand-red hover:underline">
            info@remotedieseltuning.com
          </a>
        </div>
      </div>
    </div>
  )
}
