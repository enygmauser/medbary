import EmergencyCard from "./EmergencyCard";
import FeatureCard from "./FeatureCard";
import { Box } from "@mui/material";

export default function InfoStrip() {
  return (
    <section id="info" aria-label="Quick access" className="py-16">
      <Box className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Emergency Card */}
          <EmergencyCard />

          {/* Featured Article */}
          <FeatureCard
            title="Modern Diagnostic Methods That Improve Patient Outcomes"
            description="Discover how advanced imaging, digital records, and AI-assisted tools help clinicians improve precision and speed in patient care."
            image="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </Box>
    </section>
  );
}
