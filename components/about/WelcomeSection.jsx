import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div>
            <Image
              src="/images/hospital-logo.png"
              alt="Hospital Logo"
              width={650}
              height={650}
              className="w-full rounded-3xl shadow-2xl object-contain bg-white p-10"
            />
          </div>

          {/* Right Content */}

          <div>

            <p className="uppercase tracking-[5px] text-blue-700 font-semibold mb-5">
              WELCOME TO SDMKK HOSPITAL
            </p>

            <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-8">
              Delivering Quality Healthcare With Compassion Since 1984
            </h2>

            <p className="text-lg text-slate-600 leading-9 mb-6">
              Shree Dombivali Manav Kalyan Kendra Charitable Hospital is a
              trusted charitable multi-speciality hospital dedicated to
              providing ethical, affordable and quality healthcare for every
              section of the society.
            </p>

            <p className="text-lg text-slate-600 leading-9 mb-6">
              Guided by the philosophy of <strong>"Corporate Care at Charitable Rate"</strong>,
              the hospital combines modern medical technology with experienced
              doctors, compassionate staff and patient-first care.
            </p>

            <p className="text-lg text-slate-600 leading-9">
              Over the decades, the institution has earned the trust of
              thousands of families through excellence in medical treatment,
              transparency and community service.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}