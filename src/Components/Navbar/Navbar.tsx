import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import helioslogo from "../../assets/logo_helios.png";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Public as GlobeAltIcon,
  ExpandMore as ChevronDownIcon,
  ExpandLess as ChevronUpIcon,
} from "@mui/icons-material";

const servicesMenuItems = [
  {
    label: "Zoho Development",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "IT Strategy & Consulting",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "Blockchain Development",
    url: "https://heliostechlabs.com/blockchain-development-company",
  },
  {
    label: "Application Development",
    url: "https://heliostechlabs.com/application-development",
  },
  {
    label: "Application Maintenance",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "Application Modernization",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "Quality Assurance",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "IT Staff Augmentation",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "Hire Dedicated Developers",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "Software Development",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
  {
    label: "Digital Marketing",
    url: "https://heliostechlabs.com/it-strategy-consulting-services",
  },
];

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const [scrollUp, setScrollUp] = useState(true);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollUp(currentScrollPos === 0);
  };

  window.addEventListener("scroll", handleScroll);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderServicesMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {servicesMenuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.label}
          onClick={() => {
            window.location.href = menuItem.url;
            handleMenuClose();
          }}
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "rgba(173, 216, 230, 0.5)", // Light transparent blue effect
            },
            position: "relative",
            "&:hover .arrow-up": {
              display: "block",
            },
          }}
        >
          {menuItem.label}
          <ChevronUpIcon
            className="arrow-up"
            sx={{
              display: "none",
              position: "absolute",
              top: -10,
              right: 0,
              color: "black",
              fontSize: 20,
            }}
          />
        </MenuItem>
      ))}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {["Services"].map((item) => (
        <MenuItem
          key={item}
          onClick={
            item === "Services" ? handleProfileMenuOpen : handleMenuClose
          }
          sx={{ color: "black" }}
        >
          <Typography sx={{ color: "black" }}>{item}</Typography>
        </MenuItem>
      ))}

      <MenuItem
        onClick={() => {
          window.location.href = "https://heliostechlabs.com/career";
        }}
      >
        <Typography sx={{ color: "black" }}>Career</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          window.location.href = "https://heliostechlabs.com/about-us";
        }}
      >
        <Typography sx={{ color: "black" }}>About Us</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          window.location.href = "https://heliostechlabs.com/contact-us";
        }}
      >
        <Typography sx={{ color: "black" }}>Contact Us</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          transition: "transform 0.3s",
          transform: scrollUp ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Toolbar>
          <Box
            component="img"
            src={helioslogo}
            alt="Logo"
            sx={{
              height: 55,
              display: { xs: "none", md: "block" },
              mx: "auto", // Center logo on large screens
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {["Services", "Career", "About Us", "Contact Us"].map((item) => (
              <Box
                key={item}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  "&:hover .dropdown-content": {
                    display: "block",
                  },
                }}
              >
                <Typography
                  aria-controls={item === "Services" ? menuId : undefined}
                  aria-haspopup="true"
                  onClick={
                    item === "Services"
                      ? handleProfileMenuOpen
                      : () => {
                          // Redirect for Career, About Us, and Contact Us
                          switch (item) {
                            case "Career":
                              window.location.href =
                                "https://heliostechlabs.com/career";
                              break;
                            case "About Us":
                              window.location.href =
                                "https://heliostechlabs.com/about-us";
                              break;
                            case "Contact Us":
                              window.location.href =
                                "https://heliostechlabs.com/contact-us";
                              break;
                            default:
                              break;
                          }
                        }
                  }
                  sx={{
                    cursor: "pointer",
                    color: "black",
                    "&:hover": { color: "blue" },
                  }}
                >
                  {item}
                </Typography>
                {item === "Services" && (
                  <ChevronDownIcon sx={{ ml: 1, color: "black" }} />
                )}
                {item === "Services" && (
                  <Box
                    className="dropdown-content"
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "white",
                      boxShadow: 3,
                      zIndex: 1,
                    }}
                  >
                    {servicesMenuItems.map((menuItem) => (
                      <MenuItem
                        key={menuItem.label}
                        onClick={() => {
                          window.location.href = menuItem.url;
                        }}
                        sx={{ color: "black" }}
                      >
                        {menuItem.label}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                sx={{ ml: 1 }}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Box
                component="img"
                src={helioslogo}
                alt="Logo"
                sx={{
                  height: 40,
                }}
              />
              <Box>
                <IconButton size="large" color="inherit">
                  <SearchIcon sx={{ color: "black" }} />
                </IconButton>
                <IconButton size="large" color="inherit">
                  <GlobeAltIcon sx={{ color: "black" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <SearchIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton size="large" color="inherit">
              <GlobeAltIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderServicesMenu}
    </Box>
  );
};

export default Navbar;
