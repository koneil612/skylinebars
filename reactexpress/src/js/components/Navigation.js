import React from 'react';
import { Link } from "react-router";
// import styled from 'styled-components';

//
// const Header = styled.section`
//     font-size: 5em;
//     text-align: center;
//     font-family: "Gist"
// `;

export default React.createClass({
  render() {
    return (
      <div>
        <Header>SkyLine Bars</Header>
      </div>
    )
  }
})



// <ul role="nav">
// <li><Link activeStyle={{ color: 'red' }} onlyActiveOnIndex={true} to="/">Home</Link></li>
// <li><Link activeStyle={{ color: 'red' }} to="/about">About</Link></li>
// <li><Link activeStyle={{ color: 'orange' }}  to="/profile">Profile</Link></li>
// </ul>
