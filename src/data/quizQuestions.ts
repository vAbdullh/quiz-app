export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is software engineering?",
    options: ["A branch of computer science focusing on algorithms", "An engineering discipline concerned with all aspects of software production", "The process of writing computer programs", "The study of computer hardware architecture"],
    correctAnswer: "An engineering discipline concerned with all aspects of software production"
  },
  {
    id: 2,
    question: "Which of the following is NOT a fundamental software engineering activity?",
    options: ["Software specification", "Software development", "Software validation", "Software marketing"],
    correctAnswer: "Software marketing"
  },
  {
    id: 3,
    question: "What are the essential attributes of good software?",
    options: ["Maintainability, dependability & security, efficiency & acceptability", "Speed and performance", "Low cost and quick development", "User-friendly interface only"],
    correctAnswer: "Maintainability, dependability & security, efficiency & acceptability"
  },
  {
    id: 4,
    question: "Which statement about software costs is true?",
    options: ["Software development costs are always higher than maintenance costs", "For systems with long life, maintenance costs may exceed development costs", "Hardware costs are always higher than software costs", "Software costs represent a small fraction of GNP in developed countries"],
    correctAnswer: "For systems with long life, maintenance costs may exceed development costs"
  },
  {
    id: 5,
    question: "Who owns the specification for customized software products?",
    options: ["The software developer", "The customer", "The project manager", "The quality assurance team"],
    correctAnswer: "The customer"
  },
  {
    id: 6,
    question: "Which of the following is an ethical responsibility of software engineers?",
    options: ["Maximizing profit for their employer", "Ensuring software is developed as quickly as possible", "Respecting confidentiality of clients", "Using proprietary software without proper licensing"],
    correctAnswer: "Respecting confidentiality of clients"
  },
  {
    id: 7,
    question: "What type of system is an insulin pump control system?",
    options: ["Embedded control system", "Batch processing system", "Interactive transaction-based application", "Entertainment system"],
    correctAnswer: "Embedded control system"
  },
  {
    id: 8,
    question: "Which of the following is NOT a software process activity?",
    options: ["Software specification", "Software development", "Software validation", "Software installation"],
    correctAnswer: "Software installation"
  },
  {
    id: 9,
    question: "What is a key challenge facing software engineering?",
    options: ["Coping with increasing diversity", "Reducing delivery times", "Developing trustworthy software", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 10,
    question: "Which of the following is true about web-based software engineering?",
    options: ["Web services allow application functionality to be accessed over the web", "Web-based systems should be developed with complete specifications upfront", "User interfaces for web systems are not constrained by web browsers", "Web-based systems are simple and not distributed"],
    correctAnswer: "Web services allow application functionality to be accessed over the web"
  },
  {
    id: 11,
    question: "What does software specification involve?",
    options: ["Defining what the software should do and its constraints", "Writing the actual code for the software", "Testing the software for bugs", "Marketing the software to potential customers"],
    correctAnswer: "Defining what the software should do and its constraints"
  },
  {
    id: 12,
    question: "Which of the following is a characteristic of dependable software?",
    options: ["Reliability, security, and safety", "High memory usage", "Frequent crashes", "Incompatibility with other systems"],
    correctAnswer: "Reliability, security, and safety"
  },
  {
    id: 13,
    question: "What is the primary difference between generic and customized software products?",
    options: ["Generic software is developed for specific customers while customized software is sold to anyone", "Generic software is always free while customized software requires payment", "Generic software is developed for a general market while customized software meets specific customer needs", "There is no significant difference between them"],
    correctAnswer: "Generic software is developed for a general market while customized software meets specific customer needs"
  },
  {
    id: 14,
    question: "Which of the following is NOT one of the fundamental software engineering principles?",
    options: ["Develop using a managed process", "Reuse existing software when possible", "Ignore performance considerations", "Understand and manage software requirements"],
    correctAnswer: "Ignore performance considerations"
  },
  {
    id: 15,
    question: "What is the main focus of system engineering compared to software engineering?",
    options: ["System engineering focuses only on hardware development", "System engineering is concerned with all aspects of computer-based systems including hardware, software, and process engineering", "System engineering is a subset of software engineering", "System engineering deals exclusively with network infrastructure"],
    correctAnswer: "System engineering is concerned with all aspects of computer-based systems including hardware, software, and process engineering"
  }
];
