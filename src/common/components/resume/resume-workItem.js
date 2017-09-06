import React, {Component} from 'react';
import moment from 'moment';

class ResumeWorkItem extends Component {

  render() {
    const getWorkDates = () => {
      const startdate = moment(this.props.workItemData.startDate).format('MMM, YYYY');
      let enddate = null;
      if (this.props.workItemData.endDate !== '') {
        enddate = moment(this.props.workItemData.endDate).format('MMM, YYYY');
      } else {
        enddate = 'Present';
      }

      return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = this.props.workItemData.highlights.map(function(item, index) {
      return (<li key={index}>{item}</li>)
    });

    return (
      <div className="workItem">
        <h3>{this.props.workItemData.position}</h3>
        <h4>@{this.props.workItemData.company}</h4>
        <p className="workDates">{getWorkDates()}</p>
        <p>{this.props.workItemData.summary}</p>
        <ul>{getHighlights}</ul>
      </div>
    )

  }
}

export default ResumeWorkItem;