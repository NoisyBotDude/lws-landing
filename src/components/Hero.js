import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Intelligent Automation for Modern Businesses
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Xtract brings AI automation to your fingertips & streamline tasks
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#services" className="btn btn-outline">
              View services
            </a>
          </motion.div>
          <motion.p
            className="mt-12 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Over 50+ businesses trust us
          </motion.p>
        </div>
      </div>
    </section>
  );
} 