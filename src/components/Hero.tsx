import React from "react";
import { Button, Box } from "@mui/material";

export default function Hero() {
  return (
    <section
      id="home"
      role="banner"
      aria-label="Hero"
      className="relative min-h-[90vh] flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1920&auto=format&fit=crop"
          alt="Hospital background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-sky-500/85 mix-blend-multiply -z-10"></div>

      {/* Content */}
      <Box className="container mx-auto px-6 md:px-10 lg:px-14 py-28 text-center max-w-4xl">
        {/* Kicker */}
        <div className="uppercase tracking-[3px] text-sm font-bold opacity-95 border border-white/50 rounded-full px-4 py-1 inline-block">
          HERE AT <span className="opacity-85">“Medbary”</span> WE OFFER
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(2.2rem,5vw+1rem,4.3rem)] font-extrabold leading-[1.08] mt-4 mb-4">
          WORLD-CLASS MEDICAL TREATMENT
        </h1>

        {/* Divider */}
        <div className="w-16 h-1.5 bg-white opacity-60 rounded-md mx-auto my-6"></div>

        {/* Paragraph */}
        <p className="mx-auto max-w-2xl text-lg opacity-95 leading-relaxed">
          Your health — your choice — your hope. Build your personal journey to
          wellness with compassionate care, modern equipment, and a team of
          experienced specialists.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {/* Primary CTA */}
          <Button
            variant="contained"
            href="#contact"
            sx={{
              backgroundColor: "white",
              color: "#0b1324",
              padding: "10px 22px",
              textTransform: "none",
              borderRadius: "12px",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#f1f1f1" },
            }}
          >
            Book an Appointment
          </Button>

          {/* Ghost CTA */}
          <Button
            variant="outlined"
            href="#about"
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.7)",
              padding: "10px 22px",
              textTransform: "none",
              borderRadius: "12px",
              fontWeight: 600,
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Learn More
          </Button>
        </div>
      </Box>
    </section>
  );
}
