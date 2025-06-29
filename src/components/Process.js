import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  ClockIcon,
  DocumentCheckIcon,
  ArrowsPointingOutIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  FunnelIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
  MinusIcon,
  ChartBarIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const ProcessStep = ({ step, title, description, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-[#111111] rounded-2xl p-8 border border-gray-800"
  >
    <div className="mb-6">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block px-3 py-1 bg-gray-900 rounded-lg text-gray-300 text-sm mb-4"
      >
        Step {step}
      </motion.span>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-bold text-white mb-3"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400"
      >
        {description}
      </motion.p>
    </div>
    {children}
  </motion.div>
);

const CaseStudy = ({ logo, title, description, impacts, image }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="grid lg:grid-cols-2 gap-12 items-center"
  >
    <div className="relative aspect-square">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        {logo}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-white">"{title}"</h3>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl text-white">Impact :</h4>
        <ul className="space-y-3">
          {impacts.map((impact, index) => (
            <motion.li
              key={impact}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-300 text-lg"
            >
              • {impact}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      {/* Background with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/20" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
          >
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our Simple, Smart,<br />and Scalable Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We design, develop, and implement automation tools that help you work smarter, not harder
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 1: Smart Analyzing */}
          <ProcessStep
            step="1"
            title="Smart Analyzing"
            description="We assess your needs and identify AI solutions to streamline workflows and improve efficiency."
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-900/50 rounded-xl border border-gray-800 p-6 flex items-center justify-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-32 h-32"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-[#8B5CF6] border-t-transparent" style={{ clipPath: 'polygon(0 0, 15% 0, 15% 100%, 0 100%)' }} />
                </motion.div>
                <p className="text-gray-400 text-sm absolute">Analyzing current workflow...</p>
              </div>
              <div className="space-y-2">
                {[
                  { icon: ShieldCheckIcon, text: 'System check' },
                  { icon: ClockIcon, text: 'Process check' },
                  { icon: DocumentCheckIcon, text: 'Speed check' },
                  { icon: ArrowsPointingOutIcon, text: 'Manual work' },
                  { icon: CodeBracketIcon, text: 'Repetative task' }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-2 bg-gray-900 rounded-lg text-gray-400 text-sm"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ProcessStep>

          {/* Step 2: AI Development */}
          <ProcessStep
            step="2"
            title="AI Development"
            description="Our team builds intelligent automation systems tailored to your business processes."
          >
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <ArrowLeftIcon className="w-4 h-4 text-gray-500" />
                  <ArrowRightIcon className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex items-center gap-2">
                  <MinusIcon className="w-4 h-4 text-gray-500" />
                  <XMarkIcon className="w-4 h-4 text-gray-500" />
                </div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-[#8B5CF6]">return "Automation triggered!"</div>
                <div className="text-gray-400">else:</div>
                <div className="text-gray-400 pl-4">return "No action taken."</div>
                <div className="text-[#8B5CF6]">def get_status(this):</div>
                <div className="text-gray-400 pl-4">return f"Status: {'{this.status}'}"</div>
                <div className="text-gray-500">class AutomationTrigger:</div>
              </div>
            </div>
          </ProcessStep>

          {/* Step 3: Seamless Integration */}
          <ProcessStep
            step="3"
            title="Seamless Integration"
            description="We smoothly integrate AI solutions into your existing infrastructure with minimal disruption."
          >
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8">
              <div className="flex items-center justify-between gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mb-2">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-12 h-12 text-[#8B5CF6]"
                    >
                      <CogIcon className="w-full h-full" />
                    </motion.div>
                  </div>
                  <p className="text-gray-400 text-sm">Our solution</p>
                </div>
                <div className="flex-1 h-0.5 bg-[#8B5CF6]/20 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-[#8B5CF6]"
                  />
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-[#8B5CF6]">M</span>
                  </div>
                  <p className="text-gray-400 text-sm">Your stack</p>
                </div>
              </div>
            </div>
          </ProcessStep>

          {/* Step 4: Continuous Optimization */}
          <ProcessStep
            step="4"
            title="Continuous Optimization"
            description="We refine performance, analyze insights, and enhance automation for long-term growth."
          >
            <div className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-400" />
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium">Chatbot system</h4>
                  <p className="text-gray-500 text-xs">Efficiency will increase by 20%</p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-[#8B5CF6] border-t-transparent animate-spin" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <FunnelIcon className="w-6 h-6 text-gray-400" />
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium">Workflow system</h4>
                  <p className="text-gray-500 text-xs">Update available</p>
                </div>
                <ArrowsPointingOutIcon className="w-5 h-5 text-[#8B5CF6]" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <ChartBarIcon className="w-6 h-6 text-gray-400" />
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium">Sales system</h4>
                  <p className="text-gray-500 text-xs">Up to date</p>
                </div>
                <CheckIcon className="w-5 h-5 text-[#8B5CF6]" />
              </motion.div>
            </div>
          </ProcessStep>
        </div>

        {/* Case Studies Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
            >
              Case Studies
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              See How Smart AI Automation<br />Transforms Businesses
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              See how AI automation streamlines operations, boosts and drives growth.
            </motion.p>
          </div>

          {/* Case Study */}
          <CaseStudy
            logo={
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full" />
                </div>
                <span className="text-white text-xl font-medium">Logoipsum</span>
              </div>
            }
            title="AI-driven forecasting cut inventory waste by 40% for TrailForge"
            description="TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster."
            impacts={[
              "40% Less Inventory Waste",
              "35% Faster Production",
              "20% More Accurate Forecasting",
              "25% Faster Fulfillment"
            ]}
            image="/suitcase-dark.jpg"
          />

          {/* Drag to Explore */}
          <div className="flex items-center justify-center gap-4 mt-12 text-gray-400">
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Drag to explore</span>
            <ArrowRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
} 