import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "홈",
      allTools: "전체 도구",
      categories: "카테고리",
      guides: "가이드",
      popularTools: "인기 도구",
      about: "소개",
      howItWorks: "이용 방법",
      contact: "문의",
      exploreTools: "도구 둘러보기",
      mobileNav: "모바일",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
      openSearch: "검색 열기",
      closeSearch: "검색 닫기",
    },
    theme: { toLight: "라이트 테마로 전환", toDark: "다크 테마로 전환" },
    language: {
      label: "언어",
      current: "언어: {name}",
      englishOnly: "영어로만 제공",
    },
    search: {
      placeholder: "도구 검색...",
      label: "도구 검색",
      clear: "검색어 지우기",
      suggestions: "검색 제안",
      noResults: "도구를 찾을 수 없습니다",
    },
    consent: {
      title: "분석 쿠키",
      body: "방문 수를 집계하기 위해 Google Analytics를 사용하지만, 동의한 경우에만 사용합니다. 어느 쪽을 선택해도 도구는 똑같이 작동합니다. 자세한 내용은 {link}을 확인하세요.",
      privacyLink: "개인정보처리방침",
      accept: "동의",
      decline: "거부",
      settings: "쿠키 설정",
    },
    favorites: {
      add: "{name}을(를) 즐겨찾기에 추가",
      remove: "{name}을(를) 즐겨찾기에서 제거",
    },
    card: { popular: "인기", new: "신규", openTool: "도구 열기" },
    categoryNames: {
      calculators: "계산기",
      "text-tools": "텍스트 도구",
      "developer-tools": "개발자 도구",
      "image-tools": "이미지 도구",
      "seo-utilities": "SEO 및 유틸리티",
      "ai-tools": "AI 도구",
    },
    home: {
      filterAria: "도구 필터",
      filters: {
        all: "전체",
        pdf: "PDF",
        images: "이미지",
        "text-tools": "텍스트",
        "developer-tools": "개발자",
        calculators: "계산기",
        "seo-utilities": "유틸리티",
        "ai-tools": "AI",
      },
      noToolsInGroup: "이 그룹에는 도구가 없습니다.",
    },
    catalog: {
      filterAria: "도구 필터",
      filters: {
        all: "전체",
        calculators: "계산기",
        "image-tools": "이미지",
        pdf: "PDF",
        "text-tools": "텍스트",
        "developer-tools": "개발자",
        color: "색상",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "AI",
      },
      favorites: "즐겨찾기",
      sort: "정렬",
      sortName: "이름순",
      sortNewest: "최신순",
      sortCategory: "카테고리순",
      recentlyUsed: "최근 사용",
      recentEmpty: "사용한 도구가 여기에 표시됩니다.",
      viewAll: "모두 보기",
      searchResults: "검색 결과",
      allTools: "전체 도구",
      tools: "도구",
      noFavorites: "아직 즐겨찾기에 추가한 도구가 없습니다.",
      noToolsFound: "도구를 찾을 수 없습니다",
      noToolsCategory: "이 카테고리에는 아직 도구가 없습니다.",
      countFavorites: { other: "즐겨찾기 {count}개" },
      countResults: { other: "“{query}” 검색 결과 {count}개" },
      countOf: "전체 {total}개 중 {count}개 도구",
    },
    tool: {
      loading: "도구를 불러오는 중…",
      copy: "복사",
      copied: "복사됨",
      copyCss: "CSS 복사",
      copyLink: "링크 복사",
      linkCopied: "링크가 복사되었습니다",
      download: "다운로드",
      dropPrompt: "이미지를 여기로 끌어다 놓거나 파일을 선택하세요.",
      selected: "선택됨: {name}",
      copySuccess: "{what}이(가) 클립보드에 복사되었습니다.",
      copyFailed:
        "자동으로 복사하지 못했습니다. {what}이(가) 선택되어 있으니 Ctrl+C(Mac에서는 Cmd+C)를 눌러 복사하세요.",
    },
  },
  meta: {
    tagline: "바로 쓰는 무료 온라인 도구",
    description:
      "계산, 텍스트, 개발, 이미지, SEO, 일상 작업을 위한 빠르고 무료이며 쉬운 온라인 도구. 가입이 필요 없습니다.",
    toolsTitle: "전체 도구",
    toolsDescription:
      "계산, 텍스트, 개발, 이미지, SEO, 일상 작업을 위한 무료 온라인 도구를 둘러보세요.",
    categoriesTitle: "카테고리",
    categoriesDescription:
      "Tools Star Hub를 카테고리별로 살펴보세요: 계산기, 텍스트 도구, 개발자 도구, 이미지 및 PDF 도구, SEO 유틸리티, AI 도구.",
    categoryTitle: "{name} – 무료 온라인 도구",
    categoryShareAlt: "{name} – 무료 온라인 도구",
    toolShareAlt: "{name} – 무료 온라인 도구",
  },
  header: {
    primaryNav: "주 메뉴",
    logoHome: "{name} 홈",
    skip: "본문으로 건너뛰기",
  },
  breadcrumbs: {
    label: "이동 경로",
    home: "홈",
    tools: "도구",
    categories: "카테고리",
  },
  footer: {
    blurb:
      "계산, 텍스트, 개발, 이미지, SEO, 일상 작업을 위한 빠르고 간단한 온라인 도구.",
    tagline: "빠름 • 무료 • 브라우저에서 실행 • 가입 불필요",
    explore: "둘러보기",
    categories: "카테고리",
    legal: "법적 고지",
    favorites: "즐겨찾기",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    disclaimer: "면책 조항",
    languages: "언어",
    rights: "© {year} {name}. All rights reserved.",
  },
  home: {
    h1: "일상 작업을 위한 무료 온라인 도구",
    intro:
      "도구를 찾아 사용하고 결과를 받으세요. {name}은(는) 계정 없이 PDF, 이미지, 계산, 텍스트를 처리할 수 있는 간단한 공간입니다.",
    popularLabel: "인기:",
    trust: [
      "무료 사용",
      "가입 불필요",
      "빠르고 간편함",
      "파일은 브라우저에만 남음",
    ],
    popularTitle: "인기 도구",
    popularDescription:
      "파일, 이미지, 텍스트, 일상 계산에 많이 쓰는 도구입니다.",
    viewAllTools: "전체 도구 보기",
    catalogTitle: "필요한 모든 것을 한곳에.",
    catalogDescription:
      "이 사이트의 도구를 필터링해 보세요. 모든 도구는 브라우저에서 바로 열립니다.",
    categoriesTitle: "카테고리별로 찾기",
    categoriesDescription:
      "계산기, 텍스트, 개발자 유틸리티, 이미지와 PDF, 웹사이트 도구.",
    allCategories: "전체 카테고리",
    whyTitle: "왜 {name}인가요?",
    whyDescription:
      "별도의 앱이 필요했던 작업을 위한 간단하고 명확한 유틸리티 모음입니다.",
    values: {
      fast: {
        title: "빠름",
        note: "대부분의 도구가 브라우저에서 실행되며 같은 페이지에서 결과를 보여 줍니다.",
      },
      free: { title: "무료", note: "이 사이트의 도구는 비용이 들지 않습니다." },
      private: {
        title: "개인정보 보호",
        note: "파일과 붙여 넣은 텍스트는 사용자의 기기에서 처리됩니다. 페이지 방문은 개인정보처리방침에 설명된 대로 별도로 측정됩니다.",
      },
      noAccount: {
        title: "계정 불필요",
        note: "도구를 열고 바로 사용하세요. 계정이 필요 없습니다.",
      },
    },
    howTitle: "이용 방법",
    howDescription: "세 단계면 끝. 설치가 필요 없습니다.",
    steps: [
      {
        title: "도구 선택",
        description:
          "계산기, 파일 도구, 개발자 유틸리티를 검색하거나 선택하세요.",
      },
      {
        title: "내용 업로드 또는 입력",
        description: "도구가 요구하는 파일, 숫자, 텍스트를 추가하세요.",
      },
      {
        title: "결과 받기",
        description:
          "같은 페이지에서 결과를 복사하거나 다운로드하거나 확인하세요.",
      },
    ],
    guidesTitle: "유용한 가이드",
    guidesDescription:
      "이 사이트의 도구로 할 수 있는 작업에 대한 짧은 설명입니다.",
    allGuides: "전체 가이드",
    pricingTitle: "요금",
    pricingBody:
      "도구는 무료로 사용할 수 있습니다. 계정, 설치, 유료 요금제가 없습니다.",
    ctaTitle: "더 빠르게 일을 끝낼 준비가 되셨나요?",
    ctaBody: "{name}의 간단한 온라인 도구 모음을 둘러보세요.",
    ctaPrimary: "전체 도구 둘러보기",
    ctaSecondary: "도구 사용해 보기",
  },
  toolsPage: {
    title: "전체 도구",
    description:
      "검색하거나 카테고리로 필터링하거나 최근 사용한 도구나 즐겨찾기를 다시 열어 보세요. 새 도구는 추가되는 대로 여기에 표시됩니다.",
  },
  categoriesPage: {
    title: "카테고리",
    description: "카테고리를 선택하면 알맞은 도구를 더 빨리 찾을 수 있습니다.",
    body: "계산기는 일상적인 숫자 계산을 처리합니다. 텍스트 도구는 글자를 세고 정리합니다. 개발자 도구는 포맷, 인코딩, 압축(minify)을 합니다. 이미지 도구에는 병합, 분할, 텍스트 추출 같은 PDF 작업도 포함됩니다. SEO 및 유틸리티는 캠페인 링크, 슬러그, QR 코드, 비밀번호를 다룹니다. AI 도구는 브라우저에서 프롬프트를 만들고 초안을 줄이며, AI 버튼은 입력한 텍스트를 Google의 Gemini 모델로 보내 결과를 생성합니다. 그 밖의 모든 도구는 브라우저에서 실행됩니다.",
  },
  category: {
    cardCount: { other: "도구 {count}개" },
    pageCount: { other: "이 카테고리에 도구 {count}개가 있습니다." },
    browse: "도구 보기",
    starting: "추천 시작점",
    related: "관련 카테고리",
    none: "이 카테고리에는 아직 도구가 없습니다.",
  },
  toolPage: {
    whatIs: "{name}이란?",
    categorySr: "카테고리",
    relatedTools: "관련 도구",
    helpfulGuides: "유용한 가이드",
    englishContent:
      "이 도구의 자세한 안내(사용법, 예시, 자주 묻는 질문)는 현재 영어로만 제공됩니다.",
    details: {
      about: "이 도구가 하는 일",
      howTo: "사용 방법",
      examples: "예시",
      examplesFallback:
        "여기에 예시가 없다면 설명에 나온 간단한 예로 위의 작업 영역을 사용해 보세요.",
      features: "주요 기능",
      howItWorks: "작동 방식",
      tips: "팁",
      limitations: "제한 사항",
      limitationsFallback:
        "결과를 사용하기 전에 확인하세요. 기기 메모리가 부족하면 큰 파일은 느려지거나 실패할 수 있습니다.",
      disclaimer: "이 도구가 다루지 않는 내용은 {link}을(를) 참고하세요.",
      disclaimerLink: "면책 조항",
      faq: "자주 묻는 질문",
      defaultHowTo: [
        "값을 입력하거나 도구에 필요하면 파일을 선택하세요.",
        "이 페이지에서 작업을 실행하세요.",
        "결과를 확인한 뒤 필요에 따라 복사, 다운로드 또는 초기화하세요.",
      ],
      mobileQuestion: "모바일에서도 작동하나요?",
      mobileAnswer:
        "네. 이 페이지는 휴대폰이나 태블릿에서도 열 수 있습니다. 파일 선택과 다운로드는 기기의 브라우저를 사용합니다. 큰 파일은 작은 휴대폰에서 컴퓨터보다 느릴 수 있습니다.",
      workspaceNote: "참고",
    },
    privacy: {
      browser:
        "이 도구는 브라우저에서 실행됩니다. 입력값, 파일, 생성된 값은 이 기기에 남습니다. 즐겨찾기와 최근 사용한 도구를 이용하더라도 로컬 저장소에는 도구 이름만 저장되며, 비밀번호나 문서, QR 내용은 절대 저장되지 않습니다.",
      gemini:
        "기본 버튼은 브라우저에서 작동합니다. “Generate with AI”, “Analyze with AI”, “Compress with AI”는 입력한 텍스트를 ToolStarHub를 통해 Google의 Gemini API로 보냅니다. 해당 텍스트는 이곳에 저장되지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다. 즐겨찾기에는 도구 이름만 저장됩니다.",
      humanizer:
        "“Rewrite text”는 브라우저에서 처리됩니다. “Humanize with AI”는 입력한 텍스트를 ToolStarHub를 통해 Google의 Gemini API로 보냅니다. 해당 텍스트는 이곳에 저장되지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다. 즐겨찾기에는 도구 이름만 저장됩니다.",
      fetch:
        "“Check preview”는 URL을 이 사이트로 보내고, 사이트가 해당 공개 페이지를 요청해 태그를 읽습니다. 페이지는 이곳에 저장되지 않습니다. 비공개 주소나 http가 아닌 주소는 거부됩니다. 즐겨찾기에는 도구 이름만 저장됩니다.",
      see: "자세한 내용은 {link}을 확인하세요.",
      link: "개인정보처리방침",
    },
  },
  categories: {
    calculators: {
      name: "계산기",
      description: "일상에서 쓰는 계산 도구",
      shortDescription: "퍼센트, 나이, 단위 등 일상적인 계산.",
      intro:
        "이 계산기들은 구체적인 숫자 질문에 답합니다. 퍼센트, 변화율, 할인가, 팁, 판매세, 나이, 두 날짜 사이의 일수나 영업일, 단위 변환, 대출이나 주택담보대출 추정, 임금, 방 면적, GPA, 범위 안의 난수 등입니다.",
      audience:
        "스프레드시트까지 쓸 필요가 없을 때 사용하세요. 산수를 돕는 도구입니다. 대출, 세금, 임금 결과는 추정치이며 금융, 세무, 의료, 공학적 조언이 아닙니다.",
    },
    "text-tools": {
      name: "텍스트 도구",
      description: "글쓰기와 텍스트 처리를 위한 도구",
      shortDescription:
        "브라우저에서 텍스트를 세고, 정리하고, 변환하고, 서식을 맞추세요.",
      intro:
        "텍스트 도구는 단어와 글자 수 세기, 대소문자 변환, 찾아 바꾸기, 줄바꿈 제거, 줄 번호 매기기, 중복 줄이나 불필요한 공백 제거, 줄 정렬, 두 초안 비교, 레이아웃용 더미 텍스트 생성을 지원합니다.",
      audience:
        "작가, 편집자, 그리고 문서나 스프레드시트에서 붙여 넣은 텍스트를 정리하려는 모든 사람을 위한 도구입니다. 붙여 넣은 텍스트는 브라우저에만 남습니다.",
    },
    "developer-tools": {
      name: "개발자 도구",
      description: "브라우저에서 데이터 포맷, 인코딩, 압축, 변환",
      shortDescription:
        "JSON 포맷, 데이터 인코딩, 코드 압축, Markdown·HTML 변환을 로컬에서.",
      intro:
        "개발자 도구는 JSON 포맷, JSON과 CSV 변환, 정규식 테스트, SHA-256 또는 SHA-512 해시, Base64·URL·HTML 인코딩과 디코딩, HTML·CSS·JavaScript 압축, Markdown 변환, UUID나 Unix 타임스탬프 생성을 지원합니다. 색상 도구로는 hex 값을 RGB로 바꾸고, 명암비를 확인하고, CSS 그라데이션과 그림자를 만들 수 있습니다.",
      audience:
        "패키지를 설치하지 않고 페이지에서 바로 결과를 얻고 싶은 코드·데이터 작업자를 위한 도구입니다. 압축기와 변환기는 각 형식의 규칙을 따르므로, 잘못된 입력은 몰래 고쳐지지 않고 거부됩니다.",
    },
    "image-tools": {
      name: "이미지 도구",
      description: "브라우저 기반 이미지 및 PDF 도구",
      shortDescription: "업로드 없이 이미지와 PDF를 압축, 변환, 확인하세요.",
      intro:
        "이미지 도구는 이미지 압축, 크기 조정, 자르기, 변환, 색상 추출을 지원합니다. 이 카테고리의 PDF 도구는 병합, 분할, 압축, 페이지 수 세기, 메타데이터 확인 또는 제거, 텍스트 추출, 페이지를 JPG 이미지로 변환, 이미지나 텍스트로 PDF 만들기를 지원합니다.",
      audience:
        "파일은 브라우저에서 처리됩니다. 스캔한 PDF에서는 선택 가능한 텍스트가 나오지 않을 수 있습니다. 압축과 변환으로 화질이 떨어질 수 있으니, 원본을 교체하기 전에 다운로드한 파일을 확인하세요.",
    },
    "seo-utilities": {
      name: "SEO 및 유틸리티",
      description: "링크, 슬러그, QR 코드, 비밀번호",
      shortDescription:
        "UTM 링크와 슬러그를 만들고, QR 코드를 생성·스캔하고, 비밀번호를 생성하세요.",
      intro:
        "이 유틸리티는 캠페인 URL을 만들고, 제목을 URL 슬러그로 바꾸고, 텍스트나 구조화된 데이터로 QR 코드를 만들고, 카메라나 이미지로 QR 코드를 스캔하고, 기기에서 비밀번호를 생성합니다.",
      audience:
        "기본 QR 도구는 일반 텍스트나 URL을 인코딩합니다. QR Code Generator Pro는 Wi-Fi, 연락처, 색상 설정을 추가로 지원합니다. 비밀번호 생성기는 이 기기에서 문자열을 만듭니다. 비밀번호 관리자가 아닙니다.",
    },
    "ai-tools": {
      name: "AI 도구",
      description: "프롬프트 작성 및 글쓰기 도구(Gemini AI 선택 사용)",
      shortDescription:
        "브라우저나 Gemini AI로 프롬프트를 만들고, 글의 패턴을 살펴보고, 초안을 줄이세요.",
      intro:
        "이 도구들은 프롬프트 작성, 이미지나 영상 장면 묘사, 글의 패턴 분석, 긴 초안 줄이기를 돕습니다. 각 도구의 기본 버튼은 브라우저에서 실행됩니다. AI 버튼(Generate, Analyze, Compress, Humanize with AI)은 입력한 텍스트를 Google의 Gemini 모델로 보내 결과를 생성합니다.",
      audience:
        "텍스트가 기기를 벗어나지 않기를 원한다면 브라우저 버튼을, Gemini가 다시 쓰거나 내용을 늘려 주기를 원한다면 AI 버튼을 사용하세요. Gemini로 보낸 텍스트는 이 사이트에 저장되지 않습니다. 프롬프트 도구는 이미지나 영상이 아닌 텍스트를 반환합니다. 글쓰기 도구는 작성자를 판정하지 않으며, 줄인 초안이 탐지기를 통과한다고 보장하지 않습니다.",
    },
  },
};

export default messages;
