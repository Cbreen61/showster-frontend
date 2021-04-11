export const getShows = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/shows")
      .then(resp => resp.json())
      .then(shows => dispatch({ type: "SET_SHOWS", shows }))
    }
}


export const addShow = (show, history) => {
    return dispatch => {
        fetch('http://localhost:3001/shows', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
            body: JSON.stringify({ show })
        })
            .then(resp => resp.json())
            .then(show => {
                dispatch({ type: "ADD_SHOW", show })
                history.push("/shows")
            })
    }
}