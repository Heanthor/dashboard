import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Spinner percentComplete={0} />, div);
});

it('colors circles by percent correctly', () => {
	const component = shallow(<Spinner percentComplete={0} />);

	expect(component.find(".circle").length).toBe(6);
});