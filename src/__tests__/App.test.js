import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("shows the guild sim window when guild sim is selected", () => {
  const component = shallow(<App />);

  
});