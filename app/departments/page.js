import PageHeader from '@/components/site/PageHeader'
import PlaceholderSection from '@/components/site/PlaceholderSection'

export const metadata = { title: 'Departments — SDMKK Charitable Hospital' }

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Multi-Speciality Care"
        title="Our Departments"
        description="Comprehensive care across a wide range of specialities — delivered by experienced consultants and compassionate teams."
      />
      <PlaceholderSection title="Department Directory" note="A structured listing of departments, specialities and services will be added in the next phase." />
    </>
  )
}
