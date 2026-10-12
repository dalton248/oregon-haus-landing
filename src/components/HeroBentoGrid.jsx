import React from 'react';
import { Grid, Play, Maximize2, Film } from 'lucide-react';

export default function HeroBentoGrid({
  photos = [],
  onOpenGallery,
  onSelectPhoto,
  onOpenVideoTour,
  videoSrc = '/videos/oregon-haus-walkthrough.mp4',
  posterSrc = '/videos/oregon-haus-walkthrough-poster.jpg',
}) {
  // Show the top 4 hero photos in the secondary 2x2 grid alongside the main walkthrough video
  const secondaryPhotos = photos.slice(0, 4);

  if (photos.length === 0) return null;

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      {/* Mobile Walkthrough Video + Quick Actions View */}
      <div
        className="md:hidden relative rounded-2xl overflow-hidden shadow-2xl aspect-[441/415] group cursor-pointer bg-stone-950 border border-stone-800"
        onClick={() => onOpenVideoTour && onOpenVideoTour()}
      >
        <video
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

        {/* Top-left Live Tour Pill */}
        <div className="absolute top-3.5 left-3.5 flex items-center space-x-2 bg-stone-950/85 backdrop-blur-md text-stone-100 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/30 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Virtual Walkthrough • 0:40</span>
        </div>

        {/* Bottom Action Buttons */}
        <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenVideoTour && onOpenVideoTour();
            }}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg flex items-center space-x-1.5 active:scale-95 transition-transform"
          >
            <Play className="w-3.5 h-3.5 fill-stone-950" />
            <span>Expand Tour</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenGallery();
            }}
            className="bg-stone-900/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg border border-stone-700/80 flex items-center space-x-1.5 active:scale-95 transition-transform"
          >
            <Grid className="w-3.5 h-3.5 text-amber-400" />
            <span>All Photos</span>
          </button>
        </div>
      </div>

      {/* Desktop 5-Tile Bento Grid (Left 2x2: Live Stabilized Walkthrough Video, Right 2x2: 4 Hero Photos) */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[480px] lg:h-[540px] rounded-2xl overflow-hidden shadow-2xl relative border border-stone-800/80">
        {/* Main Feature Tile (Col 1-2, Row 1-2): Stabilized Walkthrough Video */}
        <div
          onClick={() => onOpenVideoTour && onOpenVideoTour()}
          className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer group bg-stone-950"
        >
          <video
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 group-hover:from-black/80 transition-colors pointer-events-none" />

          {/* Top-Left Live Walkthrough Badge */}
          <div className="absolute top-4 left-4 flex items-center space-x-2 bg-stone-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-stone-100">
              Virtual Walkthrough
            </span>
            <span className="text-[11px] font-mono text-amber-300/90">0:40</span>
          </div>

          {/* Bottom-Left Interactive Callout */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div className="space-y-1">
              <span className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
                <Film className="w-3.5 h-3.5" />
                <span>Full Property Flythrough</span>
              </span>
              <p className="text-sm lg:text-base font-serif font-semibold text-stone-100 drop-shadow">
                Street Arrival → Grand Sanctuary → Suites
              </p>
            </div>

            <span className="inline-flex items-center space-x-1.5 bg-white/15 group-hover:bg-amber-500 group-hover:text-stone-950 text-white text-xs font-semibold px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/20 group-hover:border-amber-400 transition-all shadow-lg">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Watch Full Tour</span>
            </span>
          </div>
        </div>

        {/* 4 Secondary Hero Photos (Col 3-4, Row 1-2) */}
        {secondaryPhotos.map((photo, idx) => (
          <div
            key={photo.id || idx}
            onClick={() => onSelectPhoto(idx)}
            className="relative overflow-hidden cursor-pointer group bg-stone-900"
          >
            <img
              src={photo.thumbnailUrl || photo.url}
              alt={photo.alt || photo.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
            <div className="absolute bottom-2.5 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] font-medium bg-stone-950/80 text-stone-200 px-2 py-0.5 rounded backdrop-blur-sm">
                {photo.title}
              </span>
            </div>
          </div>
        ))}

        {/* Floating "Show all photos" Button in bottom-right corner */}
        <div className="absolute bottom-5 right-5 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenGallery();
            }}
            className="inline-flex items-center space-x-2.5 bg-stone-900/90 hover:bg-stone-900 text-stone-100 text-sm font-semibold px-5 py-2.5 rounded-xl border border-stone-700/80 shadow-2xl backdrop-blur-md transition-all transform hover:scale-105 hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <Grid className="w-4 h-4 text-amber-400" />
            <span>Show all photos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
