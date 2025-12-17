# Convertidor de Distancia
EXAMEN FINAL NT2
ALUMNA: LIMACHI CAROLINA

Aplicación desarrollada en **Vue 3 + Pinia** que permite convertir un valor ingresado en kilómetros a **metros** y **millas**, aplicando además un sistema de colores según el rango del valor ingresado.

Este proyecto cumple con todos los requisitos del enunciado: estructura mínima, separación clara de responsabilidades, reactividad, validaciones y presentación visual alineada al ejemplo.

---

## Funcionalidad

- Ingreso de un valor en **kilómetros (km)**.
- Conversión automática a:
  - **Metros (m)**
  - **Millas (mi)**
- Los resultados solo se muestran si el valor es válido y distinto de cero.
- Sistema de colores según el valor:
  - Azul → valores negativos  
  - Magenta → entre 0 y 5  
  - Rojo → mayor o igual a 5  
- Alineación visual centrada, con contenido interno alineado a la izquierda.

---

## Tecnologías utilizadas

- **Vue 3 (Composition API)**
- **Pinia** para el manejo de estado
- **Vite** como entorno de desarrollo

---

## Estructura del proyecto

src/
├─ components/
│   └─ DistanceConverter.vue
├─ store/
│   └─ useDistanceStore.js
├─ App.vue
└─ main.js

Código

---

## Lógica del Store (Pinia)

El store maneja:

- Estado: valor en km
- Acción: actualización del valor
- Getters:
  - `meters`
  - `miles`
  - `color`

Incluye validaciones para evitar mostrar resultados cuando el valor es `""`, `"-"`.

---

## Interfaz

- El título está centrado.
- El convertidor está centrado en la pantalla.
- El contenido interno del componente está alineado a la izquierda.
- El label y el input están alineados horizontalmente.

---

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev