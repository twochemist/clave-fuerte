import type { ValidacionClave } from "./clave.model";

export const tieneMayusculasYMinusculas = (
  clave: string
): ValidacionClave => {
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜÑ";
  const minusculas = "abcdefghijklmnopqrstuvwxyzáéíóúüñ";

  let tieneMayuscula = false;
  let tieneMinuscula = false;

  for (const caracter of clave) {
    if (mayusculas.includes(caracter)) {
      tieneMayuscula = true;
    }

    if (minusculas.includes(caracter)) {
      tieneMinuscula = true;
    }
  }

  if (!tieneMayuscula || !tieneMinuscula) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }

  return { esValida: true };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  const numeros = "0123456789";

  for (const caracter of clave) {
    if (numeros.includes(caracter)) {
      return { esValida: true };
    }
  }

  return {
    esValida: false,
    error: "La clave debe de tener números",
  };
};

export const tieneCaracteresEspeciales = (
    clave: string
  ): ValidacionClave => {
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{};:'\",.<>/?\\|`~¿¡€";
  
    for (const caracter of clave) {
      if (caracteresEspeciales.includes(caracter)) {
        return { esValida: true };
      }
    }
  
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  };
  
  export const tieneLongitudMinima = (
    clave: string
  ): ValidacionClave => {
    if (clave.length < 8) {
      return {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      };
    }
  
    return { esValida: true };
  };
  export const tieneNombreUsuario = (
    nombreUsuario: string,
    clave: string
  ): ValidacionClave => {
    const nombreEnMinusculas = nombreUsuario.toLowerCase();
    const claveEnMinusculas = clave.toLowerCase();
  
    if (claveEnMinusculas.includes(nombreEnMinusculas)) {
      return {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      };
    }
  
    return { esValida: true };
  };
  export const tienePalabrasComunes = (
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    const claveEnMinusculas = clave.toLowerCase();
  
    for (const palabra of commonPasswords) {
      if (claveEnMinusculas.includes(palabra.toLowerCase())) {
        return {
          esValida: false,
          error: "La clave no debe de contener palabras comunes",
        };
      }
    }
  
    return { esValida: true };
  };