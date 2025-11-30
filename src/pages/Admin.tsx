import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Pagination,
  Typography,
} from "@mui/material";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyData = {
  data: {
    contactMessages: [
      {
        id: "1",
        name: "Raza",
        email: "test@test.com",
        message: "Hello there!",
        createdAt: "2025-11-27T14:05:10.842299+00:00",
      },
      {
        id: "2",
        name: "Bad Boy",
        email: "test@test.com",
        message: "Hello there!",
        createdAt: "2025-11-27T14:32:31.885954+00:00",
      },
      {
        id: "3",
        name: "Raza",
        email: "raza@test.com",
        message: "I need an appointment.",
        createdAt: "2025-11-27T19:47:44.437748+00:00",
      },
      {
        id: "4",
        name: "TitanDum123",
        email: "raza26296@gmail.com",
        message: "12232",
        createdAt: "2025-11-27T20:13:04.161494+00:00",
      },
      {
        id: "5",
        name: "Raza",
        email: "raza@gmail.com",
        message: "23r4",
        createdAt: "2025-11-27T20:13:22.287165+00:00",
      },
      {
        id: "6",
        name: "Shivnash",
        email: "razaaliwork26296@gmail.com",
        message: "123",
        createdAt: "2025-11-30T11:11:56.960676+00:00",
      },
    ],
  },
};

export default function Admin() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const rowsPerPage = 3;

  const filtered = useMemo(() => {
    const list = [...dummyData.data.contactMessages].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    if (!search.trim()) return list;

    return list.filter(
      (msg) =>
        msg.name.toLowerCase().includes(search.toLowerCase()) ||
        msg.email.toLowerCase().includes(search.toLowerCase()) ||
        msg.message.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  function logout() {
    localStorage.removeItem("admin-auth");
    navigate("/admin-login");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4" className="font-bold text-gray-800">
          Admin Dashboard
        </Typography>

        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Search */}
      <TextField
        label="Search messages..."
        variant="outlined"
        fullWidth
        className="mb-6"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* Table */}
      <TableContainer component={Paper} className="rounded-lg shadow">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-50">
              <TableCell>
                <strong>ID</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Message</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              paginated.map((msg) => (
                <TableRow key={msg.id} hover>
                  <TableCell>{msg.id}</TableCell>
                  <TableCell>{msg.name}</TableCell>
                  <TableCell>{msg.email}</TableCell>
                  <TableCell>{msg.message}</TableCell>
                  <TableCell>
                    {new Date(msg.createdAt).toLocaleString("en-IN")}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          count={Math.ceil(filtered.length / rowsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </div>
    </div>
  );
}
