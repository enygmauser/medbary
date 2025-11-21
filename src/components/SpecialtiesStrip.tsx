import SpecialtyCard from "./SpecialtyCard";
import { specialties } from "../specialtiesData";

export default function SpecialtiesStrip() {
  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Specialties</h2>
        <div
          className="
    grid gap-6 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5 
    xl:grid-cols-6
  "
        >
          {specialties.map((item, i) => (
            <SpecialtyCard key={i} title={item.title} Icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
