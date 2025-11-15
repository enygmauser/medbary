import { Box } from "@mui/material";

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-20">
      <Box className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              About Medbary
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We combine evidence-informed practice with modern diagnostics to
              deliver high-quality, person-centred care. From routine checkups
              to complex procedures, our multidisciplinary teams collaborate to
              achieve outstanding outcomes.
            </p>

            <ul className="text-slate-600 space-y-3">
              <li className="flex items-start gap-2">
                • Comprehensive health assessments
              </li>
              <li className="flex items-start gap-2">
                • Electronic medical records & seamless coordination
              </li>
              <li className="flex items-start gap-2">
                • Patient-first, culturally sensitive approach
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661770160867-2c3a5092ec3b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Clinicians reviewing patient charts in a modern clinic"
              className="w-full rounded-xl shadow-[0_10px_30px_rgba(2,6,23,0.12)] object-cover"
            />
          </div>
        </div>
      </Box>
    </section>
  );
}
