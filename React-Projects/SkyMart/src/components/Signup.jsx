import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useContext, useState } from "react";
import { MyStore } from "../Context/MyContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { onSignup } = useContext(MyStore);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    onSignup(data);
    navigate("/login")
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        {/* LEFT */}
        <div className="relative hidden overflow-hidden bg-gray-950 p-10 text-white md:flex md:flex-col md:justify-between">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-indigo-600/30 blur-3xl" />

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
              Start your
              <span className="text-indigo-400"> shopping journey.</span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Create your SkyMart account and unlock a faster and more
              personalized shopping experience.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-sm text-gray-300">
                  Save your favorite products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-sm text-gray-300">Track your orders</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-sm text-gray-300">
                  Get exclusive offers
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
              <ShoppingBag size={18} />
            </div>

            <p className="text-sm text-gray-400">Shop smarter with SkyMart.</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative p-7 sm:p-10">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-semibold text-indigo-600">GET STARTED</p>

            <h2 className="mt-2 text-3xl font-bold">Create your account</h2>

            <p className="mt-2 text-sm text-gray-500">
              Join thousands of shoppers on SkyMart.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="mt-7">
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 px-4 focus-within:border-indigo-500">
                  <User size={19} className="text-gray-400" />

                  <input
                    {...register("name", {
                      required: "Please enter your name",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent px-3 py-3 outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 px-4 focus-within:border-indigo-500">
                  <Mail size={19} className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent px-3 py-3 outline-none"
                    {...register("email", {
                      required: "Please enter your email",
                    })}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent px-3 py-3 outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 px-4 focus-within:border-indigo-500">
                  <Lock size={19} className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    required
                    minLength={6}
                    className="w-full bg-transparent px-3 py-3 outline-none"
                    {...register("password", {
                      required: "Please enter a password",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-gray-400"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Signup */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white hover:bg-indigo-700"
              >
                Create Account
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-indigo-600"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
