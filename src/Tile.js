import React, { Component } from 'react';


let tileStyle = url => {
    return {
        backgroundSize: "cover",
        backgroundImage: `url(${url})`
    }
}

class Tile extends Component {
    
    render() {
        return ( 
            <div className="tile" style={tileStyle(this.props.value.icon)} onClick={function() { console.log('click'); }}>
                <div className="titleNameContainer"><h3 className="tileName">{this.props.value.name}</h3></div>
            </div>
        )
    }
}

export default Tile;