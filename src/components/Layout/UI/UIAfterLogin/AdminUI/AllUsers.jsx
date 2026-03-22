import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";

const AllUsers = () => {
  const [selected, setSelected] = useState([]);

  // Dummy data
  const rows = [
    {
      id: 1,
      name: "Deepak Verma",
      email: "deepak@example.com",
      phone: "9876543210",
      password: "********",
    },
    {
      id: 2,
      name: "Amit Sharma",
      email: "amit@example.com",
      phone: "9876501234",
      password: "********",
    },
    {
      id: 3,
      name: "Riya Singh",
      email: "riya@example.com",
      phone: "9123456789",
      password: "********",
    },
  ];

  // Select single row
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Select all rows
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(rows.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#1976d2" }}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected.length === rows.length}
                indeterminate={
                  selected.length > 0 && selected.length < rows.length
                }
                onChange={handleSelectAll}
                sx={{ color: "#fff" }}
              />
            </TableCell>
            <TableCell sx={{ color: "#fff" }}>Name</TableCell>
            <TableCell sx={{ color: "#fff" }}>Email</TableCell>
            <TableCell sx={{ color: "#fff" }}>Phone</TableCell>
            <TableCell sx={{ color: "#fff" }}>Password</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selected.includes(row.id)}
                  onChange={() => handleSelect(row.id)}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
        disabled={selected.length === 0}
        onClick={() => alert("Selected User IDs: " + selected.join(", "))}
      >
        Take Action
      </Button>
    </TableContainer>
  );
};

export default AllUsers;
