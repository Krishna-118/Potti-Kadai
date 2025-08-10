import React, { useState } from 'react';

export default function Login({ onBack, onForgotPassword }) {
  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Logging in as ${form.usernameOrEmail}`);
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
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="usernameOrEmail"
          value={form.usernameOrEmail}
          onChange={handleChange}
          placeholder="Username or Email"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="py-3 px-6 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-primary underline hover:text-secondary font-medium"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
}
