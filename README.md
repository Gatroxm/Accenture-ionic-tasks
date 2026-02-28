
---

# 📱 Ionic Tasks Demo

Aplicación móvil híbrida desarrollada con **Ionic + Angular (Standalone Components)** que implementa una lista de tareas (To-Do List) con categorización opcional controlada mediante **Firebase Remote Config (Feature Flag)**.

---

## 🚀 Objetivo de la Prueba

Esta aplicación cumple con los siguientes requisitos:

* CRUD de tareas
* CRUD de categorías
* Asignación de categoría a tareas
* Filtro de tareas por categoría
* Persistencia local
* Integración con Firebase
* Implementación de Feature Flag con Remote Config
* Optimización básica de rendimiento
* Estructura modular profesional

---

# 🏗️ Arquitectura del Proyecto

Se implementó una arquitectura basada en:

```
src/app/
│
├── core/
│   ├── services/
│   │   ├── task.service.ts
│   │   ├── category.service.ts
│   │   └── feature-flag.service.ts
│   ├── models/
│   └── storage/
│
├── features/
│   ├── tasks/
│   └── categories/
│
└── shared/
```

### Principios aplicados:

* Standalone Components (Angular moderno)
* Separación por features
* Servicios desacoplados
* Tipado fuerte con interfaces
* Lazy loading de rutas
* ChangeDetectionStrategy.OnPush
* trackBy en listas
* Feature Flags desacoplados

---

# 🛠️ Tecnologías Utilizadas

* Ionic 7
* Angular Standalone
* TypeScript
* Firebase
* AngularFire
* Capacitor
* LocalStorage (persistencia local)

---

# ⚙️ Instalación y Ejecución

## 1️⃣ Clonar repositorio

```bash
git clone <https://github.com/Gatroxm/Accenture-ionic-tasks.git>
cd ionic-tasks
```

---

## 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 3️⃣ Configurar Firebase

Crear archivo:

```
src/environments/environment.ts
```

Agregar configuración proporcionada por Firebase:

```ts
export const environment = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
```

---

## 4️⃣ Configurar Remote Config

En Firebase Console:

1. Ir a **Remote Config**
2. Crear parámetro:

```
enable_categories
```

Tipo: Boolean
Valor: `true`
Publicar cambios

---

## 5️⃣ Ejecutar aplicación

```bash
ionic serve
```

La aplicación se ejecutará en:

```
http://localhost:8100
```

---

# 🎛️ Feature Flag (Remote Config)

Se implementó un Feature Flag llamado:

```
enable_categories
```

### Cuando el valor es:

| Valor | Resultado                                    |
| ----- | -------------------------------------------- |
| true  | Se habilitan categorías, filtro y asignación |
| false | La app funciona solo como To-Do básica       |

La aplicación consulta Firebase al iniciar mediante:

```ts
fetchAndActivate()
```

Se configuró:

```ts
minimumFetchIntervalMillis: 0
```

para forzar actualización inmediata en entorno de desarrollo.

---

# 📦 Generación de APK (Android)

## 1️⃣ Build

```bash
ionic build
```

## 2️⃣ Agregar Android

```bash
ionic cap add android
```

## 3️⃣ Abrir Android Studio

```bash
ionic cap open android
```

Desde Android Studio:

Build → Generate Signed Bundle / APK

---

# ⚡ Optimización de Rendimiento

Se aplicaron las siguientes técnicas:

* ChangeDetectionStrategy.OnPush
* Uso de trackBy en listas dinámicas
* Eliminación de lógica compleja en templates
* Uso de categoryMap en lugar de búsquedas en template
* Lazy loading de módulos
* Feature flags para carga condicional
* Separación de responsabilidades (SRP)

---

# 🧠 Desafíos Enfrentados

1. Integración correcta de Firebase con Angular Standalone.
2. Manejo del cache de Remote Config.
3. Condicionar dinámicamente la UI según el Feature Flag.
4. Mantener arquitectura limpia y desacoplada.

---

# 🧩 Decisiones Técnicas

* Se utilizó Standalone Components en lugar de NgModules por ser el estándar moderno de Angular.
* Se utilizó Capacitor en lugar de Cordova por ser la solución oficial actual de Ionic.
* Se implementó Feature Flag real mediante Firebase Remote Config.
* Se utilizó LocalStorage para persistencia por simplicidad de la prueba.

---

## 📦 APK

El APK de la aplicación se encuentra adjunto en la entrega o puede generarse ejecutando:

ionic build --prod
ionic cap sync android
Build → Generate Signed APK

---

# 👨‍💻 Autor

Gustavo Adolfo Muños Reyes
Senior Developer

---

# ✅ Estado Final

✔ Aplicación funcional
✔ Feature Flag implementado
✔ Firebase integrado
✔ APK generable
✔ Código limpio y modular
✔ Cumple todos los requerimientos de la prueba

---
