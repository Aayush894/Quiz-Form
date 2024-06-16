const Start = ({ handleStartQuiz }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Welcome to the Quiz!
        </h1>
        <p className="text-lg mb-6 text-center text-gray-700">
          Instructions:
        </p>
        <ul className="mb-6 text-lg text-gray-700">
          <li>There are 10 questions in the Quiz.</li>
          <li>You have 10 minutes to attempt all the questions.</li>
          <li>The quiz will auto-submit after 10 minutes.</li>
        </ul>
        <div className="flex justify-center">
          <button
            onClick={handleStartQuiz}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
