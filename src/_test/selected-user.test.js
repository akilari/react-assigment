import SelectedItem from '../components/selected-user';
import UsersList from '../components/users-list';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';


describe("<SelectedItem/>", () => {
    it("it renders <UsersList/> components ", () => {
      const wrapper = shallow(<SelectedItem/>);
      expect(wrapper.find(<UsersList/>)).to.have.lengthOf(1);
    });
  });
  