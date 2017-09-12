import React, { Component } from 'react';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen)
  }

  openNewPage(e){
    e.preventDefault();
    window.open(e.target.href,'_blank')
  }

  render() {
    return (

      <div className="posts">

        <div className="post banner">
          <h1 className="post-title">I build <em>scalable</em>, <em>maintainable</em> and <em>user-friendly</em> web applications.</h1>
          <p>for <em>course project</em>, <em>internship</em> and sometimes, <em>myself</em>. <a href="/home" onClick={this.eventToggleSidebar}> Find out More</a></p>

        </div>

        <div className="post clearfix">

          <h2>Technologies I build with:</h2>

          <div className="skill-item clearfix">
            <h4>Client Side</h4>
            <ul className="">
              <li><em>Angular</em></li>
              <li><em><b>*</b>React</em>
                <ul>
                  <li><em><b>*</b>Redux</em></li>
                  <li><em>Flux</em></li>
                </ul>
              </li>
              <li><em>Ember</em></li>
            </ul>
          </div>


          <div className="skill-item clearfix">
            <h4>Server Side</h4>
            <ul>
              <li><em>Node</em></li>
              <li><em>Django</em></li>
            </ul>
          </div>

          <div className="skill-item clearfix">
            <h4>Database</h4>
            <ul>
              <li><em>PostgreSQL</em></li>
              <li><em>SQLite</em></li>
              <li><em>MySQL</em></li>
              <li><em>MongoDB</em></li>
            </ul>
          </div>

          <div className="skill-item clearfix">
            <h4>Deployment</h4>
            <ul className="clearfix">
              <li><em><b>*</b>Now.sh</em></li>
              <li><em>Heroku</em></li>
              <li><em>Firebase</em></li>
              <li><em>Github Pages</em></li>
            </ul>
          </div>

          <div className="exclaimation">
            <em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/ALexander4295502/react-redux-portfolio" onClick={this.openNewPage}>github repo here</a>.</em><br/>
          </div>

        </div>

      </div>

    );
  }

}

export default Home;