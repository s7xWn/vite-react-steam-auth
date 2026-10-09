import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import ProfilePage from "./ProfilePage.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
