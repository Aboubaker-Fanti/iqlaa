import React from 'react';
import { Result } from '../types';
import { Skull, Heart, Info } from 'lucide-react';

interface ResultsProps {
  result: Result;
  onRestart: () => void;
  language: 'en' | 'ar';
}

export const Results: React.FC<ResultsProps> = ({ result, onRestart, language }) => {

  
  const getLevelText = (level: string): string => {
    if (language === 'ar') {
      switch (level) {
        case 'low': return 'منخفض';
        case 'moderate': return 'متوسط';
        case 'high': return 'مرتفع';
        case 'severe': return 'شديد';
        default: return level;
      }
    }
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
        <div className="flex items-center justify-center mb-6">
          {result.level === 'severe' && <Skull className="w-16 h-16 text-red-500" />}
          {result.level === 'moderate' && <Info className="w-16 h-16 text-yellow-500" />}
          {result.level === 'low' && <Heart className="w-16 h-16 text-green-500" />}
        </div>

        <h2 className="text-3xl font-bold text-center text-white mb-4">
          {language === 'en' 
            ? `Your Addiction Level: ${getLevelText(result.level)}`
            : `مستوى الإدمان لديك: ${getLevelText(result.level)}`}
        </h2>
        
        <div className="mb-6">
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-[#42f5e3] h-4 rounded-full transition-all duration-1000"
              style={{ width: `${(result.score / result.maxScore) * 100}%` }}
            />
          </div>
          <p className="text-center text-gray-400 mt-2">
            {language === 'en' 
              ? `Score: ${result.score} / ${result.maxScore}`
              : `النتيجة: ${result.score} / ${result.maxScore}`}
          </p>
        </div>

        <p className="text-white text-lg mb-6">{result.message}</p>

        <div className="bg-gray-900 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-[#42f5e3] mb-4">
            {language === 'en' ? 'Health Risks:' : 'المخاطر الصحية:'}
          </h3>
          <ul className="space-y-3">
            {result.advice.map((tip, index) => (
              <li key={index} className="flex items-start text-white">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onRestart}
          className="w-full py-3 px-6 bg-[#42f5e3] text-gray-900 rounded-lg
                   font-semibold hover:bg-[#3ad4c4] transition-colors duration-200"
        >
          {language === 'en' ? 'Take the Test Again' : 'خذ الاختبار مرة أخرى'}
        </button>
      </div>
    </div>
  );
};