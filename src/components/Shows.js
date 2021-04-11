import React, { Component } from 'react'
import { connect } from 'react-redux';
import Show from './Show';

class Shows extends Component {
    render() {
        const shows = this.props.shows.map( (show, i) => <Show key={1} title={show.title} status={show.status} release_date={show.release_date} seasons={show.seasons} likes={show.likes} dislikes={show.dislikes} description={show.description} image={show.image} />)
        return (
            <div>
                { shows }
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
