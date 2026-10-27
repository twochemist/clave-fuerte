import { describe, expect, it } from "vitest";
import { validarClave } from "./clave.validator";
import { commonPasswords } from "./common-passwords";

describe("validarClave", () => {
  it("acepta una clave que cumple todas las reglas", () => {
    const resultado = validarClave(
      "Antonio",
      "LunaAzul9@",
      commonPasswords
    );

    expect(resultado).toEqual({ esValida: true });
  });

  it("devuelve el primer error si fallan varias reglas", () => {
    const resultado = validarClave("Antonio", "abc", commonPasswords);

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    });
  });

  it("devuelve el error de números antes que el de longitud", () => {
    const resultado = validarClave("Antonio", "Ab@", commonPasswords);

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener números",
    });
  });

  it("rechaza una clave que contiene el nombre del usuario", () => {
    const resultado = validarClave(
      "Antonio",
      "Antonio9@",
      commonPasswords
    );

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    });
  });

  it("rechaza una clave que contiene una palabra común", () => {
    const resultado = validarClave(
      "Antonio",
      "MiPassword9@",
      commonPasswords
    );

    expect(resultado).toEqual({
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    });
  });
});