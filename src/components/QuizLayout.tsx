
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ResultsCard from "./ResultsCard";
import EndQuizButton from "./EndQuizButton";
import { useQuiz } from "../context/QuizContext";

const QuizLayout: React.FC = () => {
  const { isQuizEnded } = useQuiz();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
        {!isQuizEnded && <ProgressBar />}
        
        <div className="py-4 flex-grow flex flex-col justify-center">
          {isQuizEnded ? <ResultsCard /> : <QuestionCard />}
        </div>
        
        <EndQuizButton />
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizLayout;
