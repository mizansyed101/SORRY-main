import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center my-32 z-20 relative w-full max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-[#d4b48f] to-[#b39169] rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden"
          >
            {/* The V-shape flap of the envelope */}
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
              style={{
                clipPath: 'polygon(0 0, 50% 50%, 100% 0)'
              }}
            >
              <div className="w-full h-full bg-[#e3c7a6] shadow-md origin-top transition-transform duration-500 group-hover:-rotate-x-12" />
            </div>

            {/* Side flaps */}
            <div className="absolute inset-0 z-0 bg-black/10 shadow-inner" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#4a3320] font-serif text-3xl z-20 italic flex flex-col items-center gap-3 mt-12"
            >
              <Heart className="w-8 h-8 text-[#a63a28] animate-pulse" fill="#a63a28" />
              <span>Tap to Open</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 100, scale: 0.95, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="w-full glass-panel p-8 md:p-16 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-center relative backdrop-blur-xl border border-white/20"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-[#f8b93b] mb-10 tracking-wide drop-shadow-md">My Sincere Apology</h2>

            <div className="space-y-6 text-[#fef0d8]/95 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-left">
              <p>
                Rose you are the best thing ever happened to me,I can never take you for granted.
              </p>
              <p>
                You mean everything to me. This space I've built here is just a small token to show how deeply I care and how committed I am to making things right. It breaks my heart to know I caused you pain.You are my world baby my JAANU.
              </p>
              <p>
                I am so sorry not to wish you women's day,You the strongest and bravest person in my life,Your strength makes my strong. I promise to be better, to listen closer, to be more patient, and can never take your beautiful presence in my life for granted.
              </p>
              <p className="font-serif italic text-3xl text-[#eeaa11] pt-10 text-right pr-8">
                With all my love,
                <br />
                <span className="text-[#fef0d8]">Yours Mizan.</span>
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-16 px-6 py-2 rounded-full border border-[#f8b93b]/50 text-sm uppercase tracking-widest text-[#f8b93b] hover:bg-[#f8b93b]/10 transition-colors"
            >
              Fold Letter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
