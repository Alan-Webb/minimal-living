import {useState, useEffect} from "react";
import {
	FaBars,
	FaTimes,
	FaFacebook,
	FaInstagramSquare,
	FaYoutube,
} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	useEffect(() => {
		if (mobileMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [mobileMenu]);

	const handleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	return (
		<div className="w-full min-h-12.5 flex justify-between items-center absolute z-10 text-xl text-white bg-green-800">
			<ul className="hidden sm:flex px-4 space-x-6 uppercase tracking-wider">
				<li>
					<a href="/" className="hover:text-black">
						Home
					</a>
				</li>
				<li>
					<a href="#gallery" className="hover:text-black">
						Gallery
					</a>
				</li>
				<li>
					<a href="#deals" className="hover:text-black">
						Deals
					</a>
				</li>
				<li>
					<a href="#contact" className="hover:text-black">
						Contact
					</a>
				</li>
			</ul>
			<div className="flex justify-between">
				<FaFacebook
					size={20}
					className="mx-4 cursor-pointer hover:text-black"
				/>
				<FaSquareXTwitter
					size={20}
					className="mx-4 cursor-pointer hover:text-black"
				/>
				<FaInstagramSquare
					size={20}
					className="mx-4 cursor-pointer hover:text-black"
				/>
				<FaYoutube size={20} className="mx-4 cursor-pointer hover:text-black" />
			</div>
			{/* Hamburger Icon */}
			<div onClick={handleMobileMenu} className="sm:hidden z-10">
				{mobileMenu ? (
					<FaTimes size={20} className="mr-4 cursor-pointer" />
				) : (
					<FaBars size={20} className="mr-4 cursor-pointer" />
				)}
			</div>
			{/* Mobile Menu */}
			<div
				className={
					mobileMenu
						? "md:hidden ease-in duration-300 absolute text-white text-3xl left-0 top-0 w-full h-screen bg-teal-600/90 px-4 py-7 flex flex-col"
						: "absolute top-0 h-screen left-full ease-in duration-500"
				}>
				<ul className="h-full w-full text-center pt-12 space-y-6 uppercase tracking-wider">
					<li>
						<a href="/" className="hover:text-black">
							Home
						</a>
					</li>
					<li>
						<a href="#gallery" className="hover:text-black">
							Gallery
						</a>
					</li>
					<li>
						<a href="#deals" className="hover:text-black">
							Deals
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-black">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
