import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import UserList from "./components/UserList";
import './index.css';

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<UserList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
