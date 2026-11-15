import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "json-formatter": {
    "answer": "Un formateador JSON comprueba si el JSON es válido y luego lo embellece o lo minifica en tu navegador.",
    "content": {
      "about": "El formateador JSON embellece JSON, lo minifica o comprueba que se analice. Úsalo cuando la respuesta de una API es una sola línea larga, o cuando un archivo falla y necesitas la posición del analizador. La página usa el analizador JSON del navegador. Los comentarios, las comas finales y las comillas simples fallan. Esta página no convierte JSON a CSV.",
      "howTo": [
        "Pega JSON en el recuadro de entrada.",
        "Pulsa Formatear para embellecerlo con sangría de dos espacios, Minificar para quitar los espacios de más, o Validar para comprobar la sintaxis sin reescribirlo.",
        "Copia el resultado, o Restablecer para vaciar ambos recuadros."
      ],
      "examples": [
        {
          "title": "Un objeto pequeño, formateado y minificado",
          "body": "Formatear convierte {\"name\":\"Ada\",\"id\":1} en un objeto de cuatro líneas: una llave de apertura, luego \"name\": \"Ada\", luego \"id\": 1 y una llave de cierre, con sangría de dos espacios. Minificar esa forma embellecida devuelve {\"name\":\"Ada\",\"id\":1}. Validar la misma entrada dice: Este JSON es válido. Las claves y los valores no cambian."
        },
        {
          "title": "Una coma final",
          "body": "La entrada {\"a\":1,} no se formatea. La página indica JSON no válido en la posición 7 y luego el mensaje del analizador del navegador. La posición 7 es el carácter posterior a la coma, donde debería empezar un nombre de propiedad. Elimina la coma antes de la llave de cierre."
        },
        {
          "title": "Un comentario y comillas simples",
          "body": "{\"a\":1} // no falla en la posición 8, que es la barra posterior al objeto. {'a':1} falla en la posición 1, porque una clave JSON debe usar comillas dobles. La página no elimina comentarios ni convierte comillas. Corrige el texto y vuelve a pulsar Formatear."
        }
      ],
      "explanation": "JSON es texto para objetos, matrices, cadenas, números, true, false y null. Formatear y Minificar analizan el texto y luego lo vuelven a serializar. Formatear usa sangría de dos espacios. Minificar no añade espacios de más. Validar solo analiza, y si acierta muestra la frase Este JSON es válido. Un recuadro vacío dice: Pega JSON para formatear, minificar o validar. Se rechaza un documento de más de 750 000 caracteres antes de analizarlo.",
      "sections": [
        {
          "heading": "Lo que acepta el analizador",
          "paragraphs": [
            "Las claves y las cadenas usan comillas dobles. Los números son dígitos simples, con una fracción o un exponente opcionales. No se permiten comas finales después del último elemento de un objeto o una matriz. Los comentarios, incluidos // y /* */, no forman parte de JSON.",
            "Las comillas simples son una costumbre de JavaScript, no de JSON. {'a':1} falla. Undefined y las funciones no son valores JSON. Una coma final en un archivo escrito a mano es el motivo más habitual de que Formatear falle en un objeto por lo demás familiar."
          ]
        },
        {
          "heading": "Embellecer frente a minificar",
          "paragraphs": [
            "Embellecer añade saltos de línea y sangría para que una persona vea la estructura. Minificar quita ese espacio en blanco para que el texto sea más corto al pegarlo. Los datos son los mismos si ambas operaciones aciertan.",
            "La serialización puede cambiar la escritura de un número que JavaScript no puede almacenar con exactitud, y omite los valores undefined de un objeto si aparecen después de un análisis correcto de un script más grande que convertiste a mano. Los números y las cadenas JSON habituales ida y vuelta se conservan. La página no ordena las claves."
          ]
        },
        {
          "heading": "Cómo usar la posición del error",
          "paragraphs": [
            "Cuando el navegador indica una posición, el mensaje empieza con JSON no válido en la posición y luego el texto del analizador. Cuenta desde el inicio del texto pegado, empezando en 0 en el mensaje habitual del analizador, y mira ese carácter. La posición 7 en {\"a\":1,} es el punto posterior a la coma.",
            "Si el mensaje no tiene posición, la página igualmente indica JSON no válido e incluye el texto del analizador. El recuadro no se reescribe cuando el análisis falla. La salida anterior se queda hasta un acierto posterior, así que lee el error antes de confiar en el recuadro de salida."
          ]
        },
        {
          "heading": "Privacidad",
          "paragraphs": [
            "El análisis y el formateo ocurren en tu navegador. El JSON no se sube a Tools Star Hub y no se guarda en el almacenamiento local. No pegues secretos que no quieras en la memoria de la página mientras la pestaña esté abierta. Cerrar la pestaña o pulsar Restablecer quita el texto de la página."
          ]
        }
      ],
      "tips": [
        "Valida primero cuando solo necesites un sí o un no. Formatea cuando necesites leer la estructura. Minifica cuando necesites una sola línea.",
        "Mira un carácter a la izquierda de la posición indicada. Una coma final señala el carácter siguiente, no la coma en sí.",
        "Sustituye tú mismo las comillas simples por comillas dobles. La herramienta no adivinará cuáles son claves.",
        "Para un archivo CSV, usa la herramienta [JSON a CSV](/tools/json-to-csv) cuando el JSON ya sea válido. Esta página se detiene en el formateo."
      ],
      "limitations": "Se exige JSON estándar: comillas dobles, sin comentarios y sin comas finales. Se rechaza un documento de más de 750 000 caracteres. Este formateador no convierte JSON a CSV y no carga una URL. El texto del error sale del analizador del navegador, así que la redacción posterior a la posición puede variar un poco según el navegador. El número de posición es el que indica el analizador.",
      "faqs": [
        {
          "question": "¿Cómo formateo JSON?",
          "answer": "Pega el JSON y pulsa Formatear. {\"name\":\"Ada\",\"id\":1} se convierte en un objeto con sangría de dos espacios, con name e id en sus propias líneas. Los valores siguen siendo Ada y 1."
        },
        {
          "question": "¿Cuál es la diferencia entre formatear y minificar JSON?",
          "answer": "Formatear añade saltos de línea y sangría de dos espacios. Minificar quita ese espacio en blanco. Minificar el objeto embellecido de Ada devuelve {\"name\":\"Ada\",\"id\":1}. Los datos son los mismos."
        },
        {
          "question": "¿Por qué falló el formateo?",
          "answer": "El JSON debe usar comillas dobles y no puede incluir comas finales ni comentarios. {\"a\":1,} se indica como JSON no válido en la posición 7. Un comentario // después de un objeto falla en la barra. {'a':1} falla en la posición 1."
        },
        {
          "question": "¿Qué hace Validar?",
          "answer": "Validar analiza el texto y, si acierta, muestra: Este JSON es válido. No embellece ni minifica. Un recuadro vacío te pide que pegues JSON."
        },
        {
          "question": "¿Hay un límite de tamaño?",
          "answer": "Sí. Se rechaza un texto de más de 750 000 caracteres, con un mensaje de que es demasiado grande para procesarlo en el navegador. Divide el documento y formatea un fragmento más pequeño."
        },
        {
          "question": "¿Se sube mi JSON?",
          "answer": "No. El análisis y el formateo ocurren en tu navegador."
        },
        {
          "question": "¿Cómo embellezco JSON en el navegador?",
          "answer": "Pega el JSON, ejecuta formatear y copia el resultado con sangría. Embellecer añade espacio en blanco para que los objetos y las matrices se lean mejor."
        },
        {
          "question": "¿Cómo minifico JSON para el cuerpo de una API?",
          "answer": "Usa la acción minificar para quitar el espacio en blanco innecesario y conservar una estructura válida. Los cuerpos más pequeños se transfieren más rápido."
        },
        {
          "question": "¿Por qué mi JSON no es válido?",
          "answer": "Las comas finales, las comillas simples o las claves sin comillas son problemas habituales. El validador señala cerca del primer error de sintaxis."
        },
        {
          "question": "¿Puedo formatear JSON5 u objetos de JavaScript?",
          "answer": "El JSON estricto no admite comentarios ni comas finales. Elimina esas características antes de que un formateador estándar acepte el texto."
        },
        {
          "question": "¿Ordenar las claves cambia el significado?",
          "answer": "Para la mayoría de las API, el orden de las claves no importa. Las claves ordenadas ayudan a comparar a simple vista dos cuerpos."
        },
        {
          "question": "¿Qué tan grande puede ser el archivo que pego?",
          "answer": "La memoria del navegador marca un límite práctico. Los documentos muy grandes pueden congelar la pestaña: divídelos o usa un editor de escritorio."
        },
        {
          "question": "¿El JSON formateado son los mismos datos que el minificado?",
          "answer": "Sí, cuando ambos se analizan correctamente. Solo cambian el espacio en blanco y, de forma opcional, el orden de las claves."
        },
        {
          "question": "¿Puedo validar sin cambiar la sangría?",
          "answer": "Usa solo validar cuando esté disponible. Comprueba la sintaxis sin reescribir lo que pegaste."
        },
        {
          "question": "¿Qué pasa con los caracteres UTF-8 en las cadenas?",
          "answer": "JSON admite escapes Unicode y UTF-8 literal en las cadenas. Mantén la codificación del archivo coherente con tu API."
        },
        {
          "question": "¿Por qué las secuencias de escape se vieron mal después de formatear?",
          "answer": "Los formateadores conservan el contenido de las cadenas; si los escapes ya estaban mal, embellecer no inventará los correctos."
        },
        {
          "question": "¿Cómo comparo dos respuestas JSON?",
          "answer": "Formatea ambas y luego compáralas en un editor. Las líneas únicas minificadas ocultan los cambios de estructura."
        },
        {
          "question": "¿Los comentarios sobreviven al formateo?",
          "answer": "El JSON estándar no tiene comentarios. Hay que eliminarlos o el análisis falla."
        },
        {
          "question": "¿Es seguro para secretos en JSON?",
          "answer": "Trata los tokens pegados como secretos de producción. Vacía el recuadro cuando termines; prefiere muestras redactadas."
        },
        {
          "question": "¿El formateo sube mi cuerpo?",
          "answer": "No. El análisis y el formateo se ejecutan en local en la página."
        }
      ]
    },
    "metaDescription": "Embellece JSON, minifícalo o comprueba que se analice en la página. Los comentarios, las comas finales y las comillas simples fallan. No lo convierte a CSV.",
    "ui": {}
  },
  "base64-encoder": {
    "answer": "Un codificador Base64 convierte texto a Base64 y de vuelta, con UTF-8, por completo en el navegador.",
    "content": {
      "about": "Codifica texto a Base64, o decodifica una cadena Base64 de vuelta a texto, con UTF-8. Quienes incrustan una cadena corta, o comprueban un valor que solo está codificado, pueden hacer la ida y vuelta aquí. Cualquiera puede decodificar el resultado, así que esto no sirve para ocultar una contraseña.",
      "howTo": [
        "Pega texto para codificar, o Base64 para decodificar, en el recuadro de entrada.",
        "Pulsa Codificar o Decodificar.",
        "Copia la salida, intercambia los recuadros o vacía ambos."
      ],
      "examples": [
        {
          "title": "ASCII",
          "body": "«Hi» se codifica como SGk=."
        },
        {
          "title": "Unicode",
          "body": "Las letras con acento y los emoji se codifican con UTF-8 antes de Base64, así que la ida y vuelta es correcta."
        }
      ],
      "explanation": "Base64 convierte datos binarios en letras, números, + y /. Es codificación, no cifrado: cualquiera puede decodificarlo. Esta herramienta convierte el texto a bytes UTF-8, luego a Base64, y lo inverso al decodificar.",
      "limitations": "Cualquiera puede decodificar el resultado, porque Base64 no es cifrado. La entrada se trata como texto y se convierte con UTF-8. No se acepta soltar un archivo, y se rechaza una cadena Base64 rota en lugar de adivinarla.",
      "faqs": [
        {
          "question": "¿El codificador Base64 es gratuito?",
          "answer": "Sí. Codificar texto a Base64 y decodificarlo de vuelta es gratuito aquí, sin registro."
        },
        {
          "question": "¿Base64 es seguro?",
          "answer": "No. Solo cambia la representación de los datos. No lo uses para ocultar contraseñas ni información privada."
        },
        {
          "question": "¿Esto sale de mi navegador?",
          "answer": "No. La codificación y la decodificación se ejecutan en local."
        },
        {
          "question": "¿Para qué se usa Base64?",
          "answer": "Base64 convierte bytes en letras, dígitos, + y /, para que los datos pasen por sistemas que esperan texto, como adjuntos de correo, URL de datos y algunos campos de API."
        },
        {
          "question": "¿Por qué el texto Base64 es más largo que el original?",
          "answer": "Cada 3 bytes se convierten en 4 caracteres, así que la salida Base64 es alrededor de un tercio más grande que la entrada."
        },
        {
          "question": "¿Cómo codifico texto a Base64 en el navegador?",
          "answer": "Pega o escribe el texto, ejecuta codificar y copia el resultado. Decodifica del mismo modo cuando necesites el original de vuelta."
        },
        {
          "question": "¿Cuándo es mejor Base64 que enviar bytes en bruto?",
          "answer": "Cuando un transporte solo admite texto —URL de datos, algunos campos JSON o API antiguas—, no como un control de seguridad."
        },
        {
          "question": "¿Qué caracteres aparecen en el Base64 estándar?",
          "answer": "A–Z, a–z, 0–9, más y barra, con relleno =. Las variantes seguras para URL cambian algunos símbolos."
        },
        {
          "question": "¿Por qué la cadena codificada termina con signos igual?",
          "answer": "El relleno marca grupos finales de bytes incompletos. Los decodificadores los esperan en el Base64 estándar."
        },
        {
          "question": "¿Codificar con Base64 es una forma de cifrado?",
          "answer": "No. Cualquiera puede decodificarlo. Usa cifrado de verdad cuando importe la confidencialidad."
        },
        {
          "question": "¿Puedo proteger una contraseña codificándola en Base64?",
          "answer": "No. Solo oculta los bytes. En su lugar, aplica un hash o cifra las contraseñas con algoritmos adecuados."
        },
        {
          "question": "¿Por qué la cadena codificada crece respecto a la entrada?",
          "answer": "Cada 3 bytes se convierten en 4 caracteres: un aumento de tamaño de unos 33 % antes del relleno."
        },
        {
          "question": "¿Los espacios o los saltos de línea rompen la decodificación?",
          "answer": "A menudo sí. Pega Base64 limpio, sin saltos, salvo que tu decodificador los tolere."
        },
        {
          "question": "¿Cómo es una URL de datos Base64?",
          "answer": "Una URL que incrusta los bytes del archivo como Base64 después de un prefijo de tipo de medio, útil para recursos incrustados pequeños."
        },
        {
          "question": "¿Cómo cambia UTF-8 el resultado codificado?",
          "answer": "Los caracteres no ASCII se convierten primero en UTF-8 de varios bytes, así que el Base64 difiere de las hipótesis Latin-1."
        },
        {
          "question": "¿Qué ocurre si la cadena Base64 no es válida?",
          "answer": "La decodificación falla o produce basura. Comprueba el alfabeto, el relleno y un recorte accidental."
        },
        {
          "question": "¿Las partes de un JWT usan Base64?",
          "answer": "Sí: las partes de un JWT son codificaciones Base64URL de JSON y firmas, no un cifrado por sí mismas."
        },
        {
          "question": "¿Debo comprimir los cuerpos grandes antes de codificarlos?",
          "answer": "En cuerpos grandes, comprime y luego codifica para reducir la forma de texto. Las cadenas diminutas rara vez se benefician."
        },
        {
          "question": "¿Qué tan grande puede ser la cadena que codifico aquí?",
          "answer": "Quédate en un tamaño cómodo para la memoria del navegador. Los textos muy grandes pueden ralentizar la pestaña."
        },
        {
          "question": "¿La codificación sale de mi equipo?",
          "answer": "La codificación y la decodificación se ejecutan en local en la sesión de la página."
        }
      ]
    },
    "metaDescription": "Codifica o decodifica texto en Base64 con UTF-8. Cualquiera puede decodificar el resultado, así que no oculta una contraseña. No se aceptan archivos.",
    "ui": {}
  },
  "uuid-generator": {
    "answer": "Un generador de UUID crea identificadores UUID v4 con la fuente aleatoria criptográfica del navegador.",
    "content": {
      "about": "Crea valores aleatorios UUID versión 4, de 1 a 100 cada vez. Los datos de prueba y los identificadores temporales de registros son el motivo habitual para generar un lote. No son claves consecutivas ni contraseñas, y la página no puede decir si un valor ya existe en otro sistema.",
      "howTo": [
        "Elige cuántos valores UUID v4 generar, de 1 a 100.",
        "Pulsa Generar. Usa Regenerar para un conjunto nuevo con el mismo recuento.",
        "Copia un valor o cópialos todos. Restablecer elimina la lista."
      ],
      "examples": [
        {
          "title": "Un identificador",
          "body": "Un UUID v4 tiene este aspecto: 3f2504e0-4f89-41d3-9a0c-0305e82c3301, con la versión 4 en el tercer grupo."
        },
        {
          "title": "Un lote",
          "body": "Generar 10 valores es útil para datos de prueba. Cada valor se crea por separado."
        }
      ],
      "explanation": "Un UUID es un identificador de 128 bits. La versión 4 usa bits aleatorios, con una versión y una variante fijas. Esta herramienta usa crypto.randomUUID() cuando el navegador lo ofrece, o crypto.getRandomValues() en caso contrario. No usa Math.random(). Los UUID son únicos con una probabilidad extremadamente alta, no una prueba de identidad ni un secreto.",
      "limitations": "Un clic produce como máximo 100 valores. Son identificadores aleatorios de versión 4, no claves consecutivas ni una contraseña. La página no puede decirte si el mismo valor ya existe en otro sistema.",
      "faqs": [
        {
          "question": "¿El generador de UUID es gratuito?",
          "answer": "Sí. Crear valores UUID versión 4 en este navegador es gratuito y no necesitas una cuenta."
        },
        {
          "question": "¿Se suben estos UUID?",
          "answer": "No. Los valores se crean en tu navegador y no se envían a un servidor."
        },
        {
          "question": "¿Puedo generar más de 100?",
          "answer": "No en un solo clic. El límite evita que la página se llene con una lista enorme."
        },
        {
          "question": "¿Qué es un UUID v4?",
          "answer": "Un UUID es un identificador de 128 bits escrito en 36 caracteres, como 123e4567-e89b-42d3-a456-426614174000. La versión 4 llena casi todos esos bits al azar."
        },
        {
          "question": "¿Pueden coincidir dos UUID aleatorios?",
          "answer": "En teoría sí, pero con 122 bits aleatorios la probabilidad es tan pequeña que los valores UUID v4 se tratan como únicos en la práctica."
        },
        {
          "question": "¿Cómo genero un solo UUID v4 para el id de una API?",
          "answer": "Pulsa generar y copia el valor; los UUID v4 son identificadores aleatorios de 128 bits en la forma habitual 8-4-4-4-12."
        },
        {
          "question": "¿Puedo crear un lote de UUID de una vez?",
          "answer": "Sí: fija el recuento dentro del rango permitido y copia la lista para semillas, pruebas o inserciones masivas."
        },
        {
          "question": "¿Debo quitar los guiones antes de guardar los UUID?",
          "answer": "Solo si tu base de datos espera la forma compacta; muchos sistemas conservan la cadena canónica con guiones."
        },
        {
          "question": "¿Los UUID generados se ordenan por tiempo?",
          "answer": "Los valores v4 son aleatorios, no ordenados por tiempo; usa una versión basada en el tiempo si necesitas identificadores ordenables."
        },
        {
          "question": "¿Puedo usarlos como tokens secretos?",
          "answer": "Los UUID son identificadores, no contraseñas; usa un generador de secretos dedicado para las credenciales."
        },
        {
          "question": "¿Qué significa el nibble de versión en un UUID?",
          "answer": "Marca la versión del UUID; v4 pone ese nibble en 4 para que se sepa que el valor se basa en aleatoriedad."
        },
        {
          "question": "¿Cómo se comparan las cadenas UUID en mayúsculas y minúsculas?",
          "answer": "Los dígitos hexadecimales no distinguen mayúsculas en la gramática UUID; elige un estilo y manténlo en las API."
        },
        {
          "question": "¿Al actualizar la página se repite el mismo UUID?",
          "answer": "No: cada generación toma aleatoriedad nueva; copia los valores que necesites antes de salir."
        },
        {
          "question": "¿Es seguro poner UUID en URL públicas?",
          "answer": "Sí, para identificadores opacos de recursos cuando importa que no se adivinen; igualmente aplica autorización en el servidor."
        },
        {
          "question": "¿Pueden colisionar dos ejecuciones en la práctica?",
          "answer": "Las probabilidades de colisión de UUID v4 correctos son despreciables en volúmenes habituales de una aplicación; igualmente usa restricciones de unicidad en las bases de datos."
        },
        {
          "question": "¿Necesito una llamada de red para generar UUID?",
          "answer": "No: la generación puede usar las API de cifrado del navegador en local, sin subir nada."
        },
        {
          "question": "¿Cuántos UUID puedo pedir en un clic?",
          "answer": "Quédate dentro del máximo indicado de la herramienta (a menudo hasta 100) para que la página siga respondiendo."
        },
        {
          "question": "¿Las claves primarias de una base de datos siempre deben ser UUID?",
          "answer": "Ayudan en inserciones distribuidas; los enteros consecutivos igualmente pueden servir en tablas de un solo nodo."
        },
        {
          "question": "¿Para qué se usa el UUID nulo?",
          "answer": "El UUID de todos ceros es un marcador convencional similar a nulo; este generador se centra en valores v4 aleatorios."
        },
        {
          "question": "¿Puedo validar un UUID que pegué de otro sitio?",
          "answer": "Comprueba la forma hexadecimal 8-4-4-4-12 y los bits de versión y variante; un formateador o un validador puede confirmar los detalles."
        }
      ]
    },
    "metaDescription": "Genera uno o varios valores UUID v4 en tu navegador con una fuente aleatoria segura. El límite es de 100 por clic. No son contraseñas ni claves consecutivas.",
    "ui": {}
  },
  "url-encoder": {
    "answer": "Un codificador de URL aplica encodeURIComponent o decodeURIComponent a una cadena que pegas.",
    "content": {
      "about": "Codifica en porcentaje una cadena con encodeURIComponent, o decodifica una cadena codificada en porcentaje. Quienes ponen un valor de consulta en una URL lo usan cuando hay que escapar espacios, signos & o barras. El resultado no está cifrado, y una secuencia a medias como %E0 falla al decodificar.",
      "howTo": [
        "Pega el texto o la cadena codificada en el recuadro de entrada.",
        "Pulsa Codificar para aplicar encodeURIComponent, o Decodificar para invertirlo.",
        "Copia el resultado, intercambia los recuadros o vacía ambos."
      ],
      "examples": [
        {
          "title": "Un espacio y un signo &",
          "body": "«a b&c» se codifica como a%20b%26c."
        },
        {
          "title": "Unicode",
          "body": "Las letras con acento y otros alfabetos se codifican en secuencias de porcentaje UTF-8 y se decodifican de vuelta al texto original."
        }
      ],
      "explanation": "La codificación de URL (codificación en porcentaje) representa caracteres que no son seguros en un componente de URL. No es cifrado: cualquiera puede decodificar el resultado. Esta herramienta usa encodeURIComponent y decodeURIComponent del navegador, que codifican más caracteres que encodeURI (incluidos ?, & y /).",
      "limitations": "encodeURIComponent es el codificador, así que se escapan ?, & y /. Eso es más estricto que encodeURI. La salida no es un secreto. De vuelta, se rechaza una secuencia a medias como %E0.",
      "faqs": [
        {
          "question": "¿El codificador de URL es gratuito?",
          "answer": "Sí. Codificar en porcentaje una cadena, o decodificar una, no cuesta nada y no pide una cuenta."
        },
        {
          "question": "¿Por qué falló la decodificación?",
          "answer": "Las secuencias incompletas como %E0%A4%A no son válidas. La herramienta muestra un error en lugar de bloquearse."
        },
        {
          "question": "¿Se envía mi texto a un servidor?",
          "answer": "No. La codificación y la decodificación se ejecutan en tu navegador."
        },
        {
          "question": "¿Qué significa %20 en una URL?",
          "answer": "%20 es la forma codificada en porcentaje de un espacio. La codificación en porcentaje escribe un carácter como % seguido de su valor de byte en hexadecimal."
        },
        {
          "question": "¿Cuál es la diferencia entre encodeURI y encodeURIComponent?",
          "answer": "encodeURI deja solos caracteres como / ? & y = para que una dirección completa siga funcionando. encodeURIComponent también los escapa, que es lo que quieres para un solo valor de consulta. Esta herramienta usa encodeURIComponent."
        },
        {
          "question": "¿Cuándo debo codificar una URL completa frente a un valor de consulta?",
          "answer": "Codifica los segmentos individuales de consulta o de ruta con codificación de componente; codificar una URL entera puede romper los separadores reservados."
        },
        {
          "question": "¿Qué caracteres suelen necesitar codificación en porcentaje?",
          "answer": "Los espacios, el texto no ASCII y los símbolos reservados como &, =, ? y # cuando aparecen dentro de los valores."
        },
        {
          "question": "¿Cómo decodifico de vuelta una cadena codificada en porcentaje?",
          "answer": "Pega el texto codificado, ejecuta decodificar y copia el resultado legible; corrige las secuencias % no válidas si falla la decodificación."
        },
        {
          "question": "¿Por qué aparece un signo más en lugar de un espacio?",
          "answer": "En datos application/x-www-form-urlencoded, + suele significar un espacio; %20 es la codificación más segura dentro de las URL generales."
        },
        {
          "question": "¿Puedo codificar caracteres Unicode como emoji?",
          "answer": "Sí: se convierten en secuencias de bytes UTF-8 mostradas como pares %HH para que la URL se quede segura en ASCII en el cable."
        },
        {
          "question": "¿La doble codificación es un problema?",
          "answer": "Sí: codificar dos veces convierte % en %25 y rompe los servidores que decodifican solo una vez. Codifica cada valor una sola vez."
        },
        {
          "question": "¿En qué se diferencian los segmentos de ruta de las cadenas de consulta?",
          "answer": "Ambos pueden necesitar codificación, pero los caracteres permitidos varían un poco; sigue lo que esperan los ayudantes de tu marco."
        },
        {
          "question": "¿La codificación cambia cómo los navegadores muestran la barra de direcciones?",
          "answer": "Los navegadores pueden mostrar Unicode decodificado y aun así enviar los bytes codificados; copia la forma codificada para las API."
        },
        {
          "question": "¿Puedo codificar JSON para ponerlo en un parámetro de consulta?",
          "answer": "Sí: serializa el JSON y luego codifica en porcentaje la cadena antes de añadirla como un solo valor de parámetro."
        },
        {
          "question": "¿Cómo es una secuencia % mal formada?",
          "answer": "Un % no seguido de dos dígitos hexadecimales, o finales recortados; los decodificadores suelen rechazarlos o dejarlos igual."
        },
        {
          "question": "¿Debo codificar las barras dentro de un parámetro de ruta?",
          "answer": "A menudo sí cuando la barra es un dato y no un separador de ruta: codifícala como %2F para que el enrutamiento se quede intacto."
        },
        {
          "question": "¿La herramienta normaliza las URL más allá de la codificación?",
          "answer": "No: se centra en codificar y decodificar texto en porcentaje; no reescribe hosts ni resuelve redirecciones."
        },
        {
          "question": "¿En qué ayuda esto para las URI de redirección de OAuth?",
          "answer": "Los parámetros de redirección y de estado deben codificarse cuando se incrustan en URL de autorización más grandes, para que los caracteres reservados se queden literales."
        },
        {
          "question": "¿Puedo pegar texto de varias líneas para codificarlo?",
          "answer": "Sí, pero los saltos de línea se convierten en %0A (y %0D si están presentes); confirma que el receptor espera esos escapes."
        },
        {
          "question": "¿Codificar es lo mismo que aplicar un hash o cifrar?",
          "answer": "No: la codificación en porcentaje solo hace que el texto sea seguro en una URL; no oculta ni autentica el contenido."
        }
      ]
    },
    "metaDescription": "Codifica o decodifica componentes de URL en tu navegador con encodeURIComponent. Los espacios, & y las barras se escapan. Una secuencia a medias como %E0 falla.",
    "ui": {}
  },
  "timestamp-converter": {
    "answer": "Un conversor de marcas de tiempo Unix convierte segundos o milisegundos de época en fechas, y fechas de vuelta en marcas de tiempo.",
    "content": {
      "about": "Convierte segundos o milisegundos Unix en una fecha, o una fecha y hora de vuelta en una marca de tiempo. Úsalo cuando un registro guarda un número de época y necesitas la hora del reloj, o lo inverso. La unidad que eliges es la que se convierte, y las ciudades con nombre corresponden al [conversor de zonas horarias](/tools/time-zone-converter).",
      "howTo": [
        "Para marca de tiempo → fecha, escribe un valor Unix y elige segundos o milisegundos. La herramienta no adivina la unidad.",
        "Pulsa Convertir para ver la hora local, UTC e ISO 8601. Usa Marca de tiempo actual para rellenar el momento presente.",
        "Para fecha → marca de tiempo, escribe una fecha y una hora y elige la hora local del navegador o UTC."
      ],
      "examples": [
        {
          "title": "Segundos",
          "body": "1710000000 segundos es 2024-03-09T16:00:00.000Z."
        },
        {
          "title": "Milisegundos",
          "body": "1710000000000 milisegundos es el mismo instante. Usar la unidad equivocada produce una fecha a siglos de distancia."
        }
      ],
      "explanation": "Una marca de tiempo Unix cuenta el tiempo desde el 1 de enero de 1970 a las 00:00:00 UTC. Algunos sistemas guardan segundos; Date de JavaScript usa milisegundos. Esta herramienta etiqueta la unidad que elegiste. Si el número parece de la otra unidad, te avisa pero igualmente convierte con tu selección.",
      "limitations": "La unidad que seleccionas es la que se convierte. Los milisegundos escritos como segundos no se corrigen en silencio. Se rechaza una fecha que el navegador no puede representar. Las ciudades con nombre y una segunda zona horaria son otra herramienta.",
      "faqs": [
        {
          "question": "¿El conversor de marcas de tiempo Unix es gratuito?",
          "answer": "Sí. Convertir segundos o milisegundos de época en una fecha, y una fecha de vuelta en una marca de tiempo, es gratuito, sin cuenta."
        },
        {
          "question": "¿Esto usa mi zona horaria?",
          "answer": "La lectura local usa la zona horaria de este navegador. UTC e ISO 8601 no dependen de la zona. Fecha → marca de tiempo se puede interpretar como local o UTC."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El número o la fecha se convierte en esta pestaña. No se publica en ningún sitio ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué es una marca de tiempo Unix?",
          "answer": "Una marca de tiempo Unix es el número de segundos desde las 00:00:00 UTC del 1 de enero de 1970. Muchos sistemas la guardan en milisegundos, que es el mismo valor multiplicado por 1000."
        },
        {
          "question": "¿Cómo sé si una marca de tiempo está en segundos o en milisegundos?",
          "answer": "Las marcas de tiempo actuales en segundos tienen 10 dígitos, y las de milisegundos tienen 13. Elige la unidad coincidente antes de convertir."
        },
        {
          "question": "¿Cómo convierto segundos de época en una fecha de calendario en esta página?",
          "answer": "Pega el número Unix, confirma segundos o milisegundos y lee la fecha de calendario en la zona que selecciones."
        },
        {
          "question": "¿Puedo pasar de una fecha de calendario de vuelta a una marca de tiempo Unix?",
          "answer": "Sí: escribe los campos de fecha y hora y luego copia el valor Unix generado para API o registros."
        },
        {
          "question": "¿Qué zona horaria usa la salida de forma predeterminada?",
          "answer": "Sigue la zona que seleccionas o la zona local de tu navegador; confírmala siempre antes de comparar entre sistemas."
        },
        {
          "question": "¿Por qué algunas marcas de tiempo parecen de 13 dígitos?",
          "answer": "Los valores de trece dígitos suelen ser milisegundos desde la época; los de diez dígitos suelen ser segundos enteros."
        },
        {
          "question": "¿Qué momento representa una marca de tiempo Unix cero?",
          "answer": "Marca el inicio del tiempo Unix: la medianoche UTC del 1 de enero de 1970."
        },
        {
          "question": "¿Puedo convertir UTC y la hora local en un solo paso?",
          "answer": "Sí: fija la zona de entrada o de salida para ver tanto el instante UTC como la hora local de pared."
        },
        {
          "question": "¿El horario de verano cambia el número Unix?",
          "answer": "No: el valor Unix es un instante absoluto; el horario de verano solo cambia cómo se etiqueta ese instante en la hora local."
        },
        {
          "question": "¿Qué ocurre con las marcas de tiempo negativas?",
          "answer": "Los valores negativos significan fechas anteriores a 1970; la admisión depende del conversor, así que comprueba la fecha de calendario mostrada."
        },
        {
          "question": "¿Qué tan precisa es la modalidad de segundos frente a la de milisegundos?",
          "answer": "Los segundos omiten el detalle inferior al segundo; los milisegundos conservan una temporización más fina, útil para registros y trazas de rendimiento."
        },
        {
          "question": "¿Puedo pegar cadenas ISO-8601 además de números?",
          "answer": "Si la herramienta acepta entrada ISO, pega la cadena; de lo contrario, convierte la fecha ISO a una marca de tiempo con los campos de fecha."
        },
        {
          "question": "¿Por qué dos equipos pueden mostrar horas locales distintas para la misma marca?",
          "answer": "Usan zonas horarias o reglas de horario de verano distintas; el instante Unix subyacente igualmente puede coincidir."
        },
        {
          "question": "¿Se incluye el tratamiento de los segundos intercalares?",
          "answer": "La mayoría de los conversores cotidianos ignoran los segundos intercalares y siguen el tiempo Unix tal como lo implementan las bibliotecas habituales."
        },
        {
          "question": "¿Puedo usarlo para las reclamaciones exp de un JWT?",
          "answer": "Sí: los campos exp e iat de un JWT son segundos Unix; conviértelos aquí para comprobar las fechas de caducidad."
        },
        {
          "question": "¿Qué pasa si mezclo segundos y milisegundos?",
          "answer": "La fecha salta a siglos de distancia de hoy: cambia de modalidad o divide o multiplica por 1000 y vuelve a intentarlo."
        },
        {
          "question": "¿Convertir cambia el número original?",
          "answer": "No: la conversión solo muestra otra representación; copia el valor que necesites para tu sistema."
        }
      ]
    },
    "metaDescription": "Convierte marcas de tiempo Unix en fechas y fechas en marcas de tiempo, en segundos o milisegundos. La unidad que eliges es la que se convierte.",
    "ui": {}
  },
  "hex-to-rgb": {
    "answer": "Hex a RGB convierte colores hexadecimales de CSS a valores RGB y HSL que puedes copiar a las hojas de estilo.",
    "content": {
      "about": "Escribe un color hexadecimal de 3, 6 u 8 dígitos y verás RGB y HSL. Quienes copian un color de CSS lo usan cuando tienen un valor hexadecimal y necesitan las otras escrituras. #336699 es rgb(51, 102, 153), y no se acepta una palabra como red.",
      "howTo": [
        "Escribe un color hexadecimal, con o sin #. Se aceptan valores de 3, 6 y 8 dígitos.",
        "Aparecen automáticamente RGB, RGBA (cuando hay alfa), HEX normalizado y HSL.",
        "Copia cualquier formato, prueba un ejemplo o restablece el campo."
      ],
      "examples": [
        {
          "title": "#336699",
          "body": "rgb(51, 102, 153). HSL es hsl(210, 50%, 40%)."
        },
        {
          "title": "#fff",
          "body": "El hexadecimal de 3 dígitos se expande a #ffffff, que es rgb(255, 255, 255)."
        },
        {
          "title": "#336699cc",
          "body": "El hexadecimal de 8 dígitos incluye alfa. El par extra es unas 80 % de opacidad, mostrado como RGBA."
        }
      ],
      "explanation": "HEX escribe el rojo, el verde y el azul como pares en base 16. Un valor de 3 dígitos duplica cada dígito. Un valor de 8 dígitos añade un par alfa. RGB usa 0–255 por canal. HSL describe el mismo color como tono, saturación y luminosidad. La conversión es aritmética en el navegador; no llama a una API de color.",
      "limitations": "Solo se acepta hexadecimal de 3, 6 y 8 dígitos, con o sin #. No se convierte una palabra como red ni una cadena rgb(). El HSL de la página se calcula a partir de ese hexadecimal. No es un segundo campo que puedas editar.",
      "faqs": [
        {
          "question": "¿El conversor de hex a RGB es gratuito?",
          "answer": "Sí. Convertir hexadecimal a RGB y HSL es gratuito y no se requiere una cuenta."
        },
        {
          "question": "¿Necesito el #?",
          "answer": "No. FFFFFF y #FFFFFF se tratan igual."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. La cadena hexadecimal se convierte en esta pestaña. No se envía a un servidor ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo convierto un color hexadecimal a RGB?",
          "answer": "Divide los seis dígitos en tres pares y convierte cada par de hexadecimal a un número de 0 a 255. #FF8000 es rojo 255, verde 128, azul 0."
        },
        {
          "question": "¿Qué significa un color hexadecimal de 8 dígitos?",
          "answer": "Los dos últimos dígitos son el canal alfa, que fija la opacidad. #FF000080 es rojo a unas 50 % de opacidad."
        },
        {
          "question": "¿Cómo convierto un color hexadecimal en valores de canal RGB?",
          "answer": "Escribe el hexadecimal (con o sin #), convierte y lee los canales R, G y B para CSS o herramientas de diseño."
        },
        {
          "question": "¿Debo escribir la almohadilla inicial?",
          "answer": "Suele ser opcional: tanto #336699 como 336699 deberían analizarse. Sigue la pista del campo si se exige una forma."
        },
        {
          "question": "¿Qué incluye un color hexadecimal de 8 dígitos además de RGB?",
          "answer": "El par extra es el alfa (opacidad). La salida RGB puede mostrar un canal alfa aparte."
        },
        {
          "question": "¿La forma corta #369 es igual a #336699?",
          "answer": "Sí: el hexadecimal de 3 dígitos se expande duplicando cada dígito (#369 → #336699)."
        },
        {
          "question": "¿A qué valores RGB corresponde #ffffff?",
          "answer": "Blanco: rgb(255, 255, 255)."
        },
        {
          "question": "¿Puedo escribir una palabra de color CSS como crimson?",
          "answer": "La admisión de nombres varía. Prefiere hexadecimal o rgb() cuando necesites un control exacto."
        },
        {
          "question": "¿Cómo convierto números RGB de vuelta a hexadecimal?",
          "answer": "Usa una modalidad complementaria de RGB a hexadecimal o invierte los canales en pares hexadecimales de dos dígitos."
        },
        {
          "question": "¿Por qué puede rechazarse una cadena hexadecimal?",
          "answer": "Longitud incorrecta, caracteres no hexadecimales o dígitos que faltan. Quédate en 3, 6 u 8 dígitos hexadecimales."
        },
        {
          "question": "¿Los códigos de color hexadecimal distinguen mayúsculas?",
          "answer": "No: #ABC y #abc son lo mismo. Las guías de estilo igualmente pueden preferir minúsculas."
        },
        {
          "question": "¿Cómo combinan esto los diseñadores con las comprobaciones de contraste?",
          "answer": "Convierte el hexadecimal de marca a RGB/HSL y luego comprueba el contraste del texto sobre los fondos."
        },
        {
          "question": "¿La conversión hex↔RGB cambia el color percibido?",
          "answer": "El hexadecimal y el RGB sRGB representan el mismo color sRGB; las pantallas igualmente varían."
        },
        {
          "question": "¿Puedo pegar tokens hexadecimales de Figma o Sketch?",
          "answer": "Sí: copia el token hexadecimal y conviértelo para pasárselo a quienes desarrollan."
        },
        {
          "question": "¿Qué hay de los colores de gama amplia o Display P3?",
          "answer": "Este conversor apunta al hexadecimal/sRGB clásico. Los flujos de gama amplia necesitan herramientas especializadas."
        },
        {
          "question": "¿Debo conservar un alfa final FF cuando es opaco?",
          "answer": "FF significa totalmente opaco. Puedes pasar a hexadecimal de 6 dígitos cuando la opacidad es completa."
        },
        {
          "question": "¿La conversión hexadecimal sale de la sesión del navegador?",
          "answer": "La conversión se ejecuta en local en la sesión de la página."
        }
      ]
    },
    "metaDescription": "Convierte colores hexadecimales de 3, 6 y 8 dígitos a RGB, RGBA y HSL en tu navegador. No se aceptan nombres como red ni cadenas rgb().",
    "ui": {}
  },
  "html-encoder": {
    "answer": "Un codificador HTML escapa o desescapa caracteres como <, > y & para que el texto sea seguro en HTML.",
    "content": {
      "about": "Escapa caracteres HTML para que se puedan mostrar como texto, o convierte entidades habituales de vuelta en caracteres. Úsalo cuando un tutorial o un comentario deba mostrar una etiqueta en lugar de ejecutarla. <div> se convierte en &lt;div&gt;, y el marcado nunca se ejecuta en esta página.",
      "howTo": [
        "Pega HTML o texto codificado en el recuadro de entrada.",
        "Elige codificar HTML o decodificar HTML y luego pulsa el botón coincidente.",
        "Copia el resultado, intercambia los dos recuadros o vacía ambos."
      ],
      "examples": [
        {
          "title": "Codificar una etiqueta",
          "body": "<div>Hello</div> se convierte en &lt;div&gt;Hello&lt;/div&gt; para que se pueda mostrar como texto."
        },
        {
          "title": "Signos & y comillas",
          "body": "& se codifica como &amp;, las comillas dobles como &quot; y los apóstrofos como &#39;."
        }
      ],
      "explanation": "La codificación HTML sustituye los caracteres que tienen un significado especial en el marcado. La decodificación convierte entidades con nombre habituales y referencias numéricas de caracteres de vuelta en caracteres. La herramienta trata tu entrada como texto sin formato. No ejecuta HTML ni lo inserta en la página.",
      "limitations": "El codificador escapa caracteres para que se puedan mostrar como texto. Decodificar reconoce entidades con nombre habituales y referencias numéricas. Una entidad con nombre poco habitual puede quedarse tal como se escribió. El marcado nunca se ejecuta.",
      "faqs": [
        {
          "question": "¿El codificador / decodificador HTML es gratuito?",
          "answer": "Sí. Escapar caracteres HTML, o convertir entidades de vuelta en caracteres, es gratuito, sin registro."
        },
        {
          "question": "¿Mi HTML se ejecutará en esta página?",
          "answer": "No. La entrada nunca se ejecuta y nunca se inserta con innerHTML."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. La codificación y la decodificación ocurren en esta pestaña. El texto no se envía a un servidor ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué son las entidades HTML?",
          "answer": "Las entidades HTML son códigos como &lt; para < y &amp; para & que permiten a una página mostrar esos caracteres como texto en lugar de leerlos como marcado."
        },
        {
          "question": "¿Cuándo debo codificar HTML?",
          "answer": "Codifica texto cuando quieras mostrar código en una página, o cuando la entrada de una persona se muestre dentro de HTML, para que las etiquetas aparezcan como texto en lugar de ejecutarse."
        },
        {
          "question": "¿Cómo escapo HTML para que las etiquetas se vean como texto?",
          "answer": "Pega el marcado, codifícalo a entidades y coloca el resultado donde necesites que se vean etiquetas literales."
        },
        {
          "question": "¿Para qué se usan las entidades de caracteres HTML?",
          "answer": "Representan caracteres reservados como <, >, & y las comillas para que los navegadores no los traten como marcado."
        },
        {
          "question": "¿Cuándo debo codificar HTML en lugar de sanitizarlo?",
          "answer": "Codifica cuando debas mostrar el origen como texto. Sanitiza cuando permitas que se renderice un subconjunto seguro de HTML."
        },
        {
          "question": "¿Por qué hay que codificar los signos & con especial cuidado?",
          "answer": "& inicia las entidades; un & suelto en el texto debe convertirse en &amp; para que el HTML siga siendo válido."
        },
        {
          "question": "¿Puedo invertir las entidades de vuelta a un marcado editable?",
          "answer": "Sí: decodificar invierte las entidades habituales para que puedas editar otra vez los caracteres originales."
        },
        {
          "question": "¿Cómo pueden los blogs publicar muestras de código con seguridad?",
          "answer": "Escapa el HTML/XML de muestra dentro de <pre><code> (o un resaltador que escape por ti)."
        },
        {
          "question": "¿Las comillas de los atributos necesitan codificación de entidades?",
          "answer": "Sí, cuando la comilla coincide con el delimitador del atributo: usa &quot; o &apos; según corresponda."
        },
        {
          "question": "¿Escapar basta por sí solo para detener todo riesgo XSS?",
          "answer": "No. El contexto importa (HTML, atributos, JS, URL). Usa también API seguras del marco y CSP."
        },
        {
          "question": "¿Qué códigos de entidad aparecen más a menudo en las muestras?",
          "answer": "&lt; &gt; &amp; &quot; y &nbsp; aparecen de continuo en las muestras escapadas."
        },
        {
          "question": "¿Deben escaparse documentos enteros para el correo HTML?",
          "answer": "A veces, para incrustar muestras; para enviar correo HTML usa una parte MIME HTML adecuada."
        },
        {
          "question": "¿Cómo tratan los renderizadores de Markdown el HTML escapado?",
          "answer": "Markdown puede dejar pasar el HTML en bruto. Escapa cuando necesites etiquetas literales en la página renderizada."
        },
        {
          "question": "¿Puede un navegador expandir entidades sin un botón de decodificar?",
          "answer": "Sí: los analizadores HTML expanden entidades al renderizar. El origen codificado igualmente se muestra como texto si está doblemente escapado."
        },
        {
          "question": "¿Por qué un decodificador rechazaría la cadena que pegué?",
          "answer": "Sintaxis de entidad rota o secuencias no admitidas. Corrige las formas &…; y vuelve a intentarlo."
        },
        {
          "question": "¿La codificación de entidades HTML es lo mismo que la codificación en porcentaje?",
          "answer": "No. La codificación en porcentaje es para URL; las entidades HTML son para el texto del marcado."
        },
        {
          "question": "¿Cuándo es más seguro un editor de texto enriquecido que escapar a mano?",
          "answer": "Cuando publican contenido personas que no son autoras: los editores aplican un escape consciente del contexto por ti."
        }
      ]
    },
    "metaDescription": "Codifica o decodifica entidades HTML en tu navegador. La entrada se trata como texto y no se ejecuta. Un <div> se muestra como entidades.",
    "ui": {}
  },
  "html-minifier": {
    "answer": "Un minificador de HTML elimina comentarios y espacios de más del HTML para reducir el tamaño del archivo.",
    "content": {
      "about": "Elimina comentarios HTML y comprime los espacios entre etiquetas. Úsalo cuando el origen de la página deba ser más pequeño antes de publicar. El texto dentro de pre, textarea, script y style se deja igual, y se rechazan más de 400 000 caracteres.",
      "howTo": [
        "Pega el origen HTML en el recuadro izquierdo.",
        "Pulsa Minificar. Aparecen recuentos de caracteres y una reducción estimada cuando hay salida.",
        "Copia el resultado o vacía ambos recuadros."
      ],
      "examples": [
        {
          "title": "Marcado habitual",
          "body": "Se eliminan los comentarios y se comprime el espacio en blanco de más entre etiquetas."
        },
        {
          "title": "Etiquetas sensibles al espacio en blanco",
          "body": "El contenido dentro de pre, textarea, script y style se deja igual para no destruir el formato de ahí."
        }
      ],
      "explanation": "Este es un minificador prudente. Quita comentarios HTML y comprime el espacio en blanco fuera de los elementos conservados. Se conservan los atributos entre comillas. No reescribe el DOM y no afirma que todo documento HTML se comporte igual después de minificar, sobre todo las páginas que dependen del formato fuera de pre, textarea, script y style.",
      "limitations": "Se eliminan los comentarios y se comprimen los espacios entre etiquetas. El texto dentro de pre, textarea, script y style se queda como estaba. El marcado que depende de espacios en cualquier otro sitio igualmente puede cambiar. Se rechazan más de 400 000 caracteres.",
      "faqs": [
        {
          "question": "¿El minificador de HTML es gratuito?",
          "answer": "Sí. Minificar HTML en este navegador es gratuito y no necesitas una cuenta."
        },
        {
          "question": "¿El HTML minificado siempre es equivalente?",
          "answer": "No. El paso es prudente a propósito, pero el HTML que depende del espacio en blanco en lugares inesperados igualmente puede cambiar. Comprueba el resultado antes de publicar."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El HTML se minifica en esta pestaña. No se sube ni se escribe en el almacenamiento local."
        },
        {
          "question": "¿Minificar HTML mejora la velocidad de la página?",
          "answer": "Hace el archivo más pequeño, lo que puede ayudar un poco, sobre todo sin compresión. Los servidores que ya usan gzip o Brotli ven una ganancia menor."
        },
        {
          "question": "¿Qué quita un minificador de HTML?",
          "answer": "Este elimina comentarios y comprime los espacios entre etiquetas, y deja sin cambios el contenido de pre, textarea, script y style."
        },
        {
          "question": "¿Cómo minifico HTML antes de subir una página?",
          "answer": "Pega el HTML, ejecuta minificar y guarda el archivo compacto. Conserva un origen legible en el control de versiones."
        },
        {
          "question": "¿Reducir el HTML suele ayudar a los tiempos de carga?",
          "answer": "Puede reducir un poco el tamaño de transferencia. Combínalo con compresión (gzip/br) y optimización de imágenes para ganancias mayores."
        },
        {
          "question": "¿Qué tipos de bytes elimina un minificador de HTML?",
          "answer": "Espacio en blanco de más, comentarios y a veces comillas u etiquetas opcionales, según lo agresivo que sea."
        },
        {
          "question": "¿Los comentarios HTML desaparecen al minificar?",
          "answer": "La mayoría de los comentarios se eliminan. Conserva a mano las cabeceras de licencia si debes mantenerlas."
        },
        {
          "question": "¿Una minificación agresiva puede romper el contenido de pre o textarea?",
          "answer": "La eliminación agresiva de espacios puede hacerlo. Prefiere ajustes más seguros alrededor de esos elementos."
        },
        {
          "question": "¿Este paso también comprime CSS y JS incrustados?",
          "answer": "Algunas herramientas hacen pasos ligeros; los minificadores dedicados de CSS y JS son mejores para scripts y estilos."
        },
        {
          "question": "¿Por qué después pueden parecer pegados los enlaces contiguos?",
          "answer": "Los espacios eliminados entre etiquetas pueden unir palabras visibles. Conserva el espacio donde lo necesiten los nodos de texto."
        },
        {
          "question": "¿Pueden desaparecer las comillas de los atributos al minificar?",
          "answer": "Los minificadores avanzados podrían hacerlo. Revisa los atributos que contienen espacios."
        },
        {
          "question": "¿Se conservan los espacios dentro de los valores de atributo entre comillas?",
          "answer": "Deberían conservarse. Si un valor se ve mal, compáralo con tu origen."
        },
        {
          "question": "¿El ahorro de tamaño se cuenta en bytes en bruto?",
          "answer": "Sí: compara las longitudes en bytes del origen y del minificado (y otra vez después de gzip)."
        },
        {
          "question": "¿Cuál es un tamaño máximo práctico para pegar aquí?",
          "answer": "Las páginas enormes pueden ralentizar la pestaña. Minifica las plantillas en un flujo de compilación en los sitios grandes."
        },
        {
          "question": "¿Sigue siendo útil minificar cuando ya se ejecuta gzip?",
          "answer": "Sí, de forma modesta: una entrada más pequeña igualmente ayuda, pero gzip ya comprime el espacio en blanco repetido."
        },
        {
          "question": "¿Debo minificar HTML durante el desarrollo local?",
          "answer": "Suele ser no: depura HTML legible y minifica en la integración continua o antes de publicar."
        },
        {
          "question": "¿Puede pasar por un minificador un HTML no válido?",
          "answer": "Sí, lo que puede ocultar problemas. Valida las plantillas importantes por separado."
        },
        {
          "question": "¿Minificar HTML sube mi marcado a un servidor?",
          "answer": "El procesamiento está pensado para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Minifica HTML en tu navegador con un paso prudente que conserva el contenido de pre, textarea, script y style. Se rechazan más de 400 000 caracteres.",
    "ui": {}
  },
  "css-minifier": {
    "answer": "Un minificador de CSS comprime las hojas de estilo eliminando comentarios y espacio en blanco innecesario.",
    "content": {
      "about": "Elimina comentarios CSS y los espacios de más entre tokens. El trabajo de interfaz que publica una hoja de estilo puede usarlo para un archivo más corto antes de un paso de compilación. No se fusionan selectores, se conservan los espacios dentro de las cadenas y de calc(), y no se añaden prefijos de fabricante.",
      "howTo": [
        "Pega CSS en el recuadro izquierdo.",
        "Pulsa Minificar para eliminar comentarios y espacio en blanco innecesario.",
        "Compara los recuentos de antes y después, y luego copia o vacía."
      ],
      "examples": [
        {
          "title": "Reglas y comentarios",
          "body": "/* note */ .hero { color: #2563eb; } se convierte en .hero{color:#2563eb;}"
        },
        {
          "title": "url() y cadenas",
          "body": "Se conservan los espacios dentro de las cadenas entre comillas y de los valores url(). calc() y las propiedades personalizadas conservan los espacios que necesitan."
        }
      ],
      "explanation": "El minificador de CSS recorre el origen como tokens en lugar de aplicar una sola expresión regular ingenua. Elimina comentarios y luego quita el espacio en blanco que no hace falta entre identificadores, llaves y operadores. Las cadenas, las URL de datos y los caracteres escapados se quedan intactos. Es prudente: no hace optimizaciones avanzadas como fusionar selectores.",
      "limitations": "Se eliminan los comentarios y se quitan los espacios de más entre tokens. Se conservan los espacios dentro de las cadenas, de los valores url() y de calc(). No se fusionan selectores y no se añaden prefijos de fabricante. Se rechaza una hoja de estilo de más de 400 000 caracteres.",
      "faqs": [
        {
          "question": "¿El minificador de CSS es gratuito?",
          "answer": "Sí. Puedes minificar una hoja de estilo en este navegador sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Esto puede romper mi hoja de estilo?",
          "answer": "Los trucos poco habituales o los archivos que no son CSS igualmente pueden fallar. Las hojas de estilo cotidianas válidas deberían minificarse bien. Revisa la salida si dependes de una sintaxis exótica."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El CSS se queda en esta pestaña mientras se minifica. No se envía a un servidor ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Por qué minificar CSS?",
          "answer": "Una hoja de estilo más pequeña se descarga más rápido. Minificar elimina comentarios y espacio en blanco de más, sin cambiar lo que hacen las reglas."
        },
        {
          "question": "¿Puedo desminificar el CSS después?",
          "answer": "Puedes volver a formatearlo, pero los comentarios eliminados desaparecen. Conserva tu archivo original legible y publica la copia minificada."
        },
        {
          "question": "¿Cómo minifico una hoja de estilo antes de publicar?",
          "answer": "Pega el CSS, ejecuta minificar y copia la salida compacta. Conserva el origen legible en el control de versiones."
        },
        {
          "question": "¿Minificar elimina todos los comentarios?",
          "answer": "La mayoría de los comentarios se eliminan. Las cabeceras de licencia importantes puede que deban conservarse a mano si se exigen."
        },
        {
          "question": "¿calc() suele ser seguro después de minificar?",
          "answer": "Sí, cuando el espacio en blanco dentro de calc() se trata con cuidado. Revisa las expresiones complejas después de minificar."
        },
        {
          "question": "¿La minificación cambia los colores o acorta valores?",
          "answer": "Algunos minificadores acortan colores hexadecimales o valores cero. Compara un pase visual si tu flujo es agresivo."
        },
        {
          "question": "¿Se reescriben las rutas de url()?",
          "answer": "Las rutas dentro de url() deberían quedarse intactas. Las rutas rotas suelen deberse a un pegado incorrecto, no a una reescritura intencionada."
        },
        {
          "question": "¿Por qué puede importar el espacio alrededor de los combinadores?",
          "answer": "Quitar un espacio necesario puede cambiar selectores como div :first-child. Revisa los selectores después de minificar."
        },
        {
          "question": "¿Se elimina el punto y coma final antes de una llave de cierre al minificar?",
          "answer": "A menudo el punto y coma final antes de } es opcional y puede eliminarse. Eso es CSS normal."
        },
        {
          "question": "¿Esto combina reglas duplicadas?",
          "answer": "Los minificadores simples normalmente no fusionan selectores. Usa un optimizador dedicado si lo necesitas."
        },
        {
          "question": "¿Hay un límite práctico de tamaño para pegar CSS y minificarlo?",
          "answer": "Quédate en un tamaño cómodo para el navegador. Divide los paquetes enormes si la pestaña se ralentiza."
        },
        {
          "question": "¿Minificar valida mi CSS?",
          "answer": "No: el CSS no válido igualmente puede comprimirse. Revisa la sintaxis por separado antes de producción."
        },
        {
          "question": "¿Debo minificar durante el desarrollo?",
          "answer": "Conserva CSS legible mientras editas; minifica como un paso de compilación o de publicación."
        },
        {
          "question": "¿Los mapas de origen recuperan el original?",
          "answer": "Solo si tu flujo de compilación emite mapas. Esta página por sí sola no crea mapas de origen."
        },
        {
          "question": "¿Se eliminarán los prefijos de fabricante?",
          "answer": "Minificar debería conservar los prefijos que ve. No inventa los prefijos que faltan."
        },
        {
          "question": "¿El CSS minificado es más difícil de depurar en DevTools?",
          "answer": "Sí. Depura con los archivos de origen o los mapas y luego publica el recurso minificado."
        },
        {
          "question": "¿Minificar sube mi hoja de estilo?",
          "answer": "El procesamiento se queda en la sesión de la página."
        }
      ]
    },
    "metaDescription": "Minifica CSS en tu navegador y conserva las cadenas, las URL, los comentarios necesarios y el espaciado importante. Se rechazan más de 400 000 caracteres.",
    "ui": {}
  },
  "javascript-minifier": {
    "answer": "Un minificador de JavaScript reduce el origen JS en el navegador con Terser, sin enviar el código a un servidor.",
    "content": {
      "about": "Analiza JavaScript con Terser y luego lo comprime y lo reduce de nombres. Úsalo cuando un script pequeño deba ser más corto y quieras un analizador en lugar de buscar y reemplazar. El script no se ejecuta, y TypeScript vuelve como un error.",
      "howTo": [
        "Pega JavaScript en el recuadro izquierdo.",
        "Pulsa Minificar. Un analizador comprime y reduce los nombres del origen sin ejecutarlo.",
        "Copia el resultado o vacía ambos recuadros. Los errores de sintaxis se muestran en lugar de la salida."
      ],
      "examples": [
        {
          "title": "Una función pequeña",
          "body": "function greet(name) { return \"Hello, \" + name; } se analiza y luego se acorta al quitar espacio en blanco y al renombrar locales cuando es seguro."
        },
        {
          "title": "Origen no válido",
          "body": "Si el analizador no puede leer el archivo, obtienes un error. La herramienta no intenta «arreglar» JavaScript roto."
        }
      ],
      "explanation": "El JavaScript no se puede minificar con seguridad con un simple buscar y reemplazar. Esta herramienta usa Terser en el navegador para analizar el origen y luego comprimirlo y reducir los nombres. Tu código no se ejecuta con eval ni con new Function. La evaluación de expresiones constantes está desactivada para que las expresiones de quien usa la herramienta no se ejecuten al minificar. Se rechazan los archivos muy grandes para que la pestaña siga respondiendo.",
      "limitations": "Terser analiza el origen y luego lo comprime y reduce los nombres. El script no se ejecuta. TypeScript, y el JavaScript que el analizador no puede leer, vuelven como un error en lugar de un archivo más corto. Durante el paso no se evalúan expresiones constantes.",
      "faqs": [
        {
          "question": "¿El minificador de JavaScript es gratuito?",
          "answer": "Sí. Analizar y minificar JavaScript en este navegador es gratuito, sin cuenta."
        },
        {
          "question": "¿Esto ejecuta mi JavaScript?",
          "answer": "No. El origen se analiza y se reescribe. No se ejecuta en esta página."
        },
        {
          "question": "¿Todo programa se minificará?",
          "answer": "Solo el JavaScript sintácticamente válido. La sintaxis incompatible con el navegador o los archivos recortados fallarán con un error del analizador."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El origen se minifica en esta pestaña. No se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo minifico JavaScript en línea?",
          "answer": "Pega JavaScript válido en el minificador, pulsa Minificar y copia la salida más corta. El origen se analiza con Terser en el navegador y no se ejecuta."
        },
        {
          "question": "¿Minificar JavaScript hace que se ejecute más rápido?",
          "answer": "Sobre todo reduce el tamaño de descarga al quitar espacio en blanco y acortar nombres. La velocidad de ejecución suele no cambiar, salvo que el archivo más pequeño se cargue de forma notablemente más pronto."
        },
        {
          "question": "¿TypeScript se minificará aquí?",
          "answer": "No. La sintaxis de TypeScript se rechaza con un error del analizador. Compila o quita los tipos a JavaScript simple primero."
        },
        {
          "question": "¿Qué es la reducción de nombres en un minificador?",
          "answer": "La reducción de nombres (mangling) renombra las variables locales a identificadores más cortos cuando es seguro. Forma parte de cómo Terser reduce el archivo después de analizarlo."
        },
        {
          "question": "¿La minificación puede romper mi código?",
          "answer": "Puede, si el código depende de Function.toString(), de nombres de propiedad dinámicos que se renombraron o de una sintaxis no válida que el analizador no puede leer. Prueba la salida antes de publicar."
        },
        {
          "question": "¿Esta herramienta evalúa mis expresiones al minificar?",
          "answer": "La evaluación de expresiones constantes está desactivada aquí para que las expresiones de quien usa la herramienta no se ejecuten durante el paso de minificar."
        },
        {
          "question": "¿Qué tan grande puede ser el script que pego?",
          "answer": "Se rechazan los archivos muy grandes para que la pestaña siga respondiendo. Divide los paquetes o minifica en tu compilación para entradas de varios megabytes."
        },
        {
          "question": "¿Se incluye la generación de mapas de origen?",
          "answer": "No. Esta página solo devuelve texto minificado. Genera mapas de origen en tu empaquetador cuando los necesites."
        },
        {
          "question": "¿Debo minificar código que aún edito a mano?",
          "answer": "Conserva un archivo de origen legible para editar. Minifica solo la copia que envías a los navegadores."
        },
        {
          "question": "¿Qué ocurre con un error de sintaxis?",
          "answer": "Ves un error del analizador en lugar de la salida. La herramienta no intenta reparar JavaScript roto."
        },
        {
          "question": "¿Minificar elimina las llamadas a console.log?",
          "answer": "No de forma predeterminada en esta página. Eliminar las llamadas a console es una opción de compresión aparte en algunos flujos de compilación."
        },
        {
          "question": "¿Puedo minificar módulos ES con import y export?",
          "answer": "La sintaxis moderna que entiende el analizador puede minificarse. Si la versión del analizador rechaza una característica más nueva, compílala primero a una forma anterior."
        },
        {
          "question": "¿Se puede recuperar el formato original?",
          "answer": "No. La minificación descarta el espacio en blanco y los comentarios. Conserva el archivo original en el control de versiones."
        },
        {
          "question": "¿Por qué usar un analizador en lugar de borrar los espacios yo?",
          "answer": "Buscar y reemplazar a ciegas puede romper cadenas y expresiones regulares. Un analizador sabe dónde es seguro quitar el espacio en blanco."
        },
        {
          "question": "¿Minificar cambia los comentarios de licencia?",
          "answer": "Los avisos de licencia importantes pueden eliminarse salvo que una herramienta de compilación esté configurada para conservarlos. Revisa la salida cuando deba permanecer una cabecera de licencia."
        },
        {
          "question": "¿Se sube mi JavaScript para minificarlo?",
          "answer": "No. Terser se ejecuta en esta pestaña. El origen no se envía a un servidor ni se guarda en el almacenamiento local."
        }
      ]
    },
    "metaDescription": "Minifica JavaScript en tu navegador con un analizador. El código no se ejecuta. TypeScript vuelve como un error. Se usa Terser en esta pestaña.",
    "ui": {}
  },
  "color-contrast-checker": {
    "answer": "Un comprobador de contraste de color mide la relación de contraste WCAG entre colores de primer plano y de fondo.",
    "content": {
      "about": "Compara dos colores sólidos y muestra la relación de contraste WCAG 2 para texto normal y grande. Quienes diseñan y comprueban la etiqueta de un botón sobre su fondo lo usan antes de publicar el par. El negro sobre blanco es 21:1, y una fotografía detrás del texto queda fuera del cálculo.",
      "howTo": [
        "Elige un color de primer plano y un color de fondo, o escribe valores HEX.",
        "Lee la relación de contraste y los resultados AA/AAA para texto normal y grande.",
        "Intercambia los colores si necesitas el par inverso."
      ],
      "examples": [
        {
          "title": "Negro sobre blanco",
          "body": "La relación es 21:1, que cumple todos los criterios de contraste WCAG listados."
        },
        {
          "title": "Grises parecidos",
          "body": "Un par como #777777 sobre #999999 no cumple AA de texto normal porque la relación queda bastante por debajo de 4,5:1."
        }
      ],
      "explanation": "La herramienta usa la luminancia relativa de WCAG 2. Un apto significa que el par cumple el criterio de contraste WCAG seleccionado. El contraste es solo una parte de la accesibilidad. El tamaño de fuente, el grosor, el espaciado y el acceso por teclado siguen importando. El comprobador no afirma que un diseño sea accesible en todos los sentidos.",
      "limitations": "El resultado es la relación de contraste WCAG 2 de dos colores que el analizador puede leer. Un apto no es una auditoría completa de accesibilidad. El tamaño de fuente no se lee de una hoja de estilo, y un color que el analizador rechaza no produce ninguna relación.",
      "faqs": [
        {
          "question": "¿El comprobador de contraste de color es gratuito?",
          "answer": "Sí. Comprobar un par de primer plano y fondo frente a las relaciones de contraste WCAG es gratuito, sin cuenta."
        },
        {
          "question": "¿Un apto significa que mi interfaz es accesible?",
          "answer": "No. Solo significa que ese par de colores cumple ese umbral de contraste. Siguen aplicando otros requisitos."
        },
        {
          "question": "¿Qué relaciones son AA y AAA?",
          "answer": "El texto normal usa 4,5:1 para AA y 7:1 para AAA. El texto grande usa 3:1 para AA y 4,5:1 para AAA. La página marca por separado cada uno de esos cuatro resultados."
        },
        {
          "question": "¿Cuenta una foto de fondo?",
          "answer": "No. La relación usa los dos colores sólidos que escribes. Una fotografía detrás del texto, o una capa translúcida, queda fuera del cálculo."
        },
        {
          "question": "¿Cómo compruebo el contraste de color para la accesibilidad?",
          "answer": "Escribe un color de primer plano y un color de fondo, y luego lee la relación de contraste y las marcas AA/AAA para texto normal y grande. El cálculo sigue la luminancia relativa de WCAG 2."
        },
        {
          "question": "¿Qué relación de contraste necesito para el texto del cuerpo?",
          "answer": "WCAG AA exige al menos 4,5:1 para el texto normal. AAA exige 7:1. El texto grande tiene umbrales más bajos: 3:1 para AA y 4,5:1 para AAA."
        },
        {
          "question": "¿Qué cuenta como texto grande en WCAG?",
          "answer": "El texto grande es al menos 18 puntos en regular o 14 puntos en negrita, más o menos 24 px en regular o 18,66 px en negrita. El comprobador informa los resultados de texto grande por separado del texto normal."
        },
        {
          "question": "¿Un apto significa que toda la página es accesible?",
          "answer": "No. El contraste es solo un requisito. Siguen importando el orden de enfoque, las etiquetas, el uso del teclado y los ajustes de movimiento."
        },
        {
          "question": "¿Puedo probar un fondo en degradado?",
          "answer": "La relación usa dos colores sólidos. En un degradado, prueba el texto contra las paradas más claras y más oscuras que queden detrás de las letras."
        },
        {
          "question": "¿Por qué el negro sobre blanco es 21:1?",
          "answer": "Es el contraste máximo entre el negro puro y el blanco puro en la fórmula WCAG. Ningún par de colores sRGB puntúa más alto."
        },
        {
          "question": "¿Los colores de enlace necesitan su propia comprobación?",
          "answer": "Sí. Comprueba el texto del enlace contra el fondo de la página, y comprueba los estilos visitado o al pasar el cursor si cambian el color."
        },
        {
          "question": "¿Cómo corrijo un par que no cumple?",
          "answer": "Oscurece el texto, aclara el fondo, o ambos, y vuelve a comprobar. Unos ajustes HEX pequeños cerca del umbral suelen recuperar un apto."
        },
        {
          "question": "¿La opacidad cambia la relación?",
          "answer": "El comprobador usa los colores sólidos que escribes. Si la interfaz real se mezcla con una capa detrás, toma una muestra del resultado mezclado o prueba los colores efectivos."
        },
        {
          "question": "¿Los colores de marca están exentos de las reglas de contraste?",
          "answer": "No. Las guías de marca igualmente necesitan un par legible para el texto. Conserva una variante de marca más oscura o más clara para el cuerpo cuando la muestra principal no cumple."
        },
        {
          "question": "¿Los iconos pueden usar una relación más baja?",
          "answer": "La guía de contraste de los componentes de interfaz difiere de la del texto. Cuando un icono transmite un significado sin una etiqueta de texto, busca un contraste claro contra su fondo."
        },
        {
          "question": "¿La herramienta lee colores de mi archivo CSS?",
          "answer": "No. Pegas o eliges los dos colores. No recorre una hoja de estilo."
        },
        {
          "question": "¿Qué formatos de color se aceptan?",
          "answer": "Los valores HEX y el selector son las entradas habituales. Un color que el analizador rechaza no produce ninguna relación hasta que lo corrijas."
        },
        {
          "question": "¿Los gráficos deben usar los mismos umbrales?",
          "answer": "El texto de los gráficos igualmente debe cumplir el contraste de texto. Los colores de datos contiguos también necesitan suficiente separación para que se distingan las series."
        },
        {
          "question": "¿La comprobación de contraste se hace en un servidor?",
          "answer": "No. El cálculo se ejecuta en el navegador a partir de los dos colores que indicas."
        },
        {
          "question": "¿Por qué dos grises parecidos no cumplieron?",
          "answer": "Una diferencia de luminancia baja da una relación baja. Pares como #777 sobre #999 suelen quedar bastante por debajo de 4,5:1 para el texto normal."
        }
      ]
    },
    "metaDescription": "Comprueba el contraste WCAG entre colores de primer plano y de fondo, con apto o no apto para AA y AAA, en texto normal y grande.",
    "ui": {}
  },
  "css-gradient-generator": {
    "answer": "Un generador de degradados CSS crea degradados lineales, radiales o cónicos para un fondo o para texto, y copia el CSS o un fragmento HTML.",
    "content": {
      "about": "Un generador de degradados CSS es una herramienta en línea gratuita que te permite mezclar visualmente dos o más colores y copiar al instante el código CSS coincidente. Eliges colores, fijas el ángulo y las paradas de color, previsualizas el resultado en vivo y pegas un linear-gradient(), radial-gradient() o conic-gradient() ya listo en tu hoja de estilo. El generador de degradados CSS de Tools Star Hub hace esto en tu navegador, sin registro y sin marca de agua. Genera CSS limpio o un fragmento HTML listo, para un fondo o para texto en degradado.",
      "howTo": [
        "Elige un tipo de degradado. Selecciona Lineal, Radial o Cónico. El lineal encaja en fondos y botones; el radial, en focos y resplandores; el cónico, en gráficos de tarta y ruedas de color.",
        "Elige tus colores. Elige un tono para cada parada de color, o empieza desde un preajuste.",
        "Añade o mueve paradas de color. Añade una parada y fija su posición (0 %–100 %); elimina las que no necesites.",
        "Fija el ángulo o la forma. Fija el ángulo (por ejemplo 45deg o 135deg) para degradados lineales y cónicos. En los radiales, elige círculo o elipse y fija la posición del centro.",
        "Copia o exporta. Pulsa Copiar CSS para obtener el código, o copia el fragmento HTML."
      ],
      "features": [
        "Degradados lineales, radiales y cónicos",
        "De dos a ocho paradas de color, con una posición para cada una",
        "Control de ángulo para degradados lineales y cónicos; forma y centro para los radiales",
        "Modalidad de texto en degradado con tamaño, grosor, fuente y alineación",
        "Copia en un clic del CSS o de un fragmento HTML (clase CSS o estilos en línea)",
        "Degradados predefinidos para inspirarte rápido"
      ],
      "examples": [
        {
          "title": "Lineal: ángulo y luego paradas de color",
          "body": ".hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }"
        },
        {
          "title": "Lineal con una palabra de dirección",
          "body": ".banner { background: linear-gradient(to right, #ff512f, #dd2476); }"
        },
        {
          "title": "Degradado de varias paradas",
          "body": ".rainbow { background: linear-gradient(90deg, red 0%, orange 25%, yellow 50%, green 75%, blue 100%); }"
        },
        {
          "title": "Degradado radial",
          "body": ".glow { background: radial-gradient(circle at center, #00c6ff, #0072ff); }"
        },
        {
          "title": "Gráfico de tarta cónico con paradas duras",
          "body": ".pie { background: conic-gradient(#4caf50 0 40%, #2196f3 40% 75%, #ff9800 75% 100%); border-radius: 50%; }"
        },
        {
          "title": "Rayas repetidas",
          "body": ".stripes { background: repeating-linear-gradient(45deg, #222 0 10px, #333 10px 20px); }"
        },
        {
          "title": "Superposición transparente sobre una imagen",
          "body": ".overlay { background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), url(photo.jpg); background-size: cover; }"
        }
      ],
      "explanation": "Todos los degradados siguen el mismo patrón: una función, una dirección o forma opcionales y luego dos o más paradas de color. Las paradas se ordenan por posición y se escriben como paradas de color CSS válidas. El texto en degradado usa background-clip: text dentro de una regla @supports, con la primera parada como color sólido de reserva, para que los navegadores más antiguos sigan mostrando texto legible.",
      "limitations": "Se admiten de dos a ocho paradas de color, y las posiciones se redondean a porcentajes enteros de 0 a 100. La herramienta no genera degradados repetidos, degradados en capas, clases de Tailwind ni archivos SVG o PNG; los ejemplos de repetición y de Tailwind de la guía son para escribirlos a mano.",
      "article": {
        "title": "Generador de degradados CSS: crea y copia código de degradado gratis",
        "intro": "Los degradados añaden profundidad, guían la mirada y hacen que las maquetaciones planas se sientan modernas. Se cargan como código, no como imágenes, así que se mantienen nítidos en todas las pantallas y casi no añaden peso a la página. Tanto si necesitas un fondo pastel suave para un hero, un botón morado intenso o texto en degradado para un titular, un creador de degradados te lleva ahí en segundos, en lugar de probar código a ciegas.",
        "sections": [
          {
            "heading": "Tipos de degradados CSS",
            "paragraphs": [
              "CSS admite tres funciones de degradado, cada una con una versión repetida. Todas se tratan como imágenes, así que van en la propiedad background o background-image.",
              "Lineal – linear-gradient(): los colores fluyen a lo largo de una línea recta en cualquier ángulo. Lo mejor para fondos de hero, botones y cabeceras.",
              "Radial – radial-gradient(): los colores fluyen hacia fuera desde un punto central como un círculo o una elipse. Lo mejor para resplandores, focos y viñetas.",
              "Cónico – conic-gradient(): los colores fluyen alrededor de un punto central, como la manecilla de un reloj. Lo mejor para gráficos de tarta, ruedas de color e indicadores de carga.",
              "Repetido – repeating-linear-gradient(), repeating-radial-gradient(), repeating-conic-gradient(): el patrón se repite para llenar el recuadro. Lo mejor para rayas, anillos y tableros de ajedrez."
            ]
          },
          {
            "heading": "¿Qué es un degradado lineal?",
            "paragraphs": [
              "Un degradado lineal transiciona colores a lo largo de una línea recta. Fijas la dirección con un ángulo (90deg va de izquierda a derecha) o una palabra como to right o to bottom right. Es el degradado más usado en la web."
            ]
          },
          {
            "heading": "¿Qué es un degradado radial?",
            "paragraphs": [
              "Un degradado radial extiende los colores hacia fuera desde un punto. Controlas la forma (circle o ellipse), el tamaño (closest-side, farthest-corner) y la posición (at center, at top left)."
            ]
          },
          {
            "heading": "¿Qué es un degradado cónico?",
            "paragraphs": [
              "Un degradado cónico rota los colores alrededor de un punto central en lugar de irradiar desde él. Con paradas de color duras, puede dibujar un gráfico de tarta en CSS puro, sin JavaScript."
            ]
          },
          {
            "heading": "Sintaxis de degradados CSS: las partes explicadas",
            "paragraphs": [
              "Ángulo (135deg): fija la dirección; 0deg apunta arriba, 90deg apunta a la derecha.",
              "Palabra de dirección (to bottom right): alternativa legible a un ángulo.",
              "Parada de color (#667eea 0%): un color y dónde se sitúa en la línea.",
              "Parada dura (red 50%, blue 50%): dos paradas en una posición dan un borde nítido.",
              "Pista de color (red, 30%, blue): mueve el punto medio de la mezcla.",
              "Forma, solo radial (circle, ellipse): forma de la extensión radial.",
              "Posición (at top left): punto central para radial y cónico.",
              "Interpolación (in oklch): espacio de color usado para la mezcla."
            ]
          },
          {
            "heading": "Ideas populares de color para degradados, con códigos hexadecimales",
            "paragraphs": [
              "Estos degradados ya listos cubren las familias de color más buscadas. Pega las paradas en la herramienta y luego ajústalas.",
              "Tonos de azul: Ocean Blue #2E3192 → #1BFFFF, linear-gradient(135deg, #2E3192, #1BFFFF). Sky Blue #56CCF2 → #2F80ED, linear-gradient(to right, #56CCF2, #2F80ED). Midnight Navy #0F2027 → #203A43 → #2C5364, linear-gradient(to right, #0F2027, #203A43, #2C5364).",
              "Tonos de verde: Fresh Mint #00B09B → #96C93D, linear-gradient(to right, #00B09B, #96C93D). Emerald #11998E → #38EF7D, linear-gradient(135deg, #11998E, #38EF7D). Forest #134E5E → #71B280, linear-gradient(to right, #134E5E, #71B280).",
              "Tonos de rojo: Crimson Fire #CB2D3E → #EF473A, linear-gradient(to right, #CB2D3E, #EF473A). Cherry #EB3349 → #F45C43, linear-gradient(135deg, #EB3349, #F45C43). Wine #870000 → #190A05, linear-gradient(to bottom, #870000, #190A05).",
              "Tonos morados y rosa: Royal Purple #667EEA → #764BA2, linear-gradient(135deg, #667EEA, #764BA2). Lavender Dream #C471F5 → #FA71CD, linear-gradient(to right, #C471F5, #FA71CD). Pink Sunset #FF9A9E → #FECFEF, linear-gradient(to top, #FF9A9E, #FECFEF).",
              "Tonos de amarillo y naranja: Sunshine #F7971E → #FFD200, linear-gradient(to right, #F7971E, #FFD200). Lemon #FDFC47 → #24FE41, linear-gradient(to right, #FDFC47, #24FE41). Dark Orange #FF8C00 → #FF2E63, linear-gradient(135deg, #FF8C00, #FF2E63).",
              "Oscuros, negro y monocromo: Charcoal #232526 → #414345, linear-gradient(to right, #232526, #414345). Black Fade #000000 → #434343, linear-gradient(to bottom, #000000, #434343). Steel Monochrome #4682B4 → #B0C4DE, linear-gradient(to right, #4682B4, #B0C4DE)."
            ]
          },
          {
            "heading": "Degradados de Tailwind CSS",
            "paragraphs": [
              "La herramienta copia CSS simple, pero el mismo degradado se puede escribir con clases de utilidad de Tailwind. Sintaxis de Tailwind v4: class=\"bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500\". Sintaxis de Tailwind v3: class=\"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500\". Ángulo personalizado y valores hexadecimales arbitrarios (v4): class=\"bg-linear-45 from-[#667eea] to-[#764ba2]\". Texto en degradado: class=\"bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent\".",
              "from-, via- y to- fijan los colores de inicio, medio y final usando la escala de color 50–950 de Tailwind. Añade posiciones de parada como from-10% o to-90% para controlar dónde cambian los colores. Tailwind v4 también añade las utilidades bg-radial y bg-conic, además de modificadores de interpolación como bg-linear-to-r/oklch."
            ]
          },
          {
            "heading": "Cómo hacer texto en degradado en CSS",
            "paragraphs": [
              "Recorta el fondo al texto y haz transparente el relleno del texto: .gradient-text { background: linear-gradient(90deg, #f12711, #f5af19); -webkit-background-clip: text; background-clip: text; color: transparent; }"
            ]
          },
          {
            "heading": "Cómo animar un fondo en degradado",
            "paragraphs": [
              "Haz el fondo más grande que su recuadro y mueve su posición: .animated-bg { background: linear-gradient(270deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); background-size: 400% 400%; animation: shift 12s ease infinite; } @keyframes shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } } @media (prefers-reduced-motion: reduce) { .animated-bg { animation: none; } }"
            ]
          },
          {
            "heading": "Degradados transparentes y glassmorfismo",
            "paragraphs": [
              "Usa paradas RGBA o HSLA para fundirte en la transparencia sobre imágenes, o combina un degradado semitransparente con backdrop-filter: blur(12px) para tarjetas de vidrio esmerilado."
            ]
          },
          {
            "heading": "Degradados más suaves con OKLCH y color HDR",
            "paragraphs": [
              "Mezclar en el espacio sRGB predeterminado puede crear una banda gris apagada en el medio (por ejemplo, de azul a amarillo). Los navegadores modernos te dejan elegir un espacio de color perceptivo: .vivid { background: linear-gradient(in oklch to right, oklch(70% 0.25 260), oklch(85% 0.2 90)); }",
              "Los colores OKLCH y Display P3 también alcanzan la gama más amplia de las pantallas HDR, y dan degradados más brillantes y saturados que el hexadecimal solo."
            ]
          },
          {
            "heading": "Buenas prácticas para degradados CSS",
            "paragraphs": [
              "Los buenos degradados son sutiles, legibles y rápidos. Sigue estas reglas para diseños que se vean profesionales y superen las comprobaciones de accesibilidad.",
              "Comprueba el contraste del texto. Prueba el texto contra el punto más claro y el más oscuro del degradado con el [comprobador de contraste de color](/tools/color-contrast-checker). WCAG 2.2 pide al menos 4,5:1 para el texto del cuerpo y 3:1 para el texto grande.",
              "Fija un respaldo sólido. Añade background-color antes del degradado para que el contenido siga siendo legible si el degradado falla.",
              "Usa colores análogos para mezclas suaves. Los tonos vecinos (azul a morado) se mezclan con limpieza; los tonos opuestos (rojo a verde) pueden enturbiarse salvo que añadas una parada intermedia o uses OKLCH.",
              "Limita las paradas. Dos o tres paradas suelen verse más limpias que seis.",
              "Prefiere CSS a las imágenes. Un degradado CSS son unos pocos bytes, se escala a cualquier pantalla y no necesita una petición HTTP.",
              "Respeta el movimiento reducido. Envuelve los degradados animados en una consulta prefers-reduced-motion.",
              "Corrige las bandas. Añade una textura de ruido tenue o una parada intermedia extra si ves escalones de color visibles en zonas grandes."
            ]
          },
          {
            "heading": "Admisión en los navegadores",
            "paragraphs": [
              "linear-gradient() y radial-gradient(): admitidos en Chrome, Firefox, Safari y Edge. conic-gradient(): Chrome 69+, Firefox 83+, Safari 12.1+, Edge 79+. background-clip: text (sin prefijo): Chrome 120+, Firefox 49+, Safari 14+ (se aconseja el prefijo), Edge 120+. Interpolación de color (in oklch): Chrome 111+, Firefox 127+, Safari 16.2+, Edge 111+.",
              "Los prefijos de fabricante como -webkit-linear-gradient ya no hacen falta en los navegadores actuales. Verifica los casos límite en Can I Use antes del lanzamiento."
            ]
          },
          {
            "heading": "¿Por qué usar el creador de degradados de Tools Star Hub?",
            "paragraphs": [
              "Lineal, radial y cónico: los tres. Salida de código: CSS, o un fragmento HTML con una clase o estilos en línea. Preajustes: un conjunto de degradados listos. Privacidad: se ejecuta en tu navegador; no se sube nada. Coste y registro: gratuito, sin cuenta, sin marca de agua. Admisión de dispositivos: funciona en escritorio y en el móvil.",
              "Herramientas relacionadas de Tools Star Hub: [Selector de color](/tools/color-picker), [Conversor de hex a RGB](/tools/hex-to-rgb) y [Generador de box-shadow](/tools/box-shadow-generator)."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "¿Cómo hago un degradado en CSS?",
          "answer": "Usa la función linear-gradient() en la propiedad background, por ejemplo background: linear-gradient(to right, #ff512f, #dd2476);. Un generador de degradados CSS construye este código por ti de forma visual."
        },
        {
          "question": "¿Cómo añado un fondo en degradado a un sitio web?",
          "answer": "Aplica un degradado al body o a una sección con background: linear-gradient(...). Añade min-height: 100vh para que llene la pantalla, y fija un background-color sólido de reserva."
        },
        {
          "question": "¿Cuál es la diferencia entre los degradados lineales y los radiales?",
          "answer": "Un degradado lineal mezcla colores a lo largo de una línea recta. Un degradado radial los mezcla hacia fuera desde un punto central, en un círculo o una elipse."
        },
        {
          "question": "¿Puedo usar transparencia en un degradado CSS?",
          "answer": "Sí. Usa RGBA, HSLA o la palabra transparent como parada de color, como linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8))."
        },
        {
          "question": "¿Cómo creo texto en degradado?",
          "answer": "Fija un degradado como fondo y luego añade background-clip: text y color: transparent. Incluye el prefijo -webkit- para Safari."
        },
        {
          "question": "¿Los degradados CSS son mejores que las imágenes de degradado?",
          "answer": "Suele sí. Los degradados CSS pesan unos pocos bytes, se mantienen nítidos a cualquier tamaño y son fáciles de editar. Usa una imagen solo para efectos complejos de malla o de ruido que CSS no puede producir."
        },
        {
          "question": "¿El generador de degradados de Tools Star Hub admite Tailwind CSS?",
          "answer": "No de forma directa. La herramienta copia CSS o HTML simple. Para usar el degradado en Tailwind, escríbelo con las clases de utilidad from-, via- y to-, como se muestra en la guía de arriba."
        },
        {
          "question": "¿El generador de degradados CSS es gratuito?",
          "answer": "Sí. La herramienta es 100 % gratuita, no necesita registro y se ejecuta por completo en tu navegador."
        },
        {
          "question": "¿Cuántas paradas de color puedo añadir?",
          "answer": "Añade varias paradas a lo largo de la línea del degradado; mantén suaves las transiciones espaciando las paradas a propósito."
        },
        {
          "question": "¿Qué ángulo debo usar para un fundido de arriba abajo?",
          "answer": "180deg (o «to bottom») va desde el borde superior hacia abajo en los degradados lineales CSS estándar."
        },
        {
          "question": "¿Puedo copiar CSS que funcione en navegadores antiguos?",
          "answer": "La sintaxis moderna de linear-gradient está ampliamente admitida; conserva un color de fondo sólido de reserva para los casos heredados poco habituales."
        },
        {
          "question": "¿Cómo hago un patrón de rayas repetidas?",
          "answer": "Usa repeating-linear-gradient con paradas de color cortas para que el patrón se tesela por el elemento."
        },
        {
          "question": "¿La vista previa coincide exactamente con los píxeles de producción?",
          "answer": "Los navegadores rasterizan de forma parecida, pero el suavizado y los perfiles de color pueden causar diferencias mínimas."
        },
        {
          "question": "¿Puedo animar el ángulo de un degradado?",
          "answer": "Animar background-position o propiedades personalizadas es más fiable que interpolar cadenas de degradado complejas."
        },
        {
          "question": "¿En qué se diferencian los degradados cónicos de los radiales?",
          "answer": "El cónico barre alrededor de un centro, como una tarta; el radial se expande hacia fuera desde un punto central."
        },
        {
          "question": "¿Los degradados deben vivir en CSS o como recursos PNG?",
          "answer": "El CSS puro se escala con nitidez y se queda diminuto; usa imágenes cuando necesites ruido, fotos o arte complejo."
        },
        {
          "question": "¿Puedo usar paradas hexadecimales y rgba juntas?",
          "answer": "Sí: mezcla las notaciones con libertad siempre que cada parada sea un color CSS válido."
        },
        {
          "question": "¿Cómo me fundo con suavidad en una superposición transparente?",
          "answer": "Termina con una parada que use alfa 0 para que se vea el contenido de debajo."
        },
        {
          "question": "¿El CSS generado funcionará dentro de un relleno SVG?",
          "answer": "SVG suele necesitar sus propios elementos de degradado; pega los degradados CSS en fondos HTML/CSS en su lugar."
        },
        {
          "question": "¿Puedo exportar solo la línea background-image?",
          "answer": "Copia la función de degradado y colócala en cualquier declaración background o background-image que ya tengas."
        }
      ]
    },
    "metaDescription": "Crea degradados CSS lineales, radiales o cónicos, o texto en degradado, y copia el CSS o el HTML. Hasta ocho paradas de color, en tu navegador.",
    "ui": {}
  },
  "box-shadow-generator": {
    "answer": "Un generador de box-shadow te permite ajustar el desplazamiento, el desenfoque, la expansión y el color, y luego copiar un valor CSS box-shadow.",
    "content": {
      "about": "Ajusta un box-shadow de CSS y copia la declaración, con una vista previa que usa los mismos números. Úsalo cuando una tarjeta o un botón necesite una sombra proyectada o una sombra interior. Los desplazamientos, el desenfoque y la expansión se convierten en píxeles enteros, y las sombras apiladas hay que combinarlas en tu hoja de estilo.",
      "howTo": [
        "Ajusta el desplazamiento horizontal y vertical, el desenfoque, la expansión, el color y la opacidad.",
        "Activa inset si quieres una sombra interior.",
        "Copia el CSS. La vista previa usa los mismos valores."
      ],
      "examples": [
        {
          "title": "Una sombra proyectada suave",
          "body": "box-shadow: 0 8px 24px rgba(15, 39, 68, 0.2);"
        }
      ],
      "explanation": "El desplazamiento mueve la sombra. El desenfoque suaviza el borde. La expansión agranda o reduce la sombra antes del desenfoque. La opacidad se aplica como RGBA. La vista previa y el CSS copiado usan el mismo valor calculado.",
      "limitations": "El generador escribe un solo box-shadow. No se te arman las capas separadas por comas. Los desplazamientos, el desenfoque y la expansión se redondean a píxeles enteros, y un color que el analizador rechaza no produce declaración. La vista previa es un recuadro de muestra, no un elemento de tu página.",
      "faqs": [
        {
          "question": "¿El generador de box-shadow es gratuito?",
          "answer": "Sí. Ajustar un box-shadow de CSS y copiar la declaración es gratuito, sin registro."
        },
        {
          "question": "¿Puedo apilar varias sombras?",
          "answer": "Esta versión genera una sombra. Puedes combinar a mano los valores copiados en tu hoja de estilo si necesitas capas."
        },
        {
          "question": "¿Los valores en píxeles se redondean?",
          "answer": "Los desplazamientos, el desenfoque y la expansión se convierten en píxeles enteros en el CSS copiado. Una posición fraccionaria del control no se queda fraccionaria."
        },
        {
          "question": "¿Inset cambia el color?",
          "answer": "Inset solo dibuja la sombra dentro del recuadro. El color y la opacidad se quedan en los valores que fijaste."
        },
        {
          "question": "¿Cómo creo un box-shadow de CSS?",
          "answer": "Ajusta el desplazamiento, el desenfoque, la expansión, el color y la opacidad en el generador, y luego copia la declaración box-shadow a tu hoja de estilo. La vista previa usa los mismos valores."
        },
        {
          "question": "¿Qué hace el radio de desenfoque?",
          "answer": "El desenfoque suaviza el borde de la sombra. Un desenfoque cero hace un borde duro; un desenfoque mayor hace una caída más suave y ancha."
        },
        {
          "question": "¿Qué hace el radio de expansión?",
          "answer": "La expansión agranda o reduce la sombra antes de aplicar el desenfoque. Una expansión positiva la agranda; una negativa la encoge."
        },
        {
          "question": "¿Cómo funcionan los desplazamientos horizontal y vertical?",
          "answer": "Una X positiva mueve la sombra a la derecha; una Y positiva la mueve hacia abajo. Los valores negativos la mueven a la izquierda o hacia arriba."
        },
        {
          "question": "¿Cuándo debo usar una sombra inset?",
          "answer": "Usa inset para botones pulsados, pozos o resaltes interiores. La sombra se dibuja dentro del recuadro en lugar de fuera."
        },
        {
          "question": "¿Este generador puede crear varias sombras en capas?",
          "answer": "Escribe una sombra cada vez. Copia cada capa y únelas con comas en CSS si necesitas una pila."
        },
        {
          "question": "¿Por qué mis valores son píxeles enteros?",
          "answer": "Los desplazamientos, el desenfoque y la expansión se redondean a píxeles enteros en el CSS copiado para que la declaración se quede ordenada y predecible."
        },
        {
          "question": "¿Cómo hago una sombra suave de tarjeta?",
          "answer": "Empieza con un desplazamiento Y pequeño, un desenfoque grande, una expansión ligera y una opacidad baja, como 0 8px 24px con unas 20 % de opacidad."
        },
        {
          "question": "¿box-shadow afecta al tamaño de la maquetación?",
          "answer": "No. Las sombras se pintan fuera del recuadro y no cambian el ancho ni el alto del elemento en el flujo normal."
        },
        {
          "question": "¿Puedo animar un box-shadow?",
          "answer": "Sí, con transiciones o animaciones CSS en la propiedad box-shadow. Prefiere animar la opacidad o tokens de elevación cuando importe el rendimiento."
        },
        {
          "question": "¿Cómo se aplica la opacidad en la salida?",
          "answer": "La opacidad se incorpora al color como RGBA en la regla copiada, coincidiendo con la vista previa."
        },
        {
          "question": "¿Una sombra seguirá el border-radius?",
          "answer": "Sí. La sombra sigue la curva del radio del borde del recuadro en los navegadores modernos."
        },
        {
          "question": "¿Qué color debe usar una sombra neutra?",
          "answer": "Un gris azulado oscuro a baja opacidad suele verse más natural que el negro puro. Ajústalo para que coincida con el fondo de la página."
        },
        {
          "question": "¿La vista previa coincide con cada elemento de mi sitio?",
          "answer": "La vista previa es un recuadro de muestra. El tamaño de fuente, el ancho y los elementos vecinos de tu página pueden cambiar lo fuerte que se siente la sombra."
        },
        {
          "question": "¿Se sube el CSS cuando lo copio?",
          "answer": "No. La generación se queda en el navegador. Copiar solo escribe en el portapapeles cuando tú lo eliges."
        },
        {
          "question": "¿Cómo quito una sombra después?",
          "answer": "Pon box-shadow: none; en el elemento, o elimina la declaración de la regla."
        }
      ]
    },
    "metaDescription": "Ajusta el desplazamiento, el desenfoque, la expansión y el color, y luego copia un valor CSS box-shadow. Los valores se redondean a píxeles enteros.",
    "ui": {}
  },
  "markdown-to-html": {
    "answer": "Un conversor de Markdown a HTML convierte títulos, listas, enlaces y código en origen HTML en local, sin ejecutar la entrada.",
    "content": {
      "about": "Convierte Markdown habitual en origen HTML: títulos, énfasis, enlaces, listas, bloques de código y tablas simples. Quienes pasan un README a una página lo usan cuando necesitan las etiquetas, no una vista renderizada. El HTML en bruto del Markdown se escapa, y la dirección inversa es el [conversor de HTML a Markdown](/tools/html-to-markdown).",
      "howTo": [
        "Pega Markdown, o carga la muestra para ver las características admitidas.",
        "Pulsa Convertir para producir origen HTML en el recuadro de salida.",
        "Copia el HTML o descarga un archivo .html.",
        "No esperes una vista previa renderizada en vivo. La salida se muestra como texto para que no pueda ejecutarse en la página."
      ],
      "examples": [
        {
          "title": "Un título de README",
          "body": "# Notes se convierte en <h1>Notes</h1>. **bold** y *italic* se convierten en strong y em. Los enlaces conservan solo destinos http, https, mailto, / y #."
        },
        {
          "title": "Código cercado",
          "body": "Tres acentos graves envuelven un bloque pre/code. El contenido se escapa, así que <script> en un cercado es texto, no un script."
        }
      ],
      "explanation": "El conversor admite Markdown habitual: títulos, párrafos, énfasis, enlaces, listas, citas, código en línea, bloques cercados, reglas horizontales y tablas simples. El HTML en bruto del Markdown se escapa. Se descartan los enlaces javascript:. No hay una vista previa HTML en la página.",
      "limitations": "Se convierten títulos, énfasis, enlaces, imágenes, listas, citas, bloques de código, reglas y tablas simples. El HTML en bruto del Markdown se escapa, y se descarta un enlace javascript:. No hay una vista previa renderizada. Se rechazan más de 400 000 caracteres.",
      "faqs": [
        {
          "question": "¿El conversor de Markdown a HTML es gratuito?",
          "answer": "Sí. Convertir Markdown a origen HTML es gratuito y no se requiere registro."
        },
        {
          "question": "¿Cómo convierto Markdown a HTML?",
          "answer": "Pega Markdown en el recuadro izquierdo y pulsa Convertir. Copia o descarga el origen HTML. La conversión se ejecuta en tu navegador."
        },
        {
          "question": "¿Se ejecutará el HTML de mi Markdown?",
          "answer": "No. Las etiquetas de la entrada se escapan. El recuadro de salida es un área de texto, no un documento en vivo."
        },
        {
          "question": "¿Qué es Markdown?",
          "answer": "Markdown es un formato de texto sin formato en el que los símbolos marcan el formato, como # para un título, ** para negrita y - para un elemento de lista. Es fácil de escribir y se convierte bien a HTML."
        },
        {
          "question": "¿Esto admite tablas y bloques de código?",
          "answer": "Sí. Se convierten las tablas simples, los bloques de código cercados, los títulos, las listas, los enlaces, las imágenes y las citas."
        },
        {
          "question": "¿Cómo convierto un borrador Markdown en HTML?",
          "answer": "Pega el Markdown, convierte y luego copia el HTML a tu CMS, correo o página estática."
        },
        {
          "question": "¿Los títulos se convierten en etiquetas h1–h6?",
          "answer": "Sí: # hasta ###### se corresponden con los niveles de título coincidentes en la salida."
        },
        {
          "question": "¿Cómo se renderizan los enlaces de Markdown?",
          "answer": "[text](url) se convierte en una etiqueta <a href>. Añade títulos solo si tu dialecto los admite."
        },
        {
          "question": "¿Qué hay de las imágenes escritas en Markdown?",
          "answer": "![alt](src) se convierte en <img>. Asegúrate de que la URL src sea accesible en el sitio de destino."
        },
        {
          "question": "¿Los bloques de código cercados se envuelven en pre y code?",
          "answer": "Normalmente sí, a menudo con una clase de idioma cuando etiquetas el cercado."
        },
        {
          "question": "¿Cómo se convierten las listas no ordenadas?",
          "answer": "Los marcadores de lista con guion o asterisco se convierten en estructuras ul/li."
        },
        {
          "question": "¿Las citas en bloque sobreviven a la conversión?",
          "answer": "Las líneas que empiezan con > suelen convertirse en elementos <blockquote>."
        },
        {
          "question": "¿Puedo previsualizar el HTML de forma visual en la página?",
          "answer": "Si existe un panel de vista previa, úsalo; de lo contrario, pégalo en un archivo HTML local para comprobarlo."
        },
        {
          "question": "¿Se convierte el front matter (YAML)?",
          "answer": "La mayoría de los conversores simples lo ignoran o lo dejan pasar: quita el front matter antes de convertir."
        },
        {
          "question": "¿Cómo conservo el aspecto monoespaciado del código en línea?",
          "answer": "Los acentos graves se convierten en <code>; combínalo con CSS para el aspecto monoespaciado."
        },
        {
          "question": "¿Se admiten las casillas de las listas de tareas?",
          "answer": "Solo si el motor implementa las listas de tareas de GFM; de lo contrario, se quedan como texto sin formato."
        },
        {
          "question": "¿Qué pasa si mi Markdown usa notas al pie?",
          "answer": "La admisión de notas al pie varía: confírmala o convierte las notas a mano."
        },
        {
          "question": "¿Debo sanitizar el HTML antes de publicar?",
          "answer": "Sí, cuando el Markdown viene de autoría no confiable: sanitiza o usa un renderizador seguro."
        },
        {
          "question": "¿Puedo convertir un README entero de una vez?",
          "answer": "Sí: pega el contenido del archivo; revisa después los enlaces relativos."
        },
        {
          "question": "¿Markdown a HTML sube mi borrador?",
          "answer": "La conversión en esta página está pensada para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Convierte Markdown a origen HTML en tu navegador. El HTML en bruto se escapa y no se ejecuta. Se rechazan más de 400 000 caracteres.",
    "ui": {}
  },
  "html-to-markdown": {
    "answer": "Un conversor de HTML a Markdown lee el HTML como texto y produce Markdown para las etiquetas habituales, sin ejecutar el marcado.",
    "content": {
      "about": "Convierte etiquetas HTML habituales en Markdown: títulos, enlaces, listas, imágenes y tablas. Úsalo cuando un extracto de blog o una exportación de un CMS deba convertirse en un archivo .md. Se omiten los bloques script, style e iframe, y las maquetaciones anidadas pueden aplanarse.",
      "howTo": [
        "Pega origen HTML. Se trata como texto, no se carga como una página.",
        "Pulsa Convertir. Las etiquetas habituales se convierten en Markdown; se omiten los bloques script y style.",
        "Copia el Markdown o descarga un archivo .md.",
        "Usa Muestra para ver un ejemplo seguro que no se ejecuta."
      ],
      "examples": [
        {
          "title": "Un extracto de blog",
          "body": "<h2>Title</h2><p>Hello <strong>world</strong></p> se convierte en ## Title y un párrafo con **world**."
        },
        {
          "title": "Scripts no deseados",
          "body": "Se ignora un bloque <script>. El conversor nunca evalúa ni inserta el marcado en el documento."
        }
      ],
      "explanation": "El HTML se tokeniza como origen. Los títulos, párrafos, enlaces, énfasis, listas, citas, código, pre, imágenes, tablas y reglas se corresponden con Markdown. Las maquetaciones anidadas y los elementos personalizados pueden aplanarse. Esto es un subconjunto práctico, no una implementación completa de HTML.",
      "limitations": "Los títulos, párrafos, enlaces, énfasis, listas, citas, código, imágenes, tablas y reglas se corresponden con Markdown. Se omiten los bloques script, style, iframe, object, embed y noscript. Las maquetaciones anidadas pueden aplanarse. Se rechazan más de 400 000 caracteres.",
      "faqs": [
        {
          "question": "¿El conversor de HTML a Markdown es gratuito?",
          "answer": "Sí. Convertir HTML habitual en Markdown es gratuito, sin cuenta."
        },
        {
          "question": "¿Se ejecuta el HTML?",
          "answer": "No. Nunca se convierte en DOM en vivo en esta página. Se omiten los contenidos de script, style e iframe."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. La conversión se queda en esta pestaña. El HTML no se envía a un servidor ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Por qué convertir HTML a Markdown?",
          "answer": "Markdown es más fácil de editar y revisar que HTML, y lo usan muchos sitios de documentación, wikis y aplicaciones de notas."
        },
        {
          "question": "¿La conversión conserva enlaces e imágenes?",
          "answer": "Sí. Los enlaces se convierten en [text](url) y las imágenes en ![alt](src). Se omiten scripts, estilos y marcos incrustados."
        },
        {
          "question": "¿Cómo convierto un fragmento HTML en Markdown?",
          "answer": "Pega el HTML, convierte y copia el Markdown. Revisa después las listas, los enlaces y las tablas."
        },
        {
          "question": "¿Por qué merece la pena convertir HTML a forma Markdown?",
          "answer": "Markdown es más fácil de editar en repositorios y CMS; la conversión ayuda a migrar contenido HTML antiguo."
        },
        {
          "question": "¿El conversor conserva hipervínculos e imágenes?",
          "answer": "Suele sí, como [text](url) y ![alt](src). Los valores href/src que falten necesitan un arreglo a mano."
        },
        {
          "question": "¿Qué ocurre con las etiquetas script y style incrustadas?",
          "answer": "Normalmente se descartan porque Markdown no tiene un equivalente seguro para scripts en bruto."
        },
        {
          "question": "¿Se conservan como marcado los envoltorios genéricos div y span?",
          "answer": "A menudo se aplanan. Importan más las etiquetas semánticas (títulos, listas, énfasis)."
        },
        {
          "question": "¿Por qué cada elemento ordenado puede renderizarse como 1.?",
          "answer": "Algunos motores emiten 1. en cada elemento y renumeran al renderizar. Otros escriben números incrementales."
        },
        {
          "question": "¿Las listas anidadas conservan sus niveles de sangría?",
          "answer": "Los buenos conversores sangran los ul/ol anidados. Corrige la sangría si un nivel se ve plano."
        },
        {
          "question": "¿Se conserva el énfasis dentro de las celdas de tabla?",
          "answer": "Cuando se admiten tablas, los marcadores de énfasis deberían quedarse dentro de las celdas: verifica las tablas complejas."
        },
        {
          "question": "¿Qué pasa si a una etiqueta de anclaje le falta el href?",
          "answer": "Puedes obtener texto suelto o un enlace vacío. Añade las URL antes de publicar."
        },
        {
          "question": "¿Las entidades HTML se convierten en caracteres ordinarios?",
          "answer": "A menudo sí (&amp; → &). Vuelve a escapar si necesitas el texto literal de la entidad."
        },
        {
          "question": "¿Se conserva el espacio en blanco dentro de los bloques de código cercados?",
          "answer": "El contenido de <pre><code> debería conservar la sangría; informa de fallos si un cercado comprime los espacios."
        },
        {
          "question": "¿Los comentarios HTML sobreviven a la conversión a Markdown?",
          "answer": "Normalmente se eliminan. Conserva las notas importantes fuera del HTML antes de convertir."
        },
        {
          "question": "¿Puedo convertir el volcado entero de una página web guardada?",
          "answer": "Puedes pegarlo, pero la cromática de navegación y los scripts ensuciarán el resultado: recorta primero al cuerpo del artículo."
        },
        {
          "question": "¿Las tablas HTML complejas siempre sobreviven intactas?",
          "answer": "Las tablas simples salen mejor que las celdas combinadas. Las maquetaciones complejas pueden necesitar tablas Markdown a mano."
        },
        {
          "question": "¿HTML a Markdown envía el marcado a un servidor remoto?",
          "answer": "La conversión en esta página está pensada para ejecutarse en local en la sesión."
        }
      ]
    },
    "metaDescription": "Convierte origen HTML en Markdown en tu navegador. La entrada se trata como texto y no se ejecuta. Se omiten script, style e iframe.",
    "ui": {}
  },
  "json-to-csv": {
    "answer": "JSON a CSV convierte una matriz de objetos en un archivo CSV que puedes copiar o descargar. Los valores anidados se quedan en la celda como texto JSON.",
    "content": {
      "about": "Pega una matriz JSON de objetos y obtén CSV que puedes copiar o descargar. La primera fila son los nombres de las columnas. Las celdas que contienen comas, comillas o saltos de línea van entre comillas.",
      "howTo": [
        "Pega JSON. El valor debe ser una matriz, y cada elemento debe ser un objeto.",
        "Pulsa Convertir a CSV.",
        "Comprueba los recuentos de filas y columnas.",
        "Copia el CSV o descarga data.csv. Pulsa Restablecer para vaciar ambos recuadros."
      ],
      "features": [
        "Las columnas son las claves de todos los objetos, en el orden en que aparecen por primera vez.",
        "Una clave que falta se convierte en una celda vacía.",
        "null se convierte en una celda vacía. Los objetos y las matrices anidados se escriben como texto JSON dentro de la celda.",
        "Copiar y descargar se quedan en el navegador."
      ],
      "examples": [
        {
          "title": "Dos personas",
          "body": "Una matriz con {\"name\":\"John\",\"age\":30} y {\"name\":\"Sara\",\"age\":25} se convierte en una cabecera name,age y dos filas de datos."
        },
        {
          "title": "Una coma en un nombre",
          "body": "El nombre Doe, Jane se escribe como \"Doe, Jane\" para que una hoja de cálculo no lo divida en dos columnas."
        }
      ],
      "explanation": "El conversor lee el JSON en la página. No lo envía a ningún sitio. Si un objeto tiene una clave que los demás no tienen, esa clave igualmente es una columna y las otras filas reciben una celda vacía. Un valor anidado se pasa por JSON.stringify para que los datos sigan en el archivo, como una sola celda y no como columnas extra.",
      "tips": [
        "Si tienes un objeto en lugar de una matriz, envuélvelo entre corchetes.",
        "Abre el archivo descargado en una hoja de cálculo y comprueba que las celdas entre comillas se quedaron en una sola columna."
      ],
      "limitations": "Se rechaza una matriz JSON de números, o un solo objeto que no está dentro de una matriz. Los objetos anidados no se aplanan en columnas extra. Un JSON muy grande puede ser lento porque se analiza en el navegador.",
      "faqs": [
        {
          "question": "¿Qué pasa si el JSON no es válido?",
          "answer": "La página indica que no es JSON válido y no inventa un CSV."
        },
        {
          "question": "¿Cómo se tratan las comillas dentro de una celda?",
          "answer": "La celda se envuelve en comillas, y cada comilla de su interior se duplica, que es la regla habitual del CSV."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El JSON se convierte en esta pestaña. No se sube."
        },
        {
          "question": "¿Cómo abro JSON en Excel?",
          "answer": "Convierte aquí la matriz JSON a CSV, descarga data.csv y abre ese archivo en Excel o Google Sheets. Cada objeto se convierte en una fila y cada clave en una columna."
        },
        {
          "question": "¿Qué ocurre con los objetos anidados?",
          "answer": "Los objetos anidados no se aplanan en columnas extra. Aplánalos primero si necesitas cada campo anidado en su propia columna."
        },
        {
          "question": "¿Cómo convierto una matriz JSON en un archivo CSV?",
          "answer": "Pega una matriz JSON de objetos, convierte y luego descarga o copia el CSV para Excel o Sheets."
        },
        {
          "question": "¿Qué formas de JSON se convierten bien en filas?",
          "answer": "Una matriz de objetos planos con claves compartidas funciona mejor. El anidamiento profundo suele necesitar aplanarse primero."
        },
        {
          "question": "¿Cómo se eligen las cabeceras de columna a partir de los objetos?",
          "answer": "Las cabeceras suelen salir de las claves de los objetos, en el orden en que se ven por primera vez en la matriz."
        },
        {
          "question": "¿Puedo convertir un solo objeto JSON?",
          "answer": "Muchos conversores envuelven un objeto como una tabla de una fila; una matriz de objetos es más clara."
        },
        {
          "question": "¿Qué delimitador usa el CSV?",
          "answer": "La coma es el valor predeterminado. Algunas herramientas ofrecen punto y coma o tabulador para el Excel de algunas regiones."
        },
        {
          "question": "¿Cómo aparecen en las celdas los valores booleanos y null?",
          "answer": "Los booleanos suelen convertirse en texto true/false; los null se convierten en celdas vacías: confírmalo antes de importar."
        },
        {
          "question": "¿Pueden las matrices dentro de un campo convertirse en varias columnas?",
          "answer": "Normalmente se serializan en una sola celda. Expándelas antes si necesitas columnas aparte."
        },
        {
          "question": "¿Por qué Excel puede mostrar caracteres extraños?",
          "answer": "Falta el BOM UTF-8 o la codificación de importación es incorrecta. Vuelve a importar como UTF-8 o guarda con un BOM si hace falta."
        },
        {
          "question": "¿Cómo convierto solo un subconjunto de claves?",
          "answer": "Recorta el JSON a los campos que quieras antes de convertir, o elimina columnas después de importar."
        },
        {
          "question": "¿Importa el orden de los objetos en la matriz?",
          "answer": "Sí: el orden de las filas sigue el de la matriz, salvo que luego ordenes en una hoja de cálculo."
        },
        {
          "question": "¿Qué pasa si las claves difieren entre objetos?",
          "answer": "Las claves que faltan suelen convertirse en celdas vacías en esa fila; las claves extra añaden columnas."
        },
        {
          "question": "¿Puedo volver después de CSV a JSON?",
          "answer": "Usa una herramienta de [CSV a JSON](/tools/csv-to-json); las idas y vueltas pueden perder información de tipo (todo se convierte en cadenas)."
        },
        {
          "question": "¿Hay un límite de tamaño para el JSON pegado?",
          "answer": "Los textos muy grandes pueden ralentizar la pestaña: divide los conjuntos grandes o convierte sin conexión."
        },
        {
          "question": "¿Debo validar el JSON antes de convertirlo?",
          "answer": "Sí: corrige primero los errores de sintaxis para no exportar un CSV parcial o vacío."
        },
        {
          "question": "¿JSON a CSV sube mi conjunto de datos?",
          "answer": "La conversión en esta página está pensada para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Convierte una matriz de objetos JSON en CSV, incluidas las comas y las comillas dentro de las celdas. Copia o descarga el archivo en el navegador.",
    "ui": {}
  },
  "csv-to-json": {
    "answer": "CSV a JSON lee una fila de cabecera y las celdas entre comillas, y luego escribe JSON formateado o compacto.",
    "content": {
      "about": "Pega CSV cuya primera fila son los nombres de las columnas. Obtienes una matriz JSON de objetos, con espacios para leerla o compacta para un archivo.",
      "howTo": [
        "Pega el CSV, incluida la fila de cabecera.",
        "Elige JSON formateado o JSON compacto.",
        "Pulsa Convertir a JSON.",
        "Copia el JSON, descarga data.json o vacía el formulario."
      ],
      "features": [
        "Las celdas entre comillas pueden contener comas y saltos de línea.",
        "Una comilla duplicada dentro de una celda entre comillas se convierte en una sola comilla.",
        "Las celdas vacías se quedan como cadenas vacías.",
        "Una cabecera en blanco se nombra column_1, column_2, y así sucesivamente. Las cabeceras duplicadas reciben un sufijo numérico."
      ],
      "examples": [
        {
          "title": "Una hoja pequeña",
          "body": "name,age y luego John,30 y Sara,25 se convierten en dos objetos con name y age. Age se queda como cadena, porque las celdas CSV son texto."
        },
        {
          "title": "Una coma entre comillas",
          "body": "La fila \"Doe, Jane\",25 conserva Doe, Jane como un solo nombre. La coma dentro de las comillas no es una columna nueva."
        }
      ],
      "explanation": "El analizador recorre el texto. Una comilla inicia una celda, y la siguiente comilla no duplicada la termina. Una coma fuera de las comillas inicia una celda nueva. Un salto de línea fuera de las comillas inicia una fila nueva. La primera fila se convierte en las claves. Las filas posteriores se convierten en objetos. Se rechaza una fila con más celdas que la cabecera para no omitir valores extra.",
      "tips": [
        "Si una hoja de cálculo exportó números, seguirán siendo cadenas JSON. Conviértelos en tu propio código si necesitas números.",
        "Usa JSON compacto cuando lo pegues en el cuerpo de una petición. Usa JSON formateado cuando quieras leerlo."
      ],
      "limitations": "No hay opción para omitir la cabecera ni para elegir otro delimitador. Un archivo separado por punto y coma no se dividirá por los puntos y coma. Una fila más larga que la cabecera detiene la conversión.",
      "faqs": [
        {
          "question": "¿Qué pasa si falta una comilla?",
          "answer": "Una comilla sin cerrar, o una comilla en medio de una celda sin comillas, muestra un error en lugar de un archivo JSON parcial."
        },
        {
          "question": "¿Las celdas vacías son null?",
          "answer": "No. Una celda vacía se convierte en una cadena vacía para que se vea que la columna estaba presente."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El CSV se queda en esta pestaña mientras se analiza. No se envía a un servidor."
        },
        {
          "question": "¿Cómo convierto una hoja de cálculo a JSON?",
          "answer": "Guarda o exporta la hoja como CSV con una fila de cabecera, pégala aquí y convierte. Cada fila se convierte en un objeto que usa las cabeceras como claves."
        },
        {
          "question": "¿Los números se convierten en números JSON?",
          "answer": "No. El CSV no tiene tipos de datos, así que cada celda se convierte en una cadena JSON, como \"42\", y una celda vacía se convierte en una cadena vacía. Convierte los números en tu propio código si los necesitas."
        },
        {
          "question": "¿Cómo convierto una exportación CSV en objetos JSON?",
          "answer": "Pega CSV con una fila de cabecera, convierte y copia la matriz JSON. Cada fila se convierte en un objeto con las cabeceras como claves."
        },
        {
          "question": "¿Por qué las comas entre comillas no crean columnas CSV nuevas?",
          "answer": "Las comillas del CSV evitan que las comas de dentro de una celda dividan las columnas. Las comillas rotas dividen los campos de forma incorrecta."
        },
        {
          "question": "¿Cómo escribo un carácter de comilla dentro de un campo CSV entre comillas?",
          "answer": "El CSV estándar las duplica (\"\"). Una sola comilla suelta suele significar una fila mal formada."
        },
        {
          "question": "¿Cómo se representan las celdas CSV en blanco después de convertirlas a JSON?",
          "answer": "Normalmente una cadena vacía. Algunos flujos prefieren null: ajústalo después de la conversión si hace falta."
        },
        {
          "question": "¿Qué sale mal cuando un campo CSV nunca cierra su comilla?",
          "answer": "Los analizadores pueden unir las filas siguientes en un solo campo o fallar. Corrige las comillas en la hoja de cálculo y vuelve a exportar."
        },
        {
          "question": "¿Necesito una fila de cabecera para obtener objetos JSON con claves?",
          "answer": "Para JSON con forma de objeto, sí. Sin cabeceras obtienes matrices de matrices."
        },
        {
          "question": "¿Los valores separados por tabulador se convertirán como CSV si coincide el delimitador?",
          "answer": "Si la herramienta admite una opción de delimitador de tabulador, sí. De lo contrario, sustituye los tabuladores con cuidado o exporta como CSV."
        },
        {
          "question": "¿Cómo se conservan en JSON los códigos postales con ceros a la izquierda?",
          "answer": "Conserva esas columnas como cadenas. La conversión numérica eliminaría los ceros a la izquierda."
        },
        {
          "question": "¿El JSON suele reducir una tabla plana en comparación con el CSV?",
          "answer": "A menudo es más grande porque las claves se repiten. El CSV puede ser más denso en las tablas planas."
        },
        {
          "question": "¿Una hoja de cálculo plana se convertirá automáticamente en JSON anidado?",
          "answer": "No de forma automática a partir de una hoja plana. Posprocesa o usa un formato de exportación más rico."
        },
        {
          "question": "¿Qué codificación de texto es más segura para un CSV que se convierte en JSON?",
          "answer": "UTF-8 es la más segura para el JSON web. Vuelve a exportar si los acentos se ven corruptos."
        },
        {
          "question": "¿Qué tamaños de CSV pegados son realistas en una pestaña del navegador?",
          "answer": "Los archivos grandes pueden tensar la memoria. Divide o convierte en el servidor los conjuntos enormes."
        },
        {
          "question": "¿Por qué el recuento de objetos JSON puede no coincidir con las filas de la hoja?",
          "answer": "Los saltos de línea incrustados dentro de campos entre comillas o las filas finales en blanco suelen explicar las diferencias."
        },
        {
          "question": "¿Es más seguro dejar las celdas de fecha como cadenas JSON?",
          "answer": "Suele sí, salvo que las analices a propósito en un formato tipado que tu API espere."
        },
        {
          "question": "¿La conversión de CSV a JSON envía la hoja a un servidor?",
          "answer": "La conversión se ejecuta en local en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Convierte CSV con una fila de cabecera en JSON, incluidas las comas entre comillas y las comillas escapadas. Las celdas se quedan como texto.",
    "ui": {}
  },
  "regex-tester": {
    "answer": "Un probador de expresiones regulares ejecuta tu patrón contra un texto de muestra y lista coincidencias, posiciones y grupos. No ejecuta otro JavaScript.",
    "content": {
      "about": "Escribe una expresión regular, elige flags y pega el texto que quieres probar. La página indica si hubo alguna coincidencia, cuántas encontró, el texto coincidente, dónde empieza cada coincidencia y los grupos de captura.",
      "howTo": [
        "Escribe el patrón sin barras alrededor.",
        "Activa los flags que necesites. g encuentra todas las coincidencias. i ignora mayúsculas. m cambia ^ y $. s permite que un punto coincida con un salto de línea. u activa la modalidad Unicode.",
        "Pega el texto de prueba.",
        "Pulsa Probar expresión. Un patrón no válido muestra el mensaje de sintaxis del navegador."
      ],
      "features": [
        "Recuento de coincidencias, texto coincidente e índice de carácter donde empieza cada coincidencia.",
        "Grupos numerados y grupos con nombre cuando el patrón los tiene.",
        "Una parada después de 50 coincidencias para que un resultado enorme no llene la página."
      ],
      "examples": [
        {
          "title": "Encontrar cantidades",
          "body": "Patrón \\d+, flag g, texto «Order 14 and order 3». Obtienes dos coincidencias, 14 en el primer dígito y 3 en el dígito posterior."
        },
        {
          "title": "Capturar un nombre",
          "body": "El patrón Name: (\\w+) en «Name: Sara» muestra la coincidencia completa y el grupo 1 como Sara."
        }
      ],
      "explanation": "La página construye un RegExp de JavaScript y lo ejecuta sobre el texto que pegaste. No evalúa el patrón como un script. Un punto coincide con un carácter. * significa cero o más, + significa uno o más, y ? significa opcional. Los corchetes coinciden con un carácter de un conjunto. Los paréntesis capturan un grupo. Una barra vertical significa o. \\d es un dígito, \\s es espacio en blanco y \\w es un carácter de palabra. Sin g, solo se lista la primera coincidencia.",
      "tips": [
        "Prueba una muestra pequeña antes de usar el mismo patrón en el código.",
        "Si el patrón puede coincidir con una cadena vacía, el probador igual avanza para no entrar en un bucle infinito. Verás una coincidencia vacía cuando eso ocurra."
      ],
      "limitations": "Esto usa las expresiones regulares de JavaScript del navegador, que difieren de algunos otros motores. Se rechaza un patrón de más de 300 caracteres. Un patrón muy lento igualmente puede detener la pestaña. La página no aísla la coincidencia en un proceso aparte. No ejecutará otro JavaScript que escribas en el recuadro del patrón.",
      "faqs": [
        {
          "question": "¿Por qué solo veo una coincidencia?",
          "answer": "Activa el flag g. Sin él, el resultado se detiene después de la primera coincidencia."
        },
        {
          "question": "¿Esto ejecuta código del patrón?",
          "answer": "No. El patrón se pasa al constructor RegExp. No se evalúa como un programa."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El patrón y el texto de muestra se prueban en esta pestaña. No se suben."
        },
        {
          "question": "¿Qué hace el flag g en una expresión regular?",
          "answer": "El flag g (global) encuentra todas las coincidencias en lugar de detenerse en la primera. Sin él, solo se muestra la primera coincidencia."
        },
        {
          "question": "¿Qué es un grupo de captura?",
          "answer": "Los paréntesis de un patrón crean un grupo de captura, que guarda la parte de la coincidencia que queda dentro. (\\d{4})-(\\d{2}) captura el año y el mes por separado."
        },
        {
          "question": "¿Cómo pruebo rápido un patrón contra un texto de muestra?",
          "answer": "Pega la expresión regular y la muestra, elige los flags y lee la lista de coincidencias o los resaltes que muestra el probador."
        },
        {
          "question": "¿Cuándo debo activar el flag multilínea?",
          "answer": "Actívalo cuando ^ y $ deban coincidir con el inicio y el final de cada línea, no solo con los bordes de toda la cadena."
        },
        {
          "question": "¿Cómo coincido con un carácter especial literal?",
          "answer": "Escápalo con una barra invertida, como \\. para un punto o \\( para un paréntesis de apertura."
        },
        {
          "question": "¿Por qué mi patrón voraz se traga demasiado texto?",
          "answer": "Los cuantificadores voraces toman la coincidencia más larga; prueba una forma perezosa como *? o estrecha la clase de caracteres."
        },
        {
          "question": "¿Puedo inspeccionar los grupos de captura numerados?",
          "answer": "Sí: el texto de cada grupo aparece con la coincidencia para que verifiques lo que recogieron los paréntesis."
        },
        {
          "question": "¿Qué cambia el flag que ignora mayúsculas?",
          "answer": "Deja de importar las mayúsculas, así que Room y room pueden coincidir con un solo patrón."
        },
        {
          "question": "¿Cómo ayudan los límites de palabra?",
          "answer": "\\\\b ancla una coincidencia en los bordes de palabra para que cat no coincida dentro de category, salvo que eso sea lo que quieras."
        },
        {
          "question": "¿Un patrón no válido bloqueará la página?",
          "answer": "El probador debería mostrar un error de sintaxis en lugar de coincidencias; corrige corchetes o escapes y vuelve a intentarlo."
        },
        {
          "question": "¿Puedo pegar un registro largo como sujeto?",
          "answer": "Sí, dentro de los límites del navegador; prueba primero un recorte si un pegado enorme ralentiza el resalte."
        },
        {
          "question": "¿En qué se diferencia esto de reemplazar en un editor?",
          "answer": "Aquí te centras en depurar coincidencias y grupos; usa un editor cuando necesites vistas previas de sustitución."
        },
        {
          "question": "¿Las características de regex de JavaScript coinciden con las de otros idiomas?",
          "answer": "La sintaxis central es cercana, pero los detalles de lookbehind y de Unicode difieren: confírmalos en el entorno que publicas."
        },
        {
          "question": "¿Cómo coincido con una de dos alternativas?",
          "answer": "Usa | dentro de un grupo, como (error|warn), y prueba ambas grafías en la muestra."
        },
        {
          "question": "¿Qué pasa si no hay coincidencia pero el patrón se ve bien?",
          "answer": "Comprueba espacios ocultos, flags incorrectos o un ancla demasiado estricta; simplifica hasta que aparezca una coincidencia."
        },
        {
          "question": "¿Puedo compartir un patrón con un compañero de forma segura?",
          "answer": "Copia el patrón y una muestra corta a la documentación; la herramienta no publica la sesión en sí."
        },
        {
          "question": "¿La validación de producción debe basarse solo en una regex rápida?",
          "answer": "Usa regex para comprobar la forma y luego aplica analizadores o bibliotecas adecuadas para correos, URL y datos similares."
        }
      ]
    },
    "metaDescription": "Prueba una expresión regular contra un texto de muestra y ve cada coincidencia, su posición y sus grupos. El límite es de 50 coincidencias y 300 caracteres.",
    "ui": {}
  },
  "hash-generator": {
    "answer": "Un generador de hash crea un resumen SHA-256, SHA-384 o SHA-512 en el navegador. Un hash no es cifrado y no se puede convertir de vuelta en el texto.",
    "content": {
      "about": "Crea un resumen SHA-256, SHA-384 o SHA-512 del texto que escribes. El resumen es una huella de un solo sentido. No es una copia cifrada del texto, y no es una contraseña.",
      "howTo": [
        "Escribe o pega el texto. Un recuadro vacío igualmente tiene un resumen válido.",
        "Elige SHA-256, SHA-384 o SHA-512.",
        "Pulsa Crear hash.",
        "Copia el resultado o vacía el formulario."
      ],
      "features": [
        "SHA-256, SHA-384 y SHA-512 a través de la API Web Crypto del navegador.",
        "El resumen se muestra como texto hexadecimal en minúsculas.",
        "El texto no se sube."
      ],
      "examples": [
        {
          "title": "Una comprobación SHA-256 conocida",
          "body": "El texto abc con SHA-256 es ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad. Si ves esa cadena, esta página y otra herramienta SHA-256 coinciden."
        },
        {
          "title": "Comprobar una nota corta",
          "body": "Calcula el hash de la nota, envía la nota y el resumen por canales separados, y vuelve a calcular el hash de la nota en el otro lado. Si los resúmenes difieren, la nota cambió."
        }
      ],
      "explanation": "Una función hash asigna un texto a un resumen de longitud fija. El mismo texto y el mismo algoritmo siempre producen el mismo resumen. Con esta herramienta no puedes convertir el resumen de vuelta en el texto. La gente usa SHA-256 y los hash SHA-2 más largos para comprobar la integridad. MD5 y SHA-1 son hash más antiguos y son una mala elección para una comprobación de integridad nueva, así que no se ofrecen aquí.",
      "tips": [
        "No uses un hash rápido por sí solo como forma de guardar contraseñas. El almacenamiento de contraseñas necesita una función lenta hecha para ese trabajo.",
        "Un espacio cambiado o un salto de línea cambiado cambia el resumen. Calcula el hash de los bytes exactos que te importan."
      ],
      "limitations": "Esto calcula el hash de texto codificado como UTF-8. No calcula el hash de un archivo. No cifra nada y no demuestra quién escribió el texto. Un navegador sin Web Crypto no puede crear el resumen.",
      "faqs": [
        {
          "question": "¿Un hash es lo mismo que el cifrado?",
          "answer": "No. El cifrado está pensado para revertirse con una clave. Este resumen es una huella de un solo sentido para comprobar que el texto sigue coincidiendo."
        },
        {
          "question": "¿Puedo obtener el texto original a partir del hash?",
          "answer": "No. Esta página solo crea el resumen. No puede recuperar el texto."
        },
        {
          "question": "¿Se envía mi entrada a un servidor?",
          "answer": "No. El texto se convierte en hash en esta pestaña. No se envía a un servidor, y el resumen no se puede convertir de vuelta en el original."
        },
        {
          "question": "¿Para qué se usa SHA-256?",
          "answer": "SHA-256 crea una huella fija de 64 caracteres de los datos. Se usa para comprobar que un archivo o un mensaje no ha cambiado, y en las firmas digitales."
        },
        {
          "question": "¿Debo aplicar hash a las contraseñas con SHA-256?",
          "answer": "No por sí solo. El almacenamiento de contraseñas debe usar un algoritmo lento y con sal, como bcrypt, scrypt o Argon2, porque el SHA-256 simple se puede adivinar muy rápido."
        },
        {
          "question": "¿Cómo creo un resumen SHA-256 de un texto?",
          "answer": "Pega o escribe el texto, elige SHA-256 y copia el resumen hexadecimal. Conserva el original si aún lo necesitas."
        },
        {
          "question": "¿Calcular un hash es lo mismo que cifrar datos?",
          "answer": "No. Los hash son huellas de un solo sentido. El cifrado está diseñado para revertirse con una clave."
        },
        {
          "question": "¿Puedo recuperar el mensaje original a partir del resumen?",
          "answer": "No de forma práctica con SHA-256. Solo puedes comparar hash o intentar adivinar entradas."
        },
        {
          "question": "¿Para qué se usa SHA-256 habitualmente en la práctica?",
          "answer": "Comprobaciones de integridad, direccionamiento de contenido y flujos de firma, no para guardar contraseñas por sí solo."
        },
        {
          "question": "¿Las contraseñas deben guardarse como resúmenes SHA-256 simples?",
          "answer": "No. Usa una KDF lenta para contraseñas (Argon2, bcrypt, scrypt) con sales únicas."
        },
        {
          "question": "¿La misma entrada siempre produce el mismo resumen?",
          "answer": "Sí, para un algoritmo dado y sin clave. Cualquier cambio mínimo en la entrada da un hash distinto."
        },
        {
          "question": "¿Por qué una entrada vacía sigue mostrando un valor de hash?",
          "answer": "La cadena vacía tiene un resumen definido. Vacía la salida si no querías calcular el hash de nada."
        },
        {
          "question": "¿Elegir un resumen más largo oculta mejor el texto?",
          "answer": "La longitud tiene que ver con la resistencia a colisiones, no con el secreto. Los hash no son ocultación."
        },
        {
          "question": "¿Cómo ayudan las sumas de comprobación a verificar una descarga?",
          "answer": "Compara el resumen publicado con uno que calcules en local para detectar corrupción o manipulación."
        },
        {
          "question": "¿Qué significa una colisión de hash para los archivos?",
          "answer": "Dos entradas distintas que comparten un resumen. Los algoritmos fuertes hacen que las colisiones accidentales sean extraordinariamente raras."
        },
        {
          "question": "¿MD5 es adecuado para comprobaciones sensibles a la seguridad?",
          "answer": "Evita MD5 para seguridad. Aun así puede aparecer, con precaución, en contextos de suma de comprobación heredados."
        },
        {
          "question": "¿Pueden dos archivos distintos compartir un resumen SHA-256?",
          "answer": "En teoría, mediante una colisión; en la práctica, para archivos honestos significa que son el mismo contenido."
        },
        {
          "question": "¿Para qué se usa HMAC en comparación con un resumen simple?",
          "answer": "Un hash con clave que autentica un mensaje con un secreto: distinto de un resumen simple."
        },
        {
          "question": "¿Debo calcular el hash de secretos de producción en una pestaña del navegador?",
          "answer": "Prefiere no hacerlo con secretos de producción. Usa herramientas locales de confianza cuando importe la confidencialidad."
        },
        {
          "question": "¿Generar un hash sube mi texto a algún sitio?",
          "answer": "Calcular el hash en esta página está pensado para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Crea un resumen SHA-256, SHA-384 o SHA-512 de un texto en tu navegador. Es un hash, no un cifrado, y no se puede revertir.",
    "ui": {}
  },
  "time-zone-converter": {
    "answer": "Un conversor de zonas horarias muestra un instante en una zona de origen y en una zona de destino, con el desfase UTC de cada una. Usa la lista de zonas del navegador.",
    "content": {
      "about": "Muestra una hora de reloj en una zona horaria de origen y el mismo instante en una zona horaria de destino.",
      "howTo": [
        "Escribe la fecha y la hora.",
        "Elige las zonas horarias de origen y de destino.",
        "Pulsa Convertir."
      ],
      "features": [
        "Fecha y hora de origen y de destino.",
        "Desfase UTC de cada zona en esa fecha.",
        "Una nota cuando una hora de retraso ocurre dos veces."
      ],
      "examples": [
        {
          "title": "Nueva York a Londres en junio",
          "body": "El 15 de junio de 2024 a las 12:00 en Nueva York es las 17:00 en Londres. Nueva York es UTC-04:00 y Londres es UTC+01:00 en esa fecha."
        }
      ],
      "explanation": "La página encuentra el instante que coincide con la fecha y la hora locales en la zona de origen, y luego formatea ese mismo instante en la zona de destino. Los desfases salen de los datos de zona horaria del navegador para esa fecha, así que se incluyen las reglas de horario de verano.",
      "tips": [
        "Se rechaza una hora que no existe cuando los relojes avanzan en primavera.",
        "Cuando los relojes atrasan, se muestra y se etiqueta el anterior de los dos instantes."
      ],
      "limitations": "La lista es el conjunto de zonas horarias que ofrece el navegador. La página no llama a un servicio de zonas horarias.",
      "faqs": [
        {
          "question": "¿Cómo funciona el conversor de zonas horarias?",
          "answer": "Conserva un instante y muestra la hora de reloj y el desfase UTC de ese instante en cada zona que eliges."
        },
        {
          "question": "¿Usa la zona horaria de mi ordenador?",
          "answer": "No. El resultado usa las zonas de origen y de destino que seleccionas."
        },
        {
          "question": "¿Qué ocurre durante un hueco de avance en primavera?",
          "answer": "Se rechaza una hora local que no existe, en lugar de mostrarse como una conversión normal."
        },
        {
          "question": "¿Qué ocurre cuando los relojes atrasan?",
          "answer": "La hora local ocurre dos veces. La página usa el instante anterior y lo indica."
        },
        {
          "question": "¿Puede cambiar la fecha?",
          "answer": "Sí. Una conversión a través de la línea de cambio de fecha puede mostrar el día de calendario anterior o el siguiente."
        },
        {
          "question": "¿Se envían estos números a un servidor?",
          "answer": "No. La hora de reloj y las dos zonas se convierten en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cómo programo una llamada entre tres ciudades?",
          "answer": "Elige un instante de referencia, conviértelo a cada ciudad y comparte las tres horas locales en la invitación."
        },
        {
          "question": "¿La herramienta sigue las reglas del horario de verano?",
          "answer": "Usa las bases de datos de zonas estándar, así que se reflejan las fechas de avance y de retraso en las zonas admitidas."
        },
        {
          "question": "¿Qué pasa si una ciudad tiene varias opciones de zona?",
          "answer": "Elige la zona al estilo IANA que coincida con la ciudad (por ejemplo America/New_York), no solo un desfase GMT."
        },
        {
          "question": "¿Puedo convertir horas de reuniones recurrentes?",
          "answer": "Convierte una ocurrencia con cuidado alrededor de los cambios de horario de verano; las reglas recurrentes pueden desplazar las horas locales de reloj dos veces al año."
        },
        {
          "question": "¿Por qué importa UTC en los registros?",
          "answer": "UTC evita desfases locales ambiguos al depurar servidores y API entre regiones."
        },
        {
          "question": "¿Cómo tratan las tripulaciones de barco los desfases de media hora?",
          "answer": "Selecciona la zona exacta con un desfase :30 o :45; no redondees a la hora entera más cercana."
        },
        {
          "question": "¿El modo avión cambiará la conversión?",
          "answer": "No: el cálculo de la conversión no necesita red en vivo una vez que los datos de zona están disponibles en el navegador."
        },
        {
          "question": "¿Puedo convertir fechas históricas de antes de que existiera una zona?",
          "answer": "Las fechas muy antiguas pueden carecer de reglas fiables; trata las eras anteriores al estándar como aproximaciones."
        },
        {
          "question": "¿Cómo debo etiquetar las diapositivas de un seminario web global?",
          "answer": "Muestra la hora en la zona anfitriona más UTC, o lista dos zonas importantes del público para reducir la confusión."
        },
        {
          "question": "¿Aparece aquí el tratamiento de los segundos intercalares?",
          "answer": "La programación cotidiana ignora los segundos intercalares; los relojes civiles y los desfases de zona son lo que convierte esta herramienta."
        },
        {
          "question": "¿Qué pasa si el reloj de mi sistema está mal?",
          "answer": "Corrige primero la hora del sistema: las conversiones basadas en «ahora» heredan lo que crea tu dispositivo."
        },
        {
          "question": "¿Puedo comparar desfases sin una fecha concreta?",
          "answer": "Los desfases solos engañan cerca del horario de verano; convierte siempre una fecha y una hora concretas."
        },
        {
          "question": "¿Cómo comparto los resultados sin capturas de pantalla?",
          "answer": "Copia las horas locales convertidas como texto en el chat o en las descripciones del calendario."
        },
        {
          "question": "¿La hora militar Zulu es lo mismo que UTC?",
          "answer": "Para la programación práctica, Zulu se alinea con UTC; igualmente nombra las zonas civiles para quienes asisten."
        }
      ]
    },
    "metaDescription": "Convierte una fecha y hora entre dos zonas horarias con la lista de zonas del navegador, incluidos los desfases UTC y el horario de verano.",
    "ui": {}
  },
  "jwt-decoder": {
    "answer": "Un decodificador JWT lee la cabecera y la carga útil de un JSON Web Token compacto en tu navegador. Decodificar no verifica la firma ni prueba que el token sea auténtico.",
    "content": {
      "about": "Lee la cabecera y la carga útil de un JSON Web Token compacto. La firma no se comprueba.",
      "howTo": [
        "Pega un token compacto con secciones separadas por puntos.",
        "Pulsa Decodificar."
      ],
      "features": [
        "JSON decodificado de la cabecera.",
        "JSON decodificado de la carga útil.",
        "Una nota que indica si hay una sección de firma."
      ],
      "examples": [
        {
          "title": "Un token de tres partes",
          "body": "La primera parte es la cabecera, la segunda es la carga útil y la tercera es una sección de firma no comprobada."
        }
      ],
      "explanation": "La página divide el token por los puntos y decodifica la cabecera y la carga útil de base64url como JSON UTF-8. Se puede indicar que una sección de firma está presente o vacía. Nunca se describe como válida o no válida, porque esta página no la verifica.",
      "tips": [
        "Pega el token solo en esta página.",
        "Trata una carga útil decodificada como no confiable hasta que un verificador compruebe la firma."
      ],
      "limitations": "Decodificar no prueba que un token sea auténtico. La página no obtiene una clave de firma.",
      "faqs": [
        {
          "question": "¿Qué muestra un decodificador JWT?",
          "answer": "Muestra el JSON de la cabecera y el JSON de la carga útil. También indica si hay una sección de firma."
        },
        {
          "question": "¿Decodificar prueba que el token es auténtico?",
          "answer": "No. Decodificar un JWT no verifica su firma ni prueba que el token sea auténtico."
        },
        {
          "question": "¿Se envía el token a un servidor?",
          "answer": "No. La decodificación ocurre en tu navegador. El token no se guarda ni se añade a la dirección de la página."
        },
        {
          "question": "¿Qué pasa si la sección de firma está vacía?",
          "answer": "La página indica que la sección está presente y vacía. Igualmente no llama al token válido o no válido."
        },
        {
          "question": "¿Qué pasa si una sección no es JSON?",
          "answer": "La página rechaza ese token en lugar de mostrar una adivinanza parcial."
        },
        {
          "question": "¿Cuáles son las tres partes de un JWT?",
          "answer": "Un JWT típico tiene una cabecera, una carga útil y una firma, separadas por puntos. Cada una de las dos primeras partes es JSON codificado en Base64URL cuando el token está bien formado."
        },
        {
          "question": "¿Cómo decodifico un JWT sin verificarlo?",
          "answer": "Pega el token en el decodificador para leer las reclamaciones de la cabecera y de la carga útil. Decodificar por sí solo no prueba que la firma sea válida ni que debas confiar en el token."
        },
        {
          "question": "¿Cuál es la diferencia entre decodificar y verificar un JWT?",
          "answer": "Decodificar muestra las reclamaciones. Verificar comprueba la firma con un secreto o una clave pública para saber que el token no se alteró. Esta página se centra en una salida de decodificación legible."
        },
        {
          "question": "¿Qué significa la cabecera alg?",
          "answer": "Nombra el algoritmo de firma que pretendía el emisor, como HS256 o RS256. Trata los valores alg inesperados como una señal de alerta antes de aceptar un token en código de producción."
        },
        {
          "question": "¿Puedo editar aquí las reclamaciones de un JWT?",
          "answer": "El decodificador es para inspección. Cambiar reclamaciones exige volver a firmar con una clave que controles; las ediciones sin firmar fallarán la verificación en cualquier API seria."
        },
        {
          "question": "¿Por qué las horas de caducidad parecen números grandes?",
          "answer": "Las marcas de tiempo de un JWT suelen ser segundos Unix. Conviértelas con una herramienta de marcas de tiempo para ver la fecha y la hora locales."
        },
        {
          "question": "¿Es seguro pegar JWT de producción?",
          "answer": "Evita pegar tokens de sesión en vivo en cualquier pantalla compartida. Prefiere ejemplos caducados o muestras redactadas cuando solo necesites entender la estructura."
        },
        {
          "question": "¿Qué pasa si el token tiene solo dos segmentos?",
          "answer": "Algunas cadenas sin firma o incompletas carecen de sección de firma. La herramienta igualmente puede mostrar partes legibles, pero esos tokens no deben tratarse como autenticados."
        },
        {
          "question": "¿Los espacios o los saltos de línea rompen un JWT?",
          "answer": "Sí. Pega la cadena compacta de tres partes sin espacios de ajuste. Copia con cuidado de los registros que insertan saltos."
        },
        {
          "question": "¿Cuáles son las reclamaciones JWT habituales?",
          "answer": "iss, sub, aud, exp, nbf e iat aparecen a menudo. Las reclamaciones personalizadas varían según el emisor; lee la documentación de tu API para los significados."
        },
        {
          "question": "¿Puede un JWT llevar roles o permisos?",
          "answer": "Sí, como reclamaciones personalizadas, pero importan el tamaño y la privacidad. No metas secretos en las cargas útiles, porque cualquiera que pueda decodificarlas puede leerlas."
        },
        {
          "question": "¿Por qué se usa Base64URL en lugar de Base64 simple?",
          "answer": "Los alfabetos seguros para URL evitan los caracteres + y / que rompen las cadenas de consulta. Las reglas de relleno también difieren un poco del Base64 clásico."
        },
        {
          "question": "¿Decodificar exige el secreto de firma?",
          "answer": "No. La cabecera y la carga útil solo están codificadas, no cifradas, en un JWT firmado estándar. El secreto se exige para verificar, no para leer."
        },
        {
          "question": "¿Qué significa kid en la cabecera?",
          "answer": "El identificador de clave sugiere qué clave de un conjunto JWKS debe verificar la firma. Por sí solo no autentica el token."
        },
        {
          "question": "¿Cómo deberían usar este decodificador quienes desarrollan, en el día a día?",
          "answer": "Pega un token que falle, confirma exp y aud, y compara las reclamaciones con lo que espera la API antes de profundizar en el código de la firma."
        }
      ]
    },
    "metaDescription": "Decodifica la cabecera y la carga útil de un JSON Web Token en tu navegador. La firma no se comprueba y la decodificación no prueba que el token sea auténtico.",
    "ui": {}
  },
  "gitignore-generator": {
    "answer": "Un generador de gitignore escribe títulos de comentario y patrones para las plantillas que eliges, y luego añade los patrones personalizados que aún no están incluidos.",
    "content": {
      "about": "Elige plantillas y, si quieres, patrones personalizados. La página escribe texto de .gitignore con un título de comentario para cada sección. Crear ese texto no actualiza un repositorio Git.",
      "howTo": [
        "Marca las plantillas que quieras. Node está marcado cuando se abre la página.",
        "Añade patrones personalizados, uno por línea, si los necesitas.",
        "Pulsa Generar y luego copia el texto a un archivo llamado .gitignore."
      ],
      "features": [
        "Plantillas para Node, Next.js, archivos de entorno, archivos del sistema operativo, registros y carpetas de compilación.",
        "Los patrones personalizados se añaden después de las plantillas.",
        "Un patrón personalizado que repite una línea de una plantilla seleccionada se escribe una sola vez."
      ],
      "examples": [
        {
          "title": "Archivos de Node y de entorno",
          "body": "Node más Archivos de entorno, sin patrones personalizados, empieza con un título Node y node_modules/, luego un título Archivos de entorno con .env y .env.*."
        },
        {
          "title": "Un patrón personalizado",
          "body": "Node más una línea personalizada secrets/ escribe el bloque Node, luego un título Custom y secrets/. Una línea personalizada node_modules/ no se repite."
        }
      ],
      "explanation": "Cada plantilla seleccionada se convierte en un comentario y sus patrones. Las plantillas se quedan en un orden fijo. Las líneas personalizadas se recortan, se omiten las líneas en blanco y se deja fuera una línea ya escrita por una plantilla. Crear el texto no actualiza un repositorio Git.",
      "tips": [
        "robots.txt es otro archivo. Usa el [generador de robots.txt](/tools/robots-txt-generator) para las reglas de los rastreadores."
      ],
      "limitations": "Hasta 50 patrones personalizados, cada uno de hasta 200 caracteres. Las plantillas son un conjunto inicial corto, no todos los idiomas ni editores.",
      "faqs": [
        {
          "question": "¿El generador de .gitignore es gratuito?",
          "answer": "Sí. Puedes crear el texto del archivo aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Esto crea el archivo en un repositorio?",
          "answer": "No. Escribe el texto. Tú lo copias a .gitignore."
        },
        {
          "question": "¿Qué pasa si una línea personalizada coincide con una plantilla?",
          "answer": "Esa línea se conserva de la plantilla y se omite en la sección Custom."
        },
        {
          "question": "¿Se envían los patrones a un servidor?",
          "answer": "No. El texto del archivo se construye en esta pestaña del navegador. Tools Star Hub no envía esos patrones a un servidor ni los guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué hace un archivo .gitignore?",
          "answer": "Le indica a Git qué archivos y carpetas dejar sin seguimiento, como dependencias, salida de compilación y archivos de entorno locales. Los patrones mantienen los secretos y el desorden fuera de las confirmaciones."
        },
        {
          "question": "¿Dónde debo poner .gitignore en un repositorio?",
          "answer": "Coloca un `.gitignore` raíz en la parte superior del proyecto para que las reglas se apliquen en todas partes. Puedes añadir archivos ignore anidados en subcarpetas para excepciones de un paquete."
        },
        {
          "question": "¿Cómo ignoro node_modules en Git?",
          "answer": "Añade una línea `node_modules/` (con la barra final para la carpeta). Regenera o pega ese patrón de una plantilla de Node si estás empezando una aplicación nueva."
        },
        {
          "question": "¿Cuál es la diferencia entre una barra al inicio y al final de un patrón?",
          "answer": "Una barra inicial ancla el patrón a la carpeta que contiene el archivo ignore. Una barra final marca un directorio. `build/` ignora directorios de compilación; `/build` es solo de la raíz."
        },
        {
          "question": "¿Puedo dejar de ignorar un archivo que coincide con una regla más amplia?",
          "answer": "Sí. Usa patrones de negación `!` después del ignore amplio, como ignorar `dist/*` y luego `!dist/.gitkeep`. El orden importa; las reglas posteriores pueden volver a incluir."
        },
        {
          "question": "¿Por qué un archivo sigue con seguimiento después de añadirlo a .gitignore?",
          "answer": "Git solo ignora las rutas sin seguimiento. Si el archivo ya se confirmó, quítalo del índice con `git rm --cached` conservando la copia de trabajo, y luego confirma."
        },
        {
          "question": "¿Deben ignorarse los archivos .env?",
          "answer": "Sí, en casi todas las aplicaciones que guardan secretos ahí. Confirma un `.env.example` con claves de ejemplo en lugar de credenciales reales."
        },
        {
          "question": "¿Cómo se ignoran los archivos basura del sistema operativo?",
          "answer": "Las plantillas suelen incluir `.DS_Store`, `Thumbs.db` y archivos de intercambio del editor. Añade una plantilla Global o de sistema operativo para que esos nunca ensucien las revisiones."
        },
        {
          "question": "¿Puede un solo .gitignore cubrir varios idiomas?",
          "answer": "Sí. Apila plantillas —por ejemplo Node más Python más una sección personalizada— para que los monorepositorios ignoren los artefactos de cada ecosistema sin pelearse."
        },
        {
          "question": "¿Los patrones ignore admiten globs?",
          "answer": "Sí. `*` coincide dentro de un segmento de ruta y `**` puede coincidir entre carpetas en Git moderno. Prueba los globs complicados con `git check-ignore -v` en una ruta de muestra."
        },
        {
          "question": "¿Qué no debo poner en .gitignore?",
          "answer": "No ignores el origen que pretendes compartir, los archivos de bloqueo en los que confía el equipo ni la configuración de CI. Ignorar `package-lock.json` por accidente es un tropiezo habitual."
        },
        {
          "question": "¿Cómo ignoro todos los archivos de una extensión?",
          "answer": "Usa un patrón como `*.log` o `*.tmp`. Ten cuidado con `*.js` en proyectos mixtos; podrías ocultar el origen. Prefiere las carpetas de salida de compilación cuando sea posible."
        },
        {
          "question": "¿Es .gitignore lo mismo que .git/info/exclude?",
          "answer": "Ambos usan la misma sintaxis de patrones, pero `exclude` es local de tu clon y no se confirma. Usa `.gitignore` para las reglas que debe compartir todo el equipo."
        },
        {
          "question": "¿El generador confirmará el archivo por mí?",
          "answer": "No. Construye el texto para que lo guardes como `.gitignore` y lo confirmes tú. Eso mantiene el control de la revisión en tu flujo habitual de Git."
        },
        {
          "question": "¿Cómo comento líneas dentro de .gitignore?",
          "answer": "Empieza una línea con `#` para un comentario. Las líneas en blanco sirven para agrupar plantillas como dependencias, compilación y secretos."
        },
        {
          "question": "¿Los archivos ignorados igual pueden enviarse a un remoto de otra forma?",
          "answer": "Sí: las subidas en zip, los contextos de compilación de Docker o un CI mal configurado igual pueden incluirlos. Conserva una lista de permitidos de despliegue aparte cuando haya secretos cerca."
        }
      ]
    },
    "metaDescription": "Crea el texto de .gitignore con plantillas para Node, Next.js, archivos de entorno y más, más tus propios patrones. El límite es de 50 patrones personalizados.",
    "ui": {}
  },
  "cron-expression-generator": {
    "answer": "Un generador de expresiones cron crea o explica cinco campos: minuto, hora, día del mes, mes y día de la semana. El domingo es 0.",
    "content": {
      "about": "Crea una expresión cron de cinco campos, o pega una y lee un resumen en lenguaje sencillo. Los campos son minuto, hora, día del mes, mes y día de la semana. El domingo es 0. No se aceptan nombres como MON o JAN, y no se acepta un campo de segundos.",
      "howTo": [
        "Elige Crear y rellena los cinco campos, o elige Explicar y pega una expresión.",
        "Pulsa Crear o Explicar.",
        "Lee la expresión y el resumen. Copia la expresión si quieres conservarla."
      ],
      "features": [
        "Asteriscos, números sueltos, rangos, listas separadas por comas y pasos con asterisco como */15.",
        "Un resumen para horarios habituales, incluidos cada minuto, cada hora, cada día, los días laborables y un día del mes.",
        "Una nota cuando están restringidos tanto el día del mes como el día de la semana."
      ],
      "examples": [
        {
          "title": "Cada 15 minutos",
          "body": "*/15 * * * * significa cada 15 minutos."
        },
        {
          "title": "Días laborables a las 09:00",
          "body": "0 9 * * 1-5 significa a las 09:00 de lunes a viernes. El domingo es 0."
        }
      ],
      "explanation": "Los cinco campos son minuto, hora, día del mes, mes y día de la semana. Un asterisco significa todos los valores de ese campo. */15 en el campo de minuto significa cada 15 minutos. 1-5 en el campo de día de la semana significa de lunes a viernes. Cuando tanto el día del mes como el día de la semana están fijados en algo distinto de un asterisco, cron coincide con cualquiera de los dos días, no con ambos.",
      "tips": [
        "Usa el [conversor de marcas de tiempo Unix](/tools/timestamp-converter) cuando tengas una hora de reloj y necesites una marca de tiempo Unix, no un horario."
      ],
      "limitations": "Solo cinco campos. Se rechazan nombres como MON o JAN. Se rechaza un paso dentro de un rango, como 0-30/10. Se rechaza el día de la semana 7. El domingo es 0.",
      "faqs": [
        {
          "question": "¿El generador de expresiones cron es gratuito?",
          "answer": "Sí. Puedes crear o explicar una expresión de cinco campos aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Qué pasa si están fijados tanto el día del mes como el día de la semana?",
          "answer": "Cron coincide con cualquiera de los dos días, no con ambos. 0 9 1 * 1 significa las 09:00 el día 1 del mes o el lunes. No significa solo un lunes que caiga en el día 1."
        },
        {
          "question": "¿Por qué se rechazó MON o una expresión de seis campos?",
          "answer": "Esta página usa solo números, en cinco campos. El domingo es 0 y el sábado es 6. Se rechaza el día de la semana 7. Se rechazan nombres como MON o JAN. No se acepta un campo inicial de segundos. Se rechaza un paso dentro de un rango, como 0-30/10."
        },
        {
          "question": "¿Se envía la expresión a un servidor?",
          "answer": "No. La expresión y el resumen se construyen en esta pestaña del navegador. Tools Star Hub no envía ese texto a un servidor ni lo guarda en el almacenamiento local."
        },
        {
          "question": "¿Para qué se usa una expresión cron?",
          "answer": "Una expresión cron es una cadena compacta de horario que indica a un ejecutor de trabajos cuándo dispararse: copias de seguridad cada hora, informes nocturnos o limpiezas semanales. Cada campo acota minutos, horas, días, meses y días de la semana."
        },
        {
          "question": "¿Cuántos campos tiene una expresión cron estándar?",
          "answer": "El cron clásico de Unix usa cinco campos: minuto, hora, día del mes, mes y día de la semana. Algunos sistemas añaden un sexto campo de segundos; este generador se centra en la forma habitual de cinco campos."
        },
        {
          "question": "¿Qué significa un asterisco en cron?",
          "answer": "Un asterisco significa todos los valores de ese campo. `* * * * *` significaría cada minuto. Acota los demás campos cuando solo quieras una hora o un día de la semana concretos."
        },
        {
          "question": "¿Cómo ejecuto un trabajo todos los días a las 9:00?",
          "answer": "Usa `0 9 * * *` para el minuto 0 de la hora 9, todos los días del mes y todos los días de la semana. Confirma la zona horaria del servidor para que las 9:00 sean el reloj que pretendes."
        },
        {
          "question": "¿Cuál es la diferencia entre el día del mes y el día de la semana?",
          "answer": "El día del mes elige fechas de calendario, como el día 1. El día de la semana elige de domingo a sábado. Fijar ambos puede significar «cualquiera» o «ambos», según la implementación de cron."
        },
        {
          "question": "¿Puedo usar nombres como MON en lugar de números?",
          "answer": "Algunas variantes de cron aceptan nombres cortos de día o de mes; otras exigen solo números. Si este generador rechaza un nombre, pasa a campos numéricos para una compatibilidad más amplia."
        },
        {
          "question": "¿Cómo funcionan los valores de paso como */15?",
          "answer": "Un paso se ejecuta cada N unidades dentro del campo. `*/15` en el campo de minuto significa los minutos 0, 15, 30 y 45. Combina rangos y pasos solo cuando tu dialecto de cron lo permita."
        },
        {
          "question": "¿Por qué debo evitar programar todo a medianoche?",
          "answer": "Muchos trabajos usan de forma predeterminada las 00:00, lo que crea picos de carga. Desplaza las tareas no urgentes unos minutos u horas para que los servidores y las API tengan menos probabilidad de competir."
        },
        {
          "question": "¿Cron usa la zona horaria del servidor o UTC?",
          "answer": "Usa la zona horaria que ve el proceso del programador, a menudo la zona local de la máquina salvo que configures UTC. Documenta la zona junto a la expresión en tu manual de operaciones."
        },
        {
          "question": "¿Cómo expreso «solo días laborables» en cron?",
          "answer": "Fija el campo de día de la semana de lunes a viernes (habitualmente `1-5` cuando el domingo es 0). Deja el día del mes como `*` salvo que también necesites una restricción de calendario."
        },
        {
          "question": "¿Qué ocurre si mi trabajo cron dura más que el intervalo?",
          "answer": "Puede arrancar una segunda instancia mientras la primera sigue en ejecución, salvo que añadas un bloqueo. Usa un mutex, flock o un trabajador de cola para que las ejecuciones superpuestas no corrompan los datos."
        },
        {
          "question": "¿Puedo probar una expresión cron antes de desplegarla?",
          "answer": "Sí. Genera la cadena aquí y luego confirma las próximas ejecuciones en la interfaz cron de tu plataforma o en un linter de prueba. Verifica siempre en un trabajo de ensayo antes de producción."
        },
        {
          "question": "¿Por qué se rechazó mi expresión de seis campos?",
          "answer": "Esta herramienta apunta al cron de Unix de cinco campos. Las plataformas que quieren segundos necesitan otro dialecto. Quita el campo de segundos o usa la sintaxis nativa del programador de esa plataforma."
        },
        {
          "question": "¿Cómo aparecen las listas y los rangos en un campo?",
          "answer": "Las listas usan comas (`1,15`) y los rangos usan guiones (`9-17`). Puedes combinarlos cuando el demonio lo admita, como `1,15,20-22`."
        },
        {
          "question": "¿crontab es el único lugar donde aparecen las expresiones cron?",
          "answer": "No. Los sistemas de CI, los CronJobs de Kubernetes, los programadores en la nube y los marcos de aplicación reutilizan cadenas parecidas. Comprueba siempre el recuento de campos y la numeración del domingo de ese producto."
        },
        {
          "question": "¿Deben ir los secretos dentro de una línea de comando cron?",
          "answer": "Prefiere archivos de entorno o un gestor de secretos. crontab y las listas de procesos pueden exponer los comandos a otras personas usuarias del equipo."
        }
      ]
    },
    "metaDescription": "Crea una expresión cron de cinco campos o explica una existente. El domingo es 0. No se aceptan nombres de meses ni de días, ni un campo de segundos.",
    "ui": {}
  }
};

export default data;
