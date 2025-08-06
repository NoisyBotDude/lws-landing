import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    rating: 5,
    content: "Working with this team on our Shopify website for Woodin.in was an exceptionally positive experience from start to finish. Their professionalism was evident in every interaction; they were incredibly responsive, understood our vision perfectly, and truly felt like an extension of our own team. The communication was clear and consistent, which made the entire process smooth and stress-free. They delivered a high-quality, fully functional e-commerce site exactly when they said they would, allowing us to launch on schedule. I would highly prefer to work with them again on future projects.",
    author: {
      name: "Badie Almualem",
      role: "Owner, Woodin.in ",
      // image: "/avatars/james.jpg"
    }
  },
  {
    rating: 5,
    content: "Build With Stack played a crucial role in helping us scale ConvoGPT from a powerful idea to a functional AI-driven platform. Their deep expertise in automation, AI integrations, and frontend/backend development allowed us to build fast, iterate faster, and deliver a seamless experience to our users. Whether it was designing complex workflows, setting up AI agents, or ensuring rock-solid infrastructure, the team was proactive, responsive, and always solutions-focused. They're not just a dev agency, they're an extension of our core team.",
    author: {
      name: "Jeremy David",
      role: "CEO, ConvoGPT AI ",
      // image: "/avatars/james.jpg"
    }
  },
  {
    rating: 5,
    content: "Working with Build With Stack has been a total game-changer for Modvertise. We needed a custom-built, scalable solution that could support both our internal ops and client-facing systems and they delivered above and beyond. Their team not only understood our complex workflows but also helped simplify and automate key areas like scheduling, CRM, payment tracking, and reporting. Communication was smooth, timelines were respected, and the product exceeded expectations. If you're looking for a team that treats your project like their own startup, Build With Stack is who you want.",
    author: {
      name: "MG",
      role: "CEO, modvertise.com ",
      // image: "/avatars/james.jpg"
    }
  },
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
          {testimonial.author.image ? (
            <img
              src={testimonial.author.image}
              alt={testimonial.author.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-full h-full text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8c0 2.208-1.79 4-3.998 4-2.208 0-3.998-1.792-3.998-4s1.79-4 3.998-4c2.208 0 3.998 1.792 3.998 4z" />
            </svg>
          )}
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

        <Slider
          dots={true}
          arrows={false}
          infinite={true}
          speed={500}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          centerMode={true}
          centerPadding="25px"
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.author.name} className='px-4'>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
} 