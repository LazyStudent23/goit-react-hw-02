import { useState } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback />
    </>
  );
};

export default App;
