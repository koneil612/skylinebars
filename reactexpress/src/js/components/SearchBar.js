import React from "react";

export default class SearchBar extends React.Component {

    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // console.log('search' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input placeholder="Houston, TX" type="text" value={this.state.value} onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.props.doSearch.bind(null,this.state.value)}/>
        </form>
    );
  }
}
