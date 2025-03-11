
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuizProvider, useQuiz } from "../context/QuizContext";
import QuizLayout from "../components/QuizLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const QuizContent: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { loadQuiz, isLoading, error } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!courseId) {
      console.error("No courseId provided");
      navigate('/');
      return;
    }

    console.log("QuizContent: Loading quiz for courseId:", courseId);
    loadQuiz(courseId);
  }, [courseId, loadQuiz, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-quiz-primary"></div>
          <p className="mt-4 text-white">Loading quiz questions...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <div className="bg-red-500/20 text-red-200 p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-2">Error Loading Quiz</h2>
            <p>{error}</p>
            <button 
              className="mt-4 bg-quiz-primary text-white px-4 py-2 rounded-md hover:bg-quiz-secondary"
              onClick={() => navigate('/')}
            >
              Return to Course Selection
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <QuizLayout />;
};

const Quiz: React.FC = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};

export default Quiz;
