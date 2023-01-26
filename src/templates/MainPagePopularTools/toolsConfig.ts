import {
  figma,
  dimond,
  vsCodeLogo,
  notion,
  slack,
  invasion,
} from "../../assets/svg";
import { Tcard } from "../../core/types";

export const toolsConfig: Tcard[] = [
  {
    path: figma.path,
    viewBox: figma.viewBox,
    price: "Free",
    name: "FIGMA",
  },
  {
    path: dimond.path,
    viewBox: dimond.viewBox,
    price: "Trial & Paid",
    name: "Sketch",
  },
  {
    path: vsCodeLogo.path,
    viewBox: vsCodeLogo.viewBox,
    price: "Free",
    name: "V.S. Code",
  },
  {
    path: notion.path,
    viewBox: notion.viewBox,
    price: "Free & Paid",
    name: "Notion",
  },
  {
    path: slack.path,
    viewBox: slack.viewBox,
    price: "Free & Paid",
    name: "Slack",
  },
  {
    path: invasion.path,
    viewBox: invasion.viewBox,
    price: "Free & Paid",
    name: "Invision",
  },
];
