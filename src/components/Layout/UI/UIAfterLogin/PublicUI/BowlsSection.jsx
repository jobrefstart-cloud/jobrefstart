import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import sampleResume from "../../../../../utils/ResumeUploads/sample-resume.pdf";


const individualReferences = [
  {
    name: "Amit Sharma",
    targetCompany: "Tata Consultancy Services (TCS)",
    jobRole: "Software Engineer",
    message:
      "Looking for a referral for Software Engineer role at TCS, Bangalore. 2 years of experience in Java + React.",
    contactMethod: "Email",
    contact: "amit.sharma@example.com",
    time: "2h ago",
    resume: sampleResume, // 🧾 sample file path
  },
  {
    name: "Priya Nair",
    targetCompany: "Deloitte",
    jobRole: "Data Analyst",
    message:
      "Requesting referral for Data Analyst position at Deloitte Hyderabad. Strong SQL and Power BI background.",
    contactMethod: "LinkedIn DM",
    contact: "linkedin.com/in/priyanair",
    time: "5h ago",
    resume: sampleResume,
  },
  {
    name: "Rohit Verma",
    targetCompany: "EY GDS",
    jobRole: "Tax Consultant",
    message:
      "Open to EY GDS or any similar firm. 3 years experience in Direct Tax domain.",
    contactMethod: "Phone",
    contact: "+91 9876543210",
    time: "1 day ago",
    resume: sampleResume,
  },
];

const groupReferences = [
  {
    sector: "Information Technology",
    posts: 24,
    recentActivity: "3h ago",
    avgResponseTime: "2 days",
  },
  {
    sector: "Data Science & Analytics",
    posts: 18,
    recentActivity: "5h ago",
    avgResponseTime: "1 day",
  },
  {
    sector: "Finance & Consulting",
    posts: 12,
    recentActivity: "9h ago",
    avgResponseTime: "4 days",
  },
];

const BowlsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const isScrollable =
    (activeTab === 0 && individualReferences.length > 5) ||
    (activeTab === 1 && groupReferences.length > 5);

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  // For modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);

  const handleOpenModal = (resume) => {
    setSelectedResume(resume);
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight + 40 + "px");
    }
  }, [activeTab]);

  return (
    <>
      <Box
        sx={{
          px: 2,
          mt: 3,
          width: "100%",
          borderRadius: 2,
          backgroundColor: "#fff",
          border: "1px solid #e0e0e0",
          mb: { xs: 6, sm: 8, md: 10 },
          "@media (max-width:600px)": {
            px: 1,
            mt: 2,
          },
        }}
      >
        {/* --- TABS --- */}
        <Box
          sx={{
            display: "flex",
            borderBottom: "1px solid #e0e0e0",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
            mx: -2,
          }}
        >
          {["Individual", "Group"].map((tab, i) => (
            <Box
              key={i}
              onClick={() => setActiveTab(i)}
              sx={{
                flex: 1,
                textAlign: "center",
                py: 1.5,
                cursor: "pointer",
                backgroundColor: activeTab === i ? "#1976d2" : "#f5f5f5",
                color: activeTab === i ? "#fff" : "#333",
                fontWeight: activeTab === i ? 600 : 500,
                transition: "0.3s ease",
                "&:hover": {
                  backgroundColor: activeTab === i ? "#1565c0" : "#eaeaea",
                },
              }}
            >
              {tab}
            </Box>
          ))}
        </Box>

        {/* --- CONTENT --- */}
        <Box
          sx={{
            p: 2,
            position: "relative",
            overflow: "hidden",
            transition: "height 0.4s ease",
            height: contentHeight,
            "@media (max-width:600px)": {
              p: 1.5,
            },
          }}
        >
          <Box
            sx={{
              maxHeight: isScrollable
                ? { xs: "800px", sm: "720px", md: "720px" }
                : "auto",
              overflowY: isScrollable ? "auto" : "visible",
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
            {/* --- INDIVIDUAL TAB --- */}
            {activeTab === 0 && (
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, textAlign: { xs: "center", sm: "left" } }}
                >
                  Top Latest Individual References
                </Typography>

                {individualReferences.map((item, index) => (
                  <Box key={index}>
                    <Box sx={{ py: 1.5 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ color: "#1976d2" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Target Company:</strong> {item.targetCompany}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Job Role:</strong> {item.jobRole}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 1 }}
                      >
                        {item.message}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Preferred Contact:</strong> {item.contactMethod}{" "}
                        ({item.contact})
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: { xs: "wrap", sm: "nowrap" },
                          gap: 1,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          Posted {item.time}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            "@media (max-width:600px)": {
                              width: "100%",
                              justifyContent: "flex-end",
                            },
                          }}
                        >
                          <Button
                            variant="text"
                            size="small"
                            onClick={() => handleOpenModal(item.resume)}
                            sx={{
                              textTransform: "none",
                              "@media (max-width:600px)": {
                                fontSize: "0.8rem",
                              },
                            }}
                          >
                            View Resume
                          </Button>
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            sx={{
                              textTransform: "none",
                              "@media (max-width:600px)": {
                                flex: 1,
                                fontSize: "0.8rem",
                                mt: 0.5,
                              },
                            }}
                          >
                            Request
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    {index !== individualReferences.length - 1 && (
                      <Divider sx={{ my: 1.5 }} />
                    )}
                  </Box>
                ))}
              </Box>
            )}

            {/* --- GROUP TAB --- */}
            {activeTab === 1 && (
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  Popular Referral Groups
                </Typography>

                {groupReferences.map((group, index) => (
                  <Box key={index}>
                    <Box sx={{ py: 1.5 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ color: "#1976d2" }}
                      >
                        {group.sector}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 1 }}
                      >
                        {group.posts} people recently requested referrals here
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: { xs: "wrap", sm: "nowrap" },
                          gap: 1,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          Avg Response: {group.avgResponseTime} <br />
                          Recent: {group.recentActivity}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            "@media (max-width:600px)": {
                              width: "100%",
                              justifyContent: "flex-end",
                            },
                          }}
                        >
                          <Button
                            variant="text"
                            size="small"
                            onClick={() => navigate("/industry-users")}
                            sx={{
                              textTransform: "none",
                            }}
                          >
                            View list
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              textTransform: "none",
                              borderRadius: 2,
                              backgroundColor: "#1976d2",
                              "&:hover": { backgroundColor: "#125ea7" },
                            }}
                          >
                            Post
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    {index !== groupReferences.length - 1 && (
                      <Divider sx={{ my: 1.5 }} />
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* --- RESUME POPUP MODAL --- */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="resume-modal"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
            width: { xs: "95%", sm: "80%", md: "60%" },
            maxHeight: "90vh",
            overflowY: "auto",
            p: 3,
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" fontWeight="bold" mb={2} align="center" color="primary">
            Resume Preview
          </Typography>

          {selectedResume ? (
            <iframe
              // src={selectedResume}
               src={`${selectedResume}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume"
              width="100%"
              height="690px"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            ></iframe>
          ) : (
            <Typography>No resume available</Typography>
          )}

          {selectedResume && (
            <Button
              variant="contained"
              color="primary"
              href={selectedResume}
              download
              sx={{
                mt: 2,
                textTransform: "none",
                width:"100%",
                display:"none"
              }}
            >
              Download Resume
            </Button>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default BowlsSection;
