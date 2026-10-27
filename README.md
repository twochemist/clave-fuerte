# Laboratorio 9.2: Clave fuerte

Ejercicio del Bootcamp JS 2 implementado en TypeScript con pruebas unitarias en Vitest.

La función `validarClave(nombreUsuario, clave, commonPasswords)` comprueba, en este orden:

1. Mayúsculas y minúsculas.
2. Al menos un número.
3. Al menos un carácter especial de la lista definida en el código.
4. Una longitud mínima de ocho caracteres.
5. Que no contenga el nombre del usuario.
6. Que no contenga palabras de la lista de claves comunes.

Devuelve `{ esValida: true }` si cumple todas las reglas, o `{ esValida: false, error: "..." }` con el primer error encontrado. La comparación del nombre y las palabras comunes no distingue mayúsculas y minúsculas.

## Archivos

- `src/clave.model.ts`: interfaz del resultado.
- `src/common-passwords.ts`: lista de palabras comunes del enunciado.
- `src/clave.helpers.ts`: las seis comprobaciones.
- `src/clave.helpers.spec.ts`: pruebas de cada comprobación.
- `src/clave.validator.ts`: función que ejecuta las comprobaciones en orden.
- `src/clave.validator.spec.ts`: pruebas de la validación completa.

## Ejecutar

Requiere una versión de Node.js compatible con las dependencias del proyecto. Se ha trabajado con Node.js 22.20.0.

```sh
npm ci
npm test
```

`npm test` ejecuta las pruebas y espera los cambios que guardes. Pulsa `q` para salir.

```sh
npm run test:run
npm run typecheck
```

El primer comando ejecuta las 24 pruebas una vez. El segundo comprueba los tipos de TypeScript.
