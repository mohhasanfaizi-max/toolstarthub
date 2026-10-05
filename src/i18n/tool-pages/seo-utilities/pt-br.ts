import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Um gerador de UTM adiciona parâmetros de campanha a uma URL para você acompanhar as origens de tráfego nas ferramentas de análise.",
    "content": {
      "about": "Adicione utm_source, utm_medium e utm_campaign a um link, além de term e content opcionais. Profissionais de marketing usam isso para identificar um link de campanha antes de colocá-lo em um anúncio ou e-mail. Um campo em branco fica de fora do link, e esta página não registra visitas nem encurta o endereço.",
      "howTo": [
        "Digite a URL do site, com ou sem https://.",
        "Preencha origem, mídia e campanha. Term e content são opcionais.",
        "Copie a URL gerada. Os parâmetros de consulta que já existiam no link original são mantidos."
      ],
      "examples": [
        {
          "title": "Um link de campanha simples",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Uma URL que já tem parâmetros",
          "body": "https://example.com/page?ref=nav mantém ref=nav e adiciona os campos UTM ao lado."
        }
      ],
      "explanation": "Os parâmetros UTM dizem às ferramentas de análise de onde veio uma visita. utm_source é a plataforma, utm_medium é o canal e utm_campaign é o nome da promoção. utm_term e utm_content são opcionais. Os valores são codificados para URL, então espaços e caracteres especiais continuam válidos.",
      "limitations": "Origem, mídia ou campanha em branco ficam de fora do link em vez de virarem um parâmetro vazio. A página não encurta o endereço nem registra visitas. Um texto que não seja a URL de um site é recusado.",
      "faqs": [
        {
          "question": "O gerador de UTM é gratuito?",
          "answer": "Sim. Adicionar utm_source, utm_medium e utm_campaign a um link é gratuito e não exige conta."
        },
        {
          "question": "Isso vai sobrescrever meus outros parâmetros de consulta?",
          "answer": "Não. Só os campos UTM que você preencher são adicionados ou atualizados. Os outros parâmetros continuam como estão."
        },
        {
          "question": "Esta ferramenta chama algum serviço de rastreamento?",
          "answer": "Não. Ela só monta uma URL no seu navegador. O rastreamento acontece depois, se você usar o link em uma configuração de análise."
        },
        {
          "question": "O que são parâmetros UTM?",
          "answer": "Parâmetros UTM são marcações adicionadas a um link, como utm_source, utm_medium e utm_campaign, que dizem às ferramentas de análise de onde veio uma visita."
        },
        {
          "question": "Quais parâmetros UTM são obrigatórios?",
          "answer": "Origem, mídia e campanha são o mínimo de costume. Term e content são opcionais e ajudam a diferenciar palavras-chave ou versões de anúncios."
        }
      ]
    },
    "ui": {
      "Website URL": "URL do site",
      "Existing query parameters are kept. UTM values are added or updated.": "Os parâmetros de consulta existentes são mantidos. Os valores UTM são adicionados ou atualizados.",
      "Campaign source": "Origem da campanha",
      "Campaign medium": "Mídia da campanha",
      "Campaign name": "Nome da campanha",
      "Campaign term (optional)": "Termo da campanha (opcional)",
      "running shoes": "tênis de corrida",
      "Campaign content (optional)": "Conteúdo da campanha (opcional)",
      "Copy URL": "Copiar URL",
      "Enter a URL to generate a campaign link.": "Digite uma URL para gerar um link de campanha.",
      "Campaign URL": "URL da campanha",
      "Enter a website URL.": "Digite a URL de um site.",
      "Enter a valid website URL.": "Digite uma URL de site válida."
    }
  },
  "slug-generator": {
    "answer": "Um gerador de slug transforma um título em um texto em minúsculas, com hifens, seguro para usar em uma URL.",
    "content": {
      "about": "Transforme um título em um link permanente em minúsculas, com hifens. Quem escreve usa isso para nomear um post antes de colocar o endereço no CMS. Os acentos latinos são removidos, caracteres como 你好 permanecem, e o resultado não verifica se o endereço está livre.",
      "howTo": [
        "Digite ou cole um título.",
        "O slug é atualizado enquanto você digita.",
        "Copie o slug ou limpe a caixa."
      ],
      "examples": [
        {
          "title": "Um título de blog",
          "body": "“How to Compress an Image Without Losing Quality” vira how-to-compress-an-image-without-losing-quality."
        },
        {
          "title": "Acentos e outras escritas",
          "body": "Os acentos latinos são removidos (Café → cafe). Caracteres como 你好 permanecem, então o slug continua legível."
        }
      ],
      "explanation": "O gerador apara o texto, separa os sinais combinados após a normalização Unicode NFKD, coloca as letras latinas em minúsculas, transforma outros separadores em hifens e junta as repetições. Ele mantém letras e números Unicode em vez de apagar todo caractere que não seja do inglês. O resultado é um link permanente prático, não um ID com garantia de ser único.",
      "limitations": "Os acentos latinos são removidos, enquanto caracteres como 你好 permanecem. O resultado tem o formato de link permanente, mas não prova que o endereço está livre. Alguns criadores de sites apagam letras não latinas; esta página não.",
      "faqs": [
        {
          "question": "O gerador de slug é gratuito?",
          "answer": "Sim. Transformar um título em um link permanente com hifens é gratuito, e você não precisa de conta."
        },
        {
          "question": "Isso serve para qualquer CMS?",
          "answer": "A maioria dos sites aceita slugs em minúsculas com hifens. Alguns removem letras não latinas; esta ferramenta as mantém quando são letras ou números."
        },
        {
          "question": "O que eu digito é enviado a um servidor?",
          "answer": "Não. O título é reescrito nesta aba. Ele não é enviado nem salvo no armazenamento local."
        },
        {
          "question": "O que é o slug de uma URL?",
          "answer": "O slug é a parte legível de um endereço web que nomeia uma página, como como-fazer-pao em example.com/blog/como-fazer-pao."
        },
        {
          "question": "O que faz um bom slug para SEO?",
          "answer": "Mantenha-o curto, em minúsculas e descritivo, com as palavras separadas por hifens. Evite datas e palavras de enchimento se a página puder ser atualizada depois."
        }
      ]
    },
    "ui": {
      "Title or text": "Título ou texto",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Os acentos das letras latinas são removidos. Outras letras, como as chinesas, são mantidas.",
      "Example": "Exemplo",
      "Copy slug": "Copiar slug",
      "Generated slug": "Slug gerado",
      "How to Compress an Image Without Losing Quality": "Como comprimir uma imagem sem perder qualidade"
    }
  },
  "qr-code-generator": {
    "answer": "Um gerador de QR code transforma um texto ou uma URL em uma imagem QR para baixar, criada no seu dispositivo.",
    "content": {
      "about": "Codifique texto simples ou uma URL como QR code em PNG, com até 1.200 caracteres. Use para um link curto que alguém vai escanear. Os formatos de Wi-Fi, e-mail e contato ficam no Gerador de QR Code Pro, e um texto longo gera um padrão denso que algumas câmeras não leem.",
      "howTo": [
        "Cole um texto ou uma URL completa, com https:// se for um link da web.",
        "Clique em Gerar. Aparecem uma prévia e uma descrição acessível.",
        "Baixe o PNG e redefina se precisar de outro código."
      ],
      "examples": [
        {
          "title": "Um site",
          "body": "https://example.com vira um QR code que abre esse endereço ao ser escaneado."
        },
        {
          "title": "Texto simples",
          "body": "Uma nota curta ou um lembrete de Wi-Fi pode ser codificado como texto. Fique abaixo de 1.200 caracteres para o padrão continuar legível."
        }
      ],
      "explanation": "Um QR code é um código de barras em matriz. Esta ferramenta monta o padrão no seu navegador com uma biblioteca do lado do cliente. O texto não é enviado a nenhuma API de QR. Um conteúdo muito longo gera um código denso que muitas câmeras têm dificuldade de ler, por isso o tamanho é limitado.",
      "limitations": "É codificado texto simples ou uma URL, e o texto deve ter no máximo 1.200 caracteres. Os formatos de Wi-Fi, e-mail e contato ficam no Gerador de QR Code Pro. Um texto longo gera um padrão denso que algumas câmeras não leem.",
      "faqs": [
        {
          "question": "O gerador de QR code é gratuito?",
          "answer": "Sim. Criar uma imagem QR a partir de um texto ou URL neste navegador é gratuito e sem conta."
        },
        {
          "question": "O texto é enviado?",
          "answer": "Não. O QR code é gerado no seu navegador. O texto não é enviado a nenhum servidor."
        },
        {
          "question": "Qualquer leitor vai ler o PNG?",
          "answer": "A maioria das câmeras lê um PNG de alto contraste de uma URL curta. Impressões minúsculas, pouca luz ou textos muito longos podem falhar."
        },
        {
          "question": "Os QR codes criados aqui expiram?",
          "answer": "Não. O texto ou link fica gravado diretamente no padrão, sem nenhum serviço de redirecionamento no meio, então o código funciona enquanto o próprio link funcionar."
        },
        {
          "question": "Como faço um QR code para um site?",
          "answer": "Cole o endereço completo, com https://, gere o código, baixe o PNG e teste com a câmera de um celular antes de imprimir."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "O QR code é criado no seu navegador. Mantenha o conteúdo razoavelmente curto.",
      "QR code for {0}": "QR code para {0}",
      "QR code for:": "QR code para:",
      "The QR code is generated in your browser. The text is not sent to a server.": "O QR code é gerado no seu navegador. O texto não é enviado a nenhum servidor."
    }
  },
  "qr-code-scanner": {
    "answer": "Um leitor de QR code lê a imagem QR que você escolhe e mostra o texto decodificado no próprio dispositivo.",
    "content": {
      "about": "Leia o primeiro QR code da câmera ou de um PNG ou JPG. Use quando quiser ver o texto antes de decidir abrir um link. A câmera fica desligada até você clicar em Iniciar câmera, e outros tipos de código de barras não são decodificados.",
      "howTo": [
        "Clique em Iniciar câmera só se quiser escanear com a câmera do dispositivo. A permissão é pedida nesse momento, não ao carregar a página.",
        "Mantenha o código enquadrado até aparecer um resultado, ou clique em Parar câmera para liberar a transmissão.",
        "Se a câmera estiver bloqueada, envie um PNG ou JPG do código.",
        "Copie o resultado. Se for uma URL http(s), a opção Abrir link aparece. A página não navega sozinha."
      ],
      "examples": [
        {
          "title": "Leitura pela câmera",
          "body": "Depois de iniciar a câmera, os quadros são decodificados na aba. A transmissão para quando um código é encontrado ou quando você clica em Parar."
        },
        {
          "title": "Envio de imagem",
          "body": "Uma captura de tela de um QR code pode ser decodificada mesmo quando a permissão da câmera é negada."
        }
      ],
      "explanation": "A decodificação usa um leitor JavaScript local nos quadros da câmera ou em uma imagem enviada. O acesso à câmera só começa depois que você clica em Iniciar câmera. As trilhas são encerradas ao clicar em Parar, após uma leitura bem-sucedida e quando você sai da página. Uma URL detectada é mostrada primeiro; abri-la é uma ação separada.",
      "limitations": "É mostrado o primeiro código que o leitor encontra. Outros tipos de código de barras não são decodificados. Um link fica na página até você clicar em Abrir link, e a câmera fica desligada até você clicar em Iniciar câmera.",
      "faqs": [
        {
          "question": "O leitor de QR code é gratuito?",
          "answer": "Sim. Ler um QR code pela câmera ou de uma imagem é gratuito e não exige conta."
        },
        {
          "question": "Os quadros da câmera são enviados?",
          "answer": "Não. Os quadros depois de Iniciar câmera e o PNG ou JPG que você escolher são decodificados nesta aba. Nada é enviado ao Tools Star Hub."
        },
        {
          "question": "Por que o site não abriu automaticamente?",
          "answer": "Navegar automaticamente para uma URL escaneada não é seguro. Confira o texto e use Abrir link se confiar nele."
        },
        {
          "question": "E se a imagem tiver mais de um QR code?",
          "answer": "Este leitor mostra o primeiro código que consegue decodificar. Recorte a imagem se precisar de um código específico."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "O acesso à câmera só é pedido quando você escolhe escanear com a câmera.",
      "Start camera": "Iniciar câmera",
      "Stop camera": "Parar câmera",
      "Or upload a QR image": "Ou envie uma imagem QR",
      "Drag and drop a QR image here, or choose a file.": "Arraste e solte uma imagem QR aqui ou escolha um arquivo.",
      "Image upload works even if the camera is blocked.": "O envio de imagem funciona mesmo com a câmera bloqueada.",
      "Scan result": "Resultado da leitura",
      "Open link": "Abrir link",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "Os quadros depois de Iniciar câmera e o PNG ou JPG que você escolher são decodificados nesta aba. Nada é enviado ao Tools Star Hub.",
      "This browser does not support camera access. Upload an image instead.": "Este navegador não permite acesso à câmera. Envie uma imagem.",
      "Camera permission was denied. You can still upload an image.": "A permissão da câmera foi negada. Você ainda pode enviar uma imagem.",
      "No camera was found. Upload an image instead.": "Nenhuma câmera encontrada. Envie uma imagem.",
      "The camera could not be started. Upload an image instead.": "Não foi possível iniciar a câmera. Envie uma imagem.",
      "This browser could not read that image.": "Este navegador não conseguiu ler essa imagem.",
      "No QR code was found in that image.": "Nenhum QR code foi encontrado nessa imagem.",
      "That file could not be read as an image.": "Não foi possível ler esse arquivo como imagem."
    }
  },
  "password-generator": {
    "answer": "Um gerador de senhas cria senhas aleatórias com os conjuntos de caracteres que você escolhe, usando um gerador aleatório criptográfico.",
    "content": {
      "about": "Gere uma senha de 8 a 64 caracteres com os tipos de caracteres que você escolher. Use quando uma conta nova precisar de uma sequência variada que você nunca reutilizou. A indicação de força é uma estimativa baseada no comprimento e no tamanho do conjunto, e não verifica se um site sofreu vazamento.",
      "howTo": [
        "Escolha um comprimento de 8 a 64 e os tipos de caracteres que quiser.",
        "Se quiser, exclua caracteres ambíguos como O, 0, I, l e 1.",
        "Clique em Gerar e copie a senha. Nada é salvo."
      ],
      "examples": [
        {
          "title": "16 caracteres variados",
          "body": "Uma senha de 16 caracteres com maiúsculas, minúsculas, números e símbolos tem um grande espaço de caracteres. A indicação de força é uma estimativa baseada no comprimento e no tamanho do conjunto."
        },
        {
          "title": "Só letras",
          "body": "Desativar números e símbolos diminui o conjunto. O gerador continua exigindo pelo menos um tipo selecionado."
        }
      ],
      "explanation": "Cada caractere é escolhido com crypto.getRandomValues(), não com Math.random(). O gerador inclui pelo menos um caractere de cada conjunto selecionado e completa o resto a partir do conjunto combinado com amostragem sem viés. A indicação (Fraca / Moderada / Forte) é estimada por comprimento × log2(tamanho do conjunto). Não é garantia contra adivinhação, reutilização ou vazamento de um site.",
      "limitations": "O comprimento precisa ser um número inteiro de 8 a 64, e pelo menos um tipo de caractere precisa continuar ativo. A indicação de força é estimada pelo comprimento e pelo tamanho do conjunto. Ela não verifica reutilização, phishing nem sites vazados. Caracteres ambíguos podem ser excluídos; o restante da lista de símbolos é fixo.",
      "faqs": [
        {
          "question": "O gerador de senhas é gratuito?",
          "answer": "Sim. Gerar uma senha de 8 a 64 caracteres é gratuito e não exige conta."
        },
        {
          "question": "As senhas são salvas?",
          "answer": "Não. Elas não são armazenadas, registradas, colocadas na URL nem gravadas no localStorage. Copie o valor se precisar dele."
        },
        {
          "question": "Forte significa impossível de invadir?",
          "answer": "Não. O medidor é uma estimativa baseada no comprimento e no tamanho do conjunto de caracteres. Ele não considera reutilização, phishing ou um serviço comprometido."
        },
        {
          "question": "Qual deve ser o tamanho de uma senha?",
          "answer": "Quanto mais longa, mais forte. Muitos guias de segurança sugerem pelo menos 12 a 16 caracteres para contas importantes, com uma senha diferente para cada site."
        },
        {
          "question": "É seguro usar um gerador de senhas online?",
          "answer": "Este cria a senha no seu navegador com crypto.getRandomValues e não a envia nem a salva. Guarde-a em um gerenciador de senhas, não em uma anotação."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "De {0} a {1} caracteres.",
      "Uppercase letters": "Letras maiúsculas",
      "Lowercase letters": "Letras minúsculas",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Excluir caracteres ambíguos (O, 0, I, l, 1)",
      "Generated password": "Senha gerada",
      "Length: {0}": "Comprimento: {0}",
      "Character set size: {0}": "Tamanho do conjunto de caracteres: {0}",
      "Estimated entropy: {0} bits ({1})": "Entropia estimada: {0} bits ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Este medidor é uma estimativa baseada no comprimento e no tamanho do conjunto de caracteres. Não é garantia de segurança.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "As senhas são criadas com crypto.getRandomValues no seu navegador. Elas não são armazenadas, registradas nem enviadas a um servidor.",
      "Enter a password length.": "Digite um comprimento de senha.",
      "Length must be a whole number.": "O comprimento precisa ser um número inteiro.",
      "Choose a length from {0} to {1}.": "Escolha um comprimento de {0} a {1}.",
      "Select at least one character type.": "Selecione pelo menos um tipo de caractere.",
      "Length must be at least the number of selected character types.": "O comprimento precisa ser pelo menos igual ao número de tipos de caracteres selecionados."
    }
  },
  "qr-code-generator-pro": {
    "answer": "O Gerador de QR Code Pro cria QR codes coloridos para URLs, Wi-Fi, e-mail, telefone, SMS ou contatos.",
    "content": {
      "about": "Crie um QR code para texto simples, Wi-Fi, e-mail, telefone, SMS ou um contato vCard, com controles de cor e de correção de erros. Use quando um celular precisar entrar em uma rede ou salvar um contato ao escanear. Um nome de rede ausente é recusado, e o texto codificado ainda precisa caber em 1.200 caracteres.",
      "howTo": [
        "Escolha um tipo: texto/URL, Wi-Fi, e-mail, telefone, SMS ou contato.",
        "Preencha os campos desse tipo. Valores inválidos são recusados antes de o código ser desenhado.",
        "Se quiser, mude cores, tamanho, zona de silêncio e correção de erros; depois gere e baixe um PNG."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Uma rede WPA chamada Cafe é codificada como WIFI:T:WPA;S:Cafe;P:Password;;"
        },
        {
          "title": "Telefone",
          "body": "Um número como +1 202 555 0100 vira um conteúdo tel: sem espaços."
        }
      ],
      "explanation": "Os tipos estruturados são convertidos para os formatos de texto QR de costume (WIFI, mailto, tel, SMSTO, vCard 3.0). A geração usa a mesma biblioteca QR local do gerador básico. O conteúdo não é armazenado, registrado nem colocado na URL da página.",
      "limitations": "Os tipos são texto simples, Wi-Fi, e-mail, telefone, SMS e um contato vCard 3.0. Um nome de rede ausente, um e-mail que não passa na verificação simples ou um telefone com algo além de dígitos e + ( ) opcionais é recusado antes de o código ser desenhado. O texto codificado ainda precisa caber em 1.200 caracteres.",
      "faqs": [
        {
          "question": "O Gerador de QR Code Pro é gratuito?",
          "answer": "Sim. Criar um QR code de Wi-Fi, e-mail, telefone, SMS, contato ou texto é gratuito e não exige conta."
        },
        {
          "question": "Ele é diferente do gerador de QR básico?",
          "answer": "Sim. A ferramenta básica codifica texto simples ou uma URL. Esta versão adiciona tipos estruturados, cores e controles de correção de erros. A ferramenta básica continua igual."
        },
        {
          "question": "As senhas de Wi-Fi são salvas?",
          "answer": "Não. Elas ficam nesta página até você redefinir ou sair. Não são gravadas no localStorage nem enviadas a um servidor."
        },
        {
          "question": "Como faço um QR code para Wi-Fi?",
          "answer": "Escolha Wi-Fi, digite o nome da rede, a senha e o tipo de segurança e baixe o código. Celulares que o escanearem podem se conectar sem digitar a senha."
        },
        {
          "question": "Posso mudar as cores de um QR code?",
          "answer": "Sim, mas mantenha um contraste forte, com o padrão escuro sobre fundo claro, para que as câmeras continuem lendo. Teste o código antes de imprimir."
        }
      ]
    },
    "ui": {
      "QR type": "Tipo de QR",
      "Network name (SSID)": "Nome da rede (SSID)",
      "Security": "Segurança",
      "Hidden network": "Rede oculta",
      "Email": "E-mail",
      "Subject (optional)": "Assunto (opcional)",
      "Body (optional)": "Corpo (opcional)",
      "Phone number": "Número de telefone",
      "Message (optional)": "Mensagem (opcional)",
      "First name": "Nome",
      "Last name": "Sobrenome",
      "Phone (optional)": "Telefone (opcional)",
      "Email (optional)": "E-mail (opcional)",
      "Foreground": "Primeiro plano",
      "Background": "Fundo",
      "Size": "Tamanho",
      "Quiet zone": "Zona de silêncio",
      "Error correction": "Correção de erros",
      "Generated QR code": "QR code gerado",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "O QR code é gerado no seu navegador. Senhas de Wi-Fi e outros campos não são armazenados nem enviados a um servidor.",
      "Foreground and background colors need to be different.": "As cores de primeiro plano e de fundo precisam ser diferentes.",
      "Text / URL": "Texto / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "Telefone",
      "Contact": "Contato",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Sem senha",
      "Enter a hex color such as #336699.": "Digite uma cor hexadecimal como #336699.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "Use hexadecimal de 3, 6 ou 8 dígitos, com ou sem #.",
      "Enter a network name (SSID).": "Digite o nome da rede (SSID).",
      "Enter the Wi-Fi password, or choose no password.": "Digite a senha do Wi-Fi ou escolha Sem senha.",
      "Enter a valid email address.": "Digite um e-mail válido.",
      "Enter a phone number, with digits and optional + ( ).": "Digite um número de telefone com dígitos e + ( ) opcionais.",
      "Enter a first or last name for the contact.": "Digite um nome ou sobrenome para o contato."
    }
  },
  "url-parser": {
    "answer": "Um analisador de URL divide uma URL absoluta em protocolo, nome do host, porta, caminho, fragmento e cada parâmetro de consulta. A URL fica no seu navegador.",
    "content": {
      "about": "Cole uma URL absoluta e veja o protocolo, o nome do host, a porta, o caminho, o fragmento e os parâmetros de consulta.",
      "howTo": [
        "Cole uma URL completa que comece com http ou https.",
        "Clique em Analisar."
      ],
      "features": [
        "Cada chave de consulta em uma linha própria.",
        "Valores de consulta vazios são mantidos.",
        "O fragmento aparece separado do caminho."
      ],
      "examples": [
        {
          "title": "Uma URL com porta e duas chaves iguais",
          "body": "https://example.com:8080/docs?topic=a&topic= mantém a porta 8080 e duas linhas topic, a segunda com valor vazio."
        }
      ],
      "explanation": "A página usa o analisador de URL do navegador. Chaves de consulta duplicadas ficam como entradas separadas. Um protocolo ausente ou um caminho relativo é recusado. O nome do host é o valor retornado pelo analisador, inclusive um nome internacionalizado na forma codificada.",
      "tips": [
        "Inclua https:// ou http://.",
        "Um # depois da consulta marca o fragmento, não outro parâmetro."
      ],
      "limitations": "Só URLs absolutas http e https são analisadas. A URL não é aberta nem enviada a lugar nenhum.",
      "faqs": [
        {
          "question": "Como uma URL é analisada?",
          "answer": "O analisador de URL do navegador separa o protocolo, o nome do host, a porta, o caminho, o fragmento e cada parâmetro de consulta."
        },
        {
          "question": "O que acontece com chaves de consulta duplicadas?",
          "answer": "Cada uma é listada. Elas não são combinadas em um só valor."
        },
        {
          "question": "E um valor de consulta vazio?",
          "answer": "Uma chave sem nada depois do sinal de igual é mantida e mostrada como vazia."
        },
        {
          "question": "Por que uma URL relativa é recusada?",
          "answer": "Um caminho relativo não tem protocolo nem host, então não é uma URL absoluta."
        },
        {
          "question": "A URL é enviada a um servidor?",
          "answer": "Não. A análise acontece no seu navegador."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "A URL é analisada no seu navegador. Ela não é enviada a nenhum outro serviço.",
      "Absolute URL": "URL absoluta",
      "Parse": "Analisar",
      "Query parameters": "Parâmetros de consulta",
      "No query parameters.": "Nenhum parâmetro de consulta.",
      "(empty)": "(vazio)",
      "Protocol": "Protocolo",
      "Hostname": "Nome do host",
      "Port": "Porta",
      "Path": "Caminho",
      "Fragment": "Fragmento",
      "Enter an absolute URL.": "Digite uma URL absoluta.",
      "Enter a URL of 100000 characters or fewer.": "Digite uma URL com até 100000 caracteres.",
      "Enter an absolute URL that includes a protocol, such as https://.": "Digite uma URL absoluta que inclua um protocolo, como https://.",
      "That text is not a valid absolute URL.": "Esse texto não é uma URL absoluta válida.",
      "Enter an http or https URL.": "Digite uma URL http ou https."
    }
  },
  "robots-txt-generator": {
    "answer": "Um gerador de robots.txt escreve linhas User-agent, Allow e Disallow a partir das regras que você digita. Ele pode incluir a URL de um sitemap. Não publica nem testa um site no ar.",
    "content": {
      "about": "Escreva o texto de um robots.txt a partir de um ou mais grupos de user-agent e de uma URL de sitemap opcional.",
      "howTo": [
        "Digite um user-agent.",
        "Adicione caminhos Allow e Disallow, um por linha.",
        "Adicione a URL de um sitemap se quiser.",
        "Clique em Gerar."
      ],
      "features": [
        "Vários grupos de user-agent.",
        "Várias linhas Allow e Disallow.",
        "Uma URL de sitemap absoluta opcional."
      ],
      "examples": [
        {
          "title": "Uma pasta privada",
          "body": "User-agent * com Disallow: /admin diz aos rastreadores para não acessar caminhos dentro de /admin. O arquivo é só texto."
        }
      ],
      "explanation": "Cada grupo começa com User-agent, seguido de uma linha Allow para cada caminho e uma linha Disallow para cada caminho. Linhas de caminho em branco são ignoradas. Um sitemap só é adicionado se for uma URL absoluta http ou https. A página não envia o arquivo nem testa um site no ar.",
      "tips": [
        "Use * para todos os rastreadores.",
        "Coloque cada caminho em uma linha própria."
      ],
      "limitations": "O resultado é um texto para copiar. Ele não publica regras nem verifica o que um site no ar permite.",
      "faqs": [
        {
          "question": "Como se escreve um arquivo robots.txt?",
          "answer": "Comece com uma linha User-agent e depois adicione linhas Allow e Disallow. Adicione uma linha Sitemap quando tiver uma URL de sitemap absoluta."
        },
        {
          "question": "Posso usar mais de um user-agent?",
          "answer": "Sim. Cada grupo tem seu próprio user-agent e suas próprias regras."
        },
        {
          "question": "O que acontece com um caminho em branco?",
          "answer": "Uma linha em branco é ignorada, então não cria uma regra Allow ou Disallow vazia."
        },
        {
          "question": "Isso testa meu site no ar?",
          "answer": "Não. Só gera o texto. Não publica o arquivo nem acessa o seu site."
        },
        {
          "question": "Qual URL de sitemap é aceita?",
          "answer": "Uma URL absoluta http ou https. Um caminho sem protocolo é recusado."
        },
        {
          "question": "Esses dados são enviados a um servidor?",
          "answer": "Não. As linhas de user-agent e os caminhos são montados nesta aba. Eles não são enviados, e a página não acessa o seu site."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Esta ferramenta escreve o texto do robots.txt a partir das regras que você digita. Ela não testa nem publica nenhum site no ar.",
      "Group {0} user-agent": "User-agent do grupo {0}",
      "Allow paths, one per line": "Caminhos Allow, um por linha",
      "Disallow paths, one per line": "Caminhos Disallow, um por linha",
      "Remove group": "Remover grupo",
      "Add group": "Adicionar grupo",
      "Sitemap URL, optional": "URL do sitemap, opcional",
      "Add at least one user-agent group.": "Adicione pelo menos um grupo de user-agent.",
      "Group {0} needs a user-agent.": "O grupo {0} precisa de um user-agent.",
      "Enter a sitemap as an absolute http or https URL.": "Digite o sitemap como uma URL absoluta http ou https."
    }
  },
  "password-strength-checker": {
    "answer": "Um verificador de força de senha estima os bits a partir do comprimento e dos tipos de caracteres que realmente aparecem. Ele não envia a senha nem a compara com uma lista de vazamentos.",
    "content": {
      "about": "Digite uma senha e veja a classificação Fraca, Moderada ou Forte. A estimativa usa o comprimento e os tipos de caracteres presentes. Ela não procura vazamentos e não sabe se um site vai aceitar a senha.",
      "howTo": [
        "Digite a senha. Uma caixa vazia é recusada.",
        "Clique em Verificar.",
        "Leia a classificação, o comprimento, os bits estimados e os tipos de caracteres encontrados."
      ],
      "features": [
        "Maiúsculas, minúsculas, números e o conjunto de símbolos só contam quando aparecem.",
        "Qualquer outro caractere, incluindo um espaço ou uma crase, soma um ao conjunto para cada caractere distinto.",
        "Fraca é menos de 50 bits, Moderada é menos de 80 e Forte é 80 ou mais."
      ],
      "examples": [
        {
          "title": "Uma palavra em minúsculas",
          "body": "password tem 8 letras minúsculas. O conjunto é 26, a estimativa arredondada dá 38 bits e a classificação é Fraca."
        },
        {
          "title": "Letras, um número e um símbolo",
          "body": "Abcdefghijklm12! tem 16 caracteres com maiúsculas, minúsculas, números e um símbolo. O conjunto é 85, a estimativa arredondada dá 103 bits e a classificação é Forte."
        }
      ],
      "explanation": "Os bits são o comprimento vezes o logaritmo na base 2 do conjunto. O conjunto é 26 para maiúsculas se aparecer uma letra de A a Z, 26 para minúsculas, 10 para um dígito e 23 para um símbolo de !@#$%^&*()-_=+[]{};:,.?. Um caractere fora desses conjuntos não conta como o conjunto inteiro de símbolos: soma um. Este não é o gerador de senhas, que classifica uma senha pelos tipos escolhidos antes de criá-la.",
      "tips": [
        "Uma senha mais longa, com vários tipos de caracteres, recebe classificação melhor do que uma palavra curta.",
        "Use o Gerador de senhas quando quiser uma senha nova em vez de uma classificação."
      ],
      "limitations": "Até 256 caracteres. A página não procura vazamentos e não sabe se um site vai aceitar a senha. Letras acentuadas contam como outros caracteres, não como A a Z.",
      "faqs": [
        {
          "question": "O verificador de força de senha é gratuito?",
          "answer": "Sim. Você pode classificar uma senha aqui sem pagar nem criar conta."
        },
        {
          "question": "A senha é comparada com senhas vazadas?",
          "answer": "Não. A classificação usa só o comprimento e os tipos de caracteres do que você digitou."
        },
        {
          "question": "Por que uma senha só de dígitos é Fraca?",
          "answer": "Oito dígitos usam um conjunto de 10. Isso dá cerca de 27 bits, menos de 50, então a classificação é Fraca."
        },
        {
          "question": "A senha é enviada a um servidor?",
          "answer": "Não. A verificação roda nesta aba do navegador. O Tools Star Hub não envia a senha a um servidor nem a salva no armazenamento local."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} caracteres, {1}, {2} bits",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "A classificação usa os tipos de caracteres da senha que você digita. Ela fica nesta aba, não é enviada e não é comparada com uma lista de vazamentos.",
      "Show password": "Mostrar senha",
      "Check": "Verificar",
      "Copy rating": "Copiar classificação",
      "Rating": "Classificação",
      "Estimated bits": "Bits estimados",
      "Enter a password.": "Digite uma senha.",
      "Enter a password of {0} characters or fewer.": "Digite uma senha com até {0} caracteres.",
      "Uppercase": "Maiúsculas",
      "Lowercase": "Minúsculas",
      "Other": "Outros"
    }
  },
  "meta-tag-generator": {
    "answer": "Um gerador de meta tags escreve as tags HTML de título, descrição, robots, canônica, Open Graph e Twitter. Ele não busca nenhuma página.",
    "content": {
      "about": "Preencha um título e as tags opcionais que quiser. A página escreve um HTML que você pode colar no head de uma página. Ela não busca uma URL no ar nem verifica como um site vai compartilhar o link.",
      "howTo": [
        "Digite um título. Um título vazio é recusado.",
        "Adicione descrição, URL canônica, opções de robots e os campos de Open Graph ou Twitter que quiser.",
        "Clique em Gerar e copie o HTML."
      ],
      "features": [
        "Uma tag charset, um título e uma tag robots em todo resultado.",
        "Descrição, link canônico, tags Open Graph e tags do Twitter opcionais.",
        "Aspas e & no texto são escapados."
      ],
      "examples": [
        {
          "title": "Um título e uma descrição",
          "body": "O título Sample page e a descrição A short description of the page., com index e follow, geram uma tag charset, o título, a descrição e uma tag robots index, follow."
        },
        {
          "title": "Um & no título",
          "body": "O título A & B é escrito como A &amp; B dentro da tag title."
        }
      ],
      "explanation": "O HTML é montado com os campos preenchidos. Campos opcionais vazios ficam de fora. URL canônica, imagem do Open Graph, URL do Open Graph e imagem do Twitter precisam ser URLs absolutas http ou https. A página não acessa essas URLs.",
      "tips": [
        "Use os campos de Open Graph aqui quando quiser as tags no seu próprio HTML. Uma prévia de compartilhamento ao vivo é outra verificação."
      ],
      "limitations": "O título pode ter até 200 caracteres e a descrição até 500. O tipo de Open Graph é website, article ou nenhum. O card do Twitter é summary, summary_large_image ou nenhum. Um título do Twitter sem card é recusado.",
      "faqs": [
        {
          "question": "O gerador de meta tags é gratuito?",
          "answer": "Sim. Você pode escrever as tags aqui sem pagar nem criar conta."
        },
        {
          "question": "Ele mostra como um link vai aparecer em uma rede social?",
          "answer": "Não. Ele só escreve as tags. Não abre a URL."
        },
        {
          "question": "Qual valor de robots é escrito?",
          "answer": "A opção de index e a opção de follow, como index, follow ou noindex, nofollow."
        },
        {
          "question": "O texto é enviado a um servidor?",
          "answer": "Não. O HTML é montado nesta aba do navegador. O Tools Star Hub não envia esses campos a um servidor nem os salva no armazenamento local."
        }
      ]
    },
    "ui": {
      "Sample page": "Página de exemplo",
      "A short description of the page.": "Uma breve descrição da página.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Esta ferramenta escreve HTML para o head de uma página. Ela não busca uma URL no ar nem verifica como um site vai compartilhar o link.",
      "Title": "Título",
      "Description": "Descrição",
      "Canonical URL, optional": "URL canônica, opcional",
      "Robots index": "Robots: index",
      "Robots follow": "Robots: follow",
      "Open Graph title, optional": "Título do Open Graph, opcional",
      "Open Graph description, optional": "Descrição do Open Graph, opcional",
      "Open Graph image URL, optional": "URL da imagem do Open Graph, opcional",
      "Open Graph URL, optional": "URL do Open Graph, opcional",
      "Open Graph type": "Tipo de Open Graph",
      "Twitter title, optional": "Título do Twitter, opcional",
      "Copy HTML": "Copiar HTML",
      "Head tags": "Tags do head",
      "None": "Nenhum",
      "Enter a {0} of {1} characters or fewer.": "{0}: no máximo {1} caracteres.",
      "Enter {0} as an absolute http or https URL.": "{0}: digite uma URL absoluta http ou https.",
      "Enter a title.": "Digite um título.",
      "the canonical URL": "URL canônica",
      "Open Graph title": "Título do Open Graph",
      "Open Graph description": "Descrição do Open Graph",
      "the Open Graph image URL": "URL da imagem do Open Graph",
      "the Open Graph URL": "URL do Open Graph",
      "Choose website, article, or no Open Graph type.": "Escolha website, article ou nenhum tipo de Open Graph.",
      "Choose a Twitter card of summary or summary_large_image.": "Escolha um card do Twitter summary ou summary_large_image.",
      "the Twitter image URL": "URL da imagem do Twitter",
      "Choose a Twitter card before adding Twitter text or an image.": "Escolha um card do Twitter antes de adicionar texto ou imagem do Twitter.",
      "title": "Título",
      "description": "Descrição"
    }
  },
  "open-graph-preview": {
    "answer": "Uma prévia de Open Graph envia a URL de uma página para este site, lê o título público e as tags de compartilhamento e não salva a página. Endereços privados e não http são recusados.",
    "content": {
      "about": "Digite uma URL pública http ou https. Verificar prévia envia essa URL para este site. O site busca a página e mostra o título, a descrição, a imagem e o card do Twitter que encontrar. A página não é salva aqui. Um endereço privado ou local é recusado antes de a página ser lida.",
      "howTo": [
        "Digite uma URL absoluta http ou https.",
        "Clique em Verificar prévia.",
        "Leia o card. Um endereço recusado, um tempo esgotado ou uma URL não http mostra um erro curto, sem conteúdo da página."
      ],
      "features": [
        "Os campos de título, descrição, endereço da imagem e card do Twitter da página pública.",
        "O endereço depois dos redirecionamentos, quando o redirecionamento continua em uma URL pública http ou https.",
        "Um erro curto quando o endereço é privado, a solicitação esgota o tempo ou o protocolo não é http nem https."
      ],
      "examples": [
        {
          "title": "Uma página pública",
          "body": "https://example.com/ retorna o título Example Domain. Essa página não tem descrição, imagem nem card do Twitter, então esses campos mostram Não encontrado."
        },
        {
          "title": "Um endereço local",
          "body": "http://127.0.0.1/ e a forma decimal http://2130706433/ mostram Esse endereço não pode ser acessado."
        }
      ],
      "explanation": "O navegador envia só a URL para este site. O site resolve o host, recusa um endereço privado, de loopback, link-local ou reservado e verifica de novo depois de cada redirecionamento. Ele lê no máximo 512 KiB da página descompactada e depois retorna as tags. A página bruta não é retornada nem salva.",
      "tips": [
        "Use o gerador de meta tags quando quiser escrever as tags você mesmo. Esta página lê as tags que já estão em uma URL pública."
      ],
      "limitations": "Só http e https. Uma URL file, uma URL com nome de usuário e um endereço privado são recusados. A solicitação para depois de 8 segundos. Uma imagem de compartilhamento pode aparecer listada mesmo quando o servidor da imagem bloqueia a miniatura.",
      "faqs": [
        {
          "question": "A prévia de Open Graph é gratuita?",
          "answer": "Sim. Você pode verificar as tags de compartilhamento de uma página pública sem pagar nem criar conta. A URL ainda é enviada para este site para que as tags possam ser lidas."
        },
        {
          "question": "A URL sai deste dispositivo?",
          "answer": "Sim. Verificar prévia envia a URL para este site, que busca a página pública e lê as tags. A página não é salva aqui. Um endereço privado ou não http é recusado."
        },
        {
          "question": "Por que uma URL local foi recusada?",
          "answer": "Endereços como 127.0.0.1, uma rede privada e a forma decimal de um endereço de loopback são recusados antes de a página ser lida."
        },
        {
          "question": "Como aparece um tempo esgotado?",
          "answer": "O card não é mostrado. A página informa que a solicitação de prévia esgotou o tempo."
        }
      ]
    },
    "ui": {
      "Not found": "Não encontrado",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Verificar prévia envia a URL para este site. O site lê o título e as tags de compartilhamento da página pública e não salva a página. Um endereço privado ou uma URL não http é recusado.",
      "Page URL": "URL da página",
      "Checking the page…": "Verificando a página…",
      "Image": "Imagem",
      "The image address was found, but it did not load.": "O endereço da imagem foi encontrado, mas a imagem não carregou.",
      "Twitter image": "Imagem do Twitter",
      "That page could not be previewed.": "Não foi possível gerar a prévia dessa página.",
      "Enter an http or https page URL.": "Digite a URL de uma página http ou https.",
      "Checking…": "Verificando…",
      "Check preview": "Verificar prévia",
      "That address cannot be fetched.": "Esse endereço não pode ser acessado.",
      "The preview request timed out.": "A solicitação de prévia esgotou o tempo.",
      "That page redirected too many times.": "Essa página redirecionou vezes demais.",
      "That page is not HTML.": "Essa página não é HTML.",
      "Too many preview requests. Wait a minute and try again.": "Muitas solicitações de prévia. Aguarde um minuto e tente de novo.",
      "Send a JSON request with a url.": "Envie uma solicitação JSON com uma URL."
    }
  }
};

export default data;
