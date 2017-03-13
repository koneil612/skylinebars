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
         var venue = this.props.todos.response.venues;
         return (
           <ul>
               <li key={venue.id}>{venue.name}</li>
           </ul>
         );
     } else {
         return (
           <ul>
           </ul>
         );
     }

   console.log(item.response);
 }
}
