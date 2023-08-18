import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Career from "../components/Career";
import Gallery from "../components/Gallery";
import Contacts from "../components/Contacts";


export default function Home() {
  return (
		<>
			<Hero />
			<About />
			<Services />
			<Career />
			<Gallery/>
			<Contacts/>
		</>
  )
}
