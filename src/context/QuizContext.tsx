
import React, { createContext, useContext, useState, useCallback } from "react";
import { QuizQuestion, CourseQuiz } from "../types/quiz";
import { fetchCourseQuiz } from "../services/quizService";

interface QuizContextType {
  courseTitle: string;
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: (string | null)[];
  selectedOption: string | null;
  isChecking: boolean;
  isCorrect: boolean | null;
  streak: number;
  wrongAnswers: number;
  isLoading: boolean;
  error: string | null;
  
  loadQuiz: (courseId: string) => Promise<void>;
  setSelectedOption: (option: string) => void;
  checkAnswer: () => void;
  goToNextQuestion: () => void;
  endQuiz: () => void;
  isQuizEnded: boolean;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courseTitle, setCourseTitle] = useState<string>('');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadQuiz = useCallback(async (courseId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log(`Loading quiz for course ID: ${courseId}`);
      
      const courseQuiz = await fetchCourseQuiz(courseId);
      
      setCourseTitle(courseQuiz.courseTitle);
      setQuestions(courseQuiz.questions);
      setUserAnswers(Array(courseQuiz.questions.length).fill(null));
      
      // Reset other quiz state
      setCurrentQuestionIndex(0);
      setScore(0);
      setStreak(0);
      setWrongAnswers(0);
      setSelectedOption(null);
      setIsChecking(false);
      setIsCorrect(null);
      setIsQuizEnded(false);
      
      setIsLoading(false);
      console.log("Quiz loaded successfully with", courseQuiz.questions.length, "questions");
    } catch (error) {
      console.error("Error in loadQuiz:", error);
      setError("Failed to load quiz. Please try again.");
      setIsLoading(false);
    }
  }, []);

  const checkAnswer = () => {
    if (!selectedOption || questions.length === 0) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = selectedOption === currentQuestion.correctAnswer;
    
    // Update user answers
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newUserAnswers);
    
    // Update score and streak
    if (isAnswerCorrect) {
      setScore(prevScore => prevScore + 1);
      setStreak(prevStreak => prevStreak + 1);
      setIsCorrect(true);
    } else {
      setStreak(0);
      setWrongAnswers(prev => prev + 1);
      setIsCorrect(false);
    }
    
    setIsChecking(true);
    
    // Auto-advance after 2 seconds
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1 && !isQuizEnded) {
        goToNextQuestion();
      } else if (!isQuizEnded) {
        setIsQuizEnded(true);
      }
    }, 2000);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setIsChecking(false);
      setIsCorrect(null);
    } else {
      setIsQuizEnded(true);
    }
  };

  const endQuiz = () => {
    setIsQuizEnded(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setWrongAnswers(0);
    setUserAnswers(Array(questions.length).fill(null));
    setSelectedOption(null);
    setIsChecking(false);
    setIsCorrect(null);
    setIsQuizEnded(false);
  };

  const value = {
    courseTitle,
    questions,
    currentQuestionIndex,
    score,
    userAnswers,
    selectedOption,
    isChecking,
    isCorrect,
    streak,
    wrongAnswers,
    isLoading,
    error,
    loadQuiz,
    setSelectedOption,
    checkAnswer,
    goToNextQuestion,
    endQuiz,
    isQuizEnded,
    resetQuiz
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
