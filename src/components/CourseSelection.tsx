
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Course {
  id: string;
  title: string;
}

const CourseSelection: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, we would fetch the available courses from an API
    // For now, we'll hardcode the available courses
    setCourses([
      { id: "cpit-251", title: "Software Engineering (CPIT-251)" },
      { id: "cpit-370", title: "Computer Networks (CPIT-370)" }
    ]);
    setLoading(false);
  }, []);

  const handleCourseSelect = (courseId: string) => {
    navigate(`/quiz/${courseId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-quiz-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto animate-scale-in">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
        Select a Course to Start Quiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-quiz-dark p-6 rounded-xl shadow-lg border border-gray-700 hover:border-quiz-primary transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-white">{course.title}</h2>
            <Button
              className="bg-quiz-primary hover:bg-quiz-secondary text-white font-medium py-2 px-6 rounded-full transition-all w-full"
              onClick={() => handleCourseSelect(course.id)}
            >
              Start Quiz
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseSelection;
