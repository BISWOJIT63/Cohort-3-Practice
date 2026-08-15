import { Mail, Lock, Eye, EyeOff, ArrowRight, ShoppingBag } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../Context/MyContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { onLogin, loginError } = useContext(MyStore);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onLogin(data);
  };

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
              <span className="text-indigo-400"> SkyMart.</span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Sign in to manage your orders, save your favorite products and
              enjoy a personalized shopping experience.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                <ShoppingBag size={18} />
              </div>

              <div>
                <p className="font-semibold">Everything you need</p>
                <p className="text-sm text-gray-500">In one place.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative p-7 sm:p-10">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-semibold text-indigo-600">
              WELCOME BACK
            </p>

            <h2 className="mt-2 text-3xl font-bold">Login to your account</h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your details to continue shopping.
            </p>

            {/* FORM */}
            {loginError && (
              <p className="p-2 border rounded-2xl bg-red-100 text-red-500 text-sm mt-2">{loginError}</p>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="mt-8">
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <div
                  className={`flex items-center rounded-xl border px-4 focus-within:border-indigo-500 ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <Mail size={19} className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent px-3 py-3.5 outline-none"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mt-5">
                <div className="mb-2 flex justify-between">
                  <label className="text-sm font-medium">Password</label>
                </div>

                <div
                  className={`flex items-center rounded-xl border px-4 focus-within:border-indigo-500 ${
                    errors.password ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <Lock size={19} className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-transparent px-3 py-3.5 outline-none"
                    {...register("password", {
                      required: "Please enter your password",
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

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-700"
              >
                Login
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Signup */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
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
