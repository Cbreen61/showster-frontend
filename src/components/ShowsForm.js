import React, { Component } from 'react'

class ShowsForm extends Component {
    state = {
        title: "",
        status: "",
        release_date: "",
        seasons: "",
        likes: "",
        dislikes: "",
        description: "",
        image: ""
    }

    render() {
        return (
            <div>
                <h3>Add New Show </h3>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" />
                    </div>
                    <div>
                        <label htmlFor="status">Show Status: </label>
                        <input type="text" id="status" />
                    </div>
                    <div>
                        <label htmlFor="release_date">Release Date: </label>
                        <input type="date" id="release_date" />
                    </div>
                    <div>
                        <label htmlFor="seasons"># Of Seasons: </label>
                        <input type="number" id="seasons" />
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input type="text" id="image" />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea id="description"></textarea>
                    </div>
                    <input type="submit" value="Add Show" />
                </form>
                
            </div>
        )
    }
}

export default ShowsForm
