import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Maximize,
} from 'lucide-react';

const TOUR_CHAPTERS = [
  { label: 'Exterior Arrival', time: 0 },
  { label: 'Entry & Hallway', time: 4 },
  { label: 'Grand Sanctuary', time: 9 },
  { label: 'Mezzanine & Bar', time: 16 },
  { label: 'Luxury Suites', time: 22 },
  { label: 'Return Walk', time: 33 },
];

export default function VideoTourModal({
  isOpen,
  onClose,
  videoSrc = '/videos/oregon-haus-walkthrough.mp4',
  posterSrc = '/videos/oregon-haus-walkthrough-poster.jpg',
  bookingUrl = 'https://www.vrbo.com/5520747?dateless=true',
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(40.3);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const jumpToTime = (seconds) => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = seconds;
    vid.play();
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen();
    }
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen) return null;

  const activeChapterIndex = TOUR_CHAPTERS.reduce(
    (acc, ch, idx) => (currentTime >= ch.time ? idx : acc),
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex flex-col select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Oregon Haus Virtual Walkthrough"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-stone-800/80 text-white">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Virtual Walkthrough</span>
          </span>
          <span className="text-sm sm:text-base font-serif font-semibold text-stone-100 hidden sm:inline">
            Oregon Haus — Full Stabilized Tour
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            <span>Book on Vrbo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            aria-label="Close video tour"
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Video Container */}
      <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        <div className="relative max-h-full max-w-4xl w-full flex flex-col items-center justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-black max-h-[68vh] sm:max-h-[72vh] aspect-[441/415] flex items-center justify-center group">
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 40.3)}
              className="w-full h-full object-contain cursor-pointer"
            />

            {/* Floating Video Controls Bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10 flex flex-col gap-2.5">
              {/* Progress Scrubber */}
              <div
                className="w-full h-1.5 bg-stone-700/80 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                  jumpToTime(pct * duration);
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-rose-400 transition-all duration-100"
                  style={{ width: `${Math.min(100, (currentTime / duration) * 100)}%` }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    onClick={() => jumpToTime(0)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                    aria-label="Restart tour"
                    title="Restart from beginning"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-stone-300" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                  </button>
                  <span className="font-mono text-stone-300">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-amber-300 font-medium hidden sm:inline">
                    {TOUR_CHAPTERS[activeChapterIndex]?.label}
                  </span>
                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                    aria-label="Fullscreen"
                    title="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Chapter Pills */}
      <div className="border-t border-stone-800/80 bg-stone-950/90 px-4 py-3.5">
        <div className="max-w-4xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none">
          {TOUR_CHAPTERS.map((chapter, idx) => {
            const isCurrent = idx === activeChapterIndex;
            return (
              <button
                key={chapter.label}
                onClick={() => jumpToTime(chapter.time)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  isCurrent
                    ? 'bg-amber-500 text-stone-950 border-amber-400 font-semibold shadow-md'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                <span>{chapter.label}</span>
                <span className={`ml-1.5 opacity-75 font-mono text-[10px]`}>
                  {formatTime(chapter.time)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
