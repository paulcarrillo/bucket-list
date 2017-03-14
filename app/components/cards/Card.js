import React from 'react';
import $ from 'jquery';

class Card extends React.Component {
  deleteCard() {
    $.ajax({
      url: `/cards/${this.props._id}`,
      type: 'DELETE',
      dataType: 'JSON',
    }).done( () => {
      this.props.deleteCard(this.props._id)
    });
  }

  render(){
   return(
     <div className="col s12">
       <div className="card blue darken-1">
         <div className="card-image">
              <img src={'http://az616578.vo.msecnd.net/files/2016/02/29/635923042118355177-346900316_bucket%20list%202.jpg'}></img>
        </div>
         <div className="card-content white-text">
           <span className="card-title">{this.props.name}</span>
           <p>{this.props.description}</p>
         </div>
         <div className="card-action">
           <a onClick={() => this.deleteCard}>Delete</a>
         </div>
       </div>
      </div>
    );
  }
}

export default Card;
