import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedbacks }) => {
  return (
    <div>
      <button
        onClick={() => updateFeedback("good")}
        className={styles.button}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={styles.button}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        className={styles.button}
        type="button"
      >
        Bad
      </button>
      {totalFeedbacks > 0 && (
        <button className={styles.button} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
