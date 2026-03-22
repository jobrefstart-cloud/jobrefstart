import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Autocomplete,
} from "@mui/material";

const GetRef = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    companyPreference: "any",
    companyName: "",
    jobRole: "",
    experienceLevel: "",
    reason: "",
    resume: null,
    consent: false,
    contactMethod: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email address is required";
    if (formData.companyPreference === "specific" && !formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.jobRole) newErrors.jobRole = "Desired job role is required";
    if (!formData.contactMethod)
      newErrors.contactMethod = "Please select a preferred contact method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Reference Request Submitted:", formData);
    alert("Your reference request has been submitted successfully!");
  };

  // 🌍 Job Role Options (Grouped)
  const jobRoleOptions = [
    {
      category: "IT & Software",
      roles: [
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "DevOps Engineer",
        "Data Analyst",
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Specialist",
        "Cloud Architect",
        "Cybersecurity Specialist",
      ],
    },
    {
      category: "Business & Management",
      roles: [
        "Business Analyst",
        "Project Manager",
        "Product Manager",
        "Operations Manager",
        "HR Manager",
        "Recruiter",
        "Customer Success Manager",
      ],
    },
    {
      category: "Marketing & Sales",
      roles: [
        "Digital Marketing Specialist",
        "SEO Executive",
        "Content Writer",
        "Social Media Manager",
        "Sales Executive",
        "Account Manager",
        "Brand Strategist",
        "Market Research Analyst",
      ],
    },
    {
      category: "Finance & Banking",
      roles: [
        "Financial Analyst",
        "Accountant",
        "Investment Banker",
        "Auditor",
        "Tax Consultant",
        "Risk Analyst",
      ],
    },
    {
      category: "Design & Creative",
      roles: [
        "Graphic Designer",
        "UI/UX Designer",
        "Product Designer",
        "Animator",
        "Video Editor",
        "Photographer",
      ],
    },
    {
      category: "Engineering & Manufacturing",
      roles: [
        "Mechanical Engineer",
        "Civil Engineer",
        "Electrical Engineer",
        "Industrial Engineer",
        "Quality Assurance Engineer",
      ],
    },
    {
      category: "Healthcare & Life Sciences",
      roles: [
        "Doctor",
        "Nurse",
        "Pharmacist",
        "Medical Researcher",
        "Healthcare Administrator",
        "Biotechnologist",
      ],
    },
    {
      category: "Education & Training",
      roles: [
        "Teacher",
        "Professor",
        "Instructional Designer",
        "Corporate Trainer",
        "Education Consultant",
      ],
    },
    {
      category: "Law, Policy & Government",
      roles: [
        "Lawyer",
        "Legal Analyst",
        "Policy Advisor",
        "Government Officer",
        "Public Relations Specialist",
      ],
    },
    {
      category: "Media & Communications",
      roles: [
        "Journalist",
        "News Editor",
        "Publicist",
        "Media Planner",
        "Copywriter",
      ],
    },
    {
      category: "Logistics & Supply Chain",
      roles: [
        "Supply Chain Manager",
        "Procurement Officer",
        "Warehouse Supervisor",
        "Transportation Coordinator",
      ],
    },
    {
      category: "Hospitality & Tourism",
      roles: [
        "Hotel Manager",
        "Travel Consultant",
        "Event Planner",
        "Chef",
        "Customer Service Executive",
      ],
    },
    {
      category: "Other Sectors",
      roles: [
        "Entrepreneur",
        "Freelancer",
        "Research Associate",
        "Consultant",
        "Administrative Assistant",
      ],
    },
  ];

  // Flatten the grouped roles into a single list with category labels
  const jobRoles = jobRoleOptions.flatMap((group) =>
    group.roles.map((role) => ({
      title: role,
      category: group.category,
    }))
  );

  return (
    <Box sx={{ p: { xs: 4, md: 14 }, maxWidth: "1000px", mx: "auto" }}>
      <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Request a Job Reference
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Fill in your details to connect with real people for job references.
        </Typography>

        {/* Full Name */}
        <TextField
          fullWidth
          label={
            <>
              Full Name <span style={{ color: "red" }}>*</span>
            </>
          }
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          sx={{ mb: 1 }}
          error={!!errors.name}
          helperText={errors.name}
        />

        {/* Email */}
        <TextField
          fullWidth
          label={
            <>
              Email Address <span style={{ color: "red" }}>*</span>
            </>
          }
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          sx={{ mb: 1 }}
          error={!!errors.email}
          helperText={errors.email}
        />

        {/* Phone (optional) */}
        <TextField
          fullWidth
          label="Phone Number (optional)"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* LinkedIn (optional) */}
        <TextField
          fullWidth
          label="LinkedIn Profile URL (optional)"
          value={formData.linkedin}
          onChange={(e) => handleChange("linkedin", e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* Company Preference */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Reference for which company?
        </Typography>
        <RadioGroup
          row
          value={formData.companyPreference}
          onChange={(e) => handleChange("companyPreference", e.target.value)}
          sx={{ mb: 2 }}
        >
          <FormControlLabel
            value="any"
            control={<Radio color="primary" />}
            label="Open to any company"
          />
          <FormControlLabel
            value="specific"
            control={<Radio color="primary" />}
            label="Specific company"
          />
        </RadioGroup>

        {formData.companyPreference === "specific" && (
          <TextField
            fullWidth
            label={
              <>
                Enter Company Name <span style={{ color: "red" }}>*</span>
              </>
            }
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            sx={{ mb: 1 }}
            error={!!errors.companyName}
            helperText={errors.companyName}
          />
        )}

        {/* 🌍 Searchable Job Role Dropdown */}
        <Autocomplete
          options={jobRoles}
          groupBy={(option) => option.category}
          getOptionLabel={(option) => option.title}
          value={
            jobRoles.find((role) => role.title === formData.jobRole) || null
          }
          onChange={(e, newValue) =>
            handleChange("jobRole", newValue ? newValue.title : "")
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                <>
                  Desired Job Role / Department{" "}
                  <span style={{ color: "red" }}>*</span>
                </>
              }
              error={!!errors.jobRole}
              helperText={errors.jobRole}
            />
          )}
          sx={{
            mb: 3,
            "& .MuiAutocomplete-paper": {
              maxHeight: 250, // fixed dropdown height
            },
          }}
        />

        {/* Experience Level */}
        <TextField
          select
          fullWidth
          label="Experience Level"
          value={formData.experienceLevel}
          onChange={(e) => handleChange("experienceLevel", e.target.value)}
          sx={{ mb: 3 }}
        >
          <MenuItem value="fresher">Fresher</MenuItem>
          <MenuItem value="1-3 years">1-3 years</MenuItem>
          <MenuItem value="3-5 years">3-5 years</MenuItem>
          <MenuItem value="5+ years">5+ years</MenuItem>
        </TextField>

        {/* Reason */}
        <TextField
          fullWidth
          multiline
          minRows={3}
          label="Want to say something about this reference?"
          value={formData.reason}
          onChange={(e) => handleChange("reason", e.target.value)}
          sx={{ mb: 3 }}
          helperText="Explain briefly (e.g., applying for Data Analyst role)"
        />

        {/* Resume Upload */}
        <Button variant="outlined" component="label" sx={{ mb: 3 }}>
          Upload Resume
          <input
            hidden
            accept=".pdf,.doc,.docx"
            type="file"
            onChange={handleFileChange}
          />
        </Button>

        {formData.resume && (
          <Typography variant="body2" sx={{ mb: 2 }}>
            Uploaded: {formData.resume.name}
          </Typography>
        )}

        {/* Contact Method */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Preferred way to be contacted if someone agrees to refer you{" "}
          <span style={{ color: "red" }}>*</span>
        </Typography>
        <RadioGroup
          row
          value={formData.contactMethod}
          onChange={(e) => handleChange("contactMethod", e.target.value)}
          sx={{ mb: 1 }}
        >
          <FormControlLabel
            value="phone"
            control={<Radio color="primary" />}
            label="Phone"
          />
          <FormControlLabel
            value="email"
            control={<Radio color="primary" />}
            label="Email"
          />
          <FormControlLabel
            value="dm"
            control={<Radio color="primary" />}
            label="Use Details from My CV"
          />
        </RadioGroup>
        {errors.contactMethod && (
          <Typography
            variant="caption"
            color="error"
            sx={{ mb: 2, display: "block" }}
          >
            {errors.contactMethod}
          </Typography>
        )}

        {/* Consent */}
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.consent}
              onChange={(e) => handleChange("consent", e.target.checked)}
              color="primary"
            />
          }
          label="I confirm that all the provided information is accurate."
          sx={{ mb: 3 }}
        />

        {/* Submit */}
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: 2 }}
            onClick={handleSubmit}
          >
            Request Reference
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default GetRef;
