import { useRef, useEffect, useState } from "react";                                   // Importamos el Hook "useRef" que sirve para obtener una referencia a un elemento del DOM

type Props = {image: string, alt?: string}                        // Defino un Type "Props" que es un objeto que tiene las propiedades que voy a recibir en el componente y donde defino el tipo de dato de cada propiedad, si quiero agreagar una propiedad nueva solo la agrego aquí y ya


// Forma explicita, la más recomendada de usar, Podemos definir que esta función solo puede retornar un tipo de dato "JSX.Element" que es el tipo de dato que retorna un componente de React
export const RandomFox = ({image, alt} : Props): JSX.Element => {                     // Lo que hicimos fue desestructurar el objeto props para quedarnos solo con lo que necesitamos (image y alt)                                    
  const node = useRef<HTMLImageElement>(null);                                        // Initializamos el Hook "useRef" y le damos un Tipado de un elemento de tipo "HTMLImageElement" el cual tiene sus propiedades tambien tipadas, le colocamos "null" como valor inicial para que TypeScript sepa que puede ser null o un elemento de tipo "HTMLImageElement"
  
  const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");                     

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {                      // Nuevo obervador, recibe un callback con un parametro "entries", este Observador nos sirve para saber cuando un elemento esta en el viewport del usuario
      entries.forEach(entry => {                                                  // Iteramos el array "entries" que nos devuelve el observer para saber que elementos estan en el viewport del usuario
        if(entry.isIntersecting) {                                                // On Intersection, "entry" es un elemento que esta en el viewport del usuario, validamos si intersectando con el viewport usando su propiedad "isIntersecting"
          console.log('node is intersecting');
          setSrc(image);
        }
      })
    });
    
    if(node.current) {                                                            // Observe node, validamos si el elemento "node" no es null para poder observarlo
      observer.observe(node.current);                                             // Le decimos a nuestro observador que observe el elemento "node" que viene del Hook "useRef", otra manera de hacer esto es con la sintaxis "observer.observe(node.current!)" no es recomendada porque le estamos diciendo a TypeScript que ignore el null y que asuma que siempre va a ser un elemento de tipo "HTMLImageElement"
    }

    return () => {                                                                // Desconectar el observer cuando el componente se desmonte
      observer.disconnect();                                                      // Desconectamos el observador
    }
  }, [image]);

  return <img 
    ref={node} 
    src={src} 
    alt={alt}
    width={320} 
    height="auto" 
    className='rounded bg-gray-300'
  />
}