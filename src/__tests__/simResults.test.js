import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SimResults from './../components/simResults';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SimResults showClass="show" />, div);
});
