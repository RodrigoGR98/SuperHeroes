import { Routes as Pages, Route } from "react-router-dom";

import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Battle from "./pages/Battle";

export default function Routes() {
  return (
    <Pages>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/battle" element={<Battle />} />
    </Pages>
  );
}
