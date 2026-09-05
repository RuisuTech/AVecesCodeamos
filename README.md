# NetWaifu

Página de aterrizaje tipo Netflix construida con React y Tailwind CSS. Proyecto de práctica para mejorar el uso de utilidades de estilos con Tailwind.

## Tecnologías

- **React 18** con JSX y componentes funcionales
- **Vite** como bundler y dev server
- **Tailwind CSS 3** para estilos
- **TypeScript** en componentes (.tsx)
- **ESLint** para linting

## Estructura del proyecto

```
src/
├── components/
│   ├── NavBar.tsx          # Barra de navegación con logo e iniciar sesión
│   ├── HeroBar.tsx         # Sección hero con formulario de email
│   ├── Section.tsx         # Feature: "Disfruta en tu TV"
│   ├── Section2.tsx        # Feature: "Descarga para ver offline"
│   ├── Section3.tsx        # Feature: "Disfruta donde quieras"
│   ├── Section4.tsx        # Feature: "Crea varios perfiles"
│   ├── SectionPreguntas.tsx # Sección de preguntas frecuentes (FAQ)
│   ├── Accordion.tsx       # Componente acordeón reutilizable
│   ├── EmailPregunta.tsx   # CTA de email al final del FAQ
│   └── Footer.tsx          # Pie de página con enlaces
├── App.jsx                 # Componente raíz
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
