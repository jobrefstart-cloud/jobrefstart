// ParticipateDiscussion.js
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  Avatar,
  Divider,
  Rating,
} from "@mui/material";
import ReviewForm from "./ReviewPage"; // existing review form
import { useStatesContext } from '../../../../../utils/Common/AppStates';


const dummyReviews = [
  {
    id: 1,
    name: "Alice Johnson",
    time: "2 hrs ago",
    rating: 5,
    ratingManagement: 5,
    ratingWorkLife: 5,
    ratingSalary: 4,
    employmentType: "current",
    employmentStatus: "full-time",
    jobTitle: "Software Engineer",
    headline: "Exceptional Work Environment",
    pros: "Collaborative team, supportive management, flexible hours, great learning opportunities, transparent communication.",
    cons: "Occasionally tight deadlines on large projects, limited parking space at the office.",
    personalRemark: "I highly recommend this company to professionals looking for growth and a positive work environment.",
  },
  {
    id: 2,
    name: "Bob Smith",
    time: "5 hrs ago",
    rating: 4,
    ratingManagement: 4,
    ratingWorkLife: 4,
    ratingSalary: 3,
    employmentType: "former",
    employmentStatus: "full-time",
    jobTitle: "Marketing Specialist",
    headline: "Supportive Team with Room for Improvement",
    pros: "Friendly coworkers, clear communication from management, good team collaboration.",
    cons: "Salary could be more competitive, occasional long working hours.",
    personalRemark: "Overall, a solid company to build skills and experience, but salary packages could improve.",
  },
  {
    id: 3,
    name: "Charlie Davis",
    time: "12 hrs ago",
    rating: 5,
    ratingManagement: 5,
    ratingWorkLife: 5,
    ratingSalary: 5,
    employmentType: "current",
    employmentStatus: "full-time",
    jobTitle: "Product Manager",
    headline: "Excellent Work-Life Balance",
    pros: "Flexible working hours, supportive leadership, professional growth opportunities, recognition for achievements.",
    cons: "Some processes can be bureaucratic at times.",
    personalRemark: "This company genuinely cares about employee well-being and encourages a balanced lifestyle.",
  },
  {
    id: 4,
    name: "David Lee",
    time: "20 hrs ago",
    rating: 4,
    ratingManagement: 4,
    ratingWorkLife: 3,
    ratingSalary: 4,
    employmentType: "former",
    employmentStatus: "contract",
    jobTitle: "UI/UX Designer",
    headline: "Good Learning Experience",
    pros: "Creative freedom, collaborative projects, constructive feedback, supportive colleagues.",
    cons: "Workload can vary significantly, contract-based roles offer less stability.",
    personalRemark: "A great place to enhance design skills and work on challenging projects, especially for short-term contracts.",
  },
];

const ExploreReviews = () => {
  const  {allStates}  = useStatesContext();
    const {showForm,setShowForm} = allStates

  return (
    
        showForm?<ReviewForm/>
        :
         <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 4, md: 10 },
        bgcolor: "#f5f5f5",
        position: "relative",
      }}
    >
      

      <Grid container spacing={4} mt={2} mb={2} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3, position: "relative" }}>
             <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Top Reviews (Last 24 hrs)
            </Typography>
            <Button
                variant="contained"
                onClick={() => setShowForm((prev) => !prev)}
              >
                Write a Review
              </Button>
              </Box>
            <Divider sx={{ mb: 2,mt:2 }} />

            {dummyReviews.map((review) => (
              <Box key={review.id} sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                  <Avatar sx={{ width: 40, height: 40 }}>{review.name.charAt(0)}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {review.name} – {review.jobTitle}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {review.time} • {review.employmentType} ({review.employmentStatus})
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 1 }}>
                  {review.headline}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, mb: 1 }}>
                  <Typography variant="body2">Overall Rating:</Typography>
                  <Rating value={review.rating} readOnly size="small" />
                </Box>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Pros:</strong> {review.pros}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Cons:</strong> {review.cons}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic" }}>
                  <strong>Personal Remark:</strong> {review.personalRemark}
                </Typography>

                <Divider sx={{ mt: 2 }} />
              </Box>
            ))}
          </Card>
        </Grid>
      </Grid>

      {/* Form shows below reviews */}
      {showForm && (
        <Box sx={{ mt: 6 }}>
          <ReviewForm />
        </Box>
      )}
    </Box>
    
   
  );
};

export default ExploreReviews;
