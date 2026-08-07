"use client"

import Link from 'next/link'
import { useRef } from 'react'
import {
  Activity,
  Check,
  ClipboardCheck,
  HeartPulse,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Thermometer,
  Users,
} from 'lucide-react'
import PageHeader from '@/components/site/PageHeader'

const scopeServices = [
  {
    id: 'radiology',
    title: 'Radiology',
    icon: Activity,
    description: 'Advanced imaging services for accurate diagnostics and timely clinical decision-making.',
    features: ['Digital X-Ray', 'Ultrasound', 'Colour Doppler', '2D Echo'],
  },
  {
    id: 'pathology',
    title: 'Pathology',
    icon: ClipboardCheck,
    description: 'Modern laboratory testing to support diagnosis, treatment and preventive care.',
    features: ['Blood Tests', 'Urine Tests', 'Biochemistry', 'Clinical Pathology'],
  },
  {
    id: 'ecg',
    title: 'ECG',
    icon: HeartPulse,
    description: 'Cardiac rhythm assessment and heart health screening for prompt clinical review.',
    features: ['Resting ECG', 'Cardiac Monitoring', 'ECG Interpretation'],
  },
  {
    id: 'eeg',
    title: 'EEG',
    icon: Sparkles,
    description: 'Non-invasive neurological monitoring for brain wave assessment and diagnostic clarity.',
    features: ['Electroencephalography', 'Neurophysiology Review'],
  },
  {
    id: 'emg',
    title: 'EMG',
    icon: ShieldCheck,
    description: 'Electrodiagnostic evaluation of nerve and muscle function to guide rehabilitation and treatment.',
    features: ['Electromyography', 'Nerve Conduction Study'],
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    icon: LifeBuoy,
    description: 'Rehabilitation care that supports recovery, mobility and patient comfort through guided therapy.',
    features: ['Mobility Training', 'Pain Management', 'Postoperative Rehabilitation'],
  },
  {
    id: 'vaccination',
    title: 'Vaccination Centre',
    icon: Thermometer,
    description: 'Preventive immunisation services for community health and ongoing disease prevention.',
    features: ['Child Immunisations', 'Adult Vaccines', 'Preventive Counselling'],
  },
  {
    id: 'audiometry',
    title: 'Audiometry',
    icon: Users,
    description: 'Hearing evaluation and auditory screening to support ear, nose and throat care.',
    features: ['Hearing Assessment', 'Audiology Screening', 'Follow-Up Care'],
  },
  {
    id: 'pft',
    title: 'Pulmonary Function Test (PFT)',
    icon: Stethoscope,
    description: 'Lung function assessment to help diagnose respiratory conditions and guide treatment.',
    features: ['Spirometry', 'Breath Analysis', 'Respiratory Monitoring'],
  },
]

const equipmentGroups = [
  {
    category: 'Radiology',
    items: ['Demo Ultrasound System', 'Demo Digital X-Ray System'],
  },
  {
    category: 'Laboratory',
    items: ['Demo Hematology Analyzer', 'Demo Biochemistry Analyzer'],
  },
  {
    category: 'Cardiology',
    items: ['Demo ECG Machine', 'Demo 2D Echo System'],
  },
]

