import FormEditProfilDokter from "@/components/fragments/form/FormEditProfilDokter";
import DokterImage from "@/assets/images 2/profil dokter.jpg";
import { useNavigate } from "react-router-dom";

export default function EditProfilDokterPage() {
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
            src={DokterImage}
            alt="Profil Dokter"
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
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-lg p-8">
          <header className="text-center">
            <p className="text-lg mt-6">
              Ini dia halaman buat edit profil kamu!
            </p>
          </header>

          {/* Bagian gambar profil */}
          <div className="flex flex-col items-center mt-8">
            <img
              src={DokterImage}
              alt="Profil Dokter"
              className="w-32 h-32 drop-shadow-2xl rounded-full"
            />
            <button className="mt-4 bg-[#415952] text-white py-2 px-5 rounded-[10px] shadow-md">
              Ganti Foto Profil
            </button>
          </div>

          {/* Form untuk pengeditan profil */}
          <div className="mt-8">
            <FormEditProfilDokter />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-12 bg-white shadow-md">
        <button
          className="bg-[#C90000] text-white py-1 px-8 rounded-[10px]"
        >
          Kembali
        </button>
      </footer>
    </section>
  );
}
