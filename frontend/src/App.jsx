import { useState, useEffect } from "react";
import Quiz from "./pages/Quiz";
import Popup from "./components/Popup";
import Response from "./pages/Response";

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [responses, setResponses] = useState(() => {
    const savedResponses = localStorage.getItem("responses");
    return savedResponses ? JSON.parse(savedResponses) : {};
  });
  const [submitted, setSubmitted] = useState(() => {
    const savedSubmitted = localStorage.getItem("submitted");
    return savedSubmitted ? JSON.parse(savedSubmitted) : false;
  });
  const [timer, setTimer] = useState(20); 

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("responses", JSON.stringify(responses));
  }, [responses]);

  useEffect(() => {
    localStorage.setItem("submitted", JSON.stringify(submitted));
  }, [submitted]);

  useEffect(() => {
    if (!submitted) {
      const timerInterval = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          handleQuizSubmit(responses);
        }
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timer, responses, submitted]);

  const handleFullScreenRequest = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(err);
      });
    }
  };

  const handleQuizSubmit = (updatedResponses) => {
    setResponses(updatedResponses);
    setSubmitted(true);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.log(err);
      });
    }
  };

  const handleReattempt = () => {
    setResponses({});
    setSubmitted(false);
    localStorage.removeItem("responses");
    localStorage.removeItem("submitted");
    setTimer(20); 
  };

  const handleOptionChange = (questionId, selectedOption) => {
    const updatedResponses = { ...responses, [questionId]: selectedOption };
    setResponses(updatedResponses);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!submitted ?(
        <div className="bg-white p-4 shadow-md">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">Quiz Timer:</div>
            <div className="text-lg font-semibold">
              {Math.floor(timer / 60)}:
              {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
            </div>
          </div>
        </div>
      ): null}
      {!isFullScreen && !submitted ? (
        <div className="blur-sm">
          <Quiz
            responses={responses}
            onSubmit={handleQuizSubmit}
            onOptionChange={handleOptionChange}
          />
        </div>
      ) : (
        <>
          {submitted ? (
            <Response responses={responses} handleReattempt={handleReattempt} />
          ) : (
            <Quiz
              responses={responses}
              onSubmit={handleQuizSubmit}
              onOptionChange={handleOptionChange}
            />
          )}
        </>
      )}
      {!isFullScreen && !submitted && (
        <Popup onRequestFullScreen={handleFullScreenRequest} />
      )}
    </div>
  );
};

export default App;
