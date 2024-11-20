import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function FormKalkulatorKalori() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const navigate = useNavigate();

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!gender || !age || !height || !weight || !activityLevel) {
      Swal.fire({
        icon: "warning",
        title: "Form Belum Lengkap!",
        text: "Harap isi semua data terlebih dahulu.",
      });
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }

    let tdee;
    switch (activityLevel) {
      case "sedentary":
        tdee = bmr * 1.2;
        break;
      case "light":
        tdee = bmr * 1.375;
        break;
      case "moderate":
        tdee = bmr * 1.55;
        break;
      case "active":
        tdee = bmr * 1.725;
        break;
      case "very-active":
        tdee = bmr * 1.9;
        break;
      default:
        tdee = bmr;
    }

    Swal.fire({
      icon: "success",
      title: "Hasil Kalori Harian Kamu!",
      text: `Total Kalori Harian: ${tdee.toFixed(2)} kalori`,
    });

    navigate("/halaman-lain");
  };

  return (
    <form className="flex flex-col items-center space-y-14">
      <div className="flex space-x-60">
        <div
          className={`p-4 cursor-pointer ${
            gender === "male" ? "ring-2 ring-blue-500" : ""
          } rounded-lg text-center`}
          onClick={() => setGender("male")}
        >
          <img
            src="src/assets/images 2/Laki.png"
            alt="Laki-Laki"
            className="w-17 h-17 mx-auto"
          />
          <p className="text-gray-700 font-bold">Laki-Laki</p>
        </div>

        <div
          className={`p-4 cursor-pointer ${
            gender === "female" ? "ring-2 ring-pink-500" : ""
          } rounded-lg text-center`}
          onClick={() => setGender("female")}
        >
          <img
            src="src/assets/images 2/Cewe.png"
            alt="Perempuan"
            className="w-17 h-17 mx-auto"
          />
          <p className="text-gray-700 font-bold">Perempuan</p>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div>
          <Label htmlFor="age" className="block text-gray-700 font-medium">
            Berapa Usia Kamu
          </Label>
          <Input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Masukkan usia kamu"
            className="w-full mt-2 border-gray-300"
          />
        </div>

        <div>
          <Label htmlFor="height" className="block text-gray-700 font-medium">
            Berapa Tinggi Kamu (cm)
          </Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Masukkan tinggi badan kamu"
            className="w-full mt-2 border-gray-300"
          />
        </div>

        <div>
          <Label htmlFor="weight" className="block text-gray-700 font-medium">
            Berapa Berat Kamu (kg)
          </Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Masukkan berat badan kamu"
            className="w-full mt-2 border-gray-300"
          />
        </div>
      </div>

      <Button
        onClick={() => navigate("/hasil-kalori")}
        className="bg-primary text-white py-2 px-10 rounded-full mt-4"
      >
        Lanjutkan
      </Button>
    </form>
  );
}
