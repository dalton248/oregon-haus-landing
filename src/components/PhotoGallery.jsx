import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Star,
  Church,
  Bed,
  UtensilsCrossed,
  Bath,
  TreePine,
  Maximize2,
  Filter,
} from 'lucide-react';
import { CATEGORIES } from '../data/photos';

const ICON_MAP = {
  Sparkles,
  Star,
  Church,
  Bed,
  UtensilsCrossed,
  Bath,
  TreePine,
};

export default function PhotoGallery({
  photos = [],
  onSelectPhoto,
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return photos;
    if (activeCategory === 'hero') return photos.filter((p) => p.isHero);
    return photos.filter((p) => p.category === activeCategory);
  }, [photos, activeCategory]);

  return (
    <section id="gallery" className="py-20 bg-stone-100/60 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Complete Photo Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Explore Every Detail of Oregon Haus
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            From the grand vaulted church sanctuary to the 6 bespoke bedroom suites and luxury bathrooms, browse our high-resolution listing gallery.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || Sparkles;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all shadow-sm border ${
                  isActive
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md transform scale-105'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-stone-800 text-stone-200'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => {
            // Find global index in photos array so modal opens at correct slide
            const globalIndex = photos.findIndex((p) => p.id === photo.id);

            return (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(globalIndex >= 0 ? globalIndex : 0)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/60 cursor-pointer aspect-[4/3] flex flex-col justify-end"
              >
                <img
                  src={photo.thumbnailUrl || photo.url}
                  alt={photo.alt || photo.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Details Card */}
                <div className="relative z-10 p-3 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
                  <div className="truncate pr-2">
                    <p className="text-xs font-semibold truncate text-white">
                      {photo.title}
                    </p>
                    <p className="text-[10px] text-amber-300 capitalize font-medium">
                      {photo.category}
                    </p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white flex-shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="text-center pt-4">
          <p className="text-xs text-stone-500">
            Showing {filteredPhotos.length} of {photos.length} photos extracted from the official Airbnb listing.
          </p>
        </div>
      </div>
    </section>
  );
}
