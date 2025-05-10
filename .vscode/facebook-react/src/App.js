import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
    return (
        <div>
            <Header />
            <main className="container my-5">
                <HeroSection />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;