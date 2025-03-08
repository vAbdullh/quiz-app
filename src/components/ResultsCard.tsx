
import React from "react";
import { useQuiz } from "../context/QuizContext";
import { Button } from "@/components/ui/button";
import { Check, X, RefreshCcw } from "lucide-react";

const ResultsCard: React.FC = () => {
  const { questions, userAnswers, score, resetQuiz } = useQuiz();
  
  const percentage = Math.round((score / questions.length) * 100);
  
  return (
    <div className="w-full max-w-3xl mx-auto animate-scale-in">
      <div className="bg-quiz-dark p-6 rounded-xl shadow-lg card-glow">
        <h2 className="text-2xl font-semibold mb-2 text-white text-center">Quiz Results</h2>
        
        <div className="text-center mb-6">
          <p className="text-3xl font-bold text-quiz-primary mb-2">{percentage}%</p>
          <p className="text-gray-400">
            You got {score} out of {questions.length} questions correct
          </p>
        </div>
        
        <div className="space-y-6 mb-6">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <Check className="w-5 h-5 text-quiz-correct mt-1 shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-quiz-incorrect mt-1 shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-white mb-1">
                      {index + 1}. {question.question}
                    </p>
                    
                    {!isCorrect && (
                      <div className="text-sm">
                        <p className="text-quiz-incorrect">
                          Your answer: {userAnswer}
                        </p>
                        <p className="text-quiz-correct">
                          Correct answer: {question.correctAnswer}
                        </p>
                      </div>
                    )}
                    
                    {isCorrect && (
                      <p className="text-quiz-correct text-sm">
                        Correct answer: {question.correctAnswer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Button
            className="bg-quiz-primary hover:bg-quiz-secondary text-white font-medium py-2 px-6 rounded-full transition-all flex items-center gap-2"
            onClick={resetQuiz}
          >
            <RefreshCcw className="w-4 h-4" />
            Play Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
