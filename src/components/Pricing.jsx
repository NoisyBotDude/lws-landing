import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  BoltIcon, 
  SparklesIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const plans = [
  {
    icon: RocketLaunchIcon,
    name: "Starter",
    price: 37,
    description: "Perfect for small businesses starting with AI automation.",
    features: [
      "Basic workflow automation",
      "AI-powered personal assistant",
      "Standard analytics & reporting",
      "Email & chat support",
      "Up to 3 AI integrations"
    ],
    buttonText: "Choose this plan",
    buttonStyle: "border border-gray-800 hover:border-gray-700 bg-gray-900 hover:bg-gray-800"
  },
  {
    icon: BoltIcon,
    name: "Professional",
    price: 75,
    description: "Perfect for small businesses starting with AI automation.",
    features: [
      "Advanced workflow automation",
      "AI-driven sales & marketing tools",
      "Enhanced data analytics & insights",
      "Priority customer support",
      "Up to 10 AI integrations"
    ],
    buttonText: "Choose this plan",
    buttonStyle: "bg-[#8B5CF6] hover:bg-[#7C3AED]",
    popular: true
  },
  {
    icon: SparklesIcon,
    name: "Enterprise",
    price: "Custom",
    description: "Perfect for small businesses starting with AI automation.",
    features: [
      "Fully customizable AI automation",
      "Dedicated AI business consultant",
      "Enterprise-grade compliance",
      "24/7 VIP support",
      "Unlimited AI integrations"
    ],
    buttonText: "Schedule a call",
    buttonStyle: "border border-gray-800 hover:border-gray-700 bg-gray-900 hover:bg-gray-800"
  }
];

const PricingCard = ({ plan, isAnnual }) => {
  const price = typeof plan.price === 'number' 
    ? isAnnual 
      ? Math.floor(plan.price * 10) 
      : plan.price
    : plan.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl bg-[#111111] border border-gray-800 p-8 ${
        plan.popular ? 'bg-gradient-to-b from-[#111111] to-[#1E1435]' : ''
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 right-8 px-3 py-1 bg-[#8B5CF6] rounded-full text-white text-sm">
          Popular
        </span>
      )}

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
          <plan.icon className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-xl text-white font-medium">{plan.name}</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          {typeof price === 'number' && (
            <span className="text-gray-400">/month</span>
          )}
        </div>
        <p className="text-gray-400 mt-2">{plan.description}</p>
      </div>

      <button
        className={`w-full py-3 px-4 rounded-lg text-white transition-colors duration-200 mb-8 ${plan.buttonStyle}`}
      >
        {plan.buttonText}
      </button>

      <div className="space-y-6">
        <h4 className="text-white font-medium">What's Included:</h4>
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-300"
            >
              <CheckIcon className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
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
            Pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Best AI Automation,<br />
            at the Right Price
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Choose a plan that fits your business needs and start automating with AI
          </motion.p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-[#8B5CF6]' : 'bg-gray-700'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annually
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
} 