import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex justify-between items-center p-5 shadow-md">
      {/* Search Bar with Icon */}
      <div className="flex items-center border rounded-lg w-3/6 bg-gray-100 mx-auto">
        {" "}
        {/* Centered search bar */}
        <FiSearch className="text-gray-500 mx-3" size={20} />
        <input
          type="text"
          placeholder="Mau cari apa nih?"
          className="w-full p-2 bg-transparent focus:outline-none"
        />
      </div>

      {/* Profile and Notification Section */}
      <div className="flex items-center space-x-4">
        {/* Notification Text and Icon */}
        <div className="flex items-center space-x-2">
          <FiBell className="text-black" size={20} /> {/* Black FiBell Icon */}
          <span className="text-sm text-black font-semibold">Notifikasi</span>
        </div>

        {/* Profile Picture */}
        <img
          src="src/assets/images 2/profil admin.jpg"
          alt="profil admin"
          className="w-10 h-10 rounded-full"
        />
        <button
          className="bg-red-600 text-white py-1 px-4 rounded-[10px] shadow-md"
          onClick={() => navigate("/login-admin")}
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
