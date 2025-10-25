import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
);
