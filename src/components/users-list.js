import React from 'react';
import users from '../assets/mock-users.js';
import SelectedUser from './selected-user'

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            users: [],
            user: {},
            loading: false,
        }
        this.userDetails= this.userDetails.bind(this);
    }
    componentDidMount() {
        this.setState({
            users: users,
        })
    }
    userDetails(user) {
      this.setState({
        user:user
      });
      this.setState({
        loading:true
      });
    }
    render() {
        return (
          <div className='users'>
            <ul className='users-list'>
              {this.state.users.map((user)=> {
                return (
                  <button key={user.id}
                    className='btn-test'
                    onClick={()=>this.userDetails(user)}>
                    {user.name}
                  </button>
                )
              })}
            </ul>
            {this.state.loading &&
              <SelectedUser bio={this.state.user.bio} profilePic={this.state.user.profile_pic_url} name={this.state.user.name}/>
            }
          </div>
        )
    }
}

export default UsersList