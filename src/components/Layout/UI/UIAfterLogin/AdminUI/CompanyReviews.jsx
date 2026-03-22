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
  Rating,
} from "@mui/material";

const CompanyReviews = () => {
  const [selected, setSelected] = useState([]);

  // Dummy data
  const rows = [
    {
      id: 1,
      company: "Google",
      status: "Current Employee",
      employmentStatus: "Full-time",
      jobTitle: "Software Engineer",
      headline: "Great place to work",
      pros: "Amazing culture, supportive team",
      cons: "Long working hours",
      remark: "Would love to stay long-term",
      management: 5,
      workLife: 3,
      salary: 4,
      overall: 5,
      recommend: true,
    },
    {
      id: 2,
      company: "Amazon",
      status: "Former Employee",
      employmentStatus: "Internship",
      jobTitle: "Data Analyst Intern",
      headline: "Good learning experience",
      pros: "Exposure to big data, fast-paced",
      cons: "Work pressure is very high",
      remark: "Learned a lot but stressful",
      management: 4,
      workLife: 2,
      salary: 3,
      overall: 3,
      recommend: false,
    },
  ];

  // Select one
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Select all
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
            <TableCell sx={{ color: "#fff" }}>Company Name</TableCell>
            <TableCell sx={{ color: "#fff" }}>Employee Status</TableCell>
            <TableCell sx={{ color: "#fff" }}>Employment Type</TableCell>
            <TableCell sx={{ color: "#fff" }}>Job Title</TableCell>
            <TableCell sx={{ color: "#fff" }}>Review Headline</TableCell>
            <TableCell sx={{ color: "#fff" }}>Pros</TableCell>
            <TableCell sx={{ color: "#fff" }}>Cons</TableCell>
            <TableCell sx={{ color: "#fff" }}>Personal Remark</TableCell>
            <TableCell sx={{ color: "#fff" }}>Management</TableCell>
            <TableCell sx={{ color: "#fff" }}>Work-Life Balance</TableCell>
            <TableCell sx={{ color: "#fff" }}>Salary/Benefits</TableCell>
            <TableCell sx={{ color: "#fff" }}>Overall Rating</TableCell>
            <TableCell sx={{ color: "#fff" }}>Recommend</TableCell>
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
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.employmentStatus}</TableCell>
              <TableCell>{row.jobTitle}</TableCell>
              <TableCell>{row.headline}</TableCell>
              <TableCell>{row.pros}</TableCell>
              <TableCell>{row.cons}</TableCell>
              <TableCell>{row.remark}</TableCell>
              <TableCell>
                <Rating value={row.management} readOnly size="small" />
              </TableCell>
              <TableCell>
                <Rating value={row.workLife} readOnly size="small" />
              </TableCell>
              <TableCell>
                <Rating value={row.salary} readOnly size="small" />
              </TableCell>
              <TableCell>
                <Rating value={row.overall} readOnly size="small" />
              </TableCell>
              <TableCell>{row.recommend ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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

export default CompanyReviews;
