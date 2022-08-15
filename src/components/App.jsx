import { Component } from 'react';
import { Feedback } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  options = ['good', 'neutral', 'bad'];
  leaveFeedback = option => {
    const { value } = option.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = this.state.bad + this.state.good + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positive = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positive;
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
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
