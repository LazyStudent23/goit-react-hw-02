import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(() => {
    const feedbackFromLS = JSON.parse(
      window.localStorage.getItem("ls-feedback")
    );
    return feedbackFromLS ?? initialFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem("ls-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    feedbackType === "reset" && setRating({ ...initialRating });
  };
  const totalFeedbacks = feedback.good + feedback.neutral + feedback.bad;
  const goodFeedbacks = Math.round((feedback.good / totalFeedbacks) * 100);
  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedbacks} />
      {totalFeedbacks > 0 ? (
        <Feedback
          feedbacks={feedback}
          totalFeedbacks={totalFeedbacks}
          goodFeedbacks={goodFeedbacks}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
};
export default App;
