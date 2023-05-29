import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/main-logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); //to make it responsive in smaller devices
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about"
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      path: "/testimonial"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact"
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      path: "/cart"
    }
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} width= '200px'alt="Company Logo" />
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/testimonial">Testimonial</Link>
        <Link to="/contact">Contact</Link>
        <Link to="">
          <BsCart2 className="navbar-cart-icon" />
        </Link>
        <button className="primary-button">Reserve Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* creating slider so in smaller screen menu bar will go to right side of screen */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right"> 
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
    // function CustomLink({ to, children, ...props}){
    //   const path = window.location.pathname

    //   return (
    //     <li className={path === to ? "active" : ""}>
    //       <Link to = { to } {...props}>
    //         { children }
    //       </Link>
    //     </li>
    //   )
    // }         

 
}

export default Navbar