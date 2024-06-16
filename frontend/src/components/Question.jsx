const Question = ({ id, text, options, selectedOption, onOptionChange }) => {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="text-lg font-semibold mb-2">
        Question {id + 1}: {text}
      </div>
      <div className="content">
        {options.map((option, index) => (
          <div key={`${id}-${index}`} className="mb-2">
            <input
              type="radio"
              id={`question-${id}-option-${index}`}
              name={`question-${id}`}
              className="mr-2"
              checked={selectedOption === option}
              onChange={() => onOptionChange(id, option)}
            />
            <label
              htmlFor={`question-${id}-option-${index}`}
              className="cursor-pointer text-gray-700"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
