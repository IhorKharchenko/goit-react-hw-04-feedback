import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, idx) => {
    return (
      <StyledButton
        type="button"
        key={idx}
        value={option}
        onClick={option => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </StyledButton>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
