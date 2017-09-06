import React, { Component } from 'react';
import ShadowDOM from 'react-shadow';


class Resume extends Component {
  render() {

    return (
    <ShadowDOM include={[
      `${process.env.PUBLIC_URL}/resume/bootstrap.min.css`,
      `${process.env.PUBLIC_URL}/resume/main.css`,
      `${process.env.PUBLIC_URL}/resume/font-awesome.css`
    ]}>
      <div className="container">
  <div className="row">
    <div className="col-xs-12">
      <div id="photo-header" className="text-center">
        <div id="photo">
          <img src="assets/avatar.jpg" alt="avatar"/>
        </div>
        <div id="text-header">
          <h1>Hello,<br/> my name is <span>ZHENG</span><sup>YUAN</sup> and this is my resume/cv</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xs-12 col-sm-7">
      <div className="box">
        <h2>About Me</h2>
        <p>I am a master student at Washington University in St. Louis. I majored in physics during undergrad, and I am majoring in electrical engineering and computer science now. I am interested in app development and game design. I have created an ios social app and a MEAN stack forum. Currently I am working on a platformer game by Unity. </p>
      </div>
      <div className="box">
        <h2>Education</h2>
        <ul id="education" className="clearfix">
          <li>
            <div className="year pull-left">1994</div>
            <div className="description pull-right">
              <h3>I was born in China</h3>
              <p>My hometown is Taiyuan, which is a city of Northern China.</p>
            </div>
          </li>
          <li>
            <div className="year pull-left">2009</div>
            <div className="description pull-right">
              <h3>High school study</h3>
              <p>I began my high school study in Taiyuan.</p>
            </div>
          </li>
          <li>
            <div className="year pull-left">2012</div>
            <div className="description pull-right">
              <h3>Undergraduate study in Physics</h3>
              <p>I began my undergraduate study at Renmin University of China.</p>
            </div>
          </li>
          <li>
            <div className="year pull-left">2016</div>
            <div className="description pull-right">
              <h3>Postgraduate study in Electrical Engineering & Computer Science</h3>
              <p>Now I am a master student at Washington University in St. Louis</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="box">
        <h2>Experiences</h2>
        <div className="job clearfix">
          <div className="col-xs-3">
            <div className="where">Google</div>
            <div className="year">2013 - 2014</div>
          </div>
          <div className="col-xs-9">
            <div className="profession">Front-end developer / php programmer</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.</div>
          </div>
        </div>
        <div className="job clearfix">
          <div className="col-xs-3">
            <div className="where">Twitter</div>
            <div className="year">2012</div>
          </div>
          <div className="col-xs-9">
            <div className="profession">Web Developer</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, nihil sit nemo voluptatem praesentium. Quia, qui facere consectetur libero asperiores fugiat consequuntur deserunt culpa repudiandae sed quidem voluptas explicabo soluta.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-5">
      <div className="box clearfix" name="contact">
        <h2>Contact</h2>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fa fa-phone fa-fw"></span></div>
          <div className="title only pull-right"><a href="sms://+13142851077">(314)-285-1077</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fa fa-envelope fa-fw"></span></div>
          <div className="title only pull-right"><a href="mailto:yuan.z@wustl.edu">yuan.z@wustl.edu</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fa fa-facebook fa-fw"></span></div>
          <div className="title pull-right">Facebook</div>
          <div className="description pull-right"><a href="https://www.facebook.com/zheng.yuan.7967">Zheng Yuan</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fa fa-linkedin fa-fw"></span></div>
          <div className="title pull-right">LinkedIn</div>
          <div className="description pull-right"><a href="https://www.linkedin.com/in/%E5%BE%81-%E8%A2%81-0b0881133/">Zheng Yuan</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fa fa-skype fa-fw"></span></div>
          <div className="title pull-right">Skype</div>
          <div className="description pull-right">yuanzhengstl@gmail.com</div>
        </div>
      </div>
      <div className="box">
        <h2>Skills</h2>
        <div className="skills">
          <div className="item-skills" data-percent="1.00">HTML</div>
          <div className="item-skills" data-percent="0.90">CSS</div>
          <div className="item-skills" data-percent="0.80">jQuery</div>
          <div className="item-skills" data-percent="0.75">PHP</div>
          <div className="item-skills" data-percent="0.25">Laravel 2 (framework)</div>
          <div className="skills-legend clearfix">
            <div className="legend-left legend">Beginner</div>
            <div className="legend-left legend"><span>Proficient</span></div>
            <div className="legend-right legend"><span>Expert</span></div>
            <div className="legend-right legend">Master</div>
          </div>
        </div>
      </div>
      <div className="box">
        <h2>Languages</h2>
      </div>
      <div className="box">
        <h2>Hobbies</h2>
        <div className="hobby">Swimming</div>
        <div className="hobby">Badminton</div>
        <div className="hobby">Fitness</div>
        <div className="hobby">Programming</div>
      </div>
    </div>
  </div>
</div>
    </ShadowDOM>
    );
  }
}

export default Resume;