import React from 'react';
import { Star, MapPin, Users, Bed, Bath, Home, Calendar, ExternalLink, ShieldCheck, Sparkles, Coffee, Wifi, Tv } from 'lucide-react';

const AIRBNB_URL = "https://www.airbnb.com/rooms/1038646434083956823";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
      {/* Top Banner / Navbar */}
      <header className="sticky top-0 z-50 bg-stone-900/90 backdrop-blur-md text-stone-100 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Home className="w-7 h-7 text-amber-400" />
            <span className="text-xl font-serif font-bold tracking-wide">Oregon Haus</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities</a>
            <a href="#location" className="hover:text-amber-400 transition-colors">Location</a>
          </nav>
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-medium px-5 py-2.5 rounded-full shadow-lg hover:shadow-rose-900/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Book on Airbnb</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-stone-900 text-white py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>★ 4.95 Superhost Listing in Dayton, OH</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-100 leading-tight">
              Historic Charm Meets <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-amber-400">
                Modern Luxury
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-300 leading-relaxed font-light">
              Welcome to Oregon Haus. Originally built as Dayton’s first German Methodist Church, 
              this newly renovated historic estate offers an unforgettable retreat in the heart of the Oregon District.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 text-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Reserve Your Stay</span>
              </a>
              <a
                href="#specs"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold px-8 py-4 rounded-xl border border-stone-700 transition-all text-lg"
              >
                <span>Explore Property</span>
              </a>
            </div>
          </div>
        </section>

        {/* Property Quick Specs */}
        <section id="specs" className="-mt-10 relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 border-r last:border-0 border-stone-100 pr-2">
              <Bed className="w-6 h-6 mx-auto text-amber-600 mb-2" />
              <div className="text-2xl font-bold text-stone-900">6 Bedrooms</div>
              <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">9 Beds Total</div>
            </div>

            <div className="space-y-1 border-r last:border-0 border-stone-100 pr-2">
              <Bath className="w-6 h-6 mx-auto text-amber-600 mb-2" />
              <div className="text-2xl font-bold text-stone-900">6 Bathrooms</div>
              <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Full Luxury Baths</div>
            </div>

            <div className="space-y-1 border-r last:border-0 border-stone-100 pr-2">
              <Users className="w-6 h-6 mx-auto text-amber-600 mb-2" />
              <div className="text-2xl font-bold text-stone-900">Large Groups</div>
              <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Family & Business</div>
            </div>

            <div className="space-y-1">
              <MapPin className="w-6 h-6 mx-auto text-amber-600 mb-2" />
              <div className="text-2xl font-bold text-stone-900">Oregon District</div>
              <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Dayton, Ohio</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              A One-of-a-Kind Historic Sanctuary
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Step into architectural history. Oregon Haus preserves its classic church grandeur with soaring ceilings and ornate details, seamlessly paired with contemporary luxury furnishings, entertainment spaces, and premium amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-6">
            <div className="bg-stone-100/70 rounded-2xl p-8 border border-stone-200 space-y-4 hover:shadow-md transition-shadow">
              <Sparkles className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-stone-900">Architectural Heritage</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Experience vaulted spaces and historical character originally constructed as a 19th-century house of worship.
              </p>
            </div>

            <div className="bg-stone-100/70 rounded-2xl p-8 border border-stone-200 space-y-4 hover:shadow-md transition-shadow">
              <Coffee className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-stone-900">Gourmet Living</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Featuring an expansive state-of-the-art chef's kitchen, grand dining hall, and relaxed gathering rooms for everyone.
              </p>
            </div>

            <div className="bg-stone-100/70 rounded-2xl p-8 border border-stone-200 space-y-4 hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-stone-900">Prime Location</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Walk straight out your door into the historic Oregon District's finest restaurants, coffee shops, and entertainment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="bg-stone-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Ready to Experience Oregon Haus?</h2>
            <p className="text-stone-300 max-w-xl mx-auto">
              Check calendar availability, view guest reviews, and complete your reservation securely on Airbnb.
            </p>
            <div>
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-lg"
              >
                <span>View Availability on Airbnb</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-10 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Home className="w-5 h-5 text-amber-500" />
            <span className="font-serif font-semibold text-stone-200">Oregon Haus — Dayton, OH</span>
          </div>
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Oregon Haus. All rights reserved. Listed on Airbnb.
          </p>
        </div>
      </footer>
    </div>
  );
}
