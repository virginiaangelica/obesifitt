import React from 'react';

const ReviewCard = ({ name, title, imageSrc, review, starsSrc }) => {
  return (
    <article className="flex flex-col px-6 py-12 w-full rounded-2xl bg-zinc-100 shadow-[-159px_118px_55px_rgba(0,0,0,0)] max-md:px-5">
      <header className="flex gap-10">
        <div className="flex flex-col flex-1 self-start mt-2.5 tracking-tighter text-black">
          <h3 className="self-start text-3xl font-bold leading-loose">{name}</h3>
          <p className="mt-3 text-lg leading-none">{title}</p>
        </div>
        {imageSrc && (
          <div className="flex flex-col flex-1 rounded-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={`Portrait of ${name}`}
              className="object-contain aspect-[1.12] rounded-[259px] w-[135px]"
            />
          </div>
        )}
      </header>
      <p className="mt-24 text-lg font-light tracking-tighter leading-5 text-black max-md:mt-10 max-md:mr-2.5">
        {review} {/* Teks review tanpa tanda petik */}
      </p>
      {starsSrc && (
        <img
          loading="lazy"
          src={starsSrc}
          alt="Review rating"
          className="object-contain mt-12 max-w-full aspect-[5.95] w-[119px] max-md:mt-10"
        />
      )}
    </article>
  );
};

export default ReviewCard;
