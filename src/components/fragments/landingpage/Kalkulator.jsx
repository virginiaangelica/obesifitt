import React from "react";
import Button from "@/components/elements/Button/Button";

const Kalkulator = ({imageSrc,alt,buttonText}) => {
    return (
      <section
        data-layername="fiturKedua"
        className="flex overflow-hidden flex-col justify-center self-stretch px-36 py-20 text-black bg-[linear-gradient(100deg,rgba(127,195,176,0.15_7.05%,rgba(78,172,146,0.10)_50.64%))] max-md:px-5 bg-[#D5EFE9]"
      >
        <div className="flex flex-wrap gap-24 items-center w-full max-md:max-w-full">
          <div data-layername="leftContent" className="flex flex-col flex-1 shrink items-start self-stretch py-0.5 pr-12 my-auto rounded-2xl basis-0 min-w-[320px] max-md:max-w-full">
            <h2 data-layername="kalkulatorBmiJugaKaloriHarian" className="text-4xl font-semibold tracking-tighter leading-none max-md:max-w-full">
              Kalkulator BMI & juga kalori harian
            </h2>
            <p
              data-layername="hitungIndeksMassaTubuhBmiDanKebutuhanKaloriHarianDenganMudahAlatInteraktifIniMembantuAndaMemahamiKondisiTubuhDanMenentukanAsupanKaloriYangTepatSehinggaDapatMendukungPerjalananMenujuHidupSehatDenganLebihTerarah"
              className="self-stretch mt-8 text-lg font-light tracking-normal leading-7 max-md:max-w-full"
            >
              Hitung Indeks Massa Tubuh (BMI) dan kebutuhan kalori harian dengan mudah. Alat interaktif ini membantu Anda memahami kondisi tubuh dan menentukan asupan kalori yang tepat, sehingga dapat mendukung perjalanan menuju hidup sehat
              dengan lebih terarah.
            </p>
            <Button text={buttonText} />
          </div>
          <img loading="lazy" src={imageSrc} alt={alt} className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.24] basis-12 min-w-[320px] max-md:max-w-full" />
        </div>
      </section>
    );
};

export default Kalkulator;