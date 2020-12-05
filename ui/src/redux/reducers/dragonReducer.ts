/* eslint-disable import/no-anonymous-default-export */
import {
  SET_DRAG_OPTIONS,
  SET_SELECTED_DRAGON,
} from "../actions/dragonActions";

interface DragonAction {
  type: string;
  payload: string;
}

export default (state = {}, action: DragonAction) => {
  switch (action.type) {
    case SET_SELECTED_DRAGON:
      return {
        ...state,
        selectedDragon: action.payload,
      };
    case SET_DRAG_OPTIONS:
      return {
        ...state,
        dragOptions: action.payload,
      };
    default:
      return state;
  }
};
