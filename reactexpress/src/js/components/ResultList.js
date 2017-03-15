import React from "react";

class Clicking extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.postVenue = this.postVenue.bind(this);

    }

    postVenue() {
            return <div>this.props.list.name</div>;
    }

    handleClick(e) {
       const clickPhoto = this.props.post.name;
            return this.postVenue,
            console.log(this.props.post.name);

    }

    render() {
        return (
            <div>
            <img src={this.props.post.photos} onClick={this.handleClick} />

            {this.props.post.name}
            </div>
        );
    }
}

export default class ResultList extends React.Component {
    render() {
        console.log("what " + this.postVenue)

    return (
          <ul>
          {this.props.list.map(post =>
              <li key={post.id}>
              <Clicking post={post} title={this.postVenue} />
              </li>
             )}
          </ul>
        )
  }
}
