import React, { Component } from 'react'

class ShowsForm extends Component {
    render() {
        return (
            <div>
                <h3>Add New Show </h3>
                <form>
                    <div>
                        <label>Title: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Show Status: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Release Date: </label>
                        <input type="date" />
                    </div>
                    <div>
                        <label># Of Seasons: </label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Image: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea></textarea>
                    </div>
                    <input type="submit" value="Add Show" />
                </form>
                
            </div>
        )
    }
}

export default ShowsForm
