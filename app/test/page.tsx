"use client";

import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  
  // Pudhu features-kaga state
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute (60 seconds) set pannirukkom testing-kaga
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Database fetch
  useEffect(() => {
    async function fetchQuestions() {
      const { data, error } = await supabase.from('questions').select('*');
      if (data) setQuestions(data);
      if (error) console.error("Error fetching:", error);
    }
    fetchQuestions();
  }, []);

  // Timer Logic
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Time 0 aanathum auto-submit aagidum
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  // Format Time (e.g., 01:00, 00:59)
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleOptionClick = (questionId: string, optionKey: string) => {
    // Submit aanathukku appuram click panna mudiyathu
    if (isSubmitted) return;
    
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionKey
    });
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    
    let calculatedScore = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct_option) {
        calculatedScore += 1;
      }
    });
    
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section (Timer Added) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-4 z-10">
          <h1 className="text-2xl font-extrabold text-blue-800">TNPSC Mock Test</h1>
          
          <div className={`text-2xl font-black px-6 py-2 rounded-lg border-2 ${timeLeft <= 10 && !isSubmitted ? 'text-red-600 border-red-200 bg-red-50 animate-pulse' : 'text-gray-800 border-gray-200 bg-gray-50'}`}>
            ⏱️ {formatTime(timeLeft)}
          </div>

          <Link href="/">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-300">
              Exit Test
            </button>
          </Link>
        </div>

        {/* Score Board (Submit aana apram kaatum) */}
        {isSubmitted && (
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 mb-8 text-center animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-green-800 mb-2">Test Completed! 🎉</h2>
            <p className="text-xl text-green-700 font-bold">
              Your Score: <span className="text-4xl bg-green-200 px-4 py-1 rounded-xl">{score} / {questions.length}</span>
            </p>
          </div>
        )}

        {/* Questions Loop */}
        {questions.length > 0 ? (
          questions.map((q, index) => {
            const selectedOption = selectedAnswers[q.id];
            
            const options = [
              { key: 'A', value: q.option_a },
              { key: 'B', value: q.option_b },
              { key: 'C', value: q.option_c },
              { key: 'D', value: q.option_d },
            ];

            return (
              <div key={q.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">Kelvi {index + 1}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{q.question_text_tamil}</h2>
                <p className="text-gray-500 mb-6 font-medium text-lg">{q.question_text_english}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {options.map((opt) => {
                    if (!opt.value) return null; 
                    
                    let buttonClass = "text-left border-2 p-4 rounded-xl font-bold transition-all ";
                    
                    // Style changing logic based on Submission
                    if (!isSubmitted) {
                      if (selectedOption === opt.key) {
                        buttonClass += "border-blue-500 bg-blue-50 text-blue-700"; // User select panna normal blue
                      } else {
                        buttonClass += "border-gray-200 text-gray-700 hover:border-blue-500 hover:bg-blue-50 cursor-pointer";
                      }
                    } else {
                      // Result Time!
                      if (opt.key === q.correct_option) {
                        buttonClass += "border-green-500 bg-green-50 text-green-700"; // Exact correct answer green
                      } else if (selectedOption === opt.key) {
                        buttonClass += "border-red-500 bg-red-50 text-red-700"; // User thappa select panna red
                      } else {
                        buttonClass += "border-gray-200 text-gray-600 bg-gray-50 cursor-not-allowed"; // Matha options dull
                      }
                    }

                    return (
                      <button 
                        key={opt.key}
                        onClick={() => handleOptionClick(q.id, opt.key)}
                        disabled={isSubmitted}
                        className={buttonClass}
                      >
                        {opt.key}) {opt.value}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Section (Test mudinja apram kaatum) */}
                {isSubmitted && q.explanation && (
                  <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-xl animate-fade-in-up">
                    <h3 className="font-bold text-blue-800 mb-2">விளக்கம் (Explanation):</h3>
                    <p className="text-blue-900">{q.explanation}</p>
                  </div>
                )}

              </div>
            );
          })
        ) : (
          <div className="text-center p-10"><p>Loading questions...</p></div>
        )}

        {/* Submit Button */}
        {questions.length > 0 && !isSubmitted && (
          <div className="text-center mt-8">
            <button 
              onClick={handleSubmit}
              className="bg-amber-700 text-white px-10 py-4 rounded-full font-extrabold text-lg hover:bg-amber-800 hover:shadow-lg transition-all"
            >
              Submit Test ✅
            </button>
          </div>
        )}

      </div>
    </div>
  );
}