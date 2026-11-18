import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Um contador de palavras mostra as palavras, os caracteres e as frases de um texto colado, junto com uma estimativa simples do tempo de leitura.",
    "content": {
      "about": "O contador de palavras mostra palavras, caracteres, caracteres sem espaços, frases, parágrafos e um tempo de leitura do texto que você cola ou digita. Os totais são atualizados enquanto você escreve. Use para uma legenda, um resumo, uma publicação curta ou um rascunho com limite de palavras. O tempo de leitura é uma estimativa a partir da contagem. A página não corrige a gramática nem decide quem escreveu o texto. Você também pode ver a densidade das palavras e expressões mais usadas e um tempo de fala com a velocidade que escolher.",
      "howTo": [
        "Cole ou digite o texto na caixa. As contagens são atualizadas a cada alteração.",
        "Consulte Palavras, Caracteres, Caracteres sem espaços, Frases, Parágrafos, Tempo de leitura e Tempo de fala.",
        "Use «Texto de exemplo» para carregar um exemplo curto, «Limpar» para esvaziar a caixa ou «Copiar texto» para copiar o que você escreveu.",
        "Se quiser, ajuste as palavras por minuto do tempo de fala e ative o filtro de palavras comuns em inglês na tabela de densidade."
      ],
      "examples": [
        {
          "title": "Hello world.",
          "body": "Essa linha tem 2 palavras, 12 caracteres, 11 caracteres sem espaços, 1 frase, 1 parágrafo e 1 linha. O tempo de leitura mostra 1 min. Qualquer texto não vazio com menos de 226 palavras mostra pelo menos 1 min, porque a página arredonda para cima e não exibe frações de minuto."
        },
        {
          "title": "Espaços, uma linha em branco e um emoji",
          "body": "hello   world continua sendo 2 palavras. São 13 caracteres e 10 caracteres sem espaços, porque os espaços a mais contam como caracteres e não como palavras. «One.» seguido de uma linha vazia e «Two.» são 2 palavras, 2 frases, 2 parágrafos e 3 linhas. A linha vazia conta como linha. A😀 são 2 caracteres e 1 palavra. O emoji é um ponto de código Unicode."
        },
        {
          "title": "Um emoji composto e uma frase mais longa",
          "body": "Um emoji composto pode contar como vários caracteres, mesmo quando aparece como um só desenho. Confira o total de Caracteres se o limite for rígido."
        }
      ],
      "explanation": "As palavras são sequências de caracteres que não são espaço. Os caracteres incluem letras, números, espaços, pontuação e emojis. «Caracteres sem espaços» exclui espaços, tabulações e quebras de linha. As frases terminam com ponto, interrogação ou exclamação. Os parágrafos são separados por uma linha em branco. O tempo de leitura divide as palavras por 225 e arredonda para cima, em minutos inteiros. O tempo de fala usa a velocidade que você define, em geral 150 palavras por minuto. A densidade mostra as palavras e as expressões de duas palavras mais usadas e a proporção de cada uma em relação ao total.",
      "sections": [
        {
          "heading": "O que conta como palavra",
          "paragraphs": [
            "Uma palavra é uma sequência de caracteres que não são espaços, tabulações nem quebras de linha. As palavras com hífen continuam sendo uma só. Um número como 2026 é uma palavra. A pontuação grudada a uma palavra, como em world., permanece dentro dessa palavra.",
            "Um texto sem espaços entre as palavras conta como uma só palavra, embora uma pessoa o dividisse. Isso inclui muitas frases em japonês, chinês e escritas semelhantes. A contagem de caracteres continua útil nesses casos. A contagem de palavras não é uma análise linguística."
          ]
        },
        {
          "heading": "Frases, parágrafos e o texto de exemplo",
          "paragraphs": [
            "«Hello. How are you? Fine!» são três frases porque . ? e ! fecham cada uma. As reticências … também fecham uma frase. Uma linha sem pontuação ainda é uma frase se tiver algum caractere que não seja um espaço.",
            "Os parágrafos ignoram os blocos vazios. Dois trechos de texto com uma linha em branco no meio são dois parágrafos. A contagem de linhas inclui essa linha vazia; por isso «One.» e «Two.» com uma linha em branco entre eles são 3 linhas e 2 parágrafos.",
            "«Texto de exemplo» carrega uma nota fixa que começa por «Tools Star Hub counts words in your browser.» Serve só de demonstração. «Limpar» a remove."
          ]
        },
        {
          "heading": "Como ler as linhas de tempo de leitura e de fala",
          "paragraphs": [
            "A página não mede o quão rápido você lê. Divide a contagem de palavras por 225 e arredonda para cima até um minuto inteiro, com um mínimo de 1 minuto quando há pelo menos uma palavra. 225 palavras são 1 min. 226 palavras são 2 min. Uma caixa vazia é 0 min.",
            "O tempo de fala é independente e usa a velocidade que você escolhe entre 50 e 250 palavras por minuto. Um discurso costuma ser mais lento do que a leitura em silêncio. Se precisar de uma fala de 5 minutos, compare a contagem de palavras com a velocidade que você definiu."
          ]
        },
        {
          "heading": "Privacidade e densidade de palavras-chave",
          "paragraphs": [
            "A contagem é feita no navegador. O texto não é enviado ao Tools Star Hub nem salvo no armazenamento local. «Copiar» usa a área de transferência do navegador só quando você toca em «Copiar texto». Se você aceitar as análises, elas podem contar a visita à página. Elas não recebem o texto da caixa.",
            "A densidade de palavras-chave e as expressões de duas palavras mais usadas também são calculadas nesta aba. Elas descrevem a frequência dos termos no texto; não corrigem a gramática nem avaliam a qualidade da escrita."
          ]
        }
      ],
      "tips": [
        "Use Caracteres sem espaços quando um formulário indicar que os espaços não contam. O total de Caracteres inclui os espaços.",
        "Não tome o tempo de leitura como um cronômetro. Ele passa de 1 min para 2 min ao chegar a 226 palavras.",
        "Um emoji composto pode contar como vários caracteres. Confira o total de Caracteres se o limite de uma plataforma for rígido.",
        "O tempo de fala e a densidade de palavras-chave também ficam nesta página. O contador não remove linhas duplicadas, não muda maiúsculas nem corrige a ortografia. Outras ferramentas de texto deste site fazem essas tarefas."
      ],
      "limitations": "Esta página conta palavras, caracteres, frases e parágrafos e estima tempos de leitura e de fala. Ela não corrige ortografia ou gramática, não identifica o autor e não compara o resultado com o Microsoft Word ou com outro editor. A densidade é uma contagem de termos, não uma avaliação de SEO. O texto permanece neste navegador e não é enviado a um servidor.",
      "faqs": [
        {
          "question": "Como as palavras são contadas?",
          "answer": "Uma palavra é qualquer sequência de caracteres que não seja espaço, tabulação ou quebra de linha. «Hello world» são 2 palavras. Vários espaços seguidos não criam palavras extras."
        },
        {
          "question": "Quantos caracteres tem um emoji?",
          "answer": "A página conta pontos de código Unicode. Muitos emojis simples valem 1 caractere. Emojis compostos, como alguns com tom de pele ou combinação de símbolos, podem valer mais de um ponto de código e aparecer como 2 ou mais caracteres."
        },
        {
          "question": "Como as frases e os parágrafos são separados?",
          "answer": "Uma frase termina com ponto, ponto de interrogação ou ponto de exclamação. Os parágrafos são blocos separados por uma linha em branco. Uma quebra de linha simples, sem linha vazia, não cria um parágrafo novo."
        },
        {
          "question": "Como o tempo de leitura é estimado?",
          "answer": "A página divide o número de palavras por 225 e arredonda para cima, em minutos inteiros. Um texto curto aparece como 1 min. Isso é só uma estimativa e não mede a sua velocidade real de leitura."
        },
        {
          "question": "O contador de palavras é grátis?",
          "answer": "Sim. Você pode colar ou digitar texto e ver as contagens sem pagar e sem criar uma conta."
        },
        {
          "question": "Meu texto é enviado para algum lugar?",
          "answer": "Não. A contagem acontece neste navegador. O Tools Star Hub não envia o texto a um servidor nem o guarda em um armazenamento remoto."
        },
        {
          "question": "Como os espaços a mais são contados?",
          "answer": "Espaços extras entram na contagem de caracteres, mas não criam palavras novas. «hello   world» continua sendo 2 palavras. «Caracteres sem espaços» ignora espaços, tabulações e quebras de linha."
        },
        {
          "question": "Quantas palavras tem um discurso de 5 minutos?",
          "answer": "O tempo de fala usa a velocidade que você indicar, em geral mais lenta do que a leitura. A 150 palavras por minuto, um discurso de 5 minutos tem cerca de 750 palavras. O tempo de leitura desta página permanece em cerca de 225 palavras por minuto e é arredondado para um minuto inteiro."
        },
        {
          "question": "Por que o tempo de leitura pula de 1 para 2 minutos?",
          "answer": "Porque o valor é arredondado para cima, em minutos inteiros. 226 palavras já aparecem como 2 min, já que 226 ÷ 225 é um pouco mais que 1."
        },
        {
          "question": "O que é «Caracteres sem espaços»?",
          "answer": "É o número de caracteres depois de remover espaços, tabulações e quebras de linha. Letras, números, pontuação e emojis continuam na conta."
        },
        {
          "question": "Palavras com hífen contam como uma ou como duas?",
          "answer": "Se não houver espaço em volta do hífen, a página conta como uma palavra. «pré-história» é 1 palavra. «pré história» são 2."
        },
        {
          "question": "O que acontece com um texto em chinês ou japonês sem espaços?",
          "answer": "Sem espaços, um trecho contínuo pode ser contado como uma só palavra, mesmo que represente várias palavras na língua original. A contagem de caracteres continua útil nesses casos. Esta página não segmenta ideogramas."
        },
        {
          "question": "Uma linha sem ponto conta como frase?",
          "answer": "Não, se não terminar com ponto, interrogação ou exclamação. Uma linha solta sem esses sinais não entra na contagem de frases."
        },
        {
          "question": "O texto de exemplo fica salvo?",
          "answer": "Não. «Texto de exemplo» só preenche a caixa neste momento. Se você recarregar a página, o texto some. Nada é guardado no servidor."
        },
        {
          "question": "Posso usar para um limite de caracteres de uma rede social?",
          "answer": "Sim, use a contagem de caracteres como referência. Algumas redes contam links, menções ou emojis de outro jeito, então o número oficial da plataforma pode ser um pouco diferente."
        },
        {
          "question": "O contador corrige a ortografia ou a gramática?",
          "answer": "Não. Ele só conta palavras, caracteres e a densidade dos termos mais usados. Não corrige a gramática, não identifica o autor e não avalia a qualidade do texto."
        },
        {
          "question": "Funciona sem conexão depois que a página carrega?",
          "answer": "Sim, a contagem roda neste navegador depois que a página foi carregada. Você não precisa de uma nova conexão para colar ou editar o texto. Recarregar a página sem conexão pode falhar se o navegador não tiver guardado uma cópia."
        },
        {
          "question": "As linhas em branco são contadas?",
          "answer": "Uma linha em branco conta como linha e separa parágrafos. Ela não aumenta a contagem de palavras. Várias linhas vazias seguidas ainda separam os parágrafos, mas não criam parágrafos extras vazios na conta exibida."
        },
        {
          "question": "Posso copiar o resultado das contagens?",
          "answer": "Você pode copiar o texto da caixa com «Copiar texto». Os totais aparecem na página para consulta. Não há um botão separado que exporte só os números."
        },
        {
          "question": "Essa contagem coincide com a do Microsoft Word?",
          "answer": "Não necessariamente. O Word pode tratar hífens, quebras de seção, caixas de texto e campos de outro jeito. Use esta página como uma contagem clara no navegador, não como uma auditoria do Word."
        }
      ]
    },
    "metaDescription": "Conte palavras, caracteres, frases e parágrafos no seu navegador e estime o tempo de leitura. O texto não é enviado nem salvo.",
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "A contagem acontece no seu navegador. Nada é enviado a um servidor.",
      "Paste or type text here...": "Cole ou digite o texto aqui...",
      "Sample text": "Texto de exemplo",
      "Reading time": "Tempo de leitura",
      "0 min": "0 min",
      "{0} min": "{0} min",
      "0 sec": "0 s",
      "{0} sec": "{0} s",
      "{0} min {1} sec": "{0} min {1} s",
      "Term": "Termo",
      "Count": "Contagem",
      "Share of words": "Proporção das palavras",
      "Speaking time": "Tempo de fala",
      "Speaking speed (words per minute)": "Velocidade de fala (palavras por minuto)",
      "Reading time stays at about 225 words per minute. Speaking time uses the speed you set, usually slower. Enter a value from 50 to 250.": "O tempo de leitura permanece em cerca de 225 palavras por minuto. O tempo de fala usa a velocidade que você definir, em geral mais lenta. Digite um valor de 50 a 250.",
      "Ignore common English words (the, and, of…)": "Ignorar palavras comuns em inglês (the, and, of…)",
      "Keyword density": "Densidade de palavras-chave",
      "Counts are taken from letters and numbers in your text. The share is that term’s count divided by all words, including common words. This is not grammar checking and it does not judge writing quality.": "As contagens vêm de letras e números do seu texto. A proporção é a contagem desse termo dividida por todas as palavras, inclusive as comuns. Isto não é correção gramatical e não avalia a qualidade do texto.",
      "Top words": "Palavras mais usadas",
      "Top two-word phrases": "Expressões de duas palavras mais usadas",
      "No words to count yet.": "Ainda não há palavras para contar.",
      "No phrases to count yet.": "Ainda não há expressões para contar.",
      "Enter a speaking speed in words per minute.": "Digite uma velocidade de fala em palavras por minuto.",
      "Enter a speaking speed greater than 0.": "Digite uma velocidade de fala maior que 0.",
      "Enter a speaking speed between 50 and 250 words per minute.": "Digite uma velocidade de fala entre 50 e 250 palavras por minuto."
    }
  },
  "character-counter": {
    "answer": "Um contador de caracteres conta caracteres, palavras e linhas enquanto você digita; o total principal inclui os espaços.",
    "content": {
      "about": "Conte caracteres, palavras e linhas, com um total separado sem os espaços. Use quando um formulário, um post em rede social ou uma meta description tiver limite de caracteres. Um emoji conta como um caractere e, ao contrário do contador de palavras, esta página não divide o texto em frases.",
      "howTo": [
        "Digite ou cole o texto na caixa.",
        "As contagens de caracteres, palavras e linhas são atualizadas na hora.",
        "Copie a contagem de caracteres ou limpe a caixa quando terminar."
      ],
      "examples": [
        {
          "title": "Emoji e letras",
          "body": "“A😀” tem 2 caracteres: uma letra e um emoji."
        },
        {
          "title": "Linhas",
          "body": "Uma quebra de linha começa uma nova linha. Uma caixa vazia tem 0 linhas."
        }
      ],
      "explanation": "Os caracteres são contados como pontos de código Unicode. Os espaços entram no total principal e ficam fora do total “sem espaços”. As linhas seguem as quebras de linha da caixa, incluindo uma última linha em branco.",
      "limitations": "Um caractere é um ponto de código Unicode, então um emoji conta como um mesmo que seja desenhado com vários símbolos. Os espaços ficam no total principal e saem do total sem espaços. Os limites de frase não são detectados aqui.",
      "faqs": [
        {
          "question": "O contador de caracteres é grátis?",
          "answer": "Sim. Você pode contar caracteres, palavras e linhas enquanto digita, sem pagar nem criar conta."
        },
        {
          "question": "O texto sai do meu computador?",
          "answer": "Não. O texto fica no seu navegador e não é enviado a nenhum servidor."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. As contagens são geradas nesta aba. Ao limpar a caixa, o texto sai da página, e ele não é gravado no armazenamento local."
        },
        {
          "question": "Espaços contam como caracteres?",
          "answer": "Sim, no total principal. O contador também mostra um segundo total sem espaços, que alguns formulários e trabalhos pedem."
        },
        {
          "question": "Quantos caracteres tem um emoji?",
          "answer": "Nesta página, um emoji sozinho conta como um caractere Unicode. Alguns apps contam certos emojis como dois ou mais, então o limite deles pode ser um pouco diferente."
        },
        {
          "question": "Como conto os caracteres de um rascunho colado?",
          "answer": "Cole o texto e leia os totais ao vivo de caracteres, caracteres sem espaços, palavras e linhas."
        },
        {
          "question": "Os espaços entram no total principal de caracteres?",
          "answer": "Sim, no total principal. Use o número sem espaços quando um formulário não os conta."
        },
        {
          "question": "Como esta página conta um emoji?",
          "answer": "Um emoji sozinho costuma contar aqui como um caractere Unicode. Algumas plataformas contam de outro jeito os emojis de vários pontos de código."
        },
        {
          "question": "As quebras de linha contam como caracteres?",
          "answer": "Em geral, sim: cada quebra pode entrar no total de caracteres. Se o limite for rígido, confira os dois totais."
        },
        {
          "question": "Posso contar só um parágrafo selecionado?",
          "answer": "Cole só esse parágrafo, ou recorte o rascunho antes de consultar o contador."
        },
        {
          "question": "Qual é a diferença entre caracteres e bytes?",
          "answer": "Os caracteres são unidades Unicode; os bytes dependem da codificação (o UTF-8 pode usar vários bytes por caractere)."
        },
        {
          "question": "As tags HTML entram na conta se eu colar código?",
          "answer": "Sim: cada caractere colado conta, inclusive < e >. Remova as tags antes se quiser só o texto visível."
        },
        {
          "question": "Quantos caracteres cabem em um SMS típico?",
          "answer": "O limite clássico fica em torno de 160 caracteres GSM; com Unicode pode ser menor. Confirme na ferramenta da sua operadora."
        },
        {
          "question": "Há um limite prático ao colar texto?",
          "answer": "Textos muito grandes podem deixar o navegador mais lento. Para arquivos enormes, prefira um editor no computador."
        },
        {
          "question": "Por que o Word e este contador não coincidem por completo?",
          "answer": "O Word pode contar campos, quebras e alguns caracteres de um jeito diferente. Use esta página como referência e, se o limite for o do Word, confira também lá."
        },
        {
          "question": "Posso controlar aqui os limites do Twitter ou do LinkedIn?",
          "answer": "Você pode acompanhar o total de caracteres, mas cada rede pode contar links, menções e emojis de um jeito próprio. Confira o contador da plataforma."
        },
        {
          "question": "Os espaços múltiplos entre palavras entram todos na conta?",
          "answer": "Sim, no total principal de caracteres. No total sem espaços, eles são excluídos."
        },
        {
          "question": "As frases são contadas em separado?",
          "answer": "Não. Este contador mostra caracteres, palavras e linhas, não frases. Use o contador de palavras para frases e parágrafos."
        },
        {
          "question": "O que conta como palavra aqui?",
          "answer": "Uma palavra é um grupo de caracteres separados por espaços ou quebras de linha."
        },
        {
          "question": "Meu texto é enviado enquanto eu conto?",
          "answer": "Não. O texto permanece nesta aba e não é enviado a um servidor."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "As contagens mudam enquanto você digita. O texto fica no seu navegador.",
      "Type or paste text...": "Digite ou cole o texto…",
      "Copy count": "Copiar contagem"
    },
    "metaDescription": "Conte caracteres, palavras e linhas no seu navegador, com ou sem espaços. Ideal para limites de formulários ou redes. O texto não é enviado."
  },
  "case-converter": {
    "answer": "Um conversor de maiúsculas e minúsculas muda o texto entre maiúsculas, minúsculas, formato de título, camelCase e estilos parecidos.",
    "content": {
      "about": "Alterne o texto entre maiúsculas, minúsculas, formato de título, formato de frase, camelCase, PascalCase, snake_case e kebab-case. Quem renomeia identificadores no código ou corrige um título muda o formato em um só passo. O formato de frase segue a pontuação do inglês e não aplica as regras de maiúsculas de outros idiomas.",
      "howTo": [
        "Cole o texto na caixa.",
        "Escolha um formato. O resultado é atualizado na hora.",
        "Copie o resultado ou limpe as duas caixas."
      ],
      "examples": [
        {
          "title": "Formato de título",
          "body": "“hello world” vira “Hello World”. Cada palavra começa com maiúscula."
        },
        {
          "title": "camelCase",
          "body": "“Hello world example” vira helloWorldExample."
        }
      ],
      "explanation": "Maiúsculas e minúsculas usam as regras do inglês. O formato de título coloca em maiúscula a primeira letra de cada palavra. O formato de frase passa o texto para minúsculas e depois coloca maiúscula no início e depois de . ! ? ou … — uma regra simples, pensada para o inglês, e não um corretor gramatical para todos os idiomas. camelCase, PascalCase, snake_case e kebab-case são montados a partir de grupos de letras e números.",
      "limitations": "O formato de frase segue a pontuação do inglês, não as regras de maiúsculas de outros idiomas. camelCase, snake_case e kebab-case mantêm os grupos de letras e números e removem a pontuação entre eles.",
      "faqs": [
        {
          "question": "O conversor é grátis?",
          "answer": "Sim. Alternar entre maiúsculas, minúsculas, formato de título e os formatos de código é grátis e sem conta."
        },
        {
          "question": "O formato de frase funciona em qualquer idioma?",
          "answer": "Não. Ele segue um padrão básico de pontuação do inglês e não aplica regras específicas de cada idioma."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. O texto colado é convertido nesta aba. Ele não é enviado nem gravado no armazenamento local."
        },
        {
          "question": "Qual é a diferença entre título e frase?",
          "answer": "O modo título coloca em maiúscula a primeira letra de cada palavra, como em uma manchete em inglês. O modo frase coloca em maiúscula só a primeira letra de cada frase, como em um texto normal."
        },
        {
          "question": "O que são camelCase, snake_case e kebab-case?",
          "answer": "São estilos de nomes usados em programação. camelCase junta palavras com maiúsculas (myVariableName), snake_case usa sublinhados (my_variable_name) e kebab-case usa hifens (my-variable-name)."
        },
        {
          "question": "Como passo um parágrafo de tipo título para tipo frase?",
          "answer": "Cole o texto, escolha o estilo de destino e copie o resultado. Revise os nomes de marca que devam manter maiúsculas fixas."
        },
        {
          "question": "Na prática, como se distinguem camelCase, snake_case e kebab-case?",
          "answer": "camelCase une as palavras com maiúsculas (myVar), snake_case usa underscores (my_var) e kebab-case usa hífens (my-var)."
        },
        {
          "question": "Quando se prefere kebab-case?",
          "answer": "Os slugs de URL e muitos nomes de classe CSS preferem hífens. Evite os espaços nesses contextos."
        },
        {
          "question": "O tipo frase deixa em maiúscula o pronome I?",
          "answer": "Em inglês, o tipo frase deve manter o I maiúsculo mesmo no meio da frase. Confira depois de converter."
        },
        {
          "question": "O que acontece com os dígitos e a pontuação?",
          "answer": "Em geral eles ficam no lugar enquanto as letras mudam. Em alguns modos, os separadores dos identificadores podem ser reescritos."
        },
        {
          "question": "Posso passar identificadores de camelCase para snake_case?",
          "answer": "Sim, quando há um modo de identificadores: o texto é dividido nas maiúsculas e depois unido com underscores."
        },
        {
          "question": "Por que um nome de marca pode perder maiúsculas no tipo título?",
          "answer": "Um conversor simples trata todas as palavras da mesma forma. Reaplique à mão a grafia da marca depois de converter."
        },
        {
          "question": "As quebras de linha dos parágrafos são conservadas?",
          "answer": "Em geral, sim. Se um modo comprimir os espaços, cole depois em um editor com estrutura."
        },
        {
          "question": "Há um limite prático ao colar texto?",
          "answer": "Textos muito grandes podem deixar a aba mais lenta. Converta o texto por capítulos, se for preciso."
        },
        {
          "question": "Como a conversão funciona fora do inglês?",
          "answer": "As regras de maiúsculas mudam conforme o idioma. O resultado fica melhor em alfabetos latinos simples; em outras línguas, revise com cuidado."
        },
        {
          "question": "Qual é a diferença entre PascalCase e camelCase?",
          "answer": "PascalCase põe em maiúscula a primeira letra de todas as palavras, inclusive a primeira (MyVar); camelCase deixa a primeira palavra em minúscula (myVar)."
        },
        {
          "question": "Os nomes de constantes devem usar SCREAMING_SNAKE_CASE?",
          "answer": "Muitos guias de estilo fazem isso com as constantes. Converta e depois confirme as regras do seu projeto."
        },
        {
          "question": "Mudar maiúsculas pode alterar o sentido em alemão ou em turco?",
          "answer": "É possível: esses idiomas têm regras que um conversor simples pode não aplicar. Convém que alguém nativo revise o resultado."
        },
        {
          "question": "Posso passar um documento inteiro para minúsculas para compará-lo?",
          "answer": "Sim: coloque os dois lados em minúsculas antes de um diff se quiser uma comparação que ignore maiúsculas."
        },
        {
          "question": "Meu texto é enviado durante a conversão?",
          "answer": "A mudança de maiúsculas é feita no navegador; nenhum documento é salvo no servidor."
        }
      ]
    },
    "ui": {
      "Paste text to convert": "Cole o texto para converter",
      "Case": "Formato",
      "Result ({0})": "Resultado ({0})",
      "UPPERCASE": "MAIÚSCULAS",
      "lowercase": "minúsculas",
      "Title Case": "Formato De Título",
      "Sentence case": "Formato de frase"
    },
    "metaDescription": "Converta texto em maiúsculas, minúsculas, tipo título, camelCase, snake_case e kebab-case no seu navegador. Nada é enviado nem salvo."
  },
  "lorem-ipsum-generator": {
    "answer": "Um gerador de lorem ipsum cria parágrafos, frases ou palavras de preenchimento para layouts e rascunhos.",
    "content": {
      "about": "Gere parágrafos, frases ou palavras de preenchimento a partir de uma lista fixa de palavras em latim. Designers usam para preencher um mockup quando o texto real ainda não existe. O primeiro parágrafo começa com a frase clássica, e cada pedido vai até 20 parágrafos, 50 frases ou 500 palavras.",
      "howTo": [
        "Escolha parágrafos, frases ou palavras.",
        "Defina uma quantidade dentro dos limites mostrados e clique em “Gerar”.",
        "Copie o texto, gere de novo ou volte aos valores padrão."
      ],
      "examples": [
        {
          "title": "Três parágrafos",
          "body": "O primeiro parágrafo começa com a frase clássica “Lorem ipsum dolor sit amet…” e continua com palavras embaralhadas de uma lista local."
        },
        {
          "title": "Cinquenta palavras",
          "body": "Útil como um preenchimento curto em um mockup."
        }
      ],
      "explanation": "Lorem ipsum é latim embaralhado usado como texto fictício para avaliar um layout sem o conteúdo real. Este gerador usa uma lista local de palavras e os valores aleatórios criptograficamente fortes do navegador. Ele não chama nenhuma API externa. A quantidade é limitada para a página continuar utilizável.",
      "limitations": "O resultado é latim de preenchimento de uma lista fixa: não é uma tradução nem texto para um produto real. Os parágrafos vão até 20, as frases até 50 e as palavras até 500.",
      "faqs": [
        {
          "question": "O gerador de lorem ipsum é grátis?",
          "answer": "Sim. Gerar parágrafos, frases ou palavras de preenchimento é grátis e não exige conta."
        },
        {
          "question": "O texto é baixado da internet?",
          "answer": "Não. As palavras ficam nesta página e são montadas no seu navegador."
        },
        {
          "question": "Por que existe um máximo?",
          "answer": "Blocos muito grandes podem travar uma aba. Os parágrafos vão até 20, as frases até 50 e as palavras até 500."
        },
        {
          "question": "O que significa lorem ipsum?",
          "answer": "Lorem ipsum é um latim embaralhado usado como texto de preenchimento. Ele parece texto real, então dá para avaliar um layout sem que os leitores prestem atenção nas palavras."
        },
        {
          "question": "Quando devo usar texto de preenchimento?",
          "answer": "Em protótipos, modelos e testes de fontes. Troque pelo texto real antes de a página ir ao ar, porque o preenchimento não diz nada aos visitantes."
        },
        {
          "question": "Como preencho uma maquete com o texto clássico?",
          "answer": "Escolha palavras, frases ou parágrafos, indique uma quantidade, gere e cole o resultado no layout."
        },
        {
          "question": "Posso gerar só algumas palavras para o texto de um botão?",
          "answer": "Sim: use o modo de palavras com uma quantidade pequena para que o rótulo continue curto."
        },
        {
          "question": "Por que o latim de preenchimento parece embaralhado?",
          "answer": "Ele foi pensado como preenchimento pseudolatino para que quem revisa preste atenção no layout, não no significado."
        },
        {
          "question": "Uma demonstração para um cliente ainda deve aparecer com lorem?",
          "answer": "Não: troque pelo texto real antes do lançamento para que o SEO e a acessibilidade coincidam com o produto."
        },
        {
          "question": "Como obtenho quebras de parágrafo em vez de um único bloco?",
          "answer": "Use o modo de parágrafos para que o gerador insira blocos separados que você possa diagramar."
        },
        {
          "question": "Posso gerar de novo até o ritmo ficar bom?",
          "answer": "Sim: gere outra vez para obter uma amostra nova e mude o comprimento até o layout ficar equilibrado."
        },
        {
          "question": "O texto de preenchimento precisa ser diferente a cada vez?",
          "answer": "Em capturas, às vezes sim; em testes de layout, repetir o mesmo lorem costuma bastar."
        },
        {
          "question": "Como os redatores devem colocar o texto real no lugar do lorem?",
          "answer": "Coloque as frases finais nos mesmos espaços e apague as frases de preenchimento que restarem."
        },
        {
          "question": "É melhor o lorem do que repetir «texto texto texto»?",
          "answer": "Sim: comprimentos de palavra variados testam a quebra de linha e o espaçamento de um jeito mais realista."
        },
        {
          "question": "Posso gerar lorem em outro idioma?",
          "answer": "Este gerador clássico tem estilo latino; para outros idiomas, use uma ferramenta de preenchimento localizada."
        },
        {
          "question": "Que quantidade uso para uma seção hero?",
          "answer": "Costuma bastar uma ou duas frases curtas; os parágrafos longos combinam melhor com as maquetes do corpo."
        },
        {
          "question": "Gerar lorem implica risco de direitos autorais?",
          "answer": "Os trechos padrão de lorem são tratados em geral como preenchimento; ainda assim, evite colar prosa de terceiros sem identificá-la."
        },
        {
          "question": "Como as ferramentas de wireframe usam este resultado?",
          "answer": "Quem desenha cola os blocos em camadas de texto para avaliar a hierarquia antes de ter o conteúdo pronto."
        },
        {
          "question": "O QA deve testar formulários preenchidos com lorem?",
          "answer": "Serve para comprimento e transbordamento; também convém testar nomes e e-mails realistas antes do lançamento."
        },
        {
          "question": "O gerador baixa os parágrafos da internet?",
          "answer": "A geração foi pensada para rodar no seu computador a partir das amostras incluídas na página."
        }
      ]
    },
    "ui": {
      "Quantity": "Quantidade",
      "Enter a whole number from {0} to {1}.": "Digite um número inteiro de {0} a {1}.",
      "Enter a quantity.": "Digite uma quantidade.",
      "Choose between {0} and {1} {2}.": "Escolha entre {0} e {1} {2}.",
      "paragraphs": "parágrafos",
      "sentences": "frases",
      "words": "palavras",
      "A secure random source is not available in this browser.": "Não há uma fonte aleatória segura disponível neste navegador."
    },
    "metaDescription": "Gere texto de preenchimento lorem ipsum no seu navegador: parágrafos, frases ou palavras para maquetes. Nada é baixado da internet."
  },
  "text-diff": {
    "answer": "Um comparador de texto compara o texto original e o modificado no seu dispositivo e marca linhas ou palavras adicionadas, removidas e inalteradas.",
    "content": {
      "about": "Cole um original e uma revisão e compare por linha ou por palavra. Ao revisar dois rascunhos do mesmo parágrafo, use o modo de linhas para mudanças em linhas inteiras e o de palavras quando uma frase foi editada no lugar. Cada lado deve ficar abaixo de 200.000 caracteres e de 4.000 linhas ou palavras.",
      "howTo": [
        "Cole o texto original à esquerda e o modificado à direita.",
        "Escolha comparar por linhas ou por palavras.",
        "Clique em “Comparar”. Blocos adicionados, removidos e inalterados têm rótulo, não só cor.",
        "Copie o diff em texto simples se precisar dele em outro editor. Limpe os dois lados ao terminar."
      ],
      "examples": [
        {
          "title": "Duas versões de um parágrafo",
          "body": "O modo de linhas destaca as linhas inteiras que mudaram. O de palavras é melhor quando uma frase foi editada no lugar."
        },
        {
          "title": "Textos idênticos",
          "body": "Se os dois lados forem iguais, o resumo mostra só conteúdo inalterado, sem blocos adicionados ou removidos."
        }
      ],
      "explanation": "A comparação é feita no seu navegador. O texto não é enviado a lugar nenhum e os rascunhos não ficam no armazenamento local. As diferenças são exibidas como nós de texto do React, então o conteúdo não consegue injetar HTML. Entradas muito grandes são recusadas para manter a aba responsiva.",
      "limitations": "Dependendo do modo, cada lado deve ficar abaixo de 200.000 caracteres e de 4.000 linhas ou palavras. A visualização rotula blocos adicionados, removidos e inalterados. Ela não mescla arquivos nem abre documentos do Word.",
      "faqs": [
        {
          "question": "O comparador de texto é grátis?",
          "answer": "Sim. Comparar dois textos por linha ou por palavra é grátis e não exige conta."
        },
        {
          "question": "Como comparo dois arquivos de texto?",
          "answer": "Cole cada versão em um painel, escolha Linhas ou Palavras e clique em “Comparar”. Você pode copiar uma visualização +/- do resultado."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. Os dois painéis são comparados nesta aba. O texto não é enviado a nenhum servidor nem salvo no armazenamento local."
        },
        {
          "question": "O que é um diff?",
          "answer": "Um diff é uma lista das diferenças entre duas versões de um texto: o que foi adicionado, o que foi removido e o que ficou igual."
        },
        {
          "question": "Uso o modo por linha ou por palavra?",
          "answer": "Use o modo por linha para código, listas e arquivos em que linhas inteiras mudam. Use o modo por palavra quando uma frase foi editada no lugar."
        },
        {
          "question": "Posso colar parágrafos inteiros em cada painel?",
          "answer": "Sim: cole o texto da esquerda e o da direita e execute a comparação para destacar inserções, exclusões e linhas sem mudanças."
        },
        {
          "question": "O comparador mostra em separado as linhas adicionadas e as removidas?",
          "answer": "Sim: as adições e as exclusões ficam marcadas para você revisar as mudanças sem ler todas as linhas idênticas."
        },
        {
          "question": "Quando passo do modo de linhas para o de palavras?",
          "answer": "Use o de palavras quando as edições estão dentro de linhas longas; use o de linhas quando linhas inteiras foram movidas ou reescritas."
        },
        {
          "question": "Os espaços no final da linha contam como diferença?",
          "answer": "Muitas vezes, sim: o espaço no final de uma linha pode aparecer como uma mudança. Recorte os rascunhos antes se só o conteúdo importar."
        },
        {
          "question": "Posso comparar trechos de código além de prosa?",
          "answer": "Sim: cole qualquer texto simples, inclusive código, registros ou arquivos de configuração, desde que os dois lados sejam texto legível."
        },
        {
          "question": "Como copio só as partes que mudaram?",
          "answer": "Selecione o resultado destacado e copie; a ferramenta não exporta sozinha um arquivo de patch."
        },
        {
          "question": "A ordem dos dois painéis importa?",
          "answer": "Sim: a esquerda é tratada normalmente como o original e a direita como a revisão, o que inverte a leitura das adições e das exclusões."
        },
        {
          "question": "O que acontece se um lado estiver vazio?",
          "answer": "O lado vazio dá uma vista de tudo removido ou tudo inserido em relação ao lado com texto, útil para despejar um rascunho completo."
        },
        {
          "question": "Posso ignorar maiúsculas ao comparar?",
          "answer": "Só se a ferramenta oferecer uma opção que ignore maiúsculas; se não, normalize você os dois textos antes de comparar."
        },
        {
          "question": "Há um limite de tamanho em cada caixa?",
          "answer": "Cada lado deve ficar abaixo de 200.000 caracteres e de 4.000 linhas ou palavras. Textos enormes é melhor comparar com um utilitário no computador ou em partes."
        },
        {
          "question": "O diff sobrevive a um recarregamento da página?",
          "answer": "Não: ao recarregar, os painéis são esvaziados, a menos que o navegador restaure o estado do formulário. Copie os resultados que quiser conservar."
        },
        {
          "question": "Posso compartilhar um link que inclua os dois textos?",
          "answer": "Não: o comparador deixa o texto só na página; cole-o em um documento ou em um chamado se precisar de um registro compartilhado."
        },
        {
          "question": "Em que isso se diferencia do controle de alterações de um processador de texto?",
          "answer": "O controle de alterações guarda as edições dentro de um documento; esta ferramenta compara duas capturas em texto simples, sem histórico de revisões."
        },
        {
          "question": "Os caracteres Unicode são comparados corretamente?",
          "answer": "Sim, no texto Unicode habitual, embora os caracteres que se parecem (homóglifos) continuem contando como pontos de código distintos."
        },
        {
          "question": "Posso usar para revisar rascunhos de tradução?",
          "answer": "Sim: cole o original e o rascunho da tradução quando quiser ver de relance o que mudou entre as versões."
        }
      ]
    },
    "ui": {
      "Original": "Original",
      "Modified": "Modificado",
      "Compare": "Comparar",
      "Copy diff": "Copiar diff",
      "Both sides are empty.": "Os dois lados estão vazios.",
      "The two texts are the same.": "Os dois textos são iguais.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "O texto comparado é exibido como texto simples, não como HTML. A cor é só uma dica; cada bloco também tem o rótulo Adicionado, Removido ou Inalterado.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "Os dois rascunhos são comparados nesta aba. O texto não é enviado a nenhum servidor.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Mantenha cada lado abaixo de 200.000 caracteres para a comparação continuar fluida.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Esta comparação aceita até {0} {1}. Encurte o texto ou divida-o.",
      "lines": "linhas",
      "words": "palavras"
    },
    "metaDescription": "Compare dois textos no seu navegador, por linhas ou por palavras, e marque o que foi adicionado ou removido. O texto não é enviado nem salvo."
  },
  "duplicate-line-remover": {
    "answer": "Um removedor de linhas duplicadas mantém a primeira ocorrência de cada linha e descarta as repetições seguintes, com opções de aparar espaços e ignorar maiúsculas.",
    "content": {
      "about": "Mantenha a primeira cópia de cada linha e descarte as repetições, na ordem em que você colou. Use em uma lista de e-mails ou em um log em que a mesma linha aparece mais de uma vez. Ignorando maiúsculas e aparando espaços, apple e Apple viram uma linha só, e a primeira grafia é a que fica.",
      "howTo": [
        "Cole um texto com várias linhas. Ele não muda até você executar a ferramenta.",
        "Se quiser, ignore maiúsculas/minúsculas, apare espaços antes de comparar ou descarte linhas vazias.",
        "Clique em “Remover duplicadas”. A primeira ocorrência de cada linha é mantida, em ordem.",
        "Copie ou baixe a lista única. Limpe as duas caixas ao terminar."
      ],
      "examples": [
        {
          "title": "Uma lista de e-mails",
          "body": "apple, Apple, apple com espaços aparados e sem diferenciar maiúsculas viram um único apple, na primeira grafia que você colou."
        },
        {
          "title": "Linhas em branco",
          "body": "Ative “Remover linhas vazias” se quiser só linhas únicas não vazias. Caso contrário, uma linha vazia é um valor como qualquer outro."
        }
      ],
      "explanation": "Cada linha recebe uma chave de acordo com as opções de comparação. Na primeira vez que uma chave aparece, a linha é mantida; repetições posteriores são contadas como duplicadas removidas. A ordem das primeiras ocorrências é preservada.",
      "limitations": "A primeira linha correspondente é mantida, na ordem em que você colou. As opções de maiúsculas, aparar e linhas vazias mudam o que conta como a mesma linha. Repetições posteriores são contadas e descartadas. Mais de 400.000 caracteres são recusados. A caixa de entrada em si não é reescrita.",
      "faqs": [
        {
          "question": "A ferramenta é grátis?",
          "answer": "Sim. Remover linhas repetidas mantendo a primeira cópia é grátis e sem cadastro."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. A remoção de duplicadas acontece nesta aba. A lista não é enviada nem gravada no armazenamento local."
        },
        {
          "question": "A caixa original é alterada?",
          "answer": "Não. A entrada continua como você colou. A lista única aparece na caixa de resultado depois que você executa a operação."
        },
        {
          "question": "Como removo duplicatas de uma lista?",
          "answer": "Cole a lista com um item por linha e execute a ferramenta. A primeira ocorrência de cada linha é mantida na ordem original e as repetições seguintes são descartadas."
        },
        {
          "question": "Ele pode ignorar diferenças de maiúsculas ou espaços?",
          "answer": "Sim. Ative as opções de maiúsculas e de aparar espaços para que linhas como Apple e apple, ou linhas com espaços extras, contem como iguais."
        },
        {
          "question": "Como elimino as linhas repetidas de uma lista?",
          "answer": "Cole um item por linha, execute o removedor e copie a lista sem duplicatas. As primeiras aparições costumam conservar a ordem."
        },
        {
          "question": "Qual cópia é conservada quando uma linha se repete?",
          "answer": "Normalmente a primeira. As linhas idênticas posteriores são removidas."
        },
        {
          "question": "Remover duplicatas também reordena as linhas?",
          "answer": "Não, por padrão. O filtro conserva a ordem de aparição, a menos que você também ordene."
        },
        {
          "question": "Como deduplico uma lista de e-mails linha a linha?",
          "answer": "Cole um endereço por linha; ative a comparação que ignora maiúsculas, se precisar, e depois remova as duplicatas."
        },
        {
          "question": "Posso ver quais linhas foram removidas como repetidas?",
          "answer": "Algumas interfaces destacam as exclusões; se não, compare as contagens de antes e depois ou faça um diff das duas listas."
        },
        {
          "question": "Como as linhas vazias são tratadas na deduplicação?",
          "answer": "Os espaços em branco seguidos podem ser agrupados conforme as opções. Decida se as linhas vazias fazem sentido na sua lista."
        },
        {
          "question": "O removedor atua sobre palavras dentro da mesma linha?",
          "answer": "Ele trabalha por linhas, não por palavras. Se esse for o objetivo, primeiro passe as palavras para linhas."
        },
        {
          "question": "Posso deduplicar linhas inteiras de CSV como linhas?",
          "answer": "Sim, se cada linha for uma fileira e a igualdade for exata. As vírgulas entre aspas continuam fazendo parte da linha."
        },
        {
          "question": "Há um tamanho prático ao colar para remover duplicatas?",
          "answer": "Listas muito grandes podem deixar a aba mais lenta. Divida-as se for preciso. Mais de 400.000 caracteres são recusados."
        },
        {
          "question": "O recorte na comparação pode tirar espaços das linhas que conservo?",
          "answer": "As opções de recorte afetam a comparação e podem tirar espaços das bordas nas linhas conservadas: leia os rótulos das caixas."
        },
        {
          "question": "Por que duas linhas quase idênticas podem sobreviver as duas?",
          "answer": "Espaços ocultos, caracteres Unicode parecidos ou diferenças de maiúsculas podem separá-las. Ative as opções de normalização."
        },
        {
          "question": "Posso deduplicar ignorando maiúsculas?",
          "answer": "Sim, quando o modo que ignora maiúsculas está ativo: Apple e apple contam como uma."
        },
        {
          "question": "Devo ordenar antes de remover as duplicatas?",
          "answer": "Só se quiser a saída ordenada. Ordenar é independente da unicidade."
        },
        {
          "question": "As quebras de linha do Windows e do Unix afetam as coincidências?",
          "answer": "Normalize antes as quebras de linha para que o mesmo texto não divergir por caracteres de retorno de carro."
        },
        {
          "question": "Minha lista é enviada durante o filtro?",
          "answer": "O filtro é feito na sessão do navegador."
        }
      ]
    },
    "ui": {
      "One line per row": "Uma linha por item",
      "Case-insensitive match": "Ignorar maiúsculas/minúsculas",
      "Trim spaces before comparing": "Aparar espaços antes de comparar",
      "Remove empty lines": "Remover linhas vazias",
      "First occurrence of each line is kept, in the original order.": "A primeira ocorrência de cada linha é mantida, na ordem original.",
      "Unique lines": "Linhas únicas",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "As linhas repetidas são descartadas nesta aba. A lista não é enviada.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Mantenha o texto abaixo de 400.000 caracteres para o navegador continuar respondendo."
    },
    "metaDescription": "Remova linhas repetidas no seu navegador e conserve a primeira cópia, com opções de maiúsculas e espaços. O texto não é enviado nem salvo."
  },
  "whitespace-remover": {
    "answer": "Um removedor de espaços apara linhas, junta espaços repetidos, converte tabulações e limpa linhas em branco de acordo com as opções escolhidas.",
    "content": {
      "about": "Limpe espaços, tabulações e linhas em branco extras usando só as opções que você ativar. Use em um log colado ou em uma lista com recuos perdidos. “Aparar cada linha” tem prioridade sobre as caixas separadas de início e fim, e deixar essas opções desligadas preserva o recuo.",
      "howTo": [
        "Cole um texto com espaços, tabulações ou linhas em branco sobrando.",
        "Selecione só as limpezas que quiser. Nada acontece até você clicar em “Limpar texto”.",
        "Confira as contagens de linhas e caracteres e copie ou baixe o resultado.",
        "Limpe as caixas para descartar o texto. Ele não é salvo."
      ],
      "examples": [
        {
          "title": "Linhas de log recuadas",
          "body": "Apare cada linha ou remova só o espaço inicial se precisar manter os espaços do fim."
        },
        {
          "title": "Tabulações e espaços misturados",
          "body": "Converta tabulações em 2 ou 4 espaços e depois junte os espaços repetidos se quiser espaços simples."
        }
      ],
      "explanation": "Cada opção é explícita. “Aparar cada linha” tem prioridade sobre as caixas de início e fim nessa passada. “Remover linhas em branco” apaga todas as linhas vazias; juntar linhas em branco deixa uma única linha vazia entre os blocos.",
      "limitations": "Só as opções ativadas são aplicadas. “Aparar cada linha” tem prioridade sobre as caixas de início e fim nessa passada. “Remover linhas em branco” apaga todas as linhas vazias, enquanto juntar mantém uma entre os blocos. Mais de 400.000 caracteres são recusados.",
      "faqs": [
        {
          "question": "O removedor de espaços é grátis?",
          "answer": "Sim. Limpar espaços, tabulações e linhas em branco extras é grátis e não exige conta."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. A limpeza fica nesta aba. O texto não é enviado a lugar nenhum nem mantido no armazenamento local."
        },
        {
          "question": "Meu recuo vai ser destruído?",
          "answer": "Só se você ativar aparar, remover espaço inicial ou converter tabulações. Deixe essas opções desligadas para manter o recuo."
        },
        {
          "question": "Como removo espaços duplos de um texto?",
          "answer": "Ative a opção que junta espaços repetidos. Sequências de espaços dentro de cada linha viram um único espaço."
        },
        {
          "question": "Como apago linhas vazias?",
          "answer": "Use remover linhas em branco para tirar todas as linhas vazias, ou juntar linhas em branco para manter uma linha vazia entre parágrafos."
        },
        {
          "question": "Como deixo um só espaço no lugar de vários?",
          "answer": "Cole o texto e execute o limpador para que os espaços repetidos sejam reduzidos a um único espaço entre as palavras."
        },
        {
          "question": "Posso tirar os espaços do início e do fim de cada linha?",
          "answer": "Sim: recorte as bordas da linha quando essa opção estiver ativa, o que ajuda a limpar tabelas coladas ou comentários de código."
        },
        {
          "question": "As tabulações são convertidas ou removidas?",
          "answer": "Conforme a configuração, as tabulações podem virar espaços ou ser removidas; visualize o resultado se a indentação importar."
        },
        {
          "question": "Como apago as linhas em branco sem mexer no espaço entre as palavras?",
          "answer": "Escolha um modo de limpeza de linhas vazias, ou uma passagem dedicada a essas linhas se a ferramenta separar esses controles."
        },
        {
          "question": "O espaço inseparável também é removido?",
          "answer": "Alguns limpadores normalizam o NBSP para espaços comuns; teste com uma amostra conhecida se o layout depender dele."
        },
        {
          "question": "Posso limpar o texto antes de colocá-lo em um CSV?",
          "answer": "Sim: normalize primeiro os espaços para que as células não levem um preenchimento oculto que prejudique os cruzamentos."
        },
        {
          "question": "A indentação do código sobrevive?",
          "answer": "Os modos agressivos de remover todo o espaço destroem a indentação; use modos suaves de compactação só para a prosa."
        },
        {
          "question": "Como tiro os espaços ao redor da pontuação?",
          "answer": "Depois de compactar as sequências de espaços, corrija à mão os vãos estranhos junto às vírgulas se o limpador os deixar."
        },
        {
          "question": "Posso processar um parágrafo de cada vez?",
          "answer": "Cole trechos menores quando quiser mais controle e depois junte as partes já limpas."
        },
        {
          "question": "Por que minhas linhas ainda aparecem recuadas no editor?",
          "answer": "O editor pode estar mostrando uma quebra de linha ou tabulações que restaram; copie o texto para uma vista de texto simples para confirmar."
        },
        {
          "question": "Remover espaços é a mesma coisa que remover quebras de linha?",
          "answer": "Não: as ferramentas de quebras de linha atuam sobre os retornos; os limpadores de espaços se concentram em espaços, tabulações e vãos semelhantes."
        },
        {
          "question": "Posso desfazer uma limpeza?",
          "answer": "Conserve o original colado ou use desfazer; regenerar a partir de um rascunho salvo é mais seguro em textos longos."
        },
        {
          "question": "Limpar muda o sentido de colunas alinhadas?",
          "answer": "Sim: um texto alinhado com espaços pode se deslocar; use um editor monoespaçado ou uma ferramenta de tabelas quando as colunas importarem."
        },
        {
          "question": "Como limpo um texto copiado de uma página da web?",
          "answer": "Cole, compacte os espaços a mais e recorte as bordas; o HTML costuma deixar vãos irregulares entre as palavras."
        },
        {
          "question": "Meu texto é enviado enquanto eu limpo?",
          "answer": "O limpador foi pensado para rodar no navegador; copie o resultado no seu computador se precisar de um arquivo duradouro."
        }
      ]
    },
    "ui": {
      "Cleanup options": "Opções de limpeza",
      "Trim each line": "Aparar cada linha",
      "Remove leading whitespace": "Remover espaço inicial",
      "Remove trailing whitespace": "Remover espaço final",
      "Collapse repeated spaces": "Juntar espaços repetidos",
      "Convert tabs to spaces": "Converter tabulações em espaços",
      "Remove blank lines": "Remover linhas em branco",
      "Collapse multiple blank lines": "Juntar várias linhas em branco",
      "Trim entire document": "Aparar o documento inteiro",
      "Tab width": "Largura da tabulação",
      "2 spaces": "2 espaços",
      "4 spaces": "4 espaços",
      "Lines before": "Linhas antes",
      "Lines after": "Linhas depois",
      "Characters before": "Caracteres antes",
      "Characters after": "Caracteres depois",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Espaços, tabulações e linhas em branco são limpos nesta aba. O texto não é enviado a nenhum servidor."
    },
    "metaDescription": "Limpe espaços, tabulações e linhas em branco no seu navegador, só com as opções que você ativar. O texto não é enviado nem salvo."
  },
  "line-sorter": {
    "answer": "Um ordenador de linhas organiza texto de várias linhas em ordem alfabética, numérica ou por tamanho, com remoção opcional de duplicadas.",
    "content": {
      "about": "Ordene um item por linha de A a Z, de Z a A, por um número inicial ou por tamanho. Use quando uma lista de nomes ou uma exportação numerada precisar ficar em ordem sem planilha. Na ordem numérica, 10 vem depois de 2, e uma linha sem número inicial fica depois das linhas numeradas.",
      "howTo": [
        "Cole um item por linha.",
        "Escolha A→Z, Z→A, ordem numérica ou tamanho. Ajuste maiúsculas, aparar, linhas vazias e duplicadas conforme precisar.",
        "Clique em “Ordenar linhas”. Itens iguais mantêm a ordem relativa original.",
        "Copie ou baixe a lista ordenada."
      ],
      "examples": [
        {
          "title": "Nomes",
          "body": "A→Z sem diferenciar maiúsculas coloca ada e Ada lado a lado e, quando são iguais, mantém primeiro a grafia que apareceu antes."
        },
        {
          "title": "Linhas numeradas",
          "body": "“Numérica crescente” lê um número inicial, então 10 vem depois de 2. Linhas sem número ficam depois das numeradas."
        }
      ],
      "explanation": "A ordenação é estável: quando duas linhas são iguais, a que foi digitada antes fica primeiro. Os modos numéricos leem um inteiro ou decimal no início. A remoção opcional de duplicadas usa a mesma chave de comparação das opções de maiúsculas e aparar.",
      "limitations": "Os modos são A a Z, Z a A, numérica crescente, numérica decrescente, mais curta e mais longa. Linhas iguais mantêm a ordem original. O modo numérico lê um número inicial, e uma linha sem número fica depois das numeradas. Mais de 400.000 caracteres são recusados.",
      "faqs": [
        {
          "question": "O ordenador de linhas é grátis?",
          "answer": "Sim. Ordenar uma lista de linhas é grátis e sem conta."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. A ordenação acontece nesta aba. As linhas não são enviadas a nenhum servidor nem salvas no armazenamento local."
        },
        {
          "question": "As linhas vazias são mantidas?",
          "answer": "Sim, a menos que você escolha “Ignorar linhas vazias”. Nos modos alfabéticos, elas são ordenadas como textos vazios."
        },
        {
          "question": "Como ordeno uma lista em ordem alfabética?",
          "answer": "Cole um item por linha e escolha A a Z, ou Z a A para a ordem inversa. Linhas iguais mantêm a ordem original."
        },
        {
          "question": "Como ordeno linhas por número?",
          "answer": "Escolha numérico crescente ou decrescente. Cada linha é ordenada pelo número do início, então 2 vem antes de 10."
        },
        {
          "question": "Como alfabetizo uma lista de linhas colada?",
          "answer": "Cole um item por linha, escolha A–Z crescente, ordene e copie o resultado."
        },
        {
          "question": "Posso ordenar sem distinguir maiúsculas para que a e A fiquem juntas?",
          "answer": "Use a opção que ignora maiúsculas, quando estiver disponível, para que as maiúsculas não desorganizem a lista."
        },
        {
          "question": "Como coloco primeiro as linhas mais longas?",
          "answer": "Escolha o modo de comprimento mais longo. Se não, em uma planilha você pode ordenar pela função NÚM.CARACT ou LEN()."
        },
        {
          "question": "As linhas em branco permanecem no lugar depois de ordenar?",
          "answer": "Depende da configuração: muitas ferramentas as conservam ou as removem; escolha o comportamento de que você precisa."
        },
        {
          "question": "Como ordeno uma lista de compras sem duplicatas?",
          "answer": "Ordene e depois remova as linhas duplicadas (ou use um modo combinado de ordenar e deixar únicos)."
        },
        {
          "question": "Posso ordenar pela segunda palavra de cada linha?",
          "answer": "Esta página ordena linhas inteiras. Se precisar ordenar por campos, divida as colunas em outra ferramenta."
        },
        {
          "question": "Por que os números são ordenados como 10 antes de 2?",
          "answer": "Isso é a ordem lexicográfica. Escolha a ordem numérica quando precisar que o 2 venha antes do 10."
        },
        {
          "question": "Como inverto uma lista que já estava ordenada?",
          "answer": "Execute uma ordem decrescente ou inversa, ou inverta a ordem das linhas sem comparar de novo as chaves."
        },
        {
          "question": "A configuração regional afeta a ordem alfabética?",
          "answer": "Sim: as regras de acentos e de idioma diferem. O resultado pode não coincidir com o dicionário de outro sistema."
        },
        {
          "question": "Posso ordenar aqui linhas de CSV?",
          "answer": "Só se cada fileira for uma linha e você aceitar uma ordem de linha completa, não uma ordenação de verdade por colunas CSV."
        },
        {
          "question": "O que acontece com os espaços no início de uma linha?",
          "answer": "Eles podem mudar a ordem. Recorte as linhas antes se o espaço não devesse importar."
        },
        {
          "question": "O texto original é conservado depois de ordenar?",
          "answer": "Copie o resultado; desfaça no seu computador se ainda tiver a origem. Guarde uma cópia das listas grandes."
        },
        {
          "question": "Como devo ordenar cadeias de versão como 1.10 frente a 1.9?",
          "answer": "Uma ordem alfabética ou numérica simples falha com versões: use uma ferramenta que entenda semver."
        },
        {
          "question": "Posso embaralhar as linhas ao acaso em vez de ordená-las?",
          "answer": "Use um modo de embaralhar ou aleatorizar se existir; se não, a ordenação é determinística."
        },
        {
          "question": "Ordenar as linhas envia minha lista a um servidor?",
          "answer": "A ordenação nesta página foi pensada para permanecer na sessão do navegador."
        }
      ]
    },
    "ui": {
      "One item per line": "Um item por linha",
      "Numeric ascending": "Numérica crescente",
      "Numeric descending": "Numérica decrescente",
      "Shortest → longest": "Mais curta → mais longa",
      "Longest → shortest": "Mais longa → mais curta",
      "Trim before comparing": "Aparar antes de comparar",
      "Ignore empty lines": "Ignorar linhas vazias",
      "Sort lines": "Ordenar linhas",
      "Result lines": "Linhas do resultado",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "As linhas são ordenadas nesta aba. A lista não é enviada ao Tools Star Hub."
    },
    "metaDescription": "Ordene linhas no seu navegador: de A a Z, por número ou por comprimento, com opções de maiúsculas e duplicatas. Nada é enviado."
  },
  "find-and-replace": {
    "answer": "Localizar e substituir troca a primeira ocorrência ou todas no texto que você colar. Você pode ativar ou desativar a diferenciação de maiúsculas.",
    "content": {
      "about": "Cole um texto, digite o que procurar e o texto de substituição. Você pode trocar a primeira ocorrência ou todas, e ignorar maiúsculas e minúsculas.",
      "howTo": [
        "Cole o texto original.",
        "Digite o texto a localizar. Um campo de busca vazio é recusado.",
        "Digite a substituição. Deixe em branco se quiser apagar as ocorrências.",
        "Escolha “Substituir a primeira” ou “Substituir todas” e ative ou desative “Diferenciar maiúsculas”.",
        "Clique em “Substituir” e copie o resultado ou limpe o formulário."
      ],
      "features": [
        "A primeira ocorrência ou todas as que não se sobrepõem.",
        "Busca com ou sem diferenciação de maiúsculas; a substituição é sempre inserida exatamente como você digitou.",
        "A contagem de quantas substituições foram feitas."
      ],
      "examples": [
        {
          "title": "Corrigir um nome repetido",
          "body": "Original: “Ana sent the file. ana sent the notes.” Localizar: ana. Substituição: Ana. Sem diferenciar maiúsculas, “Substituir todas”. Os dois nomes viram Ana e a contagem é 2."
        },
        {
          "title": "Mudar só o primeiro título",
          "body": "Um rascunho repete “Draft” três vezes. “Substituir a primeira” troca a primeira e deixa as outras duas. A contagem é 1."
        }
      ],
      "explanation": "A busca percorre o texto original desde o início. Depois de uma ocorrência, a próxima busca começa após ela, então uma substituição não é buscada de novo. O modo sem diferenciar maiúsculas compara cópias em minúsculas, mas não altera o texto ao redor.",
      "tips": [
        "Se precisar de um padrão como “qualquer número”, use o testador de regex. Esta ferramenta procura exatamente os caracteres que você digita.",
        "Uma substituição que contém o texto buscado é inserida como está e não é substituída de novo na mesma passada."
      ],
      "limitations": "Isto não é uma expressão regular. Não respeita limites de palavra e não ignora texto entre aspas. Ocorrências sobrepostas não são contadas duas vezes.",
      "faqs": [
        {
          "question": "Posso apagar as ocorrências?",
          "answer": "Sim. Deixe a substituição vazia. Cada ocorrência é removida e continua contando como uma substituição."
        },
        {
          "question": "Por que uma palavra curta mudou dentro de uma palavra maior?",
          "answer": "A busca é por caracteres. Procurar “cat” também encontra o início de “catalog”. Adicione espaços se quiser só a palavra inteira ou use o testador de regex com limite de palavra."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. O texto e a busca ficam nesta aba. Eles não são enviados a nenhum servidor."
        },
        {
          "question": "Como substituo uma palavra em todo o texto?",
          "answer": "Digite a palavra a localizar e a substituta, escolha “Substituir tudo” e copie o resultado. Ative a diferenciação de maiúsculas se isso importar."
        },
        {
          "question": "Localizar e substituir aceita expressões regulares?",
          "answer": "Não. Ele procura exatamente o texto que você digita. Para padrões, teste primeiro o padrão no testador de regex."
        },
        {
          "question": "Como troco uma frase por outra em um rascunho inteiro?",
          "answer": "Cole o texto, escreva as cadeias de busca e de substituição, escolha substituir todas ou só a primeira e copie o resultado."
        },
        {
          "question": "Quando uma substituição de texto simples é mais segura do que uma regex?",
          "answer": "Use a substituição simples para palavras e grafias fixas. Reserve a regex para quando precisar de padrões que possa testar antes."
        },
        {
          "question": "Como apago todas as ocorrências sem colocar texto novo?",
          "answer": "Deixe a substituição vazia (ou use um modo explícito de apagar) para que cada ocorrência seja removida."
        },
        {
          "question": "Por que um trecho curto pode alterar palavras mais longas ao redor?",
          "answer": "As ocorrências de substring entram dentro de palavras maiores. Prefira opções de palavra inteira ou acrescente limites quando existirem."
        },
        {
          "question": "Devo distinguir maiúsculas ao buscar nomes?",
          "answer": "Sim, quando as maiúsculas importam (nomes, identificadores de código). Deixe desligado para uma limpeza informal de prosa."
        },
        {
          "question": "Como atualizo só a primeira aparição do texto colado?",
          "answer": "Use substituir a primeira ou uma só vez, em vez de substituir todas, e revise o texto antes de continuar."
        },
        {
          "question": "Qual é um fluxo prudente para um documento longo?",
          "answer": "Faça uma cópia de segurança, substitua por seções pequenas e compare antes e depois para desfazer os erros com facilidade."
        },
        {
          "question": "Uma passagem de substituição pode unificar variantes ortográficas de um rascunho?",
          "answer": "Sim, para variantes conhecidas (color/colour). Mantenha uma lista das grafias de marca que você não deve alterar."
        },
        {
          "question": "As quebras de linha mudam o que coincide?",
          "answer": "Um padrão que atravessa várias linhas pode falhar se não houver um modo multilinha. Normalize antes as quebras, se for preciso."
        },
        {
          "question": "Uma substituição no navegador basta para um código de produção?",
          "answer": "Para edições rápidas, talvez; em um repositório é melhor um editor ou uma ferramenta de projeto com prévia e controle de versões."
        },
        {
          "question": "Como conservo os hiperlinks em uma mudança em massa?",
          "answer": "Exclua as seções cheias de URL ou use cadeias de busca mais específicas do que um simples token como http."
        },
        {
          "question": "O que costuma indicar um texto recusado?",
          "answer": "Uma busca vazia, um texto grande demais ou caracteres de controle não admitidos: ajuste e tente de novo."
        },
        {
          "question": "Posso executar buscar e substituir em um projeto inteiro a partir daqui?",
          "answer": "Esta página trata de um único texto colado. Para projetos de vários arquivos, use um IDE ou a linha de comando."
        },
        {
          "question": "Como as equipes de localização devem aplicar as mudanças de glossário?",
          "answer": "Substitua os termos do glossário com cuidado, depois de bloquear os segmentos já traduzidos que você deva conservar."
        },
        {
          "question": "Uma substituição de texto reescreve as marcas invisíveis de um texto formatado?",
          "answer": "Ela muda os caracteres que coincidem. A formatação rica que fica fora do texto simples colado não é conservada."
        }
      ]
    },
    "ui": {
      "Replacement": "Substituição",
      "How many matches": "Quais ocorrências",
      "Replace first": "Substituir a primeira",
      "Replace all": "Substituir todas",
      "Case-sensitive": "Diferenciar maiúsculas",
      "{0} replacement.": "{0} substituição.",
      "{0} replacements.": "{0} substituições.",
      "Paste the text you want to change.": "Cole o texto que você quer alterar.",
      "Enter the text to find.": "Digite o texto a localizar."
    },
    "metaDescription": "Busque e substitua texto no seu navegador: a primeira ocorrência ou todas, com ou sem distinguir maiúsculas. Nada é enviado a um servidor."
  },
  "remove-line-breaks": {
    "answer": "Remover quebras de linha junta linhas quebradas com espaços, apaga as quebras ou mantém uma linha em branco entre parágrafos.",
    "content": {
      "about": "Cole um texto que foi quebrado em muitas linhas. Você pode juntar essas linhas com espaços, apagar as quebras ou manter uma linha em branco entre parágrafos.",
      "howTo": [
        "Cole o texto original. A caixa mantém as quebras de linha para você vê-las.",
        "Escolha uma opção: substituir quebras por espaços, removê-las ou manter as quebras de parágrafo.",
        "Clique em “Limpar texto”.",
        "Copie o texto limpo ou limpe as duas caixas."
      ],
      "features": [
        "O original fica na primeira caixa; o texto limpo fica separado.",
        "O modo de espaços junta as linhas e reduz espaços repetidos.",
        "O modo de parágrafos mantém uma linha em branco onde já havia uma."
      ],
      "examples": [
        {
          "title": "Um e-mail quebrado",
          "body": "Três linhas curtas de uma mesma frase viram uma só linha, com espaços simples entre as palavras, quando você escolhe “Substituir quebras de linha por espaços”."
        },
        {
          "title": "Dois parágrafos",
          "body": "Um bloco, uma linha em branco e outro bloco. “Manter quebras de parágrafo” junta as linhas de cada bloco e deixa uma linha em branco entre eles."
        }
      ],
      "explanation": "Finais de linha do Windows e de Macs antigos são tratados como a mesma quebra. O modo de espaços transforma cada sequência de quebras em um espaço e depois apara as pontas. O modo de remoção apaga as quebras e pode grudar a última palavra de uma linha na primeira da seguinte. O modo de parágrafos divide primeiro nas linhas em branco e depois junta as linhas de cada parágrafo.",
      "tips": [
        "Use espaços para textos corridos. Use remover só quando as quebras caíram no meio de um item, como um número longo dividido em várias linhas.",
        "Se um poema ou uma lista precisa manter as linhas, não use esta ferramenta neles."
      ],
      "limitations": "A ferramenta não diferencia uma frase quebrada de uma lista. No modo de parágrafos, uma quebra simples é tratada como quebra automática. Só uma linha em branco separa os parágrafos.",
      "faqs": [
        {
          "question": "Os espaços dentro de uma linha são removidos?",
          "answer": "O modo de espaços reduz espaços e tabulações repetidos. Os modos de remoção e de parágrafos mantêm os espaços que já estavam dentro da linha."
        },
        {
          "question": "E se eu colar só espaços?",
          "answer": "A página pede que você cole um texto. Só espaços em branco não bastam."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. O texto colado é reescrito nesta aba. Ele não é enviado."
        },
        {
          "question": "Como removo quebras de linha de um texto copiado de um PDF?",
          "answer": "Cole o texto e escolha a opção que mantém os parágrafos. Quebras simples dentro de um parágrafo viram espaços, e as linhas em branco entre parágrafos continuam."
        },
        {
          "question": "Qual é a diferença entre substituir e remover quebras de linha?",
          "answer": "Substituir transforma cada quebra em um espaço, então as palavras continuam separadas. Remover apaga a quebra, o que junta o fim de uma linha ao começo da próxima."
        },
        {
          "question": "Como uno um parágrafo que ficou partido ao copiá-lo de um PDF?",
          "answer": "Cole o texto quebrado, remova as quebras de linha e copie o parágrafo unido no seu documento."
        },
        {
          "question": "As linhas em branco entre parágrafos são conservadas?",
          "answer": "Muitas ferramentas as conservam como separadores ao unir as quebras simples de um bloco: confira o resultado."
        },
        {
          "question": "Posso processar só uma parte de um texto longo?",
          "answer": "Sim: cole só o trecho quebrado para que as listas ou a poesia de outras partes não sejam alteradas."
        },
        {
          "question": "São removidas tanto as quebras de linha do Windows quanto as do Mac?",
          "answer": "Sim: CRLF, LF e CR são normalizados, então um texto misto também se une bem."
        },
        {
          "question": "As palavras podem ficar grudadas depois de unir?",
          "answer": "Uma limpeza cuidadosa insere um espaço quando a quebra estava entre palavras; confira uma vez os hífens estranhos."
        },
        {
          "question": "Como se comportam os retornos suaves do Word?",
          "answer": "Em geral chegam como quebras de linha comuns e são removidos da mesma forma que as quebras rígidas."
        },
        {
          "question": "Posso conservar uma lista com marcadores intacta?",
          "answer": "Execute a ferramenta só sobre blocos de prosa, ou restaure depois as quebras da lista se você limpou um texto colado por completo."
        },
        {
          "question": "Por que o editor continua ajustando o texto depois de limpá-lo?",
          "answer": "O ajuste visual segue a largura da janela; o texto por baixo já pode ser uma única linha lógica."
        },
        {
          "question": "Como preparo um texto para uma só célula de CSV?",
          "answer": "Una primeiro as linhas e depois escape as aspas conforme o formato da sua planilha."
        },
        {
          "question": "Há como desfazer depois de remover as quebras?",
          "answer": "Use o desfazer do navegador ou do editor, ou salve o original em outra aba antes de executar a ferramenta."
        },
        {
          "question": "Devo limpar assim os blocos de código de Markdown?",
          "answer": "Evite: remover as quebras dentro de um bloco de código pode estragar a indentação e a estrutura."
        },
        {
          "question": "E as palavras com hífen partidas no final da linha?",
          "answer": "Os hífens de final de linha podem permanecer; apague-os à mão se a palavra só foi partida pelo ajuste."
        },
        {
          "question": "Dá para arrumar um chat com uma palavra por linha?",
          "answer": "Sim: remova as quebras para formar frases e depois corrija o espaço ao redor das marcas de horário, se for preciso."
        },
        {
          "question": "Isso muda os espaços inseparáveis?",
          "answer": "O foco são as quebras de linha; os espaços especiais podem permanecer, a menos que você também passe um limpador de espaços."
        },
        {
          "question": "O texto limpo sai do meu navegador?",
          "answer": "O processo foi pensado para permanecer na sessão da página; copie o resultado se quiser guardá-lo em outro lugar."
        }
      ]
    },
    "ui": {
      "Line breaks": "Quebras de linha",
      "Replace line breaks with spaces": "Substituir quebras de linha por espaços",
      "Remove line breaks": "Remover quebras de linha",
      "Keep paragraph breaks": "Manter quebras de parágrafo",
      "Cleaned text": "Texto limpo",
      "Paste some text first.": "Cole algum texto primeiro."
    },
    "metaDescription": "Remova quebras de linha no navegador: una o texto com espaços, elimine-as ou conserve os parágrafos. O texto não é enviado a um servidor."
  },
  "add-line-numbers": {
    "answer": "Adicionar números de linha coloca um número e um separador antes de cada linha sem alterar a própria linha.",
    "content": {
      "about": "Cole várias linhas e coloque um número antes de cada uma. Você escolhe o número inicial e os caracteres entre o número e a linha.",
      "howTo": [
        "Cole o texto. Cada linha fica como você digitou.",
        "Defina o número inicial. O comum é 1; um inteiro abaixo de 0 também é aceito.",
        "Defina o separador. O padrão é um ponto e um espaço.",
        "Clique em “Adicionar números” e copie as linhas numeradas ou limpe o formulário."
      ],
      "features": [
        "O texto da linha não é aparado nem reescrito.",
        "Um separador personalizado, como \") \" ou uma tabulação.",
        "Um número inicial diferente de 1."
      ],
      "examples": [
        {
          "title": "Uma lista de três linhas",
          "body": "As linhas “Primeira linha”, “Segunda linha” e “Terceira linha”, com início 1 e separador “. ”, viram “1. Primeira linha”, “2. Segunda linha” e “3. Terceira linha”."
        },
        {
          "title": "Continuar uma lista no 10",
          "body": "Com número inicial 10 e separador \") \", a primeira linha colada vira “10) ” mais a linha original."
        }
      ],
      "explanation": "O texto é dividido nas quebras de linha. Cada linha recebe o número inicial mais sua posição, depois o separador e depois os caracteres originais. Linhas vazias também são numeradas, porque continuam sendo linhas.",
      "tips": [
        "Se o texto já tiver números, remova-os antes ou cada linha ficará com dois números.",
        "Use uma tabulação como separador quando quiser colar o resultado em uma planilha."
      ],
      "limitations": "Uma quebra de linha no final cria uma última linha vazia, que também é numerada. Quebras automáticas na caixa não são linhas novas; só contam as quebras de linha reais.",
      "faqs": [
        {
          "question": "Isso muda a ortografia ou os espaços?",
          "answer": "Não. Os caracteres depois do separador são a linha original."
        },
        {
          "question": "Posso começar no 0?",
          "answer": "Sim. 0 e inteiros negativos são aceitos. Um decimal como 1,5 não."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. As linhas e o número inicial ficam nesta aba. Eles não são enviados a nenhum servidor."
        },
        {
          "question": "Como numero as linhas de um texto?",
          "answer": "Cole o texto, defina o número inicial e o separador, como um ponto e um espaço, depois adicione os números e copie o resultado."
        },
        {
          "question": "Linhas vazias são numeradas?",
          "answer": "Sim. Cada quebra de linha real começa uma nova linha numerada, incluindo linhas vazias e uma linha vazia no final."
        },
        {
          "question": "Como numero cada linha de um rascunho colado?",
          "answer": "Cole o texto, escolha um número inicial se precisar e copie o resultado numerado. Serve para revisões, roteiros ou registros compartilhados."
        },
        {
          "question": "Qual separador aparece entre o número e o texto?",
          "answer": "A maioria dos modos usa um ponto, dois-pontos ou uma tabulação. Escolha um que não confunda depois a ordenação ou a indentação do código."
        },
        {
          "question": "As linhas em branco também recebem um número?",
          "answer": "Sim, quando a numeração de linhas vazias está ativa. Desative-a se as linhas em branco devem ficar sem marca."
        },
        {
          "question": "Posso começar a numerar em um valor diferente de 1?",
          "answer": "Sim: indique o índice inicial (inclusive o 0) antes de copiar. É útil para apêndices ou seções que continuam."
        },
        {
          "question": "A numeração quebra o código com indentação?",
          "answer": "Os números vão na frente do conteúdo da linha. A indentação do restante é conservada, mas alguns analisadores podem tratar o prefixo como parte do texto."
        },
        {
          "question": "Como removo os números que já adicionei?",
          "answer": "Elimine os dígitos e o separador iniciais com buscar e substituir, ou cole o texto em um editor limpo e exporte de novo sem números."
        },
        {
          "question": "Há preenchimento com zeros como 01, 02?",
          "answer": "Depende do modo. Se o preenchimento estiver desligado, os números ficam sem zeros: adicione-os você se o seu guia de estilo exigir."
        },
        {
          "question": "Posso numerar só uma parte de um texto mais longo?",
          "answer": "Numere tudo o que foi colado e fique com o intervalo de que precisa, ou divida antes a seleção em um texto colado próprio."
        },
        {
          "question": "Os finais CRLF e LF mudam quantas linhas eu obtenho?",
          "answer": "A ferramenta divide pelas quebras que reconhece. Normalize antes os finais se a contagem não bater entre computadores."
        },
        {
          "question": "Por que numerar as linhas antes de uma revisão entre pares?",
          "answer": "Os revisores podem citar números de linha em vez de citar trechos longos. Isso agiliza os comentários por e-mail ou chat."
        },
        {
          "question": "Adicionar números altera os caracteres UTF-8?",
          "answer": "Não: só são adicionados prefixos. Os caracteres do corpo permanecem iguais."
        },
        {
          "question": "A numeração pode reiniciar depois de cada título?",
          "answer": "Não de forma automática. Divida por seção, numere cada bloco a partir de 1 e una-os de novo."
        },
        {
          "question": "É a mesma coisa que a margem de números de um processador de texto?",
          "answer": "Não. Os números da margem são só de visualização. Isto escreve os números no próprio texto."
        },
        {
          "question": "O que acontece com os espaços no final de uma linha?",
          "answer": "Em geral eles permanecem depois do prefixo numérico. Recorte-os se o analisador posterior for rígido."
        },
        {
          "question": "Meus rascunhos são enviados quando eu numero as linhas?",
          "answer": "A numeração roda na sessão do navegador; nenhuma cópia permanente é salva em um servidor."
        }
      ]
    },
    "ui": {
      "Starting number": "Número inicial",
      "Separator": "Separador",
      "Placed between the number and the original line.": "Fica entre o número e a linha original.",
      "Add numbers": "Adicionar números",
      "Numbered lines": "Linhas numeradas",
      "Paste the lines you want to number.": "Cole as linhas que você quer numerar.",
      "starting number": "número inicial",
      "Enter a whole number for the starting line.": "Digite um número inteiro para a linha inicial."
    },
    "metaDescription": "Adicione números de linha no navegador: escolha o número inicial e o separador. As linhas não são reescritas e nada é enviado a um servidor."
  },
  "number-to-words": {
    "answer": "Um conversor de números por extenso escreve em inglês os números inteiros de -999.999.999 a 999.999.999. Ele também lê números simples escritos em inglês e devolve o número.",
    "content": {
      "about": "Escreva um número inteiro por extenso em inglês ou transforme números simples escritos em inglês de volta em algarismos. O intervalo vai de -999.999.999 a 999.999.999.",
      "howTo": [
        "Escolha número para extenso ou extenso para número.",
        "Digite o número ou as palavras.",
        "Clique em “Converter”."
      ],
      "features": [
        "Números inteiros até os milhões.",
        "Números negativos e zero.",
        "Leitura inversa de palavras simples em inglês."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "Em inglês: one thousand two hundred thirty-four."
        }
      ],
      "explanation": "O conversor agrupa o número em milhões, milhares e o restante. Dezenas e unidades de 21 a 99 usam hífen. A palavra “and” não é usada. Zeros à esquerda são ignorados, então 007 é seven.",
      "tips": [
        "Escreva twenty-one com hífen ou como twenty one.",
        "Use minus para um número negativo."
      ],
      "limitations": "Decimais, bilhões e frases com a palavra “and” ficam fora deste conversor. O resultado é sempre em inglês, não em português.",
      "faqs": [
        {
          "question": "Como escrever um número por extenso?",
          "answer": "A página agrupa milhões, milhares e centenas e depois escreve as dezenas e unidades. 123 é one hundred twenty-three."
        },
        {
          "question": "Qual intervalo é aceito?",
          "answer": "Números inteiros de -999.999.999 a 999.999.999."
        },
        {
          "question": "O que acontece com zeros à esquerda?",
          "answer": "São ignorados. 007 é seven."
        },
        {
          "question": "Dá para converter decimais?",
          "answer": "Não. Digite um número inteiro."
        },
        {
          "question": "Dá para transformar palavras em número?",
          "answer": "Sim, para palavras simples em inglês dentro deste intervalo, como one hundred twenty-three ou minus twenty."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O número ou as palavras ficam nesta aba durante a conversão. Eles não são enviados."
        },
        {
          "question": "Como converto o valor de um cheque em palavras?",
          "answer": "Digite o número e copie as palavras na linha de valor do cheque. Siga as regras do seu banco para os centavos e a palavra «only», se for exigida."
        },
        {
          "question": "Qual estilo de inglês a ferramenta usa?",
          "answer": "Ela segue uma redação habitual no estilo americano para números inteiros. O uso do hífen nas dezenas pode diferir um pouco dos guias britânicos."
        },
        {
          "question": "Posso converter números negativos?",
          "answer": "O suporte depende do modo da ferramenta. Na contabilidade, os negativos muitas vezes se escrevem de um jeito especial: confirme antes de confiar no resultado."
        },
        {
          "question": "O que acontece com números muito grandes com muitos zeros?",
          "answer": "Fique dentro do intervalo documentado. Valores extremamente grandes podem ser recusados para manter a redação exata."
        },
        {
          "question": "Como as centenas e os milhares são unidos?",
          "answer": "O inglês padrão insere palavras como hundred e thousand nos limites de posição. Leia a frase completa antes de copiá-la."
        },
        {
          "question": "As palavras ordinais como 21st funcionam?",
          "answer": "Este conversor foi pensado para números cardinais (twenty-one), não para ordinais (twenty-first). Acrescente as terminações ordinais à mão se precisar."
        },
        {
          "question": "Posso usar em linhas de uma fatura?",
          "answer": "Sim, para maior clareza em alguns contextos. Combine algarismos e palavras quando a resistência a fraude importar."
        },
        {
          "question": "Por que os zeros à esquerda desapareceram?",
          "answer": "O valor numérico ignora os zeros decorativos. Os códigos ou identificadores que precisam de zeros devem permanecer como texto em outro lugar."
        },
        {
          "question": "Ele também soletra o nome da moeda?",
          "answer": "Em geral, soletra só o número. Acrescente «dollars» ou o nome da sua moeda, a menos que exista um modo de dinheiro."
        },
        {
          "question": "Como os decimais aparecem em palavras?",
          "answer": "Alguns modos dizem «point» e depois os dígitos; outros exigem unidades maiores e menores em separado. Confira o exemplo do seu modo."
        },
        {
          "question": "O «and» britânico é incluído antes das dezenas?",
          "answer": "A redação americana costuma omitir «and» (two hundred five). Espere diferenças de estilo em relação à escrita jurídica britânica."
        },
        {
          "question": "As salas de aula podem usar para praticar o valor posicional?",
          "answer": "Sim: os estudantes convertem nos dois sentidos quando há um modo inverso e depois comparam com o gabarito."
        },
        {
          "question": "O que acontece se na minha região se usam espaços como separador de milhar?",
          "answer": "Digite um número sem marcas de agrupamento, ou remova primeiro os espaços para que a análise não fique ambígua."
        },
        {
          "question": "Os números são salvos depois da conversão?",
          "answer": "Eles permanecem só na sessão da página."
        }
      ]
    },
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "Números inteiros de -999.999.999 a 999.999.999. As palavras seguem o inglês americano, sem a palavra “and”, como one hundred twenty-three. Zeros à esquerda são ignorados.",
      "Number to words": "Número para extenso",
      "Words to number": "Extenso para número",
      "Number words": "Número por extenso (inglês)",
      "Enter a whole number. Decimals are outside this converter.": "Digite um número inteiro. Decimais não são aceitos.",
      "Enter a whole number using digits.": "Digite um número inteiro usando algarismos.",
      "This converter supports -999,999,999 through 999,999,999.": "Este conversor aceita de -999.999.999 a 999.999.999.",
      "Enter number words.": "Digite um número por extenso em inglês.",
      "Enter number words after minus.": "Digite palavras em inglês depois de minus.",
      "This converter does not use the word and.": "Este conversor não usa a palavra “and”.",
      "\"{0}\" is not a supported number word.": "“{0}” não é uma palavra numérica aceita.",
      "That number is outside -999,999,999 through 999,999,999.": "Esse número está fora do intervalo de -999.999.999 a 999.999.999."
    },
    "note": "Esta ferramenta escreve e lê números por extenso apenas em inglês. A interface e a ajuda estão traduzidas.",
    "metaDescription": "Converta números inteiros em palavras em inglês, ou palavras simples em um número, no seu navegador. O intervalo vai de -999.999.999 a 999.999.999."
  },
  "morse-code": {
    "answer": "Um tradutor de código Morse converte texto de A–Z e 0–9 em Morse internacional ou lê Morse de volta como texto. As letras são separadas por espaços e as palavras por uma barra.",
    "content": {
      "about": "Converta letras e dígitos em código Morse internacional, ou Morse de volta em texto.",
      "howTo": [
        "Escolha texto para Morse ou Morse para texto.",
        "Digite A–Z, 0–9 ou Morse feito de pontos, traços, espaços e /.",
        "Clique em “Converter”."
      ],
      "features": [
        "A–Z e 0–9.",
        "Espaços entre letras e / entre palavras.",
        "Um erro claro para um caractere não aceito."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO é .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Cada letra e dígito tem um padrão Morse internacional. Um espaço separa letras e uma barra separa palavras. Letras minúsculas são lidas como maiúsculas. Um caractere fora de A–Z e 0–9 interrompe a conversão.",
      "tips": [
        "SOS se escreve ... --- ...",
        "Deixe um espaço entre as letras em Morse."
      ],
      "limitations": "Pontuação e letras fora de A–Z (como ç ou letras acentuadas) não são convertidas. Um padrão Morse desconhecido é recusado.",
      "faqs": [
        {
          "question": "Como escrever um texto em código Morse?",
          "answer": "Cada letra vira seu padrão Morse internacional. As letras são separadas por um espaço e as palavras por /."
        },
        {
          "question": "Funciona com letras minúsculas?",
          "answer": "Sim. Letras minúsculas são lidas como maiúsculas."
        },
        {
          "question": "O que separa as palavras?",
          "answer": "Uma barra separa as palavras. Um espaço separa as letras dentro de uma palavra."
        },
        {
          "question": "E se eu digitar pontuação?",
          "answer": "A página indica o caractere não aceito e não tenta adivinhar um código para ele."
        },
        {
          "question": "O texto é enviado para algum lugar?",
          "answer": "Não. A conversão acontece no seu navegador."
        },
        {
          "question": "Os dados são enviados a um servidor?",
          "answer": "Não. Letras e padrões Morse são convertidos nesta aba. Eles não são enviados a nenhum servidor."
        },
        {
          "question": "Como decodifico Morse de volta para o inglês?",
          "answer": "Cole uma cadeia Morse bem espaçada no modo de decodificação. Os vãos entre letras e os separadores de palavra devem ser coerentes; se não, o analisador recusará trechos."
        },
        {
          "question": "Qual caractere separa as palavras Morse nesta ferramenta?",
          "answer": "Na forma de texto, costuma-se usar uma barra entre as palavras. Use o mesmo separador que aparece nos exemplos da ferramenta."
        },
        {
          "question": "Posso codificar números em Morse?",
          "answer": "Sim. Os dígitos 0–9 têm padrões padrão do Morse internacional e se misturam com as letras nos indicativos de chamada."
        },
        {
          "question": "Por que meu Morse é recusado como malformado?",
          "answer": "Pontos demais seguidos ou a falta de espaços entre letras costumam causar a recusa. Corrija o espaçamento antes de decodificar de novo."
        },
        {
          "question": "O Morse americano é admitido?",
          "answer": "Esta página foi pensada para o Morse internacional. O Morse americano é diferente e aqui não vai e volta de um jeito limpo."
        },
        {
          "question": "Posso praticar com prosigns?",
          "answer": "Existem alguns sinais de procedimento para rádio. O suporte varia; fique com letras e dígitos quando estiver aprendendo o básico."
        },
        {
          "question": "A ferramenta reproduz tons de áudio?",
          "answer": "O foco aqui é a codificação e a decodificação visual. Use um treinador de áudio dedicado se precisar praticar o som dit-dah."
        },
        {
          "question": "Como os iniciantes devem escrever Morse em um chat?",
          "answer": "Use pontos e traços com espaços claros. Evite os hífens Unicode decorativos que os analisadores não reconhecem."
        },
        {
          "question": "O Morse pode esconder uma senha de forma segura?",
          "answer": "Não. É uma codificação, não uma cifra. Qualquer pessoa com uma tabela pode lê-lo."
        },
        {
          "question": "Por que minúsculas e maiúsculas coincidem?",
          "answer": "O Morse não tem maiúsculas. A entrada é normalizada, então «sos» e «SOS» são codificados do mesmo jeito."
        },
        {
          "question": "Qual pontuação é admitida de forma habitual?",
          "answer": "O ponto, a vírgula e o ponto de interrogação aparecem em muitas tabelas. As marcas não admitidas são omitidas ou sinalizadas."
        },
        {
          "question": "Como compartilho tarefas em Morse?",
          "answer": "Codifique, copie a cadeia e conserve os separadores. Os professores devem indicar qual tabela usam para corrigir."
        },
        {
          "question": "Ainda é útil aprender Morse?",
          "answer": "O radioamadorismo, hobbies de acessibilidade e as aulas de história ainda o usam, embora as licenças já não exijam um exame."
        },
        {
          "question": "Minhas cadeias Morse são enviadas?",
          "answer": "A codificação e a decodificação permanecem no navegador."
        }
      ]
    },
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "Morse internacional para A–Z e 0–9. As letras são separadas por um espaço e as palavras por /. Caracteres não aceitos são recusados.",
      "Text to Morse": "Texto para Morse",
      "Morse to text": "Morse para texto",
      "Morse code": "Código Morse",
      "Morse": "Morse",
      "Enter text to convert.": "Digite um texto para converter.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "“{0}” não é aceito. Use A–Z e 0–9.",
      "Enter Morse code to convert.": "Digite código Morse para converter.",
      "Morse code can use only dots, dashes, spaces, and /.": "O código Morse só pode ter pontos, traços, espaços e /.",
      "A word separator is missing letters.": "Faltam letras junto a um separador de palavras.",
      "\"{0}\" is not a supported Morse letter.": "“{0}” não é uma letra Morse aceita."
    },
    "metaDescription": "Traduza letras e dígitos para o código Morse internacional, ou Morse para texto, no seu navegador. As letras se separam com espaços e as palavras com /."
  },
  "roman-numeral-converter": {
    "answer": "Um conversor de algarismos romanos transforma números inteiros de 1 a 3999 em algarismos romanos padrão e lê esses algarismos de volta como números. Valores acima de 3999 não são aceitos.",
    "content": {
      "about": "Converta números inteiros de 1 a 3999 em algarismos romanos padrão, e esses algarismos de volta em números.",
      "howTo": [
        "Escolha número para romano ou romano para número.",
        "Digite um número de 1 a 3999, ou um algarismo romano com I, V, X, L, C, D e M.",
        "Clique em “Converter”."
      ],
      "features": [
        "Notação subtrativa padrão.",
        "Conversão inversa.",
        "Recusa de algarismos que não estão na forma padrão."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 é MCMXCIV."
        }
      ],
      "explanation": "A página monta os algarismos com M, CM, D, CD, C, XC, L, XL, X, IX, V, IV e I. Uma sequência romana só é aceita se for a forma padrão do seu valor. IIII, IC e IL são recusados. Algarismos acima de 3999, incluindo a notação com vínculo, não são aceitos.",
      "tips": [
        "4 é IV, não IIII.",
        "9 é IX, não VIIII."
      ],
      "limitations": "O intervalo é de 1 a 3999. Zero, negativos e números maiores são recusados.",
      "faqs": [
        {
          "question": "Como converter um número em algarismo romano?",
          "answer": "A página usa a notação subtrativa padrão. 4 é IV, 9 é IX, 40 é XL e 3999 é MMMCMXCIX."
        },
        {
          "question": "Quais números são aceitos?",
          "answer": "Números inteiros de 1 a 3999."
        },
        {
          "question": "Por que IIII é recusado?",
          "answer": "IIII não é a forma padrão de 4. A forma padrão é IV."
        },
        {
          "question": "Dá para converter acima de 3999?",
          "answer": "Não. Notações estendidas para números maiores não são aceitas."
        },
        {
          "question": "Dá para transformar um algarismo romano em número?",
          "answer": "Sim, quando for um algarismo romano padrão de 1 a 3999."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O número ou o algarismo romano é convertido nesta aba. Ele não é enviado."
        },
        {
          "question": "Como converto aqui algarismos arábicos em números romanos?",
          "answer": "Digite um número inteiro dentro do intervalo, converta e copie o resultado romano."
        },
        {
          "question": "Como converto números romanos de volta em cifras?",
          "answer": "Cole uma cadeia de algarismo válida e execute a conversão inversa para ver o inteiro."
        },
        {
          "question": "Por que se usam pares subtrativos como IV e IX?",
          "answer": "A forma padrão coloca um valor menor na frente de um maior para subtrair, e assim os algarismos ficam mais curtos."
        },
        {
          "question": "Por que se recusa escrever 99 como IC segundo as regras padrão?",
          "answer": "Os números romanos clássicos usam XCIX para 99; IC não é aceito na forma habitual de ensino."
        },
        {
          "question": "Qual é o limite superior habitual da conversão?",
          "answer": "Muitas ferramentas param em 3999 porque as letras padrão não incluem um único sinal para 5000."
        },
        {
          "question": "Posso colar números romanos em minúsculas?",
          "answer": "Muitos conversores normalizam a entrada em minúsculas para maiúsculas antes de validar a forma padrão."
        },
        {
          "question": "Posso converter datas de mostradores de relógio que usam IIII?",
          "answer": "A tradição dos relógios pode mostrar IIII, mas um conversor rígido espera IV para o quatro."
        },
        {
          "question": "Como são tratados os números maiores com um traço em cima?",
          "answer": "A notação com vinculum para milhares de milhares costuma ficar fora do alcance de um conversor básico."
        },
        {
          "question": "Os espaços dentro de um algarismo provocam erros?",
          "answer": "Sim: remova os espaços e os caracteres inválidos antes de converter."
        },
        {
          "question": "Pode ajudar com a numeração de esquemas em documentos?",
          "answer": "Sim, para inteiros pequenos; cole cada número de seção de que precisa, não documentos inteiros."
        },
        {
          "question": "Por que uma entrada vazia falhou?",
          "answer": "Não há nada para converter: digite primeiro cifras ou um algarismo."
        },
        {
          "question": "Frações ou decimais são convertidos?",
          "answer": "Não: os números romanos desta página representam só números inteiros."
        },
        {
          "question": "Há um único algarismo correto para cada valor?",
          "answer": "As formas canônicas padrão são preferidas; as variantes arcaicas podem ser recusadas."
        },
        {
          "question": "Os professores podem usar para fichas de exercício?",
          "answer": "Sim, para conferir as respostas de prática; os estudantes devem continuar mostrando as regras de correspondência."
        }
      ]
    },
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "Algarismos romanos padrão de 1 a 3999. Valores acima de 3999, incluindo a notação com vínculo, não são aceitos. Sequências inválidas como IIII são recusadas.",
      "Number to Roman": "Número para romano",
      "Roman to number": "Romano para número",
      "Roman numeral": "Algarismo romano",
      "Enter a whole number from 1 through 3999.": "Digite um número inteiro de 1 a 3999.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Este conversor aceita de 1 a 3999. Algarismos acima de 3999 não são aceitos.",
      "Enter a Roman numeral.": "Digite um algarismo romano.",
      "Use only I, V, X, L, C, D, and M.": "Use apenas I, V, X, L, C, D e M.",
      "\"{0}\" is not a valid Roman numeral.": "“{0}” não é um algarismo romano válido."
    },
    "metaDescription": "Converta números inteiros de 1 a 3999 em algarismos romanos padrão, e de romano em cifra, no seu navegador. Nada é enviado a um servidor."
  },
  "text-repeater": {
    "answer": "Um repetidor de texto copia uma palavra, frase ou linha de 1 a 200 vezes, com nada, um espaço ou uma quebra de linha entre as cópias.",
    "content": {
      "about": "Repita uma palavra, frase ou linha de 1 a 200 vezes. Coloque nada, um espaço ou uma quebra de linha entre as cópias. O texto de origem pode ter até 5.000 caracteres e o resultado final até 100.000 caracteres.",
      "howTo": [
        "Digite o texto a repetir. Uma caixa vazia é recusada.",
        "Digite um número inteiro de 1 a 200.",
        "Escolha nada, um espaço ou uma quebra de linha entre as cópias e clique em “Repetir”."
      ],
      "features": [
        "Uma só cópia quando o número é 1, sem separador extra.",
        "Um espaço ou quebra de linha só entre as cópias, não depois da última.",
        "Um limite de tamanho para que um resultado enorme não encha a página."
      ],
      "examples": [
        {
          "title": "Uma palavra três vezes",
          "body": "ha, número 3, com espaço entre as cópias, vira ha ha ha."
        },
        {
          "title": "Uma linha duas vezes",
          "body": "Pronto, número 2, com quebra de linha entre as cópias, vira Pronto em uma linha e Pronto na seguinte."
        }
      ],
      "explanation": "A página copia o texto o número de vezes pedido e junta as cópias com o separador escolhido. Ela não gera latim de preenchimento e não remove duplicadas.",
      "tips": [
        "Use quebra de linha para uma lista de linhas iguais e espaço para manter tudo em uma linha."
      ],
      "limitations": "O texto de origem pode ter até 5.000 caracteres, o número pode ir até 200 e o resultado final até 100.000 caracteres. Um resultado maior é recusado.",
      "faqs": [
        {
          "question": "O repetidor de texto é grátis?",
          "answer": "Sim. Você pode repetir texto aqui sem pagar nem criar conta."
        },
        {
          "question": "O número 1 adiciona um separador?",
          "answer": "Não. Uma cópia é exatamente o texto digitado, sem nada a mais."
        },
        {
          "question": "Posso repetir uma linha em branco?",
          "answer": "Uma caixa vazia é recusada. Uma linha só com espaços é aceita, porque esses espaços são texto."
        },
        {
          "question": "O texto é enviado a um servidor?",
          "answer": "Não. As cópias são criadas nesta aba do navegador. O Tools Star Hub não envia esse texto a nenhum servidor nem o salva no armazenamento local."
        },
        {
          "question": "Como repito uma palavra ou uma frase muitas vezes?",
          "answer": "Cole o texto, indique quantas cópias quer, escolha um separador como uma quebra de linha ou uma vírgula, gere e copie o resultado. A ferramenta une as cópias em ordem sem mudar a redação original."
        },
        {
          "question": "Qual separador devo usar entre as repetições?",
          "answer": "Use uma quebra de linha quando cada cópia deva ir na própria fileira, uma vírgula ou um espaço para listas em uma linha, e uma cadeia personalizada quando precisar de um rótulo entre os itens. Um separador vazio cola as cópias sem vão."
        },
        {
          "question": "Há um número máximo de repetições?",
          "answer": "Contagens muito grandes podem travar a aba porque a cadeia unida cresce na memória. Comece com um número razoável, copie o que precisar e aumente só se o navegador continuar respondendo."
        },
        {
          "question": "Posso repetir blocos de várias linhas?",
          "answer": "Sim. Cole o bloco inteiro como texto de origem. Cada repetição inclui todas as linhas que você colou, e depois se insere o separador escolhido entre essas cópias completas."
        },
        {
          "question": "Repetir muda os espaços dentro do meu texto?",
          "answer": "Não. Os caracteres de cada cópia permanecem como você os escreveu. Só o separador entre as cópias é adicionado pela ferramenta."
        },
        {
          "question": "Em que isso se diferencia do lorem ipsum?",
          "answer": "O lorem ipsum inventa um latim de preenchimento. O repetidor duplica a cadeia exata que você dá, o que é melhor para dados de teste, provas de carga e listas com um padrão."
        },
        {
          "question": "Posso criar uma lista numerada com o repetidor?",
          "answer": "Não de forma automática. Repita primeiro a linha e depois numere as linhas em outra ferramenta, ou inclua o número no texto de origem se todas as cópias devem compartilhar o mesmo rótulo."
        },
        {
          "question": "Por que um formulário recusaria uma cadeia repetida enorme?",
          "answer": "Muitos formulários limitam o comprimento. Se a colagem falhar, diminua a contagem ou distribua o resultado em vários campos. O repetidor não aplica os limites de um formulário remoto."
        },
        {
          "question": "A ferramenta recorta meu texto antes de repeti-lo?",
          "answer": "Ela conserva os espaços no início e no fim da origem, a menos que você os remova. Recorte primeiro se não quiser cópias com preenchimento."
        },
        {
          "question": "Posso repetir emoji ou texto que não esteja em inglês?",
          "answer": "Sim. Os caracteres Unicode se repetem igual às letras latinas. Confirme que o aplicativo de destino aceita os caracteres depois de colar."
        },
        {
          "question": "É útil repetir para testes de carga?",
          "answer": "Às vezes os desenvolvedores colam cadeias repetidas longas em campos para conferir o recorte e o desempenho. Mantenha contagens razoáveis para que a aba continue utilizável."
        },
        {
          "question": "O que acontece se a contagem for zero?",
          "answer": "Uma contagem de zero ou vazia não deveria produzir cópias. Use pelo menos 1 quando quiser o texto original uma vez na caixa de resultado."
        },
        {
          "question": "Os separadores podem incluir tabulações?",
          "answer": "Se a interface admitir um separador personalizado, uma tabulação serve para colunas pensadas para uma planilha. Se não, repita com quebras de linha e divida depois."
        },
        {
          "question": "As tags HTML que estão dentro do texto serão escapadas?",
          "answer": "O repetidor trata as tags como caracteres comuns. Cole com cuidado em editores ricos que poderiam interpretar a marcação depois de copiar o resultado."
        },
        {
          "question": "Como interrompo a geração se a contagem for alta demais?",
          "answer": "Cancele ou atualize a aba se a página deixar de responder. Da próxima vez, escolha uma contagem menor e monte a lista por partes."
        },
        {
          "question": "O repetidor salva minhas frases?",
          "answer": "Não. O trabalho permanece na sessão da página para a cópia que você gera. Esvazie a caixa quando terminar se o texto for sensível."
        }
      ]
    },
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "As cópias são criadas nesta aba. O texto não é enviado a nenhum servidor.",
      "Text to repeat": "Texto a repetir",
      "Repeat count": "Número de repetições",
      "From 1 to 200.": "De 1 a 200.",
      "Between copies": "Entre as cópias",
      "Nothing": "Nada",
      "Space": "Espaço",
      "New line": "Quebra de linha",
      "Enter the text to repeat.": "Digite o texto a repetir.",
      "Keep the text under {0} characters.": "Mantenha o texto abaixo de {0} caracteres.",
      "repeat count": "número de repetições",
      "Enter a whole number of repeats.": "Digite um número inteiro de repetições.",
      "Choose a repeat count from {0} to {1}.": "Escolha um número de repetições de {0} a {1}.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Essa repetição é longa demais para esta página. Use um texto menor ou um número menor."
    },
    "metaDescription": "Repita uma palavra, uma frase ou uma linha de 1 a 200 vezes no seu navegador, com espaço ou quebra de linha entre as cópias. Nada é enviado a um servidor."
  }
};

export default data;
