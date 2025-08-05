import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: "What kind of projects do you typically work on?",
    answer: "We specialize in building custom software solutions including CRMs, internal tools, client portals, admin dashboards, AI-powered apps, and automation workflows. Our sweet spot is complex operational software that needs to scale."
  },
  {
    question: "How does your CTO-as-a-Service work?",
    answer: "We provide fractional tech leadership to help you plan, build, and scale. This includes architecture & roadmap planning, hiring and managing developers, weekly reviews, product decisions, and documentation. We can either augment your existing tech team or be your complete tech partner."
  },
  {
    question: "What's your development process like?",
    answer: "We follow an agile methodology with weekly sprints and updates. You'll have one main point of contact (your PM) who coordinates with our dev team. We emphasize clear communication, regular demos, and iterative feedback to ensure we're building exactly what you need."
  },
  {
    question: "How do you handle project handoffs?",
    answer: "All our systems are built to be handover-ready. We provide comprehensive documentation, clean code with comments, and knowledge transfer sessions. When you're ready to transition to an internal team, we ensure a smooth handoff with no technical debt."
  },
  {
    question: "What technologies do you work with?",
    answer: "We're tech-agnostic and choose the best tools for your specific needs. Our stack typically includes React/Next.js for frontend, Node.js/Django for backend, various AI tools (OpenAI, Claude, etc.), and automation platforms like Make.com and Zapier. We also work with popular CRMs and can integrate with most third-party tools."
  }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={false}
      className="border-b border-gray-800"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg text-white font-medium">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDownIcon className="w-6 h-6 text-[#8B5CF6]" />
        </motion.div>
      </button>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-gray-400">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/20" />

      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
          >
            Common Questions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Questions You Might Have<br />
            About Working With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Everything you need to know about our services and process.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#111111] rounded-2xl p-2 md:p-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 