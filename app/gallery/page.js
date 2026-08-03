import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'Gallery — SDMKK Charitable Hospital' }

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities & Moments"
        title="Gallery"
        description="A visual walk-through of our hospital, facilities, events and community initiatives."
      />
      <PlaceholderSection title="Photo Gallery" note="Categorised photo galleries and lightbox will be added in the next phase." />
    </>
  )
}
