import React from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
// import PropTypes from 'prop-types';

export const Feedback = ({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage}
    />
  </div>
);
