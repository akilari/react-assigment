import UsersList from '../components/users-list';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});  

describe("<UsersList/>", () => {
  it("it renders <input/> element", () => {
    const wrapper = shallow(<UsersList/>);
    expect(wrapper.hasClass('users'));
  });
  it (" and it has 4 values", ()=>{
    const wrapper = shallow(<UsersList/>);
    expect(wrapper.find('button').length ==4);
  });

});
