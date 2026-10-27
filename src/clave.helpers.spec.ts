import { describe, expect, it } from "vitest";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave.helpers";

describe("tieneMayusculasYMinusculas", () => {
  it("acepta una clave con mayúsculas y minúsculas", () => {
    const resultado = tieneMayusculasYMinusculas("Abc");

    expect(resultado).toEqual({ esValida: true });
  });

  it("rechaza una clave que solo tiene minúsculas", () => {
    const resultado = tieneMayusculasYMinusculas("abc");

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    });
  });

  it("rechaza una clave que solo tiene mayúsculas", () => {
    const resultado = tieneMayusculasYMinusculas("ABC");

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    });
  });

  it("rechaza una clave sin letras", () => {
    const resultado = tieneMayusculasYMinusculas("123@");

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    });
  });
});

describe("tieneNumeros", () => {
  it("acepta una clave que contiene un número", () => {
    const resultado = tieneNumeros("Abc3");

    expect(resultado).toEqual({ esValida: true });
  });

  it("rechaza una clave sin números", () => {
    const resultado = tieneNumeros("Abc@");

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener números",
    });
  });
});
  describe("tieneCaracteresEspeciales", () => {
    it("acepta una clave con un carácter especial", () => {
      const resultado = tieneCaracteresEspeciales("Abc3@");
  
      expect(resultado).toEqual({ esValida: true });
    });
  
    it("rechaza una clave sin caracteres especiales", () => {
      const resultado = tieneCaracteresEspeciales("Abc3");
  
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      });
    });
  
    it("no considera el espacio un carácter especial", () => {
      const resultado = tieneCaracteresEspeciales("Abc3 ");
  
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      });
    });
  });
  describe("tieneLongitudMinima", () => {
    it("rechaza una clave de siete caracteres", () => {
      const resultado = tieneLongitudMinima("Abc123@");
  
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      });
    });
  
    it("acepta una clave de ocho caracteres", () => {
      const resultado = tieneLongitudMinima("Abc123@!");
  
      expect(resultado).toEqual({ esValida: true });
    });
  
    it("acepta una clave de nueve caracteres", () => {
      const resultado = tieneLongitudMinima("Abc123@!#");
  
      expect(resultado).toEqual({ esValida: true });
    });
  });
  describe("tieneNombreUsuario", () => {
    it("rechaza una clave que contiene el nombre del usuario", () => {
      const resultado = tieneNombreUsuario("Antonio", "Antonio123@");
  
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      });
    });
  
    it("detecta el nombre aunque cambien las mayúsculas", () => {
      const resultado = tieneNombreUsuario("Antonio", "ANTONIO123@");
  
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      });
    });
  
    it("acepta una clave que no contiene el nombre", () => {
      const resultado = tieneNombreUsuario("Antonio", "LunaAzul9@");
  
      expect(resultado).toEqual({ esValida: true });
    });
  });
  describe("tienePalabrasComunes", () => {
    const palabrasComunes = ["password", "admin"];
  
    it("rechaza una clave que contiene una palabra común", () => {
      const resultado = tienePalabrasComunes(
        "Miadmin9@",
        palabrasComunes
      );
  
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      });
    });
  
    it("detecta palabras comunes aunque cambien las mayúsculas", () => {
      const resultado = tienePalabrasComunes(
        "MiPASSWORD9@",
        palabrasComunes
      );
  
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      });
    });
  
    it("acepta una clave sin palabras comunes", () => {
      const resultado = tienePalabrasComunes(
        "LunaAzul9@",
        palabrasComunes
      );
  
      expect(resultado).toEqual({ esValida: true });
    });
  
    it("acepta una clave cuando la lista está vacía", () => {
      const resultado = tienePalabrasComunes("MiPassword9@", []);
  
      expect(resultado).toEqual({ esValida: true });
    });
  });