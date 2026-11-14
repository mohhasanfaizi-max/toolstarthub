import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Un contador de palabras muestra las palabras, caracteres y oraciones de un texto pegado, junto con una estimación sencilla del tiempo de lectura.",
    "content": {
      "about": "El contador de palabras muestra palabras, caracteres, caracteres sin espacios, oraciones, párrafos y un tiempo de lectura del texto que pegas o escribes. Los totales se actualizan mientras escribes. Úsalo para un pie de foto, un resumen, una publicación corta o un borrador con un límite de palabras. El tiempo de lectura es una estimación a partir del recuento. La página no revisa la gramática ni decide quién escribió el texto.",
      "howTo": [
        "Pega o escribe texto en el cuadro. Los recuentos se actualizan con cada cambio.",
        "Consulta Palabras, Caracteres, Caracteres sin espacios, Oraciones, Párrafos y Tiempo de lectura.",
        "Usa «Texto de ejemplo» para cargar un ejemplo breve, «Borrar» para vaciar el cuadro o «Copiar texto» para copiar lo que escribiste."
      ],
      "examples": [
        {
          "title": "Hello world.",
          "body": "Esa línea son 2 palabras, 12 caracteres, 11 caracteres sin espacios, 1 oración, 1 párrafo y 1 línea. El tiempo de lectura muestra 1 min. Cualquier texto no vacío con menos de 226 palabras muestra al menos 1 min, porque la página redondea hacia arriba y no enseña fracciones de minuto."
        },
        {
          "title": "Espacios, una línea en blanco y un emoji",
          "body": "hello   world sigue siendo 2 palabras. Son 13 caracteres y 10 caracteres sin espacios, porque los espacios de más cuentan como caracteres y no como palabras. «One.» seguido de una línea vacía y «Two.» son 2 palabras, 2 oraciones, 2 párrafos y 3 líneas. La línea vacía cuenta como línea. A😀 son 2 caracteres y 1 palabra. El emoji es un punto de código Unicode."
        },
        {
          "title": "Un emoji compuesto y una frase más larga",
          "body": "El emoji de familia 👨‍👩‍👧 es 1 palabra y 5 caracteres, porque son cinco puntos de código unidos. «Hello. How are you? Fine!» son 5 palabras y 3 oraciones. El tiempo de lectura de estos ejemplos cortos es 1 min. Con 225 palabras el tiempo sigue siendo 1 min. Con 226 palabras pasa a 2 min."
        }
      ],
      "explanation": "Las palabras son grupos de caracteres que no son espacios, así que varios espacios seguidos no crean palabras de más. Los caracteres son puntos de código Unicode. Las oraciones se separan en . ! ? y …, y un trozo final sin signo de cierre también cuenta como oración. Los párrafos son bloques no vacíos separados por uno o más saltos de línea. Las líneas siguen cada salto, incluida una línea en blanco. El tiempo de lectura es 0 min cuando no hay palabras. Si hay alguna, es el recuento dividido entre 225, redondeado hacia arriba, y nunca menor de 1 minuto.",
      "sections": [
        {
          "heading": "Qué cuenta como palabra",
          "paragraphs": [
            "Una palabra es una secuencia de caracteres que no son espacios, tabulaciones ni saltos de línea. Las palabras con guion siguen siendo una sola. Un número como 2026 es una palabra. La puntuación pegada a una palabra, como en world., se queda dentro de esa palabra.",
            "Un texto sin espacios entre palabras cuenta como una sola palabra, aunque una persona lo dividiría. Eso incluye muchas frases en japonés, chino y escrituras similares. El recuento de caracteres sigue siendo útil en esos casos. El recuento de palabras no es un análisis lingüístico."
          ]
        },
        {
          "heading": "Oraciones, párrafos y el texto de ejemplo",
          "paragraphs": [
            "«Hello. How are you? Fine!» son tres oraciones porque . ? y ! cierran cada una. Los puntos suspensivos … también cierran una oración. Una línea sin puntuación sigue siendo una oración si tiene algún carácter que no sea un espacio.",
            "Los párrafos ignoran los bloques vacíos. Dos trozos de texto con una línea en blanco en medio son dos párrafos. El recuento de líneas sí incluye esa línea vacía; por eso «One.» y «Two.» con una línea en blanco entre ellos son 3 líneas y 2 párrafos.",
            "«Texto de ejemplo» carga una nota fija que empieza por «Tools Star Hub counts words in your browser.» Solo sirve de demostración. «Borrar» la quita."
          ]
        },
        {
          "heading": "Cómo leer la línea de tiempo de lectura",
          "paragraphs": [
            "La página no mide lo rápido que lees. Divide el recuento de palabras entre 225 y redondea hacia arriba a un minuto entero, con un mínimo de 1 minuto cuando hay al menos una palabra. 225 palabras son 1 min. 226 palabras son 2 min. Un cuadro vacío es 0 min.",
            "Un discurso suele ser más lento que la lectura en silencio. Esta página no aplica un ritmo de habla. Si necesitas una charla de 5 minutos, multiplica tu propio ritmo por 5 y compáralo con el recuento de palabras. La herramienta no hace esa multiplicación."
          ]
        },
        {
          "heading": "Privacidad",
          "paragraphs": [
            "El recuento se hace en el navegador. El texto no se envía a Tools Star Hub ni se guarda en el almacenamiento local. «Copiar» usa el portapapeles del navegador solo cuando pulsas «Copiar texto». Si aceptas las analíticas, pueden contar la visita a la página. No reciben el texto del cuadro."
          ]
        }
      ],
      "tips": [
        "Usa Caracteres sin espacios cuando un formulario indica que los espacios no cuentan. El total de Caracteres sí incluye los espacios.",
        "No tomes el tiempo de lectura como un cronómetro. Pasa de 1 min a 2 min al llegar a 226 palabras.",
        "Un emoji compuesto puede contar como varios caracteres. Revisa el total de Caracteres si el límite de una plataforma es estricto.",
        "El contador no quita líneas duplicadas, no cambia mayúsculas ni corrige la ortografía. Otras herramientas de texto de este sitio sí hacen esas tareas."
      ],
      "limitations": "Las palabras son grupos de caracteres sin espacios y las oraciones se separan en . ! ? y …. El tiempo de lectura supone unas 225 palabras por minuto, redondeadas hacia arriba a un minuto entero, con un mínimo de 1 minuto cuando el cuadro no está vacío de palabras. Es una estimación, no una velocidad de lectura medida. El contador no revisa la gramática ni identifica al autor. Un texto sin espacios entre palabras no se divide en palabras de diccionario.",
      "faqs": [
        {
          "question": "¿Cómo se cuentan las palabras?",
          "answer": "Una palabra es un grupo de caracteres que no son espacios. hello   world son 2 palabras. Los espacios repetidos no añaden palabras. Sí cuentan en el total de Caracteres."
        },
        {
          "question": "¿Cuántos caracteres tiene un emoji?",
          "answer": "Los caracteres son puntos de código Unicode. A😀 son 2 caracteres: una letra y un emoji. El emoji de familia 👨‍👩‍👧 son 5 caracteres y 1 palabra, porque son cinco puntos de código."
        },
        {
          "question": "¿Cómo se separan las oraciones y los párrafos?",
          "answer": "Las oraciones terminan en . ! ? o …. «Hello. How are you? Fine!» son 3 oraciones y 5 palabras. Los párrafos son bloques no vacíos separados por saltos de línea. Una línea en blanco entre «One.» y «Two.» da 2 párrafos y 3 líneas."
        },
        {
          "question": "¿Cómo se estima el tiempo de lectura?",
          "answer": "El recuento de palabras se divide entre 225 y se redondea hacia arriba a un minuto entero. El texto vacío es 0 min. Cualquier texto con al menos una palabra muestra como mínimo 1 min. 225 palabras son 1 min y 226 palabras son 2 min. Es una estimación, no una velocidad medida."
        },
        {
          "question": "¿El contador de palabras es gratis?",
          "answer": "Sí. Contar palabras, caracteres, oraciones y párrafos es gratis y no necesitas una cuenta."
        },
        {
          "question": "¿Se sube mi texto?",
          "answer": "No. El recuento se hace en tu navegador. El texto no se envía a Tools Star Hub ni se guarda."
        },
        {
          "question": "¿Cómo se cuentan los espacios de más?",
          "answer": "Varios espacios seguidos no crean palabras adicionales, pero sí cuentan como caracteres."
        },
        {
          "question": "¿Cuántas palabras tiene un discurso de 5 minutos?",
          "answer": "Esta página no calcula un ritmo de habla. El tiempo de lectura usa 225 palabras por minuto de lectura, no de dicción. Multiplica tu propio ritmo por 5 y compáralo con el recuento."
        },
        {
          "question": "¿Por qué el tiempo de lectura salta de 1 a 2 minutos?",
          "answer": "Porque se redondea hacia arriba a un minuto entero. 225 palabras siguen siendo 1 min. 226 palabras pasan a 2 min. No se muestran fracciones de minuto."
        },
        {
          "question": "¿Qué es «Caracteres sin espacios»?",
          "answer": "Es el total de caracteres menos los espacios, tabulaciones y saltos de línea. Úsalo cuando un formulario no cuenta los espacios."
        },
        {
          "question": "¿Las palabras con guion cuentan como una o como dos?",
          "answer": "Como una. Una palabra unida por un guion no se parte. Un número como 2026 también es una sola palabra."
        },
        {
          "question": "¿Qué pasa con un texto en chino o japonés sin espacios?",
          "answer": "Sin espacios, todo el bloque cuenta como una palabra. El recuento de caracteres sigue siendo útil. El recuento de palabras no analiza el idioma."
        },
        {
          "question": "¿Una línea sin punto cuenta como oración?",
          "answer": "Sí, si tiene algún carácter que no sea un espacio. El trozo final de un texto sin signo de cierre también cuenta como oración."
        },
        {
          "question": "¿El texto de ejemplo se guarda?",
          "answer": "No. Carga una nota fija solo para probar el contador. «Borrar» la quita y no se almacena en el sitio."
        },
        {
          "question": "¿Puedo usarlo para un límite de caracteres de una red social?",
          "answer": "Sí, mira el total de Caracteres. Algunas plataformas cuentan de otra forma los emojis compuestos, así que revisa también su propio recuento si el límite es justo."
        },
        {
          "question": "¿El contador corrige la ortografía o la gramática?",
          "answer": "No. Solo cuenta. No identifica al autor ni evalúa la calidad del texto."
        },
        {
          "question": "¿Funciona sin conexión después de cargar la página?",
          "answer": "El recuento se hace en el navegador y no necesita enviar el texto a un servidor. Si la página ya está cargada, puedes seguir contando aunque se corte la red."
        },
        {
          "question": "¿Se cuentan las líneas en blanco?",
          "answer": "Las líneas en blanco entran en el recuento de líneas, pero no crean párrafos. Los párrafos solo son bloques con texto."
        },
        {
          "question": "¿Puedo copiar el resultado de los recuentos?",
          "answer": "Puedes copiar el texto del cuadro con «Copiar texto». Los totales se leen en la propia página; no se envían a ninguna parte."
        },
        {
          "question": "¿Este recuento coincide con el de Microsoft Word?",
          "answer": "No tiene por qué. Word y otras aplicaciones pueden tratar de forma distinta los guiones, los números o los saltos de línea. Aquí una palabra es un grupo de caracteres sin espacios."
        }
      ]
    },
    "metaDescription": "Cuenta palabras, caracteres, oraciones y párrafos en tu navegador y estima el tiempo de lectura. El texto no se sube ni se guarda.",
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "El recuento se hace en tu navegador. No se envía nada a ningún servidor.",
      "Paste or type text here...": "Pega o escribe el texto aquí…",
      "Sample text": "Texto de ejemplo",
      "Reading time": "Tiempo de lectura",
      "0 min": "0 min",
      "{0} min": "{0} min"
    }
  },
  "character-counter": {
    "answer": "Un contador de caracteres suma caracteres, palabras y líneas mientras escribes, incluidos los espacios, salvo que elijas no contarlos.",
    "content": {
      "about": "Cuenta caracteres, palabras y líneas, y muestra un total aparte sin espacios. Úsalo cuando un formulario, una publicación o una meta descripción tiene un límite de caracteres. Un emoji cuenta como un carácter, y esta página no divide el texto en oraciones como hace el contador de palabras.",
      "howTo": [
        "Escribe o pega texto en el cuadro.",
        "Los recuentos de caracteres, palabras y líneas se actualizan al momento.",
        "Copia el recuento de caracteres o vacía el cuadro cuando termines."
      ],
      "examples": [
        {
          "title": "Emoji y letras",
          "body": "«A😀» son 2 caracteres: una letra y un emoji."
        },
        {
          "title": "Líneas",
          "body": "Un salto de línea empieza una línea nueva. Un cuadro vacío tiene 0 líneas."
        }
      ],
      "explanation": "Los caracteres se cuentan como puntos de código Unicode. Los espacios entran en el recuento principal de caracteres y se excluyen en el recuento «sin espacios». Las líneas siguen los saltos del cuadro, incluida una línea en blanco al final.",
      "limitations": "Un carácter es un punto de código Unicode, así que un emoji suelto cuenta como uno aunque se dibuje con varios símbolos. Los espacios se quedan en el total principal y salen del total sin espacios. Aquí no se detectan los límites de las oraciones.",
      "faqs": [
        {
          "question": "¿El contador de caracteres es gratis?",
          "answer": "Sí. Puedes contar caracteres, palabras y líneas mientras escribes sin pagar ni crear una cuenta."
        },
        {
          "question": "¿El texto sale de mi ordenador?",
          "answer": "No. El texto se queda en tu navegador y no se envía a un servidor."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. Los recuentos se calculan en esta pestaña. Al vaciar el cuadro, el texto desaparece de la página y no se guarda en el almacenamiento local."
        },
        {
          "question": "¿Los espacios cuentan como caracteres?",
          "answer": "Sí, en el total principal. El contador también muestra un segundo total sin espacios, que algunos formularios y trabajos piden."
        },
        {
          "question": "¿Cuántos caracteres tiene un emoji?",
          "answer": "En esta página un emoji suelto cuenta como un carácter Unicode. Algunas aplicaciones cuentan ciertos emojis como dos o más, así que su límite puede diferir un poco."
        },
        {
          "question": "¿Cómo cuento los caracteres de un borrador pegado?",
          "answer": "Pega el texto y lee los totales en vivo de caracteres, caracteres sin espacios, palabras y líneas."
        },
        {
          "question": "¿Los espacios entran en el total principal de caracteres?",
          "answer": "Sí, en el total principal. Usa la cifra sin espacios cuando un formulario no los cuenta."
        },
        {
          "question": "¿Cómo cuenta esta página un emoji?",
          "answer": "Un emoji suelto suele contar aquí como un carácter Unicode. Algunas plataformas cuentan de otra forma los emojis de varios puntos de código."
        },
        {
          "question": "¿Los saltos de línea cuentan como caracteres?",
          "answer": "A menudo sí: cada salto puede sumar al total de caracteres. Si el límite es estricto, revisa ambos totales."
        },
        {
          "question": "¿Puedo contar solo un párrafo seleccionado?",
          "answer": "Pega solo ese párrafo, o recorta el borrador antes de consultar el contador."
        },
        {
          "question": "¿Qué diferencia hay entre caracteres y bytes?",
          "answer": "Los caracteres son unidades Unicode; los bytes dependen de la codificación (UTF-8 puede usar varios bytes por carácter)."
        },
        {
          "question": "¿Las etiquetas HTML cuentan si pego marcado?",
          "answer": "Sí: cada carácter pegado cuenta, incluidos < y >. Quita las etiquetas antes si solo necesitas el texto visible."
        },
        {
          "question": "¿Cuántos caracteres caben en un SMS típico?",
          "answer": "El límite clásico ronda los 160 caracteres GSM; con Unicode puede ser menor. Confírmalo con la herramienta de tu operador."
        },
        {
          "question": "¿Hay un límite práctico al pegar texto?",
          "answer": "Los textos muy grandes pueden ralentizar la pestaña. Si hace falta, cuenta el texto por capítulos."
        },
        {
          "question": "¿Por qué Word y este contador no coinciden del todo?",
          "answer": "Word puede tratar de otra forma los saltos, los campos o los caracteres ocultos. Cuando importe, usa el recuento oficial de quien fija el límite."
        },
        {
          "question": "¿Puedo controlar aquí los límites de Twitter o LinkedIn?",
          "answer": "Usa el total de caracteres como guía y confírmalo después con el límite actual de cada red y sus reglas para acortar enlaces."
        },
        {
          "question": "¿Los espacios múltiples entre palabras cuentan todos?",
          "answer": "Sí, en el total principal. El modo sin espacios los ignora en esa segunda cifra."
        },
        {
          "question": "¿Las oraciones se cuentan por separado?",
          "answer": "Esta página no divide el texto en oraciones como el contador de palabras. Para eso usa el Contador de palabras."
        },
        {
          "question": "¿Qué cuenta como palabra aquí?",
          "answer": "Las secuencias de caracteres que no son espacios. Las reglas de guiones y puntuación pueden diferir de la guía de estilo de un editor."
        },
        {
          "question": "¿Se sube mi texto mientras cuento?",
          "answer": "El recuento se hace en el navegador; no se guarda una copia permanente en un servidor."
        }
      ]
    },
    "metaDescription": "Cuenta caracteres, palabras y líneas en tu navegador, con o sin espacios. Ideal para límites de formularios o redes. El texto no se sube.",
    "ui": {
      "Counts update as you type. Text stays in your browser.": "Los recuentos se actualizan mientras escribes. El texto se queda en tu navegador.",
      "Type or paste text...": "Escribe o pega texto…",
      "Copy count": "Copiar recuento"
    }
  },
  "case-converter": {
    "answer": "Un conversor de mayúsculas y minúsculas cambia el texto entre mayúsculas, minúsculas, tipo título, camelCase y estilos parecidos.",
    "content": {
      "about": "Pasa el texto a mayúsculas, minúsculas, tipo título, tipo oración, camelCase, PascalCase, snake_case y kebab-case. Quien renombra identificadores o corrige un titular puede cambiar mayúsculas de un texto pegado en un solo paso. El tipo oración sigue la puntuación inglesa, así que no aplica las reglas de mayúsculas de otros idiomas.",
      "howTo": [
        "Pega el texto en el cuadro.",
        "Elige un estilo. El resultado se actualiza al momento.",
        "Copia el resultado o vacía ambos cuadros."
      ],
      "examples": [
        {
          "title": "Tipo título",
          "body": "«hello world» pasa a «Hello World». Se capitaliza cada palabra."
        },
        {
          "title": "camelCase",
          "body": "«Hello world example» pasa a helloWorldExample."
        }
      ],
      "explanation": "MAYÚSCULAS y minúsculas usan la configuración regional inglesa. El tipo título pone en mayúscula la primera letra de cada palabra. El tipo oración pasa el texto a minúsculas y luego capitaliza el inicio de la cadena y las letras después de . ! ? o …: es una regla sencilla orientada al inglés, no un corrector gramatical para todos los idiomas. camelCase, PascalCase, snake_case y kebab-case se construyen a partir de grupos de letras y números.",
      "limitations": "El tipo oración sigue la puntuación inglesa, no las reglas de mayúsculas de otros idiomas. camelCase, snake_case y kebab-case conservan los grupos de letras y números y quitan la puntuación que hay entre ellos.",
      "faqs": [
        {
          "question": "¿El conversor de mayúsculas es gratis?",
          "answer": "Sí. Cambiar el texto entre mayúsculas, minúsculas, tipo título y los estilos de código es gratis y no requiere cuenta."
        },
        {
          "question": "¿El tipo oración funciona en todos los idiomas?",
          "answer": "No. Sigue un patrón básico de puntuación inglesa. No aplica reglas propias de cada lengua."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. El texto que pegas se convierte en esta pestaña. No se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué diferencia hay entre tipo título y tipo oración?",
          "answer": "El tipo título pone en mayúscula la primera letra de cada palabra, como en un titular. El tipo oración solo capitaliza la primera letra de cada frase, como en un texto normal."
        },
        {
          "question": "¿Qué son camelCase, snake_case y kebab-case?",
          "answer": "Son estilos de nombres usados en código. camelCase une las palabras con mayúsculas (myVariableName), snake_case usa guiones bajos (my_variable_name) y kebab-case usa guiones (my-variable-name)."
        },
        {
          "question": "¿Cómo paso un párrafo de tipo título a tipo oración?",
          "answer": "Pega el texto, elige el estilo de destino y copia el resultado. Revisa los nombres de marca que deban mantener mayúsculas fijas."
        },
        {
          "question": "¿En la práctica, cómo se distinguen camelCase, snake_case y kebab-case?",
          "answer": "camelCase une las palabras con mayúsculas (myVar), snake_case usa guiones bajos (my_var) y kebab-case usa guiones (my-var)."
        },
        {
          "question": "¿Cuándo se prefiere kebab-case?",
          "answer": "Los slugs de URL y muchos nombres de clase CSS prefieren guiones. Evita los espacios en esos contextos."
        },
        {
          "question": "¿El tipo oración deja en mayúscula el pronombre I?",
          "answer": "En inglés, el tipo oración debería mantener la I mayúscula aunque vaya en medio de la frase. Revísalo después de convertir."
        },
        {
          "question": "¿Qué ocurre con los dígitos y la puntuación?",
          "answer": "Suelen quedarse en su sitio mientras cambian las letras. En algunos modos, los separadores de los identificadores pueden reescribirse."
        },
        {
          "question": "¿Puedo pasar identificadores de camelCase a snake_case?",
          "answer": "Sí, cuando hay un modo de identificadores: parte por las mayúsculas y luego une con guiones bajos."
        },
        {
          "question": "¿Por qué un nombre de marca puede perder mayúsculas en tipo título?",
          "answer": "Un conversor sencillo trata todas las palabras igual. Vuelve a aplicar a mano la grafía de la marca después de convertir."
        },
        {
          "question": "¿Los saltos de línea de los párrafos se conservan?",
          "answer": "Por lo general sí. Si un modo comprime los espacios, pégalo después en un editor con estructura."
        },
        {
          "question": "¿Hay un límite práctico al pegar texto?",
          "answer": "Los textos muy grandes pueden ralentizar la pestaña. Convierte el texto por capítulos si hace falta."
        },
        {
          "question": "¿Qué tal funciona la conversión fuera del inglés?",
          "answer": "Las reglas de mayúsculas cambian según el idioma. El resultado es mejor en alfabetos latinos sencillos; en otras lenguas, revísalo con cuidado."
        },
        {
          "question": "¿Qué diferencia hay entre PascalCase y camelCase?",
          "answer": "PascalCase pone en mayúscula la primera letra de todas las palabras, incluida la primera (MyVar); camelCase deja la primera palabra en minúscula (myVar)."
        },
        {
          "question": "¿Los nombres de constantes deberían usar SCREAMING_SNAKE_CASE?",
          "answer": "Muchas guías de estilo lo hacen con las constantes. Convierte y luego confirma las reglas de tu proyecto."
        },
        {
          "question": "¿Cambiar mayúsculas puede alterar el sentido en alemán o en turco?",
          "answer": "Es posible: esos idiomas tienen reglas que un conversor simple puede no aplicar. Conviene que lo revise alguien nativo."
        },
        {
          "question": "¿Puedo pasar un documento entero a minúsculas para compararlo?",
          "answer": "Sí: pon ambos lados en minúsculas antes de un diff si quieres una comparación que ignore mayúsculas."
        },
        {
          "question": "¿Se sube mi texto durante la conversión?",
          "answer": "El cambio de mayúsculas se hace en el navegador; no se guarda un documento en el servidor."
        }
      ]
    },
    "metaDescription": "Convierte texto a mayúsculas, minúsculas, tipo título, camelCase, snake_case y kebab-case en tu navegador. Nada se sube ni se guarda.",
    "ui": {
      "Paste text to convert": "Pega el texto que quieres convertir",
      "Case": "Formato",
      "Result ({0})": "Resultado ({0})",
      "UPPERCASE": "MAYÚSCULAS",
      "lowercase": "minúsculas",
      "Title Case": "Tipo Título",
      "Sentence case": "Tipo oración"
    }
  },
  "lorem-ipsum-generator": {
    "answer": "Un generador de lorem ipsum crea párrafos, oraciones o palabras de relleno para maquetas y borradores.",
    "content": {
      "about": "Genera párrafos, oraciones o palabras de relleno a partir de una lista fija de palabras latinas. Quien rellena una maqueta lo usa cuando el texto real aún no está escrito. El primer párrafo empieza con la frase clásica, y una petición se detiene en 20 párrafos, 50 oraciones o 500 palabras.",
      "howTo": [
        "Elige párrafos, oraciones o palabras.",
        "Indica una cantidad dentro de los límites mostrados y pulsa Generar.",
        "Copia el texto, genera otra vez o restablece los valores predeterminados."
      ],
      "examples": [
        {
          "title": "Tres párrafos",
          "body": "El primer párrafo empieza con la línea clásica «Lorem ipsum dolor sit amet…» y continúa con palabras barajadas de un banco local."
        },
        {
          "title": "Cincuenta palabras",
          "body": "Útil como un relleno corto en una maqueta."
        }
      ],
      "explanation": "El lorem ipsum es latín revuelto que se usa como texto ficticio para valorar una maquetación sin copy real. Este generador usa una lista de palabras local y los valores aleatorios criptográficamente seguros del navegador. No llama a una API externa. La cantidad está limitada para que la página siga siendo usable.",
      "limitations": "El resultado es latín de relleno de una lista fija, no una traducción ni un texto para un producto real. Los párrafos se detienen en 20, las oraciones en 50 y las palabras en 500.",
      "faqs": [
        {
          "question": "¿El generador de lorem ipsum es gratis?",
          "answer": "Sí. Generar párrafos, oraciones o palabras de relleno es gratis y no hace falta una cuenta."
        },
        {
          "question": "¿El texto se descarga de internet?",
          "answer": "No. Las palabras están en esta página y se ensamblan en tu navegador."
        },
        {
          "question": "¿Por qué hay un máximo?",
          "answer": "Los bloques muy grandes pueden bloquear una pestaña. Los párrafos se detienen en 20, las oraciones en 50 y las palabras en 500."
        },
        {
          "question": "¿Qué significa lorem ipsum?",
          "answer": "El lorem ipsum es latín revuelto que se usa como texto de relleno. Parece un texto real, así se puede valorar la maquetación sin que el lector se fije en las palabras."
        },
        {
          "question": "¿Cuándo debo usar texto de relleno?",
          "answer": "Úsalo en maquetas, plantillas y pruebas de tipografía. Sustitúyelo por el texto real antes de publicar una página, porque el relleno no dice nada a quien visita el sitio."
        },
        {
          "question": "¿Cómo relleno una maqueta con el texto clásico?",
          "answer": "Elige palabras, oraciones o párrafos, indica una cantidad, genera y pega el resultado en el diseño."
        },
        {
          "question": "¿Puedo generar solo unas palabras para el texto de un botón?",
          "answer": "Sí: usa el modo de palabras con una cantidad pequeña para que la etiqueta siga siendo corta."
        },
        {
          "question": "¿Por qué el latín de relleno parece revuelto?",
          "answer": "Está pensado como relleno seudolatino para que quien revisa se fije en la maquetación, no en el significado."
        },
        {
          "question": "¿Una demo para un cliente debería mostrarse todavía con lorem?",
          "answer": "No: sustitúyelo por el texto real antes del lanzamiento para que el SEO y la accesibilidad coincidan con el producto."
        },
        {
          "question": "¿Cómo obtengo saltos de párrafo en lugar de un solo bloque?",
          "answer": "Usa el modo de párrafos para que el generador inserte bloques separados que puedas maquetar."
        },
        {
          "question": "¿Puedo generar otra vez hasta que el ritmo quede bien?",
          "answer": "Sí: vuelve a generar para obtener una muestra nueva y cambia la longitud hasta que la maquetación quede equilibrada."
        },
        {
          "question": "¿El texto de relleno tiene que ser distinto cada vez?",
          "answer": "En capturas, a veces sí; en pruebas de maquetación, repetir el mismo lorem suele bastar."
        },
        {
          "question": "¿Cómo deben pasar los redactores el texto real en lugar del lorem?",
          "answer": "Coloca las frases finales en los mismos huecos y borra las frases de relleno que queden."
        },
        {
          "question": "¿Es mejor el lorem que repetir «texto texto texto»?",
          "answer": "Sí: unas longitudes de palabra variadas ponen a prueba el ajuste de línea y el espaciado de forma más realista."
        },
        {
          "question": "¿Puedo generar lorem en otro idioma?",
          "answer": "Este generador clásico es de estilo latino; para otros idiomas usa una herramienta de relleno localizada."
        },
        {
          "question": "¿Qué cantidad uso para una sección hero?",
          "answer": "Suele bastar una o dos oraciones cortas; los párrafos largos encajan mejor en las maquetas del cuerpo."
        },
        {
          "question": "¿Generar lorem supone un riesgo de derechos de autor?",
          "answer": "Los fragmentos estándar de lorem se tratan de forma general como relleno; aun así, evita pegar prosa de terceros sin identificarla."
        },
        {
          "question": "¿Cómo usan este resultado las herramientas de wireframe?",
          "answer": "Quien diseña pega los bloques en capas de texto para valorar la jerarquía antes de tener el contenido listo."
        },
        {
          "question": "¿Debería probar QA los formularios rellenados con lorem?",
          "answer": "Sirve para la longitud y el desbordamiento; también conviene probar nombres y correos realistas antes del lanzamiento."
        },
        {
          "question": "¿El generador descarga los párrafos de internet?",
          "answer": "La generación está pensada para ejecutarse en local a partir de las muestras incluidas en la página."
        }
      ]
    },
    "metaDescription": "Genera texto de relleno lorem ipsum en tu navegador: párrafos, oraciones o palabras para maquetas. Nada se descarga de internet.",
    "ui": {
      "Quantity": "Cantidad",
      "Enter a whole number from {0} to {1}.": "Introduce un número entero de {0} a {1}.",
      "Enter a quantity.": "Introduce una cantidad.",
      "Choose between {0} and {1} {2}.": "Elige entre {0} y {1} {2}.",
      "paragraphs": "párrafos",
      "sentences": "oraciones",
      "words": "palabras",
      "A secure random source is not available in this browser.": "Este navegador no tiene una fuente aleatoria segura disponible."
    }
  },
  "text-diff": {
    "answer": "Un comparador de textos enfrenta el original y la versión modificada en tu dispositivo y señala las líneas o palabras añadidas, eliminadas y sin cambios.",
    "content": {
      "about": "Pega un original y una revisión y compáralos por línea o por palabra. Quien revisa dos borradores del mismo párrafo usa el modo de líneas para cambios de línea completa y el de palabras cuando se ha editado una frase en su sitio. Cada lado debe quedar por debajo de 200.000 caracteres y de 4.000 líneas o palabras.",
      "howTo": [
        "Pega el texto original a la izquierda y el modificado a la derecha.",
        "Elige comparación por líneas o por palabras.",
        "Pulsa Comparar. Los bloques añadidos, eliminados y sin cambios van etiquetados, no solo coloreados.",
        "Copia el diff en texto plano si lo necesitas en otro editor. Vacía ambos lados cuando termines."
      ],
      "examples": [
        {
          "title": "Dos versiones de un párrafo",
          "body": "El modo de líneas resalta las líneas enteras que cambiaron. El modo de palabras es mejor cuando se ha editado una frase en su sitio."
        },
        {
          "title": "Archivos idénticos",
          "body": "Si ambos lados coinciden, el resumen solo muestra contenido sin cambios y ningún bloque añadido o eliminado."
        }
      ],
      "explanation": "El comparador enfrenta las unidades en tu navegador. No envía el texto a ningún sitio ni guarda borradores en el almacenamiento local. Las diferencias se pintan como nodos de texto de React, así que el contenido del usuario no puede inyectar HTML. Las entradas muy grandes se rechazan para que la pestaña siga respondiendo.",
      "limitations": "Cada lado debe quedar por debajo de 200.000 caracteres y de 4.000 líneas o palabras, según el modo. La vista etiqueta los bloques añadidos, eliminados y sin cambios. No fusiona archivos y no abre un documento de Word.",
      "faqs": [
        {
          "question": "¿El comparador de textos es gratis?",
          "answer": "Sí. Comparar dos textos línea a línea o palabra a palabra es gratis y no necesitas una cuenta."
        },
        {
          "question": "¿Cómo comparo dos archivos de texto?",
          "answer": "Pega cada versión en un panel, elige Líneas o Palabras y pulsa Comparar. Puedes copiar una vista con +/- del resultado."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. Ambos paneles se comparan en esta pestaña. El texto no se envía a un servidor ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué es un diff?",
          "answer": "Un diff es una lista de las diferencias entre dos versiones de un texto: lo que se añadió, lo que se quitó y lo que se quedó igual."
        },
        {
          "question": "¿Debo usar el modo de líneas o el de palabras?",
          "answer": "Usa el modo de líneas para código, listas y archivos en los que cambian líneas enteras. Usa el de palabras cuando se ha editado una frase en su sitio."
        },
        {
          "question": "¿Puedo pegar párrafos enteros en cada panel?",
          "answer": "Sí: pega el texto izquierdo y el derecho y ejecuta la comparación para resaltar inserciones, borrados y líneas sin cambios."
        },
        {
          "question": "¿El comparador muestra por separado las líneas añadidas y las eliminadas?",
          "answer": "Sí: las adiciones y los borrados van marcados para que puedas revisar los cambios sin leer todas las líneas idénticas."
        },
        {
          "question": "¿Cuándo paso del modo de líneas al de palabras?",
          "answer": "Usa el de palabras cuando las ediciones están dentro de líneas largas; usa el de líneas cuando se movieron o reescribieron filas enteras."
        },
        {
          "question": "¿Los espacios al final de la línea cuentan como diferencia?",
          "answer": "A menudo sí: el espacio al final de una línea puede aparecer como un cambio. Recorta los borradores antes si solo te importa el contenido."
        },
        {
          "question": "¿Puedo comparar fragmentos de código además de prosa?",
          "answer": "Sí: pega cualquier texto plano, incluido código, registros o archivos de configuración, siempre que ambos lados sean texto legible."
        },
        {
          "question": "¿Cómo copio solo las partes que cambiaron?",
          "answer": "Selecciona el resultado resaltado y cópialo; la herramienta no exporta por sí sola un archivo de parche."
        },
        {
          "question": "¿Importa el orden de los dos paneles?",
          "answer": "Sí: la izquierda se trata normalmente como el original y la derecha como la revisión, lo que invierte cómo se leen las adiciones y los borrados."
        },
        {
          "question": "¿Qué ocurre si un lado está vacío?",
          "answer": "El lado vacío da una vista de todo eliminado o todo insertado frente al lado con texto, útil para volcar un borrador completo."
        },
        {
          "question": "¿Puedo ignorar mayúsculas al comparar?",
          "answer": "Solo si la herramienta ofrece una opción que ignore mayúsculas; si no, normaliza tú ambos textos antes de comparar."
        },
        {
          "question": "¿Hay un límite de tamaño en cada cuadro?",
          "answer": "Cada lado debe quedar por debajo de 200.000 caracteres y de 4.000 líneas o palabras. Los textos enormes es mejor compararlos con una utilidad de escritorio o por partes."
        },
        {
          "question": "¿El diff sobrevive a una recarga de la página?",
          "answer": "No: al recargar se vacían los paneles, salvo que el navegador restaure el estado del formulario. Copia los resultados que quieras conservar."
        },
        {
          "question": "¿Puedo compartir un enlace que incluya ambos textos?",
          "answer": "No: el comparador deja el texto solo en la página; pégalo en un documento o un ticket si necesitas un registro compartido."
        },
        {
          "question": "¿En qué se diferencia del control de cambios de un procesador de textos?",
          "answer": "El control de cambios guarda las ediciones dentro de un documento; esta herramienta compara dos capturas en texto plano, sin historial de revisiones."
        },
        {
          "question": "¿Los caracteres Unicode se comparan bien?",
          "answer": "Sí, en el texto Unicode habitual, aunque los caracteres que se parecen (homoglifos) siguen contando como puntos de código distintos."
        },
        {
          "question": "¿Puedo usarlo para revisar borradores de traducción?",
          "answer": "Sí: pega el original y el borrador de la traducción cuando quieras ver de un vistazo qué ha cambiado entre versiones."
        }
      ]
    },
    "metaDescription": "Compara dos textos en tu navegador, por líneas o por palabras, y marca lo añadido y lo eliminado. El texto no se envía ni se guarda.",
    "ui": {
      "Original": "Original",
      "Modified": "Modificado",
      "Compare": "Comparar",
      "Copy diff": "Copiar diff",
      "Both sides are empty.": "Ambos lados están vacíos.",
      "The two texts are the same.": "Los dos textos son iguales.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "El texto comparado se muestra como texto plano, no como HTML. El color es solo una pista: cada bloque lleva además la etiqueta Añadido, Eliminado o Sin cambios.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "Los dos borradores se comparan en esta pestaña. El texto no se envía a ningún servidor.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Mantén cada lado por debajo de 200.000 caracteres para que la comparación siga fluida.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Esta comparación admite hasta {0} {1}. Acorta el texto o divídelo.",
      "lines": "líneas",
      "words": "palabras"
    }
  },
  "duplicate-line-remover": {
    "answer": "Un eliminador de líneas duplicadas conserva la primera aparición de cada línea y descarta las repeticiones posteriores, con opciones de recorte y mayúsculas.",
    "content": {
      "about": "Conserva la primera copia de cada línea y descarta las repeticiones, en el orden en que las pegaste. Úsalo en una lista de correo o un registro donde la misma fila aparece más de una vez. Con la coincidencia que ignora mayúsculas y el recorte, apple y Apple pasan a ser una sola línea, y se queda la primera grafía.",
      "howTo": [
        "Pega un texto con varias líneas. La entrada no cambia hasta que ejecutas la herramienta.",
        "Si quieres, ignora mayúsculas al comparar, recorta espacios antes de comparar o quita las líneas vacías.",
        "Pulsa Quitar duplicados. Se conserva la primera aparición de cada línea, en orden.",
        "Copia o descarga la lista única. Vacía ambos cuadros cuando termines."
      ],
      "examples": [
        {
          "title": "Una lista de correo",
          "body": "apple, Apple y apple, con recorte y sin distinguir mayúsculas, pasan a un solo apple, conservando la primera grafía que pegaste."
        },
        {
          "title": "Líneas en blanco",
          "body": "Activa Quitar líneas vacías si solo quieres filas únicas con texto. Si no, una línea vacía cuenta como cualquier otro valor."
        }
      ],
      "explanation": "Cada línea se identifica con las opciones de comparación. La primera vez que aparece una clave se conserva; las repeticiones posteriores se cuentan como duplicados eliminados. Se mantiene el orden de las primeras apariciones.",
      "limitations": "Se conserva la primera línea coincidente, en el orden en que la pegaste. Las opciones de mayúsculas, recorte y líneas vacías cambian qué se considera la misma línea. Las repeticiones posteriores se cuentan y se descartan. Más de 400.000 caracteres se rechazan. El cuadro de entrada no se reescribe.",
      "faqs": [
        {
          "question": "¿El eliminador de líneas duplicadas es gratis?",
          "answer": "Sí. Quitar las líneas repetidas y conservar la primera copia es gratis y no hay que registrarse."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. El filtrado se hace en esta pestaña. La lista no se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Cambia el cuadro original?",
          "answer": "No. La entrada se queda como la pegaste. La lista única aparece en el cuadro de resultado después de ejecutar la operación."
        },
        {
          "question": "¿Cómo quito los duplicados de una lista?",
          "answer": "Pega la lista con un elemento por línea y ejecuta la herramienta. Se conserva la primera copia de cada línea en su orden original y se descartan las repeticiones posteriores."
        },
        {
          "question": "¿Puede ignorar diferencias de mayúsculas o de espacios?",
          "answer": "Sí. Activa las opciones de mayúsculas y de recorte para que líneas como Apple y apple, o líneas con espacios de más, cuenten como la misma."
        },
        {
          "question": "¿Cómo elimino las líneas repetidas de una lista?",
          "answer": "Pega un elemento por línea, ejecuta el eliminador y copia la lista sin duplicados. Las primeras apariciones suelen conservar su orden."
        },
        {
          "question": "¿Qué copia se conserva cuando una línea se repite?",
          "answer": "Normalmente la primera. Las líneas idénticas posteriores se eliminan."
        },
        {
          "question": "¿Quitar duplicados también reordena las líneas?",
          "answer": "No, por defecto. El filtrado conserva el orden de aparición, salvo que también ordenes."
        },
        {
          "question": "¿Cómo deduplico una lista de correos línea a línea?",
          "answer": "Pega una dirección por línea; activa la coincidencia que ignora mayúsculas si hace falta y luego quita los duplicados."
        },
        {
          "question": "¿Puedo ver qué líneas se han eliminado como repeticiones?",
          "answer": "Algunas interfaces resaltan los borrados; si no, compara los recuentos de antes y después o haz un diff de las dos listas."
        },
        {
          "question": "¿Cómo se tratan las líneas vacías al deduplicar?",
          "answer": "Los blancos seguidos pueden agruparse según las opciones. Decide si las líneas vacías tienen sentido en tu lista."
        },
        {
          "question": "¿El eliminador actúa sobre palabras dentro de una misma línea?",
          "answer": "Trabaja por líneas, no por palabras. Si ese es el objetivo, primero pasa las palabras a líneas."
        },
        {
          "question": "¿Se pueden deduplicar filas completas de CSV como líneas?",
          "answer": "Sí, si cada fila es una línea y la igualdad es exacta. Las comas entre comillas siguen formando parte de la línea."
        },
        {
          "question": "¿Hay un tamaño práctico al pegar para quitar duplicados?",
          "answer": "Las listas muy grandes pueden ralentizar la pestaña. Divídelas si hace falta. Más de 400.000 caracteres se rechazan."
        },
        {
          "question": "¿El recorte al comparar puede quitar espacios de las líneas que conservo?",
          "answer": "Las opciones de recorte afectan a la comparación y pueden quitar espacios de los bordes en las líneas conservadas: lee las etiquetas de las casillas."
        },
        {
          "question": "¿Por qué dos líneas casi idénticas pueden sobrevivir las dos?",
          "answer": "Espacios ocultos, caracteres Unicode que se parecen o diferencias de mayúsculas pueden separarlas. Activa las opciones de normalización."
        },
        {
          "question": "¿Puedo deduplicar ignorando mayúsculas?",
          "answer": "Sí, cuando está el modo que ignora mayúsculas: Apple y apple cuentan como una."
        },
        {
          "question": "¿Debo ordenar antes de quitar los duplicados?",
          "answer": "Solo si quieres la salida ordenada. Ordenar es independiente de la unicidad."
        },
        {
          "question": "¿Los finales de línea de Windows y Unix afectan a las coincidencias?",
          "answer": "Normaliza antes los finales de línea para que el mismo texto no diverja por caracteres de retorno de carro."
        },
        {
          "question": "¿Se sube mi lista durante el filtrado?",
          "answer": "El filtrado se hace en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Quita líneas repetidas en tu navegador y conserva la primera copia, con opciones de mayúsculas y espacios. El texto no se sube ni se guarda.",
    "ui": {
      "One line per row": "Una línea por fila",
      "Case-insensitive match": "Comparar sin distinguir mayúsculas",
      "Trim spaces before comparing": "Recortar espacios antes de comparar",
      "Remove empty lines": "Eliminar líneas vacías",
      "First occurrence of each line is kept, in the original order.": "Se conserva la primera aparición de cada línea, en el orden original.",
      "Unique lines": "Líneas únicas",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "Las líneas repetidas se descartan en esta pestaña. La lista no se sube.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Mantén el texto por debajo de 400.000 caracteres para que el navegador siga respondiendo."
    }
  },
  "whitespace-remover": {
    "answer": "Un limpiador de espacios recorta, comprime espacios, convierte tabulaciones y limpia las líneas en blanco según las opciones que elijas.",
    "content": {
      "about": "Limpia espacios de más, tabulaciones y líneas en blanco usando solo las opciones que actives. Úsalo en un registro pegado o en una lista que haya cogido sangrías sueltas. Recortar cada línea anula los cuadros separados de inicio y final, y si dejas esas opciones apagadas se conserva la sangría.",
      "howTo": [
        "Pega un texto con espacios, tabulaciones o líneas en blanco de más.",
        "Selecciona solo las limpiezas que quieras. No se aplica nada hasta que pulsas Limpiar texto.",
        "Revisa los recuentos de líneas y caracteres y luego copia o descarga el resultado.",
        "Vacía los cuadros para descartar el texto. No se guarda."
      ],
      "examples": [
        {
          "title": "Líneas de registro con sangría",
          "body": "Recorta cada línea, o quita solo los espacios iniciales si necesitas conservar los del final."
        },
        {
          "title": "Tabulaciones y espacios mezclados",
          "body": "Convierte las tabulaciones en 2 o 4 espacios y, si quieres un diseño de un solo espacio, comprime los espacios repetidos."
        }
      ],
      "explanation": "Cada opción es explícita. Recortar cada línea anula en esa pasada las casillas aparte de inicio y final. Quitar líneas en blanco elimina todas las filas vacías; comprimir líneas en blanco deja una sola fila vacía entre bloques.",
      "limitations": "Solo se aplican las opciones que actives. Recortar cada línea anula en esa pasada los cuadros separados de inicio y final. Quitar líneas en blanco elimina todas las filas vacías, mientras que comprimirlas deja una fila vacía entre bloques. Más de 400.000 caracteres se rechazan.",
      "faqs": [
        {
          "question": "¿El limpiador de espacios es gratis?",
          "answer": "Sí. Limpiar espacios de más, tabulaciones y líneas en blanco es gratis y no hace falta una cuenta."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. La limpieza se queda en esta pestaña. El texto no se envía a ningún sitio ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Destruirá mi sangría?",
          "answer": "Solo si activas el recorte, quitar espacios iniciales o la conversión de tabulaciones. Déjalas apagadas para conservar la sangría."
        },
        {
          "question": "¿Cómo quito los espacios dobles de un texto?",
          "answer": "Activa la opción que comprime los espacios repetidos. Las rachas de espacios dentro de cada línea pasan a un solo espacio."
        },
        {
          "question": "¿Cómo borro las líneas vacías?",
          "answer": "Usa quitar líneas en blanco para eliminar todas las líneas vacías, o comprimir líneas en blanco para dejar una línea vacía entre párrafos."
        },
        {
          "question": "¿Cómo dejo un solo espacio en lugar de varios?",
          "answer": "Pega el texto y ejecuta el limpiador para que los espacios repetidos se reduzcan a un solo espacio entre palabras."
        },
        {
          "question": "¿Puedo quitar los espacios del inicio y del final de cada línea?",
          "answer": "Sí: recorta los bordes de la línea cuando esa opción está activa, lo que ayuda a limpiar tablas pegadas o comentarios de código."
        },
        {
          "question": "¿Las tabulaciones se convierten o se eliminan?",
          "answer": "Según la configuración, las tabulaciones pueden pasar a espacios o eliminarse; previsualiza el resultado si la sangría importa."
        },
        {
          "question": "¿Cómo borro las líneas en blanco sin tocar el espacio entre palabras?",
          "answer": "Elige un modo de limpieza de líneas vacías, o una pasada dedicada a esas líneas si la herramienta separa esos controles."
        },
        {
          "question": "¿Se elimina también el espacio de no separación?",
          "answer": "Algunos limpiadores normalizan el NBSP a espacios normales; comprueba una muestra conocida si el diseño depende de él."
        },
        {
          "question": "¿Puedo limpiar el texto antes de meterlo en un CSV?",
          "answer": "Sí: normaliza primero los espacios para que las celdas no lleven un relleno oculto que rompa los cruces."
        },
        {
          "question": "¿Sobrevivirá la sangría del código?",
          "answer": "Los modos agresivos de quitar todo el espacio destruyen la sangría; usa modos suaves de compresión solo para la prosa."
        },
        {
          "question": "¿Cómo quito los espacios alrededor de la puntuación?",
          "answer": "Después de comprimir las rachas de espacios, corrige a mano los huecos raros junto a las comas si el limpiador los deja."
        },
        {
          "question": "¿Puedo procesar un párrafo cada vez?",
          "answer": "Pega trozos más pequeños cuando quieras más control y luego junta las partes ya limpias."
        },
        {
          "question": "¿Por qué mis líneas siguen viéndose sangradas en el editor?",
          "answer": "El editor puede estar mostrando un ajuste de línea o tabulaciones que quedan; copia el texto a una vista de texto plano para confirmarlo."
        },
        {
          "question": "¿Quitar espacios es lo mismo que quitar saltos de línea?",
          "answer": "No: las herramientas de saltos de línea actúan sobre los retornos; los limpiadores de espacios se centran en espacios, tabulaciones y huecos similares."
        },
        {
          "question": "¿Puedo deshacer una limpieza?",
          "answer": "Conserva el original pegado o usa deshacer; regenerar desde un borrador guardado es más seguro en textos largos."
        },
        {
          "question": "¿Limpiar cambia el sentido de unas columnas alineadas?",
          "answer": "Sí: un texto alineado con espacios puede desplazarse; usa un editor monoespaciado o una herramienta de tablas cuando importen las columnas."
        },
        {
          "question": "¿Cómo limpio un texto copiado de una página web?",
          "answer": "Pégalo, comprime los espacios de más y recorta los bordes; el HTML suele dejar huecos irregulares entre palabras."
        },
        {
          "question": "¿Se sube mi texto mientras lo limpio?",
          "answer": "El limpiador está pensado para ejecutarse en el navegador; copia el resultado en local si necesitas un archivo duradero."
        }
      ]
    },
    "metaDescription": "Limpia espacios, tabulaciones y líneas en blanco en tu navegador, solo con las opciones que actives. El texto no se sube ni se guarda.",
    "ui": {
      "Cleanup options": "Opciones de limpieza",
      "Trim each line": "Recortar cada línea",
      "Remove leading whitespace": "Quitar espacios iniciales",
      "Remove trailing whitespace": "Quitar espacios finales",
      "Collapse repeated spaces": "Reducir espacios repetidos",
      "Convert tabs to spaces": "Convertir tabulaciones en espacios",
      "Remove blank lines": "Eliminar líneas en blanco",
      "Collapse multiple blank lines": "Reducir varias líneas en blanco",
      "Trim entire document": "Recortar todo el documento",
      "Tab width": "Ancho de tabulación",
      "2 spaces": "2 espacios",
      "4 spaces": "4 espacios",
      "Lines before": "Líneas antes",
      "Lines after": "Líneas después",
      "Characters before": "Caracteres antes",
      "Characters after": "Caracteres después",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Los espacios, tabulaciones y líneas en blanco se limpian en esta pestaña. El texto no se envía a ningún servidor."
    }
  },
  "line-sorter": {
    "answer": "Un ordenador de líneas ordena un texto de varias líneas alfabéticamente, numéricamente o por longitud, y puede quitar duplicados.",
    "content": {
      "about": "Ordena un elemento por línea de la A a la Z, de la Z a la A, por un número inicial o por longitud. Úsalo cuando una lista de nombres o una exportación numerada debe quedar ordenada sin una hoja de cálculo. El orden numérico pone el 10 después del 2, y una línea sin número al inicio va detrás de las numeradas.",
      "howTo": [
        "Pega un elemento por línea.",
        "Elige A→Z, Z→A, orden numérico o por longitud. Ajusta mayúsculas, recorte, líneas vacías y duplicados si lo necesitas.",
        "Pulsa Ordenar líneas. Los elementos iguales conservan su orden relativo original.",
        "Copia o descarga la lista ordenada."
      ],
      "examples": [
        {
          "title": "Nombres",
          "body": "A→Z sin distinguir mayúsculas junta ada y Ada, y conserva la posición de la primera grafía cuando se consideran iguales."
        },
        {
          "title": "Filas numeradas",
          "body": "El orden numérico ascendente lee un número al inicio, así que 10 va después de 2. Las líneas sin número van detrás de las numeradas."
        }
      ],
      "explanation": "La ordenación es estable: cuando dos líneas se consideran iguales, se queda primero la que iba antes. Los modos numéricos miran un entero o un decimal al inicio. La opción de quitar duplicados usa la misma clave de comparación que mayúsculas y recorte.",
      "limitations": "Los modos son de la A a la Z, de la Z a la A, numérico ascendente, numérico descendente, más corta y más larga. Las líneas iguales conservan su orden original. El modo numérico lee un número al inicio, y una línea sin número va detrás de las numeradas. Más de 400.000 caracteres se rechazan.",
      "faqs": [
        {
          "question": "¿El ordenador de líneas es gratis?",
          "answer": "Sí. Ordenar una lista de líneas es gratis y no requiere cuenta."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. La ordenación se hace en esta pestaña. Las líneas no se envían a un servidor ni se guardan en el almacenamiento local."
        },
        {
          "question": "¿Se conservan las líneas vacías?",
          "answer": "Sí, salvo que elijas Ignorar líneas vacías. En los modos de letras se ordenan como cadenas vacías."
        },
        {
          "question": "¿Cómo ordeno una lista alfabéticamente?",
          "answer": "Pega un elemento por línea y elige de la A a la Z, o de la Z a la A para el orden inverso. Las líneas iguales conservan su orden original."
        },
        {
          "question": "¿Cómo ordeno las líneas por número?",
          "answer": "Elige numérico ascendente o descendente. Cada línea se ordena por el número que tiene al inicio, así que el 2 va antes del 10."
        },
        {
          "question": "¿Cómo alfabetizo una lista de líneas pegada?",
          "answer": "Pega un elemento por línea, elige A–Z ascendente, ordena y copia el resultado."
        },
        {
          "question": "¿Puedo ordenar sin distinguir mayúsculas para que a y A queden juntas?",
          "answer": "Usa la opción que ignora mayúsculas, cuando está disponible, para que las mayúsculas no desordenen la lista."
        },
        {
          "question": "¿Cómo pongo primero las líneas más largas?",
          "answer": "Elige el modo de longitud más larga. Si no, en una hoja de cálculo puedes ordenar por la función LONGITUD o LEN()."
        },
        {
          "question": "¿Las líneas en blanco se quedan en su sitio después de ordenar?",
          "answer": "Depende de la configuración: muchas herramientas las conservan o las quitan; elige el comportamiento que necesites."
        },
        {
          "question": "¿Cómo ordeno una lista de la compra sin duplicados?",
          "answer": "Ordena y luego quita las líneas duplicadas (o usa un modo combinado de ordenar y dejar únicos)."
        },
        {
          "question": "¿Puedo ordenar por la segunda palabra de cada línea?",
          "answer": "Esta página ordena líneas enteras. Si necesitas ordenar por campos, divide las columnas en otra herramienta."
        },
        {
          "question": "¿Por qué los números se ordenan como 10 antes de 2?",
          "answer": "Eso es el orden lexicográfico. Elige el orden numérico cuando necesites que el 2 vaya antes del 10."
        },
        {
          "question": "¿Cómo invierto una lista que ya estaba ordenada?",
          "answer": "Ejecuta un orden descendente o inverso, o invierte el orden de las líneas sin volver a comparar las claves."
        },
        {
          "question": "¿La configuración regional afecta al orden alfabético?",
          "answer": "Sí: las reglas de acentos y de idioma difieren. El resultado puede no coincidir con el diccionario de otro sistema."
        },
        {
          "question": "¿Puedo ordenar aquí filas de CSV?",
          "answer": "Solo si cada fila es una línea y aceptas un orden de línea completa, no una ordenación real por columnas CSV."
        },
        {
          "question": "¿Qué ocurre con los espacios al inicio de una línea?",
          "answer": "Pueden cambiar el orden. Recorta las líneas antes si el espacio no debería importar."
        },
        {
          "question": "¿Se conserva el texto original después de ordenar?",
          "answer": "Copia el resultado; deshaz en local si todavía tienes el origen. Guarda una copia de las listas grandes."
        },
        {
          "question": "¿Cómo debo ordenar cadenas de versión como 1.10 frente a 1.9?",
          "answer": "Un orden alfabético o numérico simple falla con las versiones: usa una herramienta que entienda semver."
        },
        {
          "question": "¿Puedo barajar las líneas al azar en lugar de ordenarlas?",
          "answer": "Usa un modo de barajar o aleatorizar si existe; si no, la ordenación es determinista."
        },
        {
          "question": "¿Ordenar las líneas envía mi lista a un servidor?",
          "answer": "La ordenación en esta página está pensada para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Ordena líneas en tu navegador: de la A a la Z, por número o por longitud, con opciones de mayúsculas y duplicados. Nada se sube.",
    "ui": {
      "One item per line": "Un elemento por línea",
      "Numeric ascending": "Numérico ascendente",
      "Numeric descending": "Numérico descendente",
      "Shortest → longest": "Más corta → más larga",
      "Longest → shortest": "Más larga → más corta",
      "Trim before comparing": "Recortar antes de comparar",
      "Ignore empty lines": "Ignorar líneas vacías",
      "Sort lines": "Ordenar líneas",
      "Result lines": "Líneas del resultado",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "Las líneas se ordenan en esta pestaña. La lista no se envía a Tools Star Hub."
    }
  },
  "find-and-replace": {
    "answer": "Buscar y reemplazar cambia la primera coincidencia o todas las coincidencias del texto que pegas. Puedes activar o desactivar la distinción de mayúsculas.",
    "content": {
      "about": "Pega un texto, escribe lo que quieres buscar y escribe el reemplazo. Puedes cambiar la primera coincidencia o todas, y puedes ignorar las mayúsculas.",
      "howTo": [
        "Pega el texto original.",
        "Escribe el texto a buscar. Un cuadro de búsqueda vacío se rechaza.",
        "Escribe el reemplazo. Déjalo en blanco si quieres borrar las coincidencias.",
        "Elige Reemplazar la primera o Reemplazar todas, y activa o desactiva Distinguir mayúsculas.",
        "Pulsa Reemplazar y luego copia el resultado o vacía el formulario."
      ],
      "examples": [
        {
          "title": "Corregir un nombre repetido",
          "body": "Original: «Ana sent the file. ana sent the notes.» Buscar: ana. Reemplazo: Ana. Distinguir mayúsculas desactivado, Reemplazar todas. Los dos nombres pasan a Ana y el recuento es 2."
        },
        {
          "title": "Cambiar solo el primer titular",
          "body": "Un borrador repite «Draft» tres veces. Reemplazar la primera cambia la primera y deja las otras dos. El recuento es 1."
        }
      ],
      "explanation": "La búsqueda recorre el texto original desde el principio. Tras una coincidencia, la siguiente búsqueda empieza después de esa coincidencia, así que un reemplazo no se vuelve a buscar. El modo que ignora mayúsculas compara copias en minúsculas, pero no cambia el texto de alrededor.",
      "limitations": "Esto no es una expresión regular. No coincide con límites de palabra y no omite el texto entre comillas. Las coincidencias que se solapan no se cuentan dos veces.",
      "tips": [
        "Si necesitas un patrón como «cualquier número», usa el comprobador de expresiones regulares. Esta herramienta busca los caracteres exactos que escribes.",
        "Un reemplazo que contiene el texto buscado se inserta tal cual. No se vuelve a reemplazar en la misma pasada."
      ],
      "features": [
        "La primera coincidencia o todas las coincidencias que no se solapan.",
        "Búsqueda que distingue mayúsculas, o una búsqueda que las ignora e inserta igualmente el reemplazo como lo escribiste.",
        "Un recuento de cuántos reemplazos se han hecho."
      ],
      "faqs": [
        {
          "question": "¿Puedo borrar las coincidencias?",
          "answer": "Sí. Deja el reemplazo vacío. Cada coincidencia se elimina y sigue contando como un reemplazo."
        },
        {
          "question": "¿Por qué una palabra corta cambió dentro de una más larga?",
          "answer": "La búsqueda es por caracteres. Buscar «cat» también coincide con el inicio de «catalog». Añade espacios si solo quieres la palabra entera, o usa el comprobador de regex con un límite de palabra."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. El texto y la cadena de búsqueda se quedan en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cómo reemplazo una palabra en todo un texto?",
          "answer": "Escribe la palabra a buscar y su reemplazo, elige Reemplazar todas y copia el resultado. Activa distinguir mayúsculas si las mayúsculas importan."
        },
        {
          "question": "¿Buscar y reemplazar admite expresiones regulares?",
          "answer": "No. Coincide con el texto exacto que escribes. Para buscar un patrón, pruébalo antes en el comprobador de expresiones regulares."
        },
        {
          "question": "¿Cómo cambio una frase por otra en todo un borrador?",
          "answer": "Pega el texto, escribe las cadenas de búsqueda y de reemplazo, elige reemplazar todas o solo la primera y copia el resultado."
        },
        {
          "question": "¿Cuándo es más seguro un reemplazo de texto plano que una regex?",
          "answer": "Usa el reemplazo simple para palabras y grafías fijas. Reserva la regex para cuando necesites patrones que puedas probar antes."
        },
        {
          "question": "¿Cómo borro todas las coincidencias sin poner texto nuevo?",
          "answer": "Deja el reemplazo vacío (o usa un modo explícito de borrar) para que cada coincidencia se elimine."
        },
        {
          "question": "¿Por qué un fragmento corto puede alterar palabras más largas a su alrededor?",
          "answer": "Las coincidencias de subcadena entran dentro de palabras mayores. Prefiere opciones de palabra completa o añade límites cuando existan."
        },
        {
          "question": "¿Debo distinguir mayúsculas al buscar nombres?",
          "answer": "Sí, cuando las mayúsculas importan (nombres, identificadores de código). Déjalo apagado para una limpieza informal de prosa."
        },
        {
          "question": "¿Cómo actualizo solo la primera aparición del texto pegado?",
          "answer": "Usa reemplazar la primera o una sola vez, en lugar de reemplazar todas, y revisa el texto antes de seguir."
        },
        {
          "question": "¿Cuál es un flujo prudente para un documento largo?",
          "answer": "Haz una copia de seguridad, reemplaza por secciones pequeñas y compara antes y después para deshacer los errores con facilidad."
        },
        {
          "question": "¿Una pasada de reemplazo puede unificar variantes ortográficas de un borrador?",
          "answer": "Sí, para variantes conocidas (color/colour). Mantén una lista de las grafías de marca que no debes alterar."
        },
        {
          "question": "¿Los saltos de línea cambian lo que coincide?",
          "answer": "Un patrón que abarca varias líneas puede fallar si no hay un modo multilínea. Normaliza antes los saltos si hace falta."
        },
        {
          "question": "¿Un reemplazo en el navegador basta para un código de producción?",
          "answer": "Para ediciones rápidas, quizá; en un repositorio es mejor un editor o una herramienta de proyecto con vista previa y control de versiones."
        },
        {
          "question": "¿Cómo conservo los hipervínculos en un cambio masivo?",
          "answer": "Excluye las secciones llenas de URL o usa cadenas de búsqueda más concretas que un simple token como http."
        },
        {
          "question": "¿Qué suele indicar un texto rechazado?",
          "answer": "Una búsqueda vacía, un texto demasiado grande o caracteres de control no admitidos: ajústalo y vuelve a intentarlo."
        },
        {
          "question": "¿Puedo ejecutar buscar y reemplazar en todo un proyecto desde aquí?",
          "answer": "Esta página trata un solo texto pegado. Para proyectos de varios archivos usa un IDE o la línea de comandos."
        },
        {
          "question": "¿Cómo deberían aplicar los equipos de localización los cambios de glosario?",
          "answer": "Reemplaza los términos del glosario con cuidado, después de bloquear los segmentos ya traducidos que debas conservar."
        },
        {
          "question": "¿Un reemplazo de texto reescribe las marcas invisibles de un texto enriquecido?",
          "answer": "Cambia los caracteres que coinciden. El formato enriquecido que queda fuera del texto plano pegado no se conserva."
        }
      ]
    },
    "metaDescription": "Busca y reemplaza texto en tu navegador: la primera coincidencia o todas, con o sin distinguir mayúsculas. Nada se envía a un servidor.",
    "ui": {
      "Replacement": "Reemplazo",
      "How many matches": "Qué coincidencias",
      "Replace first": "Reemplazar la primera",
      "Replace all": "Reemplazar todas",
      "Case-sensitive": "Distinguir mayúsculas",
      "{0} replacement.": "{0} reemplazo.",
      "{0} replacements.": "{0} reemplazos.",
      "Paste the text you want to change.": "Pega el texto que quieres cambiar.",
      "Enter the text to find.": "Escribe el texto que quieres buscar."
    }
  },
  "remove-line-breaks": {
    "answer": "Quitar saltos de línea une las líneas ajustadas con espacios, elimina los saltos o deja una línea en blanco entre párrafos.",
    "content": {
      "about": "Pega un texto que quedó partido en muchas líneas. Puedes unir esas líneas con espacios, eliminar los saltos o dejar una línea en blanco entre párrafos.",
      "howTo": [
        "Pega el texto original. El cuadro conserva los saltos de línea para que puedas verlos.",
        "Elige una opción: reemplazar los saltos de línea por espacios, eliminarlos o conservar los saltos de párrafo.",
        "Pulsa Limpiar texto.",
        "Copia el texto limpio o vacía ambos cuadros."
      ],
      "examples": [
        {
          "title": "Un correo ajustado",
          "body": "Tres líneas cortas de una misma frase pasan a una sola línea con un espacio entre las palabras cuando eliges Reemplazar los saltos de línea por espacios."
        },
        {
          "title": "Dos párrafos",
          "body": "Un bloque, una línea en blanco y luego otro bloque. Conservar los saltos de párrafo une las líneas de cada bloque y deja una línea en blanco entre ellos."
        }
      ],
      "explanation": "Los finales de línea de Windows y de Mac antiguos se tratan como el mismo salto. El modo de espacios convierte cada racha de saltos en un espacio y recorta los extremos. El modo de eliminar borra los saltos y puede pegar la última palabra de una línea a la primera de la siguiente. El modo de párrafo divide primero por una línea en blanco y luego une las líneas de cada párrafo.",
      "limitations": "La herramienta no distingue una frase ajustada de una lista. Un solo salto de línea se trata como un ajuste en el modo de párrafo. Solo una línea en blanco mantiene los párrafos separados.",
      "tips": [
        "Usa espacios para la prosa. Usa eliminar solo cuando los saltos se insertaron dentro de un token, como un número largo partido en varias líneas.",
        "Si un poema o una lista debe conservar sus líneas, no ejecutes esta herramienta sobre ese texto."
      ],
      "features": [
        "El original se queda en el primer cuadro. El texto limpio va aparte.",
        "El modo de espacios une las líneas y compacta los espacios repetidos.",
        "El modo de párrafo deja una línea en blanco donde ya había una."
      ],
      "faqs": [
        {
          "question": "¿Esto quita los espacios que hay dentro de una línea?",
          "answer": "El modo de espacios compacta los espacios y tabuladores repetidos. El modo de eliminar y el de párrafo dejan los espacios que ya estaban dentro de una línea."
        },
        {
          "question": "¿Qué ocurre si solo pego espacios?",
          "answer": "La página te pide que pegues algún texto. Solo espacios en blanco no bastan."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. El texto pegado se reescribe en esta pestaña. No se sube."
        },
        {
          "question": "¿Cómo quito los saltos de línea de un texto copiado de un PDF?",
          "answer": "Pega el texto y elige la opción que conserva los saltos de párrafo. Los saltos simples dentro de un párrafo pasan a ser espacios, y las líneas en blanco entre párrafos se quedan."
        },
        {
          "question": "¿Cuál es la diferencia entre reemplazar y eliminar los saltos de línea?",
          "answer": "Reemplazar convierte cada salto en un espacio para que las palabras sigan separadas. Eliminar borra el salto, lo que une el final de una línea con el inicio de la siguiente."
        },
        {
          "question": "¿Cómo uno un párrafo que quedó partido al copiarlo de un PDF?",
          "answer": "Pega el texto roto, quita los saltos de línea y copia el párrafo unido en tu documento."
        },
        {
          "question": "¿Se conservan las líneas en blanco entre párrafos?",
          "answer": "Muchas herramientas las conservan como separadores al unir los saltos simples de un bloque: revisa el resultado."
        },
        {
          "question": "¿Puedo procesar solo una parte de un texto largo?",
          "answer": "Sí: pega solo el tramo roto para que las listas o la poesía de otras partes no se toquen."
        },
        {
          "question": "¿Se quitan tanto los finales de línea de Windows como los de Mac?",
          "answer": "Sí: CRLF, LF y CR se normalizan, así que un texto mixto también se une bien."
        },
        {
          "question": "¿Las palabras pueden quedar pegadas después de unir?",
          "answer": "Una limpieza cuidadosa inserta un espacio cuando el salto estaba entre palabras; revisa una vez los guiones extraños."
        },
        {
          "question": "¿Cómo se comportan los retornos suaves de Word?",
          "answer": "Suelen llegar como saltos de línea normales y se quitan igual que los saltos duros."
        },
        {
          "question": "¿Puedo conservar una lista con viñetas intacta?",
          "answer": "Ejecuta la herramienta solo sobre bloques de prosa, o restaura después los saltos de la lista si limpiaste un pegado completo."
        },
        {
          "question": "¿Por qué el editor sigue ajustando el texto después de limpiarlo?",
          "answer": "El ajuste visual sigue el ancho de la ventana; el texto subyacente puede ser ya una sola línea lógica."
        },
        {
          "question": "¿Cómo preparo un texto para una sola celda de CSV?",
          "answer": "Une primero las líneas y luego escapa las comillas según el formato de tu hoja de cálculo."
        },
        {
          "question": "¿Hay deshacer después de quitar los saltos?",
          "answer": "Usa el deshacer del navegador o del editor, o guarda el original en otra pestaña antes de ejecutar la herramienta."
        },
        {
          "question": "¿Debo limpiar así los bloques de código de Markdown?",
          "answer": "Evítalo: quitar los saltos dentro de un bloque de código puede arruinar la sangría y la estructura."
        },
        {
          "question": "¿Y las palabras con guion partidas al final de la línea?",
          "answer": "Los guiones de final de línea pueden quedar; bórralos a mano si la palabra solo se partió por el ajuste."
        },
        {
          "question": "¿Se puede arreglar un chat con una palabra por línea?",
          "answer": "Sí: quita los saltos para formar frases y luego corrige el espacio alrededor de las marcas de tiempo si hace falta."
        },
        {
          "question": "¿Esto cambia los espacios de no separación?",
          "answer": "El foco son los saltos de línea; los espacios especiales pueden quedar, salvo que también pases un limpiador de espacios."
        },
        {
          "question": "¿El texto limpio sale de mi navegador?",
          "answer": "El proceso está pensado para quedarse en la sesión de la página; copia el resultado si quieres guardarlo en otro sitio."
        }
      ]
    },
    "metaDescription": "Quita saltos de línea en el navegador: une el texto con espacios, elimínalos o conserva los párrafos. El texto no se sube a un servidor.",
    "ui": {
      "Line breaks": "Saltos de línea",
      "Replace line breaks with spaces": "Reemplazar saltos de línea por espacios",
      "Remove line breaks": "Eliminar saltos de línea",
      "Keep paragraph breaks": "Conservar saltos de párrafo",
      "Cleaned text": "Texto limpio",
      "Paste some text first.": "Pega primero algo de texto."
    }
  },
  "add-line-numbers": {
    "answer": "Añadir números de línea pone un número y un separador delante de cada línea, sin cambiar la línea en sí.",
    "content": {
      "about": "Pega varias líneas y pon un número delante de cada una. Tú eliges el número de inicio y los caracteres entre el número y la línea.",
      "howTo": [
        "Pega el texto. Cada línea se queda como la escribiste.",
        "Indica el número de inicio. El 1 es el inicio habitual. Se admite un entero menor que 0.",
        "Indica el separador. El valor predeterminado es un punto y un espacio.",
        "Pulsa Añadir números y luego copia las líneas numeradas o vacía el formulario."
      ],
      "examples": [
        {
          "title": "Una lista de tres líneas",
          "body": "Las líneas «First line», «Second line» y «Third line», con inicio 1 y separador «. », pasan a «1. First line», «2. Second line» y «3. Third line»."
        },
        {
          "title": "Continuar una lista en el 10",
          "body": "El número de inicio 10 y el separador «) » convierten la primera línea pegada en «10) » más la línea original."
        }
      ],
      "explanation": "El texto se divide por los saltos de línea. Cada línea recibe el número de inicio más su posición, luego el separador y después los caracteres originales de esa línea. Las líneas vacías también se numeran, porque siguen siendo líneas.",
      "limitations": "Un salto de línea final crea una línea vacía al final, y esa línea vacía se numera. Los ajustes suaves dentro del cuadro no son líneas nuevas. Solo cuentan los saltos de línea reales.",
      "tips": [
        "Si el texto ya tiene números, quítalos primero o tendrás dos números en cada línea.",
        "Usa un tabulador como separador cuando quieras pegar el resultado en una hoja de cálculo."
      ],
      "features": [
        "El texto de la línea no se recorta ni se reescribe.",
        "Un separador personalizado, como «) » o un tabulador.",
        "Un número de inicio distinto de 1."
      ],
      "faqs": [
        {
          "question": "¿Esto cambia la ortografía o el espaciado?",
          "answer": "No. Los caracteres que van después del separador son la línea original."
        },
        {
          "question": "¿Puedo empezar en 0?",
          "answer": "Sí. Se aceptan el 0 y los enteros negativos. Un decimal como 1,5 no."
        },
        {
          "question": "¿Mi texto se envía a un servidor?",
          "answer": "No. Las líneas y el número de inicio se quedan en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cómo numero las líneas de un texto?",
          "answer": "Pega el texto, indica el número de inicio y el separador, por ejemplo un punto y un espacio, añade los números y copia el resultado."
        },
        {
          "question": "¿Se numeran las líneas vacías?",
          "answer": "Sí. Cada salto de línea real inicia una línea numerada, incluidas las líneas vacías y una línea vacía al final."
        },
        {
          "question": "¿Cómo numero cada línea de un borrador pegado?",
          "answer": "Pega el texto, elige un número de inicio si lo necesitas y copia el resultado numerado. Sirve para revisiones, guiones o registros compartidos."
        },
        {
          "question": "¿Qué separador aparece entre el número y el texto?",
          "answer": "La mayoría de los modos usan un punto, dos puntos o un tabulador. Elige uno que no confunda luego la ordenación o la sangría del código."
        },
        {
          "question": "¿Las líneas en blanco también reciben un número?",
          "answer": "Sí, cuando la numeración de líneas vacías está activa. Desactívala si las líneas en blanco deben quedar sin marca."
        },
        {
          "question": "¿Puedo empezar a numerar en un valor distinto de 1?",
          "answer": "Sí: indica el índice de inicio (incluido el 0) antes de copiar. Es útil para apéndices o secciones que continúan."
        },
        {
          "question": "¿La numeración rompe el código con sangría?",
          "answer": "Los números van delante del contenido de la línea. La sangría del resto se conserva, pero algunos analizadores pueden tratar el prefijo como parte del texto."
        },
        {
          "question": "¿Cómo quito los números que ya añadí?",
          "answer": "Elimina los dígitos y el separador iniciales con buscar y reemplazar, o pega el texto en un editor limpio y expórtalo de nuevo sin números."
        },
        {
          "question": "¿Hay relleno con ceros como 01, 02?",
          "answer": "Depende del modo. Si el relleno está apagado, los números quedan sin ceros: añádelos tú si tu guía de estilo lo exige."
        },
        {
          "question": "¿Puedo numerar solo una parte de un texto más largo?",
          "answer": "Numera todo el pegado y quédate con el rango que necesites, o divide antes la selección en un pegado propio."
        },
        {
          "question": "¿Los finales CRLF y LF cambian cuántas líneas obtengo?",
          "answer": "La herramienta divide por los saltos que reconoce. Normaliza primero los finales si el recuento no cuadra entre equipos."
        },
        {
          "question": "¿Por qué numerar las líneas antes de una revisión entre pares?",
          "answer": "Los revisores pueden citar números de línea en lugar de citar pasajes largos. Eso agiliza los comentarios por correo o chat."
        },
        {
          "question": "¿Añadir números altera los caracteres UTF-8?",
          "answer": "No: solo se añaden prefijos. Los caracteres del cuerpo se quedan igual."
        },
        {
          "question": "¿Puede reiniciarse la numeración después de cada título?",
          "answer": "No de forma automática. Divide por sección, numera cada bloque desde 1 y vuelve a unirlos."
        },
        {
          "question": "¿Es lo mismo que el margen de números de un procesador de texto?",
          "answer": "No. Los números del margen son solo de visualización. Esto escribe los números en el texto mismo."
        },
        {
          "question": "¿Qué ocurre con los espacios al final de una línea?",
          "answer": "Suelen quedarse después del prefijo numérico. Recórtalos si el analizador posterior es estricto."
        },
        {
          "question": "¿Se suben mis borradores cuando numero las líneas?",
          "answer": "La numeración se ejecuta en la sesión del navegador; no se guarda una copia permanente en un servidor."
        }
      ]
    },
    "metaDescription": "Añade números de línea en el navegador: elige el número inicial y el separador. Las líneas no se reescriben y nada se envía a un servidor.",
    "ui": {
      "Starting number": "Número inicial",
      "Separator": "Separador",
      "Placed between the number and the original line.": "Se coloca entre el número y la línea original.",
      "Add numbers": "Añadir números",
      "Numbered lines": "Líneas numeradas",
      "Paste the lines you want to number.": "Pega las líneas que quieres numerar.",
      "starting number": "número inicial",
      "Enter a whole number for the starting line.": "Introduce un número entero para la línea inicial."
    }
  },
  "number-to-words": {
    "answer": "Un conversor de números a palabras escribe enteros de -999.999.999 a 999.999.999 en inglés. También puede leer palabras numéricas simples y devolverlas a un número.",
    "content": {
      "about": "Escribe un número entero en inglés, o convierte palabras numéricas simples en inglés de nuevo en un número. El rango es de -999.999.999 a 999.999.999.",
      "howTo": [
        "Elige número a palabras o palabras a número.",
        "Introduce el número o las palabras.",
        "Pulsa Convertir."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "Las palabras son one thousand two hundred thirty-four."
        }
      ],
      "explanation": "El conversor agrupa el número en millones, millares y el resto. Las decenas y las unidades de 21 a 99 usan un guion. No se usa la palabra and. Los ceros a la izquierda se ignoran, así que 007 es seven.",
      "limitations": "Los decimales, los mil millones (billions) y las frases que usan la palabra and quedan fuera de este conversor.",
      "tips": [
        "Escribe twenty-one con un guion, o como twenty one.",
        "Usa minus para un número negativo."
      ],
      "features": [
        "Números enteros hasta los millones.",
        "Números negativos y el cero.",
        "Una lectura inversa de palabras simples en inglés."
      ],
      "faqs": [
        {
          "question": "¿Cómo se escribe un número en palabras?",
          "answer": "La página agrupa millones, millares y centenas, y luego escribe las decenas y las unidades. 123 es one hundred twenty-three."
        },
        {
          "question": "¿Qué rango se admite?",
          "answer": "Números enteros de -999.999.999 a 999.999.999."
        },
        {
          "question": "¿Qué ocurre con los ceros a la izquierda?",
          "answer": "Se ignoran. 007 es seven."
        },
        {
          "question": "¿Se pueden convertir decimales?",
          "answer": "No. Introduce un número entero."
        },
        {
          "question": "¿Se pueden convertir las palabras de nuevo en un número?",
          "answer": "Sí, para palabras simples en inglés dentro de este rango, como one hundred twenty-three o minus twenty."
        },
        {
          "question": "¿Estos números se envían a un servidor?",
          "answer": "No. El número o las palabras se quedan en esta pestaña mientras se convierten. No se suben."
        },
        {
          "question": "¿Cómo convierto el importe de un cheque a palabras?",
          "answer": "Introduce el número y copia las palabras en la línea de importe del cheque. Sigue las reglas de tu banco para los céntimos y la palabra «only» si se exige."
        },
        {
          "question": "¿Qué estilo de inglés usa la herramienta?",
          "answer": "Sigue una redacción habitual al estilo estadounidense para números enteros. El uso del guion en las decenas puede diferir un poco de las guías británicas."
        },
        {
          "question": "¿Puedo convertir números negativos?",
          "answer": "El soporte depende del modo de la herramienta. En contabilidad los negativos a menudo se escriben de forma especial: confírmalo antes de confiar en el resultado."
        },
        {
          "question": "¿Qué ocurre con números muy grandes con muchos ceros?",
          "answer": "Quédate dentro del rango documentado. Los valores extremadamente grandes pueden rechazarse para mantener la redacción exacta."
        },
        {
          "question": "¿Cómo se unen las centenas y los millares?",
          "answer": "El inglés estándar inserta palabras como hundred y thousand en los límites de posición. Lee la frase completa antes de copiarla."
        },
        {
          "question": "¿Funcionan las palabras ordinales como 21st?",
          "answer": "Este conversor está pensado para números cardinales (twenty-one), no para ordinales (twenty-first). Añade las terminaciones ordinales a mano si las necesitas."
        },
        {
          "question": "¿Puedo usarlo en líneas de una factura?",
          "answer": "Sí, para mayor claridad en algunos contextos. Combina cifras y palabras cuando importe la resistencia al fraude."
        },
        {
          "question": "¿Por qué desaparecieron los ceros a la izquierda?",
          "answer": "El valor numérico ignora los ceros decorativos. Los códigos o identificadores que necesitan ceros deben quedarse como texto en otro sitio."
        },
        {
          "question": "¿Deletrea también el nombre de la moneda?",
          "answer": "Por lo general solo deletrea el número. Añade «dollars» o el nombre de tu moneda, salvo que exista un modo de dinero."
        },
        {
          "question": "¿Cómo aparecen los decimales en palabras?",
          "answer": "Algunos modos dicen «point» y luego los dígitos; otros exigen unidades mayores y menores por separado. Revisa el ejemplo de tu modo."
        },
        {
          "question": "¿Se incluye el «and» británico antes de las decenas?",
          "answer": "La redacción estadounidense suele omitir «and» (two hundred five). Espera diferencias de estilo respecto a la escritura jurídica británica."
        },
        {
          "question": "¿Pueden usarlo las aulas para practicar el valor posicional?",
          "answer": "Sí: los estudiantes convierten en ambos sentidos cuando hay un modo inverso y luego comparan con la clave de respuestas."
        },
        {
          "question": "¿Qué ocurre si en mi región se usan espacios como separador de millares?",
          "answer": "Introduce un número sin marcas de agrupación, o quita primero los espacios para que el análisis no sea ambiguo."
        },
        {
          "question": "¿Se guardan los números después de la conversión?",
          "answer": "Solo permanecen en la sesión de la página."
        }
      ]
    },
    "metaDescription": "Convierte números enteros a palabras en inglés, o palabras simples a un número, en tu navegador. El rango es de -999.999.999 a 999.999.999.",
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "Números enteros de -999.999.999 a 999.999.999. Las palabras siguen el inglés estadounidense, sin la palabra «and», por ejemplo one hundred twenty-three. Los ceros iniciales se ignoran.",
      "Number to words": "Número a letras",
      "Words to number": "Letras a número",
      "Number words": "Número en letras (inglés)",
      "Enter a whole number. Decimals are outside this converter.": "Introduce un número entero. Los decimales no se admiten.",
      "Enter a whole number using digits.": "Introduce un número entero con cifras.",
      "This converter supports -999,999,999 through 999,999,999.": "Este conversor admite de -999.999.999 a 999.999.999.",
      "Enter number words.": "Introduce un número en letras en inglés.",
      "Enter number words after minus.": "Introduce palabras en inglés después de minus.",
      "This converter does not use the word and.": "Este conversor no usa la palabra «and».",
      "\"{0}\" is not a supported number word.": "«{0}» no es una palabra numérica admitida.",
      "That number is outside -999,999,999 through 999,999,999.": "Ese número está fuera del rango de -999.999.999 a 999.999.999."
    },
    "note": "Esta herramienta escribe y lee los números en letras solo en inglés. La interfaz y la ayuda están traducidas."
  },
  "morse-code": {
    "answer": "Un traductor de código Morse convierte texto de A-Z y 0-9 en Morse internacional, o lee Morse y lo devuelve a texto. Las letras se separan con espacios y las palabras con una barra.",
    "content": {
      "about": "Convierte letras y dígitos a código Morse internacional, o convierte Morse de nuevo a texto.",
      "howTo": [
        "Elige texto a Morse o Morse a texto.",
        "Introduce A-Z, 0-9, o Morse formado por puntos, rayas, espacios y /.",
        "Pulsa Convertir."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO es .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Cada letra y cada dígito tiene un patrón de Morse internacional. Un espacio separa las letras. Una barra separa las palabras. El texto en minúsculas se lee como mayúsculas. Un carácter fuera de A-Z y 0-9 detiene la conversión.",
      "limitations": "La puntuación y las letras fuera de A-Z no se convierten. Un patrón Morse desconocido se rechaza.",
      "tips": [
        "Escribe SOS como ... --- ...",
        "Deja un espacio entre las letras Morse."
      ],
      "features": [
        "A-Z y 0-9.",
        "Espacios entre letras y / entre palabras.",
        "Un error claro ante un carácter no admitido."
      ],
      "faqs": [
        {
          "question": "¿Cómo se escribe un texto en código Morse?",
          "answer": "Cada letra se convierte en su patrón de Morse internacional. Las letras se separan con un espacio y las palabras con /."
        },
        {
          "question": "¿Funciona el texto en minúsculas?",
          "answer": "Sí. Las letras minúsculas se leen como mayúsculas."
        },
        {
          "question": "¿Qué separa las palabras?",
          "answer": "Una barra separa las palabras. Un espacio separa las letras dentro de una palabra."
        },
        {
          "question": "¿Qué ocurre si escribo puntuación?",
          "answer": "La página nombra el carácter no admitido y no inventa un código para él."
        },
        {
          "question": "¿El texto se envía a algún sitio?",
          "answer": "No. La conversión se ejecuta en tu navegador."
        },
        {
          "question": "¿Estos datos se envían a un servidor?",
          "answer": "No. Las letras y los patrones Morse se convierten en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cómo decodifico Morse de nuevo a inglés?",
          "answer": "Pega una cadena Morse bien espaciada en el modo de decodificación. Los huecos entre letras y los separadores de palabra deben ser coherentes; si no, el analizador rechazará fragmentos."
        },
        {
          "question": "¿Qué carácter separa las palabras Morse en esta herramienta?",
          "answer": "En forma de texto suele usarse una barra entre palabras. Usa el mismo separador que aparece en los ejemplos de la herramienta."
        },
        {
          "question": "¿Puedo codificar números en Morse?",
          "answer": "Sí. Los dígitos 0–9 tienen patrones estándar de Morse internacional y se mezclan con las letras en los distintivos de llamada."
        },
        {
          "question": "¿Por qué se rechaza mi Morse como mal formado?",
          "answer": "Demasiados puntos seguidos o la falta de espacios entre letras suelen causar el rechazo. Corrige el espaciado antes de volver a decodificar."
        },
        {
          "question": "¿Se admite el Morse estadounidense?",
          "answer": "Esta página está pensada para el Morse internacional. El Morse estadounidense es distinto y aquí no irá y volverá de forma limpia."
        },
        {
          "question": "¿Puedo practicar con prosigns?",
          "answer": "Existen algunas señales de procedimiento para radio. El soporte varía; quédate con letras y dígitos cuando aprendas lo básico."
        },
        {
          "question": "¿La herramienta reproduce tonos de audio?",
          "answer": "El foco aquí es la codificación y decodificación visual. Usa un entrenador de audio dedicado si necesitas practicar el sonido dit-dah."
        },
        {
          "question": "¿Cómo deberían escribir Morse los principiantes en un chat?",
          "answer": "Usa puntos y rayas con espacios claros. Evita los guiones Unicode decorativos que los analizadores no reconocen."
        },
        {
          "question": "¿Puede el Morse ocultar una contraseña de forma segura?",
          "answer": "No. Es una codificación, no un cifrado. Cualquiera con una tabla puede leerlo."
        },
        {
          "question": "¿Por qué coinciden minúsculas y mayúsculas?",
          "answer": "El Morse no tiene mayúsculas. La entrada se normaliza, así que «sos» y «SOS» se codifican igual."
        },
        {
          "question": "¿Qué puntuación se admite de forma habitual?",
          "answer": "El punto, la coma y el signo de interrogación aparecen en muchas tablas. Las marcas no admitidas se omiten o se señalan."
        },
        {
          "question": "¿Cómo comparto deberes en Morse?",
          "answer": "Codifica, copia la cadena y conserva los separadores. Los profesores deberían indicar qué tabla usan para calificar."
        },
        {
          "question": "¿Sigue siendo útil aprender Morse?",
          "answer": "La radioafición, aficiones de accesibilidad y las clases de historia siguen usándolo, aunque las licencias ya no exijan un examen."
        },
        {
          "question": "¿Se suben mis cadenas Morse?",
          "answer": "La codificación y la decodificación se quedan en el navegador."
        }
      ]
    },
    "metaDescription": "Traduce letras y dígitos a código Morse internacional, o Morse a texto, en tu navegador. Las letras se separan con espacios y las palabras con /.",
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "Morse internacional para A–Z y 0–9. Las letras se separan con un espacio y las palabras con /. Los caracteres no admitidos se rechazan.",
      "Text to Morse": "Texto a Morse",
      "Morse to text": "Morse a texto",
      "Morse code": "Código Morse",
      "Morse": "Morse",
      "Enter text to convert.": "Introduce texto para convertir.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "«{0}» no se admite. Usa A–Z y 0–9.",
      "Enter Morse code to convert.": "Introduce código Morse para convertir.",
      "Morse code can use only dots, dashes, spaces, and /.": "El código Morse solo puede tener puntos, rayas, espacios y /.",
      "A word separator is missing letters.": "A un separador de palabras le faltan letras.",
      "\"{0}\" is not a supported Morse letter.": "«{0}» no es una letra Morse admitida."
    }
  },
  "roman-numeral-converter": {
    "answer": "Un conversor de números romanos convierte enteros de 1 a 3999 en numerales estándar, y lee esos numerales de vuelta a números. Los valores por encima de 3999 no se admiten.",
    "content": {
      "about": "Convierte números enteros de 1 a 3999 a números romanos estándar, y convierte esos numerales de nuevo a números.",
      "howTo": [
        "Elige número a romano o romano a número.",
        "Introduce un número de 1 a 3999, o un numeral con I, V, X, L, C, D y M.",
        "Pulsa Convertir."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 es MCMXCIV."
        }
      ],
      "explanation": "La página construye los numerales a partir de M, CM, D, CD, C, XC, L, XL, X, IX, V, IV e I. Una cadena romana solo se acepta cuando es la forma estándar de su valor. IIII, IC e IL se rechazan. Los numerales por encima de 3999, incluida la notación con vinculum, no se admiten.",
      "limitations": "El rango es de 1 a 3999. El cero, los negativos y los números mayores se rechazan.",
      "tips": [
        "4 es IV, no IIII.",
        "9 es IX, no VIIII."
      ],
      "features": [
        "Notación sustractiva estándar.",
        "Una conversión inversa.",
        "Rechazo de numerales que no son la forma estándar."
      ],
      "faqs": [
        {
          "question": "¿Cómo se convierte un número a número romano?",
          "answer": "La página usa la notación sustractiva estándar. 4 es IV, 9 es IX, 40 es XL y 3999 es MMMCMXCIX."
        },
        {
          "question": "¿Qué números se admiten?",
          "answer": "Números enteros de 1 a 3999."
        },
        {
          "question": "¿Por qué se rechaza IIII?",
          "answer": "IIII no es la forma estándar de 4. La forma estándar es IV."
        },
        {
          "question": "¿Se pueden convertir numerales por encima de 3999?",
          "answer": "No. La notación ampliada para números mayores no se admite."
        },
        {
          "question": "¿Se puede convertir un numeral de nuevo en un número?",
          "answer": "Sí, cuando es un numeral estándar de 1 a 3999."
        },
        {
          "question": "¿Estos números se envían a un servidor?",
          "answer": "No. El número o el numeral se convierte en esta pestaña. No se sube."
        },
        {
          "question": "¿Cómo convierto aquí cifras arábigas a números romanos?",
          "answer": "Introduce un número entero dentro del rango, convierte y copia el resultado romano."
        },
        {
          "question": "¿Cómo convierto números romanos de nuevo a cifras?",
          "answer": "Pega una cadena de numeral válida y ejecuta la conversión inversa para ver el entero."
        },
        {
          "question": "¿Por qué se usan pares sustractivos como IV e IX?",
          "answer": "La forma estándar coloca un valor menor delante de uno mayor para restar, y así los numerales quedan más cortos."
        },
        {
          "question": "¿Por qué se rechaza escribir 99 como IC según las reglas estándar?",
          "answer": "Los números romanos clásicos usan XCIX para 99; IC no se acepta en la forma habitual de enseñanza."
        },
        {
          "question": "¿Cuál es el límite superior habitual de la conversión?",
          "answer": "Muchas herramientas se detienen en 3999 porque las letras estándar no incluyen un solo signo para 5000."
        },
        {
          "question": "¿Puedo pegar números romanos en minúsculas?",
          "answer": "Muchos conversores normalizan la entrada en minúsculas a mayúsculas antes de validar la forma estándar."
        },
        {
          "question": "¿Puedo convertir fechas de esferas de reloj que usan IIII?",
          "answer": "La tradición de los relojes puede mostrar IIII, pero un conversor estricto espera IV para el cuatro."
        },
        {
          "question": "¿Cómo se tratan los números mayores con una raya encima?",
          "answer": "La notación con vinculum para millares de millares suele quedar fuera del alcance de un conversor básico."
        },
        {
          "question": "¿Los espacios dentro de un numeral provocan errores?",
          "answer": "Sí: quita los espacios y los caracteres no válidos antes de convertir."
        },
        {
          "question": "¿Puede ayudar con la numeración de esquemas en documentos?",
          "answer": "Sí, para enteros pequeños; pega cada número de sección que necesites, no documentos enteros."
        },
        {
          "question": "¿Por qué falló una entrada vacía?",
          "answer": "No hay nada que convertir: introduce primero cifras o un numeral."
        },
        {
          "question": "¿Se convierten fracciones o decimales?",
          "answer": "No: los números romanos de esta página representan solo números enteros."
        },
        {
          "question": "¿Hay un solo numeral correcto para cada valor?",
          "answer": "Se prefieren las formas canónicas estándar; las variantes arcaicas pueden rechazarse."
        },
        {
          "question": "¿Pueden usarlo los profesores para fichas de trabajo?",
          "answer": "Sí, para comprobar las respuestas de práctica; los estudiantes deben seguir mostrando las reglas de correspondencia."
        }
      ]
    },
    "metaDescription": "Convierte números enteros de 1 a 3999 a números romanos estándar, y de romano a cifra, en tu navegador. Nada se envía a un servidor.",
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "Números romanos estándar de 1 a 3999. No se admiten valores mayores que 3999, ni la notación con vínculo. Las secuencias no válidas como IIII se rechazan.",
      "Number to Roman": "Número a romano",
      "Roman to number": "Romano a número",
      "Roman numeral": "Número romano",
      "Enter a whole number from 1 through 3999.": "Introduce un número entero de 1 a 3999.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Este conversor admite de 1 a 3999. Los números mayores que 3999 no se admiten.",
      "Enter a Roman numeral.": "Introduce un número romano.",
      "Use only I, V, X, L, C, D, and M.": "Usa solo I, V, X, L, C, D y M.",
      "\"{0}\" is not a valid Roman numeral.": "«{0}» no es un número romano válido."
    }
  },
  "text-repeater": {
    "answer": "Un repetidor de texto copia una palabra, una frase o una línea de 1 a 200 veces, con nada, un espacio o una línea nueva entre las copias.",
    "content": {
      "about": "Repite una palabra, una frase o una línea de 1 a 200 veces. Pon nada, un espacio o una línea nueva entre las copias. El origen puede tener hasta 5.000 caracteres, y el resultado unido hasta 100.000 caracteres.",
      "howTo": [
        "Introduce el texto a repetir. Un cuadro vacío se rechaza.",
        "Introduce un recuento entero de 1 a 200.",
        "Elige nada, un espacio o una línea nueva entre las copias y pulsa Repetir."
      ],
      "examples": [
        {
          "title": "Una palabra tres veces",
          "body": "ha, recuento 3, con un espacio entre copias, se convierte en ha ha ha."
        },
        {
          "title": "Una línea dos veces",
          "body": "Ready, recuento 2, con una línea nueva entre copias, queda Ready en una línea y Ready en la siguiente."
        }
      ],
      "explanation": "La página copia el texto las veces que pides y une esas copias con el separador que elegiste. No genera latín de relleno y no quita duplicados.",
      "limitations": "El origen puede tener hasta 5.000 caracteres, el recuento hasta 200 y el resultado unido hasta 100.000 caracteres. Un resultado más largo se rechaza.",
      "tips": [
        "Usa una línea nueva cuando quieras una lista de filas idénticas. Usa un espacio cuando quieras una sola línea."
      ],
      "features": [
        "Una sola copia cuando el recuento es 1, sin un separador extra.",
        "Un espacio o una línea nueva solo entre las copias, no después de la última.",
        "Un límite de longitud para que un resultado enorme no llene la página."
      ],
      "faqs": [
        {
          "question": "¿El repetidor de texto es gratis?",
          "answer": "Sí. Puedes repetir texto aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Un recuento de 1 añade un separador?",
          "answer": "No. Una copia es el texto que escribiste, sin nada añadido."
        },
        {
          "question": "¿Puedo repetir una línea en blanco?",
          "answer": "Un cuadro vacío se rechaza. Una línea que solo contiene espacios sí se admite, porque esos espacios son texto."
        },
        {
          "question": "¿El texto se envía a un servidor?",
          "answer": "No. Las copias se construyen en esta pestaña del navegador. Tools Star Hub no envía ese texto a un servidor ni lo guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo repito una palabra o una frase muchas veces?",
          "answer": "Pega el texto, indica cuántas copias quieres, elige un separador como un salto de línea o una coma, genera y copia el resultado. La herramienta une las copias en orden sin cambiar la redacción original."
        },
        {
          "question": "¿Qué separador debo usar entre las repeticiones?",
          "answer": "Usa un salto de línea cuando cada copia deba ir en su propia fila, una coma o un espacio para listas en una línea, y una cadena personalizada cuando necesites una etiqueta entre elementos. Un separador vacío pega las copias sin hueco."
        },
        {
          "question": "¿Hay un recuento máximo de repeticiones?",
          "answer": "Los recuentos muy grandes pueden congelar la pestaña porque la cadena unida crece en memoria. Empieza con un número razonable, copia lo que necesites y aumenta solo si el navegador sigue respondiendo."
        },
        {
          "question": "¿Puedo repetir bloques de varias líneas?",
          "answer": "Sí. Pega el bloque entero como texto de origen. Cada repetición incluye todas las líneas que pegaste, y luego se inserta el separador que elegiste entre esas copias completas."
        },
        {
          "question": "¿Repetir cambia los espacios dentro de mi texto?",
          "answer": "No. Los caracteres de cada copia se quedan como los escribiste. Solo el separador entre copias lo añade la herramienta."
        },
        {
          "question": "¿En qué se diferencia esto del lorem ipsum?",
          "answer": "El lorem ipsum inventa un latín de relleno. El repetidor duplica la cadena exacta que das, lo que es mejor para datos de prueba, pruebas de carga y listas con un patrón."
        },
        {
          "question": "¿Puedo crear una lista numerada con el repetidor?",
          "answer": "No de forma automática. Repite primero la línea y luego numera las líneas en otra herramienta, o incluye el número en el texto de origen si todas las copias deben compartir la misma etiqueta."
        },
        {
          "question": "¿Por qué un formulario rechazaría una cadena repetida enorme?",
          "answer": "Muchos formularios limitan la longitud. Si el pegado falla, baja el recuento o reparte el resultado en varios campos. El repetidor no aplica los límites de un formulario remoto."
        },
        {
          "question": "¿La herramienta recorta mi texto antes de repetirlo?",
          "answer": "Conserva los espacios al inicio y al final del origen, salvo que los quites tú. Recorta primero si no quieres copias con relleno."
        },
        {
          "question": "¿Puedo repetir emoji o texto que no esté en inglés?",
          "answer": "Sí. Los caracteres Unicode se repiten igual que las letras latinas. Confirma que la aplicación de destino acepta los caracteres después de pegar."
        },
        {
          "question": "¿Es útil repetir para pruebas de carga?",
          "answer": "A veces los desarrolladores pegan cadenas repetidas largas en campos para comprobar el recorte y el rendimiento. Mantén recuentos razonables para que la pestaña siga siendo usable."
        },
        {
          "question": "¿Qué ocurre si el recuento es cero?",
          "answer": "Un recuento de cero o vacío no debería producir copias. Usa al menos 1 cuando quieras el texto original una vez en el cuadro de resultado."
        },
        {
          "question": "¿Los separadores pueden incluir tabuladores?",
          "answer": "Si la interfaz admite un separador personalizado, un tabulador sirve para columnas pensadas para una hoja de cálculo. Si no, repite con saltos de línea y divide después."
        },
        {
          "question": "¿Se escaparán las etiquetas HTML que hay dentro del texto?",
          "answer": "El repetidor trata las etiquetas como caracteres normales. Pega con cuidado en editores enriquecidos que podrían interpretar el marcado después de copiar el resultado."
        },
        {
          "question": "¿Cómo detengo la generación si el recuento es demasiado alto?",
          "answer": "Cancela o actualiza la pestaña si la página deja de responder. La próxima vez elige un recuento menor y construye la lista por partes."
        },
        {
          "question": "¿El repetidor guarda mis frases?",
          "answer": "No. El trabajo se queda en la sesión de la página para la copia que generas. Vacía el cuadro cuando termines si el texto es sensible."
        }
      ]
    },
    "metaDescription": "Repite una palabra, una frase o una línea de 1 a 200 veces en tu navegador, con espacio o salto de línea entre copias. Nada se envía a un servidor.",
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "Las copias se crean en esta pestaña. El texto no se envía a ningún servidor.",
      "Text to repeat": "Texto a repetir",
      "Repeat count": "Número de repeticiones",
      "From 1 to 200.": "De 1 a 200.",
      "Between copies": "Entre copias",
      "Nothing": "Nada",
      "Space": "Espacio",
      "New line": "Salto de línea",
      "Enter the text to repeat.": "Introduce el texto que quieres repetir.",
      "Keep the text under {0} characters.": "Mantén el texto por debajo de {0} caracteres.",
      "repeat count": "número de repeticiones",
      "Enter a whole number of repeats.": "Introduce un número entero de repeticiones.",
      "Choose a repeat count from {0} to {1}.": "Elige un número de repeticiones de {0} a {1}.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Esa repetición es demasiado larga para esta página. Usa un texto más corto o un número menor."
    }
  }
};

export default data;
