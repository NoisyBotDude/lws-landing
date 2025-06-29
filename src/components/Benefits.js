import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
  BoltIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarSquareIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: BoltIcon,
    title: "Increased Productivity",
    description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
  },
  {
    icon: UserGroupIcon,
    title: "Better Customer Experience",
    description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction."
  },
  {
    icon: ClockIcon,
    title: "24/7 Availability",
    description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime."
  },
  {
    icon: CurrencyDollarIcon,
    title: "Cost Reduction",
    description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability."
  },
  {
    icon: ChartBarSquareIcon,
    title: "Data-Driven Insights",
    description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions."
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Scalability & Growth",
    description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs."
  }
];

const BenefitCard = ({ icon: Icon, title, description }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl bg-[#111111] border border-gray-800 p-8 h-full overflow-hidden"
    >
      {/* Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at \${mouseX}px \${mouseY}px,
              rgba(139, 92, 246, 0.1),
              transparent 80%
            )
          `
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-[#8B5CF6]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Benefits() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }) {
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  }

  return (
    <section 
      id="benefits" 
      className="relative py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Main background gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              circle at \${mouseX.get() * 100}% \${mouseY.get() * 100}%,
              rgba(139, 92, 246, 0.3) 0%,
              rgba(139, 92, 246, 0.1) 25%,
              rgba(0, 0, 0, 0) 50%
            )
          `
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
          >
            Benefits
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Key Benefits of AI<br />
            for Your Business Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Discover how AI automation enhances efficiency, reduces costs, and drives
            business growth with smarter, faster processes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 