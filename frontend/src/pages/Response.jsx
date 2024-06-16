import { questions } from '../data/quizForm.js';

const Response = ({ responses, handleReattempt }) => {
  const getQuestionStatus = (id) => {
    if (responses[id]) {
      const correctAnswer = questions[id].answer[0];
      return responses[id] === correctAnswer ? 'Correct' : 'Incorrect';
    } else {
      return 'Not Attempted';
    }
  };

  return (
    <div className="text-center p-10">
      <p className="mb-2 text-lg font-semibold">
        <b>Note:</b> Your responses summary
      </p>
      <div className="mb-4">
        <table className="min-w-full divide-y divide-gray-200 shadow-md bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-xl text-center font-bold text-gray-600 uppercase">
                Question
              </th>
              <th className="px-6 py-3 text-xl font-bold text-gray-600 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {questions.map((question, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Question {parseInt(question.id) + 1}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      getQuestionStatus(question.id) === 'Correct'
                        ? 'bg-green-100 text-green-800'
                        : getQuestionStatus(question.id) === 'Incorrect'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {getQuestionStatus(question.id)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleReattempt}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Reattempt Quiz
      </button>
    </div>
  );
};

export default Response;
