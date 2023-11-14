import { useRef, useEffect, useState } from "react";                                        // Importamos el Hook "useRef" que sirve para obtener una referencia a un elemento del DOM
import type { ImgHTMLAttributes } from "react";                                             // Importamos el tipo de dato "ImgHTMLAttributes" que es el tipo de dato que retorna un elemento de tipo "img" en HTML

type LazyImageProps = {
  src: string,                                                    
  onLazyLoad?: (img: HTMLImageElement) => void                                              // Tipamos la propiedad "onLazyLoad" como una función que recibe un parametro "img" de tipo "HTMLImageElement" y que no retorna nada, le colocamos el signo "?" para indicarle a TypeScript que esta propiedad es opcional
};                                                   

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;                                // Definimos un Type "ImageNativeTypes" que es un objeto que tiene las propiedades de un elemento de tipo "img" en HTML, esto nos sirve para no tener que escribir todas las propiedades de un elemento de tipo "img" en HTML en el Type "Props" y solo escribirlas una vez en este Type
type Props = ImageNativeTypes & LazyImageProps;                                             // Este el tipo de TODO el Componente. Combinamos los dos Types "ImageNativeTypes" y "LazyImageProps" en un solo Type "Props" que es un objeto que tiene las propiedades de los dos Types, esto nos sirve para no tener que escribir todas las propiedades de un elemento de tipo "img" en HTML en el Type "Props" y solo escribirlas una vez en el Type "ImageNativeTypes"

export const LazyImage = ({ src, onLazyLoad, ...imgProps}: Props): JSX.Element => {                     // Lo que hicimos fue desestructurar el objeto props para quedarnos solo con lo que necesitamos, usamos "...imgProps" para indicarle a TypeScript que el resto de propiedades que no definimos en el Type "Props" las guarde en el objeto "imgProps" y que las use en el elemento "img" que esta dentro de la función. Forma explicita, la más recomendada de usar, Podemos definir que esta función solo puede retornar un tipo de dato "JSX.Element" que es el tipo de dato que retorna un componente de React
  const node = useRef<HTMLImageElement>(null);                                              // Initializamos el Hook "useRef" y le damos un Tipado de un elemento de tipo "HTMLImageElement" el cual tiene sus propiedades tambien tipadas, le colocamos "null" como valor inicial para que TypeScript sepa que puede ser null o un elemento de tipo "HTMLImageElement"
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);                                  // Initializamos el Hook "useState" y le damos un Tipado de un booleano, le colocamos "false" como valor inicial para que TypeScript sepa que puede ser un booleano
  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");                     

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {                      // Nuevo obervador, recibe un callback con un parametro "entries", este Observador nos sirve para saber cuando un elemento esta en el viewport del usuario
      entries.forEach(entry => {                                                  // Iteramos el array "entries" que nos devuelve el observer para saber que elementos estan en el viewport del usuario
        if(isLazyLoaded) {
          return; 
        }

        if (!entry.isIntersecting || !node.current) {                             // "!node.current" significa que si el elemento "node" es null, si es null significa que el elemento "node" no esta en el DOM, si no esta en el DOM no podemos obtener una referencia a el, si no podemos obtener una referencia a el no podemos saber si esta en el viewport del usuario, si no podemos saber si esta en el viewport del usuario no podemos ejecutar el codigo que queremos ejecutar, por lo que si el elemento "node" es null retornamos y no ejecutamos el codigo que esta debajo de esta linea
          return;
        }

        setCurrentSrc(src);
        observer.disconnect();
        setIsLazyLoaded(true);

        if(typeof onLazyLoad === "function") {                                    // Validamos si la propiedad "onLazyLoad" es una función, si es una función ejecutamos la función y le pasamos el elemento "node.current" que viene del Hook "useRef" como parametro y es un elemento de tipo "HTMLImageElement"
          onLazyLoad(node.current);                                               // Esta función recibe un parametro "img" de tipo "HTMLImageElement" y no retorna nada solo hace un console.log
        }
      })
    });
    
    if(node.current) {                                                            // Observe node, validamos si el elemento "node" no es null para poder observarlo
      observer.observe(node.current);                                             // Le decimos a nuestro observador que observe el elemento "node" que viene del Hook "useRef", otra manera de hacer esto es con la sintaxis "observer.observe(node.current!)" no es recomendada porque le estamos diciendo a TypeScript que ignore el null y que asuma que siempre va a ser un elemento de tipo "HTMLImageElement"
    }

    return () => {                                                                // Desconectar el observer cuando el componente se desmonte
      observer.disconnect();                                                      // Desconectamos el observador
    }
  }, [src, onLazyLoad, isLazyLoaded]);                                            // El useEffect se ejecutara cuando cambie la propiedad "src" o la propiedad "onLazyLoad" o la propiedad "isLazyLoaded"

  return <img 
    ref={node}                                                                    // Le pasamos el elemento "node" que viene del Hook "useRef" al elemento "img" para que el Hook "useRef" pueda obtener una referencia al elemento "img"
    src={currentSrc}                                                              // Le pasamos la propiedad "currentSrc" que viene del Hook "useState" al elemento "img" para que el Hook "useState" pueda cambiar el valor de la propiedad "currentSrc" cuando el usuario haga scroll y el elemento "img" este en el viewport del usuario
    {...imgProps}                                                                 // Destructuramos el objeto "imgProps" para pasarle todas las propiedades que no definimos en el Type "Props" al elemento "img"
  />
}


