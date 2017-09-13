import React, {Component} from 'react';
import '../../../styles/contact-modal.css';

class ContactModal extends Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeHandler();
  }

  render() {
    return(
      <div className="modal" data-status={this.props.status}>
        <div className="modal-right">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <button onClick={this.closeModal} className="close">
            <span className="fa fa-close"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default ContactModal;