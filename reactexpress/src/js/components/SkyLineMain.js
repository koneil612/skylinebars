import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import {connect} from "react-redux";
import Header from "./Header";
import Profile from "./Profile";
// import styled from 'styled-components';
import axios from 'axios';


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
            details: [],
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
                window.location = "/profile";
            }
          });
    }

    doLogout(){
        this.setState({isLoggedIn: false, page:"greeting"});
    }

    doSignup(){
        // console.log("doingSignup");
        document.location='signup';
        // this.setState({page:"signup"});
        // <SignUp />
    }
    doSearch(search, event) {
           //   console.log("search is ", search);
           this.setState({
               search: search,
           });
           var self = this;//use self inside axios to access the component object
           // this is searching foursquare for roofdeck and bars allowing to search with the search bar for the location
           axios.get('https://api.foursquare.com/v2/venues/search?near=' + search + '&query=Roof%20Deck%2Bbar&oauth_token=TRVTWDKGQ3PL1EFYGMKR5GNEPXLFZNOSBA5TAROXSTA4VGZP&v=20170313')
               .then(res => {
                   console.log(res);
                   var venues = res.data.response.venues;
                   // var venueId = res.data.response.venues.id;
                   // var venueIds = [];
                   // venueId = venueIds.push;
                   var venueIds = [];
                   var venueDetails = [];
                  //    console.log(res.data.response.venues.location.lat[0]);
                   venues.map(function(item) {
                       if (venueIds.length == 0) {
                           getWeather(item.location.lat, item.location.lng)
                       }
                       venueIds.push(item.id);
                       axios.get('https://api.foursquare.com/v2/venues/' + item.id +'?&oauth_token=TRVTWDKGQ3PL1EFYGMKR5GNEPXLFZNOSBA5TAROXSTA4VGZP&v=20170313')
                           .then(res2 => {
                               venueDetails.push(res2.data.response.venue);
                           // console.log(venueDetails);
                           if(venueDetails.length==venues.length){
                               //we got all the venueDetails, change the state to trigger the re-render
                               self.setState({
                                   posts: venues,
                                   details: venueDetails

                               })
                           }
                           })

       // make a count on the venues so when venue deails == venues count then it will be odne

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

                           // sets the on click content with info from the locations::
                           window.infowindow.setContent('<div id="iw_container"><p><strong>Name: </strong>' + self.title + '</p>' +'<p><strong>Address: </strong>  ' +self.venue.location.address + '</p>'+'<p><strong>Phone: </strong>' + placePhone+ '</p></div>');
                           infowindow.open(map, this);
                       });

                       //  weather api
                    //    console.log("this is the LAT phone");
                    //    console.log(venue);
                    //    console.log("this is the LANG HOPEFULLY");
                    //    console.log(item.location.lng);

                   });

               });


            }


    render() {
        var displayShowResults = false;
        let list = < li > {} < /li>;
        let venuedeets = <li> {}</li>;

        let doSignup = null

        return (
            <div class="container-fluid main-body">
            <Header isLoggedIn={this.state.isLoggedIn} doLogin={this.doLogin} doLogout={this.doLogout} doSignup={this.doSignup}/>
             <hr id="hr"/>
             <div class = "mainbod">
             <div id="header">SkyLine Bars</div>
             </div>
             <div className="row">
                 <div className="col-md-12">
                         <div>
                            <SearchBar doSearch = {this.doSearch}/>
                            <span id="weather"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:94114.1.99999&bannertypeclick=wu_simplegray" title="{citySearch}" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_simplegray&airportcode=KSFO&ForcedCity=San Francisco&ForcedState=CA&zip=94114&language=EN" alt="Find more about Weather in San Francisco, CA" width="160" /></a><br /><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:94114.1.99999&bannertypeclick=wu_simplegray" title="Get latest Weather Forecast updates" target="_blank">Click for weather forecast</a></span>
                         </div>

                </div>
            </div>
            <div className="row" id="middlerow">
            <div className="col-md-6">
                <div id="map"></div>
            </div>
            <div className="col-md-6">
                <div id="searcharea">
                <ResultList list = {this.state.posts} venuedeets = {this.state.details}/>
                </div>
             </div>
             </div>

            </div>
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
            <button id="send button" onClick={this.doSignup}> Sign Up</button>
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
            <button id="send button"> Send</button>
            </div>
            </form>
        </div>
        )
}
