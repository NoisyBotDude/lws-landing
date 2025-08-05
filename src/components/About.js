import { motion } from 'framer-motion';
import {
  SparklesIcon,
  ServerIcon,
  ChartBarIcon,
  BriefcaseIcon,
  BoltIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  CodeBracketIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const PhilosophyCard = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-6 bg-white/5 backdrop-blur-sm shadow-inner shadow-purple-500/50 rounded-2xl border border-gray-800 hover:border-[#8B5CF6]/30 transition-all"
  >
    <div className="absolute -right-3 -top-3 w-16 h-16 bg-[#8B5CF6]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg border border-[#8B5CF6]/20">
      <Icon className="w-6 h-6 text-[#8B5CF6]" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const FeaturePill = ({ title, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#8B5CF6]/30 transition-colors"
  >
    <div className="w-8 h-8 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg">
      <Icon className="w-4 h-4 text-[#8B5CF6]" />
    </div>
    <span className="text-gray-300">{title}</span>
  </motion.div>
);

export default function About() {
  const philosophyItems = [
    {
      title: "Speed Wins",
      description: "We believe in launching fast, iterating quickly, and shipping value in weeks — not quarters.",
      icon: BoltIcon
    },
    {
      title: "AI is Not the Future. It's Now",
      description: "From smart agents to workflow automation, we bake AI into your systems from day one.",
      icon: CpuChipIcon
    },
    {
      title: "Software Should Fit Your Business",
      description: "Not the other way around. Everything we build is custom-fit for how you operate.",
      icon: PuzzlePieceIcon
    },
    {
      title: "Clarity Over Complexity",
      description: "No bloated dashboards, no tech jargon — just clean builds, transparent comms, and results.",
      icon: SparklesIcon
    }
  ];

  const buildItems = [
    { title: "Internal tools, CRMs & client portals", icon: BriefcaseIcon },
    { title: "AI-powered apps & automation workflows", icon: CpuChipIcon },
    { title: "Scheduling, billing, and job ops platforms", icon: ChartBarIcon },
    { title: "Voice/chat agents and data integrations", icon: CodeBracketIcon }
  ];

  const stackItems = [
    { title: "Frontend: React, Tailwind, Next.js", icon: CodeBracketIcon },
    { title: "Backend: Node.js, Django, Supabase", icon: ServerIcon },
    { title: "Automation: Make.com, Zapier, LangChain", icon: ArrowPathIcon },
    { title: "AI: OpenAI, Claude, custom LLM prompts", icon: CpuChipIcon },
    { title: "Infra: Vercel, Firebase, DigitalOcean", icon: ServerIcon }
  ];

  const clientTypes = [
    "VC-backed startups building MVPs",
    "Service businesses ditching spreadsheets",
    "Founders automating operations",
    "Sales teams boosting conversions",
    "Agencies scaling delivery",
    "SaaS companies adding AI features",
    "E-commerce optimizing workflows",
    "Fintechs streamlining processes"
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Build With Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            We don't just build software — we build <span className="text-[#8B5CF6]">momentum</span>.
            A lean team of developers, product thinkers, and automation specialists
            helping businesses move faster, smarter, and with less friction.
          </motion.p>
        </div>

        {/* Philosophy */}
        <div className="mb-28 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {philosophyItems.map((item, index) => (
              <PhilosophyCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* What We Build & Stack */}
        <div className="grid lg:grid-cols-2 gap-16 mb-28">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-8"
            >
              What We Build
            </motion.h3>
            <div className="space-y-4">
              {buildItems.map((item, index) => (
                <FeaturePill
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-8"
            >
              Our Stack
            </motion.h3>
            <div className="space-y-4">
              {stackItems.map((item, index) => (
                <FeaturePill
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Who We Work With */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-12"
          >
            Who We Work With
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Industry agnostic but execution obsessed. We've helped:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clientTypes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#8B5CF6]/30 transition-colors"
              >
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}