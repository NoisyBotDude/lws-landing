import { motion } from 'framer-motion';

const logos = [
  {
    src: "/logos/logo1.svg",
    alt: "Company Logo 1"
  },
  {
    src: "/logos/logo2.svg",
    alt: "Company Logo 2"
  },
  {
    src: "/logos/logo3.svg",
    alt: "Company Logo 3"
  },
  {
    src: "/logos/logo4.svg",
    alt: "Company Logo 4"
  },
  {
    src: "/logos/logo5.svg",
    alt: "Company Logo 5"
  }
];

// Duplicate logos for seamless scrolling
const duplicatedLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-300 mb-12"
        >
          Over 50+ business trust us
        </motion.p>

        {/* Logo scroll container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -1920], // Adjust based on total width of logos
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 