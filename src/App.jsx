import {useState} from "react";
import Navbar from "./components/Navbar";

const App = () => {
	const [activeSection, setActiveSection] = useState("home");

	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<Navbar activeSection={activeSection} />
		</div>
	);
};

export default App;
