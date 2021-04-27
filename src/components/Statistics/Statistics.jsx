import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  
  return (
    <ul className="statistics__list">
      <li className="statistics__item">Good: {good}</li>
      <li className="statistics__item">Neutral: {neutral}</li>
      <li className="statistics__item">Bad: {bad}</li>
      <li className="statistics__item">Total:{total}</li>
      <li className="statistics__item">
        PositivePercentage: {positivePercentage}%
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics;
