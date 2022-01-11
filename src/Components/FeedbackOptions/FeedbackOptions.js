import { PropTypes } from 'prop-types';
import React from 'react';
import FeedbackOptionsStyled from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      <ul onClick={onLeaveFeedback}>
        {options.map(option => (
          <li key={option.option}>
            <button type="button" name={option.option}>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
