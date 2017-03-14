import React from 'react';

export default class CityName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("change: " + event.target.value);
    this.setState({
        value: event.target.value
    });
  }

  searchLocation() {
    console.log('City: ' + JSON.stringify(this.state.value));
    event.preventDefault();
  }

  loadTodos(){
      this.props.dispatch(todo.readAll());
  }


  render() {
    return (
      <form onSubmit={this.doSearch}>
        <label>
          City Name:
          <input type="text" placeholder=" Houston, TX" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
    

      </form>
    );
  }
}
