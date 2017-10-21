import React from 'react';

import './game-center.css';

export default class GameCenter extends React.Component {
	onGuess(event) {
		event.preventDefault();

		if (this.props.onGuess) {
			const value = this.input.value();
			this.props.onGuess(value);
		}
		this.input.value = '';
	};

	return (
			<div className="gameContainer">
				<div className="guessCaption">
					<h1>Make Your Guess!</h1>
				</div>
					<div className="gameMiddle">
						<form onSubmit={e => this.onGuess(e)}>
						<input type="number" className="number-input" placeholder="Enter Your Guess" />
						<input type="submit" className="gameSubmit" value="Guess" />
						<h2 className="guessCount">Guess #{props.guessNumber}!</h2>
						</form> 
					</div>
					<div className="gameBottom" />
			</div>
		);
}
