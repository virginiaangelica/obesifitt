import FormEditProfil from "@/components/fragments/form/FormEditProfil";
import Image from "@/assets/images 2/Profil.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditProfilPage() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); 

    Swal.fire({
      title: "Yakin mau keluar dari akun ini?",  
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
        popup: 'flex flex-col items-center', 
        title: 'text-xl font-semibold text-center', 
        image: 'my-4', 
        confirmButton: 'bg-green-500 text-white py-2 px-6 rounded-lg mt-4', 
        cancelButton: 'bg-red-500 text-white py-2 px-6 rounded-lg mt-4', 
      },
      // Action ketika tombol Keluar ditekan
      preConfirm: () => {
        navigate("/dashboard"); 
        return true;
      },
    });
  };

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
          <img
            src={Image}
            alt="Profil Kecil"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>

      {/* Konten utama */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-lg p-8">
          <header className="text-center">
            <p className="text-lg mt-6">Ini dia halaman buat edit profil kamu!</p>
          </header>

          {/* Bagian gambar profil */}
          <div className="flex flex-col items-center mt-8">
            <img
              src={Image}
              alt="Profil"
              className="w-32 h-32 drop-shadow-2xl rounded-full" 
            />
            <button className="mt-4 bg-[#415952] text-white py-2 px-5 rounded-[10px] shadow-md">
              Ganti Foto Profil
            </button>
          </div>

          {/* Form untuk pengeditan profil */}
          <div className="mt-8">
            <FormEditProfil />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-start p-12 bg-white shadow-md">
        <button
          className="bg-[#C90000] text-white py-1 px-8 rounded-[10px]"
          onClick={handleLogout} 
        >
          Keluar
        </button>
      </footer>
    </section>
  );
}
