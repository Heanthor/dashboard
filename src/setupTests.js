import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
