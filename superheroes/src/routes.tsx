import { Routes as Pages, Route } from "react-router-dom";

import Home from './pages/Home';

export default function Routes() {
  return (
    <Pages>
      <Route path="/" element={<Home />} />
    </Pages>
  );
}
