export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mblgdavn"
      method="POST"
      className="space-y-4 bg-gray-900 p-6 rounded-lg border border-gray-800"
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="John"
            required
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Smith"
            required
            aria-required="true"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="john.smith@example.com"
          required
          aria-required="true"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="(555) 123-4567"
          required
          aria-required="true"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="projectType"
          className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
          aria-required="true"
        >
          <option value="">Select project type</option>
          <option value="Whole-Home Luxury Remodel">Whole-Home Luxury Remodel</option>
          <option value="Signature Kitchen & Bath">Signature Kitchen & Bath</option>
          <option value="Commercial Office Transformation">Commercial Office Transformation</option>
          <option value="Short-Term Rental Luxe Package">Short-Term Rental Luxe Package</option>
          <option value="Land & Residential Development">Land & Residential Development</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          className="flex min-h-[120px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about your project..."
          required
          aria-required="true"
        />
      </div>

      {/* Hidden field for form name */}
      <input type="hidden" name="_subject" value="New Contact Form Submission - PS Premier Construction" />

      {/* Redirect after submission - optional */}
      <input type="hidden" name="_next" value="https://pspremierconstruction.com/thank-you" />

      <button
        type="submit"
        className="w-full h-10 px-4 py-2 rounded-md bg-red-700 text-white font-medium hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 animate-pulse hover:animate-none"
        aria-label="Submit contact form"
      >
        Submit Request
      </button>
    </form>
  )
}
