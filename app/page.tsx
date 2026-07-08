"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function PremiumDashboard() {
  // State to track which exam category is selected
  const [activeExam, setActiveExam] = useState('Group 2');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-blue-800 tracking-tighter">TNPSC</span>
            <span className="text-2xl font-black text-amber-500 tracking-tighter">Master</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-bold text-gray-500 hover:text-blue-600">Study Materials</button>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center font-bold shadow-md cursor-pointer border-2 border-white outline outline-2 outline-gray-100">
              SK
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome & Stats Section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome back, Aspirant! 🚀</h1>
            <p className="text-gray-500 font-medium text-lg">Select your target exam and start your preparation.</p>
          </div>
        </div>

        {/* Exam Category Tabs (Group 1, Group 2, Group 4) */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-2 hide-scrollbar">
          {['Group 1', 'Group 2 & 2A', 'Group 4 (VAO)'].map((exam) => (
            <button
              key={exam}
              onClick={() => setActiveExam(exam)}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                activeExam === exam 
                  ? 'bg-blue-800 text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {exam} Category
            </button>
          ))}
        </div>

        <div className="animate-fade-in-up">
          {/* Section 1: Full Mock Tests */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <span>🏆</span> {activeExam} - Full Syllabus Mock Tests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">LIVE</div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Grand Mock Test 1</h3>
                <p className="text-amber-700 text-sm font-medium mb-6">200 Questions • 3 Hours • State Rank</p>
                <Link href="/test">
                  <button className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-amber-700 transition-all">
                    Start Full Exam
                  </button>
                </Link>
              </div>

            </div>
          </div>

          {/* Section 2: Subject-Wise Practice */}
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <span>📚</span> Subject-wise Practice Batch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Tamil Card */}
              <Link href="/test" className="block group">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all h-full">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">📖</div>
                  <h3 className="font-bold text-gray-900 mb-1">பொது தமிழ்</h3>
                  <p className="text-gray-500 text-xs mb-4">Ilakkanam, Ilakkiyam, Tamil Scholars</p>
                  <div className="text-blue-700 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Practice Now <span>→</span>
                  </div>
                </div>
              </Link>

              {/* Science Card */}
              <Link href="/test" className="block group">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:green-400 transition-all h-full">
                  <div className="h-12 w-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4">🧪</div>
                  <h3 className="font-bold text-gray-900 mb-1">பொது அறிவியல்</h3>
                  <p className="text-gray-500 text-xs mb-4">Physics, Chemistry, Biology</p>
                  <div className="text-green-700 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Practice Now <span>→</span>
                  </div>
                </div>
              </Link>

              {/* Polity Card */}
              <Link href="/test" className="block group">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-400 transition-all h-full">
                  <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4">⚖️</div>
                  <h3 className="font-bold text-gray-900 mb-1">இந்திய அரசியலமைப்பு</h3>
                  <p className="text-gray-500 text-xs mb-4">Constitution, Articles, Amendments</p>
                  <div className="text-purple-700 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Practice Now <span>→</span>
                  </div>
                </div>
              </Link>

              {/* History Card */}
              <Link href="/test" className="block group">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-400 transition-all h-full">
                  <div className="h-12 w-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4">🏛️</div>
                  <h3 className="font-bold text-gray-900 mb-1">வரலாறு (INM)</h3>
                  <p className="text-gray-500 text-xs mb-4">Indus Valley to Freedom Struggle</p>
                  <div className="text-orange-700 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Practice Now <span>→</span>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}