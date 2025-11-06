import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CALENDER_URL } from '../config/appCondfig';

export default function Contact() {
	const [searchParams, setSearchParams] = useSearchParams();
	const STORAGE_KEY = 'contactFormDataTTL';
	const STEP_KEY = 'contactFormStepTTL';
	const TTL_MS = 1000 * 60 * 60 * 2; // 2 hours

	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		countryCode: '',
		phone: '',
		email: '',
		companyName: '',
		businessType: '',
		lookingToBuild: '',
		monthlyRevenue: '',
		techTeam: '',
		startTimeline: ''
	});

	const [errors, setErrors] = useState({});
	const [showRestoreToast, setShowRestoreToast] = useState(false);

	// when the page is reload open at the top of the page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Storage helpers with TTL
	const saveWithTTL = (key, value, ttl) => {
		try {
			const payload = { value, expiry: Date.now() + ttl };
			localStorage.setItem(key, JSON.stringify(payload));
		} catch {}
	};

	const loadWithTTL = (key) => {
		try {
			const raw = localStorage.getItem(key);
			if (!raw) return null;
			const { value, expiry } = JSON.parse(raw);
			if (typeof expiry === 'number' && Date.now() > expiry) {
				localStorage.removeItem(key);
				return null;
			}
			return value;
		} catch {
			return null;
		}
	};

	const clearStored = () => {
		try {
			localStorage.removeItem(STORAGE_KEY);
			localStorage.removeItem(STEP_KEY);
		} catch {}
	};

	// Restore step (URL > storage) and form data on mount
	useEffect(() => {
		let restored = false;
		let restoredData = false;
		const stepFromUrl = parseInt(searchParams.get('step') || '', 10);
		const stepFromStore = loadWithTTL(STEP_KEY);
		if (!isNaN(stepFromUrl) && stepFromUrl >= 1 && stepFromUrl <= 6) {
			setCurrentStep(stepFromUrl);
		} else if (typeof stepFromStore === 'number' && stepFromStore >= 1 && stepFromStore <= 6) {
			setCurrentStep(stepFromStore);
			setSearchParams({ step: String(stepFromStore) }, { replace: true });
		}

		const storedData = loadWithTTL(STORAGE_KEY);
		if (storedData && typeof storedData === 'object') {
			setFormData(prev => ({ ...prev, ...storedData }));
			restored = true;
			restoredData = true;
		}

		// Only show toast if actual data was restored (not just step)
		if (restored && restoredData) {
			setShowRestoreToast(true);
			const t = setTimeout(() => setShowRestoreToast(false), 2500);
			return () => clearTimeout(t);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Sync URL & storage when step changes
	useEffect(() => {
		setSearchParams({ step: String(currentStep) }, { replace: true });
		saveWithTTL(STEP_KEY, currentStep, TTL_MS);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentStep]);

	// Persist form data changes
	useEffect(() => {
		saveWithTTL(STORAGE_KEY, formData, TTL_MS);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData]);

	const handleInputChange = (field, value) => {
		setFormData(prev => ({ ...prev, [field]: value }));
		// Clear error when user starts typing
		if (errors[field]) {
			setErrors(prev => ({ ...prev, [field]: '' }));
		}
	};

	const validateStep = (step) => {
		const newErrors = {};

		switch (step) {
			case 1:
				if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
				if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
				if (!formData.countryCode) newErrors.countryCode = 'Country code is required';
				if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
				if (!formData.email.trim()) {
					newErrors.email = 'Email is required';
				} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
					newErrors.email = 'Please enter a valid email address';
				}
				break;
			case 2:
				if (!formData.businessType) newErrors.businessType = 'Please select a business type';
				break;
			case 3:
				if (!formData.lookingToBuild.trim()) newErrors.lookingToBuild = 'Please describe what you want to build';
				break;
			case 4:
				if (!formData.monthlyRevenue) newErrors.monthlyRevenue = 'Please select your monthly revenue';
				break;
			case 5:
				if (!formData.techTeam) newErrors.techTeam = 'Please select your team status';
				break;
			case 6:
				if (!formData.startTimeline) newErrors.startTimeline = 'Please select your timeline';
				break;
			default:
				break;
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const nextStep = () => {
		if (validateStep(currentStep)) {
			if (currentStep < 6) {
				setCurrentStep(currentStep + 1);
			}
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate the final step before submitting
		if (!validateStep(6)) {
			return;
		}

		// Google Form URL - replace with your actual Google Form URL
		const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfJAPkVf71MHirwW1ctg6-D1gBCysg0YZjTdXGlXvlzGbifHA/formResponse';

		// Google Form field IDs - replace with your actual field IDs
		const formFields = {
			'entry.360955118': formData.firstName, // First Name
			'entry.657453161': formData.lastName, // Last Name
			'entry.1558885401': formData.countryCode, // Country Code
			'entry.1803892848': formData.phone, // Phone
			'entry.2045141290': formData.email, // Email
			'entry.492477329': formData.companyName, // Company Name
			'entry.971910582': formData.businessType, // Business Type
			'entry.1574054322': formData.lookingToBuild, // Looking to Build
			'entry.1525190325': formData.monthlyRevenue, // Monthly Revenue
			'entry.1146517630': formData.techTeam, // Tech Team
			'entry.902242545': formData.startTimeline // Start Timeline
		};

		// Create form data for submission
		const formDataToSubmit = new FormData();
		Object.entries(formFields).forEach(([fieldId, value]) => {
			formDataToSubmit.append(fieldId, value);
		});

		try {
			// Submit to Google Form
			const response = await fetch(googleFormUrl, {
				method: 'POST',
				body: formDataToSubmit,
				mode: 'no-cors' // Required for Google Forms
			});
			console.log(response);

			// Show success message
			alert('Thank you! Your message has been sent successfully.');

			// Reset form
			setFormData({
				firstName: '',
				lastName: '',
				countryCode: '',
				phone: '',
				email: '',
				companyName: '',
				businessType: '',
				lookingToBuild: '',
				monthlyRevenue: '',
				techTeam: '',
				startTimeline: ''
			});
			setErrors({});
			setCurrentStep(1);
			clearStored();
			console.log(formData);
		} catch (error) {
			console.error('Error submitting form:', error);
			alert('There was an error submitting your form. Please try again.');
		}
	};

	// Prevent Enter from auto-submitting when not on final step
	const handleFormKeyDown = (e) => {
		if (e.key === 'Enter' && currentStep < 6) {
			e.preventDefault();
		}
	};

	const handleClearForm = () => {
		setFormData({
			firstName: '',
			lastName: '',
			countryCode: '',
			phone: '',
			email: '',
			companyName: '',
			businessType: '',
			lookingToBuild: '',
			monthlyRevenue: '',
			techTeam: '',
			startTimeline: ''
		});
		setErrors({});
		setCurrentStep(1);
		clearStored();
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						<h3 className="text-2xl font-bold text-white mb-6">Basic Information</h3>

						<div className="grid gap-6 sm:grid-cols-2">
							<div>
								<label className="block text-sm font-medium text-gray-300 mb-2">
									First Name *
								</label>
								<input
									type="text"
									placeholder='John'
									value={formData.firstName}
									onChange={(e) => handleInputChange('firstName', e.target.value)}
									className={`w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.firstName ? 'ring-red-500' : 'ring-white/10'
										} focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm`}
									required
								/>
								{errors.firstName && (
									<p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
								)}
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-300 mb-2">
									Last Name *
								</label>
								<input
									type="text"
									placeholder='Doe'
									value={formData.lastName}
									onChange={(e) => handleInputChange('lastName', e.target.value)}
									className={`w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.lastName ? 'ring-red-500' : 'ring-white/10'
										} focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm`}
									required
								/>
								{errors.lastName && (
									<p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
								)}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Phone Number *
							</label>
							<div className="grid grid-cols-3 gap-4">
								<div>
									<select
										value={formData.countryCode}
										onChange={(e) => handleInputChange('countryCode', e.target.value)}
										className={`w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.countryCode ? 'ring-red-500' : 'ring-white/10'
											} focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm`}
										required
									>
										<option className='bg-black text-white' value="">Code</option>
										<option className='bg-black text-white' value="+1">+1 (US/CA)</option>
										<option className='bg-black text-white' value="+91">+91 (IN)</option>
										<option className='bg-black text-white' value="+44">+44 (UK)</option>
										<option className='bg-black text-white' value="+61">+61 (AU)</option>
										<option className='bg-black text-white' value="+33">+33 (FR)</option>
										<option className='bg-black text-white' value="+49">+49 (DE)</option>
										<option className='bg-black text-white' value="+81">+81 (JP)</option>
										<option className='bg-black text-white' value="+86">+86 (CN)</option>
										<option className='bg-black text-white' value="+91">+91 (IN)</option>
										<option className='bg-black text-white' value="+52">+52 (MX)</option>
										<option className='bg-black text-white' value="+55">+55 (BR)</option>
										<option className='bg-black text-white' value="+34">+34 (ES)</option>
										<option className='bg-black text-white' value="+39">+39 (IT)</option>
										<option className='bg-black text-white' value="+7">+7 (RU)</option>
									</select>
								</div>
								<div className="col-span-2">
									<input
										type="tel"
										name='phone'
										value={formData.phone}
										onChange={(e) => handleInputChange('phone', e.target.value)}
										placeholder="(555) 123-4567"
										className={`w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.phone ? 'ring-red-500' : 'ring-white/10'
											} focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm`}
										required
									/>
								</div>
							</div>
							{(errors.countryCode || errors.phone) && (
								<p className="mt-1 text-sm text-red-400">
									{errors.countryCode || errors.phone}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Email *
							</label>
							<input
								type="email"
								placeholder='example@gmail.com'
								value={formData.email}
								onChange={(e) => handleInputChange('email', e.target.value)}
								className={`w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500' : 'ring-white/10'
									} focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm`}
								required
							/>
							{errors.email && (
								<p className="mt-1 text-sm text-red-400">{errors.email}</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Company Name
							</label>
							<input
								type="text"
								placeholder='Example Pvt. Ltd.'
								value={formData.companyName}
								onChange={(e) => handleInputChange('companyName', e.target.value)}
								className="w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm"
							/>
						</div>
					</motion.div>
				);

			case 2:
				return (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						<h3 className="text-2xl font-bold text-white mb-6">Business Information</h3>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								What type of business do you run? *
							</label>
							<select
								value={formData.businessType}
								onChange={(e) => handleInputChange('businessType', e.target.value)}
								className={`w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.businessType ? 'ring-red-500' : 'ring-white/10'
									} focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm`}
								required
							>
								<option className='bg-black text-white' value="">Select business type</option>
								<option className='bg-black text-white' value="Agency">Agency</option>
								<option className='bg-black text-white' value="SaaS">SaaS</option>
								<option className='bg-black text-white' value="Financial Services">Financial Services</option>
								<option className='bg-black text-white' value="eCommerce">eCommerce</option>
								<option className='bg-black text-white' value="Other">Other</option>
							</select>
							{errors.businessType && (
								<p className="mt-1 text-sm text-red-400">{errors.businessType}</p>
							)}
						</div>
					</motion.div>
				);

			case 3:
				return (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						<h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								What are you looking to build or improve? *
							</label>
							<select
								value={formData.lookingToBuild}
								onChange={(e) => handleInputChange('lookingToBuild', e.target.value)}
								className={`w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.lookingToBuild ? 'ring-red-500' : 'ring-white/10'
									} focus:ring-2 focus:ring-[#8B5CF6] sm:text-sm`}
								required
							>
								<option className='bg-black text-white' value="">Select what you want to build</option>
								<option className='bg-black text-white' value="CRM">CRM</option>
								<option className='bg-black text-white' value="Scheduling System">Scheduling System</option>
								<option className='bg-black text-white' value="AI Automation">AI Automation</option>
								<option className='bg-black text-white' value="Internal Tool">Internal Tool</option>
								<option className='bg-black text-white' value="Other">Other</option>
							</select>
							{errors.lookingToBuild && (
								<p className="mt-1 text-sm text-red-400">{errors.lookingToBuild}</p>
							)}
						</div>
					</motion.div>
				);

			case 4:
				return (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						<h3 className="text-2xl font-bold text-white mb-6">Revenue Information</h3>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								What's your current monthly revenue? *
							</label>
							<div className="space-y-3">
								{[
									{ value: '$10k-$50k', label: '$10k-$50k' },
									{ value: '$50k-$100k', label: '$50k-$100k' },
									{ value: '$100k+', label: '$100k+' }
								].map((option) => (
									<label key={option.value} className="flex items-center space-x-3 cursor-pointer">
										<input
											type="radio"
											name="monthlyRevenue"
											value={option.value}
											checked={formData.monthlyRevenue === option.value}
											onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
											className="h-4 w-4 text-[#8B5CF6] border-gray-300 focus:ring-[#8B5CF6]"
											required
										/>
										<span className="text-gray-300">{option.label}</span>
									</label>
								))}
							</div>
							{errors.monthlyRevenue && (
								<p className="mt-1 text-sm text-red-400">{errors.monthlyRevenue}</p>
							)}
						</div>
					</motion.div>
				);

			case 5:
				return (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						<h3 className="text-2xl font-bold text-white mb-6">Team Information</h3>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Do you already have a tech team or developer? *
							</label>
							<div className="space-y-3">
								{[
									{ value: 'yes, in-house', label: 'Yes, in-house' },
									{ value: 'yes, outsourced', label: 'Yes, outsourced' },
									{ value: 'no', label: 'No' }
								].map((option) => (
									<label key={option.value} className="flex items-center space-x-3 cursor-pointer">
										<input
											type="radio"
											name="techTeam"
											value={option.value}
											checked={formData.techTeam === option.value}
											onChange={(e) => handleInputChange('techTeam', e.target.value)}
											className="h-4 w-4 text-[#8B5CF6] border-gray-300 focus:ring-[#8B5CF6]"
											required
										/>
										<span className="text-gray-300">{option.label}</span>
									</label>
								))}
							</div>
							{errors.techTeam && (
								<p className="mt-1 text-sm text-red-400">{errors.techTeam}</p>
							)}
						</div>
					</motion.div>
				);

			case 6:
				return (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-6"
					>
						<h3 className="text-2xl font-bold text-white mb-6">Timeline</h3>

						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								When are you looking to start? *
							</label>
							<div className="space-y-3">
								{[
									{ value: 'Immediately', label: 'Immediately' },
									{ value: 'Within 2-4 weeks', label: 'Within 2-4 weeks' },
									{ value: '1-2 months', label: '1-2 months' },
									{ value: 'Just exploring', label: 'Just exploring' }
								].map((option) => (
									<label key={option.value} className="flex items-center space-x-3 cursor-pointer">
										<input
											type="radio"
											name="startTimeline"
											value={option.value}
											checked={formData.startTimeline === option.value}
											onChange={(e) => handleInputChange('startTimeline', e.target.value)}
											className="h-4 w-4 text-[#8B5CF6] border-gray-300 focus:ring-[#8B5CF6]"
											required
										/>
										<span className="text-gray-300">{option.label}</span>
									</label>
								))}
							</div>
							{errors.startTimeline && (
								<p className="mt-1 text-sm text-red-400">{errors.startTimeline}</p>
							)}
						</div>
					</motion.div>
				);

			default:
				return null;
		}
	};

	return (
		<section id="contact" className="section">

			<div className="container">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold sm:text-4xl gradient-text">Let's Build Together</h2>
						<p className="mt-4 text-lg text-gray-300">
							Tell us about your project and we'll get back to you within 24 hours.
						</p>
					</motion.div>

					{/* Progress bar */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-8"
					>
						<div className="flex justify-between items-center mb-4">
							<span className="text-sm text-gray-400">Step {currentStep} of 6</span>
							<span className="text-sm text-gray-400">{Math.round((currentStep / 6) * 100)}%</span>
						</div>
						<div className="w-full bg-gray-800 rounded-full h-2">
							<motion.div
								className="bg-[#8B5CF6] h-2 rounded-full"
								initial={{ width: 0 }}
								animate={{ width: `${(currentStep / 6) * 100}%` }}
								transition={{ duration: 0.5 }}
							/>
						</div>
					</motion.div>

					<motion.div
						className="glass-card p-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<div className="relative z-10">
							<form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown} className="space-y-6">
								{renderStep()}

								<div className="flex justify-between pt-6">
									<motion.button
										type="button"
										onClick={prevStep}
										disabled={currentStep === 1}
										className={`flex items-center px-4 py-2 rounded-lg transition-colors ${currentStep === 1
											? 'text-gray-500 cursor-not-allowed'
											: 'text-gray-300 hover:text-white'
											}`}
										whileHover={currentStep !== 1 ? { scale: 1.05 } : {}}
										whileTap={currentStep !== 1 ? { scale: 0.95 } : {}}
									>
										<ChevronLeftIcon className="w-4 h-4 mr-2" />
										Previous
									</motion.button>

									{currentStep < 6 ? (
										<motion.button
											type="button"
											onClick={nextStep}
											className="flex items-center px-6 py-2 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] transition-colors"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											Next
											<ChevronRightIcon className="w-4 h-4 ml-2" />
										</motion.button>
									) : (
										<motion.button
											type="submit"
											className="flex items-center px-6 py-2 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] transition-colors"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											Send Message
											<ChevronRightIcon className="w-4 h-4 ml-2" />
										</motion.button>
									)}
								</div>

								{/* Clear form action - subtle text button to avoid UI changes */}
								<div className="pt-2">
									<motion.button
										type="button"
										onClick={handleClearForm}
										className="text-sm text-gray-400 hover:text-white transition-colors"
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.98 }}
									>
										Clear form and start over
									</motion.button>
								</div>
							</form>
						</div>
					</motion.div>

					{/* Contact info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="mt-12 text-center"
					>
						<p className="text-gray-400 mb-4">Or reach out directly:</p>
						<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
							<div className="flex items-center">
								<PhoneIcon className="h-5 w-5 text-[#8B5CF6] mr-2" />
								<a target="blank" href={CALENDER_URL} className="text-gray-300 hover:text-[#8B5CF6]">
									Book an appointment
								</a>
							</div>
							<div className="flex items-center">
								<EnvelopeIcon className="h-5 w-5 text-[#8B5CF6] mr-2" />
								<a target="blank" href="mailto:support@example.com" className="text-gray-300 hover:text-[#8B5CF6]">
									admin@learnwithstack.com
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{showRestoreToast && (
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					className="fixed bottom-6 right-6 z-50"
				>
					<div className="pointer-events-auto px-5 py-3 rounded-xl bg-gray-900/95 backdrop-blur-sm border border-gray-800 text-gray-100 shadow-xl shadow-black/30 flex items-center gap-3">
						<span className="inline-block w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
						<span className="text-base">Restored your progress</span>
						<button
							type="button"
							aria-label="Dismiss"
							onClick={() => setShowRestoreToast(false)}
							className="ml-2 text-gray-400 hover:text-white transition-colors"
						>
							&#10005;
						</button>
					</div>
				</motion.div>
			)}
		</section>
	);
}