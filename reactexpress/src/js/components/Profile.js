import React, { Component } from 'react';
import { Link } from 'react-router';


function UpdateButton(props){
    return (
        <button onClick={props.onClick}>Update Profile</button>
    );
}

class Profile extends React.Component {
    constructor() {
        super();

        this.handleUpdateClick = this.handleUpdateClick.bind(this);

    }

    doUpdate(){
        console.log("doing update maybe??");
        document.location='signup';
        // this.setState({page:"signup"});
        // <SignUp />
    }

      render() {
          return (
            <div className="Header">
              <Greeting isLoggedIn={this.props.isLoggedIn} />
              {button}
              <form>
               <div className="signin">
                  <input placeholder="Email" type="text" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
                  <input placeholder="Password" type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
              </div>
              {UpdateButton}
              </form>
            </div>
        );
    }

}


export default Profile;
