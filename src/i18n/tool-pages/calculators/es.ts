import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "percentage-calculator": {
    "answer": "Una calculadora de porcentajes te ayuda a hallar porcentajes, cambios porcentuales y valores relacionados sin hacer la operación a mano.",
    "content": {
      "about": "La calculadora de porcentajes responde a tres preguntas: cuánto es el X % de Y, qué porcentaje es X de Y, y en qué se convierte un número tras un aumento o una disminución porcentual. Úsala para una nota, una parte de un total o un cambio rápido de precio. Un precio de oferta, el impuesto sobre ventas y una propina tienen cada uno su propia calculadora, porque esas tareas parten de un precio y un tipo, no de estos tres patrones.",
      "howTo": [
        "Elige el modo: el X % de Y, qué porcentaje es X de Y, o aumento o disminución.",
        "Escribe los dos números. Para el porcentaje de un número, X es el porcentaje e Y es el número. Para «qué porcentaje», X es la parte e Y es el total. Para un cambio, X es el porcentaje e Y es el número de partida.",
        "Si elegiste aumento o disminución, indica Aumentar o Disminuir.",
        "Pulsa Calcular. El número grande es el resultado. Las líneas de debajo muestran la etiqueta y la operación. Pulsa Restablecer para vaciar los campos."
      ],
      "examples": [
        {
          "title": "¿Cuánto es el 15 % de 80?",
          "body": "Elige el modo del X % de Y. Escribe 15 como porcentaje (X) y 80 como número (Y). Calcular muestra 12. La línea de detalle es 15 ÷ 100 × 80, y la etiqueta es el 15 % de 80."
        },
        {
          "title": "¿Qué porcentaje de 40 es 12?",
          "body": "Elige el modo de qué porcentaje es X de Y. Escribe 12 como valor (X) y 40 como total (Y). Calcular muestra 30 %. La línea de detalle es 12 ÷ 40 × 100."
        },
        {
          "title": "Aumentar 200 en un 10 %",
          "body": "Elige aumento o disminución, deja la dirección en Aumentar y escribe 10 como cambio porcentual (X) y 200 como número de partida (Y). Calcular muestra 220. También muestra el importe añadido, 20, y el detalle 200 + (10 ÷ 100 × 200)."
        }
      ],
      "explanation": "Un porcentaje es un número sobre 100. «El X % de Y» multiplica Y por X ÷ 100. «Qué porcentaje es X de Y» divide X entre Y y multiplica por 100. Un aumento suma esa fracción al número de partida. Una disminución la resta. La página redondea la operación a 10 decimales y luego muestra hasta 6 decimales.",
      "sections": [
        {
          "heading": "Los puntos porcentuales y el porcentaje son preguntas distintas",
          "paragraphs": [
            "Un tipo que pasa del 10 % al 12 % ha subido 2 puntos porcentuales. El cambio relativo es 2 ÷ 10 × 100, que es un 20 %. Ambas frases son ciertas, y no son intercambiables.",
            "Esta página no convierte una en la otra por ti. Si ya tienes la diferencia, usa «qué porcentaje»: 2 es el 20 % de 10, así que Calcular muestra 20 %. Si quieres el nuevo tipo después de sumar el 20 % de 10, usa Aumentar: 10 aumentado un 20 % muestra 12, con 2 añadidos. Para dos valores ya conocidos, como 80 y luego 100, usa la calculadora de cambio porcentual."
          ]
        },
        {
          "heading": "El descuento, el impuesto y la propina usan otras calculadoras",
          "paragraphs": [
            "Un descuento del 25 % sobre 80 resta 20 y deja 60. El modo Disminuir puede hacer esa operación: escribe 25 y 80, elige Disminuir y Calcular muestra 60, con un importe restado de 20. La línea de detalle es 80 − (25 ÷ 100 × 80).",
            "La calculadora de descuentos está pensada para un precio y un porcentaje de descuento, y rechaza un descuento superior al 100 %. La calculadora de impuesto sobre ventas añade un tipo a un precio. La calculadora de propinas divide una cuenta según un porcentaje de propina y un número de personas. Usa esas páginas cuando la pregunta sea un ticket, no un porcentaje sin más."
          ]
        },
        {
          "heading": "El cero, el orden y los símbolos",
          "paragraphs": [
            "El 0 % de 50 es 0. La línea de detalle es 0 ÷ 100 × 50. Preguntar qué porcentaje de 0 es 5 se rechaza. La página indica que el segundo número no puede ser 0 al hallar un porcentaje.",
            "El orden de los números es la pregunta. El 15 % de 80 es 12, y el 80 % de 15 también es 12, pero 12 es el 15 % de 80 y 12 es el 80 % de 15. Son resultados distintos de «qué porcentaje». Escribe 12 y 80 para ver 15 %. Escribe 12 y 15 para ver 80 %.",
            "Escribe números simples. Un signo de dólar o de porcentaje en el campo es un dato no válido. Se admiten decimales, así que el 12,5 % de 80 es 10."
          ]
        },
        {
          "heading": "Privacidad",
          "paragraphs": [
            "Los números se quedan en esta pestaña del navegador. El cálculo se ejecuta en la página. Los valores no se envían a un servidor ni se escriben en el almacenamiento local. Si aceptas las cookies de analítica, la visita puede contarse. Los números que escribes no forman parte de esa medición."
          ]
        }
      ],
      "tips": [
        "Escribe la pregunta en una frase antes de elegir un modo. «El 15 % de 80» y «qué porcentaje de 80 es 15» son tareas distintas.",
        "En un aumento o una disminución, X es el porcentaje e Y es el número de partida. Si los intercambias, el porcentaje se aplica al valor equivocado.",
        "Usa Disminuir cuando quieras el número que queda después de restar un porcentaje. El resultado grande es el nuevo importe. El importe restado aparece en una línea aparte.",
        "Comprueba primero un caso redondo. El 10 % de 50 es 5. Si ese cálculo mental falla, el modo o el orden de los campos está mal."
      ],
      "limitations": "Esta página solo calcula el porcentaje de un número, un número como porcentaje de otro, o un aumento o una disminución porcentual. No consulta un tipo impositivo ni divide una propina. Dividir entre cero se rechaza en el modo «qué porcentaje». Un resultado es la operación de los números que escribes. No es asesoramiento financiero, fiscal ni académico.",
      "faqs": [
        {
          "question": "¿Cómo calculo el porcentaje de un número?",
          "answer": "Elige el modo del X % de Y. Pon el porcentaje en X y el número en Y, y pulsa Calcular. El 15 % de 80 es 12, de 15 ÷ 100 × 80."
        },
        {
          "question": "¿Cómo hallo qué porcentaje es un número de otro?",
          "answer": "Elige el modo de qué porcentaje es X de Y. Pon la parte en X y el total en Y. 12 de 40 es el 30 %, de 12 ÷ 40 × 100. El total no puede ser 0."
        },
        {
          "question": "¿Cómo aumento o disminuyo un número en un porcentaje?",
          "answer": "Elige aumento o disminución. Pon el porcentaje en X y el número de partida en Y, y elige Aumentar o Disminuir. Aumentar 200 un 10 % muestra 220, con 20 añadidos. Disminuir 80 un 25 % muestra 60, con 20 restados."
        },
        {
          "question": "¿Cuál es la diferencia entre porcentaje y puntos porcentuales?",
          "answer": "Los puntos porcentuales son una simple resta de dos tipos. Del 10 % al 12 % hay 2 puntos porcentuales. El porcentaje es el cambio relativo: 2 es el 20 % de 10. Esta calculadora no cambia entre esas dos ideas de forma automática."
        },
        {
          "question": "¿Qué ocurre si uso 0?",
          "answer": "El 0 % de un número es 0. No es posible hallar qué porcentaje es un número de 0, así que la herramienta pide otro segundo número. El mensaje indica que el segundo número no puede ser 0 al hallar un porcentaje."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. Los números que escribes se calculan en esta pestaña del navegador. Tools Star Hub no envía esos números a un servidor ni los guarda en el almacenamiento local."
        },
        {
          "question": "¿La calculadora de porcentajes es gratuita?",
          "answer": "Sí. Puedes hallar el porcentaje de un número, qué porcentaje es un número de otro, o un aumento o una disminución porcentual aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Cómo invierto un porcentaje para hallar el número original?",
          "answer": "Divide el importe conocido entre el porcentaje en decimal (por ejemplo, 80 ÷ 0,2) para recuperar la base antes de aplicar el porcentaje."
        },
        {
          "question": "¿Qué diferencia hay entre un aumento porcentual y un margen de beneficio?",
          "answer": "Ambos suben un número en un porcentaje; el margen comercial suele partir del coste, mientras que «aumentar en» puede aplicarse a cualquier base que elijas."
        },
        {
          "question": "¿Puedo calcular descuentos sucesivos con esta herramienta?",
          "answer": "Aplica cada descuento al nuevo importe, en orden; no sumes los porcentajes para restar una sola vez."
        },
        {
          "question": "¿Cómo se relacionan los porcentajes de propina con la cuenta?",
          "answer": "Escribe la cuenta como base y el porcentaje de propina como porcentaje para ver el importe de la propina y, si quieres, el total."
        },
        {
          "question": "¿Por qué el 10 % de 50 no es lo mismo que el 50 % de 10?",
          "answer": "En este caso ambos dan 5 (0,10 × 50 y 0,50 × 10), pero en «qué porcentaje» el orden sí cambia el resultado: nombra siempre la base con claridad."
        },
        {
          "question": "¿Cómo expreso una proporción como porcentaje?",
          "answer": "Divide la parte entre el total y multiplica por 100 para obtener el porcentaje."
        },
        {
          "question": "¿Tienen sentido los porcentajes negativos?",
          "answer": "Sí, para disminuciones o pérdidas: interpreta el signo como la dirección respecto a la base que escribiste."
        },
        {
          "question": "¿Qué tan precisos son los resultados decimales?",
          "answer": "Los resultados usan aritmética de coma flotante normal; redondea a céntimos o a porcentajes enteros al informar de dinero o de notas."
        },
        {
          "question": "¿Y si necesito partes por millón en lugar de porcentaje?",
          "answer": "Convierte: 1 % = 10 000 ppm. Esta calculadora trabaja en porcentajes."
        },
        {
          "question": "¿Cómo deben ponderar los docentes los porcentajes de los exámenes?",
          "answer": "Convierte cada nota a puntos con su peso y luego combínalos; promediar los porcentajes sin más ignora los pesos distintos."
        },
        {
          "question": "¿La herramienta maneja cadenas de porcentaje sobre porcentaje?",
          "answer": "Ejecuta cada paso por separado sobre el valor actualizado para que la acumulación sea correcta."
        },
        {
          "question": "¿Puedo usarla para pasar de precios sin impuesto a precios con impuesto?",
          "answer": "Para añadir el impuesto, aumenta según el tipo; para quitarlo de un precio bruto, divide entre (1 + el tipo)."
        },
        {
          "question": "¿Por qué mi hoja de cálculo difiere en un céntimo?",
          "answer": "El modo de redondeo y la precisión intermedia son distintos; iguala las reglas de redondeo (bancario o al alza desde la mitad) al conciliar."
        }
      ]
    },
    "metaDescription": "Halla porcentajes de un número, qué porcentaje es un número de otro, y el resultado de un aumento o una disminución porcentual, con el cálculo a la vista.",
    "ui": {}
  },
  "percentage-change-calculator": {
    "answer": "Una calculadora de cambio porcentual muestra cuánto aumentó o disminuyó un número en relación con su valor inicial.",
    "content": {
      "about": "Compara un número original con uno nuevo y ve el aumento o la disminución en porcentaje. Úsala cuando un precio, una puntuación o una medida se movió y necesitas el tamaño de ese movimiento. Pasar de 80 a 100 es un aumento del 25 %, mientras que volver de 100 a 80 es una disminución del 20 %, porque los números de partida son distintos.",
      "howTo": [
        "Escribe el valor original y el valor nuevo.",
        "Pulsa Calcular para ver el cambio porcentual.",
        "Un resultado positivo es un aumento. Un resultado negativo es una disminución."
      ],
      "examples": [
        {
          "title": "De 80 a 100",
          "body": "El valor subió 20, lo que es un aumento del 25 %."
        },
        {
          "title": "De 100 a 80",
          "body": "El valor bajó 20, lo que es una disminución del 20 %."
        }
      ],
      "explanation": "El cambio porcentual es (nuevo − original) ÷ original × 100. Subir un 25 % y luego bajar un 20 % no son cambios del mismo tamaño, porque los puntos de partida son distintos.",
      "limitations": "Un valor original de 0 se rechaza, porque el cambio se divide entre ese número inicial. Cuando ambos valores son 0, el resultado es 0 %. Esta página no calcula el porcentaje de un número ni un precio con descuento.",
      "faqs": [
        {
          "question": "¿La calculadora de cambio porcentual es gratuita?",
          "answer": "Sí. Comparar un valor original con uno nuevo para obtener el aumento o la disminución en porcentaje es gratis y no requiere cuenta."
        },
        {
          "question": "¿Por qué no puedo usar 0 como valor original?",
          "answer": "Dividir entre cero no está definido. Si ambos valores son 0, el cambio es del 0 %. Cualquier otro valor nuevo a partir de 0 no se puede expresar como un porcentaje finito."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. Ambos valores se usan solo para la división en esta página. No se sube ni se guarda nada."
        },
        {
          "question": "¿Cuál es la fórmula del cambio porcentual?",
          "answer": "Cambio porcentual = (valor nuevo − valor original) ÷ valor original × 100. Un resultado positivo es un aumento y uno negativo es una disminución."
        },
        {
          "question": "¿Por qué subir de 80 a 100 no es lo mismo que bajar de 100 a 80?",
          "answer": "El cambio se divide entre el número inicial. 20 sobre 80 es una subida del 25 %, mientras que 20 sobre 100 es una bajada del 20 %."
        },
        {
          "question": "¿Cómo mido el cambio porcentual de un valor antiguo a uno nuevo?",
          "answer": "Resta el antiguo del nuevo, divide entre el antiguo y multiplica por 100 para obtener el cambio porcentual."
        },
        {
          "question": "¿Qué significa un cambio porcentual negativo?",
          "answer": "Que el valor nuevo es menor que el original: una disminución."
        },
        {
          "question": "¿En qué se diferencia el cambio porcentual de los puntos porcentuales?",
          "answer": "El cambio porcentual es relativo al valor inicial; los puntos porcentuales son una diferencia absoluta entre dos porcentajes."
        },
        {
          "question": "¿Puedo comparar los ingresos de este mes con los del mes pasado?",
          "answer": "Sí: usa el mes pasado como original y este mes como nuevo."
        },
        {
          "question": "¿Por qué subir y luego volver a bajar parece asimétrico?",
          "answer": "Subir de 80 a 100 es +25 %, pero de 100 a 80 es −20 %, porque las bases son distintas."
        },
        {
          "question": "¿Cómo expreso un cambio de 50 a 75?",
          "answer": "(75 − 50) / 50 = 0,5 → un aumento del 50 %."
        },
        {
          "question": "¿Y si ambos valores son negativos?",
          "answer": "Se aplica la misma fórmula, pero interpreta los signos con cuidado en contextos de deuda o temperatura."
        },
        {
          "question": "¿Cómo presento un cambio porcentual en un informe?",
          "answer": "Indica ambos valores absolutos y el porcentaje, para que el lector vea la escala y no solo la tasa."
        },
        {
          "question": "¿La herramienta acepta decimales?",
          "answer": "Sí: usa decimales para cifras precisas de finanzas o ciencia."
        },
        {
          "question": "¿Cómo invierto un cambio porcentual conocido para hallar el valor inicial?",
          "answer": "Divide el valor nuevo entre (1 + el cambio en decimal) cuando el cambio fue un aumento."
        },
        {
          "question": "¿Cuándo es más claro hablar de puntos porcentuales?",
          "answer": "Al comparar tasas (un desempleo del 5 % al 6 % es +1 punto, no un cambio del +20 %), para evitar confusiones."
        },
        {
          "question": "¿Unos valores base muy pequeños pueden dar porcentajes enormes?",
          "answer": "Sí: los denominadores pequeños inflan el cambio porcentual; muestra también las diferencias absolutas."
        },
        {
          "question": "¿Cómo se usa mal el cambio porcentual en marketing?",
          "answer": "Eligiendo una base favorable o mezclando puntos con porcentajes: comprueba siempre la base."
        },
        {
          "question": "¿La comparación semana a semana usa la misma fórmula?",
          "answer": "Sí: solo cambian los dos números que comparas, no la operación."
        },
        {
          "question": "¿El cálculo del cambio porcentual sale del navegador?",
          "answer": "El cálculo de esta página está pensado para quedarse en la sesión."
        }
      ]
    },
    "metaDescription": "Compara un número original con uno nuevo y ve el cambio porcentual. De 80 a 100 es una subida del 25 %; de 100 a 80, una bajada del 20 %.",
    "ui": {}
  },
  "discount-calculator": {
    "answer": "Una calculadora de descuentos convierte un precio de lista y un porcentaje de descuento en el importe ahorrado y el precio final.",
    "content": {
      "about": "Aplica un porcentaje de descuento a un precio y ve el importe ahorrado y el precio final. Quien compra o quien escribe un precio de oferta puede usarla cuando el descuento es un simple porcentaje. Escribe solo números: un símbolo de moneda no es válido y el descuento no puede superar el 100 %.",
      "howTo": [
        "Escribe el precio original como un número, sin símbolo de moneda.",
        "Escribe el porcentaje de descuento.",
        "Pulsa Calcular para ver el importe del descuento y el precio final."
      ],
      "examples": [
        {
          "title": "50 con un 20 % de descuento",
          "body": "El descuento es 10. El precio final es 40."
        },
        {
          "title": "Un descuento del 100 %",
          "body": "El precio final es 0."
        }
      ],
      "explanation": "El importe del descuento es el precio original × el descuento ÷ 100. El precio final es el precio original menos ese importe. La herramienta no asume una moneda, así que 19,99 significa 19,99 en la unidad que estés usando.",
      "limitations": "Escribe el precio y el porcentaje como números simples. Un símbolo de moneda no es válido y un descuento superior al 100 % se rechaza. El impuesto sobre ventas y el reparto de una propina no forman parte de esta resta.",
      "faqs": [
        {
          "question": "¿La calculadora de descuentos es gratuita?",
          "answer": "Sí. Aplicar un porcentaje a un precio y mostrar el importe ahorrado es gratis aquí, sin registro."
        },
        {
          "question": "¿Puedo escribir un símbolo de moneda?",
          "answer": "Escribe solo números. Añadir un símbolo como $ o € se tratará como un dato no válido."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. El precio y el porcentaje se quedan en esta página para la resta. No se envían a un servidor ni se guardan en el almacenamiento local."
        },
        {
          "question": "¿Cómo calculo un descuento?",
          "answer": "Multiplica el precio por el porcentaje de descuento y divídelo entre 100 para obtener el importe rebajado; luego réstalo del precio. Un 25 % de descuento sobre 80 son 20 menos, así que pagas 60."
        },
        {
          "question": "¿Dos descuentos del 20 % equivalen a un 40 %?",
          "answer": "No. El segundo 20 % se aplica al precio ya rebajado, así que un 20 % y luego otro 20 % suman un 36 % de descuento en total, no un 40 %."
        },
        {
          "question": "¿Cómo obtengo rápido un precio con porcentaje de descuento?",
          "answer": "Multiplica el precio por el porcentaje, divídelo entre 100 para el importe rebajado y réstalo del precio."
        },
        {
          "question": "¿Cuál es la diferencia entre el tipo de descuento y el importe del descuento?",
          "answer": "El tipo es el porcentaje; el importe es lo que se resta en moneda. Ambos aparecen en un desglose claro del ticket."
        },
        {
          "question": "¿Acumular un 20 % y luego otro 20 % es lo mismo que un 40 %?",
          "answer": "No. El segundo descuento se aplica al precio ya rebajado, así que el recorte combinado es menor que el 40 %."
        },
        {
          "question": "¿Cómo sé qué porcentaje de descuento me aplicaron?",
          "answer": "Divide el importe ahorrado entre el precio original y multiplícalo por 100."
        },
        {
          "question": "¿Cómo hallo el precio anterior a un descuento?",
          "answer": "Divide el precio rebajado entre (1 − tipo) cuando conoces el tipo."
        },
        {
          "question": "¿Puedo escribir un descuento con decimales, como 12,5 %?",
          "answer": "Sí, cuando la herramienta admite porcentajes decimales. Vigila el redondeo del último céntimo."
        },
        {
          "question": "¿El impuesto se incluye automáticamente en el total con descuento?",
          "answer": "Por lo general solo descuenta el precio que escribes. Aplica el impuesto en un paso aparte si hace falta."
        },
        {
          "question": "¿2x1 es lo mismo que un 50 % en todo?",
          "answer": "Solo cuando ambos artículos tienen el mismo precio y el artículo gratis vale el 100 %. Con precios distintos el resultado cambia."
        },
        {
          "question": "¿Por qué mi ticket difiere en un céntimo?",
          "answer": "Las tiendas redondean por línea o después del impuesto de forma distinta. Sigue sus reglas de redondeo para acertar los céntimos."
        },
        {
          "question": "¿Qué precio veo si el tipo de descuento es cero?",
          "answer": "El precio original, con un ahorro de cero."
        },
        {
          "question": "¿Puedo modelar un cupón más un porcentaje de descuento?",
          "answer": "Aplícalos en el mismo orden que la tienda: la secuencia cambia el total."
        },
        {
          "question": "¿También se descuenta el envío?",
          "answer": "Solo si la oferta lo dice. A menudo el envío queda fuera de las promociones de porcentaje."
        },
        {
          "question": "¿Cómo suelen funcionar los descuentos para empleados?",
          "answer": "Las políticas varían: algunas excluyen los artículos en oferta. Usa las reglas publicadas, no una acumulación genérica."
        },
        {
          "question": "¿Puedo comparar dos ofertas de descuento distintas?",
          "answer": "Calcula lo que pagarías al final en ambos carritos, incluido el impuesto y el envío."
        },
        {
          "question": "¿Se guardan los precios que escribo después de calcular?",
          "answer": "Las cifras se quedan solo en la sesión de la página."
        }
      ]
    },
    "metaDescription": "Aplica un porcentaje de descuento a un precio y ve cuánto ahorras y cuánto pagas. Escribe solo números, sin símbolos de moneda.",
    "ui": {}
  },
  "age-calculator": {
    "answer": "Una calculadora de edad cuenta los años, meses y días entre una fecha de nacimiento y hoy, u otra fecha que elijas.",
    "content": {
      "about": "La calculadora de edad cuenta los años completos, luego los meses restantes y luego los días restantes desde una fecha de nacimiento hasta hoy, o hasta otra fecha que elijas. También muestra el número total de días. Úsala para un cumpleaños, un aniversario o la edad que alguien tendrá en un día futuro. Sigue el calendario, incluidos los días bisiestos. No divide el recuento de días entre 365.",
      "howTo": [
        "Escribe la fecha de nacimiento.",
        "Deja vacía la segunda fecha para usar hoy, o elige otra fecha si quieres la edad en ese día.",
        "Pulsa Calcular. La página muestra años, meses, días y el total de días.",
        "Si la segunda fecha es anterior al nacimiento, la página se detiene y pide una fecha posterior."
      ],
      "examples": [
        {
          "title": "Nacido el 1 de enero de 2000, edad el 1 de enero de 2026",
          "body": "Escribe 2000-01-01 como fecha de nacimiento y 2026-01-01 como la otra fecha. Calcular muestra 26 años, 0 meses y 0 días. El total de días es 9497. Ese recuento incluye los siete días bisiestos de 2000 a 2024. Dividir 9497 entre 365 no da esta edad."
        },
        {
          "title": "Un cumpleaños en día bisiesto",
          "body": "Escribe 2000-02-29 y 2001-02-28. Calcular muestra 0 años, 11 meses y 30 días. El total de días es 365. El año 2001 no es bisiesto, así que el 29 de febrero no existe en 2001. El recuento retrocede un mes y usa la duración de enero de 2001, que tiene 31 días."
        },
        {
          "title": "Edad en una fecha futura",
          "body": "Escribe 2010-06-15 y 2030-06-15. Calcular muestra 20 años, 0 meses y 0 días. El total de días es 7305. Una fecha anterior al nacimiento se rechaza con un mensaje que indica que la fecha elegida no puede ser anterior a la fecha de nacimiento."
        }
      ],
      "explanation": "La edad se cuenta desde la fecha de nacimiento del calendario hasta la fecha elegida. La herramienta resta años, luego meses y luego días. Si el número de días queda negativo, toma prestada la duración del mes anterior. Si el número de meses queda negativo, toma prestado un año. El total de días es el número de medianoches entre las dos fechas en UTC, así que un día bisiesto dentro del intervalo es un día más.",
      "sections": [
        {
          "heading": "Por qué dividir entre 365 da otro número",
          "paragraphs": [
            "Del 1 de enero de 2000 al 1 de enero de 2026 hay 9497 días. 9497 ÷ 365 son unos 26,02, que no es «26 años, 0 meses, 0 días». La edad de calendario es un recuento de aniversarios. El recuento de días es una línea aparte en la página.",
            "Un año en esta herramienta no son 365 días ni 365,25 días. Es el mismo mes y día de un año posterior, ajustado cuando ese día no existe. Por eso un cumpleaños del 29 de febrero no cumple un año el 28 de febrero del año siguiente."
          ]
        },
        {
          "heading": "Cómo se toma prestado un mes corto",
          "paragraphs": [
            "Si el día de la fecha de cálculo es anterior en el mes al día de nacimiento, la herramienta retrocede un mes y suma el número de días del mes anterior. Enero toma prestado diciembre del año anterior, que tiene 31 días.",
            "Una fecha imposible, como el 31 de abril o el 29 de febrero de 2001, se rechaza antes de mostrar una edad. El campo de nacimiento debe ser una fecha real del calendario."
          ]
        },
        {
          "heading": "Lo que este recuento no es",
          "paragraphs": [
            "El resultado es aritmética de calendario. No es una edad médica ni una edad legal para un contrato, una licencia o una prestación. Esas normas a veces cuentan el propio cumpleaños de una forma especial. Esta página no lo hace.",
            "Dejar vacía la segunda fecha usa la fecha de tu navegador, según el reloj del dispositivo. Cambiar el reloj cambia «hoy». Una fecha que escribes se usa tal como la escribiste."
          ]
        },
        {
          "heading": "Privacidad",
          "paragraphs": [
            "Ambas fechas se quedan en esta pestaña. El recuento no las envía a un servidor ni las escribe en el almacenamiento local. La analítica, si la aceptas, puede registrar que se abrió la página. No recibe las fechas."
          ]
        }
      ],
      "tips": [
        "Usa la segunda fecha cuando necesites una edad en un cumpleaños, una cita futura o un aniversario pasado. Vacía significa hoy.",
        "Para alguien nacido el 29 de febrero, elige una fecha real de un año no bisiesto, como el 28 de febrero o el 1 de marzo. La página no inventará el 29 de febrero de 2001.",
        "Lee juntos los años, los meses y los días. La línea del total de días es la duración del intervalo, no una segunda edad.",
        "Si el resultado parece desfasado un mes, comprueba cuál es la fecha de nacimiento. Un par invertido se rechaza cuando la segunda fecha es anterior, y da otra edad cuando ambas fechas son válidas."
      ],
      "limitations": "El recuento va de la fecha de nacimiento hasta hoy, o hasta otra fecha que elijas. Se rechaza una fecha anterior al nacimiento. Se rechazan las fechas imposibles. Es aritmética de calendario, no una edad médica ni una edad legal para un contrato.",
      "faqs": [
        {
          "question": "¿Cómo calculo mi edad exacta?",
          "answer": "Escribe tu fecha de nacimiento y pulsa Calcular. La página cuenta los años completos, luego los meses completos desde el último mes de cumpleaños y luego los días restantes. También muestra el total de días. Dejar vacía la segunda fecha usa hoy."
        },
        {
          "question": "¿Cómo se cuenta la edad de alguien nacido el 29 de febrero?",
          "answer": "El recuento sigue el calendario real. Del 29 de febrero de 2000 al 28 de febrero de 2001 el resultado es 0 años, 11 meses y 30 días, y el total es de 365 días. La herramienta no trata todos los años como de 365 días."
        },
        {
          "question": "¿Puedo calcular la edad en una fecha futura?",
          "answer": "Sí, siempre que esa fecha no sea anterior a la fecha de nacimiento. Del 15 de junio de 2010 al 15 de junio de 2030 el resultado es 20 años, 0 meses y 0 días, con 7305 días en total."
        },
        {
          "question": "¿Por qué el total de días no son los años por 365?",
          "answer": "El total de días incluye los días bisiestos dentro del intervalo. Del 1 de enero de 2000 al 1 de enero de 2026 la edad de calendario es de 26 años, 0 meses y 0 días, y el total es de 9497 días. Dividir ese total entre 365 es otro cálculo."
        },
        {
          "question": "¿Y si la segunda fecha es anterior al nacimiento?",
          "answer": "La página la rechaza con un mensaje que indica que la fecha elegida no puede ser anterior a la fecha de nacimiento."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. Las fechas se quedan en esta pestaña mientras se cuenta la edad. No se envían a un servidor ni se escriben en el almacenamiento local."
        },
        {
          "question": "¿Cómo calculo la edad en años, meses y días?",
          "answer": "Escribe la fecha de nacimiento y la fecha de cálculo. La calculadora cuenta los años completos y luego los meses y días sobrantes con reglas de calendario, en lugar de un año fijo de 365 días."
        },
        {
          "question": "¿Puedo hallar la edad en una fecha pasada concreta?",
          "answer": "Sí. Pon esa fecha como segunda fecha para ver qué edad tenía alguien entonces. Es útil para registros históricos y comprobaciones de requisitos."
        },
        {
          "question": "¿Por qué los años bisiestos cambian el total de días?",
          "answer": "El 29 de febrero añade un día extra en los años bisiestos, así que el recuento de días entre dos fechas no es años × 365. La herramienta tiene en cuenta esos días del calendario."
        },
        {
          "question": "¿Cómo se calcula la edad con un cumpleaños el 29 de febrero según otras normas?",
          "answer": "Las convenciones varían según el país y la normativa. Muchas herramientas usan el 28 de febrero o el 1 de marzo como aniversario en los años no bisiestos; esta calculadora sigue el calendario como se describe en sus ejemplos."
        },
        {
          "question": "¿Pueden usarla los padres para las edades límite de escolarización?",
          "answer": "Sí, como ayuda para planificar. Confirma siempre la fecha límite oficial del centro y las normas locales, que pueden diferir de un recuento general de edad."
        },
        {
          "question": "¿La calculadora cuenta la fecha final como un día completo?",
          "answer": "La edad suele contar el tiempo completado hasta la fecha de cálculo. Un cumpleaños en esa fecha suele significar que ese año se acaba de completar."
        },
        {
          "question": "¿Por qué mi resultado difiere en un día de otro sitio?",
          "answer": "Las zonas horarias, el recuento inclusivo y las reglas del día bisiesto varían. Iguala ambas fechas y la regla del día bisiesto antes de comparar."
        },
        {
          "question": "¿Puedo calcular igual la edad de una mascota?",
          "answer": "La edad cronológica usa la misma aritmética de fechas. Las tablas de «años humanos» de las mascotas son fórmulas aparte, no una edad de calendario."
        },
        {
          "question": "¿Hace falta la hora del día?",
          "answer": "La mayoría de las herramientas de edad usan fechas enteras del calendario. Las horas y los minutos rara vez importan, salvo que una norma defina la edad en un instante preciso."
        },
        {
          "question": "¿Cómo compruebo la edad para la jubilación o una prestación?",
          "answer": "Calcula aquí la edad cronológica y luego aplica las reglas de edad y los documentos que exija el programa. Los requisitos son legales, no solo aritméticos."
        },
        {
          "question": "¿Y si solo conozco el año de nacimiento?",
          "answer": "Necesitas al menos el mes y el día para una edad exacta. Con solo el año puedes estimar un rango, no un resultado exacto en años, meses y días."
        },
        {
          "question": "¿Las fechas de cálculo futuras muestran la edad que se tendrá?",
          "answer": "Sí, cuando la herramienta admite fechas futuras. Eso ayuda a planificar con antelación cumpleaños y eventos con límite de edad."
        },
        {
          "question": "¿El horario de verano afecta a la edad en días?",
          "answer": "No en las calculadoras solo de fechas. El horario de verano cambia la hora del reloj, no la diferencia entre fechas del calendario."
        },
        {
          "question": "¿Se guardan las fechas de nacimiento después de calcular?",
          "answer": "Los valores se quedan en la sesión del navegador para el cálculo. Borra los campos si las fechas son sensibles."
        }
      ]
    },
    "metaDescription": "Cuenta años, meses y días desde una fecha de nacimiento hasta hoy u otra fecha posterior. Los días bisiestos siguen el calendario, no un año de 365 días.",
    "ui": {}
  },
  "unit-converter": {
    "answer": "Un conversor de unidades cambia longitud, peso, temperatura y otras unidades habituales usando factores de conversión estándar.",
    "content": {
      "about": "Convierte una longitud, un peso o una temperatura de una unidad a otra. Úsalo para una receta, un envío o una lectura del tiempo cuando ya conoces el número y solo necesitas la otra unidad. La moneda, el área y el volumen no están en esta página, y una temperatura por debajo del cero absoluto se rechaza.",
      "howTo": [
        "Elige una categoría: longitud, peso/masa o temperatura.",
        "Escribe un valor y elige las unidades de origen y de destino.",
        "El resultado se actualiza mientras escribes. Usa Intercambiar unidades para invertir la conversión."
      ],
      "examples": [
        {
          "title": "Longitud",
          "body": "1 metro = 100 centímetros = unos 3,28084 pies."
        },
        {
          "title": "Temperatura",
          "body": "0 °C = 32 °F = 273,15 K."
        }
      ],
      "explanation": "Las conversiones de longitud y peso multiplican a través de una unidad base (metro o kilogramo). Las de temperatura no son simples múltiplos: usan las fórmulas de Celsius, Fahrenheit y Kelvin y rechazan valores por debajo del cero absoluto.",
      "limitations": "Longitud, peso y temperatura son las únicas conversiones de esta página. No convierte moneda, área ni volumen. Se rechaza una temperatura por debajo del cero absoluto. La longitud y la masa usan factores fijos, así que el resultado puede mostrar más decimales de los que daría un instrumento de medida.",
      "faqs": [
        {
          "question": "¿El conversor de unidades es gratuito?",
          "answer": "Sí. Puedes convertir longitud, peso y temperatura aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Son conversiones exactas?",
          "answer": "La longitud y la masa usan factores estándar internacionales, como 1 pulgada = 2,54 centímetros exactos. La temperatura usa las fórmulas estándar."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. El valor y las unidades que eliges se convierten en esta pestaña del navegador. Tools Star Hub no envía ese valor a un servidor ni lo guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo convierto Celsius a Fahrenheit?",
          "answer": "Multiplica el valor en Celsius por 9/5 y suma 32. Por ejemplo, 20 °C es 20 × 9 ÷ 5 + 32 = 68 °F."
        },
        {
          "question": "¿Cuántos centímetros tiene una pulgada?",
          "answer": "Una pulgada es exactamente 2,54 centímetros, así que 12 pulgadas (un pie) son 30,48 centímetros."
        },
        {
          "question": "¿Cómo convierto kilómetros a millas?",
          "answer": "Escribe el valor en kilómetros, elige las unidades de longitud de origen y destino, y lee al instante el resultado en millas."
        },
        {
          "question": "¿Puedo convertir peso además de longitud?",
          "answer": "Sí: elige unidades de masa como kilogramos y libras, u onzas, según lo que liste el conversor."
        },
        {
          "question": "¿La herramienta admite unidades de volumen de líquidos?",
          "answer": "Sí, para unidades habituales como litros, mililitros, galones y tazas cuando esas categorías están disponibles."
        },
        {
          "question": "¿Qué tan precisas son las conversiones entre sistema métrico e imperial?",
          "answer": "Usan factores estándar; pueden aparecer pequeñas diferencias de redondeo en muchos decimales."
        },
        {
          "question": "¿Puedo convertir temperatura y longitud en la misma sesión?",
          "answer": "Cambia de categoría cuando lo necesites; cada conversión usa los campos que fijes para esa categoría."
        },
        {
          "question": "¿Cuál es el factor de pulgadas a centímetros?",
          "answer": "Una pulgada equivale exactamente a 2,54 centímetros según las definiciones métricas modernas."
        },
        {
          "question": "¿Cómo paso un área del sistema métrico a pies cuadrados?",
          "answer": "Elige unidades de área, escribe el valor métrico y lee los pies cuadrados sin convertir a mano las unidades lineales."
        },
        {
          "question": "¿Funcionan los valores en notación científica?",
          "answer": "Si el campo los acepta, sí; si no, escribe un decimal normal para valores muy grandes o muy pequeños."
        },
        {
          "question": "¿Puedo convertir medidas de cocina como tazas a gramos?",
          "answer": "Pasar de volumen a masa requiere la densidad; un conversor de unidades puro solo cambia volumen o masa dentro del mismo tipo de medida."
        },
        {
          "question": "¿Cómo convierto millas náuticas para planificar un viaje?",
          "answer": "Elige millas náuticas si aparecen en longitud y conviértelas a kilómetros o millas terrestres para los mapas que usen esas unidades."
        },
        {
          "question": "¿El redondeo cambia en cadenas de cálculos?",
          "answer": "Convierte en un solo paso cuando puedas; encadenar muchos pasos redondeados puede acumular pequeños errores."
        },
        {
          "question": "¿Puedo convertir bytes a megabytes aquí?",
          "answer": "Solo si se incluye una categoría de tamaño de datos; si no, usa un conversor específico de almacenamiento digital."
        },
        {
          "question": "¿Cómo intercambio rápido las unidades de origen y destino?",
          "answer": "Intercambia los desplegables de unidades o usa el control de intercambio si aparece, y vuelve a calcular con el mismo número."
        },
        {
          "question": "¿Se tratan igual los galones de EE. UU. y del Reino Unido?",
          "answer": "No: el galón estadounidense y el imperial son distintos; elige el tipo de galón que corresponda a tu receta o a tu contexto de combustible."
        },
        {
          "question": "¿Pueden usarlo los estudiantes para cambios de unidades en las tareas?",
          "answer": "Sí, para conversiones estándar; aun así, muestra tu procedimiento si la tarea exige pasos manuales."
        }
      ]
    },
    "metaDescription": "Convierte longitud, peso o temperatura entre unidades mientras escribes. No incluye moneda, área ni volumen. Se rechazan temperaturas bajo el cero absoluto.",
    "ui": {}
  },
  "random-number-generator": {
    "answer": "Un generador de números aleatorios saca enteros o decimales dentro de un rango usando crypto.getRandomValues.",
    "content": {
      "about": "Saca de 1 a 200 enteros o decimales entre los límites que fijes. Úsalo para un sorteo informal, como cinco números sin repetir del 1 al 10. El modo sin repetición solo funciona con números enteros, y pedir más valores únicos de los que contiene el rango se rechaza.",
      "howTo": [
        "Escribe un mínimo, un máximo y cuántos números quieres generar.",
        "Elige entero o decimal. Si quieres, exige enteros sin repetición.",
        "Genera y luego copia los resultados."
      ],
      "examples": [
        {
          "title": "Cinco enteros sin repetir del 1 al 10",
          "body": "La herramienta saca sin reposición. Pedir 11 valores únicos en ese rango se rechaza."
        },
        {
          "title": "Decimales",
          "body": "Los valores se redondean a seis decimales a partir de un intervalo unitario de 32 bits. El modo sin repetición no se ofrece para decimales."
        }
      ],
      "explanation": "Los enteros usan crypto.getRandomValues() con muestreo por rechazo, para que cada valor del rango sea igual de probable. Así se evita el sesgo del módulo. El generador es adecuado para sorteos informales. No se presenta como seguridad criptográfica para todos los usos estadísticos o de seguridad.",
      "limitations": "Cada límite debe estar dentro de ±1 000 000 000, y la cantidad debe ser un número entero de 1 a 200. El modo sin repetición solo funciona con enteros y rechaza una cantidad mayor que el rango. Los decimales se redondean a seis cifras. Es un sorteo informal, no un sorteo de lotería ni un generador de claves.",
      "faqs": [
        {
          "question": "¿El generador de números aleatorios es gratuito?",
          "answer": "Sí. Sacar enteros o decimales en este navegador es gratis y sin registro."
        },
        {
          "question": "¿Es criptográficamente seguro?",
          "answer": "Usa el generador CSPRNG de Web Crypto en cada muestra, con una selección de enteros sin sesgo. Eso es más fuerte que Math.random(). Aun así, no es un diseño completo para loterías, claves ni protocolos de muestreo científico."
        },
        {
          "question": "¿Por qué no puedo usar el modo sin repetición con decimales?",
          "answer": "Los decimales se redondean a una precisión fija, así que la unicidad es ambigua. Usa enteros cuando necesites un conjunto sin repeticiones."
        },
        {
          "question": "¿Cómo elijo un número aleatorio entre 1 y 10?",
          "answer": "Pon el mínimo en 1 y el máximo en 10, deja seleccionados los enteros y genera. Cada número entero del rango tiene la misma probabilidad."
        },
        {
          "question": "¿Cómo saco números sin repetición?",
          "answer": "Activa el modo sin repetición. Funciona con enteros, y la cantidad no puede ser mayor que el número de valores del rango."
        },
        {
          "question": "¿Cómo elijo un entero aleatorio dentro de un rango mínimo–máximo?",
          "answer": "Escribe los límites inclusivos, genera y copia el resultado para tu sorteo o tu juego."
        },
        {
          "question": "¿Puedo sacar varios números únicos para una rifa?",
          "answer": "Activa el modo sin repetición, fija cuántos necesitas y genera el conjunto."
        },
        {
          "question": "¿Cuándo conviene permitir duplicados?",
          "answer": "En tiradas tipo dado y en muestreos con reposición; usa el modo sin repetición en rifas sin reposición."
        },
        {
          "question": "¿Cómo genero un número aleatorio para elegir alumnos en clase?",
          "answer": "Fija el rango según el tamaño de la lista (o asigna un número a cada nombre) y genera de forma justa delante de la clase."
        },
        {
          "question": "¿Los sorteos en el navegador sirven para loterías importantes?",
          "answer": "No: usa procesos de sorteo certificados para loterías con dinero o con valor legal."
        },
        {
          "question": "¿Puedo poner el mismo mínimo y máximo?",
          "answer": "Eso solo da ese único valor; amplía el rango si necesitas variedad."
        },
        {
          "question": "¿Cómo funcionan los límites negativos?",
          "answer": "El mínimo puede estar por debajo de cero; la herramienta elige de forma uniforme en todo el rango de enteros inclusivo."
        },
        {
          "question": "¿Y si necesito un decimal aleatorio entre 0 y 1?",
          "answer": "Usa el modo decimal si se ofrece, o escala un entero sorteado; no afirmes que tiene seguridad criptográfica."
        },
        {
          "question": "¿Cómo deben mostrar los streamers un sorteo justo?",
          "answer": "Muestra en pantalla el rango y el resultado, y considera grabar el sorteo."
        },
        {
          "question": "¿Recargar cambia automáticamente el último número?",
          "answer": "Solo una nueva acción de generar debería hacerlo; no tomes un campo antiguo como un sorteo nuevo."
        },
        {
          "question": "¿Puedo excluir un número que ya ganó?",
          "answer": "Reduce el rango o usa el sorteo múltiple sin repetición para no repetir ganadores."
        },
        {
          "question": "¿En qué se diferencian las aplicaciones de esta página en aleatoriedad?",
          "answer": "Las API del sistema operativo pueden ofrecer opciones CSPRNG más fuertes; esta página es para elecciones informales del día a día."
        },
        {
          "question": "¿Qué rango es demasiado amplio para un sorteo rápido?",
          "answer": "Los intervalos enormes pueden ser incómodos de mostrar: mantén unos límites prácticos para tu caso."
        },
        {
          "question": "¿Debo usar una semilla para ejercicios reproducibles?",
          "answer": "Solo si existe una opción de semilla y necesitas demostraciones repetibles en clase; sin semilla está bien para un uso informal."
        },
        {
          "question": "¿Elegir un número sube mi configuración de rango?",
          "answer": "La generación está pensada para quedarse en la sesión del navegador."
        }
      ]
    },
    "metaDescription": "Genera números enteros o decimales aleatorios con crypto.getRandomValues, incluidos sorteos sin repetición, entre los límites que elijas.",
    "ui": {}
  },
  "tip-calculator": {
    "answer": "Una calculadora de propinas convierte una cuenta, un porcentaje de propina y el número de personas en la propina, el total y la parte de cada uno.",
    "content": {
      "about": "Escribe la cuenta, el porcentaje de propina y cuántas personas pagan. La página muestra la propina, el total y la parte de cada uno de ambos importes.",
      "howTo": [
        "Escribe el importe de la cuenta. Se admite una cuenta de 0. No se admite una cuenta negativa.",
        "Elige 10 %, 15 %, 18 %, 20 % o 25 %, o escribe otro porcentaje.",
        "Indica un número entero de personas, como mínimo 1.",
        "Pulsa Calcular. Copia las cuatro líneas si quieres pegarlas en un mensaje."
      ],
      "examples": [
        {
          "title": "Una cena de 84 para dos",
          "body": "Cuenta 84, propina 18 %, personas 2. La propina es 15,12, el total es 99,12 y cada persona paga 49,56, de los cuales 7,56 son propina."
        },
        {
          "title": "Una persona, sin propina",
          "body": "Cuenta 12,50, propina 0 %, personas 1. La propina es 0 y el total sigue en 12,50. Úsalo cuando la cuenta ya incluye un cargo de servicio que no quieres volver a sumar."
        }
      ],
      "explanation": "El importe de la propina es la cuenta multiplicada por el porcentaje. El total es la cuenta más esa propina. Ambos se dividen entre el número de personas. Las etiquetas no añaden un símbolo de moneda, así que los mismos números sirven para dólares, euros u otra unidad.",
      "limitations": "Esta herramienta no conoce las costumbres locales de propina, el impuesto que ya esté incluido en la cuenta ni un cargo de servicio por separado. Escribe el importe sobre el que realmente quieres calcular la propina.",
      "tips": [
        "Si el ticket ya muestra una propina sugerida, usa ese porcentaje en lugar de adivinarlo.",
        "Redondea el total por persona al siguiente céntimo o moneda solo si el grupo está de acuerdo. Esta página no redondea a efectivo."
      ],
      "features": [
        "Cinco porcentajes habituales de propina, más un porcentaje personalizado.",
        "Importe de la propina, total de la cuenta, propina por persona y total por persona.",
        "Los importes se redondean a dos decimales."
      ],
      "faqs": [
        {
          "question": "¿Puedo dividir una cuenta desigual?",
          "answer": "La división es a partes iguales. Si una persona pidió más, calcula primero su parte de la cuenta y luego aplica la propina a ese importe."
        },
        {
          "question": "¿Qué ocurre si dejo la cuenta en blanco?",
          "answer": "La página pide un importe de cuenta. No trata un campo vacío como cero."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. La cuenta, el porcentaje de propina y el número de personas se calculan en esta pestaña. No se suben a ningún servidor."
        },
        {
          "question": "¿Cómo calculo una propina del 20 %?",
          "answer": "Multiplica la cuenta por 0,20. En una cuenta de 45, la propina es 9 y el total es 54. Una comprobación rápida es el 10 % (mueve el punto decimal) por dos."
        },
        {
          "question": "¿Cómo divido una cuenta con propina?",
          "answer": "Suma la propina a la cuenta y divide el total entre el número de personas. La calculadora muestra la propina, el total y el importe por persona."
        },
        {
          "question": "¿Puedo incluir el impuesto antes de calcular la propina?",
          "answer": "Sí: escribe la cuenta antes de impuestos si das propina solo sobre la comida, o el total con impuesto si esa es tu costumbre; indica qué base usaste."
        },
        {
          "question": "¿Cómo comparo rápido un 15 %, un 18 % y un 20 %?",
          "answer": "Escribe la cuenta una vez y prueba cada porcentaje para comparar los totales y las partes por persona."
        },
        {
          "question": "¿La calculadora redondea a céntimos enteros?",
          "answer": "Los resultados suelen mostrarse con dos decimales para que coincidan con importes en efectivo o con tarjeta."
        },
        {
          "question": "¿Y si cada persona quiere dejar una propina distinta?",
          "answer": "Calcula la propina compartida sobre toda la cuenta y luego ajusta el efectivo entre los comensales, o ejecuta la herramienta una vez por subgrupo."
        },
        {
          "question": "¿Puedo calcular igual la propina sobre gastos de entrega?",
          "answer": "Escribe en el campo de la cuenta el importe sobre el que quieres dar propina: solo la comida, la comida más los cargos, o una propina fija de entrega."
        },
        {
          "question": "¿Cómo trato un cupón que baja la cuenta?",
          "answer": "Decide si das propina sobre el total antes o después del descuento; mucha gente da propina sobre el importe anterior al descuento."
        },
        {
          "question": "¿Un cargo de servicio es lo mismo que una propina?",
          "answer": "No siempre: lee el ticket. Si ya incluye un cargo de servicio obligatorio, aclara si se espera una propina extra."
        },
        {
          "question": "¿Puedo dejar una propina con un importe fijo?",
          "answer": "Sí: si la herramienta admite un campo de propina personalizado, escribe el importe en lugar de un porcentaje, o convierte tú ese importe a porcentaje."
        },
        {
          "question": "¿Cómo divido entre tres personas si una no bebe?",
          "answer": "Divide la comida a partes iguales o por plato, y asigna el coste de las bebidas a quienes las pidieron antes de sumar la propina."
        },
        {
          "question": "¿La herramienta guarda mis tickets de restaurante?",
          "answer": "No: los importes se quedan en la sesión del navegador; borra los campos cuando termines si compartes el dispositivo."
        },
        {
          "question": "¿Qué porcentaje de propina es habitual en un restaurante con servicio de mesa?",
          "answer": "Muchas personas usan alrededor del 15–20 % de la cuenta antes de impuestos en Estados Unidos, y lo ajustan según la calidad del servicio y las normas locales."
        },
        {
          "question": "¿Puedo calcular la propina antes de sumar el impuesto sobre ventas?",
          "answer": "Sí: escribe el subtotal sin impuesto si esa es tu regla; entonces la propina no incluye el impuesto en la base."
        },
        {
          "question": "¿Cómo doy propina si pago con tarjeta o en efectivo?",
          "answer": "La cuenta es la misma; en efectivo puedes redondear al billete más cómodo después de ver la propina en la calculadora."
        },
        {
          "question": "¿Y si cambia el número de personas después de pedir?",
          "answer": "Vuelve a escribir el número final de personas y la cuenta para que las partes por persona se actualicen antes de pagar."
        },
        {
          "question": "¿Puedo usarla en un bufé o en un mostrador?",
          "answer": "Sí: escribe el total y un porcentaje acorde al nivel de servicio; en algunos mostradores se deja menos propina que en un servicio de mesa completo."
        }
      ]
    },
    "metaDescription": "Divide una cuenta por el porcentaje de propina y el número de personas, y ve la propina, el total y lo que paga cada uno.",
    "ui": {}
  },
  "sales-tax-calculator": {
    "answer": "Una calculadora de impuesto sobre ventas añade un tipo impositivo a un precio y muestra el importe del impuesto y el precio final.",
    "content": {
      "about": "Añade un tipo de impuesto sobre ventas a un precio. Obtienes el importe del impuesto y el precio con impuesto. Las etiquetas son las mismas para cualquier moneda.",
      "howTo": [
        "Escribe el precio original. Debe ser cero o mayor.",
        "Escribe el porcentaje de impuesto sobre ventas. Un tipo de 0 es válido. Un tipo negativo no lo es.",
        "Pulsa Calcular.",
        "Copia el importe del impuesto y el precio final si los necesitas en otro sitio."
      ],
      "examples": [
        {
          "title": "Un tipo del 8 % sobre 49,99",
          "body": "El importe del impuesto es 4,00 después de redondear a céntimos. El precio final es 53,99."
        },
        {
          "title": "Un artículo exento de impuesto",
          "body": "Precio 20, tipo 0 %. El importe del impuesto es 0 y el precio final se queda en 20."
        }
      ],
      "explanation": "El importe del impuesto es el precio original multiplicado por el tipo y dividido entre 100. El precio final es el precio original más ese impuesto. El redondeo se hace a dos decimales, lo que coincide con importes habituales en efectivo, pero puede diferir en un céntimo de una caja que redondee cada línea de otra forma.",
      "limitations": "Esta herramienta no consulta el tipo de una ciudad, un estado o un país. Tú indicas el porcentaje. Tampoco reparte el impuesto entre varios artículos.",
      "tips": [
        "Si el precio que tienes ya incluye el impuesto, esta herramienta lo volverá a sumar. Parte del precio antes de impuestos.",
        "Si hay un descuento y luego el impuesto, usa primero la calculadora de descuentos y toma ese resultado como precio original."
      ],
      "features": [
        "Importe del impuesto y precio final, redondeados a dos decimales.",
        "Sin símbolo de moneda, para que puedas usar los números con cualquier unidad.",
        "Se admite un tipo por encima del 100 %, porque algunos impuestos acumulados funcionan así."
      ],
      "faqs": [
        {
          "question": "¿Por qué no hay un signo de dólar?",
          "answer": "La misma operación sirve para cualquier moneda. Añadir un símbolo sería incorrecto para muchos lectores."
        },
        {
          "question": "¿Puede ser el tipo 0?",
          "answer": "Sí. El importe del impuesto es 0 y el precio final es igual al precio original."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. El precio y el tipo de impuesto se calculan en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cómo calculo el impuesto sobre ventas?",
          "answer": "Multiplica el precio por el tipo de impuesto y divídelo entre 100; luego suma el resultado al precio. 50 a un 8 % son 4 de impuesto, así que el total es 54."
        },
        {
          "question": "¿Cómo hallo el precio antes de impuestos?",
          "answer": "Divide el total entre 1 más el tipo en decimal. Un total de 54 con un impuesto del 8 % es 54 ÷ 1,08 = 50 antes de impuestos."
        },
        {
          "question": "¿Cómo obtengo el precio total después de añadir el impuesto?",
          "answer": "Escribe el precio neto y el porcentaje; suma el importe del impuesto para obtener el total bruto."
        },
        {
          "question": "¿Cómo recupero el importe antes de impuestos a partir del total del ticket?",
          "answer": "Divide el importe bruto entre (1 + el tipo en decimal) para obtener el precio neto."
        },
        {
          "question": "¿Por qué tengo que escribir el tipo yo mismo?",
          "answer": "Los tipos varían según el lugar y el producto; la calculadora no consulta jurisdicciones."
        },
        {
          "question": "¿Puedo usarla en una cuenta de restaurante antes de la propina?",
          "answer": "Sí, para el impuesto sobre la comida; añade la propina por separado, salvo que las normas locales indiquen otra cosa."
        },
        {
          "question": "¿Cómo suelen aplicar el impuesto los carritos con varios artículos?",
          "answer": "Muchas cajas aplican el impuesto al subtotal con descuento; sigue la política de tu punto de venta para el redondeo por línea o por pedido."
        },
        {
          "question": "¿Qué tipo uso si hay artículos gravados y exentos?",
          "answer": "Separa el carrito: aplica el impuesto solo a las líneas gravadas, con el tipo correcto."
        },
        {
          "question": "¿El impuesto sobre ventas es lo mismo que un precio con IVA incluido?",
          "answer": "No: el IVA suele ir incluido; esta herramienta modela el impuesto sobre ventas que se suma al precio, habitual en Estados Unidos."
        },
        {
          "question": "¿Cómo deben mostrar el impuesto las facturas a clientes?",
          "answer": "Indica el neto, el tipo, el importe del impuesto y el bruto para que el cargo quede claro."
        },
        {
          "question": "¿Puedo calcular el impuesto solo sobre el envío?",
          "answer": "Si el envío es gravable donde vendes, calcula el envío como un importe aparte con ese tipo."
        },
        {
          "question": "¿Y si mi ciudad y mi estado acumulan tipos distintos?",
          "answer": "Escribe el tipo combinado que exija tu localidad, o calcula cada capa si las bases son distintas."
        },
        {
          "question": "¿Cómo cambian los cupones la base imponible?",
          "answer": "A menudo el impuesto se aplica después de los cupones de la tienda; las reglas de los marketplaces varían: sigue la normativa de tu nexo fiscal."
        },
        {
          "question": "¿Debo redondear el impuesto a dos decimales?",
          "answer": "Sí, en moneda; sigue el redondeo de tu contabilidad (por línea o sobre el subtotal)."
        },
        {
          "question": "¿Los bienes digitales pueden tener un tipo distinto?",
          "answer": "A veces: la gravabilidad del producto varía; confírmalo antes de usar un tipo general de mercancías."
        },
        {
          "question": "¿Cómo compruebo un ejemplo del 8,25 %?",
          "answer": "Impuesto ≈ precio × 0,0825; total ≈ precio × 1,0825."
        },
        {
          "question": "¿El cálculo del impuesto sobre ventas sale del navegador?",
          "answer": "El cálculo de esta página está pensado para quedarse en la sesión."
        }
      ]
    },
    "metaDescription": "Añade un tipo de impuesto sobre ventas a un precio y ve el importe del impuesto y el precio final, redondeados a céntimos.",
    "ui": {}
  },
  "date-difference-calculator": {
    "answer": "Una calculadora de diferencia de fechas cuenta los días entre dos fechas y muestra también la duración en el calendario. Los meses no se tratan como 30 días fijos.",
    "content": {
      "about": "Elige una fecha de inicio y una de fin. Obtienes el número de días, cómo se divide en semanas y días sobrantes, y una duración en el calendario en años, meses y días.",
      "howTo": [
        "Elige la fecha de inicio y la fecha de fin.",
        "Pulsa Calcular.",
        "Lee primero el total de días cuando necesites un recuento exacto.",
        "Usa la línea de años, meses y días cuando quieras una descripción de calendario."
      ],
      "features": [
        "Recuento exacto de días, incluido un resultado de 0 para el mismo día.",
        "Semanas más los días sobrantes.",
        "Una duración de calendario que toma prestados días y meses como lo hace un calendario.",
        "Una cifra aparte de mes promedio, etiquetada como promedio."
      ],
      "examples": [
        {
          "title": "Del 1 de marzo al 1 de abril en un año no bisiesto",
          "body": "El recuento exacto es de 31 días, que son 4 semanas y 3 días. La duración de calendario es de 0 años, 1 mes y 0 días. Ambas descripciones son correctas. No son la misma unidad."
        },
        {
          "title": "La misma fecha dos veces",
          "body": "Inicio y fin el 2026-09-23. El total de días es 0. Las semanas y los días extra son 0. La duración de calendario es de 0 años, 0 meses y 0 días."
        }
      ],
      "explanation": "El total de días cuenta las medianoches entre las dos fechas. Las semanas son ese recuento dividido entre 7. La línea de años, meses y días recorre el calendario: si el día final es anterior en el mes, toma prestada la duración del mes anterior. Esa duración cambia. Febrero no tiene 30 días. La cifra de mes promedio divide el recuento de días entre 30,44 y es solo un tamaño aproximado. No es un segundo resultado de calendario.",
      "tips": [
        "Usa el total de días para un plazo. Usa la duración de calendario cuando describas un alquiler, una suscripción o un periodo parecido a una edad.",
        "Si la fecha de fin es anterior, la página sigue mostrando una duración positiva e indica que las fechas estaban invertidas."
      ],
      "limitations": "Los meses del calendario no tienen una duración fija, así que «1 mes» no siempre son 30 días. La línea de mes promedio no es un recuento exacto de meses. Se ignora la hora del día.",
      "faqs": [
        {
          "question": "¿Y si la fecha de fin es anterior a la de inicio?",
          "answer": "Los recuentos siguen siendo positivos y una nota indica que la fecha de fin es anterior. La duración va de la fecha posterior a la anterior."
        },
        {
          "question": "¿Febrero cambia el resultado?",
          "answer": "Sí, en la duración de calendario. Un periodo que cruza febrero usa la duración real de ese mes. El recuento total de días sigue siendo exacto."
        },
        {
          "question": "¿Se envían mis datos a un servidor?",
          "answer": "No. Las dos fechas se cuentan en esta pestaña. No se suben."
        },
        {
          "question": "¿Cómo cuento los días entre dos fechas?",
          "answer": "Elige las fechas de inicio y fin y calcula. El total de días es el recuento exacto, y las semanas y los años, meses y días describen la misma duración."
        },
        {
          "question": "¿La fecha de fin se incluye en el recuento?",
          "answer": "El recuento es el número de días desde la fecha de inicio hasta la de fin, así que no se suma el propio día de inicio. Suma 1 si necesitas incluir ambos días."
        },
        {
          "question": "¿Cómo mido el intervalo entre dos fechas del calendario?",
          "answer": "Elige las fechas de inicio y fin y lee el total de días junto con el desglose en años, meses y días."
        },
        {
          "question": "¿El total incluye tanto el primer día como el último?",
          "answer": "Por lo general, el recuento es la diferencia de inicio a fin sin contar dos veces el día de inicio; suma 1 si necesitas días inclusivos."
        },
        {
          "question": "¿Cómo cambian los días bisiestos una diferencia que cruza febrero?",
          "answer": "Los años bisiestos añaden el 29 de febrero. Los intervalos que cruzan el 29 de febrero ganan un día extra."
        },
        {
          "question": "¿Por qué el total de días y el desglose en meses pueden no coincidir con una regla de 30 días?",
          "answer": "El total de días es exacto; los meses varían de duración, así que el desglose en meses sigue el calendario, no bloques fijos de 30 días."
        },
        {
          "question": "¿Importa la hora en una diferencia solo de fechas?",
          "answer": "El modo solo de fechas ignora la hora. Las herramientas de fecha y hora pueden truncar o redondear de otra forma."
        },
        {
          "question": "¿Cómo excluyo los fines de semana de un intervalo de fechas?",
          "answer": "Usa una herramienta de días hábiles o resta los fines de semana (y los festivos, si hace falta) del total."
        },
        {
          "question": "¿Qué ocurre si invierto las fechas de inicio y fin?",
          "answer": "Muchas calculadoras las intercambian o muestran una duración negativa o absoluta: lee el comportamiento de la página."
        },
        {
          "question": "¿Estas calculadoras tratan los años bisiestos como de 366 días?",
          "answer": "Siguen el calendario, así que los años bisiestos tienen 366 días."
        },
        {
          "question": "¿De dónde viene el atajo del «mes de 30 días»?",
          "answer": "Es un promedio aproximado para estimaciones. Las herramientas exactas usan la duración real de los meses."
        },
        {
          "question": "¿Cómo expreso la edad de alguien en días?",
          "answer": "Pon la fecha de nacimiento como inicio y hoy (u otra fecha) como fin, y lee el total de días."
        },
        {
          "question": "¿Los recuentos de días de un proyecto deben contar el día de arranque como el día uno?",
          "answer": "Acláralo con los implicados. El recuento inclusivo difiere de una simple resta de fechas."
        },
        {
          "question": "¿Cómo comparo fechas cuando los dos extremos usan zonas horarias distintas?",
          "answer": "Usa fechas de calendario en UTC para ambos extremos cuando las zonas difieren, o podrías desplazar el día civil."
        },
        {
          "question": "¿Qué significa la duración de un «mes promedio» en el panel de resultados?",
          "answer": "Es una métrica práctica que usa unos 30,44 días; no es lo mismo que los meses del calendario."
        },
        {
          "question": "¿Los festivos cambian una diferencia de días bruta?",
          "answer": "Los recuentos brutos de días ignoran los festivos. Los modos de días hábiles necesitan un calendario de festivos."
        },
        {
          "question": "¿Qué formatos de fecha acepta la calculadora?",
          "answer": "Usa el formato que acepte el selector, o el estilo ISO AAAA-MM-DD cuando se permita escribir."
        }
      ]
    },
    "metaDescription": "Cuenta los días entre dos fechas y ve las semanas y la duración en el calendario en años, meses y días. Los meses no se tratan como 30 días fijos.",
    "ui": {}
  },
  "compound-interest-calculator": {
    "answer": "Una calculadora de interés compuesto muestra cómo puede crecer un capital inicial cuando el interés se suma al saldo. Es una fórmula, no una rentabilidad prometida.",
    "content": {
      "about": "Escribe un capital inicial, un tipo anual, un plazo y con qué frecuencia se capitaliza el interés. También puedes añadir una aportación mensual. La página muestra el saldo final, el interés y una comparación con el interés simple.",
      "howTo": [
        "Escribe el capital inicial y el tipo anual. El ejemplo empieza en 10 000 y 5 %.",
        "Elige años o meses y, a continuación, capitalización anual, semestral, trimestral, mensual o diaria.",
        "Deja la aportación mensual en 0, o escribe un importe que añadas cada mes.",
        "Pulsa Calcular. Restablecer recupera los valores de ejemplo."
      ],
      "examples": [
        {
          "title": "10 000 al 5 % durante 10 años, con capitalización mensual",
          "body": "Sin aportación mensual, el saldo final es el capital inicial crecido al tipo mensual. La línea de interés es el saldo final menos 10 000."
        },
        {
          "title": "Los mismos datos más 100 al mes",
          "body": "El resultado divide el saldo final en el capital inicial, las aportaciones y el interés. Las aportaciones se suman al final de cada mes."
        }
      ],
      "explanation": "Sin aportaciones, el importe final es P multiplicado por (1 + r/n) elevado a n por t. P es el capital inicial, r es el tipo anual en decimal, n es el número de periodos de capitalización en un año y t es el tiempo en años. Las aportaciones mensuales se suman después del paso de capitalización de ese mes. El interés simple sobre el mismo capital inicial es P por r por t, sin capitalización. Ningún resultado es una rentabilidad de inversión prometida.",
      "limitations": "La calculadora no incluye impuestos, comisiones ni un cambio de tipo. Un plazo de cero deja el saldo en el capital inicial. Los resultados que se desbordarían se rechazan en lugar de mostrarse como un número infinito.",
      "tips": [
        "Usa 0 en la aportación cuando solo quieras ver cómo crece el capital inicial.",
        "La capitalización diaria usa 365 periodos. Sigue siendo una fórmula, no una previsión de mercado."
      ],
      "features": [
        "Crecimiento solo del capital y crecimiento con aportaciones mensuales, mostrados por separado.",
        "Un saldo año a año.",
        "Un resultado de interés simple sobre el mismo capital inicial."
      ],
      "faqs": [
        {
          "question": "¿Qué es el interés compuesto?",
          "answer": "Es el interés que se suma al saldo y luego también genera interés. Una frecuencia de capitalización más alta aplica ese paso con más frecuencia."
        },
        {
          "question": "¿Cómo se calcula el interés compuesto?",
          "answer": "La página usa A = P(1 + r/n)^(nt) cuando no hay aportación. Con una aportación mensual, hace crecer el saldo periodo a periodo y suma la aportación al final de cada mes."
        },
        {
          "question": "¿Cómo funciona la capitalización mensual?",
          "answer": "El tipo anual se divide entre 12. Ese tipo mensual se aplica al saldo cada mes."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El saldo, el tipo y la aportación se capitalizan en esta pestaña. Esas cifras no se envían a un servidor."
        },
        {
          "question": "¿Qué datos necesito para una estimación de interés compuesto?",
          "answer": "Sueles necesitar un saldo inicial, un tipo anual, una frecuencia de capitalización, un plazo y, de forma opcional, aportaciones periódicas. La calculadora capitaliza el saldo en cada periodo que elijas."
        },
        {
          "question": "¿Cómo se relaciona el rendimiento porcentual anual (APY) con el tipo indicado?",
          "answer": "El APY refleja la capitalización dentro de un año, así que puede ser mayor que el tipo anual nominal cuando el interés se suma más de una vez al año. Compara los APY cuando las ofertas usan calendarios de capitalización distintos."
        },
        {
          "question": "¿Debo escribir el tipo como 5 o como 0,05?",
          "answer": "La mayoría de las calculadoras para consumidores esperan un porcentaje, como 5 para un cinco por ciento. Si un campo pide un tipo en decimal, lo indicará; escribirlo en el formato incorrecto distorsionará todos los periodos."
        },
        {
          "question": "¿Cuál es la diferencia entre el saldo inicial y la aportación?",
          "answer": "El saldo inicial es el dinero que ya está invertido. Las aportaciones son importes que añades según un calendario. Ambos pueden generar interés una vez están en la cuenta, según las reglas de momento."
        },
        {
          "question": "¿Una capitalización más frecuente siempre crece más rápido?",
          "answer": "Sí, con el mismo tipo nominal, una capitalización más frecuente crece un poco más rápido, pero la diferencia entre diaria y continua suele ser pequeña. El tipo y el tiempo siguen dominando el resultado."
        },
        {
          "question": "¿Puedo modelar retiradas de dinero con esta calculadora?",
          "answer": "Muchas calculadoras de crecimiento asumen solo ingresos. Para retiradas, usa una herramienta de préstamos o de retiro de jubilación, o escribe aportaciones negativas solo si la página lo admite de forma explícita."
        },
        {
          "question": "¿Por qué duplicar el tipo no duplica exactamente el saldo final?",
          "answer": "El interés genera interés, así que el crecimiento es exponencial respecto al tipo y al tiempo, no una línea recta. Las comisiones, el momento de las aportaciones y la frecuencia de capitalización también cambian la trayectoria."
        },
        {
          "question": "¿Cuánto tarda el dinero en duplicarse con interés compuesto?",
          "answer": "Una regla aproximada de 72 divide 72 entre el tipo porcentual anual para estimar el tiempo de duplicación. La línea temporal de la calculadora es más precisa cuando hay aportaciones o tipos poco habituales."
        },
        {
          "question": "¿La proyección incluye impuestos y comisiones?",
          "answer": "Los estimadores en línea suelen mostrar el crecimiento bruto, antes de impuestos, comisiones de la cuenta o penalizaciones por retirada anticipada. Réstalos por separado cuando necesites una estimación neta."
        },
        {
          "question": "¿Qué frecuencia de capitalización elijo para una cuenta de ahorro?",
          "answer": "Sigue el calendario que indique el banco: diario, mensual o trimestral. Si no estás seguro, el mensual es un término medio habitual para una planificación aproximada; luego confírmalo en la información de la cuenta."
        },
        {
          "question": "¿El interés compuesto puede ir en mi contra en una deuda?",
          "answer": "Sí. Las tarjetas de crédito y algunos préstamos suman interés a los saldos impagados, así que la deuda puede crecer igual que un ahorro. Pagar más que el mínimo reduce el saldo que se capitaliza."
        },
        {
          "question": "¿Por qué dos calculadoras discrepan un poco con los mismos datos?",
          "answer": "Pueden redondear de forma distinta, aplicar las aportaciones al inicio o al final del periodo, o tratar de otra forma el último periodo parcial. Lee las hipótesis de cada herramienta bajo el resultado."
        },
        {
          "question": "¿Es seguro escribir una rentabilidad pasada del mercado como tipo?",
          "answer": "No. Los promedios históricos no son una garantía. Para planificar, prueba varios tipos conservadores y trata el gráfico como un escenario, no como una promesa."
        },
        {
          "question": "¿Cómo incluyo una aportación de la empresa en la estimación?",
          "answer": "Suma esa aportación a tu importe de aportación en los periodos en que aplique, o aumenta el saldo inicial si es un ingreso único. Ten presentes las reglas de esa aportación para no inflarla."
        },
        {
          "question": "¿La inflación cambia el resultado de la calculadora?",
          "answer": "El saldo en bruto suele estar en las unidades de las aportaciones de hoy, no en poder adquisitivo ajustado por inflación. Para el crecimiento real, resta una hipótesis de inflación después de ver el total nominal."
        },
        {
          "question": "¿Cuándo es mejor el interés simple que el interés compuesto?",
          "answer": "Algunos pagarés a corto plazo y ejemplos de clase pagan solo interés simple. Si el interés nunca se suma al saldo durante el plazo, usa una fórmula de interés simple."
        }
      ]
    },
    "metaDescription": "Mira cómo crece un capital inicial con interés compuesto y aportaciones mensuales opcionales, junto a una comparación con el interés simple.",
    "ui": {}
  },
  "loan-calculator": {
    "answer": "Una calculadora de préstamos estima la cuota mensual y el interés total de un préstamo a plazos a tipo fijo a partir del importe, el tipo y el plazo que indiques.",
    "content": {
      "about": "Estima la cuota mensual de un préstamo a plazos a tipo fijo, incluido un préstamo personal. Escribe el importe, el tipo anual, el plazo y, de forma opcional, una comisión que no se financia.",
      "howTo": [
        "Escribe el importe del préstamo y el tipo de interés anual.",
        "Escribe el plazo en años o en meses. El ejemplo es 20 000 al 7 % durante 5 años.",
        "Escribe una comisión si quieres incluirla en el coste total. Una comisión de 0 deja la cuota igual.",
        "Pulsa Calcular para ver la cuota, los intereses y el calendario anual."
      ],
      "examples": [
        {
          "title": "20 000 al 7 % durante 5 años",
          "body": "La cuota es el importe que amortiza el préstamo en 60 meses a ese tipo. El interés total es la suma de las cuotas menos 20 000."
        },
        {
          "title": "Un préstamo sin interés",
          "body": "La cuota es el importe del préstamo dividido entre el número de meses. El interés total es 0."
        }
      ],
      "explanation": "La cuota mensual es P multiplicado por r(1+r)^n, dividido entre (1+r)^n menos 1. P es el importe prestado, r es el tipo anual dividido entre 12 y n es el número de meses. Con un tipo del 0 %, la cuota es P dividido entre n. Un plazo más largo suele bajar la cuota y subir el interés total. El tipo de interés de aquí es el que se usa en esa fórmula. La TAE (APR) puede incluir comisiones, así que una comisión que escribas en esta página se suma al coste total y no se convierte en una TAE.",
      "limitations": "El resultado es una estimación a partir de las cifras que indiques. No es una oferta de un prestamista y no incluye un tipo variable ni un periodo de carencia. La comisión no se suma al importe que genera interés.",
      "tips": [
        "Compara dos plazos calculando dos veces. Un plazo más corto suele costar menos interés y tener una cuota más alta.",
        "Esta página puede responder a una pregunta sobre un préstamo personal. No necesita una URL aparte de préstamo personal."
      ],
      "features": [
        "Una cuota fija estándar, incluido un préstamo sin interés.",
        "Capital, intereses, comisión y coste total, mostrados como importes separados.",
        "Un calendario anual, con las filas mensuales disponibles si las pides."
      ],
      "faqs": [
        {
          "question": "¿Cómo se calcula la cuota de un préstamo?",
          "answer": "Con un tipo fijo mayor que 0, la página usa la fórmula estándar de amortización y redondea la cuota a céntimos. Al 0 %, divide el importe entre el número de meses."
        },
        {
          "question": "¿Cómo afecta el plazo al interés?",
          "answer": "Más meses suelen significar una cuota menor y más interés total, porque el saldo permanece pendiente durante más tiempo."
        },
        {
          "question": "¿Cuál es la diferencia entre el tipo de interés y la TAE?",
          "answer": "El tipo del formulario es el tipo anual que se usa para calcular la cuota. La TAE también puede incluir comisiones. Esta página suma una comisión opcional al coste total y no etiqueta ese total como TAE."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. La cuota y el interés se calculan aquí a partir de los números que escribes. No se suben a ningún servidor."
        },
        {
          "question": "¿Qué datos necesita una calculadora de cuotas de préstamo?",
          "answer": "El capital, el tipo de interés anual y la duración del plazo (en años o en meses) son los campos principales. Esta calculadora también admite una comisión inicial opcional, que solo se suma al coste total. No admite pagos extra."
        },
        {
          "question": "¿Cómo cambia un plazo más largo mi cuota mensual?",
          "answer": "Repartir el mismo capital en más meses baja la cuota, pero suele subir el interés total. Compara la cuota y el interés a lo largo de toda la vida del préstamo antes de elegir."
        },
        {
          "question": "¿Qué es la amortización, en palabras sencillas?",
          "answer": "Es el calendario que divide cada cuota en interés y capital. La parte de interés al principio depende del tipo y del plazo, y es más alta con tipos más altos y plazos más largos; no siempre es la mayor parte de la cuota. Conforme baja el saldo, las cuotas posteriores destinan más al capital."
        },
        {
          "question": "¿Esta calculadora incluye impuestos y seguros?",
          "answer": "La mayoría de las calculadoras simples de préstamos muestran solo capital e intereses. En una hipoteca suele hacer falta estimar por separado los impuestos y el seguro para obtener una cifra completa de vivienda (PITI)."
        },
        {
          "question": "¿Cómo afectan los pagos extra a la cancelación?",
          "answer": "Un capital extra acorta el plazo y reduce el interés si el prestamista lo aplica al capital. Esta calculadora no modela pagos extra: su calendario asume la misma cuota todos los meses. Pide a tu prestamista un calendario de cancelación actualizado y confirma que tu contrato no tenga una penalización por amortización anticipada."
        },
        {
          "question": "¿Cuál es la diferencia entre un tipo fijo y uno variable?",
          "answer": "Los tipos fijos se mantienen iguales durante el plazo. Los tipos variables pueden moverse con un índice, así que la estimación de aquí es solo una foto del tipo de hoy."
        },
        {
          "question": "¿Debo escribir la TAE o el tipo de interés nominal?",
          "answer": "Usa el tipo que pida la etiqueta de la herramienta. La TAE incorpora algunas comisiones para comparar ofertas; la fórmula de amortización suele usar el tipo del contrato."
        },
        {
          "question": "¿Puedo modelar un préstamo sin interés?",
          "answer": "Sí, cuando el campo del tipo admite 0. La cuota es entonces el capital dividido entre el número de meses, aparte de cualquier comisión por separado."
        },
        {
          "question": "¿Por qué el interés del primer mes parece grande?",
          "answer": "El interés se cobra sobre todo el saldo inicial. Conforme baja el capital, la parte de interés de cada cuota fija se reduce."
        },
        {
          "question": "¿Qué tan precisa es una estimación de préstamo en línea?",
          "answer": "Es una cifra de planificación, no una oferta de un prestamista. Las comisiones de originación, el precio según el crédito y las cuentas de depósito (escrow) pueden cambiar lo que pagues de verdad."
        },
        {
          "question": "¿Puedo usarla para un préstamo de coche y para un préstamo personal?",
          "answer": "Sí, para préstamos amortizables estándar. Los extras del concesionario, las cuotas globo o los periodos de solo interés necesitan otro modelo."
        },
        {
          "question": "¿Qué ocurre si redondeo la cuota hacia arriba?",
          "answer": "Pagar unos cuantos más cada mes acelera la reducción del capital. Esta calculadora no puede mostrar la nueva fecha de cancelación porque no admite una cuota personalizada; usa las cifras de cancelación de tu prestamista o un calendario hecho con el importe más alto."
        },
        {
          "question": "¿Un calendario de pagos quincenales cambia la cuenta?",
          "answer": "Los planes quincenales pueden crear el equivalente a trece cuotas «mensuales» al año. Esta calculadora solo modela cuotas mensuales, así que no muestra el ahorro quincenal. Confirma con tu prestamista cómo se aplican esos pagos."
        },
        {
          "question": "¿Cómo cambian las comisiones del préstamo la cuota mensual?",
          "answer": "En esta calculadora, la comisión opcional no se financia: sube el coste total, pero deja la cuota mensual igual. Si tu prestamista incorpora una comisión al préstamo, súmala al importe del préstamo y la cuota subirá."
        },
        {
          "question": "¿Una cuota más baja es siempre mejor?",
          "answer": "No, si proviene de un plazo mucho más largo con bastante más interés. Equilibra la comodidad del flujo de caja con el coste total."
        },
        {
          "question": "¿Cuándo debo hablar con un prestamista en lugar de usar una calculadora?",
          "answer": "Cuando intervienen temas de crédito, avalistas, ingresos variables o programas especiales. Las reglas de análisis crediticio pesan más que las fórmulas genéricas."
        }
      ]
    },
    "metaDescription": "Estima la cuota mensual, los intereses y el calendario de amortización de un préstamo a tipo fijo, incluido un préstamo personal.",
    "ui": {}
  },
  "mortgage-calculator": {
    "answer": "Una calculadora de hipotecas estima capital e intereses a partir del precio de la vivienda, la entrada, el tipo y el plazo, y puede incluir gastos de vivienda y pagos extra que indiques.",
    "content": {
      "about": "Estima la cuota de una hipoteca a tipo fijo a partir del precio de la vivienda, una entrada, un tipo y un plazo. El impuesto, el seguro, la cuota de la comunidad (HOA) y el seguro hipotecario privado (PMI) se quedan en 0 hasta que los escribas. Los pagos extra y una comparación a 15 y 30 años están en esta misma página.",
      "howTo": [
        "Escribe el precio de la vivienda, la entrada como porcentaje o como importe, el tipo y el plazo.",
        "Usa 15 años o 30 años, o escribe otro número entero de años entre 1 y 50.",
        "Deja en blanco el impuesto, el seguro, la comunidad y el PMI si solo quieres capital e intereses.",
        "Añade un pago mensual extra o un pago único si quieres una estimación de cancelación.",
        "Pulsa Calcular. El tipo del ejemplo es solo un ejemplo, no un tipo real de un prestamista."
      ],
      "examples": [
        {
          "title": "Una vivienda de 400 000 con un 20 % de entrada",
          "body": "El importe del préstamo es 320 000. La cuota principal es solo capital e intereses hasta que escribas impuesto, seguro, comunidad o PMI."
        },
        {
          "title": "200 extra al mes",
          "body": "La sección de cancelación muestra un plazo más corto y la diferencia de interés. Es una estimación de aplicar ese importe extra al capital."
        }
      ],
      "explanation": "El importe del préstamo es el precio de la vivienda menos la entrada. Capital e intereses usan la misma fórmula a tipo fijo que la calculadora de préstamos. Con un interés del 0 %, la cuota es el importe del préstamo dividido entre el número de meses. El impuesto predial y el seguro anuales se dividen entre 12. La comunidad y el PMI son importes mensuales que tú escribes. Las filas a 15 y 30 años usan el mismo precio, la misma entrada y el mismo tipo para que veas la cuota y el interés total uno al lado del otro.",
      "limitations": "Las estimaciones tienen un fin educativo y se basan en la información que indiques. Las condiciones reales del préstamo, las comisiones del prestamista, los impuestos, el seguro y otros costes pueden diferir. Los pagos extra son una estimación matemática. Un prestamista puede aplicarlos en otro calendario. Esto no es una oferta.",
      "tips": [
        "Una entrada del 100 % deja un importe de préstamo de 0 y una cuota de capital e intereses de 0.",
        "El PMI es el importe mensual que escribas. Esta página no decide si un préstamo tiene PMI."
      ],
      "features": [
        "Capital e intereses, mostrados aparte del coste mensual completo de la vivienda.",
        "Un calendario anual y un calendario mensual opcional.",
        "Una estimación de pagos extra, con los meses y el interés ahorrados.",
        "Una comparación a 15 y 30 años con el mismo precio, la misma entrada y el mismo tipo."
      ],
      "faqs": [
        {
          "question": "¿Cómo se calcula la cuota de una hipoteca?",
          "answer": "La página resta la entrada del precio de la vivienda y luego aplica la fórmula de cuota a tipo fijo a ese importe de préstamo y a ese plazo."
        },
        {
          "question": "¿Qué incluye una cuota hipotecaria mensual?",
          "answer": "La línea de capital e intereses es solo el préstamo. El impuesto, el seguro, el PMI y la comunidad se suman únicamente cuando los escribes."
        },
        {
          "question": "¿Cómo afecta la entrada a una hipoteca?",
          "answer": "Una entrada mayor baja el importe del préstamo, lo que baja capital e intereses. La entrada no puede ser mayor que el precio de la vivienda."
        },
        {
          "question": "¿Cómo reducen el interés los pagos hipotecarios extra?",
          "answer": "En esta estimación, un pago mensual extra y un pago único opcional reducen el saldo más rápido. Luego la página muestra la cancelación más corta y el interés que no se cobró."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El precio de la vivienda, la entrada y el tipo se quedan en esta pestaña mientras se estima la cuota. No se envían a un servidor."
        },
        {
          "question": "¿Cómo estimo una cuota hipotecaria mensual?",
          "answer": "Escribe el importe del préstamo después de la entrada, el tipo de interés y el plazo en años. La calculadora aplica la amortización estándar para estimar capital e intereses de cada mes."
        },
        {
          "question": "¿Esta estimación hipotecaria incluye impuestos y seguro?",
          "answer": "Muchas calculadoras simples muestran solo capital e intereses. Añade por separado el impuesto predial, el seguro y las cuotas de la comunidad si necesitas un presupuesto completo de vivienda."
        },
        {
          "question": "¿Cómo cambia la cuota una entrada más grande?",
          "answer": "Baja el importe financiado, lo que baja capital e intereses. También puede evitar el seguro hipotecario privado cuando alcanzas el umbral de patrimonio que exija el prestamista."
        },
        {
          "question": "¿Qué plazo debo modelar primero?",
          "answer": "Las hipotecas fijas a 30 años son un punto de partida habitual en Estados Unidos; los plazos a 15 años suben la cuota mensual, pero recortan el interés total. Compara ambos con las mismas hipótesis de tipo."
        },
        {
          "question": "¿En qué ayudan los pagos extra de capital?",
          "answer": "Los importes extra reducen el saldo antes, así que se acumula menos interés a lo largo de la vida del préstamo. Confirma que tu prestamista aplique los pagos anticipados al capital."
        },
        {
          "question": "¿La TAE es el mismo tipo de interés que debo escribir?",
          "answer": "La TAE incluye ciertas comisiones anualizadas. Para amortizar el tipo del contrato, usa el tipo de interés del préstamo, salvo que tu hoja de cálculo indique otra cosa."
        },
        {
          "question": "¿Puedo modelar aquí una hipoteca a tipo variable (ARM)?",
          "answer": "Esta página está pensada para una cuota al estilo de tipo fijo. Las estimaciones de una hipoteca a tipo variable necesitan hipótesis de techos de tipo que una calculadora fija básica no incluye."
        },
        {
          "question": "¿Por qué el primer mes es casi todo interés?",
          "answer": "Los calendarios de amortización iniciales aplican más de cada cuota al interés porque el saldo es el más alto. La parte de capital crece más adelante en el plazo."
        },
        {
          "question": "¿Qué tan precisa es una estimación hipotecaria en línea?",
          "answer": "Es una cifra de planificación, no un compromiso de un prestamista. Las ofertas varían según el crédito, los puntos, las cuentas de depósito y el análisis crediticio."
        },
        {
          "question": "¿Qué es el PMI y cuándo aparece?",
          "answer": "El seguro hipotecario privado suele aplicarse cuando la entrada es pequeña. Sube el coste mensual hasta que alcanzas el patrimonio exigido."
        },
        {
          "question": "¿Puedo usarla para préstamos de viviendas de inversión?",
          "answer": "Puedes explorar capital e intereses con la misma operación, pero los tipos, las reservas y el trato fiscal de la inversión son distintos. Habla con un prestamista para ofertas de inversión."
        },
        {
          "question": "¿Cómo afectan los puntos de descuento a la cuota?",
          "answer": "Comprar puntos baja el tipo y, por lo general, la cuota, a cambio de efectivo en el cierre. Ejecuta la calculadora con ambos tipos para comparar."
        },
        {
          "question": "¿Qué ocurre si redondeo la cuota hacia arriba?",
          "answer": "Pagar un poco más cada mes funciona como un pequeño pago anticipado y puede acortar el calendario. Confirma que el administrador destine el excedente al capital."
        },
        {
          "question": "¿Un pago hipotecario quincenal cambia la cuenta?",
          "answer": "Veintiséis medias cuotas al año equivalen a trece cuotas completas, lo que puede recortar el interés si el administrador las aplica así. Pregunta antes de confiar en un plan quincenal."
        },
        {
          "question": "¿Cuándo debo hablar con un prestamista hipotecario?",
          "answer": "Usa la calculadora para fijar un rango de presupuesto y luego pide una estimación del préstamo (Loan Estimate) para las comisiones, las cuentas de depósito y las reglas de análisis que una página web no puede conocer."
        }
      ]
    },
    "metaDescription": "Estima capital e intereses, gastos de vivienda opcionales, una comparación a 15 y 30 años y el efecto de pagos adicionales en la cancelación.",
    "ui": {}
  },
  "auto-loan-calculator": {
    "answer": "Una calculadora de préstamo de coche estima el importe financiado y la cuota mensual a partir del precio del vehículo, el tipo de impuesto, las comisiones, la entrada, el vehículo entregado y la TAE que indiques.",
    "content": {
      "about": "Estima un préstamo de coche a tipo fijo a partir del precio del vehículo, una entrada, un vehículo entregado, un tipo de impuesto sobre ventas que indiques, comisiones, extras opcionales y una TAE. La página muestra el importe financiado, la cuota y el coste total.",
      "howTo": [
        "Escribe el precio del vehículo, la entrada en efectivo y cualquier crédito por el vehículo entregado.",
        "Escribe el tipo de impuesto sobre ventas que te corresponda. Deja las comisiones y los extras en 0 si no los incluyes.",
        "Escribe la TAE y el plazo en meses. 36, 48, 60 y 72 son atajos.",
        "Pulsa Calcular. La TAE del ejemplo es solo un ejemplo, no una oferta de un prestamista."
      ],
      "examples": [
        {
          "title": "Un vehículo de 30 000 con 3000 de entrada",
          "body": "Con impuesto, comisiones, extras y vehículo entregado en 0, el importe financiado es 27 000. La cuota usa ese importe, la TAE y el plazo."
        },
        {
          "title": "Un vehículo entregado y un tipo de impuesto que escribes",
          "body": "El impuesto sobre ventas es el precio del vehículo multiplicado por tu tipo. Luego se resta el vehículo entregado. Esta no es una regla para todos los estados."
        }
      ],
      "explanation": "El importe financiado es el precio del vehículo más el impuesto sobre ventas, las comisiones y los extras, menos la entrada y el vehículo entregado. El impuesto sobre ventas usa solo el tipo que escribas, aplicado al precio del vehículo. La cuota mensual usa la fórmula estándar a tipo fijo. Con una TAE del 0 %, la cuota es el importe financiado dividido entre el número de meses. Un plazo más largo suele bajar la cuota y subir el interés total. La comparación usa el mismo importe financiado y la misma TAE y no señala un plazo como el mejor.",
      "limitations": "Esta es una estimación a partir de las cifras que indiques. No es una aprobación de préstamo, un tipo prometido ni una oferta. Los estados gravan un vehículo entregado de formas distintas, así que la operación predeterminada no pretende que exista una sola regla en Estados Unidos. Un prestamista puede tratar las comisiones o los extras de otra forma.",
      "tips": [
        "Usa 0 en el impuesto, las comisiones, los extras o el vehículo entregado cuando quieras dejar esas líneas fuera.",
        "El seguro, el combustible y el mantenimiento son importes que tú escribes. No son promedios."
      ],
      "features": [
        "El importe financiado, mostrado aparte del precio, el impuesto, las comisiones, los extras, la entrada y el vehículo entregado.",
        "Una comparación a 36, 48, 60 y 72 meses con el mismo importe y la misma TAE.",
        "Un calendario mensual opcional y estimaciones opcionales de seguro, combustible y mantenimiento."
      ],
      "faqs": [
        {
          "question": "¿Cómo se calcula la cuota de un préstamo de coche?",
          "answer": "La página financia el precio más el impuesto, las comisiones y los extras que indiques, después de restar la entrada y el vehículo entregado. Luego usa la fórmula de cuota a tipo fijo. Con una TAE del 0 %, divide el importe financiado entre el número de meses."
        },
        {
          "question": "¿Cuánto interés pagaré en un préstamo de coche?",
          "answer": "El interés total es la suma de las cuotas programadas menos el importe financiado. Cambia con la TAE y el plazo. Es una estimación, no un coste garantizado."
        },
        {
          "question": "¿Una entrada reduce el importe financiado?",
          "answer": "Sí. El efectivo que escribas como entrada se resta antes de calcular la cuota."
        },
        {
          "question": "¿Cómo afecta un vehículo entregado a un préstamo de coche?",
          "answer": "El valor del vehículo entregado se resta del importe que hay que financiar. El impuesto se sigue calculando sobre el precio del vehículo, porque no todos los estados gravan un vehículo entregado de la misma forma."
        },
        {
          "question": "¿Un préstamo de coche más largo reduce la cuota mensual?",
          "answer": "Un plazo más largo suele bajar la cuota mensual y subir el interés total. La tabla comparativa lo muestra sin señalar un plazo como mejor."
        },
        {
          "question": "¿Cuánto cuesta en total un préstamo de coche?",
          "answer": "El total de las cuotas es el importe financiado más el interés. El coste total de compra suma el precio del vehículo, el impuesto, las comisiones, los extras y el interés."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El precio del vehículo, el impuesto y el plazo se usan solo en esta pestaña. No se guardan ni se suben."
        },
        {
          "question": "¿Debo sumar el impuesto sobre ventas al importe del préstamo?",
          "answer": "Si financias el impuesto y las comisiones, inclúyelos en el importe financiado; si no, págales en efectivo y déjalos fuera."
        },
        {
          "question": "¿En qué se diferencia la TAE del tipo de interés cotizado?",
          "answer": "La TAE puede incorporar ciertas comisiones; esta operación de la cuota usa el tipo y el plazo que indiques."
        },
        {
          "question": "¿Qué es una cuota globo en un préstamo de coche?",
          "answer": "Es una suma final grande que se vence al final; este calendario simple asume cuotas iguales, sin una cuota globo."
        },
        {
          "question": "¿Pagar de forma quincenal recorta el interés?",
          "answer": "Los pagos extra reducen el capital antes; modela un importe mensual efectivo más alto para aproximarlo."
        },
        {
          "question": "¿Cómo comparo la financiación del concesionario con la de un banco?",
          "answer": "Compara lado a lado el importe, el plazo y el tipo, y fíjate en las comisiones anticipadas que cambian la TAE."
        },
        {
          "question": "¿Debo financiar el seguro de cobertura de diferencia (gap)?",
          "answer": "Solo si lo necesitas y aceptas el interés sobre ese extra; si no, págale por separado."
        },
        {
          "question": "¿Qué ocurre si refinancio más adelante?",
          "answer": "Un préstamo nuevo sustituye el saldo; vuelve a ejecutar la calculadora con el capital restante y el tipo nuevo."
        },
        {
          "question": "¿Cuánto debo presupuestar además de la cuota?",
          "answer": "Suma el seguro, el combustible, el mantenimiento y la matriculación: la cuota sola subestima el coste de tener el coche."
        },
        {
          "question": "¿Una entrada más grande siempre ayuda a la aprobación?",
          "answer": "Baja el importe financiado y el riesgo, lo que puede mejorar las ofertas, pero el crédito y los ingresos siguen importando."
        },
        {
          "question": "¿Puedo estimar el ahorro de una cancelación anticipada?",
          "answer": "Anota el capital restante y el plazo que queda, y luego compara el interés si cancelas frente a seguir el calendario."
        },
        {
          "question": "¿Son habituales las penalizaciones por amortización anticipada en los préstamos de coche?",
          "answer": "Muchos préstamos de coche para consumidores permiten la cancelación anticipada; lee tu contrato antes de asumir que no hay comisiones."
        },
        {
          "question": "¿Cómo cambian las cuotas si incorporo un saldo negativo?",
          "answer": "Sumar el saldo del préstamo anterior al precio nuevo sube el importe financiado y la cuota mensual."
        },
        {
          "question": "¿Debo usar el ingreso bruto o el sueldo neto para la asequibilidad?",
          "answer": "Valora las cuotas frente al efectivo que te queda en mano, para que el presupuesto sea realista."
        }
      ]
    },
    "metaDescription": "Estima la cuota de un préstamo de coche a partir del precio, la entrada, el vehículo entregado, el impuesto, las comisiones y la TAE.",
    "ui": {}
  },
  "home-affordability-calculator": {
    "answer": "Una calculadora de cuánta casa puedo pagar estima un precio de vivienda a partir de los ingresos, las deudas existentes, una entrada y los gastos de vivienda que elijas. Es una estimación de presupuesto, no una aprobación de un prestamista.",
    "content": {
      "about": "Estima un precio de vivienda a partir de los ingresos brutos anuales, las deudas mensuales, una entrada, un tipo y los gastos de vivienda que indiques. La página trabaja hacia atrás desde un presupuesto de vivienda. No dice que un prestamista vaya a aprobar ese precio.",
      "howTo": [
        "Escribe los ingresos brutos anuales del hogar y la deuda mensual que ya pagas.",
        "Elige una entrada como porcentaje del precio de la vivienda o como un importe.",
        "Escribe un tipo, un plazo y un tipo de impuesto predial. El tipo de ejemplo y el tipo impositivo del 1 % son solo ejemplos.",
        "Deja en blanco el seguro, la comunidad y el PMI para que valgan 0, o escribe tus propias estimaciones.",
        "Fija un ratio objetivo. El 36 % es la hipótesis del ejemplo, no una regla de un prestamista."
      ],
      "examples": [
        {
          "title": "Ingresos de 120 000 y 500 de deuda mensual",
          "body": "El ingreso bruto mensual es 10 000. Con un objetivo del 36 %, 3600 pueden ir a la vivienda más esa deuda, así que quedan unos 3100 para la vivienda antes de sumar impuesto, seguro, comunidad o PMI."
        },
        {
          "title": "Deudas que agotan todo el objetivo",
          "body": "Si la deuda existente ya está en el objetivo o por encima, la página indica que no hay presupuesto de vivienda. No muestra un precio de vivienda de 0."
        }
      ],
      "explanation": "El ingreso bruto mensual es el ingreso anual dividido entre 12. El ratio objetivo multiplicado por ese ingreso es el tope supuesto para la vivienda más las deudas que indicaste. Se resta la deuda existente. Lo que queda debe cubrir capital e intereses, el impuesto predial, el seguro, la comunidad y el PMI. El impuesto predial es el tipo que indiques multiplicado por el precio de la vivienda. Una entrada en porcentaje es una parte de ese precio. Una entrada en importe se suma al capital del préstamo. Las filas del 28 %, el 30 % y el 36 % usan el resto de datos igual y no clasifican un ratio como mejor.",
      "limitations": "El resultado es una estimación educativa a partir de la información que indiques. No es asesoramiento financiero personalizado, un tipo garantizado ni una aprobación. Los límites reales dependen del prestamista, el crédito, la ubicación, los impuestos, el seguro y el programa de préstamo.",
      "tips": [
        "Cambia el ratio objetivo si quieres una hipótesis más estricta o más holgada. La página no trata el 36 % como una regla.",
        "El PMI es el importe mensual que escribas. Esta página no decide si un préstamo tiene PMI."
      ],
      "features": [
        "Un presupuesto de vivienda después de restar la deuda mensual existente.",
        "Capital e intereses, impuesto, seguro, comunidad y PMI, mostrados en líneas separadas.",
        "Una comparación de escenarios al 28 %, al 30 % y al 36 %."
      ],
      "faqs": [
        {
          "question": "¿Cuánta casa puedo pagar?",
          "answer": "Esta página estima un precio a partir de los ingresos, las deudas, la entrada, el tipo y los gastos de vivienda que escribas. No es una promesa de que puedas comprar esa vivienda."
        },
        {
          "question": "¿Cómo se calcula la asequibilidad de una vivienda?",
          "answer": "Parte de una porción del ingreso bruto mensual, resta la deuda existente y resuelve el préstamo y el precio de la vivienda que caben en el presupuesto de vivienda restante."
        },
        {
          "question": "¿La deuda afecta a cuánta casa puedo pagar?",
          "answer": "Sí. La deuda mensual que indiques se resta antes de usar el presupuesto de vivienda para dimensionar el préstamo."
        },
        {
          "question": "¿Cómo afecta la entrada a la asequibilidad?",
          "answer": "Una entrada en porcentaje es una parte del precio estimado. Una entrada en importe se suma al capital del préstamo. La etiqueta muestra cuál estás usando."
        },
        {
          "question": "¿Qué es un ratio de deuda de vivienda respecto a los ingresos?",
          "answer": "Aquí es la parte objetivo del ingreso bruto mensual que se usa para la vivienda más las deudas que indicaste. Tú eliges el porcentaje. Es una hipótesis, no una política de un prestamista."
        },
        {
          "question": "¿El PMI afecta a la asequibilidad de la vivienda?",
          "answer": "Un importe mensual de PMI que escribas forma parte del presupuesto de vivienda, así que queda menos para capital e intereses. En blanco significa 0."
        },
        {
          "question": "¿Los impuestos prediales y el seguro afectan a la asequibilidad?",
          "answer": "Sí. El tipo impositivo se aplica al precio de la vivienda y el seguro anual se divide entre 12. Ambos reducen el importe que queda para la cuota del préstamo."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. Los ingresos, las deudas y el porcentaje de entrada se usan en esta pestaña. No se envían a ningún sitio."
        },
        {
          "question": "¿Debo usar el ingreso bruto o el neto en los campos?",
          "answer": "Los prestamistas suelen mirar el ingreso bruto para el ratio de deuda (DTI), pero tu presupuesto debe respetar el efectivo que te queda en mano."
        },
        {
          "question": "¿Cómo cambian las cuotas de la comunidad el precio asequible?",
          "answer": "La cuota mensual de la comunidad cuenta como un gasto de vivienda: unas cuotas más altas dejan menos margen para capital e intereses."
        },
        {
          "question": "¿Qué tipo de interés debo suponer?",
          "answer": "Usa un tipo cercano a las ofertas actuales para tu tramo de crédito; un cambio pequeño de tipo mueve mucho el precio."
        },
        {
          "question": "¿Un plazo a 15 años sube o baja el precio que puedo pagar?",
          "answer": "Los plazos más cortos significan cuotas mensuales más altas, así que el precio de compra asequible suele bajar."
        },
        {
          "question": "¿Cómo debo incluir las primas en los ingresos?",
          "answer": "Los prestamistas pueden promediar o descontar la retribución variable; escribe solo los ingresos que puedas documentar de forma sostenida."
        },
        {
          "question": "¿Puedo modelar una entrada más grande procedente de regalos?",
          "answer": "Sí: sube el dato de la entrada; confirma con tu prestamista las reglas de la carta de donación."
        },
        {
          "question": "¿Por qué las estimaciones en línea no coinciden con una preaprobación?",
          "answer": "La preaprobación usa el crédito, las reservas y los recargos de análisis que este modelo simple de ratio de deuda no puede ver."
        },
        {
          "question": "¿Los gastos de cierre deben reducir la asequibilidad?",
          "answer": "Si se pagan en efectivo, déjalos fuera del préstamo; si se incorporan, suben el importe financiado."
        },
        {
          "question": "¿Cómo afectan los préstamos estudiantiles al cálculo?",
          "answer": "Incluye la cuota mensual del préstamo estudiantil en las otras deudas, para que el ratio de deuda sea honesto."
        },
        {
          "question": "¿Alquilar es más barato aunque «pueda pagar» una casa?",
          "answer": "La asequibilidad no es lo mismo que acumular patrimonio; compara por separado el coste total de ser propietario con el alquiler."
        },
        {
          "question": "¿Qué porcentaje de mantenimiento debo presupuestar?",
          "answer": "Muchos planificadores usan alrededor del 1 % del valor de la vivienda al año como una reserva aproximada de mantenimiento."
        },
        {
          "question": "¿Puedo probar escenarios con dos ingresos?",
          "answer": "Suma los ingresos que cualifiquen y luego haz una prueba de estrés quitando un ingreso, por prudencia."
        }
      ]
    },
    "metaDescription": "Estima el precio de una vivienda a partir de ingresos, deudas, entrada, tipo de interés y gastos. Es una estimación de presupuesto, no una aprobación.",
    "ui": {}
  },
  "debt-payoff-calculator": {
    "answer": "Una calculadora para saldar deudas estima en cuántos meses varios saldos llegan a cero, y el interés, cuando eliges a dónde va el pago extra.",
    "content": {
      "about": "Estima un calendario de cancelación para más de una deuda. Escribe el saldo, la TAE y el pago mínimo de cada una, y elige si el dinero extra va a la TAE más alta o al saldo más pequeño.",
      "howTo": [
        "Escribe al menos una deuda. Añade más con Añadir deuda. El ejemplo empieza con tres deudas.",
        "Escribe un pago mínimo mayor que un mes de interés de ese saldo.",
        "Escribe un pago mensual extra, o 0 para usar solo los mínimos.",
        "Elige primero el mayor interés o primero el saldo más pequeño, y luego pulsa Calcular."
      ],
      "examples": [
        {
          "title": "Dos saldos sin interés",
          "body": "Un saldo de 1000 y otro de 500, cada uno con un mínimo de 100, cancelan primero el más pequeño cuando ambos tipos son 0. Los mínimos liberados pasan entonces al saldo que queda."
        },
        {
          "title": "Un mínimo que no cubre el interés",
          "body": "Si un mínimo es menor o igual que el interés del primer mes, la página se detiene y indica que ese saldo no bajaría."
        }
      ],
      "explanation": "Cada mes se cobra interés al saldo a la TAE dividida entre 12. Luego cada deuda recibe su pago mínimo. El dinero extra, y cualquier mínimo que se libere cuando un saldo llega a cero, va a la deuda que seleccionaste: la de mayor TAE o la de menor saldo. Los dos planes pueden terminar en meses distintos y cobrar un interés distinto. La página muestra esas diferencias y no señala un plan como mejor.",
      "limitations": "Esta es una estimación a partir de los saldos, tipos y pagos que indiques. Un prestamista puede aplicar los pagos o el interés en otro calendario. El recuento de meses no es una fecha de calendario garantizada.",
      "tips": [
        "Usa 0 de extra cuando solo quieras el calendario con los pagos mínimos.",
        "Ponle un nombre a cada deuda para que el orden de cancelación se lea con facilidad."
      ],
      "features": [
        "Varias deudas en una sola estimación, algo que no hace una página de cuota de un solo préstamo.",
        "Un orden de cancelación y el interés de cada deuda.",
        "Una vista comparativa de ambas estrategias, con el pago extra y sin él."
      ],
      "faqs": [
        {
          "question": "¿Cuánto tardaré en saldar mi deuda?",
          "answer": "La página cuenta los meses hasta que cada saldo que escribiste llega a cero, según los pagos y la estrategia que elegiste. Es una estimación."
        },
        {
          "question": "¿Qué es el método de la avalancha de deudas?",
          "answer": "«Mayor interés primero» envía el pago extra, y después cualquier mínimo liberado, a la deuda abierta con la TAE más alta."
        },
        {
          "question": "¿Qué es el método de la bola de nieve de deudas?",
          "answer": "«Menor saldo primero» envía ese dinero extra a la deuda abierta con el saldo más pequeño."
        },
        {
          "question": "¿Cómo afecta un pago extra a la cancelación de la deuda?",
          "answer": "El importe extra se aplica después de los mínimos. La comparación muestra las mismas deudas con ese importe extra y solo con los mínimos."
        },
        {
          "question": "¿Cuánto interés pagaré?",
          "answer": "El interés total es la suma del interés mensual cobrado hasta que los saldos llegan a cero. Cambia con los tipos, los mínimos y a dónde va el pago extra."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. Los saldos y los mínimos se quedan en esta página. No se suben a ningún servidor."
        },
        {
          "question": "¿Cómo elijo entre la avalancha y la bola de nieve?",
          "answer": "La avalancha apunta primero a la TAE más alta para minimizar el interés. La bola de nieve cancela primero el saldo más pequeño para lograr avances rápidos. Elige el método que vas a mantener."
        },
        {
          "question": "¿Qué datos necesita un plan para saldar varias deudas?",
          "answer": "El saldo, la TAE y el pago mínimo de cada deuda, más cualquier importe mensual extra que puedas aplicar por encima de los mínimos."
        },
        {
          "question": "¿Cómo se aplica el pago extra cada mes?",
          "answer": "Los mínimos van a cada deuda; el extra va a la deuda objetivo de ese momento. Cuando esa deuda desaparece, su mínimo pasa al siguiente objetivo."
        },
        {
          "question": "¿La avalancha siempre cuesta menos interés?",
          "answer": "Suele ser así si la sigues con constancia. La bola de nieve puede ganar en la práctica cuando la motivación te mantiene pagando."
        },
        {
          "question": "¿Puedo incluir juntos préstamos estudiantiles y tarjetas?",
          "answer": "Sí, para planificar, si los tipos y los mínimos son precisos. Los programas federales de préstamos pueden tener reglas de pago aparte que conviene leer junto con la operación."
        },
        {
          "question": "¿Qué hago si una deuda tiene un tipo promocional del 0 %?",
          "answer": "Déjala en la lista con la TAE promocional y la fecha de fin en mente. Redirige los extras antes de que suba el tipo si el saldo va a quedar."
        },
        {
          "question": "¿Cómo estimo el interés total de todas las deudas?",
          "answer": "Ejecuta el calendario con el método que elijas y suma las líneas de interés. Compara los totales de la avalancha y de la bola de nieve antes de comprometerte."
        },
        {
          "question": "¿Debo pausar la inversión para pagar la deuda más rápido?",
          "answer": "Depende de los tipos, de las aportaciones de la empresa y de tu tolerancia al riesgo. La calculadora muestra la velocidad de cancelación; un planificador ayuda con la disyuntiva."
        },
        {
          "question": "¿Qué ocurre si añado un préstamo nuevo a mitad del plan?",
          "answer": "Vuelve a calcular con el nuevo saldo y el nuevo mínimo. Los calendarios anteriores ya no aplican cuando cambia el conjunto de deudas."
        },
        {
          "question": "¿Puedo modelar aquí ofertas de liquidación?",
          "answer": "No con precisión. Las liquidaciones cambian el capital y el efecto en el crédito fuera de una amortización simple. Usa la documentación del prestamista para esos escenarios."
        },
        {
          "question": "¿Qué tan grande debe ser mi fondo de emergencia mientras pago deuda?",
          "answer": "Muchos asesores mantienen un colchón pequeño de efectivo para que un imprevisto no vuelva a cargar las tarjetas. El tamaño exacto es personal."
        },
        {
          "question": "¿Los pagos mínimos cambian cuando bajan los saldos?",
          "answer": "Los emisores suelen recalcular los mínimos. Usar los mínimos de hoy es una estimación habitual; actualízalos cuando cambien los extractos."
        },
        {
          "question": "¿Pagar cada dos semanas es lo mismo que un extra mensual?",
          "answer": "No siempre. Ajusta el modelo a cómo caen de verdad tu sueldo y las fechas de vencimiento, para que el flujo de caja sea realista."
        },
        {
          "question": "¿Cuándo es útil hablar con un asesor de crédito de una organización sin ánimo de lucro?",
          "answer": "Cuando el interés se vuelve inmanejable o estás lidiando con cobros. Un asesor puede revisar opciones que una hoja de cálculo no puede."
        }
      ]
    },
    "metaDescription": "Estima cuánto tardas en pagar varias deudas y los intereses, eligiendo el plan de mayor interés o el de menor saldo.",
    "ui": {}
  },
  "credit-card-payoff-calculator": {
    "answer": "Una calculadora para pagar la tarjeta de crédito estima los meses y el interés de una tarjeta a partir del saldo, la TAE y el pago mínimo o fijo que indiques.",
    "content": {
      "about": "Estima el tiempo de cancelación y el interés de una tarjeta de crédito. Tú fijas la TAE, un porcentaje de pago mínimo, un suelo, un pago fijo y un importe extra opcional.",
      "howTo": [
        "Escribe el saldo actual y la TAE.",
        "Escribe el porcentaje mínimo y el suelo que quieres usar en esta estimación. No todos los emisores usan la misma regla.",
        "Escribe un pago mensual fijo si quieres que el resultado principal use ese importe. Déjalo en blanco para seguir la fórmula del mínimo.",
        "Añade un importe extra si quieres incluirlo junto con el pago fijo."
      ],
      "examples": [
        {
          "title": "1000 al 0 % con un pago de 100",
          "body": "El saldo baja 100 cada mes y llega a cero en 10 meses. El interés es 0."
        },
        {
          "title": "Un pago que no cubre el interés",
          "body": "Si el pago elegido es menor o igual que el interés, la página indica que el saldo no bajaría, en lugar de mostrar una cancelación."
        }
      ],
      "explanation": "En esta estimación, el interés es el saldo al inicio del mes multiplicado por la TAE y dividido entre 12. El mínimo es el mayor entre el porcentaje y el suelo, salvo que el saldo sea menor. Un pago fijo se mantiene igual cada mes hasta que el último pago liquida el resto. Esto no es el método de saldo promedio diario que usa cada emisor.",
      "limitations": "Los resultados son estimaciones basadas en la TAE y en las hipótesis de pago que indiques. Un emisor de tarjetas puede usar un ciclo de extracto, un saldo promedio diario u otro mínimo. Esta página no reproduce el extracto de cada emisor.",
      "tips": [
        "Deja el pago fijo en blanco cuando quieras que el resultado principal siga el porcentaje y el suelo.",
        "Usa una TAE del 0 % cuando quieras ver solo el capital."
      ],
      "features": [
        "Una fórmula de mínimo que puedes ver: el porcentaje del saldo inicial, o el suelo, el que sea mayor.",
        "Un pago fijo y un pago fijo más un extra, mostrados junto al plan de mínimos.",
        "Un calendario mes a mes opcional."
      ],
      "faqs": [
        {
          "question": "¿Cuánto tardaré en pagar mi tarjeta de crédito?",
          "answer": "La página cuenta los meses hasta que el saldo llega a cero según la regla de pago que seleccionaste. El recuento empieza en el mes en que comienzas."
        },
        {
          "question": "¿Cuánto debo pagar cada mes?",
          "answer": "Tú eliges la hipótesis. La fila del mínimo usa tu porcentaje y tu suelo. La fila fija usa el importe mensual que escribas."
        },
        {
          "question": "¿Cómo afecta la TAE de la tarjeta a la cancelación?",
          "answer": "Una TAE más alta suma más interés cada mes, así que el mismo pago tarda más y cuesta más interés."
        },
        {
          "question": "¿Pagar de más reduce el interés?",
          "answer": "Un importe adicional, o un pago fijo más alto, suele acortar el calendario y bajar el interés total. La comparación muestra las cifras sin señalar una fila como mejor."
        },
        {
          "question": "¿Cómo se estima la cancelación de una tarjeta de crédito?",
          "answer": "El saldo crece con un mes de interés y luego se resta el pago. El último pago es solo lo que queda. No es una copia de la factura de un emisor concreto."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El saldo de la tarjeta, la TAE y el pago se estiman en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cómo estimo los meses para pagar una tarjeta de crédito?",
          "answer": "Escribe el saldo, la TAE y el importe fijo que puedes pagar cada mes. La calculadora proyecta cómo se reduce el saldo hasta que la tarjeta llega a cero."
        },
        {
          "question": "¿Qué pago mensual liquida una tarjeta en un plazo concreto?",
          "answer": "Elige un horizonte de cancelación cuando la herramienta lo admita, o sube el pago hasta que el calendario encaje con tu fecha límite. Unos pagos más altos recortan meses e interés."
        },
        {
          "question": "¿Por qué el pago mínimo es una trampa?",
          "answer": "Los mínimos suelen ser un porcentaje pequeño del saldo más el interés, así que la cancelación puede alargarse años. Pagar más que el mínimo es lo que acorta el calendario."
        },
        {
          "question": "¿La capitalización de la TAE cambia la estimación?",
          "answer": "Los emisores de tarjetas pueden usar tipos periódicos diarios. Un modelo mensual es una estimación de planificación cercana, no una réplica del extracto."
        },
        {
          "question": "¿Cómo afectan las compras nuevas a los planes de cancelación?",
          "answer": "Los cargos nuevos suben el saldo y el interés. Congela el gasto discrecional en esa tarjeta mientras sigues un calendario de cancelación."
        },
        {
          "question": "¿Debo incluir las comisiones en el saldo?",
          "answer": "Parte del saldo actual del extracto al que se aplicará el interés. Suma las comisiones pendientes conocidas si quieres un plan conservador."
        },
        {
          "question": "¿Qué ocurre si solo pago el interés cada mes?",
          "answer": "El capital apenas se mueve y la cancelación no llega. La calculadora muestra por qué importan los pagos fijos que van recortando el capital."
        },
        {
          "question": "¿Puedo modelar un periodo introductorio de TAE al 0 %?",
          "answer": "Aproxímalo usando el 0 % durante los meses de la promoción y luego pasa al tipo habitual para el saldo restante. Vigila la fecha de fin de la promoción en tu tarjeta."
        },
        {
          "question": "¿Cuánto interés pagaré en total?",
          "answer": "La suma del interés a lo largo de los meses proyectados. Compara ese total con un plan de pagos más rápido para ver el ahorro."
        },
        {
          "question": "¿Es mejor un pago quincenal de la tarjeta?",
          "answer": "Pagar la mitad dos veces al mes puede reducir un poco el saldo promedio si el emisor lo registra rápido. Confirma las reglas de registro de tu cuenta."
        },
        {
          "question": "¿Cómo cambian la cuenta las transferencias de saldo?",
          "answer": "Una TAE de transferencia más baja puede recortar el interés, pero las comisiones de transferencia se suman al capital. Modela la comisión más el tipo nuevo antes de mover un saldo."
        },
        {
          "question": "¿Por qué se atrasan las fechas de cancelación en la vida real?",
          "answer": "Los pagos no realizados, las comisiones por retraso y las compras nuevas alargan el calendario. Vuelve a calcular cuando cambien el saldo o el pago."
        },
        {
          "question": "¿Puedo pagar varias tarjetas con esta herramienta?",
          "answer": "Modélalas de una en una, o pasa a una herramienta para saldar deudas que ordene varios saldos. Mantén precisa cada TAE."
        },
        {
          "question": "¿Cuándo debo llamar al emisor en su lugar?",
          "answer": "Para planes por dificultades, cargos impugnados o cifras exactas de cancelación. Las estimaciones en línea orientan el presupuesto; los administradores dan las cifras oficiales."
        }
      ]
    },
    "metaDescription": "Estima cuánto tardas en pagar el saldo de una tarjeta de crédito según la TAE y el pago mínimo o fijo que indiques.",
    "ui": {}
  },
  "savings-goal-calculator": {
    "answer": "Una calculadora de meta de ahorro estima el importe periódico que debes apartar para que tus ahorros actuales lleguen a una meta. El tipo que indiques es una hipótesis, no una rentabilidad prometida.",
    "content": {
      "about": "Parte de una meta de ahorro y trabaja hacia atrás. Escribe lo que tienes ahora, un tipo y de cuánto tiempo dispones. La página estima la aportación de cada periodo.",
      "howTo": [
        "Escribe la meta y el importe que ya has ahorrado.",
        "Escribe un tipo anual, o 0 si no quieres suponer interés.",
        "Escribe el número de años y con qué frecuencia añades dinero: cada mes, cada dos semanas, cada semana o una vez al año.",
        "Pulsa Calcular. Las filas del 0 %, 3 %, 5 % y 7 % son hipótesis de ejemplo."
      ],
      "examples": [
        {
          "title": "10 000 en 2 años sin interés",
          "body": "Sin nada ahorrado y con un tipo del 0 %, la aportación mensual es 10 000 dividido entre 24."
        },
        {
          "title": "Una meta que ya alcanzaste",
          "body": "Si los ahorros actuales ya están en la meta o por encima, la página pide una meta más alta o un importe inicial más bajo. No muestra una aportación de 0 como un plan nuevo."
        }
      ],
      "explanation": "Con un tipo del 0 %, la aportación es la diferencia dividida entre el número de periodos. Con un tipo, los ahorros actuales crecen al tipo periódico y cada aportación se suma al final del periodo. El pago es el importe que hace que ese saldo futuro sea igual a la meta. Los tipos de ejemplo son hipótesis, no previsiones.",
      "limitations": "El tipo es una hipótesis que tú escribes. Esta página no predice rentabilidades de inversión, impuestos ni comisiones. Se rechaza una meta que ya hayas alcanzado.",
      "tips": [
        "Usa el 0 % cuando quieras repartir la diferencia a partes iguales y sin interés.",
        "Los ahorros actuales se quedan en el resultado para que veas que no son lo mismo que las aportaciones nuevas."
      ],
      "features": [
        "Una aportación necesaria, aparte de los ahorros actuales y del interés estimado.",
        "Periodos semanales, quincenales, mensuales y anuales.",
        "Un saldo año a año al tipo que indicaste."
      ],
      "faqs": [
        {
          "question": "¿Cuánto debo ahorrar cada mes?",
          "answer": "Elige mensual como frecuencia. El resultado es la aportación que alcanza la meta en los años que indicaste, al tipo que indicaste."
        },
        {
          "question": "¿Cómo calculo una meta de ahorro?",
          "answer": "Resta lo que tienes de la meta cuando el tipo es 0 y luego divide entre el número de depósitos. Con un tipo, la página usa la fórmula del valor futuro para incluir el interés."
        },
        {
          "question": "¿El interés reduce el importe que necesito ahorrar?",
          "answer": "Con un tipo supuesto más alto, la aportación necesaria suele ser menor porque se estima que el saldo genera interés. Ese tipo no está garantizado."
        },
        {
          "question": "¿Qué ocurre si empiezo con ahorros ya existentes?",
          "answer": "Primero se hace crecer los ahorros actuales. Solo aportas la diferencia que aún queda."
        },
        {
          "question": "¿Cuánto tardaré en alcanzar mi meta de ahorro?",
          "answer": "Tú indicas el tiempo. Luego la página resuelve la aportación, en lugar de resolver la fecha."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. La meta, el tipo y los ahorros actuales se resuelven en esta pestaña. No se guardan ni se suben."
        },
        {
          "question": "¿Debo escribir las metas antes o después de impuestos?",
          "answer": "Usa el efectivo que realmente puedes pasar al ahorro cada mes: por lo general, importes netos que te quedan en mano."
        },
        {
          "question": "¿Y si mis ingresos varían de un mes a otro?",
          "answer": "Promedia varios meses de transferencias realistas, o calcula por separado un importe mensual en el mejor y en el peor caso."
        },
        {
          "question": "¿Puedo modelar juntos un fondo de emergencia y unas vacaciones?",
          "answer": "Trata cada meta en su propia ejecución y luego suma los importes mensuales si las financias en paralelo."
        },
        {
          "question": "¿La inflación cambia la meta que debo fijar?",
          "answer": "Para compras lejanas, sube la meta por el aumento esperado de precios; la calculadora usa la meta que escribas."
        },
        {
          "question": "¿Cómo afectan los ingresos extraordinarios al calendario?",
          "answer": "Suma un importe único a los ahorros iniciales y vuelve a calcular; un depósito puede acortar mucho los meses necesarios."
        },
        {
          "question": "¿Los pagos de deuda deben ir antes que este plan de ahorro?",
          "answer": "La deuda de alto interés suele merecer prioridad; usa el efectivo que te quede como dato de ahorro mensual."
        },
        {
          "question": "¿Puedo usar depósitos semanales en lugar de mensuales?",
          "answer": "Convierte los importes semanales a un equivalente mensual (unas ×4,33) para que el calendario se mantenga coherente."
        },
        {
          "question": "¿Qué APY debo suponer para una cuenta de alto rendimiento?",
          "answer": "Usa un tipo conservador que creas que puedes obtener, no un pico promocional que puede caducar."
        },
        {
          "question": "¿La herramienta tiene en cuenta comisiones o impuestos sobre el interés?",
          "answer": "No: el interés es una estimación simple de crecimiento; baja el tipo si las comisiones o los impuestos importan."
        },
        {
          "question": "¿Cómo planifico cuando la fecha límite es fija?",
          "answer": "Escribe la meta y los meses disponibles, lee el depósito mensual necesario y comprueba si es asequible."
        },
        {
          "question": "¿Puedo incluir la aportación de la empresa en la meta?",
          "answer": "Solo si ese efectivo llega de verdad al mismo fondo; si no, deja esa aportación fuera de esta meta de ahorro."
        },
        {
          "question": "¿Por qué es más seguro redondear los meses hacia arriba?",
          "answer": "Los meses parciales igual necesitan un depósito; redondear hacia arriba evita quedarte corto cuando los calendarios son irregulares."
        },
        {
          "question": "¿Las cuentas de los niños deben usar los mismos datos?",
          "answer": "Sí, para la operación: usa simplemente los importes realistas de regalos o de mesada que puedas mantener."
        },
        {
          "question": "¿Se incorpora el rendimiento pasado de mi fondo?",
          "answer": "No: la proyección solo usa el tipo y los depósitos que indiques para esta meta."
        }
      ]
    },
    "metaDescription": "Estima la aportación periódica necesaria para alcanzar una meta de ahorro según lo que ya tienes y el tipo de interés que elijas.",
    "ui": {}
  },
  "hourly-wage-calculator": {
    "answer": "Una calculadora de salario por hora convierte una tarifa por hora y un horario semanal en sueldo semanal, mensual y anual. También puede convertir un salario en una tarifa por hora. No incluye impuestos.",
    "content": {
      "about": "Convierte una tarifa por hora y un horario semanal en sueldo semanal, mensual y anual, o parte de un salario y ve la tarifa por hora.",
      "howTo": [
        "Elige tarifa por hora o salario anual.",
        "Escribe las horas por semana y las semanas por año.",
        "Escribe las horas extras y un multiplicador, o deja las horas extras en 0.",
        "Pulsa Calcular."
      ],
      "examples": [
        {
          "title": "20 dólares por hora",
          "body": "40 horas a la semana durante 52 semanas son 41 600 dólares al año, antes de las horas extras."
        },
        {
          "title": "Un salario de 52 000 dólares",
          "body": "Con 40 horas y 52 semanas, la tarifa por hora es 25 dólares."
        }
      ],
      "explanation": "El sueldo anual ordinario es la tarifa por hora multiplicada por las horas por semana y por las semanas por año. En el modo salario, la tarifa por hora es el salario dividido entre ese mismo horario. El pago de horas extras es las horas extras multiplicadas por la tarifa por hora, por el multiplicador y luego por las semanas por año. El sueldo mensual es el total anual dividido entre 12.",
      "limitations": "Esto es el sueldo bruto a partir de las horas que indiques. No resta impuestos, prestaciones ni tiempo libre no remunerado.",
      "tips": [
        "Usa 52 semanas para un año completo.",
        "Usa un multiplicador de 1,5 para el tiempo y medio, o 1 si las horas extras se pagan a la tarifa habitual."
      ],
      "features": [
        "De tarifa por hora a salario y de salario a tarifa por hora.",
        "Horas extras con un multiplicador que tú eliges.",
        "Totales semanales, mensuales y anuales."
      ],
      "faqs": [
        {
          "question": "¿Cómo convierto un sueldo por hora en un salario?",
          "answer": "Multiplica la tarifa por hora por las horas por semana y por las semanas por año. Suma las horas extras si las escribiste."
        },
        {
          "question": "¿Cómo convierto un salario en una tarifa por hora?",
          "answer": "Divide el salario anual entre las horas por semana multiplicadas por las semanas por año."
        },
        {
          "question": "¿Cómo se calcula el pago de las horas extras?",
          "answer": "Las horas extras por semana se multiplican por la tarifa por hora, por el multiplicador y por las semanas por año."
        },
        {
          "question": "¿Cuántas semanas por año debo usar?",
          "answer": "Usa 52 para un trabajo que se paga todas las semanas. Usa menos semanas si algunas no están remuneradas."
        },
        {
          "question": "¿Esto incluye impuestos?",
          "answer": "No. Los totales son antes de impuestos y de otras deducciones."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El salario, las horas y el multiplicador de horas extras se quedan en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cuántas horas por semana debo suponer para un salario?",
          "answer": "Cuarenta horas es una hipótesis habitual de jornada completa en Estados Unidos. Usa tus horas reales programadas si trabajas una semana estándar distinta."
        },
        {
          "question": "¿Cómo estimo el sueldo anual a partir de una tarifa por hora?",
          "answer": "Multiplica la tarifa por hora × las horas por semana × las semanas por año. Muchos planificadores usan 52 semanas; el tiempo libre no remunerado puede pedir menos semanas."
        },
        {
          "question": "¿Cómo se modela el tiempo y medio de las horas extras?",
          "answer": "Las horas extras suelen pagarse a 1,5 veces la tarifa habitual. Escribe las horas extras por separado cuando la herramienta admita ese campo."
        },
        {
          "question": "¿Esto muestra el sueldo neto después de impuestos?",
          "answer": "No. Convierte entre cifras por hora y de salario antes de impuestos. Usa un estimador de sueldo neto para las retenciones."
        },
        {
          "question": "¿Qué valor de semanas por año encaja con los docentes?",
          "answer": "Los contratos académicos pueden pagar por menos semanas de servicio. Usa las semanas que cubre de verdad tu contrato, no un 52 genérico."
        },
        {
          "question": "¿Puedo comparar dos ofertas de trabajo con unidades distintas?",
          "answer": "Convierte ambas a anuales o ambas a por hora, con las mismas hipótesis de horas y semanas, y luego compara en igualdad de condiciones."
        },
        {
          "question": "¿Cómo cambian las primas la conversión?",
          "answer": "Suma la prima esperada al sueldo anual antes de dividirlo en un equivalente por hora si quieres una tarifa con todo incluido."
        },
        {
          "question": "¿Los contratistas deben usar la misma hipótesis de horas?",
          "answer": "Los contratistas suelen facturar menos horas garantizadas y cubren ellos mismos las prestaciones. Inflar las horas puede subestimar la tarifa necesaria."
        },
        {
          "question": "¿Y el doble en festivos?",
          "answer": "Algunos centros de trabajo pagan el doble en festivos. Modela esas horas con el multiplicador más alto al estimar un periodo de nómina."
        },
        {
          "question": "¿Dividir el salario entre 2080 es siempre correcto?",
          "answer": "2080 es 40 × 52. Es una regla práctica, no una ley. Los turnos y las jornadas a tiempo parcial necesitan horas a medida."
        },
        {
          "question": "¿Cómo afectan los descansos de comida no remunerados a la cuenta por hora?",
          "answer": "Si no te pagan el almuerzo, no cuentes esas horas como trabajadas al convertir un salario en una tarifa por hora."
        },
        {
          "question": "¿Puedo invertir una oferta de empleo que solo indica el salario?",
          "answer": "Sí: divídelo entre las horas anuales que supongas para ver una tarifa por hora implícita y presupuestar."
        },
        {
          "question": "¿Las propinas entran en la conversión de la tarifa base por hora?",
          "answer": "Mantén el salario base y las propinas por separado, salvo que quieras de forma deliberada una tarifa combinada de ingresos."
        },
        {
          "question": "¿Las cifras salariales se guardan en un servidor?",
          "answer": "Se quedan en la sesión del navegador para la conversión."
        }
      ]
    },
    "metaDescription": "Convierte una tarifa por hora y un horario semanal en sueldo semanal, mensual y anual, o un salario en tarifa por hora.",
    "ui": {}
  },
  "paycheck-estimator": {
    "answer": "Un estimador de sueldo neto resta del bruto las deducciones antes de impuestos, las retenciones y las deducciones después de impuestos que indiques. La retención es tu hipótesis, no un cálculo oficial de impuestos.",
    "content": {
      "about": "Estima una nómina y un año de sueldo a partir del bruto y de las deducciones que escribas.",
      "howTo": [
        "Escribe el sueldo bruto de una nómina.",
        "Elige semanal, cada dos semanas, dos veces al mes o mensual.",
        "Escribe las deducciones antes de impuestos, la retención como porcentaje o como importe, y las deducciones después de impuestos. Las deducciones en blanco cuentan como 0.",
        "Pulsa Calcular."
      ],
      "examples": [
        {
          "title": "1000 dólares con un 10 % de retención",
          "body": "Sin otras deducciones, la retención es 100 dólares y el sueldo neto es 900 dólares."
        },
        {
          "title": "Una retención en importe fijo",
          "body": "Una retención de 200 dólares sobre una nómina de 1000 dólares deja 800 dólares cuando las demás deducciones son 0."
        }
      ],
      "explanation": "Las deducciones antes de impuestos se restan primero del sueldo bruto. Luego la retención es un porcentaje de lo que queda, o el importe que escribiste. Las deducciones después de impuestos se restan después de la retención. Las cifras anuales repiten esa nómina 52, 26, 24 o 12 veces.",
      "limitations": "La retención es por completo el número que tú indicas. Esta página no usa las tablas del IRS ni las tablas estatales o locales, y no es un cálculo oficial de impuestos.",
      "tips": [
        "Deja una deducción en blanco cuando sea cero.",
        "Usa la retención en porcentaje solo para el tipo que quieras que asuma esta estimación."
      ],
      "features": [
        "Cuatro frecuencias de pago.",
        "Retención en porcentaje o en importe.",
        "Una nómina neta y una estimación anual con esa misma frecuencia."
      ],
      "faqs": [
        {
          "question": "¿Cómo se estima el sueldo que te queda en mano?",
          "answer": "El bruto menos las deducciones antes de impuestos, menos la retención que indicaste, menos las deducciones después de impuestos."
        },
        {
          "question": "¿Cuál es la diferencia entre las deducciones antes y después de impuestos?",
          "answer": "Las deducciones antes de impuestos reducen el importe usado para la retención. Las deducciones después de impuestos se restan después de la retención."
        },
        {
          "question": "¿Cómo funciona el porcentaje de retención?",
          "answer": "El porcentaje se aplica al sueldo bruto después de las deducciones antes de impuestos. Un 0 % no retiene nada. Un 100 % retiene todo ese importe restante."
        },
        {
          "question": "¿Qué significan las frecuencias de pago?",
          "answer": "Semanal usa 52 nóminas, cada dos semanas usa 26, dos veces al mes usa 24 y mensual usa 12."
        },
        {
          "question": "¿Esto es un cálculo oficial de impuestos?",
          "answer": "No. Usa solo el porcentaje o el importe de retención que escribas."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El sueldo bruto y la retención que escribiste se estiman aquí. No se suben a ningún servidor."
        },
        {
          "question": "¿Cómo estimo lo que me queda en mano a partir de un salario?",
          "answer": "Escribe el sueldo bruto, la frecuencia de pago y las hipótesis de retención, y luego lee el neto estimado."
        },
        {
          "question": "¿Debo escribir el salario anual o el bruto de cada nómina?",
          "answer": "Sigue las etiquetas de los campos: las cifras anuales se dividen según la frecuencia; el bruto de cada periodo se usa tal como lo escribes."
        },
        {
          "question": "¿Cómo cambian la estimación las deducciones antes de impuestos?",
          "answer": "Reducen el salario gravable antes de la retención, lo que puede subir lo que te queda en mano frente al mismo recorte después de impuestos."
        },
        {
          "question": "¿Qué entra en las deducciones después de impuestos?",
          "answer": "Partidas que se descuentan después del impuesto, como ciertas prestaciones o embargos, que bajan el neto sin cambiar el salario gravable de la misma forma."
        },
        {
          "question": "¿Puedo modelar un pago quincenal frente a uno mensual?",
          "answer": "Sí: cambia la frecuencia para que el mismo sueldo anual produzca la estimación por nómina que corresponda."
        },
        {
          "question": "¿Por qué esto no sustituye a un programa de nómina?",
          "answer": "Usa entradas simplificadas de porcentaje de retención, no las tablas completas del IRS, las reglas estatales ni la configuración del empleador."
        },
        {
          "question": "¿Cómo aproximo el efecto de un aumento en el sueldo neto?",
          "answer": "Actualiza el sueldo bruto y compara el nuevo neto; ajusta la retención si tu W-4 real cambiaría."
        },
        {
          "question": "¿Y si tengo varios trabajos?",
          "answer": "Estima cada nómina por separado o combina el bruto con cuidado; es fácil modelar mal unas retenciones que se solapan."
        },
        {
          "question": "¿Las primas necesitan un porcentaje de retención distinto?",
          "answer": "A menudo sí en una nómina real; sube el porcentaje de forma temporal si quieres una estimación prudente de la prima."
        },
        {
          "question": "¿Puedo incluir el valor de las prestaciones de la empresa?",
          "answer": "Concéntrate aquí en el sueldo en efectivo; las prestaciones no monetarias suelen quedar fuera de una estimación simple de lo que te queda en mano."
        },
        {
          "question": "¿Qué tan precisas son las conjeturas del impuesto estatal?",
          "answer": "Solo tanto como el porcentaje que indiques: consulta tu situación o usa estimadores oficiales para la declaración."
        },
        {
          "question": "¿Un cambio de situación fiscal aparecerá aquí?",
          "answer": "Solo de forma indirecta, a través del porcentaje de retención que elijas; la herramienta no es una hoja completa del W-4."
        },
        {
          "question": "¿Los trabajadores por hora pueden usarla?",
          "answer": "Convierte las horas previstas por la tarifa en el bruto del periodo y luego ejecuta la estimación."
        },
        {
          "question": "¿Se guardan los resultados cuando me voy?",
          "answer": "Trata las cifras como propias de la sesión; copia lo que necesites en tus propias notas."
        }
      ]
    },
    "metaDescription": "Estima el sueldo neto a partir del bruto y de las deducciones antes de impuestos, retenciones y deducciones después de impuestos que indiques.",
    "ui": {}
  },
  "rent-vs-buy-calculator": {
    "answer": "Una calculadora de alquilar o comprar estima el alquiler pagado y el coste en efectivo y el patrimonio de comprar durante los años que elijas. El crecimiento del alquiler y el cambio del valor de la vivienda son hipótesis, no una recomendación.",
    "content": {
      "about": "Estima el alquiler pagado a lo largo de varios años, al lado del efectivo que pagarías al comprar, el préstamo restante y el patrimonio según el cambio de valor de la vivienda que indiques.",
      "howTo": [
        "Escribe el alquiler mensual y un cambio anual del alquiler. Usa 0 si el alquiler se mantiene igual.",
        "Escribe el precio de la vivienda, la entrada, el tipo y el plazo del préstamo.",
        "Escribe el impuesto predial, el seguro y el mantenimiento anuales, y la cuota mensual de la comunidad. En blanco significa 0.",
        "Escribe un cambio del valor de la vivienda y cuántos años comparar, y luego pulsa Calcular."
      ],
      "examples": [
        {
          "title": "Pagar todo al contado",
          "body": "Una entrada igual al precio no tiene cuota de préstamo. El patrimonio sigue el cambio de valor de la vivienda que indiques."
        },
        {
          "title": "Una comparación más larga que el préstamo",
          "body": "Cuando termina el plazo del préstamo, cesan el capital y los intereses. El impuesto, el seguro, la comunidad y el mantenimiento continúan."
        }
      ],
      "explanation": "Cada año de alquiler es el año anterior multiplicado por uno más el porcentaje de cambio del alquiler. La cuota del préstamo usa la amortización mensual estándar. El efectivo de comprar es la entrada, el capital y los intereses a lo largo de la comparación, y los gastos de vivienda que escribiste. El patrimonio es el valor estimado de la vivienda menos el saldo restante. El coste neto de comprar es el efectivo menos el patrimonio. La diferencia es el coste del alquiler menos ese coste neto de comprar. Ningún resultado se etiqueta como la mejor opción.",
      "limitations": "El crecimiento del alquiler y el cambio del valor de la vivienda son hipótesis, no previsiones. La página no incluye los costes de venta, las reparaciones más allá del importe de mantenimiento ni los impuestos de una venta.",
      "tips": [
        "Usa 0 en el cambio del alquiler y en el cambio del valor de la vivienda cuando quieras una comparación plana.",
        "El tipo es un ejemplo que tú escribes, no una oferta hipotecaria en vivo."
      ],
      "features": [
        "Un alquiler que puede subir o bajar cada año.",
        "Una cuota de préstamo con la misma operación de amortización que la calculadora de hipotecas.",
        "El coste en efectivo, el saldo restante y el patrimonio, mostrados por separado."
      ],
      "faqs": [
        {
          "question": "¿Cómo compara alquilar y comprar?",
          "answer": "Suma el alquiler a lo largo de los años que indiques y suma el efectivo de comprar; luego resta el patrimonio estimado de ese efectivo."
        },
        {
          "question": "¿La calculadora recomienda comprar o alquilar?",
          "answer": "No. Muestra los dos costes estimados y la diferencia. No señala uno como mejor."
        },
        {
          "question": "¿Qué ocurre cuando la comparación es más larga que el préstamo?",
          "answer": "El capital y los intereses cesan cuando termina el plazo. Los demás costes anuales y mensuales que indicaste continúan."
        },
        {
          "question": "¿Cómo se estima el patrimonio de la vivienda?",
          "answer": "El precio de la vivienda se modifica con tu hipótesis anual de valor y luego se resta el saldo restante del préstamo."
        },
        {
          "question": "¿El crecimiento del alquiler y los precios de la vivienda son previsiones?",
          "answer": "No. Ambos son tipos que escribes para esta estimación."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El alquiler, el precio y los tipos que supones se comparan en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Qué datos importan más en una comparación de alquilar o comprar?",
          "answer": "El precio de la vivienda, la entrada, el tipo, el plazo, el alquiler y cuánto tiempo esperas quedarte suelen mover más el resultado."
        },
        {
          "question": "¿Cómo debo tratar los gastos de cierre?",
          "answer": "Inclúyelos en los costes de comprar para que los primeros años no queden subestimados frente al alquiler."
        },
        {
          "question": "¿La herramienta supone que invierto la entrada si alquilo?",
          "answer": "Muchas comparaciones acreditan una rentabilidad de oportunidad del dinero que no queda atado a una casa: lee las hipótesis de la página."
        },
        {
          "question": "¿Cómo afectan los impuestos prediales al lado de comprar?",
          "answer": "Unos impuestos más altos suben el coste de ser propietario cada año y pueden inclinar las estancias más largas hacia el alquiler si los precios se mantienen planos."
        },
        {
          "question": "¿Debo incluir las cuotas de la comunidad?",
          "answer": "Sí, cuando las pagarías: súmalas a los demás costes de ser propietario para una comparación justa con el alquiler."
        },
        {
          "question": "¿Qué significa aquí el año de equilibrio?",
          "answer": "Es la duración de la estancia en la que el coste acumulado de comprar cruza el de alquilar, según tus hipótesis: no es una promesa."
        },
        {
          "question": "¿Cómo modelo un alquiler que sube?",
          "answer": "Escribe un tipo de crecimiento del alquiler si lo tienes, para que los años posteriores reflejen los aumentos previsibles."
        },
        {
          "question": "¿El mantenimiento puede ser cero al comprar?",
          "answer": "No es realista en la mayoría de las viviendas; incluye un porcentaje anual de mantenimiento o un importe."
        },
        {
          "question": "¿Y si planeo vender antes de que termine el préstamo?",
          "answer": "Acorta el horizonte de comparación e incluye los costes de venta para no inflar las ganancias de patrimonio."
        },
        {
          "question": "¿Qué tan sensible es el resultado a los tipos de interés?",
          "answer": "Unos cambios pequeños de tipo pueden desplazar mucho las cuotas: prueba un tipo más alto y uno más bajo para ver el margen."
        },
        {
          "question": "¿La calculadora incluye las deducciones fiscales por el interés hipotecario?",
          "answer": "Solo si esa opción está presente; muchos modelos simples ignoran los efectos fiscales de las deducciones detalladas."
        },
        {
          "question": "¿Cómo deben usar el resultado quienes compran por primera vez?",
          "answer": "Como un esbozo de planificación: confirma las cifras de la preaprobación y los costes locales antes de decidir."
        },
        {
          "question": "¿Puedo comparar un piso en régimen de condominio con el alquiler de una unidad similar?",
          "answer": "Sí: usa el precio y las cuotas del condominio frente al alquiler de un tipo de unidad comparable."
        },
        {
          "question": "¿Por qué comprar puede verse mejor sobre el papel, pero sentirse peor cada mes?",
          "answer": "El flujo de caja no es lo mismo que el patrimonio a largo plazo; revisa tanto la comodidad de la cuota como el resultado del horizonte."
        }
      ]
    },
    "metaDescription": "Compara el alquiler estimado con el coste estimado en efectivo y el patrimonio de comprar durante el periodo que elijas.",
    "ui": {}
  },
  "fuel-cost-calculator": {
    "answer": "Una calculadora de coste de combustible estima el combustible consumido y el coste del viaje a partir de la distancia, el consumo y el precio que escribas. No consulta un precio de combustible en vivo.",
    "content": {
      "about": "Estima cuánto combustible usa un viaje y cuánto cuesta al precio que indiques.",
      "howTo": [
        "Elige millas con millas por galón, o kilómetros con litros por 100 km.",
        "Escribe la distancia, la cifra de consumo y el precio del combustible.",
        "Escribe cuántas veces haces ese viaje.",
        "Pulsa Calcular."
      ],
      "examples": [
        {
          "title": "100 millas a 25 millas por galón",
          "body": "El viaje consume 4 galones. A 4 dólares el galón, un viaje cuesta 16 dólares."
        },
        {
          "title": "100 kilómetros a 8 litros por 100 km",
          "body": "El viaje consume 8 litros."
        }
      ],
      "explanation": "En el modo de millas, los galones son la distancia dividida entre las millas por galón. En el modo de kilómetros, los litros son la distancia multiplicada por los litros por 100 km, dividida entre 100. El coste es el combustible por el precio que indiques, y luego se multiplica por el número de viajes.",
      "limitations": "El resultado ignora el tráfico, la carga y la diferencia entre el consumo urbano y el de carretera, salvo el único número de consumo que escribas.",
      "tips": [
        "Al cambiar de unidades se sustituyen el consumo y el precio de ejemplo, para que las unidades vayan juntas.",
        "Escribe el precio que esperas pagar. La página no obtiene el precio de una gasolinera."
      ],
      "features": [
        "Millas y galones, o kilómetros y litros.",
        "El coste de un viaje y el de todos los viajes.",
        "Un precio que tú escribes, no una cotización en vivo."
      ],
      "faqs": [
        {
          "question": "¿Cómo se calcula el coste de combustible de un viaje?",
          "answer": "El combustible consumido se calcula a partir de la distancia y el consumo, y luego se multiplica por el precio y por el número de viajes."
        },
        {
          "question": "¿Cuál es la diferencia entre MPG y L/100 km?",
          "answer": "Las millas por galón dividen la distancia entre el consumo. Los litros por 100 km multiplican la distancia por los litros usados en cada 100 km."
        },
        {
          "question": "¿Esto usa el precio de la gasolina de hoy?",
          "answer": "No. Usa el precio que tú escribas."
        },
        {
          "question": "¿Cómo funcionan los viajes múltiples?",
          "answer": "El combustible y el coste de un viaje se multiplican por el número de viajes."
        },
        {
          "question": "¿Y si conduzco cero millas?",
          "answer": "El combustible consumido y el coste son 0. Un valor de 0 millas por galón se rechaza porque el viaje no se puede dividir entre cero."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. La distancia, el consumo y el precio que escribas se multiplican en esta pestaña. No se suben a ningún servidor."
        },
        {
          "question": "¿Cómo estimo el coste de gasolina de un viaje por carretera?",
          "answer": "Escribe la distancia, el consumo de tu vehículo y el precio por galón o por litro. La herramienta multiplica el combustible necesario por el precio para estimar el coste."
        },
        {
          "question": "¿Debo usar MPG o L/100 km?",
          "answer": "Ajusta la unidad a tu región y al manual del propietario. Mezclar unidades sin convertir sesgará el coste."
        },
        {
          "question": "¿Cómo trato un viaje de ida y vuelta?",
          "answer": "Duplica la distancia de ida, o escribe cada tramo si el consumo es distinto. Volver con el coche cargado puede usar un poco más de combustible."
        },
        {
          "question": "¿Importa el MPG urbano frente al de carretera?",
          "answer": "Sí. Usa una cifra combinada que coincida con tu ruta, o haz dos estimaciones y pésalas según las millas en cada condición."
        },
        {
          "question": "¿Puedo comparar dos coches en el mismo viaje?",
          "answer": "Ejecuta la calculadora una vez por vehículo, con el MPG de cada uno y la misma distancia y el mismo precio del combustible. La diferencia es tu comparación."
        },
        {
          "question": "¿Qué precio de combustible debo escribir?",
          "answer": "Usa un promedio local reciente o el de la gasolinera que esperas visitar. Los precios cambian a diario, así que actualízalo antes de un viaje largo."
        },
        {
          "question": "¿Cómo estimo el coste por milla?",
          "answer": "Divide el coste total de combustible entre la distancia. Esa cifra ayuda a comparar conducir con otros modos de transporte."
        },
        {
          "question": "¿El ralentí o el tráfico aparecen en la estimación?",
          "answer": "Los modelos simples de distancia ÷ consumo no recogen un tiempo largo en ralentí. Añade un margen en las ciudades congestionadas."
        },
        {
          "question": "¿Los vehículos eléctricos pueden usar esta herramienta de combustible?",
          "answer": "No para el cálculo de la carga en kWh. Usa un estimador de coste de un vehículo eléctrico con tipos de electricidad, en lugar del precio de la gasolina."
        },
        {
          "question": "¿Qué tan preciso es el MPG del fabricante?",
          "answer": "Los valores de la etiqueta son pruebas estandarizadas. En la práctica, muchos conductores ven un MPG menor; usa el ordenador de viaje cuando puedas."
        },
        {
          "question": "¿Y si solo conozco el coste de un llenado anterior?",
          "answer": "Divide ese coste entre las millas desde el último llenado para obtener un coste real por milla, y luego ajústalo a la nueva distancia."
        },
        {
          "question": "¿Las bacas o cofres de techo cambian el resultado?",
          "answer": "Empeoran el MPG en carretera. Baja un poco el dato de consumo si conduces con una resistencia extra."
        },
        {
          "question": "¿Puedo incluir el aceite y los neumáticos en el coste del viaje?",
          "answer": "Esta calculadora se centra en el combustible. Suma por separado el mantenimiento y los peajes para un presupuesto completo del viaje."
        },
        {
          "question": "¿Se suben las distancias de mis viajes?",
          "answer": "No. La distancia y el precio se quedan en el navegador para la estimación."
        }
      ]
    },
    "metaDescription": "Estima el combustible consumido y el coste de un viaje según la distancia, el consumo y el precio que indiques.",
    "ui": {}
  },
  "business-days-calculator": {
    "answer": "Una calculadora de días hábiles cuenta de lunes a viernes entre dos fechas. No aplica un calendario de festivos. Puedes excluir fechas tú mismo.",
    "content": {
      "about": "Cuenta de lunes a viernes entre dos fechas. Puedes dejar fuera las fechas que no deban contar.",
      "howTo": [
        "Escribe las fechas de inicio y fin.",
        "Elige si se incluye la fecha de fin.",
        "Añade las fechas excluidas, una por línea, o deja ese cuadro vacío.",
        "Pulsa Calcular."
      ],
      "features": [
        "Recuento de días laborables y de fin de semana.",
        "Una fecha de fin opcional.",
        "Fechas excluidas que escribes tú, sin una lista de festivos integrada."
      ],
      "examples": [
        {
          "title": "De lunes a viernes",
          "body": "Del 1 de enero de 2024 al 5 de enero de 2024 son cinco días hábiles."
        },
        {
          "title": "Un fin de semana",
          "body": "Del 6 de enero de 2024 al 7 de enero de 2024 son sábado y domingo, así que el recuento de días hábiles es 0."
        }
      ],
      "explanation": "Cada fecha desde el inicio hasta el fin, cuando se incluye el fin, es un día laborable o un día de fin de semana. De lunes a viernes cuentan como días hábiles, salvo que hayas excluido esa fecha. El sábado y el domingo cuentan como días de fin de semana. Si la fecha de fin es anterior, la página cuenta el intervalo entre las dos fechas.",
      "tips": [
        "Escribe las fechas excluidas como AAAA-MM-DD.",
        "Se ignora una fecha fuera del intervalo."
      ],
      "limitations": "No hay un calendario de festivos por país. Un festivo cuenta como día hábil salvo que lo excluyas.",
      "faqs": [
        {
          "question": "¿Cómo se cuentan los días hábiles?",
          "answer": "Se cuentan de lunes a viernes. El sábado y el domingo no, salvo cuando miras el total del fin de semana."
        },
        {
          "question": "¿Esto incluye los fines de semana?",
          "answer": "Los días de fin de semana se muestran por separado. No se incluyen en el recuento de días hábiles."
        },
        {
          "question": "¿Y si la fecha de fin cae en fin de semana?",
          "answer": "Una fecha de fin en sábado o domingo suma un día de fin de semana cuando se incluye la fecha de fin. No suma un día hábil."
        },
        {
          "question": "¿Puedo excluir fechas concretas?",
          "answer": "Sí. Pon una fecha por línea. Un día laborable dentro del intervalo se resta del recuento de días hábiles y se muestra en la lista."
        },
        {
          "question": "¿Esto incluye los festivos?",
          "answer": "Solo si los dejas dentro. La página no sabe qué fechas son festivas."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. Las fechas que escribes se cuentan en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cómo trata un contador de días hábiles solo los días laborables?",
          "answer": "Escribe las fechas de inicio y fin y elige si cuentan los fines de semana. La herramienta omite el sábado y el domingo por defecto, como en los calendarios occidentales."
        },
        {
          "question": "¿Los festivos se quitan automáticamente?",
          "answer": "Solo si los indicas o si la herramienta tiene activada una lista de festivos. Una lista vacía significa que solo se omiten los fines de semana."
        },
        {
          "question": "¿Se incluye la fecha de inicio en el recuento?",
          "answer": "Los modos inclusivo y exclusivo difieren. Sigue la convención de tu contrato: muchos acuerdos de nivel de servicio definen los días hábiles con cuidado."
        },
        {
          "question": "¿Puedo contar días hábiles para la fecha estimada de un envío?",
          "answer": "Sí. Las empresas de transporte suelen indicar el tránsito en días hábiles. Aun así, vigila las horas límite de pedido en el reloj."
        },
        {
          "question": "¿Cómo cambian el resultado los fines de semana regionales?",
          "answer": "Algunas regiones tienen el fin de semana en viernes y sábado. Solo una configuración personalizada lo recoge; por defecto se asume sábado y domingo."
        },
        {
          "question": "¿Y si mi fecha de fin cae en un festivo?",
          "answer": "Las políticas pasan al siguiente día hábil o excluyen ese día. Ajusta la herramienta a la norma escrita que debas seguir."
        },
        {
          "question": "¿Puede usarlo Recursos Humanos para solicitudes de permiso?",
          "answer": "Como recuento provisional, sí. Los saldos finales de permisos siguen el manual del empleado, que puede contar días naturales."
        },
        {
          "question": "¿Por qué dos herramientas de días hábiles no coinciden?",
          "answer": "Los extremos inclusivos, los calendarios de festivos y los límites de fecha por zona horaria causan diferencias de un día. Compara la configuración, no solo los resultados."
        },
        {
          "question": "¿Hasta qué fecha puedo proyectar?",
          "answer": "Hasta donde permitan los campos de fecha. Los intervalos largos siguen necesitando listas de festivos actualizadas cada año."
        },
        {
          "question": "¿Conoce los festivos bancarios de mi país?",
          "answer": "No, salvo que se configuren. Añade a mano los festivos nacionales para plazos legales o bancarios."
        },
        {
          "question": "¿Puedo excluir semanas de cierre de la empresa?",
          "answer": "Trata esas fechas como festivos en la lista de exclusiones para que no cuenten como días laborables."
        },
        {
          "question": "¿Hoy es el día cero o el día uno?",
          "answer": "Depende de si cuentas los días que faltan para un plazo o los días transcurridos desde un inicio. Lee las etiquetas del modo."
        },
        {
          "question": "¿Cómo deben definir los contratos los días hábiles?",
          "answer": "Especifica los días de fin de semana, los calendarios de festivos y las horas límite. Las definiciones ambiguas crean disputas que una calculadora no puede resolver."
        },
        {
          "question": "¿Se suben las fechas que escribo?",
          "answer": "No. El recuento se ejecuta en el navegador durante la sesión."
        }
      ]
    },
    "metaDescription": "Cuenta los días laborables de lunes a viernes entre dos fechas y deja fuera las fechas que excluyas. No aplica un calendario de festivos.",
    "ui": {}
  },
  "gpa-calculator": {
    "answer": "Una calculadora de GPA divide el total de puntos de calificación entre el total de créditos. Los puntos de calificación son los puntos del curso por los créditos. La página usa una tabla habitual de letras sobre 4,0, y un centro puede usar otra.",
    "content": {
      "about": "Añade cursos con una nota en letra o en puntos numéricos y un valor de créditos. El GPA es el total de puntos de calificación dividido entre el total de créditos.",
      "howTo": [
        "Añade cada curso.",
        "Escribe una letra de la tabla de 4,0, o cambia el curso a puntos numéricos.",
        "Escribe los créditos.",
        "Pulsa Calcular."
      ],
      "features": [
        "GPA ponderado por créditos.",
        "Notas en letra o en puntos numéricos.",
        "Total de créditos y total de puntos de calificación."
      ],
      "examples": [
        {
          "title": "Dos cursos",
          "body": "Una A de 3 créditos y una B de 1 crédito suman 15 puntos de calificación sobre 4 créditos, así que el GPA es 3,75 en esta tabla."
        }
      ],
      "explanation": "Cada curso aporta sus puntos de calificación multiplicados por sus créditos. Esos productos se suman y luego se dividen entre la suma de los créditos. Un curso de cero créditos no aporta nada. Si todos los cursos tienen cero créditos, no hay GPA que dividir.",
      "tips": [
        "La tabla de letras se muestra encima del formulario.",
        "Los puntos numéricos deben estar entre 0 y 4,0 en esta escala."
      ],
      "limitations": "No todos los centros usan esta tabla. Las letras con más y menos siguen los valores que aparecen en la página, no el catálogo de un centro.",
      "faqs": [
        {
          "question": "¿Cómo se calcula el GPA?",
          "answer": "Multiplica los puntos de calificación de cada curso por sus créditos, suma esos productos y divide entre el total de créditos."
        },
        {
          "question": "¿Qué escala de notas se usa?",
          "answer": "Una tabla habitual de 4,0: A es 4,0, A- es 3,7, B+ es 3,3, B es 3,0, y el resto de la tabla aparece en la página."
        },
        {
          "question": "¿Puedo escribir puntos de calificación numéricos?",
          "answer": "Sí. Marca ese curso como numérico y escribe un valor de 0 a 4,0."
        },
        {
          "question": "¿Y si un curso tiene cero créditos?",
          "answer": "No cambia los totales. Si los únicos créditos son cero, la página no divide."
        },
        {
          "question": "¿Todos los centros usan esta tabla?",
          "answer": "No. Usa los puntos de tu centro si son distintos y escríbelos como puntos numéricos."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. Las notas y los créditos se promedian en esta pestaña. No se suben."
        },
        {
          "question": "¿Cómo calculo el GPA de un semestre?",
          "answer": "Escribe la nota y las horas de crédito de cada curso. La herramienta pondera los puntos por créditos y divide entre el total de créditos."
        },
        {
          "question": "¿Cuál es la diferencia entre el GPA y el GPA ponderado?",
          "answer": "Algunos centros suman puntos extra por clases de honores o AP. Confirma que el modo de tu calculadora coincide con la escala de tu expediente."
        },
        {
          "question": "¿Puedo mezclar notas en letra y porcentajes?",
          "answer": "Solo si los conviertes antes con la tabla oficial de tu centro. No inventes conversiones que tu secretaría académica no use."
        },
        {
          "question": "¿Cómo afectan los cursos suspendidos al GPA?",
          "answer": "Una F suele aportar cero puntos y aun así cuenta los créditos intentados, lo que baja el promedio. Las políticas de repetición varían según el centro."
        },
        {
          "question": "¿Qué es el GPA acumulado frente al GPA del periodo?",
          "answer": "El GPA del periodo cubre un semestre. El GPA acumulado reúne todos los créditos calificados hasta la fecha. Escribe con cuidado los totales anteriores al combinarlos."
        },
        {
          "question": "¿Las clases de aprobado/suspenso cuentan en el GPA?",
          "answer": "A menudo cuentan para los créditos obtenidos, pero no para el promedio. Sigue tu catálogo; omítelas si están excluidas."
        },
        {
          "question": "¿Con cuántos decimales informan los centros?",
          "answer": "Muchos muestran dos o tres decimales y tienen sus propias reglas de redondeo. Usa la cifra de la secretaría para solicitudes oficiales."
        },
        {
          "question": "¿Puedo proyectar mi GPA si saco una A el próximo periodo?",
          "answer": "Sí, sumando a tus totales actuales los cursos previstos con las notas esperadas. Trátalo como una previsión, no como una promesa."
        },
        {
          "question": "¿Y si los créditos aparecen como unidades u horas?",
          "answer": "Usa de forma coherente el peso numérico que use tu centro. Mezclar horas trimestrales y semestrales sin convertir distorsionará el GPA."
        },
        {
          "question": "¿Coincide con todas las escalas internacionales?",
          "answer": "No. Las escalas varían mucho. Convierte solo con un método oficial de evaluación de credenciales cuando solicites entre sistemas distintos."
        },
        {
          "question": "¿Cómo corrijo un error que distorsiona el resultado?",
          "answer": "Revisa cada campo de nota y de créditos. Una sola hora de crédito equivocada puede mover el GPA más que cambiar una nota de letra."
        },
        {
          "question": "¿Los cursos repetidos deben sustituir las notas anteriores?",
          "answer": "Solo cuando lo diga la política del centro. Algunos sustituyen y otros promedian ambas. Modela la política que tengas de verdad."
        },
        {
          "question": "¿Se puede usar la misma herramienta para el GPA de secundaria?",
          "answer": "Sí, si la tabla de letras a puntos coincide. Las escalas ponderadas de secundaria necesitan el modo ponderado o puntos manuales."
        },
        {
          "question": "¿Se guardan mis notas en un servidor?",
          "answer": "Se quedan en el navegador durante la sesión. Borra el formulario al terminar si te importa la privacidad."
        }
      ]
    },
    "metaDescription": "Calcula un GPA ponderado por créditos a partir de notas con letra o puntos en la escala habitual de 4,0. Tu centro puede usar otra tabla de equivalencias.",
    "ui": {}
  },
  "square-footage-calculator": {
    "answer": "Una calculadora de superficie multiplica el largo por el ancho de cada habitación y luego suma las habitaciones. Los resultados se muestran en pies cuadrados y metros cuadrados.",
    "content": {
      "about": "Multiplica el largo por el ancho de cada habitación y luego suma las habitaciones. El total se muestra en pies cuadrados y metros cuadrados.",
      "howTo": [
        "Escribe el largo y el ancho de la primera habitación.",
        "Elige pies o metros.",
        "Añade otra habitación si la necesitas.",
        "Pulsa Calcular."
      ],
      "features": [
        "Una habitación o varias.",
        "Pies o metros en cada habitación.",
        "Totales en pies cuadrados y metros cuadrados."
      ],
      "examples": [
        {
          "title": "Una habitación de 10 por 10 pies",
          "body": "La superficie es de 100 pies cuadrados, que son 9,29 metros cuadrados."
        }
      ],
      "explanation": "La superficie es el largo por el ancho. Una habitación escrita en pies se convierte con 0,09290304 metros cuadrados por pie cuadrado. Una habitación escrita en metros se convierte en sentido contrario. Las filas extra en blanco se omiten.",
      "tips": [
        "Deja en blanco una habitación extra si no la necesitas.",
        "Usa el mismo tipo de medida en ambos lados de una habitación."
      ],
      "limitations": "La página mide rectángulos. No resta armarios ni suma triángulos.",
      "faqs": [
        {
          "question": "¿Cómo se calcula la superficie en pies cuadrados?",
          "answer": "Multiplica el largo por el ancho. Con varias habitaciones, suma la superficie de cada una."
        },
        {
          "question": "¿Cómo se convierten los pies cuadrados a metros cuadrados?",
          "answer": "Un pie cuadrado es 0,3048 por 0,3048 metros cuadrados, que es 0,09290304."
        },
        {
          "question": "¿Las habitaciones pueden usar unidades distintas?",
          "answer": "Sí. Cada habitación tiene su propia opción de pies o metros, y los totales se convierten a ambas unidades."
        },
        {
          "question": "¿Y si una habitación extra está en blanco?",
          "answer": "Se omite una fila sin largo ni ancho."
        },
        {
          "question": "¿Se admiten medidas negativas?",
          "answer": "No. Se rechaza un largo o un ancho negativo."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El largo y el ancho se multiplican en esta pestaña. Esas medidas no se envían a un servidor."
        },
        {
          "question": "¿Cómo divido un plano en forma de L?",
          "answer": "Divide la L en dos rectángulos, calcula la superficie de cada uno y súmalas para obtener el total de la habitación."
        },
        {
          "question": "¿Debo incluir los armarios en el total de las habitaciones?",
          "answer": "Inclúyelos cuando el suelo o la pintura cubran esos espacios; omítelos para comparar superficie habitable."
        },
        {
          "question": "¿Cómo trato los techos abovedados para el suelo?",
          "answer": "El suelo usa la superficie de planta, no la altura de las paredes: mide solo el largo × el ancho del plano."
        },
        {
          "question": "¿Puedo mezclar pies y pulgadas en una habitación?",
          "answer": "Convierte primero todo a pies decimales (o a metros) para que las unidades sean coherentes en la calculadora."
        },
        {
          "question": "¿Y los espacios triangulares?",
          "answer": "Usa ½ × base × altura en cada triángulo y suma esas superficies a las demás habitaciones."
        },
        {
          "question": "¿El grosor de los muros exteriores cambia la superficie interior?",
          "answer": "La superficie habitable interior usa medidas interiores; los constructores pueden indicar medidas exteriores de otra forma."
        },
        {
          "question": "¿Qué tan precisa es una aplicación de medición del teléfono?",
          "answer": "Sirve para estimaciones; comprueba con cinta métrica las reformas importantes, como pedidos de molduras y suelos."
        },
        {
          "question": "¿Los pasillos cuentan para la superficie total de la vivienda?",
          "answer": "Sí, para el total de la vivienda; omítelos cuando solo necesites el suelo de una habitación."
        },
        {
          "question": "¿Cómo convierto a yardas cuadradas para moqueta?",
          "answer": "Divide los pies cuadrados entre 9 para obtener yardas cuadradas y añade el desperdicio que recomiende el instalador."
        },
        {
          "question": "¿Puedo estimar la pintura a partir de la superficie?",
          "answer": "La pintura necesita la superficie de las paredes (altura × caras del perímetro), no solo la superficie del suelo."
        },
        {
          "question": "¿Y si las habitaciones comparten una cocina abierta?",
          "answer": "Mide la planta abierta combinada como un rectángulo o divídela por un límite claro que elijas."
        },
        {
          "question": "¿Los ventanales salientes necesitan un trato especial?",
          "answer": "Suma la superficie del saliente como un rectángulo o un trapecio extra además de la habitación principal."
        },
        {
          "question": "¿La superficie alquilable es lo mismo que la superficie útil?",
          "answer": "Las definiciones de arrendamiento varían; confirma si se incluyen los pasillos comunes o los muros en tu mercado."
        },
        {
          "question": "¿Por qué dos mediciones no coincidieron?",
          "answer": "Un deslizamiento de la cinta, los muebles que estorban o mezclar muros interiores y exteriores suelen explicar las pequeñas diferencias."
        }
      ]
    },
    "metaDescription": "Multiplica el largo por el ancho de cada habitación y suma las habitaciones. Resultados en pies cuadrados y metros cuadrados para espacios rectangulares.",
    "ui": {}
  },
  "aspect-ratio-calculator": {
    "answer": "Una calculadora de relación de aspecto simplifica un ancho y un alto, o halla el lado que falta a partir de una relación. No redimensiona un archivo de imagen.",
    "content": {
      "about": "Simplifica un ancho y un alto a una relación, o calcula el lado que falta a partir de una relación y un lado conocido.",
      "howTo": [
        "Elige simplificar, hallar el alto o hallar el ancho.",
        "Escribe el tamaño o la relación.",
        "Pulsa Calcular."
      ],
      "features": [
        "Una relación simplificada de números enteros.",
        "El alto a partir de una relación y un ancho.",
        "El ancho a partir de una relación y un alto."
      ],
      "examples": [
        {
          "title": "1920 por 1080",
          "body": "1920 por 1080 se simplifica a 16:9."
        }
      ],
      "explanation": "Ambos lados se escalan a números enteros y se dividen entre su máximo común divisor. Cuando falta un lado, es el lado conocido multiplicado por el otro término de la relación y dividido entre el término correspondiente. La página no abre ni redimensiona una imagen.",
      "tips": [
        "Usa la misma unidad para el ancho y el alto.",
        "Un término de la relación debe ser mayor que 0."
      ],
      "limitations": "Los tamaños decimales se reducen a partir de una escala redondeada, así que la relación mostrada puede ser un par de enteros en lugar de los decimales originales.",
      "faqs": [
        {
          "question": "¿Cómo se calcula una relación de aspecto?",
          "answer": "Divide el ancho y el alto entre su máximo común divisor. 1920 por 1080 es 16:9."
        },
        {
          "question": "¿Cómo se halla el lado que falta?",
          "answer": "Multiplica el lado conocido por el otro término de la relación y divide entre el término correspondiente. Un ancho de 800 en 4:3 tiene un alto de 600."
        },
        {
          "question": "¿Esto redimensiona una imagen?",
          "answer": "No. Solo calcula la relación o el lado que falta."
        },
        {
          "question": "¿Los lados pueden ser decimales?",
          "answer": "Sí. Deben ser mayores que 0. La relación se reduce después de escalar los decimales a números enteros."
        },
        {
          "question": "¿Y si un lado es cero?",
          "answer": "Se rechazan los tamaños de cero y los negativos."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. El ancho, el alto y la relación se calculan en esta pestaña. No se envían a un servidor."
        },
        {
          "question": "¿Cuál es una relación de aspecto habitual para vídeos de YouTube?",
          "answer": "16:9 es la relación panorámica estándar para la mayoría de los vídeos de YouTube y la televisión. Todavía aparece contenido antiguo en 4:3, pero 16:9 es el tamaño de planificación por defecto."
        },
        {
          "question": "¿Cómo obtengo un recorte cuadrado 1:1?",
          "answer": "Fija la relación en 1:1 y escribe el ancho que quieras; el alto coincide. Es útil para fotos de perfil y muchas publicaciones sociales."
        },
        {
          "question": "¿Puedo hallar el ancho si conozco el alto y la relación?",
          "answer": "Sí. Escribe el lado conocido y el par de la relación, y lee el lado que falta que devuelve la calculadora."
        },
        {
          "question": "¿Qué relación debo usar para las historias de Instagram?",
          "answer": "El vertical 9:16 es el marco habitual de pantalla completa para historias y Reels. Consulta la documentación actual de la plataforma si necesitas márgenes de seguridad."
        },
        {
          "question": "¿La relación de aspecto cambia por sí sola el tamaño del archivo?",
          "answer": "No. La relación es la forma, no los megabytes. El número de píxeles y la compresión deciden el tamaño del archivo después de redimensionar."
        },
        {
          "question": "¿Qué quieren decir los cineastas con 2,39:1?",
          "answer": "Es una relación panorámica de cine. Puedes escribir 2,39 y 1 como lados de la relación para planificar las bandas negras."
        },
        {
          "question": "¿Por qué los teléfonos muestran bandas negras en algunos vídeos?",
          "answer": "La relación del vídeo no coincide con la de la pantalla. Las bandas horizontales o verticales rellenan los bordes sin usar."
        },
        {
          "question": "¿Puedo usar relaciones con tres números, como 16:9:1?",
          "answer": "Esta herramienta espera dos lados. Reduce las especificaciones de varias partes a ancho:alto antes de escribirlas."
        },
        {
          "question": "¿Con qué precisión deben escribirse los lados decimales?",
          "answer": "Dos o tres decimales suelen bastar para maquetar. Una precisión extrema rara vez cambia las decisiones de recorte visibles."
        },
        {
          "question": "¿Los PPP son lo mismo que la relación de aspecto?",
          "answer": "No. Los PPP son la resolución de impresión. La relación de aspecto es solo la proporción entre el ancho y el alto."
        },
        {
          "question": "¿Cómo ajusto una foto a la relación de un marco?",
          "answer": "Calcula la relación del marco y recorta la foto a esa forma para que se imprima sin estirarse."
        },
        {
          "question": "¿Qué ocurre si intercambio el ancho y el alto?",
          "answer": "Inviertes la orientación: el formato horizontal pasa a vertical. Escribe los lados en el orden que corresponda a la orientación que quieres."
        },
        {
          "question": "¿Puede sustituir a un redimensionador de imágenes?",
          "answer": "Solo hace la operación. Usa después un redimensionador o un recortador para cambiar los píxeles reales."
        },
        {
          "question": "¿Se guardan los datos de la relación cuando me voy?",
          "answer": "Se quedan en el navegador durante la sesión. No se envía nada solo para calcular el lado que falta."
        }
      ]
    },
    "metaDescription": "Simplifica un ancho y un alto a una relación de aspecto, o halla el lado que falta a partir de una relación y un lado conocido. No redimensiona imágenes.",
    "ui": {}
  },
  "time-calculator": {
    "answer": "Una calculadora de tiempo suma o resta horas y minutos y muestra el resultado en horas, minutos sobrantes y minutos totales.",
    "content": {
      "about": "Suma o resta un bloque de horas y minutos a otro. El resultado son horas y minutos sobrantes, más el total con signo en minutos. Es aritmética de duraciones. No consulta un reloj, una fecha ni una zona horaria.",
      "howTo": [
        "Escribe las horas y los minutos de partida. Ambos deben ser números enteros, cero o mayores.",
        "Escribe las horas y los minutos que quieres sumar o restar.",
        "Elige Sumar o Restar y pulsa Calcular."
      ],
      "features": [
        "Los minutos de 60 o más se pasan a horas.",
        "Un resultado por debajo de cero se marca con el signo menos y sigue mostrando las horas y los minutos restantes.",
        "Minutos totales, para que puedas comprobar la operación."
      ],
      "examples": [
        {
          "title": "Dos horas y media más 1 hora y 45 minutos",
          "body": "2 horas y 30 minutos más 1 hora y 45 minutos son 4 horas y 15 minutos, es decir, 255 minutos."
        },
        {
          "title": "Restar más que el valor de partida",
          "body": "1 hora y 0 minutos menos 1 hora y 30 minutos es menos 0 horas y 30 minutos, es decir, −30 minutos."
        }
      ],
      "explanation": "Cada lado se convierte en minutos, el segundo lado se suma o se resta, y el total con signo se vuelve a dividir en horas y minutos sobrantes. Es aritmética de duraciones. No consulta un reloj, una fecha ni una zona horaria.",
      "tips": [
        "Escribe 90 en el cuadro de minutos si no quieres convertirlo antes a 1 hora y 30 minutos. La página pasa los minutos sobrantes a horas.",
        "Usa la calculadora de diferencia de fechas cuando la pregunta sea cuántos días hay entre dos fechas del calendario."
      ],
      "limitations": "Las horas y los minutos deben ser números enteros de 0 a 100 000. Se rechaza un cuadro vacío. Se rechazan los decimales y los valores negativos. La página no convierte zonas horarias.",
      "faqs": [
        {
          "question": "¿La calculadora de tiempo es gratuita?",
          "answer": "Sí. Puedes sumar o restar horas y minutos aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Y si los minutos son 60 o más?",
          "answer": "Se incluyen en el total y luego se muestran como horas más un resto de 0 a 59."
        },
        {
          "question": "¿El resultado puede ser negativo?",
          "answer": "Sí, cuando restas más que la duración de partida. La página marca ese resultado con el signo menos."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. Las horas y los minutos se calculan en esta pestaña del navegador. Tools Star Hub no envía esas cifras a un servidor ni las guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo sumo horas y minutos?",
          "answer": "Escribe cada duración, elige sumar y lee el total normalizado. Los minutos de 60 o más pasan a horas para que el resultado quede en un formato legible de horas y minutos."
        },
        {
          "question": "¿Cómo resto una duración de otra?",
          "answer": "Pon primero la duración mayor cuando esperes un resto positivo y luego resta. Un resultado negativo significa que la segunda duración era más larga que la primera."
        },
        {
          "question": "¿Puedo mezclar horas, minutos y segundos?",
          "answer": "Usa los campos que ofrece la calculadora para cada unidad. Si falta un campo, convierte antes los valores a las unidades admitidas."
        },
        {
          "question": "¿Cómo convierto minutos en horas?",
          "answer": "Divide el total de minutos entre 60 para obtener las horas enteras y deja el resto como minutos. La calculadora hace esa normalización cuando el total supera los 59 minutos."
        },
        {
          "question": "¿Es un reloj para zonas horarias?",
          "answer": "No. Suma y resta duraciones. Para horas de reloj entre ciudades, usa un conversor de zonas horarias."
        },
        {
          "question": "¿Puedo calcular la duración de un turno de trabajo?",
          "answer": "Sí, para una duración simple cuando ya conoces las horas y los minutos trabajados. No registra la hora de entrada ni aplica por sí sola reglas de descansos."
        },
        {
          "question": "¿Y si solo conozco las horas en decimal?",
          "answer": "Convierte primero las horas decimales a minutos (multiplica la fracción por 60) y luego escribe horas y minutos. Ejemplo: 1,5 horas es 1 hora y 30 minutos."
        },
        {
          "question": "¿La calculadora maneja días?",
          "answer": "Cuando el total supera las 24 horas, algunos modos muestran horas extra en lugar de días naturales. Divide en días a mano si necesitas contar días."
        },
        {
          "question": "¿Por qué dos herramientas de tiempo no coinciden?",
          "answer": "El redondeo, si se conservan los segundos y si se admiten negativos varían según el producto. Iguala la precisión de las unidades antes de comparar."
        },
        {
          "question": "¿Puedo sumar una lista de tiempos por vuelta?",
          "answer": "Súmalos uno tras otro, o súmalos aparte y escribe las horas y los minutos combinados. Esta página no tiene una tabla de vueltas."
        },
        {
          "question": "¿Incluye el cálculo de horas extras?",
          "answer": "No se aplican reglas de nómina. Calcula aquí la duración bruta y luego aplica los multiplicadores de horas extras en tu hoja de nómina."
        },
        {
          "question": "¿Qué tan precisos son los resultados?",
          "answer": "Los resultados siguen minutos o segundos enteros según los datos que escribas. Las fracciones de segundo no son el objetivo de esta herramienta sencilla de duraciones."
        },
        {
          "question": "¿Puedo usarla para temporizadores de cocina?",
          "answer": "Sí, para sumar bloques de preparación y cocción. No hace sonar una alarma; copia el total en una aplicación de temporizador si necesitas una cuenta atrás."
        },
        {
          "question": "¿Qué significa una duración negativa?",
          "answer": "Que restaste un intervalo más largo de uno más corto. Intercambia los operandos o toma el valor absoluto como lo que falta."
        },
        {
          "question": "¿El horario de verano cambia el cálculo de duraciones?",
          "answer": "Sumar duraciones ignora los saltos del reloj civil. El horario de verano importa para los horarios de reloj, no para la aritmética pura de horas y minutos."
        },
        {
          "question": "¿Se guardan mis duraciones?",
          "answer": "Se quedan en el navegador durante la sesión. No se envía nada para completar la suma o la resta."
        }
      ]
    },
    "metaDescription": "Suma o resta horas y minutos y lee el total en horas, minutos y minutos totales. Es aritmética de duraciones, sin relojes ni zonas horarias.",
    "ui": {}
  },
  "average-calculator": {
    "answer": "Una calculadora de promedios halla la media, la mediana y la moda de los números que pegues. Con una cantidad par, la mediana es el promedio de los dos números centrales.",
    "content": {
      "about": "Pega una lista de números y obtén la cantidad, la media, la mediana y la moda. Separa los valores con comas, espacios o saltos de línea. La lista admite hasta 1000 números, y los valores no se ponderan.",
      "howTo": [
        "Pega los números. Se rechaza una lista vacía.",
        "Pulsa Calcular.",
        "Lee la media, el valor central y la moda, si la hay."
      ],
      "features": [
        "Media redondeada a un máximo de 10 decimales.",
        "La mediana de una cantidad par es el promedio de los dos números centrales.",
        "Más de una moda cuando varios valores empatan en la mayor frecuencia."
      ],
      "examples": [
        {
          "title": "Cuatro números sin repetir",
          "body": "1, 2, 3, 4 tiene una media de 2,5, una mediana de 2,5 y ninguna moda."
        },
        {
          "title": "Un par repetido",
          "body": "1, 2, 2, 3 tiene una media de 2, una mediana de 2 y una moda de 2. 1, 1, 2, 2, 3 tiene una media de 1,8, una mediana de 2 y las modas 1 y 2."
        }
      ],
      "explanation": "La media es la suma dividida entre la cantidad de números que escribiste. La mediana es el número central después de ordenar, o el promedio de los dos números centrales cuando la cantidad es par. La moda es el valor que aparece con más frecuencia. Si cada valor distinto aparece una sola vez, no hay moda. Un único número es su propia moda.",
      "tips": [
        "El GPA usa notas en letra y créditos. Usa la calculadora de GPA para eso, no esta lista de números en bruto."
      ],
      "limitations": "Hasta 1000 números. Un elemento que no sea un número hace que se rechace toda la lista. Esta página no pondera los valores.",
      "faqs": [
        {
          "question": "¿La calculadora de promedios es gratuita?",
          "answer": "Sí. Puedes hallar la media, la mediana y la moda de una lista aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Cuál es la mediana de una lista par?",
          "answer": "El promedio de los dos números centrales después de ordenar la lista. 1, 2, 3, 4 tiene una mediana de 2,5."
        },
        {
          "question": "¿Cuándo no hay moda?",
          "answer": "Cuando cada número distinto aparece el mismo número de veces y la lista tiene más de un número. 1, 2, 3, 4 no tiene moda."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. La lista se calcula en esta pestaña del navegador. Tools Star Hub no envía esas cifras a un servidor ni las guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo calculo la media de una lista de números?",
          "answer": "Suma todos los valores y divide entre la cantidad de valores que escribiste. Ese cociente es la media aritmética, que la mayoría llama simplemente promedio."
        },
        {
          "question": "¿Cuál es la diferencia entre media, mediana y moda?",
          "answer": "La media es la suma dividida entre la cantidad. La mediana es el valor central después de ordenar. La moda es el valor que aparece con más frecuencia."
        },
        {
          "question": "¿Cuándo debo usar la mediana en lugar de la media?",
          "answer": "Usa la mediana cuando unos pocos valores extremos subirían o bajarían la media, como en ingresos o precios de viviendas. El valor central es menos sensible a los valores atípicos."
        },
        {
          "question": "¿Puedo pegar números separados por comas o espacios?",
          "answer": "Sí. La calculadora acepta los separadores habituales para que pegues desde una lista de celdas de una hoja de cálculo o una nota rápida. Un elemento que no sea un número rechaza la lista."
        },
        {
          "question": "¿Importa el orden al calcular un promedio?",
          "answer": "No para la media. El orden importa para hallar la mediana porque la lista se ordena primero, pero la mediana final no depende de cómo escribiste las filas."
        },
        {
          "question": "¿Cómo promedio porcentajes correctamente?",
          "answer": "Si cada porcentaje viene de un grupo del mismo tamaño, una media simple sirve. Si los tamaños difieren, pondera cada porcentaje por el tamaño de su grupo en lugar de promediar solo los porcentajes."
        },
        {
          "question": "¿Qué ocurre si incluyo un cero en la lista?",
          "answer": "El cero sigue contando como valor. Baja la media y puede ser la moda si es el más frecuente. No quites los ceros salvo que fueran celdas vacías que querías omitir."
        },
        {
          "question": "¿Esta calculadora halla un promedio ponderado?",
          "answer": "Esta página se centra en la media, la mediana y la moda sin ponderar. Para notas o pesos de una cartera, multiplica cada valor por su peso, suma esos productos y divide entre el peso total."
        },
        {
          "question": "¿Por qué mi media es un decimal largo?",
          "answer": "La división produce a menudo decimales periódicos. Redondea solo para mostrar; conserva la precisión completa si vas a usar el resultado en otro cálculo."
        },
        {
          "question": "¿Cuántos números puedo escribir a la vez?",
          "answer": "Hasta 1000. Las listas pequeñas de clase o de hoja de cálculo funcionan bien en el navegador. Los conjuntos de datos muy grandes van mejor en una hoja de cálculo o un programa estadístico."
        },
        {
          "question": "¿El promedio siempre está entre el valor más pequeño y el más grande?",
          "answer": "Sí, para la media aritmética de números reales. Si tu resultado queda fuera de ese rango, probablemente se leyó mal un separador o un signo."
        },
        {
          "question": "¿Qué es un conjunto de datos bimodal?",
          "answer": "Es un conjunto con dos valores distintos empatados como los más frecuentes. Algunas herramientas muestran ambas modas; otras dicen que no hay una moda única."
        },
        {
          "question": "¿Funcionan los números negativos en una calculadora de promedios?",
          "answer": "Sí. Las pérdidas, las temperaturas y las puntuaciones con signo son datos válidos. La media puede ser negativa cuando los negativos dominan la suma."
        },
        {
          "question": "¿Cómo se usa el promedio en las decisiones cotidianas?",
          "answer": "La gente promedia notas de exámenes, gastos mensuales, tiempos de trayecto y estadísticas deportivas para resumir una lista en un número. Acompáñalo del rango cuando importen los valores atípicos."
        },
        {
          "question": "¿Las líneas en blanco cuentan para el promedio?",
          "answer": "No. Las entradas vacías no son números. Quita los espacios en blanco antes de calcular para que la cantidad coincida con los valores que realmente mediste."
        },
        {
          "question": "¿Puedo comparar dos promedios de muestras de tamaño distinto?",
          "answer": "Puedes comparar las cifras, pero la muestra más pequeña tiene más ruido. Indica la cantidad junto a cada promedio para que el lector no sobrevalore un grupo diminuto."
        }
      ]
    },
    "metaDescription": "Halla la media, la mediana y la moda de una lista de números separados por comas, espacios o saltos de línea, con hasta 1000 valores.",
    "ui": {}
  },
  "significant-figures-calculator": {
    "answer": "Una calculadora de cifras significativas cuenta los dígitos que realmente muestra un número escrito, redondea a la precisión que elijas y aplica la regla de decimales en sumas y la de menos cifras significativas en productos. 150, 80 y 1200 quedan ambiguos.",
    "content": {
      "about": "Cuenta las cifras significativas de un número escrito, redondéalo a la precisión que elijas, conviértelo a notación científica, o suma, resta, multiplica y divide con la regla correspondiente. La aritmética se queda en esta pestaña del navegador. Un número entero que termina en cero, como 150, 80 o 1200, se deja como un rango en lugar de un único recuento.",
      "howTo": [
        "Escribe un número, o una expresión con +, −, ×, ÷, paréntesis y una potencia entera como 2.50^2.",
        "Usa EXP cuando quieras un exponente en notación científica, como en 1.500e3. Se aceptan decimales y un signo menos inicial.",
        "Elige de 1 a 5, o escribe una precisión personalizada de 1 a 50, cuando quieras redondear el valor. Déjalo en blanco para contar un número o para que la operación fije la precisión.",
        "Pulsa Resolver. Lee el valor, el recuento o la posición limitante, y la explicación. Copiar copia el resultado mostrado."
      ],
      "features": [
        "Los ceros finales después de la coma decimal siguen siendo significativos, así que 1,00 tiene 3 y 0,080 tiene 2.",
        "Los ceros finales de un número entero quedan ambiguos, con una forma en notación científica para cada recuento posible.",
        "El redondeo es al alza desde la mitad y muestra la precisión que pediste, con notación científica cuando un entero sin más la ocultaría.",
        "La suma y la resta usan la posición decimal menos precisa. La multiplicación y la división usan el menor número de cifras significativas."
      ],
      "examples": [
        {
          "title": "1,00 y 0,080",
          "body": "1,00 tiene 3 cifras significativas. 0,08 tiene 1, y 0,080 tiene 2 porque el último cero va detrás de la coma decimal."
        },
        {
          "title": "150, 80 y 1200",
          "body": "150 puede tener 2 o 3 cifras significativas (1.5e2 o 1.50e2). 80 puede tener 1 o 2. 1200 puede tener 2, 3 o 4. La página no elige uno."
        },
        {
          "title": "Redondeo y aritmética",
          "body": "123,456 con 3 cifras significativas es 123. 999 con 2 es 1,0 × 10³. 12,11 + 0,3 es 12,4. 2,5 × 3,42 es 8,6. 15,0 ÷ 4,0 es 3,8."
        }
      ],
      "explanation": "El recuento sigue los dígitos que escribiste, incluidos los ceros que la forma escrita hace significativos. El redondeo conserva dígitos de guarda hasta el paso final al alza desde la mitad. La suma y la resta no se fuerzan a seguir la regla de la multiplicación.",
      "sections": [
        {
          "heading": "Qué usa el recuento",
          "paragraphs": [
            "Los dígitos distintos de cero son significativos. Los ceros entre dígitos distintos de cero son significativos, así que 1005 tiene 4 y 10,01 tiene 4. Los ceros iniciales solo ocupan posiciones, así que 0,08 tiene 1 y 0,00450 tiene 3.",
            "Los ceros después de la coma decimal que siguen a un dígito distinto de cero son significativos. 4,0, 2,0, 81,60, 1,00 y 1000,0 siguen esa regla. Un cero escrito como 0 o 0,000 cuenta como 1 cifra significativa. Las posiciones decimales de 0,000 siguen importando para la suma.",
            "El exponente de 1.5e3 o 1.500e3 no cambia el coeficiente. 1.5e3 tiene 2 cifras significativas. 1.500e3 tiene 4. 6.022e23 tiene 4. 3.00e-8 tiene 3."
          ]
        },
        {
          "heading": "Números enteros ambiguos",
          "paragraphs": [
            "150, 80, 1200 y 1000 terminan en cero y no tienen coma decimal. Los ceros finales pueden haberse medido o solo ocupar una posición. 150 tiene 2 o 3 cifras significativas. 80 tiene 1 o 2. 1200 tiene 2, 3 o 4. 1000 tiene de 1 a 4.",
            "La notación científica elimina la duda. 1.200e3 tiene 4 cifras significativas. 1.20e3 tiene 3. 1.2e3 tiene 2. 1000,0 tiene 5 porque la coma decimal hace significativos los ceros."
          ]
        },
        {
          "heading": "El redondeo y las dos reglas de operación",
          "paragraphs": [
            "Al alza desde la mitad significa que, si el primer dígito descartado es 5 o más, el último dígito conservado sube 1, alejándose de cero. 1,2345 con 4 cifras significativas es 1,235. 1,25 con 2 es 1,3, y −1,25 con 2 es −1,3. 999 con 2 es 1,0 × 10³, que se copia como 1.0e3. 1200 con 4 es 1,200 × 10³.",
            "12,11 + 0,3 es 12,4 porque 0,3 llega solo hasta las décimas. 2,5 × 3,42 es 8,6 porque 2,5 tiene menos cifras significativas. 15,0 ÷ 4,0 es 3,8. Se rechaza la división entre cero. Un número contado o definido es exacto. Déjalo fuera de la expresión para que no limite los dígitos medidos."
          ]
        }
      ],
      "tips": [
        "Escribe 1.500e3 cuando quieras decir cuatro cifras significativas. Escribir 1500 deja el recuento sin decidir.",
        "Usa la calculadora de porcentajes para el porcentaje de un número. Esta página no convierte un resultado en porcentaje."
      ],
      "limitations": "Cada número escrito se trata como una medida. La página no puede saber si el cero de 150 se midió. Se rechaza una precisión superior a 50 cifras significativas, y se rechazan los exponentes fuera del rango de −9999 a 9999. Las potencias enteras usan un exponente de −999 a 999. No se evalúan logaritmos. Los resultados siguen las reglas de esta página, no la política de redondeo local de un laboratorio.",
      "faqs": [
        {
          "question": "¿La calculadora de cifras significativas es gratuita?",
          "answer": "Sí. Puedes contar, redondear, convertir y calcular aquí sin pagar ni crear una cuenta."
        },
        {
          "question": "¿Cuántas cifras significativas tiene 150?",
          "answer": "No se puede determinar solo con 150. El recuento es 2 si el cero solo ocupa la posición de las decenas (1,5 × 10²), o 3 si el cero se midió (1,50 × 10²)."
        },
        {
          "question": "¿Por qué 1200 no recibe un único recuento?",
          "answer": "Los ceros finales no tienen coma decimal, así que pueden ser significativos o no. 1200 puede tener 2, 3 o 4 cifras significativas: 1.2e3, 1.20e3 o 1.200e3."
        },
        {
          "question": "¿Cómo se redondea 999 a 2 cifras significativas?",
          "answer": "999 con 2 cifras significativas es 1,0 × 10³. El entero 1000 ocultaría esa precisión, así que el resultado se queda en notación científica. La forma copiable es 1.0e3."
        },
        {
          "question": "¿Cuánto es 12,11 más 0,3 con cifras significativas?",
          "answer": "12,4. La suma usa la posición decimal menos precisa. 0,3 es preciso hasta las décimas, y la suma exacta 12,41 se redondea al alza desde la mitad a 12,4."
        },
        {
          "question": "¿Se envían estas cifras a un servidor?",
          "answer": "No. Los números se calculan en esta pestaña del navegador. Tools Star Hub no los envía a un servidor ni los guarda en el almacenamiento local."
        },
        {
          "question": "¿Cómo cuento las cifras significativas de un decimal como 0,00450?",
          "answer": "Los ceros iniciales después de la coma no son significativos; los ceros finales detrás de un dígito distinto de cero sí lo son, así que 0,00450 tiene tres."
        },
        {
          "question": "¿Cómo redondeo un valor a un número de cifras significativas elegido?",
          "answer": "Escribe el número, elige el recuento objetivo y usa el resultado redondeado que muestra la herramienta."
        },
        {
          "question": "¿Por qué usar notación científica para enteros que terminan en ceros?",
          "answer": "Aclara si los ceros finales son significativos, a diferencia de un simple 1200."
        },
        {
          "question": "¿Cómo limita la multiplicación las cifras significativas?",
          "answer": "El producto debe llevar el menor número de cifras significativas presente entre los factores."
        },
        {
          "question": "¿Cómo limita la suma las posiciones decimales?",
          "answer": "La suma sigue la posición decimal menos precisa entre los sumandos."
        },
        {
          "question": "¿Puedo pegar medidas de laboratorio con unidades?",
          "answer": "Escribe solo la parte numérica; anota las unidades por separado en tu cuaderno."
        },
        {
          "question": "¿Qué ocurre si pido más cifras significativas de las que tiene el dato?",
          "answer": "No puedes crear precisión; la herramienta no debe inventar dígitos extra distintos de cero."
        },
        {
          "question": "¿Los factores de conversión exactos se tratan con precisión infinita?",
          "answer": "En los trabajos de clase, las constantes definidas exactas suelen tratarse así; sigue la regla de tu profesor."
        },
        {
          "question": "¿Cómo informo de los resultados de una valoración química?",
          "answer": "Ajústalos a la precisión del instrumento y a las reglas de cifras significativas que indique tu manual de laboratorio."
        },
        {
          "question": "¿La calculadora guarda los valores de mis tareas?",
          "answer": "Los valores se quedan en la sesión del navegador; copia tú mismo las respuestas finales en tu informe."
        },
        {
          "question": "¿Puedo revisar los pasos intermedios antes del redondeo final?",
          "answer": "Conserva dígitos de guarda mientras calculas y redondea una sola vez para la respuesta final cuando esa sea la norma."
        },
        {
          "question": "¿Por qué dos libros de texto pueden discrepar sobre las cifras significativas de 100?",
          "answer": "Por los ceros finales ambiguos; la notación científica elimina la ambigüedad."
        },
        {
          "question": "¿Es aceptable truncar en lugar de redondear?",
          "answer": "Truncar sesga los resultados; los trabajos de clase habituales esperan un redondeo correcto."
        },
        {
          "question": "¿Cómo escribo números en notación e?",
          "answer": "Usa formas como 1.25e3 si el campo las acepta, igual que en la notación científica."
        }
      ]
    },
    "metaDescription": "Cuenta cifras significativas, redondea a la precisión que elijas, convierte a notación científica y opera con las reglas de cifras significativas.",
    "ui": {}
  },
  "partial-pressure-calculator": {
    "answer": "La presión parcial es la parte de la presión total que corresponde a un gas: Pᵢ = Xᵢ × P_total, donde Xᵢ es su fracción molar. Las presiones parciales de todos los gases de una mezcla suman la presión total (ley de Dalton).",
    "content": {
      "about": "Esta calculadora de presión parcial aplica la ley de Dalton de cuatro formas. Puede convertir una fracción molar y una presión total en una presión parcial, repartir una presión total entre una mezcla de gases a partir de sus cantidades en moles, sumar presiones parciales para obtener un total, o hallar la presión de un solo gas con la ley de los gases ideales. Cada respuesta se muestra en atm, kPa, Pa, bar y mmHg, con el procedimiento escrito paso a paso para que puedas comprobarlo con un libro de texto o una hoja de laboratorio.",
      "howTo": [
        "Elige un modo: fracción molar × total, mezcla de gases, total a partir de parciales, o gas ideal.",
        "Escribe los valores de ese modo. Las fracciones molares son decimales de 0 a 1, las cantidades están en moles y las temperaturas pueden estar en kelvin o en grados Celsius.",
        "Elige la unidad de presión con la que trabajas. El resultado se convierte automáticamente a las otras cuatro unidades.",
        "Pulsa Calcular, lee los pasos y usa Copiar resultado para pegar la respuesta y el procedimiento en tus notas. Borrar vacía todos los campos."
      ],
      "features": [
        "Ley de Dalton a partir de una fracción molar, con una comprobación que rechaza fracciones por debajo de 0 o por encima de 1.",
        "Un modo de mezcla para hasta 10 gases que calcula cada fracción molar y confirma que las fracciones suman 1.",
        "Presión total a partir de hasta 10 presiones parciales.",
        "Presión de un gas ideal a partir de n, T y V, con kelvin o Celsius y litros o metros cúbicos.",
        "Conversiones exactas entre atm, kPa, Pa, bar y mmHg."
      ],
      "examples": [
        {
          "title": "Oxígeno en el aire seco a nivel del mar",
          "body": "El aire seco tiene alrededor de un 20,95 % de oxígeno en volumen, así que su fracción molar es de unos 0,2095. Con una presión total de 1 atm, P(O₂) = 0,2095 × 1 atm = 0,2095 atm, que son 21,23 kPa o 159,2 mmHg."
        },
        {
          "title": "Una botella con tres gases",
          "body": "Una botella a 200 kPa contiene 3,0 mol de nitrógeno, 1,5 mol de oxígeno y 0,5 mol de argón, 5,0 mol en total. Las fracciones molares son 0,60, 0,30 y 0,10, así que las presiones parciales son 120 kPa, 60 kPa y 20 kPa. Suman de nuevo 200 kPa."
        },
        {
          "title": "Gas recogido sobre agua",
          "body": "Se recoge hidrógeno sobre agua a 25 °C con una presión total de 755,0 mmHg. La presión de vapor del agua a 25 °C es de unos 23,8 mmHg, así que la presión del hidrógeno seco es 755,0 − 23,8 = 731,2 mmHg. Usa el modo de total a partir de parciales a la inversa comprobando que 731,2 + 23,8 devuelve 755,0 mmHg."
        },
        {
          "title": "Presión de un gas ideal en un matraz",
          "body": "0,500 mol de gas a 25 °C en un matraz de 10,0 L: T = 298,15 K y V = 0,0100 m³, así que P = 0,500 × 8,314462618 × 298,15 ÷ 0,0100 = 123 948 Pa, unos 124,0 kPa o 1,223 atm."
        }
      ],
      "explanation": "La ley de Dalton de las presiones parciales dice que, en una mezcla de gases que no reaccionan, cada gas empuja las paredes del recipiente como si estuviera solo, y la presión total es la suma de esos empujes por separado. Como la presión en una mezcla ideal es proporcional al número de moléculas, la parte de la presión total de cada gas es igual a su parte de los moles.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "El modo de fracción molar usa Pᵢ = Xᵢ × P_total. La fracción debe ser de al menos 0 y no más de 1, y la presión total debe ser mayor que cero.",
            "El modo de mezcla suma primero los moles: n_total = n₁ + n₂ + … . Cada fracción molar es Xᵢ = nᵢ ÷ n_total, y cada presión parcial es Xᵢ × P_total. La herramienta también suma las fracciones y muestra la suma, que debe ser 1 salvo por el redondeo.",
            "El modo de total usa P_total = P₁ + P₂ + … + Pₙ, con todos los valores en la misma unidad.",
            "El modo de gas ideal usa P = nRT ÷ V con R = 8,314462618 J/(mol·K). Los grados Celsius se convierten con T(K) = T(°C) + 273,15, los litros se dividen entre 1000 para obtener metros cúbicos, y la respuesta sale en pascales antes de la conversión.",
            "La conversión de unidades pasa por los pascales: 1 atm = 101 325 Pa, 1 bar = 100 000 Pa, 1 kPa = 1000 Pa y 1 mmHg = 101 325 ÷ 760 Pa, unos 133,322 Pa. Los resultados se redondean a seis cifras significativas solo para mostrarlos."
          ]
        },
        {
          "heading": "Validación de la fracción molar",
          "paragraphs": [
            "Una fracción molar es una proporción entre la parte y el total, así que no puede ser negativa ni superar 1. Si escribes un porcentaje como 21 en lugar de 0,21, la calculadora se detiene y pide un decimal, en lugar de devolver una presión parcial 21 veces mayor que el total. En el modo de mezcla las fracciones se calculan a partir de los moles, así que siempre suman 1 y no tienes que normalizarlas tú."
          ]
        },
        {
          "heading": "Ejemplo resuelto: gas respirable en profundidad",
          "paragraphs": [
            "Un buceador respira aire a 30 metros de agua de mar, donde la presión absoluta es de unos 4,0 bar. Con una fracción de oxígeno de 0,21, P(O₂) = 0,21 × 4,0 = 0,84 bar, y con una fracción de nitrógeno de 0,79, P(N₂) = 0,79 × 4,0 = 3,16 bar. Ambas suman de nuevo 4,0 bar. Es el mismo cálculo que usan los planificadores de buceo para comprobar la exposición al oxígeno, aunque una planificación real de inmersión requiere formación adecuada, tablas o un ordenador de buceo, no una calculadora web."
          ]
        },
        {
          "heading": "Errores habituales que conviene evitar",
          "paragraphs": [
            "Mezclar unidades es el error más frecuente: sumar un valor en kPa a un valor en mmHg da un total sin sentido. Otro es usar los grados Celsius directamente en P = nRT/V, lo que incluso puede dar una presión negativa. Un tercero es olvidar que un gas recogido sobre agua está húmedo, así que el total medido incluye el vapor de agua."
          ]
        },
        {
          "heading": "Cuándo funciona bien la ley de Dalton",
          "paragraphs": [
            "La ley es muy precisa para gases a presiones y temperaturas normales, como el aire, las mezclas respirables, los gases de combustión y la mayoría de los problemas de clase. Pierde exactitud a presión alta o temperatura baja, donde las moléculas ocupan una parte apreciable del volumen y se atraen entre sí, y en gases que reaccionan, se disuelven o se condensan."
          ]
        }
      ],
      "tips": [
        "Convierte los porcentajes a decimales antes de usar el modo de fracción molar: 78 % pasa a 0,78.",
        "En un gas recogido sobre agua, resta del total la presión de vapor del agua a la temperatura medida.",
        "Mantén todas las presiones parciales en la misma unidad antes de sumarlas.",
        "Usa también kelvin en tus propias notas, porque P = nRT/V solo funciona con temperatura absoluta."
      ],
      "limitations": "La calculadora supone gases ideales que no reaccionan entre sí. No aplica correcciones de van der Waals ni otras de gases reales, no consulta presiones de vapor y no trata la solubilidad de los gases en líquidos (ley de Henry). Los resultados se muestran con seis cifras significativas, lo que puede ser más precisión de la que admiten tus medidas, así que redondea la respuesta final según tus datos.",
      "faqs": [
        {
          "question": "¿Qué es la presión parcial?",
          "answer": "Es la presión que ejercería un gas de una mezcla si llenara solo todo el recipiente a la misma temperatura."
        },
        {
          "question": "¿Cuál es la fórmula de la presión parcial?",
          "answer": "Pᵢ = Xᵢ × P_total, donde Xᵢ es la fracción molar del gas. También puedes sumar todas las presiones parciales para obtener el total: P_total = P₁ + P₂ + … ."
        },
        {
          "question": "¿Cómo hallo una fracción molar?",
          "answer": "Divide los moles de un gas entre el total de moles de todos los gases. El modo de mezcla lo hace por ti y muestra cada fracción."
        },
        {
          "question": "¿Por qué la calculadora rechaza una fracción molar de 21?",
          "answer": "Una fracción molar debe estar entre 0 y 1. Si quieres decir un 21 %, escribe 0,21."
        },
        {
          "question": "¿Qué unidades de presión se admiten?",
          "answer": "atm, kPa, Pa, bar y mmHg. El torr es en la práctica igual al mmHg para el trabajo cotidiano, ya que 1 torr es exactamente 101 325 ÷ 760 Pa."
        },
        {
          "question": "¿Puedo usar Celsius en el modo de gas ideal?",
          "answer": "Sí. Elige °C y la herramienta suma 273,15 antes de calcular. Se rechazan las temperaturas en el cero absoluto o por debajo."
        },
        {
          "question": "¿Qué valor de R usa la herramienta?",
          "answer": "8,314462618 J/(mol·K), el valor exacto del SI definido desde 2019, con el volumen en metros cúbicos y la presión en pascales."
        },
        {
          "question": "¿La ley de Dalton funciona con gases reales?",
          "answer": "Es una aproximación muy buena a presiones cotidianas. A presión alta o cerca de la condensación, el comportamiento de gas real causa pequeñas diferencias que esta herramienta no modela."
        },
        {
          "question": "¿Cuántos gases puedo añadir?",
          "answer": "Hasta 10 en los modos de mezcla y de total, lo que cubre casi todos los problemas de tareas, laboratorio y buceo."
        },
        {
          "question": "¿Cómo convierto resultados en mmHg a kPa?",
          "answer": "Divide los mmHg entre 7,5006 para un valor aproximado en kPa, o cambia la unidad de la herramienta antes de calcular."
        },
        {
          "question": "¿Puedo mezclar fracciones molares que no sumen 1?",
          "answer": "Deben sumar 1 en una mezcla completa; corrige primero la composición si el total se desvía."
        },
        {
          "question": "¿Cuándo es adecuado el modo de gas ideal?",
          "answer": "Úsalo para gases diluidos cerca de temperaturas y presiones normales; los gases densos o polares necesitan correcciones."
        },
        {
          "question": "¿Cómo afecta el vapor de agua a las presiones parciales del gas seco?",
          "answer": "Resta la presión de vapor de la presión total cuando necesites las fracciones molares del gas seco."
        },
        {
          "question": "¿Puedo calcular la fracción molar a partir de una presión parcial conocida?",
          "answer": "Divide la presión parcial entre la presión total cuando se cumple la ley de Dalton."
        },
        {
          "question": "¿Por qué subir la temperatura cambió el resultado del gas ideal?",
          "answer": "El modo de gas ideal usa las relaciones de PV = nRT: la temperatura cambia la presión calculada cuando la cantidad y el volumen son fijos."
        },
        {
          "question": "¿Escribo presión manométrica o absoluta?",
          "answer": "La ley de Dalton necesita la presión total absoluta; convierte las lecturas manométricas sumando la presión atmosférica."
        },
        {
          "question": "¿Cuántos decimales deben conservar los informes de laboratorio?",
          "answer": "Ajústalos a la precisión de tu instrumento; evita una exactitud falsa más allá de la presión total medida."
        },
        {
          "question": "¿El porcentaje en volumen es lo mismo que el porcentaje molar en los gases ideales?",
          "answer": "Sí, con las hipótesis de gas ideal a la misma T y P; los gases reales pueden desviarse."
        },
        {
          "question": "¿Se pueden usar gases disueltos en líquidos con esta herramienta?",
          "answer": "No: la ley de Henry y las solubilidades son distintas de las presiones parciales de una mezcla de gases."
        },
        {
          "question": "¿Y si un componente es un vapor condensable?",
          "answer": "Vigila los límites de saturación; la condensación significa que el modelo simple de mezcla de gases deja de valer."
        }
      ]
    },
    "metaDescription": "Calcula presiones parciales con la ley de Dalton desde fracciones molares, mezclas o el gas ideal, y convierte entre atm, kPa, Pa, bar y mmHg.",
    "ui": {}
  },
  "fantasy-point-calculator": {
    "answer": "Los puntos de fantasy son cada estadística multiplicada por los puntos que le da tu liga, y luego sumados. Escribe las estadísticas de un jugador, ajusta las reglas ilustrativas a las de tu liga y verás el total con un desglose.",
    "content": {
      "about": "Esta calculadora de puntos de fantasy convierte las estadísticas de un partido de un jugador en un total de puntos para críquet, fútbol o baloncesto. Parte de un conjunto sencillo de reglas de puntuación ilustrativas para cada deporte, y cada regla se puede cambiar para que coincida con la liga en la que juegas. Tus reglas personalizadas se pueden guardar en este navegador para que se carguen la próxima vez. El resultado incluye un desglose línea a línea que muestra cada estadística, su valor y su subtotal, para que veas de dónde salen exactamente los puntos. La herramienta sirve para ligas de fantasy de toda la temporada o casuales entre amigos; no ofrece predicciones, cuotas ni nada relacionado con las apuestas.",
      "howTo": [
        "Elige críquet, fútbol o baloncesto.",
        "Escribe las cifras del jugador en un partido, como carreras, wickets, goles o rebotes. Deja una estadística en blanco si no aplica.",
        "Pulsa Editar reglas de puntuación para cambiar los puntos de cualquier estadística y que coincidan con las reglas de tu liga; luego pulsa Guardar reglas personalizadas si quieres que se recuerden en este dispositivo.",
        "Lee el total y la tabla de desglose. Usa Copiar desglose para pegarlo en el chat de la liga, o Borrar estadísticas para empezar con el siguiente jugador."
      ],
      "features": [
        "Tres deportes con conjuntos de reglas aparte, editables por estadística.",
        "Puntos negativos por cosas como ducks, tarjetas, goles en propia puerta y pérdidas de balón.",
        "Valores decimales de puntuación, como 1,2 puntos por rebote.",
        "Reglas personalizadas guardadas solo en el localStorage de tu navegador, con un restablecimiento a los valores predeterminados de un clic.",
        "Una tabla de desglose y un resumen de texto que se puede copiar."
      ],
      "examples": [
        {
          "title": "Críquet: un all-rounder bateador",
          "body": "Con las reglas predeterminadas, un jugador que anota 45 carreras con 4 cuatros y 2 seises, toma 1 wicket y sostiene 1 catch suma 45 + 4 + 4 + 25 + 8 = 86 puntos. El bono por cuatro es de 1 punto cada uno y el bono por seis es de 2 puntos cada uno, además de las carreras."
        },
        {
          "title": "Fútbol: un gol con una amonestación",
          "body": "Un delantero con 1 gol, 1 asistencia, 3 tiros a puerta y 1 tarjeta amarilla suma 5 + 3 + 3 − 1 = 10 puntos con los valores predeterminados. Si tu liga otorga 6 puntos por un gol de un mediocampista, cambia el valor del gol a 6 antes de escribir ese jugador."
        },
        {
          "title": "Baloncesto: un doble-doble",
          "body": "Un base con 22 puntos, 10 rebotes, 11 asistencias, 2 robos, 1 tapón y 4 pérdidas suma 22 + 12 + 16,5 + 6 + 3 − 4 = 55,5 puntos de fantasy con las reglas predeterminadas."
        }
      ],
      "explanation": "La puntuación de fantasy es una suma ponderada. Cada estadística se multiplica por los puntos que tu liga da por una unidad, y los productos se suman. La calculadora aplica exactamente esa regla y nada más, así que la respuesta solo es tan precisa como las reglas que escribes.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "Para cada estadística con un valor, el subtotal = cantidad × puntos por unidad. El total es la suma de todos los subtotales, redondeada a dos decimales para evitar el ruido de coma flotante, como 3,5999999. Se omiten las estadísticas en blanco, y los ceros no suman nada. Las cantidades no pueden ser negativas, pero los puntos por unidad sí, que es como se puntúan las penalizaciones.",
            "Las reglas de bono que dependen de umbrales, como un bono por 50 carreras, un bono por hat-trick o un bono por triple-doble, no están incluidas, porque las ligas fijan esos umbrales de formas muy distintas. Calcúlalos a partir de la hoja de estadísticas y súmalos a mano al total copiado, para que el desglose conserve claras las líneas por estadística y el bono quede visible como un ajuste aparte."
          ]
        },
        {
          "heading": "Sobre las reglas predeterminadas",
          "paragraphs": [
            "Los valores predeterminados son un punto de partida neutro escrito para esta herramienta. No son el sistema oficial de puntuación de ninguna plataforma, liga o competición de fantasy, y no se copiaron de una. Las plataformas cambian sus reglas de una temporada a otra y a menudo puntúan de forma distinta según el rol del jugador, el formato del partido o la competición. Antes de confiar en un total, abre la página de puntuación de tu liga y copia esos valores en el editor de reglas.",
            "Valores predeterminados de críquet: 1 por carrera, 1 extra por cuatro, 2 extra por seis, 25 por wicket, 8 por over de maiden, 8 por catch, 12 por stumping y −2 por un duck. Valores predeterminados de fútbol: 5 por gol, 3 por asistencia, 4 por portería a cero, 1 por tiro a puerta, 1 por atajada, −1 por tarjeta amarilla, −3 por tarjeta roja y −2 por gol en propia puerta. Valores predeterminados de baloncesto: 1 por punto, 1,2 por rebote, 1,5 por asistencia, 3 por robo, 3 por tapón y −1 por pérdida."
          ]
        },
        {
          "heading": "Cómo leer el desglose",
          "paragraphs": [
            "Cada fila de la tabla muestra la estadística, cuántas veces ocurrió, los puntos por una y el subtotal. Las filas con un subtotal negativo se muestran en rojo para que las penalizaciones se vean fácilmente. Si un total parece incorrecto, la causa casi siempre es una fila: una estadística escrita en el recuadro equivocado, un valor de regla distinto al de tu liga, o un bono que tu liga da y que este conjunto de reglas no incluye.",
            "Cuando dos personas de una liga no coinciden en un marcador, pega el desglose copiado en el chat. Cualquiera puede entonces comprobar la aritmética línea a línea con la hoja oficial de estadísticas."
          ]
        },
        {
          "heading": "Cómo funciona el guardado",
          "paragraphs": [
            "Guardar reglas personalizadas escribe tus valores del deporte seleccionado en el localStorage de tu navegador, bajo una clave de ese deporte. No se envía nada a un servidor. Borrar los datos del sitio, usar una ventana privada o cambiar de navegador elimina las reglas guardadas. Restablecer a los valores predeterminados borra la copia guardada y restaura los valores ilustrativos."
          ]
        },
        {
          "heading": "Usarla de forma justa",
          "paragraphs": [
            "La calculadora ayuda a resolver un marcador o a comprobar las cuentas de una liga después de un partido. No califica jugadores, no pronostica el rendimiento ni sugiere elecciones, y no debe usarse para apostar. Si juegas concursos con entrada de pago, sigue las leyes del lugar donde vives y los términos de la propia plataforma."
          ]
        }
      ],
      "tips": [
        "Escribe las estadísticas a partir de una hoja oficial o un scorecard, no de memoria.",
        "Guarda un conjunto de reglas por deporte. Si juegas dos ligas de fútbol con reglas distintas, anota el segundo conjunto o restablece entre una y otra.",
        "Comprueba si tu liga puntúa las carreras por carrera o solo el bono por boundary, porque eso cambia mucho los totales de críquet.",
        "Usa Copiar desglose cuando un compañero de liga cuestione un marcador; las partidas hacen fácil comprobar la aritmética."
      ],
      "limitations": "La herramienta puntúa a un jugador a la vez con puntos fijos por unidad. No admite reglas según el rol, bonos por umbral, franjas de strike rate o economy rate, multiplicadores de capitán, totales de equipo ni importaciones automáticas de estadísticas. Las reglas guardadas se quedan en un solo navegador. Las reglas predeterminadas son solo ilustrativas, así que los totales diferirán de cualquier plataforma a menos que escribas los valores de esa plataforma.",
      "faqs": [
        {
          "question": "¿Los puntos predeterminados son los mismos que en Dream11, FPL o ESPN?",
          "answer": "No. Los valores predeterminados son ilustrativos y se escribieron para esta herramienta. Sustitúyelos por las reglas de puntuación publicadas de tu plataforma o liga para obtener un total coincidente."
        },
        {
          "question": "¿Puedo cambiar los puntos de cada estadística?",
          "answer": "Sí. Pulsa Editar reglas de puntuación, escribe un valor nuevo para cualquier estadística y el total se actualiza enseguida. Se admiten valores negativos y decimales."
        },
        {
          "question": "¿Dónde se guardan mis reglas personalizadas?",
          "answer": "En el localStorage de tu navegador, un conjunto por deporte. Nunca salen de tu dispositivo y se eliminan si borras los datos del sitio."
        },
        {
          "question": "¿Cómo puntúo una penalización como una tarjeta roja?",
          "answer": "Asigna a esa estadística un valor de puntos negativo y luego escribe cuántas veces ocurrió. El desglose muestra el subtotal en rojo."
        },
        {
          "question": "¿Puedo escribir una cantidad negativa de una estadística?",
          "answer": "No. Las cantidades deben ser cero o más. Usa un valor de puntos negativo para las penalizaciones."
        },
        {
          "question": "¿Admite multiplicadores de capitán o vicecapitán?",
          "answer": "No de forma directa. Multiplica tú el total final, por ejemplo por 2 para un capitán, o escala todas las reglas por el mismo factor antes de escribir las estadísticas."
        },
        {
          "question": "¿Puedo calcular un equipo entero?",
          "answer": "Puntúa a un jugador a la vez, copia cada desglose y suma los totales. Todavía no hay un modo de equipo completo."
        },
        {
          "question": "¿Es una herramienta de apuestas?",
          "answer": "No. Solo hace aritmética con las estadísticas que escribes. No da cuotas, elecciones ni predicciones."
        },
        {
          "question": "¿Por qué mi total es un decimal?",
          "answer": "Algunas reglas, como 1,2 puntos por rebote o 1,5 por asistencia, producen fracciones. Los totales se redondean a dos decimales."
        },
        {
          "question": "¿Cómo puntúo a un jugador que cambió de equipo a mitad de semana?",
          "answer": "Usa las estadísticas del partido que estás puntuando; la identidad del equipo no cambia la aritmética."
        },
        {
          "question": "¿Puedo guardar varias plantillas de puntuación?",
          "answer": "Las reglas personalizadas suelen quedarse en el almacenamiento local de este navegador; exporta notas si necesitas la misma hoja en otro sitio."
        },
        {
          "question": "¿Las asistencias y los goles se cuentan dos veces alguna vez?",
          "answer": "Solo si la hoja de tu liga otorga ambos; escribe cada categoría como la definan tus reglas."
        },
        {
          "question": "¿Cómo debo tratar los partidos anulados o aplazados?",
          "answer": "Deja esas estadísticas en cero hasta que se publiquen los resultados oficiales y luego vuelve a calcular."
        },
        {
          "question": "¿La puntuación decimal admite medios puntos?",
          "answer": "Sí: escribe valores fraccionarios cuando tu liga otorgue 0,5 en categorías como tiros o tackles."
        },
        {
          "question": "¿La herramienta distingue entre el banquillo y la alineación titular?",
          "answer": "Tú eliges qué jugadores escribir; no lee las alineaciones oficiales de forma automática."
        },
        {
          "question": "¿Cómo comparo rápido dos sistemas de puntuación?",
          "answer": "Pasa las mismas estadísticas en bruto por cada conjunto de reglas y anota la diferencia de totales."
        },
        {
          "question": "¿Los puntos defensivos son independientes del deporte?",
          "answer": "Las etiquetas son genéricas: asigna las categorías de tackle, rebote o wicket de tu liga a los campos que edites."
        },
        {
          "question": "¿Y si una liga limita los puntos de una categoría?",
          "answer": "Aplica el tope a mano antes o después de escribir los datos para que el total respete el reglamento."
        },
        {
          "question": "¿Puedo usarla para proyecciones de toda la temporada?",
          "answer": "Suma las estadísticas que escribes; las proyecciones necesitan que tú supongas las estadísticas de recuento como entradas."
        },
        {
          "question": "¿Se sincroniza con las API de las ligas?",
          "answer": "No: pega o escribe tú las estadísticas para que las ligas privadas se queden sin conexión."
        }
      ]
    },
    "metaDescription": "Calcula puntos de fantasy de críquet, fútbol y baloncesto con las estadísticas del partido, reglas editables guardadas en tu navegador y un desglose.",
    "ui": {}
  },
  "graduation-calculator-by-birthday": {
    "answer": "Halla el primer año en que un niño alcanza la edad de ingreso en la fecha límite y luego suma los años de escuela menos uno. Con 5 años al 1 de septiembre y 13 años de estudio, un niño nacido el 20 de agosto de 2020 se gradúa en junio de 2038.",
    "content": {
      "about": "Esta calculadora de graduación por fecha de nacimiento calcula cuándo es probable que un niño empiece la escuela y el año en que terminaría, con las reglas que tú fijas en lugar de adivinar. Escribes una fecha de nacimiento, la edad que el niño debe haber alcanzado en una fecha límite, el mes en que empieza y termina el año académico, y cuántos años dura la escuela. La calculadora muestra entonces el primer año escolar, cada hito y el año de graduación, más el final de los años de universidad o estudios superiores que añadas. Si el estudiante ya está en la escuela, puedes escribir su año actual y contar hacia adelante desde ahí. Cada supuesto del que depende la respuesta aparece junto al resultado.",
      "howTo": [
        "Escribe la fecha de nacimiento.",
        "Fija la edad de ingreso escolar y la fecha límite que usa tu distrito, estado o país. Los valores predeterminados son 5 años al 1 de septiembre, un año académico de septiembre a junio y 13 años de escuela, lo que coincide con muchos sistemas de kindergarten a grado 12 de Estados Unidos.",
        "Cambia el número de años de escuela y añade cualquier año de estudio posterior, como 4 para una licenciatura.",
        "Si el estudiante ya está inscrito, marca la opción de nivel actual y escribe el año de inicio de este año académico y su número de año actual.",
        "Pulsa Calcular año de graduación, lee las tarjetas de la cronología y los supuestos, y copia la cronología si la necesitas."
      ],
      "features": [
        "Edad de ingreso y día y mes de la fecha límite configurables.",
        "Años académicos que abarcan dos años de calendario, etiquetados como 2030–31, o que caben en un solo año de calendario.",
        "Modo opcional de nivel actual para estudiantes que ya están en la escuela.",
        "Duraciones aparte de la escuela y de los estudios posteriores.",
        "Tarjetas de cronología con el año académico, el mes de fin y la edad del estudiante en ese momento.",
        "Los cumpleaños en día bisiesto se tratan de forma explícita."
      ],
      "examples": [
        {
          "title": "Nacido justo antes de una fecha límite del 1 de septiembre",
          "body": "Un niño nacido el 20 de agosto de 2020 cumple 5 años el 20 de agosto de 2025, antes de la fecha límite del 1 de septiembre, así que empieza la escuela en el año académico 2025–26. Con 13 años de escuela, el año final es 2037–38 y la graduación es en junio de 2038."
        },
        {
          "title": "Nacido el día después de la fecha límite",
          "body": "Un niño nacido el 2 de septiembre de 2015 sigue teniendo 4 años el 1 de septiembre de 2020, así que la calculadora mueve el ingreso a 2021–22. Trece años después, el año final es 2033–34 y la graduación es en junio de 2034, un año más tarde que un niño nacido un solo día antes."
        },
        {
          "title": "Un sistema escolar de año de calendario",
          "body": "Pon el año académico para que empiece en enero y termine en diciembre, la fecha límite el 30 de junio, la edad de ingreso en 5 y 12 años de escuela. Un niño nacido el 10 de marzo de 2015 tiene 5 años el 30 de junio de 2020, así que la escuela empieza en 2020 y el año final es 2031, con graduación en diciembre de 2031."
        },
        {
          "title": "Ya está en la escuela",
          "body": "Un estudiante en el año 6 durante el año académico que empieza en septiembre de 2026, en un sistema de 13 años, empezó en 2021–22 y termina en junio de 2034. Añadir 4 años de universidad sitúa la finalización prevista del título en 2038."
        }
      ],
      "explanation": "Las reglas de ingreso escolar suelen redactarse como una edad en una fecha: un niño puede empezar si ha alcanzado cierta edad en la fecha límite o antes. La calculadora comprueba cada año por turno y elige el primer año en el que la edad del niño en la fecha límite de ese año es al menos la edad de ingreso. A partir de ahí, la graduación es cuestión de contar años académicos.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "La edad en una fecha es la diferencia en años, menos uno si el cumpleaños aún no ha ocurrido ese año. Un cumpleaños en la fecha límite cuenta como alcanzado. Un cumpleaños del 29 de febrero se trata como alcanzado el 1 de marzo en los años sin día bisiesto, que es la convención legal habitual, y una fecha límite del 29 de febrero pasa al 28 de febrero en esos años.",
            "Año de ingreso: el primer año de calendario Y para el que la edad en la fecha límite de Y es al menos la edad de ingreso. Cuando el año académico empieza en un mes posterior a la fecha límite, como con una fecha límite del 1 de septiembre y un inicio en septiembre, ese año académico empieza en Y. El año académico se etiqueta Y–(Y+1) cuando el mes de fin va antes del mes de inicio, y solo Y cuando no es así.",
            "Graduación escolar: el último año escolar empieza en Y + años de escuela − 1, y la graduación ocurre en su mes de fin, que cae en el siguiente año de calendario si el año está partido. Los estudios posteriores, cuando los añades, terminan ese número de años académicos más tarde.",
            "El modo de nivel actual trabaja hacia atrás y hacia adelante desde el año que escribes: el año de ingreso es el año de inicio actual menos (número de año actual − 1), y la graduación se cuenta hacia adelante desde ahí. En este modo no se usa la regla de ingreso, lo que conviene a estudiantes que empezaron pronto, se quedaron un año o se saltaron un año."
          ]
        },
        {
          "heading": "Supuestos que se muestran con cada resultado",
          "paragraphs": [
            "La calculadora enumera la edad de ingreso, la fecha límite, el calendario académico, el número de años y si se usó el nivel actual. Estos son datos de entrada, no hechos sobre una escuela concreta. Si alguno difiere en tu distrito, cambia el dato y vuelve a calcular."
          ]
        },
        {
          "heading": "Por qué las reglas difieren",
          "paragraphs": [
            "Las edades de ingreso y las fechas límite varían entre países, estados y a veces distritos. Algunos sistemas cuentan desde un año de kindergarten y otros desde un primer grado o una clase de recepción, y algunos permiten un ingreso anticipado o retrasado. Las escuelas del hemisferio norte suelen empezar en agosto o septiembre, mientras que muchos sistemas del hemisferio sur empiezan en enero o febrero. En lugar de guardar reglas de todos los sistemas, que cambian con el tiempo, esta herramienta te deja escribir la regla que te aplica y etiqueta el resultado con esos ajustes."
          ]
        }
      ],
      "tips": [
        "Consulta la edad de ingreso y la fecha límite de tu distrito en su página de inscripción antes de confiar en el resultado.",
        "Cuenta con cuidado los años que quieres incluir: 13 para el sistema K–12 de Estados Unidos, 12 si empiezas en primer grado.",
        "Usa el modo de nivel actual para estudiantes que se quedaron un año o se adelantaron.",
        "Ejecuta la calculadora dos veces con fechas límite distintas si una familia puede mudarse entre sistemas."
      ],
      "limitations": "La herramienta no conoce la política real de ninguna escuela. No modela evaluaciones de ingreso anticipado, retrasos voluntarios, saltos de grado, años repetidos, años sabáticos, estudio a tiempo parcial ni ingresos a mitad de año. Los años de estudio posterior se cuentan como años académicos completos con el mismo patrón de calendario que la escuela. Las fechas son fechas de calendario sin zonas horarias, y el resultado es una estimación para planificar, no una decisión de inscripción.",
      "faqs": [
        {
          "question": "¿Cómo calculo el año de graduación de mi hijo a partir de su fecha de nacimiento?",
          "answer": "Halla el primer año en que cumple la edad de ingreso en la fecha límite y luego suma el número de años de escuela menos uno para obtener el año final. Esta calculadora hace ambos pasos y muestra el resultado."
        },
        {
          "question": "¿Qué fecha límite debo usar?",
          "answer": "Usa la fecha que tu distrito o país publica para el ingreso escolar. El 1 de septiembre es habitual en Estados Unidos, pero en muchos lugares se usan otras fechas, así que consulta la página oficial de inscripción."
        },
        {
          "question": "¿Y si el cumpleaños cae exactamente en la fecha límite?",
          "answer": "Se considera que el niño ha alcanzado la edad ese día, así que ingresa ese año."
        },
        {
          "question": "¿Cómo se tratan los cumpleaños del 29 de febrero?",
          "answer": "En los años sin 29 de febrero, el cumpleaños se trata como el 1 de marzo. Por tanto, una fecha límite del 28 de febrero no cuenta a un niño nacido el 29 de febrero como un año mayor hasta el día siguiente."
        },
        {
          "question": "¿Por qué el año de graduación difiere del año de la promoción de mi escuela?",
          "answer": "Tu escuela puede usar otra edad de ingreso, fecha límite, número de años o calendario. Ajusta esos datos, o usa la opción de nivel actual si el estudiante ya está inscrito."
        },
        {
          "question": "¿Puedo usarla en países fuera de Estados Unidos?",
          "answer": "Sí. Fija la edad de ingreso, la fecha límite, los meses de inicio y fin del año académico y el número de años para que coincidan con tu sistema."
        },
        {
          "question": "¿Qué significa una etiqueta de año académico como 2030–31?",
          "answer": "Es un año escolar que empieza en un año de calendario y termina en el siguiente, como de septiembre de 2030 a junio de 2031."
        },
        {
          "question": "¿Puede incluir la universidad?",
          "answer": "Sí. Escribe el número de años de estudio posterior y la cronología añade una tarjeta final para cuando terminarían esos estudios."
        },
        {
          "question": "¿El resultado está garantizado?",
          "answer": "No. Es una estimación para planificar basada en los datos que das. Las escuelas deciden la colocación, y las políticas cambian."
        },
        {
          "question": "¿Cómo cambian el resultado las decisiones de retrasar el kindergarten?",
          "answer": "Retrasar el kindergarten desplaza hacia adelante cada año posterior de graduación; ajusta el año de inicio para que coincida con el retraso."
        },
        {
          "question": "¿Debo usar la fecha límite publicada de la escuela o el valor predeterminado del estado?",
          "answer": "Prefiere la fecha límite del distrito o de la escuela cuando publiquen una; los valores predeterminados del estado son solo un respaldo."
        },
        {
          "question": "¿Los cumpleaños de verano pueden caer en distintas cohortes según el distrito?",
          "answer": "Sí: las diferencias en el mes de la fecha límite mueven a los niños de julio y agosto entre años de promoción."
        },
        {
          "question": "¿La herramienta supone un recorrido K–12 de 12 años?",
          "answer": "Se modelan recorridos típicos de Estados Unidos; confirma si tu sistema usa estructuras de años intermedios o grados repetidos."
        },
        {
          "question": "¿Cómo afectan los saltos de grado al año de graduación?",
          "answer": "Saltar un grado suele adelantar la graduación un año: desplaza el resultado en consecuencia."
        },
        {
          "question": "¿Y si mi hijo primero asistió a la escuela en el extranjero?",
          "answer": "Asocia su edad al grado de ingreso local y luego proyecta hacia adelante con las fechas límite del nuevo sistema."
        },
        {
          "question": "¿Se cubren recorridos de GED o de universidad anticipada?",
          "answer": "No: esas cronologías alternativas necesitan la orientación de un consejero, más allá de la aritmética de la fecha de nacimiento."
        },
        {
          "question": "¿Puedo estimar el año de promoción universitaria a partir de la misma fecha de nacimiento?",
          "answer": "Suma cuatro años después de la graduación de la secundaria para un recorrido típico de licenciatura, sabiendo que los traslados varían."
        },
        {
          "question": "¿Por qué en casos raros los gemelos podrían tener etiquetas distintas?",
          "answer": "Las fechas de nacimiento idénticas comparten cohorte; un inicio retrasado distinto en preescolar es una decisión familiar, no de la calculadora."
        },
        {
          "question": "¿La etiqueta del año académico incluye la escuela de verano?",
          "answer": "Las etiquetas marcan el intervalo del año escolar; las sesiones de verano no suelen cambiar por sí solas el año de la cohorte."
        },
        {
          "question": "¿Cómo se deben tratar los traslados a mitad de año?",
          "answer": "Pregunta a la nueva escuela en qué cohorte coloca al estudiante: la política prevalece sobre una regla genérica de fecha de nacimiento."
        }
      ]
    },
    "metaDescription": "Estima el inicio escolar y el año de graduación desde la fecha de nacimiento, con la edad de ingreso, la fecha límite, el calendario y los años de estudio.",
    "ui": {}
  },
  "unemployment-benefits-calculator": {
    "answer": "La mayoría de los estados basan el pago semanal de desempleo en tu trimestre de mayores ingresos, dividido por una cifra fija y con un tope. Esta estimación cubre solo California, Nueva York, Texas y Florida, con fuentes oficiales; la agencia estatal decide el importe real.",
    "content": {
      "about": "Esta calculadora de prestaciones por desempleo estima una prestación semanal ordinaria y lo máximo que podrías recibir en una solicitud, usando la fórmula publicada del estado que elijas. Solo cubre los estados cuyas reglas hemos comprobado en las propias páginas de la agencia estatal: California, Nueva York, Texas y Florida. Cada uno muestra su fórmula, sus importes semanales mínimo y máximo, sus enlaces a las fuentes y la fecha en que se comprobaron las reglas por última vez. Si eliges cualquier otro estado, la calculadora indica con claridad que aún no está admitido y te dirige al directorio oficial de agencias, en lugar de adivinar. Toda la operación se ejecuta en tu navegador, y el resultado es una estimación, no una decisión sobre tu solicitud.",
      "howTo": [
        "Elige tu estado. Solo se pueden calcular los estados comprobados; los demás muestran un mensaje de no admitido.",
        "Busca los salarios del periodo base. La mayoría de los estados usan los primeros cuatro de los últimos cinco trimestres civiles completos antes de presentar la solicitud. Tus recibos de sueldo, los formularios W-2 o la carta de determinación monetaria del estado recogen estos importes.",
        "Escribe los salarios brutos de cada uno de los cuatro trimestres, antes de impuestos. Usa 0 en un trimestre sin ingresos. El orden no importa, porque la calculadora encuentra el trimestre más alto.",
        "Pulsa Estimar prestaciones. Lee el importe semanal, el total de la solicitud, el número de semanas y cada paso de la fórmula.",
        "Compara la estimación con el aviso oficial que recibas después de presentar la solicitud, que es la cifra que el estado pagará de verdad."
      ],
      "examples": [
        {
          "title": "California: un trabajador a tiempo parcial durante parte del año",
          "body": "Salarios del periodo base de 5200 $, 0 $, 0 $ y 0 $ dan un trimestre alto de 5200 $. La tabla de California equivale, a este nivel, al trimestre alto ÷ 26, así que el importe semanal es 200 $. El total de la solicitud es el menor entre 26 × 200 $ = 5200 $ o la mitad de los salarios del periodo base, 2600 $, así que la solicitud vale 2600 $, unas 13 semanas."
        },
        {
          "title": "California: alcanzar el máximo",
          "body": "Trimestres de 12 000 $, 11 000 $, 9000 $ y 8000 $ dan 12 000 $ ÷ 26 = 462 $, que está por encima del máximo de 450 $, así que el importe semanal es 450 $. La mitad del periodo base de 40 000 $ es más que 26 × 450 $ = 11 700 $, así que están disponibles las 26 semanas completas."
        },
        {
          "title": "Nueva York: salarios en los cuatro trimestres",
          "body": "Trimestres de 9100 $, 8000 $, 7000 $ y 6000 $ dan un trimestre alto de 9100 $, que supera los 3575 $, así que el importe semanal es 9100 $ ÷ 26 = 350 $, por debajo del máximo de 869 $. Hasta 26 semanas dan 9100 $ en total."
        },
        {
          "title": "Texas: el límite del 27 %",
          "body": "Trimestres de 10 000 $, 8000 $, 7000 $ y 5000 $: 10 000 $ ÷ 25 = 400 $ a la semana. El total de la solicitud es el menor entre 26 × 400 $ = 10 400 $ o el 27 % de 30 000 $ = 8100 $, así que la solicitud es de 8100 $, un poco más de 20 semanas de pagos completos."
        },
        {
          "title": "Florida: el propio ejemplo de la agencia",
          "body": "La FAQ para solicitantes de FloridaCommerce usa trimestres de 0 $, 6317,03 $, 4712,63 $ y 765,17 $. El trimestre alto ÷ 26 es 242,96 $, redondeado a la baja a 242 $. El total de la solicitud es el menor entre el 25 % de 11 794,83 $, que es 2948 $, o 3300 $, así que la solicitud es de 2948 $."
        }
      ],
      "explanation": "Cada estado paga el seguro de desempleo según su propia ley, así que no hay una sola fórmula nacional. La mayoría parte de tus salarios en un periodo base de cuatro trimestres civiles y fija el importe semanal a partir de tu mejor trimestre; luego aplica un suelo y un techo. Muchos también limitan el total que puedes cobrar en una solicitud. La calculadora sigue, paso a paso, el método publicado de cada estado admitido.",
      "limitations": "Solo están admitidos California, Nueva York, Texas y Florida, con reglas comprobadas el 2 de noviembre de 2026. La calculadora modela únicamente la fórmula monetaria de las prestaciones estatales ordinarias. No decide la elegibilidad, no aplica reglas no monetarias, no incluye ingresos de semanas parciales, deducciones, impuestos, pagos en exceso ni programas ampliados, ni hace un seguimiento de los cambios legales posteriores a la fecha de la última comprobación. Las fuentes de Nueva York muestran suelos ligeramente distintos en documentos distintos, así que la herramienta aplica el suelo publicado de 143 $ para los métodos de ÷ 26 y un mínimo general de 140 $. Aviso: esta es una estimación educativa, no un asesoramiento legal ni financiero. Solo la agencia de desempleo de tu estado puede determinar si cumples los requisitos y cuánto recibirás.",
      "tips": [
        "Usa los salarios brutos de los trimestres que emplea el estado, no el sueldo que te queda en mano.",
        "Si trabajaste en más de un estado, contacta con las agencias; los salarios pueden combinarse en una sola solicitud.",
        "Presenta la solicitud en cuanto te quedes sin trabajo. La estimación no es una solicitud, y la mayoría de los estados no pagan nada por las semanas anteriores a la presentación.",
        "Conserva la carta de determinación monetaria. Si tus salarios aparecen mal, la carta explica cómo pedir una corrección."
      ],
      "features": [
        "Fórmulas por estado para California, Nueva York, Texas y Florida, cada una con enlaces a fuentes oficiales y una fecha de última comprobación.",
        "Comprobaciones de elegibilidad monetaria según las pruebas de salarios que publica cada estado.",
        "Importes semanales mínimo y máximo aplicados de forma automática, con un paso que indica cuándo se usó un tope.",
        "El total de la solicitud y el número de semanas completas que cubre.",
        "Un mensaje claro de no admitido para cualquier otro estado y para el Distrito de Columbia."
      ],
      "sections": [
        {
          "heading": "Método de cálculo por estado",
          "paragraphs": [
            "California (EDD). Para cualificar necesitas al menos 1300 $ en el trimestre alto, o al menos 900 $ en el trimestre alto con salarios totales del periodo base de al menos 1,25 veces ese trimestre. Por debajo de 1833 $ de salarios del trimestre alto, el importe semanal se lee en la tabla de prestaciones del EDD. A partir de 1833 $ equivale al trimestre alto ÷ 26, redondeado al alza a un dólar entero. El importe semanal se mantiene entre 40 $ y 450 $. El total de la solicitud es el menor entre 26 × el importe semanal o la mitad de los salarios del periodo base.",
            "Nueva York (Department of Labor). Para las solicitudes presentadas en 2026 necesitas salarios en al menos dos trimestres, al menos 3500 $ en un trimestre, y salarios totales de al menos 1,5 veces el trimestre alto. Si el trimestre alto es de 19 118 $ o más, los otros tres trimestres deben sumar al menos 9559 $ en su lugar. Con salarios en los cuatro trimestres, el importe semanal es el trimestre alto ÷ 26 cuando el trimestre alto supera los 3575 $, o ÷ 25 cuando es de 3575 $ o menos. Con salarios en solo dos o tres trimestres y un trimestre alto de más de 4000 $, es el promedio de los dos trimestres más altos ÷ 26. El importe se mantiene entre 140 $ y 869 $, y se pueden pagar hasta 26 semanas.",
            "Texas (TWC). El importe semanal es el trimestre alto ÷ 25, redondeado al dólar más cercano, y se mantiene entre 76 $ y 619 $ para las solicitudes con efecto a partir del 4 de octubre de 2026. El total de la solicitud es el menor entre 26 × el importe semanal o el 27 % de los salarios del periodo base.",
            "Florida (FloridaCommerce). Necesitas salarios en al menos dos trimestres, al menos 3400 $ en el periodo base, y salarios totales de al menos 1,5 veces el trimestre alto. El importe semanal es el trimestre alto ÷ 26, redondeado a la baja, y se mantiene entre 32 $ y 275 $. El total de la solicitud es el menor entre el 25 % de los salarios del periodo base o 3300 $, y las solicitudes presentadas en 2025 y 2026 duran hasta 12 semanas. Florida fija esa duración cada año a partir de la tasa de desempleo estatal, entre 12 y 23 semanas.",
            "Cuando se han hallado el importe semanal y el total de la solicitud, el número de semanas completas que se muestra es el total de la solicitud ÷ el importe semanal, redondeado a la baja y limitado al número máximo de semanas del estado."
          ]
        },
        {
          "heading": "Periodo base y periodo base alternativo",
          "paragraphs": [
            "El periodo base es la ventana de ingresos que examina el estado. Para una solicitud presentada en noviembre de 2026, el periodo base habitual en estos cuatro estados va del 1 de julio de 2025 al 30 de junio de 2026, porque se omite el trimestre completo más reciente (julio a septiembre de 2026). California y Nueva York también ofrecen un periodo base alternativo de los últimos cuatro trimestres completos si no cualificas con el habitual. Escribe el conjunto de cuatro trimestres que el estado usó o usará en tu caso."
          ]
        },
        {
          "heading": "Lo que la estimación deja fuera",
          "paragraphs": [
            "La elegibilidad monetaria es solo la mitad de una solicitud. Los estados también comprueban por qué te quedaste sin trabajo, si estás en condiciones y disponible para trabajar, y si buscas trabajo cada semana. Una separación por mala conducta o una dimisión sin una causa justificada pueden llevar a una denegación incluso cuando los salarios son suficientemente altos. Los ingresos parciales mientras cobras, la indemnización, las pensiones y otros ingresos pueden reducir los pagos semanales. Las prestaciones son renta federal gravable, y algunos estados retienen el impuesto estatal si lo pides.",
            "No se incluyen los programas ampliados o de emergencia, que solo están disponibles en algunas condiciones económicas. Tampoco las reglas de horas de desempleo parcial de Nueva York, el seguro de discapacidad de California ni cualquier otro programa gestionado por las mismas agencias."
          ]
        },
        {
          "heading": "Por qué aún no se admiten otros estados",
          "paragraphs": [
            "La fórmula, el mínimo, el máximo y la duración de cada estado pueden cambiar por ley o por un ajuste anual, a veces más de una vez al año. Algunos estados añaden complementos por dependientes o usan promedios de varios trimestres. Publicar una cifra de un estado que no hemos comprobado podría inducir a error a quien esté decidiendo cómo presupuestar, así que la calculadora solo cubre los estados cuyas páginas oficiales hemos leído y registrado con una fecha. Se añadirán más estados solo después de la misma comprobación."
          ]
        },
        {
          "heading": "Cómo se mantienen actualizadas las reglas",
          "paragraphs": [
            "Cada estado admitido guarda su agencia, fórmula, importes semanales mínimo y máximo, duración, fecha de entrada en vigor, URL de las fuentes y la fecha de la última comprobación. Esos detalles aparecen bajo el formulario del estado que selecciones, para que puedas abrir la fuente y confirmar las cifras tú mismo. Si una cifra del sitio de la agencia difiere de la que aparece aquí, la cifra de la agencia es la correcta."
          ]
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo se calcula mi prestación semanal de desempleo?",
          "answer": "La mayoría de los estados toman tu trimestre de mayores ingresos del periodo base y lo dividen por un número fijo, como 25 o 26, y luego aplican un mínimo y un máximo. La fórmula varía según el estado, así que elige el tuyo para ver los pasos exactos."
        },
        {
          "question": "¿Qué estados admite esta calculadora?",
          "answer": "California, Nueva York, Texas y Florida. Cada uno se comprobó con las propias páginas de la agencia estatal, y los enlaces a las fuentes y la fecha de la última comprobación se muestran bajo el formulario."
        },
        {
          "question": "¿Por qué no se admite mi estado?",
          "answer": "Solo publicamos los estados cuyas reglas vigentes hemos verificado en fuentes oficiales. Para cualquier otro estado, usa el estimador de la propia agencia o llama a la agencia. CareerOneStop enumera todas las agencias estatales."
        },
        {
          "question": "¿Cuál es la prestación semanal máxima en estos estados?",
          "answer": "Según la última comprobación: California 450 $, Nueva York 869 $, Texas 619 $ (solicitudes con efecto a partir del 4 de octubre de 2026) y Florida 275 $."
        },
        {
          "question": "¿Durante cuántas semanas puedo recibir prestaciones?",
          "answer": "Hasta 26 semanas en California, Nueva York y Texas, sujeto al límite del total de la solicitud de cada estado, y 12 semanas para las solicitudes de Florida presentadas en 2025 o 2026."
        },
        {
          "question": "¿Qué salarios debo escribir?",
          "answer": "Los salarios brutos de cada trimestre del periodo base, por lo general los primeros cuatro de los últimos cinco trimestres civiles completos antes de presentar la solicitud."
        },
        {
          "question": "¿La estimación incluye impuestos?",
          "answer": "No. Las prestaciones de desempleo son renta federal gravable. La estimación es el importe bruto, antes de cualquier retención."
        },
        {
          "question": "¿Por qué la estimación dice que puede que no cualifique?",
          "answer": "Los salarios que escribiste no cumplieron una de las pruebas de salarios publicadas por el estado. El mensaje nombra la prueba. Aun así puedes cualificar con un periodo base alternativo, así que consúltalo con la agencia."
        },
        {
          "question": "¿Esta estimación es oficial?",
          "answer": "No. Es una estimación educativa. La agencia estatal emite la determinación oficial después de que presentes una solicitud."
        },
        {
          "question": "¿Se envían mis salarios a algún sitio?",
          "answer": "No. El cálculo se ejecuta en tu navegador y nada de lo que escribas se guarda ni se envía a un servidor."
        },
        {
          "question": "¿Qué es un periodo base en las solicitudes de desempleo?",
          "answer": "Es la ventana de salarios pasados que tu estado usa para valorar la elegibilidad monetaria: a menudo los primeros cuatro de los últimos cinco trimestres completos."
        },
        {
          "question": "¿Los pagos de indemnización retrasan las prestaciones?",
          "answer": "Algunos estados aplazan semanas mientras la indemnización cubre salarios; consulta las reglas locales más allá de esta estimación."
        },
        {
          "question": "¿Cómo debo escribir ingresos de trabajo esporádico o del formulario 1099?",
          "answer": "Incluye solo los salarios que tu estado cuenta para el seguro de desempleo; los ingresos de contratistas a menudo quedan fuera, salvo que estén cubiertos de forma especial."
        },
        {
          "question": "¿Un empleo parcial puede reducir el importe semanal?",
          "answer": "Sí: muchos estados restan los ingresos por encima de una franquicia; declara el trabajo como se exige cuando presentes la solicitud."
        },
        {
          "question": "¿Por qué los dependientes cambian algunas fórmulas estatales?",
          "answer": "Algunos programas añaden complementos por dependientes; si tu estado los admite, la estimación refleja ese conjunto de reglas."
        },
        {
          "question": "¿La prestación semanal máxima es un tope firme?",
          "answer": "Sí, en los estados enumerados: los importes basados en los ingresos dejan de subir cuando llegan al techo legal."
        },
        {
          "question": "¿Qué tan precisa es una comparación entre varios estados?",
          "answer": "Las fórmulas difieren; úsala para una planificación aproximada y luego confírmalo con la agencia donde presentes la solicitud."
        },
        {
          "question": "¿Debo escribir los recibos de sueldo brutos o netos?",
          "answer": "Usa los salarios brutos que el empleador declaró a efectos del impuesto del seguro de desempleo, no el sueldo que te queda en mano."
        },
        {
          "question": "¿Las semanas de espera aparecen en la calculadora?",
          "answer": "Algunos estados imponen una semana de espera no remunerada; los campos de duración indican las semanas pagaderas habituales, no todos los retrasos de trámite."
        },
        {
          "question": "¿Puedo apelar si la estimación no coincide con mi aviso?",
          "answer": "Sigue las instrucciones de apelación de tu carta de determinación: la herramienta es educativa, no una decisión legal."
        }
      ]
    },
    "metaDescription": "Estima el subsidio semanal y el total de la solicitud en California, Nueva York, Texas y Florida, con la fórmula y las fuentes de cada estado.",
    "ui": {}
  },
  "tdee-calculator": {
    "answer": "Una calculadora TDEE estima el gasto calórico diario a partir de la edad, el sexo, la estatura, el peso y la actividad. Esta usa Mifflin–St Jeor para el BMR, lo multiplica por un factor de actividad y luego muestra metas para mantener, perder o ganar peso, con macros sugeridos.",
    "content": {
      "about": "Esta calculadora TDEE gratuita estima cuántas calorías quemas en un día a partir de tu edad, sexo, estatura, peso y actividad. Usa la ecuación de Mifflin–St Jeor para la tasa metabólica basal (BMR), la multiplica por un factor de actividad estándar para obtener el gasto energético total diario (TDEE) y luego muestra metas calóricas de mantenimiento, pérdida y ganancia de peso, con un reparto sugerido de proteínas, carbohidratos y grasas. Todo se ejecuta en tu navegador.",
      "howTo": [
        "Elige el sistema métrico (kg, cm) o el imperial (lb, pies y pulgadas).",
        "Selecciona el sexo, escribe la edad, el peso y la estatura, y elige uno de los cinco niveles de actividad que mejor coincida con tu semana.",
        "Elige Mantener peso, Perder peso o Ganar peso.",
        "Pulsa Calcular para ver el BMR, el TDEE, las metas calóricas y los macros sugeridos. Usa Copiar resultados o Compartir resultados para guardarlos, o Restablecer para vaciar el formulario."
      ],
      "examples": [
        {
          "title": "Trabajador de escritorio sedentario, hombre, 30 años",
          "body": "Hombre, 30 años, 80 kg, 180 cm, sedentario (×1,2). El BMR es de unas 1780 kcal. El TDEE es de unas 2136 kcal. De ese TDEE se derivan una meta de pérdida cercana a 1636 kcal y una de ganancia cercana a 2436 kcal."
        },
        {
          "title": "Mujer moderadamente activa, unidades imperiales",
          "body": "Mujer, 28 años, 140 lb, 5′6″, moderadamente activa (×1,55). La calculadora convierte al sistema métrico, calcula el BMR de Mifflin–St Jeor, lo multiplica por 1,55 para el TDEE y luego muestra las calorías para mantener, perder y ganar peso, con una plantilla de macros 30/40/30 sobre la meta seleccionada."
        },
        {
          "title": "Persona muy activa que busca ganar peso",
          "body": "Elegir Muy activo (×1,725) o Extraactivo (×1,9) sube el TDEE. Con Ganar peso seleccionado, las calorías de la meta equivalen al TDEE más unas 300 kcal, y las barras de macros se actualizan a esa meta más alta."
        }
      ],
      "explanation": "El BMR es la energía que usa tu cuerpo en reposo total. Mifflin–St Jeor lo estima a partir del peso, la estatura, la edad y el sexo. El TDEE multiplica el BMR por un factor de actividad para incluir el movimiento diario y el entrenamiento. Las calorías de mantenimiento equivalen al TDEE. Un déficit habitual para una pérdida gradual es de unas 500 kcal al día; un superávit moderado para ganar es de unas 300 kcal. Los macros sugeridos aquí asignan el 30 % de las calorías de la meta a proteínas, el 40 % a carbohidratos y el 30 % a grasas.",
      "features": [
        "BMR Mifflin–St Jeor con entradas métricas e imperiales.",
        "Cinco multiplicadores de actividad, de sedentario a extraactivo.",
        "Metas calóricas para mantener, perder y ganar peso, con resaltado de la meta elegida.",
        "Gramos sugeridos de proteínas, carbohidratos y grasas, más barras de porcentajes.",
        "Una línea de fórmula en lenguaje claro que muestra cómo se armaron el BMR y el TDEE.",
        "Los controles Calcular, Restablecer, Copiar resultados y Compartir resultados hacen un trabajo real."
      ],
      "tips": [
        "Ajusta el nivel de actividad a una semana típica, no a tu día de entrenamiento más duro.",
        "Vuelve a calcular después de un cambio importante de peso o de rutina.",
        "Usa las metas de pérdida y de ganancia como puntos de partida; ajústalas según cómo queden la ropa y cómo se sienta tu energía a lo largo de dos a cuatro semanas.",
        "Las metas de calorías muy bajas no conviene a todo el mundo: busca orientación clínica si tienes una condición médica, estás embarazada o tienes menos de 18 años."
      ],
      "limitations": "Los resultados son estimaciones de estilo poblacional. No miden la tasa metabólica en un laboratorio, no tienen en cuenta cada efecto hormonal o de medicamentos ni sustituyen el consejo de un médico o un dietista-nutricionista. El sexo se modela con las constantes binarias de Mifflin–St Jeor. Las calorías de pérdida tienen un piso de 1200 kcal en esta herramienta, como un límite suave de seguridad solo para la estimación.",
      "article": {
        "title": "Guía de la calculadora TDEE: calorías diarias, BMR y macros",
        "intro": "Una calculadora TDEE convierte unas pocas medidas corporales y una descripción honesta de la actividad en una estimación de cuántas calorías necesitas cada día. La gente busca una calculadora de BMR, una calculadora de calorías diarias, una calculadora de calorías de mantenimiento o una calculadora de calorías para perder peso por la misma razón: quiere un número de partida claro antes de cambiar cómo come. Esta guía explica qué significa el gasto energético total diario, cómo lo calcula esta página y cómo leer los resultados sin tratarlos como una prescripción médica.",
        "sections": [
          {
            "heading": "¿Qué es el TDEE?",
            "paragraphs": [
              "El gasto energético total diario (TDEE) es el número estimado de calorías que usa tu cuerpo en veinticuatro horas. Incluye la energía necesaria para mantenerte con vida en reposo, la que se usa para digerir los alimentos y la que se quema con el movimiento cotidiano y el ejercicio planificado. Cuando la ingesta coincide aproximadamente con el TDEE a lo largo del tiempo, el peso suele mantenerse estable. Comer de forma constante por debajo del TDEE suele llevar a una pérdida; comer de forma constante por encima suele llevar a una ganancia.",
              "El TDEE no es un rasgo fijo de la personalidad. Cambia cuando cambian el peso, la edad, la masa muscular, la rutina y el estado de salud. Por eso una calculadora TDEE en línea gratuita es más útil como una estimación viva que actualizas, no como un tatuaje de una sola vez en tu plan de comidas."
            ]
          },
          {
            "heading": "Cómo se calcula el TDEE",
            "paragraphs": [
              "La mayoría de las calculadoras para el público siguen dos pasos. Primero estiman la tasa metabólica basal. Luego multiplican ese BMR por un factor de actividad que representa lo activa que eres a lo largo de la semana. Esta calculadora de Tools Star Hub usa Mifflin–St Jeor para el BMR y luego los multiplicadores habituales 1,2 (sedentario), 1,375 (ligeramente activo), 1,55 (moderadamente activo), 1,725 (muy activo) y 1,9 (extraactivo).",
              "Cuando se conoce el TDEE, las calorías de mantenimiento equivalen a ese número. Las calorías para perder peso restan unas 500 kcal al día, un déficit clásico de planificación que a menudo se asocia con una pérdida de grasa de aproximadamente medio kilogramo por semana cuando se sigue con cuidado. Las calorías para ganar peso suman unas 300 kcal como superávit moderado. La página también muestra un reparto sugerido de macronutrientes para que las proteínas, los carbohidratos y las grasas tengan metas concretas en gramos ligadas a la meta que seleccionaste."
            ]
          },
          {
            "heading": "BMR frente a TDEE",
            "paragraphs": [
              "El BMR es el costo energético de existir: respirar, hacer circular la sangre, reparar células y mantener estable la temperatura si te quedaras en la cama todo el día. El TDEE es el BMR más todo lo demás que realmente haces. Alguien con un BMR cercano a 1600 kcal que camina mucho y entrena cuatro veces por semana podría situarse cerca de 2400–2700 kcal de TDEE, mientras que una persona similar que pasa sentada la mayor parte del día podría quedarse más cerca de 1900 kcal.",
              "Buscar solo una calculadora de BMR es útil para entender las necesidades en reposo, pero para planificar las comidas suele hacer falta el TDEE. Comer solo al nivel del BMR mientras llevas una vida activa es un recorte pronunciado para muchas personas y no es el objetivo de una calculadora de calorías de mantenimiento."
            ]
          },
          {
            "heading": "Multiplicadores de actividad, explicados",
            "paragraphs": [
              "Los multiplicadores de actividad comprimen una semana irregular en un solo número. Sedentario encaja con un trabajo de escritorio y poco ejercicio formal. Ligeramente activo cubre un deporte ligero o caminatas unos días por semana. Moderadamente activo conviene a un entrenamiento regular de tres a cinco días por semana. Muy activo es un entrenamiento duro la mayoría de los días. Extraactivo es para un entrenamiento muy duro, un trabajo físico, o ambos.",
              "La gente suele sobreestimar. Si entrenas duro tres tardes pero pasas sentado el resto del día, moderadamente activo suele estar más cerca que muy activo. Si dudas, empieza un punto más abajo, sigue el peso durante dos semanas y ajusta. El [conversor de unidades](/tools/unit-converter) puede ayudar si tu báscula y tu cinta no coinciden en las unidades, y la [calculadora de edad](/tools/age-calculator) puede confirmar la edad exacta cuando un cumpleaños está cerca de un corte."
            ]
          },
          {
            "heading": "Calorías para perder peso",
            "paragraphs": [
              "Una calculadora de calorías para perder peso suele restar una cantidad moderada del TDEE para que la pérdida de grasa sea lo bastante gradual como para proteger el entrenamiento y la energía diaria. Un déficit diario de 500 kcal es una cifra habitual de planificación; esta herramienta también se niega a sugerir menos de 1200 kcal en la línea de pérdida, como un piso suave para la estimación. Ese piso no es una prescripción personal: algunos adultos necesitan ingestas más altas, y los adolescentes, las personas embarazadas y cualquiera con una preocupación clínica por la alimentación no deben usar déficits agresivos sin atención profesional.",
              "La pérdida no es solo la línea de calorías. La ingesta de proteínas, el sueño, los pasos y el entrenamiento de fuerza influyen en cuánto del peso perdido es grasa frente a masa magra. Vuelve a calcular el TDEE a medida que baja el peso corporal, porque un cuerpo más pequeño suele quemar un poco menos."
            ]
          },
          {
            "heading": "Calorías para ganar peso",
            "paragraphs": [
              "Ganar peso, sobre todo cuando el objetivo es músculo, suele funcionar mejor con un superávit moderado que con una alimentación sin límite. Esta calculadora suma unas 300 kcal por encima del TDEE para la meta de ganancia. Eso mantiene más lento el ritmo de ganancia y puede reducir cuánto de esa ganancia es grasa, sobre todo si se combina con un entrenamiento de fuerza progresivo y suficientes proteínas.",
              "Si la báscula no se mueve durante unas semanas con la meta de ganancia, sube un poco la ingesta o comprueba que no se haya subestimado la actividad. Lo inverso aplica si la ganancia es más rápida de lo que quieres."
            ]
          },
          {
            "heading": "Cómo entender los macronutrientes",
            "paragraphs": [
              "Las calorías describen la energía. Los macronutrientes describen de dónde viene esa energía. Las proteínas y los carbohidratos aportan unas 4 kcal por gramo; las grasas aportan unas 9 kcal por gramo. La ingesta sugerida en esta página usa el 30 % de las calorías de la meta como proteínas, el 40 % como carbohidratos y el 30 % como grasas, y luego convierte esas calorías en gramos.",
              "Esa plantilla 30/40/30 es un punto de partida legible para muchas metas generales de condición física. Los atletas de resistencia pueden querer más carbohidratos. Algunos planes clínicos o de entrenamiento usan más proteínas por kilogramo de peso corporal en lugar de un porcentaje fijo. Trata las barras como un mapa, no como una ley, y compáralas con el consejo de un profesional cualificado cuando lo que está en juego es importante."
            ]
          },
          {
            "heading": "Factores que afectan el gasto calórico diario",
            "paragraphs": [
              "Además de los datos del formulario, el gasto responde a la masa muscular, la actividad que no es ejercicio (moverse, estar de pie, caminar entre habitaciones), la composición de la dieta, la deuda de sueño, las hormonas del estrés, la exposición al frío y los cambios adaptativos después de una dieta prolongada. Dos personas con la misma edad, sexo, estatura y peso aún pueden diferir en cientos de calorías.",
              "También importan los medicamentos, el estado de la tiroides y la recuperación de una enfermedad. Las estimaciones en línea no pueden ver esos factores. Usa el número para fijar un plan inicial y luego deja que los promedios semanales del peso y cómo te sientes voten si subir o bajar la ingesta."
            ]
          },
          {
            "heading": "Límites de las estimaciones de calorías",
            "paragraphs": [
              "Ecuaciones como Mifflin–St Jeor se construyeron a partir de datos de grupos. Están entre las mejores fórmulas de escritorio para muchos adultos, pero el error individual aún puede ser importante. Los wearables estiman el gasto con sus propios sesgos. Las etiquetas de los alimentos y las porciones de restaurante introducen más ruido cuando registras la ingesta.",
              "Esta calculadora de calorías diarias no diagnostica trastornos metabólicos, no prescribe dietas ni garantiza un ritmo de pérdida o ganancia. Es un asistente aritmético transparente: BMR Mifflin–St Jeor, multiplicadores de actividad publicados, desplazamientos claros de mantener, perder y ganar, y un reparto visible de macros. Combínala con paciencia y orientación profesional cuando necesites atención personalizada. Para las matemáticas de porcentajes en recetas o el progreso, la [calculadora de porcentajes](/tools/percentage-calculator) está cerca, en la misma familia de calculadoras."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "¿Qué es una calculadora TDEE?",
          "answer": "Una calculadora TDEE estima el gasto energético total diario (las calorías que quemas en un día) a partir de la edad, el sexo, la estatura, el peso y la actividad. Esta página también muestra el BMR y las metas calóricas para mantener, perder o ganar peso."
        },
        {
          "question": "¿Cómo funciona esta calculadora TDEE?",
          "answer": "Calcula la tasa metabólica basal con la ecuación de Mifflin–St Jeor, la multiplica por el factor de actividad que eliges para obtener el TDEE y luego deriva las metas de mantenimiento, pérdida (unas −500 kcal) y ganancia (unas +300 kcal), más una sugerencia de macros 30/40/30 sobre la meta seleccionada."
        },
        {
          "question": "¿Qué es la ecuación de Mifflin–St Jeor?",
          "answer": "Mifflin–St Jeor estima el BMR en kcal/día como 10×peso(kg) + 6,25×estatura(cm) − 5×edad + 5 para hombres, o la misma fórmula con −161 en lugar de +5 para mujeres. Se usa mucho en las calculadoras modernas de BMR y TDEE."
        },
        {
          "question": "¿Cuál es la diferencia entre BMR y TDEE?",
          "answer": "El BMR es el uso estimado de energía en reposo. El TDEE multiplica el BMR por un factor de actividad para incluir el movimiento diario y el ejercicio. Los planes de comidas suelen partir del TDEE, no solo del BMR."
        },
        {
          "question": "¿Qué nivel de actividad debo elegir?",
          "answer": "Elige la descripción que coincida con una semana normal. Sedentario es poco ejercicio; ligeramente activo es de 1 a 3 días suaves; moderadamente activo es de 3 a 5 días moderados; muy activo es un entrenamiento duro la mayoría de los días; extraactivo es un entrenamiento muy duro o un trabajo físico. Si no estás seguro, elige primero la opción más baja."
        },
        {
          "question": "¿Cuántas calorías debo comer para perder peso?",
          "answer": "Un enfoque habitual de planificación es el TDEE menos unas 500 kcal al día. Esta herramienta muestra esa línea de pérdida de peso y evita que la estimación baje de 1200 kcal. Las necesidades individuales varían: ajusta según el progreso y el consejo profesional."
        },
        {
          "question": "¿Cuántas calorías debo comer para ganar peso?",
          "answer": "Esta calculadora sugiere unas TDEE más 300 kcal para un superávit moderado. Combínalo con entrenamiento de fuerza y suficientes proteínas si la meta es ganar músculo, y luego ajusta si la báscula se mueve demasiado lento o demasiado rápido."
        },
        {
          "question": "¿Puedo usar unidades métricas e imperiales?",
          "answer": "Sí. Cambia entre el sistema métrico (kg, cm) y el imperial (lb, pies y pulgadas). La calculadora convierte internamente y sigue ejecutando Mifflin–St Jeor en unidades métricas."
        },
        {
          "question": "¿Cómo se sugieren las proteínas, los carbohidratos y las grasas?",
          "answer": "Los macros sugeridos usan el 30 % de las calorías de la meta seleccionada como proteínas, el 40 % como carbohidratos y el 30 % como grasas, y luego los convierten a gramos (4 kcal/g para proteínas y carbohidratos, 9 kcal/g para grasas). Cambia el reparto si tu entrenador o tu clínico prefieren otra plantilla."
        },
        {
          "question": "¿Esta calculadora TDEE es gratuita?",
          "answer": "Sí. Es gratuita en Tools Star Hub y no hace falta una cuenta. Los cálculos se ejecutan en tu navegador."
        },
        {
          "question": "¿Una estimación de TDEE es lo mismo que una prueba metabólica de laboratorio?",
          "answer": "No. La calorimetría indirecta y las evaluaciones clínicas son más individuales. Las fórmulas en línea dan una estimación práctica de partida y pueden equivocarse en un margen notable para una persona concreta."
        },
        {
          "question": "¿La edad o el sexo cambian el resultado?",
          "answer": "Sí. Mifflin–St Jeor incluye la edad y usa constantes distintas para las ecuaciones de hombres y de mujeres, así que la misma estatura y el mismo peso pueden producir valores distintos de BMR y de TDEE."
        },
        {
          "question": "¿Qué es una calculadora de calorías de mantenimiento?",
          "answer": "Es otro nombre para estimar la ingesta que debería mantener el peso estable. En esta página, las calorías de mantenimiento equivalen a tu TDEE calculado."
        },
        {
          "question": "¿Pueden los adolescentes o las personas embarazadas confiar en estas cifras?",
          "answer": "No como una prescripción. El formulario acepta edades de estilo adulto para la ecuación, pero el crecimiento, el embarazo y muchas condiciones médicas necesitan metas guiadas por un clínico, no una estimación genérica en línea."
        },
        {
          "question": "¿Por qué mostrar el BMR si solo me importan las calorías diarias?",
          "answer": "El BMR explica la base en reposo del TDEE. Ver ambos te ayuda a entender cuánto de tu necesidad diaria viene del metabolismo de base frente a la actividad, lo cual es útil cuando cambian las rutinas."
        },
        {
          "question": "¿Con qué frecuencia debo volver a calcular el TDEE?",
          "answer": "Vuelve a calcularlo después de un cambio importante de peso, un nuevo bloque de entrenamiento, o cuando la tendencia promedio semanal de tu peso ya no coincida con la meta. Muchas personas lo revisan cada dos a seis semanas mientras están en una fase de déficit o de superávit."
        },
        {
          "question": "¿Puedo copiar o compartir mis resultados?",
          "answer": "Sí. Copiar resultados pone un resumen en texto plano en el portapapeles. Compartir resultados usa la hoja de compartir del dispositivo cuando está disponible, o copia el mismo resumen para que lo puedas pegar en un mensaje."
        },
        {
          "question": "¿Esta herramienta guarda mis medidas?",
          "answer": "No. La edad, el peso, la estatura y los resultados se quedan en la sesión de la página en tu navegador. No se envía nada a un servidor para calcular el TDEE."
        },
        {
          "question": "¿El recuento de pasos basta por sí solo para fijar mi nivel de actividad?",
          "answer": "Los pasos ayudan, pero los multiplicadores de actividad del TDEE también reflejan el movimiento del trabajo, el entrenamiento y el NEAT, no solo el total de un podómetro."
        },
        {
          "question": "¿Debo volver a comer las calorías que quemé en un entrenamiento?",
          "answer": "Por lo general no, si ya elegiste un nivel de actividad que incluye el entrenamiento; sumar además las quemas del monitor suele sobreestimar."
        }
      ]
    },
    "metaDescription": "Calculadora TDEE gratuita con BMR Mifflin–St Jeor, cinco niveles de actividad y metas de calorías para mantener, perder o ganar peso, con macros sugeridos.",
    "ui": {}
  },
  "alma-ai-nutrition-coach": {
    "answer": "Alma es un coach de nutrición con IA y un registro de alimentos gratuitos: calcula las calorías diarias, el BMR y el TDEE, registra comidas en tu navegador, controla proteínas, macros y micronutrientes, y recibe orientación educativa sin un muro de pago.",
    "content": {
      "about": "Alma es un coach de nutrición con IA y un registro de alimentos gratuitos en Tools Star Hub. Estima las necesidades calóricas diarias con el BMR y el TDEE de Mifflin–St Jeor, calcula las proteínas y los demás macros, enumera referencias generales de micronutrientes, registra el desayuno hasta los snacks en tu navegador y ofrece herramientas de planificación de comidas, lista de compras y orientación educativa, sin un muro de pago ni una aplicación descargable.",
      "howTo": [
        "Abre la pestaña Calculadoras y escribe la edad, el sexo, la estatura, el peso y la actividad. Elige unidades métricas o imperiales y luego calcula las calorías diarias, el BMR o el TDEE.",
        "Elige un reparto de macros o una meta de proteínas si quieres objetivos en gramos, y revisa la tabla de referencia de micronutrientes para valores generales de adultos.",
        "Usa el Registro de alimentos para buscar alimentos de referencia de muestra o productos envasados de Open Food Facts, añade un alimento personalizado a partir de una etiqueta y registra el desayuno, el almuerzo, la cena o los snacks.",
        "Consulta el Panel para ver las calorías restantes, el progreso de los macros, el agua y el historial semanal. Planifica comidas, arma una lista de compras y haz una pregunta al coach de nutrición con IA. Todo lo básico se queda gratis."
      ],
      "examples": [
        {
          "title": "Trabajador de escritorio que fija una meta calórica",
          "body": "Un hombre de 30 años, 80 kg y 180 cm, moderadamente activo, obtiene un BMR Mifflin–St Jeor cercano a 1780 kcal y un TDEE cercano a 2759 kcal. Las calorías de mantenimiento coinciden con el TDEE. Un déficit estándar de 500 kcal sugeriría unas 2259 kcal, con macros según el reparto seleccionado."
        },
        {
          "title": "Registrar el desayuno a partir de alimentos de muestra",
          "body": "Buscar «avena» y «plátano» en la lista de referencia de muestra, y luego añadir una porción de cada uno al desayuno, suma las calorías típicas de estilo USDA y el potasio del plátano. El panel actualiza la energía restante del día."
        },
        {
          "title": "Preguntar al coach sobre las proteínas",
          "body": "Después de guardar un rango de proteínas para entrenamiento de fuerza desde la Calculadora de proteínas, puedes preguntar «¿Cuánta proteína necesito?». El coach usa tus metas guardadas y el registro de hoy. Si la IA en vivo está configurada en el servidor, la respuesta se etiqueta como asistida por IA; de lo contrario, Alma usa su coach educativo basado en reglas."
        }
      ],
      "explanation": "La energía diaria empieza con la ecuación de Mifflin–St Jeor para la tasa metabólica basal y luego un multiplicador de actividad para el gasto energético total diario. Los gramos de macronutrientes salen de un reparto calórico elegido (proteínas y carbohidratos a 4 kcal/g, grasas a 9 kcal/g). Los rangos de proteínas usan gramos por kilogramo de peso corporal. Las cifras de micronutrientes son valores de referencia dietéticos generales, no resultados de laboratorio. Los números de los alimentos vienen de una base de datos de muestra etiquetada, de datos comunitarios de Open Food Facts o de valores que escribes a partir de un envase.",
      "features": [
        "Módulos gratuitos de calorías diarias, BMR, TDEE, macros, proteínas, déficit calórico y micronutrientes en una sola página.",
        "Diario de alimentos para desayuno, almuerzo, cena y snacks, con búsqueda, alimentos personalizados, porciones, ediciones y eliminaciones.",
        "Panel con calorías restantes, anillos de macros, ingesta de agua e historial de siete días.",
        "Planificador de comidas, lista de compras y sugerencias de sustitución.",
        "Coach de nutrición con IA educativo, con una ruta segura en el servidor cuando la IA está configurada, y un respaldo etiquetado basado en reglas cuando no lo está.",
        "Almacenamiento del diario solo en el navegador y sin muro de suscripción en los cálculos básicos."
      ],
      "tips": [
        "Ajusta la actividad a una semana típica, no a tu día de entrenamiento más duro.",
        "Prefiere una báscula de cocina y las etiquetas de información nutricional a las tazas calculadas a ojo cuando puedas.",
        "Usa los promedios semanales del panel en lugar de juzgar un solo día.",
        "Trata la cobertura de micronutrientes como una invitación a ampliar la variedad de alimentos, no como un diagnóstico."
      ],
      "limitations": "Alma estima energía y nutrientes; no mide el metabolismo en un laboratorio, no analiza analíticas de sangre ni sustituye a un médico o a un dietista-nutricionista. Los alimentos de muestra usan valores típicos publicados de estilo USDA y están redondeados. Los listados de Open Food Facts los mantiene la comunidad y suelen expresarse por 100 g. Los alimentos personalizados solo son tan precisos como la etiqueta que copias. El sexo se modela con las constantes binarias de Mifflin–St Jeor. Las calorías de pérdida tienen un piso de 1200 kcal, como un límite suave de seguridad solo para la estimación.",
      "article": {
        "title": "Alma: coach de nutrición con IA y registro de alimentos, tu guía completa de cálculos nutricionales gratuitos y alimentación saludable",
        "intro": "La gente busca una calculadora de nutrición, un sitio para registrar alimentos y un coach de nutrición con IA por la misma razón práctica: quiere una forma clara de estimar las calorías diarias, ver lo que realmente come y entender las proteínas, los carbohidratos, las grasas y los micronutrientes, sin pagar por una aplicación bloqueada. Alma es el espacio de trabajo gratuito de cálculos nutricionales y registro de alimentos de Tools Star Hub. Vive en el navegador, no requiere una cuenta y es una herramienta educativa, no una clínica, un servicio de compras ni un producto oficial de una tienda de aplicaciones que pueda compartir el mismo nombre. Esta guía explica cómo funciona una calculadora de nutrición gratuita, cómo registrar alimentos en línea y cómo encajan los módulos de Alma para que puedas usarlos con expectativas realistas.",
        "sections": [
          {
            "heading": "Calculadora de nutrición y registro de alimentos gratuitos",
            "paragraphs": [
              "Una calculadora de nutrición gratuita convierte unas pocas medidas corporales y una descripción de la actividad en necesidades calóricas estimadas. Un registro de alimentos compara luego esas necesidades con lo que anotas en el desayuno, el almuerzo, la cena y los snacks. Alma combina ambas tareas en una sola página para que no saltes entre una calculadora de calorías diarias, un diario de alimentos aparte y una hoja de cálculo para los macros. El Panel muestra una meta calórica, las calorías consumidas, la energía restante, el progreso de proteínas, carbohidratos y grasas, un registro sencillo de agua y una semana de historial.",
              "Como todo lo básico es gratuito, puedes hacer un cálculo de nutrición diaria, registrar un almuerzo casero y hacer una pregunta educativa sin toparte con un muro de pago. Eso importa para quien haya probado una aplicación de nutrición solo para encontrar los informes útiles detrás de una suscripción. La promesa de Alma es más estrecha y más honesta: aritmética transparente, una base de datos de alimentos etiquetada, almacenamiento local y explicaciones didácticas, no un plan médico personalizado."
            ]
          },
          {
            "heading": "¿Qué es un coach de nutrición con IA?",
            "paragraphs": [
              "Un coach de nutrición con IA es un asistente guiado que responde preguntas de nutrición en un lenguaje claro y, cuando se lo permites, mira las cifras que ya calculaste o registraste. Puede explicar la diferencia entre calorías y nutrientes, sugerir cómo armar un desayuno más equilibrado o indicarte alimentos ricos en hierro. No debe diagnosticar una deficiencia, prescribir una dieta clínica ni afirmar que un chatbot conoce tu historial médico.",
              "El coach de Alma está construido así a propósito. Si Tools Star Hub tiene un servicio de IA configurado, tu pregunta y un resumen breve del diario de hoy viajan a una ruta del lado del servidor. Las claves de API nunca aparecen en el navegador. Si ese servicio no está configurado, o si falla, Alma pasa a un coach educativo basado en reglas que funciona y etiqueta la respuesta para que nunca se te muestre un chat de IA en vivo fingido. En ambos casos el objetivo es la educación nutricional: ayudarte a interpretar una estimación de TDEE, un rango de proteínas o un registro de verduras a medio llenar."
            ]
          },
          {
            "heading": "Coach de nutrición con IA para una alimentación saludable",
            "paragraphs": [
              "Una alimentación saludable tiene menos que ver con un día perfecto y más con patrones repetibles: suficientes proteínas para sostener los músculos y la saciedad, carbohidratos para alimentar la actividad, grasas para las hormonas y las vitaminas liposolubles, y una variedad de plantas que aportan fibra y micronutrientes. Un coach de nutrición con IA es útil cuando te mantiene centrado en esos patrones en lugar de puntuar los alimentos como victorias o derrotas morales.",
              "Puedes preguntar cómo mejorar la nutrición diaria después de una semana con poca ingesta de verduras, o si un desayuno registrado se ve equilibrado. Alma puede comentar lo que está presente (proteínas, vegetales, indicios de fibra) y lo que falta, y luego devolverte al Planificador de comidas o al Registro de alimentos para hacer un cambio pequeño. Ese ciclo es el producto: calcular, registrar, revisar, ajustar."
            ]
          },
          {
            "heading": "¿Qué es un sitio web para registrar alimentos?",
            "paragraphs": [
              "Un sitio web para registrar alimentos, a veces llamado registro de alimentos en línea, sitio de seguimiento de comidas o diario de alimentos, es una página donde anotas lo que comes y ves totales acumulados. A diferencia de un diario en papel, puede convertir las porciones en calorías y macros en cuanto añades un elemento. A diferencia de muchas aplicaciones móviles de nutrición, un sitio puede funcionar en una pestaña del navegador sin obligarte a una descarga.",
              "El registro de Alma está organizado como la mayoría de la gente ya piensa un día: desayuno, almuerzo, cena y snacks. Buscas un alimento, eliges una comida, escribes porciones, gramos o mililitros (las bebidas envasadas etiquetadas por 100 ml usan mililitros, no gramos) y lo añades. Puedes editar la cantidad más tarde o borrar la fila. El historial diario y semanal se queda en el Panel para que un martes alto no borre una semana más típica."
            ]
          },
          {
            "heading": "Registra tus alimentos y tu nutrición diaria",
            "paragraphs": [
              "Registrar la ingesta diaria de alimentos funciona mejor cuando hay poca fricción. Busca un alimento de referencia de muestra cuando comiste algo simple y sin envase, como un plátano o lentejas cocidas. Busca en Open Food Facts cuando tienes un producto envasado y quieres datos nutricionales de la comunidad en lugar de un número adivinado. Escribe un alimento personalizado cuando estás mirando una etiqueta de información nutricional y puedes copiar tú mismo las calorías, las proteínas, los carbohidratos y las grasas.",
              "Alma nunca inventa una cifra precisa de un nutriente para una barra de marca o un plato de restaurante. La lista de muestra está etiquetada como valores típicos de estilo USDA, redondeados para educar. Los resultados de Open Food Facts se etiquetan como datos de la comunidad, normalmente por 100 g. Las entradas personalizadas se etiquetan como tus números. Esa honestidad forma parte de usar bien una herramienta de seguimiento nutricional: el diario solo es tan bueno como las fuentes que eliges."
            ]
          },
          {
            "heading": "Cómo registrar alimentos en línea",
            "paragraphs": [
              "Empieza por fijar una fecha: hoy, u otro día que quieras reconstruir. Elige la comida, busca o escribe un alimento, fija la porción y añádelo. Si la porción de tu plato era de 150 g y el listado es por 100 g, cambia la unidad a gramos y escribe 150 para que las calorías se escalen correctamente. Repite con las bebidas que aportan energía, como la leche, y con los snacks que es fácil olvidar.",
              "Un hábito práctico es registrar mientras cocinas o al desempaquetar una lonchera, no a medianoche de memoria. El redondeo de memoria casi siempre encoge las porciones. Si quieres ayuda para convertir unidades caseras, el [conversor de unidades](/tools/unit-converter) está disponible en Tools Star Hub. Si necesitas la edad en años completos para el formulario de calorías, la [calculadora de edad](/tools/age-calculator) puede confirmarla."
            ]
          },
          {
            "heading": "Calcula tus necesidades calóricas diarias",
            "paragraphs": [
              "Las necesidades calóricas diarias empiezan con la tasa metabólica basal y luego suman el costo de vivir un día real. Los módulos de calorías diarias, BMR y TDEE de Alma usan la ecuación de Mifflin–St Jeor, que estima la energía en reposo a partir del peso, la estatura, la edad y el sexo, y luego multiplican por uno de cinco factores de actividad: sedentario, ligeramente activo, moderadamente activo, muy activo o extraactivo. Las calorías de mantenimiento equivalen al TDEE. Un plan habitual para perder peso resta unas 500 kcal; un superávit moderado para ganar suma unas 300 kcal.",
              "Si quieres las cuentas de energía en un diseño independiente dedicado, la [calculadora TDEE](/tools/tdee-calculator) usa el mismo enfoque de Mifflin–St Jeor. Alma mantiene ese motor dentro de un espacio de trabajo de nutrición más amplio para que la meta resultante pueda alimentar tu panel, tu plan de macros y tu diario de alimentos sin copiar números a mano.",
              "Cuántas calorías debes consumir al día sigue siendo una pregunta personal. Dos personas con la misma edad y el mismo peso pueden diferir por la masa muscular, el movimiento involuntario, las exigencias del trabajo y el estado de salud. Usa la estimación como una línea de partida y luego observa un promedio semanal del peso, la energía y cómo queda la ropa antes de volver a recortar la ingesta."
            ]
          },
          {
            "heading": "Calculadora gratuita de macronutrientes",
            "paragraphs": [
              "Una calculadora de macronutrientes, o calculadora de macros, divide una meta calórica en proteínas, carbohidratos y grasas. Las proteínas y los carbohidratos aportan unas cuatro calorías por gramo; las grasas aportan unas nueve. Alma te deja elegir un reparto en lugar de fijarte en una sola proporción de moda. Un reparto equilibrado 30/40/30 es un valor predeterminado legible. Hay opciones de más proteínas, menos carbohidratos, más carbohidratos y un reparto equitativo cuando tu entrenamiento o tus preferencias difieren.",
              "Estas plantillas son mapas de partida. Los bloques de resistencia suelen querer más carbohidratos. Algunos planes de entrenamiento fijan las proteínas en gramos por kilogramo en lugar de como un porcentaje de las calorías: la Calculadora de proteínas existe por esa razón. La [calculadora de porcentajes](/tools/percentage-calculator) puede ayudar si estás comprobando qué parte de una receta o de una comida de restaurante viene de un macro."
            ]
          },
          {
            "heading": "Entiende tu ingesta diaria de proteínas y carbohidratos",
            "paragraphs": [
              "La ingesta diaria de proteínas es una de las preguntas más habituales que la gente lleva a una calculadora de nutrición. Un rango general de partida muy citado para adultos es de unos 0,8 gramos de proteína por kilogramo de peso corporal. Las personas que entrenan con regularidad suelen situarse más cerca de 1,2–1,6 g/kg. Muchos planes de fuerza o de pérdida de grasa usan unos 1,6–2,2 g/kg para ayudar a conservar la masa magra. Alma informa un rango y un punto medio para que la cifra se sienta como una franja, no como un mandamiento.",
              "Los carbohidratos y las grasas llenan luego las calorías restantes después de fijar las proteínas, o siguen el reparto porcentual que seleccionaste. No hay una ingesta «mejor» universal de carbohidratos. Quien camina y levanta pesas dos veces por semana puede sentirse bien con un plato de carbohidratos moderados; quien corre sesiones largas puede sentirse mejor con más almidón alrededor del entrenamiento. Las grasas no deben llevarse a cero: aportan sabor y vitaminas liposolubles, y los patrones extremadamente bajos en grasa no son algo que un sitio web deba prescribir."
            ]
          },
          {
            "heading": "Cómo calcular proteínas, carbohidratos y grasas",
            "paragraphs": [
              "Para calcular los requisitos de proteínas, convierte tu peso corporal a kilogramos si hace falta, elige un rango de meta y multiplica. Un adulto de 80 kg que use 1,6–2,2 g/kg se sitúa cerca de 128–176 g de proteína. Para calcular carbohidratos y grasas a partir de un presupuesto calórico, asigna porcentajes, convierte esas calorías en gramos y comprueba que las tres partes sumen de nuevo la meta.",
              "Ejemplo: 2000 kcal en un plan 30/40/30 son 600 kcal de proteínas (150 g), 800 kcal de carbohidratos (200 g) y 600 kcal de grasas (unas 67 g). Si más tarde subes las proteínas al 40 por ciento, los carbohidratos y las grasas se reducen para que las calorías sigan coincidiendo. Esa aritmética es lo que un cálculo nutricional gratuito debería dejar claro."
            ]
          },
          {
            "heading": "¿Qué son los micronutrientes?",
            "paragraphs": [
              "Los micronutrientes son vitaminas y minerales. Los necesitas en cantidades mucho menores que las proteínas, los carbohidratos y las grasas, y aportan poca o ninguna energía, pero ponen en marcha procesos que las calorías solas no pueden describir: el transporte de oxígeno, el mantenimiento de los huesos, la función inmunitaria, el metabolismo energético y más. Un día puede alcanzar su meta calórica y aun así ir corto de hierro, folato o vitamina C si la variedad de alimentos es estrecha.",
              "La lista de micronutrientes de Alma cubre la vitamina A, las vitaminas del grupo B incluida la B12, la vitamina C, la vitamina D, la vitamina E, la vitamina K, el calcio, el hierro, el magnesio, el zinc, el potasio, el sodio y el folato. Esos son los nutrientes que la gente más suele pedir a una calculadora de ingesta de vitaminas o a un seguimiento de minerales. Las cifras que aparecen junto a ellos son valores de referencia dietéticos generales, no un análisis de sangre ni una licencia para tomar megadosis de suplementos."
            ]
          },
          {
            "heading": "Cómo controlar los micronutrientes",
            "paragraphs": [
              "Controlar los micronutrientes es más engorroso que controlar las calorías, porque muchas comidas caseras y listados genéricos no incluyen un panel completo de vitaminas. Alma aborda el problema en tres capas honestas. Los alimentos de muestra incluyen micronutrientes solo donde hay valores publicados de estilo USDA de forma amplia, por ejemplo potasio en un plátano, vitamina C en una naranja, o vitamina K y folato en las espinacas. Open Food Facts puede incluir nutrientes extra cuando un producto envasado los listó. Los alimentos personalizados son distintos: el formulario personalizado solo admite un nombre, calorías, proteínas, carbohidratos y grasas, así que las vitaminas y los minerales impresos en una etiqueta no se pueden escribir y no se cuentan.",
              "La Calculadora de micronutrientes coloca entonces los totales etiquetados de hoy junto a referencias generales de adultos que varían con el sexo y la edad donde lo hacen las cifras públicas de DRI. Los porcentajes de cobertura solo son tan completos como los alimentos que llevaban datos. Una celda en blanco significa «este registro no tiene una cantidad etiquetada», no «consumiste cero». Esa distinción es esencial para la concientización sobre deficiencias de nutrientes sin convertir un sitio web en una herramienta de diagnóstico."
            ]
          },
          {
            "heading": "¿Por qué es importante controlar los micronutrientes?",
            "paragraphs": [
              "¿Por qué son importantes los micronutrientes? Porque la energía y los micronutrientes responden preguntas distintas. Las calorías te dicen si la ingesta está en el mismo vecindario que el gasto. Las vitaminas y los minerales te dicen si esa energía llegó con las materias primas que tus células esperan. El hierro sostiene la hemoglobina. El calcio y la vitamina D se relacionan con la salud ósea. El folato importa para la síntesis del ADN, y las necesidades cambian en el embarazo: otra razón por la que una calculadora general no es un plan prenatal.",
              "El seguimiento destaca patrones que de otro modo podrías pasar por alto: días casi sin plantas, casi sin lácteos o alternativas fortificadas, o casi sin alimentos que suelen aportar hierro. La respuesta útil suele ser la variedad de alimentos (lentejas con una fuente de vitamina C, verduras de hoja, pescado, huevos, yogur, frijoles), no una lista automática de suplementos de un chatbot."
            ]
          },
          {
            "heading": "Planificador de comidas y diario de alimentos gratuitos",
            "paragraphs": [
              "Un diario de alimentos es simplemente un registro fechado de lo que comiste. El diario de Alma es el Registro de alimentos. Un planificador de comidas mira hacia adelante en lugar de hacia atrás: te deja colocar ideas de desayuno, almuerzo, cena y snacks en los días de la semana, ver un resumen nutricional de cada sugerencia y convertir esos ingredientes en una lista de compras. Puedes llenar un día de muestra, añadir tu propia combinación de comidas sugeridas o quitar lo que no encaje.",
              "Platos sugeridos como avena con plátano, pollo con arroz y brócoli, o tofu con quinoa y aguacate se arman a partir de los mismos alimentos de muestra que usa el registro, así que las calorías son internamente coherentes. Las notas de sustitución (pollo por tofu, arroz blanco por quinoa, salmón por atún) te ayudan a conservar una forma similar de comida cuando quieres otra proteína u otro grano. Esto es un planificador de comidas saludables en el sentido educativo, no un chef en tu puerta ni un servicio de entrega de compras."
            ]
          },
          {
            "heading": "Cómo crear un plan de comidas equilibrado",
            "paragraphs": [
              "Un plan de comidas equilibrado suele repetir una estructura simple: cada ocasión de comer tiene una proteína, un carbohidrato rico en fibra y una fruta o verdura, con grasas añadidas en cantidades modestas para cocinar o dar sabor. Escala las porciones hacia tu meta calórica en lugar de copiar un plato de las redes sociales que se armó para el tamaño y el trabajo de otra persona.",
              "En Alma, elige una meta en las calculadoras, coloca comidas sugeridas en la semana y luego compara los totales del planificador con el panel después de comer de verdad. La vida real diferirá (aceite de restaurante, un plátano más grande, un latte olvidado) y el diario está ahí para captarlo. Ajusta la siguiente lista de compras en lugar de reiniciar desde cero cada lunes."
            ]
          },
          {
            "heading": "Cómo el registro de alimentos sostiene hábitos de alimentación saludable",
            "paragraphs": [
              "El registro de alimentos sostiene hábitos de alimentación saludable cuando se usa como retroalimentación y no como un marcador. Ver que los almuerzos de entre semana van cortos de plantas, o que los snacks explican la mayor parte de un exceso, es más útil que etiquetar un alimento como «malo». Una vista semanal importa más que una sola noche. El registro de agua, aunque sea un contador simple de 250 ml, te recuerda que las bebidas también forman parte del día.",
              "El seguimiento puede volverse poco útil si alimenta la ansiedad o reglas rígidas. El diario de Alma se guarda en local; su coach opcional comparte una pregunta y un resumen del diario como se describe en la política de privacidad: puedes borrar una conversación, saltarte un día o dejar de registrar sin perder el acceso a las calculadoras. Si registrar la comida empieza a sentirse compulsivo, esa es una señal para dar un paso atrás y, si hace falta, hablar con un profesional cualificado, no una señal para registrar con más empeño."
            ]
          },
          {
            "heading": "Cómo entender las etiquetas nutricionales",
            "paragraphs": [
              "Una etiqueta de información nutricional sigue siendo una de las fuentes más fiables para los alimentos envasados, que es por lo que existe la entrada personalizada. Mira primero el tamaño de la porción. Las calorías, las proteínas, los carbohidratos y las grasas aplican a esa porción, no necesariamente a todo el envase. Si comes dos porciones, duplica las cifras. Si comes 80 g de un producto cuya etiqueta es por 100 g, escala por 0,8.",
              "Las etiquetas también pueden listar fibra, azúcares, sodio y algunas vitaminas. Esos extras pueden ir a un alimento personalizado o, cuando están presentes, llegar a través de una coincidencia de Open Food Facts. Las listas de ingredientes ayudan con las sustituciones de alimentos y la concientización sobre alérgenos, pero no sustituyen el panel numérico cuando estás haciendo un cálculo del valor nutricional."
            ]
          },
          {
            "heading": "Cómo usar una calculadora de nutrición",
            "paragraphs": [
              "Usar bien una calculadora de nutrición es una lista breve de comprobaciones. Escribe medidas honestas. Elige un nivel de actividad que coincida con una semana normal. Calcula el BMR y el TDEE para entender tanto las necesidades en reposo como las totales. Elige mantener, perder o ganar con un desplazamiento moderado. Fija los macros o un rango de proteínas. Luego registra de verdad los alimentos durante varios días antes de volver a cambiar la meta.",
              "Los botones de Alma (Calcular, Restablecer, Copiar resultados y Compartir resultados) son controles reales, no decoración. Copia o comparte cuando quieras pegar cifras en una nota. Restablece cuando quieras partir del adulto de ejemplo predeterminado. Cambia las unidades cuando tu báscula y tu tallímetro no coincidan. Cambiar de meta vuelve a calcular el objetivo resaltado para que puedas ver el mantenimiento, la pérdida y la ganancia uno al lado del otro."
            ]
          },
          {
            "heading": "Beneficios de los cálculos nutricionales gratuitos",
            "paragraphs": [
              "Los cálculos nutricionales gratuitos bajan el costo de la curiosidad. Puedes comparar un TDEE sedentario y uno moderadamente activo, probar un reparto con más proteínas o comprobar un déficit calórico sin crear una cuenta. Puedes registrar alimentos sin descargar una aplicación, lo que responde a una pregunta habitual de quienes prefieren un sitio de seguimiento de comidas en un portátil en la mesa de la cocina.",
              "Gratis también significa transparente. Alma muestra la línea de Mifflin–St Jeor, el multiplicador de actividad, el piso de seguridad de 1200 kcal en déficits agresivos y la fuente de cada cifra de un alimento. Ese es el beneficio que importa más que una «idea prémium» bloqueada: puedes ver cómo se armó el resultado y decidir qué confiar."
            ]
          },
          {
            "heading": "Cómo puede ayudar la IA en la educación nutricional",
            "paragraphs": [
              "La IA puede ayudar en la educación nutricional al traducir cifras en explicaciones y al notar huecos en un registro que ya creaste. Puede recordarte que el BMR no es el TDEE, que el hierro de las plantas combina bien con la vitamina C, o que un desayuno solo de tostadas va corto de proteínas. No puede ver tus analíticas, tus medicamentos ni tu cultura, y no debe pretenderlo.",
              "Usada junto con un diario de alimentos y una calculadora, la IA es un tutor. Usada en lugar de los datos, se vuelve conjetura. Por eso Alma siempre prefiere tus totales registrados y tus metas guardadas cuando haces una pregunta, y te dice si la respuesta vino de un modelo configurado o del coach educativo integrado."
            ]
          },
          {
            "heading": "Cómo te ayuda Alma a entender tu nutrición",
            "paragraphs": [
              "El trabajo de Alma en Tools Star Hub es reunir en un solo lugar las piezas móviles de la alfabetización nutricional cotidiana: una calculadora de calorías diarias, una calculadora de BMR, una calculadora de TDEE, una calculadora de macronutrientes, una calculadora de proteínas, una calculadora de déficit calórico, una tabla de referencia de micronutrientes, un registro de alimentos, un planificador de comidas y un coach educativo. Guarda tu diario en local, enlaza a la [calculadora TDEE](/tools/tdee-calculator) independiente cuando quieres esa página por sí sola, y se queda gratuita para el trabajo básico de entender lo que comes.",
              "Úsala como un instrumento sereno. Calcula una meta plausible, registra alimentos con fuentes etiquetadas, planifica una lista de compras que de verdad vayas a cocinar y haz preguntas cuando una cifra resulte confusa. Eso basta para un centro de nutrición saludable en el sentido educativo, y es honesto al no ser un hospital, una taquilla de compras de una startup ni una aplicación de nutrición de pago disfrazada."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "¿Qué es el coach de nutrición con IA Alma?",
          "answer": "Alma es el coach de nutrición con IA y el registro de alimentos gratuitos de Tools Star Hub. Estima las calorías diarias, el BMR y el TDEE, calcula macros y rangos de proteínas, enumera referencias generales de micronutrientes, registra comidas en tu navegador y ofrece orientación educativa. No es consejo médico ni un producto oficial de una tienda de aplicaciones móviles."
        },
        {
          "question": "¿Cómo funciona un sitio web para registrar alimentos?",
          "answer": "Un sitio web para registrar alimentos anota lo que comes y convierte esas entradas en calorías y nutrientes. En Alma buscas o escribes un alimento, lo asignas al desayuno, al almuerzo, a la cena o a los snacks, fijas la porción y ves totales acumulados en el panel y en tu diario de alimentos."
        },
        {
          "question": "¿Alma es una calculadora de nutrición gratuita?",
          "answer": "Sí. Los cálculos de calorías diarias, BMR, TDEE, macros, proteínas, déficit calórico y micronutrientes son gratuitos, junto con el registro de alimentos, la planificación de comidas y el coach educativo. No hay un muro de suscripción en esas funciones básicas ni una cuenta que crear."
        },
        {
          "question": "¿Cómo puedo calcular mis necesidades calóricas diarias?",
          "answer": "Escribe la edad, el sexo, la estatura, el peso y la actividad, y luego calcula. Alma usa Mifflin–St Jeor para el BMR y lo multiplica por un factor de actividad para estimar el TDEE. Las calorías de mantenimiento equivalen al TDEE. También puedes usar la calculadora TDEE independiente de Tools Star Hub si solo quieres las cuentas de energía."
        },
        {
          "question": "¿Cómo registro mi ingesta diaria de alimentos?",
          "answer": "Abre el Registro de alimentos, elige una fecha y una comida, busca alimentos de muestra o productos envasados, o añade un alimento personalizado con calorías, proteínas, carbohidratos y grasas a partir de una etiqueta. Fija porciones, gramos o mililitros y luego añade el elemento. En los alimentos de muestra y personalizados, 1 ml se cuenta como 1 g: es cercano para bebidas parecidas al agua, pero no para aceites, jarabes o líquidos espesos, así que escribe gramos en esos casos. Las bebidas envasadas cuyos datos de Open Food Facts están claramente por 100 ml se registran en mililitros, o en porciones cuando la etiqueta da una porción en ml; nunca se convierten a gramos. Otros productos envasados admiten gramos o porciones. Los productos cuya base no está clara se dejan fuera de la búsqueda de alimentos envasados; usa un alimento de muestra o una entrada personalizada para ellos. Puedes editar o borrar entradas más tarde. Los totales aparecen en el panel."
        },
        {
          "question": "¿Cómo calculo los requisitos de proteínas?",
          "answer": "Usa la Calculadora de proteínas con tu peso corporal y una meta: salud general, actividad regular, fuerza o pérdida de grasa con el músculo en mente. Alma muestra un rango en gramos por kilogramo (unos 0,8–1,0 g/kg en general, y rangos más altos para el entrenamiento o una dieta), no un único número universal."
        },
        {
          "question": "¿Cómo puedo controlar los micronutrientes?",
          "answer": "Registra alimentos que ya lleven datos de vitaminas y minerales: algunos alimentos de muestra y algunos listados de Open Food Facts. Los alimentos personalizados solo admiten calorías, proteínas, carbohidratos y grasas, así que las vitaminas y los minerales de una etiqueta que escribes no se controlan. La Calculadora de micronutrientes compara esos totales acumulados con valores de referencia generales de adultos. Una celda en blanco significa que el registro no tiene una cantidad etiquetada, no que la ingesta fue cero."
        },
        {
          "question": "¿Por qué son importantes los micronutrientes?",
          "answer": "Las vitaminas y los minerales sostienen la inmunidad, la salud ósea, el transporte de oxígeno y muchos otros procesos. Las calorías describen la energía; los micronutrientes describen parte de las materias primas que llegaron con esa energía. Controlarlos sirve para hallar patrones y educar, no para diagnosticar una deficiencia."
        },
        {
          "question": "¿Cuál es la diferencia entre macronutrientes y micronutrientes?",
          "answer": "Los macronutrientes son las proteínas, los carbohidratos y las grasas: los nutrientes que aportan casi todas las calorías de la dieta. Los micronutrientes son las vitaminas y los minerales, que se necesitan en cantidades mucho menores y aportan poca o ninguna energía. Puedes alcanzar una meta calórica y aun así quedarte corto de hierro o folato si la variedad de alimentos es estrecha."
        },
        {
          "question": "¿Cómo puedo calcular los carbohidratos y las grasas?",
          "answer": "Cuando ya tienes una meta calórica, elige un reparto de macros. Las proteínas y los carbohidratos aportan unas 4 kcal por gramo; las grasas aportan unas 9. Un plan 30/40/30 de 2000 kcal son unos 150 g de proteínas, 200 g de carbohidratos y 67 g de grasas. La Calculadora de macronutrientes hace esa conversión."
        },
        {
          "question": "¿Cuál es la mejor forma de controlar la nutrición diaria?",
          "answer": "Fija una meta realista de calorías y proteínas, registra las comidas sobre la marcha en lugar de hacerlo de memoria a última hora, usa una báscula o una etiqueta cuando puedas y revisa los totales semanales en lugar de un solo día. Combina el panel, el diario de alimentos y el planificador de comidas para que la planificación y el registro sigan conectados."
        },
        {
          "question": "¿Puedo registrar alimentos sin descargar una aplicación?",
          "answer": "Sí. Alma funciona en el navegador como un sitio de seguimiento de comidas y un registro de alimentos en línea. No necesitas descargar una aplicación de Alma para calcular la nutrición o llevar un diario de alimentos. Los datos se quedan en este navegador, salvo que preguntes al coach o busques en Open Food Facts."
        },
        {
          "question": "¿Qué es un diario de alimentos?",
          "answer": "Un diario de alimentos, o un registro de comidas, es un recuento fechado de alimentos y bebidas. El diario de Alma guarda el desayuno, el almuerzo, la cena y los snacks con calorías, macros y los micronutrientes disponibles, más un registro sencillo de agua, para que puedas mirar atrás a lo largo de la semana."
        },
        {
          "question": "¿Cómo puedo crear un plan de comidas saludable?",
          "answer": "Elige una meta calórica y luego arma los días en torno a una proteína, un carbohidrato rico en fibra y plantas. El Planificador de comidas de Alma ofrece sugerencias de desayuno, almuerzo, cena y snacks, te deja llenar un día de muestra, admite sustituciones y puede armar una lista de compras a partir de los ingredientes planificados."
        },
        {
          "question": "¿Qué tan precisas son las calculadoras de nutrición en línea?",
          "answer": "Son estimaciones. Mifflin–St Jeor y los multiplicadores de actividad son puntos de partida útiles, pero no pueden ver hormonas, medicamentos ni el movimiento involuntario. Los números de los alimentos dependen de valores de referencia de muestra, de listados de Open Food Facts o de la etiqueta que escribiste. Trata los resultados como herramientas de planificación y ajústalos a partir de las tendencias semanales."
        },
        {
          "question": "¿Cuántas calorías debo consumir al día?",
          "answer": "No hay un único número para todo el mundo. Calcula el TDEE a partir de tus datos y luego come cerca de esa cantidad para mantener el peso, algo por debajo para perder o algo por encima para ganar. Alma también pone un piso de 1200 kcal a las calorías sugeridas de pérdida, como un límite suave de la estimación, no una prescripción personal."
        },
        {
          "question": "¿Puede la IA ayudar a planificar las comidas?",
          "answer": "Sí, como un asistente educativo. Alma puede sugerir ideas de comidas, comentar un desayuno registrado y explicar cómo equilibrar un plato. Si la IA en vivo está configurada, las respuestas se etiquetan como asistidas por IA; de lo contrario, obtienes un coach etiquetado basado en reglas. Ninguno escribe una dieta médica."
        },
        {
          "question": "¿Cuál es la diferencia entre BMR y TDEE?",
          "answer": "El BMR es la energía estimada en reposo: las calorías que se usan en reposo total. El TDEE multiplica el BMR por un factor de actividad para incluir el movimiento diario y el entrenamiento. La planificación de comidas suele usar el TDEE. Comer solo al nivel del BMR mientras llevas una vida activa es un recorte pronunciado para muchas personas."
        },
        {
          "question": "¿Para qué vitaminas y minerales muestra Alma valores de referencia?",
          "answer": "La Calculadora de micronutrientes enumera valores de referencia generales de adultos para la vitamina A, las vitaminas B1, B2, B3, B6 y B12, la vitamina C, la vitamina D, la vitamina E, la vitamina K, el calcio, el hierro, el magnesio, el zinc, el potasio, el sodio y el folato, ajustados por sexo y edad donde difieren las cifras públicas de referencia. Son referencias poblacionales, no metas personales; para un seguimiento médico, confía en un clínico, no en un sitio web."
        },
        {
          "question": "¿El registro de alimentos en línea es gratuito?",
          "answer": "En Alma, sí. Buscar alimentos, registrar comidas, ver el historial, planificar comidas y ejecutar las calculadoras de nutrición es gratuito. Tu diario se guarda en local en el navegador, no detrás de una cuenta de nube de pago."
        }
      ]
    },
    "metaDescription": "Calcula calorías diarias, registra alimentos y controla proteínas, macros y micronutrientes con Alma, tu coach de nutrición con IA gratuito.",
    "ui": {}
  }
};

export default data;
