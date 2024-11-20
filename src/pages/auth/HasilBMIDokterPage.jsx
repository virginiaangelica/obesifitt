import FormHasilBMIDokter from "@/components/fragments/form/FormHasilBMIDokter";
import ProfilImage from "@/assets/images 2/profil dokter.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function HasilBMIDokterPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-12 bg-white">
        <span className="text-2xl font-bold text-black">ObesiFit</span>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:underline">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Artikel
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Video
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Kalkulator
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Konsultasi
          </a>
          <img
            src={ProfilImage}
            alt="Profil User"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <button
            className="bg-red-600 text-white py-1 px-4 rounded-[10px] shadow-md"
            onClick={() => navigate("/dashboard")}
          >
            Keluar
          </button>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="flex flex-col items-center mt-20">
        <FormHasilBMIDokter />
      </main>

      {/* Footer */}
      <footer className="bg-[#697077] text-white text-sm py-4 flex justify-between items-center px-12 mt-20">
        <div>ObesiFit @ 2024. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaYoutube />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaXTwitter />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </section>
  );
}
