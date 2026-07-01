import { FolderGit2 } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function ProjectsSection() {
  return (
    <div className="animate-fade-in space-y-4">
      
      <div className="block-card p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800/40 pb-2">
          <FolderGit2 className="h-4 w-4 text-teal-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200">Projects</h2>
        </div>

        <div className="space-y-3">
          {projects.map((project, idx) => {
            const CardElement = project.link ? 'a' : 'div'
            const extraProps = project.link 
              ? { href: project.link, target: '_blank', rel: 'noreferrer' } 
              : {}

            return (
              <CardElement
                key={idx}
                {...extraProps}
                className={`block p-4 bg-slate-900/20 border border-slate-800/60 rounded-2xl transition-all duration-200 ${
                  project.link 
                    ? 'hover:border-teal-400/40 hover:shadow-[0_4px_20px_-2px_rgba(45,212,191,0.15)] cursor-pointer' 
                    : 'cursor-default'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <h3 className="text-xs font-bold text-slate-100 flex items-center gap-1">
                    {project.title}
                    {project.link && (
                      <span className="text-[9px] text-teal-400 font-mono font-bold uppercase tracking-wider bg-teal-500/10 px-1.5 py-0.5 rounded-full border border-teal-500/20">
                        Link
                      </span>
                    )}
                  </h3>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-1.5 py-0.5 text-[8px] font-mono bg-slate-900/60 text-slate-400 border border-slate-800/60 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-[11px] text-slate-400 leading-relaxed mt-2 font-normal">
                  {project.description}
                </p>
              </CardElement>
            )
          })}
        </div>
      </div>

    </div>
  )
}
