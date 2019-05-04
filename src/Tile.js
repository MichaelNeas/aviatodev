import React, { Component } from 'react';

class Tile extends Component {
    render() {
        return ( 
            <div className="tile" onClick={function() { console.log('click'); }}>
                {this.props.value.name}
            </div>
        )
    }
}

export default Tile;