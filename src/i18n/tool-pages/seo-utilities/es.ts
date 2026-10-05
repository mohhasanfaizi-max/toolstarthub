import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Un generador de UTM añade parámetros de campaña a una URL para que puedas seguir las fuentes de tráfico en tus herramientas de analítica.",
    "content": {
      "about": "Añade utm_source, utm_medium y utm_campaign a un enlace, además de term y content opcionales. Los especialistas en marketing lo usan para etiquetar un enlace de campaña antes de ponerlo en un anuncio o un correo. Un campo vacío no se incluye en el enlace, y esta página no registra visitas ni acorta la dirección.",
      "howTo": [
        "Escribe la URL del sitio, con o sin https://.",
        "Rellena la fuente, el medio y la campaña. Term y content son opcionales.",
        "Copia la URL generada. Los parámetros de consulta que ya tenía el enlace original se conservan."
      ],
      "examples": [
        {
          "title": "Un enlace de campaña sencillo",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Una URL que ya tiene parámetros",
          "body": "https://example.com/page?ref=nav conserva ref=nav y añade los campos UTM a su lado."
        }
      ],
      "explanation": "Los parámetros UTM indican a las herramientas de analítica de dónde llegó una visita. utm_source es la plataforma, utm_medium el canal y utm_campaign el nombre de la promoción. utm_term y utm_content son opcionales. Los valores se codifican para URL, de modo que los espacios y los caracteres especiales siguen siendo válidos.",
      "limitations": "Si la fuente, el medio o la campaña están vacíos, se omiten en lugar de escribirse como parámetro vacío. La página no acorta la dirección ni registra visitas. Un texto que no sea la URL de un sitio se rechaza.",
      "faqs": [
        {
          "question": "¿El generador de UTM es gratis?",
          "answer": "Sí. Añadir utm_source, utm_medium y utm_campaign a un enlace es gratis y no necesitas cuenta."
        },
        {
          "question": "¿Sobrescribirá mis otros parámetros de consulta?",
          "answer": "No. Solo se añaden o actualizan los campos UTM que rellenes. Los demás parámetros quedan igual."
        },
        {
          "question": "¿Esta herramienta llama a un servicio de seguimiento?",
          "answer": "No. Solo construye una URL en tu navegador. El seguimiento ocurre después, si usas el enlace en una configuración de analítica."
        },
        {
          "question": "¿Qué son los parámetros UTM?",
          "answer": "Los parámetros UTM son etiquetas que se añaden a un enlace, como utm_source, utm_medium y utm_campaign, y que indican a las herramientas de analítica de dónde llegó una visita."
        },
        {
          "question": "¿Qué parámetros UTM son obligatorios?",
          "answer": "La fuente, el medio y la campaña son el mínimo habitual. Term y content son opcionales y ayudan a distinguir palabras clave o versiones de anuncios."
        }
      ]
    },
    "ui": {
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
    "answer": "Un generador de slugs convierte un título en una cadena en minúsculas y con guiones que se puede usar sin problemas en una URL.",
    "content": {
      "about": "Convierte un título en un enlace permanente en minúsculas y con guiones. Quien escribe una entrada lo usa antes de poner la dirección en un CMS. Se quitan los acentos latinos, los caracteres como 你好 se mantienen y el resultado no comprueba si la dirección está libre.",
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
          "title": "Acentos y otras escrituras",
          "body": "Los acentos latinos se eliminan (Café → cafe). Los caracteres como 你好 se mantienen, así el slug sigue siendo legible."
        }
      ],
      "explanation": "El generador recorta el texto, separa las marcas combinadas tras la normalización Unicode NFKD, pasa a minúsculas las letras latinas, convierte otros separadores en guiones y une las repeticiones. Conserva las letras y números Unicode en lugar de borrar todo carácter que no sea inglés. El resultado es un enlace permanente práctico, no un identificador único garantizado.",
      "limitations": "Los acentos latinos se eliminan, mientras que caracteres como 你好 se mantienen. El resultado tiene forma de enlace permanente, pero no prueba que la dirección esté libre. Algunos creadores de sitios borran las letras no latinas; esta página no.",
      "faqs": [
        {
          "question": "¿El generador de slugs es gratis?",
          "answer": "Sí. Convertir un título en un enlace permanente con guiones es gratis y no necesitas cuenta."
        },
        {
          "question": "¿Funcionará con cualquier CMS?",
          "answer": "La mayoría de los sitios aceptan slugs en minúsculas con guiones. Algunos eliminan las letras no latinas; esta herramienta las conserva si son letras o números."
        },
        {
          "question": "¿Se envía lo que escribo a un servidor?",
          "answer": "No. El título se reescribe en esta pestaña. No se sube ni se guarda en el almacenamiento local."
        },
        {
          "question": "¿Qué es un slug de URL?",
          "answer": "Un slug es la parte legible de una dirección web que da nombre a una página, como como-hacer-pan en example.com/blog/como-hacer-pan."
        },
        {
          "question": "¿Qué hace que un slug sea bueno para el SEO?",
          "answer": "Que sea corto, en minúsculas y descriptivo, con las palabras separadas por guiones. Evita fechas y palabras de relleno si la página puede actualizarse más adelante."
        }
      ]
    },
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
      "about": "Codifica texto sin formato o una URL como código QR en PNG, hasta 1.200 caracteres. Úsalo para un enlace corto que alguien deba escanear. Los formatos de Wi-Fi, correo y contacto están en el Generador de códigos QR Pro, y una cadena larga produce un patrón denso que algunas cámaras no leen.",
      "howTo": [
        "Pega un texto o una URL completa, con https:// si es un enlace web.",
        "Pulsa Generar. Aparecen una vista previa y una descripción accesible.",
        "Descarga el PNG y restablece si necesitas otro código."
      ],
      "examples": [
        {
          "title": "Un sitio web",
          "body": "https://example.com se convierte en un código QR que abre esa dirección al escanearlo."
        },
        {
          "title": "Texto sin formato",
          "body": "Una nota corta o un recordatorio de Wi-Fi se puede codificar como texto. Mantente por debajo de 1.200 caracteres para que el patrón siga siendo legible."
        }
      ],
      "explanation": "Un código QR es un código de barras matricial. Esta herramienta crea el patrón en tu navegador con una biblioteca del lado del cliente. El texto no se envía a ninguna API de QR. Un contenido muy largo crea un código denso que a muchas cámaras les cuesta leer, por eso la longitud está limitada.",
      "limitations": "Se codifica texto sin formato o una URL, y el texto debe tener como máximo 1.200 caracteres. Los formatos de Wi-Fi, correo y contacto están en el Generador de códigos QR Pro. Una cadena larga produce un patrón denso que algunas cámaras no leen.",
      "faqs": [
        {
          "question": "¿El generador de códigos QR es gratis?",
          "answer": "Sí. Crear una imagen QR a partir de un texto o una URL en este navegador es gratis y sin cuenta."
        },
        {
          "question": "¿Se sube el texto?",
          "answer": "No. El código QR se genera en tu navegador. El texto no se envía a ningún servidor."
        },
        {
          "question": "¿Todos los lectores podrán leer el PNG?",
          "answer": "La mayoría de las cámaras leen un PNG de buen contraste de una URL corta. Las impresiones diminutas, la poca luz o un texto muy largo pueden fallar."
        },
        {
          "question": "¿Caducan los códigos QR creados aquí?",
          "answer": "No. El texto o el enlace se guarda directamente en el patrón, sin ningún servicio de redirección intermedio, así que el código funciona mientras funcione el propio enlace."
        },
        {
          "question": "¿Cómo creo un código QR para un sitio web?",
          "answer": "Pega la dirección completa, con https://, genera el código, descarga el PNG y pruébalo con la cámara de un teléfono antes de imprimirlo."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "El código QR se crea en tu navegador. Mantén el contenido razonablemente corto.",
      "QR code for {0}": "Código QR para {0}",
      "QR code for:": "Código QR para:",
      "The QR code is generated in your browser. The text is not sent to a server.": "El código QR se genera en tu navegador. El texto no se envía a ningún servidor."
    }
  },
  "qr-code-scanner": {
    "answer": "Un lector de códigos QR lee la imagen QR que eliges y muestra el texto decodificado en tu dispositivo.",
    "content": {
      "about": "Lee el primer código QR de la cámara o de un PNG o JPG. Úsalo cuando quieras ver el texto antes de decidir si abres un enlace. La cámara sigue apagada hasta que pulsas Iniciar cámara, y no se decodifican otros tipos de códigos de barras.",
      "howTo": [
        "Pulsa Iniciar cámara solo si quieres escanear con la cámara del dispositivo. El permiso se pide en ese momento, no al cargar la página.",
        "Mantén el código a la vista hasta que aparezca un resultado, o pulsa Detener cámara para liberar la transmisión.",
        "Si la cámara está bloqueada, sube en su lugar un PNG o JPG del código.",
        "Copia el resultado. Si es una URL http(s), se ofrece Abrir enlace. La página no navega por sí sola."
      ],
      "examples": [
        {
          "title": "Escaneo con cámara",
          "body": "Al iniciar la cámara, los fotogramas se decodifican en la pestaña. La transmisión se detiene cuando se encuentra un código o cuando pulsas Detener."
        },
        {
          "title": "Subir una imagen",
          "body": "Una captura de pantalla de un código QR se puede decodificar aunque se haya denegado el permiso de cámara."
        }
      ],
      "explanation": "La decodificación usa un lector de JavaScript local sobre los fotogramas de la cámara o una imagen subida. El acceso a la cámara solo empieza cuando haces clic en Iniciar cámara. Las pistas se detienen al pulsar Detener, tras un escaneo correcto y al salir de la página. Una URL detectada se muestra primero; abrirla es una acción aparte.",
      "limitations": "Se muestra el primer código que encuentra el lector. No se decodifican otros tipos de códigos de barras. Un enlace permanece en la página hasta que pulsas Abrir enlace, y la cámara sigue apagada hasta que pulsas Iniciar cámara.",
      "faqs": [
        {
          "question": "¿El lector de códigos QR es gratis?",
          "answer": "Sí. Leer un código QR con la cámara o desde una imagen es gratis y no necesitas cuenta."
        },
        {
          "question": "¿Se suben los fotogramas de la cámara?",
          "answer": "No. Los fotogramas tras Iniciar cámara y el PNG o JPG que elijas se decodifican en esta pestaña. Nada se envía a Tools Star Hub."
        },
        {
          "question": "¿Por qué no abrió el sitio web automáticamente?",
          "answer": "Navegar automáticamente a una URL escaneada no es seguro. Revisa el texto y usa Abrir enlace si confías en él."
        },
        {
          "question": "¿Y si la imagen tiene más de un código QR?",
          "answer": "Este lector muestra el primer código que logra decodificar. Recorta la imagen si necesitas un código concreto."
        }
      ]
    },
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
    "answer": "Un generador de contraseñas crea contraseñas aleatorias con los conjuntos de caracteres que eliges, usando un generador aleatorio criptográfico.",
    "content": {
      "about": "Genera una contraseña de 8 a 64 caracteres con los tipos de caracteres que elijas. Úsalo cuando una cuenta nueva necesite una cadena variada que no hayas reutilizado. La indicación de fortaleza es una estimación basada en la longitud y el tamaño del conjunto, y no comprueba si un sitio ha sufrido una filtración.",
      "howTo": [
        "Elige una longitud de 8 a 64 y los tipos de caracteres que quieras.",
        "Si quieres, excluye caracteres ambiguos como O, 0, I, l y 1.",
        "Pulsa Generar y copia la contraseña. No se guarda nada."
      ],
      "examples": [
        {
          "title": "16 caracteres variados",
          "body": "Una contraseña de 16 caracteres con mayúsculas, minúsculas, números y símbolos tiene un gran espacio de caracteres. La indicación de fortaleza es una estimación basada en la longitud y el tamaño del conjunto."
        },
        {
          "title": "Solo letras",
          "body": "Al desactivar números y símbolos, el conjunto se reduce. El generador sigue exigiendo al menos un tipo seleccionado."
        }
      ],
      "explanation": "Cada carácter se elige con crypto.getRandomValues(), no con Math.random(). El generador incluye al menos un carácter de cada conjunto seleccionado y completa el resto del conjunto combinado con un muestreo sin sesgo. La indicación (Débil / Moderada / Fuerte) se estima con longitud × log2(tamaño del conjunto). No es una garantía frente a adivinanzas, reutilización o la filtración de un sitio.",
      "limitations": "La longitud debe ser un número entero de 8 a 64, y al menos un tipo de caracteres debe seguir activo. La indicación de fortaleza se estima a partir de la longitud y el tamaño del conjunto. No comprueba reutilización, phishing ni sitios filtrados. Los caracteres ambiguos se pueden excluir; el resto de la lista de símbolos es fija.",
      "faqs": [
        {
          "question": "¿El generador de contraseñas es gratis?",
          "answer": "Sí. Generar una contraseña de 8 a 64 caracteres es gratis y no necesitas cuenta."
        },
        {
          "question": "¿Se guardan las contraseñas?",
          "answer": "No. No se almacenan, no se registran, no se ponen en la URL ni se escriben en localStorage. Copia el valor si lo necesitas."
        },
        {
          "question": "¿Fuerte significa que no se puede descifrar?",
          "answer": "No. El medidor es una estimación basada en la longitud y el tamaño del conjunto de caracteres. No tiene en cuenta la reutilización, el phishing ni un servicio comprometido."
        },
        {
          "question": "¿Qué longitud debe tener una contraseña?",
          "answer": "Cuanto más larga, más fuerte. Muchas guías de seguridad recomiendan al menos 12 a 16 caracteres para las cuentas importantes, con una contraseña distinta para cada sitio."
        },
        {
          "question": "¿Es seguro usar un generador de contraseñas en línea?",
          "answer": "Este crea la contraseña en tu navegador con crypto.getRandomValues y no la envía ni la guarda. Guárdala en un gestor de contraseñas y no en una nota."
        }
      ]
    },
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
      "Length must be at least the number of selected character types.": "La longitud debe ser al menos igual al número de tipos de caracteres seleccionados."
    }
  },
  "qr-code-generator-pro": {
    "answer": "El Generador de códigos QR Pro crea códigos QR con colores para URL, Wi-Fi, correo, teléfono, SMS o contactos.",
    "content": {
      "about": "Crea un código QR para texto sin formato, Wi-Fi, correo, teléfono, SMS o un contacto vCard, con controles de color y de corrección de errores. Úsalo cuando un teléfono deba unirse a una red o guardar un contacto al escanear. Si falta el nombre de la red se rechaza, y el texto codificado debe seguir sin pasar de 1.200 caracteres.",
      "howTo": [
        "Elige un tipo: texto/URL, Wi-Fi, correo, teléfono, SMS o contacto.",
        "Rellena los campos de ese tipo. Los valores no válidos se rechazan antes de dibujar el código.",
        "Si quieres, cambia los colores, el tamaño, la zona de silencio y la corrección de errores; luego genera y descarga un PNG."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Una red WPA llamada Cafe se codifica como WIFI:T:WPA;S:Cafe;P:Password;;"
        },
        {
          "title": "Teléfono",
          "body": "Un número como +1 202 555 0100 se convierte en un contenido tel: sin espacios."
        }
      ],
      "explanation": "Los tipos estructurados se convierten a los formatos de texto QR habituales (WIFI, mailto, tel, SMSTO, vCard 3.0). La generación usa la misma biblioteca QR local que el generador básico. El contenido no se guarda, no se registra ni se pone en la URL de la página.",
      "limitations": "Los tipos son texto sin formato, Wi-Fi, correo, teléfono, SMS y un contacto vCard 3.0. Un nombre de red ausente, un correo que no pasa la comprobación simple o un número de teléfono con algo distinto de dígitos y + ( ) opcionales se rechaza antes de dibujar el código. El texto codificado debe seguir sin pasar de 1.200 caracteres.",
      "faqs": [
        {
          "question": "¿El Generador de códigos QR Pro es gratis?",
          "answer": "Sí. Crear un código QR de Wi-Fi, correo, teléfono, SMS, contacto o texto es gratis y no necesitas cuenta."
        },
        {
          "question": "¿Es distinto del generador QR básico?",
          "answer": "Sí. La herramienta básica codifica texto sin formato o una URL. Esta versión añade tipos estructurados, colores y controles de corrección de errores. La herramienta básica no cambia."
        },
        {
          "question": "¿Se guardan las contraseñas de Wi-Fi?",
          "answer": "No. Permanecen en esta página hasta que restableces o sales. No se escriben en localStorage ni se envían a un servidor."
        },
        {
          "question": "¿Cómo creo un código QR para el Wi-Fi?",
          "answer": "Elige Wi-Fi, escribe el nombre de la red, la contraseña y el tipo de seguridad, y descarga el código. Los teléfonos que lo escaneen podrán conectarse sin escribir la contraseña."
        },
        {
          "question": "¿Puedo cambiar los colores de un código QR?",
          "answer": "Sí, pero mantén un buen contraste, con un patrón oscuro sobre un fondo claro, para que las cámaras puedan seguir leyéndolo. Prueba el código antes de imprimirlo."
        }
      ]
    },
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
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "El código QR se genera en tu navegador. Las contraseñas de Wi-Fi y los demás campos no se guardan ni se envían a un servidor.",
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
      "Enter a first or last name for the contact.": "Escribe un nombre o apellido para el contacto."
    }
  },
  "url-parser": {
    "answer": "Un analizador de URL divide una URL absoluta en protocolo, nombre de host, puerto, ruta, fragmento y cada parámetro de consulta. La URL se queda en tu navegador.",
    "content": {
      "about": "Pega una URL absoluta y consulta su protocolo, nombre de host, puerto, ruta, fragmento y parámetros de consulta.",
      "howTo": [
        "Pega una URL completa que empiece por http o https.",
        "Pulsa Analizar."
      ],
      "features": [
        "Cada clave de consulta en su propia fila.",
        "Se conservan los valores de consulta vacíos.",
        "El fragmento se muestra separado de la ruta."
      ],
      "examples": [
        {
          "title": "Una URL con puerto y dos claves iguales",
          "body": "https://example.com:8080/docs?topic=a&topic= conserva el puerto 8080 y dos filas topic, la segunda con valor vacío."
        }
      ],
      "explanation": "La página usa el analizador de URL del navegador. Las claves de consulta duplicadas quedan como entradas separadas. Un protocolo ausente o una ruta relativa se rechaza. El nombre de host es el valor que devuelve el analizador, incluido un nombre internacionalizado en su forma codificada.",
      "tips": [
        "Incluye https:// o http://.",
        "Una almohadilla después de la consulta indica el fragmento, no otro parámetro."
      ],
      "limitations": "Solo se analizan URL absolutas http y https. La URL no se abre ni se envía a ningún sitio.",
      "faqs": [
        {
          "question": "¿Cómo se analiza una URL?",
          "answer": "El analizador de URL del navegador separa el protocolo, el nombre de host, el puerto, la ruta, el fragmento y cada parámetro de consulta."
        },
        {
          "question": "¿Qué pasa con las claves de consulta duplicadas?",
          "answer": "Se lista cada una. No se combinan en un solo valor."
        },
        {
          "question": "¿Y un valor de consulta vacío?",
          "answer": "Una clave sin nada después del signo igual se conserva y se muestra como vacía."
        },
        {
          "question": "¿Por qué se rechaza una URL relativa?",
          "answer": "Una ruta relativa no tiene protocolo ni host, así que no es una URL absoluta."
        },
        {
          "question": "¿Se envía la URL a un servidor?",
          "answer": "No. El análisis ocurre en tu navegador."
        }
      ]
    },
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
    "answer": "Un generador de robots.txt escribe líneas User-agent, Allow y Disallow a partir de las reglas que escribes. Puede añadir la URL de un sitemap. No publica ni prueba un sitio en línea.",
    "content": {
      "about": "Escribe el texto de un robots.txt a partir de uno o varios grupos de user-agent y una URL de sitemap opcional.",
      "howTo": [
        "Escribe un user-agent.",
        "Añade rutas Allow y Disallow, una por línea.",
        "Añade la URL de un sitemap si quieres.",
        "Pulsa Generar."
      ],
      "features": [
        "Varios grupos de user-agent.",
        "Varias líneas Allow y Disallow.",
        "Una URL de sitemap absoluta opcional."
      ],
      "examples": [
        {
          "title": "Una carpeta privada",
          "body": "User-agent * con Disallow: /admin indica a los rastreadores que no accedan a rutas bajo /admin. El archivo es solo texto."
        }
      ],
      "explanation": "Cada grupo empieza con User-agent, seguido de una línea Allow por ruta y una línea Disallow por ruta. Las líneas de ruta vacías se omiten. Un sitemap solo se añade si es una URL absoluta http o https. La página no sube el archivo ni prueba un sitio en línea.",
      "tips": [
        "Usa * para todos los rastreadores.",
        "Pon cada ruta en su propia línea."
      ],
      "limitations": "El resultado es texto para copiar. No publica reglas ni comprueba lo que permite un sitio en línea.",
      "faqs": [
        {
          "question": "¿Cómo se escribe un archivo robots.txt?",
          "answer": "Empieza con una línea User-agent y añade líneas Allow y Disallow. Añade una línea Sitemap cuando tengas una URL de sitemap absoluta."
        },
        {
          "question": "¿Puedo usar más de un user-agent?",
          "answer": "Sí. Cada grupo tiene su propio user-agent y sus propias reglas."
        },
        {
          "question": "¿Qué pasa con una ruta vacía?",
          "answer": "Una línea vacía se omite, así que no crea una regla Allow o Disallow vacía."
        },
        {
          "question": "¿Esto prueba mi sitio en línea?",
          "answer": "No. Solo genera el texto. No publica el archivo ni consulta tu sitio."
        },
        {
          "question": "¿Qué URL de sitemap se acepta?",
          "answer": "Una URL absoluta http o https. Una ruta sin protocolo se rechaza."
        },
        {
          "question": "¿Se envían estos datos a un servidor?",
          "answer": "No. Las líneas de user-agent y las rutas se arman en esta pestaña. No se suben y la página no consulta tu sitio."
        }
      ]
    },
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
      "about": "Escribe una contraseña y obtén una calificación Débil, Moderada o Fuerte. La estimación usa la longitud y los tipos de caracteres que aparecen. No busca filtraciones ni sabe si un sitio aceptará la contraseña.",
      "howTo": [
        "Escribe la contraseña. Un cuadro vacío se rechaza.",
        "Pulsa Comprobar.",
        "Lee la calificación, la longitud, los bits estimados y los tipos de caracteres encontrados."
      ],
      "features": [
        "Las mayúsculas, minúsculas, números y el conjunto de símbolos solo cuentan si aparecen.",
        "Cualquier otro carácter, incluido un espacio o un acento grave, suma uno al conjunto por cada carácter distinto.",
        "Débil es menos de 50 bits, Moderada menos de 80 y Fuerte 80 o más."
      ],
      "examples": [
        {
          "title": "Una palabra en minúsculas",
          "body": "password tiene 8 letras minúsculas. El conjunto es 26, la estimación redondeada da 38 bits y la calificación es Débil."
        },
        {
          "title": "Letras, un número y un símbolo",
          "body": "Abcdefghijklm12! tiene 16 caracteres con mayúsculas, minúsculas, números y un símbolo. El conjunto es 85, la estimación redondeada da 103 bits y la calificación es Fuerte."
        }
      ],
      "explanation": "Los bits son la longitud por el logaritmo en base 2 del conjunto. El conjunto es 26 para mayúsculas si aparece una letra de la A a la Z, 26 para minúsculas, 10 para un dígito y 23 para un símbolo de !@#$%^&*()-_=+[]{};:,.?. Un carácter fuera de esos conjuntos no cuenta como el conjunto de símbolos completo: suma uno. No es el generador de contraseñas, que califica una contraseña según los tipos elegidos antes de crearla.",
      "tips": [
        "Una contraseña más larga y con varios tipos de caracteres obtiene mejor calificación que una palabra corta.",
        "Usa el Generador de contraseñas si quieres una contraseña nueva en lugar de una calificación."
      ],
      "limitations": "Hasta 256 caracteres. La página no busca filtraciones ni sabe si un sitio aceptará la contraseña. Las letras con tilde cuentan como otros caracteres, no como A a Z.",
      "faqs": [
        {
          "question": "¿El comprobador de fortaleza es gratis?",
          "answer": "Sí. Puedes calificar una contraseña aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Se compara la contraseña con contraseñas filtradas?",
          "answer": "No. La calificación se basa solo en la longitud y los tipos de caracteres de lo que escribiste."
        },
        {
          "question": "¿Por qué una contraseña solo de dígitos es Débil?",
          "answer": "Ocho dígitos usan un conjunto de 10. Eso son unos 27 bits, menos de 50, así que la calificación es Débil."
        },
        {
          "question": "¿Se envía la contraseña a un servidor?",
          "answer": "No. La comprobación se hace en esta pestaña del navegador. Tools Star Hub no envía la contraseña a un servidor ni la guarda en el almacenamiento local."
        }
      ]
    },
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
    "answer": "Un generador de metaetiquetas escribe las etiquetas HTML de título, descripción, robots, canónica, Open Graph y Twitter. No descarga ninguna página.",
    "content": {
      "about": "Escribe un título y las etiquetas opcionales que quieras. La página escribe HTML que puedes pegar en el head de una página. No consulta una URL en línea ni comprueba cómo compartirá el enlace un sitio.",
      "howTo": [
        "Escribe un título. Un título vacío se rechaza.",
        "Añade una descripción, una URL canónica, las opciones de robots y los campos de Open Graph o Twitter que quieras.",
        "Pulsa Generar y copia el HTML."
      ],
      "features": [
        "Una etiqueta charset, un título y una etiqueta robots en cada resultado.",
        "Descripción, enlace canónico, etiquetas Open Graph y etiquetas de Twitter opcionales.",
        "Las comillas y los signos & del texto se escapan."
      ],
      "examples": [
        {
          "title": "Un título y una descripción",
          "body": "El título Sample page y la descripción A short description of the page., con index y follow, generan una etiqueta charset, el título, la descripción y una etiqueta robots index, follow."
        },
        {
          "title": "Un & en el título",
          "body": "El título A & B se escribe como A &amp; B dentro de la etiqueta title."
        }
      ],
      "explanation": "El HTML se arma con los campos que rellenas. Los campos opcionales vacíos se omiten. La URL canónica, la imagen de Open Graph, la URL de Open Graph y la imagen de Twitter deben ser URL absolutas http o https. La página no consulta esas URL.",
      "tips": [
        "Usa aquí los campos de Open Graph cuando quieras las etiquetas en tu propio HTML. Una vista previa en vivo al compartir es otra comprobación."
      ],
      "limitations": "El título puede tener hasta 200 caracteres y la descripción hasta 500. El tipo de Open Graph es website, article o ninguno. La tarjeta de Twitter es summary, summary_large_image o ninguna. Un título de Twitter sin tarjeta se rechaza.",
      "faqs": [
        {
          "question": "¿El generador de metaetiquetas es gratis?",
          "answer": "Sí. Puedes escribir las etiquetas aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Comprueba cómo se verá un enlace en una red social?",
          "answer": "No. Solo escribe las etiquetas. No abre la URL."
        },
        {
          "question": "¿Qué valor de robots se escribe?",
          "answer": "La opción de index y la de follow, por ejemplo index, follow o noindex, nofollow."
        },
        {
          "question": "¿Se envía el texto a un servidor?",
          "answer": "No. El HTML se construye en esta pestaña del navegador. Tools Star Hub no envía esos campos a un servidor ni los guarda en el almacenamiento local."
        }
      ]
    },
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
    "answer": "Una vista previa de Open Graph envía la URL de una página a este sitio, lee el título público y las etiquetas para compartir, y no guarda la página. Las direcciones privadas y no http se rechazan.",
    "content": {
      "about": "Escribe una URL pública http o https. Comprobar vista previa envía esa URL a este sitio. El sitio solicita la página y muestra el título, la descripción, la imagen y la tarjeta de Twitter que encuentra. La página no se guarda aquí. Una dirección privada o local se rechaza antes de leer la página.",
      "howTo": [
        "Escribe una URL absoluta http o https.",
        "Pulsa Comprobar vista previa.",
        "Lee la tarjeta. Una dirección rechazada, un tiempo de espera agotado o una URL no http muestra un error breve y ningún contenido de la página."
      ],
      "features": [
        "Los campos de título, descripción, dirección de imagen y tarjeta de Twitter de la página pública.",
        "La dirección tras las redirecciones, si la redirección sigue en una URL pública http o https.",
        "Un error breve cuando la dirección es privada, la solicitud agota el tiempo o el protocolo no es http ni https."
      ],
      "examples": [
        {
          "title": "Una página pública",
          "body": "https://example.com/ devuelve el título Example Domain. Esa página no tiene descripción, imagen ni tarjeta de Twitter, así que esos campos indican No encontrado."
        },
        {
          "title": "Una dirección local",
          "body": "http://127.0.0.1/ y la forma decimal http://2130706433/ muestran ambas No se puede acceder a esa dirección."
        }
      ],
      "explanation": "El navegador solo envía la URL a este sitio. El sitio resuelve el host, rechaza una dirección privada, de bucle invertido, de enlace local o reservada, y vuelve a comprobar tras cada redirección. Lee como máximo 512 KiB de la página descomprimida y devuelve las etiquetas. La página en bruto no se devuelve ni se guarda.",
      "tips": [
        "Usa el generador de metaetiquetas cuando quieras escribir las etiquetas tú mismo. Esta página lee etiquetas que ya están en una URL pública."
      ],
      "limitations": "Solo http y https. Una URL file, una URL con nombre de usuario y una dirección privada se rechazan. La solicitud se detiene a los 8 segundos. Puede aparecer una imagen para compartir aunque el servidor de la imagen bloquee la miniatura.",
      "faqs": [
        {
          "question": "¿La vista previa de Open Graph es gratis?",
          "answer": "Sí. Puedes comprobar las etiquetas para compartir de una página pública sin pagar ni crear una cuenta. Aun así, la URL se envía a este sitio para poder leer las etiquetas."
        },
        {
          "question": "¿La URL sale de este dispositivo?",
          "answer": "Sí. Comprobar vista previa envía la URL a este sitio, que solicita esa página pública y lee sus etiquetas. La página no se guarda aquí. Una dirección privada o no http se rechaza."
        },
        {
          "question": "¿Por qué se rechazó una URL local?",
          "answer": "Direcciones como 127.0.0.1, una red privada y la forma decimal de una dirección de bucle invertido se rechazan antes de leer la página."
        },
        {
          "question": "¿Cómo se ve un tiempo de espera agotado?",
          "answer": "No se muestra la tarjeta. La página indica que la solicitud de vista previa agotó el tiempo."
        }
      ]
    },
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
  }
};

export default data;
