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
	const [mobileMenu, setMobileMenu] = useState(false);

	const handleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	return (
		<div className="w-full min-h-12.5 flex justify-between items-center absolute z-10 text-white bg-green-800">
			<ul className="hidden sm:flex px-4 space-x-6 uppercase tracking-wider">
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
			<div onClick={handleMobileMenu} className="sm:hidden z-10">
				<FaBars size={20} className="mr-4 cursor-pointer" />
			</div>
			{/* Mobile Menu */}
			<div
				className={
					mobileMenu
						? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-white text-3xl left-0 top-0 w-full h-screen bg-teal-600/90 px-4 py-7 flex flex-col"
						: "absolute top-0 h-screen left-full ease-in duration-500"
				}>
				<ul className="h-full w-full text-center pt-12 space-y-6 uppercase tracking-wider">
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
