import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";

interface Props {
	nav: boolean;
	closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
	const navHamburger = useRef(null);
	const navAnimation = nav
		? "translate-y-0 opacity-100"
		: "translate-y-[-100%] opacity-0";
	return (
		<div
			className={`fixed ${navAnimation} transform transition-all duration-700 top-0 left-0 right-0 bottom-0 z-[1000000] bg-slate-600 md:hidden`}
		>
			<div
				onClick={closeNav}
				ref={navHamburger}
				className="flex justify-end w-[96%] py-2"
			>
				<XMarkIcon className="w-[3rem] h-[3rem] cursor-pointer text-slate-800 stroke-6 stroke-slate-800" />
			</div>
			<div className="flex items-center justify-center h-[60%]">
				<div className="w-[60%] h-[80%] flex flex-col items-center justify-center border blorder-slate-800 rounded-xl">
					<a
						href="#Hero"
						className="nav-link-mobile rounded-tl-lg rounded-tr-lg"
						onClick={closeNav}
					>
						HOME
					</a>
					<a href="#Skills" className="nav-link-mobile" onClick={closeNav}>
						ABOUT
					</a>
					<a href="#Skills" className="nav-link-mobile" onClick={closeNav}>
						SKILLS
					</a>
					<a href="#Projects" className="nav-link-mobile" onClick={closeNav}>
						PROJECTS
					</a>
					<a href="#Experience" className="nav-link-mobile" onClick={closeNav}>
						EXPERIENCE
					</a>
					<a
						href="#Contact"
						className="nav-link-mobile rounded-bl-lg rounded-br-lg"
						onClick={closeNav}
					>
						CONTACT
					</a>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
