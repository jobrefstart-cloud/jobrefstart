import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Card,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Reply, Send, Favorite, FavoriteBorder, Close } from "@mui/icons-material";

const initialDiscussions = [
  {
    id: 1,
    name: "Ananya Sharma",
    avatar: "A",
    time: "2 hrs ago",
    comment:
      "Work-life balance here is actually impressive. Does anyone else feel the same?",
    likes: 8,
    liked: false,
    replies: [
      {
        id: 11,
        name: "Rohit Mehta",
        avatar: "R",
        time: "1 hr ago",
        reply: "Absolutely agree! Especially after the hybrid model started.",
        liked: false,
        likes: 2,
      },
      {
        id: 12,
        name: "Sneha Gupta",
        avatar: "S",
        time: "30 mins ago",
        reply: "Yeah, the flexibility has made a big difference.",
        liked: false,
        likes: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Vikram Patel",
    avatar: "V",
    time: "5 hrs ago",
    comment:
      "How transparent is the performance review process? Any experiences?",
    likes: 4,
    liked: false,
    replies: [
      {
        id: 21,
        name: "Priya Nair",
        avatar: "P",
        time: "3 hrs ago",
        reply: "It's pretty fair overall. Feedback is detailed and well-documented.",
        liked: false,
        likes: 1,
      },
    ],
  },
];

const Participate = () => {
  const [discussions, setDiscussions] = useState(initialDiscussions);
  const [newComment, setNewComment] = useState("");
  const [replyInput, setReplyInput] = useState({ id: null, text: "" });

  // Add new comment
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newDiscussion = {
      id: Date.now(),
      name: "You",
      avatar: "Y",
      time: "Just now",
      comment: newComment,
      replies: [],
      likes: 0,
      liked: false,
    };
    setDiscussions([newDiscussion, ...discussions]);
    setNewComment("");
  };

  // Add reply
  const handleAddReply = (parentId) => {
    if (replyInput.text.trim() === "") return;

    const updated = discussions.map((item) =>
      item.id === parentId
        ? {
            ...item,
            replies: [
              ...item.replies,
              {
                id: Date.now(),
                name: "You",
                avatar: "Y",
                time: "Just now",
                reply: replyInput.text,
                likes: 0,
                liked: false,
              },
            ],
          }
        : item
    );
    setDiscussions(updated);
    setReplyInput({ id: null, text: "" });
  };

  // Toggle like for comment
  const handleToggleLikeComment = (id) => {
    const updated = discussions.map((item) =>
      item.id === id
        ? {
            ...item,
            liked: !item.liked,
            likes: item.liked ? item.likes - 1 : item.likes + 1,
          }
        : item
    );
    setDiscussions(updated);
  };

  // Toggle like for reply
  const handleToggleLikeReply = (parentId, replyId) => {
    const updated = discussions.map((item) =>
      item.id === parentId
        ? {
            ...item,
            replies: item.replies.map((rep) =>
              rep.id === replyId
                ? {
                    ...rep,
                    liked: !rep.liked,
                    likes: rep.liked ? rep.likes - 1 : rep.likes + 1,
                  }
                : rep
            ),
          }
        : item
    );
    setDiscussions(updated);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f9f9f9",
        p: { xs: 3, md: 8 },
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 800, p: 4, borderRadius: 3, boxShadow: 4 }}>
        {/* Title */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">
            Participate in Discussions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Top Discussions (Last 24 hrs)
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

        {/* Discussion List */}
        {discussions.map((item) => (
          <Box key={item.id} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Avatar sx={{ bgcolor: "#1976d2" }}>{item.avatar}</Avatar>
              <Box sx={{ width: "100%" }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {item.name}
                  <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                    {item.time}
                  </Typography>
                </Typography>

                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {item.comment}
                </Typography>

                {/* Comment Actions */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 0.5 }}>
                  {/* Like */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Tooltip title={item.liked ? "Unlike" : "Like"}>
                      <IconButton size="small" onClick={() => handleToggleLikeComment(item.id)}>
                        {item.liked ? (
                          <Favorite color="error" fontSize="small" />
                        ) : (
                          <FavoriteBorder fontSize="small" />
                        )}
                      </IconButton>
                    </Tooltip>
                    <Typography variant="caption">{item.likes}</Typography>
                  </Box>

                  {/* Reply Button */}
                  <Button
                    size="small"
                    startIcon={<Reply fontSize="small" />}
                    onClick={() =>
                      setReplyInput({
                        id: replyInput.id === item.id ? null : item.id,
                        text: "",
                      })
                    }
                  >
                    {replyInput.id === item.id ? "Close Reply" : "Reply"}
                  </Button>

                  {/* Reply Count */}
                  {item.replies.length > 0 && (
                    <Typography variant="caption" color="text.secondary">
                      💬 {item.replies.length} {item.replies.length > 1 ? "replies" : "reply"}
                    </Typography>
                  )}
                </Box>

                {/* Replies */}
                <Box sx={{ pl: 5, mt: 1 }}>
                  {item.replies.map((rep) => (
                    <Box key={rep.id} sx={{ display: "flex", gap: 2, mb: 1 }}>
                      <Avatar sx={{ bgcolor: "#9c27b0", width: 32, height: 32 }}>
                        {rep.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {rep.name}
                          <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                            {rep.time}
                          </Typography>
                        </Typography>
                        <Typography variant="body2">{rep.reply}</Typography>

                        {/* Reply Like */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.3 }}>
                          <IconButton
                            size="small"
                            onClick={() => handleToggleLikeReply(item.id, rep.id)}
                          >
                            {rep.liked ? (
                              <Favorite color="error" fontSize="small" />
                            ) : (
                              <FavoriteBorder fontSize="small" />
                            )}
                          </IconButton>
                          <Typography variant="caption">{rep.likes}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Reply Input */}
                {replyInput.id === item.id && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mt: 1,
                      pl: 5,
                    }}
                  >
                    <Avatar sx={{ bgcolor: "#1976d2", width: 32, height: 32 }}>Y</Avatar>
                    <TextField
                      variant="outlined"
                      placeholder="Write a reply..."
                      multiline
                      fullWidth
                      size="small"
                      value={replyInput.text}
                      onChange={(e) =>
                        setReplyInput({ ...replyInput, text: e.target.value })
                      }
                      sx={{ bgcolor: "white", borderRadius: 2 }}
                    />
                    <IconButton color="primary" onClick={() => handleAddReply(item.id)}>
                      <Send />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => setReplyInput({ id: null, text: "" })}
                    >
                      <Close />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Comment Divider and Input */}
            <Divider sx={{ mt: 2 }} />
         
          </Box>
          
        ))}
           <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3, mt: 2 }}
            >
              <Avatar sx={{ bgcolor: "#1976d2" }}>Y</Avatar>
              <TextField
                variant="outlined"
                placeholder="Add a comment..."
                multiline
                fullWidth
                size="small"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                sx={{ bgcolor: "white", borderRadius: 2 }}
              />
              <IconButton color="primary" onClick={handleAddComment}>
                <Send />
              </IconButton>
            </Box>
      </Card>
    </Box>
  );
};

export default Participate;
