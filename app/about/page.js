import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'About — SDMKK Charitable Hospital' }

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About Shree Dombivali Manav Kalyan Kendra"
        description="A charitable multi-speciality hospital delivering corporate-grade care at charitable rates for the community of Dombivali and beyond."
      />
      <PlaceholderSection
        title="Our Story, Mission & Vision"
        note="Detailed content about the trust, its founding, mission, vision and milestones will appear here in the next phase."
      />
    </>
  )
}
