import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'Certificates — SDMKK Charitable Hospital' }

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust & Compliance"
        title="Certificates & Accreditations"
        description="Recognitions, registrations and accreditations that reflect our commitment to quality care."
      />
      <PlaceholderSection title="Official Certifications" note="Downloadable certificate previews and details will be added in the next phase." />
    </>
  )
}
