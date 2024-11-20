import FormKalkulatorKaloriDokter from "@/components/fragments/form/FormKalkulatorKaloriDokter";
import BackgroundImage from "@/assets/images 2/banner kalori.png";
import ProfilImage from "@/assets/images 2/profil dokter.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function KalkulatorKaloriDokterPage() {
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
            src={ProfilImage}
            alt="Profil User"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
        </div>
      </nav>

      {/* Konten Utama */}
      <div className="flex flex-col items-center mt-2">
        {/* Banner */}
        <header className="relative w-full">
          <img
            src={BackgroundImage}
            alt="Background Kalkulator Kalori"
            className="w-screen h-auto object-cover block"
          />
          <h1 className="text-2xl text-center font-semibold text-black mt-7">
            Ini dia Kalkulator Kalori buat kamu!
          </h1>
          <p className="text-center mt-4 text-xm text-gray-600">
            Gunakan kalkulator kalori ini untuk cek kebutuhan kalori harianmu. Yuk, mulai pantau asupan kalori dan jaga kesehatan!
          </p>
        </header>

        {/* Form untuk Kalkulator Kalori */}
        <div className="mt-10 w-full max-w-2xl">
          <FormKalkulatorKaloriDokter />
        </div>
      </div>

      <div className="text-center font-bold text-primary text-[15px] mt-6">
        <a href="/kalkulatorbmi-dokter">Yuk, cek kalkulator BMI</a>
      </div>

      {/* Footer */}
      <footer className="bg-[#697077] text-white text-sm py-4 flex justify-between items-center px-12 mt-20">
        <div className="text-sm">
          <p>ObesiFit @ 2024. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaYoutube />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaXTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </section>
  );
}