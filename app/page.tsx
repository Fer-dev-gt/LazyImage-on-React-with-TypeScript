'use client';                                                          // Escribimos "use client" para que sepa que este archivo es de tipo "client" y no de tipo "server", esto es porque estamos usando Next.js y Next.js nos permite crear aplicaciones que se ejecutan tanto en el servidor como en el cliente, por lo que debemos especificarle a TypeScript si este archivo es de tipo "client" o de tipo "server"
import Head from "next/head";
import { useState } from "react";
import { LazyImage } from "@/components/RandomFox";
import type { NextPage } from "next";
import type { MouseEventHandler } from "react";

const random = (): number => Math.floor(Math.random() * 123) + 1;                                       // Función que retorna un numero aleatorio entre 1 y 123, le definimos un tipo de dato de retorno "number"
const generateId = (): string => Math.random().toString(36).substring(2) + Date.now().toString(36);     // Función que retorna un string aleatorio, le definimos un tipo de dato de retorno "string"                             

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);                       // Al useState le damos un Tipado de un array de objetos de tipo "ImageItem" el cual tiene sus propiedades tambien tipadas

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {              // Indicamos que esta función retorna un tipo de dato "MouseEventHandler<HTMLButtonElement>" que es el tipo de dato que retorna un evento de tipo "click" en un elemento de tipo "button", al hacer hover sobre una propiedad podemos ver en la libreria de TypeScript que tipo de dato retorna esa propiedad y cual necesita. Esta función recibe un parametro "event" que es de tipo "MouseEvent<HTMLButtonElement, MouseEvent>" 
    event.preventDefault();                                                         // Al dar el tipo MouseEventHandler a la función, TypeScript nos indica que el parametro "event" es de tipo "MouseEvent<HTMLButtonElement, MouseEvent>" y que tiene la propiedad "preventDefault" que es de tipo "() => void" y que no recibe parametros y que no retorna nada, esto nos sirve para saber que podemos usar esa propiedad en la función

    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([...images, newImageItem]);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hey</h1>
        <button onClick={addNewFox}>Add new fox</button>
        { images.map(({ id, url }, index) => (                                       // Aplica destructuring al objeto "image" y obtiene las propiedades "id" y "url" esto nos sirve para no tener que escribir "image.id" y "image.url" en cada iteración, usamos map para iterar el array "images" y retornar un componente "RandomFox" por cada elemento del array "images"
            <div key={id} className="p-4">                                      
              <LazyImage 
                src={url}                                                     // Le pasamos la propiedad "url" del objeto "image" al componente "LazyImage", abajo vamos a enviarle todas las propiedades que no definimos en el Type "Props" al componente "LazyImage" usando la sintaxis "{...imgProps}"
                alt={id} 
                title="Random Fox" 
                width={320} 
                height="auto" 
                className='rounded bg-gray-300'
                onClick={() => console.log("Click en la imagen")} 
                onLazyLoad={(img) => console.log(`Imagen #${index + 1} cargada. Nodo:`, img)}
                />    
            </div>
          )) 
        }
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;