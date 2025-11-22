import React from "react";
import { Box } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LocalPhone,
  Email,
  LocationOn,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <Box className="container mx-auto px-6 md:px-10 lg:px-14">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Column 1: Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Medbary logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-semibold tracking-wide text-white">
                MedBary
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Access world-class medical specialists and elite treatment
              destinations — with seamless, white-glove coordination.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              {[Facebook, Instagram, Twitter, YouTube].map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-slate-300 hover:text-white cursor-pointer transition"
                />
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-white transition cursor-pointer">
                About
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Departments
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Testimonials
              </li>
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Departments
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white transition cursor-pointer">
                Cardiology
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Orthopedics
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Neurology
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Women’s Health
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Pediatrics
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Diagnostics
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-3 items-center">
                <LocalPhone className="text-slate-300" />
                <span>‪+1-514-662-2189‬</span>
              </li>
              <li className="flex gap-3 items-center">
                <Email className="text-slate-300" />
                <span>contact@medbary.ca</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Medbary — All Rights Reserved.
        </div>
      </Box>
    </footer>
  );
}
