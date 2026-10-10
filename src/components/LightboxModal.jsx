import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  onClose,
  photos = [],
  currentIndex = 0,
  onIndexChange,
}) {
  const currentPhoto = photos[currentIndex] || photos[0];

  const handleNext = useCallback(() => {
    if (photos.length === 0) return;
    onIndexChange((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    if (photos.length === 0) return;
    onIndexChange((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onIndexChange]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery slideshow"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-stone-800/80 text-white z-10">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium tracking-wider text-stone-300">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="text-sm font-medium text-amber-400 capitalize px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 hidden sm:inline">
            {currentPhoto.category || 'Historic Sanctuary'}
          </span>
        </div>

        <div className="text-center truncate px-4 hidden md:block">
          <p className="text-stone-200 text-sm font-medium">{currentPhoto.title}</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onClose}
            aria-label="Close photo gallery"
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Slideshow Area */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-stone-200 hover:text-white border border-stone-700/60 backdrop-blur-sm transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image Container */}
        <div className="relative max-w-full max-h-full flex items-center justify-center">
          <img
            key={currentPhoto.url}
            src={currentPhoto.fullUrl || currentPhoto.url}
            alt={currentPhoto.alt || currentPhoto.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] sm:max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl transition-opacity duration-200"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-stone-200 hover:text-white border border-stone-700/60 backdrop-blur-sm transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip & Caption */}
      <div className="border-t border-stone-800/80 bg-stone-950/80 p-3 sm:p-4 z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-2">
          {/* Mobile Title display */}
          <div className="md:hidden text-center text-xs text-stone-300 truncate">
            {currentPhoto.title}
          </div>

          {/* Thumbnail Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent">
            {photos.map((photo, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={photo.id || index}
                  onClick={() => onIndexChange(index)}
                  className={`relative flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-md overflow-hidden transition-all border ${
                    isActive
                      ? 'border-amber-400 ring-2 ring-amber-400/50 opacity-100 scale-105'
                      : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                  aria-label={`Jump to photo ${index + 1}`}
                >
                  <img
                    src={photo.thumbnailUrl || photo.url}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
