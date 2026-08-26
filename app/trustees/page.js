import Image from 'next/image'
import {
  Award,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react'

export const metadata = {
  title: 'Board of Trustees — SDMKK Charitable Hospital',
  description:
    'Meet the Board of Trustees of Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic.',
}

const trustees = [
  {
    name: 'Dr. Chandresh H. Pasad',
    role: 'Managing Trustee',
    image: '/images/trustees/Dr. Chandresh H. Pasad - Managing  Trustee.png',
    featured: true,
  },
  {
    name: 'Mr. Ramesh K. Mistry',
    role: 'Vyavasthapak Trustee',
    image: '/images/trustees/Mr. Ramesh K. Mistry - Vyavasthapak Trustee.png',
    description:
      <>
      A successful businessman in Dombivli, known for his long-standing association with <strong className="font-semibold text-slate-700">
      Ganesh Cold Drinks
    </strong>{" "}
    and his commitment to community service.
      </>

  },
  {
    name: 'Mr. Hiralal Mavji Vohra',
    role: 'Vyavasthapak Trustee',
    image: '/images/trustees/Mr. Hiralal Mavji Vohra - Vyavasthapak Trustee.png',
    description:
    <>
      Continuing the legacy of the founding trustee, has successfully carried forward the Vohra family business, 
      <strong className="font-semibold text-slate-700"> Kumkum </strong> 
       with a proud presence in Dombivli for over 60 years.
      </>
  },
  {
    name: 'Mr. Mahendra Visanaji Dedhia',
    role: 'Secretary Trustee',
    image: '/images/trustees/Mr. Mahendra Visanaji Dedhia - Secretary Trustee.png',
    description:
    <>
      Continuing the legacy of the founding trustee, while successfully carrying forward the
      <strong className="font-semibold text-slate-700"> Rajgharana </strong>
      business legacy in Dombivli for over 25 years.
      </>
  },
  {
    name: 'Dr. Kaushik Raghavji Gada',
    role: 'Secretary Trustee',
    image: '/images/trustees/Dr. Kaushik Raghavji Gada - Secretary Trustee.png',
    description:
    <>
      A respected <strong className="font-semibold text-slate-700">
       medical professional </strong>
       with around 40 years of experience, bringing expertise knowledge and dedication to healthcare and community service.
       </>
  },
  {
    name: 'Dr. Hitendra Ramji Dedhia',
    role: 'Treasurer Trustee',
    image: '/images/trustees/Dr. Hitendra Ramji Dedhia - Treasurer Trustee.png',
    description:
    <>
      A seasoned <strong className="font-semibold text-slate-700">
      medical professional </strong>
      with nearly 40 years of experience, bringing rich expertise and a deep commitment to patient care and community service.
      </>
  },
  {
    name: 'Mr. Ramnik Ravji Dedhia',
    role: 'Treasurer Trustee',
    image: '/images/trustees/Mr. Ramnik Ravji Dedhia - Treasurer Trustee.png',
    description:
    <>
      Continuing the legacy of the <strong className="font-semibold text-slate-700">
      founding trustee </strong>, 
      carrying forward a tradition of service, responsibility and commitment to the institution and its charitable mission.
      </>
  },
]

export default function TrusteesPage() {
  const managingTrustee = trustees[0]
  const boardMembers = trustees.slice(1)

  return (
    <main className="bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F7F9FD] px-5 py-16 sm:py-20 lg:py-24">

        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1E40AF] shadow-sm">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-[#1E40AF] sm:text-sm">
            Leadership & Governance
          </p>

          <h1 className="mt-3 font-heading text-4xl font-black tracking-[-0.045em] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Board of Trustees
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Guided by dedicated trustees, our charitable hospital continues
            its mission of compassionate, accessible and dignified healthcare
            for the community.
          </p>

        </div>
      </section>


      {/* =====================================================
          MANAGING TRUSTEE
      ===================================================== */}
      <section className="px-5 py-12 sm:py-16 lg:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-200" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1E40AF]">
              Leadership
            </p>

            <span className="h-px w-10 bg-blue-200" />
          </div>


          <article className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_20px_60px_rgba(15,35,92,0.10)]">

            <div className="grid lg:grid-cols-[1.05fr_1fr]">

              {/* PHOTO */}
