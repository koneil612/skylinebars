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
        console.log("rendering a list item");
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
        console.log("Props");
        console.log(this.props);
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
