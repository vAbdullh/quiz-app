
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface CourseQuiz {
  courseTitle: string;
  questions: QuizQuestion[];
}
