# StashIMS Landing Page

Landing page pública de StashIMS — software de gestión de inventarios (WMS) para PyMEs en Latinoamérica. Construida con Astro y Tailwind CSS.

## 🚀 Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   ├── schema/
│   │   └── ui/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── package.json
```

- `src/pages/` contiene la página principal `index.astro`.
- `src/components/sections/` agrupa las secciones de la landing (Hero, Features, FAQ, CTA).
- `src/components/schema/` contiene los componentes de datos estructurados (Organization, Software, FAQ).
- `public/` aloja activos estáticos como imágenes y archivos públicos.
- `src/styles/global.css` define los estilos globales del proyecto.

## 🧞 Comandos básicos

| Comando                   | Acción                                                                 |
| :------------------------ | :--------------------------------------------------------------------- |
| `npm install`             | Instala las dependencias del proyecto                                   |
| `npm run dev`             | Inicia el servidor de desarrollo local                                  |
| `npm run build`           | Genera el sitio para producción en `./dist/`                            |
| `npm run preview`         | Previsualiza el sitio ya compilado antes de desplegar                   |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro                                          |

## 🧪 Cómo usarlo

1. Clona el repositorio.
2. Ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre `http://localhost:4321` en tu navegador.

## 📌 Notas

- El contenido de la landing page se define en `src/pages/index.astro`.
- Para cambios de estilo, revisa `tailwind.config.cjs` y `src/styles/global.css`.
- La paleta de colores usa el sistema de tokens Material Design 3 con el teal `#0d9488` como color primario.

## 👀 Más información

Consulta la documentación de Astro en https://docs.astro.build si necesitas ayuda adicional.
