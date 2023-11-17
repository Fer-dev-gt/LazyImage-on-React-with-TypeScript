export function PageContent() {
  return (
    <div className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Curso React con TypeScript
      </p>
      <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Componente Lazy Image
      </h3>
      <div className="max-w-xl mx-auto text-xl leading-7">
        <p className="mt-4">
          Un componente genérico de React para cargar imágenes con lazy loading.
        </p>
        <p className="mt-4">🦊</p>
        <p className="mt-4">
          Las imágenes agregadas no se descargarán hasta que sean visibles en la
          pantalla
        </p>
        <p className="mt-4">🦊</p>
      </div>
    </div>
  );
}