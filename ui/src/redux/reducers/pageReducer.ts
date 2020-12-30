/* eslint-disable import/no-anonymous-default-export */
import { SET_CURRENT_PAGE, SET_SHOW_INFO_DRAWER } from "../actions/pageActions";

interface PageAction {
  type: string;
  payload: string;
}

export default (state = {
  currentPage: "/",
  showInfoDrawer: false
}, action: PageAction) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case SET_SHOW_INFO_DRAWER:
        return {
          ...state,
          showInfoDrawer: action.payload,
        };
    default:
      return state;
  }
};
