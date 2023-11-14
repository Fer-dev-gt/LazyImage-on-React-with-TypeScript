// En este archivo podemos definir tipos de datos que se pueden usar en toda la aplicación/app/programa
// Por convención se escribe con mayúscula la primera letra del nombre del archivo y con una I o una T al inicio del nombre del archivo, esto para indicar que es un archivo de definición de tipos de datos

type IFoxImageItem = {                                                                  // Defino un Type "IFoxImageItem" que es un objeto que tiene las propiedades "id" y "url" y donde defino el tipo de dato de cada propiedad, si quiero agreagar una propiedad nueva solo la agrego aquí y ya
  id: string, 
  url: string 
};       