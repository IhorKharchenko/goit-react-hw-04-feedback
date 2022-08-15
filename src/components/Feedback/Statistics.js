import React from 'react';
import PropTypes from 'prop-types';
import { StyledList, StyledListItem } from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledList>
      <StyledListItem>Good: {good}</StyledListItem>
      <StyledListItem>Neutral: {neutral}</StyledListItem>
      <StyledListItem>Bad: {bad}</StyledListItem>
      <StyledListItem>Total: {total} </StyledListItem>
      <StyledListItem>Positive:{positivePercentage}%</StyledListItem>
    </StyledList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
