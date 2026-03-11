import { motion } from 'framer-motion';

const messages = [
  "I'm sorry for not being there when you needed me the most.",
  "I appreciate your endless patience and your beautiful, kind heart.",
  "Your smile is the absolute light of my life.",
  "I promise to communicate better and be more open with you.",
  "I'm deeply sorry for causing you pain.",
  "I will always choose you, every single day, without hesitation."
];

export function MessageGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto px-4 my-32 z-10 relative"
    >
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          variants={item}
          className="glass-panel p-8 md:p-10 rounded-2xl flex items-center justify-center text-center min-h-[220px] group hover:bg-white/10 transition-colors duration-500 ease-out cursor-default"
        >
          <p className="text-[#fef0d8]/90 group-hover:text-white transition-colors duration-300 font-serif text-xl md:text-2xl italic leading-relaxed shadow-black drop-shadow-sm">
            "{msg}"
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
