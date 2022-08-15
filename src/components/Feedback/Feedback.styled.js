import styled from '@emotion/styled';

export const StyledFeedback = styled.div`
  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.background};
`;

export const StyledSection = styled.section`
  background-color: ${props => props.theme.colors.white};
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
`;
export const StyledTitle = styled.h2`
  padding: ${props => props.theme.space[3]}px 0;
  margin: 0;
`;
export const StyledNotification = styled.p`
  margin: 0;
`;
export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const StyledListItem = styled.li`
  :not(:last-of-type) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
export const StyledButton = styled.button`
  :not(:last-child) {
    margin-right: ${props => props.theme.space[4]}px;
  }
  padding: ${props => props.theme.space[2]}px;
  min-width: 60px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.sm};
  text-transform: capitalize;
`;
