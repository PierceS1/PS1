import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-9xl font-bold text-brand-amber">404</h1>
        <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
        <div className="pt-8 border-t border-border mt-8">
          <p className="text-sm text-muted-foreground mb-4">Need help? Contact us:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="tel:5129680169" className="text-brand-amber hover:underline">
              (512) 968-0169
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a href="mailto:info@pspremierconstruction.com" className="text-brand-amber hover:underline">
              info@pspremierconstruction.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
