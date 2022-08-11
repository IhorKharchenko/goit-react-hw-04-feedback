import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, idx) => {
    return (
      <button
        type="button"
        key={idx}
        value={option}
        onClick={element => {
          onLeaveFeedback(element);
        }}
      >
        {option}
      </button>
    );
  });
  // <div>
  //   <h1>Please, leave feedback</h1>
  //   <button onClick={onLeaveFeedback}>Good</button>
  //   {/* <button onClick={this.handleNeutral}>Neutral</button>
  //   <button onClick={this.handleBad}>Bad</button> */}
  // </div>
};
