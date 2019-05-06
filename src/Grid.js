import React, { Component } from 'react';
import Tile from './Tile';
import jsonDB from './db/aviatodb.json';

var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

class Grid extends Component {
    createGrid = () => shuffle(jsonDB).map(member => <Tile value={member}></Tile>)

    render() {
        return ( 
            <div className="grid">
                {this.createGrid()}
            </div>
        )
    }
}

export default Grid;