import React from 'react'

class SelectedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            disabledState: true,
            someState: props.bio,
        }
        this.editInput=this.editInput.bind(this);
        this.textInput = React.createRef();
    }
    editInput() {
        this.textInput.current.focus();
        this.setState({
            disabledState: false
        });
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.bio !== prevState.someState) {
            return { someState: nextProps.bio};
        } else {
            return null;
        }
    }
    
    componentDidUpdate(prevProps) {
      if (prevProps.bio!==this.props.bio){
        this.setState({someState: this.state.someState});
      }
    }

    render() {
        const {profilePic,name} = this.props;
        return (
            <div className='selected-item'>
                <div>{name}</div>
                <textarea className='text-bio' value={this.state.someState} onChange={(e)=>{this.setState({someState:e.target.value})}} disabled={this.state.disabledState} ref={this.textInput}/>
                <img src={profilePic} alt={name} className='profile-pic'/>
                <div className='btn-list'>
                    <button className='btn-test btn-right' onClick={()=>this.editInput()}>Edit</button>
                </div>
            </div>
        )
    }
}

export default SelectedItem