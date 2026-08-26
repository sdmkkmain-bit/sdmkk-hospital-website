import Image from "next/image";
import { Quote } from "lucide-react";

export default function ManagingTrustee() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold">
            LEADERSHIP
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            A Message from Our Managing Trustee
          </h2>

          <div className="w-24 h-1 bg-blue-700 rounded-full mx-auto mt-6"></div>

        </div>

        {/* Main Card */}

        <div className="bg-white border border-slate-200 rounded-[32px] shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-5">

            {/* LEFT */}

            <div className="lg:col-span-2 bg-slate-50 p-10 flex flex-col items-center justify-center">

              <div className="relative w-full">

                <Image
                  src="/images/managing-trustee.jpg"
                  alt="Dr. Chandresh H. Pasad"
                  width={500}
                  height={650}
                  className="rounded-3xl shadow-xl object-cover w-full"
                />

              </div>

              <div className="text-center mt-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  Dr. Chandresh H. Pasad
                </h3>

                <p className="mt-2 text-blue-700 font-semibold">
                  Managing Trustee
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-3 p-10 lg:p-14">

              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-8">

                <Quote className="w-8 h-8 text-blue-700" />

              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Dear Patients, Families and Well-Wishers,
              </h3>

              <div className="space-y-7 text-slate-600 leading-9 text-lg">

                <p>
                  At <strong>Shree Dombivli Manav Kalyan Kendra Charitable Hospital</strong>,
                  our commitment has always been to serve society through
                  compassionate, ethical and affordable healthcare.
                </p>

                <p>
                  We believe that quality medical care should be available to
                  every individual with dignity and respect, irrespective of
                  financial background, caste, religion or gender. Healthcare is
                  a fundamental human need, and every patient deserves equal
                  care and attention.
                </p>

                <p>
                  Our vision is to create a healthcare institution where modern
                  medical technology, experienced specialists and advanced
                  treatment facilities are available under one roof while
                  continuing our commitment to charitable service.
                </p>
                                <p>
                  We want families in Dombivli and surrounding areas to have
                  access to high-quality healthcare close to home, without
                  having to compromise on quality or travel long distances for
                  advanced medical care.
                </p>

                <p>
                  This journey is possible because of the trust placed in us by
                  our patients, our doctors, our dedicated staff, our
                  supporters and the community we proudly serve. Together, we
                  will continue to strengthen this institution while remaining
                  true to the values on which it was founded.
                </p>

              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">

                <p className="text-slate-700 font-medium">
                  With warm regards,
                </p>

                {/* Add signature image here later if available */}

                <h4 className="mt-8 text-2xl font-bold text-slate-900">
                  Dr. Chandresh H. Pasad
                </h4>

                <p className="text-blue-700 font-semibold mt-2">
                  Managing Trustee
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}