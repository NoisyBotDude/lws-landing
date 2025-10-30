import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCard = ({ children, className = '' }) => {
	const ref = useRef(null);

	// Mouse movement for 3D effect
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);

	const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]));
	const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]));

	// Mouse position for gradient
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const handleMouseMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();

		const mouseXPos = event.clientX - rect.left;
		const mouseYPos = event.clientY - rect.top;

		const xPct = mouseXPos / rect.width;
		const yPct = mouseYPos / rect.height;

		x.set(xPct);
		y.set(yPct);

		mouseX.set(mouseXPos);
		mouseY.set(mouseYPos);

		// Update CSS variables for gradient effect
		event.currentTarget.style.setProperty('--mouse-x', `${mouseXPos}px`);
		event.currentTarget.style.setProperty('--mouse-y', `${mouseYPos}px`);
	};

	const handleMouseLeave = () => {
		x.set(0.5);
		y.set(0.5);
	};

	return (
		<motion.div
			ref={ref}
			className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/[0.05] to-transparent
        backdrop-blur-xl
        border border-white/[0.05]
        group
        ${className}
      `}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
				perspective: "1000px"
			}}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			{/* Gradient overlay that follows mouse */}
			<div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				style={{
					background: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.06), transparent 40%)'
				}}
			/>

			{/* Shine effect */}
			<div
				className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
				style={{
					background: 'linear-gradient(125deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 40%, transparent 100%)'
				}}
			/>

			{/* Content container with 3D transform */}
			<div className="relative p-6" style={{ transform: "translateZ(50px)" }}>
				{children}
			</div>
		</motion.div>
	);
};

export default AnimatedCard; 