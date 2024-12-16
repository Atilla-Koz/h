import  { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-black text-white flex flex-row justify-between items-center p-4">
            {/* Logo */}
            <h1 className="text-xl font-bold">HYSK</h1>

            {/* Hamburger Menu Icon */}
            <button
                className="md:hidden text-white text-2xl focus:outline-none"
                onClick={toggleMenu}
            >
                ☰
            </button>

            {/* Navigation */}
            <nav
                className={`${
                    menuOpen ? 'flex' : 'hidden'
                } md:flex flex-col md:flex-row justify-between items-center gap-5 md:gap-8 absolute md:static bg-black w-full md:w-auto top-16 left-0 md:top-auto p-4 md:p-0 z-10`}
            >
                <button className="hover:text-gray-300">Home</button>
                <button className="hover:text-gray-300">Login</button>
            </nav>
        </header>
    );
}