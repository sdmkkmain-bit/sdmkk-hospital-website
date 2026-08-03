import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'Trustees — SDMKK Charitable Hospital' }

export default function TrusteesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Our Trustees"
        description="Meet the visionaries and community leaders steering our charitable mission."
      />
      <PlaceholderSection title="Board of Trustees" note="Trustee profiles, photographs and messages will be added in the next phase." />
    </>
  )
}
