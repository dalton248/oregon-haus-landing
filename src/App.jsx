import React, { useState } from 'react';
import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Home,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Coffee,
  Wifi,
  Tv,
  Grid,
  Images,
  Play,
} from 'lucide-react';

import { PHOTOS, HERO_PHOTOS } from './data/photos';
import HeroBentoGrid from './components/HeroBentoGrid';
import PhotoGallery from './components/PhotoGallery';
import LightboxModal from './components/LightboxModal';
import VideoTourModal from './components/VideoTourModal';

const VRBO_URL = "https://www.vrbo.com/5520747?dateless=true";

export default function App() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isVideoTourOpen, setIsVideoTourOpen] = useState(false);

  const handleOpenLightbox = (index = 0) => {
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans">
      {/* Top Banner / Navbar */}
      <header className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md text-stone-100 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Home className="w-7 h-7 text-amber-400" />
            <span className="text-xl font-serif font-bold tracking-wide">Oregon Haus</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <button
              onClick={() => setIsVideoTourOpen(true)}
              className="hover:text-amber-400 transition-colors inline-flex items-center space-x-1.5"
            >
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Video Tour</span>
            </button>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Photos ({PHOTOS.length})</a>
            <a href="#specs" className="hover:text-amber-400 transition-colors">Property Specs</a>
            <a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities</a>
          </nav>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleOpenLightbox(0)}
              className="hidden sm:inline-flex items-center space-x-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-medium px-4 py-2 rounded-full border border-stone-700 transition-colors"
            >
              <Images className="w-4 h-4 text-amber-400" />
              <span>Gallery</span>
            </button>
            <a
              href={VRBO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-medium px-5 py-2.5 rounded-full shadow-lg hover:shadow-rose-900/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Book on Vrbo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Header Section */}
        <section className="relative bg-stone-900 text-white pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
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

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={VRBO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 text-base sm:text-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Reserve Your Stay</span>
              </a>
              <button
                onClick={() => setIsVideoTourOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold px-7 py-3.5 rounded-xl border border-amber-500/40 hover:border-amber-400 transition-all text-base sm:text-lg shadow-lg"
              >
                <Play className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>Watch Video Tour</span>
              </button>
              <button
                onClick={() => handleOpenLightbox(0)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-800/70 hover:bg-stone-800 text-stone-300 font-semibold px-7 py-3.5 rounded-xl border border-stone-700 transition-all text-base sm:text-lg"
              >
                <Images className="w-5 h-5 text-amber-400" />
                <span>View All {PHOTOS.length} Photos</span>
              </button>
            </div>
          </div>

          {/* Hero Bento Grid Showcase with Stabilized Walkthrough Video */}
          <HeroBentoGrid
            photos={HERO_PHOTOS}
            onOpenGallery={() => handleOpenLightbox(0)}
            onSelectPhoto={(idx) => handleOpenLightbox(idx)}
            onOpenVideoTour={() => setIsVideoTourOpen(true)}
          />
        </section>

        {/* Property Quick Specs */}
        <section id="specs" className="-mt-8 relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Family & Retreats</div>
            </div>

            <div className="space-y-1">
              <MapPin className="w-6 h-6 mx-auto text-amber-600 mb-2" />
              <div className="text-2xl font-bold text-stone-900">Oregon District</div>
              <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Dayton, Ohio</div>
            </div>
          </div>
        </section>

        {/* Filterable Full Photo Gallery Section */}
        <PhotoGallery
          photos={PHOTOS}
          onSelectPhoto={(globalIdx) => handleOpenLightbox(globalIdx)}
        />

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

          <div id="amenities" className="grid md:grid-cols-3 gap-8 pt-6">
            <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <Sparkles className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-stone-900">Architectural Heritage</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Experience vaulted timber spaces and historical character originally constructed as a 19th-century house of worship.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <Coffee className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-stone-900">Gourmet Living</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Featuring an expansive state-of-the-art chef's kitchen, grand banquet dining, and relaxed gathering rooms for everyone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-stone-900">Prime Location</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Walk straight out your door into the historic Oregon District's finest restaurants, craft cocktail bars, coffee shops, and entertainment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="bg-stone-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Ready to Experience Oregon Haus?</h2>
            <p className="text-stone-300 max-w-xl mx-auto">
              Check calendar availability, view verified guest reviews, and reserve your stay securely on Vrbo.
            </p>
            <div className="pt-2">
              <a
                href={VRBO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-lg"
              >
                <span>View Availability on Vrbo</span>
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
            © {new Date().getFullYear()} Oregon Haus. All rights reserved. Listed on Vrbo.
          </p>
        </div>
      </footer>

      {/* Full-Screen Lightbox Slideshow Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        photos={PHOTOS}
        currentIndex={currentPhotoIndex}
        onIndexChange={(idx) => setCurrentPhotoIndex(idx)}
      />

      {/* Full-Screen Stabilized Video Walkthrough Modal */}
      <VideoTourModal
        isOpen={isVideoTourOpen}
        onClose={() => setIsVideoTourOpen(false)}
        bookingUrl={VRBO_URL}
      />
    </div>
  );
}
