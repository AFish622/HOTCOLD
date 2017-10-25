import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('feedback to user', () => {
	it('should render without crashing', () => {
		shallow(<GuessSection feedback="You got it!" />);
	});

	it('should give proper feedback', () => {
		const feedback = 'You\'re Hot!';
		const wrapper = mount(<GuessSection feedback={feedback} />);
		expect(wrapper.props().feedback).toEqual(feedback);
	})
})