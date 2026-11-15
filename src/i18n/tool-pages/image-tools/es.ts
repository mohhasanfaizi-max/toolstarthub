import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "image-compressor": {
    "answer": "Un compresor de imágenes reduce el tamaño de archivos JPG, PNG y WebP en tu dispositivo, sin subir la foto.",
    "content": {
      "about": "El compresor de imágenes vuelve a codificar un JPG, PNG o WebP en tu navegador. Fija una calidad de 10 a 100, elige un formato de salida y compara el tamaño de archivo que indica la página después de pulsar Comprimir. Úsalo antes de adjuntar una foto a un correo o a una página. La salida PNG es sin pérdida en esta herramienta, así que un gráfico plano apenas puede reducirse. Comprimir otra vez un JPEG puede añadir artefactos.",
      "howTo": [
        "Elige un JPG, PNG o WebP, o arrástralo al recuadro. El límite es de 25 MB, y ningún lado puede superar los 8192 píxeles.",
        "Fija la calidad de 10 a 100. El control empieza en 80. La calidad cambia JPEG y WebP. No cambia la codificación PNG en esta página.",
        "Elige JPG, PNG o WebP como salida y luego pulsa Comprimir.",
        "Lee el tamaño original y el tamaño nuevo en la página, y luego descarga el resultado. Restablecer borra la imagen de esta pestaña."
      ],
      "examples": [
        {
          "title": "Una foto guardada como JPEG a calidad 80",
          "body": "Abre un JPEG de cámara y deja la calidad en 80, que es el valor inicial. Elige JPG y pulsa Comprimir. El navegador dibuja la imagen y codifica JPEG a 0,80. Luego la página muestra el tamaño original del archivo y el tamaño nuevo de esa imagen. Esas dos cifras salen de tu archivo. Esta explicación no publica un tamaño de muestra, porque una foto distinta produce un resultado distinto."
        },
        {
          "title": "Una captura de pantalla que debe quedarse en PNG",
          "body": "Una captura suele ser un PNG de color plano y texto nítido. Volver a codificarlo como PNG en esta página es sin pérdida, y el control de calidad no cambia esa codificación, así que el archivo puede no hacerse más pequeño. Convertir esa misma captura a JPEG a calidad 80 descarta detalle. Los bordes del texto y las zonas planas pueden recoger bloques. Si necesitas que las letras se queden nítidas, conserva PNG, o redimensiona primero la imagen en el [redimensionador de imágenes](/tools/image-resizer)."
        },
        {
          "title": "Un archivo que la página no abrirá",
          "body": "Se rechazan GIF, HEIC y SVG. Se rechaza un archivo de más de 25 MB para que la pestaña siga respondiendo. Se rechaza un lado de más de 8192 píxeles. Se rechaza una calidad por debajo de 10 o por encima de 100. Convierte primero esos archivos a JPG, PNG o WebP en otra herramienta, o exporta una imagen más pequeña."
        }
      ],
      "explanation": "La compresión se ejecuta en el navegador con el lienzo. Se dibuja la imagen y luego se codifica al formato que elegiste. JPEG y WebP reciben un valor de calidad de 0,10 a 1,00, que es el control dividido entre 100. PNG se codifica sin ese argumento de calidad, así que el control no hace un PNG con pérdida. La salida JPEG y WebP se rellena primero sobre un fondo blanco, lo que importa para un PNG que tenía transparencia.",
      "sections": [
        {
          "heading": "La calidad no es un dial de tamaño de archivo para todos los formatos",
          "paragraphs": [
            "Una calidad más baja suele hacer un JPEG o un WebP más pequeño, y también quita más detalle. La calidad 80 es un inicio razonable para una foto. Baja hacia 70 o 60 solo después de mirar la vista previa. La calidad 10 es la más baja que permite la página, y se ve claramente dura en la mayoría de las fotos.",
            "PNG en esta página no usa el control. Un logotipo o una captura de interfaz puede quedarse grande después de una recodificación PNG. Eso es de esperar. Esto no es un reductor de paleta como un optimizador PNG especializado. Si el tamaño importa más que el texto nítido, cambia la salida a JPEG o WebP y acepta la pérdida."
          ]
        },
        {
          "heading": "Lo que descarta cada formato",
          "paragraphs": [
            "JPEG tiene pérdida. Repetir la compresión JPEG en una foto ya comprimida añade artefactos, incluso a una calidad alta. WebP con el mismo valor del control también tiene pérdida aquí. Ninguno de los dos formatos conserva un fondo transparente en esta página, porque el lienzo se rellena de blanco antes de esas codificaciones.",
            "La salida PNG es sin pérdida respecto a los píxeles dibujados en el lienzo. Aun así no recuperará el detalle que un JPEG ya perdió. Partir de un JPEG y guardar PNG hace un archivo más grande de la misma imagen suave. No restaura el archivo original de la cámara."
          ]
        },
        {
          "heading": "Redimensiona antes de perseguir un archivo diminuto",
          "paragraphs": [
            "Una foto de 4000 píxeles se queda en 4000 píxeles después de comprimir. El recuento de bytes baja porque la codificación es más dura, no porque cambien las dimensiones en píxeles. Si la imagen se mostrará a 1200 píxeles, redimensiónala primero y luego comprime. El [redimensionador de imágenes](/tools/image-resizer) de este sitio cambia el ancho y el alto. Esta página no lo hace.",
            "Después de Comprimir, usa los tamaños que imprime la página para tu archivo. Un antes y un después de la foto de otra persona no es una predicción de la tuya."
          ]
        },
        {
          "heading": "Privacidad",
          "paragraphs": [
            "El archivo se lee y se vuelve a codificar en esta pestaña. No se envía a Tools Star Hub. Restablecer y salir de la página quitan la vista previa. La analítica, si la aceptas, no recibe la imagen."
          ]
        }
      ],
      "tips": [
        "Empieza en calidad 80 para una foto JPEG, mira la vista previa y luego baja el control solo si el archivo sigue siendo demasiado grande.",
        "Conserva las capturas y los logotipos como PNG cuando el texto deba quedarse nítido. No los fuerces a JPEG solo para ver un número más pequeño.",
        "Espera que una segunda pasada JPEG se vea peor que la primera, aunque el archivo nuevo sea más pequeño.",
        "Comprueba la transparencia. La salida JPEG y WebP de esta página se apoya sobre blanco."
      ],
      "limitations": "Se rechazan los archivos GIF, HEIC y SVG. Una imagen debe ser de 25 MB o menos, y ningún lado puede superar los 8192 píxeles. La calidad debe estar entre 10 y 100. PNG se vuelve a codificar sin un control de calidad con pérdida, así que un gráfico plano apenas puede reducirse. JPEG y WebP tienen pérdida, y comprimir otra vez un JPEG puede añadir artefactos. La página muestra el tamaño de archivo resultante después de comprimir. No promete de antemano un tamaño objetivo.",
      "faqs": [
        {
          "question": "¿Cómo comprimo un JPEG?",
          "answer": "Abre el JPG, fija una calidad entre 10 y 100, elige JPG y pulsa Comprimir. El control empieza en 80, que codifica a 0,80. La página muestra el tamaño de archivo nuevo de esa imagen."
        },
        {
          "question": "¿Por qué mi PNG apenas se redujo?",
          "answer": "La salida PNG de esta página es sin pérdida, y el control de calidad no cambia esa codificación. Las capturas planas y los gráficos sencillos pueden quedarse casi del mismo tamaño. Elige JPEG o WebP si puedes aceptar algo de pérdida de detalle."
        },
        {
          "question": "¿Debo convertir una captura de pantalla en un JPEG?",
          "answer": "Solo si un archivo más pequeño importa más que el texto nítido. JPEG a calidad 80 puede formar bloques alrededor de las letras y los colores planos. Conserva PNG cuando los bordes deban quedarse limpios."
        },
        {
          "question": "¿Qué archivos se rechazan?",
          "answer": "No se abren GIF, HEIC ni SVG. Se rechazan los archivos de más de 25 MB, y también cualquier lado de más de 8192 píxeles. Se rechaza una calidad fuera del rango de 10 a 100."
        },
        {
          "question": "¿Se sube mi imagen?",
          "answer": "No. El JPG, PNG o WebP se vuelve a codificar en esta pestaña a la calidad que fijas. El archivo no se envía a Tools Star Hub."
        },
        {
          "question": "¿Funciona en el móvil?",
          "answer": "Sí. Puedes abrir esta página en un teléfono o una tableta. Los selectores de archivo y las descargas usan el navegador de tu dispositivo. Los archivos grandes pueden ser más lentos en un teléfono pequeño que en un escritorio."
        }
      ]
    },
    "metaDescription": "Comprime imágenes JPG, PNG y WebP en tu navegador, sin subirlas, con una calidad de 10 a 100 y un tope de 25 MB y 8192 píxeles.",
    "ui": {}
  },
  "image-resizer": {
    "answer": "Un redimensionador de imágenes cambia el ancho y el alto en el navegador, con un bloqueo opcional de la proporción.",
    "content": {
      "about": "Fija un ancho y un alto nuevos para un JPG, PNG o WebP, con las proporciones bloqueadas salvo que desactives ese bloqueo. Úsalo cuando una foto deba caber en un tamaño en píxeles, como 1200 por 630. Si necesitas recortar una zona en lugar de escalar toda la imagen, usa el [recortador de imágenes](/tools/image-cropper).",
      "howTo": [
        "Sube una imagen JPG, PNG o WebP.",
        "Comprueba el ancho y el alto originales.",
        "Escribe un ancho o un alto nuevo. Deja bloqueada la relación de aspecto para conservar las proporciones.",
        "Pulsa Redimensionar, revisa el tamaño nuevo y luego descarga o restablece."
      ],
      "examples": [
        {
          "title": "Reducir a la mitad una imagen de 2000×1000",
          "body": "Con la relación de aspecto bloqueada, un ancho de 1000 fija el alto en 500."
        },
        {
          "title": "Dimensiones desbloqueadas",
          "body": "Desactivar el bloqueo te deja fijar el ancho y el alto por separado, lo que puede estirar la imagen."
        }
      ],
      "explanation": "El redimensionado dibuja la imagen en un lienzo al tamaño que eliges. El ancho y el alto deben ser números enteros de 1 a 8192 píxeles. La relación de aspecto bloqueada actualiza el otro lado a partir de las proporciones originales. La salida JPEG, PNG o WebP usa el mismo codificador del navegador que el compresor.",
      "limitations": "JPG, PNG y WebP son los formatos que se abren. El ancho y el alto tienen que ser píxeles enteros de 1 a 8192. Desactivar el bloqueo de proporción puede estirar la imagen. No hay recorte, giro ni eliminación de fondo.",
      "faqs": [
        {
          "question": "¿El redimensionador de imágenes es gratuito?",
          "answer": "Sí. Cambiar el ancho y el alto de una imagen en este navegador es gratis y no hace falta una cuenta."
        },
        {
          "question": "¿Esto sube mi foto?",
          "answer": "No. El ancho y el alto nuevos se dibujan en esta pestaña. La foto no se envía a un servidor."
        },
        {
          "question": "¿Por qué hay un límite de tamaño?",
          "answer": "Las dimensiones muy grandes pueden congelar una pestaña. Esta herramienta se detiene en 8192 píxeles por cada lado."
        },
        {
          "question": "¿Cómo redimensiono una imagen sin estirarla?",
          "answer": "Mantén bloqueada la relación de aspecto y cambia solo el ancho o solo el alto. El otro lado se calcula para que la imagen conserve sus proporciones."
        },
        {
          "question": "¿Redimensionar una imagen reduce su tamaño de archivo?",
          "answer": "Por lo general, sí. Menos píxeles significa menos datos que guardar. Para el archivo más pequeño, redimensiona primero y luego comprime el resultado."
        }
      ]
    },
    "metaDescription": "Cambia el ancho y el alto de una imagen JPG, PNG o WebP en tu navegador, con la proporción bloqueada o no, y luego descárgala.",
    "ui": {}
  },
  "image-cropper": {
    "answer": "Un recortador de imágenes te deja seleccionar una zona de una foto y exportar solo esa área.",
    "content": {
      "about": "Dibuja un marco sobre un JPG, PNG o WebP y descarga los píxeles originales que quedan dentro. Úsalo para una foto de perfil cuadrada o una portada 16:9 cuando solo necesitas un recuadro. Las proporciones son libre, 1:1, 4:3 y 16:9, y la página no gira ni filtra la foto.",
      "howTo": [
        "Sube una imagen JPG, PNG o WebP.",
        "Arrastra el recuadro de recorte para moverlo. Usa las asas para cambiar su tamaño.",
        "Elige Libre, 1:1, 4:3 o 16:9 si necesitas una forma fija.",
        "Pulsa Recortar, previsualiza el resultado y luego descarga o restablece."
      ],
      "examples": [
        {
          "title": "Recorte cuadrado para redes",
          "body": "Elige 1:1, coloca el recuadro sobre el sujeto y luego recorta."
        },
        {
          "title": "Pantalla ancha",
          "body": "16:9 mantiene un marco ancho mientras mueves el recuadro sobre la foto original."
        }
      ],
      "explanation": "El recuadro de recorte se proyecta de nuevo sobre los píxeles originales y ese rectángulo se dibuja en un lienzo. Las opciones de relación de aspecto mantienen el recuadro en proporción. Es un recortador sencillo, no un editor de fotos completo: no hay giro, filtros ni pincel corrector.",
      "limitations": "En esta página no hay giro, filtros ni pincel corrector. El marco puede ser libre, 1:1, 4:3 o 16:9, y la descarga son los píxeles originales dentro de ese marco. Los archivos GIF, HEIC y SVG no se abren. Se rechaza un archivo de más de 25 MB o un lado de más de 8192 píxeles.",
      "faqs": [
        {
          "question": "¿El recortador de imágenes es gratuito?",
          "answer": "Sí. Recortar un JPG, PNG o WebP en este navegador no requiere pago ni una cuenta."
        },
        {
          "question": "¿Se sube la foto?",
          "answer": "No. El recorte se dibuja en esta pestaña a partir del archivo que elegiste. La foto no se envía a Tools Star Hub."
        },
        {
          "question": "¿Puedo recortar en un teléfono?",
          "answer": "Sí. Arrastra el recuadro con un dedo. Las asas son lo bastante grandes para pulsarlas. La vista previa se queda dentro del ancho de la pantalla."
        },
        {
          "question": "¿A qué relación de aspecto debo recortar?",
          "answer": "Usa 1:1 para fotos de perfil y publicaciones cuadradas, 16:9 para miniaturas de vídeo y banners de pantalla ancha, y 4:3 para muchas diapositivas y pantallas más antiguas. Libre te deja elegir cualquier forma."
        },
        {
          "question": "¿Recortar reduce la calidad de la imagen?",
          "answer": "No. Recortar quita los píxeles que quedan fuera del marco y conserva los de dentro, así que la zona que conservas no se desenfoca."
        }
      ]
    },
    "metaDescription": "Dibuja un marco sobre un JPG, PNG o WebP y descarga los píxeles que quedan dentro. El marco puede ser libre, 1:1, 4:3 o 16:9. Aquí no hay giro ni filtros.",
    "ui": {}
  },
  "image-converter": {
    "answer": "Un conversor de imágenes cambia archivos JPG, PNG y WebP de un formato a otro en local.",
    "content": {
      "about": "Convierte un JPG en un PNG, o un PNG en un JPG. Úsalo cuando un formulario o un sitio solo acepta uno de esos formatos. Un fondo PNG transparente se rellena con el color que eliges antes de pasar a JPEG, y aquí no se convierte WebP.",
      "howTo": [
        "Sube una imagen JPG o PNG.",
        "Elige JPG → PNG o PNG → JPG. La herramienta también te deja elegir el formato de salida de forma directa.",
        "Si conviertes PNG a JPG, fija un color de fondo para los píxeles transparentes. El blanco es el valor predeterminado.",
        "Pulsa Convertir y luego descarga el archivo."
      ],
      "examples": [
        {
          "title": "JPG a PNG",
          "body": "Es útil cuando necesitas PNG para seguir editando. Los artefactos JPEG que ya están en el archivo se quedan en los píxeles."
        },
        {
          "title": "PNG con transparencia a JPG",
          "body": "JPG no tiene canal alfa. Los píxeles transparentes se rellenan con el color de fondo que eliges."
        }
      ],
      "explanation": "JPG es un formato de foto con pérdida y sin transparencia. PNG no tiene pérdida y puede incluir transparencia. Convertir JPG a PNG no restaura la calidad que JPEG ya descartó. Convertir PNG a JPG también tiene pérdida. La conversión usa el lienzo del navegador y se queda en tu dispositivo.",
      "limitations": "JPG no puede guardar un píxel transparente, así que un fondo PNG transparente se rellena con el color que eliges antes de escribir el JPEG. En la dirección inversa, de JPG a PNG, se conserva el daño que JPEG ya introdujo. Aquí no se convierten WebP, GIF ni HEIC.",
      "faqs": [
        {
          "question": "¿El conversor de imágenes es gratuito?",
          "answer": "Sí. Convertir un JPG en un PNG, o un PNG en un JPG, es gratis aquí y no hay que registrarse."
        },
        {
          "question": "¿Pasar de PNG a JPG es sin pérdida?",
          "answer": "No. JPEG es un formato con pérdida. Los detalles finos y los bordes nítidos pueden cambiar, y la transparencia pasa a ser un fondo sólido."
        },
        {
          "question": "¿Se sube el archivo?",
          "answer": "No. La conversión de JPG y PNG se queda en esta página. El archivo no se envía a un servidor."
        },
        {
          "question": "¿Debo usar PNG o JPG?",
          "answer": "Usa JPG para las fotos, donde un archivo más pequeño importa más que los bordes perfectos. Usa PNG para logotipos, capturas de pantalla, texto y todo lo que necesite un fondo transparente."
        },
        {
          "question": "¿Por qué mi fondo transparente se volvió blanco?",
          "answer": "JPG no puede guardar transparencia, así que los píxeles transparentes se rellenan con un color de fondo cuando conviertes PNG a JPG. El blanco es el valor predeterminado, y puedes elegir otro color."
        }
      ]
    },
    "metaDescription": "Convierte JPG a PNG o PNG a JPG en tu navegador, con un color de fondo para la transparencia. Aquí no se convierten WebP, GIF ni HEIC.",
    "ui": {}
  },
  "pdf-to-jpg": {
    "answer": "PDF a JPG renderiza las páginas PDF seleccionadas como imágenes JPEG en tu navegador, sin subir el documento.",
    "content": {
      "about": "PDF a JPG convierte páginas de un PDF en imágenes JPEG en tu navegador. Puedes exportar la primera página, las páginas que marques o todas. Úsalo para una miniatura de portada o un conjunto de fotos de páginas. La descarga es solo JPEG. Un archivo protegido con contraseña no se abre. El renderizado se detiene en 20 MB, 40 páginas y un lado más largo de 4096 píxeles.",
      "howTo": [
        "Sube un PDF desde tu dispositivo. El archivo se queda en esta pestaña del navegador.",
        "Comprueba el nombre del archivo, el tamaño y el recuento de páginas. Aparecen vistas previas en miniatura de las primeras 12 páginas. Las páginas posteriores igualmente se pueden convertir.",
        "Elige la primera página, las páginas seleccionadas o todas las páginas. Fija la calidad JPG si necesitas una imagen más pequeña o más nítida. El control empieza en 80.",
        "Pulsa Convertir y luego descarga una página o los archivos JPG generados. Cada archivo se nombra a partir del nombre del PDF más el número de página, como notes-page-1.jpg."
      ],
      "examples": [
        {
          "title": "Un archivo de 3 páginas, todas las páginas",
          "body": "Abre un PDF de 3 páginas y elige todas las páginas. Convertir dibuja tres JPEG, uno por página, con nombres -page-1, -page-2 y -page-3. La escala de renderizado empieza en 1,5. Una página Carta de EE. UU. mide 612 por 792 puntos. A 1,5× eso son 918 por 1188 píxeles. El lado más largo, 1188, está por debajo del tope de 4096 píxeles, así que la escala se queda en 1,5. La calidad 80 codifica cada JPEG a 0,80."
        },
        {
          "title": "Solo la primera página",
          "body": "Elige la primera página. La herramienta renderiza la página 1 y omite el resto, lo que usa menos memoria que convertir todas las páginas. La tira de miniaturas igualmente muestra hasta las primeras 12 páginas para que veas la portada. La descarga es un solo JPEG."
        },
        {
          "title": "Un archivo bloqueado o demasiado grande",
          "body": "Un PDF protegido con contraseña se detiene con un mensaje que indica que el PDF está protegido con contraseña y que esta herramienta no puede abrir archivos bloqueados. Desbloquéalo en un lector de PDF y luego convierte la copia desbloqueada. Se rechaza un archivo de más de 20 MB. Se rechaza un PDF de más de 40 páginas, con un mensaje para dividirlo primero. Una página que superaría los 4096 píxeles en el lado largo a 1,5× se reduce para que el lado largo se quede en 4096."
        }
      ],
      "explanation": "Las páginas se renderizan en local con PDF.js, se dibujan en un lienzo y se guardan como JPEG. No hay una subida a una API de conversión. La escala pedida es 1,5. Si el lado más largo a esa escala superaría los 4096 píxeles, la escala se reduce para que el lado más largo sea 4096. La calidad JPG es el control dividido entre 100. Las páginas no seleccionadas no se dibujan.",
      "sections": [
        {
          "heading": "Lo que obtienes es una imagen de la página",
          "paragraphs": [
            "El JPEG es una captura de la página pintada. El texto de esa imagen no es una capa de texto. No puedes seleccionar una frase en el JPG como en el PDF. Si necesitas las palabras, usa [PDF a texto](/tools/pdf-to-text) en un archivo que realmente contenga texto.",
            "Una página escaneada ya es una imagen dentro del PDF. Convertirla hace otra imagen. No hace más nítido un escaneo borroso y no ejecuta reconocimiento óptico de caracteres. [Imagen a texto](/tools/image-to-text) es otra herramienta."
          ]
        },
        {
          "heading": "Qué páginas se exportan",
          "paragraphs": [
            "La primera página exporta solo la página 1. Todas las páginas exporta cada página, hasta el tope de 40. Las páginas seleccionadas exportan las casillas que marcas. Si no existe ninguno de los números seleccionados, la página indica que selecciones al menos una página.",
            "Las miniaturas se dibujan de las primeras 12 páginas a una escala menor para que puedas elegir. Si el PDF tiene más páginas, la nota bajo la tira indica que igualmente puedes convertir las páginas posteriores. No necesitas una miniatura para incluir una página posterior en la selección."
          ]
        },
        {
          "heading": "Calidad, memoria y tamaño de página",
          "paragraphs": [
            "La calidad empieza en 80. Los valores más bajos suelen hacer un JPEG más pequeño y una imagen más suave. Los valores más altos conservan más detalle y suelen hacer un archivo más grande. La página no predice el tamaño en bytes antes de que termine Convertir.",
            "Renderizar muchas páginas grandes puede agotar la memoria y congelar la pestaña. Por eso los topes son 20 MB y 40 páginas. Divide un PDF más grande con el [divisor de PDF](/tools/pdf-splitter) y luego convierte un archivo más pequeño. Una página enorme se reduce en lugar de dibujarse por encima de 4096 píxeles en el lado largo."
          ]
        },
        {
          "heading": "Privacidad",
          "paragraphs": [
            "El PDF se abre en esta pestaña. Las páginas seleccionadas se renderizan aquí a JPEG. El archivo no se envía a Tools Star Hub. Las descargas se quedan en tu dispositivo. La analítica, si la aceptas, no recibe el PDF ni las imágenes."
          ]
        }
      ],
      "tips": [
        "Convierte la primera página cuando solo necesites una portada. Es más rápido que renderizar todo el archivo.",
        "En una página Carta estándar, espera 918 por 1188 píxeles en la escala predeterminada. Otros tamaños de página se escalan a partir de su propio tamaño en puntos.",
        "Desbloquea un PDF protegido con contraseña antes de abrirlo aquí. Esta herramienta no tiene un campo de contraseña.",
        "Si necesitas palabras, no una imagen, pasa a [PDF a texto](/tools/pdf-to-text). Un JPEG no te dará un párrafo seleccionable."
      ],
      "limitations": "La descarga es JPEG, no PNG. Un archivo protegido con contraseña no se abre. El renderizado se detiene en 20 MB, 40 páginas y un lado más largo de 4096 píxeles. La escala pedida es 1,5 y se reduce cuando una página superaría ese lado. Las páginas que dejas sin seleccionar no se dibujan. Las miniaturas cubren las primeras 12 páginas. El resultado es una imagen de la página, no texto extraído.",
      "faqs": [
        {
          "question": "¿Cómo convierto un PDF de 3 páginas a JPG?",
          "answer": "Sube el PDF, elige todas las páginas y pulsa Convertir. Obtienes tres archivos JPEG, uno por página. Una página Carta de EE. UU. a la escala 1,5 mide 918 por 1188 píxeles. La calidad empieza en 80."
        },
        {
          "question": "¿Puedo convertir solo algunas páginas?",
          "answer": "Sí. Elige la primera página para la página 1, o páginas seleccionadas y marca las que necesites. Las páginas no seleccionadas no se dibujan. Las vistas previas muestran las primeras 12 páginas. Las páginas posteriores igualmente se pueden convertir."
        },
        {
          "question": "¿Puedo abrir un PDF protegido con contraseña?",
          "answer": "No. El mensaje indica que el PDF está protegido con contraseña y que esta herramienta no puede abrir archivos bloqueados. Desbloquea el archivo en un lector de PDF y luego convierte la copia desbloqueada."
        },
        {
          "question": "¿Por qué hay un límite de páginas o de tamaño?",
          "answer": "Renderizar muchas páginas grandes puede agotar la memoria. Esta herramienta se detiene en 20 MB y 40 páginas. El lado más largo de una imagen tiene un tope de 4096 píxeles. Divide primero un PDF más grande."
        },
        {
          "question": "¿Esto extrae el texto?",
          "answer": "No. Cada página se convierte en una imagen JPEG. El texto de esa imagen no es seleccionable. Usa PDF a texto cuando necesites las palabras de un PDF que contiene una capa de texto."
        },
        {
          "question": "¿Se sube el PDF?",
          "answer": "No. Las páginas seleccionadas se renderizan a JPEG en esta pestaña. El PDF no se envía a ningún sitio."
        }
      ]
    },
    "metaDescription": "Convierte páginas PDF en imágenes JPG en tu navegador. Elige la primera página, algunas páginas o todas, con un tope de 20 MB y 40 páginas.",
    "ui": {}
  },
  "color-picker": {
    "answer": "Un selector de color te deja elegir un color de forma visual o a partir de un valor, y luego copiar HEX, RGB y HSL.",
    "content": {
      "about": "Elige un color con el control de color del navegador, o escribe un valor hexadecimal, y copia HEX, RGB y HSL. Lo usan los diseñadores que necesitan un color opaco para CSS cuando no tienen que tomar una muestra de una foto. No hay canal alfa, y muestrear píxeles de una imagen es el [analizador de colores de imagen](/tools/image-color-analyzer).",
      "howTo": [
        "Usa el selector de color nativo, o escribe un valor hexadecimal.",
        "Copia HEX, RGB o HSL.",
        "Restablecer devuelve el selector al azul predeterminado."
      ],
      "examples": [
        {
          "title": "HEX",
          "body": "#2563eb es un color hexadecimal de seis dígitos: dos dígitos para el rojo, dos para el verde y dos para el azul."
        },
        {
          "title": "RGB",
          "body": "El mismo color es rgb(37, 99, 235)."
        },
        {
          "title": "HSL",
          "body": "HSL describe el tono, la saturación y la luminosidad. Es útil cuando quieres aclarar o saturar un color."
        }
      ],
      "explanation": "HEX es un color CSS compacto escrito en hexadecimal. RGB enumera los mismos canales como números decimales de 0 a 255. HSL usa el tono (0–360), la saturación y la luminosidad. El selector usa la entrada de color nativa del navegador, así que la interfaz de color del sistema aparece en teléfonos y escritorios. Los valores se convierten en local.",
      "limitations": "El control nativo aporta un color sRGB opaco. No hay canal alfa, y no se toma un píxel de una fotografía. HEX, RGB y HSL son tres formas de escribir ese mismo color.",
      "faqs": [
        {
          "question": "¿El selector de color es gratuito?",
          "answer": "Sí. Elegir un color y copiar HEX, RGB o HSL no requiere pago ni una cuenta."
        },
        {
          "question": "¿Usa una biblioteca grande de selector de color?",
          "answer": "No. Usa la entrada de color nativa del navegador y el análisis hexadecimal en esta página."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. El color que eliges se queda en esta pestaña. No se sube ni se escribe en el almacenamiento local."
        },
        {
          "question": "¿Cuál es la diferencia entre HEX, RGB y HSL?",
          "answer": "Describen el mismo color de formas distintas. HEX y RGB dan las cantidades de rojo, verde y azul. HSL da el tono, la saturación y la luminosidad, lo que es más fácil de ajustar a mano."
        },
        {
          "question": "¿Cómo uso un color elegido en CSS?",
          "answer": "Copia el valor y pégalo en una propiedad CSS, por ejemplo color: #1E90FF; o background: rgb(30, 144, 255);."
        }
      ]
    },
    "metaDescription": "Elige un color con el selector del navegador o escribe un valor hexadecimal, y copia los valores HEX, RGB o HSL en tu dispositivo.",
    "ui": {}
  },
  "image-to-pdf": {
    "answer": "Imagen a PDF coloca imágenes JPG, PNG o WebP en páginas de un PDF en tu navegador y luego descarga el archivo.",
    "content": {
      "about": "Convierte hasta 20 imágenes JPG o PNG en un solo PDF, en el orden que fijas. Úsalo para un montón de escaneos o capturas que deban ser un solo archivo. WebP no está incluido, un lado de más de 2000 píxeles se reduce, y Rellenar puede recortar la imagen para cubrir la página.",
      "howTo": [
        "Añade una o más imágenes JPG o PNG. Puedes arrastrar los archivos a la zona de soltar.",
        "Reordena la lista para que las páginas aparezcan en el orden que quieres. Quita cualquier imagen que no necesites.",
        "Elige el tamaño de página, la orientación, el margen y cómo debe encajar cada imagen.",
        "Crea el PDF y luego descárgalo. No se sube nada."
      ],
      "examples": [
        {
          "title": "Un conjunto de escaneos",
          "body": "Suelta varios JPG, mueve la portada arriba, elige A4 y Ajustar a la página, y luego descarga."
        },
        {
          "title": "Capturas en el tamaño original",
          "body": "Elige Original / automático para que cada página siga la imagen. Las imágenes muy grandes se reducen primero para que el PDF se quede manejable."
        }
      ],
      "explanation": "Cada imagen seleccionada se convierte en una página. Ajustar mantiene visible toda la imagen. Rellenar cubre la página y puede recortar. El tamaño original usa las dimensiones de la imagen cuando caben; si no, vuelve a ajustar. El proceso se queda en este navegador; los lados grandes se reducen antes de incrustar para que el archivo no se hinche.",
      "limitations": "Se aceptan JPG y PNG, hasta 20 imágenes. WebP no. Un lado de más de 2000 píxeles se reduce antes de incrustarlo. El tamaño de página es A4, Carta o el propio tamaño de la imagen, y Rellenar puede recortar la imagen para que cubra la página.",
      "faqs": [
        {
          "question": "¿La herramienta de imagen a PDF es gratuita?",
          "answer": "Sí. Puedes convertir imágenes JPG y PNG en un PDF aquí sin pagar ni registrarte."
        },
        {
          "question": "¿Se suben mis fotos?",
          "answer": "No. Las imágenes se leen y se escriben en un PDF en tu navegador. No se envían a Tools Star Hub."
        },
        {
          "question": "¿Por qué se cambió el tamaño de mi imagen?",
          "answer": "Los lados de más de 2000 píxeles se reducen antes de incrustarlos. Eso mantiene razonables el uso de memoria y el tamaño del PDF."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. Las imágenes se arman en un PDF en esta pestaña. No se envían a un servidor ni se escriben en el almacenamiento local."
        },
        {
          "question": "¿Cómo convierto imágenes a un PDF en el navegador?",
          "answer": "Añade uno o más archivos JPG, PNG o similares, fija el tamaño de página y las opciones de ajuste, y luego descarga el PDF. Las páginas siguen el orden que diste en la lista."
        },
        {
          "question": "¿Qué formatos de imagen pueden convertirse en un PDF?",
          "answer": "Los formatos habituales como JPG, PNG y WebP suelen funcionar. Si un formato falla, conviértelo primero a JPG o PNG y luego arma el PDF."
        },
        {
          "question": "¿Puedo reordenar las páginas antes de descargar?",
          "answer": "Sí, cuando la herramienta muestra una lista ordenable. Arrastra las imágenes al orden que quieres para que el PDF coincida con esa secuencia."
        },
        {
          "question": "¿Cuál es la diferencia entre ajustar y rellenar en una página?",
          "answer": "Ajustar mantiene visible toda la imagen y puede dejar márgenes. Rellenar cubre la página y puede recortar los bordes. Elige ajustar para documentos y rellenar para fotos a sangrado completo."
        },
        {
          "question": "¿Las fotos grandes se reducirán en el PDF?",
          "answer": "Las imágenes muy grandes pueden redimensionarse para que el archivo se quede manejable. Revisa la nota de la herramienta bajo la vista previa si se aplicó un límite de tamaño."
        },
        {
          "question": "¿La transparencia de un PNG se queda transparente en el PDF?",
          "answer": "En los conversores sencillos la transparencia a menudo se aplana sobre un fondo blanco. Exporta un JPG con un fondo si necesitas una página opaca garantizada."
        },
        {
          "question": "¿Puedo mezclar imágenes verticales y horizontales?",
          "answer": "Sí. Cada imagen se convierte en su propia página con su orientación, salvo que fuerces un único tamaño de página que rote el contenido o le añada bandas."
        },
        {
          "question": "¿Imagen a PDF es lo mismo que escanear un documento en papel?",
          "answer": "No. Esto arma un PDF a partir de archivos de imagen existentes. Un escáner crea primero esas imágenes; luego puedes combinar aquí fotos de páginas hechas con el teléfono."
        },
        {
          "question": "¿Cuántas fotos puede contener un PDF antes de que el navegador se esfuerce?",
          "answer": "La memoria del navegador fija un techo práctico. Decenas de fotos de teléfono suelen funcionar; cientos de tomas de alta resolución pueden necesitar varios PDF más pequeños."
        },
        {
          "question": "¿Qué tamaños de página son habituales para los PDF de fotos?",
          "answer": "A4 y Carta son habituales para imprimir. Los tamaños cuadrados o personalizados ayudan en los fotolibros; ajústalo al tamaño que espere tu impresora o tu cliente."
        },
        {
          "question": "¿El texto que hay dentro de una foto se podrá seleccionar en el PDF?",
          "answer": "No de forma predeterminada. Una foto de texto sigue siendo una imagen. Necesitas OCR en otra herramienta si quieres texto buscable."
        },
        {
          "question": "¿Puedo proteger con contraseña el PDF que crea esta página?",
          "answer": "Este conversor se centra en armar páginas a partir de imágenes. Añade una contraseña después en un editor de PDF si la necesitas."
        },
        {
          "question": "¿Por qué mi PDF es mucho más grande que las fotos?",
          "answer": "La incrustación sin comprimir y los recuentos altos de píxeles inflan el tamaño. Comprime el PDF después o reduce las imágenes antes de la conversión."
        },
        {
          "question": "¿Los datos EXIF de la cámara se quedan en el PDF?",
          "answer": "Muchos conversores quitan o ignoran los metadatos de la foto al incrustar. No confíes en este flujo para conservar el EXIF."
        },
        {
          "question": "¿Puedo convertir una sola captura de pantalla a PDF?",
          "answer": "Sí. Sube una imagen y descarga un PDF de una página: es útil para recibos y mensajes de error que necesitas archivar."
        }
      ]
    },
    "metaDescription": "Une hasta 20 imágenes JPG o PNG en un solo PDF, en el orden que elijas. No se acepta WebP. Los lados de más de 2000 píxeles se reducen.",
    "ui": {}
  },
  "pdf-merger": {
    "answer": "Un unidor de PDF combina varios archivos PDF en un solo documento, en el orden que fijes, en tu dispositivo.",
    "content": {
      "about": "Une de dos a diez PDF en el orden que organices, hasta 80 páginas en total. Úsalo cuando una portada y un informe deban ser un solo archivo. Un PDF protegido con contraseña no se abre, y los formularios no se aplanan.",
      "howTo": [
        "Añade dos o más archivos PDF.",
        "Confirma el nombre, el tamaño y el número de páginas de cada archivo.",
        "Reordena la lista si hace falta. El archivo unido sigue este orden.",
        "Une y descarga. Los PDF protegidos con contraseña no se pueden abrir."
      ],
      "examples": [
        {
          "title": "Portada más informe",
          "body": "Añade cover.pdf y luego report.pdf, o usa Arriba/Abajo para intercambiarlos, y luego une."
        },
        {
          "title": "Un solo archivo",
          "body": "Un único PDF no necesita unirse. Añade primero un segundo archivo."
        }
      ],
      "explanation": "El unidor copia las páginas de cada documento en el orden de la lista con una biblioteca de PDF local. No aplana formularios ni quita el cifrado. El recuento combinado de páginas tiene un tope para que la pestaña siga utilizable.",
      "limitations": "Se necesitan al menos dos PDF, y no más de 10. El recuento combinado de páginas debe quedarse en 80 o menos. Un archivo protegido con contraseña no se abre. Los formularios no se aplanan y el cifrado no se quita.",
      "faqs": [
        {
          "question": "¿El unidor de PDF es gratuito?",
          "answer": "Sí. Combinar PDF en este navegador no requiere pago ni una cuenta."
        },
        {
          "question": "¿Puedo unir un PDF bloqueado?",
          "answer": "No si está protegido con contraseña. Desbloquéalo primero en un lector de PDF."
        },
        {
          "question": "¿Se envían mis archivos a un servidor?",
          "answer": "No. Los archivos se unen en esta pestaña. No se suben ni se guardan en el almacenamiento local."
        }
      ]
    },
    "metaDescription": "Une de 2 a 10 archivos PDF en el orden que indiques y descarga el documento combinado en tu dispositivo, con un tope de 80 páginas.",
    "ui": {}
  },
  "pdf-splitter": {
    "answer": "Un divisor de PDF extrae las páginas o rangos seleccionados a un PDF nuevo, sin subir el original.",
    "content": {
      "about": "Copia las páginas seleccionadas a un PDF nuevo, con rangos como 1-3,6. El archivo original de tu dispositivo se queda como estaba. Se rechaza un rango invertido como 5-2, y el archivo nuevo puede tener como máximo 80 páginas.",
      "howTo": [
        "Elige un PDF. El recuento de páginas se muestra cuando termina de cargar.",
        "Escribe páginas como 1-3, 2,5,7 o 1-3,6,9-11, o marca páginas sueltas.",
        "Crea un PDF nuevo que contenga solo esas páginas y luego descárgalo."
      ],
      "examples": [
        {
          "title": "Un rango continuo",
          "body": "1-3 copia las páginas 1, 2 y 3 en ese orden."
        },
        {
          "title": "Rangos mezclados",
          "body": "1-3,6,9-11 copia 1, 2, 3, 6, 9, 10 y 11. Los duplicados se ignoran y se conserva la primera aparición."
        }
      ],
      "explanation": "Los números de página empiezan en 1. Se rechazan los rangos invertidos como 5-2. Se rechazan los tokens vacíos y los valores que quedan fuera del documento. El archivo nuevo se arma en local; el original no se sube.",
      "limitations": "Los números de página empiezan en 1. Se rechaza un rango invertido como 5-2, y también una página que no esté en el archivo. El PDF nuevo puede tener como máximo 80 páginas. El archivo original de tu dispositivo se deja sin cambios.",
      "faqs": [
        {
          "question": "¿El divisor de PDF es gratuito?",
          "answer": "Sí. Copiar las páginas elegidas a un PDF nuevo es gratis y no hay que registrarse."
        },
        {
          "question": "¿Esto borra páginas de mi original?",
          "answer": "No. Arma un PDF aparte. Tu archivo original se queda en tu dispositivo."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. Las páginas seleccionadas se copian en esta pestaña. El archivo no se envía a ningún sitio ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo extraigo páginas de un PDF?",
          "answer": "Escribe las páginas que quieres, como 1-3,6, y descarga un PDF nuevo que solo tenga esas páginas. El archivo original no se modifica."
        },
        {
          "question": "¿Puedo dividir un PDF en archivos separados?",
          "answer": "Cada ejecución crea un PDF nuevo a partir de las páginas que eliges. Repite con un rango distinto para cada archivo que necesites."
        }
      ]
    },
    "metaDescription": "Copia las páginas elegidas a un PDF nuevo con rangos como 1-3,6. El original no cambia. Un rango invertido se rechaza y la copia admite hasta 80 páginas.",
    "ui": {}
  },
  "pdf-page-counter": {
    "answer": "Un contador de páginas PDF indica cuántas páginas tiene un PDF después de leerlo en local.",
    "content": {
      "about": "Lee cuántas páginas tiene un PDF, junto con el nombre y el tamaño del archivo. Úsalo cuando necesites el recuento antes de dividir o unir. Se incluyen las páginas en blanco y las portadas, y no se cuenta un archivo protegido con contraseña o dañado.",
      "howTo": [
        "Elige un archivo PDF.",
        "Lee el recuento de páginas, el nombre del archivo y el tamaño.",
        "Restablece para borrar el resultado."
      ],
      "examples": [
        {
          "title": "Un folleto de 12 páginas",
          "body": "Cuando el archivo termina de cargar, la herramienta indica 12 páginas, junto con el nombre y el tamaño del archivo."
        }
      ],
      "explanation": "El recuento se lee de la estructura del PDF en tu navegador. Se incluyen las páginas en blanco y las portadas. Esto no es un editor y no extrae ni reordena páginas.",
      "limitations": "Las páginas en blanco y las portadas se incluyen en el recuento. No se cuenta un archivo que no sea un PDF, un archivo dañado o un archivo protegido con contraseña. Se rechazan los archivos de más de 20 MB. La página no extrae, divide ni reordena páginas.",
      "faqs": [
        {
          "question": "¿El contador de páginas PDF es gratuito?",
          "answer": "Sí. Leer el recuento de páginas de un PDF no cuesta nada y no creas una cuenta."
        },
        {
          "question": "¿Por qué no se puede contar un archivo?",
          "answer": "Puede que el archivo no sea un PDF, que esté dañado o que esté protegido con contraseña."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. El recuento de páginas se lee en esta pestaña. El PDF no se envía a un servidor ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo compruebo cuántas páginas tiene un PDF?",
          "answer": "Ábrelo aquí y aparece el recuento de páginas sin subirlo. Las páginas en blanco y las portadas se incluyen en el recuento."
        },
        {
          "question": "¿Puedo contar las páginas de varios PDF?",
          "answer": "Cuéntalos uno detrás de otro. Cada archivo se lee en tu dispositivo y no se sube."
        }
      ]
    },
    "metaDescription": "Cuenta las páginas de un archivo PDF en tu dispositivo, sin subir el documento, e incluye las páginas en blanco y las portadas.",
    "ui": {}
  },
  "image-color-analyzer": {
    "answer": "Un analizador de colores de imagen toma muestras de píxeles para estimar los colores dominantes de una foto.",
    "content": {
      "about": "Enumera de 3 a 10 colores dominantes de un JPG, PNG o WebP, con la parte de los píxeles de muestra que corresponde a cada color. Úsalo cuando quieras una paleta de partida a partir de una foto. Primero se reduce la imagen a un lado de 96 píxeles, así que un color raro puede pasarse por alto.",
      "howTo": [
        "Sube una imagen JPG, PNG o WebP.",
        "Elige cuántos colores dominantes mostrar, de 3 a 10.",
        "Analiza y luego copia los valores HEX o RGB de las muestras."
      ],
      "examples": [
        {
          "title": "Una foto de un cielo azul",
          "body": "La mayoría de los píxeles de muestra caen en grupos azulados. La parte listada es la porción de los píxeles de muestra, no una medición de laboratorio."
        }
      ],
      "explanation": "Se reduce la imagen y luego se agrupan los píxeles parecidos. Los colores listados son promedios de esos grupos. Es una aproximación a partir de píxeles procesados, no una paleta matemáticamente exacta ni una prueba de impresión.",
      "limitations": "La foto se reduce a un lado de 96 píxeles antes de agrupar los píxeles, y se omiten los píxeles casi transparentes. Puedes pedir de 3 a 10 colores. La parte es de esos píxeles de muestra. Los archivos GIF y HEIC no se abren, y se rechaza un archivo de más de 25 MB o un lado de más de 8192 píxeles.",
      "faqs": [
        {
          "question": "¿El analizador de colores de imagen es gratuito?",
          "answer": "Sí. Enumerar los colores dominantes de un JPG, PNG o WebP es gratis y no hace falta una cuenta."
        },
        {
          "question": "¿Los porcentajes son exactos?",
          "answer": "No. Describen píxeles de muestra y cuantizados de una copia más pequeña de la imagen. Se pueden pasar por alto los detalles finos y los colores raros."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. El muestreo se queda en esta pestaña. La foto no se sube ni se escribe en el almacenamiento local."
        },
        {
          "question": "¿Cómo hallo los colores principales de una imagen?",
          "answer": "Sube un JPG, PNG o WebP y elige cuántos colores enumerar, de 3 a 10. Se agrupan los píxeles parecidos y cada color muestra su parte."
        },
        {
          "question": "¿Puedo obtener el código hexadecimal de un color de una foto?",
          "answer": "Sí. Cada color listado se puede copiar como HEX o RGB, listo para una herramienta de diseño o para CSS."
        }
      ]
    },
    "metaDescription": "Estima los colores dominantes de una imagen JPG, PNG o WebP a partir de píxeles de muestra, con entre 3 y 10 colores y valores HEX o RGB.",
    "ui": {}
  },
  "pdf-compressor": {
    "answer": "Un compresor de PDF reescribe o rasteriza un PDF en tu navegador para intentar reducir el tamaño del archivo. Un resultado más pequeño no está garantizado.",
    "content": {
      "about": "Reescribe un PDF con compresión Baja, Equilibrada o Fuerte y compara los tamaños. Usa Equilibrada en un informe de texto cuando las palabras deban seguir seleccionables. Fuerte convierte cada página en un JPEG, así que un archivo más pequeño no está garantizado y el texto deja de ser seleccionable.",
      "howTo": [
        "Elige un PDF de tu dispositivo. El archivo se queda en esta pestaña del navegador.",
        "Elige compresión Baja (reescribir, conservar el texto), Equilibrada (copiar las páginas a un archivo nuevo) o Fuerte (rasterizar las páginas a JPEG).",
        "Pulsa Comprimir y comprueba el tamaño original, el tamaño de salida y el porcentaje de cambio.",
        "Descarga el resultado si te resulta útil. Restablece para probar otro archivo u otro ajuste."
      ],
      "examples": [
        {
          "title": "Un informe con mucho texto",
          "body": "Empieza con Equilibrada. Muchos PDF ya comprimidos apenas se reducen. Fuerte sustituiría el texto seleccionable por imágenes, lo que suele ser un mal canje para un informe."
        },
        {
          "title": "Un escaneo hecho de fotos de páginas",
          "body": "La compresión Fuerte puede reducir el tamaño al volver a codificar las páginas como JPEG. El texto no seguirá seleccionable. Baja y Equilibrada a menudo cambian poco en archivos que ya son páginas JPEG."
        }
      ],
      "explanation": "Baja y Equilibrada reescriben la estructura del PDF sin convertir las páginas en imágenes, así que los vectores y el texto se quedan. Fuerte renderiza cada página a un JPEG y reconstruye el documento, lo que puede reducir los archivos con muchas fotos y destruirá el texto seleccionable. Tools Star Hub no afirma una reducción garantizada. Algunos archivos se quedan con un tamaño parecido o crecen un poco.",
      "limitations": "Un archivo más pequeño no está garantizado. La compresión Equilibrada puede dejar un PDF ya comprimido con un tamaño casi igual. La compresión Fuerte convierte cada página en un JPEG, así que el texto deja de ser seleccionable. Un PDF muy grande puede ser lento o fallar si el dispositivo tiene poca memoria.",
      "faqs": [
        {
          "question": "¿El compresor de PDF es gratuito?",
          "answer": "Sí. Puedes comprimir un PDF en este navegador sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Cómo comprimo un PDF?",
          "answer": "Abre el compresor de PDF, elige el archivo, selecciona un ajuste, y luego comprime y descarga. El proceso se queda en tu navegador."
        },
        {
          "question": "¿Todos los PDF se hacen más pequeños?",
          "answer": "No. Si el archivo ya está comprimido, una reescritura puede quedar con un tamaño casi igual. La rasterización Fuerte incluso puede hacer crecer un PDF de texto sencillo."
        },
        {
          "question": "¿Esto es sin pérdida?",
          "answer": "Baja y Equilibrada conservan el contenido de la página tal cual y solo reescriben la estructura. Eso no es una promesa de archivos más pequeños. Fuerte tiene pérdida porque las páginas se convierten en imágenes JPEG."
        },
        {
          "question": "¿Cómo comprimo un PDF para el correo?",
          "answer": "Abre el archivo en el compresor, elige un nivel de compresión y descarga el resultado más pequeño. Luego confirma que queda por debajo del límite de adjuntos de tu servicio de correo."
        },
        {
          "question": "¿Comprimir un PDF siempre reduce la calidad?",
          "answer": "Los PDF con muchas imágenes pueden perder algo de fidelidad visual en los ajustes más fuertes. Los PDF basados en texto a menudo se reducen con poco cambio visible cuando se optimizan las secuencias."
        },
        {
          "question": "¿Por qué mi PDF apenas se hizo más pequeño?",
          "answer": "Puede que ya esté optimizado, o que sea sobre todo texto con pocos datos redundantes. Las páginas de fotos escaneadas se reducen más que los PDF de texto creados de forma digital."
        },
        {
          "question": "¿La compresión de PDF es sin pérdida?",
          "answer": "Depende del modo. Algunas optimizaciones conservan el contenido exactamente; los modos más fuertes recomprimen las imágenes y tienen pérdida. Lee la etiqueta de la opción antes de elegir."
        },
        {
          "question": "¿El texto seguirá siendo buscable después de comprimir?",
          "answer": "A menudo sí, si la herramienta conserva la capa de texto. Un aplanado extremo a imagen puede convertir las páginas en fotos y quitar la posibilidad de buscar."
        },
        {
          "question": "¿Cuál es un buen objetivo de tamaño para los adjuntos de Gmail?",
          "answer": "Quédate holgadamente por debajo del tope habitual de 25 MB, incluido el sobrecoste de la codificación. Si sigue siendo demasiado grande, divide el PDF o comparte un enlace."
        },
        {
          "question": "¿Puedo comprimir un PDF protegido con contraseña?",
          "answer": "Por lo general debes desbloquearlo primero. Los archivos protegidos impiden la reescritura hasta que se indica la contraseña en una herramienta que la admita."
        },
        {
          "question": "¿Debo dividir o comprimir un PDF enorme?",
          "answer": "Prueba primero la compresión para el correo. Divide por secciones cuando los destinatarios solo necesiten una parte del documento o cuando la compresión se estanque."
        },
        {
          "question": "¿Por qué a veces el resultado es más grande?",
          "answer": "Volver a codificar puede añadir sobrecoste si las imágenes ya eran muy pequeñas o si crecieron los metadatos. Conserva el original cuando ocurra eso."
        },
        {
          "question": "¿Qué tan grande puede ser un PDF para que el navegador lo abra?",
          "answer": "Los límites de memoria varían según el dispositivo. Los libros escaneados muy grandes pueden fallar en la pestaña; prueba con menos páginas o con una aplicación de escritorio."
        },
        {
          "question": "¿La compresión quita los metadatos del PDF?",
          "answer": "No siempre. Usa una herramienta de metadatos si necesitas vaciar por separado los autores, los títulos u otros campos ocultos."
        },
        {
          "question": "¿Comprimir es lo mismo que convertir a PDF/A?",
          "answer": "No. PDF/A es una norma de archivo con reglas más estrictas. La compresión solo busca reducir los bytes."
        },
        {
          "question": "¿Puedo comprimir PDF hechos a partir de fotos del teléfono?",
          "answer": "Sí, y a menudo se reducen mucho porque las imágenes de la cámara son grandes. Bajar la calidad de las imágenes ayuda cuando la legibilidad sigue siendo aceptable."
        },
        {
          "question": "¿Los formularios y las anotaciones sobreviven a la compresión?",
          "answer": "Los optimizadores sencillos los conservan; los modos de reescritura agresivos podrían no hacerlo. Revisa los campos interactivos después de comprimir."
        },
        {
          "question": "¿Cuántas veces debo recomprimir el mismo archivo?",
          "answer": "Una vez suele bastar. Las pasadas con pérdida repetidas pueden degradar los escaneos sin mucho más ahorro de tamaño."
        }
      ]
    },
    "metaDescription": "Reduce el tamaño de un PDF en tu navegador con ajustes de reescritura o rasterizado. La compresión no está garantizada.",
    "ui": {}
  },
  "pdf-to-text": {
    "answer": "PDF a texto copia el texto seleccionable de las páginas de un PDF en tu navegador. Los escaneos que solo son imagen suelen dar poco o ningún texto porque no se incluye OCR.",
    "content": {
      "about": "Extrae la capa de texto de un PDF, de todas las páginas, de una página o de un rango como 1-3,5. Úsalo en una factura nacida digital cuando quieras pegar las palabras en un editor. Una página escaneada sin capa de texto vuelve vacía, porque esta página no ejecuta OCR.",
      "howTo": [
        "Sube un PDF. El recuento de páginas y el tamaño del archivo aparecen después de leer el archivo en local.",
        "Elige todas las páginas, una página o un rango como 1-3,5.",
        "Pulsa Extraer texto. Copia el resultado o descarga un archivo .txt.",
        "Si una página sale en blanco, es probable que no tenga capa de texto."
      ],
      "examples": [
        {
          "title": "Una factura digital",
          "body": "Los PDF nacidos digitales suelen tener una capa de texto. Extraer todas las páginas da un borrador usable que puedes copiar a una hoja de cálculo o a un editor."
        },
        {
          "title": "Un contrato fotografiado",
          "body": "Un escaneo guardado como imágenes a menudo da páginas vacías. Esta herramienta no hace OCR. Usa una aplicación de OCR dedicada si necesitas leer fotos de texto."
        }
      ],
      "explanation": "PDF.js lee el contenido de texto guardado en cada página. Eso no es reconocimiento óptico de caracteres. Los saltos de línea se reconstruyen a partir de las posiciones de los glifos, lo que es legible en la mayoría de los archivos nacidos digitales e imperfecto en maquetaciones muy apretadas.",
      "limitations": "El extractor lee una capa de texto guardada. No ejecuta OCR, así que una página escaneada puede volver en blanco. Se rechazan los archivos de más de 20 MB o los documentos de más de 80 páginas. Un PDF protegido con contraseña no se abre. Los saltos de línea se reconstruyen a partir de las posiciones de los glifos, así que una maquetación apretada puede salir irregular.",
      "faqs": [
        {
          "question": "¿La herramienta PDF a texto es gratuita?",
          "answer": "Sí. Extraer la capa de texto de un PDF es gratis y no necesitas una cuenta."
        },
        {
          "question": "¿Esto sube mi PDF?",
          "answer": "No. La capa de texto se lee en esta pestaña. El archivo no se envía a un servidor."
        },
        {
          "question": "¿Por qué el resultado está vacío?",
          "answer": "La página puede ser una imagen sin capa de texto, o el archivo puede estar cifrado. Este conversor no incluye OCR."
        },
        {
          "question": "¿Cómo copio texto de un PDF?",
          "answer": "Abre el PDF aquí para extraer su capa de texto y luego copia o descarga el texto. El archivo se queda en tu dispositivo."
        },
        {
          "question": "¿Por qué un PDF escaneado no da texto?",
          "answer": "Una página escaneada es una imagen de texto sin una capa de texto que leer. Necesita OCR (reconocimiento óptico de caracteres), que esta herramienta no ejecuta."
        }
      ]
    },
    "metaDescription": "Extrae el texto seleccionable de un PDF en tu navegador, de todas las páginas o de un rango. Las páginas escaneadas necesitan OCR, que no está incluido.",
    "ui": {}
  },
  "image-to-text": {
    "answer": "Imagen a texto lee palabras en inglés de una foto en tu navegador. La primera vez se descargan el motor de reconocimiento y el archivo de idioma inglés. Un letrero legible igualmente puede volver con letras incorrectas, así que revisa el texto antes de usarlo.",
    "content": {
      "about": "Esto lee texto en inglés de una foto en esta pestaña. Es más lento que las herramientas de imagen del lienzo. La primera vez, este navegador descarga el motor de reconocimiento y el archivo de idioma inglés, unos 6,6 MB. Las ejecuciones posteriores en este navegador reutilizan esa descarga. El resultado depende de la foto. Un letrero legible igualmente puede volver con letras incorrectas, y un fondo recargado puede añadir líneas que no son texto. El desenfoque, el brillo y la tipografía pequeña lo empeoran. Revisa el texto antes de usarlo.",
      "howTo": [
        "Elige una imagen JPG, PNG o WebP.",
        "Pulsa Leer texto. La primera vez, este navegador descarga el motor de reconocimiento y el archivo de idioma inglés.",
        "Espera el texto. Una foto grande se reduce antes de leerse.",
        "Revisa el texto y luego cópialo si se ve bien."
      ],
      "features": [
        "Texto en inglés de una foto, en esta pestaña.",
        "Un lado largo de más de 1600 píxeles se reduce antes de la lectura.",
        "Los archivos de reconocimiento se quedan en este sitio. No se cargan desde otro host."
      ],
      "examples": [
        {
          "title": "Un letrero clavado en un árbol",
          "body": "Una foto real al aire libre de un letrero impreso, con corteza y hojas alrededor. Volvieron las líneas de caza y de prohibido el paso. PRIVATE PROPERTY volvió con letras que faltaban, y VIOLATORS volvió como VIOLKTORS. La palabra más grande, POSTED, no volvió como una palabra limpia, y la corteza añadió líneas extra."
        }
      ],
      "explanation": "Después de pulsar Leer texto, esta pestaña carga el motor de reconocimiento y el archivo de idioma inglés desde este sitio. La foto se dibuja más pequeña cuando su lado largo supera los 1600 píxeles, y luego las palabras se leen en esta pestaña. La imagen no se sube.",
      "tips": [
        "Una foto recta y bien iluminada de una tipografía grande es más fácil de leer que una lejana o inclinada.",
        "Compara el resultado con la foto. No trates una palabra mal leída como el original."
      ],
      "limitations": "Solo inglés. Una imagen a la vez. Solo JPG, PNG y WebP, hasta 25 MB. La primera vez se descargan unos 6,6 MB. Las ejecuciones posteriores en este navegador reutilizan esa descarga. Leer una foto es más lento que las herramientas de imagen del lienzo. El resultado depende de la foto. Un letrero legible igualmente puede volver con letras incorrectas, y un fondo recargado puede añadir líneas que no son texto. El desenfoque, el brillo y la tipografía pequeña lo empeoran. Un lado largo de más de 1600 píxeles se reduce antes de la lectura.",
      "faqs": [
        {
          "question": "¿La herramienta de imagen a texto es gratuita?",
          "answer": "Sí. Puedes leer texto en inglés de una foto aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Se sube la foto?",
          "answer": "No. La foto se lee en esta pestaña del navegador. Tools Star Hub no envía la imagen a un servidor ni la guarda en el almacenamiento local. El motor de reconocimiento y el archivo de idioma inglés se cargan desde este sitio."
        },
        {
          "question": "¿Por qué la primera vez es lenta?",
          "answer": "La primera vez, este navegador descarga el motor de reconocimiento y el archivo de idioma inglés, unos 6,6 MB. Las ejecuciones posteriores en este navegador reutilizan esa descarga. Leer la foto también es más lento que redimensionar o comprimir una imagen."
        },
        {
          "question": "¿Una foto nítida se leerá correctamente?",
          "answer": "No siempre. En una foto real al aire libre de un letrero impreso, algunas líneas volvieron y algunas letras estaban mal. Un fondo recargado puede añadir líneas que no son texto. El desenfoque, el brillo y la tipografía pequeña lo empeoran. Revisa el texto antes de usarlo."
        },
        {
          "question": "¿Lee idiomas distintos del inglés?",
          "answer": "No. El inglés es el único archivo de idioma incluido."
        },
        {
          "question": "¿Cómo funciona el OCR de imagen a texto en el navegador?",
          "answer": "La página carga un motor de reconocimiento, lee los píxeles de tu imagen en local cuando es posible y propone un texto plano que puedes copiar. La calidad depende de la nitidez, el contraste y el idioma admitido."
        },
        {
          "question": "¿Qué formatos de imagen funcionan mejor para el OCR?",
          "answer": "Las fotos PNG y JPEG de documentos planos funcionan bien. Las capturas muy comprimidas de redes sociales y las fotos inclinadas del teléfono necesitan una toma más recta y nítida."
        },
        {
          "question": "¿Cómo puedo mejorar la precisión del OCR?",
          "answer": "Usa una iluminación uniforme, evita las sombras, llena el encuadre con el texto y recorta las distracciones. Un texto negro de alto contraste sobre blanco suele ir mejor que los fondos de colores."
        },
        {
          "question": "¿El OCR conserva la maquetación original?",
          "answer": "La mayoría del OCR del navegador devuelve un flujo de texto en orden de lectura, no una maquetación de página perfecta. Espera tener que volver a aplicar columnas o tablas después de pegar."
        },
        {
          "question": "¿Puede leer escritura a mano?",
          "answer": "El texto impreso es mucho más fiable. La escritura cuidada a veces funciona; la cursiva y el lápiz débil a menudo fallan y conviene teclearlos."
        },
        {
          "question": "¿Mi foto se sube para el OCR?",
          "answer": "Esta herramienta está pensada para procesar en el navegador después de cargar los archivos del modelo. Prefiere un archivo local nítido y consulta la nota de privacidad de la página si necesitas una garantía estricta de uso sin conexión."
        },
        {
          "question": "¿Por qué algunas letras se intercambian?",
          "answer": "Las formas parecidas, como O/0 e I/l, confunden al OCR. Revisa con cuidado los números y los nombres antes de confiar en el texto."
        },
        {
          "question": "¿Puedo hacer OCR de un PDF con esta herramienta?",
          "answer": "Esta página espera una imagen. Convierte primero las páginas del PDF a imágenes, o usa una herramienta de texto de PDF dedicada cuando el archivo ya contiene una capa de texto."
        },
        {
          "question": "¿La rotación importa?",
          "answer": "Las páginas al revés o de lado a menudo fallan. Gira la imagen en posición vertical antes de ejecutar el OCR."
        },
        {
          "question": "¿Qué tan grande puede ser la imagen?",
          "answer": "Las fotos muy grandes pueden redimensionarse por los límites de memoria. Si el texto se vuelve suave después de reducir, recorta al párrafo que necesitas y vuelve a ejecutar."
        },
        {
          "question": "¿El OCR puede extraer texto de capturas de aplicaciones?",
          "answer": "Sí, cuando las fuentes son claras. El cromado de la interfaz, los iconos y las ventanas superpuestas reducen la precisión, así que recorta a la zona de texto."
        },
        {
          "question": "¿Qué idiomas puede reconocer?",
          "answer": "La admisión depende de los datos de idioma cargados. El inglés es el valor predeterminado habitual; otros idiomas necesitan datos entrenados coincidentes en la página."
        },
        {
          "question": "¿El OCR es lo mismo que un traductor de cámara en vivo?",
          "answer": "El OCR copia texto de una imagen fija. Las aplicaciones de traducción en vivo añaden fotogramas continuos de la cámara y traducción automática por encima."
        },
        {
          "question": "¿Debo comprimir la imagen antes del OCR?",
          "answer": "Una compresión suave está bien. La compresión fuerte que desenfoca los bordes perjudica más el reconocimiento de lo que ayuda al tamaño de subida."
        },
        {
          "question": "¿Qué debo hacer con el texto extraído?",
          "answer": "Cópialo a tu editor, corrige los errores y luego guarda. Los documentos sensibles deben borrarse de la página cuando termines."
        }
      ]
    },
    "metaDescription": "Lee texto en inglés de una foto en tu navegador. La primera vez se descargan 6,6 MB de archivos de reconocimiento. Una foto real puede dar letras incorrectas.",
    "ui": {}
  },
  "pdf-metadata": {
    "answer": "Los metadatos de un PDF son información extra del documento, como el título y el autor. Esta herramienta puede mostrar los campos Info habituales y vaciarlos en una copia descargada.",
    "content": {
      "about": "Muestra los campos Info estándar de un PDF, como el título, el autor y el creador, y descarga una copia con esos campos vacíos. Úsalo cuando un nombre de autor antiguo no deba viajar con el archivo. El texto de las páginas, los comentarios y las imágenes incrustadas se quedan, así que vaciar los campos Info no es un borrado completo.",
      "howTo": [
        "Elige un PDF. Se muestran el nombre del archivo, el tamaño y el recuento de páginas, junto con los campos Info estándar.",
        "Revisa Título, Autor, Asunto, Palabras clave, Creador, Productor y las fechas cuando existan.",
        "Pulsa Quitar metadatos para armar una copia con esos campos Info del documento vacíos.",
        "Descarga el PDF limpio. Conserva el original si aún necesitas las propiedades."
      ],
      "examples": [
        {
          "title": "Un archivo con un nombre de autor antiguo",
          "body": "El visor muestra Autor y Creador cuando el diccionario Info los tiene. Quitar los metadatos vacía esos campos en la descarga nueva, no en el archivo que sigue en el disco."
        },
        {
          "title": "Un panel de propiedades vacío",
          "body": "Muchos PDF nunca fijan Título o Autor. La herramienta igualmente indica el nombre del archivo, el tamaño y el recuento de páginas."
        }
      ],
      "explanation": "Los archivos PDF pueden guardar un diccionario Info del documento (y a veces otras secuencias de metadatos). Esta herramienta lee los campos Info habituales con pdf-lib y puede copiar las páginas a un archivo nuevo para que esos campos queden en blanco. Eso no es un borrado forense. El texto del cuerpo, los comentarios, los archivos incrustados y las imágenes aún pueden identificar a una persona o a un dispositivo.",
      "limitations": "El visor enumera el nombre del archivo, el tamaño, el recuento de páginas y los campos Info estándar cuando existen: título, autor, asunto, palabras clave, creador, productor y fechas. Quitar metadatos vacía esos campos en una descarga nueva. El texto de las páginas, los comentarios, los archivos incrustados y las imágenes se quedan. Se rechazan los documentos de más de 80 páginas, y un archivo protegido con contraseña no se abre.",
      "faqs": [
        {
          "question": "¿El visor / eliminador de metadatos PDF es gratuito?",
          "answer": "Sí. Ver los campos Info de un PDF, y vaciarlos en una descarga nueva, es gratis y no hace falta una cuenta."
        },
        {
          "question": "¿Qué son los metadatos de un PDF?",
          "answer": "Es información extra guardada con el documento, como el título, el autor, el asunto, las palabras clave, el creador, el productor y las fechas. Es distinta de las palabras de las páginas."
        },
        {
          "question": "¿Quitar los metadatos hace que el PDF sea anónimo?",
          "answer": "No. Vaciar los campos Info estándar no quita toda la información identificadora posible del contenido, las anotaciones, los objetos incrustados, el historial del archivo u otras estructuras."
        },
        {
          "question": "¿Cómo veo quién creó un PDF?",
          "answer": "Abre el archivo y lee los campos Autor, Creador y Productor, junto con las fechas de creación y de modificación, cuando el documento las incluye."
        },
        {
          "question": "¿Debería quitar los metadatos antes de compartir un PDF?",
          "answer": "Si los campos muestran un nombre, una empresa o un software que preferirías no compartir, vaciarlos es un paso razonable. El texto dentro de las páginas no se modifica."
        }
      ]
    },
    "metaDescription": "Consulta los campos de información habituales de un PDF y descarga en local una copia con esos campos vacíos. El texto de las páginas no se borra.",
    "ui": {}
  },
  "text-to-pdf": {
    "answer": "Texto a PDF coloca texto sin formato ajustado en páginas A4 o Carta en tu navegador y descarga un PDF.",
    "content": {
      "about": "Convierte el texto pegado en un PDF A4 o Carta, con ajuste de línea, un título opcional y números de página opcionales. Úsalo para notas de una reunión que deban ser un documento sencillo. Los caracteres que Helvetica no puede dibujar se convierten en un signo de interrogación, y se rechaza una entrada de más de 100 000 caracteres.",
      "howTo": [
        "Pega o escribe el texto. De forma opcional, añade un título.",
        "Elige A4 o Carta, un margen, el tamaño de la fuente y el interlineado. Activa los números de página si los quieres.",
        "Pulsa Crear PDF. Las líneas largas se ajustan. Se añaden páginas extra según haga falta.",
        "Descarga el PDF. Vacía el recuadro cuando termines; no se guarda nada."
      ],
      "examples": [
        {
          "title": "Notas de una reunión",
          "body": "Pega unos cuantos párrafos, deja márgenes medios y un tipo de 12 pt, y luego descarga. Los números de página ayudan si las notas superan una página."
        },
        {
          "title": "Un registro muy largo",
          "body": "La herramienta limita la entrada para que la pestaña siga utilizable. Divide primero los registros enormes. Los caracteres que Helvetica no puede dibujar se sustituyen por «?»."
        }
      ],
      "explanation": "Las páginas se arman con pdf-lib y la fuente estándar Helvetica. El texto se ajusta al recuadro de contenido. Helvetica cubre el latín y un conjunto limitado de caracteres extra, no todos los alfabetos Unicode. La herramienta indica cuántos caracteres se sustituyeron, en lugar de pretender que la fuente es universal.",
      "limitations": "Las páginas usan Helvetica. Los caracteres que esa fuente no puede dibujar se convierten en «?». Se rechaza una entrada de más de 100 000 caracteres. El tamaño de la fuente se queda entre 8 y 24 puntos, y el tamaño de página es A4 o Carta. No se colocan en el documento imágenes ni HTML con estilo.",
      "faqs": [
        {
          "question": "¿El conversor de texto a PDF es gratuito?",
          "answer": "Sí. Convertir el texto pegado en un PDF no requiere pago ni una cuenta."
        },
        {
          "question": "¿Puedo usar cualquier idioma?",
          "answer": "El texto en alfabeto latino suele funcionar. Muchos otros sistemas de escritura quedan fuera de la cobertura de Helvetica y se mostrarán como «?». Es un límite de la fuente, no un filtro de idioma."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. El PDF se arma en esta pestaña a partir del texto que pegas. Ese texto no se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo convierto un archivo de texto en un PDF?",
          "answer": "Pega el texto, elige A4 o Carta, el tamaño de la fuente, los márgenes y los números de página, y luego crea y descarga el PDF."
        },
        {
          "question": "¿Por qué algunos caracteres se muestran como un signo de interrogación?",
          "answer": "El PDF usa la fuente Helvetica, que no puede dibujar todos los alfabetos ni los emojis. Los caracteres que no puede dibujar se sustituyen por ?."
        },
        {
          "question": "¿Cómo fijo un título que aparezca en los metadatos del PDF?",
          "answer": "Si la herramienta ofrece un campo de título, llénalo antes de generar; de lo contrario, el archivo puede usar un nombre genérico."
        },
        {
          "question": "¿Puedo elegir el tamaño de página, como A4 o Carta?",
          "answer": "Usa el control de tamaño de página cuando esté disponible para que el PDF coincida con tu impresora o con las normas de entrega."
        },
        {
          "question": "¿Las líneas largas se ajustan o se cortan?",
          "answer": "Las líneas largas suelen ajustarse dentro de los márgenes de la página; previsualiza y ajusta el tamaño de la fuente si el texto se ve apretado."
        },
        {
          "question": "¿Cómo convierto notas con varios párrafos?",
          "answer": "Pega el texto completo con líneas en blanco entre los párrafos y luego genera, para que se conserve el espaciado."
        },
        {
          "question": "¿La elección de fuente afecta mucho al tamaño del archivo?",
          "answer": "Las fuentes incrustadas pueden añadir peso; las fuentes estándar mantienen más ligeros los PDF de texto pequeños."
        },
        {
          "question": "¿Puedo incluir urdu u otras escrituras complejas?",
          "answer": "Sí, cuando la fuente admite esos glifos; de lo contrario, los caracteres pueden verse como recuadros o signos de interrogación."
        },
        {
          "question": "¿Cómo descargo el PDF terminado?",
          "answer": "Genera y luego usa el control de descarga; abre el archivo en local para confirmar la maquetación antes de compartirlo."
        },
        {
          "question": "¿Hay un límite de caracteres en el recuadro para pegar?",
          "answer": "Los pegados muy grandes pueden ralentizar el navegador; divídelos en capítulos si la generación se detiene."
        },
        {
          "question": "¿Los hipervínculos del texto sin formato se vuelven clicables?",
          "answer": "Los conversores de texto sin formato a menudo dejan las URL solo como texto, salvo que haya una opción de enlace activada."
        },
        {
          "question": "¿Puedo proteger el PDF con contraseña aquí?",
          "answer": "Solo si la herramienta muestra una opción de cifrado; de lo contrario, protege el archivo después en un editor de PDF."
        },
        {
          "question": "¿Cómo afectan los márgenes al texto imprimible?",
          "answer": "Los márgenes más anchos reducen la longitud de la línea; los más estrechos caben más palabras, pero pueden verse apretados al imprimir."
        },
        {
          "question": "¿Volver a generar sobrescribe mi descarga anterior?",
          "answer": "Cada generación crea un archivo nuevo en tus descargas; cambia el nombre de las copias anteriores si necesitas ambas."
        },
        {
          "question": "¿Puedo convertir Markdown a PDF con esta herramienta?",
          "answer": "Espera una maquetación de texto sin formato; convierte primero el Markdown a texto presentado si necesitas encabezados con estilo."
        },
        {
          "question": "¿Por qué mi PDF está en blanco después de descargarlo?",
          "answer": "Comprueba que el recuadro de texto no estuviera vacío y que un bloqueador de ventanas emergentes no haya detenido el archivo."
        },
        {
          "question": "¿Se guarda el texto de origen cuando me voy?",
          "answer": "Mantén los borradores sensibles sin conexión; la página está pensada para una conversión local, sin subir tus notas."
        }
      ]
    },
    "metaDescription": "Convierte texto sin formato en un PDF de varias páginas en tu navegador, con ajuste de línea, márgenes y números de página opcionales.",
    "ui": {}
  },
  "word-to-pdf": {
    "answer": "Una herramienta de Word a PDF lee las palabras de un archivo .docx y las coloca en un PDF sencillo. Se omiten las imágenes, las tablas como cuadrícula, las cabeceras, los pies y el estilo del texto. No es una copia de la maquetación de Word.",
    "content": {
      "about": "Word a PDF lee las palabras de un archivo .docx y las coloca en un PDF sencillo. Se omiten las imágenes, las tablas como cuadrícula, las cabeceras, los pies y el estilo del texto. No es una copia de la maquetación de Word.",
      "howTo": [
        "Elige un archivo .docx. Se rechaza un archivo .doc.",
        "De forma opcional, añade un título. Elige A4 o Carta, un margen, el tamaño de la fuente y el interlineado.",
        "Pulsa Crear PDF. Las palabras se ajustan en las páginas con Helvetica.",
        "Descarga word.pdf. El archivo se queda en esta pestaña."
      ],
      "features": [
        "El texto de los párrafos, las palabras de los encabezados, las de los elementos de lista y las de las celdas de tabla.",
        "Los mismos tamaños de página, márgenes y fuente Helvetica que Texto a PDF.",
        "Una nota cuando se sustituye un carácter porque Helvetica no puede dibujarlo."
      ],
      "examples": [
        {
          "title": "Un encabezado, una tabla, una lista y una imagen",
          "body": "Se conservan las palabras del encabezado, las de las celdas y las de los elementos de la lista. Se omite la imagen. No se conservan los números automáticos de lista de Word. La tabla no se dibuja como una cuadrícula."
        },
        {
          "title": "Un archivo .doc renombrado a .docx",
          "body": "La página indica que ese archivo no se pudo leer como un documento de Word. No muestra un error interno."
        }
      ],
      "explanation": "El archivo se descomprime en esta pestaña y se lee el texto de los párrafos. Ese texto se coloca luego con el mismo generador de PDF en Helvetica que el texto pegado. Un salto de página de Word no inicia una página nueva del PDF.",
      "tips": [
        "Si el documento es solo una imagen, no hay texto que convertir.",
        "Revisa el PDF. Un carácter que Helvetica no puede dibujar se convierte en un signo de interrogación."
      ],
      "limitations": "Se omiten las imágenes, los dibujos, los gráficos y las formas. Se omiten la negrita, la cursiva, los colores, las fuentes y los tamaños de encabezado. Una tabla se convierte en el texto de las celdas en orden de lectura, no en una cuadrícula. Una lista conserva el texto de los elementos y no conserva los números automáticos de Word. No se incluyen cabeceras, pies, notas al pie, comentarios ni cuadros de texto. Se rechaza un archivo .doc. Un carácter que Helvetica no puede dibujar se convierte en «?». Se rechazan más de 100 000 caracteres de texto extraído.",
      "faqs": [
        {
          "question": "¿El conversor de Word a PDF es gratuito?",
          "answer": "Sí. Puedes convertir un archivo .docx en un PDF sencillo aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿El PDF se verá como mi documento de Word?",
          "answer": "No. Se omiten las imágenes, las tablas como cuadrícula, las cabeceras, los pies y el estilo del texto. No es una copia de la maquetación de Word."
        },
        {
          "question": "¿Y si elijo un archivo .doc?",
          "answer": "Usa un archivo .docx. Esta herramienta no lee archivos .doc. Un archivo .doc renombrado a .docx no se puede leer como un documento de Word."
        },
        {
          "question": "¿Se envía mi archivo a un servidor?",
          "answer": "No. El PDF se arma en esta pestaña del navegador a partir del .docx que eliges. Tools Star Hub no envía ese archivo a un servidor ni lo guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo convierto un documento de Word a PDF en el navegador?",
          "answer": "Elige un archivo .docx, inicia la conversión y luego descarga el PDF. El archivo se procesa en el navegador y no se sube a Tools Star Hub para almacenarlo."
        },
        {
          "question": "¿Un .doc (Word antiguo) funciona igual que un .docx?",
          "answer": "La herramienta espera un .docx moderno. Un archivo .doc más antiguo a menudo se rechaza. Ábrelo en Word o LibreOffice y guárdalo primero como .docx."
        },
        {
          "question": "¿El PDF coincidirá exactamente con mi maquetación de Word?",
          "answer": "Las maquetaciones complejas, las fuentes poco habituales y los objetos incrustados pueden desplazarse. Revisa el PDF después de la conversión cuando importe una maquetación de impresión exacta al píxel."
        },
        {
          "question": "¿Las fuentes se incrustan en el PDF?",
          "answer": "La incrustación depende de lo que el conversor pueda usar en el navegador. Las fuentes que faltan pueden pasar a sustitutas y cambiar los saltos de línea."
        },
        {
          "question": "¿Puedo convertir varios archivos de Word a la vez?",
          "answer": "Convierte un documento a la vez en esta página. La conversión por lotes corresponde a una aplicación de escritorio o a un servicio de lotes dedicado."
        },
        {
          "question": "¿La conversión necesita tener instalado Microsoft Word?",
          "answer": "No. El conversor del navegador no requiere la aplicación de escritorio de Word."
        },
        {
          "question": "¿Qué ocurre con las imágenes que hay dentro del documento?",
          "answer": "Las imágenes incluidas en el .docx se llevan al PDF cuando el conversor puede leerlas. Las imágenes muy grandes pueden remuestrearse."
        },
        {
          "question": "¿Se conservan los comentarios y los cambios de control?",
          "answer": "La conversión se centra en el cuerpo del documento. Revisa los comentarios y los cambios de control en Word antes de convertir si necesitas un entregable limpio."
        },
        {
          "question": "¿Puedo proteger el PDF con contraseña aquí?",
          "answer": "Esta página convierte a una descarga de PDF estándar. Añade una contraseña después en un editor de PDF si la necesitas."
        },
        {
          "question": "¿Mi documento se guarda en un servidor?",
          "answer": "No. El archivo de Word no se queda en Tools Star Hub después de convertirlo. El trabajo se queda en la sesión del navegador."
        },
        {
          "question": "¿Por qué el PDF es más grande o más pequeño que el .docx?",
          "answer": "PDF y Word empaquetan las imágenes y las fuentes de formas distintas. El tamaño por sí solo no significa que se hayan omitido páginas."
        },
        {
          "question": "¿Las cabeceras y los pies sobreviven a la conversión?",
          "answer": "Suelen aparecer cuando el conversor los admite. Revisa la primera y la última página después de descargar."
        },
        {
          "question": "¿Puedo editar el PDF después de convertirlo?",
          "answer": "Puedes abrirlo en un editor de PDF. Para cambios de texto importantes, modifica el origen de Word y vuelve a convertir."
        },
        {
          "question": "¿Y si falla la conversión?",
          "answer": "Prueba a volver a guardar el archivo como .docx, quita el contenido de complementos poco habituales y vuelve a convertir. Un archivo comprimido dañado dentro del .docx también fallará."
        },
        {
          "question": "¿Esta herramienta imprime el documento?",
          "answer": "Arma un archivo PDF para descargar. Imprimir es opcional después, desde tu visor de PDF."
        },
        {
          "question": "¿Hay un límite de páginas?",
          "answer": "Los documentos muy grandes pueden alcanzar los límites de memoria del navegador. Divide los archivos enormes o convierte en el escritorio si la pestaña se queda sin memoria."
        }
      ]
    },
    "metaDescription": "Lee las palabras de un archivo .docx y las coloca en un PDF sencillo. Se omiten las imágenes, las tablas como cuadrícula y el estilo del texto.",
    "ui": {}
  },
  "favicon-generator": {
    "answer": "Un generador de favicon dibuja iconos PNG de 16, 32 y 180 píxeles a partir de un color y de hasta dos letras, y empaqueta los PNG de 16 y 32 píxeles en un archivo ICO.",
    "content": {
      "about": "Elige un color de fondo, un color de letra y hasta dos letras. La página dibuja iconos PNG de 16, 32 y 180 píxeles en esta pestaña. El archivo ICO solo contiene las imágenes de 16 y 32 píxeles.",
      "howTo": [
        "Escribe un color de fondo de 6 dígitos y un color de letra de 6 dígitos.",
        "Escribe una o dos letras, o deja las letras en blanco para un color sólido.",
        "Pulsa Generar y luego descarga los tamaños PNG o el archivo ICO."
      ],
      "features": [
        "Archivos PNG de 16, 32 y 180 píxeles.",
        "Un archivo ICO que contiene los PNG de 16 y 32 píxeles.",
        "Un recuadro de letras vacío dibuja un color sólido."
      ],
      "examples": [
        {
          "title": "Un icono azul con una T",
          "body": "Fondo #2563eb, letras #ffffff y la letra T dibujan un cuadrado azul con una T blanca."
        },
        {
          "title": "Un color sólido",
          "body": "Los mismos colores con las letras en blanco dibujan un cuadrado azul sólido en cada tamaño."
        }
      ],
      "explanation": "Cada tamaño es un lienzo cuadrado relleno con el color de fondo. Una o dos letras se centran en el color de letra. El archivo ICO es una cabecera pequeña más los bytes PNG de 16 y 32 píxeles. La imagen de 180 píxeles es el PNG apple-touch y no se coloca dentro del ICO.",
      "tips": [
        "Usa el [redimensionador de imágenes](/tools/image-resizer) cuando ya tienes una imagen y solo necesitas un tamaño nuevo en píxeles."
      ],
      "limitations": "Los colores deben ser hexadecimales de 6 dígitos, como #2563eb. Se rechaza el hexadecimal de 3 dígitos. Las letras son texto plano sobre un color plano, no el calco de un logotipo. El ICO solo contiene las imágenes de 16 y 32 píxeles.",
      "faqs": [
        {
          "question": "¿El generador de favicon es gratuito?",
          "answer": "Sí. Puedes dibujar los iconos aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Qué archivo es el icono de la pestaña del navegador?",
          "answer": "favicon.ico, o los PNG de 16 y 32 píxeles. El PNG de 180 píxeles es el icono apple-touch."
        },
        {
          "question": "¿Un recuadro de letras vacío falla?",
          "answer": "No. Dibuja el color de fondo sin letras."
        },
        {
          "question": "¿Se sube el icono?",
          "answer": "No. Los archivos se dibujan en esta pestaña del navegador. Tools Star Hub no envía los colores ni las letras a un servidor ni los guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué tamaño debe tener un favicon?",
          "answer": "Los favicon clásicos tienen 16×16 y 32×32 píxeles. Muchos sitios también incluyen 180×180 para los iconos de Apple. Generar unos cuantos PNG cuadrados cubre la mayoría de los navegadores y de los marcadores de la pantalla de inicio."
        },
        {
          "question": "¿Qué formatos de archivo sirven para los favicon?",
          "answer": "ICO reúne varios tamaños en un solo archivo; PNG funciona bien en los navegadores modernos. Los favicon SVG se admiten en algunos navegadores, pero no en todos, así que conserva un respaldo PNG o ICO."
        },
        {
          "question": "¿Cómo añado un favicon a mi sitio web?",
          "answer": "Sube los archivos del icono a la raíz de tu sitio o a una carpeta de recursos, y luego enlázalos en el head del HTML con `rel=\"icon\"` (y `apple-touch-icon` cuando publicas un PNG de 180 px)."
        },
        {
          "question": "¿Por qué no aparece mi favicon nuevo?",
          "answer": "Los navegadores almacenan los favicon en la caché de forma agresiva. Haz una recarga forzada, prueba una ventana privada, o cambia el nombre del archivo o la cadena de consulta después de sustituir el icono."
        },
        {
          "question": "¿El favicon debe ser un logotipo o una letra?",
          "answer": "Cualquiera de los dos funciona si se sigue leyendo a 16 píxeles. Los logotipos recargados se vuelven un borrón; una marca sencilla o un monograma suele sobrevivir mejor al tamaño diminuto de la pestaña."
        },
        {
          "question": "¿Necesito un favicon aparte para el modo oscuro?",
          "answer": "Es opcional, pero ayuda. Los glifos claros desaparecen en las pestañas claras; algunos sitios publican iconos alternativos o eligen colores con contraste en ambos temas."
        },
        {
          "question": "¿Puedo hacer un favicon a partir de un PNG grande?",
          "answer": "Sí. Parte de una imagen cuadrada nítida y luego redúcela. Ampliar una fuente diminuta se queda borrosa, así que conserva un original de alta resolución."
        },
        {
          "question": "¿Cuál es la diferencia entre favicon.ico y apple-touch-icon?",
          "answer": "`favicon.ico` cubre las pestañas del navegador y los marcadores. El icono Apple touch es el icono más grande de la pantalla de inicio en iOS. Muchos generadores exportan ambos a partir de un solo diseño."
        },
        {
          "question": "¿Funciona un fondo transparente?",
          "answer": "A menudo sí en los iconos PNG. En algunas pestañas la transparencia deja ver el cromado del navegador a través de la marca, así que prueba la interfaz clara y la oscura antes de publicarlo."
        },
        {
          "question": "¿Cuántos tamaños de favicon necesito de verdad?",
          "answer": "Una base sólida es 16, 32 y 180 píxeles, más un ICO o un PNG para `rel=\"icon\"`. Las aplicaciones web progresivas pueden añadir más iconos a través del manifiesto web."
        },
        {
          "question": "¿Un emoji puede servir como favicon?",
          "answer": "Puedes dibujar un emoji en un lienzo cuadrado y exportar tamaños PNG. Comprueba la claridad a 16 px; no todos los emojis se reconocen tan pequeños."
        },
        {
          "question": "¿El generador sube mi logotipo a un servidor?",
          "answer": "Esta página arma los iconos en el navegador a partir de lo que aportas. Prefiere arte no confidencial si no estás seguro de alguna ruta de red en tu dispositivo."
        },
        {
          "question": "¿Por qué se rechazó mi color hexadecimal?",
          "answer": "Los campos de color del favicon suelen esperar un hexadecimal completo, como `#ffffff`. Un atajo o un `#` que falta puede fallar la validación según el formulario."
        },
        {
          "question": "¿El favicon debe coincidir con mi imagen Open Graph?",
          "answer": "Comparten los colores de marca, pero las imágenes OG son vistas previas sociales grandes y los favicon son marcas diminutas de pestaña. Diseña cada uno para su tamaño, en lugar de reutilizar un solo archivo para ambos."
        },
        {
          "question": "¿Puedo cambiar los favicon según el entorno?",
          "answer": "Sí. Los sitios de prueba a menudo usan otro color o una insignia para que las pestañas no se confundan con producción. Apunta las etiquetas head de cada entorno a sus propios archivos de icono."
        },
        {
          "question": "¿Los buscadores usan mi favicon en los resultados?",
          "answer": "Algunos diseños de resultados muestran un favicon junto al nombre del sitio. Mantén el archivo rastreable, cuadrado y estable para que los rastreadores puedan recogerlo."
        }
      ]
    },
    "metaDescription": "Dibuja una letra o un color sólido como iconos PNG de 16, 32 y 180 píxeles, además de un ICO con los dos tamaños menores.",
    "ui": {}
  },
  "youtube-banner-maker": {
    "answer": "Una imagen de canal de YouTube debe medir 2560 × 1440 píxeles y pesar menos de 6 MB, con nombres y logotipos dentro de la zona segura centrada de 1546 × 423 que se ve en todos los dispositivos. Este editor exporta ese tamaño como PNG o JPG, sin la guía.",
    "content": {
      "about": "Este creador de imágenes de canal de YouTube construye la imagen a 2560 × 1440 píxeles en tu navegador. Empieza con una de las 15 plantillas originales o con un color en blanco, y luego añade texto, fotos, un logotipo, rectángulos, círculos y degradados. Una guía discontinua de 1546 × 423 marca la franja que se ve en teléfonos, escritorios y televisores. La guía te ayuda a colocar nombres y eslóganes, y nunca se dibuja en el archivo descargado. Nada de lo que subes sale de tu dispositivo, porque la edición y la exportación se ejecutan en un lienzo de la página.",
      "howTo": [
        "Elige una plantilla en el panel Plantillas, o conserva la predeterminada y cambia su color de fondo o su degradado.",
        "Selecciona una capa tocando o pulsando en el lienzo o en la lista Capas. Arrástrala para moverla y arrastra el cuadrado dorado de la esquina para redimensionarla.",
        "Edita la capa seleccionada en el panel lateral: texto, fuente, grosor, tamaño, alineación, color, relleno, degradado, radio de esquina, opacidad y posición exacta.",
        "Añade tus propias piezas con Texto, Rectángulo, Círculo, Imagen o Logotipo. Reordena las capas con las flechas y oculta cualquier capa con el botón de punto.",
        "Mantén las palabras y los rostros importantes dentro de la zona segura discontinua, y luego elige PNG o JPG y pulsa Descargar 2560 × 1440."
      ],
      "features": [
        "Exporta a 2560 × 1440, el tamaño que YouTube recomienda para las imágenes de canal, con el archivo en 6 MB o menos.",
        "Una superposición de zona segura de 1546 × 423 que puedes activar o desactivar y que nunca aparece en la exportación.",
        "15 maquetaciones iniciales originales para videojuegos, vlogs, cocina, música, educación, fitness, negocios y más.",
        "Capas con reordenar, ocultar, duplicar y eliminar, más deshacer, rehacer y un restablecimiento a la plantilla elegida.",
        "Arrastre con ratón, lápiz y toque mediante eventos de puntero, un control de zoom del 50 % al 300 % y atajos de teclado."
      ],
      "examples": [
        {
          "title": "Un canal de videojuegos en cinco minutos",
          "body": "Carga Neon Arena, cambia el título al nombre del canal, cambia el eslogan a los días reales de transmisión y arrastra un logotipo PNG transparente al lado izquierdo de la zona segura. La franja de neón queda detrás del texto, así que el nombre se lee bien en un teléfono."
        },
        {
          "title": "Usar una foto como fondo",
          "body": "Empieza en Minimal Mono, pulsa Imagen y elige una foto horizontal. La foto se escala para llenar todo el lienzo. Usa la flecha hacia abajo en la lista Capas para enviarla debajo del título, y luego baja su opacidad para que las palabras destaquen."
        },
        {
          "title": "Mantener un archivo por debajo de 6 MB",
          "body": "Una foto detallada exportada como PNG puede superar los 6 MB a este tamaño. Cuando eso ocurre, la herramienta pasa a JPG y baja la calidad paso a paso hasta que el archivo cabe, y la línea de estado indica el formato y el tamaño que recibiste."
        }
      ],
      "explanation": "El editor guarda tu diseño como una lista de capas dibujadas de abajo arriba sobre un relleno de fondo. Cada cambio, desde elegir un color hasta un arrastre, produce una versión nueva de esa lista, y se conservan hasta 60 versiones para que deshacer y rehacer puedan recorrerlas. El lienzo de vista previa es siempre el tamaño real de 2560 × 1440 y solo se reduce con CSS, así que lo que ves es lo que exportas.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "La zona segura está centrada en el lienzo. Su borde izquierdo está en (2560 − 1546) ÷ 2 = 507 píxeles y su borde superior en (1440 − 423) ÷ 2 = 508,5 píxeles. Todo lo que está dentro de esa caja se ve en todas las clases de dispositivo que admite YouTube. En el escritorio aparecen franjas más anchas y en el televisor puede verse toda la imagen, así que la zona exterior es un buen lugar para textura, color y detalle fotográfico, no para palabras.",
            "Las posiciones del puntero se convierten de píxeles de pantalla a píxeles del lienzo dividiendo por el ancho y el alto mostrados y multiplicando por 2560 y 1440. Eso mantiene el arrastre preciso a cualquier zoom y en cualquier pantalla. Los degradados usan la convención de ángulos de CSS, donde 90 grados van de izquierda a derecha y 180 grados de arriba abajo.",
            "El texto se ajusta dentro de cada recuadro de texto. La herramienta mide cada palabra con las métricas de fuente del navegador y empieza una línea nueva cuando la siguiente palabra superaría el ancho del recuadro. El interlineado es 1,2 veces el tamaño de la fuente.",
            "Al exportar, el diseño se dibuja otra vez en un lienzo nuevo, sin guía, sin contorno de selección y sin el controlador de redimensión. Se prueba un PNG primero cuando eliges PNG. Si supera los 6 MB, o si elegiste JPG, la herramienta codifica JPG a calidad 0,92 y baja por 0,85, 0,75, 0,65 y 0,5 hasta que el archivo mide 6 MB o menos."
          ]
        },
        {
          "heading": "Diseñar para pantallas pequeñas",
          "paragraphs": [
            "En un teléfono la imagen se muestra como una franja estrecha, más o menos la zona segura, así que un nombre en letras grandes se lee mejor que una frase. Un eslogan de cuatro a seis palabras suele bastar. El contraste alto entre el texto y el fondo importa más que la elección de fuente a ese tamaño.",
            "Los logotipos con fondos transparentes se ven más limpios que los logotipos sobre un recuadro blanco. Si tu logotipo es un JPG con fondo blanco, colócalo en una zona clara del diseño o redibújalo primero como PNG. El botón Logotipo escala cualquier imagen para que quepa en un cuadrado de 300 píxeles y la coloca cerca del borde izquierdo de la zona segura."
          ]
        },
        {
          "heading": "Elegir colores y tipografía",
          "paragraphs": [
            "Elige un color de fondo fuerte o un degradado de dos colores y un color de acento, y luego usa el acento con moderación para una barra, un anillo o una sola palabra. El texto claro sobre un fondo oscuro se lee bien a tamaños pequeños, y también el texto casi negro sobre un fondo pálido. El texto de tono medio sobre un fondo de tono medio es la combinación que más suele desaparecer en un teléfono.",
            "Los grosores negrita o seminegrita resisten mejor que el grosor regular cuando se reduce la imagen. La opción Condensada cabe nombres más largos en una línea, y la opción Serif encaja en canales de cocina, viajes y educación que buscan un aspecto más calmado."
          ]
        },
        {
          "heading": "Privacidad y procesamiento local",
          "paragraphs": [
            "Las imágenes se leen con el FileReader del navegador y se conservan en memoria como URL de datos. No se envían a Tools Star Hub ni a ningún otro servidor. Cerrar o recargar la pestaña borra el diseño, así que descarga una copia antes de salir."
          ]
        }
      ],
      "tips": [
        "Revisa el diseño al 50 % de zoom. Si el nombre sigue siendo fácil de leer, suele leerse bien en un teléfono.",
        "Usa las flechas para movimientos pequeños y mantén Mayús para pasos de 50 píxeles al alinear el texto con la guía.",
        "Duplica una capa de texto con Ctrl o ⌘ + D para crear una segunda línea con el mismo estilo.",
        "Sube el PNG o el JPG en YouTube Studio, en Personalización y luego Imagen de marca, y previsualiza cada tamaño de dispositivo allí antes de publicar."
      ],
      "limitations": "El editor no tiene rotación, recorte, filtros, carga de fuentes personalizadas ni proyectos guardados, y el diseño se pierde al cerrar la pestaña. Las fuentes del navegador varían un poco entre sistemas, así que el texto puede ajustarse de forma distinta en otro ordenador. Las fotos muy grandes pueden hacer lentos los teléfonos antiguos. YouTube puede cambiar los tamaños de imagen o los límites de archivo, así que confirma las cifras actuales en la Ayuda de YouTube antes de subir.",
      "faqs": [
        {
          "question": "¿Qué tamaño exporta el creador de imágenes de YouTube?",
          "answer": "Siempre exporta 2560 × 1440 píxeles, el tamaño de imagen de canal que YouTube recomienda. La guía de zona segura no forma parte del archivo."
        },
        {
          "question": "¿Qué es la zona segura de 1546 × 423?",
          "answer": "Es la franja centrada que se ve en todos los dispositivos, incluidos los teléfonos. Mantén el nombre del canal, el logotipo y cualquier mensaje corto dentro de ella para que nada quede recortado."
        },
        {
          "question": "¿La guía de zona segura se incluye en la descarga?",
          "answer": "No. La guía solo se dibuja en la vista previa. La exportación se renderiza otra vez en un lienzo limpio, sin la guía, el contorno de selección ni los controladores."
        },
        {
          "question": "¿Por qué mi PNG se descargó como JPG?",
          "answer": "Un PNG de una foto detallada puede superar los 6 MB a este tamaño. La herramienta pasa a JPG y baja la calidad paso a paso hasta que el archivo cabe en menos de 6 MB, y la línea de estado explica lo que ocurrió."
        },
        {
          "question": "¿Se suben mis imágenes a algún sitio?",
          "answer": "No. Las imágenes se leen y se dibujan en esta pestaña del navegador. No se envía nada a un servidor, y al cerrar la pestaña se eliminan."
        },
        {
          "question": "¿Puedo usarlo en un teléfono o una tableta?",
          "answer": "Sí. El arrastre y el redimensionado funcionan con el toque, el panel lateral se mueve debajo del lienzo en pantallas estrechas, y el control de zoom ayuda a colocar con precisión."
        },
        {
          "question": "¿Qué atajos de teclado hay?",
          "answer": "Ctrl o ⌘ + Z deshace, Ctrl o ⌘ + Mayús + Z o Ctrl + Y rehace, Ctrl o ⌘ + D duplica, Supr o Retroceso elimina la capa seleccionada, las flechas la mueven un poco y Escape quita la selección."
        },
        {
          "question": "¿Puedo guardar un diseño y volver más tarde?",
          "answer": "Todavía no. El diseño solo vive en la pestaña abierta. Descarga un PNG o un JPG cuando termines, y conserva las imágenes de origen para poder reconstruirlo."
        },
        {
          "question": "¿Puedo usar las plantillas en un canal comercial?",
          "answer": "Sí. Las plantillas son maquetaciones originales hechas para esta herramienta con formas, degradados y texto. Asegúrate de que cualquier foto o logotipo que añadas sea tuyo o esté licenciado para tu uso."
        },
        {
          "question": "¿Con qué tamaño de lienzo debo empezar para quienes ven en televisión?",
          "answer": "Diseña en el lienzo completo de la imagen y luego mantén los logotipos y el texto críticos dentro del centro seguro para televisión, de modo que los bordes recortados en pantallas grandes se queden limpios."
        },
        {
          "question": "¿Puedo subir el logotipo de mi canal como una capa?",
          "answer": "Sí: añade una capa de imagen, redimensiónala y fíjala dentro de la zona segura antes de exportar."
        },
        {
          "question": "¿Cómo mantengo el texto nítido en pantallas retina?",
          "answer": "Exporta a las dimensiones en píxeles recomendadas y evita ampliar en extremo los mapas de bits pequeños."
        },
        {
          "question": "¿La misma imagen debe funcionar en el móvil y en el escritorio?",
          "answer": "Sí, si el contenido clave está en la zona segura que se superpone; los bordes pueden recortarse de forma distinta en cada dispositivo."
        },
        {
          "question": "¿Puedo igualar los colores de marca con valores hexadecimales?",
          "answer": "Usa selecciones hexadecimales para fondos y formas, de modo que la imagen se mantenga coherente con la paleta de tu sitio."
        },
        {
          "question": "¿Cuántas capas de imagen son prácticas?",
          "answer": "Unas pocas capas bien compuestas superan a docenas de piezas diminutas: une los adornos antes de afinar la posición."
        },
        {
          "question": "¿Una foto recargada ocultará el nombre del canal?",
          "answer": "A menudo: añade un velo suave o una barra sólida detrás del texto para que el contraste se lea bien."
        },
        {
          "question": "¿Puedo reutilizar una imagen para campañas de temporada?",
          "answer": "Duplica el proyecto, cambia el arte de temporada y mantén fija la posición del logotipo para que se reconozca."
        },
        {
          "question": "¿La exportación incluye un margen extra más allá del recorte de YouTube?",
          "answer": "Algunos dispositivos pueden recortar los píxeles extra de los bordes; trata los márgenes exteriores solo como ambiente opcional."
        },
        {
          "question": "¿Cómo debo nombrar los archivos de imagen descargados?",
          "answer": "Incluye el canal y la fecha para poder volver atrás si un rediseño no funciona tan bien."
        },
        {
          "question": "¿La exportación de la imagen admite animación?",
          "answer": "La imagen de canal de YouTube aquí es una imagen fija: crea el movimiento en las intros de vídeo."
        }
      ]
    },
    "metaDescription": "Crea una imagen de canal de YouTube de 2560 × 1440 con 15 plantillas, texto, logotipos y una guía de zona segura, y exporta PNG o JPG de menos de 6 MB.",
    "ui": {}
  }
};

export default data;
