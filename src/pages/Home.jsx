import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
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
        const sectionIdMap = {
            "/about": "about",
            "/services": "services",
        };

        const sectionId = sectionIdMap[location.pathname];
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>Build With Stack | Automation & Growth Experts</title>
                <meta
                    name="description"
                    content="We help businesses automate smarter and grow faster with custom software and integrations."
                />
                <link rel="canonical" href="https://buildwithstack.com/" />
            </Helmet>

            <Hero />
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
