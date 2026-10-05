import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Um contador de palavras mostra as palavras, caracteres e frases de um texto colado, além de uma estimativa simples do tempo de leitura.",
    "content": {
      "about": "Veja palavras, caracteres, frases, parágrafos e um tempo de leitura aproximado do texto que você colar. Quem revisa uma legenda, um resumo ou um post curto acompanha os totais mudando enquanto digita. O tempo de leitura considera cerca de 225 palavras por minuto: é uma estimativa, não uma velocidade medida.",
      "howTo": [
        "Cole ou digite o texto na caixa.",
        "As contagens de palavras, caracteres, frases e parágrafos são atualizadas enquanto você digita.",
        "Use “Texto de exemplo” para testar o contador, “Limpar” para esvaziar a caixa ou “Copiar” para copiar seu texto."
      ],
      "examples": [
        {
          "title": "Uma frase curta",
          "body": "“Hello world.” tem 2 palavras e 1 frase."
        },
        {
          "title": "Linhas em branco",
          "body": "Um texto separado por uma linha vazia conta como dois parágrafos."
        }
      ],
      "explanation": "Palavras são grupos de caracteres sem espaço. Caracteres são pontos de código Unicode, então letras, pontuação e a maioria dos emojis contam como um caractere cada. As frases são divididas em . ! ? e …. Parágrafos são blocos não vazios separados por quebras de linha. O tempo de leitura usa cerca de 225 palavras por minuto.",
      "limitations": "Palavras são grupos de caracteres sem espaço, e as frases são divididas em . ! ? e …. O tempo de leitura considera cerca de 225 palavras por minuto: é uma estimativa, não uma velocidade de leitura medida. O contador não verifica gramática nem identifica o autor.",
      "faqs": [
        {
          "question": "O contador de palavras é grátis?",
          "answer": "Sim. Contar palavras, caracteres, frases e parágrafos é grátis e não exige conta."
        },
        {
          "question": "Meu texto é enviado para a internet?",
          "answer": "Não. A contagem é feita no seu navegador. O texto não é enviado ao Tools Star Hub nem armazenado."
        },
        {
          "question": "Como os espaços extras são contados?",
          "answer": "Vários espaços seguidos não criam palavras extras, mas contam como caracteres."
        }
      ]
    },
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "A contagem acontece no seu navegador. Nada é enviado a um servidor.",
      "Paste or type text here...": "Cole ou digite o texto aqui…",
      "Sample text": "Texto de exemplo",
      "Reading time": "Tempo de leitura",
      "0 min": "0 min",
      "{0} min": "{0} min"
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
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "As contagens mudam enquanto você digita. O texto fica no seu navegador.",
      "Type or paste text...": "Digite ou cole o texto…",
      "Copy count": "Copiar contagem"
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    "note": "Esta ferramenta escreve e lê números por extenso apenas em inglês. A interface e a ajuda estão traduzidas."
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
    }
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
    }
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
    }
  }
};

export default data;
