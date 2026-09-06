import React from "react";

const CHANNEL_URL = "https://www.youtube.com/@RuisuTech";

export default function NavBar() {
  return (
    <header className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 sm:px-12 md:px-16 lg:px-20">
      <a href="/" className="relative z-10 text-xl font-bold tracking-tight text-white sm:text-2xl">
        A Veces Codeamos
      </a>

      <a
        href={CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="netflix-btn rounded-sm text-sm font-medium"
      >
        Ver en YouTube
      </a>
    </header>
  );
}
