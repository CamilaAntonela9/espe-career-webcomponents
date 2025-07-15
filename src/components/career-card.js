import { LitElement, html, css } from 'lit';
import { getThemeByLastDigit } from '../styles/themes.js';

export class CareerCard extends LitElement {
  static properties = {
    career: { type: Object },
    cedula: { type: String },
    theme: { type: Object }
  };

  constructor() {
    super();
    this.career = null;
    this.cedula = '';
    this.theme = getThemeByLastDigit(0); // por defecto
  }

  updated(changedProps) {
    if (changedProps.has('cedula')) {
      const lastDigit = this.cedula.slice(-1);
      this.theme = getThemeByLastDigit(lastDigit);
    }
  }

  static styles = css`
    .card {
      border: 3px solid;
      border-radius: 12px;
      width: 300px;
      overflow: hidden;
      font-family: Arial;
    }

    .header {
      padding: 10px;
      font-weight: bold;
    }

    .body {
      padding: 10px;
    }

    img {
      width: 100%;
      height: auto;
    }
  `;

  render() {
    if (!this.career) {
      return html`<p>Selecciona una carrera</p>`;
    }

    const { borderColor, headerBg, textColor } = this.theme;

    return html`
      <div class="card" style="border-color:${borderColor}">
        <div class="header" style="background:${headerBg}; color:${textColor}">
          ${this.career.nombre} - ${this.career.facultad}
        </div>
        <img src="${this.career.imagen}" alt="${this.career.nombre}" />
        <div class="body">
          <p>${this.career.descripcion}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('career-card', CareerCard);
