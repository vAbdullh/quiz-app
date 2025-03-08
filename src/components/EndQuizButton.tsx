
import React from "react";
import { useQuiz } from "../context/QuizContext";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

const EndQuizButton: React.FC = () => {
  const { endQuiz, isQuizEnded } = useQuiz();
  
  if (isQuizEnded) return null;
  
  return (
    <div className="mt-6 flex justify-center">
      <Button
        variant="outline"
        className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 font-medium rounded-full transition-all flex items-center gap-2"
        onClick={endQuiz}
      >
        <Flag className="w-4 h-4" />
        End Quiz
      </Button>
    </div>
  );
};

export default EndQuizButton;
