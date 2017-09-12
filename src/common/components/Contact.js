import React, {Component} from 'react';
import '../../styles/contact.css';


class Contact extends Component {

  constructor() {
    super();
    this.focusHandler = this.focusHandler.bind(this);
    this.submitContact = this.submitContact.bind(this);
    this.state = {textAreaBlur : false, nameBlur: false, emailBlur: false};
  }

  focusHandler(element, val) {
    if(element === 'textarea') {
      this.setState({textAreaBlur: val !== ''});
    }
    if(element === 'name') {
      this.setState({nameBlur: val !== ''});
    }
    if(element === 'email') {
      this.setState({emailBlur: val !== ''});
    }
  }

  submitContact(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  render() {

    return (
      <section id="contact">
        <h1>Contact Me</h1>

        <form onSubmit={this.submitContact}>
          <div className="field name-box">
            <input type="text"
                   id="name"
                   className={this.state.nameBlur ? 'focused' : ''}
                   placeholder="Who Are You"
                   onBlur={e => this.focusHandler('name', e.target.value)}/>
            <label htmlFor="name">Name</label>
            <span className="ss-icon">check</span>
          </div>

          <div className="field email-box">
            <input
              type="text"
              id="email"
              className={this.state.emailBlur ? 'focused' : ''}
              placeholder="name@email.com"
              onBlur={e => this.focusHandler('email', e.target.value)}/>
            <label htmlFor="email">Email</label>
            <span className="ss-icon">check</span>
          </div>

          <div className="field msg-box">
            <textarea
              id="msg"
              rows={4}
              className={this.state.textAreaBlur ? 'focused' : ''}
              placeholder="Your message goes here..."
              onBlur={e => this.focusHandler('textarea', e.target.value)}
            />
            <label htmlFor="msg">Message</label>
            <span className="ss-icon">check</span>
          </div>
          <input className="button" type="submit" value="Send"/>

        </form>
      </section>
    )
  }
}

export default Contact;