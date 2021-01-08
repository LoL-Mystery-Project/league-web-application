import { MonsterType } from "../../monster-layout/MonsterTypes";

export const FETCHING_ALL_MONSTERS = "@@MONSTER_ACTION/FETCHING_ALL_MONSTERS";
export const FETCHING_MONSTERS_FAILED =
  "@@MONSTER_ACTION/FETCHING_MONSTERS_FAILED";
export const SET_ALL_MONSTERS = "@@MONSTER_ACTION/SET_ALL_MONSTERS";
export const SET_SELECTED_MONSTER = "@@MONSTER_ACTION/SET_SELECTED_MONSTER";
export const CLEAR_SELECTED_MONSTER = "@@MONSTER_ACTION/CLEAR_SELECTED_MONSTER";

export const fetchAllMonsters = () => async (dispatch: Function) => {
  dispatch({ type: FETCHING_ALL_MONSTERS, payload: true });
  try {
    const monsters = await fetch(`/monsters`);
    const json = await monsters.json();
    dispatch({ type: SET_ALL_MONSTERS, payload: json });
  } catch (err) {
    console.error(`${FETCHING_MONSTERS_FAILED} failed: ${err}`);
    dispatch({ type: FETCHING_MONSTERS_FAILED });
  } finally {
    dispatch({ type: FETCHING_ALL_MONSTERS, payload: false });
  }
};

export const setSelectedMonster = (name: string) => async (
  dispatch: Function,
  getState: Function
) => {
  const { allMonsters } = getState().monsters;
  const selectedMonster = allMonsters.find(
    (monster: MonsterType) => monster.name === name
  );
  dispatch({ type: SET_SELECTED_MONSTER, payload: selectedMonster });
};

export const clearSelectedMonster = () => (dispatch: Function) => {
  dispatch({ type: CLEAR_SELECTED_MONSTER });
};
