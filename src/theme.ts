import { prependOnceListener } from "process";
import { DefaultTheme } from "styled-components";
import { atom } from "recoil";

export const darkTheme: DefaultTheme = {
  bgColor: "#353b48",
  textColor: "#f5f6fa",
  accentColor: "#9980FA",
  tabColor: "#2f3640",
};

export const lightTheme: DefaultTheme = {
  bgColor: "#ffffff",
  textColor: "#2f3640",
  accentColor: "#0984e3",
  tabColor: "#f1f2f6",
};

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
