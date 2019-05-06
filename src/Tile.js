import React, { Component } from 'react';


let tileStyle = url => {
    return {
        backgroundSize: "cover",
        backgroundImage: `url(${url})`
    }
}

let activeIcon = status => {
    return {
        background: status ? "#1e824c" : "#f7ca18"
    }
}

class Tile extends Component {
    
    render() {
        return ( 
            <div className="tile" style={tileStyle(this.props.value.icon)} onClick={function() { console.log('click'); }}>
                <div className="titleNameContainer">
                    <div className="activeIconLeft"></div>
                    <h3 className="tileName">{this.props.value.name}</h3>
                    <div className="activeIconRight" style={activeIcon(this.props.value.active)}></div>
                </div>
            </div>
        )
    }
}

export default Tile;