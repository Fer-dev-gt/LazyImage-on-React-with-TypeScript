import type { FunctionComponent, FC } from 'react'          // Para importar "Tipos" desde React tenemos que importarlos escribiendo "type" antes de la importación

// Existen 6 formas de definir un componente en React, estas son las 4 mas comunes:
const random = (): number => Math.floor(Math.random() * 123) + 1;                   // Función que retorna un numero aleatorio entre 1 y 123, le definimos un tipo de dato de retorno "number"

// Forma explicita, la más recomendada de usar
export const RandomFox = (): JSX.Element => {                                       // Podemos definir que esta función solo puede retornar un tipo de dato "JSX.Element" que es el tipo de dato que retorna un componente de React
  const image: string = `https://randomfox.ca/images/${random()}.jpg`               // Hacemos que la variable "image" sea de tipo "string" el cual tendrá la URL de la imagen que nos devuelve la API de RandomFox de forma aleatoria al ejecutar la función "random()" en la URL
  return <img src={image} width={320} height="auto" className='rounded'/>

  //return 1                                                    // Como este componente le definimos que retorne solo un tipo de dato "JSX.Element" si intentamos retornar otro tipo de dato nos dara error
}



// Forma implicita
// export const RandomFox2 = () => {                            // Esto es TypeScript aunque no hayamos definido el tipo de dato ya que TS aun asi infiere el tipo de dato que retorna "JSX.Element"         
//   return <img />
// }


// Forma explicita con type
// export const RandomFox3: FunctionComponent = () => {         // Estamos tipando la constante "RandomFox3" con el tipo de dato "FunctionComponent" que es un tipo de dato que viene de React, es igual que las otras formas pero mas explicito
//   return <img />
// }


// Forma explicita con type
// export const RandomFox4: FC = () => {                        // Estamos tipando la constante "RandomFox4" con el tipo de dato "FC" que es un tipo de dato que viene de React, es igual que las otras formas pero mas explicito
//   return <img />
// }