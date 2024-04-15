import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import {NavBtn, NavBtnLink}  from "./NavbarElements"

const drawerWidth = 240
const navItems = ["About", "Blogs", "Project", "Contact", "SignUp"]

export default function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const history = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const pageToNext = (item) => {
    history(`/${item.toLowerCase()}`)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} onClick={() => pageToNext("")}>
        Amanda
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding onClick={() => pageToNext(item)}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          style={{
            background: "rgb(203, 195, 227)",
            // height: 120,
            // lineHeight: "120px"
            // padding: "0.2rem calc((100vw - 1000px) / 2)"
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              style={{ color: "purple", fontSize: 30, fontWeight: 1000 }}
              onClick={() => pageToNext("")}
            >
              Amanda
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "purple" }}
                  onClick={() => pageToNext(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}
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
