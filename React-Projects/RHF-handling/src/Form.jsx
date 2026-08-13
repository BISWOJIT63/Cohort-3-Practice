import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
const Form = ({ setToggle, setUser, user, upadateData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: upadateData || {},
  });
  const onSubmit = (data) => {
    if (upadateData) {
      let arr = user.map((item) => {
        return item.id === upadateData.id ? { ...data } : item;
      });
      setUser(arr);
      localStorage.setItem("user", JSON.stringify(arr));
    } else {
      const arr = [...user, { ...data, id: nanoid() }];
      setUser(arr);
      localStorage.setItem("user", JSON.stringify(arr));
    }
    setToggle((prev) => !prev);
    reset();
  };
  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Create User
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Name</label>

          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter name"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>

          <input
            {...register("email", { required: "email is required" })}
            type="email"
            placeholder="Enter email"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Mobile Number
          </label>

          <input
            {...register("mobile", {
              required: "Mobile is required",
              minLength: {
                value: 10,
                message: "Invalid Mobile Number",
              },
              maxLength: {
                value: 10,
                message: "Invalid Mobile Number",
              },
            })}
            type="tel"
            placeholder="Enter mobile number"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.mobile && (
            <p className="text-red-500">{errors.mobile.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Image URL
          </label>

          <input
            {...register("url", { required: "url is required" })}
            type="text"
            placeholder="Paste image URL"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          {errors.url && <p className="text-red-500">{errors.url.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Form;
