import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
import TrustedBy from '../components/TrustedBy';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import About from '../components/About';
import { useEffect } from 'react';

export default function Home() {
    // when the page is reload open at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Hero />
            <TrustedBy />
            <Services />
            <About />
            <Process />
            <Benefits />
            <Testimonials />
            <FAQ />
        </>
    );
}
