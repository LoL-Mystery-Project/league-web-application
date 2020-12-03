export const SET_CURRENT_PAGE = "@@PAGE_ACTION/SET_CURRENT_PAGE";

export const setCurrentPage = (page: string) => (dispatch: Function) => {
  dispatch({ type: SET_CURRENT_PAGE, payload: page });
};
