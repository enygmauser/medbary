import { Box } from "@mui/material";
import DepartmentCard from "./DepartmentCard";
import { departments } from "../departmentsData";
export default function Departments() {
  return (
    <section
      id="departments"
      aria-label="Departments"
      className="py-24 bg-white"
    >
      <Box className="container mx-auto px-6 md:px-10 lg:px-14">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-slate-900 text-center">
          Departments
        </h2>

        <p className="text-slate-600 text-lg text-center mt-2 mb-12">
          A wide range of specialties — all under one roof.
        </p>

        {/* Grid */}
        <div
          className="grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3"
        >
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.title}
              title={dept.title}
              description={dept.description}
            />
          ))}
        </div>
      </Box>
    </section>
  );
}
