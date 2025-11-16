import React from "react";
import { Box } from "@mui/material";
import ContactInfoPanel from "./ContactInfoPanel";
import AppointmentForm from "./AppointmentForm";
import { clinicInfo, departments } from "../contactData";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-28 bg-gradient-to-br from-slate-50 to-white"
    >
      <Box className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfoPanel info={clinicInfo} />
          <AppointmentForm departments={departments} />
        </div>
      </Box>
    </section>
  );
}
