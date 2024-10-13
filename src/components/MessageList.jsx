import React, { useRef, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent:
              message.role === "sender" ? "flex-end" : "flex-start",
            mb: 2,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              backgroundColor:
                message.role === "sender" ? "primary.light" : "secondary.light",
              maxWidth: "max(30%, 250px)",
            }}
          >
            <Typography variant="body1">{message.content}</Typography>
          </Paper>
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
}
