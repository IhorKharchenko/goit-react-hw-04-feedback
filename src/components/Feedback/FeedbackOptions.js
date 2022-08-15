import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, idx) => {
    return (
      <button
        type="button"
        key={idx}
        value={option}
        onClick={option => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </button>
    );
  });
};
