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
                        <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
                    </div>
                    <div>
                        <label htmlFor="status">Show Status: </label>
                        <input type="text" id="status" name="status" value={ this.state.status } onChange={ this.handleChange } />
                    </div>
                    <div>
                        <label htmlFor="release_date">Release Date: </label>
                        <input type="date" id="release_date" name="release_date" value={ this.state.release_date } onChange={ this.handleChange } />
                    </div>
                    <div>
                        <label htmlFor="seasons"># Of Seasons: </label>
                        <input type="number" id="seasons" name="seasons" value={ this.state.seasons } onChange={ this.handleChange } />
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input type="text" id="image" name="image" value={ this.state.image } onChange={ this.handleChange } />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea id="description" name="description" value={ this.state.description } onChange={ this.handleChange } ></textarea>
                    </div>
                    <input type="submit" value="Add Show" />
                </form>
                
            </div>
        )
    }
}

export default ShowsForm
