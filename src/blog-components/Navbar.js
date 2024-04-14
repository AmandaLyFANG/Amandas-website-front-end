import React, { useState } from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
	// State to manage the mobile menu toggle
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between items-center py-4">

					{/* Logo or brand name */}
					<div className="flex-grow">
						<NavLink to="/#" className="flex justify-center md:justify-start">
							<span style={{ fontSize: '30px', fontWeight: 'bold', color: '#9f7aea' }}>Amanda</span>
						</NavLink>

					</div>

					{/* Navigation Links - shown directly on large screens, toggleable on small screens */}
					<div className={`flex-grow flex md:flex justify-center md:justify-end items-center`}>
						<NavLink to="/about" className="py-2 px-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out mx-2">
							About
						</NavLink>
						<NavLink to="/blog" className="py-2 px-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out mx-2">
							Blogs
						</NavLink>
						<NavLink to="/project" className="py-2 px-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out mx-2">
							Project
						</NavLink>
						<NavLink to="/contact" className="py-2 px-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out mx-2">
							Contact
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};


export default Navbar;
// const Navbar = () => {
// 	return (
// 		<>
// 			<Nav>

// 				<Bars />

// 				<NavMenu>
// 					<NavLink to="/#" >
// 						<span
// 							style={{
// 								textAlign: "left",
// 								marginRight: "20px",
// 								color: "purple",
// 								fontSize: "30px",
// 								fontWeight: 1000
// 							}}
// 						>
// 							Amanda
// 						</span> | </NavLink>
// 					<div style={{
// 								color: "purple",
// 								fontSize: "30px",
// 								fontWeight: "bold"
// 							}}></div>
// 					<NavLink to="/about" >
// 						About
// 					</NavLink>
// 					<NavLink to="/blog" activeStyle>
// 						Blogs
// 					</NavLink>
// 					{/* <NavLink to="/cv" activeStyle>
// 						CV
// 					</NavLink> */}
// 					<NavLink to="/project" activeStyle>

// 						Project
// 					</NavLink>
// 					<NavLink to="/contact" activeStyle>
// 						Contact
// 					</NavLink>
// 					{/* Second Nav */}
// 					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 				</NavMenu>
// 				{/* <NavBtn>
// 					<NavBtnLink to="/signin">
// 						Sign In
// 					</NavBtnLink>
// 				</NavBtn> */}
// 			</Nav>
// 		</>
// 	);
// };

