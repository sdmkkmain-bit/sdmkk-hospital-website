import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'Bed Availability — SDMKK Charitable Hospital' }

export default function BedAvailabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live Transparency"
        title="Bed Availability"
        description="Real-time bed availability across Hospital, IPF and Weaker Section categories — coming soon."
      />
      <PlaceholderSection title="Live Bed Dashboard" note="A live dashboard for Hospital Beds, IPF Beds and Weaker Section Beds will be added in the next phase." />
    </>
  )
}
