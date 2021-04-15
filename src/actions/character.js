export const addCharacter = (character, showId) => {
    return dispatch => {
        fetch(`http://localhost:3001/shows/${showId}/characters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(character)
        })
            .then(resp => resp.json())
            .then(show => {
                dispatch({ type: "ADD_CHARACTER", payload: show})
            })
    }
}