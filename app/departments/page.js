import HeroSection from "@/components/departments/HeroSection";
import DepartmentIntro from "@/components/departments/DepartmentIntro";
import ScopeOfServices from "@/components/departments/ScopeOfServices";
import MedicalEquipment from "@/components/departments/MedicalEquipment";
import ClinicalDepartments from "@/components/departments/ClinicalDepartments";
import DepartmentCTA from "@/components/departments/DepartmentCTA";

export const metadata = {
  title:
    "Medical Departments & Services | Shree Dombivli Manav Kalyan Kendra Charitable Hospital",

  description:
    "Explore the medical departments, healthcare services, clinical facilities and medical equipment available at Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic in Dombivli, Maharashtra.",
};

export default function DepartmentsPage() {
  return (
    <>
      <HeroSection />

      <DepartmentIntro />

      <ScopeOfServices />

      <MedicalEquipment />

      <ClinicalDepartments />

      <DepartmentCTA />
    </>
  );
}