<div className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-[#EEF3F8] sm:min-h-[500px] lg:min-h-[540px]">

  {/* Soft background glow */}
  <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

  <Image
    src={managingTrustee.image}
    alt={managingTrustee.name}
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-contain object-center px-10 pt-6 sm:px-14 lg:px-16"
  />

</div>


              {/* DETAILS */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF]">
                  <Award className="h-6 w-6" />
                </div>

          <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.03em] text-[#0F172A] sm:text-4xl">
  {managingTrustee.name}
</h2>

<div className="mt-2 flex flex-wrap items-center gap-3">
  <span className="text-sm font-medium text-[#1E40AF]">
    Managing Trustee
  </span>

  <span className="h-1 w-1 rounded-full bg-slate-300" />

  <span className="text-sm font-medium text-[#16A34A]">
    Community Welfare & Service
  </span>
</div>

<div className="mt-6 h-px w-full bg-slate-100" />
                <p className="mt-7 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Dr. Chandresh Pasad is a respected trustee of <strong className="font-semibold text-slate-700">
                  Shree Dombivali Manav Kalyan kendra Charitable Hospital </strong>, 
                  dedicated to <strong className="font-semibold text-slate-700">advancing accessible and compassionate healthcare for all sections of society </strong>. 
                  With a deep commitment to community welfare, he has played a pivotal role in strengthening the hospital's mission of <strong className="font-semibold text-slate-700">
                     providing quality medical services at affordable costs </strong>. His vision, leadership, and unwavering dedication continue to inspire initiatives that promote health, dignity, and well-being within the community.



                </p>

                <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-500">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#1E40AF]">
                    <ShieldCheck className="h-4 w-4" />
                  </span>

                  <span>Board of Trustees</span>
                </div>

              </div>

            </div>

          </article>

        </div>
      </section>


      {/* =====================================================
          BOARD MEMBERS
      ===================================================== */}
      <section className="bg-[#F7F9FD] px-5 py-14 sm:py-18 lg:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1E40AF] sm:text-sm">
              Our Board
            </p>

            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.03em] text-[#0F172A] sm:text-4xl">
              Trustees serving the community
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A committed group of community leaders working together to
              support the hospital&apos;s charitable purpose.
            </p>

          </div>


          {/* TWO COLUMN BOARD */}
          <div className="grid gap-7 md:grid-cols-2 lg:gap-8">

            {boardMembers.map((trustee) => (
              <article
                key={trustee.name}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,35,92,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,35,92,0.11)]"
              >

                {/* PHOTO AREA */}
<div className="relative flex aspect-[4/3] items-end justify-center overflow-hidden bg-[#EEF3F8]">

  <Image
    src={trustee.image}
    alt={trustee.name}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-contain object-bottom px-3 pt-4 transition-transform duration-500 group-hover:scale-[1.015] sm:px-5"
  />

</div>
{/* INFORMATION */}
<div className="p-7 sm:p-8">

  {/* ROLE */}
  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1E40AF]">
    {trustee.role}
  </p>

  {/* NAME */}
  <h3 className="mt-2 font-heading text-2xl font-black tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
    {trustee.name}
  </h3>

  {/* BLUE + GREEN RESPONSIBILITY LINE */}
  <div className="mt-2">
  <span className="text-sm font-medium text-[#16A34A]">
    Community Welfare & Service
  </span>
</div>

  {/* DIVIDER */}
  <div className="mt-5 h-px w-full bg-slate-100" />

  {/* DESCRIPTION */}
  <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
    {trustee.description}
  </p>

  {/* BOARD OF TRUSTEES */}
  <div className="mt-7 flex items-center gap-3 text-sm font-medium text-slate-500">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#1E40AF]">
      <ShieldCheck className="h-4 w-4" />
    </span>

    <span>Board of Trustees</span>
  </div>

</div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CLOSING MESSAGE
      ===================================================== */}
      <section className="px-5 py-14 sm:py-18 lg:py-20">

        <div className="mx-auto max-w-4xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#102A68] px-7 py-11 text-center shadow-[0_20px_50px_rgba(15,35,92,0.14)] sm:px-12 sm:py-14">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-blue-400/10" />

            <div className="relative">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-heading text-2xl font-bold text-white sm:text-3xl">
                Leadership with purpose. Service with compassion.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Together, our trustees continue to strengthen the hospital&apos;s
                commitment to accessible and compassionate healthcare for the
                community.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}