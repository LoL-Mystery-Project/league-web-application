import { MonsterType } from "../monster-layout/MonsterTypes";

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
