import React from 'react';
import PropTypes from 'prop-types';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from './Notification/Notification';
import './Feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    visible: false,
  };
  onLeaveFeedback = event => {
    this.show();
    const { name } = event.target;

    if (name === 'good') {
      this.setState(({good}) => ({ good: good + 1 }));
    }
    if (name === 'neutral') {
      this.setState(({neutral}) => ({ neutral: neutral + 1 }));
    }
    if (name === 'bad') {
      this.setState(({bad}) => ({ bad: bad + 1 }));
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(({ good, bad, neutral }) => ({
      total: good + bad + neutral,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ total, good }) => ({
      positivePercentage: Math.round((100 / total) * good),
    }));
  };
  show = () => {
    this.setState({ visible: true });
  };

  render() {
    const {good, neutral, bad, total, positivePercentage, visible} = this.state
    return (
      <section className="Feedback">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2>Statistics</h2>
        {visible ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </section>
    );
  }
}
Feedback.propTypes= {
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
    visible: PropTypes.bool,
  }),

    onLeaveFeedback: PropTypes.func,
    show: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func,
    countTotalFeedback: PropTypes.func,
}


export default Feedback;
