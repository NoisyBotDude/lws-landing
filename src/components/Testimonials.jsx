import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { BADIE_TESTIMONY, JEREMY_TESTIMONY, MG_TESTIMONY } from '../assets';

const testimonials = [
	{
		rating: 5,
		content: "Working with this team on our Shopify website for Woodin.in was an exceptionally positive experience from start to finish. Their professionalism was evident in every interaction; they were incredibly responsive, understood our vision perfectly, and truly felt like an extension of our own team. The communication was clear and consistent, which made the entire process smooth and stress-free. They delivered a high-quality, fully functional e-commerce site exactly when they said they would, allowing us to launch on schedule. I would highly prefer to work with them again on future projects.",
		author: {
			name: "Badie Almualem",
			image: BADIE_TESTIMONY,
			role: "Owner, Woodin.in ",
		}
	},
	{
		rating: 5,
		content: "Build With Stack played a crucial role in helping us scale ConvoGPT from a powerful idea to a functional AI-driven platform. Their deep expertise in automation, AI integrations, and frontend/backend development allowed us to build fast, iterate faster, and deliver a seamless experience to our users. Whether it was designing complex workflows, setting up AI agents, or ensuring rock-solid infrastructure, the team was proactive, responsive, and always solutions-focused. They're not just a dev agency, they're an extension of our core team.",
		author: {
			name: "Jeremy David",
			image: JEREMY_TESTIMONY,
			role: "CEO, ConvoGPT AI ",
		}
	},
	{
		rating: 5,
		content: "Working with Build With Stack has been a total game-changer for Modvertise. We needed a custom-built, scalable solution that could support both our internal ops and client-facing systems and they delivered above and beyond. Their team not only understood our complex workflows but also helped simplify and automate key areas like scheduling, CRM, payment tracking, and reporting. Communication was smooth, timelines were respected, and the product exceeded expectations. If you're looking for a team that treats your project like their own startup, Build With Stack is who you want.",
		author: {
			name: "MG",
			image: MG_TESTIMONY,
			role: "CEO, modvertise.com ",
		}
	},
];

const TestimonialCard = ({ testimonial, isCenter, position }) => {
	const getCardStyles = () => {
		if (isCenter) {
			return {
				scale: 1,
				opacity: 1,
				zIndex: 30,
				x: '0%',
			};
		}

		if (position === 'left') {
			return {
				scale: 0.85,
				opacity: 0.6,
				zIndex: 10,
				x: '-60%',
			};
		}

		if (position === 'right') {
			return {
				scale: 0.85,
				opacity: 0.6,
				zIndex: 10,
				x: '60%',
			};
		}

		return {
			scale: 0,
			opacity: 0,
			zIndex: 0,
			x: '0%',
		};
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={getCardStyles()}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className="absolute top-0 left-0 right-0 -translate-x-1/2 w-full max-w-2xl mx-auto"
		>
			<div className="relative rounded-2xl bg-[#111111] border border-gray-800 p-8 h-full">
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
					<blockquote className="text-sm md:text-md text-gray-300 mb-8">
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
			</div>
		</motion.div>
	);
};

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const getPosition = (index) => {
		const diff = index - currentIndex;

		if (diff === 0) return 'center';
		if (diff === 1 || diff === -(testimonials.length - 1)) return 'right';
		if (diff === -1 || diff === testimonials.length - 1) return 'left';
		return 'hidden';
	};

	const handleNext = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	return (
		<section id="testimonials" className="relative py-12 overflow-hidden">
			{/* Background with slight gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/20" />

			<div className="container relative z-10">
				<div className="text-center mb-16">
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
					>
						<StarIcon className="w-4 h-4 text-[#8B5CF6]" />
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

				{/* Carousel Container */}
				<div
					className="relative mx-auto max-w-7xl"
					onMouseEnter={() => setIsAutoPlaying(false)}
					onMouseLeave={() => setIsAutoPlaying(true)}
				>
					{/* Desktop View - Stack with side cards */}
					<div className="hidden md:block relative h-[350px]">
						{testimonials.map((testimonial, index) => {
							const position = getPosition(index);
							return (
								<TestimonialCard
									key={index}
									testimonial={testimonial}
									isCenter={position === 'center'}
									position={position}
								/>
							);
						})}
					</div>

					{/* Mobile View - Single card */}
					<div className="md:hidden relative">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.3 }}
								className="relative rounded-2xl bg-[#111111] border border-gray-800 p-8"
							>
								{/* Purple gradient effect */}
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E1435] rounded-2xl" />

								{/* Content */}
								<div className="relative z-10">
									{/* Star rating */}
									<div className="flex gap-1 mb-6">
										{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
											<StarIcon key={i} className="w-5 h-5 text-[#8B5CF6]" />
										))}
									</div>

									{/* Testimonial text */}
									<blockquote className="text-sm text-gray-300 mb-8">
										"{testimonials[currentIndex].content}"
									</blockquote>

									{/* Author info */}
									<div className="flex items-center gap-4">
										<div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800">
											{testimonials[currentIndex].author.image ? (
												<img
													src={testimonials[currentIndex].author.image}
													alt={testimonials[currentIndex].author.name}
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
												{testimonials[currentIndex].author.name}
											</div>
											<div className="text-sm text-gray-400">
												{testimonials[currentIndex].author.role}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={handlePrev}
						className="hidden absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700 border border-gray-700 md:flex items-center justify-center text-white transition-all"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={handleNext}
						className="hidden absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700 border border-gray-700 md:flex items-center justify-center text-white transition-all"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>

					{/* Dots Navigation */}
					<div className="flex justify-center gap-2 mt-8">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => {
									setIsAutoPlaying(false);
									setCurrentIndex(index);
								}}
								className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
									? 'bg-[#8B5CF6] w-8'
									: 'bg-gray-600 hover:bg-gray-500'
									}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}