import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon, 
  CogIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Workflow Automation',
    description: 'We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.',
    icon: CogIcon,
  },
  {
    title: 'AI Assistant',
    description: 'From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Sales & Marketing',
    description: 'AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.',
    icon: ChartBarIcon,
  },
  {
    title: 'Custom Projects',
    description: 'Whether youre starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.',
    icon: RocketLaunchIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI Solutions That Take Your Business to the Next Level
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

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 