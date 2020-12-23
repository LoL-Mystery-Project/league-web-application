import { ColourMap } from "../utils/TextColourizer";

export interface RootState {
  page: PageState;
  dragon: DragonState;
  images: ImageState;
  monsters: MonsterState;
}

export interface PageState {
  currentPage: string;
}
export interface DragonState {
  selectedDragon: string;
  dragOptions: DragonOptions;
}

export interface DragonOptions {
  showNeutralMonsters: boolean;
  showBuildings: boolean;
  showJunglePlants: boolean;
  showBrushes: boolean;
}

export interface ImageState {
  fetchingImages: boolean;
  imageList: Array<ImageType>;
  imageMap: any;
  fetchFailed: boolean;
}

interface ImageType {
  key: string;
  url: string;
}

export interface MonsterState {
  fetchingMonsters: boolean;
  fetchFailed: boolean;
  allMonsters: Array<MonsterType> | undefined;
  selectedMonster: MonsterType | undefined;
}

export interface MonsterType {
  name: string;
  icon: string;
  description: Array<string>;
  bounty: MonsterBounty;
  stats: MonsterStats;
  location: MonsterLocation;
  patchHistory?: Array<MonsterPatchObject>;
  colouredDescription?: Array<ColouredDescription>;
  splashArt: Array<string>;
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

export interface MonsterPatchObject {
  release: string;
  details: Array<string>;
}

export interface ColouredDescription {
  text: string;
  colourMap: ColourMap;
}
