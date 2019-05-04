import React, { Component } from 'react';
import Tile from './Tile';
import jsonDB from './db/aviatodb.json';

class Grid extends Component {
    createGrid = () => jsonDB.map(member => <Tile value={member}></Tile>)

    render() {
        return ( 
            <div className="grid">
                {this.createGrid()}
            </div>
        )
    }
}

export default Grid;