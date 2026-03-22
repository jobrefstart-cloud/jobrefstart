import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
  TextField,
  IconButton,
  useMediaQuery,
  InputBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GifIcon from "@mui/icons-material/Gif";
import EmojiPicker from "emoji-picker-react";

const dummyMessages = [
  {
    id: 1,
    name: "Phoebe R.",
    avatar: "https://i.pravatar.cc/100?img=1",
    date: "Oct 28",
    preview: "Make $1,000 USD per week if you speak...",
    conversation: [
      {
        sender: "Phoebe R.",
        text: `Hi Deepak! I'm a recruiter at DataAnnotation.`,
      },
      { sender: "You", text: "Sounds good! Please share more details." },
    ],
  },
  {
    id: 2,
    name: "Pushpa Bhagat",
    avatar: "https://i.pravatar.cc/100?img=2",
    date: "Oct 15",
    preview: "Please check my LinkedIn link above",
    conversation: [
      { sender: "Pushpa", text: "Hey Deepak! Please check this link." },
      { sender: "You", text: "Got it, thanks Pushpa!" },
    ],
  },
];

const Messages = () => {
  const [selected, setSelected] = useState(dummyMessages[0]);
  const [showMessage, setShowMessage] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [gifList, setGifList] = useState([]);
  const [gifSearch, setGifSearch] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const fileInputRef = useRef();
  // 🔹 Fetch Trending or Searched GIFs from Giphy
  useEffect(() => {
    const fetchGifs = async () => {
     const query = gifSearch.trim()
  ? `https://tenor-api.vercel.app/search?q=${encodeURIComponent(gifSearch)}`
  : `https://tenor-api.vercel.app/trending`;
      const res = await fetch(query);
      const data = await res.json();
      setGifList(data.data.map((gif) => gif.images.fixed_height_small.url));
    };
    if (showGifPicker) fetchGifs();
  }, [showGifPicker, gifSearch]);

  const handleSend = () => {
    if (!inputValue.trim() && uploadedFiles.length === 0) return;
    const updated = { ...selected };
    updated.conversation = [
      ...updated.conversation,
      {
        sender: "You",
        text: inputValue,
        files: uploadedFiles.length > 0 ? [...uploadedFiles] : null,
      },
    ];
    setSelected(updated);
    setInputValue("");
    setUploadedFiles([]);
    setShowEmojiPicker(false);
    setShowGifPicker(false);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleEmojiClick = (emojiObject) => {
    setInputValue((prev) => prev + emojiObject.emoji);
  };

  const handleGifSelect = (gifUrl) => {
    const updated = { ...selected };
    updated.conversation = [
      ...updated.conversation,
      { sender: "You", gif: gifUrl },
    ];
    setSelected(updated);
    setShowGifPicker(false);
    setGifSearch("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
        
      }}
    >
      {/* Sidebar */}
      {(!isMobile || !showMessage) && (
        <Box
          sx={{
            width: isMobile ? "100%" : "30%",
            borderRight: isMobile ? "none" : "1px solid #ddd",
            backgroundColor: "#fff",
            overflowY: "auto",
            mt:11
            
          }}
        >
          <Typography
            variant="h6"
            sx={{ p: 2, borderBottom: "1px solid #eee", fontWeight: 600 }}
          >
            Messaging
          </Typography>

          <List>
            {dummyMessages.map((msg) => (
              <React.Fragment key={msg.id}>
                <ListItem
                  alignItems="flex-start"
                  button
                  onClick={() => {
                    setSelected(msg);
                    if (isMobile) setShowMessage(true);
                  }}
                  sx={{
                    backgroundColor:
                      selected.id === msg.id ? "#e3f2fd" : "transparent",
                    "&:hover": { backgroundColor: "#f0f7ff" },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={msg.avatar} alt={msg.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontWeight: 600 }}>
                          {msg.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ ml: 1 }}
                        >
                          {msg.date}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                        noWrap
                      >
                        {msg.preview}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
      )}

      {/* Chat Area */}
      {(!isMobile || showMessage) && (
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            mt:11
          }}
        >
          <Box
            sx={{
              p: 2,
              borderBottom: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {isMobile && (
              <Button variant="text" onClick={() => setShowMessage(false)}>
                ←
              </Button>
            )}
            <Avatar src={selected.avatar} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {selected.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {selected.date}
              </Typography>
            </Box>
          </Box>

          {/* Conversation */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#fafafa",
              
            }}
          >
            {selected.conversation.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === "You" ? "#d1e7ff" : "#fff",
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  maxWidth: "75%",
                  boxShadow: 1,
                
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: msg.sender === "You" ? 600 : 500 }}
                >
                  {msg.sender}
                </Typography>
                {msg.text && (
                  <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                    {msg.text}
                  </Typography>
                )}
                {msg.gif && (
                  <Box
                    component="img"
                    src={msg.gif}
                    alt="GIF"
                    sx={{ width: 150, borderRadius: 2, mt: 1 }}
                  />
                )}
                {msg.files &&
                  msg.files.map((file, i) => (
                    <Box key={i} sx={{ mt: 1 }}>
                      {file.type.startsWith("image/") ? (
                        <img
                          src={file.url}
                          alt={file.name}
                          style={{ width: "150px", borderRadius: "6px" }}
                        />
                      ) : (
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📎 {file.name}
                        </a>
                      )}
                    </Box>
                  ))}
              </Box>
            ))}
          </Box>

          {/* Reply Box */}
          <Box
            sx={{
              p: 2,
              borderTop: "1px solid #eee",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1,
              position: "relative",
              mb:12
              
              
            }}
          >
            <input
              type="file"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <IconButton onClick={() => fileInputRef.current.click()}>
              <AttachFileIcon />
            </IconButton>

            <IconButton onClick={() => setShowEmojiPicker((v) => !v)}>
              <EmojiEmotionsIcon color={showEmojiPicker ? "primary" : "default"} />
            </IconButton>

            <IconButton onClick={() => setShowGifPicker((v) => !v)}>
              <GifIcon color={showGifPicker ? "primary" : "default"} />
            </IconButton>

            <TextField
              fullWidth
              size="small"
              placeholder="Write a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>

            {/* Emoji Picker */}
            {showEmojiPicker && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: "60px",
                  right: "20px",
                  zIndex: 10,
                }}
              >
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </Box>
            )}

            {/* GIF Picker */}
            {showGifPicker && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: "60px",
                  right: "80px",
                  zIndex: 10,
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  p: 1,
                  width: 320,
                  height: 260,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <InputBase
                  placeholder="Search GIFs..."
                  value={gifSearch}
                  onChange={(e) => setGifSearch(e.target.value)}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 1,
                    px: 1,
                    mb: 1,
                    fontSize: "14px",
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                    overflowY: "auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 1,
                  }}
                >
                  {gifList.map((gif, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={gif}
                      alt="gif"
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        cursor: "pointer",
                        "&:hover": { opacity: 0.8 },
                      }}
                      onClick={() => handleGifSelect(gif)}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Messages;
