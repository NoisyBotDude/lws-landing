import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

export default function ContactPage() {
	return (
		<>
			<Helmet>
				<title>Contact Us — Build With Stack</title>
				<meta
					name="description"
					content="Get in touch with Build With Stack. Let's discuss your next automation, optimization, or digital transformation project."
				/>
				<meta property="og:title" content="Contact Build With Stack" />
				<meta property="og:url" content="https://buildwithstack.com/contact" />
				<meta property="og:type" content="website" />
			</Helmet>

			<Contact />
		</>
	);
}