import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Un generador de prompts para IA arma un prompt estructurado a partir del tema, el objetivo, el público y el formato que introduces. «Generar prompt» se queda en el navegador. «Generar con IA» envía esos campos a la API Gemini de Google a través de ToolStarHub.",
    "content": {
      "about": "El generador de prompts para IA convierte los campos que rellenas en un solo prompt que puedes copiar. Un ajuste preestablecido solo rellena el caso de uso, el tono, el formato, el detalle y una instrucción de partida. Igual tienes que decir de qué trata el texto.",
      "howTo": [
        "Elige un ajuste preestablecido o escribe tu propio caso de uso.",
        "Añade un tema o un objetivo. La herramienta necesita al menos uno de los dos.",
        "Indica el público, el tono, el idioma, el formato y cuánto detalle quieres.",
        "Pulsa Generar prompt para armar un prompt en el navegador, o Generar con IA para que Gemini lo reescriba.",
        "Pulsa Borrar para vaciar el formulario."
      ],
      "examples": [
        {
          "title": "Un artículo sobre la edad en un 29 de febrero",
          "body": "Ajuste: Blog article. Tema: cómo contar la edad cuando alguien nació el 29 de febrero. Público: personas que usan una calculadora de fechas. El prompt pide una apertura corta y un final sin relleno."
        },
        {
          "title": "Una tarea de programación",
          "body": "Ajuste: Coding prompt. Objetivo: escribir una función que rechace un rango de páginas vacío. Instrucción extra: usa TypeScript y muestra un ejemplo que falle. El prompt pide el idioma, las entradas y cómo se ve el trabajo terminado."
        }
      ],
      "explanation": "«Generar prompt» une tus respuestas en líneas etiquetadas. Si el tema y el objetivo están en blanco, se detiene y pide uno de los dos. «Generar con IA» envía esos campos a Gemini y devuelve un prompt reescrito.",
      "limitations": "«Generar prompt» solo une los campos que rellenaste, y necesita un tema o un objetivo. Un ajuste preestablecido rellena campos de estilo. No inventa el asunto. «Generar con IA» reescribe el prompt a través de Gemini. La página no ejecuta ese prompt en un modelo de escritura.",
      "tips": [
        "Nombra al lector. «Padres primerizos» es más útil que «todo el mundo».",
        "Di cómo debe verse el resultado: una lista, un correo, un guion.",
        "Pon en las instrucciones extra los hechos que ya conoces, para que el modelo no los adivine."
      ],
      "features": [
        "Doce ajustes preestablecidos para artículos, publicaciones, guiones, textos de producto, esquemas de investigación y tareas de código.",
        "Un prompt estructurado que nombra la tarea, el público, el tono, el idioma y el formato.",
        "Una línea que indica al modelo que no invente hechos que falten.",
        "Controles de copiar y borrar. No se guarda nada."
      ],
      "faqs": [
        {
          "question": "¿Esta herramienta usa IA?",
          "answer": "«Generar prompt» arma el prompt en esta página. «Generar con IA» envía los campos a la API Gemini de Google a través de ToolStarHub y devuelve un prompt reescrito. Igual puedes pegar cualquiera de los dos resultados en otro modelo."
        },
        {
          "question": "¿Qué ocurre si solo conozco el tema?",
          "answer": "Un tema basta para generar. Añade un objetivo cuando sepas qué debería poder hacer el lector después."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "«Generar prompt» se queda en esta pestaña y no sube los campos. «Generar con IA» envía esos campos a la API Gemini de Google a través de ToolStarHub y devuelve un prompt reescrito. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        },
        {
          "question": "¿Qué hace que un prompt de IA sea bueno?",
          "answer": "Di lo que quieres, para quién es, el tono, el formato y la longitud. Un objetivo claro y un ejemplo del resultado suelen ayudar más que adjetivos de más."
        },
        {
          "question": "¿Puedo usar el prompt en ChatGPT, Gemini o Claude?",
          "answer": "Sí. El resultado es texto plano que puedes pegar en cualquier asistente de chat. Distintos modelos igual pueden responder de forma distinta al mismo prompt."
        },
        {
          "question": "¿Cómo convierto un tema vago en un prompt usable?",
          "answer": "Introduce el tema, añade restricciones de público y de formato, y copia el prompt estructurado en el modelo que elijas."
        },
        {
          "question": "¿Qué más debe ir en un prompt fuerte, además del tema?",
          "answer": "El objetivo, el público, el tono, la longitud, los hechos que no pueden faltar y lo que hay que evitar. La precisión gana a los adjetivos."
        },
        {
          "question": "¿El prompt generado funcionará en ChatGPT, Gemini o Claude?",
          "answer": "Sí: los prompts son texto plano. Pégalos en cualquier modelo de chat y ajústalos a las particularidades de ese producto."
        },
        {
          "question": "¿Debo incluir ejemplos dentro del prompt?",
          "answer": "Los ejemplos few-shot ayudan cuando el formato es estricto (JSON, tablas). Mantenlos cortos y representativos."
        },
        {
          "question": "¿Esta página llama por sí sola a un modelo de IA?",
          "answer": "El armado con ajustes preestablecidos es local; cualquier control Generar con IA sigue la nota de disponibilidad y de privacidad de la página."
        },
        {
          "question": "¿Cuánto debería medir un prompt terminado?",
          "answer": "Lo bastante para acotar la tarea, y lo bastante corto para recorrerlo de un vistazo. Corta el relleno que no cambia el resultado."
        },
        {
          "question": "¿En qué se diferencian las instrucciones de sistema de la petición del usuario?",
          "answer": "Las instrucciones de sistema fijan el rol y las reglas; los prompts de usuario plantean la tarea. Muchas interfaces las unen en un solo cuadro."
        },
        {
          "question": "¿Cómo pido JSON o una tabla?",
          "answer": "Indica el esquema o la lista de columnas de forma explícita y prohíbe comentarios extra cuando necesites un resultado limpio y analizable."
        },
        {
          "question": "¿Por qué los adjetivos vagos empeoran el resultado?",
          "answer": "Palabras como «atractivo» dejan al modelo adivinando. Sustitúyelas por requisitos medibles."
        },
        {
          "question": "¿Puedo reutilizar una plantilla en varias tareas?",
          "answer": "Sí: deja huecos para el tema, el público y las restricciones. Rellena esos huecos en cada tarea, en lugar de reescribir desde cero."
        },
        {
          "question": "¿Cómo evito meter secretos en los prompts?",
          "answer": "Omite secretos y datos personales. Usa marcadores de posición y rellena los valores reales en un entorno privado."
        },
        {
          "question": "¿Qué significa encadenar varios prompts?",
          "answer": "Ejecutar prompts concretos en secuencia —esquema, luego borrador, luego edición— suele superar a una sola petición enorme."
        },
        {
          "question": "¿Es útil enumerar lo que el modelo debe evitar?",
          "answer": "Unas restricciones negativas breves ayudan («sin bombo», «sin consejo médico»). Cuando puedas, prefiere especificaciones positivas."
        },
        {
          "question": "¿Cómo depuro un prompt que empeoró?",
          "answer": "Compara los cambios recientes, quita instrucciones que se contradigan y prueba una variable cada vez."
        },
        {
          "question": "¿Cuándo debo dejar de ajustar el prompt y editar el borrador?",
          "answer": "Cuando los siguientes ajustes del prompt solo barajan la redacción. Termina el pulido en un editor normal."
        }
      ]
    },
    "metaDescription": "Crea un prompt estructurado con un tema, un objetivo y un formato. «Generar prompt» se queda en el navegador; «Generar con IA» envía los campos a Gemini.",
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
    "answer": "Una herramienta de prompt a imagen escribe un prompt de imagen que puedes copiar, a partir de un sujeto y un estilo. No crea la imagen. «Generar con IA» solo devuelve un prompt más detallado.",
    "content": {
      "about": "El generador de prompts de imagen escribe un prompt para un modelo de imagen. Describes el sujeto, el lugar, la luz y el encuadre. La página no dibuja la imagen, porque no hay ninguna API de imagen conectada.",
      "howTo": [
        "Elige un estilo preestablecido si quieres un punto de partida.",
        "Escribe el sujeto. La herramienta no arma un prompt sin él.",
        "Añade el escenario, la luz, la cámara, la paleta, el ambiente y la proporción que te importen.",
        "Añade un prompt negativo para lo que debe quedarse fuera del encuadre.",
        "Pulsa Crear prompt y copia el prompt y el prompt negativo por separado."
      ],
      "examples": [
        {
          "title": "Una foto de producto",
          "body": "Sujeto: una botella de agua de acero. Ajuste: Product photography. Proporción: 1:1. Prompt negativo: logotipos de más, personas, mesa recargada. El resultado es una descripción de estudio, no un archivo."
        },
        {
          "title": "Una miniatura",
          "body": "Sujeto: una persona que sostiene un PDF anotado. Ajuste: YouTube thumbnail. La composición se mantiene en «un sujeto, espacio para un título corto». Las palabras del título las escribes tú."
        }
      ],
      "explanation": "Cada campo rellenado se convierte en una cláusula breve. El sujeto es obligatorio para que el prompt trate de algo concreto. Un ajuste preestablecido cambia el estilo y algunos campos relacionados. No borra el sujeto que ya escribiste.",
      "limitations": "La página escribe un prompt y, si lo indicas, un prompt negativo. No devuelve un archivo de imagen. El sujeto es obligatorio. «Generar con IA» pide a Gemini un prompt más largo, que igual pegas en una herramienta de imagen.",
      "tips": [
        "Un solo sujeto es más fácil de describir que una muchedumbre.",
        "Nombra la luz. «Luz de ventana» y «sol duro del mediodía» producen fotos distintas.",
        "Usa el prompt negativo para defectos que ves una y otra vez, como dedos de más o texto deformado."
      ],
      "features": [
        "Ajustes preestablecidos para foto, cine, ilustración, producto, retrato, paisaje, arquitectura, fantasía, anime, 3D y miniaturas.",
        "Botones de copiar separados para el prompt principal y el prompt negativo.",
        "Los campos vacíos se omiten, así que no queda una cadena de etiquetas en blanco."
      ],
      "faqs": [
        {
          "question": "¿Por qué no hay ninguna imagen?",
          "answer": "Esta página escribe un prompt. No renderiza una imagen. «Generar con IA» pide a Gemini un prompt más detallado. Igual pegas ese prompt en un servicio que crea imágenes."
        },
        {
          "question": "¿Todos los modelos leen el prompt de la misma forma?",
          "answer": "No. Los modelos tratan la redacción de forma distinta. Toma el resultado como un brief claro y luego ajústalo a la herramienta que uses."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "«Crear prompt» se queda en este navegador y no sube el brief. «Generar con IA» envía ese brief a la API Gemini de Google a través de ToolStarHub y devuelve un prompt más largo. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos. La página sigue sin crear una imagen."
        },
        {
          "question": "¿Cómo escribo un buen prompt de imagen?",
          "answer": "Empieza por el sujeto y luego añade el escenario, la iluminación, la cámara o el estilo artístico, la paleta de color, el ambiente y la proporción. Sé concreto en lo que importa y deja fuera el resto."
        },
        {
          "question": "¿Qué es un prompt negativo?",
          "answer": "Un prompt negativo enumera lo que debe quedarse fuera de la imagen, como texto, dedos de más o desenfoque. No todos los modelos de imagen lo leen."
        },
        {
          "question": "¿Cómo estructuro sujeto, estilo e iluminación en un solo prompt?",
          "answer": "Empieza por el sujeto y sigue con el estilo, la iluminación y la composición, para que el modelo priorice lo que más importa."
        },
        {
          "question": "¿Debo poner el ángulo de cámara al principio o al final?",
          "answer": "Pon el encuadre al principio si el ángulo es crítico; deja los adornos opcionales más atrás para que no se impongan al sujeto."
        },
        {
          "question": "¿Cómo pido fotorrealismo sin que se vea plástico?",
          "answer": "Menciona textura natural de la piel, luz suave e indicios de un objetivo real, en lugar de limitarte a «8k ultra realistic»."
        },
        {
          "question": "¿Cuándo uso prompts cortos y cuándo largos?",
          "answer": "Los prompts cortos sirven para explorar ideas; los más largos fijan los detalles cuando ya sabes qué funciona."
        },
        {
          "question": "¿Cómo evito el texto en la escena generada?",
          "answer": "Di «no text, no watermark, no logos» en el prompt negativo y evita citar letreros en el prompt principal."
        },
        {
          "question": "¿Puedo indicar una paleta de color para trabajo de marca?",
          "answer": "Sí: nombra colores inspirados en hex o palabras de paleta (verde azulado apagado, arena cálida) para que los resultados se mantengan en la marca."
        },
        {
          "question": "¿Cómo pido un fondo de estudio liso?",
          "answer": "Di «seamless studio backdrop» o «solid light-gray background» y prohíbe escenas recargadas en el prompt negativo."
        },
        {
          "question": "¿Qué debe incluir una lista reutilizable de prompts?",
          "answer": "Sujeto, acción, escenario, estilo, iluminación, objetivo o encuadre, y una lista negativa breve."
        },
        {
          "question": "¿Cómo deberían compartir los equipos los prompts que funcionan?",
          "answer": "Guarda plantillas con variables (sujeto, color) en un documento compartido para que los resultados se mantengan coherentes."
        },
        {
          "question": "¿Añadir «award-winning» suele ayudar?",
          "answer": "Rara vez: prefiere términos visuales concretos a palabras de elogio vagas."
        },
        {
          "question": "¿Cómo describo con claridad materiales como el cristal o el metal?",
          "answer": "Nombra el material y su acabado (aluminio cepillado, cristal esmerilado) y cómo le da la luz."
        },
        {
          "question": "¿Puedo combinar estilos de ilustración y de foto?",
          "answer": "Sí, pero elige un estilo dominante; las pistas mezcladas pueden confundir al modelo."
        },
        {
          "question": "¿Por qué las manos pueden verse mal incluso con un prompt cuidadoso?",
          "answer": "Las manos son un punto débil conocido: simplifica las poses o recorta más cerca cuando importe la calidad."
        },
        {
          "question": "¿Los filtros NSFW deben cambiar cómo escribo los prompts?",
          "answer": "Sigue la política de cada modelo; evita el contenido prohibido en lugar de intentar eludir las normas con la redacción."
        },
        {
          "question": "¿Este constructor de prompts renderiza la imagen final?",
          "answer": "Te ayuda a escribir el prompt; lo pegas por separado en el modelo de imagen que elijas."
        }
      ]
    },
    "metaDescription": "Escribe un prompt de imagen a partir del sujeto y el estilo. Esta página no genera la imagen. «Generar con IA» solo devuelve un prompt más detallado.",
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
    "answer": "Una herramienta de prompt a vídeo escribe la descripción de una toma que puedes pegar en un modelo de vídeo. No renderiza el clip. «Generar con IA» solo devuelve el prompt escrito.",
    "content": {
      "about": "El generador de prompts de vídeo escribe la descripción de una sola toma: quién o qué aparece en el encuadre, qué se mueve, cómo se mueve la cámara y cuánto dura la toma. No genera vídeo.",
      "howTo": [
        "Elige un ajuste preestablecido para un estilo de partida, o deja los campos en blanco y escribe el tuyo.",
        "Añade un sujeto o una acción. Hace falta uno de los dos.",
        "Describe la escena, la cámara, el objetivo, la luz, la duración y la proporción.",
        "Añade audio o diálogo solo si la toma necesita sonido.",
        "Pulsa Crear prompt y copia el texto. Borrar restablece el formulario, incluida la duración predeterminada."
      ],
      "examples": [
        {
          "title": "Una órbita de producto",
          "body": "Sujeto: una taza de cerámica. Acción: sube el vapor. Ajuste: Product commercial. La duración se queda en 6 segundos. El prompt pide una órbita y luz de estudio."
        },
        {
          "title": "Un desplazamiento de viaje",
          "body": "Sujeto: un sendero costero. Acción: una persona se aleja de la cámara. Ajuste: Travel. Añades la hora del día en el campo de entorno para que la luz no quede en blanco."
        }
      ],
      "explanation": "Los modelos de vídeo rinden mejor con una sola acción que con una secuencia de escenas. El constructor mantiene tus cláusulas en un orden estable y añade «one continuous shot» para que la petición no se convierta en un storyboard.",
      "limitations": "El constructor describe una toma continua. No renderiza ni descarga un vídeo. Necesitas un sujeto o una acción. La duración, la cámara y el diálogo solo se incluyen cuando los escribes.",
      "tips": [
        "Di qué se mueve y qué se queda quieto.",
        "Una duración como «5 segundos» es más útil que «corto».",
        "Si necesitas diálogo, escribe la frase. No pidas al modelo que invente un discurso."
      ],
      "features": [
        "Ajustes preestablecidos para tomas de cine, anuncios, redes, YouTube, documental, viaje, acción, moda, naturaleza, historia y animación.",
        "Una línea de cierre que mantiene la petición en una sola toma continua.",
        "Un prompt negativo aparte para problemas de movimiento e imagen que quieres evitar."
      ],
      "faqs": [
        {
          "question": "¿Puedo descargar un vídeo desde esta página?",
          "answer": "No. Esta página no renderiza un vídeo. «Generar con IA» solo devuelve un prompt escrito de la toma desde Gemini. Copia ese prompt en una herramienta de vídeo en la que confíes."
        },
        {
          "question": "¿Qué ocurre si solo describo la acción?",
          "answer": "Una acción basta. Añadir un sujeto hace que la toma sea más fácil de imaginar."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "«Crear prompt» escribe la toma en esta pestaña. «Generar con IA» envía los campos de la toma a la API Gemini de Google a través de ToolStarHub y devuelve un prompt escrito. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos. No se crea ningún archivo de vídeo."
        },
        {
          "question": "¿Cómo escribo un prompt para un vídeo con IA?",
          "answer": "Describe una sola toma: el sujeto, la acción, el escenario, el movimiento de cámara, el objetivo, la luz y la duración. Los prompts cortos y concretos suelen funcionar mejor que las historias largas."
        },
        {
          "question": "¿Qué modelos de vídeo pueden usar estos prompts?",
          "answer": "El resultado es texto plano, así que puedes pegarlo en cualquier herramienta de texto a vídeo. Cada modelo sigue las indicaciones de cámara y de tiempo a su manera."
        },
        {
          "question": "¿Cómo describo el movimiento para que los clips se sientan deliberados?",
          "answer": "Indica la acción del sujeto, el movimiento de cámara y el ritmo (avance lento, paneo rápido) en un lenguaje sencillo."
        },
        {
          "question": "¿Un prompt debe cubrir toda la historia o una sola toma?",
          "answer": "Una toma por prompt es más clara; encadena tomas con un storyboard breve para relatos más largos."
        },
        {
          "question": "¿Cómo mantengo la iluminación coherente entre cortes?",
          "answer": "Repite las mismas palabras de hora del día y de calidad de luz en el prompt de cada toma."
        },
        {
          "question": "¿Puedo indicar la duración dentro del texto del prompt?",
          "answer": "Algunos modelos respetan «5-second clip»; otros usan la duración de la interfaz: sigue los controles del modelo."
        },
        {
          "question": "¿Cómo reduzco el parpadeo entre fotogramas?",
          "answer": "Pide iluminación estable y movimiento suave; evita cambios rápidos de estilo a mitad del prompt."
        },
        {
          "question": "¿Qué verbos de cámara funcionan bien para vídeo con IA?",
          "answer": "Dolly, travelling, órbita, cámara en mano y trípode fijo son más claros que un vago «cinematic»."
        },
        {
          "question": "¿Cómo debo tratar el sonido en un prompt de vídeo?",
          "answer": "Describe sonidos diegéticos solo si el modelo admite audio; si no, planifica el sonido en la postproducción."
        },
        {
          "question": "¿Puedo adaptar un prompt de imagen fija a un prompt de vídeo?",
          "answer": "Reutiliza el sujeto y el estilo, y añade el movimiento y la dirección de cámara que el prompt fijo no tenía."
        },
        {
          "question": "¿Cómo evito que los rostros se deformen a mitad del clip?",
          "answer": "Mantén las pistas de identidad cortas y coherentes; evita descripciones contradictorias de edad o de pelo."
        },
        {
          "question": "¿Debo mencionar la resolución y los fps cada vez?",
          "answer": "Si la interfaz los fija, omítelos; si no, indica una vez los fps y la resolución de destino."
        },
        {
          "question": "¿En qué se diferencian las demos de producto de los clips narrativos?",
          "answer": "Las demos destacan un movimiento claro del producto y etiquetas legibles; las narraciones destacan la emoción y los acentos."
        },
        {
          "question": "¿Qué lista negativa es útil para vídeo?",
          "answer": "Sin superposiciones de texto, sin marca de agua, sin cortes bruscos, sin extremidades de más: ajústala a cada modelo."
        },
        {
          "question": "¿Cómo itero después de un primer render flojo?",
          "answer": "Cambia una variable (movimiento, objetivo o iluminación) en cada intento para aprender qué funcionó."
        },
        {
          "question": "¿Los prompts pueden pedir transiciones concretas?",
          "answer": "Algunos modelos ignoran las palabras de transición; corta en un editor cuando importe la precisión."
        },
        {
          "question": "¿Esta página genera el archivo de vídeo por mí?",
          "answer": "Te ayuda a redactar el prompt; la generación ocurre en el modelo o la aplicación de vídeo que uses."
        }
      ]
    },
    "metaDescription": "Escribe la descripción de una toma para pegarla en un modelo de vídeo. No renderiza el clip. «Generar con IA» solo devuelve el prompt escrito.",
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
    "answer": "Esta página revisa patrones de escritura, como la longitud de las frases y las expresiones repetidas. «Analizar con IA» también es un análisis de patrones de escritura. No decide si el texto lo escribió una persona o un modelo.",
    "content": {
      "about": "El detector de artículos con IA observa el borrador que pegas y informa la longitud de las frases, cuánto varían esas longitudes, cuán amplio es el vocabulario y qué frases cortas se repiten. El encabezado del resultado es Análisis de patrones de escritura. Esa es toda la afirmación.",
      "howTo": [
        "Pega al menos 40 palabras.",
        "Pulsa Analizar texto para la revisión en el navegador, o Analizar con IA para un análisis de patrones de escritura con Gemini.",
        "Lee los recuentos y la nota que hay debajo.",
        "Si la muestra es demasiado corta, la página lo dice en lugar de puntuarla.",
        "Borrar quita el texto de la página."
      ],
      "examples": [
        {
          "title": "Un borrador que se repite",
          "body": "Si las mismas cuatro palabras aparecen en varias frases, salen en la lista con un recuento. Eso significa que el borrador es repetitivo. No significa que lo haya escrito un modelo."
        },
        {
          "title": "Una leyenda corta",
          "body": "Veinte palabras no bastan. La herramienta pide 40 palabras para que una sola frase no se trate como un patrón."
        }
      ],
      "explanation": "La variación de las frases compara la dispersión de sus longitudes con la media. El vocabulario compara las palabras distintas con el total de palabras. Ambas medidas se mueven en una edición normal. Un borrador humano cuidadoso puede verse uniforme. Un borrador generado puede verse variado. La página lo dice en el resultado.",
      "limitations": "La revisión en el navegador necesita al menos 40 palabras. Informa la longitud de las frases, la amplitud del vocabulario y las frases repetidas. No devuelve un porcentaje ni un veredicto de que un modelo escribió el borrador. «Analizar con IA» envía el texto a Gemini para el mismo tipo de descripción.",
      "tips": [
        "Usa una sección completa, no un titular.",
        "Trata las frases repetidas como una nota de edición. Córtalas si el lector las notaría.",
        "No uses las etiquetas para acusar a alguien de haber usado un modelo."
      ],
      "features": [
        "Longitud media de las frases y una etiqueta de baja, moderada o variada.",
        "Una etiqueta de vocabulario basada en cuántas palabras distintas aparecen.",
        "Frases de cuatro palabras que aparecen tres o más veces.",
        "Una lista breve de frases hechas, cuando están presentes."
      ],
      "faqs": [
        {
          "question": "¿Puede decir si un texto lo escribió una IA?",
          "answer": "No. No puede hacerlo con certeza. Las revisiones de patrones producen falsos positivos y falsos negativos. El resultado es una descripción del borrador, no un veredicto."
        },
        {
          "question": "¿Por qué no hay una puntuación en porcentaje?",
          "answer": "Un porcentaje parecería una prueba. «Analizar texto» y «Analizar con IA» describen patrones. Ninguno afirma que pueda decir quién escribió el texto."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "«Analizar texto» cuenta patrones en esta pestaña y no sube el borrador. «Analizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub para una descripción escrita. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        },
        {
          "question": "¿Los detectores de IA son precisos?",
          "answer": "Ningún detector puede demostrar quién escribió un texto. Las puntuaciones basadas en patrones pueden marcar escritura humana y pasar por alto escritura de IA editada, así que trata cualquier resultado como una invitación a revisar, no como una prueba."
        },
        {
          "question": "¿Qué patrones observa esta herramienta?",
          "answer": "Informa la longitud de las frases, cuán variado es el vocabulario y las frases repetidas, para que veas dónde un borrador suena plano o repetitivo."
        },
        {
          "question": "¿Cómo funcionan las revisiones de patrones de escritura en un borrador?",
          "answer": "Buscan regularidades estadísticas habituales en la salida de un modelo —ritmo uniforme, transiciones hechas y poca variación— no una prueba de autoría."
        },
        {
          "question": "¿Por qué no tratar el resultado como una puntuación en porcentaje?",
          "answer": "Un solo porcentaje implica una precisión falsa. Las notas de patrones son más honestas que un número de certeza inventado."
        },
        {
          "question": "¿Una escritura humana cuidadosa puede parecer uniforme a un revisor?",
          "answer": "Sí. Los informes formales y los textos de marketing editados pueden disparar señales parecidas. Usa los resultados como una invitación a revisar, no como un veredicto."
        },
        {
          "question": "¿Qué debo hacer si los patrones parecen de IA?",
          "answer": "Reescribe las transiciones, varía la longitud de las frases y añade detalles concretos que solo tú conozcas. Luego vuelve a revisar."
        },
        {
          "question": "¿Analizar el texto sube mi borrador?",
          "answer": "Las revisiones locales se quedan en el navegador; cualquier paso opcional de análisis con IA sigue la nota de privacidad de la página."
        },
        {
          "question": "¿Las puntuaciones de un detector bastan para un caso disciplinario escolar?",
          "answer": "Ninguna herramienta es definitiva. Las instituciones deben combinar pruebas del proceso con una revisión humana, no basarse solo en detectores."
        },
        {
          "question": "¿Qué indicios destaca esta página en un borrador?",
          "answer": "Cosas como aperturas repetidas, párrafos de longitud uniforme y formulaciones genéricas: señales para investigar, no una prueba."
        },
        {
          "question": "¿Puedo revisar un párrafo cada vez?",
          "answer": "Sí. Las muestras más pequeñas pueden mostrar qué secciones se sienten más de plantilla."
        },
        {
          "question": "¿Una edición intensa después de un borrador con IA borra todas las señales?",
          "answer": "A menudo las reduce, pero algo de la estructura puede quedar. El juicio humano sigue importando."
        },
        {
          "question": "¿Debo pegar texto confidencial de un cliente en un revisor?",
          "answer": "Mejor no. Usa texto de muestra o redactado cuando explores patrones."
        },
        {
          "question": "¿Los bloques de código afectan a la lectura?",
          "answer": "El contenido mezclado puede sesgar las pistas. Revisa la prosa por separado del código cuando puedas."
        },
        {
          "question": "¿Una etiqueta humana garantiza la autoría?",
          "answer": "No. Las etiquetas son heurísticas. Trátalas como una orientación, no como una certificación."
        },
        {
          "question": "¿En qué se diferencia esto de un revisor de plagio?",
          "answer": "Las herramientas de plagio comparan con fuentes conocidas. Las revisiones de patrones estiman la regularidad del estilo, sin afirmar una coincidencia de fuente."
        },
        {
          "question": "¿Se pueden analizar varios idiomas de la misma forma?",
          "answer": "El soporte varía. Las heurísticas centradas en el inglés pueden leer mal otros idiomas."
        },
        {
          "question": "¿Cuál es un flujo de trabajo sano después de una alerta?",
          "answer": "Revisa la voz y los detalles, cita las fuentes y conserva los borradores que muestren tu proceso."
        }
      ]
    },
    "metaDescription": "Revisa la longitud de las frases y las repeticiones. «Analizar con IA» también es un análisis de patrones, no un veredicto sobre la autoría.",
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
    "answer": "Un compresor de artículos acorta un borrador recortando relleno y frases repetidas. «Comprimir con IA» pide a Gemini que conserve el sentido principal. Revisa el resultado antes de publicarlo.",
    "content": {
      "about": "El compresor de artículos con IA deja un borrador largo más corto. La compresión ligera cambia algunas expresiones prolijas y ordena los espacios. La media y la fuerte también quitan frases repetidas. Debes leer el resultado. El sentido puede cambiar cuando se elimina una frase.",
      "howTo": [
        "Pega el artículo. Necesita al menos 12 palabras.",
        "Elige una compresión ligera, media o fuerte.",
        "Pulsa Acortar artículo para las reglas del navegador, o Comprimir con IA para que Gemini lo acorte.",
        "Compara los recuentos de palabras y copia el borrador más corto si sigue diciendo lo que querías.",
        "Borrar vacía ambos cuadros y devuelve el ajuste a medio."
      ],
      "examples": [
        {
          "title": "Una frase prolija",
          "body": "«In order to finish the form, you need to sign it» se convierte en «to finish the form, you need to sign it» en todos los ajustes."
        },
        {
          "title": "La misma frase dos veces",
          "body": "El nivel medio y el fuerte conservan la primera copia y quitan la repetición exacta posterior. El ligero deja las dos copias."
        }
      ],
      "explanation": "«Acortar artículo» usa una lista fija de sustituciones. La compresión fuerte también omite una frase posterior que empieza con las mismas seis palabras que una anterior. «Comprimir con IA» pide a Gemini que acorte el artículo en el nivel que elegiste. Lee cualquiera de los dos resultados antes de confiar en él.",
      "limitations": "La compresión ligera cambia una lista fija de expresiones prolijas. La media y la fuerte también quitan una repetición exacta posterior, y la fuerte puede omitir una frase posterior que empieza con las mismas seis palabras. El borrador necesita al menos 12 palabras. Acortar puede quitar una frase que aún querías.",
      "tips": [
        "Empieza por el nivel ligero si el artículo ya está apretado.",
        "Usa el fuerte en un pegado tosco y luego restaura cualquier frase que importara.",
        "Esto no es una forma de ocultar cómo se escribió un borrador."
      ],
      "features": [
        "Tres intensidades, para que un paso ligero no borre frases.",
        "Recuentos de palabras antes y después.",
        "Sustituciones fijas de expresiones, como «in order to» por «to».",
        "Eliminación de frases duplicadas en los niveles medio y fuerte."
      ],
      "faqs": [
        {
          "question": "¿El texto más corto evadirá un detector de IA?",
          "answer": "No. La herramienta no intenta hacerlo y no afirma que el resultado se vea como un tipo concreto de autor."
        },
        {
          "question": "¿Conserva el sentido?",
          "answer": "«Acortar artículo» conserva la mayor parte de las palabras y quita algo de relleno y de repeticiones. «Comprimir con IA» pide a Gemini que conserve el sentido principal y los hechos importantes. Lee el borrador más corto antes de confiar en él."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "«Acortar artículo» se ejecuta en esta pestaña y no sube el borrador. «Comprimir con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub y devuelve una versión más corta. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        },
        {
          "question": "¿Cómo acorto un artículo sin perder el sentido?",
          "answer": "Corta primero las expresiones prolijas, luego los puntos repetidos y después las frases enteras que no aportan nada. Compara el resultado con el original antes de usarlo."
        },
        {
          "question": "¿Qué nivel de compresión debo elegir?",
          "answer": "El ligero solo cambia expresiones prolijas. El medio también quita repeticiones. El fuerte puede omitir frases que empiezan igual, así que revísalo con más cuidado."
        },
        {
          "question": "¿Cómo acorto un borrador largo y conservo el punto?",
          "answer": "Pega el artículo, elige un nivel de compresión y revisa la versión más corta en busca de hechos que falten antes de publicarla."
        },
        {
          "question": "¿Con qué intensidad de compresión debo empezar?",
          "answer": "Empieza con un paso ligero para pulir y prueba un nivel más fuerte solo si aún necesitas menos palabras."
        },
        {
          "question": "¿La compresión quita citas y entrecomillados?",
          "answer": "Los modos agresivos pueden recortarlos o acortarlos. Vuelve a revisar las fuentes y restaura las citas que debas conservar."
        },
        {
          "question": "¿Puedo comprimir una sola sección en lugar de todo el texto?",
          "answer": "Sí: pega solo esa sección, comprímela y luego encájala de nuevo en el borrador completo."
        },
        {
          "question": "¿Un borrador más corto siempre se lee mejor?",
          "answer": "No siempre. Una compresión excesiva puede sonar abrupta. Prefiere la claridad al recuento de palabras más bajo."
        },
        {
          "question": "¿Los detectores tratarán el texto comprimido como escrito por una persona?",
          "answer": "No hay ninguna garantía fiable. La compresión cambia la longitud y la redacción, no una prueba de autoría."
        },
        {
          "question": "¿Cómo debo tratar los términos técnicos durante la compresión?",
          "answer": "Revisa el resultado en busca de jerga que se haya perdido o alterado. Vuelve a poner a mano los términos críticos."
        },
        {
          "question": "¿Hay un recuento de palabras al que deba apuntar?",
          "answer": "Ajústate al límite del canal (boletín, resumen, redes). Comprime de forma iterativa hasta alcanzarlo sin perder afirmaciones."
        },
        {
          "question": "¿Las listas con viñetas sobreviven a la compresión?",
          "answer": "A menudo se aplanan en párrafos. Vuelve a dar formato a las listas después si importa la estructura."
        },
        {
          "question": "¿La herramienta inventa hechos nuevos para rellenar huecos?",
          "answer": "No debería inventar investigación. Aun así, verifica cada cifra y cada nombre con tu borrador de origen."
        },
        {
          "question": "¿Y si la versión comprimida cambia mi tono?",
          "answer": "Edita a mano unas cuantas frases después de comprimir, o prueba un nivel más suave."
        },
        {
          "question": "¿Debo comprimir antes o después de editar para SEO?",
          "answer": "Suele convenir editar primero la estructura y las palabras clave, y comprimir después, para que las frases de SEO no desaparezcan tan fácilmente."
        },
        {
          "question": "¿Puedo usarlo con un texto traducido?",
          "answer": "Sí, pero el riesgo de que se desvíe el sentido aumenta. Que un lector bilingüe revise el resultado."
        },
        {
          "question": "¿Qué tan largo puede ser el artículo que pego?",
          "answer": "Quédate dentro del límite de la página. Divide las piezas muy largas en capítulos si hace falta."
        },
        {
          "question": "¿El texto comprimido se guarda cuando me voy?",
          "answer": "Se queda solo en la sesión de la página, a menos que lo copies en otro sitio."
        }
      ]
    },
    "metaDescription": "Acorta un borrador recortando relleno y repeticiones. «Comprimir con IA» pide a Gemini que conserve el sentido. Revisa el resultado antes de publicarlo.",
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
    "answer": "Un humanizador de textos con IA reescribe frases hechas con una lista fija en el navegador. «Humanizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub. La herramienta no intenta evadir un detector de IA y no afirma que el resultado se vea como un tipo concreto de autor.",
    "content": {
      "about": "El humanizador de textos con IA cambia una lista fija de frases hechas por una redacción más sencilla. «Reescribir texto» lo hace en esta pestaña. «Humanizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub y devuelve un borrador reescrito. El texto no se guarda. Revisa el resultado antes de usarlo. Ninguno de los dos resultados es una forma de ocultar cómo se escribió un borrador.",
      "howTo": [
        "Pega el borrador. Necesita al menos 12 palabras y como máximo 4000 caracteres.",
        "Pulsa Reescribir texto para la lista de frases del navegador, o Humanizar con IA para que Gemini lo reescriba.",
        "Revisa el resultado. Una eliminación puede dejar la siguiente palabra en minúscula.",
        "Copia el borrador reescrito si sigue diciendo lo que querías.",
        "Borrar vacía el cuadro y el resultado local."
      ],
      "examples": [
        {
          "title": "Aperturas hechas",
          "body": "«In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.» se convierte en «here is the setup. you can use a short checklist.»"
        },
        {
          "title": "Una frase repetida",
          "body": "«The form is short. The form is short. Please sign it before noon today and bring a pen.» se queda en dos copias. Este paso no quita una frase repetida."
        }
      ],
      "explanation": "«Reescribir texto» recorre una lista fija una sola vez. No vuelve a poner mayúsculas después de una eliminación, y un apóstrofo curvo no coincide. «Humanizar con IA» pide a Gemini que conserve los mismos hechos, nombres y cifras, y que no acorte el borrador hasta convertirlo en un resumen. Revisa cualquiera de los dos resultados antes de usarlo.",
      "limitations": "El borrador necesita al menos 12 palabras para «Reescribir texto» y como máximo 4000 caracteres en cualquiera de los dos botones. El paso local solo cambia las frases de la lista. Un apóstrofo curvo no coincidirá. La herramienta no intenta evadir un detector de IA y no afirma que el resultado se vea como un tipo concreto de autor.",
      "tips": [
        "Revisa el resultado antes de usarlo. La siguiente palabra puede quedar en minúscula después de quitar una expresión.",
        "Una frase repetida se queda. Este paso no la borra.",
        "Ninguno de los dos resultados es una forma de ocultar cómo se escribió un borrador."
      ],
      "features": [
        "Una lista fija de frases, aplicada en el navegador.",
        "Un resultado aparte de Humanizar con IA.",
        "Un límite de 4000 caracteres en ambos botones.",
        "Sin eliminación de frases y sin quitar frases duplicadas."
      ],
      "faqs": [
        {
          "question": "¿El humanizador de textos con IA es gratis?",
          "answer": "Sí. Puedes reescribir un borrador aquí sin pagar ni crear una cuenta. «Reescribir texto» se queda en esta pestaña. «Humanizar con IA» igual envía el borrador a la API Gemini de Google a través de ToolStarHub."
        },
        {
          "question": "¿Esto evadirá un detector de IA?",
          "answer": "No. La herramienta no intenta hacerlo y no afirma que el resultado se vea como un tipo concreto de autor."
        },
        {
          "question": "¿Conserva el sentido?",
          "answer": "«Reescribir texto» conserva las palabras que no están en la lista de frases. A «Humanizar con IA» se le indica que conserve los mismos hechos, nombres y cifras, y que no acorte el borrador hasta convertirlo en un resumen. Revisa el resultado antes de usarlo."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "«Reescribir texto» se ejecuta en esta pestaña y no sube el borrador. «Humanizar con IA» envía el borrador a la API Gemini de Google a través de ToolStarHub y devuelve un borrador reescrito. ToolStarHub no guarda ese texto. En el nivel gratuito, Google puede usarlo para mejorar sus productos."
        },
        {
          "question": "¿Cómo funciona un humanizador de textos con IA?",
          "answer": "Reescribe la formulación, el ritmo y la elección de palabras para que el borrador se lea más como una escritura cotidiana, e intenta conservar tu sentido. Los resultados varían según el modelo y según lo rígido o repetitivo que fuera el texto original."
        },
        {
          "question": "¿Cuándo debo usar un humanizador en lugar de reescribir yo?",
          "answer": "Úsalo cuando necesites un primer paso más rápido en borradores rígidos de IA, textos de producto o copias traducidas. Revisa siempre tú el resultado en busca de hechos, tono y afirmaciones antes de publicarlo."
        },
        {
          "question": "¿Humanizar cambiará términos técnicos o nombres de marca?",
          "answer": "Puede suavizar las frases de alrededor, pero debes comprobar que los nombres de producto, las cifras y la jerga se queden exactos. Vuelve a pegar cualquier término que la reescritura haya deformado antes de enviar el texto."
        },
        {
          "question": "¿Puedo humanizar solo un párrafo de un artículo más largo?",
          "answer": "Sí. Pega solo ese párrafo, ejecuta la herramienta y luego encaja el resultado en el borrador completo. Los trozos más cortos son más fáciles de revisar y tienen menos riesgo de desviarse del tema."
        },
        {
          "question": "¿Un humanizador también corrige la gramática y la ortografía?",
          "answer": "A menudo suaviza formulaciones torpes, pero no es un corrector dedicado. Pasa un corrector ortográfico después si el borrador irá a clientes o a un profesor."
        },
        {
          "question": "¿Un texto humanizado es lo mismo que una escritura original?",
          "answer": "No. Sigue derivándose de tu borrador de origen. Escuelas y editoriales pueden tratar una edición intensa con IA según sus propias normas, así que síguelas cuando apliquen."
        },
        {
          "question": "¿Por qué a veces la reescritura suena más plana que el original?",
          "answer": "Los humanizadores suelen preferir palabras sencillas y frases más cortas. Si necesitas una voz de marketing más contundente, conserva algunas de tus frases originales o edita el resultado a mano."
        },
        {
          "question": "¿Cuánto texto puedo pegar?",
          "answer": "Hasta 4000 caracteres, contados después de recortar los espacios del principio y del final. Eso son, más o menos, 600-700 palabras de inglés habitual, no miles de palabras. Tanto la reescritura con la lista de frases como «Humanizar con IA» rechazan un texto más largo, y la reescritura con la lista también necesita al menos 12 palabras. Divide un artículo más largo en secciones de menos de 4000 caracteres y reescríbelas de una en una."
        },
        {
          "question": "¿La herramienta guarda mi borrador cuando salgo de la página?",
          "answer": "Esta página está hecha para reescribir en la propia página; trata cualquier dato sensible como privado y evita pegar secretos. Vacía el cuadro cuando termines si compartes el dispositivo."
        },
        {
          "question": "¿Puedo usarlo para correos y publicaciones de LinkedIn?",
          "answer": "Sí, para limpiar el tono de textos profesionales cortos. Igual verifica nombres, fechas y ofertas para que la redacción más suave no invente detalles que no escribiste."
        },
        {
          "question": "¿Cuál es la diferencia entre humanizar y parafrasear?",
          "answer": "Parafrasear se centra en decir la misma idea con otras palabras. Humanizar apunta además a patrones que suenan generados por una máquina, como un ritmo repetitivo o transiciones hechas."
        },
        {
          "question": "¿Los detectores siempre etiquetarán el texto humanizado como humano?",
          "answer": "No. Los detectores son imperfectos y se actualizan a menudo. No confíes en ninguna herramienta de reescritura como garantía de que el contenido pasará un detector concreto."
        },
        {
          "question": "¿Debo humanizar citas académicas y entrecomillados?",
          "answer": "Deja en paz el material citado y las cadenas de referencia. Reescribe solo la explicación de alrededor para no alterar las palabras exactas de otra persona."
        },
        {
          "question": "¿Ejecutar humanizar dos veces mejora el resultado?",
          "answer": "Un segundo paso puede suavizar frases hechas que hayan quedado, pero también puede lavar la voz. Compara las dos versiones y quédate con la más clara."
        },
        {
          "question": "¿El humanizador puede inventar hechos que yo no escribí?",
          "answer": "Las reescrituras a veces rellenan huecos con una redacción plausible. Contrasta cada cifra, cada afirmación y cada nombre propio con tu origen antes de publicar."
        },
        {
          "question": "¿Hay una forma sin conexión de suavizar la formulación de IA?",
          "answer": "Sí: corta las aperturas de relleno, varía la longitud de las frases, sustituye adjetivos vagos por detalles concretos y lee el borrador en voz alta. Esas ediciones suelen superar a un segundo paso automático."
        }
      ]
    },
    "metaDescription": "Reescribe frases hechas con una lista fija en el navegador. «Humanizar con IA» envía el borrador a Gemini. La herramienta no intenta evadir un detector de IA.",
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
  },
  "urdu-news-translator": {
    "answer": "El traductor de noticias en urdu convierte una noticia pegada en urdu en borradores en inglés Brief, Medium y Full, y luego contrasta nombres, cifras, fechas y citas con el urdu. El resultado es un borrador para un editor, no una noticia publicada.",
    "content": {
      "about": "Pega una noticia en urdu y obtén tres borradores en inglés: Brief, Medium y Full. Brief conserva quién, qué, cuándo y dónde. Medium añade la cita principal y la fecha o cifra clave. Full traduce cada frase. Una comprobación de hechos compara cada borrador con el urdu. La página también revisa cifras, comillas, longitud y un glosario de nombres pakistaníes. Aquí no se publica nada. Un editor aprueba el borrador primero.",
      "howTo": [
        "Pega la noticia en urdu en el recuadro de derecha a izquierda. Translate la envía al modelo Gemini de Google a través de Tools Star Hub.",
        "Lee Brief, Medium y Full. Medium queda seleccionado primero. Use this cambia la versión que usan Expand y el botón Copy de aprobación. Humanize reescribe el cuerpo ampliado cuando hay uno abierto; si no, reescribe el cuerpo seleccionado.",
        "Lee la tabla de hechos y el informe de verificación. Un aviso ámbar significa que el borrador necesita revisión.",
        "Edita el título, el permalink, el meta título o cualquier borrador. Una edición anula la aprobación.",
        "Pulsa Expand news si quieres un artículo más completo hecho solo con hechos del urdu. El cuerpo ampliado son solo los párrafos. Humanize reescribe ese cuerpo, o el cuerpo seleccionado, y deja el título, el subtítulo, el permalink y los campos meta como están.",
        "Cada campo tiene su propio botón Copy, y ese botón copia solo ese campo. Pulsa Approve y luego Copy o Copy all. Copy all conserva las etiquetas. Si una comprobación necesita revisión, Approve te pide que leas la lista y confirmes."
      ],
      "examples": [
        {
          "title": "Una entradilla de dos frases",
          "body": "Significado de muestra en urdu: el ministro principal dijo en Lahore el lunes que la ciudad abriría dos clínicas. Brief conserva la persona, el lugar, el día y el plan, y deja fuera la cita. Medium puede conservar la cita y el día. Full conserva las dos frases y el verbo said. Si el inglés dice 20 clinics, la comprobación de cifras marca un error porque 20 no está en el urdu."
        }
      ],
      "explanation": "Translate pide un JSON estructurado. Luego la página arma el titular, el permalink y la meta descripción en código. Brief tiene como máximo dos frases y 40 palabras, y no lleva cita. Medium tiene como máximo 100 palabras. Si el urdu es corto, Brief y Medium se quedan tan cortos como permiten los hechos, y pueden coincidir con Full. Se indica al modelo que no añada palabras ni hechos para alcanzar una longitud, que no añada contexto, que no adivine un nombre y que no cambie claimed por confirmed. Las palabras poco claras se quedan entre corchetes. Las cifras urdu y las cifras arábigo-índicas pasan a cifras occidentales. Un paso de comprobación de hechos compara el urdu con cada versión y solo informa un problema real. Humanize devuelve solo los párrafos de la noticia. El título, el subtítulo, el permalink, el meta título y la meta descripción se quedan en sus propios campos. Expand y Humanize vuelven a ejecutar las comprobaciones de código.",
      "limitations": "La herramienta redacta inglés. No publica y no conoce el estilo de tu redacción más allá del glosario. Puede pasar por alto una cifra escrita como palabra, y puede pasar por alto un cambio de sentido que la comprobación de hechos también pase por alto. Expand y Humanize siguen limitados al urdu. No son una fuente de contexto. El límite de ritmo es de unas 20 peticiones cada 15 minutos en cada instancia del servidor, y se rechaza una noticia de más de 8000 caracteres. El texto enviado para traducir no se guarda en este sitio.",
      "tips": [
        "Pega la noticia que quieres traducir, no un resumen que hayas escrito al lado. Las líneas de más se vuelven hechos de origen.",
        "Lee Full junto al urdu antes de confiar en Brief. Brief puede dejar frases fuera. No puede inventarlas.",
        "Si un nombre está entre corchetes, revisa la grafía en urdu antes de borrar los corchetes.",
        "Después de aprobar un borrador, el contador de palabras puede confirmar la longitud que estás a punto de entregar."
      ],
      "features": [
        "Brief, Medium y Full en una sola página, con subtítulo, cuerpo y meta descripción editables.",
        "Un permalink, un título y un meta título armados en código, con recuentos de caracteres en vivo.",
        "Una tabla de hechos que muestra qué longitud incluye cada persona, lugar, cifra, fecha o cita.",
        "Comprobaciones de código para cifras de más, citas en Brief, longitud, palabras entre corchetes y grafías del glosario.",
        "Un glosario de políticos, partidos, ciudades e instituciones de Pakistán. Solo se envían con la petición las entradas encontradas en la noticia."
      ],
      "sections": [
        {
          "heading": "Qué puede hacer cada longitud",
          "paragraphs": [
            "Brief selecciona. Responde quién hizo qué, cuándo y dónde. No cita a nadie y no añade una razón que el urdu nunca dio. Si la noticia es solo una negación, Brief se queda en una negación. Una noticia en urdu de una sola frase puede dejar Brief y Medium igual de cortos. No ganan palabras para llegar a 40 o a 100.",
            "Medium conserva los hechos clave, la cita principal y la fecha o cifra clave. Una cita se queda entre comillas. El verbo se mantiene fiel: said, claimed o alleged. Full traduce cada frase. La página avisa cuando Full queda por debajo del 70 por ciento del recuento de palabras del urdu, lo que suele significar que se omitió una frase."
          ]
        },
        {
          "heading": "Qué pueden ver las comprobaciones y qué no",
          "paragraphs": [
            "El código lee cifras y palabras numéricas. دو en el urdu cuenta como 2, y two en el inglés cuenta como 2. Un simple دو ہزار cuenta como 2000. Una cifra en el inglés que no está en el urdu es un error. Del 1 al 10, la línea es un aviso, por si el urdu usó una palabra, salvo que la comprobación de hechos también señale esa cifra. Una cifra del urdu que falta en Full es un aviso. La comprobación de hechos también cubre un nombre, un lugar, una cita o un sentido cambiados.",
            "Brief falla si contiene una comilla. Los corchetes generan un aviso para que confirmes la palabra poco clara. Si un nombre del glosario está en el urdu y el inglés usa otra grafía, el informe avisa. Cualquier aviso o error deja el estado en needs review. Cada campo se copia por su cuenta. Approve desbloquea Copy y Copy all. Copy all conserva las etiquetas."
          ]
        },
        {
          "heading": "Titular, permalink y descripción",
          "paragraphs": [
            "El título va en title case y tiene como máximo 70 caracteres. El meta título añade « | Tools Star Hub» cuando esa línea cabe en 60 caracteres. Si el sufijo no cabe, el meta título es solo el título. Un título más largo se corta en una palabra a 60 caracteres, sin sufijo, y no se detiene en una cifra ni en una palabra corta como in, of, the, to o and. Cada meta descripción se corta en una palabra a 155 caracteres.",
            "El permalink va en minúsculas, con guiones y en ASCII. Se quitan palabras cortas como the, of e in. Se dejan fuera las fechas y las letras urdu. Conserva de 4 a 8 palabras y como máximo 60 caracteres. Una repetición en la misma sesión del navegador recibe un sufijo numérico. El sitio no guarda noticias, así que no puede reservar esa dirección en el servidor."
          ]
        }
      ],
      "faqs": [
        {
          "question": "¿Esta página publica la noticia?",
          "answer": "No. Prepara un borrador. Cada campo tiene un botón Copy solo para ese texto. Copy y Copy all en la barra de aprobación se quedan desactivados hasta que pulses Approve, y un editor igual revisa el inglés antes de usarlo en otro sitio."
        },
        {
          "question": "¿Añadirá contexto que el urdu no dijo?",
          "answer": "Se le indica que no lo haga. Brief y Medium solo pueden acortar. No añaden palabras ni hechos para alcanzar una longitud. Full traduce cada frase. Expand puede restaurar un hecho que está en el urdu y falta en la versión corta. Un nombre, una cifra, una fecha o una cita nuevos deberían aparecer como un error."
        },
        {
          "question": "¿Cuál es la diferencia entre Brief, Medium y Full?",
          "answer": "Brief tiene como máximo dos frases de hechos clave y no lleva cita. Medium tiene como máximo 100 palabras y conserva la cita principal y la fecha o cifra clave cuando el urdu las tiene. Una noticia corta en urdu puede dejar Brief y Medium tan cortos como Full. Full sigue cada frase del urdu. Medium se abre seleccionado."
        },
        {
          "question": "¿Se guarda la noticia en urdu?",
          "answer": "Tools Star Hub no guarda la noticia. Translate, Expand y Humanize envían el texto a la API Gemini de Google. En el nivel gratuito, Google puede usar ese texto para mejorar sus productos. La lista de permalinks existe solo en esta sesión del navegador."
        },
        {
          "question": "¿Por qué un borrador dice que necesita revisión?",
          "answer": "El aviso aparece ante cualquier alerta o error: una cifra de más, una cita en Brief, una versión Full corta, una palabra entre corchetes o una grafía del glosario que no se usó. Approve entonces te pide que leas la lista de verificación y confirmes."
        },
        {
          "question": "¿Cómo pego un párrafo de noticia en urdu para un borrador en inglés?",
          "answer": "Pega el texto en urdu, elige Brief, Medium o Full, genera el borrador en inglés y edítalo antes de publicarlo."
        },
        {
          "question": "¿Cuándo debo elegir Brief en lugar de Full?",
          "answer": "Usa Brief para una entradilla o un resumen corto; elige Full cuando necesites una cobertura más cercana del detalle original."
        },
        {
          "question": "¿Por qué una persona debe revisar el borrador en inglés?",
          "answer": "Los nombres, las cifras y los matices pueden salir mal; trata el resultado como un borrador de partida, no como un artículo terminado."
        },
        {
          "question": "¿Puedo traducir los titulares por separado del cuerpo?",
          "answer": "Sí: ejecuta solo el titular para un título apretado y luego traduce el cuerpo en otro paso."
        },
        {
          "question": "¿La herramienta inventa citas que no estaban en el urdu?",
          "answer": "No debería añadir hechos; si un borrador inventa un detalle, córtalo y alinéalo con las frases de origen."
        },
        {
          "question": "¿Cómo trato un pegado que mezcla urdu e inglés?",
          "answer": "Conserva los nombres propios como aparecen y aclara lo ambiguo mientras editas el borrador en inglés."
        },
        {
          "question": "¿Y si las cifras importantes se ven redondeadas o cambiadas?",
          "answer": "Compara cada cifra con el origen en urdu y corrige el borrador antes de que nada se publique."
        },
        {
          "question": "¿Puedo usarlo para columnas de opinión además de noticias directas?",
          "answer": "Sí, pero conserva el tono con cuidado; la voz de opinión es fácil de aplanar o de exagerar en un borrador."
        },
        {
          "question": "¿Cuánto puede medir la entrada en urdu?",
          "answer": "Una noticia de más de 8000 caracteres se rechaza. Los artículos muy largos pueden necesitar pases por secciones para que cada borrador se pueda editar con claridad."
        },
        {
          "question": "¿El borrador en inglés conserva los saltos de párrafo?",
          "answer": "La estructura puede cambiar; restaura los saltos de párrafo y los subtítulos mientras compruebas los hechos."
        },
        {
          "question": "¿Está bien publicar la salida automática sin editarla?",
          "answer": "No: edita siempre la exactitud, el estilo y las normas de la redacción antes de publicar bajo tu firma."
        },
        {
          "question": "¿Cómo atribuyo el medio original?",
          "answer": "Sigue la política de tu redacción sobre atribución y derechos; los borradores de traducción no conceden derechos de republicación."
        },
        {
          "question": "¿Puedo volver a ejecutar con otra longitud después de editar?",
          "answer": "Sí: cambia Brief, Medium o Full y vuelve a generar, luego mezcla las mejores frases en tu edición."
        },
        {
          "question": "¿Qué debo hacer con los términos sin traducir?",
          "answer": "Conserva los términos urdu muy conocidos o añade una glosa breve una vez, para que los lectores no se pierdan."
        },
        {
          "question": "¿Salir de la página borra mi borrador?",
          "answer": "Copia el borrador en inglés en tu CMS o en tus notas; recargar puede vaciar el formulario."
        }
      ]
    },
    "metaDescription": "Pasa una noticia en urdu a borradores en inglés (breve, medio y completo) y contrasta nombres, cifras y citas. El resultado es un borrador para un editor.",
    "ui": {},
    "note": "Los tres borradores (Brief, Medium y Full) salen en inglés, pensados para un editor. Los botones del formulario también están en inglés. El recuadro de origen acepta urdu."
  }
};

export default data;
