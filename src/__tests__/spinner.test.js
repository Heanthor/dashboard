import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Spinner from './../components/Spinner';

const components = [
	{
		percent: 0,
		expectedActive: 0
	},
	{
		percent: 1,
		expectedActive: 1
	},
	{
		percent: 20,
		expectedActive: 2
	},
	{
		percent: 90,
		expectedActive: 6
	},
	{
		percent: 100,
		expectedActive: 6
	}
];

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Spinner percentComplete={0} highlightClass="antorus" />, div);
});

describe('Percent coloring', () => {
	components.forEach(e => {
		it(`reduces opacity for ${e.percent}% completion correctly`, () => {
			const component = shallow(<Spinner percentComplete={e.percent} highlightClass="antorus" />);
			const circles = component.find(".opacity-container");

			expect(circles.length).toBe(6);

			let numActiveCirlces = 0;

			circles.forEach((_, i) => {
				const circle = circles.get(i);

				if (circle.props.style.opacity < 1) {
					numActiveCirlces++;
				}
			});

			expect(numActiveCirlces).toBe(e.expectedActive);
		});
	});
});
