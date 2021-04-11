import React, { Component } from 'react'
import { connect } from 'react-redux';

class Shows extends Component {
    render() {
        return (
            <div>
                List of Shows 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
         shows: state.shows
    }
}

export default connect(mapStateToProps)(Shows);
