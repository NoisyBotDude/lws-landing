import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

export default function Contact() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="contact" className="section">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: useMotionTemplate`radial-gradient(
            circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%,
            rgba(37, 99, 235, 0.3) 0%,
            rgba(30, 64, 175, 0.1) 25%,
            rgba(0, 0, 0, 0) 50%
          )`
        }}
      />
      
      {/* Spacey background effect */}
      <div className="spacey-bg" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Let's Talk</h2>
            <p className="mt-4 text-lg text-gray-300">
              Want to automate the boring stuff? Build your product faster? Bring your AI ideas to life?
              We're ready when you are.
            </p>

            <dl className="mt-8 space-y-6">
              <motion.div
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-white">Sales</dt>
                  <dd className="mt-1 text-gray-300">
                    <a href="tel:+1 (555) 000-0000" className="hover:text-primary">
                      +1 (555) 000-0000
                    </a>
                  </dd>
                </div>
              </motion.div>

              <motion.div
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <EnvelopeIcon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-white">Support</dt>
                  <dd className="mt-1 text-gray-300">
                    <a href="mailto:support@example.com" className="hover:text-primary">
                      support@example.com
                    </a>
                  </dd>
                </div>
              </motion.div>
            </dl>
          </motion.div>

          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="moving-gradient" />
            <div className="relative z-10">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-lg border-0 bg-white/5 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-2 block w-full rounded-lg border-0 bg-white/5 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-2 block w-full rounded-lg border-0 bg-white/5 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="mt-2 block w-full rounded-lg border-0 bg-white/5 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 block w-full rounded-lg border-0 bg-white/5 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary sm:text-sm"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-2.5 px-4 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 