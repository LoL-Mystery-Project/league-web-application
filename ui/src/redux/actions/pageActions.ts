export const SET_CURRENT_PAGE = "@@PAGE_ACTION/SET_CURRENT_PAGE";
export const SET_SHOW_INFO_DRAWER = "@@PAGE_ACTION/SET_SHOW_INFO_DRAWER";

export const setCurrentPage = (page: string) => (dispatch: Function) => {
  dispatch({ type: SET_CURRENT_PAGE, payload: page });
};

export const setInfoDrawerBoolean = (isOpen: boolean) => (
  dispatch: Function,
  getState: Function
) => {
  const { showInfoDrawer } = getState().page;

  dispatch({ type: SET_SHOW_INFO_DRAWER, payload: isOpen });
};
