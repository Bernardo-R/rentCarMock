import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/main-logo.png";
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
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); //to make it responsive in smaller devices
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about",
    },
    {
      text: "Inventroy",
      icon: <TimeToLeaveIcon />,
      path: "/inventory",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlinedIcon />,
      path: "/admin",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} width="200px" alt="Company Logo" />
      </div>
      {/* using router to navigate to each link preventing the page to refresh */}
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">
          <AdminPanelSettingsOutlinedIcon className="navbar-cart-icon" />
        </Link>
        <button className="primary-button">Reserve Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {/* using map to create links on side menu from data in array above */}
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
  );
};

export default Navbar;
