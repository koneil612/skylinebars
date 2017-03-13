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
     console.log("checking ",this.props.todos );
     if(typeof this.props.todos.response !== "undefined" && typeof this.props.todos.response.venues !== "undefined"){
         var venues = this.props.todos.response.venues.map(todo =><li>{venue.name}</li>);
         return (
           <ul>
               <li key={venue.id}>{venue.name}</li>
           </ul>
         );
        } else {
         return (
           <ul>
           <li>nothing</li>
           </ul>
         );
     }

   console.log(item.response);
 }
}
