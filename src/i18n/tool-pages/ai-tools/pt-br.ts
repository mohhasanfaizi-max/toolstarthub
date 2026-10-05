import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Um gerador de prompts de IA monta um prompt estruturado com o tema, o objetivo, o público e o formato que você digita. “Gerar prompt” fica no seu navegador. “Gerar com IA” envia esses campos para a API Gemini do Google por meio do ToolStarHub.",
    "content": {
      "about": "O gerador de prompts de IA transforma os campos preenchidos em um prompt que você pode copiar. Uma predefinição preenche só o uso, o tom, o formato, o nível de detalhe e uma primeira instrução. O tema é você quem informa.",
      "howTo": [
        "Escolha uma predefinição ou digite seu próprio uso.",
        "Informe um tema ou um objetivo. É preciso pelo menos um.",
        "Defina o público, o tom, o idioma, o formato e o nível de detalhe desejado.",
        "Clique em “Gerar prompt” para montá-lo no navegador, ou em “Gerar com IA” para o Gemini refiná-lo.",
        "Use “Limpar” para reiniciar o formulário."
      ],
      "features": [
        "Doze predefinições para artigos, posts, roteiros, textos de produto, roteiros de pesquisa e tarefas de programação.",
        "Um prompt estruturado que informa a tarefa, o público, o tom, o idioma e o formato.",
        "Uma linha que pede ao modelo para não inventar fatos que faltam.",
        "Copiar e limpar. Nada é salvo."
      ],
      "examples": [
        {
          "title": "Um artigo de blog sobre idade em ano bissexto",
          "body": "Predefinição: artigo de blog. Tema: como calcular a idade de quem nasceu em 29 de fevereiro. Público: pessoas que usam uma calculadora de datas. O prompt pede uma introdução curta e um final sem enrolação."
        },
        {
          "title": "Uma tarefa de programação",
          "body": "Predefinição: prompt de programação. Objetivo: escrever uma função que recuse um intervalo de páginas vazio. Instrução extra: usar TypeScript e mostrar um exemplo que falha. O prompt pergunta a linguagem, as entradas e o que conta como pronto."
        }
      ],
      "explanation": "“Gerar prompt” junta suas respostas em linhas com rótulo. Se o tema e o objetivo estiverem vazios, a ferramenta para e pede um dos dois. “Gerar com IA” envia esses campos ao Gemini e devolve um prompt refinado.",
      "limitations": "“Gerar prompt” junta só os campos preenchidos e precisa de um tema ou objetivo. Uma predefinição preenche campos de estilo, mas não inventa um tema. “Gerar com IA” refina o prompt com o Gemini. A página não executa o prompt em um modelo de escrita.",
      "tips": [
        "Diga quem vai ler. “Pais de primeira viagem” ajuda mais do que “todo mundo”.",
        "Diga que forma o resultado deve ter: uma lista, um e-mail, um roteiro.",
        "Coloque os fatos que você já sabe nas instruções adicionais para o modelo não precisar adivinhar."
      ],
      "faqs": [
        {
          "question": "Esta ferramenta usa IA?",
          "answer": "“Gerar prompt” monta o prompt nesta página. “Gerar com IA” envia os campos para a API Gemini do Google por meio do ToolStarHub e devolve um prompt refinado. Você pode colar qualquer um dos dois em outro modelo."
        },
        {
          "question": "E se eu só souber o tema?",
          "answer": "Um tema basta para gerar. Acrescente um objetivo quando souber o que os leitores devem conseguir fazer depois."
        },
        {
          "question": "Meu texto é enviado a um servidor?",
          "answer": "“Gerar prompt” fica nesta aba e não envia os campos. “Gerar com IA” envia os campos para a API Gemini do Google por meio do ToolStarHub e devolve um prompt refinado. O ToolStarHub não salva esse texto. No plano gratuito, o Google pode usá-lo para melhorar seus produtos."
        },
        {
          "question": "O que faz um bom prompt de IA?",
          "answer": "Diga o que você quer, para quem é, o tom, o formato e o tamanho. Um objetivo claro e um exemplo do resultado costumam ajudar mais do que adjetivos extras."
        },
        {
          "question": "Posso usar o prompt no ChatGPT, Gemini ou Claude?",
          "answer": "Sim. O resultado é texto simples que você pode colar em qualquer assistente de chat. Ainda assim, modelos diferentes podem responder de forma diferente ao mesmo prompt."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "“Gerar prompt” monta um prompt no seu navegador. “Gerar com IA” envia os campos preenchidos para a API Gemini do Google por meio do ToolStarHub e devolve um prompt redigido. O texto não é salvo.",
      "Platform or use case": "Plataforma ou uso",
      "Topic": "Tema",
      "Goal": "Objetivo",
      "Audience": "Público",
      "Tone": "Tom",
      "Language": "Idioma",
      "Output format": "Formato de saída",
      "Level of detail": "Nível de detalhe",
      "Brief": "Breve",
      "Medium": "Médio",
      "High": "Alto",
      "Additional instructions": "Instruções adicionais",
      "Generate prompt": "Gerar prompt",
      "Prompt": "Prompt",
      "AI prompt": "Prompt de IA",
      "Blog article": "Artigo de blog",
      "SEO article": "Artigo de SEO",
      "Social media post": "Post para redes sociais",
      "YouTube script": "Roteiro para YouTube",
      "YouTube thumbnail prompt": "Prompt de miniatura do YouTube",
      "Image generation": "Geração de imagens",
      "Video generation": "Geração de vídeo",
      "Product description": "Descrição de produto",
      "Email": "E-mail",
      "Marketing copy": "Texto de marketing",
      "Academic/research prompt": "Prompt acadêmico/de pesquisa",
      "Coding prompt": "Prompt de programação",
      "Add a topic or a goal before generating a prompt.": "Informe um tema ou um objetivo antes de gerar um prompt."
    },
    "note": "“Gerar prompt” escreve o prompt em inglês, o idioma que os modelos de IA seguem com mais precisão. O campo “Idioma” define o idioma da resposta. “Gerar com IA” também entende o que você digitar em português."
  },
  "prompt-to-image": {
    "answer": "Uma ferramenta de prompt para imagem escreve um prompt de imagem para copiar a partir do assunto e do estilo. Ela não cria a imagem. “Gerar com IA” só devolve um prompt mais detalhado.",
    "content": {
      "about": "O gerador de prompt para imagem escreve um prompt para um modelo de imagem. Você descreve o assunto, o lugar, a luz e o enquadramento. A página não desenha a imagem, porque nenhuma API de imagem está conectada.",
      "howTo": [
        "Escolha uma predefinição de estilo se quiser um ponto de partida.",
        "Descreva o assunto. Sem assunto, a ferramenta não cria o prompt.",
        "Acrescente ambiente, luz, câmera, cores, clima e proporção se fizerem diferença.",
        "Digite um prompt negativo com o que deve ficar fora da imagem.",
        "Clique em “Criar prompt” e copie o prompt e o prompt negativo separadamente."
      ],
      "features": [
        "Predefinições de foto, cinema, ilustração, produto, retrato, paisagem, arquitetura, fantasia, anime, 3D e miniatura.",
        "Botões de cópia separados para o prompt principal e o negativo.",
        "Campos vazios são omitidos para não deixar rótulos vazios no prompt."
      ],
      "examples": [
        {
          "title": "Uma foto de produto",
          "body": "Assunto: uma garrafa de água de aço inox. Predefinição: fotografia de produto. Proporção: 1:1. Prompt negativo: logotipos extras, pessoas, mesa bagunçada. O resultado é uma descrição de estúdio, não um arquivo."
        },
        {
          "title": "Uma miniatura",
          "body": "Assunto: uma pessoa segurando um PDF destacado. Predefinição: miniatura do YouTube. A composição continua “um assunto, espaço para um título curto”. O texto do título você mesmo escreve."
        }
      ],
      "explanation": "Cada campo preenchido vira uma frase curta. O assunto é obrigatório para que o prompt descreva algo específico. Uma predefinição muda o estilo e alguns campos relacionados, mas não apaga o assunto já digitado.",
      "limitations": "A página escreve um prompt e, se você quiser, um prompt negativo. Ela não entrega um arquivo de imagem. O assunto é obrigatório. “Gerar com IA” pede ao Gemini um prompt mais longo, que você cola depois em uma ferramenta de imagem.",
      "tips": [
        "Um assunto único é mais fácil de descrever do que uma multidão.",
        "Diga qual é a luz. “Luz de janela” e “sol forte do meio-dia” geram imagens bem diferentes.",
        "Use o prompt negativo para falhas que se repetem, como dedos a mais ou texto deformado."
      ],
      "faqs": [
        {
          "question": "Por que não aparece uma imagem?",
          "answer": "Esta página escreve um prompt e não gera imagem. “Gerar com IA” pede ao Gemini um prompt mais detalhado. Cole-o em um serviço que crie imagens."
        },
        {
          "question": "Todos os modelos leem o prompt da mesma forma?",
          "answer": "Não. Os modelos reagem de jeitos diferentes à redação. Trate o resultado como um briefing claro e ajuste para a sua ferramenta."
        },
        {
          "question": "Meu texto é enviado a um servidor?",
          "answer": "“Criar prompt” fica neste navegador e não envia o briefing. “Gerar com IA” envia o briefing para a API Gemini do Google por meio do ToolStarHub e devolve um prompt mais longo. O ToolStarHub não salva esse texto. No plano gratuito, o Google pode usá-lo para melhorar seus produtos. A página continua sem criar imagem."
        },
        {
          "question": "Como escrevo um bom prompt de imagem?",
          "answer": "Comece pelo assunto e acrescente o ambiente, a luz, o estilo de câmera ou artístico, a paleta de cores, o clima e a proporção. Seja específico no que importa e deixe o resto de fora."
        },
        {
          "question": "O que é um prompt negativo?",
          "answer": "Um prompt negativo lista o que deve ficar fora da imagem, como texto, dedos a mais ou desfoque. Nem todo modelo de imagem lê esse campo."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "“Criar prompt” escreve um prompt de imagem no seu navegador. “Gerar com IA” envia seu briefing para a API Gemini do Google por meio do ToolStarHub e devolve um prompt de imagem mais completo. Esta página não cria imagens. O texto não é salvo.",
      "Style presets": "Predefinições de estilo",
      "Composition": "Composição",
      "Colors": "Cores",
      "Quality and detail": "Qualidade e detalhes",
      "Things you want left out of the picture.": "O que você quer fora da imagem.",
      "Image prompt": "Prompt de imagem",
      "AI image prompt": "Prompt de imagem com IA",
      "Photorealistic": "Fotorrealista",
      "Cinematic": "Cinematográfico",
      "Illustration": "Ilustração",
      "Product photography": "Fotografia de produto",
      "Portrait": "Retrato",
      "Landscape": "Paisagem",
      "Architecture": "Arquitetura",
      "Fantasy": "Fantasia",
      "Anime": "Anime",
      "3D render": "Renderização 3D",
      "YouTube thumbnail": "Miniatura do YouTube",
      "Describe the subject before building the prompt.": "Descreva o assunto antes de criar o prompt."
    },
    "note": "O prompt criado usa rótulos em inglês, que os modelos de imagem entendem melhor. Você pode digitar suas descrições em qualquer idioma."
  },
  "prompt-to-video": {
    "answer": "Uma ferramenta de prompt para vídeo escreve a descrição de uma tomada para colar em um modelo de vídeo. Ela não gera nenhum clipe. “Gerar com IA” só devolve o prompt escrito.",
    "content": {
      "about": "O gerador de prompt para vídeo escreve a descrição de uma única tomada: quem ou o que aparece, o que se move, como a câmera se move e quanto tempo dura. Ele não cria vídeo.",
      "howTo": [
        "Escolha uma predefinição como estilo inicial, ou deixe os campos vazios e escreva você mesmo.",
        "Informe um assunto ou uma ação. É preciso um dos dois.",
        "Descreva a cena, a câmera, a lente, a luz, a duração e a proporção.",
        "Acrescente áudio ou diálogo só se a tomada precisar.",
        "Clique em “Criar prompt” e copie o texto. “Limpar” reinicia o formulário, incluindo a duração padrão."
      ],
      "features": [
        "Predefinições de cinema, comercial de produto, redes sociais, YouTube, documentário, viagem, ação, moda, natureza, cenas históricas e animação.",
        "Uma linha final que limita o pedido a uma única tomada contínua.",
        "Um prompt negativo separado para falhas de movimento ou imagem que você quer evitar."
      ],
      "examples": [
        {
          "title": "Um produto em órbita",
          "body": "Assunto: uma caneca de cerâmica. Ação: o vapor sobe. Predefinição: comercial de produto. A duração fica em 6 segundos. O prompt pede um movimento circular e luz de estúdio."
        },
        {
          "title": "Uma tomada tranquila de viagem",
          "body": "Assunto: uma trilha à beira-mar. Ação: uma pessoa se afasta da câmera. Predefinição: viagem. Informe a hora do dia no campo de ambiente para a luz não ficar indefinida."
        }
      ],
      "explanation": "Modelos de vídeo lidam melhor com uma ação do que com uma sequência de cenas. O gerador mantém suas frases em ordem estável e acrescenta “uma única tomada contínua” para o pedido não virar um storyboard.",
      "limitations": "O gerador descreve uma única tomada contínua. Ele não gera nem baixa vídeo. Você precisa de um assunto ou de uma ação. Duração, câmera e diálogo só entram se você digitar.",
      "tips": [
        "Diga o que se move e o que fica parado.",
        "Uma duração como “5 segundos” ajuda mais do que “curto”.",
        "Se precisar de diálogo, escreva a fala. Não peça ao modelo para inventar um discurso."
      ],
      "faqs": [
        {
          "question": "Posso baixar um vídeo nesta página?",
          "answer": "Não. Esta página não gera vídeo. “Gerar com IA” só devolve um prompt de tomada escrito pelo Gemini. Copie-o para uma ferramenta de vídeo em que você confia."
        },
        {
          "question": "E se eu só descrever a ação?",
          "answer": "Uma ação basta. Acrescentar um assunto deixa a tomada mais fácil de imaginar."
        },
        {
          "question": "Meu texto é enviado a um servidor?",
          "answer": "“Criar prompt” escreve a tomada nesta aba. “Gerar com IA” envia os campos da tomada para a API Gemini do Google por meio do ToolStarHub e devolve um prompt escrito. O ToolStarHub não salva esse texto. No plano gratuito, o Google pode usá-lo para melhorar seus produtos. Nenhum arquivo de vídeo é criado."
        },
        {
          "question": "Como escrevo um prompt para um vídeo com IA?",
          "answer": "Descreva uma tomada: o assunto, a ação, o ambiente, o movimento de câmera, a lente, a luz e a duração. Prompts curtos e concretos costumam funcionar melhor do que histórias longas."
        },
        {
          "question": "Quais modelos de vídeo podem usar estes prompts?",
          "answer": "O resultado é texto simples, então você pode colá-lo em qualquer ferramenta de texto para vídeo. Cada modelo segue as indicações de câmera e tempo do seu jeito."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "“Criar prompt” escreve um prompt de vídeo no seu navegador. “Gerar com IA” envia seu briefing para a API Gemini do Google por meio do ToolStarHub e devolve um prompt de tomada. Esta página não cria vídeos. O texto não é salvo.",
      "Video subject": "Assunto do vídeo",
      "Scene": "Cena",
      "Action": "Ação",
      "Camera movement": "Movimento de câmera",
      "Lens": "Lente",
      "Visual style": "Estilo visual",
      "Duration": "Duração",
      "Audio or dialogue": "Áudio ou diálogo",
      "Video prompt": "Prompt de vídeo",
      "AI video prompt": "Prompt de vídeo com IA",
      "Cinematic": "Cinematográfico",
      "Product commercial": "Comercial de produto",
      "Social media": "Redes sociais",
      "YouTube": "YouTube",
      "Documentary": "Documentário",
      "Travel": "Viagem",
      "Fashion": "Moda",
      "Nature": "Natureza",
      "Historical": "Histórico",
      "Animation": "Animação",
      "Add a subject or an action before building the prompt.": "Informe um assunto ou uma ação antes de criar o prompt."
    },
    "note": "O prompt criado usa rótulos em inglês, que os modelos de vídeo entendem melhor. Você pode digitar suas descrições em qualquer idioma."
  },
  "ai-article-detector": {
    "answer": "Esta página verifica padrões de escrita, como o tamanho das frases e expressões repetidas. “Analisar com IA” também é uma análise de padrões de escrita. Ela não decide se o texto foi escrito por uma pessoa ou por um modelo.",
    "content": {
      "about": "O detector de artigos com IA examina o rascunho colado e informa o tamanho das frases, quanto esses tamanhos variam, a amplitude do vocabulário e as expressões curtas que se repetem. O resultado se chama “análise de padrões de escrita” e não afirma mais do que isso.",
      "howTo": [
        "Cole pelo menos 40 palavras.",
        "Clique em “Analisar texto” para a verificação no navegador, ou em “Analisar com IA” para uma análise de padrões de escrita feita pelo Gemini.",
        "Leia os valores e a observação abaixo.",
        "Se a amostra for curta demais, a página avisa em vez de dar uma nota.",
        "“Limpar” remove o texto da página."
      ],
      "features": [
        "Tamanho médio das frases com variação baixa, moderada ou variada.",
        "Uma avaliação do vocabulário pela quantidade de palavras diferentes.",
        "Expressões de quatro palavras que aparecem três vezes ou mais.",
        "Uma lista curta de frases feitas, se houver."
      ],
      "examples": [
        {
          "title": "Um rascunho que se repete",
          "body": "Se as mesmas quatro palavras aparecem em várias frases, elas são listadas com a contagem. Isso significa que o rascunho se repete, não que um modelo o escreveu."
        },
        {
          "title": "Uma legenda curta",
          "body": "Vinte palavras não bastam. A ferramenta pede 40 para que uma única frase não seja tratada como padrão."
        }
      ],
      "explanation": "A variação das frases compara a dispersão dos tamanhos com a média. O vocabulário compara as palavras diferentes com o total. Os dois valores mudam com uma revisão normal. Um rascunho humano cuidadoso pode parecer uniforme, e um gerado pode parecer variado. O resultado avisa isso.",
      "limitations": "A verificação no navegador precisa de pelo menos 40 palavras. Ela informa o tamanho das frases, a amplitude do vocabulário e as expressões repetidas. Não dá porcentagem nem afirma que um modelo escreveu o rascunho. “Analisar com IA” envia o texto ao Gemini para o mesmo tipo de descrição.",
      "tips": [
        "Use um parágrafo inteiro, não um título.",
        "Trate as expressões repetidas como dicas de revisão. Corte-as se os leitores fossem notar.",
        "Não use as avaliações para acusar alguém de usar um modelo."
      ],
      "faqs": [
        {
          "question": "Ele consegue dizer se um texto foi escrito por IA?",
          "answer": "Não com certeza. Verificações de padrões erram nos dois sentidos. O resultado descreve o rascunho; não é um veredito."
        },
        {
          "question": "Por que não há porcentagem?",
          "answer": "Uma porcentagem pareceria uma prova. “Analisar texto” e “Analisar com IA” descrevem padrões. Nenhum dos dois afirma saber quem escreveu o texto."
        },
        {
          "question": "Meu texto é enviado a um servidor?",
          "answer": "“Analisar texto” conta os padrões nesta aba e não envia o rascunho. “Analisar com IA” envia o rascunho para a API Gemini do Google por meio do ToolStarHub e recebe uma descrição escrita. O ToolStarHub não salva esse texto. No plano gratuito, o Google pode usá-lo para melhorar seus produtos."
        },
        {
          "question": "Detectores de IA são confiáveis?",
          "answer": "Nenhum detector consegue provar quem escreveu um texto. Pontuações baseadas em padrões podem marcar textos humanos e deixar passar textos de IA editados, então trate qualquer resultado como um motivo para revisar, não como prova."
        },
        {
          "question": "Quais padrões esta ferramenta analisa?",
          "answer": "Ela informa o tamanho das frases, quão variado é o vocabulário e as expressões repetidas, para você ver onde um rascunho soa monótono ou repetitivo."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "“Analisar texto” verifica padrões no seu navegador. “Analisar com IA” envia o rascunho para a API Gemini do Google por meio do ToolStarHub para uma análise de padrões de escrita. Nenhum dos resultados pode decidir quem escreveu o texto. O rascunho não é salvo.",
      "Article or draft": "Artigo ou rascunho",
      "Paste at least 40 words.": "Cole pelo menos 40 palavras.",
      "Analyze writing": "Analisar texto",
      "Analyze with AI": "Analisar com IA",
      "Avg. sentence": "Frase média",
      "{0} words": "{0} palavras",
      "Sentence variation": "Variação das frases",
      "Vocabulary": "Vocabulário",
      "Writing pattern analysis": "Análise de padrões de escrita",
      "No four-word phrase repeats three or more times.": "Nenhuma expressão de quatro palavras aparece três vezes ou mais.",
      "Familiar stock phrases found:": "Frases feitas encontradas:",
      "AI writing analysis": "Análise de escrita com IA",
      "Paste some writing first.": "Cole algum texto primeiro.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "Cole pelo menos 40 palavras. Um trecho curto não mostra padrão.",
      "Low": "Baixa",
      "Moderate": "Moderada",
      "Varied": "Variada",
      "Narrow": "Restrito",
      "Mixed": "Misto",
      "Broad": "Amplo",
      "\"{0}\" appears {1} times": "“{0}” aparece {1} vezes",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Estes são padrões de escrita, não prova de autoria. Padrões parecidos aparecem em rascunhos humanos revisados e em textos gerados. Um detector pode errar nos dois sentidos."
    },
    "note": "A verificação no navegador usa listas de palavras e frases feitas em inglês, por isso funciona melhor com textos em inglês. “Analisar com IA” também funciona com textos em português."
  },
  "ai-article-compressor": {
    "answer": "Um compressor de artigos encurta um rascunho removendo enrolação e frases repetidas. “Comprimir com IA” pede ao Gemini para manter a ideia principal. Revise o resultado antes de publicar.",
    "content": {
      "about": "O compressor de artigos com IA encurta um rascunho longo. A compressão leve troca algumas expressões prolixas e limpa espaços. A média e a forte também removem frases repetidas. Leia o resultado: quando uma frase some, o sentido pode mudar.",
      "howTo": [
        "Cole o artigo. Ele precisa de pelo menos 12 palavras.",
        "Escolha compressão leve, média ou forte.",
        "Clique em “Encurtar artigo” para aplicar as regras no navegador, ou em “Comprimir com IA” para o Gemini encurtar.",
        "Compare a contagem de palavras e copie o rascunho mais curto se ele ainda disser o que você queria.",
        "“Limpar” esvazia as duas caixas e volta o nível para médio."
      ],
      "features": [
        "Três níveis, para que uma passada leve não apague frases.",
        "Contagem de palavras antes e depois.",
        "Substituições fixas, como “in order to” por “to”.",
        "Remoção de frases duplicadas nos níveis médio e forte."
      ],
      "examples": [
        {
          "title": "Uma frase prolixa",
          "body": "“In order to finish the form, you need to sign it” vira “to finish the form, you need to sign it” em todos os níveis."
        },
        {
          "title": "A mesma frase duas vezes",
          "body": "Os níveis médio e forte mantêm a primeira e removem a repetição exata seguinte. O nível leve mantém as duas."
        }
      ],
      "explanation": "“Encurtar artigo” usa uma lista fixa de substituições. A compressão forte também pula uma frase posterior que começa com as mesmas seis palavras de uma anterior. “Comprimir com IA” pede ao Gemini para encurtar o artigo no nível escolhido. Leia os dois resultados antes de confiar neles.",
      "limitations": "A compressão leve substitui uma lista fixa de expressões prolixas. A média e a forte também removem repetições exatas posteriores, e a forte pode pular uma frase que começa com as mesmas seis palavras. O rascunho precisa de pelo menos 12 palavras. A compressão pode remover uma frase que você queria manter.",
      "tips": [
        "Comece pelo nível leve se o artigo já for enxuto.",
        "Use o nível forte em um primeiro rascunho bagunçado e depois recoloque as frases importantes.",
        "Isto não é uma forma de esconder como um rascunho foi produzido."
      ],
      "faqs": [
        {
          "question": "O texto comprimido passa por um detector de IA?",
          "answer": "Não. A ferramenta não tenta isso nem afirma que o resultado vai parecer escrito por um tipo específico de autor."
        },
        {
          "question": "Minha ideia é mantida?",
          "answer": "“Encurtar artigo” mantém a maioria das palavras e remove um pouco de enrolação e repetição. “Comprimir com IA” pede ao Gemini para manter a ideia principal e os fatos importantes. Leia o rascunho mais curto antes de confiar nele."
        },
        {
          "question": "Meu texto é enviado a um servidor?",
          "answer": "“Encurtar artigo” roda nesta aba e não envia o rascunho. “Comprimir com IA” envia o rascunho para a API Gemini do Google por meio do ToolStarHub e devolve uma versão mais curta. O ToolStarHub não salva esse texto. No plano gratuito, o Google pode usá-lo para melhorar seus produtos."
        },
        {
          "question": "Como encurto um artigo sem perder o sentido?",
          "answer": "Corte primeiro as expressões prolixas, depois os pontos repetidos e por fim as frases inteiras que não acrescentam nada. Compare o resultado com o original antes de usar."
        },
        {
          "question": "Qual nível de compressão devo escolher?",
          "answer": "O leve só troca expressões prolixas. O médio também remove repetições. O forte pode pular frases que começam do mesmo jeito, então revise com mais cuidado."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "“Encurtar artigo” aplica regras fixas no seu navegador. “Comprimir com IA” envia o artigo para a API Gemini do Google por meio do ToolStarHub e devolve um rascunho mais curto. O artigo não é salvo. Revise o resultado antes de publicar.",
      "Article": "Artigo",
      "Compression": "Compressão",
      "Light compression": "Compressão leve",
      "Medium compression": "Compressão média",
      "Strong compression": "Compressão forte",
      "Shorten article": "Encurtar artigo",
      "Compress with AI": "Comprimir com IA",
      "Copy shorter draft": "Copiar rascunho mais curto",
      "Shorter draft": "Rascunho mais curto",
      "The shorter draft will appear here.": "O rascunho mais curto vai aparecer aqui.",
      "AI shorter draft": "Rascunho curto com IA",
      "Copy AI draft": "Copiar rascunho de IA",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "{0} palavras antes, {1} palavras depois. Leia o rascunho mais curto antes de usar.",
      "Paste an article first.": "Cole um artigo primeiro.",
      "Paste a longer article. A few words is not enough to shorten.": "Cole um artigo mais longo. Poucas palavras não bastam para encurtar.",
      "Nothing was left after compression. Try a lighter setting.": "Não sobrou nada depois da compressão. Tente um nível mais leve."
    },
    "note": "“Encurtar artigo” usa uma lista de expressões em inglês, por isso quase não altera textos em português. “Comprimir com IA” também funciona com textos em português."
  },
  "ai-text-humanizer": {
    "answer": "Um humanizador de texto com IA troca frases feitas no seu navegador com base em uma lista fixa. “Humanizar com IA” envia o rascunho para a API Gemini do Google por meio do ToolStarHub. A ferramenta não tenta enganar um detector de IA nem afirma que o resultado vai parecer escrito por um tipo específico de autor.",
    "content": {
      "about": "O humanizador de texto com IA troca uma lista fixa de frases feitas por expressões mais simples. “Reescrever texto” faz isso nesta aba. “Humanizar com IA” envia o rascunho para a API Gemini do Google por meio do ToolStarHub e devolve uma versão reescrita. O texto não é salvo. Revise o resultado antes de usar. Nenhum dos resultados é uma forma de esconder como um rascunho foi produzido.",
      "howTo": [
        "Cole o rascunho. Ele precisa de pelo menos 12 palavras e no máximo 4.000 caracteres.",
        "Clique em “Reescrever texto” para a lista de frases no navegador, ou em “Humanizar com IA” para o Gemini reescrever.",
        "Revise o resultado. Depois de uma remoção, a palavra seguinte pode ficar em minúscula.",
        "Copie a versão reescrita se ela ainda disser o que você queria.",
        "“Limpar” esvazia a caixa e o resultado local."
      ],
      "features": [
        "Uma lista fixa de frases feitas, aplicada no seu navegador.",
        "Um resultado separado para “Humanizar com IA”.",
        "Um limite de 4.000 caracteres para os dois botões.",
        "Nenhuma remoção de frases nem de frases duplicadas."
      ],
      "examples": [
        {
          "title": "Aberturas batidas",
          "body": "“In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.” vira “here is the setup. you can use a short checklist.”"
        },
        {
          "title": "Uma frase repetida",
          "body": "“The form is short. The form is short. Please sign it before noon today and bring a pen.” mantém as duas cópias. Esta passada não remove frases repetidas."
        }
      ],
      "explanation": "“Reescrever texto” percorre uma lista fixa uma única vez. Não volta a pôr maiúscula depois de uma remoção, e um apóstrofo tipográfico não corresponde. “Humanizar com IA” pede ao Gemini para manter os mesmos fatos, nomes e números e não reduzir o rascunho a um resumo. Revise os dois resultados antes de usar.",
      "limitations": "“Reescrever texto” precisa de pelo menos 12 palavras, e os dois botões aceitam no máximo 4.000 caracteres. A passada local só troca expressões da lista. Um apóstrofo tipográfico não corresponde. A ferramenta não tenta enganar um detector de IA nem afirma que o resultado vai parecer escrito por um tipo específico de autor.",
      "tips": [
        "Revise o resultado antes de usar. Depois de uma expressão removida, a palavra seguinte pode ficar em minúscula.",
        "Uma frase repetida continua lá. Esta passada não a remove.",
        "Nenhum dos resultados é uma forma de esconder como um rascunho foi produzido."
      ],
      "faqs": [
        {
          "question": "O humanizador de texto com IA é gratuito?",
          "answer": "Sim. Você pode reescrever um rascunho aqui sem pagar nem criar conta. “Reescrever texto” fica nesta aba. “Humanizar com IA” ainda envia o rascunho para a API Gemini do Google por meio do ToolStarHub."
        },
        {
          "question": "Isso engana um detector de IA?",
          "answer": "Não. A ferramenta não tenta isso nem afirma que o resultado vai parecer escrito por um tipo específico de autor."
        },
        {
          "question": "Minha ideia é mantida?",
          "answer": "“Reescrever texto” mantém todas as palavras que não estão na lista de frases feitas. “Humanizar com IA” tem a instrução de manter os mesmos fatos, nomes e números e não resumir o rascunho. Revise o resultado antes de usar."
        },
        {
          "question": "Meu texto é enviado a um servidor?",
          "answer": "“Reescrever texto” roda nesta aba e não envia o rascunho. “Humanizar com IA” envia o rascunho para a API Gemini do Google por meio do ToolStarHub e devolve uma versão reescrita. O ToolStarHub não salva esse texto. No plano gratuito, o Google pode usá-lo para melhorar seus produtos."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "“Reescrever texto” usa uma lista fixa de frases feitas no seu navegador. “Humanizar com IA” envia o texto para a API Gemini do Google por meio do ToolStarHub e devolve uma versão reescrita. O texto não é salvo. Revise o resultado antes de usar. Nenhum dos resultados é uma forma de esconder como um rascunho foi produzido.",
      "Draft": "Rascunho",
      "Rewrite text": "Reescrever texto",
      "Humanize with AI": "Humanizar com IA",
      "Copy rewritten draft": "Copiar rascunho reescrito",
      "Rewritten draft": "Rascunho reescrito",
      "The rewritten draft will appear here.": "O rascunho reescrito vai aparecer aqui.",
      "AI rewrite": "Reescrita com IA",
      "Copy AI rewrite": "Copiar reescrita de IA",
      "Paste a draft first.": "Cole um rascunho primeiro.",
      "That text is too long for this rewrite. Shorten it and try again.": "Esse texto é longo demais para esta reescrita. Encurte e tente de novo.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Cole um rascunho mais longo. Poucas palavras não bastam para reescrever.",
      "Nothing was left after the rewrite. Try different wording.": "Não sobrou nada depois da reescrita. Tente outra redação."
    },
    "note": "“Reescrever texto” usa uma lista de frases feitas em inglês, por isso quase não altera textos em português. “Humanizar com IA” também funciona com textos em português."
  }
};

export default data;
