import Head from "next/head";

export default function PoliticaDePrivacidad() {
  return (
    <div>
      <Head>
        <title>Política de Privacidad | EKORU</title>
        <meta
          name="description"
          content="Consulta la política de privacidad del sitio EKORU. Lee nuestras políticas antes de comprar productos sustentables."
        />
        <meta
          name="keywords"
          content="políticas de privacidad, EKORU, políticas de uso, venta sustentable, ecommerce ecológico"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ekoru.cl/privacy" />
        {/* Open Graph */}
        <meta property="og:title" content="Políticas de privacidad | EKORU" />
        <meta
          property="og:description"
          content="Consulta las condiciones de uso de EKORU, tu tienda online de productos sustentables."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ekoru.cl/privacy" />
        <meta property="og:site_name" content="EKORU" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Políticas de privacidad | EKORU" />
        <meta
          name="twitter:description"
          content="Consulta las condiciones de uso de EKORU, tu tienda online de productos sustentables."
        />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="mb-4">
          En EKORU, valoramos y respetamos tu privacidad. Esta política describe
          cómo recopilamos, usamos y protegemos tu información personal.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Información que recopilamos
        </h2>
        <p className="mb-4">
          Recopilamos información que nos proporcionas directamente, como tu
          nombre, correo electrónico y cualquier otro dato que ingreses en
          nuestros formularios. También podemos recopilar información
          automáticamente a través de cookies y tecnologías similares para
          mejorar tu experiencia en nuestro sitio.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Uso de la información
        </h2>
        <p className="mb-4">Utilizamos la información recopilada para:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Proporcionar y mantener nuestros servicios.</li>
          <li>Mejorar y personalizar tu experiencia en EKORU.</li>
          <li>
            Comunicarnos contigo, responder a tus consultas y proporcionarte
            actualizaciones.
          </li>
          <li>
            Cumplir con obligaciones legales y proteger nuestros derechos.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Compartir información
        </h2>
        <p className="mb-4">
          No compartimos tu información personal con terceros, excepto cuando
          sea necesario para proporcionar nuestros servicios, cumplir con la ley
          o proteger nuestros derechos.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Seguridad de la información
        </h2>
        <p className="mb-4">
          Implementamos medidas de seguridad para proteger tu información
          personal. Sin embargo, ninguna transmisión por Internet o método de
          almacenamiento electrónico es 100% seguro.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Tus derechos</h2>
        <p className="mb-4">
          Tienes derecho a acceder, rectificar o eliminar tu información
          personal. Para ejercer estos derechos, Contáctanos a través de{" "}
          <strong>contacto@ekoru.cl</strong>
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Cambios en esta política
        </h2>
        <p className="mb-4">
          Podemos actualizar esta política de privacidad ocasionalmente. Te
          notificaremos sobre cambios significativos publicando la nueva
          política en nuestro sitio web.
        </p>
        <p className="mt-6">
          Fecha de última actualización: 2 de junio de 2025.
        </p>
      </main>
    </div>
  );
}
