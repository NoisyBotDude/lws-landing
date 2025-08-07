import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import {
  DocumentTextIcon,
  CheckIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowPathIcon,
  ArrowLeftIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  CodeBracketIcon,
  BoltIcon,
  EnvelopeIcon,
  CloudArrowDownIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  ChevronRightIcon,
  CpuChipIcon,
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
        <div className="mt-32">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
            >
              Our Toolkits
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Tools & APIs<br />We Work With
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              We're tech-agnostic and tool-native. We use whatever it takes to get the job done.
            </motion.p>
          </div>

          {/* Case Study - Replace with Toolkit Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automation",
                items: ["Make.com", "Zapier", "Google Apps Script"]
              },
              {
                title: "AI & ML",
                items: ["OpenAI", "Claude", "LangChain", "GPT Agents"]
              },
              {
                title: "CRM & Tools",
                items: ["GoHighLevel", "HubSpot", "Monday.com"]
              },
              {
                title: "Infrastructure",
                items: ["Vercel", "Firebase", "DigitalOcean"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-900/50 rounded-3xl border border-gray-800 shadow-md shadow-purple-500"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={item} className="text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Drag to Explore */}
          <div className="flex items-center justify-center gap-4 mt-12 text-gray-400">
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Drag to explore</span>
            <ArrowRightIcon className="w-5 h-5" />
          </div>
        </div>

        <ServiceSection
          tag="Custom Software Development"
          title="Build Products That Scale"
          description="From complex CRMs to internal tools, customer portals, or admin dashboards we build products tailored to how you work. No cookie-cutter code. Just scalable software that grows with you."
        >
          <AnimatedCard>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-blue-600/10 blur-2xl" />

              <div className="relative z-10">
                {/* Progress indicator */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-medium">Project Progress</h3>
                  <span className="text-[#8B5CF6] text-sm font-medium">70% complete</span>
                </div>

                <div className="w-full h-2 bg-gray-800 rounded-full mb-8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-full"
                  />
                </div>

                {/* Development features */}
                <div className="space-y-4">
                  {[
                    {
                      icon: CodeBracketIcon,
                      title: 'Custom Architecture',
                      description: 'Tailored to your specific requirements',
                      active: true
                    },
                    {
                      icon: ScaleIcon,
                      title: 'Scalability Built-in',
                      description: 'Designed to grow with your user base',
                      active: true
                    },
                    {
                      icon: ShieldCheckIcon,
                      title: 'Security Layers',
                      description: 'Enterprise-grade protection',
                      active: true
                    },
                    {
                      icon: ArrowsPointingOutIcon,
                      title: 'API Integration',
                      description: 'Seamless connection with your ecosystem',
                      active: true
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-4 rounded-xl border ${feature.active ? 'border-[#8B5CF6]/30 bg-[#8B5CF6]/10' : 'border-gray-800 bg-gray-900/50'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${feature.active ? 'bg-[#8B5CF6]' : 'bg-gray-800'}`}>
                          <feature.icon className={`w-5 h-5 ${feature.active ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        <div>
                          <h3 className={`text-sm font-medium ${feature.active ? 'text-white' : 'text-gray-400'}`}>
                            {feature.title}
                          </h3>
                          <p className={`text-xs ${feature.active ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature.description}
                          </p>
                        </div>
                        {feature.active && (
                          <div className="ml-auto flex items-center justify-center w-6 h-6 rounded-full bg-[#8B5CF6]/20">
                            <CheckIcon className="w-4 h-4 text-[#8B5CF6]" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
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
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 overflow-hidden h-full">
              {/* Animated background elements */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-purple-600/10 blur-2xl" />

              <div className="relative z-10 h-full flex flex-col">
                {/* AI Process Visualization */}
                <div className="grid grid-cols-4 gap-2 mb-8">
                  {['Data', 'Process', 'Analyze', 'Act'].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${index < 2 ? 'bg-[#8B5CF6]' : 'bg-gray-700'}`}>
                        {index === 0 && <CloudArrowDownIcon className="w-5 h-5 text-white" />}
                        {index === 1 && <Cog6ToothIcon className="w-5 h-5 text-white" />}
                        {index === 2 && <MagnifyingGlassIcon className="w-5 h-5 text-white" />}
                        {index === 3 && <BoltIcon className="w-5 h-5 text-white" />}
                      </div>
                      <span className={`text-xs ${index < 2 ? 'text-white' : 'text-gray-400'}`}>{step}</span>
                      {index < 3 && (
                        <motion.div
                          className="h-0.5 w-full bg-gray-700 mt-4 relative"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                          <div className={`absolute h-full ${index < 1 ? 'bg-[#8B5CF6] w-full' : 'bg-gray-700 w-0'}`} />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* AI Capabilities Showcase */}
                <div className="space-y-4 flex-1">
                  {[
                    {
                      icon: EnvelopeIcon,
                      title: 'Automated Outreach',
                      description: 'AI-driven personalized messaging at scale',
                      status: 'active'
                    },
                    {
                      icon: CalendarIcon,
                      title: 'Smart Scheduling',
                      description: 'Optimized meeting times based on behavior',
                      status: 'active'
                    },
                    {
                      icon: ChartBarIcon,
                      title: 'Lead Scoring',
                      description: 'Prioritize high-value opportunities',
                      status: 'implementing'
                    },
                    {
                      icon: DocumentTextIcon,
                      title: 'Data Extraction',
                      description: 'Automated processing of unstructured data',
                      status: 'planned'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`p-4 rounded-xl border ${feature.status === 'active' ? 'border-[#8B5CF6]/30 bg-[#8B5CF6]/10' : 'border-gray-800 bg-gray-900/50'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${feature.status === 'active' ? 'bg-[#8B5CF6]' : 'bg-gray-800'}`}>
                          <feature.icon className={`w-5 h-5 ${feature.status === 'active' ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-white">{feature.title}</h3>
                          <p className="text-xs text-gray-400">{feature.description}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className={`text-xs px-2 py-1 rounded-full ${feature.status === 'active' ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]' : feature.status === 'implementing' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-gray-700 text-gray-400'}`}>
                            {feature.status}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-lg text-white font-medium flex items-center justify-center gap-2"
                >
                  <BoltIcon className="w-5 h-5" />
                  Automate Your Workflow
                </motion.button>
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
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 overflow-hidden h-full">
              {/* Animated workflow visualization */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-purple-600/10 blur-2xl" />

              <div className="relative z-10">
                {/* Workflow visualization */}
                <div className="flex items-center justify-between mb-8 relative">
                  {['Input', 'Process', 'Output'].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center z-10"
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${index === 1 ? 'bg-[#8B5CF6]' : 'bg-gray-700'}`}>
                        {index === 0 && <ArrowDownTrayIcon className="w-5 h-5 text-white" />}
                        {index === 1 && <Cog6ToothIcon className="w-5 h-5 text-white" />}
                        {index === 2 && <ArrowUpTrayIcon className="w-5 h-5 text-white" />}
                      </div>
                      <span className={`text-sm ${index === 1 ? 'text-white' : 'text-gray-400'}`}>{step}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    className="absolute h-1 w-full bg-gray-700 top-6 left-0 right-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute h-full bg-[#8B5CF6] w-2/3" />
                  </motion.div>
                </div>

                {/* Platform Integration Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Make.com', 'Zapier', 'Retool', 'Custom API'].map((platform) => (
                    <motion.div
                      key={platform}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 bg-gray-800 rounded-lg text-sm flex items-center gap-2"
                    >
                      {platform === 'Make.com' && <PuzzlePieceIcon className="w-4 h-4 text-blue-400" />}
                      {platform === 'Zapier' && <BoltIcon className="w-4 h-4 text-yellow-400" />}
                      {platform === 'Retool' && <CodeBracketIcon className="w-4 h-4 text-green-400" />}
                      {platform === 'Custom API' && <WrenchScrewdriverIcon className="w-4 h-4 text-purple-400" />}
                      <span className="text-gray-300">{platform}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Workflow Example */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center">
                        <EnvelopeIcon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-medium">Automated Lead Processing</h3>
                      <div className="w-5 h-5 rounded-full border-2 border-[#8B5CF6] border-t-transparent animate-spin ml-auto" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="p-2 bg-gray-900/50 rounded-lg">
                        <p className="text-gray-400 text-xs">Trigger</p>
                        <p className="text-white text-sm">New form submission</p>
                      </div>
                      <div className="p-2 bg-gray-900/50 rounded-lg">
                        <p className="text-gray-400 text-xs">Actions</p>
                        <p className="text-white text-sm">3 automated steps</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['CRM Update', 'Email Sent', 'Slack Alert', 'Data Enrichment'].map((action) => (
                        <span key={action} className="px-2 py-1 bg-[#8B5CF6]/10 rounded text-[#8B5CF6] text-xs">
                          {action}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 mt-4"
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                    Optimize Your Workflow
                  </motion.button>
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
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 overflow-hidden h-full">
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-purple-600/10 blur-2xl" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-white text-xl font-medium mb-1">CTO Dashboard</h3>
                  <p className="text-gray-400 text-sm">Your fractional tech leadership portal</p>
                </div>

                {/* Current Project */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <ArrowPathIcon className="w-4 h-4" />
                    <span>Active Project</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center border border-[#8B5CF6]/20">
                        <CpuChipIcon className="w-6 h-6 text-[#8B5CF6]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white text-sm font-medium">Customer Support AI</h4>
                          <span className="px-2 py-0.5 bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] text-xs">Phase 3</span>
                        </div>
                        <p className="text-gray-400 text-xs mb-3">Natural language processing implementation</p>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                          <div className="bg-[#8B5CF6] h-1.5 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>82% complete</span>
                          <span>ETA: June 15</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Weekly Touchpoints */}
                <div className="mt-auto">
                  <h4 className="text-gray-400 text-sm mb-3">Next Leadership Touchpoints</h4>
                  <div className="space-y-2">
                    {[
                      { day: 'Mon', date: 'Jun 5', time: '10:00 AM', type: 'Strategy Call' },
                      { day: 'Thu', date: 'Jun 8', time: '2:30 PM', type: 'Architecture Review' },
                      { day: 'Fri', date: 'Jun 9', time: '9:00 AM', type: 'Team Sync' }
                    ].map((meeting, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700"
                      >
                        <div className={`w-10 h-10 flex flex-col items-center justify-center rounded-lg ${index === 0 ? 'bg-[#8B5CF6]/10 border border-[#8B5CF6]/20' : 'bg-gray-700'}`}>
                          <span className={`text-xs ${index === 0 ? 'text-[#8B5CF6]' : 'text-gray-400'}`}>{meeting.day}</span>
                          <span className={`text-[10px] font-medium ${index === 0 ? 'text-white' : 'text-gray-300'}`}>{meeting.date}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm">{meeting.type}</p>
                          <p className="text-gray-400 text-xs">{meeting.time}</p>
                        </div>
                        <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
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
              className="px-4 py-2 bg-gray-900 rounded-xl shadow shadow-purple-500"
            >
              <h3 className="text-white font-medium">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 