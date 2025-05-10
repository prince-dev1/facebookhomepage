import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <main className="container my-5">
                <HeroSection />
                <FeaturesSection />
            </main>
            <Footer />
        </>
    );
};

export default App;