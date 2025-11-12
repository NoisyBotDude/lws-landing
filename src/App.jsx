import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundGradient from './components/BackgroundGradient';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import MetaPixel from './components/MetaPixel';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import CostEstimate from './pages/CostEstimate';

function App() {
	return (
		<HelmetProvider>
			<Router>
				<MetaPixel />
				<BackgroundGradient />
				<main className="relative min-h-screen bg-transparent">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<Home />} />
						<Route path="/services" element={<Home />} />
						<Route path="/estimate" element={<CostEstimate />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/blogs/all" element={<BlogList />} />
						<Route path="/blogs/blog/:slug" element={<BlogPost />} />
					</Routes>
					<Footer />
				</main>
			</Router>
		</HelmetProvider>
	);
}

export default App;
