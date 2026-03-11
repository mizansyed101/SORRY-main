import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { FloatingParticles } from './components/FloatingParticles'
import { Envelope } from './components/Envelope'
import { MessageGrid } from './components/MessageGrid'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log("Audio playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0f0a05] text-[#fdfdfd] selection:bg-[#eeaa11] selection:text-white font-sans">
      {/* Background with CSS brightness and overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 fixed"
        style={{ 
          backgroundImage: "url('/sunflower-bg.png')",
          filter: "brightness(0.55) contrast(1.1) blur(4px)" 
        }}
      />
      
      {/* Subtle overlay gradient to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-[#0f0a05]/30 to-[#0f0a05]/95 pointer-events-none fixed" />

      {/* Background Particles */}
      <FloatingParticles />

      {/* Main Content Container */}
      <main className="relative z-10 w-full min-h-[100dvh] flex flex-col items-center pb-32">
        {/* Audio Element Hidden */}
        <audio 
          ref={audioRef}
          src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" 
          loop 
        />

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center mt-24 md:mt-32 w-full px-4"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-[#fef0d8] drop-shadow-2xl mb-6">
            I'm Sorry
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-[#fef0d8]/80 font-light leading-relaxed">
            A message from the heart.
          </p>
        </motion.div>

        {/* Interactive Envelope */}
        <Envelope />

        {/* Reasons / Apology Card Grid */}
        <MessageGrid />
      </main>

      {/* Music Toggle */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass-panel hover:bg-white/20 transition-all duration-300 group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-[#fef0d8] group-hover:scale-110 transition-transform" />
        ) : (
          <Play className="w-6 h-6 text-[#fef0d8] group-hover:scale-110 transition-transform pl-1" />
        )}
      </button>
    </div>
  )
}

export default App
