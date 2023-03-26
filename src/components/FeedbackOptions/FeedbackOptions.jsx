import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      <Button onClick={options[0]}>Good</Button>
      <Button onClick={options[1]}>Neutral</Button>
      <Button onClick={options[2]}>Bad</Button>
    </Container>
  );
};

//!============ не розумію, який тут має бути proptype, і чи взагалі має бути, адже передають методи класу
FeedbackOptions.propTypes = {
  //options: PropTypes.arrayOf(PropTypes.node),
};
