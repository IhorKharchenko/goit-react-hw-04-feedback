import { Component } from 'react';
import { Feedback } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };
  options = ['good', 'neutral', 'bad'];
  leaveFeedback = element => {
    const { value } = element.currentTarget;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  // handleGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };
  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };
  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positive: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    return (
      <>
        <Feedback
          options={this.options}
          onLeaveFeedback={this.leaveFeedback}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positive}
        />
      </>
    );
  }
}
