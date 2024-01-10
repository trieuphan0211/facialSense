import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { LeafButton, PoppyButton } from "../button";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { width } = useWindowSize();
  // Translate
  const { t } = useTranslation();
  // Begin: navLinks
  const navLinks = [
    {
      name: "header.product",
      path: "/",
      subnav: [
        { name: "header.subProduct.overview", path: "/" },
        { name: "header.subProduct.pricing", path: "/" },
        { name: "header.subProduct.market", path: "/" },
      ],
    },
    {
      name: "header.industries",
      path: "/",
    },
    { name: "header.pricing", path: "/" },
    { name: "header.resources", path: "/" },
    { name: "header.company", path: "/" },
  ];
  // End: navLinks
  //Begin: toggle menu
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };
  //End: toggle menu
  return (
    <header className="w-full h-32 mx-auto px-2 max-w-[1100px] py-8 flex justify-between items-center">
      <img className="h-full -ml-9" src={logo} alt="" />
      <div className="flex gap-10 items-center lg:hidden">
        <nav>
          <ul className="flex gap-5 uppercase text-sm font-medium text-white">
            {navLinks.map((link) => (
              <li key={t(link.name)} className="relative group/nav py-5">
                <Link to={link.path} className="hover:text-gray-400 ">
                  {t(link.name)}
                </Link>
                {link.subnav && (
                  <ul className="absolute  z-10 top-14 -right-4 hidden  group-hover/nav:block group-hover/nav:animate-show-nav w-48 bg-white text-black font-semibold  rounded-md">
                    {link.subnav.map((sublink) => (
                      <li key={t(sublink.name)} className="">
                        <Link
                          to={sublink.path}
                          className="hover:text-gray-400 h-11 flex px-5 py-[10px] items-center justify-between group/subnav"
                        >
                          {t(sublink.name)}
                          <EastRoundedIcon className="!hidden  group-hover/subnav:translate-x-2 group-hover/subnav:!block !transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-5">
          <PoppyButton title={t("header.login")} />

          <LeafButton title={t("header.signup")} />
        </div>
      </div>
      <IconButton
        aria-label="Open Menu"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ padding: "15px", display: width > 1022 ? "none" : "block" }}
      >
        <MenuIcon sx={{ fontSize: "45px", color: "#ccc" }} />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={menuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: width > 1022 ? "none" : "block",
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
      >
        <nav>
          <nav className="flex flex-col uppercase text-sm font-medium text-white ">
            {navLinks.map((link) => (
              <details key={link.name} className="group">
                <summary className="flex  justify-between group text-black group  hover:text-gray-400 group-open:text-gray-400 group-open:bg-gray-100  block p-5  hover:bg-gray-100">
                  <Link
                    to={link.path}
                    className="cursor-pointer"
                    onClick={handleDrawerToggle}
                  >
                    {t(link.name)}
                  </Link>
                  {link.subnav && (
                    <div className="group-open:rotate-180 transition-all cursor-pointer">
                      <ExpandMoreOutlinedIcon />
                    </div>
                  )}
                </summary>

                {link.subnav && (
                  <nav
                    className={` peer-checked/nav:block w-48 bg-white text-black font-semibold  rounded-md ml-10`}
                  >
                    {link.subnav.map((sublink) => (
                      <div key={sublink.name} onClick={handleDrawerToggle}>
                        <Link
                          to={sublink.path}
                          className="hover:text-gray-400 h-11 flex px-5 py-[10px] items-center justify-between group/subnav"
                        >
                          {t(sublink.name)}
                          <EastRoundedIcon className="!hidden  group-hover/subnav:translate-x-2 group-hover/subnav:!block !transition-all" />
                        </Link>
                      </div>
                    ))}
                  </nav>
                )}
              </details>
            ))}
          </nav>
        </nav>
        <div className="flex gap-5 mt-3 justify-center">
          <PoppyButton title={t("header.login")} />

          <LeafButton title={t("header.signup")} />
        </div>
      </Drawer>
    </header>
  );
};
