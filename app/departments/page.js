import HeroSection from "@/components/departments/HeroSection";
import DepartmentIntro from "@/components/departments/DepartmentIntro";
import ScopeOfServices from "@/components/departments/ScopeOfServices";
import MedicalEquipment from "@/components/departments/MedicalEquipment";
import ClinicalDepartments from "@/components/departments/ClinicalDepartments";
import DepartmentCTA from "@/components/departments/DepartmentCTA";

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