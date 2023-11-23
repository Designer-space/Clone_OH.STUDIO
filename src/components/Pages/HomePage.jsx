import React from "react";
import HeroSection from "../Sections/HeroSection";
import ProjectSection from "../Sections/ProjectSection";
import ContactSection from "../Sections/ContactSection";
import ShopBtn from "../ShopBtn";
import FooterSection from "../Sections/FooterSection";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Lenis from "@studio-freight/lenis";

const HomePage = () => {
	useEffect(() => {
		document.title = "OH.STUDIO";
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<Navbar />
			<main className=''>
				<HeroSection />
				<ProjectSection />
				<ShopBtn />
				<div className='h-[50vh]'>
					<ContactSection fontSize='text-fluid-sub-header' />
				</div>
				<FooterSection />
			</main>
		</>
	);
};

export default HomePage;
