import React from "react";

const CHANNEL_URL = "https://www.youtube.com/@RuisuTech";

export default function Footer() {
  return (
    <footer className="border-t border-ocean-border bg-ocean-dark py-8">
      <div className="ocean-container flex flex-col items-center gap-4 text-center">
        <a href="/" className="text-xl font-bold gradient-text">
          A Veces Codeamos
        </a>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-ocean-muted transition-colors hover:text-ocean-cyan"
        >
          youtube.com/@RuisuTech
        </a>

        <p className="text-xs text-ocean-secondary">
          &copy; {new Date().getFullYear()} A Veces Codeamos. Hecho con cafe y codigo.
        </p>
      </div>
    </footer>
  );
}
