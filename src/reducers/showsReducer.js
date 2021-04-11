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
        default:
            return state;
    }
}

export default showsReducer;