import { LitElement, html, css } from 'lit';

export class CareerSelector extends LitElement {
  static properties = {
    careers: { type: Array }
  };

  constructor() {
    super();
this.careers = [
  {
    nombre: 'INTELIGENCIA ARTIFICIAL',
    facultad: 'DISEÑO Y ADM DE BASE DE DATOS',
    descripcion: 'Curso avanzado sobre modelos inteligentes aplicados.',
    imagen: 'https://tse3.mm.bing.net/th/id/OIP.Q46xMzaA-zjDMNGu_nbCDQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    nombre: 'MODELADO AVAN DE BASE DE DATOS',
    facultad: 'DISEÑO Y ADM DE BASE DE DATOS',
    descripcion: 'Enseña técnicas de modelado relacional y orientado a objetos.',
    imagen: 'https://i.ytimg.com/vi/K0pLUQLRLzs/maxresdefault.jpg'
  },
  {
    nombre: 'DESARROLLO WEB PARA INTEGRACIO',
    facultad: 'DESA ANALI SOFTWARE Y APLICACI',
    descripcion: 'Desarrollo de aplicaciones web modernas con frameworks.',
    imagen: 'https://www.quois.com/wp-content/uploads/2021/07/Las-fases-del-desarrollo-de-una-web.jpg'
  },
  {
    nombre: 'LECT. ESC. TEXTOS ACADEMICOS',
    facultad: 'PROG INTERDISCIPLINARIOS TICS',
    descripcion: 'Técnicas de lectura y escritura académica.',
    imagen: 'https://tse2.mm.bing.net/th/id/OIP.G7AybaljmhWOMdLet_c86wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    nombre: 'PROGRAM INTEGRATIVA DE COMPONE',
    facultad: 'DESA ANALI SOFTWARE Y APLICACI',
    descripcion: 'Proyecto integrador usando componentes web con Lit.',
    imagen: 'https://tse1.explicit.bing.net/th/id/OIP.NZjVu6PfbE6OOLUQ0KLwTAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  }
];

  }

  selectCareer(career) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: career,
      bubbles: true,
      composed: true
    }));
  }

  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      cursor: pointer;
      padding: 8px;
      border: 1px solid #ccc;
      margin-bottom: 4px;
      border-radius: 5px;
    }
    li:hover {
      background: #f0f0f0;
    }
  `;

  render() {
    return html`
      <h3>Selecciona una carrera:</h3>
      <ul>
        ${this.careers.map(
          career => html`
            <li @click=${() => this.selectCareer(career)}>${career.nombre}</li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('career-selector', CareerSelector);
