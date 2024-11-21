import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Popular from "./components/Popular.jsx";
import Events from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full px-8 pt-10">
                <div className="max-w-screen-2xl mx-auto">
                    <Hero />
                </div>
            </div>
            <Popular />
            <Events />
            <Footer />
        </div>
    );
};

export default App;
