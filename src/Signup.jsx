import React, { useState } from 'react';

export default function Signup({ onBack }) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    otpSent: false,
    otp: '',
    otpVerified: false,
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendOtp = () => {
    alert(`Sending OTP to ${form.phone}`);
    setForm(prev => ({ ...prev, otpSent: true }));
  };

  const verifyOtp = () => {
    if (form.otp === '1234') {
      alert('OTP verified!');
      setForm(prev => ({ ...prev, otpVerified: true }));
    } else {
      alert('Invalid OTP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.otpVerified) {
      alert('Please verify OTP before submitting.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Signup successful!');
  };

  return (
    <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-xl p-8 shadow-soft-lg font-body text-muted-text max-w-md mx-auto">
      <button
        onClick={onBack}
        className="mb-6 text-primary hover:underline font-semibold"
      >
        &larr; Back
      </button>

      <h2 className="text-3xl font-heading font-bold mb-8 text-gradient-primary bg-clip-text text-transparent">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={form.otpSent}
        />

        {!form.otpSent ? (
          <button
            type="button"
            onClick={sendOtp}
            className="w-full py-3 rounded-md bg-accent text-white font-semibold hover:bg-secondary transition"
          >
            Send OTP
          </button>
        ) : (
          <>
            <input
              name="otp"
              value={form.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={form.otpVerified}
            />
            {!form.otpVerified && (
              <button
                type="button"
                onClick={verifyOtp}
                className="w-full py-3 mt-2 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition"
              >
                Verify OTP
              </button>
            )}
          </>
        )}

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={!form.otpVerified}
        />

        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={!form.otpVerified}
        />

        <button
          type="submit"
          disabled={!form.otpVerified}
          className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
