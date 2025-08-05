import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  DocumentTextIcon,
  CheckIcon,
  PlusIcon,
  ArrowRightIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  ShareIcon,
  CalendarIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const ServiceSection = ({ tag, title, description, children, isReversed = false }) => (
  <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
    {isReversed ? (
      <>
        {children}
        <div className="lg:pl-12 order-first lg:order-last">
          <Content tag={tag} title={title} description={description} />
        </div>
      </>
    ) : (
      <>
        <div className="lg:pr-12">
          <Content tag={tag} title={title} description={description} />
        </div>
        {children}
      </>
    )}
  </div>
);

const Content = ({ tag, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="max-w-xl"
  >
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-block px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
    >
      {tag}
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold text-white mb-6"
    >
      {title}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-gray-400 text-lg mb-8"
    >
      {description}
    </motion.p>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/20" />

      <div className="container relative z-10">
        {/* Workflow Automation Section */}
        <ServiceSection
          tag="Custom Software Development"
          title="Build Products That Scale"
          description="From complex CRMs to internal tools, customer portals, or admin dashboards we build products tailored to how you work. No cookie-cutter code. Just scalable software that grows with you."
        >
          <AnimatedCard>
            <div className="flex items-center gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-900 rounded-lg text-white text-sm"
              >
                All Tasks
              </motion.button>
              <span className="text-gray-500 text-sm">Waiting for approval</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-[70%] h-full bg-[#8B5CF6]" />
              </motion.div>
              <span className="text-gray-400 text-sm">70% prepared</span>
            </div>

            <div className="space-y-3">
              {[
                { icon: ClockIcon, title: 'Payment reminder', subtitle: 'sent to selected clients', status: 'completed' },
                { icon: CurrencyDollarIcon, title: 'Payroll management', subtitle: 'Due on 2nd July', status: 'pending' },
                { icon: UserGroupIcon, title: 'Employee Tracking', subtitle: '2 days ago', status: 'completed' },
                { icon: DocumentTextIcon, title: 'Social media post', subtitle: 'Cancelled by user', status: 'cancelled' }
              ].map((task, index) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800">
                    <task.icon className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-sm font-medium">{task.title}</h3>
                    <p className="text-gray-500 text-xs">{task.subtitle}</p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full">
                    {task.status === 'completed' && <CheckIcon className="w-4 h-4 text-[#8B5CF6]" />}
                    {task.status === 'pending' && <div className="w-2 h-2 bg-yellow-500 rounded-full" />}
                    {task.status === 'cancelled' && <div className="w-2 h-2 bg-red-500 rounded-full" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </ServiceSection>

        {/* AI Assistant Section */}
        <ServiceSection
          tag="AI Integration & Automation"
          title="Save Time. Close Faster."
          description="We inject AI into your systems - think automated outreach, smart scheduling, lead scoring, data extraction, and more. Save time, close faster, and delight customers."
          isReversed
        >
          <AnimatedCard>
            <div className="relative aspect-square rounded-xl bg-gray-900/50 border border-gray-800 p-6 flex flex-col items-center justify-center text-center">
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
                className="w-24 h-24 rounded-full bg-[#8B5CF6]/20 absolute"
              />
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-20 h-20 rounded-full bg-[#8B5CF6]/30"
              />
              <h3 className="text-xl text-white font-medium mt-6 mb-2">What can I help with?</h3>
              <p className="text-sm text-gray-400 mb-6">Weather you want help in customer handling or make changes in your system just give me command</p>
              
              <div className="w-full p-3 bg-gray-900 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>Schedule a 30 day content</span>
                  <ArrowRightIcon className="w-4 h-4 ml-auto" />
                </div>
              </div>

              <div className="flex items-center gap-2 w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg text-gray-400 text-sm flex-1"
                >
                  <PlusIcon className="w-4 h-4" />
                  Add document
                </motion.button>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <DocumentMagnifyingGlassIcon className="w-4 h-4" /> Analyze
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <ShareIcon className="w-4 h-4" /> Generate Image
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <ChartBarIcon className="w-4 h-4" /> research
                </span>
              </div>
            </div>
          </AnimatedCard>
        </ServiceSection>

        {/* Sales & Marketing Section */}
        <ServiceSection
          tag="Workflow Optimization"
          title="Streamline Your Operations"
          description="We rebuild your operations from the ground up using tools like Make.com, Zapier, Retool, or fully custom backends. No more duplicate work or missed handoffs."
        >
          <AnimatedCard>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-white text-lg">E-mail Sending..</h3>
                <div className="w-5 h-5 rounded-full border-2 border-[#8B5CF6] border-t-transparent animate-spin ml-auto" />
              </div>

              <div className="flex gap-2 mb-4">
                {['LinkedIn', 'IT services', 'Founders'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-900 rounded-full text-gray-400 text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="w-10 h-10 bg-gray-800 rounded-full" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Gorge Chapel</h4>
                    <p className="text-gray-500 text-xs">Founder</p>
                  </div>
                  <span className="ml-auto px-2 py-1 bg-[#8B5CF6]/20 rounded text-[#8B5CF6] text-xs">
                    Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                    <p className="text-gray-500 text-xs mb-1">E-mail</p>
                    <p className="text-white text-sm">gorge@mail.com</p>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                    <p className="text-gray-500 text-xs mb-1">Company</p>
                    <p className="text-white text-sm">Chapel LLC</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </ServiceSection>

        {/* Custom Projects Section */}
        <ServiceSection
          tag="Fractional Tech Leadership"
          title="Your On-Demand CTO"
          description="Need a CTO brain without the full-time cost? We'll help architect your product, hire the right engineers, and ship fast. One point of contact, weekly updates, no communication black hole."
          isReversed
        >
          <AnimatedCard>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-white text-lg">Hey David!</h3>
                <p className="text-gray-400 text-sm">Here is your Custom project & schedule</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <ArrowPathIcon className="w-4 h-4" />
                  <span>On going project :</span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <CalendarIcon className="w-6 h-6 text-gray-400" />
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-medium">Customer Support Chatbot</h4>
                      <p className="text-gray-500 text-xs">90% Finished</p>
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-[#8B5CF6] border-t-transparent animate-spin" />
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h4 className="text-gray-400 text-sm">Schedule</h4>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, index) => (
                    <div
                      key={day}
                      className={`p-2 text-sm ${
                        index === 6
                          ? 'bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-lg'
                          : 'text-gray-400'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm text-center mt-4">No meeting today.</p>
              </div>
            </div>
          </AnimatedCard>
        </ServiceSection>

        {/* Feature tags */}
        <div className="flex flex-wrap justify-center gap-4 pb-24">
          {[
            'Global Dev Talent',
            'US Standards',
            'Built-In PM + Dev Team',
            'Speed Without Sacrifice',
            'Code Reviews',
            'Clean Handoffs'
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="px-4 py-2 bg-gray-900 rounded-lg"
            >
              <h3 className="text-white font-medium">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 