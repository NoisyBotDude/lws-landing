import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
