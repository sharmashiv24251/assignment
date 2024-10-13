import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import RoleSelector from "./RoleSelector";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { addMessage } from "../store/chatSlice";

const theme = createTheme({});

export default function Chat() {
  const [userRole, setUserRole] = useState("sender");
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  const handleSendMessage = (content) => {
    dispatch(addMessage({ role: userRole, content }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <RoleSelector userRole={userRole} setUserRole={setUserRole} />
          <MessageList messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} userRole={userRole} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
