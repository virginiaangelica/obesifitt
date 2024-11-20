import FormEditProfilAdmin from "@/components/fragments/form/FormEditProfilAdmin";
import AdminImage from "@/assets/images 2/profil admin.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiSearch } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";

export default function EditProfilAdminPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-4 bg-white">
        {/* Tulisan ObesiFit */}
        <span className="text-xl font-bold text-black">ObesiFit</span>

        {/* Input Pencarian di Tengah, Geser ke Kanan */}
        <div className="relative w-full max-w-lg ml-10">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Mau cari apa nih?"
            className="w-full bg-gray-200 rounded-full pl-10 py-2 text-sm text-gray-800 focus:outline-none"
          />
        </div>

        {/* Ikon Notifikasi dan Profil */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MdNotifications className="text-black" size={24} />
            <span className="text-black">Notifikasi</span>
          </div>
          <img
            src={AdminImage}
            alt="Profil Admin"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <button
            className="bg-red-600 text-white py-1 px-4 rounded-[10px] shadow-md"
            onClick={() => navigate("/login-admin")}
          >
            Keluar
          </button>
        </div>
      </nav>

      {/* Konten Utama */}
      <div className="flex flex-col items-center mt-6">
        <header className="text-center w-full max-w-lg mt-6">
          <p className="text-lg">Ini dia halaman buat edit profil kamu!</p>
        </header>

        {/* Bagian gambar profil */}
        <div className="flex flex-col items-center mt-8">
          <img
            src={AdminImage}
            alt="Profil Admin"
            className="w-32 h-32 drop-shadow-2xl rounded-full"
          />
          <button className="mt-4 bg-[#415952] text-white py-2 px-5 rounded-[10px] shadow-md">
            Ganti Foto Profil
          </button>
        </div>

        {/* Form untuk pengeditan profil */}
        <div className="mt-8 w-full max-w-lg">
          <FormEditProfilAdmin />
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-12 bg-white">
        <button
          className="bg-[#C90000] text-white py-1 px-8 rounded-[10px]"
        >
          Kembali
        </button>
      </footer>
    </section>
  );
}
