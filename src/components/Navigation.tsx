interface NavigationProps {
  activeTab: 'home' | 'background' | 'projects'
  setActiveTab: (tab: 'home' | 'background' | 'projects') => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <header className="fixed top-6 z-50 w-full max-w-sm px-4">
      <nav className="flex items-center justify-between p-1 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-full">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold uppercase tracking-wider rounded-full cursor-pointer transition-all duration-150 border ${
            activeTab === 'home' 
              ? 'bg-teal-500/10 text-teal-400 border-teal-500/25' 
              : 'text-slate-400 hover:text-slate-200 border-transparent'
          }`}
        >
          Home
        </button>
        
        <button 
          onClick={() => setActiveTab('background')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full ${
            activeTab === 'background' 
              ? 'bg-teal-500/10 text-teal-400 border-teal-500/25' 
              : 'text-slate-400 hover:text-slate-200 border-transparent'
          }`}
        >
          Background
        </button>
        
        <button 
          onClick={() => setActiveTab('projects')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full ${
            activeTab === 'projects' 
              ? 'bg-teal-500/10 text-teal-400 border-teal-500/25' 
              : 'text-slate-400 hover:text-slate-200 border-transparent'
          }`}
        >
          Projects
        </button>
      </nav>
    </header>
  )
}
