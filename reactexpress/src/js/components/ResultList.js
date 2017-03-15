import React from "react";

// class Clicking extends React.Component {
//     constructor() {
//         super();
//         this.handleClick = this.handleClick.bind(this);
//         this.postVenue = this.postVenue.bind(this);
//
//     }
//
//     postVenue() {
//             return <div>this.data.response.venues.name</div>;
//     }
//
//     // handleClick(e) {
//     //    const clickPhoto = this.props.post.title;
//     //         return this.postTitle,
//     //         console.log(this.props.post.title);
//     //
//     // }
//
//     render() {
//         return (
//             <div>
//             <img src={this.props.posts.url} onClick={this.handleClick} />
//
//             {this.props.posts};
//             </div>
//         );
//     }
// }

export default class ResultList extends React.Component {
    render() {
        console.log("what " + this.props.list)

    return (
          <ul>
          {this.props.list.map(post =>
              <li>{post}</li>
             )}
          </ul>
        );
  }
}
