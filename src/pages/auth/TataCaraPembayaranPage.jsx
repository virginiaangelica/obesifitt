import FormTataCaraPembayaran from "@/components/fragments/form/FormTataCaraPembayaran";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TataCaraPembayaranPage() {
  return (
    <section className="relative z-[100] bg-custom-bg bg-cover bg-center h-screen flex items-center justify-center">
      <Card className="max-w-md px-4 w-full drop-shadow-3xl py-8 rounded-[13px]">
        <CardHeader className="w-full justify-center">
          <CardTitle className="text-center text-xl font-bold">ObesiFit</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col space-y-4 text-center">
          <h3 className="font-semibold text-[14px]">Cara melakukan Pembayaran Langganan ObesiFit</h3>

          <ol className="text-left space-y-3 text-sm">
            <li>
              1. Berikut adalah kode pembayaranmu 
              <div className="flex items-center justify-between mt-1 border px-2 py-1 rounded-md bg-gray-100">
                <span className="font-semibold">164UVV8N6J</span>
                <span className="text-xs text-gray-500">Kode ini hanya berlaku selama 1 hari</span>
              </div>
            </li>
            <li>
              2. Lakukanlah pembayaran pada no rekening admin dibawah:
              <div className="flex items-center justify-between mt-1 border px-2 py-1 rounded-md bg-gray-100">
                <span className="font-semibold">BCA 809.009.2988</span>
                <span className="font-semibold">ObesiFit</span>
              </div>
            </li>
            <li>
              3. Setelah melakukan pembayaran, silahkan upload bukti pembayaran tersebut
            </li>
          </ol>

          <p className="text-left text-sm">
            4. Jika sudah mengupload foto pembayaran, silahkan klik tombol dibawah ini
          </p>

          <p className="text-left text-sm">
            Upload Bukti Pembayaran
          </p>

          <FormTataCaraPembayaran />
        </CardContent>
      </Card>
    </section>
  );
}
