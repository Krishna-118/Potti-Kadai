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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 flex items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-blue-300 p-8 flex flex-col space-y-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center">
          🚚 Track Your Order
        </h1>

        {/* Progress Tracker */}
        <div className="flex items-center justify-between relative px-4">
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-blue-200 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center z-10">
              {step.done ? (
                <CheckCircle className="text-blue-600 w-10 h-10" />
              ) : (
                <div className="w-10 h-10 border-4 border-blue-400 rounded-full bg-white flex items-center justify-center text-blue-500 font-bold">
                  {idx + 1}
                </div>
              )}
              <span
                className={`mt-2 text-sm md:text-base font-semibold ${
                  step.done ? "text-blue-700" : "text-gray-500"
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
              stroke="#1E40AF"
              strokeWidth="6"
              strokeDasharray="15 10"
              fill="none"
            />
            {/* Start - Bike Icon */}
            <circle cx="50" cy="150" r="18" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
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
              <ellipse cx="0" cy="12" rx="6" ry="3" stroke="#1E40AF" strokeWidth="1.5" fill="white" />
              <path
                d="M0 -12 C-7 -12, -7 0, 0 12 C7 0, 7 -12, 0 -12 Z"
                stroke="#1E40AF"
                strokeWidth="1.5"
                fill="#3B82F6"
              />
              <circle cx="0" cy="-5" r="4" stroke="#1E40AF" strokeWidth="1.5" fill="white" />
            </g>
          </svg>
          <p className="mt-4 text-blue-800 font-semibold text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Your order is on the way!
          </p>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 text-center">
          <p className="text-lg font-semibold text-blue-800">Estimated Delivery Time</p>
          <p className="text-2xl font-bold text-blue-900">Today, 6:45 PM</p>
        </div>
      </div>
    </div>
  );
}
