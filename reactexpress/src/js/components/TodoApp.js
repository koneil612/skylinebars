import React from "react";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import { connect } from "react-redux";
// import * as user from "../actions/userActions";
// import * as todo from "../actions/todoActions";
import Navigation from "./Navigation";
import styled from 'styled-components';
import axios from 'axios';

const StyledText = styled.ul`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  list-style-type: none;
`;

const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    padding: 4em;
    text-align: center;
    color: tomato;
    background: papayawhip;
`;


@connect((store)=>{
    //the return becomes props
    return {
        user:store.user.user,
        todos:store.todos.todos
    }
})
export default class TodoApp extends React.Component {
    constructor(){
        super();
        this.state = {
            search:'',
            posts: []
        };
        this.doSearch = this.doSearch.bind(this);
    }

  doSearch(search,event){
    //   console.log("search is ", search);
      this.setState({
          search:search,
      });

      axios.get('https://api.foursquare.com/v2/venues/search?near=' + search + '&query=Roof%20Deck%2Bbar&oauth_token=TRVTWDKGQ3PL1EFYGMKR5GNEPXLFZNOSBA5TAROXSTA4VGZP&v=20170313')
        .then(res => {
        // console.log(res);
          const posts = res.data.response.venues;

          this.setState({
              posts:posts
          })
        });
  }

  // handleSubmit(e){
  //     e.preventDefault();
  // }

  // readUser(){
  //     this.props.dispatch(user.readUser());
  //   //   this.props.dispatch(todo.readAll(channel));
  // }

  // loadTodos(){
  //     this.props.dispatch(todo.readAll());
  // }

  render() {
      var displayShowResults = false;
      let list = <li>{}</li>;
    return (
      <div>
      <Wrapper>
      <div id="SearchBar">
          <SearchBar doSearch={this.doSearch} />
          <h1>{this.state.search}</h1>
      </div>
     <StyledText> <div id="list">
          <ResultList list={this.state.posts} />
      </div>
      </StyledText>
      </Wrapper>
      </div>

    );
  }
}

//
//
// <Navigation />
// {/* <button onClick={this.readUser.bind(this)}>Log In</button>
// <StyledText><TodoList /></StyledText>
// {this.props.children}
// <button onClick={this.loadTodos.bind(this)}>Search Locations</button> */}
// {/* add this */}
//
