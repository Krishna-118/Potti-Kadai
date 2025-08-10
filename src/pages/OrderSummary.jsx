import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8 font-sans" style={{ backgroundColor: "#fef7f4" }}>
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl border border-pink-300 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Order details */}
        <section className="md:w-2/3 p-10 text-pink-900">
          <h1 className="text-4xl font-extrabold mb-8 border-b border-pink-300 pb-4">
            🛒 Order Summary
          </h1>
          <ul className="space-y-6">
            {[
              { name: "🍎 Apple (x2)", price: 200 },
              { name: "🥛 Milk (x1)", price: 50 },
              { name: "🥚 Eggs (x12)", price: 80 },
            ].map(({ name, price }, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center text-lg font-medium border-b border-pink-200 pb-3"
              >
                <span>{name}</span>
                <span>₹{price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-pink-300 pt-6 text-lg font-semibold flex justify-between text-pink-800">
            <span>🚚 Delivery Charge</span>
            <span>₹40</span>
          </div>

          <div className="mt-6 flex justify-between text-2xl font-extrabold text-pink-900">
            <span>Total Pay</span>
            <span>₹370</span>
          </div>
        </section>

        {/* Right: Delivery Location with route */}
        <aside className="md:w-1/3 bg-pink-50 flex flex-col justify-between p-8 border-l border-pink-300">
          <div className="flex flex-col items-center space-y-6">
            {/* Route + Pin + POTTI KADAI box */}
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Delivery route with pin and box"
              role="img"
            >
              {/* Route path */}
              <path
                d="M30 30 H130 V70 H30 V110 H130"
                stroke="#f472b6"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="15 10"
              />
              {/* Pin icon */}
              <g transform="translate(130 110) scale(1.6)">
                <ellipse
                  cx="0"
                  cy="12"
                  rx="9"
                  ry="4"
                  stroke="#f472b6"
                  strokeWidth="2.5"
                  fill="white"
                />
                <path
                  d="M0 -14
                     C-9 -14, -9 0, 0 14
                     C9 0, 9 -14, 0 -14
                     Z"
                  stroke="#f472b6"
                  strokeWidth="2.5"
                  fill="#f472b6"
                />
                <circle
                  cx="0"
                  cy="-5"
                  r="6"
                  stroke="#f472b6"
                  strokeWidth="2.5"
                  fill="white"
                />
              </g>
              {/* Box with text */}
              <rect
                x="15"
                y="15"
                width="60"
                height="40"
                rx="6"
                fill="#2dd4bf"
                stroke="#14b8a6"
                strokeWidth="2"
              />
              <text
                x="45"
                y="32"
                fill="white"
                fontWeight="700"
                fontSize="14"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                pointerEvents="none"
              >
                <tspan x="45" dy="0">POTTI</tspan>
                <tspan x="45" dy="18">KADAI</tspan>
              </text>
            </svg>

            <p className="text-pink-800 font-semibold text-base">
              DELIVERY ON YOUR DOOR
            </p>
          </div>

          {/* Track Order Button */}
          <button
            onClick={() => navigate("/track")}
            className="mt-8 w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 rounded-lg shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            🚚 Track Order
          </button>
        </aside>
      </div>
    </div>
  );
}
