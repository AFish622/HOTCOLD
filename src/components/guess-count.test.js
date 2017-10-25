import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('Guess number props', () => {
	it('should render without crashing', () => {
		mount(<GuessCount count="1" />);
	});

	it('should display correct count from props', () => {
		const count = 1;
		const wrapper = mount(<GuessCount count={count} />);	
		expect(wrapper.props().count).toEqual(count);
	})
})