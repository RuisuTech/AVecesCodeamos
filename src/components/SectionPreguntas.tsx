import React from "react";

const VIDEO_URL = "https://www.youtube.com/watch?v=NJDVVdiGYqQ";

export default function SectionPreguntas() {
  return (
    <section className="bg-ocean-dark py-16 sm:py-20 md:py-24">
      <div className="ocean-container max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          La historia de este opening
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-ocean-muted sm:text-xl">
          <p>
            <strong className="text-white">Todo empezó con la Beca Generación Digital Perú.</strong>{" "}
            Una iniciativa del Ministerio de Trabajo (MTPE), el Banco
            Interamericano de Desarrollo (BID) y la Asociación Es Hoy. Egg
            Cooperation fue la institución que dictó los cursos y emitió las
            certificaciones.
          </p>
          <p>
            <strong className="text-white">De pocos comenzamos, un sueño formamos.</strong>{" "}
            No éramos muchos al principio, pero teníamos algo en común: la
            pasión por el código y ganas de crecer. Con esfuerzo, juntos
            avanzamos. Cada error fue una lección, cada compilación una victoria.
          </p>
          <p>
            <strong className="text-white">El opening como recuerdo.</strong>{" "}
            Para celebrar lo que habíamos construido, creamos este opening con
            IA (SUNO). Es nuestra forma de recordar que, aunque a veces el
            código no compila, lo importante es seguir intentando.
          </p>
          <p>
            <strong className="text-white">Una comunidad que sigue viva.</strong>{" "}
            "A Veces Codeamos" no es solo un nombre, es la muestra de que
            cuando personas con el mismo objetivo se juntan, pueden crear algo
            especial. Y este opening es parte de ese recuerdo.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ocean-btn inline-flex items-center gap-2 rounded-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Escuchar el opening
          </a>
        </div>
      </div>
    </section>
  );
}
