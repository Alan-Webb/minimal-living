import {FaPhone, FaClock} from "react-icons/fa";
import {BsChatSquareDotsFill} from "react-icons/bs";

const TopBar = () => {
	return (
		<div className="bg-teal-600">
			<div>
				<BsChatSquareDotsFill />
				<h1 className="uppercase">Minimal Living</h1>
			</div>
		</div>
	);
};

export default TopBar;
