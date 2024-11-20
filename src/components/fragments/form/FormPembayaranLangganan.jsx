import { Button } from "@/components/ui/button";

export default function FormPembayaranLangganan() {
  return (
    <div className="flex flex-col items-center space-y-4">

      <Button className="bg-primary text-white font-bold w-full py-2 rounded-md" size="lg">
        Lakukan Pembayaran Sekarang
      </Button>
    </div>
  );
}
