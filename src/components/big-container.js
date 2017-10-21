import React from 'react';
import GameCenter from './game-center';
import GameTitle from './game-title';

import './big-container.css'

export default class BigContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Make your Guess!',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		}
	}
	newGame(event) {
		event.preventDefault();
		if (this.props.newGame) {
			this.props.newGame();
		}
	}

	whatInfo(event) {
		event.preventDefault();
		if (this.props.whatInfo) {
			this.props.whatInfo();
		}
	}



	render() {
		
		return (
		
				<div className="big-container">
					<div>
						<ul className="top-list">
							<li className="what" onclick={e => this.onInfo(e)}>What?</li>
							<li className="play-again" onClick={e => this.newGame(e)}>+Play Again</li>
						</ul>
					</div>
					<GameTitle />
					<GameCenter onGuess={guessNumber, firstGame} />
				</div>
		)
	}
}