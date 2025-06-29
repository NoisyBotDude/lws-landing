import { motion } from 'framer-motion';
import { useRef } from 'react';

const companies = [
  { name: 'Company 1', logo: 'https://placehold.co/200x80/2563eb/ffffff/png?text=Logo+1' },
  { name: 'Company 2', logo: 'https://placehold.co/200x80/2563eb/ffffff/png?text=Logo+2' },
  { name: 'Company 3', logo: 'https://placehold.co/200x80/2563eb/ffffff/png?text=Logo+3' },
  { name: 'Company 4', logo: 'https://placehold.co/200x80/2563eb/ffffff/png?text=Logo+4' },
  { name: 'Company 5', logo: 'https://placehold.co/200x80/2563eb/ffffff/png?text=Logo+5' },
  { name: 'Company 6', logo: 'https://placehold.co/200x80/2563eb/ffffff/png?text=Logo+6' },
];

export default function TrustedBy() {
  const containerRef = useRef(null);

  return (
    <section className="section py-12">
      <div className="spacey-bg" />
      <div className="container text-center">
        <motion.h2
          className="text-2xl font-semibold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Industry Leaders
        </motion.h2>

        <motion.div
          ref={containerRef}
          className="mt-12 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* First row of logos */}
          <div className="flex space-x-12 animate-scroll">
            {companies.map((company, index) => (
              <motion.div
                key={`${company.name}-1`}
                className="flex-shrink-0 glass-card p-6 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="moving-gradient" />
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain filter brightness-100 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Second row of logos (reversed) */}
          <div className="flex space-x-12 mt-8 animate-scroll-reverse">
            {[...companies].reverse().map((company, index) => (
              <motion.div
                key={`${company.name}-2`}
                className="flex-shrink-0 glass-card p-6 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="moving-gradient" />
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain filter brightness-100 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 