import React from "react";

class Clicking extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.postVenue = this.postVenue.bind(this);

    }

    postVenue() {
            return
            <p> {this.props.post.location.address} </p>;
    }

    handleClick(e) {
        console.log("Clicked an li");
        return
            if (this.props.location !== undefined ){
                var address = this.props.post.location.address
            }

            if (this.props.description){
                var desc = this.props.post.description
            }

            if (this.props.hours){
                var hours = this.props.post.hours.status
            }

             console.log(desc);
        }
        // const clickName = this.props.post.name;

    render() {
        var height = 100;
        var width = 100;
        // var locdeets = <p> {desc} <br/> {hours} <br/> {address}</p>
        if (this.props.post.bestPhoto) {
            var placePrefix = (this.props.post.bestPhoto.prefix === undefined) ? '' : this.props.post.bestPhoto.prefix;
            var placeSuffix = (this.props.post.bestPhoto.suffix === undefined) ? '' : this.props.post.bestPhoto.suffix;
            if (placePrefix.length > 3 && placeSuffix.length > 3) {
                var imgUrl = placePrefix +height + "x" + width + placeSuffix;
            }
        }



 // <p id="resultinfo">{this.props.post.description} </p>

        var icon = <img src={imgUrl} />;
        return (
            <div id="results"> {icon}
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
