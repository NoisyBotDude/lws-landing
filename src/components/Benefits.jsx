import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
	UserGroupIcon,
	ClockIcon,
	ChatBubbleLeftRightIcon,
	CodeBracketIcon,
	GlobeAltIcon,
	ShieldCheckIcon
} from '@heroicons/react/24/outline';

const benefits = [
	{
		icon: UserGroupIcon,
		title: "Fractional Tech Leadership",
		description: "Need a CTO brain without the full-time cost? We'll help architect your product, hire the right engineers, and ship fast."
	},
	{
		icon: ChatBubbleLeftRightIcon,
		title: "Built-In PM + Dev Team",
		description: "One point of contact. Weekly updates. No communication black hole. We keep you informed and involved every step of the way."
	},
	{
		icon: GlobeAltIcon,
		title: "Global Dev Talent",
		description: "Access to top-tier developers worldwide while maintaining US standards. Code reviews, clean handoffs, and scalable systems baked in."
	},
	{
		icon: ClockIcon,
		title: "Speed Without Sacrifice",
		description: "We ship MVPs in weeks, not quarters, without compromising on quality or scalability."
	},
	{
		icon: CodeBracketIcon,
		title: "Code Reviews & Clean Handoffs",
		description: "Every line of code is reviewed, documented, and built for long-term maintainability."
	},
	{
		icon: ShieldCheckIcon,
		title: "US Standards & Best Practices",
		description: "We follow industry best practices for security, scalability, and code quality while maintaining clear communication."
	}
];

const BenefitCard = ({ icon: Icon, title, description }) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			onMouseMove={handleMouseMove}
			className="group relative rounded-2xl bg-[#111111] border border-gray-800 p-8 h-full overflow-hidden"
		>
			{/* Gradient */}
			<motion.div
				className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              300px circle at \${mouseX}px \${mouseY}px,
              rgba(139, 92, 246, 0.1),
              transparent 80%
            )
          `
				}}
			/>

			<div className="relative z-10">
				<div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center mb-6">
					<Icon className="w-6 h-6 text-[#8B5CF6]" />
				</div>
				<h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
				<p className="text-gray-400">{description}</p>
			</div>
		</motion.div>
	);
};

export default function Benefits() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ clientX, clientY }) {
		const { innerWidth, innerHeight } = window;
		mouseX.set(clientX / innerWidth);
		mouseY.set(clientY / innerHeight);
	}

	return (
		<section
			id="benefits"
			className="relative py-24 overflow-hidden"
			onMouseMove={handleMouseMove}
		>
			{/* Main background gradient that follows mouse */}
			<motion.div
				className="absolute inset-0 opacity-20"
				style={{
					background: useMotionTemplate`
						radial-gradient(
						circle at \${mouseX.get() * 100}% \${mouseY.get() * 100}%,
						rgba(139, 92, 246, 0.3) 0%,
						rgba(139, 92, 246, 0.1) 25%,
						rgba(0, 0, 0, 0) 50%
						)
					`
				}}
			/>

			<div className="container relative z-10">
				<div className="text-center mb-16">
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="inline-block px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
					>
						Why Choose Us
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold text-white mb-6"
					>
						Why Choose<br />
						Build With Stack
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-xl text-gray-400 max-w-3xl mx-auto"
					>
						We combine global talent with US standards to deliver fast, high-quality solutions that help you scale.
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<motion.div
							key={benefit.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<BenefitCard {...benefit} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
} 