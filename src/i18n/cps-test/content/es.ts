import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "Test de CPS: velocidad de clic y clics por segundo",
  quickAnswer:
    "Un test de CPS cuenta cuántas veces haces clic en un tiempo fijo y lo divide entre los segundos para darte los clics por segundo. El clic normal con un dedo suele rondar los 6 o 7 CPS, la cifra que más se cita como media. El jitter click y el butterfly click pueden superarla.",
  headings: {
    about: "Qué hace esta herramienta",
    howTo: "Cómo se usa",
    examples: "Ejemplos",
    features: "Funciones principales",
    howItWorks: "Cómo funciona",
    tips: "Consejos",
    limitations: "Limitaciones",
    faq: "Preguntas frecuentes",
    disclaimer: "Consulta el {link} para ver lo que estas herramientas no cubren.",
    disclaimerLink: "aviso legal",
  },
  content: {
    about:
      "Mide tu velocidad de clic en clics por segundo (CPS). Elige 1, 5, 10, 15, 30 o 60 segundos y haz clic o toca el recuadro lo más rápido que puedas. El temporizador empieza con tu primer clic. Al terminar verás tu CPS, un nivel de Tortuga a Rayo y tu récord para esa duración. También hay modos de clic derecho y de barra espaciadora.",
    howTo: [
      "Elige la duración. 10 segundos es la prueba de clic habitual. 1 y 5 segundos miden ráfagas cortas; 30 y 60 segundos miden resistencia.",
      "Elige qué cuenta: clic izquierdo, clic derecho o barra espaciadora. En el móvil o la tableta, deja el clic izquierdo y toca la pantalla.",
      "Haz clic o toca el recuadro. El primer clic cuenta y pone en marcha el temporizador.",
      "Sigue haciendo clic hasta que el temporizador llegue a 0. Tus clics por segundo, tu nivel y tu récord aparecen al instante. Pulsa Reiniciar para empezar de nuevo.",
    ],
    features: [
      "Seis duraciones: 1, 5, 10, 15, 30 y 60 segundos.",
      "Temporizador, contador de clics y clics por segundo en directo mientras haces clic.",
      "Un nivel de Tortuga (menos de 5 CPS) a Rayo (14 CPS o más).",
      "Un récord guardado en este navegador para cada duración y cada modo.",
      "Modos de clic izquierdo, clic derecho y barra espaciadora. Espacio y Enter no cuentan en los modos de clic, y mantener pulsada la tecla nunca repite en el modo barra espaciadora.",
      "Compatible con pantallas táctiles, con un solo conteo por toque.",
    ],
    examples: [
      {
        title: "Una prueba de clic de 10 segundos",
        body: "72 clics en 10 segundos son 72 ÷ 10 = 7,2 CPS, el nivel Conejo.",
      },
      {
        title: "Una ráfaga de 1 segundo",
        body: "9 clics en 1 segundo son 9 CPS, el nivel Caballo. Las pruebas cortas suelen dar más que las largas porque la mano no tiene tiempo de cansarse.",
      },
    ],
    explanation:
      "El CPS es el número de clics contados dividido entre la duración de la prueba en segundos. La duración es fija, así que una prueba de 10 segundos siempre divide entre 10, aunque tu último clic llegue un poco antes del final. Cada pulsación cuenta una vez: un botón del ratón, un toque en la pantalla o la tecla Espacio en el modo barra espaciadora. Una tecla mantenida, Enter y el clic que abriría el menú contextual no suman nada.",
    tips: [
      "Apoya la muñeca en la mesa y haz clic con la yema del dedo, no con todo el brazo.",
      "Calienta con una prueba de 5 segundos antes de buscar un récord en 10 segundos o más.",
      "Prueba el jitter click o el butterfly click solo en pruebas cortas y para si te duele la mano o la muñeca.",
    ],
    limitations:
      "El resultado depende del ratón, la pantalla táctil y el navegador, así que las puntuaciones de dispositivos distintos no se comparan directamente. Un ratón que hace doble clic solo infla el conteo. La prueba no puede saber si se usó un autoclicker o una macro. Los récords se guardan en el almacenamiento local de este navegador; borrar los datos del sitio los elimina.",
    faqs: [
      {
        question: "¿Qué es un test de CPS?",
        answer:
          "Un test de CPS mide los clics por segundo. Haces clic lo más rápido posible durante un tiempo fijo y el total se divide entre los segundos. La prueba de clic de 10 segundos es la versión más común.",
      },
      {
        question: "¿Cuál es el CPS medio?",
        answer:
          "Para el clic normal con un dedo, la cifra que más se cita está entre 6 y 7 CPS. Tómala como una referencia aproximada, no como un estándar medido. Tu mano, tu ratón y la duración de la prueba cambian el resultado.",
      },
      {
        question: "¿10 CPS es bueno?",
        answer:
          "Sí. 10 CPS durante 10 segundos está por encima de lo que logra la mayoría con clic normal y aquí da el nivel Caballo. Mucha gente que supera los 10 CPS usa jitter click o butterfly click.",
      },
      {
        question: "¿Cómo puedo hacer clic más rápido?",
        answer:
          "Relaja el agarre, apoya la muñeca en la mesa y haz clic desde el dedo, no desde el brazo. Practica con pruebas cortas y sigue tu récord. El jitter click y el butterfly click pueden subir tu CPS, pero restan precisión y cargan más la mano.",
      },
      {
        question: "¿Qué diferencia hay entre jitter click y butterfly click?",
        answer:
          "En el jitter click tensas el antebrazo para que un dedo vibre sobre el botón. En el butterfly click dos dedos se alternan sobre el mismo botón. El butterfly suele dar más CPS, pero algunos ratones y algunos servidores de juegos no lo gestionan bien.",
      },
      {
        question: "¿Se envían mis puntuaciones a un servidor?",
        answer:
          "No. La prueba funciona en esta pestaña del navegador. Los récords se guardan solo en el almacenamiento local de este navegador, y Borrar récords los elimina.",
      },
    ],
  },
};

export default page;
