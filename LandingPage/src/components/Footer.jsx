import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center border-b border-gray-700 pb-8">
                    <h2 className="text-2xl font-semibold">
                        Create your own group.
                    </h2>
                    <button className="bg-white text-black px-6 py-3 rounded-md text-lg">
                        Get Started
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-base mt-10">
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Your Account</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Sign up</a></li>
                            <li><a href="#" className="hover:underline">Log in</a></li>
                            <li><a href="#" className="hover:underline">Help</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Discover</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Communities</a></li>
                            <li><a href="#" className="hover:underline">Calendar</a></li>
                            <li><a href="#" className="hover:underline">Sports</a></li>
                            <li><a href="#" className="hover:underline">Cities</a></li>
                            <li><a href="#" className="hover:underline">Online Events</a></li>
                        </ul>
                    </div>

                </div>
                <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm md:text-base border-t border-gray-700 pt-8">
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Help</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
