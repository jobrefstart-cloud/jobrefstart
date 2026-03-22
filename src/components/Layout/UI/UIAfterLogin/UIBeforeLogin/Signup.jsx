import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../../../../utils/images/logo.png";
import Footer from "./CommonStyles/Footer";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Signup Successful!");
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center" mt={2}>
          <img
            src={Logo}
            alt="Signup Visual"
            style={{ width: "110px", height: "auto" }}
          />
        </Box>

        <Box mt={2}>
          <Box
            p={4}
            border="1px solid #ccc"
            borderRadius={2}
            boxShadow={1}
            className="signup-form-box"
          >
            <Typography variant="h5" gutterBottom align="center">
              Sign up with JobLinks
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Basic Fields */}
              <TextField
                fullWidth
                size="small"
                label="Name"
                margin="normal"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                fullWidth
                size="small"
                label="Email"
                margin="normal"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                fullWidth
                size="small"
                label="Phone"
                margin="normal"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
              <TextField
                fullWidth
                size="small"
                type="password"
                label="Password"
                margin="normal"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />

              {/* User Type */}
              <FormControl
                component="fieldset"
                margin="normal"
                error={!!errors.userType}
              >
                <FormLabel component="legend">User Type *</FormLabel>
                <RadioGroup row {...register("userType", { required: true })}>
                  <FormControlLabel
                    value="Candidate"
                    control={<Radio />}
                    label="Candidate"
                  />
                  <FormControlLabel
                    value="HR/Recruiter"
                    control={<Radio />}
                    label="HR / Recruiter"
                  />
                </RadioGroup>
                {errors.userType && (
                  <Typography color="error" variant="caption">
                    Please select a user type
                  </Typography>
                )}
              </FormControl>

              {/* Profile Picture Upload */}
              <Box mt={2}>
                <FormLabel>Profile Picture *</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "block", marginTop: "8px" }}
                  {...register("profilePic", { required: true })}
                />
                {errors.profilePic && (
                  <Typography color="error" variant="caption">
                    Please upload your profile picture
                  </Typography>
                )}
              </Box>

              {/* Terms & Conditions */}
              <Box mt={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register("terms", { required: true })}
                      color="primary"
                    />
                  }
                  label="I agree to the Terms & Conditions"
                />
                {errors.terms && (
                  <Typography color="error" variant="caption">
                    You must agree before signing up
                  </Typography>
                )}
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Continue
              </Button>

              {/* Login Link */}
              <Box className="signup-login-link" mt={2}>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link to="/login" className="login-link-text">
                    Back to Login
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box mt={4}>
        <Divider />
        <Box mt={2}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Signup;
