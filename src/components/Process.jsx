import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	ClockIcon,
	ArrowsPointingOutIcon,
	CodeBracketIcon,
	ChatBubbleLeftRightIcon,
	CogIcon,
	FunnelIcon,
	ChartBarIcon,
	CheckIcon,
	UserGroupIcon,
	CpuChipIcon,
	ServerStackIcon,
	UserIcon,
} from '@heroicons/react/24/outline';

const ProcessStep = ({ step, title, description, children }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
		className="bg-[#111111] rounded-2xl p-8 border border-gray-800"
	>
		<div className="mb-6">
			<motion.span
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="inline-block px-3 py-1 bg-gray-900 rounded-lg text-gray-300 text-sm mb-4"
			>
				Step {step}
			</motion.span>
			<motion.h3
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className="text-2xl font-bold text-white mb-3"
			>
				{title}
			</motion.h3>
			<motion.p
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="text-gray-400"
			>
				{description}
			</motion.p>
		</div>
		{children}
	</motion.div>
);

export default function Process() {
	const [hoveredLayer, setHoveredLayer] = useState(null);

	return (
		<section id="process" className="relative py-24 overflow-hidden">
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
						<CogIcon className="w-4 h-4 text-[#8B5CF6]" />
						CTO-as-a-Service
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold text-white mb-6"
					>
						Tech Leadership<br />When You Need It
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-xl text-gray-400 max-w-3xl mx-auto"
					>
						No tech team? No problem. We help you plan, hire, build, and ship.
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Step 1: Architecture & Planning */}
					<ProcessStep
						step="1"
						title="Architecture & Planning"
						description="We help with architecture & roadmap planning, ensuring your tech aligns with business goals."
					>
						<div className="relative">
							{/* 3D Isometric Grid Background */}
							<div className="absolute inset-0 overflow-hidden opacity-20">
								<div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
								{/* Interactive 3D Blueprint */}

								<div className="relative h-64 lg:h-auto">
									<motion.div
										animate={{ y: hoveredLayer === 'data' ? -10 : 0 }}
										transition={{ type: 'spring', stiffness: 300, damping: 15 }}
										onHoverStart={() => setHoveredLayer('data')}
										onHoverEnd={() => setHoveredLayer(null)}
										className="absolute top-0 left-0 w-32 h-32 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg shadow-lg backdrop-blur-sm"
										style={{ transform: 'rotateX(60deg) rotateZ(45deg) translateZ(0)' }}
									>
										<ServerStackIcon className="w-8 h-8 text-[#8B5CF6] mx-auto mt-4" />
										<p className="text-center text-xs text-[#8B5CF6] mt-2">Data Layer</p>
									</motion.div>

									<motion.div
										animate={{ y: hoveredLayer === 'logic' ? -10 : 0 }}
										transition={{ type: 'spring', stiffness: 300, damping: 15 }}
										onHoverStart={() => setHoveredLayer('logic')}
										onHoverEnd={() => setHoveredLayer(null)}
										className="absolute top-16 left-16 w-32 h-32 bg-blue-500/10 border border-blue-500/30 rounded-lg shadow-lg backdrop-blur-sm"
										style={{ transform: 'rotateX(60deg) rotateZ(45deg) translateZ(20px)' }}
									>
										<CpuChipIcon className="w-8 h-8 text-blue-400 mx-auto mt-4" />
										<p className="text-center text-xs text-blue-400 mt-2">Logic Layer</p>
									</motion.div>

									<motion.div
										animate={{ y: hoveredLayer === 'presentation' ? -10 : 0 }}
										transition={{ type: 'spring', stiffness: 300, damping: 15 }}
										onHoverStart={() => setHoveredLayer('presentation')}
										onHoverEnd={() => setHoveredLayer(null)}
										className="absolute top-8 left-32 w-32 h-32 bg-purple-500/10 border border-purple-500/30 rounded-lg shadow-lg backdrop-blur-sm"
										style={{ transform: 'rotateX(60deg) rotateZ(45deg) translateZ(40px)' }}
									>
										<UserIcon className="w-8 h-8 text-purple-400 mx-auto mt-4" />
										<p className="text-center text-xs text-purple-400 mt-2">Presentation</p>
									</motion.div>
								</div>

								{/* Planning Process */}
								<div className="space-y-3">
									{[
										{
											icon: ClockIcon,
											text: 'Performance Review',
											description: 'Evaluating current system speed and bottlenecks'
										},
										{
											icon: CodeBracketIcon,
											text: 'Automation',
											description: 'Identifying repetitive tasks to automate'
										}
									].map((item, index) => (
										<motion.div
											key={item.text}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.5, delay: index * 0.1 }}
											className="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#8B5CF6]/30 transition-colors"
										>
											<div className="flex items-start gap-4">
												<div className="w-10 h-10 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg border border-[#8B5CF6]/20 group-hover:bg-[#8B5CF6]/20 transition-colors">
													<item.icon className="w-5 h-5 text-[#8B5CF6]" />
												</div>
												<div>
													<h4 className="text-white text-sm font-medium">{item.text}</h4>
													<p className="text-gray-400 text-xs mt-1">{item.description}</p>
												</div>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</ProcessStep>

					{/* Step 2: Team Building */}
					<ProcessStep
						step="2"
						title="Team Building"
						description="We handle the heavy lifting of hiring and managing developers, assembling your ideal tech team."
					>
						<div className="group relative overflow-hidden">
							{/* Floating orb accent */}
							<div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-purple-600/10 blur-xl group-hover:bg-purple-600/20 transition-all duration-500" />

							<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
								{/* Talent Card */}
								<div className="bg-gray-800/40 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all hover:scale-[1.02]">
									<div className="w-10 h-10 mb-4 flex items-center justify-center bg-purple-500/10 rounded-lg border border-purple-500/20">
										<UserGroupIcon className="w-5 h-5 text-purple-400" />
									</div>
									<h3 className="font-semibold text-white mb-2">Talent Matching</h3>
									<p className="text-gray-400 text-xs">We find developers with the exact skills your project demands.</p>
								</div>

								{/* Process Card */}
								<div className="bg-gray-800/40 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all hover:scale-[1.02]">
									<div className="w-10 h-10 mb-4 flex items-center justify-center bg-purple-500/10 rounded-lg border border-purple-500/20">
										<CogIcon className="w-5 h-5 text-purple-400" />
									</div>
									<h3 className="font-semibold text-white mb-2">Streamlined Process</h3>
									<p className="text-gray-400 text-xs">From interviews to onboarding - we optimize every step.</p>
								</div>

								{/* Growth Card */}
								<div className="bg-gray-800/40 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all hover:scale-[1.02]">
									<div className="w-10 h-10 mb-4 flex items-center justify-center bg-purple-500/10 rounded-lg border border-purple-500/20">
										<ChartBarIcon className="w-5 h-5 text-purple-400" />
									</div>
									<h3 className="font-semibold text-white mb-2">Scalable Growth</h3>
									<p className="text-gray-400 text-xs">Easily adjust team size as your project evolves.</p>
								</div>
							</div>
						</div>
					</ProcessStep>

					{/* Step 3: Product Development */}
					<ProcessStep
						step="3"
						title="Product Development"
						description="Weekly reviews, product decisions, and comprehensive documentation to keep your project on track."
					>
						<div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8">
							<div className="flex items-center justify-between gap-8">
								<div className="text-center">
									<div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mb-2">
										<motion.div
											animate={{
												rotate: [0, 360],
												scale: [1, 1.1, 1]
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: "linear"
											}}
											className="w-12 h-12 text-[#8B5CF6]"
										>
											<CogIcon className="w-full h-full" />
										</motion.div>
									</div>
									<p className="text-gray-400 text-sm">Our solution</p>
								</div>
								<div className="flex-1 h-0.5 bg-[#8B5CF6]/20 relative">
									<motion.div
										initial={{ width: 0 }}
										whileInView={{ width: "100%" }}
										viewport={{ once: true }}
										transition={{ duration: 1.5 }}
										className="absolute inset-0 bg-[#8B5CF6]"
									/>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2">
										<span className="text-2xl text-[#8B5CF6]">M</span>
									</div>
									<p className="text-gray-400 text-sm">Your stack</p>
								</div>
							</div>
						</div>
					</ProcessStep>

					{/* Step 4: System Handover */}
					<ProcessStep
						step="4"
						title="System Handover"
						description="We ensure your systems are handover-ready when you're prepared to scale with your own team."
					>
						<div className="space-y-3">
							<motion.div
								whileHover={{ scale: 1.02 }}
								className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
							>
								<ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-400" />
								<div className="flex-1">
									<h4 className="text-white text-sm font-medium">Chatbot system</h4>
									<p className="text-gray-500 text-xs">Efficiency will increase by 20%</p>
								</div>
								{/* <div className="w-5 h-5 rounded-full border-2 border-[#8B5CF6] border-t-transparent animate-spin" /> */}
								<div className=''>
									<svg
										className="w-7 h-7 animate-spin text-[#8B5CF6]"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											className="opacity-75"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											d="M12 4a8 8 0 1 1-4.9 14.3"
										/>
									</svg>
								</div>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.02 }}
								className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
							>
								<FunnelIcon className="w-6 h-6 text-gray-400" />
								<div className="flex-1">
									<h4 className="text-white text-sm font-medium">Workflow system</h4>
									<p className="text-gray-500 text-xs">Update available</p>
								</div>
								<ArrowsPointingOutIcon className="w-5 h-5 text-[#8B5CF6]" />
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.02 }}
								className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
							>
								<ChartBarIcon className="w-6 h-6 text-gray-400" />
								<div className="flex-1">
									<h4 className="text-white text-sm font-medium">Sales system</h4>
									<p className="text-gray-500 text-xs">Up to date</p>
								</div>
								<CheckIcon className="w-5 h-5 text-[#8B5CF6]" />
							</motion.div>
						</div>
					</ProcessStep>
				</div>

			</div>
		</section>
	);
} 