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
  it ("it renders 4 buttons", ()=>{
    const wrapper = shallow(<UsersList/>);
    expect(wrapper.find('button').length ==4);
  });

});
