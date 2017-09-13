import React, {Component} from 'react';

class ContactForm extends Component{

  constructor(props) {
    super(props);
    this.focusHandler = this.focusHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitContact = this.submitContact.bind(this);
    this.state = {
      textAreaBlur : false,
      nameBlur: false,
      emailBlur: false,
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange(element, event) {
    if(element === 'message') {
      this.setState({message: event.target.value});
    }
    if(element === 'name') {
      this.setState({name: event.target.value});
    }
    if(element === 'email') {
      this.setState({email: event.target.value});
    }
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
    this.props.submitHandler({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }).then(res => {
      if(res) {
        this.setState({
          message: '',
          name: '',
          email: '',
          textAreaBlur : false,
          nameBlur: false,
          emailBlur: false,
        });
      }
    });
  }

  render() {

    return (
      <form onSubmit={this.submitContact}>
        <div className="field name-box">
          <input type="text"
                 id="name"
                 className={this.state.nameBlur ? 'focused' : ''}
                 placeholder="Who Are You"
                 value={this.state.name}
                 onChange={e => this.handleChange('name', e)}
                 onBlur={e => this.focusHandler('name', e.target.value)}/>
          <label htmlFor="name">Name</label>
          <span className="ss-icon">check</span>
        </div>

        <div className="field email-box">
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={e => this.handleChange('email', e)}
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
            value={this.state.message}
            onChange={e => this.handleChange('message', e)}
            className={this.state.textAreaBlur ? 'focused' : ''}
            placeholder="Your message goes here..."
            onBlur={e => this.focusHandler('textarea', e.target.value)}
          />
          <label htmlFor="msg">Message</label>
          <span className="ss-icon">check</span>
        </div>
        <input className="button" type="submit" value="Send"/>

      </form>
    )
  }
}

export default ContactForm;