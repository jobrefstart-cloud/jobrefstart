import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/theme.css";
import Logo from "../../../../../utils/images/logo.png"; // 👈 replace with your image path
import { Divider } from "@mui/material";
import Footer from "./CommonStyles/Footer";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear autofill values on mount
    setValue("email", "");
    setValue("password", "");
  }, [setValue]);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <>
      <Container maxWidth="sm">
        {/* 👇 Centered logo */}
        <Box display="flex" justifyContent="center" mt={2}>
          <img
            src={Logo}
            alt="Login Visual"
            style={{ width: "210px", height: "auto" }}
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
              Sign in to JobLinks
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <TextField
                label="Email"
                size="small"
                margin="normal"
                fullWidth
                autoComplete="off"
                {...register("email")}
                style={{ width: "80%", margin: "12px auto", display: "block" }}
              />
              <TextField
                label="Password"
                type="password"
                size="small"
                margin="normal"
                fullWidth
                autoComplete="off"
                {...register("password")}
                style={{ width: "80%", margin: "12px auto", display: "block" }}
              />

              <Button
                type="submit"
                variant="contained"
                size="small"
                style={{ width: "80%", margin: "24px auto 0 auto", display: "block" }}
                onClick={() => navigate("/")}
              >
                Sign In
              </Button>

              {/* 👇 Left/Right aligned links */}
              <Box display="flex" justifyContent="space-between" mt={2} px={6}>
                <Typography variant="body2">
                  I am New {" "}
                  <Link to="/signup" style={{ textDecoration: "none", color: "#1976d2" }}>
                    Signup
                  </Link>
                </Typography>

                <Typography variant="body2">
                  <Link to="/forgot-password" style={{ textDecoration: "none", color: "#1976d2" }}>
                    Forgot Password?
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>


      </Container>
      <Box mt={4}>
        <Divider />
        <Box mt={39}>
          <Footer />
        </Box>
      </Box>

    </>
  );
};

export default Login;
