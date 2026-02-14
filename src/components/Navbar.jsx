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
			<div>
				<FaFacebook className="mx-4" />
				<FaSquareXTwitter className="mx-4" />
				<FaInstagramSquare className="mx-4" />
				<FaYoutube className="mx-4" />
			</div>
			{/* Hamburger Icon */}
			<div>
				<FaBars />
			</div>
			{/* Mobile Menu */}
			<div>
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
