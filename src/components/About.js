import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const PhilosophyItem = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-gray-900/50 rounded-xl border border-gray-800"
  >
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const BuildItem = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 text-gray-300"
  >
    <CheckIcon className="w-5 h-5 text-[#8B5CF6]" />
    <span>{title}</span>
  </motion.div>
);

const StackItem = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 text-gray-300"
  >
    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full" />
    <span>{title}</span>
  </motion.div>
);

export default function About() {
  const philosophyItems = [
    {
      title: "Speed Wins",
      description: "We believe in launching fast, iterating quickly, and shipping value in weeks — not quarters."
    },
    {
      title: "AI is Not the Future. It's Now",
      description: "From smart agents to workflow automation, we bake AI into your systems from day one."
    },
    {
      title: "Software Should Fit Your Business",
      description: "Not the other way around. Everything we build is custom-fit for how you operate."
    },
    {
      title: "Clarity Over Complexity",
      description: "No bloated dashboards, no tech jargon — just clean builds, transparent comms, and results."
    }
  ];

  const buildItems = [
    "Internal tools, CRMs & client portals",
    "AI-powered apps & automation workflows",
    "Scheduling, billing, and job ops platforms",
    "Voice/chat agents and data integrations"
  ];

  const stackItems = [
    "Frontend: React, Tailwind, Next.js",
    "Backend: Node.js, Django, Supabase",
    "Automation: Make.com, Zapier, LangChain",
    "AI: OpenAI, Claude, custom LLM prompts",
    "Infra: Vercel, Firebase, DigitalOcean"
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About Learn With Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            At Learn With Stack, we don't just build software — we build momentum.
            We're a lean, agile, and impact-driven team of developers, product thinkers,
            and automation nerds who specialize in helping businesses move faster, smarter,
            and with less friction.
          </motion.p>
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg">
            To empower entrepreneurs, operators, and teams with custom tech that just works
            — so they can focus on scaling, not struggling with tools.
          </p>
        </motion.div>

        {/* Philosophy */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-white text-center mb-10"
          >
            Our Philosophy
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophyItems.map((item, index) => (
              <PhilosophyItem
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* What We Build */}
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-white mb-6"
            >
              What We Build
            </motion.h3>
            <div className="space-y-4">
              {buildItems.map(item => (
                <BuildItem key={item} title={item} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-white mb-6"
            >
              Our Stack
            </motion.h3>
            <div className="space-y-4">
              {stackItems.map(item => (
                <StackItem key={item} title={item} />
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
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Who We Work With</h3>
          <p className="text-gray-300 mb-8">
            We're industry agnostic — but always obsessed with execution. We've helped:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "VC-backed startups build MVPs",
              "Service businesses ditch spreadsheets",
              "Founders automate their operations",
              "Sales & lending teams boost conversions"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <p className="text-gray-300 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 