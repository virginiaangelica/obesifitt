import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import Swal from "sweetalert2";

const FormKelolaDokter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const doctors = [
    {
      name: "Dr. Hermina Novida, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 1.png",
    },
    {
      name: "Dr. Hendra Zufry, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 2.png",
    },
    {
      name: "Dr. Hoo Yumilia, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/profil dokter.jpg",
    },
    {
      name: "Dr. Johannes Purwoto, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 4.jpg",
    },
    {
      name: "Dr. Indra Wijaya, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 5.png",
    },
    {
      name: "Dr. I Gusti Ngurah Adhiartha, Sp.PD, KEMD",
      profilePic: "src/assets/images 2/dokter 6.png",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRejectDoctor = (doctorName) => {
    Swal.fire({
      title: `Yakin mau hapus akun dokter ini?`,
      showCancelButton: true,
      confirmButtonText: "Konfirmasi",
      cancelButtonText: "Batalkan",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      reverseButtons: true,
      html: `
        <div class="flex flex-col items-center space-y-4">
          <img src="src/assets/images 2/pop up 1.png" alt="Custom Image" class="mx-auto" style="width: 100px; height: 100px;">
        </div>
      `,
      customClass: {
        popup: "flex flex-col items-center",
        title: "text-xl font-semibold text-center",
        image: "my-4",
        confirmButton: "bg-green-500 text-white py-2 px-6 rounded-lg mt-4",
        cancelButton: "bg-red-500 text-white py-2 px-6 rounded-lg mt-4",
      },
      preConfirm: () => {
        // Redirect or perform action here after confirmation
        console.log(`Dokter ${doctorName} ditolak.`);
        return true;
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      {/* Card Kelola Dokter */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-300">
        <h1 className="text-2xl font-bold mb-6">Kelola Dokter</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-start">
            <p className="font-semibold text-gray-500">Total Dokter</p>
            <p className="text-2xl font-bold">28</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-start">
            <p className="font-semibold text-gray-500">Jumlah Dokter Aktif</p>
            <p className="text-2xl font-bold">10</p>
          </div>
        </div>
      </div>

      {/* Card Temukan Dokter */}
      <div className="bg-white rounded-lg shadow-lg p-7 border border-gray-300">
        <h2 className="text-lg font-bold mb-4">Temukan Dokter</h2>
        {/* Search Bar */}
        <div className="mb-4 flex items-center border rounded-lg bg-gray-100">
          <FiSearch className="text-gray-500 mx-3" size={20} />
          <input
            type="text"
            placeholder="Temukan Dokter"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-3 bg-transparent focus:outline-none"
          />
        </div>

        {/* Daftar Dokter */}
        <div>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg mb-2"
              >
                <div className="flex items-center">
                  <img
                    src={doctor.profilePic}
                    alt="profil dokter"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <span className="font-semibold text-sm text-gray-400">
                    {doctor.name}
                  </span>
                </div>
                <FiX
                  className="text-black cursor-pointer"
                  size={20}
                  onClick={() => handleRejectDoctor(doctor.name)}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Dokter tidak ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormKelolaDokter;
