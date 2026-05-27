import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	ArrowLeftIcon,
	ShieldCheckIcon,
	LockClosedIcon,
	EnvelopeIcon,
} from '@heroicons/react/24/outline';

const sectionCard =
	'rounded-lg border-l-4 border-[#8B5CF6] bg-[#8B5CF6]/10 p-6 backdrop-blur-sm';

export default function PrivacyPolicy() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>Privacy Policy — Build With Stack</title>
				<meta
					name="description"
					content="Privacy Policy for build With Stack LLC. How we collect, use, and protect your personal information."
				/>
				<link rel="canonical" href="https://buildwithstack.com/privacy" />
			</Helmet>

			<section className="relative min-h-screen bg-black overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<div className="stars-container">
						<div id="stars"></div>
						<div id="stars2"></div>
						<div id="stars3"></div>
					</div>
				</div>

				<div
					className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full -z-5"
					style={{
						background:
							'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
						filter: 'blur(60px)',
						transform: 'translate(20%, -20%)',
					}}
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="container mx-auto max-w-4xl px-4 pt-28 pb-24"
				>
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-gray-400 hover:text-[#8B5CF6] transition-colors mb-8"
					>
						<ArrowLeftIcon className="w-4 h-4" />
						Back to home
					</Link>

					<div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-10 backdrop-blur-lg">
						<div className="mb-8 text-center">
							<div className="mb-4 flex items-center justify-center">
								<ShieldCheckIcon className="mr-3 h-8 w-8 text-[#8B5CF6]" />
								<h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
							</div>
							<div className="mx-auto h-1 w-24 rounded-full bg-[#8B5CF6]" />
						</div>

						<div className="space-y-8">
							<section className={sectionCard}>
								<div className="flex items-start">
									<LockClosedIcon className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-[#8B5CF6]" />
									<div>
										<h2 className="mb-3 text-xl font-semibold text-white">
											Privacy Policy
										</h2>
										<p className="leading-relaxed text-gray-300">
											Build With Stack LLC respects your privacy and is committed to
											protecting your personal information.
										</p>
									</div>
								</div>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									1. Information We Collect
								</h2>
								<p className="mb-4 leading-relaxed text-gray-300">
									We may collect the following information when you interact with our
									website:
								</p>
								<ul className="list-disc space-y-2 pl-5 text-gray-300">
									<li>Name</li>
									<li>Email address</li>
									<li>Phone number</li>
									<li>Any information submitted through forms</li>
								</ul>
							</section>

							<section className={sectionCard}>
								<div className="flex items-start">
									<ShieldCheckIcon className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-[#8B5CF6]" />
									<div>
										<h2 className="mb-3 text-xl font-semibold text-white">
											2. How We Use Your Information
										</h2>
										<ul className="list-disc space-y-2 pl-5 text-gray-300">
											<li>Respond to inquiries and provide support</li>
											<li>Send service-related updates</li>
											<li>Send SMS communications (if you opt in)</li>
											<li>Improve our services</li>
										</ul>
									</div>
								</div>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									3. SMS Consent & Data Usage
								</h2>
								<p className="mb-4 leading-relaxed text-gray-300">
									By providing your phone number, you consent to receive SMS messages from
									Build With Stack LLC.
								</p>
								<div className="rounded-md border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 p-4">
									<p className="mb-2 text-sm font-semibold text-white">IMPORTANT:</p>
									<ul className="list-disc space-y-2 pl-5 text-gray-300">
										<li>
											SMS consent is{' '}
											<span className="font-semibold text-white">not shared</span> with
											third parties or affiliates for marketing purposes
										</li>
										<li>
											Your information is used strictly for communication related to our
											services
										</li>
									</ul>
								</div>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									4. Opt-Out & User Rights
								</h2>
								<ul className="list-disc space-y-2 pl-5 text-gray-300">
									<li>
										Opt out of SMS by replying{' '}
										<span className="font-semibold text-white">STOP</span>
									</li>
									<li>Request updates or deletion of your data by contacting us</li>
								</ul>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									5. Cookies & Tracking
								</h2>
								<p className="mb-4 leading-relaxed text-gray-300">
									We may use cookies and similar technologies to:
								</p>
								<ul className="list-disc space-y-2 pl-5 text-gray-300">
									<li>Improve website functionality</li>
									<li>Analyze user behavior</li>
									<li>Enhance user experience</li>
								</ul>
								<p className="mt-4 leading-relaxed text-gray-300">
									You can disable cookies through your browser settings.
								</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									6. Data Security
								</h2>
								<p className="leading-relaxed text-gray-300">
									We implement appropriate security measures to protect your information from
									unauthorized access, disclosure, or misuse.
								</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									7. Sharing of Information
								</h2>
								<p className="leading-relaxed text-gray-300">
									We do <span className="font-semibold text-white">not</span> sell, rent, or
									share your personal information with third parties for marketing purposes.
								</p>
							</section>

							<section className={sectionCard}>
								<div className="flex items-start">
									<EnvelopeIcon className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-[#8B5CF6]" />
									<div>
										<h2 className="mb-3 text-xl font-semibold text-white">
											8. Email Communication
										</h2>
										<p className="mb-4 leading-relaxed text-gray-300">
											If you contact us via email, we will use your information solely to
											respond to your inquiry.
										</p>
										<div className="rounded-md border border-red-500/30 bg-red-500/10 p-4">
											<p className="text-sm text-red-200">
												<strong className="text-red-100">Important:</strong> Do not send
												sensitive information (e.g., financial details, SSN) via email.
											</p>
										</div>
									</div>
								</div>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									9. Contact Information
								</h2>
								<div className="flex flex-col gap-2 text-gray-300 sm:flex-row sm:items-center sm:gap-6">
									<div className="flex items-center">
										<EnvelopeIcon className="mr-2 h-5 w-5 text-[#8B5CF6]" />
										<a
											href="mailto:admin@buildwithstack.com"
											className="font-medium text-[#8B5CF6] transition-colors duration-200 hover:text-[#7C3AED]"
										>
											admin@buildwithstack.com
										</a>
									</div>
									<div>
										Phone:{' '}
										<a
											href="tel:+16504844920"
											className="font-medium text-[#8B5CF6] transition-colors duration-200 hover:text-[#7C3AED]"
										>
											+1 650-484-4920
										</a>
									</div>
								</div>
								<p className="mt-4 text-sm text-gray-400">
									Also see our{' '}
									<Link
										to="/terms"
										className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
									>
										Terms & Conditions
									</Link>
									.
								</p>
							</section>
						</div>

						<div className="mt-12 border-t border-white/10 pt-6">
							<p className="text-center text-sm text-gray-500">
								10. Changes to Privacy Policy — We may update this Privacy Policy
								periodically. Updates will be posted on this page.
							</p>
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
}
