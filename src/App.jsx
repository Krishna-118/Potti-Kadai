import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderSummary from "./pages/OrderSummary";
import TrackOrder from "./pages/TrackOrder";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderSummary />} />
        <Route path="/track" element={<TrackOrder />} />
      </Routes>
    </Router>
  );
}
