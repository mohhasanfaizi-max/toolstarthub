import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Un generador de prompts de IA arma un prompt estructurado con el tema, el objetivo, el público y el formato que escribes. «Generar prompt» se queda en tu navegador. «Generar con IA» envía esos campos a la API Gemini de Google a través de ToolStarHub.",
    "content": {
      "about": "El generador de prompts de IA convierte los campos que rellenas en un prompt que puedes copiar. Un ajuste predefinido solo rellena el uso, el tono, el formato, el nivel de detalle y una primera instrucción. El tema lo tienes que indicar tú.",
      "howTo": [
        "Elige un ajuste predefinido o escribe tu propio uso.",
        "Indica un tema o un objetivo. Hace falta al menos uno.",
        "Define el público, el tono, el idioma, el formato y el nivel de detalle que quieres.",
        "Pulsa «Generar prompt» para armarlo en tu navegador, o «Generar con IA» para que Gemini lo pula.",
        "Usa «Borrar» para reiniciar el formulario."
      ],
      "features": [
        "Doce ajustes para artículos, publicaciones, guiones, textos de producto, esquemas de investigación y tareas de programación.",
        "Un prompt estructurado que indica la tarea, el público, el tono, el idioma y el formato.",
        "Una línea que pide al modelo no inventar datos que falten.",
        "Copiar y borrar. No se guarda nada."
      ],
      "examples": [
        {
          "title": "Un artículo de blog sobre la edad en años bisiestos",
          "body": "Ajuste: artículo de blog. Tema: cómo calcular la edad de alguien nacido el 29 de febrero. Público: personas que usan una calculadora de fechas. El prompt pide una introducción corta y un cierre sin relleno."
        },
        {
          "title": "Una tarea de programación",
          "body": "Ajuste: prompt de programación. Objetivo: escribir una función que rechace un rango de páginas vacío. Instrucción extra: usar TypeScript y mostrar un ejemplo que falle. El prompt pregunta por el lenguaje, las entradas y qué cuenta como terminado."
        }
      ],
      "explanation": "«Generar prompt» une tus respuestas en líneas con etiqueta. Si el tema y el objetivo están vacíos, la herramienta se detiene y te pide uno de los dos. «Generar con IA» envía esos campos a Gemini y devuelve un prompt pulido.",
      "limitations": "«Generar prompt» solo une los campos rellenados y necesita un tema o un objetivo. Un ajuste predefinido rellena campos de estilo, pero no inventa un tema. «Generar con IA» pule el prompt con Gemini. La página no ejecuta el prompt en un modelo de escritura.",
      "tips": [
        "Indica quién leerá. «Padres primerizos» ayuda más que «todo el mundo».",
        "Di qué forma debe tener el resultado: una lista, un correo, un guion.",
        "Pon los datos que conoces en las instrucciones adicionales para que el modelo no tenga que adivinarlos."
      ],
      "faqs": [
        {
          "question": "¿Esta herramienta usa IA?",
          "answer": "«Generar prompt» construye el prompt en esta página. «Generar con IA» envía los campos a la API Gemini de Google a través de ToolStarHub y devuelve un prompt pulido. Puedes pegar cualquiera de los dos en otro modelo."
        },
        {
          "question": "¿Y si solo sé el tema?",
          "answer": "Con un tema basta para generar. Añade un objetivo cuando sepas qué deben poder hacer los lectores después."
        },
        {
          "question": "¿Se envía mi texto a un servidor?",
          "answer": "«Generar prompt» se queda en esta pestaña y no sube los campos. «Generar con IA» envía los campos a la API Gemini de Google a través de ToolStarHub y devuelve un prompt pulido. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        },
        {
          "question": "¿Qué hace que un prompt de IA sea bueno?",
          "answer": "Di qué quieres, para quién es, el tono, el formato y la extensión. Un objetivo claro y un ejemplo del resultado suelen ayudar más que añadir adjetivos."
        },
        {
          "question": "¿Puedo usar el prompt en ChatGPT, Gemini o Claude?",
          "answer": "Sí. El resultado es texto plano que puedes pegar en cualquier asistente de chat. Aun así, modelos distintos pueden responder de forma distinta al mismo prompt."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "«Generar prompt» crea un prompt en tu navegador. «Generar con IA» envía los campos rellenados a la API Gemini de Google a través de ToolStarHub y devuelve un prompt redactado. El texto no se guarda.",
      "Platform or use case": "Plataforma o uso",
      "Topic": "Tema",
      "Goal": "Objetivo",
      "Audience": "Público",
      "Tone": "Tono",
      "Language": "Idioma",
      "Output format": "Formato de salida",
      "Level of detail": "Nivel de detalle",
      "Brief": "Breve",
      "Medium": "Medio",
      "High": "Alto",
      "Additional instructions": "Instrucciones adicionales",
      "Generate prompt": "Generar prompt",
      "Prompt": "Prompt",
      "AI prompt": "Prompt de IA",
      "Blog article": "Artículo de blog",
      "SEO article": "Artículo SEO",
      "Social media post": "Publicación en redes sociales",
      "YouTube script": "Guion de YouTube",
      "YouTube thumbnail prompt": "Prompt de miniatura de YouTube",
      "Image generation": "Generación de imágenes",
      "Video generation": "Generación de vídeo",
      "Product description": "Descripción de producto",
      "Email": "Correo electrónico",
      "Marketing copy": "Texto de marketing",
      "Academic/research prompt": "Prompt académico/de investigación",
      "Coding prompt": "Prompt de programación",
      "Add a topic or a goal before generating a prompt.": "Escribe un tema o un objetivo antes de generar un prompt."
    },
    "note": "«Generar prompt» redacta el prompt en inglés, el idioma que los modelos de IA siguen con más precisión. El campo «Idioma» fija el idioma de la respuesta. «Generar con IA» también entiende lo que escribas en español."
  },
  "prompt-to-image": {
    "answer": "Una herramienta de prompt a imagen redacta un prompt de imagen para copiar a partir del sujeto y el estilo. No crea la imagen. «Generar con IA» solo devuelve un prompt más detallado.",
    "content": {
      "about": "El generador de prompt a imagen redacta un prompt para un modelo de imagen. Tú describes el sujeto, el lugar, la luz y el encuadre. La página no dibuja la imagen porque no hay ninguna API de imágenes conectada.",
      "howTo": [
        "Elige un estilo predefinido si quieres un punto de partida.",
        "Describe el sujeto. Sin sujeto, la herramienta no crea el prompt.",
        "Añade entorno, luz, cámara, colores, ambiente y relación de aspecto si te importan.",
        "Escribe un prompt negativo con lo que no debe aparecer en la imagen.",
        "Pulsa «Crear prompt» y copia el prompt y el prompt negativo por separado."
      ],
      "features": [
        "Estilos de foto, cine, ilustración, producto, retrato, paisaje, arquitectura, fantasía, anime, 3D y miniatura.",
        "Botones de copia separados para el prompt principal y el negativo.",
        "Los campos vacíos se omiten para que el prompt no tenga etiquetas vacías."
      ],
      "examples": [
        {
          "title": "Una foto de producto",
          "body": "Sujeto: una botella de agua de acero inoxidable. Estilo: fotografía de producto. Relación de aspecto: 1:1. Prompt negativo: logotipos extra, personas, mesa desordenada. El resultado es una descripción de estudio, no un archivo."
        },
        {
          "title": "Una miniatura",
          "body": "Sujeto: una persona que sostiene un PDF subrayado. Estilo: miniatura de YouTube. La composición se mantiene como «un solo sujeto, espacio para un título corto». El texto del título lo sigues escribiendo tú."
        }
      ],
      "explanation": "Cada campo rellenado se convierte en una frase corta. El sujeto es obligatorio para que el prompt describa algo concreto. Un estilo predefinido cambia el estilo y algunos campos relacionados, pero no borra el sujeto que ya escribiste.",
      "limitations": "La página redacta un prompt y, si quieres, un prompt negativo. No entrega un archivo de imagen. El sujeto es obligatorio. «Generar con IA» pide a Gemini un prompt más largo, que luego pegas en una herramienta de imágenes.",
      "tips": [
        "Un solo sujeto es más fácil de describir que una multitud.",
        "Nombra la luz. «Luz de ventana» y «sol duro de mediodía» dan imágenes muy distintas.",
        "Usa el prompt negativo para fallos que se repiten, como dedos de más o texto deformado."
      ],
      "faqs": [
        {
          "question": "¿Por qué no hay imagen?",
          "answer": "Esta página redacta un prompt y no genera ninguna imagen. «Generar con IA» pide a Gemini un prompt más detallado. Pégalo en un servicio que cree imágenes."
        },
        {
          "question": "¿Todos los modelos leen el prompt igual?",
          "answer": "No. Los modelos reaccionan de forma distinta a la redacción. Toma el resultado como un brief claro y ajústalo a tu herramienta."
        },
        {
          "question": "¿Se envía mi texto a un servidor?",
          "answer": "«Crear prompt» se queda en este navegador y no sube el brief. «Generar con IA» envía el brief a la API Gemini de Google a través de ToolStarHub y devuelve un prompt más largo. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos. La página sigue sin crear una imagen."
        },
        {
          "question": "¿Cómo escribo un buen prompt de imagen?",
          "answer": "Empieza por el sujeto y añade el entorno, la luz, el estilo de cámara o artístico, la paleta de colores, el ambiente y la relación de aspecto. Sé concreto en lo que importa y deja fuera el resto."
        },
        {
          "question": "¿Qué es un prompt negativo?",
          "answer": "Un prompt negativo enumera lo que no debe aparecer en la imagen, como texto, dedos de más o desenfoque. No todos los modelos de imagen lo leen."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "«Crear prompt» redacta un prompt de imagen en tu navegador. «Generar con IA» envía tu brief a la API Gemini de Google a través de ToolStarHub y devuelve un prompt de imagen más completo. Esta página no crea imágenes. El texto no se guarda.",
      "Style presets": "Estilos predefinidos",
      "Composition": "Composición",
      "Colors": "Colores",
      "Quality and detail": "Calidad y detalle",
      "Things you want left out of the picture.": "Lo que no quieres que aparezca en la imagen.",
      "Image prompt": "Prompt de imagen",
      "AI image prompt": "Prompt de imagen con IA",
      "Photorealistic": "Fotorrealista",
      "Cinematic": "Cinematográfico",
      "Illustration": "Ilustración",
      "Product photography": "Fotografía de producto",
      "Portrait": "Retrato",
      "Landscape": "Paisaje",
      "Architecture": "Arquitectura",
      "Fantasy": "Fantasía",
      "Anime": "Anime",
      "3D render": "Render 3D",
      "YouTube thumbnail": "Miniatura de YouTube",
      "Describe the subject before building the prompt.": "Describe el sujeto antes de crear el prompt."
    },
    "note": "El prompt creado usa etiquetas en inglés, que los modelos de imagen entienden mejor. Puedes escribir tus descripciones en cualquier idioma."
  },
  "prompt-to-video": {
    "answer": "Una herramienta de prompt a vídeo redacta la descripción de una toma para pegarla en un modelo de vídeo. No genera ningún clip. «Generar con IA» solo devuelve el prompt escrito.",
    "content": {
      "about": "El generador de prompt a vídeo redacta la descripción de una sola toma: quién o qué aparece, qué se mueve, cómo se mueve la cámara y cuánto dura. No crea ningún vídeo.",
      "howTo": [
        "Elige un estilo predefinido como punto de partida, o deja los campos vacíos y escribe tú.",
        "Indica un sujeto o una acción. Hace falta uno de los dos.",
        "Describe la escena, la cámara, el objetivo, la luz, la duración y la relación de aspecto.",
        "Añade sonido o diálogo solo si la toma lo necesita.",
        "Pulsa «Crear prompt» y copia el texto. «Borrar» reinicia el formulario, incluida la duración predeterminada."
      ],
      "features": [
        "Estilos de cine, anuncio de producto, redes sociales, YouTube, documental, viajes, acción, moda, naturaleza, escenas históricas y animación.",
        "Una línea final que limita la petición a una sola toma continua.",
        "Un prompt negativo aparte para los fallos de movimiento o imagen que quieres evitar."
      ],
      "examples": [
        {
          "title": "Un producto en órbita",
          "body": "Sujeto: una taza de cerámica. Acción: sube el vapor. Estilo: anuncio de producto. La duración se queda en 6 segundos. El prompt pide un movimiento circular y luz de estudio."
        },
        {
          "title": "Una toma tranquila de viaje",
          "body": "Sujeto: un sendero costero. Acción: una persona se aleja de la cámara. Estilo: viaje. Indica la hora del día en el campo de entorno para que la luz no quede sin definir."
        }
      ],
      "explanation": "A los modelos de vídeo les va mejor una sola acción que una secuencia de escenas. El generador mantiene tus frases en un orden estable y añade «una sola toma continua» para que la petición no se convierta en un storyboard.",
      "limitations": "El generador describe una sola toma continua. No genera ni descarga vídeos. Necesitas un sujeto o una acción. La duración, la cámara y el diálogo solo se incluyen si los escribes.",
      "tips": [
        "Di qué se mueve y qué se queda quieto.",
        "Una duración como «5 segundos» es más útil que «corto».",
        "Si necesitas diálogo, escribe la frase. No pidas al modelo que invente un discurso."
      ],
      "faqs": [
        {
          "question": "¿Puedo descargar un vídeo desde esta página?",
          "answer": "No. Esta página no genera vídeos. «Generar con IA» solo devuelve un prompt de toma escrito por Gemini. Cópialo en una herramienta de vídeo de confianza."
        },
        {
          "question": "¿Y si solo describo la acción?",
          "answer": "Con una acción basta. Añadir un sujeto hace que la toma sea más fácil de imaginar."
        },
        {
          "question": "¿Se envía mi texto a un servidor?",
          "answer": "«Crear prompt» redacta la toma en esta pestaña. «Generar con IA» envía los campos de la toma a la API Gemini de Google a través de ToolStarHub y devuelve un prompt escrito. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos. No se crea ningún archivo de vídeo."
        },
        {
          "question": "¿Cómo escribo un prompt para un vídeo con IA?",
          "answer": "Describe una toma: el sujeto, la acción, el entorno, el movimiento de cámara, el objetivo, la luz y la duración. Los prompts cortos y concretos suelen funcionar mejor que las historias largas."
        },
        {
          "question": "¿Qué modelos de vídeo pueden usar estos prompts?",
          "answer": "El resultado es texto plano, así que puedes pegarlo en cualquier herramienta de texto a vídeo. Cada modelo sigue a su manera las indicaciones de cámara y tiempo."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "«Crear prompt» redacta un prompt de vídeo en tu navegador. «Generar con IA» envía tu brief a la API Gemini de Google a través de ToolStarHub y devuelve un prompt de toma. Esta página no crea vídeos. El texto no se guarda.",
      "Video subject": "Sujeto del vídeo",
      "Scene": "Escena",
      "Action": "Acción",
      "Camera movement": "Movimiento de cámara",
      "Lens": "Objetivo",
      "Visual style": "Estilo visual",
      "Duration": "Duración",
      "Audio or dialogue": "Audio o diálogo",
      "Video prompt": "Prompt de vídeo",
      "AI video prompt": "Prompt de vídeo con IA",
      "Cinematic": "Cinematográfico",
      "Product commercial": "Anuncio de producto",
      "Social media": "Redes sociales",
      "YouTube": "YouTube",
      "Documentary": "Documental",
      "Travel": "Viajes",
      "Fashion": "Moda",
      "Nature": "Naturaleza",
      "Historical": "Histórico",
      "Animation": "Animación",
      "Add a subject or an action before building the prompt.": "Indica un sujeto o una acción antes de crear el prompt."
    },
    "note": "El prompt creado usa etiquetas en inglés, que los modelos de vídeo entienden mejor. Puedes escribir tus descripciones en cualquier idioma."
  },
  "ai-article-detector": {
    "answer": "Esta página revisa patrones de escritura como la longitud de las frases y las expresiones repetidas. «Analizar con IA» también es un análisis de patrones de escritura. No decide si el texto lo escribió una persona o un modelo.",
    "content": {
      "about": "El detector de artículos con IA revisa el borrador pegado e informa de la longitud de las frases, cuánto varían esas longitudes, la amplitud del vocabulario y las expresiones cortas que se repiten. El resultado se llama «análisis de patrones de escritura» y no pretende ser más.",
      "howTo": [
        "Pega al menos 40 palabras.",
        "Pulsa «Analizar texto» para la revisión en el navegador, o «Analizar con IA» para un análisis de patrones de escritura hecho por Gemini.",
        "Lee los valores y la nota que aparece debajo.",
        "Si la muestra es demasiado corta, la página lo dice en lugar de puntuarla.",
        "«Borrar» quita el texto de la página."
      ],
      "features": [
        "Longitud media de las frases con variación baja, moderada o variada.",
        "Una valoración del vocabulario según el número de palabras distintas.",
        "Expresiones de cuatro palabras que aparecen tres veces o más.",
        "Una lista breve de frases hechas, si las hay."
      ],
      "examples": [
        {
          "title": "Un borrador que se repite",
          "body": "Si las mismas cuatro palabras aparecen en varias frases, se listan con su recuento. Eso significa que el borrador se repite, no que lo escribiera un modelo."
        },
        {
          "title": "Un pie de foto corto",
          "body": "Veinte palabras no bastan. La herramienta pide 40 para que una sola frase no se tome por un patrón."
        }
      ],
      "explanation": "La variación de frases compara la dispersión de las longitudes con la media. El vocabulario compara las palabras distintas con el total. Ambos valores cambian con una edición normal. Un borrador humano cuidado puede parecer uniforme y uno generado puede parecer variado. El resultado lo indica.",
      "limitations": "La revisión en el navegador necesita al menos 40 palabras. Informa de la longitud de las frases, la amplitud del vocabulario y las expresiones repetidas. No da un porcentaje ni dictamina que un modelo escribiera el borrador. «Analizar con IA» envía el texto a Gemini para obtener el mismo tipo de descripción.",
      "tips": [
        "Usa un párrafo completo, no un titular.",
        "Toma las expresiones repetidas como pistas de edición. Elimínalas si los lectores las notarían.",
        "No uses las valoraciones para acusar a alguien de usar un modelo."
      ],
      "faqs": [
        {
          "question": "¿Puede saber si un texto lo escribió una IA?",
          "answer": "No con certeza. Las revisiones de patrones fallan en ambos sentidos. El resultado describe el borrador; no es un veredicto."
        },
        {
          "question": "¿Por qué no hay porcentaje?",
          "answer": "Un porcentaje parecería una prueba. «Analizar texto» y «Analizar con IA» describen patrones. Ninguno afirma saber quién escribió el texto."
        },
        {
          "question": "¿Se envía mi texto a un servidor?",
          "answer": "«Analizar texto» cuenta los patrones en esta pestaña y no sube el borrador. «Analizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub para recibir una descripción escrita. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        },
        {
          "question": "¿Son fiables los detectores de IA?",
          "answer": "Ningún detector puede demostrar quién escribió un texto. Las puntuaciones basadas en patrones pueden marcar textos humanos y pasar por alto textos de IA editados, así que toma cualquier resultado como un motivo para revisar, no como una prueba."
        },
        {
          "question": "¿Qué patrones revisa esta herramienta?",
          "answer": "Informa de la longitud de las frases, lo variado que es el vocabulario y las expresiones repetidas, para que veas dónde un borrador suena plano o repetitivo."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "«Analizar texto» revisa patrones en tu navegador. «Analizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub para un análisis de patrones de escritura. Ningún resultado puede decidir quién escribió el texto. El borrador no se guarda.",
      "Article or draft": "Artículo o borrador",
      "Paste at least 40 words.": "Pega al menos 40 palabras.",
      "Analyze writing": "Analizar texto",
      "Analyze with AI": "Analizar con IA",
      "Avg. sentence": "Frase media",
      "{0} words": "{0} palabras",
      "Sentence variation": "Variación de frases",
      "Vocabulary": "Vocabulario",
      "Writing pattern analysis": "Análisis de patrones de escritura",
      "No four-word phrase repeats three or more times.": "Ninguna expresión de cuatro palabras aparece tres veces o más.",
      "Familiar stock phrases found:": "Frases hechas encontradas:",
      "AI writing analysis": "Análisis de escritura con IA",
      "Paste some writing first.": "Pega primero algo de texto.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "Pega al menos 40 palabras. Un fragmento corto no muestra ningún patrón.",
      "Low": "Baja",
      "Moderate": "Moderada",
      "Varied": "Variada",
      "Narrow": "Limitado",
      "Mixed": "Mixto",
      "Broad": "Amplio",
      "\"{0}\" appears {1} times": "«{0}» aparece {1} veces",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Son patrones de escritura, no una prueba de quién escribió el texto. Aparecen patrones parecidos en borradores humanos editados y en textos generados. Un detector puede equivocarse en ambos sentidos."
    },
    "note": "La revisión en el navegador usa listas de palabras y frases hechas en inglés, así que funciona mejor con textos en inglés. «Analizar con IA» también funciona con textos en español."
  },
  "ai-article-compressor": {
    "answer": "Un compresor de artículos acorta un borrador quitando relleno y frases repetidas. «Comprimir con IA» pide a Gemini que conserve la idea principal. Revisa el resultado antes de publicarlo.",
    "content": {
      "about": "El compresor de artículos con IA acorta un borrador largo. La compresión ligera cambia algunas expresiones rebuscadas y limpia espacios. La media y la fuerte también quitan frases repetidas. Lee el resultado: cuando desaparece una frase, el sentido puede cambiar.",
      "howTo": [
        "Pega el artículo. Necesita al menos 12 palabras.",
        "Elige compresión ligera, media o fuerte.",
        "Pulsa «Acortar artículo» para aplicar las reglas del navegador, o «Comprimir con IA» para que lo acorte Gemini.",
        "Compara el número de palabras y copia el borrador corto si sigue diciendo lo que querías.",
        "«Borrar» vacía ambos cuadros y vuelve a poner el nivel en medio."
      ],
      "features": [
        "Tres niveles, para que una pasada ligera no borre frases.",
        "Número de palabras antes y después.",
        "Sustituciones fijas, como «in order to» por «to».",
        "Eliminación de frases duplicadas en los niveles medio y fuerte."
      ],
      "examples": [
        {
          "title": "Una frase rebuscada",
          "body": "«In order to finish the form, you need to sign it» se convierte en «to finish the form, you need to sign it» en todos los niveles."
        },
        {
          "title": "La misma frase dos veces",
          "body": "Los niveles medio y fuerte conservan la primera y quitan la repetición exacta posterior. El nivel ligero deja ambas."
        }
      ],
      "explanation": "«Acortar artículo» usa una lista fija de sustituciones. La compresión fuerte también omite una frase posterior que empieza con las mismas seis palabras que otra anterior. «Comprimir con IA» pide a Gemini que acorte el artículo al nivel elegido. Lee ambos resultados antes de fiarte de ellos.",
      "limitations": "La compresión ligera sustituye una lista fija de expresiones rebuscadas. La media y la fuerte también quitan repeticiones exactas posteriores, y la fuerte puede omitir una frase que empiece con las mismas seis palabras. El borrador necesita al menos 12 palabras. Comprimir puede eliminar una frase que querías conservar.",
      "tips": [
        "Empieza con el nivel ligero si el artículo ya es conciso.",
        "Usa el nivel fuerte en un primer borrador desordenado y recupera después las frases importantes.",
        "No es una forma de ocultar cómo se produjo un borrador."
      ],
      "faqs": [
        {
          "question": "¿El texto comprimido evita un detector de IA?",
          "answer": "No. La herramienta no lo intenta ni afirma que el resultado parecerá escrito por un tipo concreto de autor."
        },
        {
          "question": "¿Se mantiene mi idea?",
          "answer": "«Acortar artículo» conserva la mayoría de las palabras y quita algo de relleno y repeticiones. «Comprimir con IA» pide a Gemini que mantenga la idea principal y los datos clave. Lee el borrador corto antes de fiarte de él."
        },
        {
          "question": "¿Se envía mi texto a un servidor?",
          "answer": "«Acortar artículo» funciona en esta pestaña y no sube el borrador. «Comprimir con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub y devuelve una versión más corta. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        },
        {
          "question": "¿Cómo acorto un artículo sin perder el sentido?",
          "answer": "Quita primero las expresiones rebuscadas, luego las ideas repetidas y después las frases enteras que no aportan nada. Compara el resultado con el original antes de usarlo."
        },
        {
          "question": "¿Qué nivel de compresión elijo?",
          "answer": "El ligero solo cambia expresiones rebuscadas. El medio también quita repeticiones. El fuerte puede omitir frases que empiezan igual, así que revísalo con más cuidado."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "«Acortar artículo» aplica reglas fijas en tu navegador. «Comprimir con IA» envía el artículo a la API Gemini de Google a través de ToolStarHub y devuelve un borrador más corto. El artículo no se guarda. Revisa el resultado antes de publicarlo.",
      "Article": "Artículo",
      "Compression": "Compresión",
      "Light compression": "Compresión ligera",
      "Medium compression": "Compresión media",
      "Strong compression": "Compresión fuerte",
      "Shorten article": "Acortar artículo",
      "Compress with AI": "Comprimir con IA",
      "Copy shorter draft": "Copiar borrador corto",
      "Shorter draft": "Borrador corto",
      "The shorter draft will appear here.": "El borrador corto aparecerá aquí.",
      "AI shorter draft": "Borrador corto con IA",
      "Copy AI draft": "Copiar borrador de IA",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "{0} palabras antes, {1} palabras después. Lee el borrador corto antes de usarlo.",
      "Paste an article first.": "Pega primero un artículo.",
      "Paste a longer article. A few words is not enough to shorten.": "Pega un artículo más largo. Unas pocas palabras no bastan para acortar.",
      "Nothing was left after compression. Try a lighter setting.": "No quedó nada después de comprimir. Prueba un nivel más ligero."
    },
    "note": "«Acortar artículo» usa una lista de expresiones en inglés, así que apenas cambia los textos en español. «Comprimir con IA» también funciona con textos en español."
  },
  "ai-text-humanizer": {
    "answer": "Un humanizador de texto con IA sustituye frases hechas en tu navegador según una lista fija. «Humanizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub. La herramienta no intenta evitar un detector de IA ni afirma que el resultado parecerá escrito por un tipo concreto de autor.",
    "content": {
      "about": "El humanizador de texto con IA sustituye una lista fija de frases hechas por expresiones más sencillas. «Reescribir texto» lo hace en esta pestaña. «Humanizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub y devuelve una versión reescrita. El texto no se guarda. Revisa el resultado antes de usarlo. Ningún resultado es una forma de ocultar cómo se produjo un borrador.",
      "howTo": [
        "Pega el borrador. Necesita al menos 12 palabras y como máximo 4000 caracteres.",
        "Pulsa «Reescribir texto» para la lista de frases en el navegador, o «Humanizar con IA» para que Gemini lo reescriba.",
        "Revisa el resultado. Tras una eliminación, la palabra siguiente puede quedar en minúscula.",
        "Copia la versión reescrita si sigue diciendo lo que querías.",
        "«Borrar» vacía el cuadro y el resultado local."
      ],
      "features": [
        "Una lista fija de frases hechas, aplicada en tu navegador.",
        "Un resultado aparte para «Humanizar con IA».",
        "Un límite de 4000 caracteres para ambos botones.",
        "No elimina frases ni frases duplicadas."
      ],
      "examples": [
        {
          "title": "Arranques de manual",
          "body": "«In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.» se convierte en «here is the setup. you can use a short checklist.»"
        },
        {
          "title": "Una frase repetida",
          "body": "«The form is short. The form is short. Please sign it before noon today and bring a pen.» conserva ambas copias. Esta pasada no elimina frases repetidas."
        }
      ],
      "explanation": "«Reescribir texto» recorre una lista fija una sola vez. No vuelve a poner mayúscula tras una eliminación, y un apóstrofo tipográfico no coincide. «Humanizar con IA» pide a Gemini que mantenga los mismos datos, nombres y números y que no reduzca el borrador a un resumen. Revisa ambos resultados antes de usarlos.",
      "limitations": "«Reescribir texto» necesita al menos 12 palabras, y ambos botones como máximo 4000 caracteres. La pasada local solo sustituye expresiones de la lista. Un apóstrofo tipográfico no coincide. La herramienta no intenta evitar un detector de IA ni afirma que el resultado parecerá escrito por un tipo concreto de autor.",
      "tips": [
        "Revisa el resultado antes de usarlo. Tras quitar una expresión, la palabra siguiente puede quedar en minúscula.",
        "Una frase repetida se queda. Esta pasada no la elimina.",
        "Ningún resultado es una forma de ocultar cómo se produjo un borrador."
      ],
      "faqs": [
        {
          "question": "¿El humanizador de texto con IA es gratis?",
          "answer": "Sí. Puedes reescribir un borrador aquí sin pagar ni crear una cuenta. «Reescribir texto» se queda en esta pestaña. «Humanizar con IA» sí envía el borrador a la API Gemini de Google a través de ToolStarHub."
        },
        {
          "question": "¿Esto evita un detector de IA?",
          "answer": "No. La herramienta no lo intenta ni afirma que el resultado parecerá escrito por un tipo concreto de autor."
        },
        {
          "question": "¿Se mantiene mi idea?",
          "answer": "«Reescribir texto» conserva todas las palabras que no están en la lista de frases hechas. «Humanizar con IA» tiene la instrucción de mantener los mismos datos, nombres y números y de no resumir el borrador. Revisa el resultado antes de usarlo."
        },
        {
          "question": "¿Se envía mi texto a un servidor?",
          "answer": "«Reescribir texto» funciona en esta pestaña y no sube el borrador. «Humanizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub y devuelve una versión reescrita. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "«Reescribir texto» usa una lista fija de frases hechas en tu navegador. «Humanizar con IA» envía el texto a la API Gemini de Google a través de ToolStarHub y devuelve una versión reescrita. El texto no se guarda. Revisa el resultado antes de usarlo. Ningún resultado es una forma de ocultar cómo se produjo un borrador.",
      "Draft": "Borrador",
      "Rewrite text": "Reescribir texto",
      "Humanize with AI": "Humanizar con IA",
      "Copy rewritten draft": "Copiar borrador reescrito",
      "Rewritten draft": "Borrador reescrito",
      "The rewritten draft will appear here.": "El borrador reescrito aparecerá aquí.",
      "AI rewrite": "Reescritura con IA",
      "Copy AI rewrite": "Copiar reescritura de IA",
      "Paste a draft first.": "Pega primero un borrador.",
      "That text is too long for this rewrite. Shorten it and try again.": "Ese texto es demasiado largo para esta reescritura. Acórtalo y vuelve a intentarlo.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Pega un borrador más largo. Unas pocas palabras no bastan para reescribir.",
      "Nothing was left after the rewrite. Try different wording.": "No quedó nada después de reescribir. Prueba otra redacción."
    },
    "note": "«Reescribir texto» usa una lista de frases hechas en inglés, así que apenas cambia los textos en español. «Humanizar con IA» también funciona con textos en español."
  }
};

export default data;
