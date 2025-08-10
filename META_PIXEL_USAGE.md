# Meta Pixel Usage Guide

## Overview
The Facebook Meta Pixel has been installed in your application to track user interactions and conversions. This guide shows you how to implement custom tracking events.

## Installation Status
✅ Meta Pixel code added to `public/index.html` header
✅ React component created at `src/components/MetaPixel.js`
✅ Component integrated into main App.js

## Available Tracking Functions

### Standard Events
```javascript
import { 
  trackEvent, 
  trackLead, 
  trackContact, 
  trackPurchase,
  trackAddToCart,
  trackInitiateCheckout,
  trackViewContent,
  trackCompleteRegistration,
  trackSubscribe,
  trackDownload
} from './components/MetaPixel';

// Track a lead generation
trackLead({
  content_name: 'Contact Form',
  content_category: 'Lead Generation'
});

// Track contact form submission
trackContact({
  content_name: 'Contact Form',
  content_category: 'Customer Service'
});

// Track purchase (if applicable)
trackPurchase(99.99, 'USD', {
  content_name: 'Premium Package',
  content_category: 'Software'
});

// Track content views
trackViewContent('Hero Section', {
  content_category: 'Landing Page'
});
```

### Custom Events
```javascript
import { trackCustomEvent } from './components/MetaPixel';

// Track custom interactions
trackCustomEvent('ButtonClick', {
  button_name: 'Get Started',
  page_section: 'Hero'
});

trackCustomEvent('FormStart', {
  form_name: 'Contact Form',
  page: 'Contact'
});

trackCustomEvent('VideoPlay', {
  video_title: 'Product Demo',
  video_duration: '2:30'
});
```

## Implementation Examples

### 1. Contact Form Tracking
```javascript
// In your Contact component
import { trackContact } from './components/MetaPixel';

const handleSubmit = (formData) => {
  // Your form submission logic
  
  // Track the contact event
  trackContact({
    content_name: 'Contact Form',
    content_category: 'Lead Generation',
    value: 1,
    currency: 'USD'
  });
};
```

### 2. Button Click Tracking
```javascript
// Track important button clicks
import { trackCustomEvent } from './components/MetaPixel';

const handleGetStartedClick = () => {
  trackCustomEvent('ButtonClick', {
    button_name: 'Get Started',
    page_section: 'Hero',
    button_location: 'Above the fold'
  });
  
  // Your button logic
};
```

### 3. Page Section Tracking
```javascript
// Track when users view specific sections
import { trackViewContent } from './components/MetaPixel';

const handleSectionView = (sectionName) => {
  trackViewContent(sectionName, {
    content_category: 'Page Section',
    page: window.location.pathname
  });
};
```

### 4. Scroll Depth Tracking
```javascript
import { trackCustomEvent } from './components/MetaPixel';

useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    // Track at 25%, 50%, 75%, and 100% scroll
    if ([25, 50, 75, 100].includes(scrollPercent)) {
      trackCustomEvent('ScrollDepth', {
        scroll_percentage: scrollPercent,
        page: window.location.pathname
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 5. Time on Page Tracking
```javascript
import { trackCustomEvent } from './components/MetaPixel';

useEffect(() => {
  const startTime = Date.now();
  
  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    // Track at 30 seconds, 1 minute, 2 minutes, 5 minutes
    if ([30, 60, 120, 300].includes(timeSpent)) {
      trackCustomEvent('TimeOnPage', {
        time_spent_seconds: timeSpent,
        page: window.location.pathname
      });
    }
  };

  const interval = setInterval(trackTimeOnPage, 1000);
  return () => clearInterval(interval);
}, []);
```

## Recommended Tracking Events

### High-Value Interactions
- **Contact Form Submissions** - Use `trackContact()`
- **Lead Generation** - Use `trackLead()`
- **Button Clicks** - Use `trackCustomEvent('ButtonClick')`
- **Form Starts** - Use `trackCustomEvent('FormStart')`

### Engagement Metrics
- **Scroll Depth** - Use `trackCustomEvent('ScrollDepth')`
- **Time on Page** - Use `trackCustomEvent('TimeOnPage')`
- **Section Views** - Use `trackViewContent()`
- **Video Interactions** - Use `trackCustomEvent('VideoPlay')`

### Conversion Funnels
- **Page Views** - Automatically tracked
- **Content Views** - Use `trackViewContent()`
- **Form Completions** - Use `trackContact()` or `trackLead()`

## Testing Your Implementation

1. **Install Facebook Pixel Helper** browser extension
2. **Check Network Tab** for requests to `facebook.com/tr`
3. **Verify Events** in Facebook Events Manager
4. **Test Custom Events** with the Pixel Helper

## Best Practices

1. **Don't Over-Track** - Focus on meaningful interactions
2. **Use Consistent Naming** - Follow a clear naming convention
3. **Include Relevant Parameters** - Add context to your events
4. **Test Thoroughly** - Ensure events fire correctly
5. **Monitor Performance** - Don't impact page load times

## Troubleshooting

### Common Issues
- **Events not firing**: Check if `window.fbq` exists
- **Wrong pixel ID**: Verify the ID in `index.html`
- **Blocked by ad blockers**: Test in incognito mode
- **React Router issues**: Use `useMetaPixelPageView()` hook

### Debug Mode
```javascript
// Enable debug mode in development
if (process.env.NODE_ENV === 'development') {
  window.fbq('track', 'PageView', {}, {eventID: 'debug_' + Date.now()});
}
```

## Next Steps

1. **Review your components** and identify key interaction points
2. **Implement tracking** for high-value user actions
3. **Set up custom conversions** in Facebook Ads Manager
4. **Monitor performance** and optimize tracking
5. **A/B test** different tracking strategies

## Support

For technical issues with the Meta Pixel implementation, check:
- Facebook Pixel documentation
- React component implementation in `src/components/MetaPixel.js`
- Browser console for JavaScript errors
- Network tab for failed requests
