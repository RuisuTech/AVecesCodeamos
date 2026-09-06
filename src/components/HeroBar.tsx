import React from "react";

const VIDEO_ID = "NJDVVdiGYqQ";
const CHANNEL_URL = "https://www.youtube.com/@RuisuTech";

export default function HeroBar() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ocean-dark">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center animate-fade-in">
        <p className="mb-4 text-sm uppercase tracking-widest text-ocean-cyan sm:text-base">
          Beca Generación Digital Perú &middot; Comunidad "A Veces Codeamos"
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight gradient-text sm:text-5xl md:text-6xl">
          A veces codeamos
        </h1>
        <p className="mb-8 text-lg text-ocean-muted sm:text-xl">
          El opening de nuestra comunidad, creado como recuerdo de este viaje.
        </p>

        <div className="mx-auto mb-8 aspect-video w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl shadow-black/50 border border-ocean-border">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="A veces codeamos - Opening"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ocean-btn-lg inline-flex items-center gap-2 rounded-xl"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Suscribirse al canal
        </a>
      </div>
    </section>
  );
}
