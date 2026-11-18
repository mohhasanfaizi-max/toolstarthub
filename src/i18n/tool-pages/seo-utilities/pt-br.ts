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
        },
        {
          "question": "Como adiciono utm_source e utm_medium a um link?",
          "answer": "Digite a URL base e os campos UTM e depois copie o link gerado com os parâmetros de consulta adicionados."
        },
        {
          "question": "Qual é um bom padrão de nomes para utm_campaign?",
          "answer": "Use tokens curtos e coerentes, como spring_sale_2026, para que os relatórios se filtrem com facilidade mais adiante."
        },
        {
          "question": "Posso incluir utm_content e utm_term?",
          "answer": "Sim: content distingue criativos ou botões; term costuma ser usado para as palavras-chave de busca paga."
        },
        {
          "question": "As tags UTM quebram meus parâmetros de rastreamento existentes?",
          "answer": "O construtor conserva os demais parâmetros de consulta quando está configurado para combiná-los; confira a URL final antes de publicá-la."
        },
        {
          "question": "Os parâmetros UTM funcionam em todas as ferramentas de análise?",
          "answer": "Eles são uma convenção habitual; o seu produto de análise deve ler essas chaves de consulta para atribuir as sessões."
        },
        {
          "question": "Por que manter os valores UTM com uma só capitalização?",
          "answer": "Misturar maiúsculas costuma dividir a mesma campanha em várias linhas; escolha minúsculas ou um estilo fixo e cumpra-o."
        },
        {
          "question": "Posso criar links para e-mail, redes e anúncios em uma só sessão?",
          "answer": "Sim: mude a origem e o meio conforme o canal, gere de novo e salve cada URL pronta."
        },
        {
          "question": "O que acontece se eu omitir utm_source?",
          "answer": "Alguns validadores avisam porque a origem é o mínimo habitual; o meio e a campanha também são fortemente recomendados."
        },
        {
          "question": "Os parâmetros UTM distinguem maiúsculas nos relatórios?",
          "answer": "Muitas ferramentas de análise os tratam como cadeias que distinguem maiúsculas, então Email e email podem aparecer em duas linhas."
        },
        {
          "question": "Posso usar espaços dentro dos valores UTM?",
          "answer": "Evite os espaços; use underscores. Se entrarem espaços, eles devem ir percent-encoded na URL final."
        },
        {
          "question": "Os UTMs afetam sozinhos o posicionamento de SEO?",
          "answer": "Os links marcados continuam apontando para a mesma página; mantenha URLs canônicas limpas e evite colocar UTM na navegação interna."
        },
        {
          "question": "Como testo um link marcado antes de lançar uma campanha?",
          "answer": "Abra a URL, confirme os redirecionamentos e confira a vista em tempo real ou de depuração da sua análise para ver os campos UTM."
        },
        {
          "question": "Os links encurtados conservam as tags UTM?",
          "answer": "Sim, se o encurtador guardar o destino completo, inclusive a query string; expanda-o e verifique uma vez."
        },
        {
          "question": "Devo marcar os links dentro do meu próprio site?",
          "answer": "Em geral, não na navegação global: os UTMs são para campanhas que trazem tráfego de fora ou de criativos concretos."
        },
        {
          "question": "Quanto uma URL com UTM pode medir?",
          "answer": "Mantenha os valores concisos; query strings extremamente longas podem esbarrar em limites do navegador ou da plataforma de anúncios."
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
      "Enter a valid website URL.": "Digite uma URL de site válida.",
      "This page builds a campaign URL in your browser. Google recommends utm_source, utm_medium, and utm_campaign on every tagged link. utm_id is optional and is useful when you import campaign data. Blank fields are left off the URL.": "Esta página monta uma URL de campanha no seu navegador. O Google recomenda utm_source, utm_medium e utm_campaign em cada link marcado. utm_id é opcional e é útil quando você importa dados de campanha. Os campos vazios ficam de fora da URL.",
      "Google Analytics help: URL builders": "Ajuda do Google Analytics: criadores de URL",
      "Google's GA4 Campaign URL Builder": "Criador de URL de campanha do GA4 do Google",
      "Campaign ID (optional)": "ID da campanha (opcional)",
      "Adds utm_id. Use the same campaign ID you use when you import campaign data into GA4.": "Adiciona utm_id. Use o mesmo ID de campanha que você usa ao importar dados de campanha no GA4.",
      "abc.123": "abc.123",
      "Source platform (optional)": "Plataforma de origem (opcional)",
      "Adds utm_source_platform, for example Search Ads 360.": "Adiciona utm_source_platform, por exemplo Search Ads 360.",
      "Creative format (optional)": "Formato do anúncio (opcional)",
      "Adds utm_creative_format. Google says this parameter is not currently reported in Analytics properties.": "Adiciona utm_creative_format. O Google indica que este parâmetro não é informado no momento nas propriedades do Analytics.",
      "Marketing tactic (optional)": "Tática de marketing (opcional)",
      "Adds utm_marketing_tactic. Google says this parameter is not currently reported in Analytics properties.": "Adiciona utm_marketing_tactic. O Google indica que este parâmetro não é informado no momento nas propriedades do Analytics.",
      "display": "display",
      "remarketing": "remarketing",
      "Search Ads 360": "Search Ads 360"
    },
    "metaDescription": "Adicione utm_source, utm_medium e utm_campaign a um link no seu navegador. Os demais parâmetros são conservados. Nada é enviado a um servidor."
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
        },
        {
          "question": "Como converto o título de um post em um slug de URL?",
          "answer": "Cole o título, gere e copie o slug em minúsculas e com hífens no seu CMS."
        },
        {
          "question": "As datas devem ir dentro do slug?",
          "answer": "É opcional: as datas ajudam na unicidade, mas alongam as URLs; muitos blogs as omitem."
        },
        {
          "question": "O que faço com palavras vazias como «the» e «and»?",
          "answer": "Alguns geradores as removem; conserve-as se trouxerem sentido ao tema."
        },
        {
          "question": "Posso editar o slug depois de gerá-lo?",
          "answer": "Sim: encurte-o ou esclareça-o antes de publicar; mudá-lo depois pode quebrar links."
        },
        {
          "question": "Quais caracteres costumam ser removidos de um slug?",
          "answer": "A pontuação, os símbolos e os emojis são eliminados ou substituídos; permanecem letras, números e hífens."
        },
        {
          "question": "Como se convertem em slugs os títulos que não estão no alfabeto latino?",
          "answer": "Conforme a configuração, eles são transliterados, codificados em porcentagem ou o Unicode é conservado: ajuste ao seu CMS."
        },
        {
          "question": "Por que preferir hífens a espaços ou underscores?",
          "answer": "Os hífens são a convenção da web que os buscadores e as pessoas leem com facilidade."
        },
        {
          "question": "Quanto é longo demais para um slug?",
          "answer": "Quando puder, fique abaixo de uns 50–60 caracteres; coloque primeiro as palavras importantes."
        },
        {
          "question": "Os SKUs de produto devem aparecer no slug?",
          "answer": "Só se as pessoas buscam desse jeito; se não, prefira nomes legíveis."
        },
        {
          "question": "Dois artigos podem compartilhar um slug por acidente?",
          "answer": "Sim: os CMS costumam exigir unicidade; acrescente um sufixo curto se for preciso."
        },
        {
          "question": "Como converto um título com dois-pontos ou um hífen?",
          "answer": "Os dois-pontos viram separadores ou desaparecem; evite os hífens duplos no caminho final."
        },
        {
          "question": "Um slug é a URL completa?",
          "answer": "Não: é o segmento do caminho depois do seu domínio (e, às vezes, das pastas de categoria)."
        },
        {
          "question": "Devo encher o slug de palavras-chave repetidas?",
          "answer": "Não: uma frase clara vale mais do que uma cadeia longa de palavras-chave repetidas."
        },
        {
          "question": "Como os redirecionamentos se relacionam com uma mudança de slug?",
          "answer": "Se você mudar um slug já publicado, adicione um redirecionamento 301 a partir do caminho antigo para que os links continuem funcionando."
        },
        {
          "question": "Gerar o slug envia o meu título?",
          "answer": "A geração nesta página foi pensada para permanecer na sessão do navegador."
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
    },
    "metaDescription": "Converta um título em um slug em minúsculas e com hífens, no seu navegador. Remove acentos latinos e conserva letras como 你好. Nada é enviado."
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
          "title": "Um site curto",
          "body": "Digite https://example.com e toque em Gerar. A página recorta os espaços das bordas e codifica esse endereço exato. Um telefone que lê o código abre essa URL se a câmera a tratar como um link. A prévia tem 320 pixels de largura, com correção de erros de nível M e uma margem de silêncio de 2 módulos. Você pode baixar um PNG ou um SVG. A cor escura é #0b1f3a e a clara é #ffffff."
        },
        {
          "title": "Texto simples",
          "body": "Digite uma frase curta, como Meet at the north door. Gerar codifica esses caracteres, não uma página da web. Os leitores costumam mostrar o texto em vez de abrir um navegador. Vale o mesmo limite de 1.200 caracteres. Um texto vazio, inclusive uma caixa só de espaços, falha com: Enter text or a URL to encode."
        },
        {
          "title": "Uma cadeia longa demais",
          "body": "1.200 caracteres são aceitos. 1.201 caracteres são recusados antes de desenhar um código. A mensagem é: Keep QR content to 1200 characters so the code stays readable. Encurte o texto, ou coloque o texto longo em uma página e codifique a URL dessa página."
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
        },
        {
          "question": "Todos os leitores lerão o PNG?",
          "answer": "A maioria das câmeras consegue ler um PNG de alto contraste de uma URL curta. A imagem tem 320 pixels de largura, com correção de erros de nível M. Impressões minúsculas, pouca luz ou um texto muito longo podem falhar."
        },
        {
          "question": "Posso codificar um número de telefone ou um link SMS?",
          "answer": "Esta página codifica o texto que você cola, então uma cadeia tel: ou sms: ficará no PNG se você já a tiver. Para um formulário de telefone ou SMS, use o [Gerador de códigos QR Pro](/tools/qr-code-generator-pro)."
        },
        {
          "question": "Devo testar o PNG antes de imprimir adesivos?",
          "answer": "Faça sempre a leitura de uma prova impressa no tamanho final; o contraste e o brilho da impressora podem reduzir a legibilidade."
        },
        {
          "question": "Uma resolução mais alta melhora o sucesso da leitura?",
          "answer": "Um PNG nítido ajuda em impressões grandes, mas as margens de silêncio e o contraste importam mais do que os megapixels sozinhos."
        },
        {
          "question": "Posso colocar um logotipo no centro?",
          "answer": "Não nesta página. O gerador básico baixa só o padrão, como PNG ou como SVG. Para um logotipo opcional no centro, use o [Gerador de códigos QR Pro](/tools/qr-code-generator-pro). Sempre teste a leitura de um código com logotipo antes de imprimi-lo."
        },
        {
          "question": "O que acontece se eu colar uma URL muito longa?",
          "answer": "O padrão fica mais denso e mais difícil de ler; prefira um link curto quando o destino for longo."
        },
        {
          "question": "Preciso de internet depois de baixar o PNG?",
          "answer": "Não: uma vez salvo, a imagem funciona sem conexão. Os leitores só precisam dos dados codificados, não deste site."
        },
        {
          "question": "Posso fazer aqui um QR de contato vCard?",
          "answer": "Só se você colar uma cadeia vCard já pronta como texto. Para um formulário que monta um contato com nome, telefone e e-mail, use o [Gerador de códigos QR Pro](/tools/qr-code-generator-pro)."
        },
        {
          "question": "Por que as placas externas deveriam usar módulos maiores?",
          "answer": "A distância e o brilho exigem módulos maiores e um contraste mais forte para que os telefones foquem com rapidez."
        },
        {
          "question": "Há SVG no download?",
          "answer": "Sim. Depois de gerar o código, você pode baixar um PNG para telas ou um SVG, que é um vetor de verdade dos módulos, para imprimir ou mudar o tamanho."
        },
        {
          "question": "Posso criar muitos códigos de uma vez?",
          "answer": "Aqui se gera uma carga de cada vez; para centenas de URLs, programe uma biblioteca de QR dedicada."
        },
        {
          "question": "O modo escuro do telefone quebra a leitura?",
          "answer": "A maioria das câmeras ignora o tema da interface; o problema habitual é a pouca luz ou o baixo contraste do código impresso."
        },
        {
          "question": "Devo acompanhar o QR com uma chamada para ação?",
          "answer": "Um rótulo breve como «Leia para ver o cardápio» ajuda as pessoas a confiarem no código, sem mudar os dados codificados."
        },
        {
          "question": "Posso codificar texto simples que não seja uma URL?",
          "answer": "Sim: qualquer texto funciona; os leitores mostram a cadeia ou oferecem copiá-la."
        },
        {
          "question": "Como conservo uma zona de silêncio ao redor do código?",
          "answer": "Deixe uma margem vazia ao colocar o PNG em um layout, para que as bordas não sejam recortadas."
        }
      ],
      "tips": [
        "Inclua https:// nos links da web. Um domínio solto pode aparecer como texto em vez de abrir como um site.",
        "Prefira uma URL curta a um parágrafo longo. O que faz as câmeras falharem é a densidade, não só o limite de 1.200.",
        "Deixe a margem de silêncio. O gerador já adiciona uma margem de 2 módulos. Recortar a imagem pode tirá-la.",
        "Use o leitor deste site, ou a câmera do seu telefone, antes de publicar a imagem."
      ],
      "sections": [
        {
          "heading": "Por que um código longo é mais difícil de ler",
          "paragraphs": [
            "Mais caracteres significam mais módulos na mesma imagem de 320 pixels, então cada módulo fica menor. O nível M dedica alguns desses módulos a dados de recuperação. Uma URL curta fica mais grossa e mais fácil para a câmera de um telefone.",
            "Imprima o PNG grande o bastante para que os módulos apareçam nítidos. Uma captura desfocada, um fundo colorido ou um logotipo em cima deste código básico podem fazer a leitura falhar. Esta página não adiciona um logotipo nem muda as cores."
          ]
        },
        {
          "heading": "O que pertence ao Gerador de códigos QR Pro",
          "paragraphs": [
            "Esta página codifica os caracteres que você cola e nada mais. Ela não monta uma cadeia de configuração Wi-Fi, um link mailto, um corpo de SMS nem um cartão de contato por você.",
            "O Gerador de códigos QR Pro tem esses formatos e pode mudar as cores. Se você só tem uma URL ou uma frase, fique nesta página. Se colar uma cadeia Wi-Fi que já escreveu, esta página codificará essa cadeia como texto. Ela não verificará se a rede existe."
          ]
        },
        {
          "heading": "O código não expira aqui",
          "paragraphs": [
            "Não há uma conta nem um servidor de links curtos por trás do arquivo. O padrão continua funcionando enquanto um leitor puder lê-lo e, no caso de uma URL, enquanto esse endereço continuar respondendo. Se você mudar a página desse endereço, o código antigo continua apontando para o mesmo endereço.",
            "Teste com um telefone antes de imprimir um monte de etiquetas. A prévia desta página não é um teste de leitura."
          ]
        },
        {
          "heading": "Privacidade",
          "paragraphs": [
            "O texto permanece nesta aba. Gerar não o envia. O PNG é criado no seu dispositivo e baixado para ele. Não codifique uma senha que você não gostaria de ver em uma página impressa. Quem ler o código pode ler o texto."
          ]
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "O QR code é criado no seu navegador. Mantenha o conteúdo razoavelmente curto.",
      "QR code for {0}": "QR code para {0}",
      "QR code for:": "QR code para:",
      "The QR code is generated in your browser. The text is not sent to a server.": "O QR code é gerado no seu navegador. O texto não é enviado a nenhum servidor."
    },
    "metaDescription": "Crie um código QR em PNG ou SVG a partir de uma URL ou um texto, no seu navegador. Para Wi-Fi, vCard, e-mail ou SMS, use o gerador Pro. Nada é enviado."
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
        },
        {
          "question": "Como faço a leitura de um código QR a partir de um arquivo de imagem?",
          "answer": "Escolha a imagem que contém o código, espere o decodificador terminar e depois abra ou copie o resultado. Um recorte nítido e bem iluminado, só do quadrado, costuma funcionar melhor do que uma foto ocupada da página inteira."
        },
        {
          "question": "Posso ler um código QR com a câmera do telefone no navegador?",
          "answer": "Sim, nos telefones que permitem o acesso à câmera na aba. Conceda a permissão quando for pedida, aponte a câmera para o código e mantenha o quadrado firme até a carga aparecer."
        },
        {
          "question": "Por que o meu código QR não é lido?",
          "answer": "O desfoque, o brilho, o baixo contraste, uma impressão amassada ou um canto recortado são as causas habituais. Tire a foto de novo mais de perto, alise o papel e evite os reflexos em telas brilhantes."
        },
        {
          "question": "Que tipos de carga QR esta ferramenta pode ler?",
          "answer": "A maioria dos códigos leva uma URL, texto simples, configuração Wi-Fi ou dados de contato. O leitor mostra a cadeia crua para você decidir se abre um link ou copia o texto."
        },
        {
          "question": "É seguro ler um código QR?",
          "answer": "Trate os códigos desconhecidos como links desconhecidos. Leia a URL decodificada antes de abri-la e evite os links curtos em que você não confia. O leitor só decodifica; não visita o site por você."
        },
        {
          "question": "Preciso de um leitor QR de uma loja de aplicativos?",
          "answer": "Não para uma leitura pontual. Uma ferramenta do navegador basta quando você já tem uma foto ou pode usar a câmera do telefone na aba. Os aplicativos dedicados ajudam se você lê muitos códigos todos os dias."
        },
        {
          "question": "Códigos danificados ou parcialmente cobertos ainda podem funcionar?",
          "answer": "Os códigos QR incluem correção de erros, então uma mancha pequena ou a perda de um canto ainda podem ser decodificados. Os rombos grandes ou a falta dos quadrados de busca costumam falhar e precisam de uma captura mais limpa."
        },
        {
          "question": "Que resolução minha foto deveria ter?",
          "answer": "Pixels suficientes para que os módulos se distingam. Uma foto de um telefone moderno serve; uma miniatura minúscula ou uma compressão forte que misture os quadrados pretos e brancos, não."
        },
        {
          "question": "O leitor funciona sem conexão depois que a página carrega?",
          "answer": "A decodificação roda no navegador quando os scripts estão prontos. O acesso à câmera ou ao arquivo ainda precisa das permissões que você já concedeu, mas a imagem não é enviada para terminar uma leitura."
        },
        {
          "question": "Por que ele encontrou um texto que não é um site?",
          "answer": "Muitos códigos guardam texto simples, números de telefone ou credenciais Wi-Fi em vez de links https. Copie a cadeia e use-a no lugar adequado, em vez de forçá-la na barra de endereços."
        },
        {
          "question": "Posso ler vários códigos de uma só foto?",
          "answer": "Se houver mais de um código à vista, a ferramenta informa o que encontra nesse fotograma. Recortar a um único quadrado é o jeito mais seguro de controlar que carga você obtém."
        },
        {
          "question": "Em que um código QR se diferencia de um código de barras?",
          "answer": "Os códigos de barras clássicos costumam ser linhas de uma dimensão para SKUs de produto. Os códigos QR são quadrados de duas dimensões que guardam cadeias mais longas, como URLs ou cartões de contato."
        },
        {
          "question": "Dá para ler um QR em modo escuro ou colorido?",
          "answer": "Os módulos escuros de alto contraste sobre um fundo claro são lidos com mais confiabilidade. As cores de marca de baixo contraste ou os desenhos invertidos muitas vezes precisam de uma reimpressão com mais contraste."
        },
        {
          "question": "O tamanho da impressão importa?",
          "answer": "Sim. As impressões minúsculas em adesivos brilhantes podem falhar quando a câmera não distingue cada módulo. As impressões maiores, com espaço de silêncio ao redor do quadrado, são lidas de forma mais constante."
        },
        {
          "question": "O que devo fazer depois de uma leitura correta?",
          "answer": "Copie a carga, verifique o destino e abra-o só se coincidir com o que você espera. Em códigos Wi-Fi ou de contato, cole os dados na tela de configurações correspondente, não em um navegador."
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
    },
    "metaDescription": "Leia um código QR com a câmera ou a partir de um PNG ou JPG, no seu navegador. Os fotogramas não são enviados. Um link só se abre quando você decide."
  },
  "password-generator": {
    "answer": "Um gerador de senhas cria uma senha ou uma frase-senha aleatória no seu dispositivo. Esta página também oferece um modelo em branco de registro de senhas; não é um gerenciador de senhas nem um cofre criptografado.",
    "content": {
      "about": "Crie no seu navegador uma senha aleatória forte ou uma frase memorável e depois copie-a ou passe-a para o telefone com um código QR opcional. Você também pode baixar um modelo CSV de senhas ou imprimir um caderno em branco. A geração usa crypto.getRandomValues e permanece neste dispositivo. Esta página é uma ferramenta de senhas, não um gerenciador, um cofre criptografado nem um aplicativo de senhas off-line.",
      "howTo": [
        "Escolha uma senha aleatória ou uma frase memorável.",
        "Indique o comprimento ou o número de palavras e depois escolha os tipos de caracteres ou as opções da frase.",
        "Toque em Gerar, confira o medidor de força e copie o resultado em um gerenciador de senhas de confiança.",
        "Se quiser, baixe o registro CSV ou imprima um caderno de senhas, e preencha site, usuário, dica, data da troca, 2FA e notas, não a senha em uso se o arquivo puder ser compartilhado."
      ],
      "examples": [
        {
          "title": "16 caracteres misturados",
          "body": "Uma senha de 16 caracteres com letras maiúsculas e minúsculas, números e símbolos tem um espaço de caracteres amplo. O rótulo de força é uma estimativa a partir do comprimento e do tamanho do conjunto."
        },
        {
          "title": "Uma frase de seis palavras",
          "body": "Uma frase de seis palavras tirada da lista de 2.048 palavras costuma ser mais fácil de digitar do que uma cadeia longa de símbolos, com uns 66 bits de entropia estimada antes de qualquer dígito extra."
        },
        {
          "title": "Um registro de senhas off-line",
          "body": "Baixe o modelo CSV e abra-o no Excel ou no Google Sheets, ou imprima o caderno de senhas. Anote uma dica em vez da senha em uso, sobretudo em uma planilha na nuvem."
        }
      ],
      "explanation": "As senhas aleatórias escolhem cada caractere com crypto.getRandomValues(), não com Math.random(). O gerador inclui pelo menos um caractere de cada conjunto selecionado e depois preenche o restante a partir do conjunto combinado, com uma amostragem sem viés. As frases escolhem palavras de uma lista de 2.048 e podem acrescentar hífens ou um dígito final. O rótulo de força (Curta / Moderada / Forte) é estimado como comprimento × log2(tamanho do conjunto) para os caracteres, ou como número de palavras × log2(2.048) para as frases. Não é uma garantia contra adivinhações, reutilização, phishing ou um site vazado.",
      "limitations": "O comprimento deve ser um número inteiro de 8 a 64, e uma frase usa de 4 a 10 palavras. Em uma senha aleatória, pelo menos um tipo de caractere deve permanecer ativo. O rótulo de força estima a partir do comprimento e do tamanho do conjunto. Ele não confere reutilização, phishing nem um site vazado. Esta página não guarda logins, não sincroniza um cofre nem criptografa um arquivo por você. Os caracteres ambíguos podem ficar de fora; o restante da lista de símbolos é fixo.",
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
        },
        {
          "question": "O que devo escrever na coluna de dica?",
          "answer": "Escreva algo que ajude você a encontrar a entrada no seu gerenciador, como um rótulo breve ou a data da última troca. Evite escrever a senha completa em um arquivo que poderia ser enviado por e-mail ou sincronizado."
        },
        {
          "question": "É seguro levar um caderno de senhas impresso?",
          "answer": "Um caderno de papel é um rastreador de logins off-line, não um cofre criptografado. Guarde-o em um lugar fechado. Não escreva senhas em uso em um caderno que você leva consigo e, se puder, guarde os códigos de recuperação em outro lugar."
        },
        {
          "question": "Como o modo de frase escolhe as palavras?",
          "answer": "Ele tira cada palavra ao acaso de uma lista de 2.048 palavras, com crypto.getRandomValues. Você pode escolher de 4 a 10 palavras, um espaço ou um hífen entre elas, maiúsculas opcionais e um dígito opcional no final."
        },
        {
          "question": "Como o medidor de força é calculado?",
          "answer": "Para uma senha aleatória, usa o comprimento vezes o log2 do tamanho do conjunto de caracteres. Para uma frase, usa o número de palavras vezes o log2 de 2.048, mais um pouco se você acrescentar um dígito. Abaixo de 50 bits é Curta, abaixo de 80 é Moderada, e 80 ou mais é Forte."
        },
        {
          "question": "Devo ler um código QR de uma senha em um lugar público?",
          "answer": "Evite se outras pessoas puderem ver a tela. O código QR contém a própria senha. Gere-o no seu dispositivo, faça a leitura uma vez e depois feche ou apague a imagem."
        },
        {
          "question": "Em que isso se diferencia do verificador de força de senhas?",
          "answer": "Esta página cria uma senha ou uma frase nova. O verificador de força avalia uma cadeia que você já tem. Ele não gera um segredo novo."
        },
        {
          "question": "Posso importar o CSV para um gerenciador de senhas?",
          "answer": "A maioria dos gerenciadores quer um arquivo que inclua a senha em uso. Este modelo deixa essa coluna de fora de propósito, então você ainda teria de copiar cada segredo desta página para o gerenciador você mesmo."
        },
        {
          "question": "O Tools Star Hub guarda uma cópia do caderno que eu imprimo?",
          "answer": "Não. A vista de impressão é montada no seu navegador e se abre em uma janela nova. Nada é enviado."
        },
        {
          "question": "Por que não há uma coluna de senha no modelo?",
          "answer": "Uma lista com segredos em uso é arriscada em uma planilha ou em um download digital que você poderia compartilhar. O modelo é um organizador de logins para site, usuário, dica, data da troca, 2FA e notas."
        },
        {
          "question": "Posso usá-lo como um aplicativo de senhas off-line?",
          "answer": "Não. Depois que a página carrega, você pode gerar senhas sem enviá-las a um servidor, mas continua sendo uma página da web, não um aplicativo instalado de senhas off-line nem um cofre criptografado."
        },
        {
          "question": "Como passo uma senha ao telefone sem usar o e-mail?",
          "answer": "Use o botão QR desta página, ou cole o texto no gerador de códigos QR, e depois faça a leitura no telefone. Não envie a senha por e-mail nem por chat."
        },
        {
          "question": "Uma senha de 12 caracteres ainda basta?",
          "answer": "Doze caracteres misturados podem ser aceitáveis em alguns sites, mas 16 ou mais é um valor padrão mais seguro quando o formulário permite. Uma frase de seis palavras é outra opção forte quando digitar resulta incômodo."
        },
        {
          "question": "O que acontece se eu desativar os números e os símbolos?",
          "answer": "A senha é montada só com os conjuntos que você deixa ativos, e a entropia estimada cai porque o conjunto é menor. Pelo menos um conjunto deve permanecer selecionado."
        },
        {
          "question": "Devo guardar os códigos de recuperação na mesma planilha?",
          "answer": "É mais seguro guardar os códigos de recuperação off-line ou no seu gerenciador de senhas, não na mesma planilha na nuvem que uma lista de senhas. Se esse arquivo vazar, ficariam expostos o mapa de logins e os códigos de backup."
        },
        {
          "question": "Posso gerar mais de uma senha de uma vez?",
          "answer": "O formulário cria uma senha ou uma frase cada vez que você toca em Gerar. Toque de novo para um valor novo. Copie cada resultado para o seu gerenciador ou registro antes de gerar o seguinte."
        }
      ],
      "tips": [
        "Use uma senha ou uma frase distinta para cada conta e ative o 2FA onde o site oferecer.",
        "Guarde o resultado em um gerenciador de senhas de confiança quando puder. Isso é mais seguro do que uma planilha ou uma lista em papel.",
        "Se você mantiver um registro de senhas off-line, guarde uma dica, não a senha em uso, e mantenha o arquivo em privado.",
        "Trate um código QR como a própria senha. Não faça uma captura nem o deixe em uma tela compartilhada."
      ],
      "features": [
        "Senhas aleatórias de 8 a 64 caracteres, com símbolos opcionais e sem caracteres que se confundem.",
        "Frases memoráveis de 4 a 10 palavras de uma lista de 2.048 palavras.",
        "Um medidor visível de força e de entropia.",
        "Um código QR opcional, criado no cliente, para passar uma senha ao telefone.",
        "Modelos grátis de planilha CSV e de caderno imprimível, gerados neste dispositivo."
      ],
      "sections": [
        {
          "heading": "Isto não é um gerenciador de senhas",
          "paragraphs": [
            "Muitas vezes se busca um gerenciador de senhas, um cofre, um password keeper ou um rastreador de contas quando, na verdade, se precisam de duas coisas: uma senha nova e forte, e um lugar para controlar as contas. Esta ferramenta pode criar a senha e lhe dar um registro em branco. Ela não pode substituir um gerenciador que criptografa e preenche os logins."
          ]
        },
        {
          "heading": "Planilhas, Google Sheets e cadernos de papel",
          "paragraphs": [
            "Uma planilha de senhas ou um modelo do Excel pode ajudar você a listar sites, usuários, dicas e o status do 2FA. Uma planilha do Google compartilhada, um e-mail ou um chat é um mau lugar para as senhas em uso. Prefira as dicas, mantenha o arquivo off-line ou muito restrito e use um gerenciador para os segredos de verdade."
          ]
        }
      ],
      "article": {
        "title": "Como criar senhas seguras e organizar suas contas",
        "intro": "Um bom login começa com um segredo único que você ainda não usou. Este guia cobre como funcionam o gerador e o modo de frase, como guardar o resultado, e como um caderno ou uma planilha de senhas pode acompanhar um gerenciador sem pretender ser um.",
        "sections": [
          {
            "heading": "Crie uma senha ou uma frase forte",
            "paragraphs": [
              "Na maioria dos sites, uma cadeia aleatória de 16 caracteres ou mais, com tipos misturados, é um bom valor padrão. Se um formulário for incômodo de preencher, uma frase de seis palavras costuma ser mais fácil e continua forte quando as palavras são escolhidas ao acaso. Evite os percursos do teclado e os dados pessoais. Confira uma senha que você já tem com o [verificador de força de senhas](/tools/password-strength-checker)."
            ]
          },
          {
            "heading": "Armazenamento de senhas e o básico da cibersegurança",
            "paragraphs": [
              "A cibersegurança dos logins do dia a dia é, sobretudo, um hábito: senhas únicas, 2FA e um único lugar de confiança para guardá-las. Um gerenciador de senhas de prestígio ou um cofre criptografado foram feitos para isso. Um download digital ou uma lista de senhas é só um modelo. Ele não se criptografa sozinho e não é um aplicativo de senhas off-line."
            ]
          },
          {
            "heading": "Usar um registro, um rastreador ou um organizador de senhas",
            "paragraphs": [
              "Se você quiser um organizador de logins, uma lista de contas e senhas ou um rastreador, use o CSV ou o caderno imprimível desta página. Preencha o site, o usuário, a dica, a data da troca, o 2FA e as notas. Guarde os códigos de recuperação off-line. Não trate uma planilha na nuvem como um cofre."
            ]
          },
          {
            "heading": "Códigos QR e passar uma senha ao telefone",
            "paragraphs": [
              "O código QR opcional desta página codifica a senha no seu dispositivo para que você possa lê-la uma vez. Quem vir a imagem pode ler o segredo. Você também pode colar o texto no [gerador de códigos QR](/tools/qr-code-generator). Apague a imagem quando terminar."
            ]
          },
          {
            "heading": "Outras ferramentas do Tools Star Hub",
            "paragraphs": [
              "Depois de gerar uma senha, o [verificador de força de senhas](/tools/password-strength-checker) avalia uma cadeia que você já tem, o [gerador de códigos QR](/tools/qr-code-generator) codifica qualquer texto curto e o [gerador de hash](/tools/hash-generator) pode deixar uma impressão do texto. Nenhuma dessas ferramentas guarda um cofre de senhas."
            ]
          }
        ]
      }
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
      "Length must be at least the number of selected character types.": "O comprimento precisa ser pelo menos igual ao número de tipos de caracteres selecionados.",
      "Password type": "Tipo de senha",
      "Random password": "Senha aleatória",
      "Letters, numbers, and symbols": "Letras, números e símbolos",
      "Memorable passphrase": "Frase-senha memorável",
      "Random words that are easier to type": "Palavras aleatórias mais fáceis de digitar",
      "Length": "Comprimento",
      "Character types": "Tipos de caracteres",
      "Numbers": "Números",
      "Symbols": "Símbolos",
      "Number of words": "Número de palavras",
      "From {0} to {1} words, drawn from a 2,048-word list.": "De {0} a {1} palavras, tiradas de uma lista de 2.048 palavras.",
      "Word separator": "Separador de palavras",
      "Hyphen (correct-horse-battery)": "Hífen (correct-horse-battery)",
      "Space (correct horse battery)": "Espaço (correct horse battery)",
      "Passphrase options": "Opções da frase",
      "Capitalize each word": "Colocar cada palavra em maiúscula",
      "Add a random digit at the end": "Adicionar um dígito aleatório no final",
      "Generate": "Gerar",
      "Clear": "Limpar",
      "Generated passphrase": "Frase-senha gerada",
      "Strength: {0}": "Força: {0}",
      "Short": "Curta",
      "Moderate": "Moderada",
      "Strong": "Forte",
      "Estimated password strength": "Força estimada da senha",
      "{0}, about {1} bits": "{0}, cerca de {1} bits",
      "Word list size: {0}": "Tamanho da lista de palavras: {0}",
      "This meter is an estimate from length and the size of the random pool. It is not a guarantee of security.": "Este medidor é uma estimativa a partir do comprimento e do tamanho do conjunto aleatório. Não é uma garantia de segurança.",
      "Optional QR code: encode this password so you can scan it with your phone. Anyone who sees the code can read the password. Generate it on this device only, then close or clear this page.": "Código QR opcional: codifique esta senha para que você possa lê-la com o telefone. Quem vir o código pode ler a senha. Gere-o só neste dispositivo e depois feche ou esvazie esta página.",
      "Creating QR code…": "Criando o código QR…",
      "Show QR code for phone transfer": "Mostrar o código QR para passá-la ao telefone",
      "QR code of the generated password": "Código QR da senha gerada",
      "Free offline password log template": "Modelo grátis de registro de senhas off-line",
      "Download a CSV password spreadsheet (opens in Excel and Google Sheets) or print a blank password book. Columns are site, username, hint, date changed, 2FA, and notes. This is not a password manager, encrypted vault, or offline password app.": "Baixe uma planilha CSV de senhas (abre no Excel e no Google Sheets) ou imprima um caderno em branco. As colunas são site, usuário, dica, data da troca, 2FA e notas. Isto não é um gerenciador de senhas, um cofre criptografado nem um aplicativo de senhas off-line.",
      "Prefer a reputable password manager. If you keep a paper password book or a private file, store a hint rather than the live password, and do not put passwords in a shared Google Sheet, email, or chat.": "Prefira um gerenciador de senhas de confiança. Se você mantiver um caderno de papel ou um arquivo privado, guarde uma dica em vez da senha em uso, e não coloque senhas em uma planilha do Google compartilhada, um e-mail ou um chat.",
      "Download CSV template": "Baixar o modelo CSV",
      "Print a password book": "Imprimir um caderno de senhas",
      "Passwords and passphrases are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server. QR codes are also built on this device.": "As senhas e as frases são criadas com crypto.getRandomValues no seu navegador. Elas não são armazenadas, registradas nem enviadas a um servidor. Os códigos QR também são montados neste dispositivo.",
      "Enter how many words to use.": "Indique quantas palavras usar.",
      "Word count must be a whole number.": "O número de palavras deve ser um inteiro.",
      "Choose a word count from {0} to {1}.": "Escolha um número de palavras de {0} a {1}.",
      "Passphrase word list is not available.": "A lista de palavras da frase não está disponível.",
      "The QR code could not be created in this browser.": "Não foi possível criar o código QR neste navegador.",
      "Allow pop-ups to open the printable password book, or download the CSV instead.": "Permita as janelas pop-up para abrir o caderno imprimível, ou baixe o CSV."
    },
    "metaDescription": "Crie uma senha ou uma frase-senha no seu navegador, com QR opcional e um modelo de registro. Não é um gerenciador nem um cofre criptografado."
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
        },
        {
          "question": "Como crio um código QR para a URL de um site?",
          "answer": "Você pode colar uma URL aqui, entre os demais tipos, e baixar um PNG ou um SVG. Para um código simples de URL ou texto, sem cor, logotipo nem formulário de tipo, use o [Gerador de códigos QR](/tools/qr-code-generator)."
        },
        {
          "question": "Quando devo escolher um nível mais alto de correção de erros?",
          "answer": "Use um nível mais alto quando o código for ficar pequeno ou for impresso de forma tosca. Se você adicionar um logotipo, esta página sobe a correção de erros para H (cerca de 30 %) por você. Sempre teste a leitura e uma impressão no tamanho final."
        },
        {
          "question": "Posso codificar texto simples em vez de um link?",
          "answer": "Sim: passe para o modo de texto para notas curtas, códigos ou instruções."
        },
        {
          "question": "Como faço um QR de contato a partir do nome e do telefone?",
          "answer": "Preencha os campos de vCard ou contato, gere e teste a leitura em um telefone antes de imprimir."
        },
        {
          "question": "Um logotipo no centro ainda é lido?",
          "answer": "Muitas vezes sim, se o logotipo permanecer pequeno. Esta página pode colocar no centro um logotipo que você escolhe, limitado a menos de 20 % do código, e sobe a correção de erros para H. Um logotipo carregado ou grande demais pode falhar. Teste a leitura com um telefone antes de imprimir ou compartilhar. O logotipo permanece no seu dispositivo."
        },
        {
          "question": "Qual deve ser o tamanho de um QR impresso em um folheto?",
          "answer": "Mire pelo menos uns 2 cm (cerca de 0,8 in) de lado para as câmeras de telefone com boa luz."
        },
        {
          "question": "Posso usar cores da marca nos módulos e no fundo?",
          "answer": "Sim, se o contraste permanecer forte; os módulos claros sobre fundos claros não são lidos."
        },
        {
          "question": "O que é a zona de silêncio ao redor de um código QR?",
          "answer": "A margem em branco que deve permanecer livre de texto ou gráficos para que os leitores possam focar."
        },
        {
          "question": "O marketing deveria usar códigos estáticos ou dinâmicos?",
          "answer": "O estático é simples e funciona sem conexão; o dinâmico (por meio de um serviço de redirecionamento) ajuda se o destino puder mudar."
        },
        {
          "question": "Como testo um QR de Wi-Fi antes da chegada dos convidados?",
          "answer": "Faça a leitura com um segundo telefone, com os dados móveis desligados, para confirmar que a conexão à rede funciona."
        },
        {
          "question": "Os códigos QR podem guardar URLs muito longas?",
          "answer": "Podem, mas os códigos densos são lidos mal: prefira links curtos quando for possível."
        },
        {
          "question": "As impressões foscas e brilhantes são lidas de forma distinta?",
          "answer": "O brilho do papel acetinado pode bloquear a leitura; o fosco costuma ser lido com mais confiabilidade."
        },
        {
          "question": "Como as credenciais de um evento deveriam usar códigos QR?",
          "answer": "Imprima-os grandes o bastante, mantenha um contraste alto e coloque-os longe das linhas de dobra."
        },
        {
          "question": "Qual formato de arquivo é melhor para uma gráfica?",
          "answer": "Baixe o SVG para imprimir, porque é um vetor de verdade dos módulos e continua nítido em qualquer tamanho. Um PNG é melhor para telas e para muitos usos na web. Se enviar um PNG, peça que não o compriman como um JPEG pequeno. Teste uma impressão no tamanho final. Um logotipo no SVG é embutido como imagem, então os módulos continuam sendo vetoriais."
        },
        {
          "question": "Gerar um QR envia a minha senha de Wi-Fi?",
          "answer": "A geração nesta página foi pensada para permanecer na sessão do navegador."
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
      "Enter a first or last name for the contact.": "Digite um nome ou sobrenome para o contato.",
      "The QR code is generated in your browser. Wi-Fi passwords, logos, and other fields are not stored or sent to a server.": "O código QR é gerado no seu navegador. Senhas de Wi-Fi, logotipos e outros campos não são armazenados nem enviados a um servidor.",
      "Logo (optional)": "Logotipo (opcional)",
      "Add a square PNG, JPG, or WebP. It stays on this device. Error correction is raised to H, and the logo is limited to about 20% of the code.": "Adicione um PNG, JPG ou WebP quadrado. Ele permanece neste dispositivo. A correção de erros sobe para H, e o logotipo fica limitado a cerca de 20% do código.",
      "A logo covers part of the code, so always test-scan the result with a phone before you print or share it.": "Um logotipo cobre parte do código, então sempre teste a leitura do resultado com um telefone antes de imprimir ou compartilhar.",
      "Error correction is set to H while a logo is present.": "A correção de erros fica em H enquanto houver um logotipo.",
      "The logo must be a PNG, JPG, or WebP under 1 MB.": "O logotipo deve ser um PNG, JPG ou WebP com menos de 1 MB.",
      "That logo could not be opened.": "Não foi possível abrir esse logotipo.",
      "Remove logo": "Remover logotipo"
    },
    "metaDescription": "Crie códigos QR de Wi-Fi, vCard, e-mail, telefone ou SMS, com cores e um logotipo opcional, no seu navegador. Para uma URL simples, use o gerador básico."
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
        },
        {
          "question": "Que partes de uma URL um analisador mostra?",
          "answer": "Uma divisão típica lista o protocolo, o host, a porta se houver, o caminho, a query string e o fragmento. Ver cada peça em separado facilita depurar redirecionamentos e parâmetros de rastreamento."
        },
        {
          "question": "Como leio os parâmetros de consulta de um link?",
          "answer": "Cole a URL completa e inspecione a seção de consulta. Cada par de chave e valor é listado para você detectar duplicatas, valores vazios ou problemas de codificação."
        },
        {
          "question": "Qual é a diferença entre um caminho e uma query string?",
          "answer": "O caminho aponta para um recurso no host, como /tools/url-parser. A query string começa depois de ? e leva parâmetros extras que a página ou a API podem ler."
        },
        {
          "question": "Por que, em muitos aplicativos, o fragmento não chega ao servidor?",
          "answer": "O #fragmento é principalmente para o navegador. Muitos servidores não o recebem, então a análise que depende de hashes precisa de um tratamento no cliente."
        },
        {
          "question": "Posso analisar URLs com nomes de domínio internacionais?",
          "answer": "Sim, quando o navegador ou o analisador admite hosts em punycode. Se um nome de host parecer xn--, é a forma ASCII de um domínio internacionalizado."
        },
        {
          "question": "O que significa a codificação por cento em uma URL?",
          "answer": "Os caracteres especiais se escrevem como % seguido de hexadecimal para que o link continue válido. Um espaço pode aparecer como %20; ao decodificar, o caractere legível volta a aparecer."
        },
        {
          "question": "Como confiro um link de campanha UTM?",
          "answer": "Cole a URL marcada e leia utm_source, utm_medium e utm_campaign na lista de consulta. Corrija ali os erros de digitação antes de compartilhar o link em larga escala."
        },
        {
          "question": "Por que o meu caminho relativo foi recusado?",
          "answer": "Os analisadores que esperam uma URL absoluta precisam de um esquema e um host. Acrescente https:// e o domínio, ou use um modo que aceite caminhos relativos, se existir."
        },
        {
          "question": "As portas aparecem nos links https?",
          "answer": "A porta 443 é o padrão do https e muitas vezes é omitida. Uma porta não padrão aparece de forma explícita depois do host."
        },
        {
          "question": "Duas chaves de consulta podem aparecer com o mesmo nome?",
          "answer": "Sim. Algumas APIs repetem chaves; o analisador deve mostrar cada aparição para que você não assuma que só o último valor importa."
        },
        {
          "question": "Ainda é habitual usuário:senha em uma URL?",
          "answer": "As credenciais embutidas são desencorajadas e muitas vezes os navegadores as removem. Prefira cabeçalhos de autenticação ou um fluxo de login em vez de links user:pass@host."
        },
        {
          "question": "Em que isso se diferencia de decodificar um único parâmetro?",
          "answer": "Um analisador de URL divide o link inteiro. Um decodificador de porcentagem se concentra em uma única cadeia codificada, sem exigir uma URL absoluta completa."
        },
        {
          "question": "A análise muda o link original?",
          "answer": "As ferramentas de inspeção mostram a estrutura sem reescrever a área de transferência, a menos que você copie uma URL reconstruída. A cadeia de origem permanece intacta até você editá-la."
        },
        {
          "question": "Por que os links de marketing ficam tão longos?",
          "answer": "Os rastreadores acrescentam muitos parâmetros de consulta. A análise ajuda você a separar o caminho de destino do ruído de rastreamento."
        },
        {
          "question": "As URLs coladas são enviadas para terminar a análise?",
          "answer": "Esta página analisa no navegador. Não é preciso ir a um servidor só para listar host, caminho e partes da consulta."
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
    },
    "metaDescription": "Divida uma URL absoluta em protocolo, host, porta, caminho, fragmento e parâmetros, no seu navegador. Nada é aberto nem enviado a um servidor."
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
        },
        {
          "question": "Como permito todos os rastreadores com um robots.txt simples?",
          "answer": "Use um grupo User-agent: * com Allow: / ou omita as regras Disallow que bloqueiem o site inteiro."
        },
        {
          "question": "Como bloqueio um site inteiro para os rastreadores?",
          "answer": "Adicione Disallow: / no user-agent correspondente: confirme bem antes de publicar."
        },
        {
          "question": "Posso negar só uma pasta de administração?",
          "answer": "Sim: coloque Disallow nesse caminho e deixe o restante do site permitido."
        },
        {
          "question": "Onde devem ir as linhas Sitemap?",
          "answer": "Adicione URLs absolutas de sitemap, normalmente perto do final do arquivo, depois dos grupos de user-agent."
        },
        {
          "question": "Preciso de um grupo separado para cada bot?",
          "answer": "Só quando as regras diferem; se não, um grupo * mantém o arquivo simples."
        },
        {
          "question": "Este arquivo obriga o Google a obedecer na hora?",
          "answer": "Não: os rastreadores o pedem conforme o calendário deles, e alguns bots que não cumprem ignoram o robots.txt."
        },
        {
          "question": "Como Allow e Disallow interagem?",
          "answer": "Em geral, vencem as regras mais específicas, conforme o rastreador; teste os caminhos importantes no Search Console se não tiver certeza."
        },
        {
          "question": "Podem aparecer comentários em um robots.txt?",
          "answer": "Sim: as linhas que começam com # são comentários e os rastreadores as ignoram."
        },
        {
          "question": "Os sites de teste deveriam bloquear a indexação desse jeito?",
          "answer": "Disallow pode ajudar, mas a autenticação ou os cabeçalhos noindex são mais firmes para um ambiente de teste privado."
        },
        {
          "question": "Que formato de caminho devo escrever?",
          "answer": "Comece os caminhos com / e faça-os coincidir com os caminhos reais das suas URLs; este gerador ignora os caminhos em branco."
        },
        {
          "question": "O robots.txt esconde páginas dos usuários?",
          "answer": "Não: só aconselha os rastreadores; as URLs ainda podem ser pedidas se forem adivinhadas ou linkadas."
        },
        {
          "question": "Como baixo o arquivo pronto?",
          "answer": "Copie o texto gerado em um robots.txt na raiz do seu site, ou use o controle de download se ele aparecer."
        },
        {
          "question": "Posso listar vários sitemaps?",
          "answer": "Sim: adicione uma linha Sitemap para cada URL de sitemap XML que você publicar."
        },
        {
          "question": "Uma linha crawl-delay é admitida em todo lugar?",
          "answer": "Crawl-delay não é um padrão e os principais buscadores o ignoram; prefira os controles de ritmo das próprias ferramentas deles."
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
    },
    "metaDescription": "Escreva um arquivo robots.txt com grupos de user-agent, Allow, Disallow e um sitemap opcional, no seu navegador. Ele não publica nem testa o seu site."
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
        },
        {
          "question": "Como um verificador de força pontua uma senha?",
          "answer": "Ele estima a entropia a partir do comprimento e da variedade de caracteres e depois a rotula de fraca a forte. Isso não prova que uma senha seja impossível de adivinhar no mundo real."
        },
        {
          "question": "Uma senha mais longa é sempre mais forte?",
          "answer": "O comprimento ajuda bastante, sobretudo com palavras ou caracteres aleatórios. Uma frase longa, mas previsível, ainda pode ser fraca se for famosa ou pessoal."
        },
        {
          "question": "Por que as senhas só de dígitos são avaliadas mal?",
          "answer": "Dez dígitos dão um conjunto de caracteres muito pequeno. Os atacantes testam padrões numéricos com rapidez, então os PINs curtos falham na maioria das rubricas de força."
        },
        {
          "question": "Esta ferramenta consulta Have I Been Pwned ou listas de vazamentos?",
          "answer": "Não, a menos que uma página diga de forma explícita que consulta uma API de vazamentos on-line. Uma pontuação só local não sabe se a sua senha já vazou."
        },
        {
          "question": "Devo incluir símbolos em todas as senhas?",
          "answer": "Os símbolos ampliam o espaço de busca quando a senha é, no mais, aleatória. Uma frase longa de palavras não relacionadas também pode ser forte sem uma densidade alta de símbolos."
        },
        {
          "question": "O que é a entropia de uma senha em bits?",
          "answer": "É uma medida aproximada de quantas tentativas um atacante aleatório poderia precisar. Mais bits costumam significar um ataque de força bruta mais difícil, se houver aleatoriedade de verdade."
        },
        {
          "question": "«Forte» basta para o acesso de um banco?",
          "answer": "Use uma senha ou uma frase única mais a autenticação multifator. Os rótulos de força são uma orientação, não um substituto do MFA."
        },
        {
          "question": "Por que acrescentar um espaço muda a pontuação?",
          "answer": "Em alguns conjuntos o espaço conta como outra classe de caractere e sobe um pouco a entropia. Mais importante é o comprimento total e que não seja previsível."
        },
        {
          "question": "O verificador pode ver minha senha depois que eu sair?",
          "answer": "Esta página foi feita para avaliar no seu computador o que você digita. Ainda assim, evite inserir senhas reais em computadores compartilhados."
        },
        {
          "question": "Em que conferir a força se diferencia de gerar uma senha?",
          "answer": "Conferir avalia um candidato que você já escolheu. Um gerador cria um segredo aleatório novo para que você não reutilize padrões antigos."
        },
        {
          "question": "Os conselhos de senha são os mesmos para as frases-senha?",
          "answer": "As frases-senha se baseiam em várias palavras não relacionadas e em um comprimento suficiente. Evite citações famosas e percursos do teclado, mesmo que a frase seja longa."
        },
        {
          "question": "Por que dois verificadores podem não coincidir?",
          "answer": "Eles usam dicionários, modelos de entropia e heurísticas de listas proibidas diferentes. Trate a discordância como um sinal para alongar ou aleatorizar mais."
        },
        {
          "question": "Devo reutilizar uma senha forte em vários sites?",
          "answer": "Não. Um vazamento em um site exporia os demais. Use um gerenciador de senhas para guardar segredos únicos."
        },
        {
          "question": "As regras de composição como «uma maiúscula» garantem a força?",
          "answer": "Os padrões obrigatórios podem tornar as senhas mais previsíveis. O guia moderno prefere o comprimento e a unicidade a uma complexidade rígida de fachada."
        },
        {
          "question": "Substituições habituais como @ no lugar de a enganam os verificadores?",
          "answer": "Muitas vezes esses truques estão nos dicionários dos atacantes. A aleatoriedade ganha da escrita leet sobre uma palavra-base fraca."
        },
        {
          "question": "Quando devo trocar uma senha imediatamente?",
          "answer": "Troque-a após um aviso de vazamento, um phishing ou uma exposição em um dispositivo compartilhado, mesmo que o verificador ainda a chamasse de forte."
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
    },
    "metaDescription": "Confira a força de uma senha no seu navegador: estima bits pela extensão e pelos tipos de caracteres. Nada é enviado nem comparado com vazamentos."
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
        },
        {
          "question": "Para que servem as meta tags?",
          "answer": "Elas descrevem uma página para os navegadores e os rastreadores: título, descrição, regras de robots e campos de prévia social. Boas tags ajudam a que os snippets e as prévias de link apareçam do jeito pretendido."
        },
        {
          "question": "Qual deve ser o tamanho de uma meta description?",
          "answer": "Mire uns 150–160 caracteres para que os snippets de busca tenham menos chance de ser cortados. Escreva primeiro para pessoas; encher só de palavras-chave raramente ajuda."
        },
        {
          "question": "O título HTML deve coincidir com o cabeçalho visível da página?",
          "answer": "Eles podem compartilhar a redação, mas são elementos distintos. O título está no head do documento, para as abas e os resultados de busca, enquanto o H1 é o cabeçalho que os leitores veem na página."
        },
        {
          "question": "O que faz uma tag canônica ou um link canonical?",
          "answer": "Ela indica aos rastreadores a URL preferida quando existem páginas parecidas. Use-a para concentrar os sinais na versão principal do conteúdo."
        },
        {
          "question": "Cada página deveria ter meta tags únicas?",
          "answer": "Sim, sempre que for possível. Títulos e descrições duplicados dificultam distinguir os snippets e podem parecer descuidados nos resultados de busca."
        },
        {
          "question": "Quais valores de robots são habituais?",
          "answer": "index, follow é a opção habitual e amigável. noindex deixa uma página fora dos resultados de busca; use-o em páginas de agradecimento e em telas de administração pobres em conteúdo."
        },
        {
          "question": "As tags Open Graph substituem a meta description padrão?",
          "answer": "Não. As tags OG servem sobretudo para as prévias sociais. Conserve tanto uma descrição normal quanto og:title e og:description quando as vezes em que se compartilha importarem."
        },
        {
          "question": "Também posso gerar aqui tags de Twitter Card?",
          "answer": "Muitos geradores escrevem campos do Twitter junto com o Open Graph. Confirme o tipo de cartão que o seu site admite de verdade antes de colá-las."
        },
        {
          "question": "Por que um caractere do meu título foi recusado?",
          "answer": "Alguns campos não admitem caracteres crus que devem ser escapados em HTML, ou aplicam limites de comprimento. Codifique os e comerciais e mantenha os títulos concisos."
        },
        {
          "question": "Gerar as tags as publica no meu site?",
          "answer": "Não. A ferramenta escreve a marcação para você colar no seu tema, CMS ou plugin de SEO. Nada passa a ficar no ar até você implantar esse HTML."
        },
        {
          "question": "O nome da marca deve ir no início ou no final do título?",
          "answer": "Muitas vezes no final, depois de um separador, para que o tema único da página apareça primeiro nas abas recortadas. Teste como a sua marca aparece em uma prévia real de resultados."
        },
        {
          "question": "As meta keywords ainda são úteis para o Google?",
          "answer": "Os principais buscadores há tempo ignoram as meta keywords para o posicionamento. Concentre-se no título, na descrição e em um conteúdo claro na página."
        },
        {
          "question": "Para que serve og:url?",
          "answer": "Ele declara a URL social canônica da publicação. Deixe-a absoluta (https) para que as plataformas não adivinhem um caminho incorreto."
        },
        {
          "question": "Um site em vários idiomas pode usar metas diferentes por idioma?",
          "answer": "Sim. Cada URL de idioma deveria levar o próprio título e a própria descrição, além do hreflang adequado em outra parte do head."
        },
        {
          "question": "Como pré-visualizo as tags depois de instalá-las?",
          "answer": "Use um depurador de Open Graph ou a ferramenta de prévia deste site na URL no ar. Os atrasos de cache podem exigir uma nova captura."
        },
        {
          "question": "As páginas de utilidade pobres em conteúdo deveriam levar noindex?",
          "answer": "Muitas vezes sim, em muros de login, passos do carrinho e URLs filtradas que criam duplicatas. Deixe indexáveis as páginas que você quer que se posicionem."
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
    },
    "metaDescription": "Escreva tags HTML de título, descrição, robots, canonical, Open Graph e Twitter no seu navegador. Ela não baixa nem publica nenhuma página."
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
        },
        {
          "question": "O que uma prévia de Open Graph mostra?",
          "answer": "Ela lê as tags OG e outras metas relacionadas para aproximar como um cartão de link pode aparecer: título, descrição e imagem. As plataformas ainda podem substituí-la ou recortá-la de outro jeito."
        },
        {
          "question": "Por que preciso de uma URL pública para a prévia?",
          "answer": "O verificador pede a página como faria um rastreador social. Localhost e IPs privados são bloqueados porque um fetcher remoto não consegue alcançá-los."
        },
        {
          "question": "O que faço se a imagem da prévia estiver incorreta?",
          "answer": "Confirme que og:image é absoluta, acessível em público e grande o bastante. Depois atualize o cache da plataforma após corrigir a tag."
        },
        {
          "question": "A prévia baixa o meu site inteiro?",
          "answer": "Ela pede a URL que você digita para ler as tags do head, não para copiar o site. Ainda assim, evite colar links de testes não públicos que exponham segredos."
        },
        {
          "question": "Por que a verificação esgotou o tempo?",
          "answer": "Servidores lentos, bloqueios de bots ou filtros de rede podem impedir uma resposta a tempo. Tente de novo mais tarde ou teste os cabeçalhos com uma página estática mais simples."
        },
        {
          "question": "Open Graph é só para o Facebook?",
          "answer": "O OG nasceu no Facebook, mas muitos aplicativos reutilizam as mesmas tags. LinkedIn, Slack e outros leem campos parecidos, cada um com as próprias particularidades."
        },
        {
          "question": "Que tamanho og:image deveria ter para um cartão limpo?",
          "answer": "Uma imagem paisagem de uns 1200×630 (cerca de 1,91:1) é um alvo amplamente compatível. Evite imagens minúsculas que as plataformas recusam."
        },
        {
          "question": "Páginas HTTPS ainda podem falhar na prévia?",
          "answer": "Sim: problemas de certificado, muros antibot ou tags ausentes também quebram os cartões. Olhe o código-fonte e confirme que as tags OG estão no HTML inicial."
        },
        {
          "question": "Os parâmetros de consulta mudam a prévia?",
          "answer": "Se o servidor devolve metas diferentes conforme a query string, os cartões podem divergir. Para compartilhar, prefira URLs canônicas limpas."
        },
        {
          "question": "Por que o título é cortado nas publicações móveis?",
          "answer": "Os aplicativos reservam pouco espaço. Mantenha og:title conciso para que as palavras importantes sobrevivam ao corte."
        },
        {
          "question": "og:description deve coincidir com a meta description?",
          "answer": "Elas podem coincidir, mas você pode ajustar o texto OG ao tom social e deixar a descrição de busca mais factual."
        },
        {
          "question": "Como obrigo o Facebook a atualizar um cartão?",
          "answer": "Use a ferramenta de captura do Sharing Debugger da Meta depois de atualizar as tags. Outras plataformas têm os próprios endpoints para esvaziar o cache."
        },
        {
          "question": "Dá para ler meta tags injetadas com JavaScript?",
          "answer": "Muitos rastreadores só veem a primeira resposta HTML. Coloque as tags OG críticas em HTML renderizado no servidor, não só em scripts do cliente."
        },
        {
          "question": "Como aparece a falta de og:image?",
          "answer": "As plataformas podem escolher uma imagem aleatória da página ou mostrar um cartão em branco. Tags og:image explícitas evitam essa surpresa."
        },
        {
          "question": "Esta prévia é idêntica à do Instagram ou do X?",
          "answer": "Não. Cada rede recorta e desenha os cartões de um jeito distinto. Trate-a como um diagnóstico das tags, não como uma maquete pixel a pixel de cada aplicativo."
        },
        {
          "question": "Preciso de og:type em todas as páginas?",
          "answer": "Colocar website ou article ajuda quem consome o objeto a classificá-lo. É uma marcação pequena, com uma intenção mais clara para os capturadores."
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
    },
    "metaDescription": "Confira as tags Open Graph de uma URL pública http ou https. Este site pede a página e não a salva. Endereços privados são recusados."
  },
  "secret-santa-generator": {
    "answer": "Um gerador de amigo secreto (Secret Santa) atribui ao acaso a cada pessoa um destinatário do presente, nunca a si mesma, e respeita exclusões como as de casais. Este funciona no seu navegador, não precisa de conta, oculta os resultados até eles serem revelados e não guarda os nomes.",
    "content": {
      "about": "O gerador de amigo secreto do Tools Star Hub é um sorteio on-line grátis para escritórios, famílias, amigos e clubes. Adicione os nomes, defina exclusões opcionais como casais ou irmãos e toque em Gerar. Cada pessoa fica emparelhada com exatamente um destinatário, ninguém tira a si mesmo e cada regra é conferida antes de o resultado aparecer. Os emparelhamentos permanecem ocultos até você revelá-los um a um, e você pode copiar ou imprimir a mensagem de cada pessoa em separado. Funciona por completo no seu navegador, não precisa de conta e não envia nomes, listas de desejos nem emparelhamentos a nenhum servidor.",
      "howTo": [
        "Adicione participantes um a um, ou cole uma lista com um nome por linha. São necessárias pelo menos três pessoas.",
        "Se quiser, preencha o nome do evento, a data da troca, o orçamento, a moeda, o tema e as instruções da lista de desejos.",
        "Adicione exclusões para quem não deve tirar uma pessoa concreta. Marque Mútua para bloquear os dois sentidos.",
        "Toque em Gerar amigo secreto. O sorteio é conferido, e qualquer regra impossível é explicada com nomes.",
        "Revele uma atribuição de cada vez, copie ou imprima a mensagem dessa pessoa e oculte-a de novo. Baixe o CSV ou o PDF do organizador só se precisar de um registro completo."
      ],
      "examples": [
        {
          "title": "Uma família de seis com dois casais",
          "body": "Participam Maria, Tom, Aisha, Omar, Vovó Rose e Leo. Maria e Tom são casados, assim como Aisha e Omar, então o organizador adiciona duas exclusões mútuas. O gerador encontra então um sorteio em que nenhum casal compra para o outro, por exemplo Maria → Omar, Tom → Rose, Aisha → Leo, Omar → Tom, Rose → Maria e Leo → Aisha."
        },
        {
          "title": "Uma equipe de escritório de dez com um limite de 20 GBP",
          "body": "A responsável da equipe cola dez nomes, põe a moeda em GBP e o orçamento máximo em 20, e escolhe a data da troca. Depois do sorteio, copia cada mensagem em um chat privado com aquele colega. Cada mensagem diz, por exemplo: «Your Secret Santa recipient is: Dev. Gift budget: up to £20.»"
        },
        {
          "title": "Um conjunto de regras que não pode funcionar",
          "body": "Com só Ann, Ben e Cara, uma regra mútua entre Ann e Ben deixa Ann capaz de presentear só Cara e Ben só Cara, mas Cara só pode receber um presente. A ferramenta indica que não existe um sorteio válido e nomeia as pessoas envolvidas, para que o organizador tire a regra ou adicione uma quarta pessoa."
        }
      ],
      "explanation": "O sorteio é um problema de emparelhamento: cada doador precisa de um destinatário, cada destinatário de um doador, ninguém pode tirar a si mesmo e nenhuma exclusão pode ser quebrada. O gerador confere primeiro que esse emparelhamento existe. Depois coloca primeiro as pessoas com menos destinatários permitidos, testa as opções delas em uma ordem aleatória e volta atrás quando chega a um beco sem saída. Um limite de processamento mantém o navegador respondendo; se ele for atingido, um segundo método de emparelhamento aleatorizado termina o trabalho. O sorteio final é verificado outra vez antes de você vê-lo.",
      "limitations": "Esta primeira versão não envia e-mails nem links. O organizador compartilha cada mensagem copiando-a ou imprimindo-a. Revelar os resultados em um só dispositivo não é privado em relação a quem puder ver essa tela. Os emparelhamentos não são salvos, então recarregar a página os descarta; baixe primeiro o CSV ou o PDF se precisar deles. O PDF usa uma fonte padrão que cobre só letras latinas, e os demais caracteres aparecem como pontos de interrogação; imprimir e escolher Salvar como PDF conserva todos os caracteres. São admitidos grupos de até 200 pessoas.",
      "tips": [
        "Reúna as listas de desejos antes do sorteio para que cada cartão possa incluir as ideias do destinatário.",
        "Use exclusões mútuas para casais e colegas de casa; use regras de um só sentido só quando o problema for uma direção.",
        "Guarde o CSV ou o PDF do organizador em um lugar privado, ou não o baixe se não precisar de um registro.",
        "Se você também participar, peça a outra pessoa que faça o sorteio, ou revele só o seu próprio cartão."
      ],
      "features": [
        "Cadastro de nomes um a um ou em lote, edição na lista, remoção, uma contagem em andamento e um Limpar lista com confirmação.",
        "Identificadores internos únicos, para que duas pessoas com o mesmo nome se distinguam e sejam rotuladas (1) e (2).",
        "Nome do evento, data, orçamento mínimo e máximo em USD, GBP, EUR, AED, CAD ou AUD, descrição, tema e instruções da lista de desejos, tudo opcional.",
        "Exclusões de um sentido e mútuas, conferidas antes do sorteio, com uma explicação clara quando tornam um sorteio impossível.",
        "Resultados ocultos com revelação um a um, um modelo de mensagem editável, botões de copiar e cartões individuais imprimíveis.",
        "Listas de desejos opcionais, visíveis só no cartão de quem compra para aquele participante.",
        "Downloads de CSV e PDF só para o organizador, cada um atrás de uma confirmação."
      ],
      "article": {
        "title": "Como organizar uma troca de amigo secreto (Secret Santa): um guia completo",
        "intro": "Uma troca de amigo secreto transforma um problema grande de presentes de grupo em uma tarefa pequena e administrável para cada pessoa: comprar um presente pensado para uma pessoa, dentro de um orçamento combinado. O que costuma falhar é a organização, quase sempre por um papelzinho perdido, um casal que se tirou mutuamente ou um orçamento que ninguém anotou. Este guia percorre todo o processo, do primeiro convite ao dia em que os presentes são abertos, e explica como um gerador de amigo secreto on-line cuida do sorteio.",
        "sections": [
          {
            "heading": "O que é o amigo secreto?",
            "paragraphs": [
              "O amigo secreto, ou Secret Santa, é uma troca de presentes em que a cada participante é dado em segredo o nome de outro participante, e ele compra um presente para essa pessoa. Ninguém sabe quem está comprando para si até a troca, e às vezes nem então. Em vez de todos comprarem algo para todos, cada pessoa compra exatamente um presente, o que mantém baixos o custo e o esforço em grupos grandes.",
              "A tradição tem outros nomes conforme o lugar, mas a ideia é a mesma: um sorteio ao acaso, um orçamento compartilhado, uma surpresa. Funciona no trabalho, em famílias extensas, grupos de amigos, equipes esportivas, salas de aula e comunidades on-line."
            ]
          },
          {
            "heading": "Como funciona uma troca de amigo secreto?",
            "paragraphs": [
              "Toda troca segue os mesmos passos. O organizador reúne uma lista de participantes e combina as regras: um orçamento, uma data da troca e qualquer tema especial. Depois os nomes são sorteados para que cada pessoa tenha um destinatário, ninguém tire a si mesmo e não haja duas pessoas com o mesmo destinatário. Cada pessoa compra um presente, e os presentes são entregues no dia combinado.",
              "Em um sorteio tradicional, todos escrevem o nome em um papelzinho, os papéis vão para um chapéu e cada pessoa tira um. É divertido pessoalmente, mas tem problemas práticos. Alguém pode tirar a si mesmo e ter de tirar de novo, o que pode revelar informação. Um casal pode se tirar mutuamente. Quem não está na sala não pode participar. Uma atribuição aleatória on-line resolve esses problemas ao calcular o sorteio inteiro de uma vez e conferi-lo com as regras antes de alguém ver um nome."
            ]
          },
          {
            "heading": "Como usar um gerador de amigo secreto on-line",
            "paragraphs": [
              "Um gerador de amigo secreto on-line substitui o chapéu. Com a ferramenta da parte de cima desta página, você escreve ou cola os nomes dos participantes, preenche os ajustes que quiser, adiciona exclusões e toca em Gerar amigo secreto. O gerador produz um conjunto completo de emparelhamentos em um instante e confirma que cada pessoa dá uma vez e recebe uma vez.",
              "Este gerador é grátis, não precisa de cadastro e funciona por completo no seu navegador. Não envia nomes a um servidor. Isso o torna um jeito simples de fazer um amigo secreto sem iniciar sessão, mas também significa que o organizador é responsável por passar cada atribuição à pessoa correta, como se explica na seção de privacidade mais abaixo."
            ]
          },
          {
            "heading": "Como adicionar participantes e gerar os nomes",
            "paragraphs": [
              "Comece com uma lista completa. Escreva um nome e toque em Adicionar, ou cole uma lista na caixa de várias linhas, um nome por linha, e toque em Adicionar todos os nomes. Os espaços a mais são recortados e as linhas em branco são ignoradas. Você pode editar qualquer nome no lugar ou tirar uma pessoa depois, e a contagem da parte de baixo mostra quantas pessoas há no sorteio.",
              "Use nomes que as pessoas reconheçam. Se dois colegas se chamam Sam, o gerador mesmo assim os trata como pessoas distintas, porque cada participante tem um identificador oculto, e os rotula Sam (1) e Sam (2). Acrescentar a inicial do sobrenome, como Sam K. e Sam P., deixa os cartões impressos mais claros. Quando a lista estiver boa, adicione as exclusões e gere os nomes."
            ]
          },
          {
            "heading": "Como funcionam as atribuições aleatórias de amigo secreto",
            "paragraphs": [
              "Um sorteio justo de amigo secreto precisa fazer mais do que embaralhar a lista. Um embaralhamento simples pode dar a alguém o próprio nome ou quebrar uma exclusão. Este gerador trata o sorteio como um quebra-cabeça de emparelhamento. Ele olha para quem cada pessoa pode presentear, começa por quem tem menos opções e testa os destinatários possíveis em uma ordem aleatória. Se uma escolha leva a um beco sem saída, ele volta atrás e tenta outra.",
              "Antes de sortear qualquer coisa, a ferramenta confere que um resultado válido seja possível. Um limite de processamento evita que os sorteios muito restritos deixem o navegador lento, e um segundo método de emparelhamento aleatorizado assume se esse limite for atingido. Por fim, o resultado é verificado outra vez: todos dão exatamente uma vez, todos recebem exatamente uma vez, ninguém fica com si mesmo e nenhuma regra é quebrada. Se você só precisa de números aleatórios para rifas ou assentos, o [gerador de números aleatórios](/tools/random-number-generator) é uma opção mais simples."
            ]
          },
          {
            "heading": "Como organizar um amigo secreto no trabalho",
            "paragraphs": [
              "Um gerador de amigo secreto para o trabalho precisa de um pouco mais de planejamento do que um sorteio familiar. Deixe a participação opcional e diga isso com clareza, porque alguns colegas podem não comemorar ou não querer gastar dinheiro. Fixe um só orçamento para todos e mantenha-o modesto, para que ninguém sinta pressão. Escolha uma data da troca em que a maioria esteja no escritório, ou preveja uma opção a distância para quem não estiver.",
              "Pense também nas exclusões. Algumas equipes preferem que os responsáveis não tirem as pessoas a seu cargo, ou que quem compartilha mesa não se tire mutuamente. Combine de antemão as diretrizes dos presentes, por exemplo nada ofensivo e nada de brincadeiras que possam colocar alguém em um aperto, e inclua-as na descrição do evento. Depois do sorteio, envie a cada pessoa a mensagem em privado, pelo chat ou o e-mail habitual do trabalho, não em um fio de grupo."
            ]
          },
          {
            "heading": "Como organizar um amigo secreto com família e amigos",
            "paragraphs": [
              "O amigo secreto entre amigos e família costuma ser mais descontraído, mas valem as mesmas bases. Combine quem entra, sobretudo em famílias grandes em que as crianças, os casais e os parentes que moram longe podem participar ou não. Decida se as crianças pequenas entrarão no sorteio ou receberão os presentes em separado.",
              "As famílias costumam precisar de exclusões. Os casais já se compram algo de qualquer forma, então a maioria os exclui de se tirarem mutuamente, e algumas excluem as pessoas da mesma casa. Se você quiser fazer um sorteio com amigos que moram em lugares distintos, combine se os presentes serão enviados pelo correio ou trocados em um encontro, e fixe a data com tempo suficiente para a entrega."
            ]
          },
          {
            "heading": "Como fixar um orçamento para o presente",
            "paragraphs": [
              "Um orçamento claro é a regra mais útil de qualquer troca. Sem um, algumas pessoas gastam muito mais do que outras e a troca parece desigual. Escolha um valor com o qual esteja confortável a pessoa que tem menos folga, não um que convenha à mais generosa.",
              "Você pode indicar um orçamento mínimo e um máximo, e escolher USD, GBP, EUR, AED, CAD ou AUD. Um intervalo como 15 a 25 dá folga sem convidar extremos; um só máximo, como até 20, é mais simples. O que você escolher aparece na mensagem de cada pessoa, então ninguém precisa se lembrar."
            ]
          },
          {
            "heading": "Como evitar que os casais e os familiares se tirem mutuamente",
            "paragraphs": [
              "As exclusões são o jeito de evitar que os casais se tirem em um amigo secreto. Na seção de exclusões, escolha a primeira pessoa, escolha quem ela não deve tirar e toque em Adicionar regra. Com Mútua marcada, os dois sentidos são bloqueados, então nenhum dos dois pode tirar o outro. Sem ela, a regra é de um só sentido: Ann não tirará Ben, mas Ben ainda poderia tirar Ann. As regras de um sentido servem para não repetir as duplas do ano passado só em uma direção, ou para um responsável que não deveria comprar para alguém a seu cargo.",
              "Cada pessoa continua recebendo exatamente um destinatário, então as exclusões reduzem o número de sorteios possíveis. Com muitas regras em um grupo pequeno, um sorteio pode se tornar impossível. Por exemplo, em um grupo de três, se Ann e Ben não puderem se tirar mutuamente, ambos teriam de tirar Cara. O gerador nunca ignora uma regra em silêncio para o sorteio sair. Em vez disso, explica quem está travado e pede que você tire uma regra ou adicione mais participantes. É isso que o torna um amigo secreto confiável com exclusões."
            ]
          },
          {
            "heading": "Como manter privadas as atribuições de amigo secreto",
            "paragraphs": [
              "A privacidade é o que conserva a surpresa. Depois do sorteio, esta ferramenta oculta todos os emparelhamentos. O organizador pode revelar uma atribuição, copiar a mensagem dessa pessoa ou imprimir o cartão dela, e ocultá-la de novo antes de seguir. Existe a opção Mostrar a lista completa para organizadores que não participam, e ela pede confirmação antes. Os downloads de CSV e PDF do organizador também perguntam antes de salvar, porque contêm todos os emparelhamentos.",
              "Seja honesto com o grupo sobre o quão privada é esta ferramenta. Uma revelação em uma tela compartilhada não é a mesma coisa que uma entrega individual segura: quem puder ver a tela pode ver o que se revela, e o organizador tem acesso a tudo necessariamente. O jeito mais seguro de compartilhar as atribuições em privado é que um organizador que não participa copie cada mensagem em um chat ou um e-mail privado com aquela única pessoa. Nada é salvo ao fechar a página, então baixe primeiro o arquivo do organizador se precisar de um registro."
            ]
          },
          {
            "heading": "Quantos participantes são necessários?",
            "paragraphs": [
              "São necessárias pelo menos três pessoas. Com duas, cada uma tiraria a outra e não haveria segredo. Com três, só há dois sorteios possíveis, então a surpresa é limitada. Os grupos de cinco ou mais dão uma mistura bem melhor, e os grupos maiores funcionam igualmente bem. Esta ferramenta admite até 200 participantes em um sorteio.",
              "Se o seu grupo for muito grande, como uma empresa inteira, considere fazer sorteios separados por equipe ou escritório, para que as pessoas comprem para alguém que pelo menos conhecem um pouco."
            ]
          },
          {
            "heading": "Como organizar um amigo secreto virtual",
            "paragraphs": [
              "Um amigo secreto virtual funciona para equipes a distância e amigos em cidades distintas. Faça o sorteio aqui e depois envie a cada pessoa a mensagem em privado. Peça endereços postais ou combine usar presentes que possam ser enviados de forma digital, como cartões-presente eletrônicos ou assinaturas, e lembre que a entrega pode demorar mais em dezembro.",
              "Para a revelação, escolha uma videochamada em que todos abram o presente diante da câmera. Se as pessoas estiverem espalhadas em vários países, o [conversor de fusos horários](/tools/time-zone-converter) ajuda você a escolher um horário que funcione para todos, e a [calculadora de diferença de datas](/tools/date-difference-calculator) mostra quantos dias restam para o envio. Se um presente precisar de um link, um [gerador de códigos QR](/tools/qr-code-generator) pode transformá-lo em um código para imprimir em um cartão."
            ]
          },
          {
            "heading": "Ideias de presentes de amigo secreto para orçamentos diferentes",
            "paragraphs": [
              "Com um orçamento pequeno, pense em algo útil e pessoal: um bom caderno, um lanche ou um chocolate quente favorito, uma planta, um quebra-cabeça, uma caneca escolhida a gosto ou um livro de um autor que a pessoa mencionou. Um recado breve escrito à mão muitas vezes importa mais do que o próprio presente.",
              "Com um orçamento médio, considere algo ligado a um hobby: bons utensílios de cozinha, um jogo de tabuleiro, um acessório de mesa, uma vela agradável ou um cachecol quente. Com um orçamento maior, uma experiência como um vale de cinema ou um curso pode ser memorável. Seja qual for o valor, a lista de desejos é o melhor guia. Se um participante preencheu ideias de presentes, categorias favoritas, cores ou coisas que preferiria não receber, esses detalhes aparecem só no cartão do amigo secreto dele."
            ]
          },
          {
            "heading": "Erros habituais no amigo secreto",
            "paragraphs": [
              "O erro mais habitual são as regras pouco claras: sem orçamento, sem data ou sem acordo sobre se pode entrar quem não está na sala. Outro é anunciar os emparelhamentos em um chat de grupo, o que estraga a surpresa para todos. Esquecer as exclusões faz com que os casais se tirem mutuamente, e sortear de novo em público para corrigir isso pode revelar quem tem quem.",
              "Outros problemas são práticos. Há quem entre tarde, quando o sorteio já está feito, então o organizador tem de sortear de novo e reenviar todas as mensagens. Alguém esquece para quem compra, por isso ajuda que o organizador guarde uma cópia privada dos resultados. E os presentes de brincadeira que parecem engraçados podem deixar os colegas desconfortáveis, então fixe as expectativas na descrição do evento."
            ]
          },
          {
            "heading": "Dicas para organizar uma troca de presentes com sucesso",
            "paragraphs": [
              "Envie o convite cedo, com o orçamento, a data e qualquer tema, e fixe uma data-limite para entrar antes do sorteio. Reúna as listas de desejos ao mesmo tempo. Faça o sorteio quando a lista for definitiva, envie as mensagens em privado e guarde uma cópia confidencial caso alguém esqueça.",
              "No dia da troca, dê um pouco de estrutura: abram os presentes um a um, ou deixem que as pessoas adivinhem quem era o amigo secreto delas. Depois, considere anotar as duplas deste ano para que no ano que vem você possa adicionar exclusões de um sentido e evitar repetições. Sobretudo, mantenha tudo leve. O ponto é uma surpresa pequena e pensada para todos do grupo."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "O que é um gerador de amigo secreto?",
          "answer": "Um gerador de amigo secreto, ou Secret Santa Generator, é uma ferramenta on-line que atribui ao acaso a cada participante uma pessoa para quem comprar um presente. Este confere que ninguém tire a si mesmo, que cada pessoa receba exatamente um presente e que se respeite cada regra de exclusão."
        },
        {
          "question": "Este gerador de amigo secreto é grátis?",
          "answer": "Sim. Dá para usar de graça, sem assinatura, sem funções pagas e sem um limite de quantas vezes você faz o sorteio."
        },
        {
          "question": "Posso gerar os nomes do amigo secreto on-line?",
          "answer": "Sim. Adicione os nomes na parte de cima desta página e toque em Gerar amigo secreto. O sorteio acontece no seu navegador em um instante e é verificado antes de ser mostrado."
        },
        {
          "question": "Quantos participantes são necessários?",
          "answer": "Pelo menos três. Cinco ou mais dão uma surpresa melhor. Esta versão admite até 200 pessoas em um sorteio."
        },
        {
          "question": "Alguém pode tirar o próprio nome?",
          "answer": "Não. O gerador nunca atribui ninguém a si mesmo, e cada resultado é conferido nesse ponto antes de aparecer."
        },
        {
          "question": "Posso excluir os casais de se tirarem mutuamente?",
          "answer": "Sim. Adicione uma exclusão entre as duas pessoas e marque Mútua para que nenhuma possa tirar a outra. Você também pode adicionar regras de um só sentido. Se as regras tornarem um sorteio impossível, a ferramenta explica a quais pessoas isso afeta."
        },
        {
          "question": "Posso usar para uma festa de Natal do escritório?",
          "answer": "Sim. Fixe um orçamento, uma moeda e uma data da troca, adicione exclusões como responsáveis e pessoas a seu cargo se quiser, e depois copie a mensagem de cada colega em um chat privado ou imprima o cartão dela."
        },
        {
          "question": "Posso usar com família e amigos?",
          "answer": "Sim. Serve para famílias e grupos de amigos, inclusive exclusões mútuas para casais ou moradias e listas de desejos opcionais que só o amigo secreto correspondente vê."
        },
        {
          "question": "Posso organizar um amigo secreto sem criar uma conta?",
          "answer": "Sim. Não há cadastro nem login. Tudo funciona no seu navegador."
        },
        {
          "question": "Como posso compartilhar as atribuições em privado?",
          "answer": "Revele uma atribuição de cada vez, copie a mensagem dessa pessoa ou imprima o cartão dela, e oculte-a de novo. Envie cada mensagem à sua pessoa em privado. Revelar em uma tela compartilhada não é privado em relação a quem estiver olhando, e esta versão não envia e-mails nem cria links para compartilhar."
        },
        {
          "question": "Posso baixar os resultados?",
          "answer": "Sim. O organizador pode baixar um CSV ou um PDF de todos os emparelhamentos depois de confirmar, ou imprimir cartões individuais e escolher Salvar como PDF na caixa de impressão."
        },
        {
          "question": "O gerador guarda os nomes dos participantes?",
          "answer": "Não. Os nomes, e-mails, listas de desejos e emparelhamentos nunca são salvos nem enviados a um servidor; desaparecem quando você fecha ou recarrega a página. Só os ajustes opcionais do evento e o modelo da mensagem são salvos no seu navegador, e Limpar ajustes salvos os elimina."
        },
        {
          "question": "Como funcionam as regras de exclusão para os casais?",
          "answer": "Marque os casais que não devem se tirar mutuamente; o embaralhamento é tentado de novo até satisfazer as restrições quando é possível."
        },
        {
          "question": "O que acontece se as exclusões tornarem um sorteio impossível?",
          "answer": "Bloqueios demais podem deixar um derangement impossível: relaxe uma restrição ou adicione participantes."
        },
        {
          "question": "Os nomes podem incluir emoji ou apelidos?",
          "answer": "Sim: use os rótulos que o seu grupo reconheça; mantenha-os únicos para que as atribuições apareçam claras."
        },
        {
          "question": "Devo sortear de novo se alguém desistir?",
          "answer": "Tire o nome e gere de novo para que as cadeias que restam continuem justas."
        },
        {
          "question": "Como faço uma troca só a distância?",
          "answer": "Compartilhe cada atribuição em privado por mensagem, fixe uma data de envio e combine um orçamento no chat."
        },
        {
          "question": "Posso fixar um gasto mínimo e um máximo?",
          "answer": "Os orçamentos são regras sociais: indique-os no convite; o gerador só cuida do sorteio dos nomes."
        },
        {
          "question": "A ordem dos nomes afeta a aleatoriedade?",
          "answer": "Não: o embaralhamento deve tratar a lista sem favorecer as entradas que vêm primeiro."
        },
        {
          "question": "Como evito que o organizador veja todos os emparelhamentos?",
          "answer": "Faça com que cada pessoa sorteie no próprio dispositivo, ou envie mensagens fechadas para que só os destinatários vejam quem lhes coube."
        }
      ]
    },
    "metaDescription": "Organize um amigo secreto grátis no seu navegador: nomes, exclusões e mensagens privadas. Sem conta e sem enviar nomes a um servidor.",
    "ui": {}
  }
};

export default data;
