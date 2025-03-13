import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageSwitchProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ language, onLanguageChange }) => {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-2">
      <Languages className="w-5 h-5 text-[#42f5e3]" />
      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value as 'en' | 'ar')}
        className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-1
                 focus:outline-none focus:ring-2 focus:ring-[#42f5e3] focus:border-transparent"
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};