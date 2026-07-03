import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-10">
        <div className="text-2xl font-extraboldtnpsc-mocks text-blue-700 tracking-tighter">
          TNPSC<span className="text-gray-800">Mocks</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-bold transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-bold transition-colors">Study Materials</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-bold transition-colors">Previous Papers</a>
        </div>
        
        <Link href="/test">
          <button className="bg-blue-50 text-blue-700 border-2 border-blue-200 px-6 py-2 rounded-full font-extrabold hover:bg-blue-100 transition-all hidden md:block">
            Student Login
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce">
          🏆 Target 2027 Cycle - Tamil Medium Batch
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight max-w-4xl">
          Master TNPSC Exams with <br className="hidden md:block" /> 
          <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Absolute Confidence
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-medium leading-relaxed">
          Experience real exam environment with our smart timer, detailed Samacheer Kalvi book explanations, and instant state-level rank analysis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
         <Link 
            href="/test" 
            className="bg-amber-700 text-white text-lg px-8 py-4 rounded-full font-extrabold hover:bg-amber-800 hover:shadow-[0_10px_20px_rgba(180,83,9,0.3)] hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto inline-block"
          >
            Start Free Mock Test 🚀
          </Link>
          <button className="bg-white text-gray-700 border-2 border-gray-300 text-lg px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all w-full sm:w-auto">
            View Syllabus Roadmap
          </button>
        </div>
        
        {/* Features Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-left">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Mobile Optimized</h3>
            <p className="text-gray-500">Study anywhere, anytime. Our UI is designed to feel like a native app on your phone.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Smart Timer</h3>
            <p className="text-gray-500">Practice time management with our strict countdown engine mirroring the real exam.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Detailed Explanations</h3>
            <p className="text-gray-500">Every answer comes with line-by-line references directly from the school textbooks.</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}