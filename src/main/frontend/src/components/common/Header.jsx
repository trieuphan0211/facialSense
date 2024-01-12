import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { LeafButton, PoppyButton } from "../button";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { ReactComponent as ShoppingBag } from "../../assets/svg/shopping-bag.svg";
import { ReactComponent as PlusCircle } from "../../assets/svg/plus-circle.svg";
import { ReactComponent as OpenBook } from "../../assets/svg/open-book.svg";

export const Header = () => {
  const { width } = useWindowSize();
  // Translate
  const { t } = useTranslation();
  // Begin: navLinks
  const navLinks = [
    {
      name: "header.product",
      path: "/",
      position: "-left-10",
      subnav: [
        {
          name: "product",
          item: [
            {
              name: "",
              item: [
                {
                  name: "CheckID FacialSense Bio Attendance",
                  path: "/",
                },
                {
                  name: "CheckID FacialSense Visitor management",
                  path: "/",
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
          name: "CHECKID FACIALSENSE BIO ATTENDANCE",
          item: [
            {
              name: "",
              item: [
                {
                  name: "Office Employee",
                  path: "/",
                },
                {
                  name: "Retail Workforce",
                  path: "/",
                },
                {
                  name: "Mobile and Remote Employee",
                  path: "/",
                },
                {
                  name: "Student Attendance",
                  path: "/",
                },
                {
                  name: "Construction Site",
                  path: "/",
                },
                {
                  name: "Healthcare",
                  path: "/",
                },
                {
                  name: "Service and Hospitality",
                  path: "/",
                },
                {
                  name: "Factory and Warehouse",
                  path: "/",
                },
                {
                  name: "Agriculture",
                  path: "/",
                },
              ],
            },
          ],
        },
        {
          name: "CHECKID FACIALSENSE VISITOR MANAGEMENT",
          item: [
            {
              name: "",
              item: [
                {
                  name: "Organization",
                  path: "/",
                },
                {
                  name: "Travel and Excursion",
                  path: "/",
                },
                {
                  name: "Banking or financial institutes",
                  path: "/",
                },
                {
                  name: "Hotels and restaurants",
                  path: "/",
                },
                {
                  name: "Consultation services",
                  path: "/",
                },
                {
                  name: "Building and apartments",
                  path: "/",
                },
                {
                  name: "Customer support",
                  path: "/",
                },
                {
                  name: "Entertainment",
                  path: "/",
                },
                {
                  name: "Schools and campuses",
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
          name: "pricing",
          item: [
            {
              name: "",
              item: [
                {
                  name: "CheckID FacialSense Bio Attendance",
                  path: "/",
                },
                {
                  name: "CheckID FacialSense Visitor management",
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
          name: "product",
          item: [
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  CHECKID FACIALSENSE BIO ATTENDANCE
                </div>
              ),
              item: [
                {
                  name: "On-premise Server",
                  path: "/",
                },
                {
                  name: "Standard clients",
                  path: "/",
                },
                {
                  name: "Lite Clients",
                  path: "/",
                },
              ],
            },
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  CHECKID FACIALSENSE VISITOR MANAGEMENT
                </div>
              ),
              item: [
                {
                  name: "On-premise Server",
                  path: "/",
                },
                {
                  name: "Visitor Clients",
                  path: "/",
                },
                {
                  name: "Visitor Lite Clients",
                  path: "/",
                },
              ],
            },
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <PlusCircle />
                  OTHER
                </div>
              ),
              item: [
                {
                  name: "CheckID FacialSense Surveillance Client",
                  path: "/",
                },
                {
                  name: "CheckID FacialSense Guard",
                  path: "/",
                },
                {
                  name: "Scanner Drivers",
                  path: "/",
                },
                {
                  name: "Developer samples",
                  path: "/",
                },
                {
                  name: "Previous versions",
                  path: "/",
                },
              ],
            },
          ],
        },
        {
          name: "DOCUMENTATION",
          item: [
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <OpenBook />
                  USER GUIDE
                </div>
              ),
              item: [
                {
                  name: "CheckID FacialSense Bio Attendance",
                  path: "/",
                },
                {
                  name: "CheckID FacialSense Visitor Management",
                  path: "/",
                },
                {
                  name: "Developer guide",
                  path: "/",
                },
              ],
            },

            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <PlusCircle />
                  OTHER
                </div>
              ),
              item: [
                {
                  name: "Payroll integration",
                  path: "/",
                },
                {
                  name: "Attendance reports",
                  path: "/",
                },
                {
                  name: "Third-party integrations",
                  path: "/",
                },
                {
                  name: "Supported devices",
                  path: "/",
                },
              ],
            },
          ],
        },
        {
          name: "QUICK START GUIDE",
          item: [
            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  CHECKID FACIALSENSE BIO ATTENDANCE
                </div>
              ),
              item: [
                {
                  name: "Cloud",
                  path: "/",
                },
                {
                  name: "On-premises",
                  path: "/",
                },
              ],
            },

            {
              name: (
                <div className="flex items-center gap-[10px]">
                  <ShoppingBag />
                  CHECKID FACIALSENSE VISITOR MANAGEMENT
                </div>
              ),
              item: [
                {
                  name: "Cloud",
                  path: "/",
                },
                {
                  name: "On-premises",
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
          name: "Company",
          item: [
            {
              name: "",
              item: [
                {
                  name: "About us",
                  path: "/",
                },
                {
                  name: "Contact us",
                  path: "/",
                },
                {
                  name: "Customer references",
                  path: "/",
                },
                {
                  name: "Register as a distributor",
                  path: "/",
                },
                {
                  name: "News and updates",
                  path: "/",
                },
                {
                  name: "Blog",
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
    <header className="w-full h-32  mx-auto px-2 max-w-[1100px] py-8 flex justify-between items-center">
      <img className="h-full -ml-9" src={logo} alt="" />
      <div className="flex gap-10 items-center lg:hidden">
        <nav>
          <ul className="flex gap-5 uppercase text-sm font-medium 2xl:text-white text-indigo-400">
            {navLinks.map((link) => (
              <li
                key={t(link.name)}
                className="relative group/nav py-5 cursor-pointer"
              >
                <Link
                  to={link.path}
                  className="2xl:hover:text-gray-400 group-hover/nav:text-indigo-300 flex items-center justify-between after:block after:absolute after:transition-[all] after:duration-[500ms] after:left-0 after:w-0 after:group-hover/nav:w-full  after:top-5 after:border-t-[3px] after:border-[var(--tree-poppy)] "
                >
                  {t(link.name)}
                  <KeyboardArrowDownRoundedIcon className="group-hover/nav:rotate-180 rotate-0 transition-[all] duration-[2000ms]" />
                </Link>
                <div
                  className={`hidden gap-5 absolute normal-case shadow-lg  z-10 top-14   ${link.position}  group-hover/nav:flex group-hover/nav:animate-show-nav  bg-white text-black font-semibold p-5  rounded-md`}
                >
                  {link.subnav &&
                    link?.subnav.map((subnav) => (
                      <div className="flex flex-col" key={subnav.name}>
                        {subnav.name && (
                          <h3 className="font-semibold text-sm uppercase text-[#151686] mb-[10px]">
                            {subnav.name}
                          </h3>
                        )}

                        <ul className="w-[356px]">
                          {subnav.item.map((sublink, index) => (
                            <div className="group/subnavlink" key={index}>
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
            width: "auto",
          },
        }}
      >
        <nav>
          <nav className="flex flex-col uppercase text-sm font-medium  normal-case">
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

                {link.subnav &&
                  link?.subnav.map((subnav) => (
                    <div className="flex flex-col p-5" key={subnav.name}>
                      {subnav.name && (
                        <h3 className="font-semibold text-sm uppercase text-[#151686] mb-[10px]">
                          {subnav.name}
                        </h3>
                      )}

                      <ul className="w-[356px]">
                        {subnav.item.map((sublink, index) => (
                          <div className="group/subnavlink" key={index}>
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
