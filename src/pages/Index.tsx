
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseSelection from "../components/CourseSelection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-quiz-darker">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <CourseSelection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
