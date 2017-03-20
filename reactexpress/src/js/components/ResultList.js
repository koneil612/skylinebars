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
        event.preventDefault();
        const clickName = this.props.post.name;
            return this.postVenue

    }

    render() {
        return (
            <div>
            <p onClick={this.handleClick}>
            {this.props.post.name}</p><p>{this.props.placeAddress} </p>
            </div>
        );
    }
}

export default class ResultList extends React.Component {
    render() {
        // console.log("what " + this.postVenue)

    return (
          <ul>
          {this.props.list.map(post =>
              <li key={post.id}><Clicking post={post} title={this.postVenue} /></li>
             )}
          </ul>
        )
  }
}
