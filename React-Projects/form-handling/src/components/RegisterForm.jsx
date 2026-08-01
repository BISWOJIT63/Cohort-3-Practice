import React from "react";

const RegisterForm = ({
  user,
  formData,
  handleSubmit,
  setUser,
  changeHandler,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800">
          Create Account
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-8">
          Register to create your profile
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              value={formData.name}
              name="name"
              required
              type="text"
              onChange={changeHandler}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Image URL
            </label>
            <input
              value={formData.image}
              required
              name="image"
              type="text"
              onChange={changeHandler}
              placeholder="https://example.com/profile.jpg"
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              value={formData.email}
              name="email"
              required
              type="email"
              onChange={changeHandler}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              value={formData.password}
              name="password"
              required
              type="password"
              onChange={changeHandler}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
