import React from 'react';
import { shallow } from 'enzyme';
import NoFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NoFoundPage />);
    expect(wrapper).toMatchSnapshot();
});