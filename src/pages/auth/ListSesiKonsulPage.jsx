import React from "react";
import FormListSesiKonsul from "@/components/fragments/form/formlistsesikonsul";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export default function ListSesiKonsulPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white flex flex-col">
      <header className="bg-white p-2">
        <nav className="flex justify-between items-center p-4 bg-white">
          <span className="text-xl font-bold pl-12">ObesiFit</span>
          <div className="flex items-center space-x-6 pr-12">
            <a href="#" className="text-black hover:underline">
              Home
            </a>
            <a href="#" className="text-black hover:underline">
              Artikel
            </a>
            <a href="#" className="text-black hover:underline">
              Video
            </a>
            <a href="#" className="text-black hover:underline">
              Kalkulator
            </a>
            <a href="#" className="text-black hover:underline">
              Konsultasi
            </a>
            <img
              src="src/assets/images 2/profil dokter.jpg"
              alt="Profil Dokter"
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
      </header>
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <h2 className="text-center text-2xl font-bold">
            List Sesi Konsultasi
          </h2>
          <p className="text-center text-gray-600">
            Berikut beberapa sesi konsultasi yang telah Anda lakukan dengan
            pengguna
          </p>
          <div className="mt-5">
            <FormListSesiKonsul />
          </div>
        </div>
      </main>

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
