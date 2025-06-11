import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cards" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
