import React from 'react';
import hero from "../assets/hero.webp";

function Hero(props) {
    return (
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center mt-auto lg:mt-2 px-0.5">
            <div className="text-center lg:text-left lg:w-1/2">
                <h1 className="text-5xl font-bold leading-tight mb-4">
                    Bolt Together — Where Sports Spark Friendships
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                    Join a community of sports enthusiasts, connect with like-minded people, and build lasting friendships through sports.
                </p>
                <button className="bg-teal-600 text-white py-2 px-4 rounded-lg">
                    Get Started
                </button>
            </div>

            <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2 flex justify-center">
                <img src={hero} alt="Illustration of people engaging in sports" className="max-w-full h-auto" />
            </div>
        </div>
    );
}

export default Hero;
