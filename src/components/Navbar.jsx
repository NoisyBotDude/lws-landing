import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logos/2@4x.png'
import { CALENDER_URL } from '../config/appCondfig';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
		} else {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		}

		return () => {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		};
	}, [isOpen]);

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Blogs', href: '/blogs/all' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<motion.header
			className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-black/50' : ''
				}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<motion.div
						className="flex-shrink-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Link to="/" className="flex items-center">
							<img
								src={logo}
								alt="BWS"
								className="h-12 w-auto"
							/>
							{/* <span className="ml-2 text-2xl font-bold text-white">BWS</span> */}
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex md:items-center md:space-x-8">
						{navigation.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								{item.href.startsWith('/#') ? (
									<a
										href={item.href}
										className="text-gray-300 hover:text-white transition-colors"
									>
										{item.name}
									</a>
								) : (
									<Link
										to={item.href}
										replace={item.name === "About" ? true : false}
										className={`transition-colors ${location.pathname === item.href
											? 'text-white'
											: 'text-gray-300 hover:text-white'
											}`}
									>
										{item.name}
									</Link>
								)}
							</motion.div>
						))}
						<motion.a
							href={CALENDER_URL}
							target='blank'
							className="ml-4 px-6 py-2.5 rounded-lg bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Book a Call
						</motion.a>
					</div>

					{/* Mobile menu button */}
					<div className='flex flex-row justify-center items-center gap-4 md:hidden'>
						{!isOpen && (
							<motion.a
								href={CALENDER_URL}
								target='blank'
								className="md:hidden w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-sm text-white text-center font-normal hover:from-[#7C3AED] hover:to-purple-700 transition-all active:scale-95"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
								onClick={() => setIsOpen(false)}
							>
								Book a Call
							</motion.a>
						)}
						<motion.div
							className="md:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<button
								type="button"
								className="text-gray-300 hover:text-white"
								onClick={() => setIsOpen(!isOpen)}
							>
								<span className="sr-only">Open main menu</span>
								{isOpen ? (
									<XMarkIcon className="h-6 w-6" />
								) : (
									<Bars3Icon className="h-6 w-6" />
								)}
							</button>
						</motion.div>
					</div>
				</div>

				{/* Mobile Navigation - Full Screen */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="md:hidden fixed inset-0 top-20 z-40 overflow-hidden"
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: '100%' }}
							transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
							style={{ transform: 'translateZ(0)' }}
						>
							<div className="h-full w-full backdrop-blur-xl bg-black/95 px-6 pt-8 pb-6 flex flex-col overflow-y-auto">
								<nav className="flex-1 space-y-2">
									{navigation.map((item, index) => (
										<motion.div
											key={item.name}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
										>
											{item.href.startsWith('/#') ? (
												<a
													href={item.href}
													className="block px-4 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors"
													onClick={() => setIsOpen(false)}
												>
													{item.name}
												</a>
											) : (
												<Link
													to={item.href}
													replace={item.name === "About" ? true : false}
													className={`block px-4 py-4 text-lg font-medium rounded-xl transition-colors ${location.pathname === item.href
														? 'text-white bg-gray-800/50'
														: 'text-gray-300 hover:text-white hover:bg-gray-800/50'
														}`}
													onClick={() => setIsOpen(false)}
												>
													{item.name}
												</Link>
											)}
										</motion.div>
									))}
								</nav>
								<motion.a
									href={CALENDER_URL}
									target='blank'
									className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white text-center font-semibold hover:from-[#7C3AED] hover:to-purple-700 transition-all active:scale-95"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
									onClick={() => setIsOpen(false)}
								>
									Book a Call
								</motion.a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	);
} 
