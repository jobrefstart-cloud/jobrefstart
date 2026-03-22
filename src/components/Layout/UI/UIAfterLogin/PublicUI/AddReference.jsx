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
    Button,
    Card,
    Checkbox,
} from "@mui/material";

const AddReference = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        location: "",
        industry: "",
        jobRole: "",
        experienceType: "positive",
        referenceSource: "",
        referenceDetail: "",
        interviewExperience: "",
        ratingWorkLife: 0,
        ratingSalary: 0,
        ratingManagement: 0,
        recommend: true,
        employmentType: "current",
        employmentStatus: "",
        duration: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        console.log("Reference Submitted:", formData);
        alert("✅ Thank you! Your reference has been shared.");
    };

    return (
        <>
            <Box sx={{ p: { xs: 4, md: 14 }, maxWidth: "1200px", mx: "auto" }}>
                <Grid container spacing={4}>
                    {/* Left Side - Form */}
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Add a Company Reference
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                Share your experience or reference to help others make career
                                decisions confidently.
                            </Typography>

                            {/* Company Name */}
                            <TextField
                                fullWidth
                                label="Company Name"
                                value={formData.companyName}
                                onChange={(e) => handleChange("companyName", e.target.value)}
                                sx={{ mb: 3 }}
                            />

                            {/* Location */}
                            <TextField
                                fullWidth
                                label="Location / City"
                                value={formData.location}
                                onChange={(e) => handleChange("location", e.target.value)}
                                sx={{ mb: 3 }}
                            />

                            {/* Industry */}
                            <TextField
                                select
                                fullWidth
                                label="Industry / Sector"
                                value={formData.industry}
                                onChange={(e) => handleChange("industry", e.target.value)}
                                sx={{ mb: 3 }}
                            >
                                <MenuItem value="IT">IT</MenuItem>
                                <MenuItem value="Consulting">Consulting</MenuItem>
                                <MenuItem value="Banking">Banking</MenuItem>
                                <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </TextField>

                            {/* Job Role */}
                            <TextField
                                fullWidth
                                label="Job Role / Department"
                                value={formData.jobRole}
                                onChange={(e) => handleChange("jobRole", e.target.value)}
                                sx={{ mb: 3 }}
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

                            {/* Headline */}
                            <TextField
                                fullWidth
                                label="How did you come to know about this reference?"
                                value={formData.referenceSource}
                                onChange={(e) => handleChange("referenceSource", e.target.value)}
                                sx={{ mb: 3 }}
                            />

                            {/* Detailed Reference */}
                            <TextField
                                fullWidth
                                multiline
                                minRows={3}
                                label="Detailed Reference / Experience"
                                helperText="Minimum 10 words"
                                value={formData.referenceDetail}
                                onChange={(e) =>
                                    handleChange("referenceDetail", e.target.value)
                                }
                                sx={{ mb: 3 }}
                            />

                            {/* Interview Experience */}
                            <TextField
                                fullWidth
                                multiline
                                minRows={2}
                                label="Interview Experience (Optional)"
                                placeholder="e.g. Easy, Medium, Difficult - Round details"
                                value={formData.interviewExperience}
                                onChange={(e) =>
                                    handleChange("interviewExperience", e.target.value)
                                }
                                sx={{ mb: 3 }}
                            />





                            {/* Employment Duration */}
                            <TextField
                                fullWidth
                                label="Duration of Work (e.g. 2019 - 2022)"
                                value={formData.duration}
                                onChange={(e) => handleChange("duration", e.target.value)}
                                sx={{ mb: 3 }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="I confirm that all the above information is correct."
                                sx={{ mt: 2 }}
                            />

                            {/* Submit Button */}
                            <Box
                                display="flex"
                                justifyContent="center"
                                sx={{ pb: { xs: 8, md: 0 } }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{ mt: 2, borderRadius: 2 }}
                                    onClick={handleSubmit}
                                >
                                    Add Reference
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AddReference;
