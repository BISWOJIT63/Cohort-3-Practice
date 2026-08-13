import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

const Login = ({ onClose, onSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-gray-950 p-10 text-white md:flex md:flex-col md:justify-between">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-600/30 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 font-bold">
                S
              </div>

              <h1 className="text-2xl font-bold">
                Sky<span className="text-indigo-400">Mart</span>
              </h1>
            </div>

            <h2 className="mt-16 text-4xl font-bold leading-tight">
              Welcome back to
              <span className="text-indigo-400">
                {" "}SkyMart.
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Sign in to manage your orders, save your favorite
              products and enjoy a personalized shopping experience.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                <ShoppingBag size={18} />
              </div>

              <div>
                <p className="font-semibold">
                  Everything you need
                </p>

                <p className="text-sm text-gray-500">
                  In one place.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative p-7 sm:p-10">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-gray-400 hover:text-gray-900"
          >
            ✕
          </button>

          <div className="mx-auto max-w-md">

            <p className="text-sm font-semibold text-indigo-600">
              WELCOME BACK
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Login to your account
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your details to continue shopping.
            </p>

            {/* Email */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 px-4 focus-within:border-indigo-500">
                <Mail
                  size={19}
                  className="text-gray-400"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent px-3 py-3.5 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mt-5">
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium">
                  Password
                </label>

                <button className="text-xs font-semibold text-indigo-600">
                  Forgot password?
                </button>
              </div>

              <div className="flex items-center rounded-xl border border-gray-200 px-4 focus-within:border-indigo-500">

                <Lock
                  size={19}
                  className="text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-3 py-3.5 outline-none"
                />

                <button
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>
            </div>

            {/* Login */}
            <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-700">
              Login
              <ArrowRight size={18} />
            </button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google */}
            <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3.5 font-medium hover:bg-gray-50">
              <span className="font-bold text-red-500">
                G
              </span>
              Continue with Google
            </button>

            {/* Signup */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Don't have an account?{" "}

              <button
                onClick={onSignup}
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Create account
              </button>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;