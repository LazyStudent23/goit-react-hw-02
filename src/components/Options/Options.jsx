import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type="button">
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={() => updateFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
