import React, { useEffect, useState } from "react";

import {
  Button,
  Menu,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";

import i18n from "i18next";
import English from "../../assets/img/countries/english.png";
import Vietnam from "../../assets/img/countries/vietnam.png";

const theme = createTheme({
  palette: {
    button: {
      color: "#3A505F",
    },
  },
});
const StyleButton = styled(Button)(() => ({
  color: "#3A505F",
  fontSize: "14px",
  fontWeight: "400",
  backgroundColor: "transparent",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
const MenuStyle = styled(Menu)(() => ({
  "& .MuiList-root": {
    backgroundColor: "#F1F6FA",
    paddingTop: "0",
    color: "#3A505F",
    paddingBottom: "0",
  },
  "& .MuiPaper-root": {
    backgroundColor: "#F1F6FA",
  },
}));
export const LanguageMenu = () => {
  const [language, setLanguage] = useState("English");
  const lang =
    typeof window.localStorage === "object" &&
    typeof window.localStorage?.getItem !== "undefined"
      ? localStorage.getItem("lang")
      : null;
  //   handle language
  const handleLanguage = (lang, popupState) => {
    if (popupState) {
      popupState.close();
    }
    switch (lang) {
      case "Vietnamese":
        setLanguage("Vietnamese");
        i18n.changeLanguage("vi");

        if (
          typeof window.localStorage === "object" &&
          typeof window.localStorage?.getItem !== "undefined"
        ) {
          localStorage.setItem("lang", "Vietnamese");
        }
        break;
      case "English":
        setLanguage("English");
        i18n.changeLanguage("en");
        if (
          typeof window.localStorage === "object" &&
          typeof window.localStorage?.getItem !== "undefined"
        ) {
          localStorage.setItem("lang", "English");
        }
        break;
      default:
        setLanguage("English");
        i18n.changeLanguage("en");
        if (
          typeof window.localStorage === "object" &&
          typeof window.localStorage?.getItem !== "undefined"
        ) {
          localStorage.setItem("lang", "English");
        }
        break;
    }
  };
  useEffect(() => {
    if (lang) {
      handleLanguage(lang);
    } else {
      handleLanguage("English");
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <PopupState variant="popover" popupId="demo-popup-menu" sx={{ py: "0" }}>
        {(popupState) => (
          <React.Fragment>
            <StyleButton success={true} variant="" {...bindTrigger(popupState)}>
              <img
                src={
                  (language === "English" && English) ||
                  (language === "Vietnamese" && Vietnam)
                }
                alt=""
                style={{ width: "24px", marginRight: "5px" }}
              />
              <p> {language === "English" ? "English" : "Tiếng Việt"}</p>
              <KeyboardArrowDownIcon />
            </StyleButton>
            <MenuStyle {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  handleLanguage("English", popupState);
                }}
                style={{ fontSize: "12px" }}
              >
                <img
                  src={English}
                  alt=""
                  style={{ width: "30px", marginRight: "10px" }}
                />
                English
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLanguage("Vietnamese", popupState);
                }}
                style={{
                  fontSize: "12px",
                }}
              >
                <img
                  src={Vietnam}
                  alt=""
                  style={{ width: "30px", marginRight: "10px" }}
                />
                Tiếng Việt
              </MenuItem>
            </MenuStyle>
          </React.Fragment>
        )}
      </PopupState>
    </ThemeProvider>
  );
};
