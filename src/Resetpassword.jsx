import React, { useState } from 'react';

export default function ResetPassword({ onBack }) {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Implement reset password logic here (API call, etc.)
    alert('Password reset successful!');
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
        Reset Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={6}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          minLength={6}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
