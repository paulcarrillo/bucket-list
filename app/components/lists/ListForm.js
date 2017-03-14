import React from 'react';
import $ from 'jquery';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/lists',
      type: 'POST',
      dataType: 'JSON',
      data: { name: this.refs.name.value, boardId: this.props.boardId }
    }).done( list => {
      this.refs.name.value = '';
      this.props.addList(list);
    });
  }

  render() {
    return (
      <div className="center white-text">
        <form onSubmit={this.handleSubmit}>
          <input ref="name" placeholder="Location" required={true} />
          <button className="btn">To see</button>
        </form>
      </div>
    )
  }
}

export default ListForm;
