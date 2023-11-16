type Options = {                                                              // Declaramos un Type llamado Options que es un objeto que puede tener las siguientes propiedades
  callback?: () => void
  props?: Record<string, string | number | undefined | null>                  // Record significa que es un objeto que tiene como llave un string y como valor un string, number, undefined o null, es otra forma de decir que es un objeto que puede tener cierto valor
}

interface Window {                                                            // Extendemos la interfaz Window para que reconozca plausible que es una variable global y plugin
  plausible: (event: string, options?: Options) => void;    // Definimos que 'plausible' es una función que recibe un evento de tipo 'add_fox' o 'remove_fox' y un objeto de tipo Options que es opcional y retorna void
}