import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Pagination
} from "@mui/material";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "comment",
      title: "New Reply on Your Comment",
      message:
        "Amit Sharma replied to your comment in the discussion 'Hiring Best Practices'. Check the conversation to continue the discussion and respond if needed.",
      time: "10 min ago",
      read: false
    },
    {
      id: 2,
      type: "email",
      title: "Request Accepted & Email Sent",
      message:
        "Your verification request has been accepted by the employer. An email has been sent to you with further instructions and details regarding the next step in the process.",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      type: "resume",
      title: "Your Resume Was Viewed",
      message:
        "Your resume was viewed by a recruiter from TechNova Solutions. Make sure your profile is updated and keep an eye on upcoming interview invitations.",
      time: "2 hours ago",
      read: false
    },
    {
      id: 4,
      type: "comment",
      title: "New Discussion Reply",
      message:
        "Someone responded to your contribution in a professional discussion. Review the response to stay engaged with the conversation.",
      time: "Yesterday",
      read: true
    },
    {
      id: 5,
      type: "comment",
      title: "New Discussion Reply",
      message:
        "Someone responded to your contribution in a professional discussion. Review the response to stay engaged with the conversation.",
      time: "Yesterday",
      read: false
    },
    {
      id: 6,
      type: "comment",
      title: "New Discussion Reply",
      message:
        "Someone responded to your contribution in a professional discussion. Review the response to stay engaged with the conversation.",
      time: "Yesterday",
      read: false
    }
  ]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const markAsRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
  };

  const getIcon = (type) => {
    switch (type) {
      case "comment":
        return <ChatBubbleOutlineIcon color="primary" />;
      case "email":
        return <EmailIcon color="success" />;
      case "resume":
        return <VisibilityIcon color="secondary" />;
      default:
        return null;
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentNotifications = notifications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box sx={{ p: { xs: 4, md: 14 }, maxWidth: "1000px", mx: "auto" }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Notifications
      </Typography>

      {currentNotifications.map((notification) => (
        <Card
          key={notification.id}
          sx={{
            mb: 2,
            backgroundColor: notification.read ? "#fff" : "#f0f7ff",
            borderLeft: notification.read
              ? "4px solid transparent"
              : "4px solid #1976d2"
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              {getIcon(notification.type)}

              <Box>
                <Typography fontWeight="bold">
                  {notification.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {notification.message}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {notification.time}
                </Typography>
              </Box>
            </Box>

            {!notification.read && (
              <Button
                size="small"
                startIcon={<CheckCircleOutlineIcon />}
                onClick={() => markAsRead(notification.id)}
              >
                Mark Read
              </Button>
            )}
          </CardContent>
        </Card>
      ))}

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(notifications.length / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Notifications;