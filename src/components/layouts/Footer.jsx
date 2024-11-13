import React from "react";
import vector from "../../assets/vector/Vector.png";

const Footer = () => {
  return (
    <div className="flex w-full h-[72px] items-center justify-between bg-coolgray-60 px-6">
      {/* Footer Text */}
      <p className="font-body-s text-defaultwhite text-sm text-center tracking-wide leading-5">ObesiFit @ 2024. All rights reserved.</p>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-4">
        {/* YouTube Icon (Inline SVG) */}
        <a href="https://youtube.com" aria-label="YouTube" className="w-6 h-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M23.498 6.186c-.208-1.65-.82-3.066-1.732-4.04-1.39-1.376-3.28-2.064-5.58-2.064-3.65 0-6.09 1.31-6.09 1.31-.55.25-.93.7-.98 1.3-.05.57-.06 1.04-.06 1.66 0 1.45.06 3.57.06 3.57.05.6.4 1.05.96 1.29 0 0 2.4 1.36 6.09 1.36 1.27 0 2.64-.27 3.95-.93 1.44-.69 2.71-1.56 3.55-2.51 1.09-1.27 1.66-2.76 1.66-4.3 0-.34-.01-.67-.04-1-.06-.62-.18-1.21-.38-1.79zm-12.5 5.1c0-.67-.02-1.24-.04-1.82-.03-.45-.19-.83-.56-1.07-.34-.24-.78-.32-1.21-.29-.78.05-1.57.29-2.21.72-1.18.69-1.92 1.76-1.92 3.05 0 2.06 1.6 3.14 3.5 3.14 2.22 0 3.58-1.26 3.58-3.07zm7.06-1.14c-.44.74-1.2 1.32-2.04 1.71-1.2.47-2.56.7-3.95.7-1.32 0-2.6-.22-3.74-.65-.68-.27-1.3-.64-1.88-1.08-.41-.32-.74-.72-.95-1.14-.22-.43-.32-.89-.32-1.36 0-.83.37-1.61.94-2.14-.01-.02 2.1-.94 5.3-.94 1.79 0 2.79 1.29 2.79 2.76 0 .72-.2 1.48-.56 2.14z" />
          </svg>
        </a>

        {/* Facebook Icon (Inline SVG) */}
        <a href="https://facebook.com" aria-label="Facebook" className="w-6 h-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M22 12.07c0 5.5-4.47 9.97-9.97 9.97-5.5 0-9.97-4.47-9.97-9.97 0-5.5 4.47-9.97 9.97-9.97 5.5 0 9.97 4.47 9.97 9.97zm-3.24 0c0-3.52-2.86-6.39-6.39-6.39s-6.39 2.87-6.39 6.39c0 3.52 2.86 6.39 6.39 6.39s6.39-2.87 6.39-6.39zm-1.79-1.91h-1.55c-.73 0-.88.37-.88.91v3.77h2.46l-.32 2.44h-2.14v6.3h-2.72v-6.3h-2.43v-2.44h2.43v-1.8c0-2.38 1.4-3.72 3.61-3.72 1.05 0 2.13.08 2.33.12v2.55z" />
          </svg>
        </a>

        {/* Vector Image Icon */}
        <a href="https://some-vector-link.com" aria-label="Vector" className="w-5 h-5">
          <img className="w-full h-full" alt="Vector" src={vector} />
        </a>

        {/* Instagram Icon (Inline SVG) */}
        <a href="https://instagram.com" aria-label="Instagram" className="w-6 h-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M7.75 0c-2.14 0-3.89 1.75-3.89 3.89v16.22c0 2.14 1.75 3.89 3.89 3.89h8.5c2.14 0 3.89-1.75 3.89-3.89v-16.22c0-2.14-1.75-3.89-3.89-3.89h-8.5zm6.28 2.4c.88 0 1.58.71 1.58 1.58s-.71 1.58-1.58 1.58-1.58-.71-1.58-1.58.71-1.58 1.58-1.58zm-3.95 4.67c-.47 0-.86.39-.86.86v6.55c0 .47.39.86.86.86h3.45c.47 0 .86-.39.86-.86v-6.55c0-.47-.39-.86-.86-.86h-3.45zm.86 6.27h2.3v-5.55h-2.3v5.55z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
