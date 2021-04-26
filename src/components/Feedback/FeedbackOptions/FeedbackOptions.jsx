import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className="feedback-list">
        {options.map(el => (
          <li className="feedback-item" key={el}>
            <button
              name={el}
              className="feedback-btn"
              type="button"
              onClick={onLeaveFeedback}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array.isRequired,
};


export default FeedbackOptions;
