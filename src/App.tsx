import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/HomePage";
import TodoPage from "./pages/TodoPage/TodoPage";

// todo
// contacts
// timer
// Pomodoro Clock

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/todo" element={<TodoPage />}></Route>
      <Route path="/timer"></Route>
      <Route path="/pomodoro"></Route>
      <Route path="/contacts"></Route>
    </Routes>
  );
}

export default App;
