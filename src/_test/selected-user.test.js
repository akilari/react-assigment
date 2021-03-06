import SelectedItem from "../components/selected-user";
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});  

describe("<SelectedItem/>", () => {
  it("it renders <UserList/> components", () => {
    const wrapper = shallow(<SelectedItem/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('check editbutton click ', () => {  
    const UserMount = shallow(<SelectedItem />),
          buttonClick = UserMount.find(".btn-right");
    expect(buttonClick.length ===1);
  });
  
});
