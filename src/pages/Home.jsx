import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardsContainer from '../components/CardsContainer';
import Contact from '../components/Contact';
import Typing from 'react-typing-effect';  // Import typing effect library
import '../styles/Home.css';

export async function homeLoader() {
    const greeting = 'A MI AMOR';
    const event = "Happy Valentine's Day! <3";
    return { greeting, event };
}

const Home = () => {
    const data = useLoaderData();

    const handleGetStarted = () => {
        const element = document.getElementById('cards-container');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleContinue = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <div id="photo-section" className="hero-section">
                <div className="hero-overlay"></div>  {/* dark overlay effect */}
                <img src="/assets/Latos.jpg" alt="Valentine's Hero" className="hero-image" />
            
                <div className="hero-text" style={{ textAlign: 'center' }}>
                    <p><span style={{color: 'var(--bs-secondary)'}}>{data.greeting}</span></p>
                    <h1>
                        <Typing 
                            text={data.event}
                            speed={50} 
                            eraseDelay={5000} 
                            typingDelay={250} />

                    </h1>
                    <button onClick={handleGetStarted} className="btn-start">Get Started</button>
                </div>
            </div>

            {/* Main Content Below Image */}
            <div className="container-lg">
                <div id="cards-container" className="cards py-lg-7">
                    <CardsContainer />
                    <button onClick={handleContinue} className="btn-start">Continue</button>
                </div>
                <div id="contact" className="py-lg-6">
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Home;