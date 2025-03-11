
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetQuiz, isQuizEnded } = useQuiz();
  
  // Only show the buttons on the quiz page, not on the course selection page
  const isQuizPage = location.pathname.includes('/quiz/');
  
  return (
    <header className="w-full py-4 bg-quiz-dark border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Quiz App</h1>
        
        {isQuizPage && (
          <div className="flex gap-2">
            {!isQuizEnded && (
              <Button
                variant="secondary"
                size="sm"
                className="bg-quiz-secondary hover:bg-quiz-primary"
                onClick={resetQuiz}
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Play Again
              </Button>
            )}
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-quiz-primary text-white hover:bg-quiz-primary/20"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Course Selection
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-quiz-dark border-quiz-primary text-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Return to Course Selection?</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-400">
                    Your current quiz progress will be lost. Are you sure you want to return to the course selection page?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-gray-700 hover:bg-gray-600 text-white">Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-quiz-primary hover:bg-quiz-secondary"
                    onClick={() => navigate('/')}
                  >
                    Yes, return
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
