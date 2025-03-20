"use client"

import React, { useState, useEffect } from 'react';
import { QuestionSlide } from './components/QuestionSlide';
import { Results } from './components/Results';
import { LanguageSwitch } from './components/LanguageSwitch';
import { allQuestions } from './data/questions';
import { allQuestionsAr } from './data/questionsAr';
import { Question, Result } from './types';
import { Cigarette } from 'lucide-react';
import { getIqlaaData, updateIqlaaData } from "../../pages/api/filestore";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
const [data, setData] = useState<{ visites: number; start_pool: number; finish_pool: number }>({
  visites: 0,
  start_pool: 0,
  finish_pool: 0,
});

useEffect(() => {
  const fetchData = async () => {
    const result = await getIqlaaData();
    if (result)
      setData(result);
    if (!localStorage.getItem("key")){
      localStorage.setItem("key","done");
      if (resutl)
        await updateIqlaaData({ visites: result.visites + 1});
     //  fetch('/api/increment-visit', { method: 'POST' });

    }
    };

    const questionSet = language === 'en' ? allQuestions : allQuestionsAr;
    const shuffled = [...questionSet].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 20));
    fetchData();
  }, [language]);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    } else {
      setShowResults(true);
      increment_finished();
    }
  };

  const increment_finished = async () => {
    await updateIqlaaData({finish_pool: data.finish_pool + 1 });
        // fetch('/api/increment-finish-poll', { method: 'POST' });

  };
  const calculateResult = (): Result => {

    const score = answers.reduce((sum, curr) => sum + curr, 0);
    const maxScore = questions.reduce((sum, q) => 
      sum + Math.max(...q.options.map(o => o.value)), 0);
    const percentage = (score / maxScore) * 100;

    let level: 'low' | 'moderate' | 'high' | 'severe';
    if (percentage < 25) level = 'low';
    else if (percentage < 50) level = 'moderate';
    else if (percentage < 75) level = 'high';
    else level = 'severe';
    return {
      score,
      maxScore,
      level,
      message: getResultMessage(level, language),
      advice: getHealthAdvice(level, language)
    };
  };

  const getResultMessage = (level: string, lang: 'en' | 'ar'): string => {
    if (lang === 'ar') {
      switch (level) {
        case 'low':
          return "أخبار جيدة! يبدو أن اعتمادك على النيكوتين منخفض نسبياً. هذا هو الوقت المثالي للإقلاع بينما الأمر أسهل!";
        case 'moderate':
          return "تظهر علامات الاعتماد المتوسط على النيكوتين. مع الدعم المناسب والتصميم، يمكنك التحرر!";
        case 'high':
          return "اعتمادك على النيكوتين كبير. لا تقلق - مع الدعم والموارد المناسبة، نجح الكثيرون في هذا المستوى!";
        default:
          return "أنت تعاني من اعتماد شديد على النيكوتين. رغم أنه تحدٍ، نجح الآلاف في الإقلاع من هذا المستوى. يمكنك ذلك أيضاً!";
      }
    }

    switch (level) {
      case 'low':
        return "Good news! Your nicotine dependence appears to be relatively low. This is the perfect time to quit while it's easier!";
      case 'moderate':
        return "You're showing signs of moderate nicotine dependence. With the right support and determination, you can break free!";
      case 'high':
        return "Your nicotine dependence is significant. Don't worry - with proper support and resources, many people at this level successfully quit!";
      default:
        return "You're experiencing severe nicotine dependence. While challenging, thousands have succeeded in quitting from this level. You can too!";
    }
  };

  const getHealthAdvice = (level: string, lang: 'en' | 'ar'): string[] => {
    const baseAdviceEn = [
      "Smoking damages nearly every organ in your body",
      "Cigarettes contain over 7,000 chemicals, many of which are toxic",
      "Smoking is a leading cause of cancer and heart disease",
      "Second-hand smoke affects your loved ones' health"
    ];

    const baseAdviceAr = [
      "التدخين يضر تقريباً كل عضو في جسمك",
      "تحتوي السجائر على أكثر من 7,000 مادة كيميائية، الكثير منها سام",
      "التدخين سبب رئيسي للسرطان وأمراض القلب",
      "التدخين السلبي يؤثر على صحة أحبائك"
    ];

    const severeAdviceEn = [
      ...baseAdviceEn,
      "Your risk of serious health issues is significantly elevated",
      "Consider speaking with a healthcare provider about cessation options",
      "Nicotine replacement therapy might help manage withdrawal"
    ];

    const severeAdviceAr = [
      ...baseAdviceAr,
      "خطر إصابتك بمشاكل صحية خطيرة مرتفع بشكل كبير",
      "فكر في التحدث مع مقدم رعاية صحية حول خيارات الإقلاع",
      "قد يساعد العلاج البديل للنيكوتين في إدارة الانسحاب"
    ];

    if (level === 'severe' || level === 'high') {
      return lang === 'en' ? severeAdviceEn : severeAdviceAr;
    }

    return lang === 'en' ? baseAdviceEn : baseAdviceAr;
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResults(false);
    setIsStarted(false);
    const questionSet = language === 'en' ? allQuestions : allQuestionsAr;
    const shuffled = [...questionSet].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 20));
  };

  const handleLanguageChange = (newLang: 'en' | 'ar') => {
    setLanguage(newLang);
    if (isStarted) {
      handleRestart();
    }
  };

  const start_pool = async () => {
    await updateIqlaaData({start_pool: data.start_pool + 1 });

    // console.log(`Starting pool`);
    setIsStarted(true);
    // fetch('/api/increment-start-poll', { method: 'POST' });

  };

  if (!isStarted) {
    return (


      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <LanguageSwitch language={language} onLanguageChange={handleLanguageChange} />
        <div className="max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <Cigarette className="w-16 h-16 text-[#42f5e3]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'Welcome to Iqlaa' : 'مرحباً بك في إقلاع'}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {language === 'en' 
              ? 'Take our comprehensive assessment to understand your smoking habits and get personalized insights'
              : 'خذ تقييمنا الشامل لفهم عاداتك في التدخين والحصول على رؤى شخصية'}
          </p>
          <button
            onClick={start_pool}
            className="px-8 py-4 bg-[#42f5e3] text-gray-900 rounded-lg
                     font-semibold hover:bg-[#3ad4c4] transition-colors duration-200"
          >
            {language === 'en' ? 'Start Assessment' : 'ابدأ التقييم'}
          </button>
        </div>

      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-900 flex items-center justify-center p-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <LanguageSwitch language={language} onLanguageChange={handleLanguageChange} />
      {!showResults ? (
        questions.length > 0 && (
          <QuestionSlide
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
        )
      ) : (
        <Results result={calculateResult()} onRestart={handleRestart} language={language} />
      )}
    </div>
  );
}

export default App;
