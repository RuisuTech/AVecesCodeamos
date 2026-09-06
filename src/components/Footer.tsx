import React from "react";

const CHANNEL_URL = "https://www.youtube.com/@RuisuTech";

export default function Footer() {
  return (
    <footer className="border-t border-netflix-gray-dark bg-netflix-dark py-8">
      <div className="netflix-container flex flex-col items-center gap-4 text-center">
        <a href="/" className="text-xl font-bold text-white">
          A Veces Codeamos
        </a>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-netflix-gray transition-colors hover:text-white"
        >
          youtube.com/@RuisuTech
        </a>

        <p className="text-xs text-netflix-gray">
          &copy; {new Date().getFullYear()} A Veces Codeamos. Hecho con cafe y codigo.
        </p>
      </div>
    </footer>
  );
}
