import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage for x
      size: Math.random() * 8 + 3, // 3px to 11px
      duration: Math.random() * 15 + 15, // 15s to 30s
      delay: Math.random() * -15, // negative delay so they start already moving
      drift: Math.random() * 20 - 10, // drift left/right percentage
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#f8b93b] mix-blend-screen"
          style={{
            width: p.size,
            height: p.size,
            filter: 'blur(3px)',
            opacity: 0.35,
            left: `${p.x}%`
          }}
          initial={{ y: '110vh' }}
          animate={{
            y: '-10vh',
            x: `${p.drift}vw`,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