const departmentCards = [
  {
    name: 'General Medicine',
    icon: Stethoscope,
    description: 'Diagnosis and treatment of acute and chronic illnesses with compassionate, patient-centred care.',
    services: ['General Consultation', 'Fever Clinic', 'Diabetes Care', 'Hypertension Management', 'Preventive Healthcare'],
  },
  {
    name: 'General Surgery',
    icon: Activity,
    description: 'Surgical evaluation and perioperative care delivered with careful coordination and clinical oversight.',
    services: ['Surgical Consultation', 'Minor Procedures', 'Wound Care', 'Postoperative Follow-Up', 'Referral Coordination'],
  },
  {
    name: 'Orthopaedics',
    icon: ShieldCheck,
    description: 'Bone and joint care for injuries, arthritis and mobility issues with rehabilitation support.',
    services: ['Fracture Management', 'Arthritis Care', 'Joint Pain Treatment', 'Sports Injury Consultation', 'Rehabilitation Support'],
  },
  {
    name: 'Obstetrics & Gynaecology',
    icon: HeartPulse,
    description: 'Women’s health services for antenatal care, gynaecology consultations and reproductive wellbeing.',
    services: ['Antenatal Care', 'Gynaecology Consultation', 'Menstrual Health', 'Family Planning Advice', 'Pregnancy Follow-Up'],
  },
  {
    name: 'Paediatrics',
    icon: Users,
    description: 'Child health care and developmental monitoring provided with family-centred support.',
    services: ['Child Consultation', 'Vaccination Review', 'Growth Monitoring', 'Acute Illness Care', 'Nutritional Advice'],
  },
  {
    name: 'ENT (Ear, Nose & Throat)',
    icon: Sparkles,
    description: 'Assessment and treatment of ear, nose and throat concerns with hearing and airway care.',
    services: ['Hearing Assessment', 'Sinus Care', 'Throat Consultation', 'Ear Infection Management', 'Voice and Swallowing Review'],
  },
  {
    name: 'Ophthalmology',
    icon: Thermometer,
    description: 'Eye care for vision concerns, screenings and referrals to support healthy sight.',
    services: ['Vision Screening', 'Eye Examination', 'Glaucoma Check', 'Dry Eye Support', 'Referral Guidance'],
  },
  {
    name: 'Cardiology',
    icon: HeartPulse,
    description: 'Heart care services for cardiac evaluation, monitoring and preventive advice.',
    services: ['ECG', 'Heart Consultation', 'Cardiac Evaluation', 'Preventive Cardiac Care', 'Risk Assessment'],
  },
  {
    name: 'Neurology',
    icon: Stethoscope,
    description: 'Evaluation of neurological concerns to support diagnosis and ongoing management.',
    services: ['Headache Assessment', 'Nerve Function Review', 'Seizure Consultation', 'Memory Screening', 'Follow-Up Care'],
  },
  {
    name: 'Pulmonology',
    icon: ShieldCheck,
    description: 'Respiratory care for lung and breathing concerns with diagnostic support and treatment planning.',
    services: ['Breathing Assessment', 'Asthma Care', 'COPD Review', 'Respiratory Monitoring', 'Smoking Cessation Advice'],
  },
  {
    name: 'Dermatology',
    icon: Activity,
    description: 'Skin care for rashes, infections and chronic conditions with practical treatment guidance.',
    services: ['Skin Consultation', 'Acne Care', 'Eczema Treatment', 'Infection Management', 'Allergy Review'],
  },
  {
    name: 'Psychiatry',
    icon: Users,
    description: 'Mental health support through consultation, counselling and care planning.',
    services: ['Emotional Health Review', 'Counselling Support', 'Mood Assessment', 'Stress Management', 'Follow-Up Care'],
  },
  {
    name: 'Physiotherapy',
    icon: LifeBuoy,
    description: 'Rehabilitation and therapeutic movement support to help patients recover strength and function.',
    services: ['Pain Management', 'Exercise Therapy', 'Postoperative Rehabilitation', 'Mobility Training', 'Injury Recovery'],
  },
  {
    name: 'Dental Care',
    icon: Stethoscope,
    description: 'Oral health services for dental check-ups, treatment and patient education.',
    services: ['Dental Consultation', 'Oral Screening', 'Toothache Care', 'Gum Health Support', 'Preventive Advice'],
  },
  {
    name: 'Radiology',
    icon: Activity,
    description: 'Imaging services to help diagnose conditions with X-ray, ultrasound and other scans.',
    services: ['Digital X-Ray', 'Ultrasound', 'Colour Doppler', '2D Echo', 'Imaging Guidance'],
  },
  {
    name: 'Pathology',
    icon: ClipboardCheck,
    description: 'Laboratory testing services for clinical diagnosis, disease monitoring and preventive screening.',
    services: ['Blood Tests', 'Urine Analysis', 'Clinical Biochemistry', 'Hematology', 'Routine Laboratory Tests'],
  },
  {
    name: 'ECG',
    icon: HeartPulse,
    description: 'Cardiac rhythm testing to review heart activity and support clinical diagnosis.',
    services: ['Resting ECG', 'Heart Rate Monitoring', 'ECG Interpretation', 'Preoperative Screening', 'Follow-Up Review'],
  },
  {
    name: 'EEG',
    icon: Sparkles,
    description: 'Brain wave monitoring for neurological evaluation and specialist referral planning.',
    services: ['Electroencephalography', 'Seizure Screening', 'Neurological Assessment', 'Follow-Up Consultation'],
  },
  {
    name: 'EMG',
    icon: ShieldCheck,
    description: 'Nerve and muscle testing to help diagnose neuromuscular conditions and support rehabilitation.',
    services: ['Electromyography', 'Nerve Conduction Study', 'Muscle Response Testing', 'Diagnostic Review'],
  },
  {
    name: 'Audiometry',
    icon: Users,
    description: 'Hearing assessment and auditory screening to support ear health and communication needs.',
    services: ['Hearing Assessment', 'Audiology Screening', 'Hearing Loss Review', 'Follow-Up Advice'],
  },
  {
    name: 'Pulmonary Function Test (PFT)',
    icon: Stethoscope,
    description: 'Lung function testing to assess respiratory health and support treatment planning.',
    services: ['Spirometry', 'Breath Analysis', 'Respiratory Monitoring', 'Pulmonary Screening'],
  },
  {
    name: 'Vaccination Centre',
    icon: Thermometer,
    description: 'Immunisation services for preventive care and community health protection.',
    services: ['Child Immunisations', 'Adult Vaccines', 'Booster Doses', 'Vaccine Advice'],
  },
  {
    name: 'Preventive Health Check-ups',
    icon: ClipboardCheck,
    description: 'Health check packages designed to identify risks early and support ongoing wellness.',
    services: ['Preventive Screening', 'Vital Signs Review', 'Lifestyle Advice', 'Risk Assessment'],
  },
  {
    name: 'Corporate Health Check-ups',
    icon: Activity,
    description: 'Workplace health packages to support employee wellbeing and preventive medical review.',
    services: ['Employee Screening', 'Workplace Health Review', 'Fitness Assessment', 'Referral Advice'],
  },
  {
    name: 'Health Screening Packages',
    icon: HeartPulse,
    description: 'Structured screening bundles to assess health status and recommend follow-up care.',
    services: ['Basic Health Screening', 'Diabetes Check', 'Blood Pressure Review', 'Cholesterol Evaluation'],
  },
  {
    name: 'Nutrition & Diet Counselling',
    icon: Users,
    description: 'Diet and nutrition guidance to support recovery, chronic condition management and healthy living.',
    services: ['Diet Review', 'Meal Planning', 'Weight Management', 'Nutrition Advice'],
  },
  {
    name: 'Rehabilitation Services',
    icon: LifeBuoy,
    description: 'Supportive rehabilitation care focused on recovery, mobility and functional improvement.',
    services: ['Therapy Planning', 'Rehabilitation Exercises', 'Recovery Support', 'Functional Assessment'],
  },
]

