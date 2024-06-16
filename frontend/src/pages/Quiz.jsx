import { useEffect } from "react";
import { questions } from "../data/quizForm";
import Question from "../components/Question";

const Quiz = ({ responses, onSubmit, onOptionChange }) => {
  useEffect(() => {
    localStorage.setItem("responses", JSON.stringify(responses));
  }, [responses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(responses);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="parallax1">
        <div id="warning" className="flex items-center justify-center h-full">
          <div className="text-lg">
            <div className="text-center font-bold">ALL THE BEST!</div>
            <div className="text-center font-semibold">Please Try to answer all questions.</div>
          </div>
        </div>
      </div>
      <div className="main max-w-4xl mx-auto py-8 px-4">
        <form name="quiz" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {questions.map((question, idx) => (
              <Question
                key={idx}
                id={idx}
                text={question.question}
                options={question.options}
                selectedOption={responses[idx]}
                onOptionChange={onOptionChange}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="w-40 h-10 px-2 text-white bg-blue-500 rounded shadow-xl hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quiz;
