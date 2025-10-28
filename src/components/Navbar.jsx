import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logos/2@4x.png'

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
							href='https://calendly.com/admin-learnwithstack/30min'
							className="ml-4 px-6 py-2.5 rounded-lg bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Book a call
						</motion.a>
					</div>

					{/* Mobile menu button */}
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

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="md:hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl bg-black/50 rounded-lg">
								{navigation.map((item) => (
									<div key={item.name}>
										{item.href.startsWith('/#') ? (
											<a
												href={item.href}
												className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
											>
												{item.name}
											</a>
										) : (
											<Link
												to={item.href}
												replace={item.name === "About" ? true : false}
												className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location.pathname === item.href
														? 'text-white bg-gray-800'
														: 'text-gray-300 hover:text-white hover:bg-gray-800'
													}`}
												onClick={() => setIsOpen(false)}
											>
												{item.name}
											</Link>
										)}
									</div>
								))}
								<button className="w-full mt-4 px-6 py-2.5 rounded-lg bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors">
									Book a call
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	);
} 
