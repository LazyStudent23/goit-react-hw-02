import styles from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedbacks, goodFeedbacks }) => {
  return (
    <ul>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>
      <li>Total: {totalFeedbacks}</li>
      <li>Positive: {goodFeedbacks}%</li>
    </ul>
  );
};

export default Feedback;
