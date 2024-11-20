import React from 'react';
import SidebarHomeAdmin from '@/components/ui/SidebarHomeAdmin';
import NavbarAdmin from '@/components/ui/NavbarAdmin';
import FormKelolaDokter from '@/components/fragments/form/FormKelolaDokter';

const KelolaDokterPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarHomeAdmin />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <NavbarAdmin />
        <div className="p-6">

          {/* Form Daftar Dokter */}
          <FormKelolaDokter />
        </div>
      </div>
    </div>
  );
};

export default KelolaDokterPage;
