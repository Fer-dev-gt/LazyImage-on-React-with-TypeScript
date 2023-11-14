declare module "lodash" {                                           // Declaramos un modulo con el nombre exacto de la librería que queremos usar, en este caso "lodash"
  export function random(lower: number, upper: number): number      // Definimos las funciones que queremos usar de la librería, en este caso solo la función "random" y definimos los tipos de datos que recibe y el tipo de dato que retorna
}
