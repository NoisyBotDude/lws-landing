import { motion } from 'framer-motion';

const logos = [
  {
    src: "https://freepnglogo.com/images/all_img/1726309824aws-logo.png",
    alt: "Company Logo 1"
  },
  {
    src: "https://th.bing.com/th/id/R.1ab3c7a150a749a0e467f9d81162c051?rik=CIxBOgvgg0a4Mg&pid=ImgRaw&r=0",
    alt: "Company Logo 2"
  },
  {
    src: "https://tse4.mm.bing.net/th/id/OIP.2rQWPhA_Ex7fNtBzfgcN9gHaCi?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Company Logo 3"
  },
  {
    src: "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
    alt: "Company Logo 4"
  },
  {
    src: "https://cdn.discordapp.com/splashes/752553802359505017/502de335b3b35eaed67f65036f42d5bf.jpg?size=1024",
    alt: "Company Logo 5"
  },
  {
    src: "https://www.pngitem.com/pimgs/m/151-1512794_mongodb-logo-png-transparent-png.png",
    alt: "Company Logo 6"
  },
  {
    src: "https://th.bing.com/th/id/R.ceebbce2b4a34f817165f3980adb3695?rik=s7EkNaxt1zMyTw&riu=http%3a%2f%2fshlule.com%2fimage%2fimage_lib%2fimages%2fgoogle-cloud-platform-logo.png&ehk=VD9h%2bqfV%2bxB0j%2bL3%2fIXxih8BhnLcM%2bsXllmyc%2baKv14%3d&risl=&pid=ImgRaw&r=0",
    alt: "Company Logo 6"
  },
  {
    src: "https://tse4.mm.bing.net/th/id/OIP.KxdNexeXzRkRamTD64Y34gAAAA?cb=thfc1&w=344&h=68&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Company Logo 6"
  },
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
          Tech Stack we use in our company
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
                  className="flex-shrink-0"
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