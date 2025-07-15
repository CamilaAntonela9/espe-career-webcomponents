import './components/career-card.js';
import './components/career-selector.js';

window.addEventListener('DOMContentLoaded', () => {
  const cedulaInput = document.getElementById('cedulaInput');
  const submitButton = document.getElementById('submitCedula');
  const card = document.querySelector('career-card');
  const selector = document.querySelector('career-selector');

  let cedulaActual = '';

  submitButton.addEventListener('click', () => {
    cedulaActual = cedulaInput.value.trim();
    if (cedulaActual.length < 1) {
      alert('Por favor ingresa una cédula válida.');
      return;
    }
    if (card) {
      card.cedula = cedulaActual;
    }
  });

  selector.addEventListener('career-selected', (e) => {
    if (card) {
      card.career = e.detail;

      // Si ya hay una cédula ingresada, actualiza el tema también
      if (cedulaActual.length > 0) {
        card.cedula = cedulaActual;
      }
    }
  });
});
