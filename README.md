# A Veces Codeamos

Sitio web de la comunidad "A Veces Codeamos", nacida de la Beca Generación Digital Perú. Espacio para compartir el opening y contenido del canal RuisuTech.

## Contexto

La Beca Generación Digital Perú es una iniciativa del Ministerio de Trabajo (MTPE), el Banco Interamericano de Desarrollo (BID) y la Asociación Es Hoy. Egg Cooperation fue la institución que dictó los cursos y emitió las certificaciones. De esa beca surgió la comunidad "A Veces Codeamos".

## Tecnologías

- **React 18** con JSX y componentes funcionales
- **Vite** como bundler y dev server
- **Tailwind CSS 3** para estilos
- **ESLint** para linting

## Estructura del proyecto

```
src/
├── components/
│   ├── NavBar.tsx          # Barra de navegación con logo y enlace al canal
│   ├── HeroBar.tsx         # Sección principal con video de YouTube
│   ├── About.tsx           # Información sobre la comunidad
│   ├── SectionPreguntas.tsx # Historia del opening
│   └── Footer.tsx          # Pie de página
├── App.tsx                 # Componente raíz
├── main.jsx                # Punto de entrada
└── index.css               # Estilos base de Tailwind
```

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Generar build de producción |
| `npm run preview` | Previsualizar build de producción |
| `npm run lint` | Ejecutar ESLint |

## Enlaces

- [Canal de YouTube](https://www.youtube.com/@RuisuTech)
- [Opening "A veces codeamos"](https://www.youtube.com/watch?v=NJDVVdiGYqQ)
