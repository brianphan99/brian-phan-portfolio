import { GraduationCap, Briefcase, BookOpen, ChevronRight } from 'lucide-react'
import { education, experiences } from '../data/portfolioData'

export default function BackgroundSection() {
  return (
    <div className="animate-fade-in space-y-6">
      
      {/* Education Block */}
      <div className="block-card p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800/40 pb-2">
          <GraduationCap className="h-4 w-4 text-teal-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200">Education</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-100">{education.degree}</h3>
              <p className="text-xs text-teal-400">{education.school}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] block text-slate-500 font-mono">{education.period}</span>
              <span className="inline-block mt-1 px-1.5 py-0.5 text-[10px] font-bold font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded">
                WAM: {education.wam}
              </span>
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <BookOpen className="w-3 h-3" /> Relevant Coursework & Grades:
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
              {education.courses.map((course, idx) => (
                <div key={idx} className="flex justify-between p-1.5 bg-slate-900/30 border border-slate-800/40 rounded-lg">
                  <span className="truncate pr-1">{course.name}</span>
                  <span className="font-mono text-teal-400 font-bold">{course.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Block */}
      <div className="block-card p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800/40 pb-2">
          <Briefcase className="h-4 w-4 text-teal-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200">Work Experience</h2>
        </div>

        <div className="space-y-5">
          {experiences.map((job, idx) => (
            <div key={idx} className={`space-y-2 ${idx > 0 ? 'border-t border-slate-800/40 pt-3' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-100">{job.title}</h3>
                  <p className="text-xs text-teal-400">{job.company}</p>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{job.period}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {job.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-1">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
