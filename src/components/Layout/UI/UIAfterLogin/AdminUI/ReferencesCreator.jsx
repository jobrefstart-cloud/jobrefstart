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

const ReferencesCreator = () => {
  const [selected, setSelected] = useState([]);

  // Dummy data - all fields added
  const rows = [
    {
      id: 1,
      name: "Deepak Verma",
      company: "Google",
      location: "Bengaluru",
      industry: "Technology",
      role: "Software Engineer",
      sector: "IT Services",
      current: "Current",
      reason: "Worked together on project",
      details: "Strong in React and system design",
      interview: "Challenging but fair",
      duration: "2 years",
    },
    {
      id: 2,
      name: "Amit Sharma",
      company: "Microsoft",
      location: "Hyderabad",
      industry: "Technology",
      role: "Cloud Architect",
      sector: "Cloud",
      current: "Former",
      reason: "Team collaboration",
      details: "Great leadership and problem-solving",
      interview: "Focused on Azure and design patterns",
      duration: "3 years",
    },
    {
      id: 3,
      name: "Riya Singh",
      company: "Amazon",
      location: "Delhi",
      industry: "E-commerce",
      role: "Product Manager",
      sector: "Retail",
      current: "Current",
      reason: "Reporting manager",
      details: "Very organized and analytical",
      interview: "Behavioral + product strategy heavy",
      duration: "1.5 years",
    },
  ];

  // Check/uncheck single row
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Check/uncheck all
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
            <TableCell sx={{ color: "#fff" }}>Person Name</TableCell>
            <TableCell sx={{ color: "#fff" }}>Company Name</TableCell>
            <TableCell sx={{ color: "#fff" }}>Location/City</TableCell>
            <TableCell sx={{ color: "#fff" }}>Industry/Sector</TableCell>
            <TableCell sx={{ color: "#fff" }}>Job Role/Department</TableCell>
            <TableCell sx={{ color: "#fff" }}>Business Sector</TableCell>
            <TableCell sx={{ color: "#fff" }}>Current/Former</TableCell>
            <TableCell sx={{ color: "#fff" }}>Reference Knowing Reason</TableCell>
            <TableCell sx={{ color: "#fff" }}>Reference Details</TableCell>
            <TableCell sx={{ color: "#fff" }}>Interview Experience</TableCell>
            <TableCell sx={{ color: "#fff" }}>Duration of Work</TableCell>
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
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.industry}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.sector}</TableCell>
              <TableCell>{row.current}</TableCell>
              <TableCell>{row.reason}</TableCell>
              <TableCell>{row.details}</TableCell>
              <TableCell>{row.interview}</TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Example action button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
        disabled={selected.length === 0}
        onClick={() => alert("Selected IDs: " + selected.join(", "))}
      >
        Take Action
      </Button>
    </TableContainer>
  );
};

export default ReferencesCreator;
