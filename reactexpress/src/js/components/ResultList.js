import React from "react";

class Clicking extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.postVenue = this.postVenue.bind(this);

    }

    postVenue() {
            return
            <p> {this.props.placeAddress} </p>;
    }

    handleClick(e) {
        // const clickName = this.props.post.name;
            return <p>{this.props.venuedeets.location.address} </p>
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
            </div>
        );
    }
}

export default class ResultList extends React.Component {
    render() {
        console.log("this is venuedeets ");
        console.log(this.props.venuedeets);
        console.log('rendering resultlist');

    return (
            <ul>
            {this.props.venuedeets.map(detail =>
                <li key={detail.id}><Clicking post={detail} title={this.postVenue} />

                </li>
            )}
            </ul>

        )
  }
}
