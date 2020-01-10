import React, { Component } from 'react';

class Tile extends Component {
	constructor() {
		super();

		this.state = {
			overlay: false
		}
	}

	tileStyle = url => {
		return {
			backgroundSize: "cover",
			backgroundImage: `url(${url})`
		}
	}

	activeIcon = status => {
		return {
			background: status ? "#1e824c" : "#f7ca18"
		}
	}

	changeOverlayState() {
		this.setState({ overlay: !this.state.overlay })
	}

	render() {
		let overlayClass = this.state.overlay ? "tileWithOverlay" : "tileWithoutOverlay"

		return (
			<div className="tile" style={this.tileStyle(this.props.value.icon)} onClick={this.changeOverlayState.bind(this)}>
				<div className="titleNameContainer">
					<div className="activeIconLeft"></div>
					<h3 className="tileName">{this.props.value.name}</h3>
					<div className="activeIconRight" style={this.activeIcon(this.props.value.active)}></div>
				</div>
				<div className={`tileOverlay ${overlayClass}`}>
					<div className="overlayText">
						&#123;<br />
						&nbsp;&nbsp;"<b>devStack</b>": "{this.props.value.devStack}",<br />
						&nbsp;&nbsp;"<b>displayName</b>": "{this.props.value.displayName}",<br />
						&nbsp;&nbsp;"<b>editor</b>": "{this.props.value.editor}",<br />
						&nbsp;&nbsp;"<b>job</b>": "{this.props.value.job}",<br />
						&nbsp;&nbsp;"<b>keyboard</b>": "{this.props.value.keyboard}",<br />
						&nbsp;&nbsp;"<b>location</b>": "{this.props.value.location}",<br />
						&nbsp;&nbsp;"<b>osPreference</b>": "{this.props.value.osPreference}",<br />
						&nbsp;&nbsp;"<b>superPowerChoice</b>": "{this.props.value.superPowerChoice}"<br />
						&#125;
                    </div>
				</div>
			</div>
		)
	}
}

export default Tile;