import React from 'react';
import { Grid, Sparkles, ExternalLink } from 'lucide-react';

export default function HeroBentoGrid({
  photos = [],
  onOpenGallery,
  onSelectPhoto,
}) {
  // Grab the 5 hero photos (or fallback to first 5)
  const heroItems = photos.slice(0, 5);
  const totalCount = photos.length;

  if (heroItems.length === 0) return null;

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      {/* Mobile single image + counter view */}
      <div className="md:hidden relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer" onClick={() => onSelectPhoto(0)}>
        <img
          src={heroItems[0]?.fullUrl || heroItems[0]?.url}
          alt={heroItems[0]?.alt || "Oregon Haus Historic Sanctuary"}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenGallery();
          }}
          className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg border border-stone-700/80 flex items-center space-x-2 active:scale-95 transition-transform"
        >
          <Grid className="w-3.5 h-3.5 text-amber-400" />
          <span>View all {totalCount} photos</span>
        </button>
      </div>

      {/* Desktop Airbnb 5-image Bento Grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[480px] lg:h-[540px] rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Large Main Feature Photo (Col 1-2, Row 1-2) */}
        <div
          onClick={() => onSelectPhoto(0)}
          className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer group bg-stone-900"
        >
          <img
            src={heroItems[0]?.fullUrl || heroItems[0]?.url}
            alt={heroItems[0]?.alt || "Main Grand Sanctuary"}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
            <span className="text-xs uppercase tracking-widest bg-stone-900/80 px-2.5 py-1 rounded-md text-amber-300 font-medium">
              Featured Sanctuary
            </span>
          </div>
        </div>

        {/* 4 Stacked Secondary Photos */}
        {heroItems.slice(1, 5).map((photo, idx) => {
          const photoIndex = idx + 1;
          return (
            <div
              key={photo.id || idx}
              onClick={() => onSelectPhoto(photoIndex)}
              className="relative overflow-hidden cursor-pointer group bg-stone-900"
            >
              <img
                src={photo.thumbnailUrl || photo.url}
                alt={photo.alt || photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
          );
        })}

        {/* Floating "View All Photos" Button in bottom-right corner */}
        <div className="absolute bottom-5 right-5 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenGallery();
            }}
            className="inline-flex items-center space-x-2.5 bg-stone-900/90 hover:bg-stone-900 text-stone-100 text-sm font-semibold px-5 py-2.5 rounded-xl border border-stone-700/80 shadow-2xl backdrop-blur-md transition-all transform hover:scale-105 hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <Grid className="w-4 h-4 text-amber-400" />
            <span>Show all {totalCount} photos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
