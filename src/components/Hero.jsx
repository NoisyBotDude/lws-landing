import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { AWS_ICON, FIREBASE_ICON, HIGHLEVEL_ICON, MONGODB_ICON, NEXT_ICON, ORACLE_ICON } from '../assets';

const logos = [
	{
		src: AWS_ICON,
		alt: "AWS"
	},
	{
		src: ORACLE_ICON,
		alt: "Oracle"
	},
	{
		src: FIREBASE_ICON,
		alt: "Firebase"
	},
	{
		src: "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
		alt: "React.js"
	},
	{
		src: NEXT_ICON,
		alt: "Next.js"
	},
	{
		src: MONGODB_ICON,
		alt: "Monogdb"
	},
	{
		src: "https://th.bing.com/th/id/R.ceebbce2b4a34f817165f3980adb3695?rik=s7EkNaxt1zMyTw&riu=http%3a%2f%2fshlule.com%2fimage%2fimage_lib%2fimages%2fgoogle-cloud-platform-logo.png&ehk=VD9h%2bqfV%2bxB0j%2bL3%2fIXxih8BhnLcM%2bsXllmyc%2baKv14%3d&risl=&pid=ImgRaw&r=0",
		alt: "Google cloud"
	},
	{
		src: HIGHLEVEL_ICON,
		alt: "High Level"
	},
];

const duplicatedLogos = [...logos, ...logos];

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center bg-black overflow-hidden">
			{/* Background stars effect */}
			<div className="absolute inset-0 -z-10">
				<div className="stars-container">
					<div id="stars"></div>
					<div id="stars2"></div>
					<div id="stars3"></div>
				</div>
			</div>

			{/* Purple glow effect */}
			<div
				className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full -z-5"
				style={{
					background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
					filter: 'blur(40px)',
					transform: 'translate(20%, -20%)',
				}}
			/>

			<div className="container relative z-20">
				<div className="text-center max-w-4xl mx-auto pt-20">
					{/* New tag */}
					<motion.div
						className="inline-flex items-center mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<span className="px-3 py-1 text-sm text-white bg-[#8B5CF6] rounded-full inline-flex items-center gap-2">
							<SparklesIcon className="w-4 h-4" />
							Build With Stack
						</span>

					</motion.div>

					{/* Main heading */}
					<motion.h1
						className="text-4xl md:text-6xl font-bold text-white mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Build Fast.
						<span className="block">Automate Smarter.</span>
						<span className="block">Scale Without Limits.</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						className="text-md md:text-xl text-gray-300 mb-8 md:mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						Custom Software & AI Solutions That Actually Work. Build With Stack is your on-demand tech partner for building fast, scaling smart, and owning your software.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-row justify-center items-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								to="/contact"
								className="px-6 py-3 text-sm md:text-base bg-[#8B5CF6] text-white rounded-lg flex items-center justify-center hover:bg-[#7C3AED] transition-colors w-full sm:w-auto"
							>
								Get in touch
								<ArrowRightIcon className="hidden md:block w-4 h-4 ml-2" />
							</Link>
						</motion.div>
						<motion.div
							// href="#services"
							// className="px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors w-full sm:w-auto"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								to="/services"
								replace={true}
								className="px-6 py-3 text-sm md:text-base bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors w-full sm:w-auto"
							>
								View services
							</Link>
						</motion.div>
					</motion.div>
				</div>

				<div className="pt-12 md:pt-24 relative overflow-hidden bg-black">
					<div className="container mx-auto px-4">
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-center text-gray-300 mb-6 md:mb-12"
						>
							Tech Stack we use in our company
						</motion.p>

						<div className="relative">
							<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
							<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

							<div className="flex overflow-hidden">
								<motion.div
									className="flex gap-16 items-center"
									animate={{
										x: [0, -1920],
									}}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear"
									}}
								>
									{duplicatedLogos.map((logo, index) => (
										<div
											key={index}
											className="flex-shrink-0"
										>
											{logo.alt === "AWS" ? (
												<img
													src={logo.src}
													alt={logo.alt}
													className="h-20 w-20 object-contain"
													style={{ minWidth: '5rem', minHeight: '5rem', maxWidth: '5rem', maxHeight: '5rem' }}
												/>
											) : (
												<img
													src={logo.src}
													alt={logo.alt}
													className="h-24 w-32 object-contain"
													style={{ minWidth: '8rem', minHeight: '6rem', maxWidth: '8rem', maxHeight: '6rem' }}
												/>
											)}
										</div>
									))}
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 