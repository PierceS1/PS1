import { Star, MapPin, Quote } from "lucide-react"

type Review = {
  name: string
  location: string
  truck: string
  rating: number
  body: string
}

const reviews: Review[] = [
  {
    name: "Cody R.",
    location: "Lubbock, TX",
    truck: "2015 Ram 2500 6.7L Cummins",
    rating: 5,
    body: "Mailed in my ECU on a Monday, had it back by the weekend. Tow tune is night and day — EGTs stay in check pulling my gooseneck loaded. Smoothest my truck has ever driven.",
  },
  {
    name: "Marcus T.",
    location: "Bakersfield, CA",
    truck: "2011 Ford F-250 6.7L Powerstroke",
    rating: 5,
    body: "Did the whole thing remotely with EZ LYNK. Walked me through pulling the stock file and had my custom tune loaded the same day. Throttle response is crisp and I picked up real mileage.",
  },
  {
    name: "Dylan K.",
    location: "Fargo, ND",
    truck: "2006 Chevy 2500 LBZ Duramax",
    rating: 5,
    body: "Been to two local shops that couldn't sort out my shift issues. These guys nailed the trans tune on the first revision. No dyno trip, no wasted weekend. Highly recommend.",
  },
  {
    name: "Austin P.",
    location: "Knoxville, TN",
    truck: "2019 GMC 3500 L5P Duramax",
    rating: 5,
    body: "Economy tune actually delivered. Picked up a few MPG on my daily commute and it still has the power when I need it. Communication was quick every step of the way.",
  },
  {
    name: "Jesse M.",
    location: "Scranton, PA",
    truck: "2004 Ram 2500 5.9L Cummins",
    rating: 5,
    body: "Old 24V finally runs how it should. They tuned around my mods perfectly and answered every question I had. Revisions were included and turned around fast.",
  },
  {
    name: "Travis L.",
    location: "Gainesville, FL",
    truck: "2017 Ford F-350 6.7L Powerstroke",
    rating: 5,
    body: "Performance tune woke this truck up. Big power but still transmission-safe like they promised. Worth every penny and I never had to leave my driveway.",
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "fill-brand-red text-brand-red" : "text-gray-600"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function CustomerReviews() {
  return (
    <section id="reviews" className="w-full py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-red/20 text-brand-red border border-brand-red/40 mb-4">
            Trusted Coast to Coast
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
            Truck owners across the country
          </h2>
          <p className="text-gray-300 text-lg text-pretty">
            From Texas to Pennsylvania, drivers trust us with their diesels. Here&apos;s what they have to say.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={`${review.name}-${review.location}`}
              className="flex flex-col p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-brand-red transition-colors"
            >
              <Quote className="size-8 text-brand-red/40 mb-4" aria-hidden="true" />
              <Stars rating={review.rating} />
              <p className="text-gray-300 mt-4 mb-6 flex-1 leading-relaxed">{review.body}</p>
              <div className="pt-4 border-t border-gray-800">
                <div className="font-bold text-white">{review.name}</div>
                <div className="flex items-center gap-1.5 text-sm text-brand-red mt-1">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  {review.location}
                </div>
                <div className="text-xs text-gray-500 mt-1">{review.truck}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
