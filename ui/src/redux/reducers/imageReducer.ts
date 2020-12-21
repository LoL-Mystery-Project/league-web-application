/* eslint-disable import/no-anonymous-default-export */
import {
  FETCHING_IMAGES,
  FETCHING_IMAGES_FAILED,
  SET_IMAGES,
  SET_IMAGE_MAP,
} from "../actions/imageActions";

interface ImageAction {
  type: string;
  payload: any;
}

export default (state = {}, action: ImageAction) => {
  switch (action.type) {
    case FETCHING_IMAGES:
      return {
        ...state,
        fetchingImages: action.payload,
      };
    case SET_IMAGES:
      return {
        ...state,
        imageList: action.payload,
      };
    case SET_IMAGE_MAP:
      return {
        ...state,
        imageMap: action.payload
      }
    case FETCHING_IMAGES_FAILED:
      return {
        ...state,
        fetchFailed: action.payload,
      };
    default:
      return state;
  }
};
