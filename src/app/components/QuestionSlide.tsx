import React from 'react';
import { Question } from '../types';

interface QuestionSlideProps {
  question: Question;
  onAnswer: (value: number) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export const QuestionSlide: React.FC<QuestionSlideProps> = ({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6">
      <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
        <div
          className="bg-[#42f5e3] h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
        />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        {question.text}
      </h2>
      
      <div className="grid gap-4 w-full">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className="w-full p-4 text-right rounded-lg bg-gray-800 hover:bg-gray-700 
                     transition-colors duration-200 text-white border border-gray-700
                     hover:border-[#42f5e3] focus:outline-none focus:ring-2 
                     focus:ring-[#42f5e3] focus:ring-opacity-50"
          >
            {option.text}
          </button>
        ))}
      </div>
      
      <p className="mt-8 text-gray-400">
        {currentQuestion + 1} / {totalQuestions}
      </p>
    </div>
  );
};