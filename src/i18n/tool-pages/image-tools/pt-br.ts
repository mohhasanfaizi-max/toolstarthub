import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "image-compressor": {
    "answer": "Um compressor de imagens reduz o tamanho de arquivos JPG, PNG e WebP no seu dispositivo, sem enviar a foto.",
    "metaDescription": "Compacte imagens JPG, PNG e WebP no navegador, sem enviá-las, com qualidade de 10 a 100 e um limite de 25 MB e 8.192 pixels.",
    "ui": {},
    "content": {
      "about": "O compressor de imagens recodifica imagens no seu navegador. Defina uma qualidade de 10 a 100 ou, se quiser, aponte para um tamanho-alvo, por exemplo 200 KB. Escolha um formato de saída e compare o tamanho de arquivo que a página indica depois que você pressionar Compactar. Você pode compactar um arquivo ou até 20 de uma vez e, em seguida, baixar um arquivo ou um ZIP com os resultados. Use antes de anexar uma foto a um e-mail ou a uma página. A saída PNG é sem perda nesta ferramenta, então um gráfico plano quase pode não diminuir. Compactar de novo um JPEG pode acrescentar artefatos.",
      "limitations": "Arquivos GIF e SVG são recusados. HEIC e AVIF só abrem quando este navegador consegue decodificá-los. Você pode escolher JPG, PNG ou WebP como saída, e AVIF só quando este navegador consegue codificá-lo. A imagem deve ter 25 MB ou menos, e nenhum lado pode passar de 8.192 pixels. Dá para compactar até 20 arquivos em uma passada, e um ZIP é oferecido quando mais de um arquivo dá certo. A qualidade deve ficar entre 10 e 100, a menos que você ative um tamanho-alvo. Para um alvo como 200 KB, JPG, WebP e AVIF buscam uma qualidade, e podem reduzir as dimensões se você ligar essa opção. A página informa o tamanho final com honestidade se o alvo não puder ser atingido. PNG é sem perda, então um alvo sem reduzir as dimensões pode não ser alcançado.",
      "howTo": [
        "Escolha um ou mais arquivos JPG, PNG ou WebP, ou arraste-os para a caixa. AVIF e HEIC só abrem se este navegador conseguir decodificá-los. Cada arquivo deve ter 25 MB ou menos, nenhum lado pode passar de 8.192 pixels, e uma passada admite até 20 arquivos.",
        "Defina a qualidade de 10 a 100, começando em 80, ou ative Compactar até um tamanho-alvo, por exemplo 200 KB. No modo alvo, a página busca uma qualidade igual ou abaixo desse tamanho. PNG é sem perda, então o alvo só é atingido se o arquivo já for pequeno o bastante ou se você também reduzir as dimensões.",
        "Escolha JPG, PNG ou WebP como saída, ou AVIF se este navegador puder codificá-lo, e depois pressione Compactar.",
        "Leia o tamanho original e o novo tamanho na página. Se você definiu um alvo, a página também diz se ele foi atingido. Baixe o arquivo, ou um ZIP se compactou várias imagens. Redefinir limpa os arquivos desta aba."
      ],
      "examples": [
        {
          "title": "Uma foto salva como JPEG na qualidade 80",
          "body": "Abra um JPEG da câmera e deixe a qualidade em 80, que é o valor inicial. Escolha JPG e pressione Compactar. O navegador desenha a imagem e codifica o JPEG em 0,80. A página então mostra o tamanho original e o novo tamanho dessa imagem. Esses dois números vêm do seu arquivo. Esta explicação não publica um tamanho de exemplo, porque outra foto produz outro resultado."
        },
        {
          "title": "Uma captura de tela que deve continuar PNG",
          "body": "Uma captura de tela costuma ser um PNG de cor plana e texto nítido. Recodificá-la como PNG nesta página é sem perda, e o controle de qualidade não muda essa codificação, então o arquivo pode não ficar menor. Converter a mesma captura para JPEG na qualidade 80 descarta detalhe. As bordas do texto e as áreas planas podem ganhar blocos. Se as letras precisarem permanecer nítidas, mantenha PNG ou redimensione a imagem primeiro no redimensionador de imagens."
        },
        {
          "title": "Um arquivo que a página não abre",
          "body": "GIF e SVG são sempre recusados. HEIC e AVIF só abrem se este navegador conseguir decodificá-los; caso contrário, a página avisa e deixa o arquivo de fora. Um arquivo acima de 25 MB é recusado para a aba continuar responsiva. Um lado maior que 8.192 pixels é recusado. Qualidade abaixo de 10 ou acima de 100 é recusada. Mais de 20 arquivos em uma passada é recusado. Converta arquivos não suportados para JPG, PNG ou WebP primeiro, ou exporte uma imagem menor."
        }
      ],
      "explanation": "A compactação roda no navegador com o canvas. A imagem é desenhada e depois codificada no formato que você escolheu. JPEG e WebP recebem um valor de qualidade de 0,10 a 1,00, que é o controle dividido por 100. PNG é codificado sem esse argumento de qualidade, então o controle não gera um PNG com perda. As saídas JPEG e WebP são preenchidas primeiro sobre um fundo branco, o que importa para um PNG que tinha transparência.",
      "sections": [
        {
          "heading": "A qualidade não é um controle de tamanho para todos os formatos",
          "paragraphs": [
            "Uma qualidade menor em geral deixa um JPEG ou um WebP menor, e também remove mais detalhe. A qualidade 80 é um começo razoável para uma foto. Só desça em direção a 70 ou 60 depois de olhar a prévia. A qualidade 10 é a mais baixa que a página permite, e fica visivelmente rude na maioria das fotos.",
            "O PNG nesta página não usa o controle. Um logotipo ou uma captura de interface pode continuar grande depois de uma recodificação PNG. Isso é esperado. Isto não é um redutor de paleta como um otimizador PNG especializado. Se o tamanho importa mais do que o texto nítido, mude a saída para JPEG ou WebP e aceite a perda."
          ]
        },
        {
          "heading": "O que cada formato descarta",
          "paragraphs": [
            "O JPEG é com perda. Repetir a compactação JPEG em uma foto já compactada acrescenta artefatos, mesmo em uma qualidade alta. O WebP no mesmo ponto do controle também é com perda aqui. Nenhum dos dois formatos mantém um fundo transparente nesta página, porque o canvas é preenchido de branco antes dessas codificações.",
            "A saída PNG é sem perda em relação aos pixels desenhados no canvas. Ela ainda não recupera o detalhe que um JPEG já perdeu. Partir de um JPEG e salvar PNG gera um arquivo maior da mesma imagem suave. Isso não restaura o arquivo original da câmera."
          ]
        },
        {
          "heading": "Redimensione antes de perseguir um arquivo minúsculo",
          "paragraphs": [
            "Uma foto de 4.000 pixels continua com 4.000 pixels depois da compactação. A quantidade de bytes cai porque a codificação fica mais agressiva, não porque as dimensões em pixels mudaram. Se a imagem for exibida com 1.200 pixels, redimensione primeiro e depois compacte. O redimensionador de imagens deste site muda a largura e a altura. Esta página não muda.",
            "Depois de Compactar, use os tamanhos que a página imprime para o seu arquivo. Um antes e depois da foto de outra pessoa não é uma previsão da sua."
          ]
        },
        {
          "heading": "Privacidade",
          "paragraphs": [
            "O arquivo é lido e recodificado nesta aba. Ele não é enviado ao Tools Star Hub. Redefinir e sair da página descartam a prévia. A análise, se você a aceitar, não recebe a imagem."
          ]
        }
      ],
      "tips": [
        "Comece na qualidade 80 para uma foto JPEG, olhe a prévia e só então baixe o controle se o arquivo ainda estiver grande demais.",
        "Mantenha capturas de tela e logotipos como PNG quando o texto precisar ficar nítido. Não os force para JPEG só para ver um número menor.",
        "Espere que uma segunda passada JPEG fique pior que a primeira, mesmo que o arquivo novo seja menor.",
        "Confira a transparência. As saídas JPEG e WebP nesta página ficam sobre branco."
      ],
      "faqs": [
        {
          "question": "Como compacto um JPEG?",
          "answer": "Abra um JPG ou vários, defina a qualidade entre 10 e 100, escolha JPG e pressione Compactar. O controle começa em 80, o que codifica em 0,80. A página mostra o novo tamanho de cada imagem e um ZIP quando mais de um arquivo dá certo."
        },
        {
          "question": "Por que o meu PNG quase não diminuiu?",
          "answer": "A saída PNG nesta página é sem perda, e o controle de qualidade não muda essa codificação. Capturas planas e gráficos simples podem permanecer quase do mesmo tamanho. Escolha JPEG ou WebP se você puder aceitar alguma perda de detalhe."
        },
        {
          "question": "Devo transformar uma captura de tela em JPEG?",
          "answer": "Só se um arquivo menor importar mais do que o texto nítido. O JPEG na qualidade 80 pode criar blocos em volta das letras e das cores planas. Mantenha PNG quando as bordas precisarem permanecer limpas."
        },
        {
          "question": "Quais arquivos são recusados?",
          "answer": "GIF e SVG não são abertos. HEIC e AVIF só são abertos se este navegador conseguir decodificá-los; caso contrário, são recusados com uma mensagem clara. Arquivos acima de 25 MB são recusados, assim como qualquer lado maior que 8.192 pixels, ou mais de 20 arquivos em uma passada. Qualidade fora de 10 a 100 é recusada."
        },
        {
          "question": "A minha imagem é enviada?",
          "answer": "Não. Cada arquivo é recodificado nesta aba na qualidade que você definiu. As imagens não são enviadas ao Tools Star Hub."
        },
        {
          "question": "Funciona no celular?",
          "answer": "Sim. Você pode abrir esta página em um telefone ou tablet. Os seletores de arquivo e os downloads usam o navegador do seu dispositivo. Arquivos grandes podem ser mais lentos em um telefone pequeno do que no computador."
        },
        {
          "question": "O compressor de imagens é grátis?",
          "answer": "Sim. Você pode recodificar um JPG, PNG ou WebP aqui sem pagar e sem criar uma conta."
        },
        {
          "question": "Quais formatos posso compactar?",
          "answer": "Esta página sempre abre JPG, PNG e WebP, e você pode salvar nesses formatos. O AVIF aparece como saída só se este navegador puder codificá-lo. Arquivos HEIC ou AVIF só abrem se este navegador puder decodificá-los. Arquivos GIF e SVG são recusados."
        },
        {
          "question": "Como funciona o controle de qualidade?",
          "answer": "A qualidade vai de 10 a 100 e começa em 80. Ela muda a codificação de JPEG, WebP e AVIF. Não muda a forma como o PNG é gravado nesta página, porque a saída PNG aqui é sem perda."
        },
        {
          "question": "Posso compactar uma imagem até um tamanho-alvo, por exemplo abaixo de 200 KB?",
          "answer": "Sim. Ative Compactar até um tamanho-alvo e informe um teto, por exemplo 200 KB, ou use uma predefinição. Para JPG, WebP e AVIF, a página busca uma qualidade igual ou abaixo desse tamanho. Se a qualidade mais baixa ainda for grande demais, você também pode reduzir as dimensões. A página informa o tamanho final com honestidade quando o alvo não puder ser atingido. PNG é sem perda, então escolha JPG ou WebP, ou reduza as dimensões, se precisar bater um teto."
        },
        {
          "question": "Posso compactar várias imagens de uma vez ou baixar um ZIP?",
          "answer": "Sim. Você pode adicionar até 20 imagens, compactá-las nesta aba e revisar cada resultado. Se mais de um arquivo der certo, Baixar tudo em ZIP empacota esses arquivos. Uma imagem só ainda é baixada como esse arquivo, não como ZIP."
        },
        {
          "question": "Quais são os limites de tamanho de arquivo e de pixels?",
          "answer": "Cada imagem deve ter 25 MB ou menos, e nenhum lado pode passar de 8.192 pixels. Uma passada pode incluir até 20 arquivos. Um arquivo fora desses limites é recusado."
        },
        {
          "question": "Compactar um JPEG mais de uma vez piora a aparência?",
          "answer": "Pode acontecer. JPEG, WebP e AVIF nesta página são com perda, então compactar de novo um JPEG pode acrescentar mais artefatos. Comece pelo original quando puder."
        },
        {
          "question": "A compactação substitui a foto no meu dispositivo?",
          "answer": "Não. O arquivo original permanece onde está. Você baixa um arquivo novo, e Redefinir só limpa a imagem desta aba."
        },
        {
          "question": "Quando devo escolher WebP como saída?",
          "answer": "Escolha WebP quando o destino em que você vai usar a imagem aceitar esse formato e você quiser um arquivo menor que um JPEG de aparência parecida. Se um formulário aceitar só JPG ou PNG, escolha esse formato."
        },
        {
          "question": "Posso desfazer uma compactação se eu não gostar do resultado?",
          "answer": "Sim. O arquivo original no seu dispositivo não muda. Mova o controle de qualidade e compacte de novo, ou pressione Redefinir e escolha o arquivo outra vez."
        },
        {
          "question": "Há um limite diário ou é preciso entrar em uma conta?",
          "answer": "Não. Nesta página não há conta nem cota diária. Os limites práticos são 20 arquivos por passada, 25 MB cada um e 8.192 pixels de lado."
        },
        {
          "question": "Em que isso é diferente do conversor de imagens?",
          "answer": "Esta página recodifica um JPG, PNG ou WebP para reduzir o tamanho. O [conversor de imagens](/tools/image-converter) transforma um JPG em PNG ou um PNG em JPG, e inclui uma cor de preenchimento para os pixels transparentes."
        },
        {
          "question": "Preciso de conexão com a internet depois que a página já carregou?",
          "answer": "A compactação em si roda nesta aba. Você precisa de conexão para abrir a página, mas a imagem não é enviada a um servidor para ser compactada."
        },
        {
          "question": "Posso usar o arquivo compactado em um e-mail ou em um site?",
          "answer": "Sim. Baixe o arquivo ou o ZIP e anexe ou envie os arquivos novos onde precisar. Confira se o destino aceita o formato que você escolheu, principalmente se escolheu WebP ou AVIF."
        }
      ]
    }
  },
  "image-resizer": {
    "answer": "Um redimensionador de imagens altera a largura e a altura no navegador, com o bloqueio opcional da proporção.",
    "metaDescription": "Altere a largura e a altura de uma imagem JPG, PNG ou WebP no navegador, com a proporção bloqueada ou não, e depois baixe o arquivo.",
    "ui": {},
    "content": {
      "about": "Defina uma nova largura e altura para um JPG, PNG ou WebP, com as proporções bloqueadas, a menos que você desligue esse bloqueio. Use quando uma foto precisar caber em um tamanho em pixels, por exemplo 1200 por 630. Se você precisar recortar uma região em vez de redimensionar a imagem inteira, use o recortador de imagens.",
      "limitations": "JPG, PNG e WebP são os formatos que abrem. A largura e a altura precisam ser pixels inteiros de 1 a 8.192. Desligar o bloqueio de proporção pode esticar a imagem. Recorte, rotação e remoção de fundo não estão disponíveis.",
      "howTo": [
        "Escolha uma imagem JPG, PNG ou WebP.",
        "Confira a largura e a altura originais.",
        "Informe uma nova largura ou altura. Deixe a proporção bloqueada para manter as proporções.",
        "Pressione Redimensionar, revise o novo tamanho e depois baixe ou redefina."
      ],
      "examples": [
        {
          "title": "Dividir pela metade uma imagem de 2000×1000",
          "body": "Com a proporção bloqueada, a largura 1000 define a altura em 500."
        },
        {
          "title": "Dimensões desbloqueadas",
          "body": "Desligar o bloqueio permite definir largura e altura de forma independente, o que pode esticar a imagem."
        }
      ],
      "explanation": "O redimensionamento desenha a imagem em um canvas no tamanho que você escolhe. A largura e a altura devem ser números inteiros de 1 a 8.192 pixels. A proporção bloqueada atualiza o outro lado a partir das proporções originais. A saída JPEG, PNG ou WebP usa o mesmo codificador no navegador que o compressor.",
      "faqs": [
        {
          "question": "O redimensionador de imagens é grátis?",
          "answer": "Sim. Alterar a largura e a altura de uma imagem neste navegador é grátis, sem conta."
        },
        {
          "question": "Isto envia a minha foto?",
          "answer": "Não. A nova largura e a nova altura são desenhadas nesta aba. A foto não é enviada a um servidor."
        },
        {
          "question": "Por que existe um limite de tamanho?",
          "answer": "Dimensões muito grandes podem travar uma aba. Esta ferramenta para em 8.192 pixels de cada lado."
        },
        {
          "question": "Como redimensiono uma imagem sem esticá-la?",
          "answer": "Mantenha a proporção bloqueada e altere só a largura ou só a altura. O outro lado é calculado para a imagem conservar as proporções."
        },
        {
          "question": "Redimensionar uma imagem reduz o tamanho do arquivo?",
          "answer": "Em geral, sim. Menos pixels significa menos dados para guardar. Para o arquivo menor, redimensione primeiro e depois compacte o resultado."
        },
        {
          "question": "Como defino uma largura e uma altura exatas?",
          "answer": "Digite valores inteiros em pixels de 1 a 8.192. Com o bloqueio de proporção ligado, mudar um lado atualiza o outro. Desligue o bloqueio só se quiser os dois valores exatamente como digitados."
        },
        {
          "question": "Quais formatos posso redimensionar?",
          "answer": "JPG, PNG e WebP abrem aqui. GIF, HEIC e SVG não são aceitos nesta página."
        },
        {
          "question": "Posso recortar ou girar a foto aqui?",
          "answer": "Não. Esta página só escala a imagem inteira. Para recortar uma região, use o [recortador de imagens](/tools/image-cropper). Rotação e remoção de fundo não estão disponíveis aqui."
        },
        {
          "question": "O que acontece se eu desligar o bloqueio de proporção?",
          "answer": "Você pode digitar largura e altura de forma independente. Se esses números não corresponderem às proporções originais, a imagem vai esticar."
        },
        {
          "question": "O redimensionador funciona em um celular?",
          "answer": "Sim. Você pode abrir um JPG, PNG ou WebP e definir o tamanho em pixels em um navegador móvel. O trabalho permanece nesta aba."
        },
        {
          "question": "O redimensionamento substitui o arquivo original?",
          "answer": "Não. Você baixa uma imagem nova. O arquivo no seu dispositivo permanece como estava."
        },
        {
          "question": "Posso redimensionar mais de uma imagem em uma só passada?",
          "answer": "Não. Esta página redimensiona uma imagem de cada vez."
        },
        {
          "question": "Por que eu redimensionaria antes de compactar?",
          "answer": "Menos pixels em geral significam um arquivo menor. Uma sequência comum é redimensionar até o tamanho de que você precisa e depois compactar o resultado com o [compressor de imagens](/tools/image-compressor)."
        },
        {
          "question": "Qual tamanho devo usar para uma imagem de prévia em rede social?",
          "answer": "Muitas prévias de link usam 1200 por 630 pixels. Informe a largura e a altura de que você precisa, ou recorte primeiro no formato certo no [recortador de imagens](/tools/image-cropper) e depois redimensione."
        },
        {
          "question": "As dimensões de saída são exatamente o que eu digito?",
          "answer": "Sim, quando os dois lados são pixels inteiros de 1 a 8.192. Com o bloqueio ligado, o segundo lado é calculado a partir do primeiro para as proporções permanecerem iguais."
        },
        {
          "question": "Posso ampliar uma foto pequena sem ela parecer suave?",
          "answer": "Você pode digitar um tamanho maior, mas esta página não inventa o detalhe que falta. Ampliar uma imagem pequena costuma deixá-la borrada ou em blocos."
        },
        {
          "question": "Posso manter a transparência em um PNG?",
          "answer": "Sim. Um PNG com fundo transparente mantém essa transparência quando você o redimensiona, porque esta página não achata a imagem sobre uma cor de preenchimento."
        },
        {
          "question": "Posso redimensionar por um percentual do tamanho original?",
          "answer": "Não há uma caixa de percentual. Calcule a nova largura ou altura em pixels e digite esse número, deixando o bloqueio de proporção ligado se quiser que o outro lado acompanhe."
        },
        {
          "question": "O download permanece no mesmo formato que eu abri?",
          "answer": "Sim. Um JPG continua JPG, um PNG continua PNG e um WebP continua WebP. Para mudar o formato, use o [conversor de imagens](/tools/image-converter) ou, para uma saída WebP a partir de uma passada de compactação, o [compressor de imagens](/tools/image-compressor)."
        },
        {
          "question": "O que acontece se eu informar 0 ou um decimal para um lado?",
          "answer": "A largura e a altura precisam ser pixels inteiros de 1 a 8.192. 0, um número negativo ou um decimal não são aceitos."
        }
      ]
    }
  },
  "image-cropper": {
    "answer": "Um recortador de imagens permite selecionar uma região de uma foto e exportar só essa área.",
    "metaDescription": "Desenhe um quadro sobre um JPG, PNG ou WebP e baixe os pixels que ficam dentro. O quadro pode ser livre, 1:1, 4:3 ou 16:9. Aqui não há giro nem filtros.",
    "ui": {},
    "content": {
      "about": "Arraste um quadro sobre um JPG, PNG ou WebP e baixe os pixels originais que estão dentro dele. Use para uma foto de perfil quadrada ou uma capa 16:9 quando você só precisa de um recorte. As proporções são livre, 1:1, 4:3 e 16:9, e a página não gira nem aplica filtro à foto.",
      "limitations": "Rotação, filtros e um pincel de correção não estão nesta página. O quadro pode ser livre, 1:1, 4:3 ou 16:9, e o download são os pixels originais dentro desse quadro. Arquivos GIF, HEIC e SVG não abrem. Um arquivo acima de 25 MB, ou um lado maior que 8.192 pixels, é recusado.",
      "howTo": [
        "Escolha uma imagem JPG, PNG ou WebP.",
        "Arraste o quadro de recorte para movê-lo. Use as alças para redimensioná-lo.",
        "Escolha Livre, 1:1, 4:3 ou 16:9 se precisar de um formato definido.",
        "Pressione Recortar, veja a prévia do resultado e depois baixe ou redefina."
      ],
      "examples": [
        {
          "title": "Recorte quadrado para rede social",
          "body": "Escolha 1:1, posicione o quadro sobre o assunto e depois recorte."
        },
        {
          "title": "Tela larga",
          "body": "O 16:9 mantém um quadro largo enquanto você move a caixa sobre a foto original."
        }
      ],
      "explanation": "O quadro de recorte é mapeado de volta aos pixels originais, e esse retângulo é desenhado em um canvas. As opções de proporção mantêm o quadro proporcional. Isto é um recortador simples, não um editor de fotos completo: não há rotação, filtro nem pincel de correção.",
      "faqs": [
        {
          "question": "O recortador de imagens é grátis?",
          "answer": "Sim. Recortar um JPG, PNG ou WebP neste navegador não exige pagamento nem conta."
        },
        {
          "question": "A foto é enviada?",
          "answer": "Não. O recorte é desenhado nesta aba a partir do arquivo que você escolheu. A foto não é enviada ao Tools Star Hub."
        },
        {
          "question": "Posso recortar no celular?",
          "answer": "Sim. Arraste o quadro com o dedo. As alças são grandes o bastante para tocar. A prévia permanece dentro da largura da tela."
        },
        {
          "question": "Para qual proporção devo recortar?",
          "answer": "Use 1:1 para fotos de perfil e publicações quadradas, 16:9 para miniaturas de vídeo e banners largos, e 4:3 para muitos slides e telas mais antigas. Livre permite qualquer formato."
        },
        {
          "question": "O recorte reduz a qualidade da imagem?",
          "answer": "Não. O recorte remove os pixels fora do quadro e conserva os pixels de dentro, então a área que você mantém não é desfocada."
        },
        {
          "question": "Quais formatos posso recortar?",
          "answer": "JPG, PNG e WebP abrem aqui. Arquivos GIF, HEIC e SVG não abrem."
        },
        {
          "question": "Como recorto uma foto de perfil quadrada?",
          "answer": "Escolha o quadro 1:1, arraste e redimensione a caixa sobre a área que você quer e depois baixe. O arquivo são os pixels originais dentro desse quadro."
        },
        {
          "question": "Posso girar ou aplicar filtro à foto nesta página?",
          "answer": "Não. Rotação, filtros e um pincel de correção não estão nesta página. O download são só os pixels de dentro do quadro que você desenhou."
        },
        {
          "question": "Qual é o limite de tamanho de arquivo e de pixels?",
          "answer": "Um arquivo acima de 25 MB, ou um lado maior que 8.192 pixels, é recusado."
        },
        {
          "question": "O recorte substitui a foto original?",
          "answer": "Não. O arquivo no seu dispositivo permanece como estava. Você baixa uma imagem nova da área recortada."
        },
        {
          "question": "Posso recortar várias fotos de uma vez?",
          "answer": "Não. Esta página recorta uma imagem de cada vez."
        },
        {
          "question": "O recortador funciona em um navegador móvel?",
          "answer": "Sim. Você pode arrastar o quadro em um telefone ou tablet. O trabalho permanece nesta aba, e a foto não é enviada."
        },
        {
          "question": "Posso manter um fundo PNG transparente depois do recorte?",
          "answer": "Sim. Os pixels transparentes de dentro do quadro continuam transparentes no download. Os pixels fora do quadro são descartados."
        },
        {
          "question": "Qual é a diferença entre recortar e redimensionar?",
          "answer": "O recorte conserva uma região e descarta o restante, sem escalar essa região. O [redimensionador de imagens](/tools/image-resizer) escala a imagem inteira para uma nova largura e altura."
        },
        {
          "question": "O que a opção de proporção livre faz?",
          "answer": "Livre permite arrastar qualquer retângulo. 1:1, 4:3 e 16:9 travam o quadro nessa proporção enquanto você o move ou redimensiona."
        },
        {
          "question": "Posso recortar em uma proporção personalizada, por exemplo 9:16?",
          "answer": "Não há uma predefinição 9:16. Use Livre e modele o quadro no olho, ou recorte um quadro 16:9 ou 1:1 se essa predefinição estiver mais perto do que você precisa."
        },
        {
          "question": "O recorte baixado tem a mesma resolução da área selecionada?",
          "answer": "Sim. O download são os pixels originais de dentro do quadro, não uma cópia redimensionada ou nitidificada dessa área."
        },
        {
          "question": "O que acontece se o quadro for pequeno demais?",
          "answer": "Você ainda pode baixar uma região bem pequena, mas um recorte minúsculo tem poucos pixels e vai parecer suave se você o ampliar depois."
        },
        {
          "question": "Posso voltar e mudar o quadro depois de baixar?",
          "answer": "Sim. O arquivo original continua no seu dispositivo. Ajuste o quadro e baixe de novo, ou pressione Redefinir e escolha o arquivo outra vez."
        },
        {
          "question": "Devo recortar antes de compactar?",
          "answer": "Em geral sim, se você só precisa de parte da foto. Recorte primeiro para não compactar pixels que você vai descartar, e depois use o [compressor de imagens](/tools/image-compressor) se também precisar de um arquivo menor."
        }
      ]
    }
  },
  "image-converter": {
    "answer": "Um conversor de imagens transforma JPG em PNG ou PNG em JPG no seu dispositivo.",
    "metaDescription": "Converta JPG em PNG ou PNG em JPG no navegador, com uma cor de fundo para a transparência. Aqui não se convertem WebP, GIF nem HEIC.",
    "ui": {},
    "content": {
      "about": "Transforme um JPG em PNG, ou um PNG em JPG. Use quando um formulário ou um site aceitar só um desses formatos. Um fundo PNG transparente é preenchido com a cor que você escolhe antes de se tornar um JPEG, e o WebP não é convertido aqui.",
      "limitations": "O JPG não pode guardar um pixel transparente, então um fundo PNG transparente é preenchido com a cor que você escolhe antes de o JPEG ser gravado. O sentido inverso, JPG para PNG, conserva o dano que o JPEG já introduziu. WebP, GIF e HEIC não são convertidos aqui.",
      "howTo": [
        "Escolha uma imagem JPG ou PNG.",
        "Escolha JPG → PNG ou PNG → JPG. A ferramenta também deixa você escolher o formato de saída diretamente.",
        "Se você converter PNG em JPG, defina uma cor de fundo para os pixels transparentes. O branco é o padrão.",
        "Pressione Converter e depois baixe o arquivo."
      ],
      "examples": [
        {
          "title": "JPG para PNG",
          "body": "Útil quando você precisa de PNG para editar depois. Os artefatos JPEG que já estão no arquivo permanecem nos pixels."
        },
        {
          "title": "PNG com transparência para JPG",
          "body": "O JPG não tem canal alfa. Os pixels transparentes são preenchidos com a cor de fundo que você escolhe."
        }
      ],
      "explanation": "O JPG é um formato de foto com perda e sem transparência. O PNG é sem perda e pode incluir transparência. Converter JPG em PNG não restaura a qualidade que o JPEG já descartou. Converter PNG em JPG também é com perda. A conversão usa o canvas do navegador e permanece no seu dispositivo.",
      "faqs": [
        {
          "question": "O conversor de imagens é grátis?",
          "answer": "Sim. Transformar um JPG em PNG, ou um PNG em JPG, é grátis aqui, sem cadastro."
        },
        {
          "question": "PNG para JPG é sem perda?",
          "answer": "Não. O JPEG é um formato com perda. Detalhes finos e bordas nítidas podem mudar, e a transparência vira um fundo sólido."
        },
        {
          "question": "O arquivo é enviado?",
          "answer": "Não. A conversão de JPG e PNG permanece nesta página. O arquivo não é enviado a um servidor."
        },
        {
          "question": "Devo usar PNG ou JPG?",
          "answer": "Use JPG para fotos, quando um arquivo menor importa mais do que bordas perfeitas. Use PNG para logotipos, capturas de tela, texto e tudo que precise de um fundo transparente."
        },
        {
          "question": "Por que o meu fundo transparente virou branco?",
          "answer": "O JPG não pode guardar transparência, então os pixels transparentes são preenchidos com uma cor de fundo quando você converte PNG em JPG. O branco é o padrão, e você pode escolher outra cor."
        },
        {
          "question": "Quais conversões estão disponíveis?",
          "answer": "Esta página transforma um JPG em PNG, ou um PNG em JPG. WebP, GIF e HEIC não são convertidos aqui."
        },
        {
          "question": "Como escolho a cor de fundo para um PNG transparente?",
          "answer": "Quando você converte PNG em JPG, escolha primeiro uma cor de preenchimento. O JPG não pode guardar um pixel transparente, então essa cor é gravada atrás de qualquer área clara antes de o JPEG ser salvo."
        },
        {
          "question": "Converter um JPG em PNG restaura a qualidade perdida?",
          "answer": "Não. JPG para PNG conserva o dano que o JPEG já introduziu. O PNG é uma cópia sem perda da imagem como ela está agora, não uma recuperação da foto original."
        },
        {
          "question": "Posso converter WebP, GIF ou HEIC aqui?",
          "answer": "Não. Esses formatos não são convertidos nesta página. Para um JPG, PNG ou WebP que só precise de um arquivo menor, use o [compressor de imagens](/tools/image-compressor)."
        },
        {
          "question": "O conversor funciona em um celular?",
          "answer": "Sim. Você pode escolher um JPG ou PNG e baixar o outro formato em um navegador móvel. O arquivo não é enviado."
        },
        {
          "question": "A conversão substitui o arquivo original?",
          "answer": "Não. Você baixa um arquivo novo. O original permanece no seu dispositivo."
        },
        {
          "question": "Posso converter várias imagens de uma vez?",
          "answer": "Não. Esta página converte uma imagem de cada vez."
        },
        {
          "question": "Quais são os limites de tamanho e de pixels?",
          "answer": "Um arquivo acima de 25 MB, ou um lado maior que 8.192 pixels, é recusado, assim como os formatos que esta página não abre."
        },
        {
          "question": "Quando devo converter uma captura de tela para PNG?",
          "answer": "Se a captura já for um PNG, em geral você deve deixá-la como PNG para o texto e as bordas planas permanecerem nítidos. Convertê-la para JPG pode acrescentar artefatos em volta do texto. O compressor também explica isso quando uma captura é salva como JPEG."
        },
        {
          "question": "Posso converter uma foto para PNG para deixá-la menor?",
          "answer": "Em geral, não. Um JPG fotográfico costuma virar um PNG maior porque o PNG é sem perda. Use o [compressor de imagens](/tools/image-compressor) se quiser uma foto menor."
        },
        {
          "question": "Há um controle de qualidade para PNG em JPG?",
          "answer": "A conversão grava um JPEG da imagem depois que quaisquer pixels transparentes são preenchidos. Use o [compressor de imagens](/tools/image-compressor) se depois você quiser ajustar a qualidade do JPEG ou do WebP."
        },
        {
          "question": "Posso manter o mesmo nome de arquivo depois de converter?",
          "answer": "O download usa a extensão do formato novo. Você pode renomear o arquivo no seu dispositivo depois de salvá-lo."
        },
        {
          "question": "Uma conversão de PNG em JPG também redimensiona a imagem?",
          "answer": "Não. A largura e a altura permanecem as mesmas. Para mudar o tamanho em pixels, use o [redimensionador de imagens](/tools/image-resizer)."
        },
        {
          "question": "Por que um JPG convertido pode parecer um pouco diferente?",
          "answer": "O JPEG é com perda, então bordas finas podem mudar. Um PNG transparente também ganha a cor de preenchimento que você escolheu em cada pixel que antes era claro."
        },
        {
          "question": "Isto é diferente de mudar a extensão do arquivo à mão?",
          "answer": "Sim. Renomear um arquivo .png para .jpg não converte os pixels. Esta página de fato recodifica a imagem no formato que você escolhe."
        }
      ]
    }
  },
  "pdf-to-jpg": {
    "answer": "PDF para JPG desenha as páginas PDF escolhidas como imagens JPEG no seu navegador, sem enviar o documento.",
    "metaDescription": "Converta páginas de PDF em imagens JPG no navegador. Escolha a primeira página, algumas páginas ou todas, com um limite de 20 MB e 40 páginas.",
    "ui": {},
    "content": {
      "about": "PDF para JPG transforma páginas de PDF em imagens JPG, PNG ou WebP no seu navegador. Você pode exportar a primeira página, as páginas que marcar, um intervalo como 1-3, 5, ou todas as páginas. Use para uma miniatura de capa ou um conjunto de imagens das páginas. Se o PDF estiver protegido por senha, você pode digitá-la nesta aba; ela não é enviada a lugar nenhum. A renderização para em 20 MB, 40 páginas e um lado mais longo de 4.096 pixels. Esta página desenha cada página escolhida como uma imagem. Ela não extrai as fotos individuais embutidas no arquivo.",
      "limitations": "Você pode baixar JPG, PNG ou WebP, e um ZIP quando mais de uma página é convertida. Um arquivo protegido por senha pode ser aberto com a senha digitada nesta aba; a senha não é enviada a lugar nenhum. A renderização para em 20 MB, 40 páginas e um lado mais longo de 4.096 pixels. A resolução padrão é 108 DPI (1,5×) e é reduzida quando uma página ultrapassaria esse lado. As páginas que você deixar desmarcadas não são desenhadas. As miniaturas cobrem as primeiras 12 páginas. O resultado é uma imagem de cada página, não o texto extraído nem as fotos originais embutidas no arquivo.",
      "howTo": [
        "Escolha um PDF no seu dispositivo. O arquivo permanece nesta aba do navegador.",
        "Confira o nome do arquivo, o tamanho e o número de páginas. As prévias em miniatura aparecem para as primeiras 12 páginas. As páginas seguintes ainda podem ser convertidas.",
        "Escolha a primeira página, as páginas selecionadas, um intervalo de páginas ou todas as páginas. Escolha JPG, PNG ou WebP, e uma resolução de 72, 108, 150 ou 300 DPI. 108 DPI é o padrão e corresponde à escala 1,5× anterior. Para JPG e WebP, defina a qualidade se precisar de uma imagem menor ou mais nítida. O controle começa em 80. PNG é sem perda, então a qualidade não se aplica.",
        "Pressione Converter e depois baixe uma página ou, quando mais de uma página estiver pronta, Baixar tudo em ZIP. Cada arquivo é nomeado a partir do nome do PDF mais o número da página, por exemplo notas-page-1.jpg."
      ],
      "examples": [
        {
          "title": "Um arquivo de 3 páginas, todas as páginas",
          "body": "Abra um PDF de 3 páginas e escolha todas as páginas. Converter desenha três imagens, uma por página, nomeadas com -page-1, -page-2 e -page-3. Você pode baixá-las como ZIP. A resolução padrão é 108 DPI, a mesma escala 1,5× de antes. Uma página US Letter tem 612 por 792 pontos. Em 108 DPI isso dá 918 por 1.188 pixels. O lado mais longo, 1.188, está abaixo do teto de 4.096 pixels, então a escala permanece 1,5. A qualidade 80 codifica cada JPEG em 0,80."
        },
        {
          "title": "Só a primeira página",
          "body": "Escolha a primeira página. A ferramenta desenha a página 1 e ignora as demais, o que usa menos memória do que converter todas. A faixa de miniaturas ainda mostra até as primeiras 12 páginas para você ver a capa. O download é uma imagem, não um ZIP."
        },
        {
          "title": "Um arquivo bloqueado ou grande demais",
          "body": "Um PDF protegido por senha pede que você digite a senha nesta aba. A senha não é enviada a lugar nenhum. Se a senha estiver errada, a página avisa. Um arquivo acima de 20 MB é recusado. Um PDF com mais de 40 páginas é recusado com uma mensagem para dividi-lo primeiro. Uma página que ultrapassaria 4.096 pixels no lado longo na DPI escolhida é reduzida para o lado longo permanecer em 4.096."
        }
      ],
      "explanation": "As páginas são renderizadas localmente com o PDF.js, desenhadas em um canvas e salvas como JPG, PNG ou WebP. Não há envio a uma API de conversão. A resolução padrão é 108 DPI, a mesma escala 1,5× de antes. Você também pode escolher 72, 150 ou 300 DPI. Se o lado mais longo nessa escala passasse de 4.096 pixels, a escala é reduzida para o lado mais longo ficar em 4.096. Para JPG e WebP, a qualidade é o controle dividido por 100. PNG é sem perda. As páginas não selecionadas não são desenhadas. Um ZIP é oferecido quando mais de uma página é convertida.",
      "sections": [
        {
          "heading": "O que você obtém é uma imagem da página",
          "paragraphs": [
            "O JPEG é um retrato da página desenhada. O texto nessa imagem não é uma camada de texto. Você não consegue selecionar uma frase no JPG como faria no PDF. Se precisar das palavras, use PDF para texto em um arquivo que de fato contenha texto.",
            "Uma página digitalizada já é uma imagem dentro do PDF. Convertê-la gera outra imagem. Isso não nitidifica uma digitalização borrada e não executa reconhecimento óptico de caracteres. Imagem para texto é outra ferramenta."
          ]
        },
        {
          "heading": "Quais páginas são exportadas",
          "paragraphs": [
            "Primeira página exporta só a página 1. Todas as páginas exporta cada página, até o teto de 40. Páginas selecionadas exporta as caixas que você marcar. O intervalo de páginas aceita uma lista como 1-3, 5. Se nenhum dos números selecionados existir, ou se o intervalo estiver vazio ou inválido, a página avisa.",
            "As miniaturas são desenhadas para as primeiras 12 páginas em uma escala menor para você escolher. Se o PDF tiver mais páginas, a nota abaixo da faixa diz que você ainda pode converter as páginas seguintes. Você não precisa de uma miniatura para incluir uma página posterior na seleção."
          ]
        },
        {
          "heading": "Qualidade, memória e tamanho da página",
          "paragraphs": [
            "A qualidade começa em 80. Valores menores em geral geram um JPEG menor e uma imagem mais suave. Valores maiores conservam mais detalhe e em geral geram um arquivo maior. A página não prevê o tamanho em bytes antes de Converter terminar.",
            "Renderizar muitas páginas grandes pode esgotar a memória e travar a aba. Por isso os tetos são 20 MB e 40 páginas. Divida um PDF maior com o divisor de PDF e depois converta um arquivo menor. Uma página enorme é reduzida em vez de ser desenhada além de 4.096 pixels no lado longo."
          ]
        },
        {
          "heading": "Privacidade",
          "paragraphs": [
            "O PDF é aberto nesta aba. As páginas selecionadas são renderizadas aqui. O arquivo e qualquer senha que você digitar não são enviados ao Tools Star Hub. Os downloads permanecem no seu dispositivo. A análise, se você a aceitar, não recebe o PDF, a senha nem as imagens."
          ]
        }
      ],
      "tips": [
        "Converta a primeira página quando você só precisar da capa. É mais rápido do que renderizar o arquivo inteiro.",
        "Para uma página carta padrão, espere 918 por 1.188 pixels na escala padrão. Outros tamanhos de página são escalados a partir do próprio tamanho em pontos.",
        "Se o PDF estiver bloqueado, digite a senha nesta aba. Ela permanece no navegador e não é enviada a lugar nenhum.",
        "Se você precisar das palavras, e não de uma imagem, vá para PDF para texto. Um JPEG não entrega um parágrafo selecionável."
      ],
      "faqs": [
        {
          "question": "Como converto um PDF de 3 páginas em JPG?",
          "answer": "Escolha o PDF, selecione todas as páginas e pressione Converter. Você obtém três arquivos de imagem, um por página, e pode baixá-los como ZIP. Uma página US Letter em 108 DPI padrão tem 918 por 1.188 pixels. A qualidade começa em 80 para JPG e WebP."
        },
        {
          "question": "Posso converter só algumas páginas?",
          "answer": "Sim. Escolha a primeira página para a página 1, páginas selecionadas e marque as que precisar, ou informe um intervalo como 1-3, 5. As páginas desmarcadas não são desenhadas. As prévias mostram as primeiras 12 páginas. As páginas seguintes ainda podem ser convertidas."
        },
        {
          "question": "Posso abrir um PDF protegido por senha?",
          "answer": "Sim, se você souber a senha. Digite-a nesta aba para desbloquear o arquivo. A senha não é enviada a lugar nenhum. Se a senha estiver errada, a página avisa e você pode tentar de novo."
        },
        {
          "question": "Por que existe um limite de páginas ou de tamanho?",
          "answer": "Renderizar muitas páginas grandes pode esgotar a memória. Esta ferramenta para em 20 MB e 40 páginas. O lado mais longo de uma imagem tem teto de 4.096 pixels. Divida um PDF maior primeiro."
        },
        {
          "question": "Isto extrai o texto?",
          "answer": "Não. Cada página vira uma imagem JPEG. O texto nessa imagem não é selecionável. Use PDF para texto quando precisar das palavras de um PDF que contenha uma camada de texto."
        },
        {
          "question": "O PDF é enviado?",
          "answer": "Não. As páginas selecionadas são renderizadas em JPEG nesta aba. O PDF não é enviado a lugar nenhum."
        },
        {
          "question": "O conversor de PDF para JPG é grátis?",
          "answer": "Sim. Transformar páginas de PDF em imagens JPEG é grátis, e não é preciso ter conta."
        },
        {
          "question": "Posso baixar PNG ou WebP em vez de JPEG?",
          "answer": "Sim. Escolha JPG, PNG ou WebP antes de converter. Quando mais de uma página estiver pronta, você pode baixar todas como ZIP. Resultados de uma só página são baixados como esse arquivo."
        },
        {
          "question": "Isto extrai as fotos que estavam embutidas no PDF?",
          "answer": "Não. Cada resultado é uma imagem da página inteira, não um conjunto de imagens retiradas do arquivo."
        },
        {
          "question": "O conversor funciona em um navegador móvel?",
          "answer": "Sim. Você pode abrir um PDF e baixar os JPEGs das páginas em um telefone ou tablet. O arquivo permanece nesta aba e não é enviado."
        },
        {
          "question": "A conversão altera o PDF original?",
          "answer": "Não. O PDF no seu dispositivo permanece inalterado. Você baixa arquivos JPEG novos."
        },
        {
          "question": "Quantas páginas posso pré-visualizar antes de exportar?",
          "answer": "As miniaturas cobrem as primeiras 12 páginas. Você ainda pode exportar a primeira página, as que marcar ou todas, dentro do limite de 40 páginas."
        },
        {
          "question": "Em que escala os JPEGs são renderizados?",
          "answer": "O padrão é 108 DPI, a mesma escala 1,5× de antes. Você também pode escolher 72, 150 ou 300 DPI. A escala é reduzida quando uma página ultrapassaria um lado mais longo de 4.096 pixels."
        },
        {
          "question": "Posso converter vários PDFs de uma vez?",
          "answer": "Não. Esta página converte um PDF de cada vez."
        },
        {
          "question": "Um PDF digitalizado vira uma fotografia nítida?",
          "answer": "Você obtém uma imagem de cada página como ela aparece, inclusive uma digitalização. Isto não nitidifica uma digitalização borrada nem extrai o texto. Para palavras de uma camada de texto, use [PDF para texto](/tools/pdf-to-text)."
        },
        {
          "question": "Por que uma página longa pode parecer menor do que eu esperava?",
          "answer": "A renderização para em um lado mais longo de 4.096 pixels, e a escala 1,5 é reduzida quando necessário para a página permanecer dentro desse lado."
        },
        {
          "question": "Posso escolher uma qualidade JPEG?",
          "answer": "Sim. Para JPG e WebP, um controle de qualidade começa em 80. Valores menores em geral geram um arquivo menor. PNG é sem perda, então o controle não se aplica. Não há tamanho-alvo nesta página."
        },
        {
          "question": "E se eu só precisar da capa?",
          "answer": "Exporte a primeira página, ou marque só a página 1 se estiver escolhendo as páginas à mão, e depois baixe esse JPEG."
        },
        {
          "question": "Campos de formulário e anotações entram na imagem?",
          "answer": "O JPEG é uma imagem da página renderizada. O que não for desenhado nessa renderização não aparece. Isto não é uma exportação dos valores do formulário."
        },
        {
          "question": "O que acontece se o arquivo for maior que 20 MB?",
          "answer": "A renderização para em 20 MB, 40 páginas e um lado mais longo de 4.096 pixels. Um arquivo maior, ou com mais páginas, é recusado."
        }
      ]
    }
  },
  "color-picker": {
    "answer": "Um seletor de cores permite escolher uma cor visualmente ou informar um valor, e depois copiar hex, RGB e HSL.",
    "metaDescription": "Escolha uma cor com o seletor do navegador ou digite um valor hexadecimal, e copie os valores HEX, RGB ou HSL no seu dispositivo.",
    "ui": {},
    "content": {
      "about": "Escolha uma cor com o controle de cor do navegador, ou digite um valor hexadecimal, e copie HEX, RGB e HSL. Designers que precisam de uma cor opaca para CSS usam isto quando não precisam amostrar uma foto. O alfa não está disponível, e amostrar pixels de uma imagem é o analisador de cores da imagem.",
      "limitations": "O controle nativo fornece uma cor sRGB opaca. O alfa não está disponível, e um pixel não é amostrado de uma fotografia. HEX, RGB e HSL são três escritas dessa mesma cor.",
      "howTo": [
        "Use o campo de cor nativo, ou digite um valor hexadecimal.",
        "Copie HEX, RGB ou HSL.",
        "Redefinir devolve o seletor ao azul padrão."
      ],
      "examples": [
        {
          "title": "HEX",
          "body": "#2563eb é uma cor hexadecimal de seis dígitos: dois dígitos para o vermelho, dois para o verde e dois para o azul."
        },
        {
          "title": "RGB",
          "body": "A mesma cor é rgb(37, 99, 235)."
        },
        {
          "title": "HSL",
          "body": "HSL descreve matiz, saturação e luminosidade. É útil quando você quer clarear ou saturar uma cor."
        }
      ],
      "explanation": "HEX é uma cor CSS compacta escrita em hexadecimal. RGB lista os mesmos canais como números decimais de 0 a 255. HSL usa matiz (0–360), saturação e luminosidade. O seletor usa o campo de cor nativo do navegador, então a interface de cor do sistema aparece em telefones e computadores. Os valores são convertidos localmente.",
      "faqs": [
        {
          "question": "O seletor de cores é grátis?",
          "answer": "Sim. Escolher uma cor e copiar HEX, RGB ou HSL não exige pagamento nem conta."
        },
        {
          "question": "Isto usa uma biblioteca grande de seletor de cores?",
          "answer": "Não. Usa o campo de cor nativo do navegador mais a análise de hex nesta página."
        },
        {
          "question": "A minha entrada é enviada a um servidor?",
          "answer": "Não. A cor que você escolhe permanece nesta aba. Ela não é enviada e não é gravada no armazenamento local."
        },
        {
          "question": "Qual é a diferença entre HEX, RGB e HSL?",
          "answer": "Eles descrevem a mesma cor de formas diferentes. HEX e RGB dão as quantidades de vermelho, verde e azul. HSL dá matiz, saturação e luminosidade, o que é mais fácil de ajustar à mão."
        },
        {
          "question": "Como uso uma cor escolhida no CSS?",
          "answer": "Copie o valor e cole em uma propriedade CSS, por exemplo color: #1E90FF; ou background: rgb(30, 144, 255);."
        },
        {
          "question": "Posso escolher uma cor a partir de uma fotografia?",
          "answer": "Não. Esta página não amostra um pixel de uma foto. Para listar as cores principais de uma imagem, use o [analisador de cores da imagem](/tools/image-color-analyzer)."
        },
        {
          "question": "Posso escolher uma cor transparente ou semitransparente?",
          "answer": "Não. O controle nativo fornece uma cor sRGB opaca. O alfa não está disponível."
        },
        {
          "question": "Como digito um valor hexadecimal que eu já tenho?",
          "answer": "Informe o código hex, com ou sem o #, no campo hexadecimal. O seletor e os valores RGB e HSL se atualizam para essa mesma cor."
        },
        {
          "question": "O seletor de cores funciona em um celular?",
          "answer": "Sim. Você pode usar o controle de cor do navegador ou digitar um valor hexadecimal em um telefone ou tablet. Nada é enviado."
        },
        {
          "question": "HEX, RGB e HSL são cores diferentes ou a mesma cor?",
          "answer": "São três escritas da mesma cor opaca. Copie o formato que a sua folha de estilos ou ferramenta de design espera."
        },
        {
          "question": "Posso copiar os três formatos de uma vez?",
          "answer": "Você pode copiar HEX, RGB ou HSL a partir dos valores mostrados. Copie cada formato de que precisar; eles continuam sendo a mesma cor."
        },
        {
          "question": "Isto converte hex em RGB só nesse sentido, ou também o contrário?",
          "answer": "Escolher ou digitar uma cor atualiza HEX, RGB e HSL juntos. Se você precisar principalmente converter um código hex digitado, a ferramenta [Hex para RGB](/tools/hex-to-rgb) também está disponível."
        },
        {
          "question": "Posso guardar uma paleta de várias cores?",
          "answer": "Esta página trabalha com uma cor de cada vez e não armazena uma paleta. Copie os valores de que precisar para as suas anotações ou para o CSS."
        },
        {
          "question": "A cor vai parecer a mesma em todas as telas?",
          "answer": "Os valores são sRGB. Telas e perfis de cor diferentes ainda podem mudar a aparência. Para contraste com texto, use o [verificador de contraste de cores](/tools/color-contrast-checker)."
        },
        {
          "question": "Posso informar RGB ou HSL diretamente?",
          "answer": "O campo digitável é o hexadecimal. Você também pode usar o controle de cor do navegador. RGB e HSL são mostrados para você copiá-los depois que a cor estiver definida."
        },
        {
          "question": "A saída hexadecimal é em maiúsculas ou minúsculas?",
          "answer": "Copie a string hexadecimal como a página a mostra. O CSS trata #1e90ff e #1E90FF como a mesma cor."
        },
        {
          "question": "Isto funciona offline depois que a página já carregou?",
          "answer": "O seletor roda nesta aba e não envia a cor a um servidor. Você precisa de conexão para abrir a página."
        },
        {
          "question": "Posso obter uma variável CSS a partir da cor escolhida?",
          "answer": "Não há um gerador de variáveis aqui. Copie o valor HEX, RGB ou HSL e cole em uma variável na sua folha de estilos, por exemplo --accent: #1E90FF;."
        },
        {
          "question": "Por que não há um conta-gotas para a tela?",
          "answer": "Esta página usa o campo de cor do navegador e um campo hexadecimal. Ela não captura pixels de outras janelas nem de uma foto."
        },
        {
          "question": "Posso verificar se duas cores atendem ao contraste WCAG aqui?",
          "answer": "Não. Copie as cores e teste-as no [verificador de contraste de cores](/tools/color-contrast-checker), que informa a razão WCAG 2 e os resultados AA ou AAA."
        }
      ]
    }
  },
  "image-to-pdf": {
    "answer": "Imagem para PDF coloca imagens JPG ou PNG em páginas de um PDF no seu navegador e depois baixa o arquivo.",
    "metaDescription": "Una até 20 imagens JPG ou PNG em um único PDF, na ordem que você escolher. WebP não é aceito. Lados com mais de 2.000 pixels são reduzidos.",
    "ui": {},
    "content": {
      "about": "Transforme até 20 imagens JPG ou PNG em um só PDF, na ordem que você definir. Use para um conjunto de digitalizações ou capturas de tela que devem virar um único arquivo. WebP não entra, um lado maior que 2.000 pixels é reduzido, e Preencher pode recortar a imagem para cobrir a página.",
      "limitations": "JPG e PNG são aceitos, até 20 imagens. WebP não é. Um lado maior que 2.000 pixels é reduzido antes de ser embutido. O tamanho da página é A4, Carta ou o próprio tamanho da imagem, e Preencher pode recortar a imagem para cobrir a página.",
      "howTo": [
        "Adicione uma ou mais imagens JPG ou PNG. Você pode arrastar os arquivos para a área de soltar.",
        "Reordene a lista para as páginas aparecerem na ordem que você quiser. Remova qualquer imagem de que não precise.",
        "Escolha o tamanho da página, a orientação, a margem e como cada imagem deve caber.",
        "Crie o PDF e depois baixe-o. Nada é enviado."
      ],
      "examples": [
        {
          "title": "Um conjunto de digitalizações",
          "body": "Solte vários JPGs, mova a capa para o topo, escolha A4 e Ajustar à página e depois baixe."
        },
        {
          "title": "Capturas de tela no tamanho original",
          "body": "Escolha Original / automático para cada página acompanhar a imagem. Imagens muito grandes são reduzidas primeiro para o PDF permanecer manejável."
        }
      ],
      "explanation": "Cada imagem selecionada vira uma página. Ajustar mantém a imagem inteira visível. Preencher cobre a página e pode recortar. O tamanho original usa as dimensões da imagem quando elas cabem; caso contrário, volta para ajustar. O processamento permanece neste navegador; lados grandes são reduzidos antes de embutir para o arquivo não inflar.",
      "faqs": [
        {
          "question": "A ferramenta de imagem para PDF é grátis?",
          "answer": "Sim. Você pode transformar imagens JPG e PNG em um PDF aqui sem pagar e sem se cadastrar."
        },
        {
          "question": "As minhas fotos são enviadas?",
          "answer": "Não. As imagens são lidas e gravadas em um PDF no seu navegador. Elas não são enviadas ao Tools Star Hub."
        },
        {
          "question": "Por que a minha imagem foi redimensionada?",
          "answer": "Lados maiores que 2.000 pixels são reduzidos antes de serem embutidos. Isso mantém o uso de memória e o tamanho do PDF razoáveis."
        },
        {
          "question": "A minha entrada é enviada a um servidor?",
          "answer": "Não. As imagens são montadas em um PDF nesta aba. Elas não são enviadas a um servidor nem gravadas no armazenamento local."
        },
        {
          "question": "Como converto imagens em um PDF no navegador?",
          "answer": "Adicione um ou mais arquivos JPG ou PNG, defina o tamanho da página e as opções de encaixe e depois baixe o PDF. As páginas seguem a ordem que você organizou na lista."
        },
        {
          "question": "Quais formatos de imagem podem virar um PDF?",
          "answer": "Esta página aceita JPG e PNG, até 20 imagens. WebP não é aceito. Se um formato não abrir, converta-o primeiro para JPG ou PNG e depois monte o PDF."
        },
        {
          "question": "Posso reorganizar as páginas antes de baixar?",
          "answer": "Sim, quando a ferramenta mostra uma lista que pode ser reordenada. Arraste as imagens para a ordem que você quiser para o PDF acompanhar essa sequência."
        },
        {
          "question": "Qual é a diferença entre ajustar e preencher em uma página?",
          "answer": "Ajustar mantém a imagem inteira visível e pode deixar margens. Preencher cobre a página e pode recortar as bordas. Escolha ajustar para documentos e preencher para fotos que devam ocupar a página inteira."
        },
        {
          "question": "Fotos grandes serão reduzidas no PDF?",
          "answer": "Imagens muito grandes, com um lado maior que 2.000 pixels, são reduzidas para o arquivo permanecer manejável. Confira a nota da ferramenta abaixo da prévia se um limite de tamanho tiver sido aplicado."
        },
        {
          "question": "A transparência do PNG permanece transparente no PDF?",
          "answer": "A transparência muitas vezes é achatada sobre um fundo branco em conversores simples. Exporte um JPG com um fundo se precisar de uma página opaca com garantia."
        },
        {
          "question": "Posso misturar imagens retrato e paisagem?",
          "answer": "Sim. Cada imagem vira a própria página com a sua orientação, a menos que você force um único tamanho de página que gire ou enquadre o conteúdo com faixas."
        },
        {
          "question": "Imagem para PDF é a mesma coisa que digitalizar um documento em papel?",
          "answer": "Não. Isto monta um PDF a partir de arquivos de imagem que já existem. Um scanner cria essas imagens primeiro; você ainda pode combinar aqui fotos de páginas tiradas no celular depois."
        },
        {
          "question": "Quantas fotos um PDF pode ter antes de o navegador ter dificuldade?",
          "answer": "A memória do navegador define um teto prático. Esta página aceita até 20 imagens. Dezenas de fotos de celular costumam funcionar; centenas de fotos em alta resolução precisariam de vários PDFs menores, fora do limite desta página."
        },
        {
          "question": "Quais tamanhos de página são típicos para PDFs de fotos?",
          "answer": "A4 e Carta são comuns para impressão. Tamanhos quadrados ou personalizados ajudam em livros de fotos; use o tamanho que a sua impressora ou o cliente espera."
        },
        {
          "question": "O texto dentro de uma foto será selecionável no PDF?",
          "answer": "Não por padrão. Uma foto de texto continua sendo uma imagem. Você precisa de OCR em outra ferramenta se quiser texto pesquisável."
        },
        {
          "question": "Posso proteger com senha o PDF que esta página cria?",
          "answer": "Este conversor se concentra em montar páginas a partir de imagens. Acrescente uma senha depois em um editor de PDF se precisar de uma."
        },
        {
          "question": "Por que o meu PDF ficou muito maior que as fotos?",
          "answer": "A incorporação sem compactação e a alta contagem de pixels inflacionam o tamanho. Compacte o PDF depois ou reduza as imagens antes da conversão."
        },
        {
          "question": "Os detalhes EXIF da câmera permanecem no PDF?",
          "answer": "Muitos conversores removem ou ignoram os metadados da foto ao embuti-la. Não conte com este fluxo para preservar o EXIF."
        },
        {
          "question": "Posso converter uma única captura de tela em PDF?",
          "answer": "Sim. Escolha uma imagem e baixe um PDF de uma página — útil para recibos e mensagens de erro que você queira arquivar."
        }
      ]
    }
  },
  "pdf-merger": {
    "answer": "Um unidor de PDF combina vários arquivos PDF em um só documento, na ordem que você definir, no seu dispositivo.",
    "metaDescription": "Una de 2 a 10 arquivos PDF na ordem que você indicar e baixe o documento combinado no seu dispositivo, com um limite de 80 páginas.",
    "ui": {},
    "content": {
      "about": "Junte de dois a dez PDFs na ordem que você organizar, até 80 páginas no total. Use quando uma capa e um relatório devem virar um único arquivo. Um PDF protegido por senha não abre, e os formulários não são achatados.",
      "limitations": "São necessários pelo menos dois PDFs, e no máximo 10. A soma das páginas precisa ficar em 80 ou menos. Um arquivo protegido por senha não abre. Os formulários não são achatados, e a criptografia não é removida.",
      "howTo": [
        "Adicione dois ou mais arquivos PDF.",
        "Confirme o nome, o tamanho e o número de páginas de cada arquivo.",
        "Reordene a lista se precisar. O arquivo unido segue esta ordem.",
        "Una e baixe. PDFs protegidos por senha não podem ser abertos."
      ],
      "examples": [
        {
          "title": "Capa mais relatório",
          "body": "Adicione capa.pdf e depois relatorio.pdf, ou use Para cima/Para baixo para trocá-los, e então una."
        },
        {
          "title": "Só um arquivo",
          "body": "Um único PDF não precisa ser unido. Adicione um segundo arquivo primeiro."
        }
      ],
      "explanation": "O unidor copia as páginas de cada documento na ordem da lista, usando uma biblioteca de PDF local. Ele não achata formulários nem remove criptografia. A soma das páginas tem um teto para a aba permanecer utilizável.",
      "faqs": [
        {
          "question": "O unidor de PDF é grátis?",
          "answer": "Sim. Combinar PDFs neste navegador não exige pagamento nem conta."
        },
        {
          "question": "Posso unir um PDF bloqueado?",
          "answer": "Não, se ele estiver protegido por senha. Desbloqueie o arquivo primeiro em um leitor de PDF."
        },
        {
          "question": "A minha entrada é enviada a um servidor?",
          "answer": "Não. Os arquivos são unidos nesta aba. Eles não são enviados e não ficam no armazenamento local."
        },
        {
          "question": "Como escolho a ordem dos PDFs?",
          "answer": "Adicione de dois a dez PDFs e depois organize-os na ordem em que as páginas devem aparecer. O arquivo unido segue essa lista."
        },
        {
          "question": "Quantos arquivos e páginas posso unir?",
          "answer": "Você precisa de pelo menos dois PDFs e de no máximo 10. A soma das páginas precisa ficar em 80 ou menos."
        },
        {
          "question": "Unir funciona em um celular?",
          "answer": "Sim. Você pode adicionar PDFs e baixar o arquivo combinado em um navegador móvel. Os arquivos não são enviados a um servidor."
        },
        {
          "question": "A união altera os PDFs originais no meu dispositivo?",
          "answer": "Não. Cada arquivo de origem permanece como estava. Você baixa um PDF novo e combinado."
        },
        {
          "question": "Posso unir o mesmo PDF mais de uma vez?",
          "answer": "Você pode adicionar os arquivos na ordem de que precisar. A página ainda aplica os limites de 10 arquivos e 80 páginas à combinação."
        },
        {
          "question": "Os formulários preenchíveis continuam como formulários depois da união?",
          "answer": "Os formulários não são achatados, e esta página não promete que os campos do formulário continuarão funcionando no arquivo combinado. A criptografia não é removida."
        },
        {
          "question": "O que acontece se um arquivo estiver protegido por senha?",
          "answer": "Um arquivo protegido por senha não abre, então não pode ser incluído. Remova a senha em outra ferramenta primeiro, se você tiver permissão, e depois adicione o arquivo aqui."
        },
        {
          "question": "Posso acrescentar uma capa a um relatório?",
          "answer": "Sim. Adicione primeiro o PDF da capa e o relatório depois, e então una, desde que a soma das páginas fique em 80 ou menos."
        },
        {
          "question": "Há um limite de tamanho de arquivo além do limite de páginas?",
          "answer": "Os limites rígidos desta página são de dois a dez PDFs e 80 páginas no total, além da recusa de arquivos protegidos por senha. Se um arquivo não abrir, confira primeiro esses limites."
        },
        {
          "question": "Posso remover um arquivo antes de unir?",
          "answer": "Sim. Tire-o da lista, reorganize o que restar e una quando ainda houver pelo menos dois PDFs."
        },
        {
          "question": "Unir reduz o tamanho do arquivo?",
          "answer": "Não. Esta página junta os arquivos; ela não os compacta. Para tentar reduzir um PDF, use o [compressor de PDF](/tools/pdf-compressor)."
        },
        {
          "question": "Posso dividir o arquivo unido depois?",
          "answer": "Sim. Baixe o PDF combinado e depois abra-o no [divisor de PDF](/tools/pdf-splitter) para copiar as páginas escolhidas para um arquivo novo."
        },
        {
          "question": "Os favoritos ou os sumários de cada arquivo permanecem intactos?",
          "answer": "Esta página une o conteúdo das páginas na ordem que você organizar. Ela não promete conservar favoritos, sumários ou anexos dos arquivos de origem."
        },
        {
          "question": "E se a soma das páginas passar de 80?",
          "answer": "A união é recusada até a combinação ficar em 80 páginas ou menos. Divida um arquivo longo primeiro, ou remova alguns PDFs da lista."
        },
        {
          "question": "Posso unir PDFs digitalizados com PDFs nascidos digitais?",
          "answer": "Sim, se cada arquivo abrir e as contagens de páginas e de arquivos permanecerem dentro dos limites. Uma digitalização é tratada como páginas, não como fonte de texto extraível."
        },
        {
          "question": "Como começo de novo?",
          "answer": "Limpe a lista e adicione os PDFs outra vez na ordem que você quiser. Nada é guardado da tentativa anterior, a menos que você ainda tenha os arquivos no seu dispositivo."
        },
        {
          "question": "O PDF unido é baixado como um só arquivo?",
          "answer": "Sim. O resultado é um único PDF que você pode salvar no seu dispositivo."
        }
      ]
    }
  },
  "pdf-splitter": {
    "answer": "Um divisor de PDF extrai as páginas ou os intervalos escolhidos para um PDF novo, sem enviar o original.",
    "metaDescription": "Copie as páginas escolhidas para um PDF novo com intervalos como 1-3,6. O original não muda. Um intervalo invertido é recusado e a cópia admite até 80 páginas.",
    "ui": {},
    "content": {
      "about": "Copie as páginas escolhidas para um PDF novo, usando intervalos como 1-3,6. O arquivo original no seu dispositivo permanece como estava. Um intervalo invertido, por exemplo 5-2, é recusado, e o arquivo novo pode ter no máximo 80 páginas.",
      "limitations": "A numeração das páginas começa em 1. Um intervalo invertido, por exemplo 5-2, é recusado, assim como uma página que não está no arquivo. O PDF novo pode ter no máximo 80 páginas. O arquivo original no seu dispositivo permanece inalterado.",
      "howTo": [
        "Escolha um PDF. O número de páginas aparece depois que ele carrega.",
        "Informe páginas como 1-3, 2,5,7 ou 1-3,6,9-11, ou marque páginas individuais.",
        "Crie um PDF novo que contenha só essas páginas e depois baixe-o."
      ],
      "examples": [
        {
          "title": "Um intervalo contínuo",
          "body": "1-3 copia as páginas 1, 2 e 3 nessa ordem."
        },
        {
          "title": "Intervalos mistos",
          "body": "1-3,6,9-11 copia 1, 2, 3, 6, 9, 10 e 11. As duplicatas são ignoradas, conservando a primeira ocorrência."
        }
      ],
      "explanation": "A numeração das páginas começa em 1. Intervalos invertidos, como 5-2, são recusados. Tokens vazios e valores fora do documento são recusados. O arquivo novo é montado localmente; o original não é enviado.",
      "faqs": [
        {
          "question": "O divisor de PDF é grátis?",
          "answer": "Sim. Copiar as páginas escolhidas para um PDF novo é grátis, sem cadastro."
        },
        {
          "question": "Isto apaga páginas do meu original?",
          "answer": "Não. Ele monta um PDF separado. O arquivo original permanece no seu dispositivo."
        },
        {
          "question": "A minha entrada é enviada a um servidor?",
          "answer": "Não. As páginas selecionadas são copiadas nesta aba. O arquivo não é enviado a lugar nenhum e não é guardado no armazenamento local."
        },
        {
          "question": "Como extraio páginas de um PDF?",
          "answer": "Informe as páginas que você quer, por exemplo 1-3,6, e baixe um PDF novo que contenha só essas páginas. O arquivo original não é alterado."
        },
        {
          "question": "Posso dividir um PDF em arquivos separados?",
          "answer": "Cada passada cria um PDF novo a partir das páginas que você escolhe. Repita com um intervalo diferente para cada arquivo de que precisar."
        },
        {
          "question": "Como escrevo um intervalo de páginas?",
          "answer": "Use vírgulas e hífens, por exemplo 1-3,6. A numeração começa em 1. Um intervalo invertido, como 5-2, é recusado, assim como uma página que não está no arquivo."
        },
        {
          "question": "Quantas páginas o PDF novo pode ter?",
          "answer": "O arquivo novo pode ter no máximo 80 páginas. Se você precisar de mais do que isso, faça mais de uma divisão e mantenha os intervalos dentro de 80 páginas cada um."
        },
        {
          "question": "O divisor funciona em um celular?",
          "answer": "Sim. Você pode informar um intervalo e baixar o PDF novo em um navegador móvel. O arquivo original não é enviado."
        },
        {
          "question": "Posso tirar o meio de um documento e manter o restante em um só arquivo?",
          "answer": "Sim. Informe as páginas que você quer conservar, por exemplo 1-2,8-10, e baixe um PDF novo que contenha só essas páginas."
        },
        {
          "question": "O que acontece se eu digitar uma página que não está no PDF?",
          "answer": "Esse intervalo é recusado. Confira primeiro o número de páginas com o [contador de páginas de PDF](/tools/pdf-page-counter) se você não tiver certeza de quantas páginas o arquivo tem."
        },
        {
          "question": "Um PDF bloqueado ou protegido por senha pode ser dividido aqui?",
          "answer": "Um arquivo bloqueado não abre aqui, então não pode ser dividido. O original no seu dispositivo não é alterado."
        },
        {
          "question": "A divisão compacta as páginas?",
          "answer": "Não. O arquivo novo é uma cópia das páginas que você selecionou. Para tentar reduzir um PDF, use o [compressor de PDF](/tools/pdf-compressor)."
        },
        {
          "question": "Posso extrair uma única página?",
          "answer": "Sim. Informe o número dessa página, por exemplo 3, e baixe um PDF de uma página."
        },
        {
          "question": "A ordem das páginas no PDF novo é a mesma do meu intervalo?",
          "answer": "Sim. As páginas são copiadas na ordem em que você as lista, desde que cada número exista no arquivo e o intervalo não esteja invertido."
        },
        {
          "question": "Posso desfazer uma divisão?",
          "answer": "Não há o que desfazer no original, porque ele não foi alterado. Apague o download se não precisar dele e depois rode um intervalo diferente."
        },
        {
          "question": "Isto extrai imagens ou texto das páginas?",
          "answer": "Não. O resultado é um PDF feito das páginas que você escolheu. Para imagens das páginas, use [PDF para JPG](/tools/pdf-to-jpg). Para uma camada de texto, use [PDF para texto](/tools/pdf-to-text)."
        },
        {
          "question": "E se eu precisar de cada página como o próprio arquivo?",
          "answer": "Esta página grava um PDF novo por passada. Repita a divisão para cada página, ou use outra ferramenta se precisar de uma pasta de arquivos de uma página em um só passo."
        },
        {
          "question": "As páginas em branco entram se eu as selecionar?",
          "answer": "Sim. Se uma página selecionada estiver em branco, ela ainda é copiada para o PDF novo."
        },
        {
          "question": "Posso reorganizar as páginas sem descartar nenhuma?",
          "answer": "Você pode listar as páginas em uma ordem nova no intervalo, dentro do teto de 80 páginas, e baixar isso como um arquivo novo. A ordem original no seu dispositivo permanece inalterada."
        },
        {
          "question": "Há um limite de tamanho de arquivo?",
          "answer": "Um arquivo que não abrir — porque está danificado, protegido por senha ou ilegível de outro modo — não pode ser dividido. O PDF novo também tem teto de 80 páginas."
        }
      ]
    }
  },
  "pdf-page-counter": {
    "answer": "Um contador de páginas de PDF informa quantas páginas um PDF contém depois de lê-lo localmente.",
    "metaDescription": "Conte as páginas de um arquivo PDF no seu dispositivo, sem enviar o documento, e inclua as páginas em branco e as capas.",
    "ui": {},
    "content": {
      "about": "Veja quantas páginas um PDF tem, junto com o nome e o tamanho do arquivo. Use quando precisar da contagem antes de dividir ou unir. As páginas em branco e as capas entram na conta, e um arquivo protegido por senha ou danificado não é contado.",
      "limitations": "As páginas em branco e as capas entram na contagem. Um arquivo que não é PDF, um arquivo danificado ou um arquivo protegido por senha não é contado. Arquivos acima de 20 MB são recusados. A página não extrai, não divide e não reordena páginas.",
      "howTo": [
        "Escolha um arquivo PDF.",
        "Leia o número de páginas, o nome e o tamanho do arquivo.",
        "Redefinir limpa o resultado."
      ],
      "examples": [
        {
          "title": "Um folheto de 12 páginas",
          "body": "Depois que o arquivo carrega, a ferramenta informa 12 páginas, junto com o nome e o tamanho do arquivo."
        }
      ],
      "explanation": "A contagem é lida da estrutura do PDF no seu navegador. Páginas em branco e capas entram na conta. Isto não é um editor e não extrai nem reorganiza páginas.",
      "faqs": [
        {
          "question": "O contador de páginas de PDF é grátis?",
          "answer": "Sim. Ler o número de páginas de um PDF não custa nada, e você não cria uma conta."
        },
        {
          "question": "Por que um arquivo não pode ser contado?",
          "answer": "O arquivo pode não ser um PDF, pode estar danificado ou pode estar protegido por senha."
        },
        {
          "question": "A minha entrada é enviada a um servidor?",
          "answer": "Não. O número de páginas é lido nesta aba. O PDF não é enviado a um servidor nem salvo no armazenamento local."
        },
        {
          "question": "Como confiro quantas páginas um PDF tem?",
          "answer": "Abra o arquivo aqui e o número de páginas aparece sem enviá-lo. As páginas em branco e as capas entram na contagem."
        },
        {
          "question": "Posso contar as páginas de vários PDFs?",
          "answer": "Conte-os um depois do outro. Cada arquivo é lido no seu dispositivo e não é enviado."
        },
        {
          "question": "Que informação aparece além do número de páginas?",
          "answer": "A página também mostra o nome e o tamanho do arquivo, junto com o número de páginas."
        },
        {
          "question": "As páginas em branco e as capas são contadas?",
          "answer": "Sim. As páginas em branco e as capas entram na contagem."
        },
        {
          "question": "O contador de páginas funciona em um navegador móvel?",
          "answer": "Sim. Você pode abrir um PDF e ler a contagem em um telefone ou tablet. O arquivo não é enviado."
        },
        {
          "question": "Que tamanho de PDF posso contar?",
          "answer": "Arquivos acima de 20 MB são recusados. Um arquivo que não é PDF, um arquivo danificado ou um arquivo protegido por senha não é contado."
        },
        {
          "question": "Esta ferramenta divide, une ou extrai páginas?",
          "answer": "Não. Ela só informa a contagem. Para copiar páginas para um arquivo novo, use o [divisor de PDF](/tools/pdf-splitter). Para juntar arquivos, use o [unidor de PDF](/tools/pdf-merger)."
        },
        {
          "question": "A contagem altera o PDF?",
          "answer": "Não. O arquivo no seu dispositivo permanece inalterado."
        },
        {
          "question": "Por que um visualizador no meu computador mostraria uma contagem diferente?",
          "answer": "Na maioria das vezes os arquivos não são a mesma cópia, ou um deles está danificado. Esta página inclui páginas em branco e capas, e não conta um arquivo protegido por senha."
        },
        {
          "question": "Posso contar as páginas de um PDF protegido por senha se eu souber a senha?",
          "answer": "Esta página não tem um campo de senha. Um arquivo protegido por senha não é contado."
        },
        {
          "question": "Uma página dupla conta como uma página ou como duas?",
          "answer": "A contagem é o número de páginas no PDF, não o número de folhas físicas depois da impressão. Uma página dupla armazenada como duas páginas conta como duas."
        },
        {
          "question": "Posso ver uma miniatura de cada página?",
          "answer": "Não. Esta página informa a contagem, o nome e o tamanho do arquivo. Ela não mostra prévia das páginas. Para imagens das páginas, use [PDF para JPG](/tools/pdf-to-jpg)."
        },
        {
          "question": "Um portfólio PDF ou um arquivo com anexos é contado de forma especial?",
          "answer": "A página informa a contagem de páginas do documento quando o arquivo abre como PDF. Anexos e portfólios não são listados à parte, e um arquivo que não abrir não é contado."
        },
        {
          "question": "Como confiro a contagem antes de unir arquivos?",
          "answer": "Conte cada PDF aqui e depois some os números. O [unidor de PDF](/tools/pdf-merger) admite no máximo 80 páginas no total, então conferir antes pode evitar uma união recusada."
        },
        {
          "question": "Um PDF digitalizado ainda tem uma contagem de páginas?",
          "answer": "Sim, se o arquivo for um PDF legível e tiver 20 MB ou menos. A digitalização não impede a contagem; ela só afeta as ferramentas que precisam de uma camada de texto."
        },
        {
          "question": "Posso copiar o número de páginas para usar em um documento?",
          "answer": "Sim. Leia a contagem na página e copie-a para as suas anotações. O PDF em si não é modificado."
        },
        {
          "question": "A ferramenta conta páginas em arquivos Word ou de imagem?",
          "answer": "Não. Um arquivo que não é PDF não é contado. Converta ou exporte para PDF primeiro e depois abra esse PDF aqui."
        }
      ]
    }
  },
  "image-color-analyzer": {
    "answer": "Um analisador de cores da imagem amostra pixels para aproximar as cores dominantes de uma foto.",
    "metaDescription": "Estime as cores dominantes de uma imagem JPG, PNG ou WebP a partir de pixels de amostra, com 3 a 10 cores e valores HEX ou RGB.",
    "ui": {},
    "content": {
      "about": "Liste de 3 a 10 cores dominantes de um JPG, PNG ou WebP, com a parcela de cada cor nos pixels amostrados. Use quando quiser uma paleta inicial a partir de uma foto. A imagem é reduzida primeiro a um lado de 96 pixels, então uma cor rara pode ficar de fora.",
      "limitations": "A foto é reduzida a um lado de 96 pixels antes de os pixels serem agrupados, e os pixels quase transparentes são ignorados. Você pode pedir de 3 a 10 cores. A parcela é desses pixels amostrados. Arquivos GIF e HEIC não abrem, e um arquivo acima de 25 MB ou um lado acima de 8.192 pixels é recusado.",
      "howTo": [
        "Escolha uma imagem JPG, PNG ou WebP.",
        "Escolha quantas cores dominantes mostrar, de 3 a 10.",
        "Analise e depois copie os valores HEX ou RGB das amostras."
      ],
      "examples": [
        {
          "title": "Uma foto de um céu azul",
          "body": "A maior parte dos pixels amostrados cai em grupos azulados. A parcela listada é a porção dos pixels amostrados, não uma medição de laboratório."
        }
      ],
      "explanation": "A imagem é reduzida em amostragem e, em seguida, pixels semelhantes são agrupados. As cores listadas são médias desses grupos. Isto é uma aproximação a partir de pixels processados, não uma paleta matematicamente exata nem uma prova de impressão.",
      "faqs": [
        {
          "question": "O analisador de cores da imagem é grátis?",
          "answer": "Sim. Listar as cores dominantes de um JPG, PNG ou WebP é grátis, sem conta."
        },
        {
          "question": "Os percentuais são exatos?",
          "answer": "Não. Eles descrevem pixels amostrados e quantizados de uma cópia menor da imagem. Detalhes finos e cores raras podem ficar de fora."
        },
        {
          "question": "A minha entrada é enviada a um servidor?",
          "answer": "Não. A amostragem permanece nesta aba. A foto não é enviada e não é gravada no armazenamento local."
        },
        {
          "question": "Como encontro as cores principais de uma imagem?",
          "answer": "Escolha um JPG, PNG ou WebP e defina quantas cores listar, de 3 a 10. Pixels semelhantes são agrupados e cada cor mostra a sua parcela."
        },
        {
          "question": "Posso obter o código hexadecimal de uma cor em uma foto?",
          "answer": "Sim. Cada cor listada pode ser copiada como HEX ou RGB, pronta para uma ferramenta de design ou para o CSS."
        },
        {
          "question": "Quais formatos de imagem posso analisar?",
          "answer": "JPG, PNG e WebP abrem aqui. Arquivos GIF e HEIC não abrem, e um arquivo acima de 25 MB ou um lado acima de 8.192 pixels é recusado."
        },
        {
          "question": "Quantas cores a paleta vai listar?",
          "answer": "Você pode pedir de 3 a 10 cores. A lista é montada a partir de uma cópia menor e amostrada da imagem, então uma cor rara pode ficar de fora."
        },
        {
          "question": "Por que uma cor que eu vejo na foto pode estar ausente?",
          "answer": "A foto é reduzida a um lado de 96 pixels antes de os pixels serem agrupados, e os pixels quase transparentes são ignorados. Cores pequenas ou raras podem não aparecer na lista."
        },
        {
          "question": "O analisador funciona em um celular?",
          "answer": "Sim. Você pode abrir um JPG, PNG ou WebP e copiar as cores listadas em um navegador móvel. A imagem não é enviada."
        },
        {
          "question": "A análise altera ou substitui a foto?",
          "answer": "Não. O arquivo no seu dispositivo não é alterado. A página só lista cores a partir de uma cópia amostrada."
        },
        {
          "question": "Posso analisar várias imagens de uma vez?",
          "answer": "Não. Esta página analisa uma imagem de cada vez."
        },
        {
          "question": "As parcelas são um percentual da foto original inteira?",
          "answer": "Não. Cada parcela é dos pixels amostrados depois que a imagem é reduzida a um lado de 96 pixels e os pixels quase transparentes são ignorados."
        },
        {
          "question": "Posso escolher a cor exata de um único pixel?",
          "answer": "Não. Esta ferramenta agrupa pixels semelhantes em uma paleta curta. Para uma cor opaca que você mesmo escolhe, use o [seletor de cores](/tools/color-picker)."
        },
        {
          "question": "As áreas transparentes entram na paleta?",
          "answer": "Os pixels quase transparentes são ignorados, então um fundo claro em geral não aparece como uma cor na lista."
        },
        {
          "question": "Posso copiar RGB além de HEX?",
          "answer": "Sim. Cada cor listada pode ser copiada como HEX ou RGB para uma ferramenta de design ou para o CSS."
        },
        {
          "question": "Duas fotos parecidas vão dar a mesma paleta?",
          "answer": "Nem sempre. Um recorte, uma compactação ou uma pequena mudança de luz podem alterar os pixels amostrados e as cores agrupadas."
        },
        {
          "question": "Isto substitui um guia de estilo da marca?",
          "answer": "Não. É uma paleta inicial a partir de uma foto. As cores oficiais da marca ainda devem vir das especificações da própria marca."
        },
        {
          "question": "Posso usar a paleta no verificador de contraste de cores?",
          "answer": "Sim. Copie um valor HEX e cole-o no [verificador de contraste de cores](/tools/color-contrast-checker) para testá-lo contra texto ou um fundo."
        },
        {
          "question": "Uma foto movimentada produz resultados confusos?",
          "answer": "Pode acontecer. Muitos detalhes pequenos competem na amostra. Uma imagem mais plana, ou um recorte da área que importa feito no [recortador de imagens](/tools/image-cropper), costuma gerar uma lista mais clara."
        },
        {
          "question": "A prévia de 96 pixels é a mesma coisa que reduzir o arquivo que eu baixo?",
          "answer": "Não. O lado de 96 pixels é usado só para a amostragem. O seu arquivo original não é redimensionado nem baixado como uma imagem menor."
        }
      ]
    }
  },
  "pdf-compressor": {
    "answer": "Um compressor de PDF reescreve ou rasteriza um PDF no seu navegador para tentar reduzir o tamanho do arquivo. Uma saída menor não é garantida.",
    "metaDescription": "Reduza o tamanho de um PDF no navegador com ajustes de reescrita ou de rasterização. A compactação não é garantida.",
    "ui": {},
    "content": {
      "about": "Reescreva um PDF com compactação Baixa, Equilibrada ou Forte e compare os tamanhos. Use Equilibrado em um relatório de texto quando as palavras devem continuar selecionáveis. Forte transforma cada página em um JPEG, então um arquivo menor não é garantido e o texto deixa de ser selecionável.",
      "limitations": "Um arquivo menor não é garantido. A compactação Equilibrada pode deixar um PDF já compactado com um tamanho parecido. A compactação Forte transforma cada página em um JPEG, então o texto deixa de ser selecionável. Um PDF muito grande pode ficar lento ou falhar se o dispositivo estiver com pouca memória.",
      "howTo": [
        "Escolha um PDF no seu dispositivo. O arquivo permanece nesta aba do navegador.",
        "Escolha compactação Baixa (reescrever, manter o texto), Equilibrada (copiar as páginas para um arquivo novo) ou Forte (rasterizar as páginas em JPEG).",
        "Pressione Compactar e confira o tamanho original, o tamanho de saída e o percentual de variação.",
        "Baixe o resultado se ele for útil. Redefinir para tentar outro arquivo ou outra predefinição."
      ],
      "examples": [
        {
          "title": "Um relatório com muito texto",
          "body": "Comece com Equilibrado. Muitos PDFs já compactados quase não diminuem. Forte substituiria o texto selecionável por imagens, o que em geral é o troco errado para um relatório."
        },
        {
          "title": "Uma digitalização feita de fotos das páginas",
          "body": "A compactação Forte pode reduzir o tamanho ao recodificar as páginas como JPEG. O texto não continuará selecionável. Baixa e Equilibrada em geral mudam pouco em arquivos que já são páginas JPEG."
        }
      ],
      "explanation": "Baixa e Equilibrada reescrevem a estrutura do PDF sem transformar as páginas em imagens, então os vetores e o texto permanecem. Forte renderiza cada página em um JPEG e remonta o documento, o que pode reduzir arquivos cheios de fotos e vai destruir o texto selecionável. O Tools Star Hub não afirma uma redução garantida. Alguns arquivos permanecem com um tamanho semelhante ou até crescem um pouco.",
      "faqs": [
        {
          "question": "O compressor de PDF é grátis?",
          "answer": "Sim. Você pode compactar um PDF neste navegador sem pagar e sem criar uma conta."
        },
        {
          "question": "Como compacto um PDF?",
          "answer": "Abra o compressor de PDF, escolha o arquivo, selecione uma predefinição, depois compacte e baixe. O processamento permanece no seu navegador."
        },
        {
          "question": "Todo PDF vai ficar menor?",
          "answer": "Não. Se o arquivo já estiver compactado, uma reescrita pode permanecer com um tamanho parecido. A rasterização Forte pode até aumentar um PDF de texto simples."
        },
        {
          "question": "Isto é sem perda?",
          "answer": "Baixa e Equilibrada conservam o conteúdo das páginas como está e só reescrevem a estrutura. Isso não é uma promessa de arquivos menores. Forte é com perda porque as páginas viram imagens JPEG."
        },
        {
          "question": "Como compacto um PDF para e-mail?",
          "answer": "Abra o arquivo no compressor, escolha um nível de compactação e baixe o resultado menor. Depois confira se ele está abaixo do limite de anexo do seu serviço de e-mail."
        },
        {
          "question": "Compactar um PDF sempre reduz a qualidade?",
          "answer": "PDFs cheios de imagens podem perder um pouco de fidelidade visual nas configurações mais fortes. PDFs baseados em texto muitas vezes diminuem com pouca mudança visível quando os fluxos são otimizados."
        },
        {
          "question": "Por que o meu PDF quase não diminuiu?",
          "answer": "Ele pode já estar otimizado, ou ser principalmente texto com pouca informação redundante. Páginas de fotos digitalizadas diminuem mais do que PDFs de texto criados digitalmente."
        },
        {
          "question": "A compactação de PDF é sem perda?",
          "answer": "Depende do modo. Algumas otimizações conservam o conteúdo exatamente; os modos mais fortes recodificam as imagens e são com perda. Leia o rótulo da opção antes de escolher."
        },
        {
          "question": "O texto continua pesquisável depois da compactação?",
          "answer": "Muitas vezes sim, se a ferramenta conservar a camada de texto. Isso vale para Baixa e Equilibrada. A compactação Forte transforma as páginas em imagens e remove a pesquisa."
        },
        {
          "question": "Qual é um bom tamanho-alvo para anexos do Gmail?",
          "answer": "Fique folgado abaixo do teto comum de 25 MB, inclusive a sobrecarga da codificação. Quando ainda estiver grande demais, divida o PDF ou compartilhe um link."
        },
        {
          "question": "Posso compactar um PDF protegido por senha?",
          "answer": "Em geral você precisa desbloqueá-lo primeiro. Arquivos protegidos impedem a reescrita até que a senha seja informada em uma ferramenta que a aceite. Esta página não tem um campo de senha."
        },
        {
          "question": "Devo dividir ou compactar um PDF enorme?",
          "answer": "Tente primeiro a compactação para e-mail. Divida por seções quando os destinatários só precisarem de parte do documento ou quando a compactação estabilizar."
        },
        {
          "question": "Por que a saída às vezes fica maior?",
          "answer": "A recodificação pode acrescentar sobrecarga se as imagens já eram minúsculas ou se os metadados cresceram. Conserve o original quando isso acontecer."
        },
        {
          "question": "Que tamanho de PDF o navegador consegue abrir?",
          "answer": "Os limites de memória variam conforme o dispositivo. Livros digitalizados muito grandes podem falhar nesta aba; tente então menos páginas ou um aplicativo de computador."
        },
        {
          "question": "A compactação remove os metadados do PDF?",
          "answer": "Nem sempre. Use uma ferramenta de metadados se precisar limpar à parte autores, títulos ou campos ocultos."
        },
        {
          "question": "Compactar é a mesma coisa que converter para PDF/A?",
          "answer": "Não. PDF/A é um padrão de arquivamento com regras mais rígidas. A compactação só tenta reduzir os bytes."
        },
        {
          "question": "Posso compactar PDFs feitos de fotos de celular?",
          "answer": "Sim, e eles muitas vezes diminuem bastante porque as imagens da câmera são grandes. Configurações de qualidade de imagem mais baixas ajudam quando a legibilidade continua aceitável."
        },
        {
          "question": "Formulários e anotações sobrevivem à compactação?",
          "answer": "Otimizadores simples os conservam; modos de reescrita agressivos podem não conservar. Confira os campos interativos depois de compactar."
        },
        {
          "question": "Quantas vezes devo recompactar o mesmo arquivo?",
          "answer": "Uma vez em geral basta. Passadas com perda repetidas podem degradar digitalizações sem muita economia extra de tamanho."
        }
      ]
    }
  },
  "pdf-to-text": {
    "answer": "PDF para texto copia o texto selecionável das páginas de um PDF no seu navegador. Digitalizações só com imagem em geral produzem pouco ou nenhum texto, porque o OCR não está incluído.",
    "metaDescription": "Extraia o texto selecionável de um PDF no navegador, de todas as páginas ou de um intervalo. Páginas digitalizadas precisam de OCR, que não está incluído.",
    "ui": {},
    "content": {
      "about": "Extraia a camada de texto de um PDF, de todas as páginas, de uma página ou de um intervalo como 1-3,5. Use em uma nota fiscal nascida digital quando quiser colar as palavras em um editor. Uma página digitalizada sem camada de texto volta vazia, porque esta página não executa OCR.",
      "limitations": "O extrator lê uma camada de texto armazenada. Ele não executa OCR, então uma página digitalizada pode voltar em branco. Arquivos acima de 20 MB, ou documentos com mais de 80 páginas, são recusados. Um PDF protegido por senha não abre. As quebras de linha são reconstruídas a partir das posições dos glifos, então um layout apertado pode sair irregular.",
      "howTo": [
        "Escolha um PDF. O número de páginas e o tamanho do arquivo aparecem depois que o arquivo é lido localmente.",
        "Escolha todas as páginas, uma página ou um intervalo como 1-3,5.",
        "Pressione Extrair texto. Copie o resultado ou baixe um arquivo .txt.",
        "Se uma página estiver em branco na saída, é provável que ela não tenha camada de texto."
      ],
      "examples": [
        {
          "title": "Uma nota fiscal digital",
          "body": "PDFs nascidos digitais em geral têm uma camada de texto. Extrair todas as páginas gera um rascunho utilizável que você pode copiar para uma planilha ou um editor."
        },
        {
          "title": "Um contrato fotografado",
          "body": "Uma digitalização guardada como imagens muitas vezes produz páginas vazias. Esta ferramenta não faz OCR. Use um aplicativo de OCR dedicado se precisar ler fotos de texto."
        }
      ],
      "explanation": "O extrator lê a camada de texto armazenada no PDF, nesta aba. Ele não executa OCR. As quebras de linha são reconstruídas a partir das posições dos glifos, então um layout apertado ou em várias colunas pode sair irregular.",
      "faqs": [
        {
          "question": "A ferramenta de PDF para texto é grátis?",
          "answer": "Sim. Extrair uma camada de texto de um PDF é grátis, e você não precisa de uma conta."
        },
        {
          "question": "Isto envia o meu PDF?",
          "answer": "Não. A camada de texto é lida nesta aba. O arquivo não é enviado a um servidor."
        },
        {
          "question": "Por que a saída está vazia?",
          "answer": "A página pode ser uma imagem sem camada de texto, ou o arquivo pode estar criptografado. Este conversor não inclui OCR."
        },
        {
          "question": "Como copio texto de um PDF?",
          "answer": "Abra o PDF aqui para extrair a camada de texto e depois copie ou baixe o texto. O arquivo permanece no seu dispositivo."
        },
        {
          "question": "Por que um PDF digitalizado não traz texto?",
          "answer": "Uma página digitalizada é uma imagem de texto, sem uma camada de texto para ler. Ela precisa de OCR (reconhecimento óptico de caracteres), que esta ferramenta não executa."
        },
        {
          "question": "Como extraio texto só de algumas páginas?",
          "answer": "Escolha todas as páginas, uma página ou um intervalo como 1-3,5. Só as páginas que você pedir são lidas."
        },
        {
          "question": "Quais são os limites de tamanho de arquivo e de páginas?",
          "answer": "Arquivos acima de 20 MB, ou documentos com mais de 80 páginas, são recusados. Um PDF protegido por senha não abre."
        },
        {
          "question": "PDF para texto funciona em um navegador móvel?",
          "answer": "Sim. Você pode abrir um PDF e copiar ou baixar o texto em um telefone ou tablet. O arquivo não é enviado."
        },
        {
          "question": "O texto conserva as fontes e o layout originais?",
          "answer": "Não. As quebras de linha são reconstruídas a partir das posições dos glifos, então um layout apertado ou em várias colunas pode sair irregular. Você obtém as palavras, não uma página diagramada."
        },
        {
          "question": "Posso extrair texto de uma nota fiscal digitalizada?",
          "answer": "Só se esse arquivo já tiver uma camada de texto. Uma digitalização que é só uma imagem da página volta vazia, porque esta página não executa OCR."
        },
        {
          "question": "A extração altera o PDF?",
          "answer": "Não. O PDF no seu dispositivo permanece inalterado. Você copia ou baixa o texto à parte."
        },
        {
          "question": "Posso extrair texto de vários PDFs de uma vez?",
          "answer": "Não. Esta página lê um PDF de cada vez."
        },
        {
          "question": "E se só algumas páginas tiverem uma camada de texto?",
          "answer": "As páginas com camada de texto contribuem com palavras. As páginas que são só imagens não contribuem com nada, o que pode parecer lacunas na saída."
        },
        {
          "question": "Isto é a mesma coisa que selecionar texto em um leitor de PDF?",
          "answer": "É o mesmo tipo de texto: a camada de texto armazenada. Se você não consegue selecionar palavras em um leitor, esta página em geral também não encontra uma camada de texto."
        },
        {
          "question": "Posso obter uma imagem da página em vez das palavras?",
          "answer": "Sim. Use [PDF para JPG](/tools/pdf-to-jpg) quando quiser um JPEG da página, e não a camada de texto."
        },
        {
          "question": "As tabelas são conservadas como tabelas?",
          "answer": "As células da tabela são lidas como texto, não como uma planilha. As colunas podem sair como linhas que você precisa organizar em um editor."
        },
        {
          "question": "Um PDF protegido por senha funciona se eu souber a senha?",
          "answer": "Esta página não tem um campo de senha. Um PDF protegido por senha não abre aqui."
        },
        {
          "question": "Posso baixar o texto como um arquivo?",
          "answer": "Sim. Depois que o texto é extraído, você pode copiá-lo ou baixá-lo e depois colá-lo em um editor."
        },
        {
          "question": "Por que algumas letras parecem fora de ordem?",
          "answer": "O extrator reconstrói as linhas a partir das posições dos glifos. Um espaçamento incomum, um texto girado ou colunas apertadas podem sair em uma ordem surpreendente."
        },
        {
          "question": "Há um limite de caracteres no texto extraído?",
          "answer": "Os limites são do próprio PDF: 20 MB e 80 páginas. Um arquivo denso de 80 páginas ainda pode produzir uma saída de texto longa."
        }
      ]
    }
  },
  "image-to-text": {
    "answer": "Imagem para texto lê palavras em inglês de uma foto no seu navegador. A primeira execução baixa o mecanismo de reconhecimento e o arquivo de idioma inglês. Um letreiro legível ainda pode voltar com letras erradas, então confira o texto antes de usá-lo.",
    "metaDescription": "Leia texto em inglês de uma foto no navegador. Na primeira vez são baixados 6,6 MB de arquivos de reconhecimento. Uma foto real pode devolver letras incorretas.",
    "ui": {},
    "content": {
      "about": "Isto lê texto em inglês de uma foto nesta aba. É mais lento que as ferramentas de imagem baseadas em canvas. Na primeira vez, este navegador baixa o mecanismo de reconhecimento e o arquivo de idioma inglês, cerca de 6,6 MB. As execuções seguintes neste navegador reutilizam esse download. O resultado depende da foto. Um letreiro legível ainda pode voltar com letras erradas, e um fundo movimentado pode acrescentar linhas que não são texto. Desfoque, reflexo e tipo pequeno pioram isso. Confira o texto antes de usá-lo.",
      "limitations": "Só inglês. Uma imagem de cada vez. Só JPG, PNG e WebP, até 25 MB. A primeira execução baixa cerca de 6,6 MB. As execuções seguintes neste navegador reutilizam esse download. Ler uma foto é mais lento que as ferramentas de imagem baseadas em canvas. O resultado depende da foto. Um letreiro legível ainda pode voltar com letras erradas, e um fundo movimentado pode acrescentar linhas que não são texto. Desfoque, reflexo e tipo pequeno pioram isso. Um lado longo acima de 1.600 pixels é reduzido antes da leitura.",
      "howTo": [
        "Escolha uma imagem JPG, PNG ou WebP.",
        "Pressione Ler texto. Na primeira vez, este navegador baixa o mecanismo de reconhecimento e o arquivo de idioma inglês.",
        "Espere o texto. Uma foto grande é reduzida antes de ser lida.",
        "Confira o texto e depois copie-o se estiver certo."
      ],
      "examples": [
        {
          "title": "Um letreiro pregado em uma árvore",
          "body": "Uma foto real ao ar livre de um letreiro impresso, com casca e folhas em volta. As linhas sobre caça e invasão voltaram. PRIVATE PROPERTY voltou com letras faltando, e VIOLATORS voltou como VIOLKTORS. A palavra maior, POSTED, não voltou como uma palavra limpa, e a casca acrescentou linhas extras."
        }
      ],
      "explanation": "Depois que você pressiona Ler texto, esta aba carrega o mecanismo de reconhecimento e o arquivo de idioma inglês deste site. A foto é desenhada menor quando o lado longo passa de 1.600 pixels, e então as palavras são lidas nesta aba. A imagem não é enviada.",
      "features": [
        "Texto em inglês de uma foto, nesta aba.",
        "Um lado longo acima de 1.600 pixels é reduzido antes da leitura.",
        "Os arquivos de reconhecimento permanecem neste site. Eles não são carregados de outro servidor."
      ],
      "tips": [
        "Uma foto reta e bem iluminada de um tipo grande é mais fácil de ler do que uma foto distante ou inclinada.",
        "Compare o resultado com a foto. Não trate uma palavra lida errada como o original."
      ],
      "faqs": [
        {
          "question": "A ferramenta de imagem para texto é grátis?",
          "answer": "Sim. Você pode ler texto em inglês de uma foto aqui sem pagar e sem criar uma conta."
        },
        {
          "question": "A foto é enviada?",
          "answer": "Não. A foto é lida nesta aba do navegador. O Tools Star Hub não envia a imagem a um servidor nem a salva no armazenamento local. O mecanismo de reconhecimento e o arquivo de idioma inglês são carregados deste site."
        },
        {
          "question": "Por que a primeira execução é lenta?",
          "answer": "Na primeira vez, este navegador baixa o mecanismo de reconhecimento e o arquivo de idioma inglês, cerca de 6,6 MB. As execuções seguintes neste navegador reutilizam esse download. Ler a foto também é mais lento do que redimensionar ou compactar uma imagem."
        },
        {
          "question": "Uma foto nítida será lida corretamente?",
          "answer": "Nem sempre. Em uma foto real ao ar livre de um letreiro impresso, algumas linhas voltaram e algumas letras estavam erradas. Um fundo movimentado pode acrescentar linhas que não são texto. Desfoque, reflexo e tipo pequeno pioram isso. Confira o texto antes de usá-lo."
        },
        {
          "question": "Ele lê idiomas além do inglês?",
          "answer": "Não. O inglês é o único arquivo de idioma incluído."
        },
        {
          "question": "Como o OCR de imagem para texto funciona no navegador?",
          "answer": "A página carrega um mecanismo de reconhecimento, lê os pixels da sua imagem localmente e propõe um texto simples que você pode copiar. A qualidade depende da nitidez, do contraste e do fato de o texto estar em inglês."
        },
        {
          "question": "Quais formatos de imagem funcionam melhor para o OCR?",
          "answer": "Fotos PNG e JPEG de documentos planos funcionam bem. Capturas extremamente compactadas de redes sociais e fotos de celular tortas pedem uma nova foto mais reta e mais nítida."
        },
        {
          "question": "Como posso melhorar a precisão do OCR?",
          "answer": "Use uma iluminação uniforme, evite sombras, preencha o quadro com o texto e recorte as distrações. Texto preto de alto contraste sobre branco em geral vence fundos coloridos."
        },
        {
          "question": "O OCR conserva o layout original?",
          "answer": "A maior parte do OCR no navegador devolve um fluxo de texto na ordem de leitura, não um layout perfeito da página. Espere reaplicar colunas ou tabelas depois de colar."
        },
        {
          "question": "Ele lê letra manuscrita?",
          "answer": "O texto impresso é bem mais confiável. A letra de forma caprichada às vezes funciona; a cursiva e o lápis fraco muitas vezes falham e devem ser digitados."
        },
        {
          "question": "A minha foto é enviada para o OCR?",
          "answer": "Não. A foto é lida nesta aba depois que os arquivos de reconhecimento deste site são carregados. A imagem não é enviada a um servidor nem salva no armazenamento local."
        },
        {
          "question": "Por que algumas letras são trocadas?",
          "answer": "Formas parecidas, como O/0 e I/l, confundem o OCR. Revise números e nomes com cuidado antes de confiar no texto."
        },
        {
          "question": "Posso fazer OCR de um PDF com esta ferramenta?",
          "answer": "Esta página espera uma imagem. Converta primeiro as páginas do PDF em imagens, ou use uma ferramenta de texto de PDF dedicada quando o arquivo já contiver uma camada de texto."
        },
        {
          "question": "A rotação importa?",
          "answer": "Páginas de cabeça para baixo ou de lado muitas vezes falham. Gire a imagem para a posição vertical antes de rodar o OCR."
        },
        {
          "question": "Qual pode ser o tamanho da imagem?",
          "answer": "JPG, PNG e WebP até 25 MB são aceitos. Um lado longo acima de 1.600 pixels é reduzido antes da leitura. Se o texto ficar suave depois da redução, recorte o parágrafo de que precisa e rode de novo."
        },
        {
          "question": "O OCR extrai texto de capturas de tela de aplicativos?",
          "answer": "Sim, quando as fontes estão nítidas. A interface, os ícones e as janelas sobrepostas reduzem a precisão, então recorte a região do texto."
        },
        {
          "question": "Quais idiomas ele reconhece?",
          "answer": "Só o inglês. O arquivo de idioma incluído é o inglês; outros idiomas não estão disponíveis nesta página."
        },
        {
          "question": "O OCR é a mesma coisa que um tradutor ao vivo pela câmera?",
          "answer": "O OCR copia texto de uma imagem parada. Os aplicativos de tradução ao vivo acrescentam quadros contínuos da câmera e tradução automática por cima."
        },
        {
          "question": "Devo compactar a imagem antes do OCR?",
          "answer": "Uma compactação leve está bem. Uma compactação pesada que borra as bordas prejudica o reconhecimento mais do que ajuda no tamanho do arquivo."
        },
        {
          "question": "O que devo fazer com o texto extraído?",
          "answer": "Copie-o para o seu editor, corrija os erros e depois salve. Documentos sensíveis devem ser limpos da página quando você terminar."
        }
      ]
    }
  },
  "pdf-metadata": {
    "answer": "Os metadados de um PDF são informações extras do documento, como título e autor. Esta ferramenta pode mostrar os campos Info comuns e limpá-los em uma cópia baixada.",
    "metaDescription": "Consulte os campos de informação habituais de um PDF e baixe localmente uma cópia com esses campos vazios. O texto das páginas não é apagado.",
    "ui": {},
    "content": {
      "about": "Mostre os campos Info padrão de um PDF, como título, autor e criador, e baixe uma cópia com esses campos limpos. Use quando um nome de autor antigo não deve viajar com o arquivo. O texto das páginas, os comentários e as imagens embutidas permanecem, então limpar os campos Info não é uma limpeza completa.",
      "limitations": "O visualizador lista o nome do arquivo, o tamanho, o número de páginas e os campos Info padrão quando eles existem: título, autor, assunto, palavras-chave, criador, produtor e datas. Remover metadados limpa esses campos em um download novo. O texto das páginas, os comentários, os arquivos embutidos e as imagens permanecem. Documentos com mais de 80 páginas são recusados, e um arquivo protegido por senha não abre.",
      "howTo": [
        "Escolha um PDF. O nome do arquivo, o tamanho e o número de páginas aparecem com quaisquer campos Info padrão.",
        "Revise Título, Autor, Assunto, Palavras-chave, Criador, Produtor e as datas quando existirem.",
        "Pressione Remover metadados para montar uma cópia com esses campos Info do documento limpos.",
        "Baixe o PDF limpo. Conserve o original se ainda precisar das propriedades."
      ],
      "examples": [
        {
          "title": "Um arquivo com um nome de autor antigo",
          "body": "O visualizador mostra Autor e Criador quando o dicionário Info os tem. Remover os metadados limpa esses campos no download novo, não no arquivo que ainda está no disco."
        },
        {
          "title": "Um painel de propriedades vazio",
          "body": "Muitos PDFs nunca definem Título ou Autor. A ferramenta ainda informa o nome do arquivo, o tamanho e o número de páginas."
        }
      ],
      "explanation": "Os arquivos PDF podem guardar um dicionário Info do documento (e às vezes outros fluxos de metadados). Esta ferramenta lê os campos Info comuns com a pdf-lib e pode copiar as páginas para um arquivo novo de modo que esses campos fiquem em branco. Isso não é uma limpeza forense. O texto do corpo, os comentários, os arquivos embutidos e as imagens ainda podem identificar uma pessoa ou um dispositivo.",
      "faqs": [
        {
          "question": "O visualizador / removedor de metadados de PDF é grátis?",
          "answer": "Sim. Ver os campos Info de um PDF, e limpá-los em um download novo, é grátis, sem conta."
        },
        {
          "question": "O que são metadados de PDF?",
          "answer": "São informações extras guardadas com o documento, como título, autor, assunto, palavras-chave, criador, produtor e datas. Elas são separadas das palavras nas páginas."
        },
        {
          "question": "Remover os metadados deixa o PDF anônimo?",
          "answer": "Não. Limpar os campos Info padrão não remove todas as informações identificadoras possíveis do conteúdo, das anotações, dos objetos embutidos, do histórico do arquivo ou de outras estruturas."
        },
        {
          "question": "Como vejo quem criou um PDF?",
          "answer": "Abra o arquivo e leia os campos Autor, Criador e Produtor, junto com as datas de criação e de modificação, quando o documento as incluir."
        },
        {
          "question": "Devo remover os metadados antes de compartilhar um PDF?",
          "answer": "Se os campos mostrarem um nome, uma empresa ou um software que você preferiria não compartilhar, limpá-los é um passo sensato. O texto dentro das páginas não é alterado."
        },
        {
          "question": "Quais campos posso ver e limpar?",
          "answer": "O visualizador lista o nome do arquivo, o tamanho, o número de páginas e os campos Info padrão quando eles existem: título, autor, assunto, palavras-chave, criador, produtor e datas. Remover metadados limpa esses campos Info em um download novo."
        },
        {
          "question": "Limpar os metadados altera as palavras nas páginas?",
          "answer": "Não. O texto das páginas, os comentários, os arquivos embutidos e as imagens permanecem. Só os campos Info padrão são limpos no arquivo novo."
        },
        {
          "question": "Qual é o limite de páginas?",
          "answer": "Documentos com mais de 80 páginas são recusados, e um arquivo protegido por senha não abre."
        },
        {
          "question": "A ferramenta de metadados funciona em um celular?",
          "answer": "Sim. Você pode abrir um PDF e baixar uma cópia com os campos Info limpos em um navegador móvel. O arquivo não é enviado."
        },
        {
          "question": "Limpar os metadados substitui o PDF original?",
          "answer": "Não. Você baixa uma cópia nova. O arquivo original no seu dispositivo permanece como estava."
        },
        {
          "question": "Posso editar o título ou o autor para um valor novo?",
          "answer": "Esta página pode mostrar os campos e limpá-los. Ela não oferece um formulário para escrever um título ou um autor novos."
        },
        {
          "question": "As propriedades do documento em um leitor de PDF ficarão vazias então?",
          "answer": "Os campos Info padrão que esta página limpa devem ficar vazios no arquivo novo. Outros dados ocultos ainda podem estar presentes, então isto não é uma limpeza completa."
        },
        {
          "question": "Posso processar vários PDFs de uma vez?",
          "answer": "Não. Esta página lê e, se você escolher, limpa os campos de um PDF de cada vez."
        },
        {
          "question": "Isto remove comentários ou anotações?",
          "answer": "Não. Comentários e anotações permanecem. Só os campos Info padrão são limpos."
        },
        {
          "question": "E se o campo Autor já estiver vazio?",
          "answer": "O visualizador só mostra os campos que existem. Limpar os metadados ainda grava um arquivo novo com esses campos Info padrão esvaziados, o que é útil quando alguns estão preenchidos e outros não."
        },
        {
          "question": "O XMP ou os dados ocultos de revisão também são removidos?",
          "answer": "Não. Esta página trata dos campos Info padrão listados acima. Outras estruturas de metadados podem permanecer."
        },
        {
          "question": "Posso inspecionar os metadados sem baixar um arquivo novo?",
          "answer": "Sim. Abra o PDF para ler os campos. Baixe uma cópia limpa só se quiser esses campos Info removidos."
        },
        {
          "question": "Um PDF protegido por senha mostra os campos Info?",
          "answer": "Não. Um arquivo protegido por senha não abre, então os campos não podem ser listados nem limpos aqui."
        },
        {
          "question": "Os mecanismos de busca ainda verão o autor antigo depois que eu limpar os campos?",
          "answer": "O arquivo novo não carrega mais esses campos Info. Quem ainda tiver o arquivo original, ou uma cópia que já tinha sido enviada, ainda pode ver os valores antigos."
        },
        {
          "question": "Isto é a mesma coisa que renomear o arquivo?",
          "answer": "Não. O nome do arquivo e os campos Autor ou Título do documento são coisas separadas. Renomear o arquivo não limpa os campos Info, e limpar os campos Info não renomeia o arquivo no seu dispositivo."
        }
      ]
    }
  },
  "text-to-pdf": {
    "answer": "Texto para PDF coloca texto simples com quebra de linha em páginas A4 ou Carta no seu navegador e baixa um PDF.",
    "metaDescription": "Converta texto sem formatação em um PDF de várias páginas no navegador, com quebra de linha, margens e números de página opcionais.",
    "ui": {},
    "content": {
      "about": "Transforme um texto colado em um PDF A4 ou Carta, com quebra de linha, um título opcional e números de página opcionais. Use para anotações de reunião que devem virar um documento simples. Os caracteres que a Helvetica não consegue desenhar viram um ponto de interrogação, e uma entrada com mais de 100.000 caracteres é recusada.",
      "limitations": "As páginas usam Helvetica. Os caracteres que essa fonte não consegue desenhar viram “?”. Uma entrada com mais de 100.000 caracteres é recusada. O tamanho da fonte fica entre 8 e 24 pontos, e o tamanho da página é A4 ou Carta. Imagens e HTML com estilo não são colocados no documento.",
      "howTo": [
        "Cole ou digite o texto. Se quiser, adicione um título.",
        "Escolha A4 ou Carta, uma margem, o tamanho da fonte e o espaçamento entre linhas. Ative os números de página se quiser usá-los.",
        "Pressione Criar PDF. As linhas longas quebram. Páginas extras são adicionadas conforme a necessidade.",
        "Baixe o PDF. Limpe a caixa quando terminar; nada é armazenado."
      ],
      "examples": [
        {
          "title": "Anotações de reunião",
          "body": "Cole alguns parágrafos, mantenha margens médias e o tipo em 12 pt e depois baixe. Os números de página ajudam se as anotações passarem de uma página."
        },
        {
          "title": "Um registro muito longo",
          "body": "A ferramenta limita a entrada para a aba permanecer utilizável. Divida registros enormes primeiro. Os caracteres que a Helvetica não consegue desenhar são substituídos por “?”."
        }
      ],
      "explanation": "As páginas são montadas com a pdf-lib e a fonte padrão Helvetica. O texto é quebrado na caixa de conteúdo. A Helvetica cobre o latim e um conjunto limitado de caracteres extras, não todos os alfabetos Unicode. A ferramenta informa quantos caracteres foram substituídos, em vez de fingir que a fonte é universal.",
      "faqs": [
        {
          "question": "O conversor de texto para PDF é grátis?",
          "answer": "Sim. Transformar um texto colado em um PDF não exige pagamento nem conta."
        },
        {
          "question": "Posso usar qualquer idioma?",
          "answer": "O texto em alfabeto latino em geral funciona. Muitos outros sistemas de escrita estão fora da cobertura da Helvetica e aparecem como “?”. Isto é um limite da fonte, não um filtro de idioma."
        },
        {
          "question": "A minha entrada é enviada a um servidor?",
          "answer": "Não. O PDF é montado nesta aba a partir do texto que você cola. Esse texto não é enviado e não é salvo no armazenamento local."
        },
        {
          "question": "Como transformo um arquivo de texto em um PDF?",
          "answer": "Cole o texto, escolha A4 ou Carta, o tamanho da fonte, as margens e os números de página, e depois crie e baixe o PDF."
        },
        {
          "question": "Por que alguns caracteres aparecem como um ponto de interrogação?",
          "answer": "O PDF usa a fonte Helvetica, que não consegue desenhar todos os alfabetos ou emojis. Os caracteres que ela não desenha são substituídos por ?."
        },
        {
          "question": "Como defino um título que aparece nos metadados do PDF?",
          "answer": "Há um campo de título opcional. Preencha-o antes de gerar o PDF se quiser que esse título viaje com o arquivo."
        },
        {
          "question": "Posso escolher o tamanho da página, como A4 ou Carta?",
          "answer": "Sim. Escolha A4 ou Carta para o PDF combinar com a sua impressora ou com as regras de envio."
        },
        {
          "question": "As linhas longas quebram ou são cortadas?",
          "answer": "As linhas longas quebram dentro das margens da página. Ajuste o tamanho da fonte se o texto parecer apertado."
        },
        {
          "question": "Como converto anotações com vários parágrafos?",
          "answer": "Cole o texto completo com linhas em branco entre os parágrafos e depois gere o PDF para o espaçamento ser conservado."
        },
        {
          "question": "A escolha da fonte afeta muito o tamanho do arquivo?",
          "answer": "Esta página usa a Helvetica padrão, o que mantém PDFs de texto simples relativamente leves. Não há escolha de fontes embutidas personalizadas aqui."
        },
        {
          "question": "Posso incluir urdu ou outros sistemas de escrita complexos?",
          "answer": "Só os caracteres que a Helvetica consegue desenhar aparecem corretamente. Os demais viram “?”. Isto é um limite da fonte, não um filtro de idioma."
        },
        {
          "question": "Como baixo o PDF pronto?",
          "answer": "Gere o arquivo e depois use o controle de download; abra o arquivo no seu dispositivo para confirmar o layout antes de compartilhar."
        },
        {
          "question": "Há um limite de caracteres na caixa de colar?",
          "answer": "Sim. Uma entrada com mais de 100.000 caracteres é recusada para a aba permanecer utilizável. Divida textos enormes primeiro."
        },
        {
          "question": "Os hiperlinks no texto simples ficam clicáveis?",
          "answer": "Não. Os URLs permanecem como texto nesta página. Não há uma opção para transformá-los em links."
        },
        {
          "question": "Posso proteger o PDF com senha aqui?",
          "answer": "Não. Esta página não oferece criptografia. Proteja o arquivo depois em um editor de PDF, se precisar."
        },
        {
          "question": "Como as margens afetam o texto imprimível?",
          "answer": "Margens mais largas reduzem o comprimento da linha; margens mais estreitas cabem mais palavras, mas podem parecer apertadas na impressão."
        },
        {
          "question": "Gerar de novo substitui o download anterior?",
          "answer": "Cada geração cria um arquivo novo nos seus downloads; renomeie as cópias anteriores se precisar das duas."
        },
        {
          "question": "Posso converter markdown em PDF com esta ferramenta?",
          "answer": "Ela espera um layout de texto simples; converta o markdown em texto já renderizado primeiro se precisar de títulos com estilo."
        },
        {
          "question": "Por que o meu PDF ficou em branco depois do download?",
          "answer": "Confira se a caixa de texto não estava vazia e se um bloqueador de pop-up não impediu o arquivo."
        },
        {
          "question": "O texto de origem fica armazenado depois que eu saio?",
          "answer": "Não. Nada é armazenado quando você limpa a caixa ou sai da página. A conversão é local e o texto não é enviado."
        }
      ]
    }
  },
  "word-to-pdf": {
    "answer": "A ferramenta de Word para PDF lê as palavras de um arquivo .docx e as coloca em um PDF simples. Imagens, tabelas como grade, cabeçalhos, rodapés e o estilo do texto ficam de fora. Não é uma cópia do layout do Word.",
    "metaDescription": "Leia as palavras de um arquivo .docx e coloque-as em um PDF simples. Ficam de fora as imagens, as tabelas como grade e o estilo do texto.",
    "ui": {},
    "content": {
      "about": "Word para PDF lê as palavras de um arquivo .docx e as coloca em um PDF simples. Imagens, tabelas como grade, cabeçalhos, rodapés e o estilo do texto ficam de fora. Não é uma cópia do layout do Word.",
      "limitations": "Imagens, desenhos, gráficos e formas são descartados. Negrito, itálico, cores, fontes e tamanhos de título são descartados. Uma tabela vira o texto das células na ordem de leitura, não uma grade. Uma lista conserva o texto dos itens e não conserva a numeração automática do Word. Cabeçalhos, rodapés, notas de rodapé, comentários e caixas de texto não entram. Um arquivo .doc é recusado. Um caractere que a Helvetica não consegue desenhar vira “?”. Mais de 100.000 caracteres de texto extraído é recusado.",
      "howTo": [
        "Escolha um arquivo .docx. Um arquivo .doc é recusado.",
        "Se quiser, adicione um título. Escolha A4 ou Carta, uma margem, o tamanho da fonte e o espaçamento entre linhas.",
        "Pressione Criar PDF. As palavras são quebradas nas páginas com a Helvetica.",
        "Baixe word.pdf. O arquivo permanece nesta aba."
      ],
      "examples": [
        {
          "title": "Um título, uma tabela, uma lista e uma figura",
          "body": "As palavras do título, as palavras das células e as palavras dos itens da lista são conservadas. A figura fica de fora. A numeração automática da lista do Word não é conservada. A tabela não é desenhada como uma grade."
        },
        {
          "title": "Um arquivo .doc renomeado para .docx",
          "body": "A página diz que esse arquivo não pôde ser lido como um documento Word. Ela não mostra um erro interno."
        }
      ],
      "explanation": "O arquivo é descompactado nesta aba e o texto dos parágrafos é lido. Esse texto é então colocado com o mesmo montador de PDF em Helvetica do texto colado. Uma quebra de página do Word não inicia uma página nova no PDF.",
      "features": [
        "Texto de parágrafos, palavras de títulos, palavras de itens de lista e palavras de células de tabela.",
        "Os mesmos tamanhos de página, margens e fonte Helvetica do texto para PDF.",
        "Uma nota quando um caractere é substituído porque a Helvetica não consegue desenhá-lo."
      ],
      "tips": [
        "Se o documento for só uma figura, não há texto para converter.",
        "Confira o PDF. Um caractere que a Helvetica não consegue desenhar vira um ponto de interrogação."
      ],
      "faqs": [
        {
          "question": "O conversor de Word para PDF é grátis?",
          "answer": "Sim. Você pode transformar um arquivo .docx em um PDF simples aqui sem pagar e sem criar uma conta."
        },
        {
          "question": "O PDF vai parecer com o meu documento Word?",
          "answer": "Não. Imagens, tabelas como grade, cabeçalhos, rodapés e o estilo do texto ficam de fora. Não é uma cópia do layout do Word."
        },
        {
          "question": "E se eu escolher um arquivo .doc?",
          "answer": "Use um arquivo .docx. Esta ferramenta não lê arquivos .doc. Um arquivo .doc renomeado para .docx não pode ser lido como um documento Word."
        },
        {
          "question": "O meu arquivo é enviado a um servidor?",
          "answer": "Não. O PDF é montado nesta aba do navegador a partir do .docx que você escolhe. O Tools Star Hub não envia esse arquivo a um servidor nem o salva no armazenamento local."
        },
        {
          "question": "Como converto um documento Word em PDF no navegador?",
          "answer": "Escolha um arquivo .docx, defina o tamanho da página se quiser, pressione Criar PDF e depois baixe o arquivo. O processamento permanece no navegador e o arquivo não é enviado ao Tools Star Hub."
        },
        {
          "question": "O .doc (Word antigo) funciona igual ao .docx?",
          "answer": "A ferramenta espera o .docx moderno. Um arquivo .doc mais antigo é recusado. Abra-o no Word ou no LibreOffice e salve como .docx primeiro."
        },
        {
          "question": "O PDF vai coincidir exatamente com o layout do Word?",
          "answer": "Não. Esta página coloca as palavras em um PDF simples com a Helvetica. Imagens, grades de tabela, cabeçalhos, rodapés e o estilo do texto ficam de fora, então o resultado não é uma cópia da diagramação."
        },
        {
          "question": "As fontes são embutidas no PDF?",
          "answer": "As páginas usam a Helvetica padrão, a mesma do texto para PDF. As fontes do documento Word não são embutidas. Um caractere que a Helvetica não desenha vira “?”."
        },
        {
          "question": "Posso converter vários arquivos Word de uma vez?",
          "answer": "Não. Esta página converte um documento de cada vez."
        },
        {
          "question": "A conversão precisa do Microsoft Word instalado?",
          "answer": "Não. O conversor no navegador não exige o aplicativo Word de computador."
        },
        {
          "question": "O que acontece com as imagens dentro do documento?",
          "answer": "Elas ficam de fora. Imagens, desenhos, gráficos e formas são descartados. Só o texto dos parágrafos, dos títulos, dos itens de lista e das células entra no PDF."
        },
        {
          "question": "Os comentários e as alterações controladas são conservados?",
          "answer": "Não. Comentários não entram. A conversão se concentra no texto do corpo. Revise comentários e alterações no Word antes de converter se precisar de um arquivo limpo."
        },
        {
          "question": "Posso proteger o PDF com senha aqui?",
          "answer": "Não. Esta página converte para um PDF padrão para download. Acrescente uma senha depois em um editor de PDF, se precisar."
        },
        {
          "question": "O meu documento fica armazenado em um servidor?",
          "answer": "Não. O arquivo Word não é guardado no Tools Star Hub depois que você converte. O trabalho permanece na sessão do navegador."
        },
        {
          "question": "Por que o PDF ficou maior ou menor que o .docx?",
          "answer": "PDF e Word empacotam o conteúdo de formas diferentes. Como as imagens ficam de fora, o PDF muitas vezes fica mais simples. O tamanho sozinho não significa que páginas de texto tenham sido omitidas."
        },
        {
          "question": "Cabeçalhos e rodapés sobrevivem à conversão?",
          "answer": "Não. Cabeçalhos, rodapés, notas de rodapé, comentários e caixas de texto não entram no PDF."
        },
        {
          "question": "Posso editar o PDF depois de converter?",
          "answer": "Você pode abri-lo em um editor de PDF. Para edições maiores no texto, altere a origem no Word e converta de novo."
        },
        {
          "question": "E se a conversão falhar?",
          "answer": "Tente salvar de novo o arquivo como .docx, remova conteúdo incomum de complementos e converta outra vez. Um arquivo .doc, ou um .doc só renomeado para .docx, também falha. Um arquivo .docx corrompido também falha."
        },
        {
          "question": "Esta ferramenta imprime o documento?",
          "answer": "Ela monta um arquivo PDF para download. A impressão é opcional depois, no seu visualizador de PDF."
        },
        {
          "question": "Há um limite de páginas?",
          "answer": "Mais de 100.000 caracteres de texto extraído é recusado. Documentos muito grandes também podem atingir os limites de memória do navegador. Divida arquivos enormes se a aba ficar sem memória."
        }
      ]
    }
  },
  "favicon-generator": {
    "answer": "Um gerador de favicon desenha ícones PNG de 16, 32 e 180 pixels a partir de uma cor e de até duas letras, e empacota os PNGs de 16 e 32 pixels em um arquivo ICO.",
    "metaDescription": "Desenhe uma letra ou uma cor sólida como ícones PNG de 16, 32 e 180 pixels, além de um ICO com os dois tamanhos menores.",
    "ui": {},
    "content": {
      "about": "Escolha uma cor de fundo, uma cor das letras e até duas letras. A página desenha ícones PNG de 16, 32 e 180 pixels nesta aba. O arquivo ICO contém só as imagens de 16 e 32 pixels.",
      "limitations": "As cores devem ser hexadecimais de 6 dígitos, por exemplo #2563eb. O hexadecimal de três dígitos é recusado. As letras são texto simples sobre uma cor plana, não o traço de um logotipo. O ICO contém só as imagens de 16 e 32 pixels.",
      "howTo": [
        "Informe uma cor de fundo de 6 dígitos e uma cor das letras de 6 dígitos.",
        "Informe uma ou duas letras, ou deixe as letras em branco para uma cor sólida.",
        "Pressione Gerar e depois baixe os tamanhos PNG ou o arquivo ICO."
      ],
      "examples": [
        {
          "title": "Um ícone azul com T",
          "body": "Fundo #2563eb, letras #ffffff e a letra T desenham um quadrado azul com um T branco."
        },
        {
          "title": "Uma cor sólida",
          "body": "As mesmas cores com as letras deixadas em branco desenham um quadrado azul sólido em cada tamanho."
        }
      ],
      "explanation": "Cada tamanho é um canvas quadrado preenchido com a cor de fundo. Uma ou duas letras são centralizadas na cor das letras. O arquivo ICO é um cabeçalho pequeno mais os bytes PNG de 16 e 32 pixels. A imagem de 180 pixels é o PNG apple-touch e não é colocada dentro do ICO.",
      "features": [
        "Arquivos PNG de 16, 32 e 180 pixels.",
        "Um arquivo ICO que contém os PNGs de 16 e 32 pixels.",
        "Uma caixa de letras em branco desenha uma cor sólida."
      ],
      "tips": [
        "Use o redimensionador de imagens quando você já tiver uma figura e só precisar de um novo tamanho em pixels."
      ],
      "faqs": [
        {
          "question": "O gerador de favicon é grátis?",
          "answer": "Sim. Você pode desenhar os ícones aqui sem pagar e sem criar uma conta."
        },
        {
          "question": "Qual arquivo é o ícone da aba do navegador?",
          "answer": "O favicon.ico, ou os PNGs de 16 e 32 pixels. O PNG de 180 pixels é o ícone apple-touch."
        },
        {
          "question": "Uma caixa de letras em branco falha?",
          "answer": "Não. Ela desenha a cor de fundo sem letras."
        },
        {
          "question": "O ícone é enviado?",
          "answer": "Não. Os arquivos são desenhados nesta aba do navegador. O Tools Star Hub não envia as cores ou as letras a um servidor nem as salva no armazenamento local."
        },
        {
          "question": "Qual deve ser o tamanho de um favicon?",
          "answer": "Os favicons clássicos têm 16×16 e 32×32 pixels. Muitos sites também enviam 180×180 para os ícones Apple touch. Gerar alguns PNGs quadrados cobre a maioria dos navegadores e dos favoritos da tela inicial."
        },
        {
          "question": "Quais formatos de arquivo funcionam para favicons?",
          "answer": "O ICO reúne vários tamanhos em um só arquivo; o PNG funciona bem nos navegadores modernos. Os favicons SVG são aceitos em alguns navegadores, mas não em todos, então conserve um PNG ou um ICO de reserva. Esta página exporta PNG e ICO, não SVG."
        },
        {
          "question": "Como adiciono um favicon ao meu site?",
          "answer": "Envie os arquivos de ícone para a raiz do site ou para a pasta de recursos e depois ligue-os no head do HTML com rel=\"icon\" (e apple-touch-icon quando você enviar um PNG de 180 px)."
        },
        {
          "question": "Por que o meu favicon novo não aparece?",
          "answer": "Os navegadores fazem cache agressivo de favicons. Faça um recarregamento forçado, tente uma janela privada ou mude o nome do arquivo ou a query string depois de substituir o ícone."
        },
        {
          "question": "O favicon deve ser um logotipo ou uma letra?",
          "answer": "Qualquer um dos dois funciona se permanecer legível em 16 pixels. Logotipos carregados viram um borrão; uma marca simples ou um monograma em geral sobrevive melhor ao tamanho minúsculo da aba. Esta página desenha até duas letras sobre uma cor plana, não o traço de um logotipo."
        },
        {
          "question": "Preciso de um favicon separado para o modo escuro?",
          "answer": "É opcional, mas ajuda. Glifos claros desaparecem em abas claras; alguns sites enviam ícones alternativos ou escolhem cores com contraste nos dois temas. Esta página desenha um conjunto de ícones por vez."
        },
        {
          "question": "Posso fazer um favicon a partir de um PNG grande?",
          "answer": "Não nesta página. Ela desenha a partir de uma cor e de até duas letras. Se você já tiver uma figura e só precisar de um novo tamanho em pixels, use o [redimensionador de imagens](/tools/image-resizer)."
        },
        {
          "question": "Qual é a diferença entre favicon.ico e apple-touch-icon?",
          "answer": "O favicon.ico cobre as abas e os favoritos do navegador e, nesta página, contém só as imagens de 16 e 32 pixels. O ícone Apple touch é o PNG maior, de 180 pixels, para a tela inicial no iOS."
        },
        {
          "question": "Um fundo transparente funciona?",
          "answer": "Não nesta página. Cada ícone é um quadrado preenchido com a cor de fundo que você escolhe. Não há opção de transparência."
        },
        {
          "question": "De quantos tamanhos de favicon eu realmente preciso?",
          "answer": "Uma base sólida é 16, 32 e 180 pixels, mais um ICO ou um PNG para rel=\"icon\". É exatamente o que esta página exporta. Aplicativos web progressivos podem acrescentar mais ícones pelo manifesto web."
        },
        {
          "question": "Um emoji pode funcionar como favicon?",
          "answer": "Esta página aceita até dois caracteres de texto simples. Um emoji pode não ficar reconhecível em 16 pixels, e a Helvetica do canvas pode não desenhá-lo bem. Confira a prévia antes de baixar."
        },
        {
          "question": "O gerador envia o meu logotipo a um servidor?",
          "answer": "Não. Esta página não aceita o envio de um logotipo. Ela desenha os ícones no navegador a partir das cores e das letras que você informa, e nada é enviado a um servidor."
        },
        {
          "question": "Por que a minha cor hexadecimal foi recusada?",
          "answer": "Os campos de cor exigem um hexadecimal de 6 dígitos, por exemplo #2563eb. O hexadecimal de três dígitos é recusado."
        },
        {
          "question": "O favicon deve coincidir com a minha imagem Open Graph?",
          "answer": "Eles podem compartilhar as cores da marca, mas as imagens OG são prévias sociais grandes e os favicons são marcas minúsculas de aba. Desenhe cada um para o seu tamanho, em vez de reutilizar um único arquivo para os dois."
        },
        {
          "question": "Posso mudar os favicons por ambiente?",
          "answer": "Sim. Sites de homologação muitas vezes usam uma cor ou um distintivo diferente para as abas não se confundirem com a produção. Aponte as tags head de cada ambiente para os próprios arquivos de ícone."
        },
        {
          "question": "Os mecanismos de busca usam o meu favicon nos resultados?",
          "answer": "Alguns layouts de resultado mostram um favicon ao lado do nome do site. Mantenha o arquivo rastreável, quadrado e estável para os rastreadores conseguirem coletá-lo."
        }
      ]
    }
  },
  "youtube-banner-maker": {
    "answer": "Um banner do YouTube deve ter 2560 × 1440 pixels e menos de 6 MB, com nomes e logotipos dentro da área segura central de 1546 × 423 que todos os dispositivos mostram. Este criador exporta esse tamanho como PNG ou JPG, sem o guia.",
    "metaDescription": "Crie uma imagem de canal do YouTube de 2560 × 1440 com 15 modelos, texto, logotipos e um guia de área segura, e exporte PNG ou JPG de menos de 6 MB.",
    "ui": {},
    "content": {
      "about": "Este criador de banners do YouTube monta a arte do canal no tamanho cheio de 2560 × 1440 pixels dentro do seu navegador. Comece por um dos 15 modelos originais ou por uma cor em branco e depois adicione texto, fotos, um logotipo, retângulos, círculos e degradês. Um guia tracejado de 1546 × 423 marca a faixa que permanece visível em telefones, computadores e TVs. O guia ajuda você a posicionar nomes e slogans, e nunca é desenhado no arquivo baixado. Nada do que você escolhe sai do seu dispositivo, porque a edição e a exportação rodam em um elemento canvas na página.",
      "limitations": "O editor não tem rotação, recorte, filtros, envio de fonte personalizada nem projetos salvos, e o desenho se perde quando a aba fecha. As fontes do navegador diferem um pouco entre os sistemas, então o texto pode quebrar de forma um pouco diferente em outro computador. Fotos muito grandes podem deixar telefones mais antigos lentos. O YouTube pode mudar os tamanhos de banner ou os limites de arquivo, então confirme as cifras atuais na Ajuda do YouTube antes de enviar.",
      "howTo": [
        "Escolha um modelo no painel Modelos, ou mantenha o padrão e mude a cor de fundo ou o degradê.",
        "Selecione uma camada tocando ou clicando nela no canvas ou na lista Camadas. Arraste-a para movê-la e arraste o quadrado dourado do canto para redimensioná-la.",
        "Edite a camada selecionada no painel lateral: texto, fonte, peso, tamanho, alinhamento, cor, preenchimento, degradê, raio dos cantos, opacidade e posição exata.",
        "Adicione as suas próprias peças com Texto, Retângulo, Círculo, Imagem ou Logotipo. Reordene as camadas com as setas e oculte qualquer camada com o botão de ponto.",
        "Mantenha as palavras e os rostos importantes dentro da área segura tracejada e depois escolha PNG ou JPG e pressione Baixar 2560 × 1440."
      ],
      "examples": [
        {
          "title": "Um canal de games em cinco minutos",
          "body": "Carregue Neon Arena, mude o título para o nome do canal, mude o slogan para os dias reais de transmissão e arraste um logotipo PNG transparente para o lado esquerdo da área segura. A faixa neon fica atrás do texto, então o nome permanece legível em um telefone."
        },
        {
          "title": "Usar uma foto como fundo",
          "body": "Comece por Minimal Mono, pressione Imagem e escolha uma foto em paisagem. A foto é escalada para caber no canvas inteiro. Use a seta para baixo na lista Camadas para enviá-la para baixo do título e depois reduza a opacidade para as palavras se destacarem."
        },
        {
          "title": "Manter um arquivo abaixo de 6 MB",
          "body": "Uma foto detalhada exportada como PNG pode passar de 6 MB neste tamanho. Quando isso acontece, a ferramenta muda para JPG e reduz a qualidade passo a passo até o arquivo caber, e a linha de status informa qual formato e tamanho você recebeu."
        }
      ],
      "explanation": "O editor guarda o seu desenho como uma lista de camadas desenhadas em ordem, de baixo para cima, sobre um preenchimento de fundo. Cada mudança, de uma escolha de cor a um arrasto, produz uma versão nova dessa lista, e até 60 versões são conservadas para desfazer e refazer percorrerem essa história. O canvas de prévia é sempre o tamanho verdadeiro de 2560 × 1440 e só é reduzido com CSS, então o que você vê é o que exporta.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "A área segura fica centralizada no canvas. A borda esquerda fica em (2560 − 1546) ÷ 2 = 507 pixels e a borda superior em (1440 − 423) ÷ 2 = 508,5 pixels. Tudo o que está dentro dessa caixa é visível em todas as classes de dispositivo que o YouTube admite. Faixas mais largas aparecem no computador e a imagem inteira pode aparecer na TV, então a área externa é um bom lugar para textura, cor e detalhe da foto, e não para palavras.",
            "As posições do ponteiro são convertidas de pixels da tela para pixels do canvas ao dividir pela largura e pela altura exibidas e multiplicar por 2560 e 1440. Isso mantém o arrasto preciso em qualquer nível de zoom e em qualquer tela. Os degradês usam a convenção de ângulo do CSS, em que 90 graus corre da esquerda para a direita e 180 graus corre de cima para baixo.",
            "O texto quebra dentro de cada caixa de texto. A ferramenta mede cada palavra com as métricas de fonte do navegador e começa uma linha nova quando a palavra seguinte passaria da largura da caixa. O espaçamento entre linhas é 1,2 vezes o tamanho da fonte.",
            "Na exportação, o desenho é desenhado de novo em um canvas fresco, sem o guia, sem o contorno de seleção e sem a alça de redimensionamento. Um PNG é tentado primeiro quando você escolhe PNG. Se ele passar de 6 MB, ou se você escolheu JPG, a ferramenta codifica JPG na qualidade 0,92 e desce por 0,85, 0,75, 0,65 e 0,5 até o arquivo ter 6 MB ou menos."
          ]
        },
        {
          "heading": "Desenhar para telas pequenas",
          "paragraphs": [
            "Em um telefone o banner é mostrado como uma faixa estreita, mais ou menos a área segura, então um nome em letras grandes se lê melhor do que uma frase. Um slogan de quatro a seis palavras em geral basta. O contraste alto entre o texto e o fundo importa mais do que a escolha da fonte nesse tamanho.",
            "Logotipos com fundo transparente ficam mais limpos do que logotipos sobre uma caixa branca. Se o seu logotipo for um JPG com fundo branco, coloque-o em uma área clara do desenho ou redesenhe-o primeiro como PNG. O botão Logotipo escala qualquer imagem para caber em um quadrado de 300 pixels e a coloca perto da borda esquerda da área segura."
          ]
        },
        {
          "heading": "Escolher cores e tipos",
          "paragraphs": [
            "Escolha uma cor de fundo forte ou um degradê de duas cores e uma cor de destaque, e depois use o destaque com parcimônia em uma barra, um anel ou uma única palavra. Texto claro sobre um fundo escuro se lê bem em tamanhos pequenos, e o mesmo vale para texto quase preto sobre um fundo pálido. Texto em tom médio sobre um fundo em tom médio é a combinação mais provável de desaparecer em um telefone.",
            "Os pesos negrito ou seminegrito se sustentam melhor do que o peso regular quando o banner é reduzido. A opção Condensado cabe nomes mais longos em uma linha, e a opção Serifada combina com canais de culinária, viagem e educação que querem um visual mais calmo."
          ]
        },
        {
          "heading": "Privacidade e processamento local",
          "paragraphs": [
            "As imagens são lidas com o FileReader do navegador e mantidas na memória como data URLs. Elas não são enviadas ao Tools Star Hub nem a qualquer outro servidor. Fechar ou recarregar a aba limpa o desenho, então baixe uma cópia antes de sair."
          ]
        }
      ],
      "features": [
        "Exportação em 2560 × 1440, o tamanho que o YouTube recomenda para banners de canal, com o arquivo mantido em 6 MB ou menos.",
        "Uma sobreposição de área segura de 1546 × 423 que você pode ligar ou desligar e que nunca aparece na exportação.",
        "15 layouts iniciais originais que cobrem games, vlogs, culinária, música, educação, fitness, negócios e mais.",
        "Camadas com reordenar, ocultar, duplicar e excluir, além de desfazer, refazer e uma redefinição de volta ao modelo escolhido.",
        "Arrasto com mouse, caneta e toque por eventos de ponteiro, um controle de zoom de 50% a 300% e atalhos de teclado."
      ],
      "tips": [
        "Confira o desenho no zoom de 50%. Se o nome ainda estiver fácil de ler, em geral ele vai se ler bem em um telefone.",
        "Use as setas para movimentos pequenos e segure Shift para passos de 50 pixels ao alinhar o texto com o guia.",
        "Duplique uma camada de texto com Ctrl ou ⌘ + D para montar uma segunda linha no mesmo estilo.",
        "Envie o PNG ou o JPG no YouTube Studio em Personalização, depois Identidade visual, e pré-visualize cada tamanho de dispositivo lá antes de publicar."
      ],
      "faqs": [
        {
          "question": "Que tamanho o criador de banners do YouTube exporta?",
          "answer": "Ele sempre exporta 2560 × 1440 pixels, que é o tamanho de banner de canal que o YouTube recomenda. O guia da área segura não faz parte do arquivo."
        },
        {
          "question": "O que é a área segura de 1546 × 423?",
          "answer": "É a faixa central que permanece visível em todos os dispositivos, inclusive telefones. Mantenha o nome do canal, o logotipo e qualquer mensagem curta dentro dela para nada ser cortado."
        },
        {
          "question": "O guia da área segura entra no meu download?",
          "answer": "Não. O guia é desenhado só na prévia. A exportação é renderizada de novo em um canvas limpo, sem o guia, o contorno de seleção ou as alças."
        },
        {
          "question": "Por que o meu PNG foi baixado como JPG?",
          "answer": "Um PNG de uma foto detalhada pode passar de 6 MB neste tamanho. A ferramenta muda para JPG e reduz a qualidade passo a passo até o arquivo caber abaixo de 6 MB, e a linha de status explica o que aconteceu."
        },
        {
          "question": "As minhas imagens são enviadas para algum lugar?",
          "answer": "Não. As imagens são lidas e desenhadas dentro da aba do seu navegador. Nada é enviado a um servidor, e fechar a aba as remove."
        },
        {
          "question": "Posso usar em um telefone ou tablet?",
          "answer": "Sim. Arrastar e redimensionar funcionam com o toque, o painel lateral vai para baixo do canvas em telas estreitas, e o controle de zoom ajuda no posicionamento preciso."
        },
        {
          "question": "Quais atalhos de teclado estão disponíveis?",
          "answer": "Ctrl ou ⌘ + Z desfaz, Ctrl ou ⌘ + Shift + Z ou Ctrl + Y refaz, Ctrl ou ⌘ + D duplica, Delete ou Backspace remove a camada selecionada, as setas a deslocam e Escape limpa a seleção."
        },
        {
          "question": "Posso salvar um desenho e voltar depois?",
          "answer": "Ainda não. O desenho vive só na aba aberta. Baixe um PNG ou um JPG quando terminar e conserve as imagens de origem para poder remontá-lo."
        },
        {
          "question": "Posso usar os modelos em um canal comercial?",
          "answer": "Sim. Os modelos são layouts originais feitos para esta ferramenta a partir de formas, degradês e texto. Confira se qualquer foto ou logotipo que você adicionar é seu ou tem licença para o seu uso."
        },
        {
          "question": "Com que tamanho de canvas devo começar para quem assiste na TV?",
          "answer": "Desenhe no canvas cheio de 2560 × 1440. A imagem inteira pode aparecer na TV, então use a área externa para textura e detalhe, e mantenha nomes e logotipos dentro da área segura central de 1546 × 423, que todos os dispositivos mostram."
        },
        {
          "question": "Posso enviar o logotipo do meu canal como uma camada?",
          "answer": "Sim. Use o botão Logotipo ou Imagem, redimensione a camada e mantenha-a dentro da área segura antes de exportar. O botão Logotipo escala a imagem para caber em um quadrado de 300 pixels e a coloca perto da borda esquerda da área segura."
        },
        {
          "question": "Como mantenho o texto nítido em telas retina?",
          "answer": "A exportação é sempre 2560 × 1440, o tamanho recomendado. O texto é desenhado de novo no canvas de exportação, não como um bitmap pequeno ampliado. Evite apenas ampliar fotos pequenas demais como fundo."
        },
        {
          "question": "O mesmo banner deve funcionar no celular e no computador?",
          "answer": "Sim, se o conteúdo importante estiver na área segura sobreposta de 1546 × 423. As bordas podem ser recortadas de formas diferentes em cada dispositivo, então trate a margem externa como atmosfera opcional."
        },
        {
          "question": "Posso combinar as cores da marca com valores hexadecimais?",
          "answer": "Sim. Use escolhas hexadecimais para fundos, formas e texto, para o banner permanecer consistente com a paleta do seu site."
        },
        {
          "question": "Quantas camadas de imagem são práticas?",
          "answer": "Algumas camadas bem compostas vencem dezenas de pedaços minúsculos. Junte os enfeites antes do posicionamento fino. Fotos muito grandes podem deixar telefones mais antigos lentos."
        },
        {
          "question": "Uma foto movimentada esconde o nome do canal?",
          "answer": "Muitas vezes. Adicione uma faixa suave ou uma barra sólida atrás do texto para o contraste permanecer legível, sobretudo na área segura."
        },
        {
          "question": "Posso reutilizar um banner em campanhas sazonais?",
          "answer": "Não há projetos salvos nesta página. Baixe o PNG ou o JPG, conserve as imagens de origem e remonte o desenho trocando a arte da estação, mantendo a posição do logotipo para o reconhecimento."
        },
        {
          "question": "A exportação inclui sangria além do recorte do YouTube?",
          "answer": "Os pixels das bordas podem ser recortados em alguns dispositivos. Trate as margens externas só como atmosfera opcional e mantenha o que importa na área segura."
        },
        {
          "question": "Como devo nomear os arquivos de banner baixados?",
          "answer": "Inclua o canal e a data para você poder voltar atrás se um redesenho não render bem. O desenho desta aba se perde quando ela fecha."
        },
        {
          "question": "A animação é admitida na exportação do banner?",
          "answer": "Não. A arte de canal do YouTube nesta página é uma imagem parada. Crie movimento nas aberturas de vídeo."
        }
      ]
    }
  }
};

export default data;
