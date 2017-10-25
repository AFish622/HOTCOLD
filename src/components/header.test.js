import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('should render without crashing', () => {
		shallow(<Header />);
	})

	it('toggleInfoModal should update state', () => {
		const wrapper = shallow(<Header />);
		wrapper.instance().toggleInfoModal();
		expect(wrapper.state('showInfoModal')).toEqual(true)
		wrapper.update()
		expect(wrapper.find('InfoModal').exists()).toEqual(true)
	})
})