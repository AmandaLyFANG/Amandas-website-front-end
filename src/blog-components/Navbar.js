import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
					
				<Bars />

				<NavMenu>
                <h1
						style={{
							textAlign: "left",
							marginRight: "20px",
							color: "purple",
                            fontSize: "30px"
						}}
					>
						Amanda 
					</h1> |
					<NavLink to="/blogpage" >
						About
					</NavLink>
					<NavLink to="/blog" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/cv" activeStyle>
						CV
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
