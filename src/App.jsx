import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
	return (
		<>
			<TopBar />
			<Navbar />
			<Hero />
			<Activities />
			<BookingForm />
			<Gallery />
			<Footer />
		</>
	);
};

export default App;
