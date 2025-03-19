
import React, { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const QuestionCard: React.FC = () => {
  const {
    questions,
    currentQuestionIndex,
    selectedOption,
    setSelectedOption,
    checkAnswer,
    isChecking,
    isCorrect,
    courseTitle
  } = useQuiz();
  
  // State to hold the randomized options
  const [randomizedOptions, setRandomizedOptions] = useState<string[]>([]);

  // Update randomized options when question changes
  useEffect(() => {
    if (questions.length === 0) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    // Only randomize if there are options to randomize
    if (currentQuestion.options.length > 0) {
      // Create a copy of the options array and shuffle it
      const shuffled = [...currentQuestion.options].sort(() => Math.random() - 0.5);
      setRandomizedOptions(shuffled);
    } else {
      // If no options (like for open-ended questions), use empty array
      setRandomizedOptions([]);
    }
  }, [questions, currentQuestionIndex]);

  if (questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const getOptionClass = (option: string) => {
    if (!isChecking) {
      return option === selectedOption ? "option-selected" : "option-hover";
    }

    if (option === currentQuestion.correctAnswer) {
      return "option-correct";
    }

    if (option === selectedOption && option !== currentQuestion.correctAnswer) {
      return "option-incorrect";
    }

    return "opacity-50";
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-scale-in">
      <div className="bg-quiz-dark p-6 rounded-xl shadow-lg card-glow">
        <div className="mb-4 text-sm text-gray-400">
          {courseTitle}
        </div>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
          {currentQuestion.question}
        </h2>
        
        <div className="space-y-3 mb-6">
          {/* If we have options to display, show the randomized ones */}
          {randomizedOptions.length > 0 ? (
            randomizedOptions.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-lg border border-gray-700 transition-all duration-300 ${getOptionClass(
                  option
                )} disabled:cursor-default`}
                onClick={() => !isChecking && setSelectedOption(option)}
                disabled={isChecking}
              >
                {option}
              </button>
            ))
          ) : (
            // For open-ended questions without multiple choice options
            <div className="text-white">
              <p className="italic text-gray-400 mb-2">Answer:</p>
              <p>{currentQuestion.correctAnswer}</p>
            </div>
          )}
        </div>
        
        {isChecking && (
          <div className="flex items-center justify-center mb-4 animate-fade-in">
            {isCorrect ? (
              <div className="flex items-center text-quiz-correct gap-2">
                <Check className="w-6 h-6" />
                <span className="text-lg font-medium">Correct!</span>
              </div>
            ) : (
              <div className="flex items-center text-quiz-incorrect gap-2">
                <X className="w-6 h-6" />
                <span className="text-lg font-medium">Incorrect!</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-center">
          <Button
            className="bg-quiz-primary hover:bg-quiz-secondary text-white font-medium py-2 px-6 rounded-full transition-all"
            onClick={checkAnswer}
            disabled={!selectedOption || isChecking || randomizedOptions.length === 0}
          >
            Check Answer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
