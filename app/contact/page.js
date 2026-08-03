import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'Contact — SDMKK Charitable Hospital' }

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="For appointments, emergencies or general queries — we are here for you."
      />
      <PlaceholderSection title="Reach Out To Us" note="Contact details, working hours and a query form will be added in the next phase." />
    </>
  )
}
