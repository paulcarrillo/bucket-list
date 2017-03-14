import React from 'react';
import CardForm from '../cards/CardForm';
import Card from '../cards/Card';
import $ from 'jquery';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.state = { cards: [] }
  }

  componentWillMount() {
    $.ajax({
      url: '/api/cards',
      type: 'GET',
      dataType: 'JSON',
      data: { listId: this.props._id }
    }).done( cards => {
      this.setState({ cards });
    });
  }

  deleteList() {
    $.ajax({
      url: `/api/lists/${this.props._id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( () => {
      this.props.deleteList(this.props._id)
    });
  }

  deleteCard(id) {
    this.setState({ cards: this.state.cards.filter( c => c._id !== id ) });
  }

  updateCard(card) {
    let cards = this.state.cards.map( c => {
      if (card._id === c._id)
        return card;
      return c;
    });

    this.setState({ cards });
  }

  addCard(card) {
    this.setState({ cards: [...this.state.cards, card] });
  }

  render() {
    let cards = this.state.cards.map( card => {
      return (
        <Card
          key={card._id}
          {...card}
          deleteCard={this.deleteCard}
          updateCard={this.updateCard}
        />
      )
    });

    return (
      <div className="col s12 m2 white-text" >
        <h3 className="center">{this.props.name}</h3>
        <hr />
        <CardForm addCard={this.addCard} listId={this.props._id} />
        {cards}
        <button onClick={this.deleteList} className="btn">Explored</button>
      </div>
    )
  }
}

export default List;
