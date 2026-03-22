import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Rating,
  Button,
  Card,
  Checkbox,
} from "@mui/material";
import { useStatesContext } from '../../../../../utils/Common/AppStates';
const ReviewPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    rating: 0,
    ratingWorkLife: 0,
    ratingSalary: 0,
    ratingManagement: 0,
    employmentType: "current",
    employmentStatus: "",
    jobTitle: "",
    headline: "",
    pros: "",
    cons: "",
    personalRemark: ""
  });

    const  {allStates}  = useStatesContext();
      const {setShowForm} = allStates

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Thank you for your review!");
  };

  return (
    <>
      <Box sx={{ p: { xs: 4, md: 14 }, maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={4}>
          {/* Left Side - Form */}
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Rate a company
              </Typography>
                <Button
                              variant="contained"
                              onClick={() => setShowForm((prev) => !prev)}
                            >
                              Back to Explore
                            </Button>
              
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                It only takes a minute! And your anonymous review will help other
                job seekers.
              </Typography>
             
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Community Promise
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Thank you for contributing to the community. Your opinion will help others make decisions about jobs and companies.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mt: 1, fontWeight: "bold", color: "primary.main" }}
                  >
                    We value authenticity and respect. Please ensure your review follows these simple principles:
                  </Typography>

                  <ul style={{ marginTop: "8px", paddingLeft: "20px", color: "#555" }}>
                    <li>Use positive and respectful language ✨</li>
                    <li>Avoid offensive or discriminatory remarks 🚫</li>
                    <li>Do not disclose confidential/company secrets 🔒</li>
                  </ul>
                  <Box>

                    🙏 Thank You !

                    Your voice strengthens our community and guides countless others in their career journey.
                  </Box>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="I Accept"
                    sx={{ mt: 2 }}
                  />
                </Card>
              </Grid>

              {/* Company Name */}
              <TextField
                fullWidth
                label="Company name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                sx={{ mb: 3, mt: 5 }}
              />




              {/* Current or Former Employee */}
              <Typography variant="subtitle1">Are you a current or former employee?</Typography>
              <RadioGroup
                row
                value={formData.employmentType}
                onChange={(e) => handleChange("employmentType", e.target.value)}
                sx={{ mb: 3 }}
              >
                <FormControlLabel value="current" control={<Radio />} label="Current employee" />
                <FormControlLabel value="former" control={<Radio />} label="Former employee" />
              </RadioGroup>

              {/* Employment Status */}
              <TextField
                select
                fullWidth
                label="Employment status"
                value={formData.employmentStatus}
                onChange={(e) => handleChange("employmentStatus", e.target.value)}
                sx={{ mb: 3 }}
              >
                <MenuItem value="full-time">Full-time</MenuItem>
                <MenuItem value="part-time">Part-time</MenuItem>
                <MenuItem value="intern">Intern</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
              </TextField>

              {/* Job Title */}
              <TextField
                fullWidth
                label="Job title"
                value={formData.jobTitle}
                onChange={(e) => handleChange("jobTitle", e.target.value)}
                sx={{ mb: 3 }}
              />

              {/* Review Headline */}
              <TextField
                fullWidth
                label="Review headline"
                value={formData.headline}
                onChange={(e) => handleChange("headline", e.target.value)}
                sx={{ mb: 3 }}
              />

              {/* Pros */}
              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Pros"
                helperText="5 word minimum"
                value={formData.pros}
                onChange={(e) => handleChange("pros", e.target.value)}
                sx={{ mb: 3 }}
              />

              {/* Cons */}
              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Cons"
                helperText="5 word minimum"
                value={formData.cons}
                onChange={(e) => handleChange("cons", e.target.value)}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Personal Remark"
                helperText="5 word minimum"
                value={formData.personalRemark}
                onChange={(e) => handleChange("personalRemark", e.target.value)}
                sx={{ mb: 3 }}
              />
              {/* Rating */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
                <Box sx={{ alignItems: "center", gap: 1 }}>
                  <Typography variant="subtitle1">Management</Typography>
                  <Rating
                    value={formData.ratingManagement}
                    onChange={(e, newValue) => handleChange("ratingManagement", newValue)}
                  />
                </Box>


                <Box sx={{ alignItems: "left", gap: 1 }}>
                  <Typography variant="subtitle1">Work-Life Balance</Typography>
                  <Rating
                    value={formData.ratingWorkLife}
                    onChange={(e, newValue) => handleChange("ratingWorkLife", newValue)}
                  />
                </Box>

                <Box sx={{ alignItems: "center", gap: 1 }}>
                  <Typography variant="subtitle1">Salary/Benefits</Typography>
                  <Rating
                    value={formData.ratingSalary}
                    onChange={(e, newValue) => handleChange("ratingSalary", newValue)}
                  />
                </Box>

                <Box sx={{ alignItems: "center", gap: 1 }}>
                  <Typography variant="subtitle1">Overall Rating</Typography>
                  <Rating
                    name="company-rating"
                    value={formData.rating}
                    onChange={(e, newValue) => handleChange("rating", newValue)}
                  />
                </Box>


              </Box>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Would you recommend others to join this company? (If unchecked, it will be considered as No)"
                sx={{ mt: 2 }}
              />


              {/* Submit Button */}
              <Box display="flex" justifyContent="center" sx={{ pb: { xs: 8, md: 0 } }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ mt: 2, borderRadius: 2 }}
                  onClick={handleSubmit}
                >
                  Add Review
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Right Side - Guidelines */}

        </Grid>
      </Box>
    </>
  );
};

export default ReviewPage;
