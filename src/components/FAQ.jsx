import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { 
	QuestionMarkCircleIcon,
	SparklesIcon 
} from '@heroicons/react/24/outline';

const faqs = [
	{
		question: "What kind of projects do you typically work on?",
		answer: "We specialize in building custom software solutions including CRMs, internal tools, client portals, admin dashboards, AI-powered apps, and automation workflows. Our sweet spot is complex operational software that needs to scale."
	},
	{
		question: "How does your CTO-as-a-Service work?",
		answer: "We provide fractional tech leadership to help you plan, build, and scale. This includes architecture & roadmap planning, hiring and managing developers, weekly reviews, product decisions, and documentation. We can either augment your existing tech team or be your complete tech partner."
	},
	{
		question: "What's your development process like?",
		answer: "We follow an agile methodology with weekly sprints and updates. You'll have one main point of contact (your PM) who coordinates with our dev team. We emphasize clear communication, regular demos, and iterative feedback to ensure we're building exactly what you need."
	},
	{
		question: "How do you handle project handoffs?",
		answer: "All our systems are built to be handover-ready. We provide comprehensive documentation, clean code with comments, and knowledge transfer sessions. When you're ready to transition to an internal team, we ensure a smooth handoff with no technical debt."
	},
	{
		question: "What technologies do you work with?",
		answer: "We're tech-agnostic and choose the best tools for your specific needs. Our stack typically includes React/Next.js for frontend, Node.js/Django for backend, various AI tools (OpenAI, Claude, etc.), and automation platforms like Make.com and Zapier. We also work with popular CRMs and can integrate with most third-party tools."
	}
];

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="group relative"
		>
			{/* Card with glass-morphism effect */}
			<div className={`relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
				isOpen 
					? 'border-[#8B5CF6]/50 shadow-lg shadow-[#8B5CF6]/10' 
					: 'border-gray-800 hover:border-gray-700'
			}`}>
				{/* Gradient overlay on hover/open */}
				<div className={`absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6]/5 to-purple-600/0 transition-opacity duration-300 ${
					isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
				}`} />
				
				{/* Question button */}
				<button
					onClick={onToggle}
					className="relative w-full px-6 py-6 flex items-start gap-4 text-left focus:outline-none"
				>
					{/* Icon container */}
					<div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
						isOpen 
							? 'bg-[#8B5CF6]/20 scale-110' 
							: 'bg-gray-800/50 group-hover:bg-gray-800'
					}`}>
						<QuestionMarkCircleIcon className={`w-5 h-5 transition-colors duration-300 ${
							isOpen ? 'text-[#8B5CF6]' : 'text-gray-400 group-hover:text-gray-300'
						}`} />
					</div>
					
					{/* Question text */}
					<div className="flex-1 pt-1">
						<span className={`text-lg font-semibold transition-colors duration-300 ${
							isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'
						}`}>
							{faq.question}
						</span>
					</div>
					
					{/* Toggle icon */}
					<div className="flex-shrink-0 ml-4">
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
								isOpen 
									? 'bg-[#8B5CF6]/20' 
									: 'bg-gray-800/50 group-hover:bg-gray-800'
							}`}
						>
							{isOpen ? (
								<MinusIcon className="w-5 h-5 text-[#8B5CF6]" />
							) : (
								<PlusIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
							)}
						</motion.div>
					</div>
				</button>

				{/* Answer */}
				<motion.div
					initial={false}
					animate={{
						height: isOpen ? 'auto' : 0,
						opacity: isOpen ? 1 : 0
					}}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="overflow-hidden"
				>
					<div className="relative px-6 pb-6 pl-20">
						{/* Decorative line */}
						<div className="absolute left-10 top-0 w-0.5 h-full bg-gradient-to-b from-[#8B5CF6]/50 to-transparent" />
						
						<p className="text-gray-400 leading-relaxed">
							{faq.answer}
						</p>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<section id="faq" className="relative py-28 overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
			<div className="absolute left-1/4 top-20 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
			<div className="absolute right-1/4 bottom-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />

			<div className="container relative z-10 max-w-4xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-full border border-gray-800 mb-6"
					>
						<SparklesIcon className="w-4 h-4 text-[#8B5CF6]" />
						<span className="text-gray-300 text-sm font-medium">Common Questions</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
					>
						Questions You Might Have<br />
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
							About Working With Us
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-xl text-gray-400 max-w-3xl mx-auto"
					>
						Everything you need to know about our services and process.
					</motion.p>
				</div>

				{/* FAQ Items */}
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							faq={faq}
							index={index}
							isOpen={openIndex === index}
							onToggle={() => setOpenIndex(openIndex === index ? null : index)}
						/>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-16 text-center"
				>
					<div className="relative inline-block p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden group hover:border-[#8B5CF6]/30 transition-all">
						{/* Animated gradient background */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6]/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						
						<div className="relative z-10">
							<p className="text-gray-300 text-lg mb-6 font-medium">
								Still have questions? We're here to help.
							</p>
							<Link
								to="/contact"
								className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-purple-600 hover:from-[#7C3AED] hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-1 active:translate-y-0"
							>
								<span>Get in Touch</span>
								<svg 
									className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
									fill="none" 
									viewBox="0 0 24 24" 
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
} 