import React, { useState } from "react";
import { TextField, MenuItem, Button } from "@mui/material";
import InputRow from "./InputRow";

export default function AppointmentForm({ departments }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    dept: "",
    msg: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", dept: "", msg: "" });
  };

  return (
    <div
      className="
        backdrop-blur-xl 
        bg-white/60 
        border border-slate-200/50 
        rounded-3xl 
        p-8 
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      "
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
        Book an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputRow>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
              },
            }}
          />

          <TextField
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px" },
            }}
          />
        </InputRow>

        <InputRow>
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px" },
            }}
          />

          <TextField
            select
            label="Department"
            name="dept"
            value={form.dept}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px" },
            }}
          >
            {departments.map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </TextField>
        </InputRow>

        <TextField
          label="Message"
          name="msg"
          value={form.msg}
          onChange={handleChange}
          multiline
          minRows={4}
          fullWidth
          placeholder="Share any symptoms, preferred dates, etc."
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": { borderRadius: "14px" },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 1,
            background: "linear-gradient(135deg, #0f766e 0%, #0ea5e9 100%)",
            color: "white",
            fontWeight: 600,
            padding: "12px",
            borderRadius: "14px",
            textTransform: "none",
            boxShadow: "0 4px 14px rgba(14,165,233,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #115e59 0%, #0284c7 100%)",
              boxShadow: "0 6px 18px rgba(14,165,233,0.35)",
            },
          }}
        >
          Send Request
        </Button>
      </form>
    </div>
  );
}
