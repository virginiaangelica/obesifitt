import React from "react";
import Button from "@/components/elements/Button/Button";

const Fitur = ({imageSrc, title, description, buttonText}) => {
    return (
      <section className="flex overflow-hidden flex-col justify-center px-36 py-14 text-right text-black bg-neutral-300 bg-opacity-10 max-md:px-5">
        <div className="flex flex-wrap gap-16 items-center w-full max-md:max-w-full">
          <img loading="lazy" src={imageSrc} alt="Informative article and video content" className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.24] basis-[47px] min-w-[320px] max-md:max-w-full" />
          <div className="flex flex-col flex-1 shrink items-end self-stretch py-0.5 pl-12 my-auto rounded-2xl basis-0 min-w-[320px] max-md:max-w-full">
            <h2 className="text-4xl font-semibold tracking-tighter leading-none max-md:max-w-full">{title}</h2>
            <p className="self-stretch mt-10 text-lg font-light tracking-normal leading-7 max-md:mr-1.5 max-md:max-w-full">{description}</p>
            <Button text={buttonText} />
          </div>
        </div>
      </section>
    );
}

export default Fitur