import React from "react";

class Clicking extends React.Component {
    constructor() {
        super();
        this.state = {showDetails: false};

        this.handleClick = this.handleClick.bind(this);
        this.postVenue = this.postVenue.bind(this);

    }

    postVenue() {
            return
            <p> {this.props.post.location.address} </p>;
    }

    handleClick(e) {
        // console.log("Clicked an li");
            if (this.props.post.location !== undefined ){
                var address = this.props.post.location.address
            }

            if (this.props.post.description){
                var desc = this.props.post.description
            }


            // console.log("I clicked a li that is:");
            // console.log(desc);
            this.setState({showDetails:true});
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
        // console.log("hours");
        // console.log(this.props.post);
        if (this.props.post.hours){
            var hourStatus = this.props.post.hours.status;
        }



 // <p id="resultinfo">{this.props.post.description} </p>
        var icon = <img src={imgUrl} id="photos"/>;
        var details = <div></div>;
        if(this.state.showDetails){
            details = <div><p>{hourStatus}</p>
            <p id="otherinfo">{this.props.post.description}</p>
            <p id="otherinfo">{this.props.post.location.address}</p></div>
        }
        return (
            <div id="results"> {icon}
            <p id="name" onClick={this.handleClick}>
            {this.props.post.name}</p>
            {details}
            </div>

        );
    }
}

export default class ResultList extends React.Component {
    render() {
        // console.log("this is venuedeets ");
        // console.log(this.props.venuedeets);
        // console.log('rendering resultlist');

    return (

            <ul id="searchresults">
            {this.props.venuedeets.map(venue =>
                <li key={venue.id}><Clicking post={venue} title={this.postVenue} />

                </li>
            )}
            </ul>
        )
  }
}
