import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Início",
      allTools: "Todas as ferramentas",
      categories: "Categorias",
      guides: "Guias",
      popularTools: "Ferramentas populares",
      about: "Sobre",
      howItWorks: "Como funciona",
      contact: "Contato",
      exploreTools: "Explorar ferramentas",
      mobileNav: "Celular",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      openSearch: "Abrir busca",
      closeSearch: "Fechar busca",
    },
    theme: {
      toLight: "Mudar para o tema claro",
      toDark: "Mudar para o tema escuro",
    },
    language: {
      label: "Idioma",
      current: "Idioma: {name}",
      englishOnly: "Somente em inglês",
    },
    search: {
      placeholder: "Buscar uma ferramenta...",
      label: "Buscar uma ferramenta",
      clear: "Limpar busca",
      suggestions: "Sugestões de busca",
      noResults: "Nenhuma ferramenta encontrada",
    },
    consent: {
      title: "Cookies de análise",
      body: "Usamos o Google Analytics para contar visitas, mas só se você aceitar. As ferramentas funcionam do mesmo jeito em qualquer caso. Veja a {link}.",
      privacyLink: "política de privacidade",
      accept: "Aceitar",
      decline: "Recusar",
      settings: "Configurações de cookies",
    },
    favorites: {
      add: "Adicionar {name} aos favoritos",
      remove: "Remover {name} dos favoritos",
    },
    card: { popular: "Popular", new: "Novo", openTool: "Abrir ferramenta" },
    categoryNames: {
      calculators: "Calculadoras",
      "text-tools": "Ferramentas de texto",
      "developer-tools": "Ferramentas para desenvolvedores",
      "image-tools": "Ferramentas de imagem",
      "seo-utilities": "SEO e utilitários",
      "ai-tools": "Ferramentas de IA",
    },
    home: {
      filterAria: "Filtrar ferramentas",
      filters: {
        all: "Todas",
        pdf: "PDF",
        images: "Imagens",
        "text-tools": "Texto",
        "developer-tools": "Desenvolvimento",
        calculators: "Calculadoras",
        "seo-utilities": "Utilitários",
        "ai-tools": "IA",
      },
      noToolsInGroup: "Nenhuma ferramenta neste grupo.",
    },
    catalog: {
      filterAria: "Filtrar ferramentas",
      filters: {
        all: "Todas",
        calculators: "Calculadoras",
        "image-tools": "Imagem",
        pdf: "PDF",
        "text-tools": "Texto",
        "developer-tools": "Desenvolvimento",
        color: "Cor",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "IA",
      },
      favorites: "Favoritos",
      sort: "Ordenar",
      sortName: "Nome",
      sortNewest: "Mais recentes",
      sortCategory: "Categoria",
      recentlyUsed: "Usadas recentemente",
      recentEmpty: "As ferramentas que você usar aparecerão aqui.",
      viewAll: "Ver tudo",
      searchResults: "Resultados da busca",
      allTools: "Todas as ferramentas",
      tools: "Ferramentas",
      noFavorites: "Você ainda não favoritou nenhuma ferramenta.",
      noToolsFound: "Nenhuma ferramenta encontrada",
      noToolsCategory: "Ainda não há ferramentas nesta categoria.",
      countFavorites: { one: "{count} favorito", other: "{count} favoritos" },
      countResults: {
        one: "{count} resultado para “{query}”",
        other: "{count} resultados para “{query}”",
      },
      countOf: "{count} de {total} ferramentas",
    },
    tool: {
      loading: "Carregando ferramenta…",
      copy: "Copiar",
      copied: "Copiado",
      copyCss: "Copiar CSS",
      copyLink: "Copiar link",
      linkCopied: "Link copiado",
      download: "Baixar",
      dropPrompt: "Arraste e solte uma imagem aqui ou escolha um arquivo.",
      selected: "Selecionado: {name}",
      copySuccess: "{what} copiado para a área de transferência.",
      copyFailed:
        "Não foi possível copiar automaticamente. O conteúdo ({what}) está selecionado: pressione Ctrl+C (ou Cmd+C no Mac) para copiar.",
    },
  },
  meta: {
    tagline: "Ferramentas online grátis que simplesmente funcionam",
    description:
      "Ferramentas online rápidas, gratuitas e fáceis para cálculos, texto, desenvolvimento, imagens, SEO e tarefas do dia a dia. Sem cadastro.",
    toolsTitle: "Todas as ferramentas",
    toolsDescription:
      "Explore ferramentas online gratuitas para cálculos, texto, desenvolvimento, imagens, SEO e tarefas do dia a dia.",
    categoriesTitle: "Categorias",
    categoriesDescription:
      "Explore o Tools Star Hub por categoria: calculadoras, ferramentas de texto, para desenvolvedores, de imagem e PDF, utilitários de SEO e ferramentas de IA.",
    categoryTitle: "{name} – ferramentas online grátis",
    categoryShareAlt: "{name} – ferramentas online grátis",
    toolShareAlt: "{name} – ferramenta online grátis",
  },
  header: {
    primaryNav: "Navegação principal",
    logoHome: "Página inicial do {name}",
    skip: "Pular para o conteúdo principal",
  },
  breadcrumbs: {
    label: "Trilha de navegação",
    home: "Início",
    tools: "Ferramentas",
    categories: "Categorias",
  },
  footer: {
    blurb:
      "Ferramentas online rápidas e simples para cálculos, texto, desenvolvimento, imagens, SEO e tarefas do dia a dia.",
    tagline: "Rápido • Grátis • No navegador • Sem cadastro",
    explore: "Explorar",
    categories: "Categorias",
    legal: "Jurídico",
    favorites: "Favoritos",
    privacy: "Política de privacidade",
    terms: "Termos",
    disclaimer: "Aviso legal",
    languages: "Idiomas",
    rights: "© {year} {name}. Todos os direitos reservados.",
  },
  home: {
    h1: "Ferramentas online grátis para as tarefas do dia a dia",
    intro:
      "Encontre uma ferramenta, use e tenha o resultado. O {name} é um lugar simples para PDFs, imagens, cálculos e texto, sem precisar de conta.",
    popularLabel: "Populares:",
    trust: [
      "Grátis",
      "Sem cadastro",
      "Rápido e fácil",
      "Os arquivos ficam no seu navegador",
    ],
    popularTitle: "Ferramentas populares",
    popularDescription:
      "As ferramentas mais usadas para arquivos, imagens, texto e cálculos do dia a dia.",
    viewAllTools: "Ver todas as ferramentas",
    catalogTitle: "Tudo o que você precisa, em um só lugar.",
    catalogDescription:
      "Filtre as ferramentas disponíveis neste site. Cada uma abre direto no navegador.",
    categoriesTitle: "Navegar por categoria",
    categoriesDescription:
      "Calculadoras, texto, utilitários para desenvolvedores, imagens e PDFs, e ferramentas para sites.",
    allCategories: "Todas as categorias",
    whyTitle: "Por que o {name}?",
    whyDescription:
      "Um conjunto direto de utilitários para tarefas que, de outra forma, exigiriam um aplicativo separado.",
    values: {
      fast: {
        title: "Rápido",
        note: "A maioria das ferramentas roda no navegador e mostra o resultado na mesma página.",
      },
      free: {
        title: "Grátis",
        note: "As ferramentas deste site não exigem pagamento.",
      },
      private: {
        title: "Privado",
        note: "Arquivos e textos colados são processados no seu dispositivo. As visitas são medidas separadamente, como explica a política de privacidade.",
      },
      noAccount: {
        title: "Sem conta",
        note: "Abra uma ferramenta e use. Não é preciso criar conta.",
      },
    },
    howTitle: "Como funciona",
    howDescription: "Três passos. Nada para instalar.",
    steps: [
      {
        title: "Escolha uma ferramenta",
        description:
          "Busque ou escolha uma calculadora, uma ferramenta de arquivos ou um utilitário para desenvolvedores.",
      },
      {
        title: "Envie ou digite seu conteúdo",
        description:
          "Adicione o arquivo, os números ou o texto que a ferramenta pede.",
      },
      {
        title: "Receba o resultado",
        description: "Copie, baixe ou leia o resultado na mesma página.",
      },
    ],
    guidesTitle: "Guias úteis",
    guidesDescription:
      "Explicações curtas sobre tarefas que as ferramentas deste site já resolvem.",
    allGuides: "Todos os guias",
    pricingTitle: "Preços",
    pricingBody:
      "As ferramentas são gratuitas. Sem conta, sem instalação e sem plano pago.",
    ctaTitle: "Pronto para resolver as coisas mais rápido?",
    ctaBody: "Explore a coleção de ferramentas online simples do {name}.",
    ctaPrimary: "Explorar todas as ferramentas",
    ctaSecondary: "Experimentar uma ferramenta",
  },
  toolsPage: {
    title: "Todas as ferramentas",
    description:
      "Busque, filtre por categoria ou reabra uma ferramenta recente ou favorita. Novas ferramentas aparecem aqui assim que são adicionadas.",
  },
  categoriesPage: {
    title: "Categorias",
    description:
      "Escolha uma categoria para encontrar a ferramenta certa mais rápido.",
    body: "As calculadoras cuidam dos números do dia a dia. As ferramentas de texto contam e limpam o que você escreve. As ferramentas para desenvolvedores formatam, codificam e minificam. As ferramentas de imagem também incluem tarefas com PDF, como juntar, dividir e extrair texto. SEO e utilitários reúnem links de campanha, slugs, QR codes e senhas. As ferramentas de IA criam prompts e encurtam rascunhos no navegador, e seus botões de IA enviam o texto digitado ao modelo Gemini do Google para gerar um resultado. Todas as outras ferramentas rodam no seu navegador.",
  },
  category: {
    cardCount: { one: "{count} ferramenta", other: "{count} ferramentas" },
    pageCount: {
      one: "{count} ferramenta nesta categoria.",
      other: "{count} ferramentas nesta categoria.",
    },
    browse: "Ver ferramentas",
    starting: "Bons pontos de partida",
    related: "Categorias relacionadas",
    none: "Ainda não há ferramentas nesta categoria.",
  },
  toolPage: {
    whatIs: "O que é {name}?",
    categorySr: "categoria",
    relatedTools: "Ferramentas relacionadas",
    helpfulGuides: "Guias úteis",
    englishContent:
      "Por enquanto, o guia detalhado desta ferramenta (como usar, exemplos e perguntas frequentes) está em inglês.",
    details: {
      about: "O que esta ferramenta faz",
      howTo: "Como usar",
      examples: "Exemplos",
      examplesFallback:
        "Se não houver exemplos listados aqui, teste a área de trabalho acima com um exemplo simples da descrição.",
      features: "Principais recursos",
      howItWorks: "Como funciona",
      tips: "Dicas",
      limitations: "Limitações",
      limitationsFallback:
        "Confira o resultado antes de confiar nele. Arquivos grandes podem ficar mais lentos ou falhar se o aparelho tiver pouca memória.",
      disclaimer:
        "Veja o {link} para saber o que estas ferramentas não cobrem.",
      disclaimerLink: "aviso legal",
      faq: "Perguntas frequentes",
      howToName: "Como usar: {name}",
      defaultHowTo: [
        "Digite seus valores ou escolha um arquivo, se a ferramenta precisar.",
        "Execute a ação nesta página.",
        "Confira o resultado e depois copie, baixe ou redefina conforme precisar.",
      ],
      mobileQuestion: "Funciona no celular?",
      mobileAnswer:
        "Sim. Você pode abrir esta página no celular ou tablet. A escolha de arquivos e os downloads usam o navegador do seu aparelho. Arquivos grandes podem ser mais lentos em um celular pequeno do que no computador.",
      workspaceNote: "Observação",
    },
    privacy: {
      browser:
        "Esta ferramenta roda no seu navegador. Dados, arquivos e valores gerados ficam neste dispositivo. Favoritos e ferramentas recentes, se você usar, guardam apenas nomes de ferramentas no armazenamento local — nunca senhas, documentos ou conteúdo de QR codes.",
      gemini:
        "Os botões básicos funcionam no seu navegador. “Generate with AI”, “Analyze with AI” e “Compress with AI” enviam o texto digitado à API Gemini do Google por meio do ToolStarHub. Esse texto não é salvo aqui. No nível gratuito, o Google pode usá-lo para melhorar seus produtos. Os favoritos guardam apenas nomes de ferramentas.",
      humanizer:
        "“Rewrite text” fica no seu navegador. “Humanize with AI” envia o texto digitado à API Gemini do Google por meio do ToolStarHub. Esse texto não é salvo aqui. No nível gratuito, o Google pode usá-lo para melhorar seus produtos. Os favoritos guardam apenas nomes de ferramentas.",
      fetch:
        "“Check preview” envia a URL a este site, que acessa essa página pública e lê suas tags. A página não é salva aqui. Endereços privados ou que não sejam http são recusados. Os favoritos guardam apenas nomes de ferramentas.",
      see: "Veja a {link}.",
      link: "política de privacidade",
    },
  },
  categories: {
    calculators: {
      name: "Calculadoras",
      description: "Ferramentas de cálculo para o dia a dia",
      shortDescription:
        "Porcentagens, idade, unidades e outros cálculos do dia a dia.",
      intro:
        "Estas calculadoras respondem a uma pergunta numérica específica: uma porcentagem, uma variação percentual, um preço com desconto, uma gorjeta, o imposto sobre vendas, uma idade, os dias ou dias úteis entre datas, uma conversão de unidades, uma estimativa de empréstimo ou financiamento imobiliário, salários, a área de um cômodo, o GPA ou um número aleatório em um intervalo.",
      audience:
        "Use quando uma planilha for mais do que o necessário. São ajudantes de aritmética. Resultados de empréstimos, impostos e salários são estimativas, não aconselhamento financeiro, fiscal, médico ou de engenharia.",
    },
    "text-tools": {
      name: "Ferramentas de texto",
      description: "Ferramentas para escrever e processar texto",
      shortDescription: "Conte, limpe, converta e formate texto no navegador.",
      intro:
        "As ferramentas de texto contam palavras e caracteres, mudam maiúsculas e minúsculas, localizam e substituem, removem quebras de linha, numeram linhas, eliminam linhas duplicadas ou espaços extras, ordenam linhas, comparam dois rascunhos e geram texto de preenchimento para um layout.",
      audience:
        "São para redatores, revisores e qualquer pessoa que limpa um texto colado de um documento ou planilha. O texto colado fica no navegador.",
    },
    "developer-tools": {
      name: "Ferramentas para desenvolvedores",
      description:
        "Formate, codifique, minifique e converta dados no navegador",
      shortDescription:
        "Formate JSON, codifique dados, minifique código e converta Markdown ou HTML localmente.",
      intro:
        "As ferramentas para desenvolvedores formatam JSON, convertem entre JSON e CSV, testam expressões regulares, geram hashes SHA-256 ou SHA-512, codificam e decodificam Base64, URLs e HTML, minificam HTML, CSS ou JavaScript, convertem Markdown e geram UUIDs ou timestamps Unix. As ferramentas de cor aqui convertem hexadecimal em RGB, verificam contraste e criam gradientes e sombras em CSS.",
      audience:
        "São para quem edita código ou dados e quer o resultado na página sem instalar pacotes. Os minificadores e conversores seguem as regras de cada formato, então entradas inválidas são recusadas em vez de reescritas silenciosamente.",
    },
    "image-tools": {
      name: "Ferramentas de imagem",
      description: "Ferramentas de imagem e PDF no navegador",
      shortDescription:
        "Comprima, converta e inspecione imagens e PDFs sem enviar nada.",
      intro:
        "As ferramentas de imagem comprimem, redimensionam, recortam, convertem e extraem cores de uma imagem. As ferramentas de PDF desta categoria juntam, dividem, comprimem, contam páginas, leem ou removem metadados, extraem texto, transformam páginas em imagens JPG e criam um PDF a partir de imagens ou texto.",
      audience:
        "Os arquivos são processados no navegador. Um PDF digitalizado pode não ter texto selecionável. Compressão e conversão podem reduzir a qualidade, então confira o download antes de substituir o original.",
    },
    "seo-utilities": {
      name: "SEO e utilitários",
      description: "Links, slugs, QR codes e senhas",
      shortDescription:
        "Crie links UTM e slugs, gere ou leia QR codes e crie senhas.",
      intro:
        "Estes utilitários montam uma URL de campanha, transformam um título em slug de URL, criam um QR code a partir de texto ou dados estruturados, leem um QR code pela câmera ou por uma imagem e geram uma senha localmente.",
      audience:
        "A ferramenta de QR básica codifica texto simples ou uma URL. O QR Code Generator Pro adiciona Wi-Fi, contatos e controles de cor. O gerador de senhas cria uma sequência neste dispositivo. Ele não é um gerenciador de senhas.",
    },
    "ai-tools": {
      name: "Ferramentas de IA",
      description:
        "Criadores de prompts e ferramentas de escrita, com IA Gemini opcional",
      shortDescription:
        "Crie prompts, estude padrões de escrita e encurte rascunhos, no navegador ou com a IA Gemini.",
      intro:
        "Estas ferramentas ajudam você a escrever um prompt, descrever uma cena de imagem ou vídeo, analisar padrões de escrita ou encurtar um rascunho longo. O botão principal de cada ferramenta funciona no seu navegador. Os botões de IA (Generate, Analyze, Compress ou Humanize with AI) enviam o texto digitado ao modelo Gemini do Google para gerar o resultado.",
      audience:
        "Use o botão do navegador quando não quiser que seu texto saia deste dispositivo, e um botão de IA quando quiser que o Gemini o reescreva ou amplie. O texto enviado ao Gemini não é salvo neste site. As ferramentas de prompt retornam texto, não imagens nem vídeos. As ferramentas de escrita não determinam a autoria nem prometem que um rascunho mais curto vai passar por um detector.",
    },
  },
};

export default messages;
