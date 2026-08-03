import { Sparkles } from 'lucide-react'

const PlaceholderSection = ({ title, note }) => {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#1E40AF]/10 text-[#1E40AF] mb-5">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1F2937]">{title}</h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          {note || 'This section is ready to receive real content. Structured layouts, cards and data-driven components will be added in the next phase.'}
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-dashed border-slate-200 bg-white h-40 flex items-center justify-center text-slate-300 text-sm">
              Content Placeholder {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlaceholderSection
