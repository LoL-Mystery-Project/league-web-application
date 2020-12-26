import { DragonOptions } from "../ReduxTypes";

export const SET_SELECTED_DRAGON = "@@DRAGON_ACTION/SET_SELECTED_DRAGON";
export const SET_DRAG_OPTIONS = "@@DRAGON_ACTION/SET_DRAG_OPTIONS";

export const setSelectedDrag = (dragType: string) => (dispatch: Function) => {
  dispatch({ type: SET_SELECTED_DRAGON, payload: dragType });
};

export const setDragOptions = (dragOptions: DragonOptions) => (
  dispatch: Function
) => {
  dispatch({ type: SET_DRAG_OPTIONS, payload: dragOptions });
};
