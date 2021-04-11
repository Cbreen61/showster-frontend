export const getShows = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/shows")
      .then(resp => resp.json())
      .then(shows => dispatch({ type: "SET_SHOWS", shows }))
    }
  }