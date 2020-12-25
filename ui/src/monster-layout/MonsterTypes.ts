import { TextColourizerTypes } from "../utils/TextColourizer";

export interface MonsterType {
  name: string;
  icon: string;
  bounty: MonsterBounty;
  stats: MonsterStats;
  location: MonsterLocation;
  description?: Array<string>; // deprecated in favour of overview
  colouredDescription?: Array<TextColourizerTypes>; // deprecated in favour of overview
  overview?: Array<TextColourizerTypes>; // use this one!
  splashArt: Array<string>;
  informationText?: Array<MonsterInfo>;
  patchHistory?: Array<MonsterPatchObject>;  // depcrecated in favour of patchNotes
  patchNotes?: Array<PatchRelease>; // use this one!
}

export interface MonsterLocation {
  initial: string;
  respawn: string;
}

export interface MonsterBounty {
  gold: string;
  exp: string;
  cs: string;
}

export interface MonsterStats {
  health: string;
  healthRegen: string;
  attackDamage: string;
  attackSpeed: string;
  range: string;
  armor: string;
  magicResist: string;
  movSpeed: string;
  monsterType: Array<string>;
}

/** DEPRECATED */
export interface MonsterPatchObject {
  release: string;
  details: Array<string>;
}

export interface MonsterInfo {
  title: string;
  subtitle: string;
  subcategories: Array<MonsterCategory>;
}

export interface MonsterCategory {
  title: string;
  data: Array<MonsterSkill>;
}

export interface MonsterSkill {
  title: string;
  titleColour: string;
  icon: string;
  effects: Array<TextColourizerTypes>;
}

export interface PatchRelease {
  release: string;
  data: Array<PatchCategory>;
}

export interface PatchCategory {
  type: string;
  list: Array<PatchNote>;
}

export interface PatchNote {
  ability: string;
  changes: Array<TextColourizerTypes>;
}
