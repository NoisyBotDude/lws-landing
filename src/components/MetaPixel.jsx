import { useEffect } from 'react';

// Meta Pixel utility functions
export const trackEvent = (eventName, parameters = {}) => {
	if (typeof window !== 'undefined' && window.fbq) {
		window.fbq('track', eventName, parameters);
	}
};

export const trackCustomEvent = (eventName, parameters = {}) => {
	if (typeof window !== 'undefined' && window.fbq) {
		window.fbq('trackCustom', eventName, parameters);
	}
};

export const trackLead = (parameters = {}) => {
	trackEvent('Lead', parameters);
};

export const trackContact = (parameters = {}) => {
	trackEvent('Contact', parameters);
};

export const trackPurchase = (value, currency = 'USD', parameters = {}) => {
	trackEvent('Purchase', {
		value: value,
		currency: currency,
		...parameters
	});
};

export const trackAddToCart = (value, currency = 'USD', parameters = {}) => {
	trackEvent('AddToCart', {
		value: value,
		currency: currency,
		...parameters
	});
};

export const trackInitiateCheckout = (value, currency = 'USD', parameters = {}) => {
	trackEvent('InitiateCheckout', {
		value: value,
		currency: currency,
		...parameters
	});
};

export const trackViewContent = (contentName, parameters = {}) => {
	trackEvent('ViewContent', {
		content_name: contentName,
		...parameters
	});
};

export const trackCompleteRegistration = (parameters = {}) => {
	trackEvent('CompleteRegistration', parameters);
};

export const trackSubscribe = (parameters = {}) => {
	trackEvent('Subscribe', parameters);
};

export const trackDownload = (parameters = {}) => {
	trackEvent('Download', parameters);
};

// Hook for tracking page views in React Router
export const useMetaPixelPageView = () => {
	useEffect(() => {
		if (typeof window !== 'undefined' && window.fbq) {
			window.fbq('track', 'PageView');
		}
	}, []);
};

// Component for tracking page views
export const MetaPixelPageView = () => {
	useMetaPixelPageView();
	return null;
};

// Main MetaPixel component for initialization
const MetaPixel = () => {
	useEffect(() => {
		// Ensure fbq is available globally
		if (typeof window !== 'undefined' && !window.fbq) {
			// Fallback initialization if the script hasn't loaded yet
			const checkFbq = setInterval(() => {
				if (window.fbq) {
					clearInterval(checkFbq);
					window.fbq('track', 'PageView');
				}
			}, 100);

			// Clear interval after 10 seconds to prevent infinite checking
			setTimeout(() => clearInterval(checkFbq), 10000);
		}
	}, []);

	return null;
};

export default MetaPixel;
