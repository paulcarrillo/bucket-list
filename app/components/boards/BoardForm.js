import React from 'react';
import $ from 'jquery';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: '/boards',
      type: 'POST',
      dataType: 'JSON',
      data: { location: this.refs.location.value }
    }).done( board => {
      this.props.addBoard(board);
      this.refs.location.value = '';
    });
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Location" ref="location" />
          <button className="btn">Add A Destination</button>
        </form>
      </div>
    )
  }
}

export default BoardForm;
