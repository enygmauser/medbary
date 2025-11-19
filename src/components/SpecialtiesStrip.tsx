import SpecialtyCard from "./SpecialtyCard";
import { specialties } from "../specialtiesData";

export default function SpecialtiesStrip() {
  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Specialties</h2>

        <div
          className="
    flex overflow-x-auto gap-5 pb-4 
    [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:'none']
    [scrollbar-width:'none']
  "
        >
          {" "}
          {specialties.map((item, i) => (
            <div key={i} className="shrink-0">
              <SpecialtyCard title={item.title} Icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
