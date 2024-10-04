import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedbacks, goodFeedbacks }) => {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedbacks}</li>
      <li>Positive: {goodFeedbacks}</li>
    </ul>
  );
};

export default Feedback;
