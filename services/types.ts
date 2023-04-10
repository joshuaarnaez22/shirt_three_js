import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
} from "@/public/images/";

export interface EditorTabsTypes {
  name: string;
  icon:
    | typeof swatch
    | typeof fileIcon
    | typeof ai
    | typeof logoShirt
    | typeof stylishShirt;
}
