import {useState, useEffect} from "react";
import {
	FaBars,
	FaTimes,
	FaFacebook,
	FaInstagramSquare,
	FaYoutube,
} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {BsFillChatSquareDotsFill} from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="w-full min-h-12.5 flex justify-between items-center absolute z-10 text-white bg-green-800">
			<ul className="hidden sm:flex px-4">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#gallery">Gallery</a>
				</li>
				<li>
					<a href="#deals">Deals</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="flex justify-between">
				<FaFacebook className="mx-4" />
				<FaSquareXTwitter className="mx-4" />
				<FaInstagramSquare className="mx-4" />
				<FaYoutube className="mx-4" />
			</div>
			{/* Hamburger Icon */}
			<div className="sm:hidden z-10">
				<FaBars size={20} className="mr-4 cursor-pointer" />
			</div>
			{/* Mobile Menu */}
			<div
				className={`overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-teal-900/90 px-4 py-7 flex flex-col`}>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#gallery">Gallery</a>
					</li>
					<li>
						<a href="#deals">Deals</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
