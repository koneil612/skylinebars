import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import {
    connect
} from "react-redux";
// import * as user from "../actions/userActions";
// import * as todo from "../actions/todoActions";
import Navigation from "./Navigation";
import styled from 'styled-components';
import axios from 'axios';



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
    background: black;
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
            posts: []
        };
        this.doSearch = this.doSearch.bind(this);
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
        return (
            <Wrapper>
            <Navigation / >
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
