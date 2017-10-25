import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('should render without crashing', () => {
		shallow(<TopNav />);
	})

	it('should have proper links', () => {
		const wrapper = shallow(<TopNav />);
		expect(wrapper.hasClass('new')).toEqual(false);
	})

	it('should fire callback when clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onInfo={callback} />);
		const clickLink = wrapper.find('.what');
		clickLink.simulate('click', {preventDefault () {} });
		expect(callback).toHaveBeenCalled();
	})

	it('should fire newGame when clicked', () => {
		const callback = jest.fn();
		const wrapper = <TopNav onNewGame={callback} />
		const link = wrapper.find('.new');
		link.simulate('click', { preventDefault () {} });
		expect(callback).toHaveBeenCalled();
	});
})