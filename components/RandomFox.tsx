import { useRef } from "react";                                   // Importamos el Hook "useRef" que sirve para obtener una referencia a un elemento del DOM

type Props = {image: string, alt?: string}                        // Defino un Type "Props" que es un objeto que tiene las propiedades que voy a recibir en el componente y donde defino el tipo de dato de cada propiedad, si quiero agreagar una propiedad nueva solo la agrego aquí y ya


// Forma explicita, la más recomendada de usar, Podemos definir que esta función solo puede retornar un tipo de dato "JSX.Element" que es el tipo de dato que retorna un componente de React
export const RandomFox = ({image, alt} : Props): JSX.Element => {                     // Lo que hicimos fue desestructurar el objeto props para quedarnos solo con lo que necesitamos (image y alt)                                    
  const node = useRef<HTMLImageElement>(null);                                        // Initializamos el Hook "useRef" y le damos un Tipado de un elemento de tipo "HTMLImageElement" el cual tiene sus propiedades tambien tipadas, le colocamos "null" como valor inicial para que TypeScript sepa que puede ser null o un elemento de tipo "HTMLImageElement"

  return <img ref={node} alt={alt} src={image} width={320} height="auto" className='rounded'/>
}