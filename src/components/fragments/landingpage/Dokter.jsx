import React from "react";
import Button from "@/components/elements/Button/Button";

const Dokter = ({ title, description , imageSrc, alt, buttonText}) => {
  return (
    <section className="flex overflow-hidden flex-col px-36 text-right text-black bg-neutral-300 bg-opacity-10 max-md:px-5">
      <div className="flex flex-wrap gap-16 items-center w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={alt}
          className="object-contain flex-1 shrink self-stretch my-auto w-full rounded-none aspect-[1.19] basis-5 min-w-[320px] max-md:max-w-full"
        />
        <div className="flex flex-col flex-1 shrink items-end self-stretch py-0.5 pl-5 my-auto rounded-2xl basis-0 min-w-[320px] max-md:max-w-full">
          <h2 className="text-4xl font-semibold tracking-tighter leading-none max-md:max-w-full">{title}</h2>
          <p className="self-stretch mt-7 text-lg font-light tracking-normal leading-7 max-md:max-w-full">{description}</p>
          <Button text={buttonText} />
        </div>
      </div>
    </section>
  );
};

export default Dokter;
