import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "Teste de CPS — Teste de velocidade de clique, cliques por segundo",
  quickAnswer:
    "Um teste de CPS conta quantas vezes você clica em um tempo fixo e divide pelos segundos para dar os cliques por segundo. O clique normal com um dedo costuma ficar em torno de 6 a 7 CPS, o número mais citado como média. Jitter click e butterfly click podem passar disso.",
  headings: {
    about: "O que esta ferramenta faz",
    howTo: "Como usar",
    examples: "Exemplos",
    features: "Principais recursos",
    howItWorks: "Como funciona",
    tips: "Dicas",
    limitations: "Limitações",
    faq: "Perguntas frequentes",
    disclaimer: "Veja o {link} para saber o que estas ferramentas não cobrem.",
    disclaimerLink: "aviso legal",
  },
  content: {
    about:
      "Teste sua velocidade de clique em cliques por segundo (CPS). Escolha 1, 5, 10, 15, 30 ou 60 segundos e clique ou toque na caixa o mais rápido que puder. O cronômetro começa no primeiro clique. Quando o tempo acaba, você vê seu CPS, uma classificação de Tartaruga a Relâmpago e seu recorde para essa duração. Há também modos de clique direito e de barra de espaço.",
    howTo: [
      "Escolha a duração. 10 segundos é o teste de clique mais comum. 1 e 5 segundos medem rajadas curtas; 30 e 60 segundos medem resistência.",
      "Escolha o que conta: clique esquerdo, clique direito ou barra de espaço. No celular ou tablet, deixe o clique esquerdo e toque na tela.",
      "Clique ou toque na caixa. O primeiro clique conta e inicia o cronômetro.",
      "Continue clicando até o cronômetro chegar a 0. Seus cliques por segundo, sua classificação e seu recorde aparecem na hora. Use Reiniciar para começar de novo.",
    ],
    features: [
      "Seis durações: 1, 5, 10, 15, 30 e 60 segundos.",
      "Cronômetro, contagem de cliques e cliques por segundo ao vivo enquanto você clica.",
      "Classificação de Tartaruga (menos de 5 CPS) a Relâmpago (14 CPS ou mais).",
      "Recorde salvo neste navegador para cada duração e cada modo.",
      "Modos de clique esquerdo, clique direito e barra de espaço. Espaço e Enter não contam nos modos de clique, e segurar a tecla não repete no modo barra de espaço.",
      "Suporte a toque, com exatamente uma contagem por toque.",
    ],
    examples: [
      {
        title: "Um teste de clique de 10 segundos",
        body: "72 cliques em 10 segundos dão 72 ÷ 10 = 7,2 CPS, a classificação Coelho.",
      },
      {
        title: "Uma rajada de 1 segundo",
        body: "9 cliques em 1 segundo são 9 CPS, a classificação Cavalo. Testes curtos costumam render mais que os longos, porque a mão não tem tempo de cansar.",
      },
    ],
    explanation:
      "CPS é o número de cliques contados dividido pela duração do teste em segundos. A duração é fixa, então um teste de 10 segundos sempre divide por 10, mesmo que seu último clique tenha vindo um pouco antes do fim. Cada pressionamento conta uma vez: um botão do mouse, um toque na tela ou a tecla Espaço no modo barra de espaço. Tecla segurada, Enter e o clique que abriria o menu de contexto não somam nada.",
    tips: [
      "Apoie o pulso na mesa e clique com a ponta do dedo, não com o braço inteiro.",
      "Aqueça com um teste de 5 segundos antes de buscar um recorde de 10 segundos ou mais.",
      "Use jitter click ou butterfly click só em testes curtos e pare se a mão ou o pulso doer.",
    ],
    limitations:
      "O resultado depende do mouse, da tela sensível ao toque e do navegador, então pontuações de aparelhos diferentes não são diretamente comparáveis. Um mouse que dá clique duplo sozinho infla a contagem. O teste não consegue saber se foi usado um auto clicker ou uma macro. Os recordes ficam no armazenamento local deste navegador; limpar os dados do site apaga tudo.",
    faqs: [
      {
        question: "O que é um teste de CPS?",
        answer:
          "Um teste de CPS mede cliques por segundo. Você clica o mais rápido possível por um tempo fixo e o total é dividido pelos segundos. O teste de clique de 10 segundos é a versão mais comum.",
      },
      {
        question: "Qual é o CPS médio?",
        answer:
          "Para o clique normal com um dedo, cerca de 6 a 7 CPS é o número mais citado. Use como referência aproximada, não como padrão medido. Sua mão, seu mouse e a duração do teste mudam o resultado.",
      },
      {
        question: "10 CPS é bom?",
        answer:
          "Sim. 10 CPS em 10 segundos está acima do que a maioria alcança com clique normal e dá a classificação Cavalo aqui. Muita gente que passa de 10 CPS usa jitter click ou butterfly click.",
      },
      {
        question: "Como clicar mais rápido?",
        answer:
          "Relaxe a pegada, apoie o pulso na mesa e clique com o dedo, não com o braço. Treine em testes curtos e acompanhe seu recorde. Jitter click e butterfly click podem aumentar o CPS, mas custam precisão e cansam mais a mão.",
      },
      {
        question: "Qual é a diferença entre jitter click e butterfly click?",
        answer:
          "No jitter click você contrai o antebraço para que um dedo vibre sobre o botão. No butterfly click dois dedos se alternam no mesmo botão. O butterfly costuma render mais, mas alguns mouses e alguns servidores de jogos não lidam bem com ele.",
      },
      {
        question: "Minhas pontuações são enviadas a um servidor?",
        answer:
          "Não. O teste roda nesta aba do navegador. Os recordes ficam salvos só no armazenamento local deste navegador, e Apagar recordes remove todos.",
      },
    ],
  },
};

export default page;
