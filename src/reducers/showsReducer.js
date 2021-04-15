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
        case "ADD_SHOW":
            return {
                ...state,
                shows: [...state.shows, action.show]
            }
        case "ADD_CHARACTER":
        let shows = state.shows.map(show => {
        if (show.id === action.payload.id) {
          return action.payload
        } else {
          return show
        }
      })
      return {...state, shows: shows}
        default:
            return state;
    }
}

export default showsReducer;