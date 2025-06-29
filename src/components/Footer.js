import { motion } from 'framer-motion';

const navigation = {
  links: [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case studies', href: '#case-studies' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Pricing', href: '#pricing' },
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: '404', href: '/404' },
  ],
  socials: [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Linkedin', href: '#' },
    { name: 'Twitter', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6">
                <img src="/logo.svg" alt="Xtract" className="h-8 w-auto" />
                <span className="ml-2 text-2xl font-bold text-white">XTRACT</span>
              </div>

              {/* Company Description */}
              <p className="text-gray-400 mb-8">
                Xtract – Automate Smarter, Optimize Faster, and Grow Stronger.
              </p>

              {/* Newsletter */}
              <div>
                <h3 className="text-white text-lg font-medium mb-4">Join our newsletter</h3>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="flex-1 bg-[#111111] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                  />
                  <button
                    type="submit"
                    className="bg-[#8B5CF6] text-white px-6 py-2 rounded-lg hover:bg-[#7C3AED] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-white text-lg font-medium mb-4">Links</h3>
                <ul className="space-y-3">
                  {navigation.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-white text-lg font-medium mb-4">Pages</h3>
                <ul className="space-y-3">
                  {navigation.pages.map((page) => (
                    <li key={page.name}>
                      <a
                        href={page.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {page.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-white text-lg font-medium mb-4">Socials</h3>
                <ul className="space-y-3">
                  {navigation.socials.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-400"
          >
            © {new Date().getFullYear()} Xtract. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
} 