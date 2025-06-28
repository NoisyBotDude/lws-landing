import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Smart Analyzing',
    description: 'We assess your needs and identify AI solutions to streamline workflows and improve efficiency.',
    icon: MagnifyingGlassIcon,
    items: ['System check', 'Process check', 'Speed check', 'Manual work', 'Repetitive task'],
  },
  {
    title: 'AI Development',
    description: 'Our team builds intelligent automation systems tailored to your business processes.',
    icon: CpuChipIcon,
    items: ['Custom algorithms', 'Integration setup', 'Testing phase', 'Performance tuning', 'Security checks'],
  },
  {
    title: 'Implementation',
    description: 'We deploy and integrate the AI solutions seamlessly into your existing workflow.',
    icon: CodeBracketIcon,
    items: ['System deployment', 'Staff training', 'Monitoring setup', 'Performance tracking', 'Continuous support'],
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Simple, Smart, and Scalable Process
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We design, develop, and implement automation tools that help you work smarter, not harder
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-center mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <step.icon className="w-6 h-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">Step {index + 1}</h3>
                <p className="mt-1 font-medium text-primary">{step.title}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 