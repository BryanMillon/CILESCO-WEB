const initialState = {
  videos: [],
  allVideos: [],
  videoDetail: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload,
        allVideos: action.payload
      };
    case "GET_NAME_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "GET_VIDEO_DETAIL":
      return {
        ...state,
        videoDetail: action.payload,
      };
    case "CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

      case "RESET_DETAIL":
        return {
          ...state,
          detail: []
        }  


    default:
      return state;
  }
};

export default rootReducer;
