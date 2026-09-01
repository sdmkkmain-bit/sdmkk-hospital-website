import PageHeader from '@/components/site/PageHeader'

export const metadata = {
  title: 'Certificates & Accreditations | SDMKK Charitable Hospital Dombivli',
  description:
    'View official certificates, accreditations and registrations of Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic in Dombivli, Maharashtra.',
}

const certifications = [
  {
    title: 'NABH Accreditation Certificate',
    type: 'Quality Accreditation',
    description:
      'Official accreditation recognising the hospital’s commitment to quality healthcare and patient safety.',
    file: '/documents/certifications/nabh-certificate.pdf',
  },
  {
    title: '80G Registration / Form C',
    type: 'Charitable Registration',
    description:
      'Official document relating to the hospital’s charitable registration and eligibility under Section 80G.',
    file: '/documents/certifications/form-80g.pdf',
  },
  {
    title: 'CSR Certificate',
    type: 'Corporate Social Responsibility',
    description:
      'Official CSR document supporting the institution’s participation in responsible community and healthcare initiatives.',
    file: '/documents/certifications/CSR.pdf',
  },
]

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 2v6h6M8 13h8M8 17h6"
      />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5h5v5M19 5l-9 9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
      />
    </svg>
  )
}

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust & Compliance"
        title="Certificates & Accreditations"
        description="Recognitions, registrations and accreditations that reflect our commitment to quality care."
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1E40AF]">
              <DocumentIcon />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1E40AF]">
              Official Documents
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Certifications & Recognitions
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              View the official certificates and documents that reflect our
              commitment to quality, transparency and responsible healthcare.
            </p>
          </div>

          {/* Certification cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {certifications.map((certificate) => (
              <article
                key={certificate.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#16A34A]" />

                <div className="flex flex-1 flex-col p-7">

                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1E40AF] transition-colors duration-300 group-hover:bg-[#1E40AF] group-hover:text-white">
                      <DocumentIcon />
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#16A34A]">
                      Official
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E40AF]">
                      {certificate.type}
                    </p>

                    <h3 className="mt-2 font-heading text-xl font-bold leading-tight text-slate-900">
                      {certificate.title}
                    </h3>

                    <div className="mt-4 h-px w-full bg-slate-100" />

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-7">
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E40AF] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#16358F] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      View Document
                      <ExternalLinkIcon />
                    </a>

                    <p className="mt-3 text-center text-xs text-slate-400">
                      Opens official PDF in a new tab
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom trust message */}
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-blue-100 bg-white px-6 py-6 text-center shadow-sm sm:px-10">
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
              <span className="text-sm font-semibold text-[#1E40AF]">
                Transparency & Trust
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

              <span className="text-sm text-slate-600">
                Official documents are made available for public reference.
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}