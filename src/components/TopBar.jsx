import {FaPhone, FaClock} from "react-icons/fa";

import {LuTrees} from "react-icons/lu";

const TopBar = () => {
	return (
		<div className="flex justify-between items-center px-4 py-1 bg-teal-500 text-lg tracking-wide">
			<div className="flex items-center">
				<LuTrees size={30} />
				<h1 className="uppercase text-2xl font-bold ms-2">Minimal Living</h1>
			</div>
			<div className="flex">
				<div className="hidden md:flex items-center px-6">
					<FaClock size={20} className="me-2" />
					<p>All day. Every day</p>
				</div>
				<div className="hidden md:flex items-center px-6">
					<FaPhone size={20} className="me-2" />
					<p>+44 52 6283 1667</p>
				</div>
				<button>Get a Free Quote</button>
			</div>
		</div>
	);
};

export default TopBar;
