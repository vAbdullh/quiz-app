
import React from "react";
import { QuizProvider } from "../context/QuizContext";
import QuizLayout from "../components/QuizLayout";

const Index: React.FC = () => {
  return (
    <QuizProvider>
      <QuizLayout />
    </QuizProvider>
  );
};

export default Index;
