import Link from 'next/link';

export default function PremiumDashboard() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <h1 className="text-2xl font-extrabold text-blue-700 tracking-tighter">TNPSC<span className="text-gray-900">Master</span></h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold">
            <span className="text-xl">📊</span> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-semibold transition-all">
            <span className="text-xl">📚</span> Study Materials
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-semibold transition-all">
            <span className="text-xl">🏆</span> Leaderboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-semibold transition-all">
            <span className="text-xl">⚙️</span> Settings
          </a>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-4 rounded-xl border border-amber-200">
            <p className="text-xs font-bold text-amber-800 uppercase mb-1">Target 2027</p>
            <p className="text-sm text-amber-900 font-medium mb-3">Group 2 & 2A Focus</p>
            <button className="w-full bg-white text-amber-700 text-sm font-bold py-2 rounded-lg shadow-sm">View Syllabus</button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-10 z-10">
          <div className="flex items-center w-full max-w-md">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">🔍</span>
              <input 
                type="text" 
                placeholder="Search subjects, mocks, syllabus..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex bg-gray-100 p-1 rounded-full">
              <button className="px-3 py-1 bg-white shadow-sm rounded-full text-sm font-bold text-blue-700">EN</button>
              <button className="px-3 py-1 text-gray-500 text-sm font-bold">TA</button>
            </div>
            <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 cursor-pointer">
              <span className="text-blue-700 font-bold">SK</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            
            {/* Welcome Banner */}
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome back, Aspirant! 👋</h2>
              <p className="text-gray-500 font-medium">Continue your preparation. You have 3 mock tests pending this week.</p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-semibold mb-1">Tests Taken</p>
                <p className="text-3xl font-black text-gray-900">12</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-semibold mb-1">Avg. Score</p>
                <p className="text-3xl font-black text-blue-600">78%</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-semibold mb-1">State Rank</p>
                <p className="text-3xl font-black text-gray-900">452</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-semibold mb-1">Current Streak</p>
                <p className="text-3xl font-black text-amber-600">5 Days 🔥</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6">Subject Mocks (Live)</h3>
            
            {/* Subject Cards Grid (Linked to /test) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* General Science Card */}
              <Link href="/test" className="block group">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-300 group-hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🧪</div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">பொது அறிவியல்</h4>
                    <p className="text-gray-500 text-sm mb-4">Physics, Chemistry, Botany & Zoology from 6th-12th Samacheer.</p>
                  </div>
                  <div className="w-full bg-blue-50 text-blue-700 text-center py-2 rounded-lg font-bold text-sm">Take Test 🚀</div>
                </div>
              </Link>

              {/* Geography Card */}
              <Link href="/test" className="block group">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-amber-300 group-hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">இந்தியாவின் புவியியல்</h4>
                    <p className="text-gray-500 text-sm mb-4">Location, Physical features, Monsoon, Rainfall, Weather.</p>
                  </div>
                  <div className="w-full bg-amber-50 text-amber-700 text-center py-2 rounded-lg font-bold text-sm">Take Test 🚀</div>
                </div>
              </Link>

              {/* Indian Polity Card */}
              <Link href="/test" className="block group">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-green-300 group-hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">⚖️</div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">இந்திய அரசியலமைப்பு</h4>
                    <p className="text-gray-500 text-sm mb-4">Constitution of India, Preamble, Fundamental Rights & Duties.</p>
                  </div>
                  <div className="w-full bg-green-50 text-green-700 text-center py-2 rounded-lg font-bold text-sm">Take Test 🚀</div>
                </div>
              </Link>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}