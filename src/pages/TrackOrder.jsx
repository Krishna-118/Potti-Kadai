import React from "react";
import { MapPin, CheckCircle } from "lucide-react";

export default function TrackOrder() {
  const steps = [
    { label: "Order Placed", done: true },
    { label: "Packed", done: true },
    { label: "Out for Delivery", done: true },
    { label: "Delivered", done: false },
  ];

  return (
    <div className="min-h-screen bg-[#fef7f4] flex items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-pink-200 p-8 flex flex-col space-y-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 text-center">
          🚚 Track Your Order
        </h1>

        {/* Progress Tracker */}
        <div className="flex items-center justify-between relative px-4">
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-pink-100 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center z-10">
              {step.done ? (
                <CheckCircle className="text-teal-400 w-10 h-10" />
              ) : (
                <div className="w-10 h-10 border-4 border-pink-300 rounded-full bg-white flex items-center justify-center text-pink-400 font-bold">
                  {idx + 1}
                </div>
              )}
              <span
                className={`mt-2 text-sm md:text-base font-semibold ${
                  step.done ? "text-pink-600" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Map / Route Illustration */}
        <div className="flex flex-col items-center">
          <svg
            width="300"
            height="180"
            viewBox="0 0 300 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Road */}
            <path
              d="M50 150 Q150 50 250 150"
              stroke="#f472b6"
              strokeWidth="6"
              strokeDasharray="15 10"
              fill="none"
            />
            {/* Start - Bike Icon */}
            <circle cx="50" cy="150" r="18" fill="#2dd4bf" stroke="#14b8a6" strokeWidth="2" />
            <text
              x="50"
              y="155"
              textAnchor="middle"
              fill="white"
              fontWeight="bold"
              fontSize="12"
            >
              🏍
            </text>
            {/* Destination Pin */}
            <g transform="translate(250 150) scale(2)">
              <ellipse cx="0" cy="12" rx="6" ry="3" stroke="#f472b6" strokeWidth="1.5" fill="white" />
              <path
                d="M0 -12 C-7 -12, -7 0, 0 12 C7 0, 7 -12, 0 -12 Z"
                stroke="#f472b6"
                strokeWidth="1.5"
                fill="#2dd4bf"
              />
              <circle cx="0" cy="-5" r="4" stroke="#f472b6" strokeWidth="1.5" fill="white" />
            </g>
          </svg>
          <p className="mt-4 text-pink-600 font-semibold text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-400" />
            Your order is on the way!
          </p>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-center">
          <p className="text-lg font-semibold text-pink-600">Estimated Delivery Time</p>
          <p className="text-2xl font-bold text-pink-500">Today, 6:45 PM</p>
        </div>
      </div>
    </div>
  );
}
