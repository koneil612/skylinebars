import React from "react";

class Clicking extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.postTitle = this.postTitle.bind(this);

    }

    postTitle() {
            return <div>this.props.post.title</div>;
    }

    handleClick(e) {
       const clickPhoto = this.props.post.title;
            return this.postTitle,
            console.log(this.props.post.title);

    }

    render() {
        return (
            <div>
            <img src={this.props.post.thumbnail} onClick={this.handleClick} />

            {this.props.post.title};
            </div>
        );
    }
}

export default class ResultList extends React.Component {
    render() {
    return (
      <ul>
      {this.props.list.map(post =>
        <li key={post.id}>
        <p>
        <Clicking post={post} title={this.postTitle} /></p>
        </li>
         )}
    </ul>
    )
  }
}
