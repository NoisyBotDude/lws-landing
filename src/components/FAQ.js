import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: "How can AI automation help my business?",
    answer: "AI automation can transform your business by streamlining workflows, reducing manual tasks, and improving efficiency. It can handle repetitive processes, analyze data for insights, automate customer support, and help make data-driven decisions - all while reducing operational costs and freeing your team to focus on strategic work."
  },
  {
    question: "Is AI automation difficult to integrate?",
    answer: "Not at all! We've designed our AI automation solutions to be user-friendly and seamless to integrate. Our team handles the technical setup, provides comprehensive training, and offers ongoing support. We ensure a smooth transition with minimal disruption to your existing workflows."
  },
  {
    question: "What industries can benefit from AI automation?",
    answer: "AI automation can benefit virtually any industry. From healthcare and finance to retail and manufacturing, our solutions adapt to specific industry needs. Common applications include customer service, data analysis, inventory management, quality control, and process optimization across sectors."
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer: "No technical expertise is required! Our platform is designed to be user-friendly and intuitive. We provide a simple interface that allows you to manage and monitor your automation workflows easily. Plus, our support team is always available to help with any questions."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support including 24/7 technical assistance, regular system updates, dedicated account management, and ongoing training. Our team of experts is always available to help optimize your automation processes and resolve any issues promptly."
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
            FAQs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            We've Got the Answers<br />
            You're Looking For
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Quick answers to your AI automation questions.
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