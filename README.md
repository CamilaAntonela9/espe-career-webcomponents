# espe-career-webcomponents

## Componentes de Carreras ESPE

### 1. career-card

Componente que muestra la información detallada de una carrera.

**Elementos:**

- Nombre de la carrera  
- Facultad  
- Descripción breve  
- Imagen representativa  

**Elemento diferenciador:**

- Aplica un tema de color (borde, fondo del header, etc.) basado en el último dígito de la cédula ingresada.

---

### 2. career-selector

Componente que muestra una lista de carreras para seleccionar.

**Elementos:**

- Lista con al menos 4 carreras de la ESPE  
- Al hacer clic en una carrera, despacha un evento personalizado `career-selected` con los datos completos de la carrera seleccionada.

---

## Interacción entre Componentes

- El componente `career-card` escucha el evento `career-selected` emitido por `career-selector`.  
- Cuando el usuario selecciona una carrera en `career-selector`, el `career-card` actualiza su contenido con la información recibida.  
- El tema de color de `career-card` se determina dinámicamente en función del último dígito de la cédula ingresada por el usuario mediante un formulario.

---

## Estructura del Proyecto
/src
├── /components
│ ├── career-card.js
│ └── career-selector.js
├── /styles
│ └── themes.js
├── index.html
└── index.js

---

## Instalación y Uso

### Clonar repositorio

```bash
git clone https://github.com/CamilaAntonela9/espe-career-webcomponents.git
cd espe-career-webcomponents
```
### Abrir en navegador
Abrir en http://localhost:8000 o la URL que muestre la terminal.

Tabla de Props y Eventos
Componente	Propiedad / Evento	Tipo	Descripción
career-card	career	Object	Objeto con datos de la carrera a mostrar
cedula	String	Cédula para determinar el tema de color
career-selector	Evento career-selected	CustomEvent	Evento disparado al seleccionar una carrera, contiene el objeto carrera en detail

Vista previa

### Autor
Camila Obando
