import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Un contador de palabras muestra las palabras, caracteres y oraciones de un texto pegado, junto con una estimación sencilla del tiempo de lectura.",
    "content": {
      "about": "Consulta palabras, caracteres, oraciones, párrafos y un tiempo de lectura aproximado del texto que pegues. Si revisas un pie de foto, un resumen o una publicación corta, verás cómo se actualizan los totales mientras escribes. El tiempo de lectura supone unas 225 palabras por minuto: es una estimación, no una velocidad medida.",
      "howTo": [
        "Pega o escribe texto en el cuadro.",
        "Los recuentos de palabras, caracteres, oraciones y párrafos se actualizan mientras escribes.",
        "Usa «Texto de ejemplo» para probar el contador, «Borrar» para vaciar el cuadro o «Copiar» para copiar tu texto."
      ],
      "examples": [
        {
          "title": "Una oración corta",
          "body": "«Hello world.» son 2 palabras y 1 oración."
        },
        {
          "title": "Líneas en blanco",
          "body": "Un texto separado por una línea vacía cuenta como dos párrafos."
        }
      ],
      "explanation": "Las palabras son grupos de caracteres sin espacios. Los caracteres son puntos de código Unicode, así que letras, signos de puntuación y la mayoría de los emojis cuentan como un carácter cada uno. Las oraciones se separan en . ! ? y …. Los párrafos son bloques no vacíos separados por saltos de línea. El tiempo de lectura usa unas 225 palabras por minuto.",
      "limitations": "Las palabras son grupos de caracteres sin espacios y las oraciones se separan en . ! ? y …. El tiempo de lectura supone unas 225 palabras por minuto: es una estimación, no una velocidad de lectura medida. El contador no revisa la gramática ni identifica al autor.",
      "faqs": [
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
          "answer": "El ritmo al hablar varía, pero de 130 a 150 palabras por minuto es una referencia habitual, así que un discurso de 5 minutos suele tener entre 650 y 750 palabras."
        },
        {
          "question": "¿Cómo se calcula el tiempo de lectura?",
          "answer": "El número de palabras se divide entre unas 225 palabras por minuto. Es una estimación para un lector medio, no una velocidad de lectura medida."
        }
      ]
    },
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
    "answer": "Un contador de caracteres cuenta caracteres, palabras y líneas mientras escribes; el total principal incluye los espacios.",
    "content": {
      "about": "Cuenta caracteres, palabras y líneas, con un total aparte que excluye los espacios. Úsalo cuando un formulario, una publicación en redes sociales o una meta descripción tenga un límite de caracteres. Un emoji cuenta como un carácter y, a diferencia del contador de palabras, esta página no divide el texto en oraciones.",
      "howTo": [
        "Escribe o pega texto en el cuadro.",
        "Los recuentos de caracteres, palabras y líneas se actualizan al instante.",
        "Copia el número de caracteres o vacía el cuadro cuando termines."
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
      "explanation": "Los caracteres se cuentan como puntos de código Unicode. Los espacios se incluyen en el total principal y se excluyen del total «sin espacios». Las líneas siguen los saltos de línea del cuadro, incluida una última línea en blanco.",
      "limitations": "Un carácter es un punto de código Unicode, así que un emoji cuenta como uno aunque se dibuje con varios símbolos. Los espacios se quedan en el total principal y salen del total sin espacios. Aquí no se detectan los límites de las oraciones.",
      "faqs": [
        {
          "question": "¿El contador de caracteres es gratis?",
          "answer": "Sí. Puedes contar caracteres, palabras y líneas mientras escribes sin pagar ni crear una cuenta."
        },
        {
          "question": "¿El texto sale de mi ordenador?",
          "answer": "No. El texto se queda en tu navegador y no se envía a ningún servidor."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. Los recuentos se generan en esta pestaña. Al vaciar el cuadro, el texto desaparece de la página y no se guarda en el almacenamiento local."
        },
        {
          "question": "¿Los espacios cuentan como caracteres?",
          "answer": "Sí, en el total principal. El contador también muestra un segundo total sin espacios, que piden algunos formularios y trabajos."
        },
        {
          "question": "¿Cuántos caracteres tiene un emoji?",
          "answer": "En esta página, un emoji suelto cuenta como un carácter Unicode. Algunas aplicaciones cuentan ciertos emojis como dos o más, así que su límite puede variar un poco."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "Los recuentos se actualizan mientras escribes. El texto se queda en tu navegador.",
      "Type or paste text...": "Escribe o pega texto…",
      "Copy count": "Copiar recuento"
    }
  },
  "case-converter": {
    "answer": "Un conversor de mayúsculas y minúsculas cambia un texto entre mayúsculas, minúsculas, tipo título, camelCase y estilos similares.",
    "content": {
      "about": "Cambia un texto entre mayúsculas, minúsculas, tipo título, tipo oración, camelCase, PascalCase, snake_case y kebab-case. Quien renombra identificadores en código o corrige un titular puede cambiar el formato en un solo paso. El tipo oración sigue la puntuación inglesa, así que no aplica las reglas de mayúsculas de otros idiomas.",
      "howTo": [
        "Pega texto en el cuadro.",
        "Elige un formato. El resultado se actualiza al instante.",
        "Copia el resultado o vacía ambos cuadros."
      ],
      "examples": [
        {
          "title": "Tipo título",
          "body": "«hello world» se convierte en «Hello World». Cada palabra empieza con mayúscula."
        },
        {
          "title": "camelCase",
          "body": "«Hello world example» se convierte en helloWorldExample."
        }
      ],
      "explanation": "Mayúsculas y minúsculas usan las reglas del inglés. El tipo título pone en mayúscula la primera letra de cada palabra. El tipo oración pasa el texto a minúsculas y luego pone mayúscula al principio y tras . ! ? o …: una regla sencilla pensada para el inglés, no un corrector gramatical para cualquier idioma. camelCase, PascalCase, snake_case y kebab-case se forman a partir de grupos de letras y números.",
      "limitations": "El tipo oración sigue la puntuación inglesa, no las reglas de mayúsculas de otros idiomas. camelCase, snake_case y kebab-case conservan los grupos de letras y números y eliminan la puntuación entre ellos.",
      "faqs": [
        {
          "question": "¿El conversor es gratis?",
          "answer": "Sí. Cambiar entre mayúsculas, minúsculas, tipo título y los formatos de código es gratis y sin cuenta."
        },
        {
          "question": "¿El tipo oración funciona en todos los idiomas?",
          "answer": "No. Sigue un patrón básico de puntuación inglesa y no aplica reglas propias de cada idioma."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. El texto que pegas se convierte en esta pestaña. No se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué diferencia hay entre tipo título y tipo oración?",
          "answer": "El tipo título pone en mayúscula la primera letra de cada palabra, como en un titular en inglés. El tipo oración solo pone en mayúscula la primera letra de cada oración, como en un texto normal."
        },
        {
          "question": "¿Qué son camelCase, snake_case y kebab-case?",
          "answer": "Son estilos de nombres usados en programación. camelCase une palabras con mayúsculas (myVariableName), snake_case usa guiones bajos (my_variable_name) y kebab-case usa guiones (my-variable-name)."
        }
      ]
    },
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
      "about": "Genera párrafos, oraciones o palabras de relleno a partir de una lista fija de palabras en latín. Los diseñadores lo usan para llenar una maqueta cuando aún no está el texto real. El primer párrafo empieza con la frase clásica, y cada petición se limita a 20 párrafos, 50 oraciones o 500 palabras.",
      "howTo": [
        "Elige párrafos, oraciones o palabras.",
        "Indica una cantidad dentro de los límites mostrados y pulsa «Generar».",
        "Copia el texto, vuelve a generar o restablece los valores predeterminados."
      ],
      "examples": [
        {
          "title": "Tres párrafos",
          "body": "El primer párrafo empieza con la frase clásica «Lorem ipsum dolor sit amet…» y continúa con palabras mezcladas de una lista local."
        },
        {
          "title": "Cincuenta palabras",
          "body": "Útil como relleno corto en una maqueta."
        }
      ],
      "explanation": "Lorem ipsum es latín desordenado que se usa como texto ficticio para valorar un diseño sin el contenido real. Este generador usa una lista local de palabras y los valores aleatorios criptográficamente seguros del navegador. No llama a ninguna API externa. La cantidad está limitada para que la página siga siendo usable.",
      "limitations": "El resultado es latín de relleno de una lista fija: no es una traducción ni un texto para un producto real. Los párrafos se limitan a 20, las oraciones a 50 y las palabras a 500.",
      "faqs": [
        {
          "question": "¿El generador de lorem ipsum es gratis?",
          "answer": "Sí. Generar párrafos, oraciones o palabras de relleno es gratis y no requiere cuenta."
        },
        {
          "question": "¿El texto se descarga de internet?",
          "answer": "No. Las palabras están guardadas en esta página y se combinan en tu navegador."
        },
        {
          "question": "¿Por qué hay un máximo?",
          "answer": "Los bloques muy grandes pueden congelar una pestaña. Los párrafos se limitan a 20, las oraciones a 50 y las palabras a 500."
        },
        {
          "question": "¿Qué significa lorem ipsum?",
          "answer": "Lorem ipsum es latín desordenado que se usa como texto de relleno. Parece un texto real, así que permite valorar un diseño sin que los lectores se fijen en las palabras."
        },
        {
          "question": "¿Cuándo debo usar texto de relleno?",
          "answer": "En maquetas, plantillas y pruebas de fuentes. Sustitúyelo por el texto real antes de publicar la página, porque el relleno no dice nada a los visitantes."
        }
      ]
    },
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
    "answer": "Un comparador de textos compara el texto original y el modificado en tu dispositivo y marca las líneas o palabras añadidas, eliminadas y sin cambios.",
    "content": {
      "about": "Pega un original y una revisión y compáralos por líneas o por palabras. Al revisar dos borradores del mismo párrafo, usa el modo de líneas para cambios de líneas completas y el de palabras cuando una oración se editó en el mismo sitio. Cada lado debe tener menos de 200.000 caracteres y menos de 4.000 líneas o palabras.",
      "howTo": [
        "Pega el texto original a la izquierda y el modificado a la derecha.",
        "Elige comparar por líneas o por palabras.",
        "Pulsa «Comparar». Los bloques añadidos, eliminados y sin cambios llevan etiqueta, no solo color.",
        "Copia el diff en texto plano si lo necesitas en otro editor. Vacía ambos lados al terminar."
      ],
      "examples": [
        {
          "title": "Dos versiones de un párrafo",
          "body": "El modo de líneas resalta las líneas completas que cambiaron. El de palabras es mejor cuando una oración se editó en el mismo sitio."
        },
        {
          "title": "Textos idénticos",
          "body": "Si ambos lados coinciden, el resumen muestra solo contenido sin cambios y ningún bloque añadido o eliminado."
        }
      ],
      "explanation": "La comparación se hace en tu navegador. El texto no se envía a ninguna parte y los borradores no se guardan en el almacenamiento local. Las diferencias se muestran como nodos de texto de React, así que el contenido no puede inyectar HTML. Las entradas muy grandes se rechazan para que la pestaña siga respondiendo.",
      "limitations": "Según el modo, cada lado debe tener menos de 200.000 caracteres y menos de 4.000 líneas o palabras. La vista etiqueta los bloques añadidos, eliminados y sin cambios. No combina archivos ni abre documentos de Word.",
      "faqs": [
        {
          "question": "¿El comparador de textos es gratis?",
          "answer": "Sí. Comparar dos textos por líneas o por palabras es gratis y no necesitas cuenta."
        },
        {
          "question": "¿Cómo comparo dos archivos de texto?",
          "answer": "Pega cada versión en un panel, elige Líneas o Palabras y pulsa «Comparar». Puedes copiar una vista +/- del resultado."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. Los dos paneles se comparan en esta pestaña. El texto no se envía a ningún servidor ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué es un diff?",
          "answer": "Un diff es una lista de las diferencias entre dos versiones de un texto: lo que se añadió, lo que se quitó y lo que se mantuvo igual."
        },
        {
          "question": "¿Uso el modo por líneas o por palabras?",
          "answer": "Usa el modo por líneas para código, listas y archivos donde cambian líneas enteras. Usa el modo por palabras cuando se editó una frase sin moverla."
        }
      ]
    },
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
      "about": "Conserva la primera copia de cada línea y elimina las repeticiones, en el orden en que las pegaste. Úsalo con una lista de correo o un registro donde la misma fila aparece varias veces. Sin distinguir mayúsculas y con recorte, apple y Apple se convierten en una sola línea, y se queda la primera forma escrita.",
      "howTo": [
        "Pega texto de varias líneas. No se modifica hasta que ejecutes la herramienta.",
        "Si quieres, compara sin distinguir mayúsculas, recorta espacios antes de comparar o descarta las líneas vacías.",
        "Pulsa «Eliminar duplicados». Se conserva la primera aparición de cada línea, en orden.",
        "Copia o descarga la lista única. Vacía ambos cuadros al terminar."
      ],
      "examples": [
        {
          "title": "Una lista de correo",
          "body": "apple, Apple, apple con recorte y sin distinguir mayúsculas quedan en un solo apple, con la primera forma que pegaste."
        },
        {
          "title": "Líneas en blanco",
          "body": "Activa «Eliminar líneas vacías» si solo quieres filas únicas no vacías. Si no, una línea vacía es un valor como cualquier otro."
        }
      ],
      "explanation": "Cada línea recibe una clave según las opciones de comparación. La primera vez que aparece una clave, la línea se conserva; las repeticiones posteriores se cuentan como duplicados eliminados. Se mantiene el orden de las primeras apariciones.",
      "limitations": "Se conserva la primera línea coincidente, en el orden en que pegaste. Las opciones de mayúsculas, recorte y líneas vacías cambian lo que cuenta como la misma línea. Las repeticiones posteriores se cuentan y se descartan. Se rechazan más de 400.000 caracteres. El cuadro de entrada no se reescribe.",
      "faqs": [
        {
          "question": "¿La herramienta es gratis?",
          "answer": "Sí. Eliminar líneas repetidas conservando la primera copia es gratis y sin registro."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. La eliminación de duplicados se hace en esta pestaña. La lista no se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Cambia el cuadro original?",
          "answer": "No. La entrada queda tal como la pegaste. La lista única aparece en el cuadro de resultado después de ejecutar la operación."
        },
        {
          "question": "¿Cómo quito los duplicados de una lista?",
          "answer": "Pega la lista con un elemento por línea y ejecuta la herramienta. Se conserva la primera aparición de cada línea en su orden original y se eliminan las repeticiones posteriores."
        },
        {
          "question": "¿Puede ignorar diferencias de mayúsculas o espacios?",
          "answer": "Sí. Activa las opciones de mayúsculas y de recorte para que líneas como Apple y apple, o líneas con espacios de más, cuenten como iguales."
        }
      ]
    },
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
    "answer": "Un eliminador de espacios recorta líneas, reduce espacios, convierte tabulaciones y limpia líneas en blanco según las opciones que elijas.",
    "content": {
      "about": "Limpia espacios, tabulaciones y líneas en blanco sobrantes usando solo las opciones que actives. Úsalo con un registro pegado o una lista con sangrías perdidas. «Recortar cada línea» prevalece sobre las casillas separadas de inicio y final, y si dejas esas opciones desactivadas se conserva la sangría.",
      "howTo": [
        "Pega texto con espacios, tabulaciones o líneas en blanco de más.",
        "Selecciona solo las limpiezas que quieras. No pasa nada hasta que pulses «Limpiar texto».",
        "Revisa los recuentos de líneas y caracteres y copia o descarga el resultado.",
        "Vacía los cuadros para descartar el texto. No se guarda."
      ],
      "examples": [
        {
          "title": "Líneas de registro con sangría",
          "body": "Recorta cada línea, o quita solo los espacios iniciales si necesitas conservar los finales."
        },
        {
          "title": "Tabulaciones y espacios mezclados",
          "body": "Convierte las tabulaciones en 2 o 4 espacios y luego reduce los espacios repetidos si quieres espacios simples."
        }
      ],
      "explanation": "Cada opción es explícita. «Recortar cada línea» prevalece sobre las casillas de inicio y final en esa pasada. «Eliminar líneas en blanco» quita todas las filas vacías; reducir líneas en blanco deja una sola fila vacía entre bloques.",
      "limitations": "Solo se aplican las opciones que actives. «Recortar cada línea» prevalece sobre las casillas de inicio y final en esa pasada. «Eliminar líneas en blanco» quita todas las filas vacías, mientras que reducirlas deja una entre bloques. Se rechazan más de 400.000 caracteres.",
      "faqs": [
        {
          "question": "¿El eliminador de espacios es gratis?",
          "answer": "Sí. Limpiar espacios, tabulaciones y líneas en blanco sobrantes es gratis y no requiere cuenta."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. La limpieza se queda en esta pestaña. El texto no se envía a ninguna parte ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Destruirá mi sangría?",
          "answer": "Solo si activas el recorte, la eliminación de espacios iniciales o la conversión de tabulaciones. Déjalas desactivadas para conservarla."
        },
        {
          "question": "¿Cómo quito los espacios dobles de un texto?",
          "answer": "Activa la opción que une los espacios repetidos. Las series de espacios dentro de cada línea se convierten en un solo espacio."
        },
        {
          "question": "¿Cómo borro las líneas vacías?",
          "answer": "Usa «eliminar líneas en blanco» para quitar todas las líneas vacías, o «unir líneas en blanco» para dejar una sola línea vacía entre párrafos."
        }
      ]
    },
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
    "answer": "Un ordenador de líneas ordena texto de varias líneas alfabéticamente, numéricamente o por longitud, con eliminación opcional de duplicados.",
    "content": {
      "about": "Ordena un elemento por línea de la A a la Z, de la Z a la A, por un número inicial o por longitud. Úsalo cuando una lista de nombres o una exportación numerada deba quedar en orden sin usar una hoja de cálculo. En orden numérico, 10 va después de 2, y una línea sin número inicial va después de las numeradas.",
      "howTo": [
        "Pega un elemento por línea.",
        "Elige A→Z, Z→A, orden numérico o longitud. Ajusta mayúsculas, recorte, líneas vacías y duplicados según necesites.",
        "Pulsa «Ordenar líneas». Los elementos iguales mantienen su orden relativo original.",
        "Copia o descarga la lista ordenada."
      ],
      "examples": [
        {
          "title": "Nombres",
          "body": "A→Z sin distinguir mayúsculas pone ada y Ada juntas y, cuando son iguales, mantiene primero la forma que apareció antes."
        },
        {
          "title": "Filas numeradas",
          "body": "«Numérico ascendente» lee un número inicial, así que 10 va después de 2. Las líneas sin número van después de las numeradas."
        }
      ],
      "explanation": "La ordenación es estable: cuando dos líneas son iguales, la que se introdujo antes queda primero. Los modos numéricos leen un entero o decimal al inicio. La eliminación opcional de duplicados usa la misma clave de comparación que las opciones de mayúsculas y recorte.",
      "limitations": "Los modos son A a Z, Z a A, numérico ascendente, numérico descendente, más corta y más larga. Las líneas iguales mantienen su orden original. El modo numérico lee un número inicial, y una línea sin él va después de las numeradas. Se rechazan más de 400.000 caracteres.",
      "faqs": [
        {
          "question": "¿El ordenador de líneas es gratis?",
          "answer": "Sí. Ordenar una lista de líneas es gratis y sin cuenta."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. La ordenación se hace en esta pestaña. Las líneas no se envían a ningún servidor ni se guardan en el almacenamiento local."
        },
        {
          "question": "¿Se conservan las líneas vacías?",
          "answer": "Sí, salvo que elijas «Ignorar líneas vacías». En los modos alfabéticos se ordenan como cadenas vacías."
        },
        {
          "question": "¿Cómo ordeno una lista alfabéticamente?",
          "answer": "Pega un elemento por línea y elige de la A a la Z, o de la Z a la A para el orden inverso. Las líneas iguales mantienen su orden original."
        },
        {
          "question": "¿Cómo ordeno líneas por número?",
          "answer": "Elige numérico ascendente o descendente. Cada línea se ordena por el número del principio, así que 2 va antes que 10."
        }
      ]
    },
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
    "answer": "Buscar y reemplazar cambia la primera coincidencia o todas en el texto que pegues. Puedes activar o desactivar la distinción entre mayúsculas y minúsculas.",
    "content": {
      "about": "Pega un texto, escribe qué buscar y el texto de reemplazo. Puedes cambiar la primera coincidencia o todas, e ignorar mayúsculas y minúsculas.",
      "howTo": [
        "Pega el texto original.",
        "Escribe el texto que quieres buscar. Un campo de búsqueda vacío se rechaza.",
        "Escribe el reemplazo. Déjalo vacío si quieres borrar las coincidencias.",
        "Elige «Reemplazar la primera» o «Reemplazar todas» y activa o desactiva «Distinguir mayúsculas».",
        "Pulsa «Reemplazar» y copia el resultado o vacía el formulario."
      ],
      "features": [
        "La primera coincidencia o todas las que no se solapan.",
        "Búsqueda que distingue mayúsculas o no; el reemplazo siempre se inserta tal como lo escribiste.",
        "El número de reemplazos realizados."
      ],
      "examples": [
        {
          "title": "Corregir un nombre repetido",
          "body": "Original: «Ana sent the file. ana sent the notes.» Buscar: ana. Reemplazo: Ana. Sin distinguir mayúsculas, «Reemplazar todas». Ambos nombres quedan como Ana y el recuento es 2."
        },
        {
          "title": "Cambiar solo el primer título",
          "body": "Un borrador repite «Draft» tres veces. «Reemplazar la primera» cambia la primera y deja las otras dos. El recuento es 1."
        }
      ],
      "explanation": "La búsqueda recorre el texto original desde el principio. Tras una coincidencia, la siguiente búsqueda empieza después de ella, así que un reemplazo no se vuelve a buscar. El modo sin distinguir mayúsculas compara copias en minúsculas sin cambiar el texto de alrededor.",
      "tips": [
        "Si necesitas un patrón como «cualquier número», usa el probador de regex. Esta herramienta busca exactamente los caracteres que escribes.",
        "Un reemplazo que contiene el texto buscado se inserta tal cual y no se vuelve a reemplazar en la misma pasada."
      ],
      "limitations": "No es una expresión regular. No respeta límites de palabra ni omite el texto entre comillas. Las coincidencias solapadas no se cuentan dos veces.",
      "faqs": [
        {
          "question": "¿Puedo borrar las coincidencias?",
          "answer": "Sí. Deja vacío el reemplazo. Cada coincidencia se elimina y sigue contando como un reemplazo."
        },
        {
          "question": "¿Por qué cambió una palabra corta dentro de una más larga?",
          "answer": "La búsqueda es por caracteres. Buscar «cat» también coincide con el inicio de «catalog». Añade espacios si solo quieres la palabra completa, o usa el probador de regex con un límite de palabra."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. El texto y la búsqueda se quedan en esta pestaña. No se envían a ningún servidor."
        },
        {
          "question": "¿Cómo reemplazo una palabra en todo un texto?",
          "answer": "Escribe la palabra que buscas y su reemplazo, elige «Reemplazar todo» y copia el resultado. Activa la distinción de mayúsculas si importan."
        },
        {
          "question": "¿Buscar y reemplazar admite expresiones regulares?",
          "answer": "No. Busca exactamente el texto que escribes. Para buscar patrones, prueba antes el patrón en el probador de regex."
        }
      ]
    },
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
    "answer": "Eliminar saltos de línea une las líneas cortadas con espacios, borra los saltos o deja una línea en blanco entre párrafos.",
    "content": {
      "about": "Pega un texto que se cortó en muchas líneas. Puedes unir esas líneas con espacios, borrar los saltos o dejar una línea en blanco entre párrafos.",
      "howTo": [
        "Pega el texto original. El cuadro mantiene los saltos de línea para que los veas.",
        "Elige una opción: reemplazar los saltos por espacios, eliminarlos o conservar los saltos de párrafo.",
        "Pulsa «Limpiar texto».",
        "Copia el texto limpio o vacía ambos cuadros."
      ],
      "features": [
        "El original se queda en el primer cuadro y el texto limpio aparece aparte.",
        "El modo de espacios une las líneas y reduce los espacios repetidos.",
        "El modo de párrafos conserva una línea en blanco donde ya había una."
      ],
      "examples": [
        {
          "title": "Un correo cortado",
          "body": "Tres líneas cortas de una misma oración pasan a ser una sola línea con espacios simples entre palabras si eliges «Reemplazar saltos de línea por espacios»."
        },
        {
          "title": "Dos párrafos",
          "body": "Un bloque, una línea en blanco y otro bloque. «Conservar saltos de párrafo» une las líneas de cada bloque y deja una línea en blanco entre ellos."
        }
      ],
      "explanation": "Los finales de línea de Windows y de los Mac antiguos se tratan como el mismo salto. El modo de espacios convierte cada serie de saltos en un espacio y luego recorta los extremos. El modo de eliminación borra los saltos y puede pegar la última palabra de una línea con la primera de la siguiente. El modo de párrafos divide primero por líneas en blanco y luego une las líneas de cada párrafo.",
      "tips": [
        "Usa espacios para prosa. Usa eliminar solo cuando los saltos se metieron dentro de un elemento, como un número largo dividido en varias líneas.",
        "Si un poema o una lista debe conservar sus líneas, no uses esta herramienta con ellos."
      ],
      "limitations": "La herramienta no distingue una oración cortada de una lista. En modo de párrafos, un salto de línea simple se trata como corte. Solo una línea en blanco separa los párrafos.",
      "faqs": [
        {
          "question": "¿Se quitan los espacios dentro de una línea?",
          "answer": "El modo de espacios reduce los espacios y tabulaciones repetidos. Los modos de eliminación y de párrafos dejan los espacios que ya había dentro de una línea."
        },
        {
          "question": "¿Y si solo pego espacios?",
          "answer": "La página te pide que pegues texto. Solo espacios en blanco no bastan."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. El texto pegado se reescribe en esta pestaña. No se sube."
        },
        {
          "question": "¿Cómo quito los saltos de línea de un texto copiado de un PDF?",
          "answer": "Pega el texto y elige la opción que conserva los párrafos. Los saltos simples dentro de un párrafo se convierten en espacios y las líneas en blanco entre párrafos se mantienen."
        },
        {
          "question": "¿Qué diferencia hay entre reemplazar y quitar saltos de línea?",
          "answer": "Reemplazar convierte cada salto en un espacio, así que las palabras quedan separadas. Quitar elimina el salto, lo que une el final de una línea con el inicio de la siguiente."
        }
      ]
    },
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
    "answer": "Añadir números de línea coloca un número y un separador delante de cada línea sin cambiar la línea.",
    "content": {
      "about": "Pega varias líneas y pon un número delante de cada una. Tú eliges el número inicial y los caracteres entre el número y la línea.",
      "howTo": [
        "Pega el texto. Cada línea queda tal como la escribiste.",
        "Indica el número inicial. Lo habitual es 1; también se admite un entero menor que 0.",
        "Indica el separador. Por defecto es un punto y un espacio.",
        "Pulsa «Añadir números» y copia las líneas numeradas o vacía el formulario."
      ],
      "features": [
        "El texto de la línea no se recorta ni se reescribe.",
        "Un separador personalizado, como \") \" o una tabulación.",
        "Un número inicial distinto de 1."
      ],
      "examples": [
        {
          "title": "Una lista de tres líneas",
          "body": "Las líneas «Primera línea», «Segunda línea» y «Tercera línea», con inicio 1 y separador «. », pasan a «1. Primera línea», «2. Segunda línea» y «3. Tercera línea»."
        },
        {
          "title": "Continuar una lista en 10",
          "body": "Con número inicial 10 y separador \") \", la primera línea pegada pasa a «10) » más la línea original."
        }
      ],
      "explanation": "El texto se divide en los saltos de línea. Cada línea recibe el número inicial más su posición, luego el separador y después los caracteres originales. Las líneas vacías también se numeran, porque siguen siendo líneas.",
      "tips": [
        "Si el texto ya tiene números, quítalos primero o tendrás dos números en cada línea.",
        "Usa una tabulación como separador si quieres pegar el resultado en una hoja de cálculo."
      ],
      "limitations": "Un salto de línea final crea una última línea vacía, que también se numera. Los ajustes automáticos del cuadro no son líneas nuevas; solo cuentan los saltos de línea reales.",
      "faqs": [
        {
          "question": "¿Cambia la ortografía o los espacios?",
          "answer": "No. Los caracteres después del separador son la línea original."
        },
        {
          "question": "¿Puedo empezar en 0?",
          "answer": "Sí. Se admiten 0 y enteros negativos. Un decimal como 1,5 no."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. Las líneas y el número inicial se quedan en esta pestaña. No se envían a ningún servidor."
        },
        {
          "question": "¿Cómo numero las líneas de un texto?",
          "answer": "Pega el texto, define el número inicial y el separador, como un punto y un espacio, añade los números y copia el resultado."
        },
        {
          "question": "¿Se numeran las líneas vacías?",
          "answer": "Sí. Cada salto de línea real empieza una nueva línea numerada, incluidas las líneas vacías y una línea vacía al final."
        }
      ]
    },
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
    "answer": "Un conversor de números a letras escribe en inglés los números enteros de -999.999.999 a 999.999.999. También puede leer palabras numéricas sencillas en inglés y devolver el número.",
    "content": {
      "about": "Escribe un número entero en inglés con letras o convierte palabras numéricas sencillas en inglés de nuevo en un número. El rango va de -999.999.999 a 999.999.999.",
      "howTo": [
        "Elige número a letras o letras a número.",
        "Escribe el número o las palabras.",
        "Pulsa «Convertir»."
      ],
      "features": [
        "Números enteros hasta los millones.",
        "Números negativos y cero.",
        "Lectura inversa de palabras sencillas en inglés."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "En inglés: one thousand two hundred thirty-four."
        }
      ],
      "explanation": "El conversor agrupa el número en millones, miles y el resto. Las decenas y unidades de 21 a 99 llevan guion. No se usa la palabra «and». Los ceros iniciales se ignoran, así que 007 es seven.",
      "tips": [
        "Escribe twenty-one con guion o como twenty one.",
        "Usa minus para un número negativo."
      ],
      "limitations": "Los decimales, los miles de millones y las frases con la palabra «and» quedan fuera de este conversor. El resultado siempre está en inglés, no en español.",
      "faqs": [
        {
          "question": "¿Cómo se escribe un número con letras?",
          "answer": "La página agrupa millones, miles y centenas y luego escribe las decenas y unidades. 123 es one hundred twenty-three."
        },
        {
          "question": "¿Qué rango se admite?",
          "answer": "Números enteros de -999.999.999 a 999.999.999."
        },
        {
          "question": "¿Qué pasa con los ceros iniciales?",
          "answer": "Se ignoran. 007 es seven."
        },
        {
          "question": "¿Se pueden convertir decimales?",
          "answer": "No. Introduce un número entero."
        },
        {
          "question": "¿Se pueden convertir palabras en un número?",
          "answer": "Sí, con palabras sencillas en inglés dentro de este rango, como one hundred twenty-three o minus twenty."
        },
        {
          "question": "¿Se envían estos números a un servidor?",
          "answer": "No. El número o las palabras se quedan en esta pestaña mientras se convierten. No se suben."
        }
      ]
    },
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
    "answer": "Un traductor de código Morse convierte texto de A–Z y 0–9 a Morse internacional o lee Morse y lo convierte en texto. Las letras se separan con espacios y las palabras con una barra.",
    "content": {
      "about": "Convierte letras y dígitos a código Morse internacional, o Morse de nuevo a texto.",
      "howTo": [
        "Elige texto a Morse o Morse a texto.",
        "Escribe A–Z, 0–9 o Morse con puntos, rayas, espacios y /.",
        "Pulsa «Convertir»."
      ],
      "features": [
        "A–Z y 0–9.",
        "Espacios entre letras y / entre palabras.",
        "Un error claro ante un carácter no admitido."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO es .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Cada letra y dígito tiene un patrón Morse internacional. Un espacio separa letras y una barra separa palabras. Las minúsculas se leen como mayúsculas. Un carácter fuera de A–Z y 0–9 detiene la conversión.",
      "tips": [
        "SOS se escribe ... --- ...",
        "Deja un espacio entre las letras Morse."
      ],
      "limitations": "La puntuación y las letras fuera de A–Z (como ñ o las vocales con tilde) no se convierten. Un patrón Morse desconocido se rechaza.",
      "faqs": [
        {
          "question": "¿Cómo se escribe un texto en código Morse?",
          "answer": "Cada letra se convierte en su patrón Morse internacional. Las letras se separan con un espacio y las palabras con /."
        },
        {
          "question": "¿Funciona con minúsculas?",
          "answer": "Sí. Las minúsculas se leen como mayúsculas."
        },
        {
          "question": "¿Qué separa las palabras?",
          "answer": "Una barra separa las palabras. Un espacio separa las letras dentro de una palabra."
        },
        {
          "question": "¿Y si escribo signos de puntuación?",
          "answer": "La página indica el carácter no admitido y no adivina un código para él."
        },
        {
          "question": "¿El texto se envía a algún sitio?",
          "answer": "No. La conversión se hace en tu navegador."
        },
        {
          "question": "¿Se envían los datos a un servidor?",
          "answer": "No. Las letras y los patrones Morse se convierten en esta pestaña. No se envían a ningún servidor."
        }
      ]
    },
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
    "answer": "Un conversor de números romanos convierte números enteros de 1 a 3999 en números romanos estándar y lee esos números de vuelta. Los valores mayores que 3999 no se admiten.",
    "content": {
      "about": "Convierte números enteros de 1 a 3999 en números romanos estándar, y esos números romanos de nuevo en números.",
      "howTo": [
        "Elige número a romano o romano a número.",
        "Escribe un número de 1 a 3999, o un número romano con I, V, X, L, C, D y M.",
        "Pulsa «Convertir»."
      ],
      "features": [
        "Notación sustractiva estándar.",
        "Conversión inversa.",
        "Rechazo de números romanos que no están en forma estándar."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 es MCMXCIV."
        }
      ],
      "explanation": "La página forma los números con M, CM, D, CD, C, XC, L, XL, X, IX, V, IV e I. Una cadena romana solo se acepta si es la forma estándar de su valor. IIII, IC e IL se rechazan. Los números mayores que 3999, incluida la notación con vínculo, no se admiten.",
      "tips": [
        "4 es IV, no IIII.",
        "9 es IX, no VIIII."
      ],
      "limitations": "El rango es de 1 a 3999. El cero, los negativos y los números mayores se rechazan.",
      "faqs": [
        {
          "question": "¿Cómo se convierte un número en romano?",
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
          "question": "¿Se pueden convertir números mayores que 3999?",
          "answer": "No. La notación extendida para números grandes no se admite."
        },
        {
          "question": "¿Se puede convertir un número romano en número?",
          "answer": "Sí, si es un número romano estándar de 1 a 3999."
        },
        {
          "question": "¿Se envían estos números a un servidor?",
          "answer": "No. El número o el número romano se convierte en esta pestaña. No se sube."
        }
      ]
    },
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
    "answer": "Un repetidor de texto copia una palabra, frase o línea de 1 a 200 veces, sin nada, con un espacio o con un salto de línea entre las copias.",
    "content": {
      "about": "Repite una palabra, frase o línea de 1 a 200 veces. Pon nada, un espacio o un salto de línea entre las copias. El texto de origen puede tener hasta 5.000 caracteres y el resultado unido hasta 100.000.",
      "howTo": [
        "Escribe el texto que quieres repetir. Un cuadro vacío se rechaza.",
        "Escribe un número entero de 1 a 200.",
        "Elige nada, un espacio o un salto de línea entre copias y pulsa «Repetir»."
      ],
      "features": [
        "Una sola copia cuando el número es 1, sin separador extra.",
        "Un espacio o salto de línea solo entre copias, no después de la última.",
        "Un límite de longitud para que un resultado enorme no llene la página."
      ],
      "examples": [
        {
          "title": "Una palabra tres veces",
          "body": "ha, número 3, con un espacio entre copias, da ha ha ha."
        },
        {
          "title": "Una línea dos veces",
          "body": "Listo, número 2, con un salto de línea entre copias, da Listo en una línea y Listo en la siguiente."
        }
      ],
      "explanation": "La página copia el texto las veces que pidas y une las copias con el separador elegido. No genera latín de relleno ni elimina duplicados.",
      "tips": [
        "Usa un salto de línea para obtener una lista de filas idénticas y un espacio para tenerlo todo en una línea."
      ],
      "limitations": "El texto de origen puede tener hasta 5.000 caracteres, el número hasta 200 y el resultado unido hasta 100.000 caracteres. Un resultado más largo se rechaza.",
      "faqs": [
        {
          "question": "¿El repetidor de texto es gratis?",
          "answer": "Sí. Puedes repetir texto aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Un número 1 añade un separador?",
          "answer": "No. Una copia es exactamente el texto que escribiste, sin añadidos."
        },
        {
          "question": "¿Puedo repetir una línea en blanco?",
          "answer": "Un cuadro vacío se rechaza. Una línea que solo tiene espacios se admite, porque esos espacios son texto."
        },
        {
          "question": "¿Se envía el texto a un servidor?",
          "answer": "No. Las copias se crean en esta pestaña del navegador. Tools Star Hub no envía ese texto a ningún servidor ni lo guarda en el almacenamiento local."
        }
      ]
    },
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
