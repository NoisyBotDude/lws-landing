import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    rating: 5,
    content: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
    author: {
      name: "James Carter",
      role: "CEO at TechFlow Solutions",
      image: "/avatars/james.jpg"
    }
  },
  {
    rating: 5,
    content: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
    author: {
      name: "Sophia Martinez",
      role: "Operations Manager at NexaCorp",
      image: "/avatars/sophia.jpg"
    }
  },
  {
    rating: 5,
    content: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
    author: {
      name: "David Reynolds",
      role: "Head of Sales at GrowthPeak",
      image: "/avatars/david.jpg"
    }
  },
  {
    rating: 5,
    content: "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract",
    author: {
      name: "Emily Wong",
      role: "Customer Success Lead at SupportHive",
      image: "/avatars/emily.jpg"
    }
  }
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl bg-[#111111] border border-gray-800 p-8 h-full"
  >
    {/* Purple gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E1435] rounded-2xl" />

    {/* Content */}
    <div className="relative z-10">
      {/* Star rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-[#8B5CF6]" />
        ))}
      </div>

      {/* Testimonial text */}
      <blockquote className="text-lg text-gray-300 mb-8">
        "{testimonial.content}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800">
          <img
            src={testimonial.author.image}
            alt={testimonial.author.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-medium text-white">
            {testimonial.author.name}
          </div>
          <div className="text-sm text-gray-400">
            {testimonial.author.role}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
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
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Why Businesses Love<br />
            Our AI Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Real businesses, real results with AI automation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 