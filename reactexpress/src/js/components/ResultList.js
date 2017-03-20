import React from "react";

class Clicking extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.postVenue = this.postVenue.bind(this);

    }

    postVenue() {
            return
            <p> {this.props.placeAddress} what have you </p>;
    }

    handleClick(e) {

        // const clickName = this.props.post.name;
            // return <p>{this.props.post.location.address} </p>
        console.log("Clicked an li", this);


    }

    render() {
        console.log("placeAddress " + this);
        return (
            <div>
            <p onClick={this.handleClick}>
            {this.props.post.name}</p>
            <p>{this.props.post.location.address} </p>
            <p>{this.props.post.url} </p>
            <img src={this.props.post.categories.icon} /> 
            </div>
        );
    }
}

export default class ResultList extends React.Component {
    render() {
        // console.log("what " + this.props.address)

    return (
          <ul>
          {this.props.list.map(post =>
              <li key={post.id}><Clicking post={post} title={this.postVenue} />

              </li>
             )}
          </ul>
        )
  }
}
