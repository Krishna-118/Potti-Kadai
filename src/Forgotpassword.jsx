import React, { useState } from 'react';

export default function ForgotPassword({ onBack }) {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const sendOtp = () => {
    if (!phone) {
      alert('Please enter your phone number');
      return;
    }
    alert(`Sending OTP to ${phone}`);
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (otp === '1234') {
      alert('OTP verified!');
      setOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert('Please verify OTP before proceeding.');
      return;
    }
    alert('Proceed to reset password page');
    // You can redirect to reset password page here
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
        Forgot Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={otpSent}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {!otpSent ? (
          <button
            type="button"
            onClick={sendOtp}
            className="w-full py-3 rounded-md bg-accent text-muted-text font-semibold hover:bg-secondary transition"
          >
            Send OTP
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={otpVerified}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {!otpVerified && (
              <button
                type="button"
                onClick={verifyOtp}
                className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition"
              >
                Verify OTP
              </button>
            )}
          </>
        )}

        <button
          type="submit"
          disabled={!otpVerified}
          className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}
