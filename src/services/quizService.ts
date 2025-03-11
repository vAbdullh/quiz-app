
import { CourseQuiz } from "../types/quiz";

export const fetchCourseQuiz = async (courseId: string): Promise<CourseQuiz> => {
  try {
    const response = await fetch(`/quiz-app/courses/${courseId}.json`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch quiz: ${response.statusText}`);
    }
    
    const data: CourseQuiz = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    throw error;
  }
};
