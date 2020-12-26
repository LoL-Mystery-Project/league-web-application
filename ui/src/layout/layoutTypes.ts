import { TextColourizerTypes } from "../utils/TextColourizer";

export interface Category {
  title: string;
  subtitle: string;
  subcategories: Array<InfoSectionCategory>;
}

export interface InfoSectionCategory {
  title: string;
  data: Array<InfoSectionItem>;
}

export interface InfoSectionItem {
  title: string;
  titleColour: string;
  icon: string;
  effects: Array<TextColourizerTypes>;
}
