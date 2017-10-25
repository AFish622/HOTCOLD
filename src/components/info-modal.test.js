import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
	it('should render without crashing', () => {
		shallow(<InfoModal />);
	});

	it('should fire callback onClick', () => {
		const callback = jest.fn();
		const wrapper = shallow(<InfoModal onClose={callback} />);
		wrapper.find('.close').simulate('click', {preventDefault() {} });
		expect(callback).toHaveBeenCalled();
	})
})