export const themes = {
  azul: {
    borderColor: '#004080',
    headerBg: '#0059b3',
    textColor: '#ffffff',
  },
  verde: {
    borderColor: '#1b5e20',
    headerBg: '#2e7d32',
    textColor: '#ffffff',
  },
  rojo: {
    borderColor: '#b71c1c',
    headerBg: '#c62828',
    textColor: '#ffffff',
  },
  gris: {
    borderColor: '#424242',
    headerBg: '#616161',
    textColor: '#ffffff',
  },
  naranja: {
    borderColor: '#ef6c00',
    headerBg: '#fb8c00',
    textColor: '#000000',
  },
};

export function getThemeByLastDigit(digit) {
  digit = parseInt(digit);
  if ([0, 1].includes(digit)) return themes.azul;
  if ([2, 3].includes(digit)) return themes.verde;
  if ([4, 5].includes(digit)) return themes.rojo;
  if ([6, 7].includes(digit)) return themes.gris;
  if ([8, 9].includes(digit)) return themes.naranja;
  return themes.azul; // por defecto
}
