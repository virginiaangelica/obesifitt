import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import EmailPage from "@/pages/auth/EmailPage";
import LoginDokterPage from "@/pages/auth/LoginDokterPage";
import RegisterDokterPage from "@/pages/auth/RegisterDokterPage";
import EmailDokterPage from "./pages/auth/EmailDokterPage";
import LoginAdminPage from "./pages/auth/LoginAdminPage";
import Dashboard from "./pages/DashboardPage";
import Register2Page from "./pages/auth/Register2Page";
import PembayaranLanggananPage from "./pages/auth/PembayaranLanggananPage";
import TataCaraPembayaranPage from "./pages/auth/TataCaraPembayaranPage";
import Pembayaran2Page from "./pages/auth/Pembayaran2Page";
import EditProfilPage from "./pages/auth/EditProfilPage";
import GantiEmailPage from "./pages/auth/GantiEmailPage";
import EditProfilDokterPage from "./pages/auth/EditProfilDokterPage";
import GantiEmailDokterPage from "./pages/auth/GantiEmailDokterPage";
import EmailAdminPage from "./pages/auth/EmailAdminPage";
import EditProfilAdminPage from "./pages/auth/EditProfilAdminPage";
import GantiEmailAdminPage from "./pages/auth/GantiEmailAdminPage";
import KalkulatorBMIPage from "./pages/auth/KalkulatorBMIPage";
import KalkulatorKaloriPage from "./pages/auth/KalkulatorKaloriPage";
import HasilBMIPage from "./pages/auth/HasilBMIPage";
import HasilKaloriPage from "./pages/auth/HasilKaloriPage";
import KalkulatorBMIDokterPage from "./pages/auth/KalkulatorBMIDokterPage";
import HasilBMIDokterPage from "./pages/auth/HasilBMIDokterPage";
import KalkulatorKaloriDokterPage from "./pages/auth/KalkulatorKaloriDokterPage";
import HasilKaloriDokterPage from "./pages/auth/HasilKaloriDokterPage"
import ListDokterPage from "./pages/auth/ListDokterPage";
import ListSesiKonsulPage from "./pages/auth/ListSesiKonsulPage";
import DaftarDokterAdminPage from "./pages/auth/DaftarDokterAdminPage";
import KelolaDokterPage from "./pages/auth/KelolaDokterPage";
import KelolaPembayaranPage from "./pages/auth/KelolaPembayaranPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/email",
    element: <EmailPage />,
  },
  {
    path: "/login-dokter",
    element: <LoginDokterPage />,
  },
  {
    path: "/register-dokter",
    element: <RegisterDokterPage />,
  },
  {
    path: "/email-dokter",
    element: <EmailDokterPage />,
  },
  {
    path: "/login-admin",
    element: <LoginAdminPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/register2",
    element: <Register2Page />,
  },
  {
    path: "/pembayaran-langganan",
    element: <PembayaranLanggananPage />,
  },
  {
    path: "/tatacara-pembayaran",
    element: <TataCaraPembayaranPage />,
  },
  {
    path: "/pembayaran2",
    element: <Pembayaran2Page />,
  },
  {
    path: "/edit-profil",
    element: <EditProfilPage />,
  },
  {
    path: "/ganti-email",
    element: <GantiEmailPage />,
  },
  {
    path: "/editprofil-dokter",
    element: <EditProfilDokterPage />,
  },
  {
    path: "/gantiemail-dokter",
    element: <GantiEmailDokterPage />,
  },
  {
    path: "/email-admin",
    element: <EmailAdminPage />,
  },
  {
    path: "/editprofil-admin",
    element: <EditProfilAdminPage />,
  },
  {
    path: "/gantiemail-admin",
    element: <GantiEmailAdminPage />,
  },
  {
    path: "/kalkulator-bmi",
    element: <KalkulatorBMIPage />,
  },
  {
    path: "/kalkulator-kalori",
    element: <KalkulatorKaloriPage />,
  },
  {
    path: "/hasil-bmi",
    element: <HasilBMIPage />,
  },
  {
    path: "/hasil-kalori",
    element: <HasilKaloriPage />,
  },
  {
    path: "/kalkulatorbmi-dokter",
    element: <KalkulatorBMIDokterPage />,
  },
  {
    path: "/hasilbmi-dokter",
    element: <HasilBMIDokterPage />,
  },
  {
    path: "/kalkulatorkalori-dokter",
    element: <KalkulatorKaloriDokterPage />,
  },
  {
    path: "/hasilkalori-dokter",
    element: <HasilKaloriDokterPage />,
  },
  {
    path: "/list-dokter",
    element: <ListDokterPage />,
  },
  {
    path: "/list-konsul",
    element: <ListSesiKonsulPage />,
  },
  {
    path: "/daftardokter-admin",
    element: <DaftarDokterAdminPage />,
  },
  {
    path: "/kelola-dokter",
    element: <KelolaDokterPage />,
  },
  {
    path: "/kelola-pembayaran",
    element: <KelolaPembayaranPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
