import PropTypes from 'prop-types';
import { array } from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map((option, index) => {
        return (
          <Button key={index} onClick={() => onLeaveFeedback(option)}>
            {optionWithUpperCase(option)}
          </Button>
        );
      })}
    </Container>
  );
};

function optionWithUpperCase(option) {
  array = option.split('');
  return array
    .map(letter => {
      if (array.indexOf(letter) === 0) {
        return letter.toUpperCase();
      }
      return letter;
    })
    .join('');
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
