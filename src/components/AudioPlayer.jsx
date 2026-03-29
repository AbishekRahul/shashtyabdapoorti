import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element for a placeholder nadaswaram track
    // In production, this would be a local asset or secure CDN link
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=indian-flute-126046.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.warn("Audio play failed", e));
      setShowPrompt(false);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white px-4 py-2 rounded-xl shadow-lg border border-yellow-200 text-temple-primary font-body text-sm flex items-center gap-2"
          >
            <Music size={14} />
            <span>Turn on music</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={togglePlay}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isPlaying 
            ? "bg-temple-secondary text-temple-primary animate-pulse" 
            : "bg-temple-primary text-white hover:bg-temple-primary/90 hover:scale-110"
        }`}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}
