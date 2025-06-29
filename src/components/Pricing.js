import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started with AI automation.',
    monthlyPrice: 499,
    yearlyPrice: 449,
    features: [
      'Up to 5 automated workflows',
      'Basic AI assistant features',
      'Email and chat support',
      'Weekly performance reports',
      'Up to 3 team members',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies needing advanced automation capabilities.',
    monthlyPrice: 999,
    yearlyPrice: 899,
    features: [
      'Up to 15 automated workflows',
      'Advanced AI assistant features',
      'Priority support 24/7',
      'Daily performance analytics',
      'Up to 10 team members',
      'Custom integrations',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations requiring full-scale AI automation solutions.',
    monthlyPrice: 2499,
    yearlyPrice: 2249,
    features: [
      'Unlimited automated workflows',
      'Enterprise AI capabilities',
      'Dedicated support team',
      'Real-time analytics dashboard',
      'Unlimited team members',
      'Custom development',
      'SLA guarantee',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section">
      {/* Spacey background effect */}
      <div className="spacey-bg" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold sm:text-4xl gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect plan for your business needs
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isAnnual ? 'bg-primary' : 'bg-gray-700'
              }`}
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-primary">(Save 10%)</span>
            </span>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative group ${plan.popular ? 'lg:-mt-8' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary py-1 px-3 text-sm text-white text-center">
                  Most Popular
                </div>
              )}

              <div className={`h-full glass-card p-8 ${plan.popular ? 'border-2 border-primary' : ''}`}>
                <div className="moving-gradient" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-gray-300 h-12">{plan.description}</p>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-300">/mo</span>
                    </div>
                    {isAnnual && (
                      <p className="mt-1 text-sm text-primary">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                      </p>
                    )}
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                      >
                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    className={`mt-8 w-full rounded-lg py-3 px-4 text-sm font-semibold focus:outline-none ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 