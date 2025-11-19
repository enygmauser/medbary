import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom"; // <-- IMPORTANT

const GradientAppBar = styled(AppBar)(() => ({
  background: "linear-gradient(90deg, #003b46, #00bcd4)",
  boxShadow: "none",
  paddingBlock: 12,
}));

const AnimatedMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    animation: "fadeIn 0.18s ease-out",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(-6px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState(null);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Departments", path: "/departments" },
    { label: "Articles", path: "/articles" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "General Checkup",
    "Heart Care",
    "Orthopedics",
    "Neurology",
    "Dermatology",
  ];

  return (
    <>
      <GradientAppBar position="sticky">
        <Toolbar className="max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
          {/* Logo */}
          <Box className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="logo"
              className="w-15 h-15 object-contain"
            />
            <span className="text-white text-xl font-semibold tracking-wide">
              MedBary
            </span>
          </Box>

          {/* Desktop Menu */}
          <Box className="hidden lg:flex items-center gap-8 text-white font-medium text-[15px]">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown (router-compatible if you want) */}
            <Box
              onClick={(e) => setServicesAnchor(e.currentTarget)}
              className="cursor-pointer flex items-center gap-1 hover:text-gray-200 transition"
            >
              Services <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          </Box>

          {/* Dropdown */}
          <AnimatedMenu
            anchorEl={servicesAnchor}
            open={Boolean(servicesAnchor)}
            onClose={() => setServicesAnchor(null)}
            PaperProps={{ sx: { mt: 1 } }}
          >
            {services.map((service) => (
              <MenuItem
                key={service}
                onClick={() => setServicesAnchor(null)}
                sx={{ "&:hover": { backgroundColor: "#e8f7f7" } }}
              >
                {service}
              </MenuItem>
            ))}
          </AnimatedMenu>

          {/* Desktop CTA */}
          <Button
            variant="contained"
            className="hidden lg:flex"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000",
              fontWeight: 600,
              borderRadius: "50px",
              px: 3,
              py: 1,
              textTransform: "none",
              fontSize: "15px",
              "&:hover": { backgroundColor: "#f3f3f3" },
            }}
            component={Link}
            to="/contact"
          >
            Book Now
          </Button>

          {/* Mobile Menu Icon */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "white", display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </GradientAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box className="w-72 p-6">
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ mb: 4 }}>
            <CloseIcon />
          </IconButton>

          {/* Mobile Menu */}
          <div className="flex flex-col gap-6 text-[18px] font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                className="cursor-pointer hover:text-gray-700 transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Services Accordion */}
            <details className="cursor-pointer">
              <summary className="text-lg font-semibold">Services</summary>
              <div className="ml-3 mt-3 flex flex-col gap-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="text-gray-700 hover:text-black transition"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </details>
          </div>

          {/* Mobile CTA */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 4, py: 2, borderRadius: "50px" }}
            component={Link}
            to="/contact"
          >
            Book Now
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
