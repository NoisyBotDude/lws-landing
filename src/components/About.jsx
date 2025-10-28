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
	ArrowPathIcon,
	RocketLaunchIcon,
	DocumentChartBarIcon,
	Cog6ToothIcon,
	PresentationChartLineIcon,
	BuildingOffice2Icon,
	CircleStackIcon,
	ShoppingCartIcon,
	BanknotesIcon
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

const FeaturePill = ({ title, icon: Icon, index }) => (
	<motion.div
		initial={{ opacity: 0, x: -20 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5, delay: index * 0.1 }}
		className="group relative flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#8B5CF6]/50 transition-all hover:shadow-lg hover:shadow-[#8B5CF6]/10 hover:-translate-y-1"
	>
		{/* Gradient glow effect on hover */}
		<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6]/5 to-[#8B5CF6]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
		
		{/* Icon with gradient background */}
		<div className="relative z-10 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6]/20 to-purple-600/10 rounded-lg group-hover:scale-110 transition-transform shadow-inner">
			<Icon className="w-5 h-5 text-[#8B5CF6] group-hover:text-purple-400 transition-colors" />
		</div>
		
		{/* Text */}
		<span className="relative z-10 text-gray-300 group-hover:text-white transition-colors font-medium flex-1">
			{title}
		</span>
		
		{/* Arrow indicator */}
		<svg 
			className="relative z-10 w-4 h-4 text-gray-600 group-hover:text-[#8B5CF6] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all"
			fill="none" 
			viewBox="0 0 24 24" 
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
		</svg>
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
		// { title: "Infra: Vercel, Firebase, DigitalOcean", icon: ServerIcon }
	];

	const clientTypes = [
		{
			title: "VC-backed startups building MVPs",
			icon: RocketLaunchIcon,
			gradient: "from-purple-500 to-pink-500"
		},
		{
			title: "Service businesses ditching spreadsheets",
			icon: DocumentChartBarIcon,
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			title: "Founders automating operations",
			icon: Cog6ToothIcon,
			gradient: "from-violet-500 to-purple-500"
		},
		{
			title: "Sales teams boosting conversions",
			icon: PresentationChartLineIcon,
			gradient: "from-green-500 to-emerald-500"
		},
		{
			title: "Agencies scaling delivery",
			icon: BuildingOffice2Icon,
			gradient: "from-orange-500 to-red-500"
		},
		{
			title: "SaaS companies adding AI features",
			icon: CircleStackIcon,
			gradient: "from-indigo-500 to-blue-500"
		},
		{
			title: "E-commerce optimizing workflows",
			icon: ShoppingCartIcon,
			gradient: "from-pink-500 to-rose-500"
		},
		{
			title: "Fintechs streamlining processes",
			icon: BanknotesIcon,
			gradient: "from-yellow-500 to-orange-500"
		}
	];

	return (
		<section id="about" className="relative py-28 overflow-hidden">
			{/* Background elements */}
			<div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
			<div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />

			<div className="container relative z-10">
				{/* Header */}
				<div className="text-center max-w-4xl mx-auto mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
					>
						Build With Stack
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-xl text-gray-300 max-w-3xl mx-auto"
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
				<div className="grid lg:grid-cols-2 gap-12 mb-28">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						{/* Decorative element (hidden on mobile) */}
						<div className="hidden md:block absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-[#8B5CF6] to-transparent rounded-full" />
						
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-3xl md:text-4xl font-bold text-white mb-3"
						>
							What We Build
						</motion.h3>
						<p className="text-gray-400 mb-8 text-lg">
							Custom solutions that drive real business value
						</p>
						<div className="space-y-3">
							{buildItems.map((item, index) => (
								<FeaturePill
									key={item.title}
									title={item.title}
									icon={item.icon}
									index={index}
								/>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						{/* Decorative element (hidden on mobile) */}
						<div className="hidden md:block absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
						
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-3xl md:text-4xl font-bold text-white mb-3"
						>
							Our Stack
						</motion.h3>
						<p className="text-gray-400 mb-8 text-lg">
							Modern, proven technologies for scalable solutions
						</p>
						<div className="space-y-3">
							{stackItems.map((item, index) => (
								<FeaturePill
									key={item.title}
									title={item.title}
									icon={item.icon}
									index={index}
								/>
							))}
						</div>
					</motion.div>
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
						className="text-3xl md:text-5xl font-bold text-white mb-6"
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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{clientTypes.map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#8B5CF6]/30 transition-all hover:shadow-lg hover:shadow-[#8B5CF6]/10"
							>
								{/* Animated background gradient */}
								<div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

								{/* Icon and text side by side on mobile, stacked on larger screens */}
								<div className="flex flex-col sm:block md:flex md:flex-col lg:block items-center justify-center">
									<div className="flex items-center w-full">
										<div className="relative w-12 h-12 flex items-center justify-center mr-3">
											<div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-10 blur-sm group-hover:opacity-20 transition-opacity`} />
											<div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br ${item.gradient} rounded-xl p-2`}>
												<item.icon className="w-7 h-7 text-white" />
											</div>
										</div>
										<p className="relative text-gray-300 group-hover:text-white transition-colors font-medium text-left">
											{item.title}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}