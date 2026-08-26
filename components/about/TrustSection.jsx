import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-blue-700 text-sm font-semibold">
          OUR LEADERSHIP
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
          Guided by Dedicated Leadership
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
          The continued growth of Shree Dombivli Manav Kalyan Kendra Charitable
          Hospital is guided by a dedicated Board of Trustees committed to
          strengthening charitable healthcare, expanding medical services and
          serving the community with integrity, compassion and responsibility.
        </p>

        <div className="mt-12">
          <Link
            href="/trustees"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Meet Our Trustees
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}