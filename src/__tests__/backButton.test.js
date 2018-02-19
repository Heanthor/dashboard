import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BackButton from './../components/backButton';

const mockOnClick = jest.fn();
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<BackButton onClick={mockOnClick} hoverClass="antorus" />, div);
});
