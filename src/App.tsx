import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HomeSection from './components/HomeSection'
import BackgroundSection from './components/BackgroundSection'
import ProjectsSection from './components/ProjectsSection'

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'background' | 'projects'>('home')

  // Smooth scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  return (
    <div className="min-h-screen bg-dark-grid text-slate-100 flex flex-col items-center px-4 pb-12 selection:bg-teal-500/30 selection:text-teal-300">
      
      {/* Pill Navigation Peaker */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="w-full max-w-xl mt-24 flex-grow flex flex-col justify-center">
        {activeTab === 'home' && <HomeSection />}
        {activeTab === 'background' && <BackgroundSection />}
        {activeTab === 'projects' && <ProjectsSection />}
      </main>
      
    </div>
  )
}
