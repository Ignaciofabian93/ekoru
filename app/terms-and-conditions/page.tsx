import Head from "next/head";

export default function TerminosYCondiciones() {
  return (
    <div>
      <Head>
        <title>Términos y Condiciones | EKORU</title>
        <meta
          name="description"
          content="Consulta los términos y condiciones de uso del sitio EKORU. Lee nuestras políticas antes de comprar productos sustentables."
        />
        <meta
          name="keywords"
          content="términos y condiciones, EKORU, políticas de uso, venta sustentable, ecommerce ecológico"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ekoru.cl/terms" />
        {/* Open Graph */}
        <meta property="og:title" content="Términos y Condiciones | EKORU" />
        <meta
          property="og:description"
          content="Consulta las condiciones de uso de EKORU, tu tienda online de productos sustentables."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ekoru.cl/terminos-y-condiciones"
        />
        <meta property="og:site_name" content="EKORU" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Términos y Condiciones | EKORU" />
        <meta
          name="twitter:description"
          content="Consulta las condiciones de uso de EKORU, tu tienda online de productos sustentables."
        />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
        <p className="mb-4">
          Estos términos y condiciones regulan el uso del sitio web de EKORU y
          los servicios ofrecidos. Al acceder o utilizar nuestro sitio, aceptas
          cumplir con estos términos.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Uso del sitio</h2>
        <p className="mb-4">
          Te comprometes a utilizar nuestro sitio de manera legal y respetuosa.
          No debes utilizarlo para actividades ilícitas o que infrinjan los
          derechos de terceros.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Propiedad intelectual
        </h2>
        <p className="mb-4">
          Todos los contenidos del sitio, incluyendo textos, imágenes y
          logotipos, son propiedad de EKORU o de terceros que han autorizado su
          uso. No puedes reproducir, distribuir o modificar estos contenidos sin
          nuestro consentimiento previo por escrito.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Limitación de responsabilidad
        </h2>
        <p className="mb-4">
          EKORU no se hace responsable por daños o perjuicios derivados del uso
          de nuestro sitio o de la imposibilidad de acceder al mismo.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Modificaciones</h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento. Las modificaciones entrarán en vigor desde su
          publicación en el sitio.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Ley aplicable</h2>
        <p className="mb-4">
          Estos términos se rigen por las leyes de Chile. Cualquier disputa
          relacionada con estos términos será resuelta por los tribunales
          competentes de Santiago.
        </p>
        <p className="mt-6">
          Fecha de última actualización: 2 de junio de 2025.
        </p>
      </main>
    </div>
  );
}
