import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 bg-red-500 text-white">
            <div className="flex items-center justify-between px-4 max-w-full">

                {/* Left section with logo and search bar */}
                <div className="flex items-center space-x-4">
                    {/* Logo on the far left */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-8 w-auto" />
                    </div>

                    {/* Search bar to the right of the logo */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search for sports..."
                            className="px-4 py-2 rounded-l-md text-black focus:outline-none"
                        />
                        <button className="bg-red-600 p-2 rounded-r-md hover:bg-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 101 101" id="Search" className="w-6 h-6 text-white">
                                <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" fill="#ffffff" className="color000000 svgShape"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right section with navigation links */}
                <div className="flex items-center space-x-6">
                    <span className="cursor-pointer hover:text-gray-200">Home</span>
                    <span className="cursor-pointer hover:text-gray-200">Contact</span>

                    {/* Sign Up Button */}
                    <button className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-100 focus:outline-none">
                        Sign Up
                    </button>

                    {/* Log In Button */}
                    <button className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-100 focus:outline-none">
                        Log In
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
