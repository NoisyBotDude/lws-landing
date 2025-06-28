import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 37,
    description: 'Perfect for small businesses starting with AI automation.',
    features: [
      'Basic workflow automation',
      'AI-powered personal assistant',
      'Standard analytics & reporting',
      'Email & chat support',
      'Up to 3 AI integrations',
    ],
  },
  {
    name: 'Professional',
    price: 75,
    description: 'Perfect for growing businesses needing advanced AI features.',
    features: [
      'Advanced workflow automation',
      'AI-driven sales & marketing tools',
      'Enhanced data analytics & insights',
      'Priority customer support',
      'Up to 10 AI integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Perfect for large organizations requiring custom AI solutions.',
    features: [
      'Fully customizable AI automation',
      'Dedicated AI business consultant',
      'Enterprise-grade compliance',
      '24/7 VIP support',
      'Unlimited AI integrations',
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Best AI Automation, at the Right Price
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose a plan that fits your business needs and start automating with AI
          </motion.p>

          <motion.div
            className="mt-8 inline-flex items-center rounded-full border p-1 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !annual ? 'bg-primary text-white' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                annual ? 'bg-primary text-white' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annually
            </button>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 shadow-sm ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {plan.popular && (
                <span className="absolute top-0 -translate-y-1/2 bg-primary text-white px-3 py-0.5 text-sm font-medium rounded-full">
                  Popular
                </span>
              )}
              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-bold">${annual ? plan.price * 10 : plan.price}</span>
                      <span className="ml-1 text-gray-600">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  )}
                </div>
                <p className="mt-4 text-gray-600">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={plan.price === 'Custom' ? '#contact' : '#'}
                  className={`block w-full text-center btn ${
                    plan.popular ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Schedule a call' : 'Choose this plan'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 