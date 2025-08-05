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
import BackgroundGradient from './components/BackgroundGradient';
import About from './components/About';

function App() {
  return (
    <>
      <BackgroundGradient />
      <main className="relative min-h-screen bg-transparent">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Services />
        <About />
        <Process />
        <Benefits />
        <Testimonials />
        {/* <Pricing /> */}
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
