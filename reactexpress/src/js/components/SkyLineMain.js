import React from "react";
import ReactDOM from "react-dom";
// import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import {connect} from "react-redux";
// import style from "./static/css"
// import * as user from "../actions/userActions";
// import * as todo from "../actions/todoActions";
import Header from "./Header";
import styled from 'styled-components';
import axios from 'axios';
// import About from "./pages/About";
// import Profile from "./pages/Profile";



const Heading = styled.section`
    padding-top: 1em;
    font-size: 3em;
    text-align: center;
    font-family: "Gist"
`;

const Lists = styled.ul `
  font-size: 1.5em;
  font-family: "Sunn"
  text-align: center;
  color: papayawhip;
  list-style: none;
`;

const Wrapper = styled.div `
    width: 100%;
    height: 100%;
    text-align: center;
    color: tomato;

`;


@connect((store) => {
    //the return becomes props
    return {
        user: store.user.user,
        todos: store.todos.todos
    }
})

export default class SkyLineMain extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            posts: [],
            isLoggedIn: false,
            user: "",
            pswd: "",
            page:""
        };
        this.doSearch = this.doSearch.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.doSignup = this.doSignup.bind(this);
    }
    doLogin(email,password){
        console.log("doLogin");
        axios.post(`/login`, {
        email: email,
        password: password
        })
          .then(res => {
            if(res.data.login){
                console.log("logging in user");
                this.setState({isLoggedIn: true, page:"signin"});
            }
          });
    }

    doLogout(){
        this.setState({isLoggedIn: false, page:"greeting"});
    }

    doSignup(){
        console.log("doSignup");
        axios.get('/signup');
        // this.setState({page:"signup"});
        // <SignUp />
        }
    doSearch(search, event) {
        //   console.log("search is ", search);
        this.setState({
            search: search,
        });

        // this is searching foursquare for roofdeck and bars allowing to search with the search bar for the location
        axios.get('https://api.foursquare.com/v2/venues/search?near=' + search + '&query=Roof%20Deck%2Bbar&oauth_token=TRVTWDKGQ3PL1EFYGMKR5GNEPXLFZNOSBA5TAROXSTA4VGZP&v=20170313')
            .then(res => {
                console.log(res);
                var venues = res.data.response.venues;
                venues.map(function(item) {
                    //   console.log(item);
                    //response.data.response.venues.map
                    //adding markers onto the map with :
                    var markerLocation = new google.maps.LatLng(item.location.lat, item.location.lng);

                    var marker = new google.maps.Marker({
                        position: markerLocation,
                        title: item.name,
                        map: window.map,
                        venue: item
                    });
                    window.map.setCenter(markerLocation);

                    // This event expects a click on a marker
                    // When this event is fired the Info Window content is created
                    // and the Info Window is opened.
                    google.maps.event.addListener(marker, 'click', function() {
                        var self = this;
                        var placePhone = (self.venue.contact.formattedPhone === undefined) ? 'None' : self.venue.contact.formattedPhone;
                        // console.log("clicked marker", self);
                        // console.log(this.venue.url);


                        // sets the on click content with info from the locations::
                        window.infowindow.setContent('<div id="iw_container"><p><strong>Name: </strong>' + self.title + '</p>' +
                    '<p><strong>Address: </strong>  ' + self.venue.location.address + '</p>' +
                    '<p><strong>Phone: </strong>' + placePhone+ '</p></div>');
                        infowindow.open(map, this);
                    });

                });
                this.setState({
                    posts: venues,
                    // place: placeName,
                    // address: placeAddress,
                    // phone: placePhone
                })
            });
    }


    render() {
        var displayShowResults = false;
        let list = < li > {} < /li>;
        let doSignup = null
        let page = this.state.page;
        console.log("page is "+page);
        return (
            <Wrapper>
            <Header isLoggedIn={this.state.isLoggedIn} doLogin={this.doLogin} doLogout={this.doLogout} doSignup={this.doSignup}/>
             <br/> <hr/>
             <div>
             <Heading>SkyLine Bars</Heading>
             </div>
            <div id = "SearchBar" >
            <SearchBar doSearch = {this.doSearch}/>
            </div>

            <Lists>
            <div id = "list">
            <ResultList list = {this.state.posts} address = {this.state.address}
            phone = {this.state.phone}/>
            </div>
            </Lists>
            </Wrapper>

        );
    }
}


function SignUp() {
    return(
        <div>
            <form>
             <div class="signup">
                <p><input placeholder="First Name" type="text" id="fname"/></p>
                <p><input placeholder="Last Name" type="text" id="lname"/></p>
                <p><input placeholder="Email" type="text" id="email"/> </p>
                <p><input placeholder="Password" type="password" id="password"/></p>
                <p><input placeholder="Confirm Password" type="text" id="confirm"/></p>
            <button id="send" onClick={this.doSignup}> Sign Up</button>
            </div>
            </form>
        </div>
        )
}


function SignIn(props) {
    return(
        <div>
            <form>
             <div id="signin">
                <input placeholder="Email" type="text" id="email"/>
                <input placeholder="Password" type="password" id="password"/>
            <button id="send"> Send</button>
            </div>
            </form>
        </div>
        )
}
