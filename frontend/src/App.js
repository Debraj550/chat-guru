import { Button } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} exact />
        <Route path="/chats" Component={ChatPage} />
      </Routes>
    </div>
  );
}

export default App;
