import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('should render without crashing', () => {
		shallow(<Game />);
	})

	it('should have proper initial state', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
	})

	it('should update state on newGame', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({
			guesses: [22, 33, 44],
			feedback: 'banana'
		});
		wrapper.instance().newGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
	})

	it('should give proper feedback on guess', () => {
		const wrapper = shallow(<Game />);
		
		wrapper.setState({
			correctAnswer: 50
		});

		wrapper.instance().guess(10);
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
		expect(wrapper.state('guesses')).toEqual([10]);
		
		wrapper.instance().guess('abc');
		expect(wrapper.state('feedback')).toEqual('Please enter a valid number');

	})
})