import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useWindowSize } from "@uidotdev/usehooks";
import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as OpenBook } from "../../assets/svg/open-book.svg";
import { ReactComponent as PlusCircle } from "../../assets/svg/plus-circle.svg";
import { ReactComponent as ShoppingBag } from "../../assets/svg/shopping-bag.svg";
import { LeafButton, PoppyButton } from "../button";

export const Header = ({ logo }) => {
  const { width } = useWindowSize();
  // Translate
  const { t } = useTranslation();
  // Begin: navLinks
  const navLinks = [
    {
      name: "header.product",
      path: "/",
      position: "",
      subnav: [
        {
          name: "header.subproduct.0.name",
          item: [
            {
              name: "",
              item: [
                {
                  name: "header.subproduct.0.item.0.item.0.name",
                  path: "/facialsense-bio-attendance",
                },
                {
                  name: "header.subproduct.0.item.0.item.1.name",
                  path: "/facialsense-visitor-management",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "header.industries",
      position: "-left-36",
      subnav: [
        {
          name: "header.subindustries.0.name",
          item: [
            {
              name: "",
              item: [
                {
                  name: "header.subindustries.0.item.0.item.0.name",
                  path: "/office-employee-time-attendance-monitoring-system",
                },
                {
                  name: "header.subindustries.0.item.0.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.0.item.0.item.2.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.0.item.0.item.3.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.0.item.0.item.4.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.0.item.0.item.5.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.0.item.0.item.6.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.0.item.0.item.7.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.0.item.0.item.8.name",
                  path: "/",
                },
              ],
            },
          ],
        },
        {
          name: "header.subindustries.1.name",
          item: [
            {
              name: "",
              item: [
                {
                  name: "header.subindustries.1.item.0.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.2.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.3.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.4.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.5.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.6.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.7.name",
                  path: "/",
                },
                {
                  name: "header.subindustries.1.item.0.item.8.name",
                  path: "/",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "header.pricing",
      path: "/",
      position: "",
      subnav: [
        {
          name: "header.subpricing.0.name",
          item: [
            {
              name: "",
              item: [
                {
                  name: "header.subpricing.0.item.0.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subpricing.0.item.0.item.1.name",
                  path: "/",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "header.resources",
      path: "/",
      position: "-right-[370px]",
      subnav: [
        {
          name: "header.subresources.0.name",
          item: [
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  {t("header.subresources.0.item.0.name")}
                </div>
              ),
              item: [
                {
                  name: "header.subresources.0.item.0.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.0.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.0.item.2.name",
                  path: "/",
                },
              ],
            },
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  {t("header.subresources.0.item.1.name")}
                </div>
              ),
              item: [
                {
                  name: "header.subresources.0.item.1.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.1.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.1.item.2.name",
                  path: "/",
                },
              ],
            },
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <PlusCircle />
                  {t("header.subresources.0.item.2.name")}
                </div>
              ),
              item: [
                {
                  name: "header.subresources.0.item.2.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.2.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.2.item.2.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.2.item.3.name",
                  path: "/",
                },
                {
                  name: "header.subresources.0.item.2.item.4.name",
                  path: "/",
                },
              ],
            },
          ],
        },
        {
          name: "header.subresources.1.name",
          item: [
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <OpenBook />
                  {t("header.subresources.1.item.0.name")}
                </div>
              ),
              item: [
                {
                  name: "header.subresources.1.item.0.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subresources.1.item.0.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subresources.1.item.0.item.2.name",
                  path: "/",
                },
              ],
            },

            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <PlusCircle />
                  {t("header.subresources.1.item.1.name")}
                </div>
              ),
              item: [
                {
                  name: "header.subresources.1.item.1.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subresources.1.item.1.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subresources.1.item.1.item.2.name",
                  path: "/",
                },
                {
                  name: "header.subresources.1.item.1.item.3.name",
                  path: "/",
                },
              ],
            },
          ],
        },
        {
          name: "header.subresources.2.name",
          item: [
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  {t("header.subresources.2.item.0.name")}
                </div>
              ),
              item: [
                {
                  name: "header.subresources.2.item.0.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subresources.2.item.0.item.1.name",
                  path: "/",
                },
              ],
            },

            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  {t("header.subresources.2.item.1.name")}
                </div>
              ),
              item: [
                {
                  name: "header.subresources.2.item.1.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subresources.2.item.1.item.1.name",
                  path: "/",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "header.company",
      path: "/",
      position: "",
      subnav: [
        {
          name: "header.subcompany.0.name",
          item: [
            {
              name: "",
              item: [
                {
                  name: "header.subcompany.0.item.0.item.0.name",
                  path: "/",
                },
                {
                  name: "header.subcompany.0.item.0.item.1.name",
                  path: "/",
                },
                {
                  name: "header.subcompany.0.item.0.item.2.name",
                  path: "/",
                },
                {
                  name: "header.subcompany.0.item.0.item.3.name",
                  path: "/",
                },
                {
                  name: "header.subcompany.0.item.0.item.4.name",
                  path: "/",
                },
                {
                  name: "header.subcompany.0.item.0.item.5.name",
                  path: "/",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  // End: navLinks
  //Begin: toggle menu
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };
  //End: toggle menu
  return (
    <header className=" w-full h-32 py-8 lg:py-2 lg:h-auto z-10">
      <div className="flex max-w-[1300px] justify-between items-center px-2  mx-auto">
        <a
          href="/"
          className="h-[66px] -ml-9 cursor-pointer"
          title="CheckID FacialSense Service"
        >
          <img
            className="h-full"
            src={logo}
            alt=" CheckID FacialSense Service"
          />
        </a>

        <div className="flex gap-10 items-center lg:hidden">
          <nav>
            <ul className="flex gap-5 uppercase text-sm font-medium text-white ">
              {navLinks.map((link) => (
                <li
                  key={t(link.name)}
                  className="relative group/nav py-5 cursor-pointer"
                >
                  <Link
                    to={link.path}
                    className="2xl:hover:text-gray-400 group-hover/nav:text-[#F7941D] flex items-center justify-between after:block  after:absolute after:transition-[all] after:duration-[500ms] after:left-0 after:w-0 after:group-hover/nav:w-full  after:top-4 after:border-t-[3px] after:border-[var(--tree-poppy)] "
                  >
                    {t(link.name)}
                    <KeyboardArrowDownRoundedIcon className="group-hover/nav:rotate-180 rotate-0 transition-[all] duration-[2000ms]" />
                  </Link>
                  <div
                    className={`hidden gap-5 absolute normal-case shadow-lg  z-10 top-16   ${link.position}  group-hover/nav:flex group-hover/nav:animate-show-nav  bg-white text-black font-semibold p-5  rounded`}
                  >
                    {link.subnav &&
                      link?.subnav.map((subnav) => (
                        <div className="flex flex-col" key={subnav.name}>
                          {subnav.name && (
                            <h3 className="font-semibold text-sm uppercase text-[#151686] mb-[10px]">
                              {t(subnav.name)}
                            </h3>
                          )}

                          <ul className="w-[356px]">
                            {subnav.item.map((sublink, index) => (
                              <div className="group/subnavlink" key={index}>
                                {sublink.name && (
                                  <h4 className="text-[12px] text-[#607D94] font-medium rounded group-hover/subnavlink:text-[#958FED] group-hover/subnavlink:bg-[#F2F5FE] mb-2">
                                    {sublink.name}
                                  </h4>
                                )}
                                {sublink.item &&
                                  sublink.item.map((item) => (
                                    <li key={t(item.name)} className="">
                                      <Link
                                        to={item.path}
                                        className="flex p-[10px] items-center justify-between text-nowrap font-normal hover:bg-[#EEF3FA] hover:text-[#151686] hover:font-semibold rounded"
                                      >
                                        {t(item.name)}
                                      </Link>
                                    </li>
                                  ))}
                              </div>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
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
      </div>

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
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width < 450 ? "100%" : "450px",
          },
        }}
      >
        <nav className="relative pt-10">
          <button
            className="absolute top-0 left-0 p-2"
            onClick={handleDrawerToggle}
          >
            <CloseRoundedIcon />
          </button>
          <nav className="flex flex-col uppercase text-sm font-medium  normal-case ">
            {navLinks.map((link) => (
              <details key={link.name} className="group">
                <summary className="flex items-center  justify-between group text-black group  hover:text-[#F7941D] group-open:text-[#F7941D] group-open:bg-[#F7941D]/[0.1]  block p-5  hover:bg-[#F7941D]/[0.1]">
                  <p className="cursor-pointer">{t(link.name)}</p>
                  {link.subnav && (
                    <div className="group-open:rotate-180 transition-all cursor-pointer">
                      <ExpandMoreOutlinedIcon />
                    </div>
                  )}
                </summary>

                {link.subnav &&
                  link?.subnav.map((subnav) => (
                    <div className="flex flex-col p-5" key={subnav.name}>
                      {subnav.name && (
                        <h3 className="font-semibold text-sm uppercase text-[#151686] mb-[10px]">
                          {t(subnav.name)}
                        </h3>
                      )}
                      <ul className={`${width > 450 ? "w-[356px]" : null}`}>
                        {subnav.item.map((sublink, index) => (
                          <div
                            className="group/subnavlink"
                            key={index}
                            onClick={handleDrawerToggle}
                          >
                            {sublink.name && (
                              <h4 className="text-[12px] font-medium rounded group-hover/subnavlink:text-[#958FED] group-hover/subnavlink:bg-[#F2F5FE]">
                                {sublink.name}
                              </h4>
                            )}
                            {sublink.item &&
                              sublink.item.map((item) => (
                                <li key={t(item.name)} className="">
                                  <Link
                                    to={item.path}
                                    className="flex p-[10px] items-center justify-between text-wrap font-normal hover:bg-[#EEF3FA] hover:text-[#151686] hover:font-semibold rounded"
                                  >
                                    {t(item.name)}
                                  </Link>
                                </li>
                              ))}
                          </div>
                        ))}
                      </ul>
                    </div>
                  ))}
              </details>
            ))}
          </nav>
        </nav>
        <div className="flex flex-col p-2 gap-3 mt-3 justify-center">
          <PoppyButton title={t("header.login")} />

          <LeafButton title={t("header.signup")} />
        </div>
      </Drawer>
    </header>
  );
};
Header.propTypes = {
  logo: PropTypes.string,
};
