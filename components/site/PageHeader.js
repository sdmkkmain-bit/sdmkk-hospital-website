const PageHeader = ({ eyebrow, title, description }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#0EA5E9] text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.15), transparent 40%)'}} />
      <div className="container relative py-20 md:py-28">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium tracking-wide uppercase mb-4 backdrop-blur">
            {eyebrow}
          </div>
        )}
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-balance max-w-3xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">{description}</p>}
      </div>
      <div className="h-3 bg-gradient-to-r from-[#16A34A] via-[#0EA5E9] to-[#1E40AF]" />
    </section>
  )
}

export default PageHeader
