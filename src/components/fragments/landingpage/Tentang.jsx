import React from "react";


const Tentang = ({imageSrc,alt}) => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-12 text-center text-black max-md:px-5 bg-[#D5EFE9]">
      <div className="flex flex-col items-center w-full max-w-[1671px] max-md:max-w-full">
        <header className="px-8 pt-5 pb-3 ml-3.5 max-w-full text-5xl font-bold tracking-normal leading-none bg-emerald-100 shadow-xl rounded-[35px] w-[455px] max-md:px-5 max-md:text-4xl">Tentang Obesifit</header>
        <article className="mt-16 ml-3.5 text-2xl font-medium tracking-wide leading-10 max-md:mt-10 max-md:max-w-full">
          Website ini didedikasikan untuk memberikan pemahaman tentang obesitas dan cara mengelolanya, untuk semua kalangan—dari anak-anak hingga dewasa. Kami menyajikan informasi terpercaya yang mudah diakses, membantu Anda menjalani gaya
          hidup sehat dan menyadari risiko obesitas.
        </article>
        <img
          loading="lazy"
          src={imageSrc}
          alt={alt}
          className="object-contain self-stretch w-full aspect-[2.77] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Tentang;
