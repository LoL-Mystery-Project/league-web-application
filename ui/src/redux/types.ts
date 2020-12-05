export interface RootState {
  page: PageState;
  dragon: DragonState;
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
