const initialState = {
    shows: [],
    loading: true
  }

const showsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
          return {
            ...state,
            loading: true
          }
        case "SET_SHOWS":
            return {
                ...state,
                loading: false,
                shows: action.shows
            }
        default:
            return state;
    }
}

export default showsReducer;