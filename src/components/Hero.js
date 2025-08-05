import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 -z-10">
        <div className="stars-container">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </div>

      {/* Purple glow effect */}
      <div 
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full -z-5"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translate(20%, -20%)',
        }}
      />

      <div className="container relative z-20">
        <div className="text-center max-w-4xl mx-auto pt-20">
          {/* New tag */}
          <motion.div
            className="inline-flex items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1 text-sm text-white bg-[#8B5CF6] rounded-full">
            Build With Stack
            </span>
            
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build Fast. Automate Smarter.{' '}
            <span className="block">Scale Without Limits.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Custom Software & AI Solutions That Actually Work. Build With Stack is your on-demand tech partner for building fast, scaling smart, and owning your software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-[#8B5CF6] text-white rounded-lg flex items-center justify-center hover:bg-[#7C3AED] transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </motion.a>
            <motion.a
              href="#services"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View services
            </motion.a>
          </motion.div>
    
        </div>
      </div>
    </section>
  );
} 