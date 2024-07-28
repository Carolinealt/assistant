import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoPage from "./pages/TodoPage/TodoPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Home from "./pages/Home/HomePage";

// todo
// contacts
// timer
// Pomodoro Clock

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/todo" element={<TodoPage />}></Route>
      <Route path="/timer"></Route>
      <Route path="/pomodoro"></Route>
      <Route path="/contacts"></Route>
    </Routes>
  );
}

export default App;
