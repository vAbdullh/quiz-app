
import React from "react";
import { useQuiz } from "../context/QuizContext";
import { Check, X } from "lucide-react";

const ProgressBar: React.FC = () => {
  const { questions, currentQuestionIndex, score, streak, wrongAnswers, courseTitle } = useQuiz();
  
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;
  
  return (
    <div className="w-full mb-6">
      <div className="mb-3 text-sm text-center text-gray-400">
        {courseTitle}
      </div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Check className="w-5 h-5 text-quiz-correct" />
            <span className="text-quiz-correct">{score}</span>
          </div>
          <div className="flex items-center gap-1">
            <X className="w-5 h-5 text-quiz-incorrect" />
            <span className="text-quiz-incorrect">{wrongAnswers}</span>
          </div>
        </div>
        <div className="text-sm text-gray-400">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-quiz-neutral">Streak:</span>
          <span className="text-quiz-primary font-bold">{streak}</span>
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-quiz-primary h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
