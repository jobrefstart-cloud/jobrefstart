import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";

const GroupUserList = () => {
  const users = [
    {
      name: "Aman Gupta",
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      description: "Happy to refer skilled developers in our product team.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Singh",
      title: "HR Executive",
      company: "Infosys Ltd",
      description: "Looking for candidates passionate about innovation.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohit Sharma",
      title: "Team Lead",
      company: "Wipro Technologies",
      description: "Always open to helping tech aspirants with referrals.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      name: "Anjali Verma",
      title: "Data Analyst",
      company: "Accenture India",
      description: "Can refer data professionals skilled in Python & SQL.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Vikram Mehta",
      title: "Backend Developer",
      company: "HCL Technologies",
      description: "Can refer strong Java and Node.js developers.",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
      name: "Pramod Mathur",
      title: "SalesForce Developer",
      company: "WIG Technologies",
      description: "Can refer strong Java and Node.js developers.",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    
   
  ];

  const isScrollable = users.length > 5;

  return (
    <Box
      sx={{
        width: "95%",
        maxWidth: "1100px",
        mx: "auto",
        mt: 15,
        // mb: users.length <= 5 ? { xs: 6, sm: 8, md: 5 } : 0,
        bgcolor: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        borderRadius: 3,
        p: { xs: 2, sm: 3, md: 4 },
        
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{
          mb: 0,
          color: "#1a73e8",
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
        }}
      >
        Job Referrals Available for IT
      </Typography>

      {/* Scrollable User List */}
      <Box
        sx={{
          maxHeight: isScrollable
            ? { xs: "800px", sm: "720px", md: "660px" }
            : "auto",
          overflowY: isScrollable ? "auto" : "visible",
          mb: isScrollable ? { xs: 0, sm: 0, md: -2 } : { xs: 6, sm: 8, md: -5 },
          pb: { xs: 7, sm: 4,md: 6 },
          pr: 1,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c1c1c1",
            borderRadius: "6px",
          },
        }}
      >
        <List disablePadding>
          {users.map((user, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  py: { xs: 2, sm: 2.5 },
                  px: { xs: 1, sm: 2 },
                  "&:hover": { backgroundColor: "#f9fafb" },
                  gap: { xs: 2, sm: 0 },
                }}
              >
                {/* Left Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    flex: 1,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      sx={{
                        width: { xs: 50, sm: 56 },
                        height: { xs: 50, sm: 56 },
                        mr: 2,
                        border: "2px solid #e0e0e0",
                      }}
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight="600">
                        {user.name}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          sx={{ display: "block", fontWeight: 500 }}
                        >
                          {user.title} — {user.company}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.3 }}
                        >
                          {user.description}
                        </Typography>
                      </>
                    }
                  />
                </Box>

                {/* Right Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", sm: "flex-end" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    size="medium"
                    sx={{
                      textTransform: "none",
                      px: 3,
                      py: 1,
                      borderRadius: "25px",
                      fontWeight: 600,
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Request
                  </Button>
                </Box>
              </ListItem>

              {index !== users.length - 1 && (
                <Divider sx={{ my: 1, borderColor: "#eee" }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default GroupUserList;
