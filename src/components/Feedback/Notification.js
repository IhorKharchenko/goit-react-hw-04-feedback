import PropTypes from 'prop-types';
import { StyledNotification } from './Feedback.styled';
export const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};
Notification.propTypes = { message: PropTypes.string.isRequired };
