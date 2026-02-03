import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

const App = () => {
	return (
		<>
			<TopBar />
			<Navbar />
			<Hero />
			<Activities />
			<BookingForm />
			<Gallery />
			<ContactForm />
			<Footer />
		</>
	);
};

export default App;
