import { Typography, Button, Box, Container, Grid } from "@mui/material";
import { Group, Business, Description } from "@mui/icons-material";
import homeImage from "../../../../../utils/images/home.png";
import "../../../../../styles/theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import BowlsSection from "./BowlsSection";

const Home = () => {


  // const features = [
  //   { icon: <Computer fontSize="large" />, label: "Add References", link: "/add-reference" },
  //   { icon: <Assignment fontSize="large" />, label: "Find References", link: "/find-reference" },
  //   { icon: <Business fontSize="large" />, label: "Search/Add Reviews", link: "/company-reviews" },
  //   { icon: <AttachMoney fontSize="large" />, label: "Post And Talks", link: "/togetherness" },
  // ];

  const features = [
  // { 
  //   icon: <Person fontSize="large" sx={{ color: "white" }} />, 
  //   label: "Create References", 
  //   desc: "Showcase your skills & expertise", 
  //   link: "/add-reference" 
  // },
  { 
    icon: <Group fontSize="large" sx={{ color: "white" }} />, 
    label: "Get References", 
    desc: "Engage with trusted connections", 
    link: "/get-references" 
  },
  { 
    icon: <Business fontSize="large" sx={{ color: "white" }} />, 
    label: "Explore Culture Reviews", 
    desc: "Understand company culture better", 
    link: "/company-reviews" 
  },
  { 
    icon: <Description fontSize="large" sx={{ color: "white" }} />, 
    label: "Participate  in Discussions", 
    desc: "Join discussions and share your thoughts.", 
    link: "/participate" 
  },
];

  return (
    <>
    

      <Box className="home-container" sx={{ mt: 8 }}> {/* 👈 space under header */}
        
      <Box className="home-image-wrapper" >
            <Box
              component="img"
              src={homeImage}
              alt="Home Slide"
              className="home-video"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                
              }}
            />
            <Box className="home-image-overlay" />
          </Box>
        

        {/* Overlay Text */}
       {/* Overlay Text */}
{/* Overlay Text */}
<Box className="home-overlay-text" sx={{ textAlign: "left", pl: { xs: 2, sm: 4, md: 6 } }}>

  {/* ✅ Logo fix upar left */}
  

  {/* ✅ Text block apni jagah */}
  <Box>
    <Typography
      variant="h3"
      className="home-title"
      sx={{
        fontWeight: "bold",
        fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3rem" },
        mt:{ xs: -12, sm: -12, md: -12,lg:-12 },
        ml:{ xs: -2, sm: -2, md: -2,lg:-2 },
      }}
      
    >
      Get Jobs Through <br/>Trust, Not Luck.
    </Typography>

    <Typography
  variant="h6"
  className="home-subtitle"
  sx={{
    fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" }, // thoda subtle size
    fontWeight: 300, // halka (thin) font
    color: "#ffffff", // white text like screenshot (dark bg pe)
    opacity: 0.9, // thoda soft effect
    mt: 2, // heading ke niche spacing
    lineHeight: 1.6, // readability better
  }}
>
  Real people sharing real references & <br />
  company culture insights.
</Typography>

    <Box display="flex" gap={2} mt={2} flexWrap="wrap" sx={{
    "@media (max-width:900px)": {
      mt: -1, // tablet view में थोड़ा ऊपर लाने के लिए
    },
    "@media (max-width:600px)": {
      mt: 2, // phone में थोड़ा spacing balance रहे
    },
  }}>
      <Button variant="contained" color="success" className="home-cta-button">
        Try Premium
      </Button>
 
    </Box>
  </Box>
</Box>



        {/* Features Section */}
         <Box sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Choose a Method
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Link
              to={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box sx={{ textAlign: "center" }}>
                {/* 🔵 Circle Background Icon */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    backgroundColor: "#1976d2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    mb: 2,
                    color: "white",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Title */}
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.label}
                </Typography>

                {/* Subtitle */}
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
      </Box>

      <Container maxWidth="xl" className="home-content">
        
        <BowlsSection />
      </Container>
      
    </>
  );
};

export default Home;
