import { TextColourizerTypes } from "../utils/TextColourizer";
import { Category } from "../layout/layoutTypes";

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
  informationText?: Array<Category>;
  patchHistory?: Array<MonsterPatchObject>; // depcrecated in favour of patchNotes
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

export interface PatchRelease {
  release: string;
  data: Array<PatchCategory>;
}

export interface PatchCategory {
  type: PatchCategoryTypes;
  list: Array<PatchNote>;
}

export interface PatchNote {
  ability: string;
  changes: Array<TextColourizerTypes>;
}

export type PatchCategoryTypes =
  | "REMOVED:"
  | "NEW:"
  | "BUG FIX:"
  | "CHANGE:"
  | "BUFF:"
  | "NERF:";
