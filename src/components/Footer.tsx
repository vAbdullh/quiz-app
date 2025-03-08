
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 border-t border-gray-800 bg-quiz-dark mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          Crafted with 🤍 by{" "}
          <a
            href="https://abdullh.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-quiz-primary transition-colors"
          >
            abdullh.tech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
