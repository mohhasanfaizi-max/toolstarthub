import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
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
  }
};

export default data;
