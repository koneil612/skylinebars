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

        // console.log("venue photos " + this.props.details.venue.photos.groups.items.prefix + this.props.details.venue.photos.groups.items.suffix.);
        // var imgUrl =this.props.detail.photos.groups.items.prefix + this.props.detail.photos.groups.items.suffix;
        // console.log(imgUrl);
        // var icon = <img src={imgUrl} />;
        return (
            <div>
            <p onClick={this.handleClick}>
            {this.props.post.name}</p>
            <p>{this.props.post.location.address} </p>
            <p>{this.props.post.url} </p>

            </div>
        );
    }
}

export default class ResultList extends React.Component {
    render() {
        console.log("this is venuedeets " + this.props.detail);
        console.log("this should be posts: " + this.props.post);

    return (
        <div>
          <ul>
          {this.props.list.map(post =>
              <li key={post.id}><Clicking post={post} title={this.postVenue} />
              </li>
             )}
          </ul>
          {this.props.venuedeets.map(detail =>
              <li>{detail.bestphoto}
              </li>
             )}
          </div>
        )
  }
}
