import { zeplin, proCreate, phpStorm, toolBox } from "../../assets/svg";
import { Tcard} from "../../core/types";

export const newToolsConfig: Tcard[] = [
  {
    path: zeplin.path,
    viewBox: zeplin.viewBox,
    price: "Free & Paid",
    name: "Zeplin",
  },
  {
    path: phpStorm.path,
    viewBox: phpStorm.viewBox,
    price: "Free",
    name: "PHPStorm",
  },
  {
    path: toolBox.path,
    viewBox: toolBox.viewBox,
    price: "Free",
    name: "Toolbox",
  },
  {
    path: proCreate.path,
    viewBox: proCreate.viewBox,
    price: "Free",
    name: "Procreate",
  },
];
