import React, {Component} from 'react';
import '../../styles/contact.css';
import ContactForm from "./contact/contact-form";
import ContactModal from "./contact/contact-modal";


class Contact extends Component {

  constructor() {
    super();
    this.submitContact = this.submitContact.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
    this.state = {
      modalOpen : false,
      modalTitle: "",
      modalContent: ""
    };
  }

  validMail(mail) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(mail);
  }


  submitContact(formData) {
    return new Promise((resolve, reject) => {
      if(this.state.modalOpen){
        resolve(false);
        return;
      }

      let email = formData.email;
      let name = formData.name;
      let message = formData.message;

      if(email.length === 0 ||
        name.length === 0 ||
        message.length === 0
      ) {
        this.showModal('Error', 'All fields are required.');
        resolve(false);
        return;
      } else if(!this.validMail(email)) {
        this.showModal('Error', 'Email format is incorrect.');
        return;
      }
      var self = this;
      this.props.sendEmail(name, email, message).then(function (sendSuccess) {
        if(sendSuccess) {
          self.showModal('Success', self.props.results.msg);
          resolve(true);
          return;
        } else {
          self.showModal('Error', self.props.error.statusText);
          resolve(false);
          return;
        }
      });
    });
  }

  showModal(title, content){
    console.log(title);
    this.setState({
      modalTitle: title,
      modalContent: content
    });
    this.setState({modalOpen: !this.state.modalOpen});
  }

  closeHandler(){
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {

    return (
      <section id="contact">
        <ContactModal
          status={this.state.modalOpen}
          title={this.state.modalTitle}
          description={this.state.modalContent}
          closeHandler={this.closeHandler}/>
        <h1>Contact Me</h1>

        <ContactForm submitHandler={this.submitContact}/>
      </section>
    )
  }
}

export default Contact;