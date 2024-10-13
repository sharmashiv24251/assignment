import React from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Chat from "./components/Chat.jsx";

function App() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

export default App;
