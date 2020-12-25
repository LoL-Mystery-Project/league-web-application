/* eslint-disable import/no-anonymous-default-export */
import { MonsterType } from "../../monster-layout/MonsterTypes";
import {
  FETCHING_ALL_MONSTERS,
  SET_ALL_MONSTERS,
  SET_SELECTED_MONSTER,
  FETCHING_MONSTERS_FAILED,
  CLEAR_SELECTED_MONSTER,
} from "../actions/monsterActions";
import { MonsterState } from "../ReduxTypes";

interface MonsterAction {
  type: string;
  payload: MonsterType | Array<MonsterType> | boolean | undefined;
}

export default (
  state: MonsterState = {
    fetchingMonsters: false,
    allMonsters: [],
    selectedMonster: undefined,
    fetchFailed: false,
  },
  action: MonsterAction
) => {
  switch (action.type) {
    case FETCHING_ALL_MONSTERS:
      return {
        ...state,
        fetchingMonsters: action.payload,
      };
    case SET_ALL_MONSTERS:
      return {
        ...state,
        allMonsters: action.payload,
      };
    case SET_SELECTED_MONSTER:
      return {
        ...state,
        selectedMonster: action.payload,
      };
    case CLEAR_SELECTED_MONSTER:
      return {
        ...state,
        selectedMonster: undefined,
      };
    case FETCHING_MONSTERS_FAILED:
      return {
        ...state,
        fetchFailed: true,
      };
    default:
      return state;
  }
};
