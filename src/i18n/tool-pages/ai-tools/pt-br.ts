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
        },
        {
          "question": "Como converto um tema vago em um prompt utilizável?",
          "answer": "Digite o tema, acrescente restrições de público e de formato, e copie o prompt estruturado no modelo que você escolher."
        },
        {
          "question": "O que mais deve ir em um prompt forte, além do tema?",
          "answer": "O objetivo, o público, o tom, o comprimento, os fatos que não podem faltar e o que se deve evitar. A precisão ganha dos adjetivos."
        },
        {
          "question": "O prompt gerado funcionará no ChatGPT, no Gemini ou no Claude?",
          "answer": "Sim: os prompts são texto simples. Cole-os em qualquer modelo de chat e ajuste-os às particularidades daquele produto."
        },
        {
          "question": "Devo incluir exemplos dentro do prompt?",
          "answer": "Os exemplos few-shot ajudam quando o formato é rígido (JSON, tabelas). Mantenha-os curtos e representativos."
        },
        {
          "question": "Esta página chama sozinha um modelo de IA?",
          "answer": "A montagem com ajustes predefinidos é local; qualquer controle Gerar com IA segue a nota de disponibilidade e de privacidade da página."
        },
        {
          "question": "Qual deve ser o tamanho de um prompt pronto?",
          "answer": "O bastante para delimitar a tarefa, e curto o bastante para percorrê-lo de relance. Corte o preenchimento que não muda o resultado."
        },
        {
          "question": "Em que as instruções de sistema se diferenciam do pedido do usuário?",
          "answer": "As instruções de sistema fixam o papel e as regras; os prompts do usuário apresentam a tarefa. Muitas interfaces as unem em uma só caixa."
        },
        {
          "question": "Como peço JSON ou uma tabela?",
          "answer": "Indique o esquema ou a lista de colunas de forma explícita e proíba comentários extras quando precisar de um resultado limpo e analisável."
        },
        {
          "question": "Por que os adjetivos vagos pioram o resultado?",
          "answer": "Palavras como «atraente» deixam o modelo adivinhando. Substitua-as por requisitos mensuráveis."
        },
        {
          "question": "Posso reutilizar um modelo em várias tarefas?",
          "answer": "Sim: deixe espaços para o tema, o público e as restrições. Preencha esses espaços em cada tarefa, em vez de reescrever do zero."
        },
        {
          "question": "Como evito colocar segredos nos prompts?",
          "answer": "Omita segredos e dados pessoais. Use marcadores de posição e preencha os valores reais em um ambiente privado."
        },
        {
          "question": "O que significa encadear vários prompts?",
          "answer": "Executar prompts concretos em sequência —esquema, depois rascunho, depois edição— costuma superar um único pedido enorme."
        },
        {
          "question": "É útil listar o que o modelo deve evitar?",
          "answer": "Umas restrições negativas breves ajudam («sem fanfarra», «sem conselho médico»). Quando puder, prefira especificações positivas."
        },
        {
          "question": "Como depuro um prompt que piorou?",
          "answer": "Compare as mudanças recentes, remova instruções que se contradizem e teste uma variável de cada vez."
        },
        {
          "question": "Quando devo parar de ajustar o prompt e editar o rascunho?",
          "answer": "Quando os próximos ajustes do prompt só embaralham a redação. Termine o polimento em um editor normal."
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
    "note": "“Gerar prompt” escreve o prompt em inglês, o idioma que os modelos de IA seguem com mais precisão. O campo “Idioma” define o idioma da resposta. “Gerar com IA” também entende o que você digitar em português.",
    "metaDescription": "Crie um prompt estruturado com um tema, um objetivo e um formato. «Gerar prompt» permanece no navegador; «Gerar com IA» envia os campos ao Gemini."
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
        },
        {
          "question": "Como estruturo sujeito, estilo e iluminação em um só prompt?",
          "answer": "Comece pelo sujeito e siga com o estilo, a iluminação e a composição, para que o modelo priorize o que mais importa."
        },
        {
          "question": "Devo colocar o ângulo de câmera no início ou no final?",
          "answer": "Coloque o enquadramento no início se o ângulo for crítico; deixe os enfeites opcionais mais atrás para que não se imponham ao sujeito."
        },
        {
          "question": "Como peço fotorrealismo sem que pareça plástico?",
          "answer": "Mencione textura natural da pele, luz suave e indícios de uma objetiva real, em vez de se limitar a «8k ultra realistic»."
        },
        {
          "question": "Quando uso prompts curtos e quando uso longos?",
          "answer": "Os prompts curtos servem para explorar ideias; os mais longos fixam os detalhes quando você já sabe o que funciona."
        },
        {
          "question": "Como evito o texto na cena gerada?",
          "answer": "Diga «no text, no watermark, no logos» no prompt negativo e evite citar letreiros no prompt principal."
        },
        {
          "question": "Posso indicar uma paleta de cores para trabalho de marca?",
          "answer": "Sim: nomeie cores inspiradas em hex ou palavras de paleta (verde-azulado apagado, areia quente) para que os resultados se mantenham na marca."
        },
        {
          "question": "Como peço um fundo de estúdio liso?",
          "answer": "Diga «seamless studio backdrop» ou «solid light-gray background» e proíba cenas carregadas no prompt negativo."
        },
        {
          "question": "O que uma lista reutilizável de prompts deve incluir?",
          "answer": "Sujeito, ação, cenário, estilo, iluminação, objetiva ou enquadramento, e uma lista negativa breve."
        },
        {
          "question": "Como as equipes devem compartilhar os prompts que funcionam?",
          "answer": "Guarde modelos com variáveis (sujeito, cor) em um documento compartilhado para que os resultados se mantenham coerentes."
        },
        {
          "question": "Acrescentar «award-winning» costuma ajudar?",
          "answer": "Raramente: prefira termos visuais concretos a palavras de elogio vagas."
        },
        {
          "question": "Como descrevo com clareza materiais como o vidro ou o metal?",
          "answer": "Nomeie o material e o acabamento (alumínio escovado, vidro fosco) e como a luz incide nele."
        },
        {
          "question": "Posso combinar estilos de ilustração e de foto?",
          "answer": "Sim, mas escolha um estilo dominante; as pistas misturadas podem confundir o modelo."
        },
        {
          "question": "Por que as mãos podem aparecer mal mesmo com um prompt cuidadoso?",
          "answer": "As mãos são um ponto fraco conhecido: simplifique as poses ou recorte mais de perto quando a qualidade importar."
        },
        {
          "question": "Os filtros NSFW devem mudar como eu escrevo os prompts?",
          "answer": "Siga a política de cada modelo; evite o conteúdo proibido em vez de tentar contornar as normas com a redação."
        },
        {
          "question": "Este construtor de prompts renderiza a imagem final?",
          "answer": "Ele ajuda você a escrever o prompt; você o cola em separado no modelo de imagem que escolher."
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
    "note": "O prompt criado usa rótulos em inglês, que os modelos de imagem entendem melhor. Você pode digitar suas descrições em qualquer idioma.",
    "metaDescription": "Escreva um prompt de imagem a partir do sujeito e do estilo. Esta página não gera a imagem. «Gerar com IA» só devolve um prompt mais detalhado."
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
        },
        {
          "question": "Como descrevo o movimento para que os clipes pareçam deliberados?",
          "answer": "Indique a ação do sujeito, o movimento de câmera e o ritmo (avanço lento, pan rápido) em uma linguagem simples."
        },
        {
          "question": "Um prompt deve cobrir toda a história ou um só plano?",
          "answer": "Um plano por prompt é mais claro; encadeie planos com um storyboard breve para relatos mais longos."
        },
        {
          "question": "Como mantenho a iluminação coerente entre os cortes?",
          "answer": "Repita as mesmas palavras de hora do dia e de qualidade de luz no prompt de cada plano."
        },
        {
          "question": "Posso indicar a duração dentro do texto do prompt?",
          "answer": "Alguns modelos respeitam «5-second clip»; outros usam a duração da interface: siga os controles do modelo."
        },
        {
          "question": "Como reduzo o pisca-pisca entre os fotogramas?",
          "answer": "Peça iluminação estável e movimento suave; evite mudanças rápidas de estilo no meio do prompt."
        },
        {
          "question": "Quais verbos de câmera funcionam bem para vídeo com IA?",
          "answer": "Dolly, travelling, órbita, câmera na mão e tripé fixo são mais claros do que um vago «cinematic»."
        },
        {
          "question": "Como devo tratar o som em um prompt de vídeo?",
          "answer": "Descreva sons diegéticos só se o modelo admitir áudio; se não, planeje o som na pós-produção."
        },
        {
          "question": "Posso adaptar um prompt de imagem fixa a um prompt de vídeo?",
          "answer": "Reutilize o sujeito e o estilo, e acrescente o movimento e a direção de câmera que o prompt fixo não tinha."
        },
        {
          "question": "Como evito que os rostos se deformem no meio do clipe?",
          "answer": "Mantenha as pistas de identidade curtas e coerentes; evite descrições contraditórias de idade ou de cabelo."
        },
        {
          "question": "Devo mencionar a resolução e os fps toda vez?",
          "answer": "Se a interface os fixar, omita-os; se não, indique uma vez os fps e a resolução de destino."
        },
        {
          "question": "Em que as demos de produto se diferenciam dos clipes narrativos?",
          "answer": "As demos destacam um movimento claro do produto e rótulos legíveis; as narrações destacam a emoção e os acentos."
        },
        {
          "question": "Que lista negativa é útil para vídeo?",
          "answer": "Sem sobreposições de texto, sem marca d'água, sem cortes bruscos, sem membros a mais: ajuste-a a cada modelo."
        },
        {
          "question": "Como itero depois de um primeiro render fraco?",
          "answer": "Mude uma variável (movimento, objetiva ou iluminação) em cada tentativa para aprender o que funcionou."
        },
        {
          "question": "Os prompts podem pedir transições concretas?",
          "answer": "Alguns modelos ignoram as palavras de transição; corte em um editor quando a precisão importar."
        },
        {
          "question": "Esta página gera o arquivo de vídeo por mim?",
          "answer": "Ela ajuda você a redigir o prompt; a geração ocorre no modelo ou no aplicativo de vídeo que você usar."
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
    "note": "O prompt criado usa rótulos em inglês, que os modelos de vídeo entendem melhor. Você pode digitar suas descrições em qualquer idioma.",
    "metaDescription": "Escreva a descrição de um plano para colar em um modelo de vídeo. Não renderiza o clipe. «Gerar com IA» só devolve o prompt escrito."
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
        },
        {
          "question": "Como funcionam as revisões de padrões de escrita em um rascunho?",
          "answer": "Elas buscam regularidades estatísticas habituais na saída de um modelo —ritmo uniforme, transições feitas e pouca variação— não uma prova de autoria."
        },
        {
          "question": "Por que não tratar o resultado como uma pontuação em porcentagem?",
          "answer": "Uma só porcentagem implica uma precisão falsa. As notas de padrões são mais honestas do que um número de certeza inventado."
        },
        {
          "question": "Uma escrita humana cuidadosa pode parecer uniforme a um revisor?",
          "answer": "Sim. Os relatórios formais e os textos de marketing editados podem disparar sinais parecidos. Use os resultados como um convite a revisar, não como um veredito."
        },
        {
          "question": "O que devo fazer se os padrões parecerem de IA?",
          "answer": "Reescreva as transições, varie o comprimento das frases e acrescente detalhes concretos que só você conhece. Depois revise de novo."
        },
        {
          "question": "Analisar o texto envia o meu rascunho?",
          "answer": "As revisões locais permanecem no navegador; qualquer passo opcional de análise com IA segue a nota de privacidade da página."
        },
        {
          "question": "As pontuações de um detector bastam para um caso disciplinar escolar?",
          "answer": "Nenhuma ferramenta é definitiva. Não use o resultado de um detector como única prova de uma falta. As instituições devem combinar provas do processo com uma revisão humana, não se basear só em detectores."
        },
        {
          "question": "Que indícios esta página destaca em um rascunho?",
          "answer": "Coisas como aberturas repetidas, parágrafos de comprimento uniforme e formulações genéricas: sinais para investigar, não uma prova."
        },
        {
          "question": "Posso revisar um parágrafo de cada vez?",
          "answer": "Sim. As amostras menores podem mostrar quais seções se sentem mais de modelo."
        },
        {
          "question": "Uma edição intensa depois de um rascunho com IA apaga todos os sinais?",
          "answer": "Muitas vezes os reduz, mas algo da estrutura pode permanecer. O julgamento humano continua importando."
        },
        {
          "question": "Devo colar texto confidencial de um cliente em um revisor?",
          "answer": "Melhor não. Use texto de amostra ou redigido quando explorar padrões."
        },
        {
          "question": "Os blocos de código afetam a leitura?",
          "answer": "O conteúdo misturado pode enviesar as pistas. Revise a prosa em separado do código quando puder."
        },
        {
          "question": "Um rótulo humano garante a autoria?",
          "answer": "Não. Os rótulos são heurísticas. Trate-os como uma orientação, não como uma certificação."
        },
        {
          "question": "Em que isso se diferencia de um revisor de plágio?",
          "answer": "As ferramentas de plágio comparam com fontes conhecidas. As revisões de padrões estimam a regularidade do estilo, sem afirmar uma coincidência de fonte."
        },
        {
          "question": "Vários idiomas podem ser analisados da mesma forma?",
          "answer": "O suporte varia. As heurísticas centradas no inglês podem ler mal outros idiomas."
        },
        {
          "question": "Qual é um fluxo de trabalho saudável depois de um alerta?",
          "answer": "Revise a voz e os detalhes, cite as fontes e conserve os rascunhos que mostrem o seu processo."
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
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Estes são padrões de escrita, não prova de autoria. Padrões parecidos aparecem em rascunhos humanos revisados e em textos gerados. Um detector pode errar nos dois sentidos.",
      "This check is probabilistic. It can give false positives and false negatives. Do not use the result as the sole proof of misconduct.": "Esta verificação é probabilística. Ela pode dar falsos positivos e falsos negativos. Não use o resultado como a única prova de uma irregularidade."
    },
    "note": "A verificação no navegador usa listas de palavras e frases feitas em inglês, por isso funciona melhor com textos em inglês. “Analisar com IA” também funciona com textos em português.",
    "metaDescription": "Revise o comprimento das frases e as repetições. «Analisar com IA» também é uma análise de padrões, não um veredito sobre a autoria."
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
        },
        {
          "question": "Como encurto um rascunho longo e conservo o ponto?",
          "answer": "Cole o artigo, escolha um nível de compressão e revise a versão mais curta em busca de fatos que faltem antes de publicá-la."
        },
        {
          "question": "Com que intensidade de compressão devo começar?",
          "answer": "Comece com um passo leve para polir e teste um nível mais forte só se ainda precisar de menos palavras."
        },
        {
          "question": "A compressão tira citações e trechos entre aspas?",
          "answer": "Os modos agressivos podem recortá-los ou encurtá-los. Revise de novo as fontes e restaure as citações que deva conservar."
        },
        {
          "question": "Posso comprimir uma só seção em vez de todo o texto?",
          "answer": "Sim: cole só essa seção, comprima-a e depois encaixe-a de novo no rascunho completo."
        },
        {
          "question": "Um rascunho mais curto sempre se lê melhor?",
          "answer": "Nem sempre. Uma compressão excessiva pode soar abrupta. Prefira a clareza à contagem de palavras mais baixa."
        },
        {
          "question": "Os detectores tratarão o texto comprimido como escrito por uma pessoa?",
          "answer": "Não há nenhuma garantia confiável. A compressão muda o comprimento e a redação, não uma prova de autoria."
        },
        {
          "question": "Como devo tratar os termos técnicos durante a compressão?",
          "answer": "Revise o resultado em busca de jargão que tenha se perdido ou se alterado. Recoloque à mão os termos críticos."
        },
        {
          "question": "Há uma contagem de palavras à qual eu deva mirar?",
          "answer": "Ajuste-se ao limite do canal (boletim, resumo, redes). Comprima de forma iterativa até alcançá-lo sem perder afirmações."
        },
        {
          "question": "As listas com marcadores sobrevivem à compressão?",
          "answer": "Muitas vezes elas se achatam em parágrafos. Volte a formatar as listas depois se a estrutura importar."
        },
        {
          "question": "A ferramenta inventa fatos novos para preencher vãos?",
          "answer": "Ela não deveria inventar pesquisa. Ainda assim, verifique cada cifra e cada nome com o seu rascunho de origem."
        },
        {
          "question": "E se a versão comprimida mudar o meu tom?",
          "answer": "Edite à mão algumas frases depois de comprimir, ou teste um nível mais suave."
        },
        {
          "question": "Devo comprimir antes ou depois de editar para SEO?",
          "answer": "Costuma convir editar primeiro a estrutura e as palavras-chave, e comprimir depois, para que as frases de SEO não desapareçam tão facilmente."
        },
        {
          "question": "Posso usá-lo com um texto traduzido?",
          "answer": "Sim, mas o risco de o sentido se desviar aumenta. Peça a um leitor bilíngue que revise o resultado."
        },
        {
          "question": "Qual pode ser o tamanho do artigo que eu colo?",
          "answer": "Fique dentro do limite da página. Divida as peças muito longas em capítulos se for preciso."
        },
        {
          "question": "O texto comprimido é salvo quando eu saio?",
          "answer": "Ele permanece só na sessão da página, a menos que você o copie em outro lugar."
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
    "note": "“Encurtar artigo” usa uma lista de expressões em inglês, por isso quase não altera textos em português. “Comprimir com IA” também funciona com textos em português.",
    "metaDescription": "Encurte um rascunho cortando preenchimento e repetições. «Comprimir com IA» pede ao Gemini que conserve o sentido. Revise o resultado antes de publicá-lo."
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
        },
        {
          "question": "Como funciona um humanizador de textos com IA?",
          "answer": "Ele reescreve a formulação, o ritmo e a escolha de palavras para que o rascunho se leia mais como uma escrita cotidiana, e tenta conservar o seu sentido. Os resultados variam conforme o modelo e conforme o quão rígido ou repetitivo era o texto original."
        },
        {
          "question": "Quando devo usar um humanizador em vez de reescrever eu mesmo?",
          "answer": "Use-o quando precisar de um primeiro passo mais rápido em rascunhos rígidos de IA, textos de produto ou cópias traduzidas. Sempre revise você o resultado em busca de fatos, tom e afirmações antes de publicá-lo."
        },
        {
          "question": "Humanizar mudará termos técnicos ou nomes de marca?",
          "answer": "Pode suavizar as frases ao redor, mas você deve conferir que os nomes de produto, as cifras e o jargão permaneçam exatos. Cole de novo qualquer termo que a reescrita tenha deformado antes de enviar o texto."
        },
        {
          "question": "Posso humanizar só um parágrafo de um artigo mais longo?",
          "answer": "Sim. Cole só esse parágrafo, execute a ferramenta e depois encaixe o resultado no rascunho completo. Os trechos mais curtos são mais fáceis de revisar e têm menos risco de se desviar do tema."
        },
        {
          "question": "Um humanizador também corrige a gramática e a ortografia?",
          "answer": "Muitas vezes suaviza formulações desajeitadas, mas não é um corretor dedicado. Passe um corretor ortográfico depois se o rascunho for para clientes ou para um professor."
        },
        {
          "question": "Um texto humanizado é a mesma coisa que uma escrita original?",
          "answer": "Não. Ele continua derivado do seu rascunho de origem. Escolas e editoras podem tratar uma edição intensa com IA conforme as próprias normas, então siga-as quando se aplicarem."
        },
        {
          "question": "Por que às vezes a reescrita soa mais plana do que o original?",
          "answer": "Os humanizadores costumam preferir palavras simples e frases mais curtas. Se você precisar de uma voz de marketing mais contundente, conserve algumas das suas frases originais ou edite o resultado à mão."
        },
        {
          "question": "Quanto texto posso colar?",
          "answer": "Até 4000 caracteres, contados depois de recortar os espaços do início e do fim. Isso dá, mais ou menos, 600-700 palavras de inglês habitual, não milhares de palavras. Tanto a reescrita com a lista de frases quanto «Humanizar com IA» recusam um texto mais longo, e a reescrita com a lista também precisa de pelo menos 12 palavras. Divida um artigo mais longo em seções de menos de 4000 caracteres e reescreva-as uma a uma."
        },
        {
          "question": "A ferramenta salva o meu rascunho quando eu saio da página?",
          "answer": "Esta página foi feita para reescrever na própria página; trate qualquer dado sensível como privado e evite colar segredos. Esvazie a caixa quando terminar se compartilhar o dispositivo."
        },
        {
          "question": "Posso usá-lo para e-mails e publicações do LinkedIn?",
          "answer": "Sim, para limpar o tom de textos profissionais curtos. Mesmo assim, verifique nomes, datas e ofertas para que a redação mais suave não invente detalhes que você não escreveu."
        },
        {
          "question": "Qual é a diferença entre humanizar e parafrasear?",
          "answer": "Parafrasear se concentra em dizer a mesma ideia com outras palavras. Humanizar mira também padrões que soam gerados por uma máquina, como um ritmo repetitivo ou transições feitas."
        },
        {
          "question": "Os detectores sempre rotularão o texto humanizado como humano?",
          "answer": "Não. Os detectores são probabilísticos, imperfeitos e se atualizam com frequência. Não confie em nenhuma ferramenta de reescrita como garantia de que o conteúdo passará um detector concreto, e respeite as normas de integridade acadêmica."
        },
        {
          "question": "Devo humanizar citações acadêmicas e trechos entre aspas?",
          "answer": "Deixe em paz o material citado e as cadeias de referência. Reescreva só a explicação ao redor para não alterar as palavras exatas de outra pessoa."
        },
        {
          "question": "Executar humanizar duas vezes melhora o resultado?",
          "answer": "Um segundo passo pode suavizar frases feitas que tenham restado, mas também pode lavar a voz. Compare as duas versões e fique com a mais clara."
        },
        {
          "question": "O humanizador pode inventar fatos que eu não escrevi?",
          "answer": "As reescritas às vezes preenchem vãos com uma redação plausível. Contraste cada cifra, cada afirmação e cada nome próprio com a sua origem antes de publicar."
        },
        {
          "question": "Há um jeito off-line de suavizar a formulação de IA?",
          "answer": "Sim: corte as aberturas de preenchimento, varie o comprimento das frases, substitua adjetivos vagos por detalhes concretos e leia o rascunho em voz alta. Essas edições costumam superar um segundo passo automático."
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
      "Nothing was left after the rewrite. Try different wording.": "Não sobrou nada depois da reescrita. Tente outra redação.",
      "Use this tool responsibly. It is not a way to hide how a draft was written. Respect your school or workplace academic integrity policy, and check the result before you use it.": "Use esta ferramenta com responsabilidade. Ela não é um jeito de esconder como um rascunho foi escrito. Respeite a política de integridade acadêmica da sua escola ou do seu trabalho, e confira o resultado antes de usá-lo."
    },
    "note": "“Reescrever texto” usa uma lista de frases feitas em inglês, por isso quase não altera textos em português. “Humanizar com IA” também funciona com textos em português.",
    "metaDescription": "Reescreva frases feitas com uma lista fixa no navegador. «Humanizar com IA» envia o rascunho ao Gemini. A ferramenta não tenta evadir um detector de IA."
  },
  "urdu-news-translator": {
    "answer": "O tradutor de notícias em urdu converte uma notícia colada em urdu em rascunhos em inglês Brief, Medium e Full, e depois contrasta nomes, cifras, datas e citações com o urdu. O resultado é um rascunho para um editor, não uma notícia publicada.",
    "note": "Os três rascunhos (Brief, Medium e Full) saem em inglês, pensados para um editor. Os botões do formulário também estão em inglês. A caixa de origem aceita urdu.",
    "content": {
      "about": "Cole uma notícia em urdu e obtenha três rascunhos em inglês: Brief, Medium e Full. Brief conserva quem, o quê, quando e onde. Medium acrescenta a citação principal e a data ou cifra-chave. Full traduz cada frase. Uma conferência de fatos compara cada rascunho com o urdu. A página também revisa cifras, aspas, comprimento e um glossário de nomes paquistaneses. Aqui não se publica nada. Um editor aprova o rascunho primeiro.",
      "howTo": [
        "Cole a notícia em urdu na caixa da direita para a esquerda. Translate a envia ao modelo Gemini do Google por meio do Tools Star Hub.",
        "Leia Brief, Medium e Full. Medium fica selecionado primeiro. Use this muda a versão que Expand e o botão Copy de aprovação usam. Humanize reescreve o corpo ampliado quando há um aberto; se não, reescreve o corpo selecionado.",
        "Leia a tabela de fatos e o relatório de verificação. Um aviso âmbar significa que o rascunho precisa de revisão.",
        "Edite o título, o permalink, o meta título ou qualquer rascunho. Uma edição anula a aprovação.",
        "Toque em Expand news se quiser um artigo mais completo feito só com fatos do urdu. O corpo ampliado são só os parágrafos. Humanize reescreve esse corpo, ou o corpo selecionado, e deixa o título, o subtítulo, o permalink e os campos meta como estão.",
        "Cada campo tem o próprio botão Copy, e esse botão copia só aquele campo. Toque em Approve e depois em Copy ou Copy all. Copy all conserva os rótulos. Se uma verificação precisar de revisão, Approve pede que você leia a lista e confirme."
      ],
      "examples": [
        {
          "title": "Uma entrada de duas frases",
          "body": "Significado de amostra em urdu: o ministro-chefe disse em Lahore na segunda-feira que a cidade abriria duas clínicas. Brief conserva a pessoa, o lugar, o dia e o plano, e deixa de fora a citação. Medium pode conservar a citação e o dia. Full conserva as duas frases e o verbo said. Se o inglês disser 20 clinics, a conferência de cifras marca um erro porque 20 não está no urdu."
        }
      ],
      "explanation": "Translate pede um JSON estruturado. Depois a página monta o título, o permalink e a meta description em código. Brief tem no máximo duas frases e 40 palavras, e não leva citação. Medium tem no máximo 100 palavras. Se o urdu for curto, Brief e Medium ficam tão curtos quanto os fatos permitem, e podem coincidir com Full. Indica-se ao modelo que não acrescente palavras nem fatos para alcançar um comprimento, que não acrescente contexto, que não adivinhe um nome e que não troque claimed por confirmed. As palavras pouco claras permanecem entre colchetes. As cifras urdu e as cifras arábico-índicas passam a cifras ocidentais. Um passo de conferência de fatos compara o urdu com cada versão e só informa um problema real. Humanize devolve só os parágrafos da notícia. O título, o subtítulo, o permalink, o meta título e a meta description permanecem nos próprios campos. Expand e Humanize voltam a executar as verificações de código.",
      "limitations": "A ferramenta redige inglês. Não publica e não conhece o estilo da sua redação além do glossário. Pode passar por alto uma cifra escrita como palavra, e pode passar por alto uma mudança de sentido que a conferência de fatos também passe por alto. Expand e Humanize continuam limitados ao urdu. Não são uma fonte de contexto. O limite de ritmo é de umas 20 solicitações a cada 15 minutos em cada instância do servidor, e uma notícia de mais de 8000 caracteres é recusada. O texto enviado para traduzir não é salvo neste site.",
      "tips": [
        "Cole a notícia que você quer traduzir, não um resumo que tenha escrito ao lado. As linhas a mais viram fatos de origem.",
        "Leia Full junto com o urdu antes de confiar no Brief. Brief pode deixar frases de fora. Ele não pode inventá-las.",
        "Se um nome estiver entre colchetes, confira a grafia em urdu antes de apagar os colchetes.",
        "Depois de aprovar um rascunho, o contador de palavras pode confirmar o comprimento que você está prestes a entregar."
      ],
      "features": [
        "Brief, Medium e Full em uma só página, com subtítulo, corpo e meta description editáveis.",
        "Um permalink, um título e um meta título montados em código, com contagens de caracteres ao vivo.",
        "Uma tabela de fatos que mostra que comprimento inclui cada pessoa, lugar, cifra, data ou citação.",
        "Verificações de código para cifras a mais, citações em Brief, comprimento, palavras entre colchetes e grafias do glossário.",
        "Um glossário de políticos, partidos, cidades e instituições do Paquistão. Só as entradas encontradas na notícia são enviadas com a solicitação."
      ],
      "sections": [
        {
          "heading": "O que cada comprimento pode fazer",
          "paragraphs": [
            "Brief seleciona. Responde quem fez o quê, quando e onde. Não cita ninguém e não acrescenta uma razão que o urdu nunca deu. Se a notícia for só uma negação, Brief permanece em uma negação. Uma notícia em urdu de uma só frase pode deixar Brief e Medium igualmente curtos. Eles não ganham palavras para chegar a 40 ou a 100.",
            "Medium conserva os fatos-chave, a citação principal e a data ou cifra-chave. Uma citação permanece entre aspas. O verbo se mantém fiel: said, claimed ou alleged. Full traduz cada frase. A página avisa quando Full fica abaixo de 70 por cento da contagem de palavras do urdu, o que costuma significar que uma frase foi omitida."
          ]
        },
        {
          "heading": "O que as verificações podem ver e o que não podem",
          "paragraphs": [
            "O código lê cifras e palavras numéricas. دو no urdu conta como 2, e two no inglês conta como 2. Um simples دو ہزار conta como 2000. Uma cifra no inglês que não está no urdu é um erro. De 1 a 10, a linha é um aviso, caso o urdu tenha usado uma palavra, a menos que a conferência de fatos também sinalize essa cifra. Uma cifra do urdu que falta em Full é um aviso. A conferência de fatos também cobre um nome, um lugar, uma citação ou um sentido mudados.",
            "Brief falha se contiver aspas. Os colchetes geram um aviso para você confirmar a palavra pouco clara. Se um nome do glossário estiver no urdu e o inglês usar outra grafia, o relatório avisa. Qualquer aviso ou erro deixa o estado em needs review. Cada campo é copiado por sua conta. Approve desbloqueia Copy e Copy all. Copy all conserva os rótulos."
          ]
        },
        {
          "heading": "Título, permalink e descrição",
          "paragraphs": [
            "O título vai em title case e tem no máximo 70 caracteres. O meta título acrescenta « | Tools Star Hub» quando essa linha cabe em 60 caracteres. Se o sufixo não couber, o meta título é só o título. Um título mais longo é cortado em uma palavra a 60 caracteres, sem sufixo, e não para em uma cifra nem em uma palavra curta como in, of, the, to ou and. Cada meta description é cortada em uma palavra a 155 caracteres.",
            "O permalink vai em minúsculas, com hífens e em ASCII. Removem-se palavras curtas como the, of e in. Ficam de fora as datas e as letras urdu. Conserva de 4 a 8 palavras e no máximo 60 caracteres. Uma repetição na mesma sessão do navegador recebe um sufixo numérico. O site não guarda notícias, então não pode reservar esse endereço no servidor."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Esta página publica a notícia?",
          "answer": "Não. Ela prepara um rascunho. Cada campo tem um botão Copy só para aquele texto. Copy e Copy all na barra de aprovação permanecem desativados até você tocar em Approve, e um editor mesmo assim revisa o inglês antes de usá-lo em outro lugar."
        },
        {
          "question": "Ela acrescentará contexto que o urdu não disse?",
          "answer": "Indica-se que ela não o faça. Brief e Medium só podem encurtar. Não acrescentam palavras nem fatos para alcançar um comprimento. Full traduz cada frase. Expand pode restaurar um fato que está no urdu e falta na versão curta. Um nome, uma cifra, uma data ou uma citação novos deveriam aparecer como um erro."
        },
        {
          "question": "Qual é a diferença entre Brief, Medium e Full?",
          "answer": "Brief tem no máximo duas frases de fatos-chave e não leva citação. Medium tem no máximo 100 palavras e conserva a citação principal e a data ou cifra-chave quando o urdu as tem. Uma notícia curta em urdu pode deixar Brief e Medium tão curtos quanto Full. Full segue cada frase do urdu. Medium se abre selecionado."
        },
        {
          "question": "A notícia em urdu é salva?",
          "answer": "O Tools Star Hub não salva a notícia. Translate, Expand e Humanize enviam o texto à API Gemini do Google. No nível gratuito, o Google pode usar esse texto para melhorar os produtos dele. A lista de permalinks existe só nesta sessão do navegador."
        },
        {
          "question": "Por que um rascunho diz que precisa de revisão?",
          "answer": "O aviso aparece diante de qualquer alerta ou erro: uma cifra a mais, uma citação em Brief, uma versão Full curta, uma palavra entre colchetes ou uma grafia do glossário que não foi usada. Approve então pede que você leia a lista de verificação e confirme."
        },
        {
          "question": "Como colo um parágrafo de notícia em urdu para um rascunho em inglês?",
          "answer": "Cole o texto em urdu, escolha Brief, Medium ou Full, gere o rascunho em inglês e edite-o antes de publicá-lo."
        },
        {
          "question": "Quando devo escolher Brief em vez de Full?",
          "answer": "Use Brief para uma entrada ou um resumo curto; escolha Full quando precisar de uma cobertura mais próxima do detalhe original."
        },
        {
          "question": "Por que uma pessoa deve revisar o rascunho em inglês?",
          "answer": "Os nomes, as cifras e os matizes podem sair errados; trate o resultado como um rascunho de partida, não como um artigo pronto."
        },
        {
          "question": "Posso traduzir os títulos em separado do corpo?",
          "answer": "Sim: execute só o título para um título apertado e depois traduza o corpo em outro passo."
        },
        {
          "question": "A ferramenta inventa citações que não estavam no urdu?",
          "answer": "Ela não deveria acrescentar fatos; se um rascunho inventar um detalhe, corte-o e alinhe-o com as frases de origem."
        },
        {
          "question": "Como trato um texto colado que mistura urdu e inglês?",
          "answer": "Conserve os nomes próprios como aparecem e esclareça o ambíguo enquanto edita o rascunho em inglês."
        },
        {
          "question": "E se as cifras importantes parecerem arredondadas ou mudadas?",
          "answer": "Compare cada cifra com a origem em urdu e corrija o rascunho antes de qualquer coisa ser publicada."
        },
        {
          "question": "Posso usá-lo para colunas de opinião além de notícias diretas?",
          "answer": "Sim, mas conserve o tom com cuidado; a voz de opinião é fácil de achatar ou de exagerar em um rascunho."
        },
        {
          "question": "Qual pode ser o tamanho da entrada em urdu?",
          "answer": "Uma notícia de mais de 8000 caracteres é recusada. Os artigos muito longos podem precisar de passagens por seções para que cada rascunho possa ser editado com clareza."
        },
        {
          "question": "O rascunho em inglês conserva as quebras de parágrafo?",
          "answer": "A estrutura pode mudar; restaure as quebras de parágrafo e os subtítulos enquanto confere os fatos."
        },
        {
          "question": "Está certo publicar a saída automática sem editá-la?",
          "answer": "Não: sempre edite a exatidão, o estilo e as normas da redação antes de publicar sob a sua assinatura."
        },
        {
          "question": "Como atribuo o veículo original?",
          "answer": "Siga a política da sua redação sobre atribuição e direitos; os rascunhos de tradução não concedem direitos de republicação."
        },
        {
          "question": "Posso executar de novo com outro comprimento depois de editar?",
          "answer": "Sim: mude Brief, Medium ou Full e gere de novo, depois misture as melhores frases na sua edição."
        },
        {
          "question": "O que devo fazer com os termos sem traduzir?",
          "answer": "Conserve os termos urdu muito conhecidos ou acrescente uma glosa breve uma vez, para que os leitores não se percam."
        },
        {
          "question": "Sair da página apaga o meu rascunho?",
          "answer": "Copie o rascunho em inglês no seu CMS ou nas suas notas; recarregar pode esvaziar o formulário."
        }
      ]
    },
    "metaDescription": "Passe uma notícia em urdu a rascunhos em inglês (breve, médio e completo) e contraste nomes, cifras e citações. O resultado é um rascunho para um editor.",
    "ui": {}
  }
};

export default data;
