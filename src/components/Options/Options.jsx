import styles from "./Options.module.css";

const Options = ({ updateFeedback }) => {
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
      {/* <button className={styles.button} type="button">
        Reset
      </button> */}
    </div>
  );
};

export default Options;
