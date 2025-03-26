import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between item-center">
                {/* Logo */}
                <div className="text 2x1 font-bold text-clue-700">Multi Bunny Farm</div>

                {/* Menu for large screens */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
                    <li><a href="#" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500">Katalog</a></li>
                    <li><a href="#" className="hover:text-blue-500">Edukasi</a></li>
                    <li><a href="#" className="hover:text-blue-500">Promo</a></li>
                    <li><a href="#" className="hover:text-blue-500">Tentang Kami</a></li>
                </ul>

                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-gray-100 p-2 rounded-lg">
                    <input type="text" placeholder="Cari..." className="bg-transparrent outline-non"   />
                    <FaSearch className="text-grsy-500"></FaSearch>
                </div>


                {/* Mobile Menu Bar */}
                <button className="md:hidden" onClick={()=> setIsOpen(!isOpen)}>
                    <FaBars size={24}/>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md p-4">
                    <ul className="spce-y-4 text-gray-700 font-semibold">
                        <li><a href="#" className="block">Home</a></li>
                        <li><a href="#" className="block">Katalog</a></li>
                        <li><a href="#" className="block">Edukasi</a></li>
                        <li><a href="#" className="block">Promo</a></li>
                        <li><a href="#" className="block">Tentang Kami</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
