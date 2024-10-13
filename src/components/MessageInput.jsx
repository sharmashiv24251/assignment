import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { MdOutlineSend as SendIcon } from "react-icons/md";

export default function MessageInput({ onSendMessage, disabled }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, display: "flex" }}
      className="mb-3"
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder={
          disabled ? "You can't send messages as a receiver" : "Type a message"
        }
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
        sx={{ mr: 1 }}
      />
      <IconButton
        type="submit"
        color="primary"
        aria-label="send message"
        disabled={disabled}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
}
