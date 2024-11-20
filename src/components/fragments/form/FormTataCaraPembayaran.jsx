import { useState } from "react";
import Swal from "sweetalert2";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom"; 

export default function FormTataCaraPembayaran() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();  

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logika pengiriman bukti pembayaran
    if (image) {
      Swal.fire({
        title: "ObesiFit",
        html: `
          Admin akan segera mengkonfirmasi pembayaran anda
          <img src="src/assets/images 2/Pembayaran2.png" alt="Success Image" class="mt-4 mx-auto" style="width: 340px; height: 140px;" />
        `,
        confirmButtonText: "Kembali ke Dashboard",
        confirmButtonColor: "#28a745",
        customClass: {
          popup: 'flex flex-col items-center',
          title: 'text-xl font-semibold text-center',
          confirmButton: 'bg-green-500 text-white py-2 px-35 rounded-lg mt-4',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/some-other-page');  
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap unggah bukti pembayaran terlebih dahulu.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="mt-1">
        <Input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mt-1 w-full"
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="mt-2 mx-auto h-20 w-20 object-cover border rounded-md"
          />
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white font-semibold rounded-md"
      >
        Kirim Bukti Pembayaran
      </Button>
    </form>
  );
}
