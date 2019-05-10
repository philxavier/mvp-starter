import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import SimpleMap from '../SimpleMap.jsx';


describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      let Wrapper = shallow(<SimpleMap />);
      expect(Wrapper).toMatchSnapshot()
    });

    it('should have a ')
});