export default function DepartmentsPage() {
  const serviceRefs = useRef({})

  const scrollToService = (serviceId) => {
    const target = serviceRefs.current[serviceId]
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <main className="bg-[#F8FAFC] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-5 py-16 md:px-8 lg:px-10 lg:py-20">
          <PageHeader
            eyebrow="Speciality Services"
            title="Medical Departments & Diagnostic Services"
            description="Our hospital combines experienced medical professionals, modern diagnostic services and compassionate patient care to provide comprehensive healthcare under one roof."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-[#EFF6FF] p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-semibold">NABH-quality care</p>
              <h2 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">Comprehensive care, diagnostics and support in one premium hospital experience.</h2>
              <p className="mt-5 max-w-2xl text-slate-600 leading-8">Our multi-speciality departments work with modern diagnostic services to deliver safe, effective and compassionate treatment for every patient.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Experienced specialists',
                  'Integrated diagnostics',
                  'Patient-first coordination',
                  'Modern clinical support',
                ].map((item) => (
                  <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-semibold">Department highlights</p>
                  <h3 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">Focused clinical pathways for every patient.</h3>
                  <p className="mt-5 text-slate-600 leading-8">A premium combination of specialist care and diagnostic support ensures patients receive coordinated treatment every step of the way.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Diagnostic support', value: 'Reliable service' },
                    { label: 'Care coordination', value: 'Holistic planning' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-2 text-sm text-slate-600">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-semibold">Scope of Services</p>
          <h2 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">We provide comprehensive diagnostic, preventive and rehabilitation services.</h2>
          <p className="mt-4 text-slate-600 leading-8">Our medical technology and experienced healthcare professionals work together to deliver reliable services across diagnostics, prevention and recovery.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {scopeServices.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                ref={(element) => {
                  if (element) {
                    serviceRefs.current[service.id] = element
                  }
                }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-hover"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EFF6FF] text-[#2563EB] shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-semibold text-[#2563EB]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-5 py-16 md:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-semibold">Advanced Medical Technology</p>
            <h2 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">Our diagnostic and clinical services are supported by reliable medical technology.</h2>
            <p className="mt-4 text-slate-600 leading-8">Designed to enhance diagnostic accuracy, patient safety and quality healthcare across departments.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {equipmentGroups.map((group) => (
              <div key={group.category} className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-hover">
                <p className="text-sm uppercase tracking-[0.28em] text-[#2563EB] font-semibold">Demo Equipment</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{group.category}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm italic text-slate-600">Equipment information will be updated with official hospital data.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-semibold">Medical Departments</p>
          <h2 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">Departments delivering coordinated clinical care for every patient.</h2>
          <p className="mt-4 text-slate-600 leading-8">Our medical departments are organised to provide specialist diagnosis, treatment and patient-centred coordination in a premium setting.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {departmentCards.map((department) => {
            const Icon = department.icon
            return (
              <div key={department.name} className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-hover">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EFF6FF] text-[#2563EB] shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-6 flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">{department.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{department.description}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7">
                    {department.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-semibold text-[#2563EB]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-5 py-16 md:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-semibold">Integrated Patient Care</p>
            <h2 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">Departments working together to deliver coordinated, patient-centred healthcare.</h2>
            <p className="mt-6 text-slate-600 leading-8">Our clinical teams collaborate across specialties so every patient receives seamless care, clear communication and consistent support through diagnosis, treatment and recovery.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-[#EFF6FF] p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-semibold">Need Expert Medical Care?</p>
              <h2 className="mt-4 text-3xl font-heading font-bold text-slate-900 sm:text-4xl">Need Expert Medical Care?</h2>
              <p className="mt-5 max-w-2xl text-slate-600 leading-8">Connect with our hospital for specialist consultations, diagnostics and compassionate patient support in Dombivali.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link href="/opd-schedule" className="inline-flex items-center justify-center rounded-full border border-transparent bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-700">
                View OPD Schedule
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:border-slate-300">
                Contact Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
