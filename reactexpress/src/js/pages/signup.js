import React from 'react'
export default React.createClass({
  render() {
      console.log("sign up form");
    return
        <form>
        <h1> is this the sign up form i see?</h1>
         <div class="signup">
            <p><input placeholder="First Name" type="text" id="fname"/></p>
            <p><input placeholder="Email" type="text" id="email"/> </p>
            <p><input placeholder="Password" type="password" id="password"/></p>
            <p><input placeholder="Confirm Password" type="text" id="confirm"/></p>
        <button id="send" onClick={this.doSignup}> Sign Up</button>
        </div>
        </form>
  }
})
