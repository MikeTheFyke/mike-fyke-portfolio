import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import React, { useEffect, useState } from "react";

const Home = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	const handleResize = () => {
		if (window.innerWidth > 640) {
			closeNav();
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return (
		<div className="overflow-x-hidden">
			<div>
				<MobileNav nav={nav} closeNav={closeNav} />
				<Nav openNav={openNav} />
			</div>
		</div>
	);
};

export default Home;
