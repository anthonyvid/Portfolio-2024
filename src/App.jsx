import "./fonts/SatoshiBlack.ttf";
import "./fonts/SatoshiBold.ttf";
import "./fonts/SatoshiMedium.ttf";
import "./fonts/SatoshiLight.ttf";
import "./fonts/SatoshiRegular.ttf";
import "./app.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Background from "./components/Background/Background";
import Contact from "./components/Contact/Contact";
// import Experience from "./components/Experience/Experience";

function App() {
	return (
		<>
			<div className="master-container">
				<Header />
				<Hero />
				<About />
				<Projects />
				{/* <Experience /> */}
				<Contact />
			</div>
			<Background />
		</>
	);
}

export default App;
