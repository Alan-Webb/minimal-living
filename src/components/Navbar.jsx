import {useState} from "react";

const Navbar = ({activeSection}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const navLinks = [
		{name: "Home", href: "#home", id: "home"},
		{name: "Features", href: "#features", id: "features"},
		{name: "About", href: "#about", id: "about"},
		{name: "Classes", href: "#classes", id: "classes"},
		{name: "Pricing", href: "#pricing", id: "pricing"},
		{name: "Trainers", href: "#trainers", id: "trainers"},
		{name: "Testimonials", href: "#testimonials", id: "testimonials"},
		{name: "Contact", href: "#contact", id: "contact"},
	];

	return (
		<nav className={`flex w-full z-50 transition-all duration-300`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center">
						<div className="shrink-0">
							<span className="text-2xl font-extrabold">
								IRON <span className="text-red-600">ASYLUM</span>
							</span>
							<div className={`ml-2 w-2 rounded-full animate-pulse`}></div>
						</div>
					</div>
					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center space-x-1">
						{navLinks.map((link) => {
							return (
								<a
									key={link.id}
									href={link.href}
									className={`px-3 py-2 mx-1 text-sm font-medium transition-all duration-300 relative group`}>
									{link.name}
									<span
										className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300`}></span>
								</a>
							);
						})}
						<a
							href="#join"
							className={`ml-3 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:translate-y-0.5`}>
							Join Now
						</a>
					</div>

					{/* Mobile Menu Btn */}
					<div className="lg:hidden flex items-center">
						<button
							onClick={handleToggleMenu}
							className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500`}>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true">
								{/* Conditional Rendering */}
								{/* <path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>

								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/> */}
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			<div className={`lg:hidden transition-all duration-300 ease-in-out`}>
				<div className="px-3 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg border-gray-100">
					{navLinks.map((link) => {
						return (
							<a
								key={link.id}
								href={link.href}
								className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-300`}>
								{link.name}
							</a>
						);
					})}
					<div className="pt-2 pb-1">
						<a
							href=""
							className="block w-full px-4 py-3 bg-red-600 text-white text-center font-medium rounded-lg hover:bg-primary-700">
							Join Now
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
