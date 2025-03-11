
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { List } from "lucide-react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Only show the button if not already on the home/index page
  const showSelectCoursesButton = !location.pathname.endsWith('/');
  
  return (
    <header className="w-full py-4 bg-quiz-dark border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Quiz App</h1>
        
        {showSelectCoursesButton && (
          <Button 
            variant="outline" 
            className="text-white border-quiz-primary hover:bg-quiz-primary/20"
            onClick={() => navigate('/')}
          >
            <List className="mr-2 h-4 w-4" />
            Select Courses
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
