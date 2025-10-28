import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
// import TrustedBy from '../components/TrustedBy';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Team from '../components/Team';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (location.pathname === "/about") {
            const aboutUsSection = document.getElementById("about");
            if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (location.pathname === "/services") {
            const aboutUsSection = document.getElementById("services");
            if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    
    return (
        <>
            <Hero />
            {/* <TrustedBy /> */}
            <Services />
            <About />
            <Process />
            <Benefits />
            <Team />
            <Testimonials />
            <FAQ />
        </>
    );
}
