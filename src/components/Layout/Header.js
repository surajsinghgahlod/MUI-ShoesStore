import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import Logo from "../../images/logo.svg";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        Shoe Store
        {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#060822" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {/* <img src={Logo} alt="logo" height={"70"} width="250" /> */}
              ShoeStore
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu" style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <NavLink activeClassName="active" to={"/"}>
                      Home
                    </NavLink>
                </li>
                <li
                  style={{ position: 'relative', display: 'inline-block' }}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <NavLink to={"/products"} style={{ textDecoration: 'none', color: 'inherit', padding: '10px' }}>
                    Products
                  </NavLink>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu" style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', border: '1px solid #ccc', padding: 0, margin: 0 }}>
                      {/* Dropdown menu items */}
                      <li style={{ padding: '10px', width: '100px' }}><NavLink to={"/products/casual"} style={{ textDecoration: 'none', color: '#000000' }}>Casual</NavLink></li>
                      <li style={{ padding: '10px', width: '100px' }}><NavLink to={"/products/sports"} style={{ textDecoration: 'none', color: '#000000' }}>Sports</NavLink></li>
                      <li style={{ padding: '10px', width: '100px' }}><NavLink to={"/products/athletic"} style={{ textDecoration: 'none', color: '#000000' }}>Athletic</NavLink></li>
                    </ul>
                  )}
                </li>
                <li style={{ display: 'inline-block', marginLeft: '10px' }}>
                  <NavLink to={"/about"} style={{ textDecoration: 'none', color: 'inherit', padding: '10px' }}>About</NavLink>
                </li>
                <li style={{ display: 'inline-block', marginLeft: '10px' }}>
                  <NavLink to={"/contact"} style={{ textDecoration: 'none', color: 'inherit', padding: '10px' }}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
