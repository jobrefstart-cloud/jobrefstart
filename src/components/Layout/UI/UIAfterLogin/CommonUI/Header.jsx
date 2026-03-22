// Header.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  Avatar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  styled,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../../../../utils/images/logo.png"

// 🔍 Custom Search Box
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  maxWidth: 280,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const navItems = [
  { icon: <HomeIcon />, label: "Home", path: "/" },
  { icon: <NotificationsIcon />, label: "Notifications", path: "/notifications", badge: 45 },
  { icon: <ChatIcon />, label: "Messaging", path: "/messages", badge: 20 },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:767px)");

  const handleClick = (event) => {
    if (isMobile) {
      navigate("/my-profile"); // Mobile: redirect
    } else {
      setAnchorEl(event.currentTarget); // Desktop: open menu
    }
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {/* 🔹 Top Header */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "black",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          top: 0,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT - Logo */}
          <Box display="flex" alignItems="center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="logo" style={{ width: 75, height: 75, cursor: "pointer" }} />
            </Link>
          </Box>

          {/* CENTER - Nav Items (desktop only) */}
          <Box
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            gap={4}
            sx={{ ml: { md: 8, lg: 30 } }}
          >
            <Box display="flex" justifyContent="space-around" gap={4}>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <Box display="flex" flexDirection="column" alignItems="center" sx={{ cursor: "pointer" }}>
                    <Typography variant="caption">{item.label}</Typography>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE - Search + Avatar */}
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: 18 }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" sx={{ height: 35, borderRadius: 1 }} />
            </Search>

            {/* Avatar */}
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
              <Avatar
                src="https://randomuser.me/api/portraits/women/65.jpg"
                sx={{ width: 40, height: 40, mb: 0.1, mt: 0.3 }}
              />
            </IconButton>

            {/* Desktop menu only */}
            {!isMobile && (
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose}>My References</MenuItem>
                <MenuItem onClick={handleClose}>How it Works</MenuItem>
                <MenuItem onClick={handleClose}>My Activity</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* 🔹 Bottom Navigation (mobile) */}
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#fff",
          color: "black",
          boxShadow: "0 -1px 4px rgba(0,0,0,0.1)",
          display: { xs: "flex", md: "none" },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box display="flex" justifyContent="space-around" gap={4}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Box display="flex" flexDirection="column" alignItems="center" sx={{ cursor: "pointer" }}>
                  <IconButton size="large" color="inherit">
                    {item.badge ? (
                      <Badge badgeContent={item.badge} color="error">
                        {item.icon}
                      </Badge>
                    ) : (
                      item.icon
                    )}
                  </IconButton>
                  <Typography variant="caption">{item.label}</Typography>
                </Box>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
