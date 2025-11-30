import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Hardcoded creds for now
    const ADMIN_EMAIL = "admin@test.com";
    const ADMIN_PASS = "123456";

    if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
      localStorage.setItem("admin-auth", "yes");
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg">
        <CardContent>
          <Typography variant="h5" className="font-bold mb-4 text-center">
            Admin Login
          </Typography>

          {error && (
            <p className="text-red-600 text-sm text-center mb-2">{error}</p>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="mt-4"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
