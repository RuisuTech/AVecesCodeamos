import React from "react";

const CHANNEL_URL = "https://www.youtube.com/@RuisuTech";

export default function About() {
  return (
    <section className="bg-ocean-dark py-16 sm:py-20 md:py-24">
      <div className="ocean-container max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
          Sobre "A Veces Codeamos"
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-ocean-muted sm:text-xl">
          "A Veces Codeamos" es una comunidad que nació de la Beca Generación
          Digital Perú, una iniciativa del MTPE, el BID y la Asociación Es Hoy.
          Egg Cooperation fue la institución que dictó los cursos y emitió las
          certificaciones.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-ocean-muted sm:text-xl">
          De esa experiencia nació esta comunidad. RuisuTech es el canal donde
          comparto lo que aprendo, pero "A Veces Codeamos" es de todos los que
          formamos parte de esta historia.
        </p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ocean-btn inline-flex items-center gap-2 rounded-xl"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Ver canal
        </a>
      </div>
    </section>
  );
}
