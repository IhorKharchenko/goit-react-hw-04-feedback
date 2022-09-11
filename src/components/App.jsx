import { useState } from 'react';
import PropTypes from 'prop-types';
import { Feedback } from './Feedback';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const leaveFeedback = option => {
    const { value } = option.currentTarget;
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    let total = bad + good + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positive = Math.round((good / countTotalFeedback()) * 100);
    return positive;
  };
  return (
    <>
      <Feedback
        options={options}
        onLeaveFeedback={leaveFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
};

App.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
