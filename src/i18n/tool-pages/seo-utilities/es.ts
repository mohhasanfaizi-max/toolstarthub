import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Un constructor de UTM añade parámetros de campaña a una URL para que puedas rastrear el origen del tráfico en las herramientas de analítica.",
    "content": {
      "about": "Añade utm_source, utm_medium y utm_campaign a un enlace, más utm_id, term, content y unos campos opcionales de campaña de GA4 si los necesitas. Quien etiqueta un enlace de campaña lo usa antes de ponerlo en un anuncio o un correo. Un campo vacío no se incluye en el enlace, y esta página no registra una visita ni acorta la dirección.",
      "howTo": [
        "Introduce la URL del sitio, con o sin https://.",
        "Completa origen, medio y campaña. Término y contenido son opcionales.",
        "Copia la URL generada. Los parámetros de consulta que ya tenía el enlace original se conservan."
      ],
      "examples": [
        {
          "title": "Un enlace de campaña sencillo",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Una URL que ya tiene parámetros",
          "body": "https://example.com/page?ref=nav conserva ref=nav y añade los campos UTM junto a él."
        }
      ],
      "explanation": "Los parámetros UTM indican a las herramientas de analítica de dónde vino una visita. utm_source es la plataforma, utm_medium es el canal y utm_campaign es el nombre de la promoción. utm_term y utm_content son opcionales. Los valores se codifican en la URL para que los espacios y los caracteres especiales sigan siendo válidos.",
      "limitations": "Un campo en blanco, incluido un ID de campaña opcional, se omite del enlace en lugar de escribirse como un parámetro vacío. La página no acorta la dirección y no registra una visita. Un texto que no es una URL de un sitio se rechaza. En la calculadora hay enlaces a la documentación oficial de Google.",
      "faqs": [
        {
          "question": "¿El constructor de UTM es gratis?",
          "answer": "Sí. Añadir utm_source, utm_medium y utm_campaign a un enlace es gratis y no se necesita una cuenta."
        },
        {
          "question": "¿Esto sobrescribe mis otros parámetros de consulta?",
          "answer": "No. Solo se añaden o actualizan los campos UTM que rellenas. Los demás parámetros se quedan como están."
        },
        {
          "question": "¿Esta herramienta llama a un servicio de seguimiento?",
          "answer": "No. Solo construye una URL en tu navegador. El seguimiento ocurre después, si usas el enlace en una configuración de analítica."
        },
        {
          "question": "¿Qué son los parámetros UTM?",
          "answer": "Los parámetros UTM son etiquetas que se añaden a un enlace, como utm_source, utm_medium, utm_campaign y el utm_id opcional, y que indican a las herramientas de analítica de dónde vino una visita."
        },
        {
          "question": "¿Qué parámetros UTM son obligatorios?",
          "answer": "Origen, medio y campaña son el mínimo habitual. El ID de campaña (utm_id), el término y el contenido son opcionales. utm_id es útil cuando importas datos de campaña en GA4."
        },
        {
          "question": "¿Cómo añado utm_source y utm_medium a un enlace?",
          "answer": "Introduce la URL base y los campos UTM, y luego copia el enlace generado con los parámetros de consulta añadidos."
        },
        {
          "question": "¿Cuál es un buen patrón de nombres para utm_campaign?",
          "answer": "Usa tokens cortos y coherentes, como spring_sale_2026, para que los informes se filtren con facilidad más adelante."
        },
        {
          "question": "¿Puedo incluir utm_content y utm_term?",
          "answer": "Sí: content distingue creatividades o botones; term suele usarse para las palabras clave de búsqueda de pago."
        },
        {
          "question": "¿Las etiquetas UTM rompen mis parámetros de seguimiento existentes?",
          "answer": "El constructor conserva los demás parámetros de consulta cuando está configurado para combinarlos; revisa la URL final antes de publicarla."
        },
        {
          "question": "¿Los parámetros UTM funcionan en todas las herramientas de analítica?",
          "answer": "Son una convención habitual; tu producto de analítica debe leer esas claves de consulta para atribuir las sesiones."
        },
        {
          "question": "¿Por qué mantener los valores UTM con una sola capitalización?",
          "answer": "Mezclar mayúsculas suele dividir la misma campaña en varias filas; elige minúsculas o un estilo fijo y cúmplelo."
        },
        {
          "question": "¿Puedo crear enlaces para correo, redes y anuncios en una sola sesión?",
          "answer": "Sí: cambia el origen y el medio según el canal, vuelve a generar y guarda cada URL terminada."
        },
        {
          "question": "¿Qué ocurre si omito utm_source?",
          "answer": "Algunos validadores avisan porque el origen es el mínimo habitual; también se recomiendan con fuerza el medio y la campaña."
        },
        {
          "question": "¿Los parámetros UTM distinguen mayúsculas en los informes?",
          "answer": "Muchas herramientas de analítica los tratan como cadenas que distinguen mayúsculas, así que Email y email pueden aparecer en dos filas."
        },
        {
          "question": "¿Puedo usar espacios dentro de los valores UTM?",
          "answer": "Evita los espacios; usa guiones bajos. Si se cuelan espacios, deberían ir percent-encoded en la URL final."
        },
        {
          "question": "¿Los UTM afectan por sí solos al posicionamiento SEO?",
          "answer": "Los enlaces etiquetados siguen apuntando a la misma página; mantén URL canónicas limpias y evita meter UTM en la navegación interna."
        },
        {
          "question": "¿Cómo pruebo un enlace etiquetado antes de lanzar una campaña?",
          "answer": "Abre la URL, confirma las redirecciones y revisa la vista en tiempo real o de depuración de tu analítica para ver los campos UTM."
        },
        {
          "question": "¿Los enlaces acortados conservan las etiquetas UTM?",
          "answer": "Sí, si el acortador guarda el destino completo, incluida la cadena de consulta; expándelo y verifícalo una vez."
        },
        {
          "question": "¿Debo etiquetar los enlaces dentro de mi propio sitio?",
          "answer": "Por lo general no en la navegación global: los UTM son para campañas que traen tráfico de fuera o de creatividades concretas."
        },
        {
          "question": "¿Cuánto puede medir una URL con UTM?",
          "answer": "Mantén los valores concisos; las cadenas de consulta extremadamente largas pueden chocar con límites del navegador o de la plataforma de anuncios."
        }
      ]
    },
    "metaDescription": "Añade utm_source, utm_medium y utm_campaign a un enlace en tu navegador. Conserva los demás parámetros. Nada se envía a un servidor.",
    "ui": {
      'This page builds a campaign URL in your browser. Google recommends utm_source, utm_medium, and utm_campaign on every tagged link. utm_id is optional and is useful when you import campaign data. Blank fields are left off the URL.': 'Esta página construye una URL de campaña en tu navegador. Google recomienda utm_source, utm_medium y utm_campaign en cada enlace etiquetado. utm_id es opcional y resulta útil cuando importas datos de campaña. Los campos vacíos no se incluyen en la URL.',
      'Google Analytics help: URL builders': 'Ayuda de Google Analytics: creadores de URL',
      "Google's GA4 Campaign URL Builder": 'Creador de URL de campaña de GA4 de Google',
      'Campaign ID (optional)': 'ID de campaña (opcional)',
      'Adds utm_id. Use the same campaign ID you use when you import campaign data into GA4.': 'Añade utm_id. Usa el mismo ID de campaña que empleas al importar datos de campaña en GA4.',
      'abc.123': 'abc.123',
      'Source platform (optional)': 'Plataforma de origen (opcional)',
      'Adds utm_source_platform, for example Search Ads 360.': 'Añade utm_source_platform, por ejemplo Search Ads 360.',
      'Creative format (optional)': 'Formato del anuncio (opcional)',
      'Adds utm_creative_format. Google says this parameter is not currently reported in Analytics properties.': 'Añade utm_creative_format. Google indica que este parámetro no se informa actualmente en las propiedades de Analytics.',
      'Marketing tactic (optional)': 'Táctica de marketing (opcional)',
      'Adds utm_marketing_tactic. Google says this parameter is not currently reported in Analytics properties.': 'Añade utm_marketing_tactic. Google indica que este parámetro no se informa actualmente en las propiedades de Analytics.',
      'display': 'display',
      'remarketing': 'remarketing',
      'Search Ads 360': 'Search Ads 360',
      "Website URL": "URL del sitio",
      "Existing query parameters are kept. UTM values are added or updated.": "Los parámetros de consulta existentes se conservan. Los valores UTM se añaden o actualizan.",
      "Campaign source": "Fuente de la campaña",
      "Campaign medium": "Medio de la campaña",
      "Campaign name": "Nombre de la campaña",
      "Campaign term (optional)": "Término de la campaña (opcional)",
      "running shoes": "zapatillas para correr",
      "Campaign content (optional)": "Contenido de la campaña (opcional)",
      "Copy URL": "Copiar URL",
      "Enter a URL to generate a campaign link.": "Escribe una URL para generar un enlace de campaña.",
      "Campaign URL": "URL de campaña",
      "Enter a website URL.": "Escribe la URL de un sitio.",
      "Enter a valid website URL.": "Escribe una URL de sitio válida."
    }
  },
  "slug-generator": {
    "answer": "Un generador de slugs convierte un título en una cadena en minúsculas y con guiones, segura para usarse en una URL.",
    "content": {
      "about": "Convierte un título en un permalink en minúsculas y con guiones. Quien nombra una entrada lo usa antes de poner la dirección en un CMS. Se quitan los acentos latinos, se conservan letras como 你好, y el resultado no comprueba que la dirección esté libre.",
      "howTo": [
        "Escribe o pega un título.",
        "El slug se actualiza mientras escribes.",
        "Copia el slug o vacía el cuadro."
      ],
      "examples": [
        {
          "title": "Un título de blog",
          "body": "«How to Compress an Image Without Losing Quality» se convierte en how-to-compress-an-image-without-losing-quality."
        },
        {
          "title": "Acentos y otros alfabetos",
          "body": "Los acentos latinos se eliminan (Café → cafe). Letras como 你好 se conservan, así que el slug sigue siendo legible."
        }
      ],
      "explanation": "El generador recorta el texto, separa las marcas de combinación tras una normalización Unicode NFKD, pasa a minúsculas las letras latinas, convierte otros separadores en guiones y compacta las repeticiones. Conserva letras y números Unicode en lugar de borrar todos los caracteres que no son inglés. El resultado es un permalink práctico, no un identificador único garantizado.",
      "limitations": "Se quitan los acentos latinos, mientras que letras como 你好 se quedan. El resultado es la forma de un permalink, no la prueba de que la dirección esté libre. Algunos creadores de sitios borran las letras no latinas; esta página no.",
      "faqs": [
        {
          "question": "¿El generador de slugs es gratis?",
          "answer": "Sí. Convertir un título en un permalink con guiones es gratis y no necesitas una cuenta."
        },
        {
          "question": "¿Coincidirá con todos los CMS?",
          "answer": "La mayoría de los sitios aceptan slugs en minúsculas y con guiones. Algunos quitan las letras no latinas; esta herramienta las conserva cuando son letras o números."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. El título se reescribe en esta pestaña. No se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué es un slug de URL?",
          "answer": "Un slug es la parte legible de una dirección web que nombra una página, como how-to-make-bread en example.com/blog/how-to-make-bread."
        },
        {
          "question": "¿Qué hace que un slug sea bueno para el SEO?",
          "answer": "Manténlo corto, en minúsculas y descriptivo, con las palabras separadas por guiones. Evita fechas o palabras de relleno si la página puede actualizarse después."
        },
        {
          "question": "¿Cómo convierto el título de una entrada en un slug de URL?",
          "answer": "Pega el título, genera y copia el slug en minúsculas y con guiones en tu CMS."
        },
        {
          "question": "¿Deben ir fechas dentro del slug?",
          "answer": "Es opcional: las fechas ayudan a la unicidad, pero alargan las URL; muchos blogs las omiten."
        },
        {
          "question": "¿Qué hago con palabras vacías como «the» y «and»?",
          "answer": "Algunos generadores las quitan; consérvalas si aportan sentido al tema."
        },
        {
          "question": "¿Puedo editar el slug después de generarlo?",
          "answer": "Sí: acórtalo o acláralo antes de publicar; cambiarlo después puede romper enlaces."
        },
        {
          "question": "¿Qué caracteres se suelen quitar de un slug?",
          "answer": "Se eliminan o se sustituyen la puntuación, los símbolos y los emoji; se quedan letras, números y guiones."
        },
        {
          "question": "¿Cómo se convierten en slugs los títulos que no están en alfabeto latino?",
          "answer": "Según la configuración, se transliteran, se codifican en porcentaje o se conserva Unicode: ajústalo a tu CMS."
        },
        {
          "question": "¿Por qué preferir guiones a espacios o guiones bajos?",
          "answer": "Los guiones son la convención de la web que los buscadores y las personas leen con facilidad."
        },
        {
          "question": "¿Cuánto es demasiado largo para un slug?",
          "answer": "Quédate, cuando puedas, por debajo de unos 50–60 caracteres; pon primero las palabras importantes."
        },
        {
          "question": "¿Deben aparecer los SKU de producto en el slug?",
          "answer": "Solo si la gente busca de esa forma; si no, prefiere nombres legibles."
        },
        {
          "question": "¿Pueden dos artículos compartir un slug por accidente?",
          "answer": "Sí: los CMS suelen exigir unicidad; añade un sufijo corto si hace falta."
        },
        {
          "question": "¿Cómo convierto un titular con dos puntos o un guion?",
          "answer": "Los dos puntos se convierten en separadores o desaparecen; evita los guiones dobles en la ruta final."
        },
        {
          "question": "¿Un slug es la URL completa?",
          "answer": "No: es el segmento de la ruta después de tu dominio (y, a veces, de las carpetas de categoría)."
        },
        {
          "question": "¿Debo llenar el slug de palabras clave repetidas?",
          "answer": "No: una frase clara vale más que una cadena larga de palabras clave repetidas."
        },
        {
          "question": "¿Cómo se relacionan las redirecciones con un cambio de slug?",
          "answer": "Si cambias un slug ya publicado, añade una redirección 301 desde la ruta antigua para que los enlaces sigan funcionando."
        },
        {
          "question": "¿Generar el slug sube mi título?",
          "answer": "La generación en esta página está pensada para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Convierte un título en un slug en minúsculas y con guiones, en tu navegador. Quita acentos latinos y conserva letras como 你好. Nada se sube.",
    "ui": {
      "Title or text": "Título o texto",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Se quitan los acentos de las letras latinas. Otras letras, como las chinas, se conservan.",
      "Example": "Ejemplo",
      "Copy slug": "Copiar slug",
      "Generated slug": "Slug generado",
      "How to Compress an Image Without Losing Quality": "Cómo comprimir una imagen sin perder calidad"
    }
  },
  "qr-code-generator": {
    "answer": "Un generador de códigos QR convierte un texto o una URL en una imagen QR descargable, creada en tu dispositivo.",
    "content": {
      "about": "El generador de códigos QR crea un código a partir de texto plano o de una URL, de hasta 1.200 caracteres, y puedes descargarlo como PNG o como SVG. Úsalo para un enlace corto o una nota breve que alguien deba escanear. El texto se guarda en el propio patrón. No hay un servicio de redirección. Los formatos de Wi-Fi, correo, teléfono, SMS y contacto, incluido un logotipo opcional, están en QR Code Generator Pro. Una cadena larga hace un código más denso, y algunas cámaras no lo leen.",
      "howTo": [
        "Pega un texto o una URL completa. Incluye https:// cuando sea un enlace web. La página recorta los espacios de los extremos.",
        "Pulsa Generar. Aparece una vista previa de 320 píxeles de ancho, con un patrón oscuro sobre un fondo blanco.",
        "Descarga un PNG para pantallas, o un SVG si necesitas un vector real de los módulos. Pulsa Restablecer si necesitas otro código. Un cuadro vacío, o más de 1.200 caracteres, muestra un error y borra la vista previa."
      ],
      "examples": [
        {
          "title": "Un sitio web corto",
          "body": "Introduce https://example.com y pulsa Generar. La página recorta los espacios de alrededor y codifica esa dirección exacta. Un teléfono que escanea el código abre esa URL si la cámara la trata como un enlace. La vista previa tiene 320 píxeles de ancho, con corrección de errores de nivel M y un margen de silencio de 2 módulos. Puedes descargar un PNG o un SVG. El color oscuro es #0b1f3a y el claro es #ffffff."
        },
        {
          "title": "Texto plano",
          "body": "Introduce una frase corta, como Meet at the north door. Generar codifica esos caracteres, no una página web. Los escáneres suelen mostrar el texto en lugar de abrir un navegador. Se aplica el mismo tope de 1.200 caracteres. Un texto vacío, incluido un cuadro solo de espacios, falla con: Enter text or a URL to encode."
        },
        {
          "title": "Una cadena demasiado larga",
          "body": "1.200 caracteres se aceptan. 1.201 caracteres se rechazan antes de dibujar un código. El mensaje es: Keep QR content to 1200 characters so the code stays readable. Acorta el texto, o pon el texto largo en una página y codifica la URL de esa página."
        }
      ],
      "explanation": "Un código QR es una matriz de módulos oscuros y claros. Esta página lo construye en el navegador con una biblioteca del cliente. Generar no envía el texto a un servicio de QR. La corrección de errores de nivel M puede recuperar una cantidad moderada de daño. No hace fiable una impresión diminuta o de bajo contraste. Puedes descargar un PNG de la vista previa, o un SVG dibujado como un vector real de los módulos.",
      "limitations": "Se codifica texto plano o una URL, y el texto debe tener 1.200 caracteres o menos después de recortar. Un valor vacío se rechaza. Los formatos de Wi-Fi, correo, teléfono, SMS y contacto, incluido un logotipo opcional, están en QR Code Generator Pro. La vista previa tiene 320 píxeles de ancho con corrección de errores de nivel M, y puedes descargar un PNG o un SVG. Una cadena larga hace un patrón denso que algunas cámaras no leen. La página no rastrea los escaneos ni añade un logotipo.",
      "tips": [
        "Incluye https:// en los enlaces web. Un dominio suelto puede mostrarse como texto en lugar de abrirse como un sitio.",
        "Prefiere una URL corta a un párrafo largo. Lo que hace fallar a las cámaras es la densidad, no solo el tope de 1.200.",
        "Deja el margen de silencio. El generador ya añade un margen de 2 módulos. Recortar la imagen puede quitarlo.",
        "Usa el escáner de este sitio, o la cámara de tu teléfono, antes de publicar la imagen."
      ],
      "sections": [
        {
          "heading": "Por qué un código largo es más difícil de escanear",
          "paragraphs": [
            "Más caracteres significan más módulos en la misma imagen de 320 píxeles, así que cada módulo es más pequeño. El nivel M dedica algunos de esos módulos a datos de recuperación. Una URL corta se queda más gruesa y es más fácil para la cámara de un teléfono.",
            "Imprime el PNG lo bastante grande para que los módulos se vean nítidos. Una captura borrosa, un fondo de color o un logotipo encima de este código básico pueden hacer que falle. Esta página no añade un logotipo ni cambia los colores."
          ]
        },
        {
          "heading": "Qué pertenece a QR Code Generator Pro",
          "paragraphs": [
            "Esta página codifica los caracteres que pegas y nada más. No arma una cadena de configuración Wi-Fi, un enlace mailto, un cuerpo de SMS ni una tarjeta de contacto por ti.",
            "QR Code Generator Pro tiene esos formatos, y puede cambiar los colores. Si solo tienes una URL o una frase, quédate en esta página. Si pegas una cadena Wi-Fi que ya escribiste, esta página codificará esa cadena como texto. No comprobará que la red exista."
          ]
        },
        {
          "heading": "El código no caduca aquí",
          "paragraphs": [
            "No hay una cuenta ni un servidor de enlaces cortos detrás del archivo. El patrón sigue funcionando mientras un escáner pueda leerlo y, en el caso de una URL, mientras esa dirección siga respondiendo. Si cambias la página de esa dirección, el código antiguo sigue apuntando a la misma dirección.",
            "Prueba con un teléfono antes de imprimir un montón de etiquetas. La vista previa de esta página no es una prueba de escaneo."
          ]
        },
        {
          "heading": "Privacidad",
          "paragraphs": [
            "El texto se queda en esta pestaña. Generar no lo sube. El PNG se crea en local y se descarga a tu dispositivo. No codifiques una contraseña que no querrías en una página impresa. Quien escanee el código puede leer el texto."
          ]
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo hago un código QR para un sitio web?",
          "answer": "Pega la dirección completa, incluido https://, pulsa Generar y descarga un PNG o un SVG. https://example.com se codifica como esa URL. Pruébalo con la cámara de un teléfono antes de imprimirlo."
        },
        {
          "question": "¿Cuánto puede medir el texto?",
          "answer": "Hasta 1.200 caracteres después de quitar los espacios de los extremos. 1.201 caracteres muestra: Keep QR content to 1200 characters so the code stays readable. Un cuadro vacío dice: Enter text or a URL to encode."
        },
        {
          "question": "¿Caducan los códigos QR hechos aquí?",
          "answer": "No. El texto o el enlace se guarda en el patrón, sin un servicio de redirección en medio. Una URL funciona mientras esa dirección funcione. Este sitio no rastrea los escaneos."
        },
        {
          "question": "¿Puedo hacer aquí un código de Wi-Fi o de contacto?",
          "answer": "No con un formulario para esos campos. Usa QR Code Generator Pro para Wi-Fi, correo, teléfono, SMS y contactos. Esta página codifica los caracteres que pegas."
        },
        {
          "question": "¿Se sube el texto?",
          "answer": "No. El código QR se genera en tu navegador. El texto no se envía a un servidor."
        },
        {
          "question": "¿Todos los escáneres leerán el PNG?",
          "answer": "La mayoría de las cámaras pueden leer un PNG de alto contraste de una URL corta. La imagen tiene 320 píxeles de ancho, con corrección de errores de nivel M. Las impresiones diminutas, la poca luz o un texto muy largo pueden fallar."
        },
        {
          "question": "¿Puedo codificar un número de teléfono o un enlace SMS?",
          "answer": "Esta página codifica el texto que pegas, así que una cadena tel: o sms: quedará en el PNG si ya la tienes. Para un formulario de teléfono o SMS, usa el [Generador de códigos QR Pro](/tools/qr-code-generator-pro)."
        },
        {
          "question": "¿Debo probar el PNG antes de imprimir pegatinas?",
          "answer": "Escanea siempre una prueba impresa al tamaño final; el contraste y el brillo de la impresora pueden reducir la legibilidad."
        },
        {
          "question": "¿Una resolución más alta mejora el éxito del escaneo?",
          "answer": "Un PNG nítido ayuda en impresiones grandes, pero los márgenes de silencio y el contraste importan más que los megapíxeles por sí solos."
        },
        {
          "question": "¿Puedo poner un logotipo en el centro?",
          "answer": "No en esta página. El generador básico descarga solo el patrón, como PNG o como SVG. Para un logotipo opcional en el centro, usa [QR Code Generator Pro](/tools/qr-code-generator-pro). Prueba siempre el escaneo de un código con logotipo antes de imprimirlo."
        },
        {
          "question": "¿Qué ocurre si pego una URL muy larga?",
          "answer": "El patrón se densifica y se vuelve más difícil de escanear; prefiere un enlace corto cuando el destino es largo."
        },
        {
          "question": "¿Necesito internet después de descargar el PNG?",
          "answer": "No: una vez guardada, la imagen funciona sin conexión. Los escáneres solo necesitan los datos codificados, no este sitio."
        },
        {
          "question": "¿Puedo hacer aquí un QR de contacto vCard?",
          "answer": "Solo si pegas una cadena vCard ya lista como texto. Para un formulario que arma un contacto con nombre, teléfono y correo, usa el [Generador de códigos QR Pro](/tools/qr-code-generator-pro)."
        },
        {
          "question": "¿Por qué las señales exteriores deberían usar módulos más grandes?",
          "answer": "La distancia y el brillo exigen módulos más grandes y un contraste más fuerte para que los teléfonos enfoquen con rapidez."
        },
        {
          "question": "¿Hay SVG en la descarga?",
          "answer": "Sí. Después de generar el código puedes descargar un PNG para pantallas o un SVG, que es un vector real de los módulos, para imprimir o cambiar el tamaño."
        },
        {
          "question": "¿Puedo crear muchos códigos a la vez?",
          "answer": "Aquí se genera una carga cada vez; para cientos de URL, programa una biblioteca de QR dedicada."
        },
        {
          "question": "¿El modo oscuro del teléfono rompe el escaneo?",
          "answer": "La mayoría de las cámaras ignoran el tema de la interfaz; el problema habitual es la poca luz o el bajo contraste del código impreso."
        },
        {
          "question": "¿Debo acompañar el QR con una llamada a la acción?",
          "answer": "Una etiqueta breve como «Escanea para ver el menú» ayuda a que la gente confíe en el código, sin cambiar los datos codificados."
        },
        {
          "question": "¿Puedo codificar texto plano que no sea una URL?",
          "answer": "Sí: cualquier texto funciona; los escáneres muestran la cadena u ofrecen copiarla."
        },
        {
          "question": "¿Cómo conservo una zona de silencio alrededor del código?",
          "answer": "Deja un margen vacío al colocar el PNG en un diseño, para que no se recorten los bordes."
        }
      ]
    },
    "metaDescription": "Crea un código QR en PNG o SVG a partir de una URL o un texto, en tu navegador. Para Wi-Fi, vCard, correo o SMS, usa el generador Pro. Nada se sube.",
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "El código QR se crea en tu navegador. Mantén el contenido razonablemente corto.",
      "QR code for {0}": "Código QR para {0}",
      "QR code for:": "Código QR para:",
      "The QR code is generated in your browser. The text is not sent to a server.": "El código QR se genera en tu navegador. El texto no se envía a ningún servidor."
    }
  },
  "qr-code-scanner": {
    "answer": "Un escáner de códigos QR lee una imagen QR que eliges y muestra el texto decodificado en local.",
    "content": {
      "about": "Lee el primer código QR de la cámara o de un PNG o JPG. Úsalo cuando quieras ver el texto en la página antes de decidir si abres un enlace. La cámara permanece apagada hasta que pulsas Iniciar cámara, y no se decodifican otras familias de códigos de barras.",
      "howTo": [
        "Pulsa Iniciar cámara solo si quieres escanear con la cámara del dispositivo. El permiso se pide en ese momento, no al cargar la página.",
        "Mantén el código a la vista hasta que aparezca un resultado, o pulsa Detener cámara para liberar el flujo.",
        "Si la cámara está bloqueada, sube un PNG o JPG del código.",
        "Copia el resultado. Si es una URL http(s), se ofrece Abrir enlace. La página no navega por sí sola."
      ],
      "examples": [
        {
          "title": "Escaneo con la cámara",
          "body": "Después de iniciar la cámara, los fotogramas se decodifican en la pestaña. El flujo se detiene cuando se encuentra un código o cuando pulsas Detener."
        },
        {
          "title": "Subida de una imagen",
          "body": "Una captura de un código QR se puede decodificar aunque se haya denegado el permiso de la cámara."
        }
      ],
      "explanation": "La decodificación usa un lector de JavaScript local sobre los fotogramas de la cámara o una imagen subida. El acceso a la cámara empieza solo después de pulsar Iniciar cámara. Las pistas se detienen al pulsar Detener, tras un escaneo correcto y al salir de la página. Una URL detectada se muestra primero; abrirla es una acción aparte.",
      "limitations": "El primer código que encuentra el lector es el que se muestra. No se decodifican otras familias de códigos de barras. Un enlace se queda en la página hasta que pulsas Abrir enlace, y la cámara permanece apagada hasta que pulsas Iniciar cámara.",
      "faqs": [
        {
          "question": "¿El escáner de códigos QR es gratis?",
          "answer": "Sí. Leer un código QR desde la cámara o desde una imagen es gratis y no se necesita una cuenta."
        },
        {
          "question": "¿Se suben los fotogramas de la cámara?",
          "answer": "No. Los fotogramas después de Iniciar cámara, y un PNG o JPG que elijas, se decodifican en esta pestaña. Ninguno se envía a Tools Star Hub."
        },
        {
          "question": "¿Por qué no abrió el sitio web automáticamente?",
          "answer": "Navegar de forma automática a una URL escaneada no es seguro. Revisa el texto y usa Abrir enlace si confías en él."
        },
        {
          "question": "¿Qué ocurre si la imagen tiene más de un código QR?",
          "answer": "Este lector informa del primer código que puede decodificar. Recorta la imagen si necesitas un código concreto."
        },
        {
          "question": "¿Cómo escaneo un código QR desde un archivo de imagen?",
          "answer": "Elige la imagen que contiene el código, espera a que termine el decodificador y luego abre o copia el resultado. Un recorte nítido y bien iluminado, solo del cuadrado, suele funcionar mejor que una foto ocupada de toda la página."
        },
        {
          "question": "¿Puedo escanear un código QR con la cámara del teléfono en el navegador?",
          "answer": "Sí, en los teléfonos que permiten el acceso a la cámara en la pestaña. Concede el permiso cuando te lo pidan, apunta la cámara al código y mantén el cuadrado firme hasta que aparezca la carga."
        },
        {
          "question": "¿Por qué no se escanea mi código QR?",
          "answer": "La borrosidad, el brillo, el bajo contraste, una impresión doblada o una esquina recortada son las causas habituales. Vuelve a tomar la foto más cerca, alisa el papel y evita los reflejos en pantallas brillantes."
        },
        {
          "question": "¿Qué tipos de carga QR puede leer esta herramienta?",
          "answer": "La mayoría de los códigos llevan una URL, texto plano, configuración Wi-Fi o datos de contacto. El escáner muestra la cadena en crudo para que decidas si abres un enlace o copias el texto."
        },
        {
          "question": "¿Es seguro escanear un código QR?",
          "answer": "Trata los códigos desconocidos como enlaces desconocidos. Lee la URL decodificada antes de abrirla y omite los enlaces cortos en los que no confíes. El escáner solo decodifica; no visita el sitio por ti."
        },
        {
          "question": "¿Necesito un lector QR de una tienda de aplicaciones?",
          "answer": "No para un escaneo puntual. Una herramienta del navegador basta cuando ya tienes una foto o puedes usar la cámara del teléfono en la pestaña. Las aplicaciones dedicadas ayudan si escaneas muchos códigos cada día."
        },
        {
          "question": "¿Pueden funcionar códigos dañados o parcialmente cubiertos?",
          "answer": "Los códigos QR incluyen corrección de errores, así que una mancha pequeña o la pérdida de una esquina todavía pueden decodificarse. Los rotos grandes o la falta de los cuadrados de búsqueda suelen fallar y necesitan una captura más limpia."
        },
        {
          "question": "¿Qué resolución debería tener mi foto?",
          "answer": "Los píxeles suficientes para que los módulos se distingan. Una foto de un teléfono moderno sirve; una miniatura diminuta o una compresión fuerte que mezcle los cuadrados negros y blancos, no."
        },
        {
          "question": "¿El escáner funciona sin conexión después de cargar la página?",
          "answer": "La decodificación se ejecuta en el navegador cuando los scripts están listos. El acceso a la cámara o al archivo sigue necesitando los permisos que ya concediste, pero la imagen no se sube para terminar un escaneo."
        },
        {
          "question": "¿Por qué encontró un texto que no es un sitio web?",
          "answer": "Muchos códigos guardan texto plano, números de teléfono o credenciales Wi-Fi en lugar de enlaces https. Copia la cadena y úsala en el sitio adecuado, en lugar de forzarla en la barra de direcciones."
        },
        {
          "question": "¿Puedo escanear varios códigos de una sola foto?",
          "answer": "Si hay más de un código a la vista, la herramienta informa de lo que encuentra en ese fotograma. Recortar a un solo cuadrado es la forma más segura de controlar qué carga obtienes."
        },
        {
          "question": "¿En qué se diferencia un código QR de un código de barras?",
          "answer": "Los códigos de barras clásicos suelen ser líneas de una dimensión para SKU de producto. Los códigos QR son cuadrados de dos dimensiones que guardan cadenas más largas, como URL o tarjetas de contacto."
        },
        {
          "question": "¿Se puede escanear un QR en modo oscuro o de color?",
          "answer": "Los módulos oscuros de alto contraste sobre un fondo claro se escanean con más fiabilidad. Los colores de marca de bajo contraste o los diseños invertidos a menudo necesitan una reimpresión con más contraste."
        },
        {
          "question": "¿Importa el tamaño de impresión?",
          "answer": "Sí. Las impresiones diminutas en pegatinas brillantes pueden fallar cuando la cámara no distingue cada módulo. Las impresiones más grandes, con espacio de silencio alrededor del cuadrado, se escanean de forma más constante."
        },
        {
          "question": "¿Qué debo hacer después de un escaneo correcto?",
          "answer": "Copia la carga, verifica el destino y ábrelo solo si coincide con lo que esperas. En códigos Wi-Fi o de contacto, pega los datos en la pantalla de ajustes correspondiente, no en un navegador."
        }
      ]
    },
    "metaDescription": "Lee un código QR con la cámara o desde un PNG o JPG, en tu navegador. Los fotogramas no se suben. Un enlace no se abre hasta que tú lo decides.",
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "El acceso a la cámara solo se solicita cuando eliges escanear con la cámara.",
      "Start camera": "Iniciar cámara",
      "Stop camera": "Detener cámara",
      "Or upload a QR image": "O sube una imagen QR",
      "Drag and drop a QR image here, or choose a file.": "Arrastra y suelta una imagen QR aquí, o elige un archivo.",
      "Image upload works even if the camera is blocked.": "Subir una imagen funciona aunque la cámara esté bloqueada.",
      "Scan result": "Resultado del escaneo",
      "Open link": "Abrir enlace",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "Los fotogramas tras Iniciar cámara y el PNG o JPG que elijas se decodifican en esta pestaña. Nada se envía a Tools Star Hub.",
      "This browser does not support camera access. Upload an image instead.": "Este navegador no admite el acceso a la cámara. Sube una imagen en su lugar.",
      "Camera permission was denied. You can still upload an image.": "Se denegó el permiso de cámara. Aun así puedes subir una imagen.",
      "No camera was found. Upload an image instead.": "No se encontró ninguna cámara. Sube una imagen en su lugar.",
      "The camera could not be started. Upload an image instead.": "No se pudo iniciar la cámara. Sube una imagen en su lugar.",
      "This browser could not read that image.": "Este navegador no pudo leer esa imagen.",
      "No QR code was found in that image.": "No se encontró ningún código QR en esa imagen.",
      "That file could not be read as an image.": "Ese archivo no se pudo leer como imagen."
    }
  },
  "password-generator": {
    "answer": "Un generador de contraseñas crea una contraseña o una frase de contraseña aleatoria en tu dispositivo. Esta página también ofrece una plantilla en blanco de registro de contraseñas; no es un gestor de contraseñas ni una caja fuerte cifrada.",
    "content": {
      "about": "Crea en tu navegador una contraseña aleatoria fuerte o una frase memorable, y luego cópiala o pásala a tu teléfono con un código QR opcional. También puedes descargar una plantilla CSV de contraseñas o imprimir un cuaderno en blanco. La generación usa crypto.getRandomValues y se queda en este dispositivo. Esta página es una herramienta de contraseñas, no un gestor, una caja fuerte cifrada ni una aplicación de contraseñas sin conexión.",
      "howTo": [
        "Elige una contraseña aleatoria o una frase memorable.",
        "Indica la longitud o el número de palabras, y luego elige los tipos de caracteres o las opciones de la frase.",
        "Pulsa Generar, revisa el medidor de fortaleza y copia el resultado en un gestor de contraseñas de confianza.",
        "Si quieres, descarga el registro CSV o imprime un cuaderno de contraseñas, y rellena sitio, usuario, pista, fecha de cambio, 2FA y notas, no la contraseña en vivo si el archivo podría compartirse."
      ],
      "examples": [
        {
          "title": "16 caracteres mezclados",
          "body": "Una contraseña de 16 caracteres con letras mayúsculas y minúsculas, números y símbolos tiene un espacio de caracteres amplio. La etiqueta de fortaleza es una estimación a partir de la longitud y del tamaño del conjunto."
        },
        {
          "title": "Una frase de seis palabras",
          "body": "Una frase de seis palabras tomada de la lista de 2.048 palabras suele ser más fácil de escribir que una cadena larga de símbolos, con unos 66 bits de entropía estimada antes de cualquier dígito extra."
        },
        {
          "title": "Un registro de contraseñas sin conexión",
          "body": "Descarga la plantilla CSV y ábrela en Excel o Google Sheets, o imprime el cuaderno de contraseñas. Anota una pista en lugar de la contraseña en vivo, sobre todo en una hoja de cálculo en la nube."
        }
      ],
      "explanation": "Las contraseñas aleatorias eligen cada carácter con crypto.getRandomValues(), no con Math.random(). El generador incluye al menos un carácter de cada conjunto seleccionado y luego rellena el resto desde el conjunto combinado, con un muestreo sin sesgo. Las frases eligen palabras de una lista de 2.048 y pueden añadir guiones o un dígito final. La etiqueta de fortaleza (Corta / Moderada / Fuerte) se estima como longitud × log2(tamaño del conjunto) para los caracteres, o como número de palabras × log2(2.048) para las frases. No es una garantía frente a adivinanzas, reutilización, phishing o un sitio filtrado.",
      "limitations": "La longitud debe ser un número entero de 8 a 64, y una frase usa de 4 a 10 palabras. En una contraseña aleatoria debe quedar activo al menos un tipo de carácter. La etiqueta de fortaleza estima a partir de la longitud y del tamaño del conjunto. No comprueba la reutilización, el phishing ni un sitio filtrado. Esta página no guarda inicios de sesión, no sincroniza una caja fuerte ni cifra un archivo por ti. Se pueden dejar fuera los caracteres ambiguos; el resto de la lista de símbolos es fija.",
      "tips": [
        "Usa una contraseña o una frase distinta para cada cuenta, y activa el 2FA donde el sitio lo ofrezca.",
        "Guarda el resultado en un gestor de contraseñas de confianza cuando puedas. Eso es más seguro que una hoja de cálculo o una lista en papel.",
        "Si llevas un registro de contraseñas sin conexión, guarda una pista, no la contraseña en vivo, y mantén el archivo en privado.",
        "Trata un código QR como la contraseña misma. No hagas una captura ni lo dejes en una pantalla compartida."
      ],
      "features": [
        "Contraseñas aleatorias de 8 a 64 caracteres, con símbolos opcionales y sin caracteres que se confundan.",
        "Frases memorables de 4 a 10 palabras de una lista de 2.048 palabras.",
        "Un medidor visible de fortaleza y de entropía.",
        "Un código QR opcional, creado en el cliente, para pasar una contraseña al teléfono.",
        "Plantillas gratuitas de hoja CSV y de cuaderno imprimible, generadas en este dispositivo."
      ],
      "sections": [
        {
          "heading": "Esto no es un gestor de contraseñas",
          "paragraphs": [
            "A menudo se busca un gestor de contraseñas, una caja fuerte, un password keeper o un rastreador de cuentas cuando en realidad se necesitan dos cosas: una contraseña nueva y fuerte, y un sitio donde llevar el control de las cuentas. Esta herramienta puede crear la contraseña y darte un registro en blanco. No puede sustituir a un gestor que cifra y rellena los inicios de sesión."
          ]
        },
        {
          "heading": "Hojas de cálculo, Google Sheets y cuadernos de papel",
          "paragraphs": [
            "Una hoja de contraseñas o una plantilla de Excel puede ayudarte a enumerar sitios, usuarios, pistas y el estado del 2FA. Una hoja de Google compartida, un correo o un chat es un mal sitio para las contraseñas en vivo. Prefiere las pistas, mantén el archivo sin conexión o muy restringido, y usa un gestor para los secretos de verdad."
          ]
        }
      ],
      "article": {
        "title": "Cómo crear contraseñas seguras y organizar tus cuentas",
        "intro": "Un buen inicio de sesión empieza con un secreto único que no hayas usado antes. Esta guía cubre cómo funcionan el generador y el modo de frase, cómo guardar el resultado, y cómo un cuaderno o una hoja de contraseñas puede acompañar a un gestor sin pretender ser uno.",
        "sections": [
          {
            "heading": "Crea una contraseña o una frase fuerte",
            "paragraphs": [
              "En la mayoría de los sitios, una cadena aleatoria de 16 caracteres o más, con tipos mezclados, es un buen valor predeterminado. Si un formulario es incómodo de escribir, una frase de seis palabras suele ser más fácil y sigue siendo fuerte cuando las palabras se eligen al azar. Evita los recorridos del teclado y los datos personales. Comprueba una contraseña que ya tengas con el [comprobador de fortaleza de contraseñas](/tools/password-strength-checker)."
            ]
          },
          {
            "heading": "Almacenamiento de contraseñas y lo básico de la ciberseguridad",
            "paragraphs": [
              "La ciberseguridad de los inicios de sesión cotidianos es, sobre todo, un hábito: contraseñas únicas, 2FA y un solo lugar de confianza donde guardarlas. Un gestor de contraseñas de prestigio o una caja fuerte cifrada están hechos para eso. Una descarga digital o una lista de contraseñas es solo una plantilla. No se cifra sola y no es una aplicación de contraseñas sin conexión."
            ]
          },
          {
            "heading": "Usar un registro, un rastreador o un organizador de contraseñas",
            "paragraphs": [
              "Si quieres un organizador de inicios de sesión, una lista de cuentas y contraseñas o un rastreador, usa el CSV o el cuaderno imprimible de esta página. Rellena el sitio, el usuario, la pista, la fecha de cambio, el 2FA y las notas. Guarda los códigos de recuperación sin conexión. No trates una hoja de cálculo en la nube como una caja fuerte."
            ]
          },
          {
            "heading": "Códigos QR y pasar una contraseña al teléfono",
            "paragraphs": [
              "El código QR opcional de esta página codifica la contraseña en tu dispositivo para que puedas escanearla una vez. Quien vea la imagen puede leer el secreto. También puedes pegar el texto en el [generador de códigos QR](/tools/qr-code-generator). Borra la imagen cuando termines."
            ]
          },
          {
            "heading": "Otras herramientas de Tools Star Hub",
            "paragraphs": [
              "Después de generar una contraseña, el [comprobador de fortaleza de contraseñas](/tools/password-strength-checker) valora una cadena que ya tienes, el [generador de códigos QR](/tools/qr-code-generator) codifica cualquier texto corto y el [generador de hash](/tools/hash-generator) puede dejar una huella del texto. Ninguna de esas herramientas guarda una caja fuerte de contraseñas."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "¿El generador de contraseñas es gratis?",
          "answer": "Sí. Crear una contraseña o una frase, descargar la plantilla CSV e imprimir el cuaderno de contraseñas es gratis, y no se necesita una cuenta."
        },
        {
          "question": "¿Se guardan las contraseñas?",
          "answer": "No. No se almacenan, no se registran, no se ponen en la URL ni se escriben en localStorage. Copia el valor en un gestor de contraseñas si lo necesitas después."
        },
        {
          "question": "¿«Fuerte» significa que no se puede vulnerar?",
          "answer": "No. El medidor es una estimación a partir de la longitud y del tamaño del conjunto aleatorio. No tiene en cuenta la reutilización, el phishing ni un servicio comprometido."
        },
        {
          "question": "¿Esta página es un gestor de contraseñas o una caja fuerte?",
          "answer": "No. Genera una contraseña o una frase y una plantilla de registro en blanco. No almacena, no sincroniza, no rellena automáticamente ni cifra una caja fuerte. Usa un gestor de contraseñas de confianza para el día a día."
        },
        {
          "question": "¿Puedo abrir el registro de contraseñas en Google Sheets o Excel?",
          "answer": "Sí. El archivo CSV es una plantilla que puedes abrir en Excel, Google Sheets u otra hoja de cálculo. Mantenlo en privado y anota una pista en lugar de la contraseña en vivo, sobre todo si la hoja podría compartirse."
        },
        {
          "question": "¿Qué debo escribir en la columna de pista?",
          "answer": "Escribe algo que te ayude a encontrar la entrada en tu gestor, como una etiqueta breve o la fecha del último cambio. Evita escribir la contraseña completa en un archivo que podría enviarse por correo o sincronizarse."
        },
        {
          "question": "¿Es seguro llevar un cuaderno de contraseñas impreso?",
          "answer": "Un cuaderno de papel es un rastreador de inicios de sesión sin conexión, no una caja fuerte cifrada. Guárdalo en un sitio cerrado. No escribas contraseñas en vivo en un cuaderno que llevas encima, y guarda los códigos de recuperación aparte si puedes."
        },
        {
          "question": "¿Cómo elige las palabras el modo de frase?",
          "answer": "Toma cada palabra al azar de una lista de 2.048 palabras, con crypto.getRandomValues. Puedes elegir de 4 a 10 palabras, un espacio o un guion entre ellas, mayúsculas opcionales y un dígito opcional al final."
        },
        {
          "question": "¿Cómo se calcula el medidor de fortaleza?",
          "answer": "Para una contraseña aleatoria usa la longitud por el log2 del tamaño del conjunto de caracteres. Para una frase usa el número de palabras por el log2 de 2.048, más un poco si añades un dígito. Por debajo de 50 bits es Corta, por debajo de 80 es Moderada, y 80 o más es Fuerte."
        },
        {
          "question": "¿Debo escanear un código QR de una contraseña en un lugar público?",
          "answer": "Evítalo si otras personas pueden ver la pantalla. El código QR contiene la contraseña misma. Géneralo en tu dispositivo, escánalo una vez y luego cierra o borra la imagen."
        },
        {
          "question": "¿En qué se diferencia esto del comprobador de fortaleza de contraseñas?",
          "answer": "Esta página crea una contraseña o una frase nueva. El comprobador de fortaleza valora una cadena que ya tienes. No genera un secreto nuevo."
        },
        {
          "question": "¿Puedo importar el CSV a un gestor de contraseñas?",
          "answer": "La mayoría de los gestores quieren un archivo que incluya la contraseña en vivo. Esta plantilla deja esa columna fuera a propósito, así que igual tendrías que copiar cada secreto de esta página al gestor tú mismo."
        },
        {
          "question": "¿Tools Star Hub guarda una copia del cuaderno que imprimo?",
          "answer": "No. La vista de impresión se construye en tu navegador y se abre en una ventana nueva. Nada se sube."
        },
        {
          "question": "¿Por qué no hay una columna de contraseña en la plantilla?",
          "answer": "Una lista con secretos en vivo es arriesgada en una hoja de cálculo o en una descarga digital que podrías compartir. La plantilla es un organizador de inicios de sesión para sitio, usuario, pista, fecha de cambio, 2FA y notas."
        },
        {
          "question": "¿Puedo usarlo como una aplicación de contraseñas sin conexión?",
          "answer": "No. Después de cargar la página puedes generar contraseñas sin enviarlas a un servidor, pero sigue siendo una página web, no una aplicación instalada de contraseñas sin conexión ni una caja fuerte cifrada."
        },
        {
          "question": "¿Cómo paso una contraseña al teléfono sin usar el correo?",
          "answer": "Usa el botón QR de esta página, o pega el texto en el generador de códigos QR, y luego escánalo en el teléfono. No envíes la contraseña por correo ni por chat."
        },
        {
          "question": "¿Sigue bastando una contraseña de 12 caracteres?",
          "answer": "Doce caracteres mezclados pueden ser aceptables en algunos sitios, pero 16 o más es un valor predeterminado más seguro cuando el formulario lo permite. Una frase de seis palabras es otra opción fuerte cuando escribir resulta incómodo."
        },
        {
          "question": "¿Qué ocurre si desactivo los números y los símbolos?",
          "answer": "La contraseña se arma solo con los conjuntos que dejas activos, y la entropía estimada baja porque el conjunto es más pequeño. Debe quedar seleccionado al menos un conjunto."
        },
        {
          "question": "¿Debo guardar los códigos de recuperación en la misma hoja de cálculo?",
          "answer": "Es más seguro guardar los códigos de recuperación sin conexión o en tu gestor de contraseñas, no en la misma hoja en la nube que una lista de contraseñas. Si ese archivo se filtra, quedarían expuestos el mapa de inicios de sesión y los códigos de respaldo."
        },
        {
          "question": "¿Puedo generar más de una contraseña a la vez?",
          "answer": "El formulario crea una contraseña o una frase cada vez que pulsas Generar. Púlsalo de nuevo para un valor nuevo. Copia cada resultado a tu gestor o registro antes de generar el siguiente."
        }
      ]
    },
    "metaDescription": "Crea una contraseña o una frase de contraseña en tu navegador, con QR opcional y una plantilla de registro. No es un gestor ni una caja fuerte cifrada.",
    "ui": {
      "From {0} to {1} characters.": "De {0} a {1} caracteres.",
      "Uppercase letters": "Letras mayúsculas",
      "Lowercase letters": "Letras minúsculas",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Excluir caracteres ambiguos (O, 0, I, l, 1)",
      "Generated password": "Contraseña generada",
      "Length: {0}": "Longitud: {0}",
      "Character set size: {0}": "Tamaño del conjunto de caracteres: {0}",
      "Estimated entropy: {0} bits ({1})": "Entropía estimada: {0} bits ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Este medidor es una estimación basada en la longitud y el tamaño del conjunto de caracteres. No es una garantía de seguridad.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "Las contraseñas se crean con crypto.getRandomValues en tu navegador. No se guardan, no se registran ni se envían a un servidor.",
      "Enter a password length.": "Escribe una longitud de contraseña.",
      "Length must be a whole number.": "La longitud debe ser un número entero.",
      "Choose a length from {0} to {1}.": "Elige una longitud de {0} a {1}.",
      "Select at least one character type.": "Selecciona al menos un tipo de caracteres.",
      "Length must be at least the number of selected character types.": "La longitud debe ser al menos igual al número de tipos de caracteres seleccionados.",
      "Password type": "Tipo de contraseña",
      "Random password": "Contraseña aleatoria",
      "Letters, numbers, and symbols": "Letras, números y símbolos",
      "Memorable passphrase": "Frase de contraseña memorable",
      "Random words that are easier to type": "Palabras aleatorias más fáciles de escribir",
      "Length": "Longitud",
      "Character types": "Tipos de caracteres",
      "Numbers": "Números",
      "Symbols": "Símbolos",
      "Number of words": "Número de palabras",
      "From {0} to {1} words, drawn from a 2,048-word list.": "De {0} a {1} palabras, tomadas de una lista de 2.048 palabras.",
      "Word separator": "Separador de palabras",
      "Hyphen (correct-horse-battery)": "Guion (correct-horse-battery)",
      "Space (correct horse battery)": "Espacio (correct horse battery)",
      "Passphrase options": "Opciones de la frase",
      "Capitalize each word": "Poner en mayúscula cada palabra",
      "Add a random digit at the end": "Añadir un dígito aleatorio al final",
      "Generate": "Generar",
      "Clear": "Borrar",
      "Generated passphrase": "Frase de contraseña generada",
      "Strength: {0}": "Fortaleza: {0}",
      "Short": "Corta",
      "Moderate": "Moderada",
      "Strong": "Fuerte",
      "Estimated password strength": "Fortaleza estimada de la contraseña",
      "{0}, about {1} bits": "{0}, unos {1} bits",
      "Word list size: {0}": "Tamaño de la lista de palabras: {0}",
      "This meter is an estimate from length and the size of the random pool. It is not a guarantee of security.": "Este medidor es una estimación a partir de la longitud y del tamaño del conjunto aleatorio. No es una garantía de seguridad.",
      "Optional QR code: encode this password so you can scan it with your phone. Anyone who sees the code can read the password. Generate it on this device only, then close or clear this page.": "Código QR opcional: codifica esta contraseña para que puedas escanearla con el teléfono. Quien vea el código puede leer la contraseña. Géneralo solo en este dispositivo y luego cierra o vacía esta página.",
      "Creating QR code…": "Creando el código QR…",
      "Show QR code for phone transfer": "Mostrar el código QR para pasarla al teléfono",
      "QR code of the generated password": "Código QR de la contraseña generada",
      "Free offline password log template": "Plantilla gratuita de registro de contraseñas sin conexión",
      "Download a CSV password spreadsheet (opens in Excel and Google Sheets) or print a blank password book. Columns are site, username, hint, date changed, 2FA, and notes. This is not a password manager, encrypted vault, or offline password app.": "Descarga una hoja CSV de contraseñas (se abre en Excel y Google Sheets) o imprime un cuaderno en blanco. Las columnas son sitio, usuario, pista, fecha de cambio, 2FA y notas. Esto no es un gestor de contraseñas, una caja fuerte cifrada ni una aplicación de contraseñas sin conexión.",
      "Prefer a reputable password manager. If you keep a paper password book or a private file, store a hint rather than the live password, and do not put passwords in a shared Google Sheet, email, or chat.": "Prefiere un gestor de contraseñas de confianza. Si llevas un cuaderno de papel o un archivo privado, guarda una pista en lugar de la contraseña en vivo, y no pongas contraseñas en una hoja de Google compartida, un correo o un chat.",
      "Download CSV template": "Descargar la plantilla CSV",
      "Print a password book": "Imprimir un cuaderno de contraseñas",
      "Passwords and passphrases are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server. QR codes are also built on this device.": "Las contraseñas y las frases se crean con crypto.getRandomValues en tu navegador. No se guardan, no se registran ni se envían a un servidor. Los códigos QR también se construyen en este dispositivo.",
      "Enter how many words to use.": "Indica cuántas palabras usar.",
      "Word count must be a whole number.": "El número de palabras debe ser un entero.",
      "Choose a word count from {0} to {1}.": "Elige un número de palabras de {0} a {1}.",
      "Passphrase word list is not available.": "La lista de palabras de la frase no está disponible.",
      "The QR code could not be created in this browser.": "No se ha podido crear el código QR en este navegador.",
      "Allow pop-ups to open the printable password book, or download the CSV instead.": "Permite las ventanas emergentes para abrir el cuaderno imprimible, o descarga el CSV."
    }
  },
  "qr-code-generator-pro": {
    "answer": "QR Code Generator Pro crea códigos QR para URL, Wi-Fi, correo, teléfono, SMS o contactos, con colores.",
    "content": {
      "about": "Crea un código QR de texto plano, Wi-Fi, correo, teléfono, SMS o un contacto vCard, con controles de color y de corrección de errores. Úsalo cuando un teléfono deba unirse a una red o guardar un contacto al escanear. Se rechaza un nombre de red ausente, y el texto codificado debe seguir dentro de 1.200 caracteres.",
      "howTo": [
        "Elige un tipo: texto/URL, Wi-Fi, correo, teléfono, SMS o contacto.",
        "Completa los campos de ese tipo. Los valores no válidos se rechazan antes de dibujar un código.",
        "Si quieres, cambia los colores, el tamaño, la zona de silencio y la corrección de errores, añade un logotipo, y luego genera y descarga un PNG o un SVG."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Una red WPA llamada Cafe se codifica como WIFI:T:WPA;S:Cafe;P:Password;;"
        },
        {
          "title": "Teléfono",
          "body": "Un número como +1 202 555 0100 se convierte en una carga tel: sin espacios."
        }
      ],
      "explanation": "Los tipos estructurados se convierten a los formatos de texto QR habituales (WIFI, mailto, tel, SMSTO, vCard 3.0). La generación usa la misma biblioteca local de QR que el generador básico. El contenido no se guarda, no se registra ni se coloca en la URL de la página.",
      "limitations": "Los tipos son texto plano, Wi-Fi, correo, teléfono, SMS y un contacto vCard 3.0. Se rechazan, antes de dibujar un código, un nombre de red ausente, un correo que no supera la comprobación simple o un número de teléfono fuera de dígitos y un + ( ) opcional. El texto codificado debe seguir dentro de 1.200 caracteres.",
      "faqs": [
        {
          "question": "¿QR Code Generator Pro es gratis?",
          "answer": "Sí. Crear un código QR de Wi-Fi, correo, teléfono, SMS, contacto o texto es gratis y no se necesita una cuenta."
        },
        {
          "question": "¿Esto es distinto del generador QR básico?",
          "answer": "Sí. La herramienta básica codifica texto plano o una URL. Esta versión añade tipos estructurados, colores y controles de corrección de errores. La herramienta básica no cambia."
        },
        {
          "question": "¿Se guardan las contraseñas de Wi-Fi?",
          "answer": "No. Se quedan en esta página hasta que restableces o sales. No se escriben en localStorage ni se envían a un servidor."
        },
        {
          "question": "¿Cómo hago un código QR para Wi-Fi?",
          "answer": "Elige Wi-Fi, introduce el nombre de la red, la contraseña y el tipo de seguridad, y descarga el código. Los teléfonos que lo escanean pueden unirse sin escribir la contraseña."
        },
        {
          "question": "¿Puedo cambiar los colores de un código QR?",
          "answer": "Sí, pero mantén un contraste fuerte, con un patrón oscuro sobre un fondo claro, para que las cámaras sigan pudiendo leerlo. Prueba el código antes de imprimirlo."
        },
        {
          "question": "¿Cómo creo un código QR para la URL de un sitio?",
          "answer": "Puedes pegar una URL aquí, entre los demás tipos, y descargar un PNG o un SVG. Para un código simple de URL o texto, sin color, logotipo ni formulario de tipo, usa el [Generador de códigos QR](/tools/qr-code-generator)."
        },
        {
          "question": "¿Cuándo debo elegir un nivel más alto de corrección de errores?",
          "answer": "Usa un nivel más alto cuando el código vaya a ser pequeño o se imprima de forma tosca. Si añades un logotipo, esta página sube la corrección de errores a H (unos 30 %) por ti. Prueba siempre el escaneo y una impresión al tamaño final."
        },
        {
          "question": "¿Puedo codificar texto plano en lugar de un enlace?",
          "answer": "Sí: pasa al modo de texto para notas cortas, códigos o instrucciones."
        },
        {
          "question": "¿Cómo hago un QR de contacto a partir del nombre y el teléfono?",
          "answer": "Completa los campos de vCard o contacto, genera y prueba el escaneo en un teléfono antes de imprimir."
        },
        {
          "question": "¿Un logotipo en el centro se sigue escaneando?",
          "answer": "A menudo sí, si el logotipo se mantiene pequeño. Esta página puede colocar en el centro un logotipo que tú eliges, limitado a menos del 20 % del código, y sube la corrección de errores a H. Un logotipo recargado o demasiado grande puede fallar. Prueba el escaneo con un teléfono antes de imprimir o compartir. El logotipo se queda en tu dispositivo."
        },
        {
          "question": "¿Qué tan grande debería ser un QR impreso en un folleto?",
          "answer": "Apunta al menos a unos 2 cm (alrededor de 0,8 in) de lado para las cámaras de teléfono con buena luz."
        },
        {
          "question": "¿Puedo usar colores de marca en los módulos y el fondo?",
          "answer": "Sí, si el contraste se mantiene fuerte; los módulos claros sobre fondos claros no se escanean."
        },
        {
          "question": "¿Qué es la zona de silencio alrededor de un código QR?",
          "answer": "El margen en blanco que debe quedar libre de texto o gráficos para que los escáneres puedan enfocar."
        },
        {
          "question": "¿El marketing debería usar códigos estáticos o dinámicos?",
          "answer": "El estático es simple y funciona sin conexión; el dinámico (mediante un servicio de redirección) ayuda si el destino puede cambiar."
        },
        {
          "question": "¿Cómo pruebo un QR de Wi-Fi antes de que lleguen los invitados?",
          "answer": "Escanéalo con un segundo teléfono, con los datos móviles apagados, para confirmar que la unión a la red funciona."
        },
        {
          "question": "¿Los códigos QR pueden guardar URL muy largas?",
          "answer": "Pueden, pero los códigos densos se escanean mal: prefiere enlaces cortos cuando sea posible."
        },
        {
          "question": "¿Las impresiones mate y brillantes se escanean de forma distinta?",
          "answer": "El brillo del papel satinado puede bloquear la lectura; el mate suele escanearse con más fiabilidad."
        },
        {
          "question": "¿Cómo deberían usar códigos QR las acreditaciones de un evento?",
          "answer": "Imprímelos lo bastante grandes, mantén un contraste alto y colócalos lejos de las líneas de pliegue."
        },
        {
          "question": "¿Qué formato de archivo es mejor para un taller de impresión?",
          "answer": "Descarga el SVG para imprimir, porque es un vector real de los módulos y sigue nítido a cualquier tamaño. Un PNG es mejor para pantallas y para muchos usos en la web. Si envías un PNG, pide que no lo compriman como un JPEG pequeño. Prueba una impresión al tamaño final. Un logotipo en el SVG se incrusta como imagen, así que los módulos siguen siendo vectoriales."
        },
        {
          "question": "¿Generar un QR sube mi contraseña de Wi-Fi?",
          "answer": "La generación en esta página está pensada para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Crea códigos QR de Wi-Fi, vCard, correo, teléfono o SMS, con colores, un logotipo opcional, y PNG o SVG, en tu navegador. Para una URL simple, usa el generador básico.",
    "ui": {
      "QR type": "Tipo de QR",
      "Network name (SSID)": "Nombre de la red (SSID)",
      "Security": "Seguridad",
      "Hidden network": "Red oculta",
      "Email": "Correo electrónico",
      "Subject (optional)": "Asunto (opcional)",
      "Body (optional)": "Cuerpo (opcional)",
      "Phone number": "Número de teléfono",
      "Message (optional)": "Mensaje (opcional)",
      "First name": "Nombre",
      "Last name": "Apellidos",
      "Phone (optional)": "Teléfono (opcional)",
      "Email (optional)": "Correo electrónico (opcional)",
      "Foreground": "Primer plano",
      "Background": "Fondo",
      "Size": "Tamaño",
      "Quiet zone": "Zona de silencio",
      "Error correction": "Corrección de errores",
      "Generated QR code": "Código QR generado",
      "The QR code is generated in your browser. Wi-Fi passwords, logos, and other fields are not stored or sent to a server.": "El código QR se genera en tu navegador. Las contraseñas de Wi-Fi, los logotipos y los demás campos no se almacenan ni se envían a un servidor.",
      "Foreground and background colors need to be different.": "Los colores de primer plano y de fondo deben ser distintos.",
      "Text / URL": "Texto / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "Teléfono",
      "Contact": "Contacto",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Sin contraseña",
      "Enter a hex color such as #336699.": "Escribe un color hexadecimal como #336699.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "Usa un hexadecimal de 3, 6 u 8 dígitos, con o sin #.",
      "Enter a network name (SSID).": "Escribe el nombre de la red (SSID).",
      "Enter the Wi-Fi password, or choose no password.": "Escribe la contraseña del Wi-Fi o elige Sin contraseña.",
      "Enter a valid email address.": "Escribe un correo electrónico válido.",
      "Enter a phone number, with digits and optional + ( ).": "Escribe un número de teléfono con dígitos y + ( ) opcionales.",
      "Enter a first or last name for the contact.": "Escribe un nombre o apellido para el contacto.",
      "Logo (optional)": "Logotipo (opcional)",
      "Add a square PNG, JPG, or WebP. It stays on this device. Error correction is raised to H, and the logo is limited to about 20% of the code.": "Añade un PNG, JPG o WebP cuadrado. Se queda en este dispositivo. La corrección de errores sube a H, y el logotipo, con un margen claro, se limita a menos del 20 % del código.",
      "A logo covers part of the code, so always test-scan the result with a phone before you print or share it.": "Un logotipo cubre parte del código, así que prueba siempre el escaneo con un teléfono antes de imprimirlo o compartirlo.",
      "Error correction is set to H while a logo is present.": "La corrección de errores se fija en H mientras hay un logotipo.",
      "The logo must be a PNG, JPG, or WebP under 1 MB.": "El logotipo debe ser un PNG, JPG o WebP de menos de 1 MB.",
      "That logo could not be opened.": "No se pudo abrir ese logotipo.",
      "Remove logo": "Quitar el logotipo"
    }
  },
  "url-parser": {
    "answer": "Un analizador de URL divide una URL absoluta en protocolo, nombre de host, puerto, ruta, fragmento y cada parámetro de consulta. La URL se queda en tu navegador.",
    "content": {
      "about": "Pega una URL absoluta y lee su protocolo, nombre de host, puerto, ruta, fragmento y parámetros de consulta.",
      "howTo": [
        "Pega una URL completa que empiece por http o https.",
        "Pulsa Analizar."
      ],
      "examples": [
        {
          "title": "Una URL con puerto y dos claves iguales",
          "body": "https://example.com:8080/docs?topic=a&topic= conserva el puerto 8080 y dos filas topic, la segunda con un valor vacío."
        }
      ],
      "explanation": "La página usa el analizador de URL del navegador. Las claves de consulta duplicadas se quedan como entradas aparte. Se rechaza un protocolo ausente o una ruta relativa. El nombre de host es el valor que devuelve el analizador, incluido un nombre internacionalizado en su forma codificada.",
      "limitations": "Solo se analizan URL absolutas http y https. La URL no se abre ni se envía a ningún sitio.",
      "tips": [
        "Incluye https:// o http://.",
        "Una almohadilla después de la consulta es el fragmento, no otro parámetro."
      ],
      "features": [
        "Cada clave de consulta en su propia fila.",
        "Se conservan los valores de consulta vacíos.",
        "El fragmento se muestra aparte de la ruta."
      ],
      "faqs": [
        {
          "question": "¿Cómo se analiza una URL?",
          "answer": "El analizador de URL del navegador separa el protocolo, el nombre de host, el puerto, la ruta, el fragmento y cada parámetro de consulta."
        },
        {
          "question": "¿Qué ocurre con las claves de consulta duplicadas?",
          "answer": "Cada una se enumera. No se combinan en un solo valor."
        },
        {
          "question": "¿Y un valor de consulta vacío?",
          "answer": "Una clave sin nada después del signo igual se conserva y se muestra vacía."
        },
        {
          "question": "¿Por qué se rechaza una URL relativa?",
          "answer": "Una ruta relativa no tiene protocolo ni host, así que no es una URL absoluta."
        },
        {
          "question": "¿La URL se envía a un servidor?",
          "answer": "No. El análisis se hace en tu navegador."
        },
        {
          "question": "¿Qué partes de una URL muestra un analizador?",
          "answer": "Un desglose típico enumera el protocolo, el host, el puerto si lo hay, la ruta, la cadena de consulta y el fragmento. Ver cada pieza por separado facilita depurar redirecciones y parámetros de seguimiento."
        },
        {
          "question": "¿Cómo leo los parámetros de consulta de un enlace?",
          "answer": "Pega la URL completa e inspecciona la sección de consulta. Cada par de clave y valor se enumera para que puedas detectar duplicados, valores vacíos o problemas de codificación."
        },
        {
          "question": "¿Cuál es la diferencia entre una ruta y una cadena de consulta?",
          "answer": "La ruta apunta a un recurso en el host, como /tools/url-parser. La cadena de consulta empieza después de ? y lleva parámetros extra que la página o la API pueden leer."
        },
        {
          "question": "¿Por qué en muchas aplicaciones el fragmento no llega al servidor?",
          "answer": "El #fragmento es principalmente para el navegador. Muchos servidores no lo reciben, así que la analítica que depende de hashes necesita un tratamiento en el cliente."
        },
        {
          "question": "¿Puedo analizar URL con nombres de dominio internacionales?",
          "answer": "Sí, cuando el navegador o el analizador admite hosts en punycode. Si un nombre de host parece xn--, es la forma ASCII de un dominio internacionalizado."
        },
        {
          "question": "¿Qué significa la codificación por ciento en una URL?",
          "answer": "Los caracteres especiales se escriben como % seguido de hexadecimal para que el enlace siga siendo válido. Un espacio puede aparecer como %20; al decodificar se ve de nuevo el carácter legible."
        },
        {
          "question": "¿Cómo compruebo un enlace de campaña UTM?",
          "answer": "Pega la URL etiquetada y lee utm_source, utm_medium y utm_campaign en la lista de consulta. Corrige ahí las erratas antes de compartir el enlace a lo grande."
        },
        {
          "question": "¿Por qué se rechazó mi ruta relativa?",
          "answer": "Los analizadores que esperan una URL absoluta necesitan un esquema y un host. Añade https:// y el dominio, o usa un modo que acepte rutas relativas si existe."
        },
        {
          "question": "¿Aparecen puertos en los enlaces https?",
          "answer": "El puerto 443 es el predeterminado de https y a menudo se omite. Un puerto no predeterminado se muestra explícitamente después del host."
        },
        {
          "question": "¿Pueden aparecer dos claves de consulta con el mismo nombre?",
          "answer": "Sí. Algunas API repiten claves; el analizador debería mostrar cada aparición para que no asumas que solo importa el último valor."
        },
        {
          "question": "¿Sigue siendo habitual usuario:contraseña en una URL?",
          "answer": "Las credenciales incrustadas se desaconsejan y a menudo los navegadores las quitan. Prefiere cabeceras de autenticación o un flujo de inicio de sesión en lugar de enlaces user:pass@host."
        },
        {
          "question": "¿En qué se diferencia esto de decodificar un solo parámetro?",
          "answer": "Un analizador de URL divide el enlace entero. Un decodificador de porcentaje se centra en una sola cadena codificada, sin exigir una URL absoluta completa."
        },
        {
          "question": "¿El análisis cambia el enlace original?",
          "answer": "Las herramientas de inspección muestran la estructura sin reescribir el portapapeles, salvo que copies una URL reconstruida. La cadena de origen se queda intacta hasta que la editas."
        },
        {
          "question": "¿Por qué los enlaces de marketing se ven tan largos?",
          "answer": "Los rastreadores añaden muchos parámetros de consulta. El análisis te ayuda a separar la ruta de destino del ruido de seguimiento."
        },
        {
          "question": "¿Se suben las URL pegadas para terminar el análisis?",
          "answer": "Esta página analiza en el navegador. No hace falta un viaje al servidor solo para enumerar host, ruta y partes de la consulta."
        }
      ]
    },
    "metaDescription": "Divide una URL absoluta en protocolo, host, puerto, ruta, fragmento y parámetros, en tu navegador. No se abre ni se envía a ningún servidor.",
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "La URL se analiza en tu navegador. No se envía a ningún otro servicio.",
      "Absolute URL": "URL absoluta",
      "Parse": "Analizar",
      "Query parameters": "Parámetros de consulta",
      "No query parameters.": "No hay parámetros de consulta.",
      "(empty)": "(vacío)",
      "Protocol": "Protocolo",
      "Hostname": "Nombre de host",
      "Port": "Puerto",
      "Path": "Ruta",
      "Fragment": "Fragmento",
      "Enter an absolute URL.": "Escribe una URL absoluta.",
      "Enter a URL of 100000 characters or fewer.": "Escribe una URL de 100000 caracteres o menos.",
      "Enter an absolute URL that includes a protocol, such as https://.": "Escribe una URL absoluta que incluya un protocolo, como https://.",
      "That text is not a valid absolute URL.": "Ese texto no es una URL absoluta válida.",
      "Enter an http or https URL.": "Escribe una URL http o https."
    }
  },
  "robots-txt-generator": {
    "answer": "Un generador de robots.txt escribe las líneas User-agent, Allow y Disallow a partir de las reglas que introduces. Puede añadir una URL de sitemap. No publica ni prueba un sitio en vivo.",
    "content": {
      "about": "Escribe el texto de un robots.txt a partir de uno o más grupos de user-agent y una URL de sitemap opcional.",
      "howTo": [
        "Introduce un user-agent.",
        "Añade rutas de allow y disallow, una por línea.",
        "Añade una URL de sitemap si quieres una.",
        "Pulsa Generar."
      ],
      "examples": [
        {
          "title": "Una carpeta privada",
          "body": "User-agent * con Disallow: /admin indica a los rastreadores que no pidan las rutas bajo /admin. El archivo es solo texto."
        }
      ],
      "explanation": "Cada grupo empieza con User-agent, luego una línea Allow por cada ruta y una línea Disallow por cada ruta. Las líneas de ruta en blanco se omiten. Un sitemap se añade solo cuando es una URL absoluta http o https. La página no sube el archivo ni prueba un sitio en vivo.",
      "limitations": "El resultado es texto que puedes copiar. No publica reglas ni comprueba lo que permite un sitio en vivo.",
      "tips": [
        "Usa * para todos los rastreadores.",
        "Pon cada ruta en su propia línea."
      ],
      "features": [
        "Varios grupos de user-agent.",
        "Varias líneas allow y disallow.",
        "Una URL de sitemap absoluta opcional."
      ],
      "faqs": [
        {
          "question": "¿Cómo se escribe un archivo robots.txt?",
          "answer": "Empieza con una línea User-agent y luego añade líneas Allow y Disallow. Añade una línea Sitemap cuando tengas una URL absoluta de sitemap."
        },
        {
          "question": "¿Puedo usar más de un user-agent?",
          "answer": "Sí. Cada grupo tiene su propio user-agent y sus reglas."
        },
        {
          "question": "¿Qué ocurre con una ruta en blanco?",
          "answer": "Una línea en blanco se omite, así que no crea una regla Allow o Disallow vacía."
        },
        {
          "question": "¿Esto prueba mi sitio en vivo?",
          "answer": "No. Solo genera el texto. No publica el archivo ni solicita tu sitio."
        },
        {
          "question": "¿Qué URL de sitemap se acepta?",
          "answer": "Una URL absoluta http o https. Una ruta sin protocolo se rechaza."
        },
        {
          "question": "¿Estos datos se envían a un servidor?",
          "answer": "No. Las líneas de user-agent y las rutas se ensamblan en esta pestaña. No se suben, y la página no solicita tu sitio."
        },
        {
          "question": "¿Cómo permito a todos los rastreadores con un robots.txt sencillo?",
          "answer": "Usa un grupo User-agent: * con Allow: / o omite las reglas Disallow que bloqueen todo el sitio."
        },
        {
          "question": "¿Cómo bloqueo todo un sitio a los rastreadores?",
          "answer": "Añade Disallow: / bajo el user-agent correspondiente: confírmalo bien antes de publicarlo."
        },
        {
          "question": "¿Puedo denegar solo una carpeta de administración?",
          "answer": "Sí: pon Disallow en esa ruta y deja permitido el resto del sitio."
        },
        {
          "question": "¿Dónde deben ir las líneas Sitemap?",
          "answer": "Añade URL absolutas de sitemap, normalmente cerca del final del archivo, después de los grupos de user-agent."
        },
        {
          "question": "¿Necesito un grupo aparte por cada bot?",
          "answer": "Solo cuando las reglas difieren; si no, un grupo * mantiene el archivo simple."
        },
        {
          "question": "¿Este archivo obliga a Google a obedecer al instante?",
          "answer": "No: los rastreadores lo piden según su calendario, y algunos bots que no cumplen ignoran el robots.txt."
        },
        {
          "question": "¿Cómo interactúan Allow y Disallow?",
          "answer": "Suelen ganar las reglas más específicas, según el rastreador; prueba las rutas importantes en Search Console si no estás seguro."
        },
        {
          "question": "¿Pueden aparecer comentarios en un robots.txt?",
          "answer": "Sí: las líneas que empiezan por # son comentarios y los rastreadores las ignoran."
        },
        {
          "question": "¿Los sitios de pruebas deberían bloquear la indexación de este modo?",
          "answer": "Disallow puede ayudar, pero la autenticación o las cabeceras noindex son más firmes para un entorno de pruebas privado."
        },
        {
          "question": "¿Qué formato de ruta debo escribir?",
          "answer": "Empieza las rutas con / y hazlas coincidir con las rutas reales de tus URL; este generador ignora las rutas en blanco."
        },
        {
          "question": "¿El robots.txt oculta páginas a los usuarios?",
          "answer": "No: solo aconseja a los rastreadores; las URL se pueden pedir igual si se adivinan o se enlazan."
        },
        {
          "question": "¿Cómo descargo el archivo terminado?",
          "answer": "Copia el texto generado en un robots.txt en la raíz de tu sitio, o usa el control de descarga si aparece."
        },
        {
          "question": "¿Puedo enumerar varios sitemaps?",
          "answer": "Sí: añade una línea Sitemap por cada URL de sitemap XML que publiques."
        },
        {
          "question": "¿Una línea crawl-delay se admite en todas partes?",
          "answer": "Crawl-delay no es un estándar y los buscadores principales lo ignoran; prefiere los controles de ritmo de sus propias herramientas."
        }
      ]
    },
    "metaDescription": "Escribe un archivo robots.txt con grupos de user-agent, Allow, Disallow y un sitemap opcional, en tu navegador. No publica ni prueba tu sitio.",
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Esta herramienta escribe el texto de robots.txt a partir de las reglas que escribas. No prueba ni publica ningún sitio en línea.",
      "Group {0} user-agent": "User-agent del grupo {0}",
      "Allow paths, one per line": "Rutas Allow, una por línea",
      "Disallow paths, one per line": "Rutas Disallow, una por línea",
      "Remove group": "Quitar grupo",
      "Add group": "Añadir grupo",
      "Sitemap URL, optional": "URL del sitemap, opcional",
      "Add at least one user-agent group.": "Añade al menos un grupo de user-agent.",
      "Group {0} needs a user-agent.": "El grupo {0} necesita un user-agent.",
      "Enter a sitemap as an absolute http or https URL.": "Escribe el sitemap como una URL absoluta http o https."
    }
  },
  "password-strength-checker": {
    "answer": "Un comprobador de fortaleza de contraseñas estima los bits a partir de la longitud y de los tipos de caracteres que realmente aparecen. No sube la contraseña ni la compara con una lista de filtraciones.",
    "content": {
      "about": "Escribe una contraseña y verás una valoración de Corta, Moderada o Fuerte. La estimación usa la longitud y los tipos de caracteres que aparecen en ella. No consulta filtraciones y no sabe si un sitio aceptará la contraseña.",
      "howTo": [
        "Escribe la contraseña. Un cuadro vacío se rechaza.",
        "Pulsa Comprobar.",
        "Lee la valoración, la longitud, los bits estimados y los tipos de caracteres encontrados."
      ],
      "examples": [
        {
          "title": "Una palabra en minúsculas",
          "body": "password tiene 8 caracteres de letras minúsculas. El conjunto es 26, la estimación se redondea a 38 bits y la valoración es Corta."
        },
        {
          "title": "Letras, un número y un símbolo",
          "body": "Abcdefghijklm12! tiene 16 caracteres con mayúsculas, minúsculas, números y un símbolo. El conjunto es 85, la estimación se redondea a 103 bits y la valoración es Fuerte."
        }
      ],
      "explanation": "Los bits son la longitud multiplicada por el logaritmo en base 2 del conjunto. El conjunto es 26 para mayúsculas si aparece una letra de la A a la Z, 26 para minúsculas, 10 por un dígito y 23 por un símbolo de !@#$%^&*()-_=+[]{};:,.?. Un carácter fuera de esos conjuntos no se trata como el conjunto de símbolos entero: suma uno. Esto no es el generador de contraseñas, que valora una contraseña según los tipos que elegiste antes de crearla.",
      "limitations": "Hasta 256 caracteres. La página no consulta filtraciones y no sabe si un sitio aceptará la contraseña. Las letras con acento cuentan como otros caracteres, no como de la A a la Z.",
      "tips": [
        "Una contraseña más larga con varios tipos de caracteres se valora mejor que una palabra corta.",
        "Usa el generador de contraseñas cuando quieras una contraseña nueva en lugar de una valoración."
      ],
      "features": [
        "Mayúsculas, minúsculas, números y el conjunto de símbolos solo se cuentan cuando aparecen.",
        "Cualquier otro carácter, incluido un espacio o una tilde invertida, suma uno al conjunto por cada carácter distinto.",
        "Corta es menos de 50 bits, Moderada es menos de 80 y Fuerte es 80 o más."
      ],
      "faqs": [
        {
          "question": "¿El comprobador de fortaleza de contraseñas es gratis?",
          "answer": "Sí. Puedes valorar una contraseña aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Compara la contraseña con contraseñas filtradas?",
          "answer": "No. La valoración es solo la longitud y los tipos de caracteres de lo que escribiste."
        },
        {
          "question": "¿Por qué una contraseña solo de dígitos es Corta?",
          "answer": "Ocho dígitos usan un conjunto de 10. Eso es unos 27 bits, que está por debajo de 50, así que la valoración es Corta."
        },
        {
          "question": "¿La contraseña se envía a un servidor?",
          "answer": "No. La comprobación se ejecuta en esta pestaña del navegador. Tools Star Hub no envía la contraseña a un servidor ni la guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo puntúa un comprobador de fortaleza una contraseña?",
          "answer": "Estima la entropía a partir de la longitud y la variedad de caracteres, y luego la etiqueta de débil a fuerte. No demuestra que una contraseña sea imposible de adivinar en el mundo real."
        },
        {
          "question": "¿Una contraseña más larga es siempre más fuerte?",
          "answer": "La longitud ayuda mucho, sobre todo con palabras o caracteres aleatorios. Una frase larga pero previsible puede seguir siendo débil si es famosa o personal."
        },
        {
          "question": "¿Por qué las contraseñas solo de dígitos se valoran mal?",
          "answer": "Diez dígitos dan un conjunto de caracteres muy pequeño. Los atacantes prueban patrones numéricos con rapidez, así que los PIN cortos fallan en la mayoría de las rúbricas de fortaleza."
        },
        {
          "question": "¿Esta herramienta consulta Have I Been Pwned o listas de filtraciones?",
          "answer": "No, salvo que una página diga de forma explícita que consulta una API de filtraciones en línea. Una puntuación solo local no sabe si tu contraseña ya se filtró."
        },
        {
          "question": "¿Debo incluir símbolos en todas las contraseñas?",
          "answer": "Los símbolos amplían el espacio de búsqueda cuando la contraseña es, por lo demás, aleatoria. Una frase larga de palabras no relacionadas también puede ser fuerte sin una densidad alta de símbolos."
        },
        {
          "question": "¿Qué es la entropía de una contraseña en bits?",
          "answer": "Es una medida aproximada de cuántas pruebas podría necesitar un atacante aleatorio. Más bits suelen significar un ataque de fuerza bruta más difícil, si hay aleatoriedad real."
        },
        {
          "question": "¿Basta con «Fuerte» para el acceso de un banco?",
          "answer": "Usa una contraseña o una frase única más la autenticación multifactor. Las etiquetas de fortaleza son una orientación, no un sustituto del MFA."
        },
        {
          "question": "¿Por qué añadir un espacio cambia la puntuación?",
          "answer": "En algunos conjuntos el espacio cuenta como otra clase de carácter y sube un poco la entropía. Más importante es la longitud total y que no sea previsible."
        },
        {
          "question": "¿El comprobador puede ver mi contraseña después de que me vaya?",
          "answer": "Esta página está hecha para valorar en local lo que escribes. Aun así, evita introducir contraseñas reales en ordenadores compartidos."
        },
        {
          "question": "¿En qué se diferencia comprobar la fortaleza de generar una contraseña?",
          "answer": "Comprobar valora un candidato que ya elegiste. Un generador crea un secreto aleatorio nuevo para que no reutilices patrones antiguos."
        },
        {
          "question": "¿Los consejos de contraseñas son los mismos para las frases de contraseña?",
          "answer": "Las frases de contraseña se basan en varias palabras no relacionadas y en una longitud suficiente. Evita citas famosas y recorridos del teclado aunque la frase sea larga."
        },
        {
          "question": "¿Por qué dos comprobadores pueden no coincidir?",
          "answer": "Usan diccionarios, modelos de entropía y heurísticas de listas prohibidas distintas. Trata el desacuerdo como una señal para alargar o aleatorizar más."
        },
        {
          "question": "¿Debo reutilizar una contraseña fuerte en varios sitios?",
          "answer": "No. Una filtración en un sitio expondría los demás. Usa un gestor de contraseñas para guardar secretos únicos."
        },
        {
          "question": "¿Las reglas de composición como «una mayúscula» garantizan la fortaleza?",
          "answer": "Los patrones obligatorios pueden hacer las contraseñas más previsibles. La guía moderna prefiere la longitud y la unicidad a una complejidad rígida de escaparate."
        },
        {
          "question": "¿Sustituciones habituales como @ por a engañan a los comprobadores?",
          "answer": "A menudo esos trucos están en los diccionarios de los atacantes. La aleatoriedad gana a la escritura leet sobre una palabra base débil."
        },
        {
          "question": "¿Cuándo debo cambiar una contraseña de inmediato?",
          "answer": "Cámbiala tras un aviso de filtración, un phishing o una exposición en un dispositivo compartido, aunque el comprobador la siguiera llamando fuerte."
        }
      ]
    },
    "metaDescription": "Comprueba la fortaleza de una contraseña en tu navegador: estima bits por longitud y tipos de caracteres. No se sube ni se compara con filtraciones.",
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} caracteres, {1}, {2} bits",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "La calificación usa los tipos de caracteres de la contraseña que escribes. Se queda en esta pestaña, no se sube y no se compara con una lista de filtraciones.",
      "Show password": "Mostrar contraseña",
      "Check": "Comprobar",
      "Copy rating": "Copiar calificación",
      "Rating": "Calificación",
      "Estimated bits": "Bits estimados",
      "Enter a password.": "Escribe una contraseña.",
      "Enter a password of {0} characters or fewer.": "Escribe una contraseña de {0} caracteres o menos.",
      "Uppercase": "Mayúsculas",
      "Lowercase": "Minúsculas",
      "Other": "Otros"
    }
  },
  "meta-tag-generator": {
    "answer": "Un generador de metaetiquetas escribe las etiquetas HTML de título, descripción, robots, canonical, Open Graph y Twitter. No descarga una página.",
    "content": {
      "about": "Completa un título y las etiquetas opcionales que quieras. La página escribe HTML que puedes pegar en el head de una página. No descarga una URL en vivo ni comprueba cómo un sitio compartirá el enlace.",
      "howTo": [
        "Introduce un título. Un título en blanco se rechaza.",
        "Añade una descripción, una URL canónica, opciones de robots y los campos de Open Graph o Twitter que quieras.",
        "Pulsa Generar y luego copia el HTML."
      ],
      "examples": [
        {
          "title": "Un título y una descripción",
          "body": "Título Sample page y descripción A short description of the page., con index y follow, escribe una etiqueta charset, el título, la descripción y una etiqueta robots de index, follow."
        },
        {
          "title": "Un ampersand en el título",
          "body": "El título A & B se escribe como A &amp; B dentro de la etiqueta title."
        }
      ],
      "explanation": "El HTML se arma a partir de los campos que rellenas. Los campos opcionales vacíos se omiten. Una URL canónica, una imagen de Open Graph, una URL de Open Graph y una imagen de Twitter deben ser URL absolutas http o https. La página no solicita esas URL.",
      "limitations": "El título puede tener hasta 200 caracteres y la descripción hasta 500. El tipo de Open Graph es website, article o none. La tarjeta de Twitter es summary, summary_large_image o none. Un título de Twitter sin una tarjeta se rechaza.",
      "tips": [
        "Usa aquí los campos de Open Graph cuando quieras las etiquetas en tu propio HTML. Una vista previa de un enlace en vivo es una comprobación distinta."
      ],
      "features": [
        "Una etiqueta charset, un título y una etiqueta robots en cada resultado.",
        "Descripción opcional, enlace canónico, etiquetas Open Graph y etiquetas de Twitter.",
        "Las comillas y los ampersand del texto se escapan."
      ],
      "faqs": [
        {
          "question": "¿El generador de metaetiquetas es gratis?",
          "answer": "Sí. Puedes escribir las etiquetas aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Esto comprueba cómo se verá un enlace en una red social?",
          "answer": "No. Solo escribe las etiquetas. No abre la URL."
        },
        {
          "question": "¿Qué valor de robots se escribe?",
          "answer": "La opción de index y la de follow, como index, follow o noindex, nofollow."
        },
        {
          "question": "¿El texto se envía a un servidor?",
          "answer": "No. El HTML se construye en esta pestaña del navegador. Tools Star Hub no envía esos campos a un servidor ni los guarda en el almacenamiento local."
        },
        {
          "question": "¿Para qué se usan las metaetiquetas?",
          "answer": "Describen una página a los navegadores y a los rastreadores: título, descripción, reglas de robots y campos de vista previa social. Unas etiquetas buenas ayudan a que los fragmentos y las vistas previas de enlace se vean intencionados."
        },
        {
          "question": "¿Cuánto debería medir una meta descripción?",
          "answer": "Apunta a unos 150–160 caracteres para que los fragmentos de búsqueda tengan menos probabilidad de cortarse. Escribe primero para personas; llenar solo de palabras clave rara vez ayuda."
        },
        {
          "question": "¿El título HTML debe coincidir con el encabezado visible de la página?",
          "answer": "Pueden compartir redacción, pero son elementos distintos. El título está en el head del documento, para las pestañas y los resultados de búsqueda, mientras que el H1 es el encabezado que ven los lectores en la página."
        },
        {
          "question": "¿Qué hace una etiqueta canónica o un enlace canonical?",
          "answer": "Indica a los rastreadores la URL preferida cuando existen páginas parecidas. Úsala para concentrar las señales en la versión principal del contenido."
        },
        {
          "question": "¿Cada página debería tener metaetiquetas únicas?",
          "answer": "Sí, siempre que sea posible. Títulos y descripciones duplicados hacen más difícil distinguir los fragmentos y pueden verse descuidados en los resultados de búsqueda."
        },
        {
          "question": "¿Qué valores de robots son habituales?",
          "answer": "index, follow es la opción habitual y amigable. noindex deja una página fuera de los resultados de búsqueda; úsalo en páginas de agradecimiento y en pantallas de administración pobres en contenido."
        },
        {
          "question": "¿Las etiquetas Open Graph sustituyen la meta descripción estándar?",
          "answer": "No. Las etiquetas OG sirven sobre todo para las vistas previas sociales. Conserva tanto una descripción normal como og:title y og:description cuando te importen las veces que se comparte."
        },
        {
          "question": "¿También puedo generar aquí etiquetas de Twitter Card?",
          "answer": "Muchos generadores escriben campos de Twitter junto a Open Graph. Confirma el tipo de tarjeta que tu sitio admite de verdad antes de pegarlas."
        },
        {
          "question": "¿Por qué se rechazó un carácter de mi título?",
          "answer": "Algunos campos no admiten caracteres en crudo que deben escaparse en HTML, o aplican límites de longitud. Codifica los ampersand y mantén los títulos concisos."
        },
        {
          "question": "¿Generar las etiquetas las publica en mi sitio?",
          "answer": "No. La herramienta escribe el marcado para que lo pegues en tu tema, CMS o plugin SEO. Nada pasa a estar en vivo hasta que despliegas ese HTML."
        },
        {
          "question": "¿El nombre de la marca debe ir al inicio o al final del título?",
          "answer": "A menudo al final, después de un separador, para que el tema único de la página aparezca primero en las pestañas recortadas. Prueba cómo se ve tu marca en una vista previa real de resultados."
        },
        {
          "question": "¿Las meta keywords siguen siendo útiles para Google?",
          "answer": "Los buscadores principales llevan tiempo ignorando las meta keywords para el posicionamiento. Concéntrate en el título, la descripción y un contenido claro en la página."
        },
        {
          "question": "¿Para qué sirve og:url?",
          "answer": "Declara la URL social canónica de la publicación. Déjala absoluta (https) para que las plataformas no adivinen una ruta incorrecta."
        },
        {
          "question": "¿Un sitio en varios idiomas puede usar meta distintas por idioma?",
          "answer": "Sí. Cada URL de idioma debería llevar su propio título y descripción, más el hreflang adecuado en otra parte del head."
        },
        {
          "question": "¿Cómo previsualizo las etiquetas después de instalarlas?",
          "answer": "Usa un depurador de Open Graph o la herramienta de vista previa de este sitio en la URL en vivo. Los retrasos de caché pueden exigir una nueva captura."
        },
        {
          "question": "¿Las páginas de utilidad pobres en contenido deberían llevar noindex?",
          "answer": "A menudo sí, en muros de inicio de sesión, pasos del carrito y URL filtradas que crean duplicados. Deja indexables las páginas que quieres que se posicionen."
        }
      ]
    },
    "metaDescription": "Escribe etiquetas HTML de título, descripción, robots, canonical, Open Graph y Twitter en tu navegador. No descarga ni publica ninguna página.",
    "ui": {
      "Sample page": "Página de ejemplo",
      "A short description of the page.": "Una breve descripción de la página.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Esta herramienta escribe HTML para el head de una página. No consulta una URL en línea ni comprueba cómo la compartirá un sitio.",
      "Title": "Título",
      "Description": "Descripción",
      "Canonical URL, optional": "URL canónica, opcional",
      "Robots index": "Robots: index",
      "Robots follow": "Robots: follow",
      "Open Graph title, optional": "Título de Open Graph, opcional",
      "Open Graph description, optional": "Descripción de Open Graph, opcional",
      "Open Graph image URL, optional": "URL de la imagen de Open Graph, opcional",
      "Open Graph URL, optional": "URL de Open Graph, opcional",
      "Open Graph type": "Tipo de Open Graph",
      "Twitter title, optional": "Título de Twitter, opcional",
      "Copy HTML": "Copiar HTML",
      "Head tags": "Etiquetas del head",
      "None": "Ninguno",
      "Enter a {0} of {1} characters or fewer.": "{0}: máximo {1} caracteres.",
      "Enter {0} as an absolute http or https URL.": "{0}: escribe una URL absoluta http o https.",
      "Enter a title.": "Escribe un título.",
      "the canonical URL": "URL canónica",
      "Open Graph title": "Título de Open Graph",
      "Open Graph description": "Descripción de Open Graph",
      "the Open Graph image URL": "URL de la imagen de Open Graph",
      "the Open Graph URL": "URL de Open Graph",
      "Choose website, article, or no Open Graph type.": "Elige website, article o ningún tipo de Open Graph.",
      "Choose a Twitter card of summary or summary_large_image.": "Elige una tarjeta de Twitter summary o summary_large_image.",
      "the Twitter image URL": "URL de la imagen de Twitter",
      "Choose a Twitter card before adding Twitter text or an image.": "Elige una tarjeta de Twitter antes de añadir texto o una imagen de Twitter.",
      "title": "Título",
      "description": "Descripción"
    }
  },
  "open-graph-preview": {
    "answer": "Una vista previa de Open Graph envía la URL de una página a este sitio, lee el título público y las etiquetas para compartir, y no guarda la página. Se rechazan las direcciones privadas y las que no son http.",
    "content": {
      "about": "Introduce una URL pública http o https. Al pulsar Comprobar vista previa, esa URL se envía a este sitio. El sitio pide la página y muestra el título, la descripción, la imagen y la tarjeta de Twitter que encuentra. La página no se guarda aquí. Una dirección privada o local se rechaza antes de leer la página.",
      "howTo": [
        "Introduce una URL absoluta http o https.",
        "Pulsa Comprobar vista previa.",
        "Lee la tarjeta. Una dirección rechazada, un tiempo de espera agotado o una URL que no es http muestran un error breve y ningún contenido de la página."
      ],
      "examples": [
        {
          "title": "Una página pública",
          "body": "https://example.com/ devuelve el título Example Domain. Esa página no tiene descripción, imagen ni tarjeta de Twitter, así que esos campos indican No encontrado."
        },
        {
          "title": "Una dirección local",
          "body": "http://127.0.0.1/ y la forma decimal http://2130706433/ muestran ambas el mensaje «That address cannot be fetched»."
        }
      ],
      "explanation": "El navegador envía solo la URL a este sitio. El sitio resuelve el host, rechaza una dirección privada, de loopback, link-local o reservada, y vuelve a comprobarlo después de cada redirección. Lee como máximo 512 KiB de la página descomprimida y luego devuelve las etiquetas. La página en crudo no se devuelve ni se guarda.",
      "limitations": "Solo http y https. Se rechazan una URL de archivo, una URL con nombre de usuario y una dirección privada. La petición se detiene a los 8 segundos. Puede aparecer una imagen para compartir aunque el host de la imagen bloquee la foto de la vista previa.",
      "tips": [
        "Usa el generador de metaetiquetas cuando quieras escribir las etiquetas tú. Esta página lee etiquetas que ya están en una URL pública."
      ],
      "features": [
        "Campos de título, descripción, dirección de la imagen y tarjeta de Twitter de la página pública.",
        "La dirección después de las redirecciones, cuando la redirección se queda en una URL pública http o https.",
        "Un error breve cuando la dirección es privada, la petición agota el tiempo o el protocolo no es http o https."
      ],
      "faqs": [
        {
          "question": "¿La vista previa de Open Graph es gratis?",
          "answer": "Sí. Puedes comprobar las etiquetas para compartir de una página pública sin pagar ni crear una cuenta. La URL igual se envía a este sitio para poder leer las etiquetas."
        },
        {
          "question": "¿La URL sale de este dispositivo?",
          "answer": "Sí. Comprobar vista previa envía la URL a este sitio, que pide esa página pública y lee sus etiquetas. La página no se guarda aquí. Se rechaza una dirección privada o que no sea http."
        },
        {
          "question": "¿Por qué se rechazó una URL local?",
          "answer": "Direcciones como 127.0.0.1, una red privada y la forma decimal de una dirección de loopback se rechazan antes de leer la página."
        },
        {
          "question": "¿Cómo se ve un tiempo de espera agotado?",
          "answer": "La tarjeta no se muestra. La página indica que la petición de vista previa agotó el tiempo de espera."
        },
        {
          "question": "¿Qué muestra una vista previa de Open Graph?",
          "answer": "Lee las etiquetas OG y otras meta relacionadas para aproximar cómo puede verse una tarjeta de enlace: título, descripción e imagen. Las plataformas igual pueden anularla o recortarla de otra forma."
        },
        {
          "question": "¿Por qué necesito una URL pública para la vista previa?",
          "answer": "El comprobador pide la página como lo haría un rastreador social. Localhost y las IP privadas se bloquean porque un fetcher remoto no puede alcanzarlas."
        },
        {
          "question": "¿Qué hago si la imagen de la vista previa es incorrecta?",
          "answer": "Confirma que og:image es absoluta, accesible en público y lo bastante grande. Luego actualiza la caché de la plataforma después de corregir la etiqueta."
        },
        {
          "question": "¿La vista previa descarga todo mi sitio?",
          "answer": "Pide la URL que introduces para leer las etiquetas del head, no para copiar el sitio. Aun así, evita pegar enlaces de pruebas no públicos que expongan secretos."
        },
        {
          "question": "¿Por qué se agotó el tiempo de la comprobación?",
          "answer": "Servidores lentos, bloqueos de bots o filtros de red pueden impedir una respuesta a tiempo. Reintenta más tarde o prueba las cabeceras con una página estática más simple."
        },
        {
          "question": "¿Open Graph es solo para Facebook?",
          "answer": "OG nació en Facebook, pero muchas aplicaciones reutilizan las mismas etiquetas. LinkedIn, Slack y otras leen campos parecidos, cada una con sus particularidades."
        },
        {
          "question": "¿Qué tamaño debería tener og:image para una tarjeta limpia?",
          "answer": "Una imagen apaisada de unos 1200×630 (alrededor de 1,91:1) es un objetivo ampliamente compatible. Evita imágenes diminutas que las plataformas rechazan."
        },
        {
          "question": "¿Pueden fallar igual las páginas HTTPS en la vista previa?",
          "answer": "Sí: problemas de certificado, muros antibot o etiquetas ausentes también rompen las tarjetas. Mira el código fuente y confirma que las etiquetas OG están en el HTML inicial."
        },
        {
          "question": "¿Los parámetros de consulta cambian la vista previa?",
          "answer": "Si el servidor devuelve meta distintas según la cadena de consulta, las tarjetas pueden divergir. Para compartir, prefiere URL canónicas limpias."
        },
        {
          "question": "¿Por qué se recorta el título en las publicaciones móviles?",
          "answer": "Las aplicaciones reservan poco espacio. Mantén og:title conciso para que las palabras importantes sobrevivan al recorte."
        },
        {
          "question": "¿og:description debe coincidir con la meta descripción?",
          "answer": "Pueden coincidir, pero puedes ajustar el texto OG al tono social y dejar la descripción de búsqueda más factual."
        },
        {
          "question": "¿Cómo obligo a Facebook a actualizar una tarjeta?",
          "answer": "Usa la herramienta de captura del Sharing Debugger de Meta después de actualizar las etiquetas. Otras plataformas tienen sus propios endpoints para vaciar la caché."
        },
        {
          "question": "¿Se pueden leer metaetiquetas inyectadas con JavaScript?",
          "answer": "Muchos rastreadores solo ven la primera respuesta HTML. Pon las etiquetas OG críticas en HTML renderizado en el servidor, no solo en scripts del cliente."
        },
        {
          "question": "¿Cómo se ve la falta de og:image?",
          "answer": "Las plataformas pueden elegir una imagen aleatoria de la página o mostrar una tarjeta en blanco. Unas etiquetas og:image explícitas evitan esa sorpresa."
        },
        {
          "question": "¿Esta vista previa es idéntica a la de Instagram o X?",
          "answer": "No. Cada red recorta y diseña las tarjetas de forma distinta. Trátala como un diagnóstico de las etiquetas, no como una maqueta pixel a pixel de cada aplicación."
        },
        {
          "question": "¿Necesito og:type en todas las páginas?",
          "answer": "Poner website o article ayuda a quien consume el objeto a clasificarlo. Es un marcado pequeño, con una intención más clara para los capturadores."
        }
      ]
    },
    "metaDescription": "Comprueba las etiquetas Open Graph de una URL pública http o https. Este sitio pide la página y no la guarda. Se rechazan direcciones privadas.",
    "ui": {
      "Not found": "No encontrado",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Comprobar vista previa envía la URL a este sitio. El sitio lee el título y las etiquetas para compartir de esa página pública y no la guarda. Una dirección privada o una URL no http se rechaza.",
      "Page URL": "URL de la página",
      "Checking the page…": "Comprobando la página…",
      "Image": "Imagen",
      "The image address was found, but it did not load.": "Se encontró la dirección de la imagen, pero la imagen no cargó.",
      "Twitter image": "Imagen de Twitter",
      "That page could not be previewed.": "No se pudo generar la vista previa de esa página.",
      "Enter an http or https page URL.": "Escribe la URL de una página http o https.",
      "Checking…": "Comprobando…",
      "Check preview": "Comprobar vista previa",
      "That address cannot be fetched.": "No se puede acceder a esa dirección.",
      "The preview request timed out.": "La solicitud de vista previa agotó el tiempo.",
      "That page redirected too many times.": "Esa página redirigió demasiadas veces.",
      "That page is not HTML.": "Esa página no es HTML.",
      "Too many preview requests. Wait a minute and try again.": "Demasiadas solicitudes de vista previa. Espera un minuto y vuelve a intentarlo.",
      "Send a JSON request with a url.": "Envía una solicitud JSON con una URL."
    }
  },
  "secret-santa-generator": {
    "answer": "Un generador de amigo invisible (Secret Santa) asigna al azar a cada persona un destinatario del regalo, nunca a sí misma, y respeta exclusiones como las de las parejas. Este funciona en tu navegador, no necesita cuenta, oculta los resultados hasta que se revelan y no guarda los nombres.",
    "content": {
      "about": "El generador de amigo invisible de Tools Star Hub es un sorteo gratuito en línea para oficinas, familias, amigos y clubes. Añade los nombres, define exclusiones opcionales como parejas o hermanos y pulsa Generar. Cada persona queda emparejada con exactamente un destinatario, nadie se saca a sí mismo y cada regla se comprueba antes de que aparezca el resultado. Los emparejamientos se quedan ocultos hasta que los revelas de uno en uno, y puedes copiar o imprimir el mensaje de cada persona por separado. Funciona por completo en tu navegador, no necesita cuenta y no envía nombres, listas de deseos ni emparejamientos a ningún servidor.",
      "howTo": [
        "Añade participantes de uno en uno, o pega una lista con un nombre por línea. Se necesitan al menos tres personas.",
        "Si quieres, completa el nombre del evento, la fecha del intercambio, el presupuesto, la moneda, el tema y las instrucciones de la lista de deseos.",
        "Añade exclusiones para quien no deba sacar a una persona concreta. Marca Mutua para bloquear ambos sentidos.",
        "Pulsa Generar amigo invisible. El sorteo se comprueba, y cualquier regla imposible se explica con nombres.",
        "Revela una asignación cada vez, copia o imprime el mensaje de esa persona y vuelve a ocultarlo. Descarga el CSV o el PDF del organizador solo si necesitas un registro completo."
      ],
      "examples": [
        {
          "title": "Una familia de seis con dos parejas",
          "body": "Participan Maria, Tom, Aisha, Omar, Grandma Rose y Leo. Maria y Tom están casados, igual que Aisha y Omar, así que el organizador añade dos exclusiones mutuas. El generador encuentra entonces un sorteo en el que ninguna pareja compra para la otra, por ejemplo Maria → Omar, Tom → Rose, Aisha → Leo, Omar → Tom, Rose → Maria y Leo → Aisha."
        },
        {
          "title": "Un equipo de oficina de diez con un límite de 20 GBP",
          "body": "La responsable del equipo pega diez nombres, pone la moneda en GBP y el presupuesto máximo en 20, y elige la fecha del intercambio. Después del sorteo, copia cada mensaje en un chat privado con ese compañero. Cada mensaje dice, por ejemplo: «Your Secret Santa recipient is: Dev. Gift budget: up to £20.»"
        },
        {
          "title": "Un conjunto de reglas que no puede funcionar",
          "body": "Con solo Ann, Ben y Cara, una regla mutua entre Ann y Ben deja a Ann capaz de regalar solo a Cara y a Ben solo a Cara, pero Cara solo puede recibir un regalo. La herramienta indica que no existe un sorteo válido y nombra a las personas implicadas, para que el organizador quite la regla o añada a una cuarta persona."
        }
      ],
      "explanation": "El sorteo es un problema de emparejamiento: cada dador necesita un destinatario, cada destinatario un dador, nadie puede sacarse a sí mismo y no se puede romper ninguna exclusión. El generador comprueba primero que ese emparejamiento existe. Luego coloca primero a las personas con menos destinatarios permitidos, prueba sus opciones en un orden aleatorio y retrocede cuando llega a un callejón sin salida. Un límite de procesamiento mantiene el navegador con respuesta; si se alcanza, un segundo método de emparejamiento aleatorizado termina el trabajo. El sorteo final se verifica otra vez antes de que lo veas.",
      "limitations": "Esta primera versión no envía correos ni enlaces. El organizador comparte cada mensaje copiándolo o imprimiéndolo. Revelar los resultados en un solo dispositivo no es privado respecto a quien pueda ver esa pantalla. Los emparejamientos no se guardan, así que recargar la página los descarta; descarga primero el CSV o el PDF si los necesitas. El PDF usa una fuente estándar que cubre solo letras latinas, y los demás caracteres aparecen como signos de interrogación; imprimir y elegir Guardar como PDF conserva todos los caracteres. Se admiten grupos de hasta 200 personas.",
      "tips": [
        "Reúne las listas de deseos antes del sorteo para que cada tarjeta pueda incluir las ideas del destinatario.",
        "Usa exclusiones mutuas para parejas y compañeros de piso; usa reglas de un solo sentido solo cuando el problema es una dirección.",
        "Guarda el CSV o el PDF del organizador en un sitio privado, o no lo descargues si no necesitas un registro.",
        "Si tú también participas, pide a otra persona que haga el sorteo, o revela solo tu propia tarjeta."
      ],
      "features": [
        "Alta de nombres de uno en uno o en bloque, edición en la lista, eliminación, un recuento en curso y un Borrar lista con confirmación.",
        "Identificadores internos únicos, para que dos personas con el mismo nombre se distingan y se etiqueten (1) y (2).",
        "Nombre del evento, fecha, presupuesto mínimo y máximo en USD, GBP, EUR, AED, CAD o AUD, descripción, tema e instrucciones de la lista de deseos, todo opcional.",
        "Exclusiones de un sentido y mutuas, comprobadas antes del sorteo, con una explicación clara cuando hacen imposible un sorteo.",
        "Resultados ocultos con revelación de uno en uno, una plantilla de mensaje editable, botones de copiar y tarjetas individuales imprimibles.",
        "Listas de deseos opcionales, visibles solo en la tarjeta de quien compra para ese participante.",
        "Descargas de CSV y PDF solo para el organizador, cada una detrás de una confirmación."
      ],
      "article": {
        "title": "Cómo organizar un intercambio de amigo invisible (Secret Santa): una guía completa",
        "intro": "Un intercambio de amigo invisible convierte un problema grande de regalos de grupo en una tarea pequeña y manejable para cada persona: comprar un regalo pensado para una persona, dentro de un presupuesto acordado. Lo que suele fallar es la organización, casi siempre por un papelito perdido, una pareja que se sacó mutuamente o un presupuesto que nadie apuntó. Esta guía recorre todo el proceso, desde la primera invitación hasta el día en que se abren los regalos, y explica cómo un generador de amigo invisible en línea se encarga del sorteo.",
        "sections": [
          {
            "heading": "¿Qué es el amigo invisible?",
            "paragraphs": [
              "El amigo invisible, o Secret Santa, es un intercambio de regalos en el que a cada participante se le da en secreto el nombre de otro participante, y compra un regalo para esa persona. Nadie sabe quién le está comprando hasta el intercambio, y a veces ni siquiera entonces. En lugar de que todos compren algo para todos, cada persona compra exactamente un regalo, lo que mantiene bajos el coste y el esfuerzo en grupos grandes.",
              "La tradición tiene otros nombres según el lugar, pero la idea es la misma: un sorteo al azar, un presupuesto compartido, una sorpresa. Funciona en el trabajo, en familias extensas, grupos de amigos, equipos deportivos, aulas y comunidades en línea."
            ]
          },
          {
            "heading": "¿Cómo funciona un intercambio de amigo invisible?",
            "paragraphs": [
              "Todo intercambio sigue los mismos pasos. El organizador reúne una lista de participantes y acuerda las reglas: un presupuesto, una fecha de intercambio y cualquier tema especial. Luego se sortean los nombres para que cada persona tenga un destinatario, nadie se saque a sí mismo y no haya dos personas con el mismo destinatario. Cada persona compra un regalo, y los regalos se entregan el día acordado.",
              "En un sorteo tradicional, todos escriben su nombre en un papelito, los papeles van a un sombrero y cada persona saca uno. Es divertido en persona, pero tiene problemas prácticos. Alguien puede sacarse a sí mismo y tener que volver a sacar, lo que puede revelar información. Una pareja puede sacarse mutuamente. Quienes no están en la sala no pueden participar. Una asignación aleatoria en línea resuelve esos problemas al calcular todo el sorteo de una vez y comprobarlo con las reglas antes de que nadie vea un nombre."
            ]
          },
          {
            "heading": "Cómo usar un generador de amigo invisible en línea",
            "paragraphs": [
              "Un generador de amigo invisible en línea sustituye al sombrero. Con la herramienta de la parte superior de esta página, escribes o pegas los nombres de los participantes, rellenas los ajustes que quieras, añades exclusiones y pulsas Generar amigo invisible. El generador produce un conjunto completo de emparejamientos en un momento y confirma que cada persona da una vez y recibe una vez.",
              "Este generador es gratis, no necesita registro y funciona por completo en tu navegador. No envía nombres a un servidor. Eso lo convierte en una forma simple de hacer un amigo invisible sin iniciar sesión, pero también significa que el organizador es responsable de pasar cada asignación a la persona correcta, como se explica en la sección de privacidad más abajo."
            ]
          },
          {
            "heading": "Cómo añadir participantes y generar los nombres",
            "paragraphs": [
              "Empieza con una lista completa. Escribe un nombre y pulsa Añadir, o pega una lista en el cuadro de varias líneas, un nombre por línea, y pulsa Añadir todos los nombres. Se recortan los espacios de más y se ignoran las líneas en blanco. Puedes editar cualquier nombre en su sitio o quitar a una persona después, y el recuento de la parte inferior muestra cuántas personas hay en el sorteo.",
              "Usa nombres que la gente reconozca. Si dos compañeros se llaman Sam, el generador igual los trata como personas distintas, porque cada participante tiene un identificador oculto, y los etiqueta Sam (1) y Sam (2). Añadir la inicial del apellido, como Sam K. y Sam P., deja las tarjetas impresas más claras. Cuando la lista esté bien, añade las exclusiones y genera los nombres."
            ]
          },
          {
            "heading": "Cómo funcionan las asignaciones aleatorias de amigo invisible",
            "paragraphs": [
              "Un sorteo justo de amigo invisible tiene que hacer más que barajar la lista. Un barajado simple puede dar a alguien su propio nombre o romper una exclusión. Este generador trata el sorteo como un rompecabezas de emparejamiento. Mira a quién puede regalar cada persona, empieza por quienes tienen menos opciones y prueba sus destinatarios posibles en un orden aleatorio. Si una elección lleva a un callejón sin salida, retrocede y prueba otra.",
              "Antes de sortear nada, la herramienta comprueba que un resultado válido sea posible. Un límite de procesamiento evita que los sorteos muy restringidos ralenticen el navegador, y un segundo método de emparejamiento aleatorizado toma el relevo si se alcanza ese límite. Por último, el resultado se verifica otra vez: todos dan exactamente una vez, todos reciben exactamente una vez, nadie se tiene a sí mismo y no se rompe ninguna regla. Si solo necesitas números aleatorios para rifas o asientos, el [generador de números aleatorios](/tools/random-number-generator) es una opción más simple."
            ]
          },
          {
            "heading": "Cómo organizar un amigo invisible en el trabajo",
            "paragraphs": [
              "Un generador de amigo invisible para el trabajo necesita un poco más de planificación que un sorteo familiar. Haz que la participación sea opcional y dilo con claridad, porque algunos compañeros pueden no celebrarlo o no querer gastar dinero. Fija un solo presupuesto para todos y manténlo modesto, para que nadie sienta presión. Elige una fecha de intercambio en la que la mayoría esté en la oficina, o prevé una opción a distancia para quienes no lo estén.",
              "Piensa también en las exclusiones. Algunos equipos prefieren que los responsables no saquen a las personas a su cargo, o que quienes comparten escritorio no se saquen mutuamente. Acuerda de antemano las pautas de los regalos, por ejemplo nada ofensivo y nada de bromas que puedan poner a alguien en un apuro, e inclúyelas en la descripción del evento. Después del sorteo, envía a cada persona su mensaje en privado, por el chat o el correo habitual del trabajo, no en un hilo de grupo."
            ]
          },
          {
            "heading": "Cómo organizar un amigo invisible con familia y amigos",
            "paragraphs": [
              "El amigo invisible entre amigos y familia suele ser más relajado, pero valen las mismas bases. Acuerda quién entra, sobre todo en familias grandes en las que los niños, las parejas y los parientes que viven lejos pueden participar o no. Decide si los niños pequeños entrarán en el sorteo o recibirán los regalos por separado.",
              "Las familias suelen necesitar exclusiones. Las parejas ya se compran algo de todos modos, así que la mayoría las excluye de sacarse mutuamente, y algunas excluyen a las personas del mismo hogar. Si quieres hacer un sorteo con amigos que viven en sitios distintos, acuerda si los regalos se enviarán por correo o se intercambiarán en una reunión, y fija la fecha con tiempo suficiente para la entrega."
            ]
          },
          {
            "heading": "Cómo fijar un presupuesto para el regalo",
            "paragraphs": [
              "Un presupuesto claro es la regla más útil de cualquier intercambio. Sin uno, algunas personas gastan mucho más que otras y el intercambio se siente desigual. Elige una cantidad con la que esté cómoda la persona que menos margen tiene, no una que convenga a la más generosa.",
              "Puedes indicar un presupuesto mínimo y uno máximo, y elegir USD, GBP, EUR, AED, CAD o AUD. Un rango como 15 a 25 da margen sin invitar a extremos; un solo máximo, como hasta 20, es más simple. Lo que elijas aparece en el mensaje de cada persona, así que nadie tiene que recordarlo."
            ]
          },
          {
            "heading": "Cómo evitar que las parejas y los familiares se saquen mutuamente",
            "paragraphs": [
              "Las exclusiones son el modo de evitar que las parejas se saquen en un amigo invisible. En la sección de exclusiones, elige a la primera persona, elige a quien no debe sacar y pulsa Añadir regla. Con Mutua marcada, se bloquean ambos sentidos, así que ninguno de los dos puede sacar al otro. Sin ella, la regla es de un solo sentido: Ann no sacará a Ben, pero Ben todavía podría sacar a Ann. Las reglas de un sentido sirven para no repetir las parejas del año pasado solo en una dirección, o para un responsable que no debería comprar para alguien a su cargo.",
              "Cada persona sigue recibiendo exactamente un destinatario, así que las exclusiones reducen el número de sorteos posibles. Con muchas reglas en un grupo pequeño, un sorteo puede volverse imposible. Por ejemplo, en un grupo de tres, si Ann y Ben no pueden sacarse mutuamente, ambos tendrían que sacar a Cara. El generador nunca ignora una regla en silencio para que el sorteo salga. En su lugar, explica quiénes están atascados y te pide quitar una regla o añadir más participantes. Eso es lo que lo hace un amigo invisible fiable con exclusiones."
            ]
          },
          {
            "heading": "Cómo mantener privadas las asignaciones de amigo invisible",
            "paragraphs": [
              "La privacidad es lo que conserva la sorpresa. Después del sorteo, esta herramienta oculta todos los emparejamientos. El organizador puede revelar una asignación, copiar el mensaje de esa persona o imprimir su tarjeta, y volver a ocultarla antes de seguir. Existe la opción Mostrar la lista completa para organizadores que no participan, y pide confirmación antes. Las descargas de CSV y PDF del organizador también preguntan antes de guardar, porque contienen todos los emparejamientos.",
              "Sé honesto con el grupo sobre lo privada que es esta herramienta. Una revelación en una pantalla compartida no es lo mismo que una entrega individual segura: quien pueda ver la pantalla puede ver lo que se revela, y el organizador tiene acceso a todo necesariamente. La forma más segura de compartir las asignaciones en privado es que un organizador que no participa copie cada mensaje en un chat o un correo privado con esa única persona. Nada se guarda al cerrar la página, así que descarga primero el archivo del organizador si necesitas un registro."
            ]
          },
          {
            "heading": "¿Cuántos participantes se necesitan?",
            "paragraphs": [
              "Se necesitan al menos tres personas. Con dos, cada una sacaría a la otra y no habría secreto. Con tres, solo hay dos sorteos posibles, así que la sorpresa es limitada. Los grupos de cinco o más dan una mezcla mucho mejor, y los grupos más grandes funcionan igual de bien. Esta herramienta admite hasta 200 participantes en un sorteo.",
              "Si tu grupo es muy grande, como una empresa entera, considera hacer sorteos separados por equipo u oficina, para que la gente compre para alguien a quien al menos conoce un poco."
            ]
          },
          {
            "heading": "Cómo organizar un amigo invisible virtual",
            "paragraphs": [
              "Un amigo invisible virtual funciona para equipos a distancia y amigos en distintas ciudades. Haz el sorteo aquí y luego envía a cada persona su mensaje en privado. Pide direcciones postales o acuerda usar regalos que se puedan enviar de forma digital, como tarjetas regalo electrónicas o suscripciones, y recuerda que la entrega puede tardar más en diciembre.",
              "Para la revelación, elige una videollamada en la que todos abran su regalo frente a la cámara. Si la gente está repartida en varios países, el [conversor de husos horarios](/tools/time-zone-converter) te ayuda a elegir una hora que funcione para todos, y la [calculadora de diferencia de fechas](/tools/date-difference-calculator) muestra cuántos días quedan para el envío. Si un regalo necesita un enlace, un [generador de códigos QR](/tools/qr-code-generator) puede convertirlo en un código para imprimir en una tarjeta."
            ]
          },
          {
            "heading": "Ideas de regalos de amigo invisible para distintos presupuestos",
            "paragraphs": [
              "Con un presupuesto pequeño, piensa en algo útil y personal: un buen cuaderno, un tentempié o un chocolate caliente favorito, una planta, un puzle, una taza elegida a su gusto o un libro de un autor que mencionen. Una nota breve escrita a mano a menudo importa más que el regalo mismo.",
              "Con un presupuesto medio, considera algo ligado a una afición: buenos utensilios de cocina, un juego de mesa, un accesorio de escritorio, una vela agradable o una bufanda cálida. Con un presupuesto mayor, una experiencia como un vale de cine o un curso puede ser memorable. Sea cual sea la cantidad, la lista de deseos es la mejor guía. Si un participante ha rellenado ideas de regalos, categorías favoritas, colores o cosas que preferiría no recibir, esos detalles aparecen solo en la tarjeta de su amigo invisible."
            ]
          },
          {
            "heading": "Errores habituales en el amigo invisible",
            "paragraphs": [
              "El error más habitual son las reglas poco claras: sin presupuesto, sin fecha o sin acuerdo sobre si puede unirse quien no está en la sala. Otro es anunciar los emparejamientos en un chat de grupo, lo que arruina la sorpresa para todos. Olvidar las exclusiones lleva a que las parejas se saquen mutuamente, y volver a sortear en público para corregirlo puede revelar quién tiene a quién.",
              "Otros problemas son prácticos. Hay quienes se unen tarde, cuando el sorteo ya está hecho, así que el organizador tiene que sortear de nuevo y reenviar todos los mensajes. Alguien olvida a quién le compra, por eso ayuda que el organizador guarde una copia privada de los resultados. Y los regalos de broma que parecen graciosos pueden hacer sentir incómodos a los compañeros, así que fija las expectativas en la descripción del evento."
            ]
          },
          {
            "heading": "Consejos para organizar un intercambio de regalos con éxito",
            "paragraphs": [
              "Envía la invitación pronto, con el presupuesto, la fecha y cualquier tema, y fija una fecha límite para unirse antes del sorteo. Reúne las listas de deseos al mismo tiempo. Haz el sorteo cuando la lista sea definitiva, envía los mensajes en privado y guarda una copia confidencial por si alguien olvida.",
              "El día del intercambio, dale un poco de estructura: abrid los regalos de uno en uno, o dejad que la gente adivine quién era su amigo invisible. Después, considera anotar las parejas de este año para que el año que viene puedas añadir exclusiones de un sentido y evitar repeticiones. Sobre todo, manténlo ligero. El punto es una sorpresa pequeña y pensada para todos los del grupo."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "¿Qué es un generador de amigo invisible?",
          "answer": "Un generador de amigo invisible, o Secret Santa Generator, es una herramienta en línea que asigna al azar a cada participante una persona a la que comprar un regalo. Este comprueba que nadie se saque a sí mismo, que cada persona reciba exactamente un regalo y que se respete cada regla de exclusión."
        },
        {
          "question": "¿Este generador de amigo invisible es gratis?",
          "answer": "Sí. Se puede usar gratis, sin suscripción, sin funciones de pago y sin un límite de cuántas veces haces el sorteo."
        },
        {
          "question": "¿Puedo generar los nombres del amigo invisible en línea?",
          "answer": "Sí. Añade los nombres en la parte superior de esta página y pulsa Generar amigo invisible. El sorteo ocurre en tu navegador en un momento y se verifica antes de mostrarse."
        },
        {
          "question": "¿Cuántos participantes se necesitan?",
          "answer": "Al menos tres. Cinco o más dan una mejor sorpresa. Esta versión admite hasta 200 personas en un sorteo."
        },
        {
          "question": "¿Puede alguien sacar su propio nombre?",
          "answer": "No. El generador nunca asigna a nadie a sí mismo, y cada resultado se comprueba en este punto antes de aparecer."
        },
        {
          "question": "¿Puedo excluir a las parejas de sacarse mutuamente?",
          "answer": "Sí. Añade una exclusión entre las dos personas y marca Mutua para que ninguna pueda sacar a la otra. También puedes añadir reglas de un solo sentido. Si las reglas hacen imposible un sorteo, la herramienta explica a qué personas afecta."
        },
        {
          "question": "¿Puedo usarlo para una fiesta de Navidad de la oficina?",
          "answer": "Sí. Fija un presupuesto, una moneda y una fecha de intercambio, añade exclusiones como responsables y personas a su cargo si las quieres, y luego copia el mensaje de cada compañero en un chat privado o imprime su tarjeta."
        },
        {
          "question": "¿Puedo usarlo con familia y amigos?",
          "answer": "Sí. Sirve para familias y grupos de amigos, incluidas exclusiones mutuas para parejas u hogares y listas de deseos opcionales que solo ve el amigo invisible correspondiente."
        },
        {
          "question": "¿Puedo organizar un amigo invisible sin crear una cuenta?",
          "answer": "Sí. No hay registro ni inicio de sesión. Todo funciona en tu navegador."
        },
        {
          "question": "¿Cómo puedo compartir las asignaciones en privado?",
          "answer": "Revela una asignación cada vez, copia el mensaje de esa persona o imprime su tarjeta, y vuelve a ocultarla. Envía cada mensaje a su persona en privado. Revelar en una pantalla compartida no es privado respecto a quien esté mirando, y esta versión no envía correos ni crea enlaces para compartir."
        },
        {
          "question": "¿Puedo descargar los resultados?",
          "answer": "Sí. El organizador puede descargar un CSV o un PDF de todos los emparejamientos después de confirmar, o imprimir tarjetas individuales y elegir Guardar como PDF en el cuadro de impresión."
        },
        {
          "question": "¿El generador guarda los nombres de los participantes?",
          "answer": "No. Los nombres, correos, listas de deseos y emparejamientos nunca se guardan ni se envían a un servidor; desaparecen cuando cierras o recargas la página. Solo los ajustes opcionales del evento y la plantilla del mensaje se guardan en tu navegador, y Borrar ajustes guardados los elimina."
        },
        {
          "question": "¿Cómo funcionan las reglas de exclusión para las parejas?",
          "answer": "Marca las parejas que no deben sacarse mutuamente; el barajado se reintenta hasta satisfacer las restricciones cuando es posible."
        },
        {
          "question": "¿Qué ocurre si las exclusiones hacen imposible un sorteo?",
          "answer": "Demasiados bloqueos pueden dejar un derangement imposible: relaja una restricción o añade participantes."
        },
        {
          "question": "¿Los nombres pueden incluir emoji o apodos?",
          "answer": "Sí: usa las etiquetas que tu grupo reconozca; mantenlas únicas para que las asignaciones se vean claras."
        },
        {
          "question": "¿Debo volver a sortear si alguien se baja?",
          "answer": "Quita el nombre y genera de nuevo para que las cadenas que quedan sigan siendo justas."
        },
        {
          "question": "¿Cómo hago un intercambio solo a distancia?",
          "answer": "Comparte cada asignación en privado por mensaje, fija una fecha de envío y acuerda un presupuesto en el chat."
        },
        {
          "question": "¿Puedo fijar un gasto mínimo y un máximo?",
          "answer": "Los presupuestos son reglas sociales: indícalos en la invitación; el generador solo se encarga del sorteo de nombres."
        },
        {
          "question": "¿El orden de los nombres afecta a la aleatoriedad?",
          "answer": "No: el barajado debería tratar la lista sin favorecer las entradas que van primero."
        },
        {
          "question": "¿Cómo evito que el organizador vea todos los emparejamientos?",
          "answer": "Haz que cada persona sortee en su propio dispositivo, o envía mensajes cerrados para que solo los destinatarios vean a quién les toca."
        }
      ]
    },
    "metaDescription": "Organiza un amigo invisible gratis en tu navegador: nombres, exclusiones y mensajes privados. Sin cuenta y sin enviar nombres a un servidor.",
    "ui": {}
  }
};

export default data;
