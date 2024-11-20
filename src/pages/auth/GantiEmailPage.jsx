import FormGantiEmail from "@/components/fragments/form/FormGantiEmail";
import Image from "@/assets/images 2/Profil.jpg";

export default function GantiEmailPage() {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white">
        <span className="text-xl font-bold pl-12">ObesiFit</span>
        <div className="flex items-center space-x-6 pr-12">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">Artikel</a>
          <a href="#" className="text-black">Video</a>
          <a href="#" className="text-black">Kalkulator</a>
          <a href="#" className="text-black">Konsultasi</a>
          <img src={Image} alt="Profil Kecil" className="w-8 h-8 rounded-full" />
        </div>
      </nav>

      {/* Konten utama */}
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1 className="text-1xl mb-8">Ganti Alamat Email Lama Kamu</h1>
        
        {/* Bagian gambar profil */}
        <div className="flex flex-col items-center mb-8">
          <img src={Image} alt="Profil" className="w-32 h-32 rounded-full shadow-lg" />
        </div>

        {/* Form untuk mengganti email */}
        <FormGantiEmail />
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-10 bg-white shadow-md">
        <button className="bg-[#C90000] text-white py-1 px-7 rounded-[10px]">Kembali</button>
      </footer>
    </section>
  );
}
