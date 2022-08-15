import React from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistics';
import PropTypes from 'prop-types';
import { StyledFeedback } from './Feedback.styled';

export const Feedback = ({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledFeedback>
      <Section title="Please, leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </StyledFeedback>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
