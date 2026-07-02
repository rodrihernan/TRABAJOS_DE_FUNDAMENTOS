# GATOpia 🐱 — Módulo de formularios interactivos (RA3)

Proyecto del curso **Fundamentos de Tecnología Web**, continuación del sitio GATOpia (RA2).
Se agregó el módulo de formulario de adopción con validación JavaScript y componentes
reutilizables construidos con **React** (vía CDN, sin build tools).

## ⚠️ Cómo ejecutarlo (importante)

Como los componentes `.jsx` se cargan con `<script src="...">`, el navegador necesita
pedirlos por HTTP. **Si abres `index.html` haciendo doble clic (protocolo `file://`),
el formulario React no cargará** por restricciones de seguridad del navegador.

Levanta un servidor local simple desde la carpeta del proyecto:

```bash
# Opción 1: Python (viene instalado en la mayoría de PCs)
python -m http.server 5500

# Opción 2: extensión "Live Server" de VS Code (clic derecho -> Open with Live Server)
```

Luego abre `http://localhost:5500` en el navegador.

## 📁 Estructura del proyecto

```
RA3_FDTW/
├── index.html                     # Página principal (navbar, hero, tarjetas, formulario, curiosidades)
├── styles.css                     # Estilos generales del sitio
├── main.js                        # JS "clásico" restante (botón "Conocer más")
├── enrique.jpg.jpeg / timmy.jpg.jpeg / gengar.jpg.jpg   # Imágenes de los gatos
└── react/
    ├── validators.js              # Funciones de validación (regex) reutilizadas por el formulario
    ├── App.jsx                    # Punto de entrada: monta <AdoptionForm /> en #react-form-root
    └── components/
        ├── FormField.jsx          # Input reutilizable (texto, email, teléfono, número)
        ├── SelectField.jsx        # Select reutilizable
        ├── TextareaField.jsx      # Textarea reutilizable con contador de caracteres
        ├── Button.jsx             # Botón reutilizable con estado de carga
        ├── AlertMessage.jsx       # Alerta de éxito/error, autocierre a los 6s
        └── AdoptionForm.jsx       # Componente principal: estado, validación y envío del formulario
```

## 🧩 Arquitectura del módulo React

- **Estado**: manejado con `useState` en `AdoptionForm` (un solo objeto `datos` + un objeto `errores`).
- **Validación**: cada campo tiene una función de validación en `validators.js` (formato con
  expresiones regulares para nombre, email y teléfono; validaciones de obligatoriedad y
  formato para el resto). Se valida al perder el foco (`onBlur`) y al enviar el formulario.
- **Comunicación entre componentes**: por `props` (`value`, `onChange`, `onBlur`, `error`),
  siguiendo el patrón de "componente controlado" de React.
- **Reutilización**: los mismos componentes (`FormField`, `SelectField`, etc.) se usan para
  los 9 campos del formulario, cambiando solo sus props.

## 🎯 Campos del formulario de adopción

| Campo | Validación |
|---|---|
| Nombre completo | Requerido, solo letras y espacios (regex) |
| Correo electrónico | Requerido, formato de email (regex) |
| Teléfono | Requerido, 9 dígitos empezando en 9 (regex, formato Perú) |
| Dirección | Requerido, mínimo 5 caracteres |
| Tipo de vivienda | Requerido (select) |
| N° de mascotas actuales | Requerido, número entero ≥ 0 |
| Experiencia con mascotas | Requerido (select) |
| Gato a adoptar | Requerido (select) |
| Motivo de adopción | Requerido, mínimo 15 caracteres |

## 🔜 Posibles mejoras futuras (para la sección de conclusiones del informe)

- Conectar el envío del formulario a un backend real (API REST) en vez del `setTimeout` de simulación.
- Migrar a un entorno con build tool (Vite) si el proyecto crece, para usar imports/exports de módulos.
- Agregar pruebas automatizadas (Jest + React Testing Library) sobre los validadores.
