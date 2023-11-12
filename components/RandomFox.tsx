type Props = {image: string, alt?: string}                        // Defino un Type "Props" que es un objeto que tiene las propiedades que voy a recibir en el componente y donde defino el tipo de dato de cada propiedad, si quiero agreagar una propiedad nueva solo la agrego aquí y ya


// Forma explicita, la más recomendada de usar, Podemos definir que esta función solo puede retornar un tipo de dato "JSX.Element" que es el tipo de dato que retorna un componente de React
export const RandomFox = ({image, alt} : Props): JSX.Element => {                     // Lo que hicimos fue desestructurar el objeto props para quedarnos solo con lo que necesitamos (image y alt)                                    // 
  console.log(alt);                                                                   // Este console.log se muestra en la terminal donde tengo activado el comando "npm run dev" y no en el navegador
  return <img alt={alt} src={image} width={320} height="auto" className='rounded'/>
}