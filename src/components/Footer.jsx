import { motion } from 'framer-motion';
import logo from '../logos/2@4x.png';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const navigation = {
  socials: [
    { name: 'Instagram', href: 'https://www.instagram.com/buildwithstack?igsh=MTliYXUxZXo5eDcxYQ%3D%3D&utm_source=qr' },
    { name: 'Facebook', href: 'https://www.facebook.com/share/19RGTRJNde/?mibextid=wwXIfr' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-10 pb-12 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left section - Brand info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-md"
          >
            <div className="flex items-center mb-6">
              <img src={logo} alt="Build With Stack" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
          </motion.div>

          {/* Right section - Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start md:items-end"
          >
            <h3 className="text-white text-xl font-medium mb-6">Connect With Us</h3>
            <div className="flex space-x-6">
              {navigation.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="hidden md:inline">{social.name}</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Build With Stack. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}