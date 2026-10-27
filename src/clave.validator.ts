import type { ValidacionClave } from "./clave.model";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave.helpers";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const mayusculasYMinusculas = tieneMayusculasYMinusculas(clave);
  if (!mayusculasYMinusculas.esValida) {
    return mayusculasYMinusculas;
  }

  const numeros = tieneNumeros(clave);
  if (!numeros.esValida) {
    return numeros;
  }

  const caracteresEspeciales = tieneCaracteresEspeciales(clave);
  if (!caracteresEspeciales.esValida) {
    return caracteresEspeciales;
  }

  const longitud = tieneLongitudMinima(clave);
  if (!longitud.esValida) {
    return longitud;
  }

  const nombre = tieneNombreUsuario(nombreUsuario, clave);
  if (!nombre.esValida) {
    return nombre;
  }

  const palabrasComunes = tienePalabrasComunes(clave, commonPasswords);
  if (!palabrasComunes.esValida) {
    return palabrasComunes;
  }

  return { esValida: true };
};