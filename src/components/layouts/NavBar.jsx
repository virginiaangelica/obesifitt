import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#f7f7f8] rounded-lg shadow-xl">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="font-bold text-2xl md:text-4xl text-black">
          ObesiFit
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 ">
        <a href="#home" className="text-md  text-black hover:text-green-500">
          Home
        </a>
        <a
          href="#tentang-kami"
          className="text-md  text-black hover:text-green-500"
        >
          Tentang Kami
        </a>
        <a href="#fitur" className="text-md  text-black hover:text-green-500">
          Fitur
        </a>
        <a
          href="#testimoni"
          className="text-md  text-black hover:text-green-500"
        >
          Testimoni
        </a>
      </div>

      <div className="flex items-center space-x-4">
        {/* Login Button */}
        <Link
          to="/login"
          className="hidden md:flex items-center justify-center w-[150px] h-[50px] bg-white rounded-full border-2 border-[#90f987] text-sm text-black hover:bg-[#90f987] hover:text-white transition-colors duration-200"
        >
          Masuk
        </Link>

        {/* Sign Up Button */}
        <Link
          to="/register"
          className="hidden md:flex items-center justify-center w-[150px] h-[50px] bg-green-500 rounded-full text-sm text-white hover:bg-green-600 transition-colors duration-200"
        >
          Daftar
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button className="text-black text-2xl">☰</button>
      </div>
    </div>
  );
};

export default Navbar;
