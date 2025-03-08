import React, { createContext, useContext, useState, useEffect } from "react";
import { QuizQuestion, quizQuestions } from "../data/quizQuestions";

interface QuizContextType {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: (string | null)[];
  selectedOption: string | null;
  isChecking: boolean;
  isCorrect: boolean | null;
  streak: number;
  wrongAnswers: number;
  
  setSelectedOption: (option: string) => void;
  checkAnswer: () => void;
  goToNextQuestion: () => void;
  endQuiz: () => void;
  isQuizEnded: boolean;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Fisher-Yates shuffle function
  const shuffleArray = (array: QuizQuestion[]): QuizQuestion[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  // State initialization
  const [questions] = useState<QuizQuestion[]>(shuffleArray(quizQuestions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const checkAnswer = () => {
    if (!selectedOption) return;
    
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
    questions,
    currentQuestionIndex,
    score,
    userAnswers,
    selectedOption,
    isChecking,
    isCorrect,
    streak,
    wrongAnswers,
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
