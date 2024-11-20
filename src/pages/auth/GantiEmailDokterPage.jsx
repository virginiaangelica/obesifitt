import { useNavigate } from "react-router-dom";
import FormGantiEmailDokter from "@/components/fragments/form/FormGantiEmailDokter";
import Image from "@/assets/images 2/profil dokter.jpg";

export default function GantiEmailDokterPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white">
        <span className="text-xl font-bold pl-12">ObesiFit</span>
        <div className="flex items-center space-x-6 pr-12">
          <a href="#" className="text-black">
            Home
          </a>
          <a href="#" className="text-black">
            Artikel
          </a>
          <a href="#" className="text-black">
            Video
          </a>
          <a href="#" className="text-black">
            Kalkulator
          </a>
          <a href="#" className="text-black">
            Konsultasi
          </a>
          <img
            src={Image}
            alt="Profil Kecil"
            className="w-8 h-8 rounded-full"
          />
          <button
            className="bg-red-600 text-white py-1 px-4 rounded-[10px] shadow-md"
            onClick={() => navigate("/dashboard")}
          >
            Keluar
          </button>
        </div>
      </nav>

      {/* Konten utama */}
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1 className="text-1xl mb-8">Ganti Alamat Email Lama Kamu</h1>

        {/* Bagian gambar profil */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={Image}
            alt="Profil"
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </div>

        {/* Form untuk mengganti email */}
        <FormGantiEmailDokter />
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-10 bg-white shadow-md">
        <button
          className="bg-[#C90000] text-white py-2 px-7 rounded-[10px]"
          onClick={() => navigate("/editprofil-dokter")}
        >
          Kembali
        </button>
      </footer>
    </section>
  );
}
