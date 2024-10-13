import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [
      {
        role: "sender",
        content: "This looks Incomplete !",
      },
      {
        role: "receiver",
        content: "Yes! I have only Made the MVP",
      },
      {
        role: "sender",
        content: "Why so ?",
      },
      {
        role: "receiver",
        content:
          "I have noticed extremely low response rates from such assignments , I didnt want to waste my time",
      },
      {
        role: "receiver",
        content: "I'm sorry",
      },
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
