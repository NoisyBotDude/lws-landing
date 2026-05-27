import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	ArrowLeftIcon,
	DocumentTextIcon,
	ShieldCheckIcon,
	ExclamationTriangleIcon,
	EnvelopeIcon,
} from '@heroicons/react/24/outline';

const sectionCard =
	'rounded-lg border-l-4 border-[#8B5CF6] bg-[#8B5CF6]/10 p-6 backdrop-blur-sm';

export default function TermsAndConditions() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>Terms & Conditions — Build With Stack</title>
				<meta
					name="description"
					content="Terms and Conditions for Build With Stack LLC. SMS communications, opt-out instructions, and website use policies."
				/>
				<link rel="canonical" href="https://buildwithstack.com/terms" />
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
								<DocumentTextIcon className="mr-3 h-8 w-8 text-[#8B5CF6]" />
								<h1 className="text-3xl font-bold text-white">Terms & Conditions</h1>
							</div>
							<div className="mx-auto h-1 w-24 rounded-full bg-[#8B5CF6]" />
							<p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">
								These Terms & Conditions govern your use of Build With Stack LLC and its
								services. By accessing or using our website, you agree to these terms.
							</p>
						</div>

						<div className="space-y-8">
							<section className={sectionCard}>
								<div className="flex items-start">
									<ShieldCheckIcon className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-[#8B5CF6]" />
									<div>
										<h2 className="mb-3 text-xl font-semibold text-white">
											1. Use of the Website
										</h2>
										<p className="leading-relaxed text-gray-300">
											You agree to use this website for lawful purposes only and in a way
											that does not infringe the rights of others or restrict their use of
											the site. We reserve the right to modify, suspend, or discontinue any
											part of the website at any time without notice.
										</p>
									</div>
								</div>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									2. SMS Communications & Program Description
								</h2>
								<p className="mb-4 leading-relaxed text-gray-300">
									By providing your phone number through our website forms, you consent to
									receive SMS messages from Build With Stack LLC. These messages may include:
								</p>
								<ul className="list-disc space-y-2 pl-5 text-gray-300">
									<li>Appointment confirmations and reminders</li>
									<li>Service updates and notifications</li>
									<li>Customer support responses</li>
									<li>Marketing or promotional messages (if applicable)</li>
								</ul>
								<p className="mt-4 text-gray-300">Message frequency may vary.</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									3. Message & Data Rates
								</h2>
								<p className="leading-relaxed text-gray-300">
									Message and data rates may apply depending on your mobile carrier and plan.
								</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									4. Opt-Out Instructions
								</h2>
								<p className="mb-3 leading-relaxed text-gray-300">
									You can opt out of SMS communications at any time by replying{' '}
									<span className="font-semibold text-white">STOP</span> to any message.
								</p>
								<p className="leading-relaxed text-gray-300">
									After opting out, you will no longer receive SMS messages unless you opt
									back in.
								</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									5. Help & Support
								</h2>
								<p className="mb-4 leading-relaxed text-gray-300">
									For help, reply <span className="font-semibold text-white">HELP</span> to
									any message or contact us at:
								</p>
								<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
									<div className="flex items-center">
										<EnvelopeIcon className="mr-2 h-5 w-5 text-[#8B5CF6]" />
										<a
											href="mailto:admin@buildwithstack.com"
											className="font-medium text-[#8B5CF6] transition-colors duration-200 hover:text-[#7C3AED]"
										>
											admin@buildwithstack.com
										</a>
									</div>
									<div className="text-gray-300">
										<a
											href="tel:+16504844920"
											className="font-medium text-[#8B5CF6] transition-colors duration-200 hover:text-[#7C3AED]"
										>
											+1 650-484-4920
										</a>
									</div>
								</div>
							</section>

							<section className={sectionCard}>
								<div className="flex items-start">
									<ExclamationTriangleIcon className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-[#A78BFA]" />
									<div>
										<h2 className="mb-3 text-xl font-semibold text-white">
											6. No Guarantees
										</h2>
										<p className="leading-relaxed text-gray-300">
											All content is provided for general informational purposes only. We
											make no warranties regarding accuracy, reliability, or completeness.
										</p>
									</div>
								</div>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									7. Carrier Disclaimer
								</h2>
								<p className="leading-relaxed text-gray-300">
									Carriers are not liable for delayed or undelivered messages.
								</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									8. Age Requirement
								</h2>
								<p className="leading-relaxed text-gray-300">
									You must be at least{' '}
									<span className="font-semibold text-white">18 years old</span> to use our
									services.
								</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									9. Privacy Policy
								</h2>
								<p className="leading-relaxed text-gray-300">
									Your use of our services is also governed by our{' '}
									<Link
										to="/privacy"
										className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
									>
										Privacy Policy
									</Link>
									.
								</p>
							</section>

							<section className={sectionCard}>
								<h2 className="mb-3 text-xl font-semibold text-white">
									10. Changes to Terms
								</h2>
								<p className="leading-relaxed text-gray-300">
									We may update these Terms from time to time. Continued use of the website
									constitutes acceptance of the updated Terms.
								</p>
							</section>
						</div>

						<div className="mt-12 border-t border-white/10 pt-6">
							<p className="text-center text-sm text-gray-500">
								These terms are effective as of the date of publication and may be updated
								from time to time.
							</p>
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
}
