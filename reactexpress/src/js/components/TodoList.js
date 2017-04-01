import React from "react";
import { connect } from "react-redux";

@connect((store)=>{
    //the return becomes props
    return {
        todos:store.todos.todos
    }
})



export default class TodoList extends React.Component {
 render() {
    //  console.log("checking ",this.props.posts );
     if(typeof this.props.todos.response !== "undefined" && typeof this.props.todos.response.venues !== "undefined"){
        var venues = this.props.todos.response.venues;
        var liData = venues.map(venue =><li>{venue.name}</li>);
        return (
          <ul>
              {liData}
          </ul>
        );
        } else {
         return (
           <ul>
           </ul>
         );
     }

   // console.log(item.response);
 }
}
