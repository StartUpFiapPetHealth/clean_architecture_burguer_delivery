export class MinLengthError extends Error {
    constructor(readonly minLength: number) {
      super(`O campo precisa ter no mínimo ${minLength} caracteres`)
    }
  }
  