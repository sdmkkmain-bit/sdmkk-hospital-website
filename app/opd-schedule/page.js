import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'OPD Schedule — SDMKK Charitable Hospital' }

export default function OPDPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consultant Timings"
        title="OPD Schedule"
        description="View the outpatient department schedule across all specialities. Updated regularly for accurate consultant availability."
      />
      <PlaceholderSection title="Weekly OPD Timings" note="Consultant-wise, department-wise OPD timings and search will be added in the next phase." />
    </>
  )
}
