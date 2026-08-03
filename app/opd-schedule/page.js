'use client'

import { useMemo, useState } from 'react'
import {
  Search, Filter, Calendar, Users, X, Check, Minus, Stethoscope, Clock, Building2, GraduationCap
} from 'lucide-react'
import PageHeader from '@/components/site/PageHeader'
import { Input } from '@/components/ui/input'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { DEPARTMENTS, DAYS, DAY_FULL, DOCTORS, isAvailable, formatTiming } from '@/lib/data/opd'
import { cn } from '@/lib/utils'

const DayCell = ({ available }) => (
  <div className="flex items-center justify-center">
    {available ? (
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-green-100 text-[#16A34A] ring-1 ring-green-200">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-slate-100 text-slate-400">
        <Minus className="h-3.5 w-3.5" />
      </span>
    )}
  </div>
)

const DoctorCardMobile = ({ d, day }) => (
  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <h3 className="font-heading font-bold text-[#173F8A] text-lg leading-tight">{d.name}</h3>
        <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#1E40AF] bg-blue-50 rounded-full px-2 py-0.5 font-medium">
          <Building2 className="h-3 w-3" /> {d.department}
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
          <GraduationCap className="h-3.5 w-3.5" /> {d.qualification}
        </div>
      </div>
      <span className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] text-white shadow-md shrink-0">
        <Stethoscope className="h-5 w-5" />
      </span>
    </div>

    <div className="mt-4 grid grid-cols-6 gap-1.5">
      {DAYS.map((day) => (
        <div key={day} className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{day}</span>
          <DayCell available={isAvailable(d, day)} />
        </div>
      ))}
    </div>

    <div className="mt-4 flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 text-sm">
      <div className="inline-flex items-center gap-1.5 text-slate-700">
        <Clock className="h-4 w-4 text-[#1E40AF]" />
        <span className="font-medium">{formatTiming(d, day)}</span>
      </div>
    </div>
  </div>
)

export default function OPDSchedulePage() {
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('all')
  const [day, setDay] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DOCTORS.filter((d) => {
      if (department !== 'all' && d.department !== department) return false
      if (day !== 'all' && !isAvailable(d, day)) return false
      if (q && !d.name.toLowerCase().includes(q) && !d.department.toLowerCase().includes(q) && !d.qualification.toLowerCase().includes(q)) return false
      return true
    })
  }, [query, department, day])

  const clearAll = () => { setQuery(''); setDepartment('all'); setDay('all') }
  const hasFilter = query || department !== 'all' || day !== 'all'

  return (
    <>
      <PageHeader
        eyebrow="Consultant Timings"
        title="OPD Schedule"
        description="View outpatient timings across all specialities. Search by doctor, filter by department or day — updated regularly for accurate availability."
      />

      <div className="container -mt-10 relative z-10">
        {/* Filter bar */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-card p-4 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by doctor name, department or qualification…"
                className="pl-10 h-11 rounded-xl border-slate-200 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-0"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500">
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Department */}
            <div className="md:col-span-3">
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="h-11 rounded-xl border-slate-200">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#1E40AF]" />
                    <SelectValue placeholder="Department" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {DEPARTMENTS.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Day */}
            <div className="md:col-span-3">
              <Select value={day} onValueChange={setDay}>
                <SelectTrigger className="h-11 rounded-xl border-slate-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#1E40AF]" />
                    <SelectValue placeholder="Day" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Days</SelectItem>
                  {DAYS.map((d) => (
                    <SelectItem key={d} value={d}>{DAY_FULL[d]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Users className="h-4 w-4" />
              Showing <span className="font-semibold text-slate-900">{filtered.length}</span> of {DOCTORS.length} consultants
            </div>
            {hasFilter && (
              <Button variant="ghost" size="sm" onClick={clearAll} className="gap-1.5 h-8 text-slate-600 hover:text-[#1E40AF]">
                <X className="h-3.5 w-3.5" /> Clear filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <section className="container mt-8">
        {/* Desktop table */}
        <div className="hidden lg:block rounded-2xl bg-white border border-slate-100 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#173F8A] to-[#1E40AF] text-white">
                  <th className="text-left font-semibold px-5 py-4 whitespace-nowrap">Doctor Name</th>
                  <th className="text-left font-semibold px-4 py-4 whitespace-nowrap">Department</th>
                  <th className="text-left font-semibold px-4 py-4 whitespace-nowrap">Qualification</th>
                  {DAYS.map((d) => (
                    <th key={d} className="font-semibold px-2 py-4 text-center whitespace-nowrap">{d}</th>
                  ))}
                  <th className="text-left font-semibold px-4 py-4 whitespace-nowrap">Timing</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d, idx) => (
                  <tr key={d.id} className={cn(
                    'border-t border-slate-100 hover:bg-blue-50/40 transition',
                    idx % 2 === 1 && 'bg-slate-50/50'
                  )}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] text-white shadow shrink-0">
                          <Stethoscope className="h-4 w-4" />
                        </span>
                        <span className="font-semibold text-slate-900">{d.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1E40AF] bg-blue-50 rounded-full px-2.5 py-1">
                        {d.department}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-600">{d.qualification}</td>
                    {DAYS.map((day) => (
                      <td key={day} className="px-2 py-4"><DayCell available={isAvailable(d, day)} /></td>
                    ))}
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1.5 text-slate-700 whitespace-nowrap">
                        <Clock className="h-3.5 w-3.5 text-[#1E40AF]" /> {formatTiming(d, day)}
                      </span>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={10} className="px-6 py-16 text-center">
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-slate-100 text-slate-400 mb-4">
                        <Search className="h-6 w-6" />
                      </div>
                      <div className="font-heading font-bold text-slate-900">No consultants match your search</div>
                      <div className="text-sm text-slate-500 mt-1">Try adjusting the filters or clearing your search.</div>
                      <Button variant="outline" size="sm" className="mt-4 gap-1.5" onClick={clearAll}>
                        <X className="h-3.5 w-3.5" /> Clear filters
                      </Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500">
            <div className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-green-100 text-[#16A34A]">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              Available
            </div>
            <div className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-slate-100 text-slate-400">
                <Minus className="h-2.5 w-2.5" />
              </span>
              Not available
            </div>
            <span className="ml-auto">Timings may vary. Please call the hospital to confirm before visiting.</span>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4">
          {filtered.map((d) => (
            <DoctorCardMobile key={d.id} d={d} day={day} />
          ))}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-slate-100 text-slate-400 mb-4">
                <Search className="h-6 w-6" />
              </div>
              <div className="font-heading font-bold text-slate-900">No consultants match your search</div>
              <div className="text-sm text-slate-500 mt-1">Try adjusting the filters or clearing your search.</div>
              <Button variant="outline" size="sm" className="mt-4 gap-1.5" onClick={clearAll}>
                <X className="h-3.5 w-3.5" /> Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Info footer */}
      <section className="container mt-10 mb-6">
        <div className="rounded-2xl bg-blue-50/60 border border-blue-100 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white text-[#1E40AF] shadow-soft shrink-0">
            <Clock className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="font-heading font-bold text-slate-900">OPD Timings Notice</div>
            <p className="text-sm text-slate-600 mt-0.5">The schedule above is indicative. Emergency services are available 24×7. Please call the reception to confirm consultant availability on the day of your visit.</p>
          </div>
          <Button className="h-11 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white gap-2 shadow-soft">
            <Users className="h-4 w-4" /> Call Reception
          </Button>
        </div>
      </section>
    </>
  )
}
