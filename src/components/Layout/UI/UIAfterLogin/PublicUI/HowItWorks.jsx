import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";

const steps = [
  {
    icon: <PeopleIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "Get References",
    desc: "Engage with trusted connections",
  },
  {
    icon: <ApartmentIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "Explore Culture Reviews",
    desc: "Understand company culture better",
  },
  {
    icon: <DescriptionIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "Participate in Discussions",
    desc: "Join discussions and share your thoughts.",
  },
];

const HowItWorks = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        How It Works
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "#e3f2fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              {step.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "medium", mb: 1 }}>
              {step.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {step.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
