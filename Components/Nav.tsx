import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	const navHamburger = useRef(null);

	return (
		<div className="w-[100%] top-0 h-[8vh] bg-transparent shadow-md">
			<div className="flex items-center w-[90%] mx-auto h-[100%] justify-between">
				<div className="nav-container-left">
					<h1 className="text-slate-800">
						MIKE
						<span className="text-red-800 ml-1">FYKE</span>
					</h1>
				</div>
				<div className="w-full flex justify-end md:justify-center">
					<div className="nav-container-right">
						<div className="nav-link rounded-tl-3xl rounded-bl-3xl">About</div>
						<div className="nav-link">Skills</div>
						<div className="nav-link">Projects</div>
						<div className="nav-link">Experience</div>
						<div className="nav-link rounded-tr-3xl rounded-br-3xl">
							Contact
						</div>
					</div>
					<button
						onClick={openNav}
						ref={navHamburger}
						className="nav-hamburger-container"
						onMouseOver={() => {
							const icon = document.getElementById("hamburgerIcon");
							const label = document.getElementById("hamburgerText");
							if (icon && label) {
								icon.style.color = "#f1f5f9";
								icon.style.stroke = "#f1f5f9";
								label.style.color = "#f1f5f9";
							}
						}}
						onMouseLeave={() => {
							const icon = document.getElementById("hamburgerIcon");
							const label = document.getElementById("hamburgerText");
							if (icon && label) {
								icon.style.color = "#475569";
								icon.style.stroke = "#475569";
								label.style.color = "#475569";
							}
						}}
					>
						<h1 id="hamburgerText" className="text-slate-800 text-[25px]">
							MENU
						</h1>
						<Bars3Icon
							id="hamburgerIcon"
							className="w-[32px] h-[32px] text-slate-800 stroke-6 stroke-slate-800"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Nav;
