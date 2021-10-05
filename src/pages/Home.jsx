import { useState } from "react";
import Contact from "../components/contact/Contact";
import Intro from "../components/intro/Intro";
import Menu from "../components/menu/Menu";
import Portifolio from "../components/portifolio/Portifolio";
import Testimonials from "../components/testimonials/Testimonials";
import Topbar from "../components/topbar/Topbar";
import "./home.scss";

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="home">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="sections">
        <Intro />
        <Portifolio />
        <Testimonials />
        <Contact />
      </section>
		</div>
	)
}