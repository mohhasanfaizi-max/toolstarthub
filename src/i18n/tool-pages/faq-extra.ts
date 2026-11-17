import type { ToolFaq } from "@/data/tool-content";
import type { PrefixedLocale } from "@/i18n/config";

/**
 * Extra FAQs appended after the locale page's own list, mirroring
 * English extras in src/data/tool-faq-extra.ts, so FAQ counts stay in parity
 * and currently indexable es/ar tool pages do not become noindex.
 */
export const localeToolFaqExtras: Partial<
  Record<PrefixedLocale, Record<string, ToolFaq[]>>
> = {
  es: {
    "image-compressor": [
        {
          question: "¿Es gratis el compresor de imágenes?",
          answer:
            "Sí. Puedes volver a codificar un JPG, PNG o WebP aquí sin pagar ni crear una cuenta.",
        },
        {
          question: "¿Qué formatos puedo comprimir?",
          answer:
            "Esta página siempre abre JPG, PNG y WebP, y puedes guardar en esos formatos. AVIF aparece como salida solo si este navegador puede codificarlo. Los archivos HEIC o AVIF se abren solo si este navegador puede decodificarlos. Los archivos GIF y SVG se rechazan.",
        },
        {
          question: "¿Cómo funciona el control de calidad?",
          answer:
            "La calidad va de 10 a 100 y empieza en 80. Cambia la codificación JPEG, WebP y AVIF. No cambia cómo se escribe el PNG en esta página, porque la salida PNG aquí es sin pérdida.",
        },
        {
          question: "¿Puedo comprimir una imagen a un tamaño objetivo, por ejemplo por debajo de 200 KB?",
          answer:
            "Sí. Activa Comprimir a un tamaño de archivo objetivo e indica un tope, por ejemplo 200 KB, o usa un valor preestablecido. Para JPG, WebP y AVIF la página busca una calidad igual o inferior a ese tamaño. Si la calidad más baja sigue siendo demasiado grande, también puedes reducir las dimensiones. La página indica con honestidad el tamaño final cuando no se puede cumplir el objetivo. El PNG es sin pérdida, así que elige JPG o WebP, o reduce las dimensiones, si necesitas alcanzar un tope.",
        },
        {
          question: "¿Puedo comprimir varias imágenes a la vez o descargar un ZIP?",
          answer:
            "Sí. Puedes añadir hasta 20 imágenes, comprimirlas en esta pestaña y revisar cada resultado. Si sale bien más de un archivo, «Descargar todo en ZIP» los empaqueta. Una sola imagen se descarga como ese archivo, no como un ZIP.",
        },
        {
          question: "¿Cuáles son los límites de tamaño de archivo y de píxeles?",
          answer:
            "Cada imagen debe ocupar 25 MB o menos, y ningún lado puede superar los 8.192 píxeles. En una pasada caben hasta 20 archivos. Un archivo fuera de esos límites se rechaza.",
        },
        {
          question: "¿Comprimir un JPEG más de una vez lo empeora?",
          answer:
            "Puede ocurrir. El JPEG, el WebP y el AVIF de esta página son con pérdida, así que comprimir otra vez un JPEG puede añadir más artefactos. Empieza por el original cuando puedas.",
        },
        {
          question: "¿La compresión sobrescribe la foto en mi dispositivo?",
          answer:
            "No. El archivo original se queda donde está. Descargas un archivo nuevo, y Restablecer solo borra la imagen de esta pestaña.",
        },
        {
          question: "¿Cuándo debo elegir WebP como salida?",
          answer:
            "Elige WebP cuando el destino acepte ese formato y quieras un archivo más pequeño que un JPEG de aspecto parecido. Si un formulario solo acepta JPG o PNG, elige ese formato.",
        },
        {
          question: "¿Puedo deshacer una compresión si no me gusta el resultado?",
          answer:
            "Sí. El archivo original en tu dispositivo no cambia. Mueve el control de calidad y comprime otra vez, o pulsa Restablecer y vuelve a elegir el archivo.",
        },
        {
          question: "¿Hay un límite diario o hay que iniciar sesión?",
          answer:
            "No. En esta página no hay cuenta ni cupo diario. Los límites prácticos son 20 archivos por pasada, 25 MB cada uno y 8.192 píxeles de lado.",
        },
        {
          question: "¿En qué se diferencia del conversor de imágenes?",
          answer:
            "Esta página vuelve a codificar un JPG, PNG o WebP para reducir el tamaño. El [Conversor de imágenes](/tools/image-converter) pasa un JPG a PNG o un PNG a JPG, e incluye un color de relleno para los píxeles transparentes.",
        },
        {
          question: "¿Necesito conexión a internet cuando la página ya está cargada?",
          answer:
            "La compresión se ejecuta en esta pestaña. Necesitas conexión para abrir la página, pero la imagen no se sube a un servidor para comprimirla.",
        },
        {
          question: "¿Puedo usar el archivo comprimido en un correo o en un sitio web?",
          answer:
            "Sí. Descarga el archivo o el ZIP y adjúntalo o súbelo donde lo necesites. Comprueba que el destino acepte el formato que elegiste, sobre todo si elegiste WebP o AVIF.",
        },
    ],
    "image-resizer": [
        {
          question: "¿Cómo fijo un ancho y un alto exactos?",
          answer:
            "Escribe valores enteros en píxeles de 1 a 8.192. Con el bloqueo de proporción activado, al cambiar un lado se actualiza el otro. Desactívalo solo si quieres ambos valores tal como los escribes.",
        },
        {
          question: "¿Qué formatos puedo redimensionar?",
          answer:
            "Aquí se abren JPG, PNG y WebP. GIF, HEIC y SVG no se aceptan en esta página.",
        },
        {
          question: "¿Puedo recortar o rotar la foto aquí?",
          answer:
            "No. Esta página solo escala la imagen completa. Para recortar una zona, usa el [Recortador de imágenes](/tools/image-cropper). Aquí no hay rotación ni eliminación de fondo.",
        },
        {
          question: "¿Qué ocurre si desactivo el bloqueo de proporción?",
          answer:
            "Puedes escribir el ancho y el alto por separado. Si esos números no coinciden con la proporción original, la imagen se estirará.",
        },
        {
          question: "¿El redimensionador funciona en un teléfono móvil?",
          answer:
            "Sí. Puedes abrir un JPG, PNG o WebP y fijar el tamaño en píxeles en un navegador móvil. El trabajo se queda en esta pestaña.",
        },
        {
          question: "¿Redimensionar sobrescribe el archivo original?",
          answer:
            "No. Descargas una imagen nueva. El archivo en tu dispositivo se queda como estaba.",
        },
        {
          question: "¿Puedo redimensionar más de una imagen en una sola pasada?",
          answer:
            "No. Esta página redimensiona una imagen cada vez.",
        },
        {
          question: "¿Por qué redimensionar antes de comprimir?",
          answer:
            "Menos píxeles suelen significar un archivo más pequeño. Una secuencia habitual es redimensionar al tamaño que necesitas y luego comprimir el resultado con el [Compresor de imágenes](/tools/image-compressor).",
        },
        {
          question: "¿Qué tamaño debo usar para una imagen de vista previa social?",
          answer:
            "Muchas vistas previas de enlaces usan 1200 por 630 píxeles. Escribe el ancho y el alto que necesites, o recorta primero la forma en el [Recortador de imágenes](/tools/image-cropper) y luego redimensiona.",
        },
        {
          question: "¿Las dimensiones de salida son exactamente las que escribo?",
          answer:
            "Sí, cuando ambos lados son píxeles enteros de 1 a 8.192. Con el bloqueo activado, el segundo lado se calcula a partir del primero para conservar la proporción.",
        },
        {
          question: "¿Puedo ampliar una foto pequeña sin que se vea blanda?",
          answer:
            "Puedes escribir un tamaño mayor, pero esta página no inventa el detalle que falta. Ampliar una imagen pequeña suele verse borrosa o pixelada.",
        },
        {
          question: "¿Puedo conservar la transparencia de un PNG?",
          answer:
            "Sí. Un PNG con fondo transparente conserva esa transparencia al redimensionarlo, porque esta página no aplasta la imagen sobre un color de relleno.",
        },
        {
          question: "¿Puedo redimensionar a un porcentaje del tamaño original?",
          answer:
            "No hay un recuadro de porcentaje. Calcula el nuevo ancho o alto en píxeles y escribe ese número, dejando el bloqueo de proporción activado si quieres que el otro lado le siga.",
        },
        {
          question: "¿La descarga se queda en el mismo formato que abrí?",
          answer:
            "Sí. Un JPG sigue siendo JPG, un PNG sigue siendo PNG y un WebP sigue siendo WebP. Para cambiar de formato, usa el [Conversor de imágenes](/tools/image-converter) o, si quieres WebP al comprimir, el [Compresor de imágenes](/tools/image-compressor).",
        },
        {
          question: "¿Qué ocurre si pongo 0 o un decimal en un lado?",
          answer:
            "El ancho y el alto deben ser píxeles enteros de 1 a 8.192. No se aceptan el 0, un número negativo ni un decimal.",
        },
    ],
    "image-cropper": [
        {
          question: "¿Qué formatos puedo recortar?",
          answer:
            "Aquí se abren JPG, PNG y WebP. Los archivos GIF, HEIC y SVG no se abren.",
        },
        {
          question: "¿Cómo recorto una foto cuadrada de perfil?",
          answer:
            "Elige el marco 1:1, arrastra y ajusta el recuadro sobre la zona que quieres y descarga. El archivo son los píxeles originales de ese marco.",
        },
        {
          question: "¿Puedo rotar o aplicar filtros a la foto en esta página?",
          answer:
            "No. En esta página no hay rotación, filtros ni pincel de corrección. La descarga son solo los píxeles del marco que dibujaste.",
        },
        {
          question: "¿Cuál es el límite de tamaño de archivo y de píxeles?",
          answer:
            "Se rechaza un archivo de más de 25 MB, o con un lado de más de 8.192 píxeles.",
        },
        {
          question: "¿Recortar sobrescribe la foto original?",
          answer:
            "No. El archivo en tu dispositivo se queda como estaba. Descargas una imagen nueva de la zona recortada.",
        },
        {
          question: "¿Puedo recortar varias fotos a la vez?",
          answer:
            "No. Esta página recorta una imagen cada vez.",
        },
        {
          question: "¿El recortador funciona en un navegador móvil?",
          answer:
            "Sí. Puedes arrastrar el marco en un teléfono o una tableta. El trabajo se queda en esta pestaña y la foto no se sube.",
        },
        {
          question: "¿Puedo conservar un fondo PNG transparente después de recortar?",
          answer:
            "Sí. Los píxeles transparentes de dentro del marco siguen transparentes en la descarga. Los píxeles de fuera del marco se descartan.",
        },
        {
          question: "¿En qué se diferencia recortar de redimensionar?",
          answer:
            "Recortar conserva una zona y descarta el resto, sin escalar esa zona. El [Redimensionador de imágenes](/tools/image-resizer) escala la imagen completa a un nuevo ancho y alto.",
        },
        {
          question: "¿Qué hace la opción de proporción libre?",
          answer:
            "Libre te permite arrastrar cualquier rectángulo. 1:1, 4:3 y 16:9 fijan el marco a esa proporción mientras lo mueves o lo redimensionas.",
        },
        {
          question: "¿Puedo recortar a una proporción personalizada como 9:16?",
          answer:
            "No hay un preajuste 9:16. Usa Libre y forma el recuadro a ojo, o recorta un marco 16:9 o 1:1 si ese preajuste se acerca más a lo que necesitas.",
        },
        {
          question: "¿El recorte descargado tiene la misma resolución que la zona seleccionada?",
          answer:
            "Sí. La descarga son los píxeles originales de dentro del marco, no una copia redimensionada o realzada de esa zona.",
        },
        {
          question: "¿Qué ocurre si el recuadro es demasiado pequeño?",
          answer:
            "Aun así puedes descargar una zona muy pequeña, pero un recorte diminuto tiene pocos píxeles y se verá blando si luego lo amplías.",
        },
        {
          question: "¿Puedo volver a cambiar el marco después de descargar?",
          answer:
            "Sí. El archivo original sigue en tu dispositivo. Ajusta el recuadro y descarga otra vez, o pulsa Restablecer y vuelve a elegir el archivo.",
        },
        {
          question: "¿Debo recortar antes de comprimir?",
          answer:
            "Normalmente sí, si solo necesitas una parte de la foto. Recorta primero para no comprimir píxeles que vas a desechar, y luego usa el [Compresor de imágenes](/tools/image-compressor) si también necesitas un archivo más pequeño.",
        },
    ],
    "image-converter": [
        {
          question: "¿Qué conversiones hay disponibles?",
          answer:
            "Esta página pasa un JPG a PNG, o un PNG a JPG. Aquí no se convierten WebP, GIF ni HEIC.",
        },
        {
          question: "¿Cómo elijo el color de fondo de un PNG transparente?",
          answer:
            "Cuando conviertes PNG a JPG, elige antes un color de relleno. El JPG no puede guardar un píxel transparente, así que ese color se escribe detrás de las zonas transparentes antes de guardar el JPEG.",
        },
        {
          question: "¿Pasar un JPG a PNG recupera la calidad perdida?",
          answer:
            "No. De JPG a PNG se conserva el daño que el JPEG ya introdujo. El PNG es una copia sin pérdida de la imagen tal como se ve ahora, no una recuperación de la foto original.",
        },
        {
          question: "¿Puedo convertir WebP, GIF o HEIC aquí?",
          answer:
            "No. Esos formatos no se convierten en esta página. Si un JPG, PNG o WebP solo necesita un archivo más pequeño, usa el [Compresor de imágenes](/tools/image-compressor).",
        },
        {
          question: "¿El conversor funciona en un teléfono móvil?",
          answer:
            "Sí. Puedes elegir un JPG o un PNG y descargar el otro formato en un navegador móvil. El archivo no se sube.",
        },
        {
          question: "¿La conversión sobrescribe el archivo original?",
          answer:
            "No. Descargas un archivo nuevo. El original se queda en tu dispositivo.",
        },
        {
          question: "¿Puedo convertir varias imágenes a la vez?",
          answer:
            "No. Esta página convierte una imagen cada vez.",
        },
        {
          question: "¿Cuáles son los límites de tamaño y de píxeles?",
          answer:
            "Se rechaza un archivo de más de 25 MB, o con un lado de más de 8.192 píxeles, y también los formatos que esta página no abre.",
        },
        {
          question: "¿Cuándo debo convertir una captura de pantalla a PNG?",
          answer:
            "Si la captura ya es un PNG, normalmente conviene dejarla en PNG para que el texto y los bordes planos sigan nítidos. Pasarla a JPG puede añadir artefactos alrededor del texto.",
        },
        {
          question: "¿Puedo convertir una foto a PNG para que pese menos?",
          answer:
            "Normalmente no. Un JPG fotográfico suele convertirse en un PNG más grande porque el PNG es sin pérdida. Usa el [Compresor de imágenes](/tools/image-compressor) si quieres una foto más pequeña.",
        },
        {
          question: "¿Hay un control de calidad para pasar de PNG a JPG?",
          answer:
            "La conversión escribe un JPEG de la imagen después de rellenar los píxeles transparentes. Usa el [Compresor de imágenes](/tools/image-compressor) si luego quieres ajustar la calidad JPEG o WebP.",
        },
        {
          question: "¿Puedo conservar el mismo nombre de archivo después de convertir?",
          answer:
            "La descarga usa la extensión del formato nuevo. Puedes renombrar el archivo en tu dispositivo después de guardarlo.",
        },
        {
          question: "¿Pasar de PNG a JPG también redimensiona la imagen?",
          answer:
            "No. El ancho y el alto se quedan igual. Para cambiar el tamaño en píxeles, usa el [Redimensionador de imágenes](/tools/image-resizer).",
        },
        {
          question: "¿Por qué un JPG convertido puede verse un poco distinto?",
          answer:
            "El JPEG es con pérdida, así que los bordes finos pueden cambiar. Un PNG transparente también gana el color de relleno que elegiste en cada píxel que antes era transparente.",
        },
        {
          question: "¿Es distinto de cambiar la extensión del archivo a mano?",
          answer:
            "Sí. Renombrar un archivo .png a .jpg no convierte los píxeles. Esta página vuelve a codificar de verdad la imagen en el formato que eliges.",
        },
    ],
    "pdf-to-jpg": [
        {
          question: "¿Es gratis el conversor de PDF a JPG?",
          answer:
            "Sí. Convertir páginas de un PDF en imágenes JPEG es gratis y no hace falta una cuenta.",
        },
        {
          question: "¿Puedo descargar PNG o WebP en lugar de JPEG?",
          answer:
            "Sí. Elige JPG, PNG o WebP antes de convertir. Cuando hay más de una página lista, puedes descargarlas todas en un ZIP. El resultado de una sola página se descarga como ese archivo.",
        },
        {
          question: "¿Esto extrae las fotos incrustadas en el PDF?",
          answer:
            "No. Cada resultado es una imagen de la página completa, no un conjunto de imágenes sacadas del archivo.",
        },
        {
          question: "¿El conversor funciona en un navegador móvil?",
          answer:
            "Sí. Puedes abrir un PDF y descargar los JPEG de las páginas en un teléfono o una tableta. El archivo se queda en esta pestaña y no se sube.",
        },
        {
          question: "¿Convertir cambia el PDF original?",
          answer:
            "No. El PDF en tu dispositivo no se modifica. Descargas archivos JPEG nuevos.",
        },
        {
          question: "¿Cuántas páginas puedo previsualizar antes de exportar?",
          answer:
            "Las miniaturas cubren las primeras 12 páginas. Aun así puedes exportar la primera página, las que marques o todas, dentro del límite de 40 páginas.",
        },
        {
          question: "¿A qué escala se generan los JPEG?",
          answer:
            "El valor predeterminado es 108 DPI, la misma escala 1,5× de antes. También puedes elegir 72, 150 o 300 DPI. La escala se reduce cuando una página superaría un lado más largo de 4.096 píxeles.",
        },
        {
          question: "¿Puedo convertir varios PDF a la vez?",
          answer:
            "No. Esta página convierte un PDF cada vez.",
        },
        {
          question: "¿Un PDF escaneado se convierte en una foto nítida?",
          answer:
            "Obtienes una imagen de cada página tal como se ve, incluido un escaneo. Esto no nítida un escaneo borroso ni extrae su texto. Para las palabras de una capa de texto, usa [PDF a texto](/tools/pdf-to-text).",
        },
        {
          question: "¿Por qué una página alargada puede verse más pequeña de lo que espero?",
          answer:
            "La renderización se detiene en un lado más largo de 4.096 píxeles, y la escala 1,5 se reduce cuando hace falta para que la página quepa en ese límite.",
        },
        {
          question: "¿Puedo elegir la calidad del JPEG?",
          answer:
            "Sí. En JPG y WebP, un control de calidad empieza en 80. Los valores más bajos suelen hacer un archivo más pequeño. PNG no tiene pérdida, así que ese control no se aplica. En esta página no hay un tamaño de archivo objetivo.",
        },
        {
          question: "¿Qué hago si solo necesito la portada?",
          answer:
            "Exporta la primera página, o marca solo la página 1 si eliges las páginas a mano, y descarga ese JPEG.",
        },
        {
          question: "¿Los campos de formulario y las anotaciones salen en la imagen?",
          answer:
            "El JPEG es una imagen de la página renderizada. Lo que no se dibuje en esa vista no aparecerá. Esto no es una exportación de los valores del formulario.",
        },
        {
          question: "¿Qué ocurre si el archivo pesa más de 20 MB?",
          answer:
            "La renderización se detiene en 20 MB, 40 páginas y un lado más largo de 4.096 píxeles. Un archivo más grande, o con más páginas, se rechaza.",
        },
    ],
    "pdf-merger": [
        {
          question: "¿Cómo elijo el orden de los PDF?",
          answer:
            "Añade de dos a diez PDF y colócalos en el orden en que quieras que aparezcan las páginas. El archivo unido sigue esa lista.",
        },
        {
          question: "¿Cuántos archivos y páginas puedo unir?",
          answer:
            "Necesitas al menos dos PDF y no más de 10. El total de páginas combinadas debe quedar en 80 o menos.",
        },
        {
          question: "¿Unir PDF funciona en un teléfono móvil?",
          answer:
            "Sí. Puedes añadir PDF y descargar el archivo combinado en un navegador móvil. Los archivos no se suben a un servidor.",
        },
        {
          question: "¿La unión cambia los PDF originales en mi dispositivo?",
          answer:
            "No. Cada archivo de origen se queda como estaba. Descargas un PDF nuevo y combinado.",
        },
        {
          question: "¿Puedo unir el mismo PDF más de una vez?",
          answer:
            "Puedes añadir archivos en el orden que necesites. La página sigue aplicando los límites de 10 archivos y 80 páginas a la combinación.",
        },
        {
          question: "¿Los formularios rellenables se conservan como formularios después de unir?",
          answer:
            "Los formularios no se aplastan, y esta página no promete que los campos sigan funcionando en el archivo combinado. Tampoco se quita el cifrado.",
        },
        {
          question: "¿Qué ocurre si un archivo está protegido con contraseña?",
          answer:
            "Un archivo protegido con contraseña no se abre, así que no se puede incluir. Quita la contraseña en otra herramienta primero, si tienes permiso, y luego añade el archivo aquí.",
        },
        {
          question: "¿Puedo añadir una portada a un informe?",
          answer:
            "Sí. Añade primero el PDF de la portada y después el informe, y únelos, siempre que el total de páginas quede en 80 o menos.",
        },
        {
          question: "¿Hay un límite de tamaño de archivo además del de páginas?",
          answer:
            "Los límites fijos de esta página son de dos a diez PDF y 80 páginas combinadas, además del rechazo de los archivos protegidos con contraseña. Si un archivo no se abre, comprueba primero esos límites.",
        },
        {
          question: "¿Puedo quitar un archivo antes de unir?",
          answer:
            "Sí. Sácalo de la lista, reordena lo que quede y une cuando sigan presentes al menos dos PDF.",
        },
        {
          question: "¿Unir reduce el tamaño del archivo?",
          answer:
            "No. Esta página une los archivos; no los comprime. Para intentar reducir un PDF, usa el [Compresor de PDF](/tools/pdf-compressor).",
        },
        {
          question: "¿Puedo dividir el archivo unido después?",
          answer:
            "Sí. Descarga el PDF combinado y ábrelo en el [Dividir PDF](/tools/pdf-splitter) para copiar páginas concretas a un archivo nuevo.",
        },
        {
          question: "¿Se conservan los marcadores o el esquema de cada archivo?",
          answer:
            "Esta página une el contenido de las páginas en el orden que indiques. No promete conservar marcadores, esquemas ni archivos adjuntos de los PDF de origen.",
        },
        {
          question: "¿Qué ocurre si el total de páginas superaría 80?",
          answer:
            "La unión se rechaza hasta que la combinación quede en 80 páginas o menos. Divide antes un archivo largo, o quita algunos PDF de la lista.",
        },
        {
          question: "¿Puedo unir PDF escaneados con otros nacidos digitales?",
          answer:
            "Sí, si cada archivo se abre y los recuentos de páginas y de archivos quedan dentro de los límites. Un escaneo se trata como páginas, no como una fuente de texto extraíble.",
        },
        {
          question: "¿Cómo empiezo de nuevo?",
          answer:
            "Vacía la lista y vuelve a añadir los PDF en el orden que quieras. No se guarda nada del intento anterior, salvo los archivos que sigas teniendo en tu dispositivo.",
        },
        {
          question: "¿El PDF unido se descarga como un solo archivo?",
          answer:
            "Sí. El resultado es un único PDF que puedes guardar en tu dispositivo.",
        },
    ],
    "pdf-splitter": [
        {
          question: "¿Cómo escribo un rango de páginas?",
          answer:
            "Usa comas y guiones, por ejemplo 1-3,6. Las páginas empiezan en 1. Se rechaza un rango invertido como 5-2, y también una página que no esté en el archivo.",
        },
        {
          question: "¿Cuántas páginas puede tener el PDF nuevo?",
          answer:
            "El archivo nuevo puede tener como máximo 80 páginas. Si necesitas más, haz más de una división y mantén cada rango dentro de 80 páginas.",
        },
        {
          question: "¿El divisor funciona en un teléfono móvil?",
          answer:
            "Sí. Puedes escribir un rango y descargar el PDF nuevo en un navegador móvil. El archivo original no se sube.",
        },
        {
          question: "¿Puedo quitar el centro de un documento y dejar el resto en un solo archivo?",
          answer:
            "Sí. Escribe las páginas que quieres conservar, por ejemplo 1-2,8-10, y descarga un PDF nuevo que solo tenga esas páginas.",
        },
        {
          question: "¿Qué ocurre si escribo una página que no está en el PDF?",
          answer:
            "Ese rango se rechaza. Comprueba antes el número de páginas con el [Contador de páginas PDF](/tools/pdf-page-counter) si no estás seguro de cuántas tiene el archivo.",
        },
        {
          question: "¿Se puede dividir aquí un PDF bloqueado o protegido con contraseña?",
          answer:
            "Un archivo bloqueado no se abre aquí, así que no se puede dividir. El original en tu dispositivo no cambia.",
        },
        {
          question: "¿Dividir comprime las páginas?",
          answer:
            "No. El archivo nuevo es una copia de las páginas que seleccionaste. Para intentar reducir un PDF, usa el [Compresor de PDF](/tools/pdf-compressor).",
        },
        {
          question: "¿Puedo extraer una sola página?",
          answer:
            "Sí. Escribe ese número de página, por ejemplo 3, y descarga un PDF de una página.",
        },
        {
          question: "¿El orden de las páginas del PDF nuevo es el de mi rango?",
          answer:
            "Sí. Las páginas se copian en el orden en que las listas, siempre que cada número exista en el archivo y el rango no esté invertido.",
        },
        {
          question: "¿Puedo deshacer una división?",
          answer:
            "No hay nada que deshacer en el original, porque no se modificó. Borra la descarga si no la necesitas y ejecuta un rango distinto.",
        },
        {
          question: "¿Esto extrae imágenes o texto de las páginas?",
          answer:
            "No. El resultado es un PDF con las páginas que elegiste. Para imágenes de las páginas, usa [PDF a JPG](/tools/pdf-to-jpg). Para una capa de texto, usa [PDF a texto](/tools/pdf-to-text).",
        },
        {
          question: "¿Qué hago si necesito cada página como archivo propio?",
          answer:
            "Esta página escribe un PDF nuevo en cada ejecución. Repite la división para cada página, o usa otra herramienta si necesitas una carpeta de archivos de una página en un solo paso.",
        },
        {
          question: "¿Se incluyen las páginas en blanco si las selecciono?",
          answer:
            "Sí. Si una página seleccionada está en blanco, también se copia al PDF nuevo.",
        },
        {
          question: "¿Puedo reordenar páginas sin quitar ninguna?",
          answer:
            "Puedes listar las páginas en un orden nuevo dentro del rango, con el tope de 80 páginas, y descargar eso como archivo nuevo. El orden original en tu dispositivo no cambia.",
        },
        {
          question: "¿Hay un límite de tamaño de archivo?",
          answer:
            "Un archivo que no se abre —porque está dañado, protegido con contraseña o no se puede leer— no se puede dividir. El PDF nuevo también está limitado a 80 páginas.",
        },
    ],
    "pdf-to-text": [
        {
          question: "¿Cómo extraigo texto de solo algunas páginas?",
          answer:
            "Elige todas las páginas, una página o un rango como 1-3,5. Solo se leen las páginas que pides.",
        },
        {
          question: "¿Cuáles son los límites de tamaño de archivo y de páginas?",
          answer:
            "Se rechazan los archivos de más de 20 MB o los documentos de más de 80 páginas. Un PDF protegido con contraseña no se abre.",
        },
        {
          question: "¿PDF a texto funciona en un navegador móvil?",
          answer:
            "Sí. Puedes abrir un PDF y copiar o descargar el texto en un teléfono o una tableta. El archivo no se sube.",
        },
        {
          question: "¿El texto conserva las fuentes y el diseño originales?",
          answer:
            "No. Los saltos de línea se reconstruyen a partir de las posiciones de los glifos, así que un diseño apretado o a varias columnas puede salir irregular. Obtienes las palabras, no una página maquetada.",
        },
        {
          question: "¿Puedo extraer texto de una factura escaneada?",
          answer:
            "Solo si ese archivo ya tiene una capa de texto. Un escaneo que es solo una imagen de la página vuelve vacío, porque esta página no ejecuta OCR.",
        },
        {
          question: "¿La extracción cambia el PDF?",
          answer:
            "No. El PDF en tu dispositivo no se modifica. Copias o descargas el texto por separado.",
        },
        {
          question: "¿Puedo extraer texto de varios PDF a la vez?",
          answer:
            "No. Esta página lee un PDF cada vez.",
        },
        {
          question: "¿Qué ocurre si solo algunas páginas tienen capa de texto?",
          answer:
            "Las páginas con capa de texto aportan palabras. Las que son solo imágenes no aportan nada, lo que puede verse como huecos en la salida.",
        },
        {
          question: "¿Es lo mismo que seleccionar texto en un lector de PDF?",
          answer:
            "Es el mismo tipo de texto: la capa de texto almacenada. Si en un lector no puedes seleccionar palabras, esta página normalmente tampoco encontrará una capa de texto.",
        },
        {
          question: "¿Puedo obtener una imagen de la página en lugar de las palabras?",
          answer:
            "Sí. Usa [PDF a JPG](/tools/pdf-to-jpg) cuando quieras un JPEG de la página, no la capa de texto.",
        },
        {
          question: "¿Las tablas se conservan como tablas?",
          answer:
            "Las celdas se leen como texto, no como una hoja de cálculo. Las columnas pueden salir como líneas que tendrás que ordenar en un editor.",
        },
        {
          question: "¿Un PDF protegido con contraseña funciona si conozco la contraseña?",
          answer:
            "Esta página no tiene un campo de contraseña. Un PDF protegido con contraseña no se abre aquí.",
        },
        {
          question: "¿Puedo descargar el texto como un archivo?",
          answer:
            "Sí. Cuando el texto está extraído, puedes copiarlo o descargarlo y pegarlo en un editor.",
        },
        {
          question: "¿Por qué algunas letras parecen desordenadas?",
          answer:
            "El extractor reconstruye las líneas a partir de las posiciones de los glifos. Un espaciado raro, texto rotado o columnas apretadas pueden salir en un orden sorprendente.",
        },
        {
          question: "¿Hay un límite de caracteres en el texto extraído?",
          answer:
            "Los límites son del propio PDF: 20 MB y 80 páginas. Un archivo denso de 80 páginas aún puede producir un texto largo.",
        },
    ],
    "pdf-metadata": [
        {
          question: "¿Qué campos puedo ver y borrar?",
          answer:
            "El visor muestra el nombre del archivo, el tamaño, el número de páginas y los campos de información habituales cuando existen: título, autor, asunto, palabras clave, creador, productor y fechas. Quitar metadatos vacía esos campos de información en una descarga nueva.",
        },
        {
          question: "¿Borrar los metadatos cambia las palabras de las páginas?",
          answer:
            "No. El texto de las páginas, los comentarios, los archivos incrustados y las imágenes se quedan. En el archivo nuevo solo se vacían los campos de información habituales.",
        },
        {
          question: "¿Cuál es el límite de páginas?",
          answer:
            "Se rechazan los documentos de más de 80 páginas, y un archivo protegido con contraseña no se abre.",
        },
        {
          question: "¿La herramienta de metadatos funciona en un teléfono móvil?",
          answer:
            "Sí. Puedes abrir un PDF y descargar una copia con los campos de información vaciados en un navegador móvil. El archivo no se sube.",
        },
        {
          question: "¿Borrar los metadatos sobrescribe el PDF original?",
          answer:
            "No. Descargas una copia nueva. El archivo original en tu dispositivo se queda como estaba.",
        },
        {
          question: "¿Puedo editar el título o el autor y poner un valor nuevo?",
          answer:
            "Esta página puede mostrar los campos y vaciarlos. No ofrece un formulario para escribir un título o un autor nuevos.",
        },
        {
          question: "¿Las propiedades del documento en un lector de PDF quedarán entonces vacías?",
          answer:
            "Los campos de información habituales que esta página vacía deberían quedar vacíos en el archivo nuevo. Pueden quedar otros datos ocultos, así que esto no es un borrado total.",
        },
        {
          question: "¿Puedo procesar varios PDF a la vez?",
          answer:
            "No. Esta página lee y, si lo eliges, vacía los campos de un PDF cada vez.",
        },
        {
          question: "¿Esto quita comentarios o anotaciones?",
          answer:
            "No. Los comentarios y las anotaciones se quedan. Solo se vacían los campos de información habituales.",
        },
        {
          question: "¿Qué ocurre si el campo Autor ya está vacío?",
          answer:
            "El visor solo muestra los campos que existen. Vaciar los metadatos igualmente escribe un archivo nuevo con esos campos de información habituales vacíos, lo cual sirve cuando algunos están rellenos y otros no.",
        },
        {
          question: "¿También se elimina XMP u otros datos ocultos de revisión?",
          answer:
            "No. Esta página se ocupa de los campos de información habituales indicados arriba. Pueden quedar otras estructuras de metadatos.",
        },
        {
          question: "¿Puedo consultar los metadatos sin descargar un archivo nuevo?",
          answer:
            "Sí. Abre el PDF para leer los campos. Descarga una copia vaciada solo si quieres quitar esos campos de información.",
        },
        {
          question: "¿Un PDF protegido con contraseña muestra sus campos de información?",
          answer:
            "No. Un archivo protegido con contraseña no se abre, así que aquí no se pueden listar ni vaciar los campos.",
        },
        {
          question: "¿Los buscadores seguirán viendo el autor antiguo después de vaciar los campos?",
          answer:
            "El archivo nuevo ya no lleva esos campos de información. Quien aún tenga el original, o una copia que ya se hubiera subido, puede seguir viendo los valores antiguos.",
        },
        {
          question: "¿Es lo mismo que renombrar el archivo?",
          answer:
            "No. El nombre del archivo y los campos Autor o Título del documento son cosas distintas. Renombrar el archivo no vacía los campos de información, y vaciarlos no renombra el archivo en tu dispositivo.",
        },
    ],
    "color-picker": [
        {
          question: "¿Puedo elegir un color de una fotografía?",
          answer:
            "No. Esta página no toma un píxel de una foto. Para listar los colores principales de una imagen, usa el [Analizador de colores de imagen](/tools/image-color-analyzer).",
        },
        {
          question: "¿Puedo elegir un color transparente o semitransparente?",
          answer:
            "No. El control nativo ofrece un color sRGB opaco. No hay canal alfa.",
        },
        {
          question: "¿Cómo escribo un valor hexadecimal que ya tengo?",
          answer:
            "Introduce el código hexadecimal, con o sin #, en el campo hex. El selector y los valores RGB y HSL se actualizan a ese mismo color.",
        },
        {
          question: "¿El selector de color funciona en un teléfono móvil?",
          answer:
            "Sí. Puedes usar el control de color del navegador o escribir un valor hexadecimal en un teléfono o una tableta. No se sube nada.",
        },
        {
          question: "¿HEX, RGB y HSL son colores distintos o el mismo color?",
          answer:
            "Son tres formas de escribir el mismo color opaco. Copia el formato que espere tu hoja de estilos o tu herramienta de diseño.",
        },
        {
          question: "¿Puedo copiar los tres formatos a la vez?",
          answer:
            "Puedes copiar HEX, RGB o HSL a partir de los valores mostrados. Copia cada formato que necesites; siguen siendo el mismo color.",
        },
        {
          question: "¿Esto convierte solo de hex a RGB, o también al revés?",
          answer:
            "Al elegir o escribir un color se actualizan juntos HEX, RGB y HSL. Si sobre todo necesitas convertir un código hex escrito, también está la herramienta [Hex a RGB](/tools/hex-to-rgb).",
        },
        {
          question: "¿Puedo guardar una paleta de varios colores?",
          answer:
            "Esta página trabaja con un color cada vez y no guarda una paleta. Copia los valores que necesites a tus notas o a tu CSS.",
        },
        {
          question: "¿El color se verá igual en todas las pantallas?",
          answer:
            "Los valores son sRGB. Distintas pantallas y perfiles de color aún pueden cambiar cómo se ve. Para el contraste con el texto, usa el [Comprobador de contraste de color](/tools/color-contrast-checker).",
        },
        {
          question: "¿Puedo introducir RGB o HSL directamente?",
          answer:
            "El campo de texto es hexadecimal. También puedes usar el control de color del navegador. RGB y HSL se muestran para que los copies cuando el color ya está fijado.",
        },
        {
          question: "¿La salida hexadecimal va en mayúsculas o en minúsculas?",
          answer:
            "Copia la cadena hexadecimal tal como la muestra la página. En CSS, #1e90ff y #1E90FF son el mismo color.",
        },
        {
          question: "¿Funciona sin conexión cuando la página ya está cargada?",
          answer:
            "El selector se ejecuta en esta pestaña y no envía el color a un servidor. Necesitas conexión para abrir la página.",
        },
        {
          question: "¿Puedo obtener una variable CSS a partir del color elegido?",
          answer:
            "Aquí no hay un generador de variables. Copia el valor HEX, RGB o HSL y pégalo en una variable de tu hoja de estilos, por ejemplo --accent: #1E90FF;.",
        },
        {
          question: "¿Por qué no hay un cuentagotas para la pantalla?",
          answer:
            "Esta página usa el control de color del navegador y un campo hexadecimal. No captura píxeles de otras ventanas ni de una foto.",
        },
        {
          question: "¿Puedo comprobar aquí si dos colores cumplen el contraste WCAG?",
          answer:
            "No. Copia los colores y pruébalos en el [Comprobador de contraste de color](/tools/color-contrast-checker), que indica la ratio WCAG 2 y los resultados AA o AAA.",
        },
    ],
    "image-color-analyzer": [
        {
          question: "¿Qué formatos de imagen puedo analizar?",
          answer:
            "Aquí se abren JPG, PNG y WebP. Los archivos GIF y HEIC no se abren, y se rechaza un archivo de más de 25 MB o con un lado de más de 8.192 píxeles.",
        },
        {
          question: "¿Cuántos colores mostrará la paleta?",
          answer:
            "Puedes pedir de 3 a 10 colores. La lista se construye a partir de una copia más pequeña y muestreada de la imagen, así que un color raro puede no aparecer.",
        },
        {
          question: "¿Por qué puede faltar un color que sí veo en la foto?",
          answer:
            "La foto se reduce a un lado de 96 píxeles antes de agrupar los píxeles, y se omiten los casi transparentes. Los colores pequeños o raros pueden no salir en la lista.",
        },
        {
          question: "¿El analizador funciona en un teléfono móvil?",
          answer:
            "Sí. Puedes abrir un JPG, PNG o WebP y copiar los colores listados en un navegador móvil. La imagen no se sube.",
        },
        {
          question: "¿El análisis cambia o sobrescribe la foto?",
          answer:
            "No. El archivo en tu dispositivo no cambia. La página solo lista colores de una copia muestreada.",
        },
        {
          question: "¿Puedo analizar varias imágenes a la vez?",
          answer:
            "No. Esta página analiza una imagen cada vez.",
        },
        {
          question: "¿Las proporciones son un porcentaje de la foto original completa?",
          answer:
            "No. Cada proporción se refiere a los píxeles muestreados después de reducir la imagen a un lado de 96 píxeles y de omitir los casi transparentes.",
        },
        {
          question: "¿Puedo elegir el color exacto de un solo píxel?",
          answer:
            "No. Esta herramienta agrupa píxeles parecidos en una paleta breve. Para un color opaco que eliges tú, usa el [Selector de color](/tools/color-picker).",
        },
        {
          question: "¿Las zonas transparentes cuentan para la paleta?",
          answer:
            "Se omiten los píxeles casi transparentes, así que un fondo transparente normalmente no aparece como un color en la lista.",
        },
        {
          question: "¿Puedo copiar RGB además de HEX?",
          answer:
            "Sí. Cada color listado se puede copiar como HEX o RGB para una herramienta de diseño o para CSS.",
        },
        {
          question: "¿Dos fotos parecidas darán la misma paleta?",
          answer:
            "No siempre. Un recorte, la compresión o un pequeño cambio de luz pueden cambiar los píxeles muestreados y los colores agrupados.",
        },
        {
          question: "¿Esto sustituye una guía de estilo de marca?",
          answer:
            "No. Es una paleta de partida a partir de una foto. Los colores oficiales de una marca deben seguir saliendo de sus propias especificaciones.",
        },
        {
          question: "¿Puedo usar la paleta en el comprobador de contraste?",
          answer:
            "Sí. Copia un valor HEX y pégalo en el [Comprobador de contraste de color](/tools/color-contrast-checker) para probarlo con un texto o un fondo.",
        },
        {
          question: "¿Una foto muy recargada da resultados confusos?",
          answer:
            "Puede ocurrir. Muchos detalles pequeños compiten en la muestra. Una imagen más plana, o un recorte de la zona que te importa hecho con el [Recortador de imágenes](/tools/image-cropper), suele dar una lista más clara.",
        },
        {
          question: "¿La vista previa de 96 píxeles es lo mismo que reducir el archivo que descargo?",
          answer:
            "No. El lado de 96 píxeles solo se usa para el muestreo. Tu archivo original no se redimensiona ni se descarga como una imagen más pequeña.",
        },
    ],
    "pdf-page-counter": [
        {
          question: "¿Qué información se muestra además del número de páginas?",
          answer:
            "La página también muestra el nombre del archivo y el tamaño, junto con el número de páginas.",
        },
        {
          question: "¿Se cuentan las páginas en blanco y las portadas?",
          answer:
            "Sí. Las páginas en blanco y las portadas entran en el recuento.",
        },
        {
          question: "¿El contador de páginas funciona en un navegador móvil?",
          answer:
            "Sí. Puedes abrir un PDF y leer el recuento en un teléfono o una tableta. El archivo no se sube.",
        },
        {
          question: "¿De qué tamaño puede ser un PDF para que se cuente?",
          answer:
            "Se rechazan los archivos de más de 20 MB. No se cuenta un archivo que no es un PDF, uno dañado o uno protegido con contraseña.",
        },
        {
          question: "¿Esta herramienta divide, une o extrae páginas?",
          answer:
            "No. Solo indica el recuento. Para copiar páginas a un archivo nuevo, usa el [Dividir PDF](/tools/pdf-splitter). Para unir archivos, usa el [Unir PDF](/tools/pdf-merger).",
        },
        {
          question: "¿Contar las páginas cambia el PDF?",
          answer:
            "No. El archivo en tu dispositivo no se modifica.",
        },
        {
          question: "¿Por qué un visor de mi ordenador podría mostrar un recuento distinto?",
          answer:
            "Lo más habitual es que no sea la misma copia, o que una de las dos esté dañada. Esta página incluye las páginas en blanco y las portadas, y no cuenta un archivo protegido con contraseña.",
        },
        {
          question: "¿Puedo contar las páginas de un PDF protegido con contraseña si la conozco?",
          answer:
            "Esta página no tiene un campo de contraseña. Un archivo protegido con contraseña no se cuenta.",
        },
        {
          question: "¿Una página desplegada cuenta como una página o como dos?",
          answer:
            "El recuento es el número de páginas del PDF, no el de hojas físicas después de imprimir. Una página doble que está guardada como dos páginas cuenta como dos.",
        },
        {
          question: "¿Puedo ver una miniatura de cada página?",
          answer:
            "No. Esta página indica el recuento, el nombre del archivo y el tamaño. No previsualiza páginas. Para imágenes de las páginas, usa [PDF a JPG](/tools/pdf-to-jpg).",
        },
        {
          question: "¿Un portafolio PDF o un archivo con adjuntos se cuenta de forma especial?",
          answer:
            "La página indica el recuento de páginas del documento cuando el archivo se abre como PDF. Los adjuntos y los portafolios no se listan por separado, y un archivo que no se abre no se cuenta.",
        },
        {
          question: "¿Cómo compruebo el recuento antes de unir archivos?",
          answer:
            "Cuenta cada PDF aquí y suma los números. El [Unir PDF](/tools/pdf-merger) permite como máximo 80 páginas combinadas, así que comprobarlo antes puede evitar una unión rechazada.",
        },
        {
          question: "¿Un PDF escaneado sigue teniendo un recuento de páginas?",
          answer:
            "Sí, si el archivo es un PDF legible y pesa 20 MB o menos. El hecho de que esté escaneado no impide el recuento; solo afecta a las herramientas que necesitan una capa de texto.",
        },
        {
          question: "¿Puedo copiar el recuento de páginas para usarlo en un documento?",
          answer:
            "Sí. Lee el recuento en la página y cópialo a tus notas. El PDF en sí no se modifica.",
        },
        {
          question: "¿La herramienta cuenta páginas en archivos de Word o en imágenes?",
          answer:
            "No. Un archivo que no es un PDF no se cuenta. Conviértelo o expórtarlo a PDF primero y luego abre ese PDF aquí.",
        },
    ],
  },
  ar: {
    "image-compressor": [
        {
          question: "هل ضاغط الصور مجاني؟",
          answer:
            "نعم. يمكنك إعادة ترميز ملف JPG أو PNG أو WebP هنا من دون دفع أو إنشاء حساب.",
        },
        {
          question: "ما الصيغ التي يمكنني ضغطها؟",
          answer:
            "تفتح هذه الصفحة دائمًا ملفات JPG وPNG وWebP، ويمكنك الحفظ بهذه الصيغ. ويظهر AVIF كمخرجات فقط إذا كان هذا المتصفح قادرًا على ترميزه. وتُفتح ملفات HEIC أو AVIF فقط إذا كان هذا المتصفح قادرًا على فك ترميزها. وتُرفض ملفات GIF وSVG.",
        },
        {
          question: "كيف يعمل شريط الجودة؟",
          answer:
            "تتراوح الجودة من 10 إلى 100 وتبدأ من 80. وهي تغيّر ترميز JPEG وWebP وAVIF. ولا تغيّر طريقة كتابة PNG في هذه الصفحة، لأن مخرجات PNG هنا بلا فقدان.",
        },
        {
          question: "هل يمكنني ضغط صورة إلى حجم مستهدف، مثل أقل من 200 كيلوبايت؟",
          answer:
            "نعم. يمكنك تشغيل الضغط إلى حجم ملف مستهدف وإدخال حد مثل 200 كيلوبايت، أو استخدام قيمة جاهزة. وبالنسبة إلى JPG وWebP وAVIF تبحث الصفحة عن جودة تساوي ذلك الحجم أو تقل عنه. وإذا بقيت أدنى جودة أكبر من الحد، يمكنك أيضًا تصغير الأبعاد. وتبلغ الصفحة بصراحة عن الحجم النهائي عندما يتعذّر بلوغ الهدف. وPNG بلا فقد، لذا اختر JPG أو WebP، أو صغّر الأبعاد، إذا احتجت إلى بلوغ حد معيّن.",
        },
        {
          question: "هل يمكنني ضغط عدة صور دفعة واحدة أو تنزيل ملف ZIP؟",
          answer:
            "نعم. يمكنك إضافة حتى 20 صورة، وضغطها في هذا التبويب، ومراجعة كل نتيجة. وإذا نجح أكثر من ملف، فإن «تنزيل الكل كملف ZIP» يحزم تلك الملفات. وتُنزَّل الصورة الواحدة كملفها، لا كملف ZIP.",
        },
        {
          question: "ما حدود حجم الملف وأبعاد البكسل؟",
          answer:
            "يجب ألا يتجاوز حجم كل صورة 25 ميغابايت، وألا يتجاوز أي ضلع 8,192 بكسل. ويمكن أن يشمل التشغيل حتى 20 ملفًا. يُرفض أي ملف خارج هذه الحدود.",
        },
        {
          question: "هل ضغط ملف JPEG أكثر من مرة يجعله أسوأ؟",
          answer:
            "قد يحدث ذلك. JPEG وWebP وAVIF في هذه الصفحة فقودة للجودة، لذلك قد يضيف ضغط JPEG مرة أخرى مزيدًا من التشوّه. ابدأ من الأصل متى أمكن.",
        },
        {
          question: "هل يستبدل الضغط الصورة الموجودة على جهازي؟",
          answer:
            "لا. يبقى الملف الأصلي في مكانه. تنزّل ملفًا جديدًا، ويعمل زر إعادة التعيين على مسح الصورة من هذه العلامة فقط.",
        },
        {
          question: "متى أختار WebP كمخرجات؟",
          answer:
            "اختر WebP عندما يقبل المكان الذي ستستخدم فيه الصورة هذه الصيغة وتريد ملفًا أصغر من JPEG بمظهر مشابه. إذا كان النموذج يقبل JPG أو PNG فقط، فاختر تلك الصيغة.",
        },
        {
          question: "هل يمكنني التراجع عن الضغط إذا لم يعجبني الناتج؟",
          answer:
            "نعم. الملف الأصلي على جهازك لم يتغيّر. حرّك شريط الجودة واضغط مرة أخرى، أو أعد التعيين واختر الملف من جديد.",
        },
        {
          question: "هل هناك حد يومي أو جدار لتسجيل الدخول؟",
          answer:
            "لا. لا يوجد حساب ولا سقف يومي في هذه الصفحة. الحدود العملية هي 20 ملفًا في كل تشغيل، و25 ميغابايت لكل ملف، وطول ضلع 8,192 بكسل.",
        },
        {
          question: "ما الفرق بين هذا وبين محوّل الصور؟",
          answer:
            "تعيد هذه الصفحة ترميز JPG أو PNG أو WebP لتقليل حجم الملف. أما [محوّل الصور](/tools/image-converter) فيحوّل JPG إلى PNG أو PNG إلى JPG، مع لون تعبئة للبكسلات الشفافة.",
        },
        {
          question: "هل أحتاج إلى اتصال بالإنترنت بعد تحميل الصفحة؟",
          answer:
            "يتم الضغط داخل هذه العلامة. تحتاج إلى اتصال لفتح الصفحة، لكن الصورة لا تُرفع إلى خادم من أجل ضغطها.",
        },
        {
          question: "هل يمكنني استخدام الملف المضغوط في بريد أو موقع؟",
          answer:
            "نعم. نزّل الملف أو ملف ZIP وأرفقه أو ارفعه حيث تحتاج. تحقق من أن الوجهة تقبل الصيغة التي اخترتها، ولا سيما إذا اخترت WebP أو AVIF.",
        },
    ],
    "image-resizer": [
        {
          question: "كيف أحدّد عرضًا وارتفاعًا دقيقين؟",
          answer:
            "أدخل قيمًا صحيحة بالبكسل من 1 إلى 8,192. مع قفل النسبة، يحدّث تغيير أحد الضلعين الضلع الآخر. أوقف القفل فقط إذا أردت القيمتين كما كتبتهما.",
        },
        {
          question: "ما الصيغ التي يمكنني تغيير حجمها؟",
          answer:
            "تُفتح هنا ملفات JPG وPNG وWebP. ولا تُقبل ملفات GIF وHEIC وSVG في هذه الصفحة.",
        },
        {
          question: "هل يمكنني قص الصورة أو تدويرها هنا؟",
          answer:
            "لا. هذه الصفحة تحجّم الصورة كاملة فقط. لقص منطقة، استخدم [قص الصور](/tools/image-cropper). لا يتوفر هنا تدوير ولا إزالة للخلفية.",
        },
        {
          question: "ماذا يحدث إذا أوقفت قفل النسبة؟",
          answer:
            "يمكنك كتابة العرض والارتفاع كلًّا على حدة. إذا لم تطابق هذه الأرقام نسبة الأصل، فستُمَدَّد الصورة.",
        },
        {
          question: "هل تعمل أداة تغيير الحجم على هاتف محمول؟",
          answer:
            "نعم. يمكنك فتح ملف JPG أو PNG أو WebP وتحديد الحجم بالبكسل في متصفح الجوال. يبقى العمل في هذه العلامة.",
        },
        {
          question: "هل تغيير الحجم يستبدل الملف الأصلي؟",
          answer:
            "لا. تنزّل صورة جديدة. ويبقى الملف على جهازك كما كان.",
        },
        {
          question: "هل يمكنني تغيير حجم أكثر من صورة في تمريرة واحدة؟",
          answer:
            "لا. تغيّر هذه الصفحة حجم صورة واحدة في كل مرة.",
        },
        {
          question: "لماذا أغيّر الحجم قبل الضغط؟",
          answer:
            "عدد بكسلات أقل يعني عادة ملفًا أصغر. التسلسل الشائع هو تغيير الحجم إلى ما تحتاجه ثم ضغط الناتج بـ[ضاغط الصور](/tools/image-compressor).",
        },
        {
          question: "ما الحجم المناسب لصورة معاينة على وسائل التواصل؟",
          answer:
            "تستخدم كثير من معاينات الروابط 1200 في 630 بكسل. أدخل العرض والارتفاع المطلوبين، أو اقصُ الشكل أولًا في [قص الصور](/tools/image-cropper) ثم غيّر الحجم.",
        },
        {
          question: "هل أبعاد المخرجات مطابقة تمامًا لما أكتبه؟",
          answer:
            "نعم، عندما يكون الضلعان أعدادًا صحيحة من 1 إلى 8,192 بكسل. مع القفل، يُحسب الضلع الثاني من الأول حتى تبقى النسبة كما هي.",
        },
        {
          question: "هل يمكنني تكبير صورة صغيرة من دون أن تبدو ناعمة؟",
          answer:
            "يمكنك كتابة حجم أكبر، لكن هذه الصفحة لا تخترع التفاصيل الناقصة. تكبير صورة صغيرة يبدو غالبًا ضبابيًا أو متكتلًا.",
        },
        {
          question: "هل يمكنني الحفاظ على شفافية PNG؟",
          answer:
            "نعم. يحتفظ ملف PNG ذو الخلفية الشفافة بشفافيته عند تغيير الحجم، لأن هذه الصفحة لا تسطح الصورة على لون تعبئة.",
        },
        {
          question: "هل يمكنني التغيير بنسبة مئوية من الحجم الأصلي؟",
          answer:
            "لا يوجد حقل للنسبة المئوية. احسب العرض أو الارتفاع الجديد بالبكسل واكتب ذلك الرقم، مع إبقاء قفل النسبة إن أردت أن يتبعه الضلع الآخر.",
        },
        {
          question: "هل يبقى التنزيل بالصيغة نفسها التي فتحتها؟",
          answer:
            "نعم. يبقى JPG بصيغة JPG وPNG بصيغة PNG وWebP بصيغة WebP. لتغيير الصيغة استخدم [محوّل الصور](/tools/image-converter) أو، لمخرجات WebP عبر الضغط، [ضاغط الصور](/tools/image-compressor).",
        },
        {
          question: "ماذا يحدث إذا أدخلت 0 أو كسرًا عشريًا لأحد الضلعين؟",
          answer:
            "يجب أن يكون العرض والارتفاع أعدادًا صحيحة من 1 إلى 8,192 بكسل. لا يُقبل الصفر ولا العدد السالب ولا الكسر العشري.",
        },
    ],
    "image-cropper": [
        {
          question: "ما الصيغ التي يمكنني قصّها؟",
          answer:
            "تُفتح هنا ملفات JPG وPNG وWebP. ولا تُفتح ملفات GIF وHEIC وSVG.",
        },
        {
          question: "كيف أقص صورة ملف شخصي مربعة؟",
          answer:
            "اختر إطار 1:1، ثم اسحب الصندوق وغيّر حجمه فوق المنطقة المطلوبة ونزّل الملف. الملف هو البكسلات الأصلية داخل ذلك الإطار.",
        },
        {
          question: "هل يمكنني تدوير الصورة أو تطبيق فلاتر في هذه الصفحة؟",
          answer:
            "لا. لا يتوفر هنا تدوير ولا فلاتر ولا فرشاة إصلاح. التنزيل هو فقط البكسلات داخل الإطار الذي رسمته.",
        },
        {
          question: "ما حد حجم الملف وأبعاد البكسل؟",
          answer:
            "يُرفض الملف الذي يتجاوز 25 ميغابايت، أو الذي يزيد أحد أضلاعه على 8,192 بكسل.",
        },
        {
          question: "هل القص يستبدل الصورة الأصلية؟",
          answer:
            "لا. يبقى الملف على جهازك كما كان. تنزّل صورة جديدة للمنطقة المقصوصة.",
        },
        {
          question: "هل يمكنني قص عدة صور دفعة واحدة؟",
          answer:
            "لا. تقص هذه الصفحة صورة واحدة في كل مرة.",
        },
        {
          question: "هل تعمل أداة القص في متصفح الجوال؟",
          answer:
            "نعم. يمكنك سحب الإطار على هاتف أو جهاز لوحي. يبقى العمل في هذه العلامة ولا تُرفع الصورة.",
        },
        {
          question: "هل يمكنني الحفاظ على خلفية PNG الشفافة بعد القص؟",
          answer:
            "نعم. تبقى البكسلات الشفافة داخل الإطار شفافة في التنزيل. وتُحذف البكسلات خارج الإطار.",
        },
        {
          question: "ما الفرق بين القص وتغيير الحجم؟",
          answer:
            "القص يُبقي منطقة ويتخلّص من الباقي من دون تحجيم تلك المنطقة. أما [تغيير حجم الصور](/tools/image-resizer) فيحجّم الصورة كاملة إلى عرض وارتفاع جديدين.",
        },
        {
          question: "ماذا يفعل خيار النسبة الحرة؟",
          answer:
            "الخيار الحر يتيح سحب أي مستطيل. أما 1:1 و4:3 و16:9 فتثبت الإطار على تلك النسبة أثناء تحريكه أو تغيير حجمه.",
        },
        {
          question: "هل يمكنني القص بنسبة مخصصة مثل 9:16؟",
          answer:
            "لا يوجد إعداد جاهز 9:16. استخدم الخيار الحر وشكّل الصندوق بالعين، أو اقص إطار 16:9 أو 1:1 إذا كان أقرب إلى ما تحتاج.",
        },
        {
          question: "هل يكون القص المنزّل بنفس دقة المنطقة المحددة؟",
          answer:
            "نعم. التنزيل هو البكسلات الأصلية داخل الإطار، وليس نسخة مصغّرة أو مُحسَّنة من تلك المنطقة.",
        },
        {
          question: "ماذا يحدث إذا كان الصندوق صغيرًا جدًا؟",
          answer:
            "ما زال بإمكانك تنزيل منطقة صغيرة جدًا، لكن القص الصغير يحتوي على قليل من البكسلات وسيبدو ناعمًا إذا كبّرته لاحقًا.",
        },
        {
          question: "هل يمكنني العودة وتغيير الإطار بعد التنزيل؟",
          answer:
            "نعم. الملف الأصلي ما زال على جهازك. عدّل الصندوق ونزّل مرة أخرى، أو أعد التعيين واختر الملف من جديد.",
        },
        {
          question: "هل ينبغي القص قبل الضغط؟",
          answer:
            "عادة نعم، إذا كنت تحتاج جزءًا من الصورة فقط. اقص أولًا حتى لا تضغط بكسلات ستحذفها، ثم استخدم [ضاغط الصور](/tools/image-compressor) إذا كنت تحتاج أيضًا ملفًا أصغر.",
        },
    ],
    "image-converter": [
        {
          question: "ما التحويلات المتوفرة؟",
          answer:
            "تحوّل هذه الصفحة ملف JPG إلى PNG، أو PNG إلى JPG. ولا تُحوَّل هنا صيغ WebP أو GIF أو HEIC.",
        },
        {
          question: "كيف أختار لون الخلفية لملف PNG شفاف؟",
          answer:
            "عند التحويل من PNG إلى JPG، اختر أولًا لون تعبئة. لا يستطيع JPG تخزين بكسل شفاف، لذلك يُكتب ذلك اللون خلف أي مناطق شفافة قبل حفظ JPEG.",
        },
        {
          question: "هل تحويل JPG إلى PNG يستعيد الجودة المفقودة؟",
          answer:
            "لا. التحويل من JPG إلى PNG يحافظ على الضرر الذي أدخله JPEG أصلًا. ملف PNG نسخة بلا فقدان للصورة كما تبدو الآن، وليس استعادة للصورة الأصلية.",
        },
        {
          question: "هل يمكنني تحويل WebP أو GIF أو HEIC هنا؟",
          answer:
            "لا. لا تُحوَّل تلك الصيغ في هذه الصفحة. إذا كان ملف JPG أو PNG أو WebP يحتاج فقط إلى حجم أصغر، فاستخدم [ضاغط الصور](/tools/image-compressor).",
        },
        {
          question: "هل يعمل المحوّل على هاتف محمول؟",
          answer:
            "نعم. يمكنك اختيار JPG أو PNG وتنزيل الصيغة الأخرى في متصفح الجوال. لا يُرفع الملف.",
        },
        {
          question: "هل يستبدل التحويل الملف الأصلي؟",
          answer:
            "لا. تنزّل ملفًا جديدًا. ويبقى الأصل على جهازك.",
        },
        {
          question: "هل يمكنني تحويل عدة صور دفعة واحدة؟",
          answer:
            "لا. تحوّل هذه الصفحة صورة واحدة في كل مرة.",
        },
        {
          question: "ما حدود الحجم وأبعاد البكسل؟",
          answer:
            "يُرفض الملف الذي يتجاوز 25 ميغابايت، أو الذي يزيد أحد أضلاعه على 8,192 بكسل، وكذلك الصيغ التي لا تفتحها هذه الصفحة.",
        },
        {
          question: "متى ينبغي تحويل لقطة شاشة إلى PNG؟",
          answer:
            "إذا كانت اللقطة PNG أصلًا، فالأفضل عادة إبقاؤها PNG حتى يبقى النص والحواف المسطحة حادة. تحويلها إلى JPG قد يضيف تشوّهًا حول النص.",
        },
        {
          question: "هل يمكنني تحويل صورة فوتوغرافية إلى PNG لتصغيرها؟",
          answer:
            "عادة لا. غالبًا يصبح JPG الفوتوغرافي ملف PNG أكبر لأن PNG بلا فقدان. استخدم [ضاغط الصور](/tools/image-compressor) إذا أردت صورة أصغر.",
        },
        {
          question: "هل يوجد شريط جودة للتحويل من PNG إلى JPG؟",
          answer:
            "يكتب التحويل ملف JPEG للصورة بعد تعبئة البكسلات الشفافة. استخدم [ضاغط الصور](/tools/image-compressor) إذا أردت بعد ذلك ضبط جودة JPEG أو WebP.",
        },
        {
          question: "هل يمكنني الإبقاء على اسم الملف نفسه بعد التحويل؟",
          answer:
            "يستخدم التنزيل امتداد الصيغة الجديدة. يمكنك إعادة تسمية الملف على جهازك بعد حفظه.",
        },
        {
          question: "هل يغيّر التحويل من PNG إلى JPG أبعاد الصورة أيضًا؟",
          answer:
            "لا. يبقى العرض والارتفاع كما هما. لتغيير الحجم بالبكسل استخدم [تغيير حجم الصور](/tools/image-resizer).",
        },
        {
          question: "لماذا قد يبدو ملف JPG المحوّل مختلفًا قليلًا؟",
          answer:
            "JPEG فقود للجودة، لذلك قد تتغيّر الحواف الدقيقة. ويكتسب ملف PNG الشفاف أيضًا لون التعبئة الذي اخترته في كل بكسل كان شفافًا.",
        },
        {
          question: "هل يختلف هذا عن تغيير امتداد الملف يدويًا؟",
          answer:
            "نعم. إعادة تسمية ملف .png إلى .jpg لا تحوّل البكسلات. هذه الصفحة تعيد ترميز الصورة فعلًا إلى الصيغة التي تختارها.",
        },
    ],
    "pdf-to-jpg": [
        {
          question: "هل محوّل PDF إلى JPG مجاني؟",
          answer:
            "نعم. تحويل صفحات PDF إلى صور JPEG مجاني ولا يتطلب حسابًا.",
        },
        {
          question: "هل يمكنني تنزيل PNG أو WebP بدل JPEG؟",
          answer:
            "نعم. اختر JPG أو PNG أو WebP قبل التحويل. وعندما تكون أكثر من صفحة جاهزة، يمكنك تنزيلها كلها في ملف ZIP. ونتيجة الصفحة الواحدة تُنزَّل كذلك الملف.",
        },
        {
          question: "هل يستخرج هذا الصور المضمّنة في ملف PDF؟",
          answer:
            "لا. كل ناتج هو صورة للصفحة كاملة، وليس مجموعة صور مستخرجة من الملف.",
        },
        {
          question: "هل يعمل المحوّل في متصفح الجوال؟",
          answer:
            "نعم. يمكنك فتح PDF وتنزيل صور JPEG للصفحات على هاتف أو جهاز لوحي. يبقى الملف في هذه العلامة ولا يُرفع.",
        },
        {
          question: "هل يغيّر التحويل ملف PDF الأصلي؟",
          answer:
            "لا. يبقى ملف PDF على جهازك كما هو. وتنزّل ملفات JPEG جديدة.",
        },
        {
          question: "كم صفحة يمكنني معاينتها قبل التصدير؟",
          answer:
            "تغطي المصغّرات أول 12 صفحة. وما زال بإمكانك تصدير الصفحة الأولى أو الصفحات التي تعلّمها أو كل الصفحات، ضمن حد 40 صفحة.",
        },
        {
          question: "بأي مقياس تُرسم صور JPEG؟",
          answer:
            "الافتراضي هو 108 نقطة في البوصة، وهو نفس مقياس 1.5× السابق. ويمكنك أيضًا اختيار 72 أو 150 أو 300 نقطة في البوصة. ويُخفَّض المقياس عندما تتجاوز الصفحة ضلعًا أطول يبلغ 4,096 بكسل.",
        },
        {
          question: "هل يمكنني تحويل عدة ملفات PDF دفعة واحدة؟",
          answer:
            "لا. تحوّل هذه الصفحة ملف PDF واحدًا في كل مرة.",
        },
        {
          question: "هل يتحوّل PDF الممسوح إلى صورة واضحة؟",
          answer:
            "تحصل على صورة لكل صفحة كما تبدو، بما في ذلك المسح الضوئي. هذا لا يحدّ المسح الضبابي ولا يستخرج النص. للكلمات من طبقة نص استخدم [تحويل PDF إلى نص](/tools/pdf-to-text).",
        },
        {
          question: "لماذا قد تبدو صفحة طويلة أصغر مما أتوقع؟",
          answer:
            "يتوقف الرسم عند ضلع أطول يبلغ 4,096 بكسل، ويُخفَّض مقياس 1.5 عند الحاجة حتى تبقى الصفحة داخل ذلك الحد.",
        },
        {
          question: "هل يمكنني اختيار إعداد لجودة JPEG؟",
          answer:
            "نعم. لـJPG وWebP، يبدأ شريط الجودة عند 80. والقيم الأدنى عادة تصنع ملفًا أصغر. وPNG بلا فقد، لذا لا ينطبق الشريط. ولا يوجد حجم ملف مستهدف في هذه الصفحة.",
        },
        {
          question: "ماذا لو احتجت الغلاف فقط؟",
          answer:
            "صدّر الصفحة الأولى، أو علّم الصفحة 1 فقط إذا كنت تختار الصفحات يدويًا، ثم نزّل صورة JPEG تلك.",
        },
        {
          question: "هل تظهر حقول النماذج والتعليقات في الصورة؟",
          answer:
            "ملف JPEG صورة للصفحة كما رُسمت. ما لا يُرسم في تلك المعاينة لن يظهر. هذه ليست تصديرًا لقيم النموذج.",
        },
        {
          question: "ماذا يحدث إذا زاد حجم الملف على 20 ميغابايت؟",
          answer:
            "يتوقف الرسم عند 20 ميغابايت و40 صفحة وضلع أطول 4,096 بكسل. يُرفض الملف الأكبر أو الذي يحتوي صفحات أكثر.",
        },
    ],
    "pdf-merger": [
        {
          question: "كيف أختار ترتيب ملفات PDF؟",
          answer:
            "أضف من ملفين إلى عشرة، ثم رتّبها بالترتيب الذي تريد ظهور الصفحات به. يتبع الملف المدمج تلك القائمة.",
        },
        {
          question: "كم ملفًا وكم صفحة يمكنني دمجها؟",
          answer:
            "تحتاج إلى ملفين على الأقل ولا تزيد على 10. ويجب أن يبقى مجموع الصفحات المجمّعة 80 أو أقل.",
        },
        {
          question: "هل يعمل الدمج على هاتف محمول؟",
          answer:
            "نعم. يمكنك إضافة ملفات PDF وتنزيل الملف المدمج في متصفح الجوال. لا تُرفع الملفات إلى خادم.",
        },
        {
          question: "هل يغيّر الدمج ملفات PDF الأصلية على جهازي؟",
          answer:
            "لا. يبقى كل ملف مصدر كما كان. وتنزّل ملف PDF جديدًا مدمجًا.",
        },
        {
          question: "هل يمكنني دمج الملف نفسه أكثر من مرة؟",
          answer:
            "يمكنك إضافة الملفات بالترتيب الذي تحتاجه. وما تزال الصفحة تطبق حدّي الملفات العشرة والصفحات الثمانين على المجموعة.",
        },
        {
          question: "هل تبقى النماذج القابلة للتعبئة نماذج بعد الدمج؟",
          answer:
            "لا تُسطَّح النماذج، وهذه الصفحة لا تضمن استمرار عمل الحقول في الملف المدمج. كما لا يُزال التشفير.",
        },
        {
          question: "ماذا يحدث إذا كان أحد الملفات محميًا بكلمة مرور؟",
          answer:
            "الملف المحمي بكلمة مرور لا يُفتح، لذلك لا يمكن إدراجه. أزل كلمة المرور في أداة أخرى أولًا إن كان مسموحًا لك، ثم أضف الملف هنا.",
        },
        {
          question: "هل يمكنني إضافة غلاف إلى تقرير؟",
          answer:
            "نعم. أضف PDF الغلاف أولًا ثم التقرير، وادمجهما ما دام مجموع الصفحات 80 أو أقل.",
        },
        {
          question: "هل هناك حد لحجم الملف إضافة إلى حد الصفحات؟",
          answer:
            "الحدود الثابتة في هذه الصفحة هي من ملفين إلى عشرة و80 صفحة مجمّعة، إضافة إلى رفض الملفات المحمية بكلمة مرور. إذا لم يُفتح ملف، فافحص تلك الحدود أولًا.",
        },
        {
          question: "هل يمكنني إزالة ملف قبل الدمج؟",
          answer:
            "نعم. أخرجه من القائمة، وأعد ترتيب ما تبقّى، وادمج عندما يبقى ملفان على الأقل.",
        },
        {
          question: "هل يقلل الدمج حجم الملف؟",
          answer:
            "لا. هذه الصفحة تجمع الملفات ولا تضغطها. لمحاولة تصغير PDF استخدم [ضاغط PDF](/tools/pdf-compressor).",
        },
        {
          question: "هل يمكنني تقسيم الملف المدمج لاحقًا؟",
          answer:
            "نعم. نزّل PDF المدمج ثم افتحه في [تقسيم PDF](/tools/pdf-splitter) لنسخ صفحات مختارة إلى ملف جديد.",
        },
        {
          question: "هل تبقى الإشارات المرجعية أو المخططات من كل ملف؟",
          answer:
            "تجمع هذه الصفحة محتوى الصفحات بالترتيب الذي تحدده. وهي لا تضمن الاحتفاظ بالإشارات أو المخططات أو المرفقات من الملفات المصدر.",
        },
        {
          question: "ماذا لو تجاوز مجموع الصفحات 80؟",
          answer:
            "يُرفض الدمج حتى تبقى المجموعة عند 80 صفحة أو أقل. قسّم ملفًا طويلًا أولًا، أو أزل بعض ملفات PDF من القائمة.",
        },
        {
          question: "هل يمكنني دمج ملفات ممسوحة مع ملفات رقمية الأصل؟",
          answer:
            "نعم، إذا فُتح كل ملف وبقيت أعداد الصفحات والملفات ضمن الحدود. يُعامل المسح كصفحات، لا كمصدر لنص يمكن استخراجه.",
        },
        {
          question: "كيف أبدأ من جديد؟",
          answer:
            "امسح القائمة وأضف ملفات PDF مرة أخرى بالترتيب الذي تريد. لا يُحفظ شيء من المحاولة السابقة إلا الملفات التي ما تزال على جهازك.",
        },
        {
          question: "هل يُنزَّل PDF المدمج كملف واحد؟",
          answer:
            "نعم. الناتج ملف PDF واحد يمكنك حفظه على جهازك.",
        },
    ],
    "pdf-splitter": [
        {
          question: "كيف أكتب نطاق صفحات؟",
          answer:
            "استخدم الفواصل والشرطات، مثل 1-3,6. تبدأ أرقام الصفحات من 1. يُرفض النطاق المعكوس مثل 5-2، وكذلك أي صفحة غير موجودة في الملف.",
        },
        {
          question: "كم صفحة يمكن أن يحتوي الملف الجديد؟",
          answer:
            "يمكن أن يحتوي الملف الجديد على 80 صفحة كحد أقصى. إذا احتجت أكثر من ذلك، كرّر التقسيم مع إبقاء كل نطاق ضمن 80 صفحة.",
        },
        {
          question: "هل تعمل أداة التقسيم على هاتف محمول؟",
          answer:
            "نعم. يمكنك إدخال نطاق وتنزيل PDF الجديد في متصفح الجوال. لا يُرفع الملف الأصلي.",
        },
        {
          question: "هل يمكنني حذف وسط المستند والإبقاء على الباقي في ملف واحد؟",
          answer:
            "نعم. أدخل الصفحات التي تريد الإبقاء عليها، مثل 1-2,8-10، ونزّل ملف PDF جديدًا يحتوي تلك الصفحات فقط.",
        },
        {
          question: "ماذا يحدث إذا كتبت صفحة غير موجودة في الملف؟",
          answer:
            "يُرفض ذلك النطاق. تحقق أولًا من عدد الصفحات بـ[عدّاد صفحات PDF](/tools/pdf-page-counter) إذا لم تكن متأكدًا من عدد صفحات الملف.",
        },
        {
          question: "هل يُقسَّم هنا ملف PDF مقفل أو محمي بكلمة مرور؟",
          answer:
            "الملف المقفل لا يُفتح هنا، لذلك لا يمكن تقسيمه. ولا يتغيّر الأصل على جهازك.",
        },
        {
          question: "هل يقلّص التقسيم الصفحات؟",
          answer:
            "لا. الملف الجديد نسخة من الصفحات التي اخترتها. لمحاولة تصغير PDF استخدم [ضاغط PDF](/tools/pdf-compressor).",
        },
        {
          question: "هل يمكنني استخراج صفحة واحدة؟",
          answer:
            "نعم. أدخل رقم تلك الصفحة، مثل 3، ونزّل ملف PDF من صفحة واحدة.",
        },
        {
          question: "هل ترتيب صفحات الملف الجديد هو ترتيب نطاقي؟",
          answer:
            "نعم. تُنسخ الصفحات بالترتيب الذي تدرجها به، ما دامت كل الأرقام موجودة في الملف والنطاق غير معكوس.",
        },
        {
          question: "هل يمكنني التراجع عن تقسيم؟",
          answer:
            "لا يوجد ما يُتراجع عنه في الأصل لأنه لم يتغيّر. احذف التنزيل إن لم تعد بحاجة إليه ثم نفّذ نطاقًا مختلفًا.",
        },
        {
          question: "هل يستخرج هذا صورًا أو نصًا من الصفحات؟",
          answer:
            "لا. الناتج ملف PDF من الصفحات التي اخترتها. لصور الصفحات استخدم [تحويل PDF إلى JPG](/tools/pdf-to-jpg). ولطبقة النص استخدم [تحويل PDF إلى نص](/tools/pdf-to-text).",
        },
        {
          question: "ماذا لو احتجت كل صفحة في ملف خاص؟",
          answer:
            "تكتب هذه الصفحة ملف PDF جديدًا في كل تشغيل. كرّر التقسيم لكل صفحة، أو استخدم أداة أخرى إذا احتجت مجلدًا من ملفات الصفحة الواحدة في خطوة واحدة.",
        },
        {
          question: "هل تُدرج الصفحات الفارغة إذا حددتها؟",
          answer:
            "نعم. إذا كانت الصفحة المحددة فارغة فإنها تُنسخ مع ذلك إلى PDF الجديد.",
        },
        {
          question: "هل يمكنني إعادة ترتيب الصفحات من دون حذف أي منها؟",
          answer:
            "يمكنك إدراج الصفحات بترتيب جديد في النطاق، ضمن حد 80 صفحة، وتنزيل ذلك كملف جديد. يبقى الترتيب الأصلي على جهازك كما هو.",
        },
        {
          question: "هل هناك حد لحجم الملف؟",
          answer:
            "الملف الذي لا يُفتح — لأنه تالف أو محمي بكلمة مرور أو غير قابل للقراءة — لا يمكن تقسيمه. كما أن الملف الجديد محدود بـ80 صفحة.",
        },
    ],
    "pdf-to-text": [
        {
          question: "كيف أستخرج النص من بعض الصفحات فقط؟",
          answer:
            "اختر كل الصفحات أو صفحة واحدة أو نطاقًا مثل 1-3,5. تُقرأ فقط الصفحات التي تطلبها.",
        },
        {
          question: "ما حدود حجم الملف وعدد الصفحات؟",
          answer:
            "تُرفض الملفات الأكبر من 20 ميغابايت أو المستندات التي تزيد على 80 صفحة. ولا يُفتح PDF المحمي بكلمة مرور.",
        },
        {
          question: "هل يعمل تحويل PDF إلى نص في متصفح الجوال؟",
          answer:
            "نعم. يمكنك فتح PDF ونسخ النص أو تنزيله على هاتف أو جهاز لوحي. لا يُرفع الملف.",
        },
        {
          question: "هل يحتفظ النص بالخطوط والتنسيق الأصليين؟",
          answer:
            "لا. تُعاد بناء فواصل الأسطر من مواضع الحروف، لذلك قد يخرج التخطيط المتقارب أو متعدد الأعمدة غير منتظم. تحصل على الكلمات لا على صفحة مصمّمة.",
        },
        {
          question: "هل يمكنني استخراج نص من فاتورة ممسوحة؟",
          answer:
            "فقط إذا كان ذلك الملف يحتوي أصلًا على طبقة نص. المسح الذي هو مجرد صورة للصفحة يعود فارغًا، لأن هذه الصفحة لا تشغّل التعرف الضوئي على الحروف.",
        },
        {
          question: "هل يغيّر الاستخراج ملف PDF؟",
          answer:
            "لا. يبقى ملف PDF على جهازك كما هو. وتنسخ النص أو تنزّله على حدة.",
        },
        {
          question: "هل يمكنني استخراج النص من عدة ملفات PDF دفعة واحدة؟",
          answer:
            "لا. تقرأ هذه الصفحة ملف PDF واحدًا في كل مرة.",
        },
        {
          question: "ماذا لو كانت طبقة النص في بعض الصفحات فقط؟",
          answer:
            "الصفحات ذات طبقة النص تقدّم كلمات. أما الصفحات التي هي صور فقط فلا تقدّم شيئًا، وقد يظهر ذلك كفجوات في الناتج.",
        },
        {
          question: "هل هذا مماثل لتحديد النص في قارئ PDF؟",
          answer:
            "إنه النوع نفسه من النص: طبقة النص المخزّنة. إذا لم تستطع تحديد كلمات في قارئ، فعادة لن تجد هذه الصفحة طبقة نص أيضًا.",
        },
        {
          question: "هل يمكنني الحصول على صورة للصفحة بدل الكلمات؟",
          answer:
            "نعم. استخدم [تحويل PDF إلى JPG](/tools/pdf-to-jpg) عندما تريد صورة JPEG للصفحة لا طبقة النص.",
        },
        {
          question: "هل تُحفظ الجداول كجداول؟",
          answer:
            "تُقرأ خلايا الجدول كنص لا كورقة حساب. وقد تخرج الأعمدة أسطرًا تحتاج إلى ترتيب في محرر.",
        },
        {
          question: "هل يعمل PDF المحمي بكلمة مرور إذا كنت أعرف الكلمة؟",
          answer:
            "لا يوجد في هذه الصفحة حقل لكلمة المرور. ولا يُفتح هنا PDF المحمي بكلمة مرور.",
        },
        {
          question: "هل يمكنني تنزيل النص كملف؟",
          answer:
            "نعم. بعد استخراج النص يمكنك نسخه أو تنزيله ثم لصقه في محرر.",
        },
        {
          question: "لماذا تبدو بعض الحروف غير مرتبة؟",
          answer:
            "يعيد المستخرج بناء الأسطر من مواضع الحروف. قد يخرج التباعد غير المعتاد أو النص المدوّر أو الأعمدة المتقاربة بترتيب مفاجئ.",
        },
        {
          question: "هل هناك حد لعدد حروف النص المستخرج؟",
          answer:
            "الحدود تخص ملف PDF نفسه: 20 ميغابايت و80 صفحة. وما يزال ملف كثيف من 80 صفحة قادرًا على إنتاج نص طويل.",
        },
    ],
    "pdf-metadata": [
        {
          question: "ما الحقول التي يمكنني عرضها ومسحها؟",
          answer:
            "يعرض العارض اسم الملف والحجم وعدد الصفحات وحقول المعلومات القياسية إن وُجدت: العنوان والمؤلف والموضوع والكلمات المفتاحية والمنشئ والمنتج والتواريخ. تؤدي إزالة البيانات الوصفية إلى مسح تلك الحقول في تنزيل جديد.",
        },
        {
          question: "هل مسح البيانات الوصفية يغيّر الكلمات في الصفحات؟",
          answer:
            "لا. يبقى نص الصفحات والتعليقات والملفات المضمّنة والصور. تُمسح فقط حقول المعلومات القياسية في الملف الجديد.",
        },
        {
          question: "ما حد عدد الصفحات؟",
          answer:
            "تُرفض المستندات التي تزيد على 80 صفحة، ولا يُفتح الملف المحمي بكلمة مرور.",
        },
        {
          question: "هل تعمل أداة البيانات الوصفية على هاتف محمول؟",
          answer:
            "نعم. يمكنك فتح PDF وتنزيل نسخة بحقول معلومات ممسوحة في متصفح الجوال. لا يُرفع الملف.",
        },
        {
          question: "هل يمسّ مسح البيانات الوصفية ملف PDF الأصلي؟",
          answer:
            "لا. تنزّل نسخة جديدة. ويبقى الملف الأصلي على جهازك كما كان.",
        },
        {
          question: "هل يمكنني تعديل العنوان أو المؤلف إلى قيمة جديدة؟",
          answer:
            "يمكن لهذه الصفحة عرض الحقول ومسحها. وهي لا تقدّم نموذجًا لكتابة عنوان أو مؤلف جديد.",
        },
        {
          question: "هل ستظهر خصائص المستند فارغة بعد ذلك في قارئ PDF؟",
          answer:
            "ينبغي أن تكون حقول المعلومات القياسية التي تمسحها هذه الصفحة فارغة في الملف الجديد. وقد تبقى بيانات خفية أخرى، لذلك هذا ليس محوًا كاملًا.",
        },
        {
          question: "هل يمكنني معالجة عدة ملفات PDF دفعة واحدة؟",
          answer:
            "لا. تقرأ هذه الصفحة الحقول وتمسحها إن اخترت ذلك في ملف واحد في كل مرة.",
        },
        {
          question: "هل يزيل هذا التعليقات أو الحواشي؟",
          answer:
            "لا. تبقى التعليقات والحواشي. تُمسح فقط حقول المعلومات القياسية.",
        },
        {
          question: "ماذا لو كان حقل المؤلف فارغًا أصلًا؟",
          answer:
            "يعرض العارض فقط الحقول الموجودة. وما يزال مسح البيانات الوصفية يكتب ملفًا جديدًا بتلك الحقول القياسية فارغة، وهذا مفيد عندما يكون بعضها مملوءًا وبعضها فارغًا.",
        },
        {
          question: "هل تُزال أيضًا بيانات XMP أو سجل المراجعة الخفي؟",
          answer:
            "لا. تستهدف هذه الصفحة حقول المعلومات القياسية المذكورة أعلاه. وقد تبقى بنى أخرى للبيانات الوصفية.",
        },
        {
          question: "هل يمكنني فحص البيانات الوصفية من دون تنزيل ملف جديد؟",
          answer:
            "نعم. افتح PDF لقراءة الحقول. ونزّل نسخة ممسوحة فقط إذا أردت إزالة تلك الحقول.",
        },
        {
          question: "هل يُظهر PDF المحمي بكلمة مرور حقول معلوماته؟",
          answer:
            "لا. الملف المحمي بكلمة مرور لا يُفتح، لذلك لا يمكن عرض الحقول أو مسحها هنا.",
        },
        {
          question: "هل ستظل محركات البحث ترى المؤلف القديم بعد مسح الحقول؟",
          answer:
            "لم يعد الملف الجديد يحمل تلك الحقول. ومن لا يزال يملك الأصل، أو نسخة رُفعت من قبل، يمكنه رؤية القيم القديمة.",
        },
        {
          question: "هل هذا مماثل لإعادة تسمية الملف؟",
          answer:
            "لا. اسم الملف وحقول المؤلف أو العنوان في المستند أمران مختلفان. إعادة التسمية لا تمسح حقول المعلومات، ومسح الحقول لا يعيد تسمية الملف على جهازك.",
        },
    ],
    "color-picker": [
        {
          question: "هل يمكنني اختيار لون من صورة فوتوغرافية؟",
          answer:
            "لا. هذه الصفحة لا تأخذ بكسلًا من صورة. لعرض الألوان الرئيسية في صورة، استخدم [محلّل ألوان الصور](/tools/image-color-analyzer).",
        },
        {
          question: "هل يمكنني اختيار لون شفاف أو شبه شفاف؟",
          answer:
            "لا. يقدّم التحكم الأصلي لون sRGB معتمًا. لا تتوفر قناة ألفا.",
        },
        {
          question: "كيف أكتب قيمة ست عشرية لدي أصلًا؟",
          answer:
            "أدخل الرمز الست عشري، مع علامة # أو من دونها، في حقل hex. يُحدَّث المنتقي وقيم RGB وHSL ليتوافقوا مع اللون نفسه.",
        },
        {
          question: "هل يعمل منتقي الألوان على هاتف محمول؟",
          answer:
            "نعم. يمكنك استخدام منتقي ألوان المتصفح أو كتابة قيمة ست عشرية على هاتف أو جهاز لوحي. لا يُرفع شيء.",
        },
        {
          question: "هل HEX وRGB وHSL ألوان مختلفة أم اللون نفسه؟",
          answer:
            "هي ثلاث كتابات للون المعتم نفسه. انسخ الصيغة التي يتوقعها ملف الأنماط أو أداة التصميم.",
        },
        {
          question: "هل يمكنني نسخ الصيغ الثلاث دفعة واحدة؟",
          answer:
            "يمكنك نسخ HEX أو RGB أو HSL من القيم المعروضة. انسخ كل صيغة تحتاجها؛ فهي تبقى اللون نفسه.",
        },
        {
          question: "هل يحوّل هذا من hex إلى RGB فقط، أم العكس أيضًا؟",
          answer:
            "اختيار اللون أو كتابته يحدّث HEX وRGB وHSL معًا. وإذا كنت تحتاج أساسًا إلى تحويل رمز hex مكتوب، فتتوفر أيضًا أداة [تحويل Hex إلى RGB](/tools/hex-to-rgb).",
        },
        {
          question: "هل يمكنني حفظ لوحة من عدة ألوان؟",
          answer:
            "تعمل هذه الصفحة على لون واحد في كل مرة ولا تخزّن لوحة. انسخ القيم التي تحتاجها إلى ملاحظاتك أو إلى CSS.",
        },
        {
          question: "هل سيبدو اللون نفسه على كل الشاشات؟",
          answer:
            "القيم بنظام sRGB. وما تزال الشاشات وملفات الألوان المختلفة قد تغيّر المظهر. لتباين النص استخدم [فاحص تباين الألوان](/tools/color-contrast-checker).",
        },
        {
          question: "هل يمكنني إدخال RGB أو HSL مباشرة؟",
          answer:
            "حقل الكتابة هو hex. ويمكنك أيضًا استخدام منتقي ألوان المتصفح. تظهر قيم RGB وHSL حتى تنسخها بعد تعيين اللون.",
        },
        {
          question: "هل مخرجات hex بأحرف كبيرة أم صغيرة؟",
          answer:
            "انسخ سلسلة hex كما تعرضها الصفحة. تعامل CSS الرمزين #1e90ff و#1E90FF على أنهما اللون نفسه.",
        },
        {
          question: "هل تعمل الأداة دون اتصال بعد تحميل الصفحة؟",
          answer:
            "يعمل المنتقي في هذه العلامة ولا يرسل اللون إلى خادم. تحتاج إلى اتصال لفتح الصفحة.",
        },
        {
          question: "هل يمكنني الحصول على متغير CSS من اللون المختار؟",
          answer:
            "لا يوجد مولّد متغيرات هنا. انسخ قيمة HEX أو RGB أو HSL والصقها في متغير في ملف الأنماط، مثل --accent: #1E90FF;.",
        },
        {
          question: "لماذا لا توجد قطارة للشاشة؟",
          answer:
            "تستخدم هذه الصفحة إدخال ألوان المتصفح وحقل hex. وهي لا تلتقط بكسلات من نوافذ أخرى أو من صورة.",
        },
        {
          question: "هل يمكنني التحقق هنا من أن لونين يحققان تباين WCAG؟",
          answer:
            "لا. انسخ اللونين واختبرهما في [فاحص تباين الألوان](/tools/color-contrast-checker)، الذي يعرض نسبة WCAG 2 ونتائج AA أو AAA.",
        },
    ],
    "image-color-analyzer": [
        {
          question: "ما صيغ الصور التي يمكنني تحليلها؟",
          answer:
            "تُفتح هنا ملفات JPG وPNG وWebP. ولا تُفتح ملفات GIF وHEIC، ويُرفض ملف أكبر من 25 ميغابايت أو يزيد أحد أضلاعه على 8,192 بكسل.",
        },
        {
          question: "كم لونًا ستعرضه اللوحة؟",
          answer:
            "يمكنك طلب 3 إلى 10 ألوان. تُبنى القائمة من نسخة أصغر مأخوذة بالعيّنة من الصورة، لذلك قد يُغفل لون نادر.",
        },
        {
          question: "لماذا قد يغيب لون أراه في الصورة؟",
          answer:
            "تُصغَّر الصورة إلى ضلع 96 بكسل قبل تجميع البكسلات، وتُتخطى البكسلات شبه الشفافة. قد لا تظهر الألوان الصغيرة أو النادرة في القائمة.",
        },
        {
          question: "هل يعمل المحلّل على هاتف محمول؟",
          answer:
            "نعم. يمكنك فتح JPG أو PNG أو WebP ونسخ الألوان المعروضة في متصفح الجوال. لا تُرفع الصورة.",
        },
        {
          question: "هل يغيّر التحليل الصورة أو يستبدلها؟",
          answer:
            "لا. لا يتغيّر الملف على جهازك. وتعرض الصفحة فقط ألوانًا من نسخة مأخوذة بالعيّنة.",
        },
        {
          question: "هل يمكنني تحليل عدة صور دفعة واحدة؟",
          answer:
            "لا. تحلّل هذه الصفحة صورة واحدة في كل مرة.",
        },
        {
          question: "هل النسب المئوية من الصورة الأصلية كاملة؟",
          answer:
            "لا. كل حصة هي من البكسلات المأخوذة بالعيّنة بعد تصغير الصورة إلى ضلع 96 بكسل وتخطي البكسلات شبه الشفافة.",
        },
        {
          question: "هل يمكنني اختيار اللون الدقيق لبكسل واحد؟",
          answer:
            "لا. تجمع هذه الأداة البكسلات المتشابهة في لوحة قصيرة. للون معتم تختاره بنفسك استخدم [منتقي الألوان](/tools/color-picker).",
        },
        {
          question: "هل تُحتسب المناطق الشفافة ضمن اللوحة؟",
          answer:
            "تُتخطى البكسلات شبه الشفافة، لذلك لا تظهر الخلفية الشفافة عادة كلون في القائمة.",
        },
        {
          question: "هل يمكنني نسخ RGB إضافة إلى HEX؟",
          answer:
            "نعم. يمكن نسخ كل لون معروض بصيغتي HEX أو RGB لأداة تصميم أو لـ CSS.",
        },
        {
          question: "هل تعطي صورتان متشابهتان اللوحة نفسها؟",
          answer:
            "ليس دائمًا. قد يغيّر القص أو الضغط أو تحول بسيط في الإضاءة البكسلات المأخوذة بالعيّنة والألوان المجمّعة.",
        },
        {
          question: "هل يغني هذا عن دليل ألوان العلامة التجارية؟",
          answer:
            "لا. هذه لوحة انطلاق من صورة. وينبغي أن تظل ألوان العلامة الرسمية آتية من مواصفات العلامة نفسها.",
        },
        {
          question: "هل يمكنني استخدام اللوحة في فاحص التباين؟",
          answer:
            "نعم. انسخ قيمة HEX والصقها في [فاحص تباين الألوان](/tools/color-contrast-checker) لاختبارها مع نص أو خلفية.",
        },
        {
          question: "هل تعطي الصورة المزدحمة نتائج مشوشة؟",
          answer:
            "قد يحدث ذلك. تتنافس تفاصيل صغيرة كثيرة في العيّنة. غالبًا ما تعطي صورة أبسط، أو قص للمنطقة التي تهمك عبر [قص الصور](/tools/image-cropper)، قائمة أوضح.",
        },
        {
          question: "هل معاينة 96 بكسل تعادل تصغير الملف الذي أنزّله؟",
          answer:
            "لا. يُستخدم ضلع 96 بكسل للعيّنة فقط. ولا يُعاد تحجيم ملفك الأصلي ولا يُنزَّل كصورة أصغر.",
        },
    ],
    "pdf-page-counter": [
        {
          question: "ما المعلومات المعروضة إضافة إلى عدد الصفحات؟",
          answer:
            "تعرض الصفحة أيضًا اسم الملف وحجمه إلى جانب عدد الصفحات.",
        },
        {
          question: "هل تُحتسب الصفحات الفارغة والأغلفة؟",
          answer:
            "نعم. تُدرج الصفحات الفارغة والأغلفة في العدد.",
        },
        {
          question: "هل يعمل عدّاد الصفحات في متصفح الجوال؟",
          answer:
            "نعم. يمكنك فتح PDF وقراءة العدد على هاتف أو جهاز لوحي. لا يُرفع الملف.",
        },
        {
          question: "ما أكبر حجم لملف PDF يمكن عدّه؟",
          answer:
            "تُرفض الملفات الأكبر من 20 ميغابايت. ولا يُعد ملف ليس PDF أو ملف تالف أو محمي بكلمة مرور.",
        },
        {
          question: "هل تقسّم هذه الأداة الصفحات أو تدمجها أو تستخرجها؟",
          answer:
            "لا. هي تعرض العدد فقط. لنسخ صفحات إلى ملف جديد استخدم [تقسيم PDF](/tools/pdf-splitter). ولدمج الملفات استخدم [دمج ملفات PDF](/tools/pdf-merger).",
        },
        {
          question: "هل يغيّر العدّ ملف PDF؟",
          answer:
            "لا. يبقى الملف على جهازك كما هو.",
        },
        {
          question: "لماذا قد يعرض عارض على حاسوبي عددًا مختلفًا؟",
          answer:
            "في الغالب لا تكون النسختان الملف نفسه، أو تكون إحداهما تالفة. تشمل هذه الصفحة الصفحات الفارغة والأغلفة، ولا تعد ملفًا محميًا بكلمة مرور.",
        },
        {
          question: "هل يمكنني عد صفحات PDF محمي بكلمة مرور إذا كنت أعرفها؟",
          answer:
            "لا يوجد في هذه الصفحة حقل لكلمة المرور. ولا يُعد الملف المحمي بكلمة مرور.",
        },
        {
          question: "هل تُحتسب الصفحة المزدوجة صفحة واحدة أم صفحتين؟",
          answer:
            "العدد هو عدد الصفحات في ملف PDF، لا عدد الأوراق بعد الطباعة. الصفحة المزدوجة المخزّنة صفحتين تُحتسب اثنتين.",
        },
        {
          question: "هل يمكنني رؤية مصغّر لكل صفحة؟",
          answer:
            "لا. تعرض هذه الصفحة العدد واسم الملف والحجم. وهي لا تعاين الصفحات. لصور الصفحات استخدم [تحويل PDF إلى JPG](/tools/pdf-to-jpg).",
        },
        {
          question: "هل يُعد ملف الحافظة أو الملف ذو المرفقات بطريقة خاصة؟",
          answer:
            "تعرض الصفحة عدد صفحات المستند عندما يُفتح الملف بوصفه PDF. ولا تُدرج المرفقات والحافظات على حدة، والملف الذي لا يُفتح لا يُعد.",
        },
        {
          question: "كيف أتحقق من العدد قبل دمج الملفات؟",
          answer:
            "عدّ كل ملف PDF هنا ثم اجمع الأرقام. يسمح [دمج ملفات PDF](/tools/pdf-merger) بما لا يزيد على 80 صفحة مجمّعة، لذلك قد يمنع الفحص المسبق دمجًا مرفوضًا.",
        },
        {
          question: "هل ما يزال لملف PDF الممسوح عدد صفحات؟",
          answer:
            "نعم، إذا كان الملف PDF قابلًا للقراءة وحجمه 20 ميغابايت أو أقل. المسح لا يمنع العد؛ وهو يؤثر فقط في الأدوات التي تحتاج إلى طبقة نص.",
        },
        {
          question: "هل يمكنني نسخ عدد الصفحات لاستخدامه في مستند؟",
          answer:
            "نعم. اقرأ العدد في الصفحة وانسخه إلى ملاحظاتك. ولا يُعدَّل ملف PDF نفسه.",
        },
        {
          question: "هل تعد الأداة صفحات في ملفات وورد أو في الصور؟",
          answer:
            "لا. الملف الذي ليس PDF لا يُعد. حوّله أو صدّره إلى PDF أولًا ثم افتح ذلك الملف هنا.",
        },
    ],
  },
};
