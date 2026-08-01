import React from "react";

const Profile = ({user}) => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-14">
          <img
            src={user.image}
            alt=""
            className="w-28 h-28 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-5 px-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {user.name}
          </h2>

          <p className="text-slate-500">
                        {user.email}

          </p>
        </div>

        {/* Details */}
        <div className="mt-8 border-t">
          <div className="flex justify-between px-6 py-4 border-b">
            <span className="font-medium text-slate-600">Name</span>
            <span className="text-slate-800">{user.name}</span>
          </div>

          <div className="flex justify-between px-6 py-4 border-b">
            <span className="font-medium text-slate-600">Email</span>
            <span className="text-slate-800">{user.email}</span>
          </div>

          <div className="flex justify-between px-6 py-4">
            <span className="font-medium text-slate-600">Password</span>
            <span className="text-slate-800">{user.password}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 p-6">
          <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Edit Profile
          </button>

          <button className="flex-1 py-2 rounded-lg border border-slate-300 hover:bg-slate-100">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;