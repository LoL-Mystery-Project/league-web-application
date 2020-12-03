/* eslint-disable import/no-anonymous-default-export */
import { SET_CURRENT_PAGE } from "../actions/pageActions";

interface PageAction {
  type: string;
  payload: string;
}

export default (state = {}, action: PageAction) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
