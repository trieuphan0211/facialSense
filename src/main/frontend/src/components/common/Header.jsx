import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Button from "@mui/material/Button";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
export const Header = () => {
  const navLinks = [
    {
      name: "Products",
      path: "/",
      subnav: [
        { name: "Overview", path: "/" },
        { name: "Pricing", path: "/" },
        { name: "Marketplace", path: "/" },
      ],
    },
    { name: "Industries", path: "/" },
    { name: "Pricing", path: "/" },
    { name: "Resources", path: "/" },
    { name: "Company", path: "/" },
  ];
  return (
    <header className="w-full h-32 px-40 py-8 flex justify-between items-center">
      <img className="h-full" src={logo} alt="" />
      <div className="flex gap-10 items-center">
        <nav>
          <ul className="flex gap-5 uppercase text-sm font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group/nav py-5">
                <Link to={link.path} className="hover:text-gray-400">
                  {link.name}
                </Link>
                {link.subnav && (
                  <ul className="absolute top-14 -right-4 hidden  group-hover/nav:block group-hover/nav:animate-show-nav w-48 bg-white text-black font-semibold  rounded-md">
                    {link.subnav.map((sublink) => (
                      <li key={sublink.name} className="">
                        <Link
                          to={sublink.path}
                          className="hover:text-gray-400 h-11 flex px-5 py-[10px] items-center justify-between group/subnav"
                        >
                          {sublink.name}
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
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              padding: "10px 20px",
              borderColor: "var(--tree-poppy)",
              color: "var(--tree-poppy)",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              padding: "10px 20px",
              backgroundColor: "var(--tree-leaf)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
