import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "AI 프롬프트 생성기는 입력한 주제, 목표, 대상 독자, 형식으로 구조화된 프롬프트를 만듭니다. '프롬프트 생성'은 브라우저 안에서만 작동합니다. 'AI로 생성'은 이 항목들을 ToolStarHub를 거쳐 Google Gemini API로 보냅니다.",
    "content": {
      "about": "AI 프롬프트 생성기는 입력한 항목을 복사할 수 있는 프롬프트로 바꿉니다. 프리셋은 용도, 어조, 형식, 상세도, 첫 지시문만 채웁니다. 주제는 직접 입력해야 합니다.",
      "howTo": [
        "프리셋을 고르거나 용도를 직접 입력하세요.",
        "주제나 목표를 입력하세요. 둘 중 하나는 꼭 필요합니다.",
        "대상 독자, 어조, 언어, 형식, 원하는 상세도를 정하세요.",
        "브라우저에서 조합하려면 '프롬프트 생성'을, Gemini가 다듬게 하려면 'AI로 생성'을 클릭하세요.",
        "'지우기'로 양식을 초기화할 수 있습니다."
      ],
      "features": [
        "기사, 게시물, 대본, 상품 문구, 연구 개요, 코딩 작업용 프리셋 12가지.",
        "작업, 대상 독자, 어조, 언어, 형식을 밝힌 구조화된 프롬프트.",
        "부족한 사실을 지어내지 말라고 모델에 요청하는 문장.",
        "복사와 지우기만 있습니다. 아무것도 저장되지 않습니다."
      ],
      "examples": [
        {
          "title": "윤년 나이에 관한 블로그 글",
          "body": "프리셋: 블로그 글. 주제: 2월 29일생의 나이 계산법. 대상 독자: 날짜 계산기 사용자. 프롬프트는 짧은 도입부와 군더더기 없는 마무리를 요청합니다."
        },
        {
          "title": "코딩 작업",
          "body": "프리셋: 코딩 프롬프트. 목표: 빈 페이지 범위를 거부하는 함수 작성. 추가 지시: TypeScript를 쓰고 실패하는 예시를 보여 줄 것. 프롬프트는 언어, 입력, 완료 기준을 묻습니다."
        }
      ],
      "explanation": "'프롬프트 생성'은 답변을 라벨이 붙은 줄로 묶습니다. 주제와 목표가 모두 비어 있으면 도구가 멈추고 둘 중 하나를 요청합니다. 'AI로 생성'은 이 항목들을 Gemini에 보내 다듬어진 프롬프트를 돌려받습니다.",
      "limitations": "'프롬프트 생성'은 입력된 항목만 합치며 주제나 목표가 필요합니다. 프리셋은 스타일 항목을 채우지만 주제를 지어내지는 않습니다. 'AI로 생성'은 Gemini로 프롬프트를 다듬습니다. 이 페이지가 글쓰기 모델에서 프롬프트를 실행하지는 않습니다.",
      "tips": [
        "독자를 구체적으로 적으세요. '모든 사람'보다 '초보 부모'가 더 도움이 됩니다.",
        "결과의 형태를 알려 주세요. 목록, 이메일, 대본 등입니다.",
        "알고 있는 사실은 추가 지시에 적어 두면 모델이 추측하지 않아도 됩니다."
      ],
      "faqs": [
        {
          "question": "이 도구는 AI를 사용하나요?",
          "answer": "'프롬프트 생성'은 이 페이지에서 프롬프트를 만듭니다. 'AI로 생성'은 항목을 ToolStarHub를 거쳐 Google Gemini API로 보내 다듬어진 프롬프트를 돌려받습니다. 어느 쪽이든 다른 모델에 붙여 넣을 수 있습니다."
        },
        {
          "question": "주제만 정해져 있다면요?",
          "answer": "주제만으로도 생성할 수 있습니다. 읽은 사람이 무엇을 할 수 있어야 하는지 정해지면 목표를 추가하세요."
        },
        {
          "question": "제 텍스트가 서버로 전송되나요?",
          "answer": "'프롬프트 생성'은 이 탭 안에서만 작동하며 항목을 업로드하지 않습니다. 'AI로 생성'은 항목을 ToolStarHub를 거쳐 Google Gemini API로 보내 다듬어진 프롬프트를 돌려받습니다. ToolStarHub는 이 텍스트를 저장하지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다."
        },
        {
          "question": "좋은 AI 프롬프트의 조건은 무엇인가요?",
          "answer": "원하는 것, 대상, 어조, 형식, 길이를 알려 주세요. 형용사를 더 붙이는 것보다 명확한 목표와 결과 예시가 보통 더 도움이 됩니다."
        },
        {
          "question": "이 프롬프트를 ChatGPT, Gemini, Claude에서 쓸 수 있나요?",
          "answer": "네. 결과는 일반 텍스트라서 어떤 채팅 도우미에도 붙여 넣을 수 있습니다. 다만 같은 프롬프트라도 모델마다 답이 다를 수 있습니다."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "'프롬프트 생성'은 브라우저에서 프롬프트를 만듭니다. 'AI로 생성'은 입력한 항목을 ToolStarHub를 거쳐 Google Gemini API로 보내 완성도 높은 프롬프트를 돌려받습니다. 텍스트는 저장되지 않습니다.",
      "Platform or use case": "플랫폼 또는 용도",
      "Topic": "주제",
      "Goal": "목표",
      "Audience": "대상 독자",
      "Tone": "어조",
      "Language": "언어",
      "Output format": "출력 형식",
      "Level of detail": "상세도",
      "Brief": "간단히",
      "Medium": "보통",
      "High": "자세히",
      "Additional instructions": "추가 지시",
      "Generate prompt": "프롬프트 생성",
      "Prompt": "프롬프트",
      "AI prompt": "AI 프롬프트",
      "Blog article": "블로그 글",
      "SEO article": "SEO 글",
      "Social media post": "소셜 미디어 게시물",
      "YouTube script": "YouTube 대본",
      "YouTube thumbnail prompt": "YouTube 썸네일 프롬프트",
      "Image generation": "이미지 생성",
      "Video generation": "동영상 생성",
      "Product description": "상품 설명",
      "Email": "이메일",
      "Marketing copy": "마케팅 문구",
      "Academic/research prompt": "학술/연구 프롬프트",
      "Coding prompt": "코딩 프롬프트",
      "Add a topic or a goal before generating a prompt.": "프롬프트를 생성하기 전에 주제나 목표를 입력하세요."
    },
    "note": "'프롬프트 생성'은 AI 모델이 가장 정확하게 따르는 영어로 프롬프트를 씁니다. 답변 언어는 '언어' 항목에서 정할 수 있습니다. 'AI로 생성'은 한국어 입력도 이해합니다."
  },
  "prompt-to-image": {
    "answer": "프롬프트-이미지 도구는 피사체와 스타일로 복사할 수 있는 이미지 프롬프트를 씁니다. 이미지 자체는 만들지 않습니다. 'AI로 생성'도 더 자세한 프롬프트만 돌려줍니다.",
    "content": {
      "about": "프롬프트-이미지 생성기는 이미지 모델용 프롬프트를 씁니다. 피사체, 장소, 빛, 구도를 설명하세요. 연결된 이미지 API가 없으므로 이 페이지가 이미지를 그리지는 않습니다.",
      "howTo": [
        "출발점이 필요하면 스타일 프리셋을 고르세요.",
        "피사체를 설명하세요. 피사체가 없으면 프롬프트를 만들지 않습니다.",
        "중요하다면 배경, 빛, 카메라, 색, 분위기, 화면 비율을 추가하세요.",
        "이미지에 들어가면 안 되는 것은 네거티브 프롬프트에 적으세요.",
        "'프롬프트 만들기'를 클릭한 뒤 프롬프트와 네거티브 프롬프트를 각각 복사하세요."
      ],
      "features": [
        "사진, 시네마틱, 일러스트, 제품, 인물, 풍경, 건축, 판타지, 애니메, 3D, 썸네일 프리셋.",
        "메인 프롬프트와 네거티브 프롬프트용 복사 버튼이 따로 있습니다.",
        "빈 항목은 빠지므로 프롬프트에 빈 라벨이 남지 않습니다."
      ],
      "examples": [
        {
          "title": "제품 사진",
          "body": "피사체: 스테인리스 물병. 프리셋: 제품 사진. 화면 비율: 1:1. 네거티브 프롬프트: 불필요한 로고, 사람, 어수선한 테이블. 결과는 파일이 아니라 스튜디오 촬영 설명입니다."
        },
        {
          "title": "썸네일",
          "body": "피사체: 형광펜으로 표시한 PDF를 든 사람. 프리셋: YouTube 썸네일. 구도는 '피사체 하나, 짧은 제목을 넣을 공간'으로 유지됩니다. 제목 문구는 여전히 직접 써야 합니다."
        }
      ],
      "explanation": "입력한 항목은 각각 짧은 구절이 됩니다. 프롬프트가 구체적인 대상을 묘사하도록 피사체는 필수입니다. 프리셋은 스타일과 관련 항목 몇 개를 바꾸지만 이미 입력한 피사체는 지우지 않습니다.",
      "limitations": "이 페이지는 프롬프트와, 원하면 네거티브 프롬프트를 씁니다. 이미지 파일은 제공하지 않습니다. 피사체는 필수입니다. 'AI로 생성'은 Gemini에 더 긴 프롬프트를 요청하며, 그 결과를 이미지 도구에 붙여 넣으면 됩니다.",
      "tips": [
        "피사체 하나가 군중보다 설명하기 쉽습니다.",
        "빛을 구체적으로 적으세요. '창문 빛'과 '강한 한낮 햇빛'은 전혀 다른 이미지를 만듭니다.",
        "손가락이 더 생기거나 글자가 깨지는 등 반복되는 문제는 네거티브 프롬프트로 막으세요."
      ],
      "faqs": [
        {
          "question": "왜 이미지가 나오지 않나요?",
          "answer": "이 페이지는 프롬프트만 쓰고 이미지를 만들지 않습니다. 'AI로 생성'은 Gemini에 더 자세한 프롬프트를 요청합니다. 그 프롬프트를 이미지를 만드는 서비스에 붙여 넣으세요."
        },
        {
          "question": "모든 모델이 프롬프트를 똑같이 읽나요?",
          "answer": "아닙니다. 모델마다 표현에 다르게 반응합니다. 결과를 명확한 브리프로 보고 사용하는 도구에 맞게 조정하세요."
        },
        {
          "question": "제 텍스트가 서버로 전송되나요?",
          "answer": "'프롬프트 만들기'는 이 브라우저 안에서만 작동하며 브리프를 업로드하지 않습니다. 'AI로 생성'은 브리프를 ToolStarHub를 거쳐 Google Gemini API로 보내 더 긴 프롬프트를 돌려받습니다. ToolStarHub는 이 텍스트를 저장하지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다. 그래도 이 페이지가 이미지를 만들지는 않습니다."
        },
        {
          "question": "좋은 이미지 프롬프트는 어떻게 쓰나요?",
          "answer": "피사체부터 쓰고 배경, 빛, 카메라나 화풍, 색감, 분위기, 화면 비율을 더하세요. 중요한 부분은 구체적으로 쓰고 나머지는 빼세요."
        },
        {
          "question": "네거티브 프롬프트란 무엇인가요?",
          "answer": "글자, 여분의 손가락, 흐림처럼 이미지에 들어가면 안 되는 것을 나열한 것입니다. 모든 이미지 모델이 이를 읽지는 않습니다."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "'프롬프트 만들기'는 브라우저에서 이미지 프롬프트를 씁니다. 'AI로 생성'은 브리프를 ToolStarHub를 거쳐 Google Gemini API로 보내 더 풍부한 이미지 프롬프트를 돌려받습니다. 이 페이지는 이미지를 만들지 않습니다. 텍스트는 저장되지 않습니다.",
      "Style presets": "스타일 프리셋",
      "Composition": "구도",
      "Colors": "색상",
      "Quality and detail": "품질과 디테일",
      "Things you want left out of the picture.": "이미지에 넣고 싶지 않은 것.",
      "Image prompt": "이미지 프롬프트",
      "AI image prompt": "AI 이미지 프롬프트",
      "Photorealistic": "실사풍",
      "Cinematic": "시네마틱",
      "Illustration": "일러스트",
      "Product photography": "제품 사진",
      "Portrait": "인물 사진",
      "Landscape": "풍경",
      "Architecture": "건축",
      "Fantasy": "판타지",
      "Anime": "애니메",
      "3D render": "3D 렌더",
      "YouTube thumbnail": "YouTube 썸네일",
      "Describe the subject before building the prompt.": "프롬프트를 만들기 전에 피사체를 설명하세요."
    },
    "note": "만들어진 프롬프트는 이미지 모델이 가장 잘 이해하는 영어 라벨을 사용합니다. 설명은 어떤 언어로 입력해도 됩니다."
  },
  "prompt-to-video": {
    "answer": "프롬프트-동영상 도구는 동영상 모델에 붙여 넣을 수 있는 샷 설명을 씁니다. 클립을 렌더링하지는 않습니다. 'AI로 생성'도 글로 된 프롬프트만 돌려줍니다.",
    "content": {
      "about": "프롬프트-동영상 생성기는 한 샷의 설명을 씁니다. 누가 또는 무엇이 화면에 있는지, 무엇이 움직이는지, 카메라가 어떻게 움직이는지, 샷이 얼마나 이어지는지입니다. 동영상은 만들지 않습니다.",
      "howTo": [
        "시작 스타일로 프리셋을 고르거나, 항목을 비워 두고 직접 쓰세요.",
        "피사체나 동작을 입력하세요. 둘 중 하나는 필수입니다.",
        "장면, 카메라, 렌즈, 빛, 길이, 화면 비율을 설명하세요.",
        "오디오나 대사는 샷에 필요할 때만 추가하세요.",
        "'프롬프트 만들기'를 클릭하고 텍스트를 복사하세요. '지우기'는 기본 길이를 포함해 양식을 초기화합니다."
      ],
      "features": [
        "시네마틱, 제품 광고, 소셜 미디어, YouTube, 다큐멘터리, 여행, 액션, 패션, 자연, 역사 장면, 애니메이션 프리셋.",
        "요청을 끊김 없는 한 샷으로 제한하는 마지막 문장.",
        "피하고 싶은 움직임이나 화면 오류를 위한 별도의 네거티브 프롬프트."
      ],
      "examples": [
        {
          "title": "제품 주위를 도는 샷",
          "body": "피사체: 도자기 머그잔. 동작: 김이 피어오름. 프리셋: 제품 광고. 길이는 6초로 유지됩니다. 프롬프트는 원을 그리는 카메라 움직임과 스튜디오 조명을 요청합니다."
        },
        {
          "title": "잔잔한 여행 샷",
          "body": "피사체: 해안 산책로. 동작: 한 사람이 카메라에서 멀어짐. 프리셋: 여행. 빛이 막연해지지 않도록 시간대를 배경 항목에 적으세요."
        }
      ],
      "explanation": "동영상 모델은 여러 장면보다 하나의 동작을 더 잘 처리합니다. 생성기는 구절을 일정한 순서로 유지하고 '끊김 없는 한 샷'을 덧붙여 요청이 스토리보드가 되지 않게 합니다.",
      "limitations": "생성기는 끊김 없는 한 샷을 설명합니다. 동영상을 렌더링하거나 다운로드하지 않습니다. 피사체나 동작이 필요합니다. 길이, 카메라, 대사는 입력한 경우에만 들어갑니다.",
      "tips": [
        "무엇이 움직이고 무엇이 멈춰 있는지 적으세요.",
        "'짧게'보다 '5초' 같은 길이가 더 유용합니다.",
        "대사가 필요하면 그 대사를 직접 쓰세요. 모델에게 연설을 지어내게 하지 마세요."
      ],
      "faqs": [
        {
          "question": "이 페이지에서 동영상을 다운로드할 수 있나요?",
          "answer": "아니요. 이 페이지는 동영상을 렌더링하지 않습니다. 'AI로 생성'은 Gemini가 쓴 샷 프롬프트만 돌려줍니다. 신뢰하는 동영상 도구에 복사해 사용하세요."
        },
        {
          "question": "동작만 설명하면 어떻게 되나요?",
          "answer": "동작만으로도 충분합니다. 피사체를 추가하면 샷을 떠올리기 더 쉬워집니다."
        },
        {
          "question": "제 텍스트가 서버로 전송되나요?",
          "answer": "'프롬프트 만들기'는 이 탭에서 샷을 씁니다. 'AI로 생성'은 샷 항목을 ToolStarHub를 거쳐 Google Gemini API로 보내 글로 된 프롬프트를 돌려받습니다. ToolStarHub는 이 텍스트를 저장하지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다. 동영상 파일은 만들어지지 않습니다."
        },
        {
          "question": "AI 동영상 프롬프트는 어떻게 쓰나요?",
          "answer": "한 샷을 설명하세요. 피사체, 동작, 배경, 카메라 움직임, 렌즈, 빛, 길이입니다. 긴 이야기보다 짧고 구체적인 프롬프트가 보통 더 잘 됩니다."
        },
        {
          "question": "어떤 동영상 모델에서 이 프롬프트를 쓸 수 있나요?",
          "answer": "결과는 일반 텍스트라서 어떤 텍스트-동영상 도구에도 붙여 넣을 수 있습니다. 카메라와 시간 지시는 모델마다 다르게 따릅니다."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "'프롬프트 만들기'는 브라우저에서 동영상 프롬프트를 씁니다. 'AI로 생성'은 브리프를 ToolStarHub를 거쳐 Google Gemini API로 보내 샷 프롬프트를 돌려받습니다. 이 페이지는 동영상을 만들지 않습니다. 텍스트는 저장되지 않습니다.",
      "Video subject": "동영상 피사체",
      "Scene": "장면",
      "Action": "동작",
      "Camera movement": "카메라 움직임",
      "Lens": "렌즈",
      "Visual style": "시각 스타일",
      "Duration": "길이",
      "Audio or dialogue": "오디오 또는 대사",
      "Video prompt": "동영상 프롬프트",
      "AI video prompt": "AI 동영상 프롬프트",
      "Cinematic": "시네마틱",
      "Product commercial": "제품 광고",
      "Social media": "소셜 미디어",
      "YouTube": "YouTube",
      "Documentary": "다큐멘터리",
      "Travel": "여행",
      "Fashion": "패션",
      "Nature": "자연",
      "Historical": "역사",
      "Animation": "애니메이션",
      "Add a subject or an action before building the prompt.": "프롬프트를 만들기 전에 피사체나 동작을 입력하세요."
    },
    "note": "만들어진 프롬프트는 동영상 모델이 가장 잘 이해하는 영어 라벨을 사용합니다. 설명은 어떤 언어로 입력해도 됩니다."
  },
  "ai-article-detector": {
    "answer": "이 페이지는 문장 길이와 반복되는 표현 같은 글쓰기 패턴을 확인합니다. 'AI로 분석'도 글쓰기 패턴 분석입니다. 사람이 썼는지 모델이 썼는지 판정하지는 않습니다.",
    "content": {
      "about": "AI 글 감지기는 붙여 넣은 초안을 살펴 문장 길이, 그 길이의 변화 정도, 어휘의 폭, 반복되는 짧은 표현을 알려 줍니다. 결과의 이름은 '글쓰기 패턴 분석'이며 그 이상을 주장하지 않습니다.",
      "howTo": [
        "40단어 이상 붙여 넣으세요.",
        "브라우저 검사는 '글 분석'을, Gemini의 글쓰기 패턴 분석은 'AI로 분석'을 클릭하세요.",
        "수치와 그 아래 설명을 읽으세요.",
        "샘플이 너무 짧으면 점수 대신 그렇다고 알려 줍니다.",
        "'지우기'로 페이지에서 텍스트를 지웁니다."
      ],
      "features": [
        "평균 문장 길이와 변화 정도(낮음, 보통, 다양함).",
        "서로 다른 단어 수에 따른 어휘 평가.",
        "세 번 이상 나오는 네 단어 표현.",
        "상투적인 표현이 있으면 그 짧은 목록."
      ],
      "examples": [
        {
          "title": "반복이 많은 초안",
          "body": "같은 네 단어가 여러 문장에 나오면 횟수와 함께 표시됩니다. 초안이 반복된다는 뜻이지, 모델이 썼다는 뜻은 아닙니다."
        },
        {
          "title": "짧은 캡션",
          "body": "스무 단어로는 부족합니다. 문장 하나를 패턴으로 오인하지 않도록 40단어가 필요합니다."
        }
      ],
      "explanation": "문장 변화는 문장 길이의 퍼짐을 평균과 비교합니다. 어휘는 서로 다른 단어 수를 전체와 비교합니다. 두 값 모두 평범한 퇴고로도 바뀝니다. 공들인 사람의 글이 고르게 보일 수도, 생성된 글이 다양해 보일 수도 있습니다. 결과에도 그렇게 적혀 있습니다.",
      "limitations": "브라우저 검사에는 40단어 이상이 필요합니다. 문장 길이, 어휘의 폭, 반복 표현을 알려 줍니다. 백분율이나 모델이 썼다는 판정은 제공하지 않습니다. 'AI로 분석'은 같은 종류의 설명을 받기 위해 텍스트를 Gemini로 보냅니다.",
      "tips": [
        "제목이 아니라 문단 전체를 사용하세요.",
        "반복 표현은 퇴고의 단서로 보세요. 독자가 눈치챌 만하면 지우세요.",
        "이 평가로 누군가가 모델을 썼다고 비난하지 마세요."
      ],
      "faqs": [
        {
          "question": "AI가 쓴 글인지 알 수 있나요?",
          "answer": "확실히는 알 수 없습니다. 패턴 검사는 양쪽 방향으로 틀릴 수 있습니다. 결과는 초안에 대한 설명이지 판정이 아닙니다."
        },
        {
          "question": "왜 백분율이 없나요?",
          "answer": "백분율은 증거처럼 보이기 때문입니다. '글 분석'과 'AI로 분석' 모두 패턴을 설명할 뿐, 누가 썼는지 안다고 주장하지 않습니다."
        },
        {
          "question": "제 텍스트가 서버로 전송되나요?",
          "answer": "'글 분석'은 이 탭에서 패턴을 세며 초안을 업로드하지 않습니다. 'AI로 분석'은 초안을 ToolStarHub를 거쳐 Google Gemini API로 보내 글로 된 설명을 받습니다. ToolStarHub는 이 텍스트를 저장하지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다."
        },
        {
          "question": "AI 감지기는 정확한가요?",
          "answer": "어떤 감지기도 누가 글을 썼는지 증명할 수 없습니다. 패턴 기반 점수는 사람의 글을 잘못 표시하거나 다듬은 AI 글을 놓칠 수 있으므로, 결과는 증거가 아니라 검토의 계기로 보세요."
        },
        {
          "question": "이 도구는 어떤 패턴을 보나요?",
          "answer": "문장 길이, 어휘의 다양성, 반복 표현을 알려 주므로 초안이 밋밋하거나 반복적인 부분을 찾을 수 있습니다."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "'글 분석'은 브라우저에서 패턴을 확인합니다. 'AI로 분석'은 초안을 ToolStarHub를 거쳐 Google Gemini API로 보내 글쓰기 패턴을 분석합니다. 어느 결과도 누가 썼는지 판정할 수 없습니다. 초안은 저장되지 않습니다.",
      "Article or draft": "기사 또는 초안",
      "Paste at least 40 words.": "40단어 이상 붙여 넣으세요.",
      "Analyze writing": "글 분석",
      "Analyze with AI": "AI로 분석",
      "Avg. sentence": "평균 문장",
      "{0} words": "{0}단어",
      "Sentence variation": "문장 변화",
      "Vocabulary": "어휘",
      "Writing pattern analysis": "글쓰기 패턴 분석",
      "No four-word phrase repeats three or more times.": "세 번 이상 나오는 네 단어 표현이 없습니다.",
      "Familiar stock phrases found:": "발견된 상투적 표현:",
      "AI writing analysis": "AI 글쓰기 분석",
      "Paste some writing first.": "먼저 텍스트를 붙여 넣으세요.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "40단어 이상 붙여 넣으세요. 짧은 발췌로는 패턴이 보이지 않습니다.",
      "Low": "낮음",
      "Moderate": "보통",
      "Varied": "다양함",
      "Narrow": "좁음",
      "Mixed": "혼합",
      "Broad": "넓음",
      "\"{0}\" appears {1} times": "\"{0}\" {1}회 등장",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "이것은 글쓰기 패턴이지 누가 썼는지에 대한 증거가 아닙니다. 비슷한 패턴은 퇴고한 사람의 초안에도, 생성된 초안에도 나타납니다. 감지기는 양쪽 방향으로 틀릴 수 있습니다."
    },
    "note": "브라우저 검사는 영어 단어 목록과 상투 표현을 사용하므로 영어 글에 가장 잘 맞습니다. 'AI로 분석'은 한국어 글에도 사용할 수 있습니다."
  },
  "ai-article-compressor": {
    "answer": "기사 압축기는 군더더기와 반복된 문장을 지워 초안을 줄입니다. 'AI로 압축'은 Gemini에 핵심을 유지하도록 요청합니다. 게시하기 전에 결과를 확인하세요.",
    "content": {
      "about": "AI 기사 압축기는 긴 초안을 짧게 만듭니다. 약한 압축은 장황한 표현 몇 가지를 바꾸고 공백을 정리합니다. 보통과 강한 압축은 반복된 문장도 지웁니다. 결과를 꼭 읽으세요. 문장이 사라지면 의미가 달라질 수 있습니다.",
      "howTo": [
        "기사를 붙여 넣으세요. 12단어 이상이어야 합니다.",
        "약한, 보통, 강한 압축 중에서 고르세요.",
        "브라우저 규칙을 적용하려면 '기사 줄이기'를, Gemini가 줄이게 하려면 'AI로 압축'을 클릭하세요.",
        "단어 수를 비교하고, 뜻이 그대로 전달되면 짧은 초안을 복사하세요.",
        "'지우기'는 두 칸을 비우고 수준을 보통으로 되돌립니다."
      ],
      "features": [
        "세 가지 수준. 약한 압축은 문장을 지우지 않습니다.",
        "압축 전후의 단어 수.",
        "'in order to'를 'to'로 바꾸는 등의 고정 치환.",
        "보통과 강한 수준에서 중복 문장 제거."
      ],
      "examples": [
        {
          "title": "장황한 문장",
          "body": "'In order to finish the form, you need to sign it'은 모든 수준에서 'to finish the form, you need to sign it'이 됩니다."
        },
        {
          "title": "같은 문장이 두 번",
          "body": "보통과 강한 수준은 첫 문장을 남기고 뒤에 나오는 똑같은 반복을 지웁니다. 약한 수준은 둘 다 남깁니다."
        }
      ],
      "explanation": "'기사 줄이기'는 고정된 치환 목록을 사용합니다. 강한 압축은 앞 문장과 같은 여섯 단어로 시작하는 뒤 문장도 건너뜁니다. 'AI로 압축'은 Gemini에 선택한 수준으로 기사를 줄이도록 요청합니다. 두 결과 모두 믿기 전에 읽어 보세요.",
      "limitations": "약한 압축은 고정된 장황한 표현 목록을 바꿉니다. 보통과 강한 수준은 뒤에 나오는 똑같은 반복도 지우며, 강한 수준은 같은 여섯 단어로 시작하는 문장을 건너뛸 수 있습니다. 초안은 12단어 이상이어야 합니다. 압축하면 남기고 싶던 문장이 지워질 수 있습니다.",
      "tips": [
        "이미 간결한 기사라면 약한 수준부터 시작하세요.",
        "엉성한 초고에는 강한 수준을 쓰고, 나중에 중요한 문장을 되살리세요.",
        "초안이 어떻게 만들어졌는지 숨기는 수단이 아닙니다."
      ],
      "faqs": [
        {
          "question": "압축한 글은 AI 감지기를 통과하나요?",
          "answer": "아니요. 이 도구는 그런 시도를 하지 않으며, 결과가 특정 유형의 작성자가 쓴 것처럼 보인다고 주장하지도 않습니다."
        },
        {
          "question": "제 핵심 내용은 유지되나요?",
          "answer": "'기사 줄이기'는 대부분의 단어를 남기고 군더더기와 반복을 조금 지웁니다. 'AI로 압축'은 Gemini에 핵심과 중요한 사실을 유지하도록 요청합니다. 믿기 전에 짧은 초안을 읽어 보세요."
        },
        {
          "question": "제 텍스트가 서버로 전송되나요?",
          "answer": "'기사 줄이기'는 이 탭에서 작동하며 초안을 업로드하지 않습니다. 'AI로 압축'은 초안을 ToolStarHub를 거쳐 Google Gemini API로 보내 더 짧은 버전을 돌려받습니다. ToolStarHub는 이 텍스트를 저장하지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다."
        },
        {
          "question": "의미를 잃지 않고 기사를 줄이려면 어떻게 하나요?",
          "answer": "먼저 장황한 표현을, 다음으로 반복된 요점을, 마지막으로 아무것도 더하지 않는 문장 전체를 지우세요. 사용하기 전에 원문과 비교하세요."
        },
        {
          "question": "어떤 압축 수준을 골라야 하나요?",
          "answer": "약한 수준은 장황한 표현만 바꿉니다. 보통은 반복도 지웁니다. 강한 수준은 같은 방식으로 시작하는 문장을 건너뛸 수 있으니 더 꼼꼼히 확인하세요."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "'기사 줄이기'는 브라우저에서 고정 규칙을 적용합니다. 'AI로 압축'은 기사를 ToolStarHub를 거쳐 Google Gemini API로 보내 더 짧은 초안을 돌려받습니다. 기사는 저장되지 않습니다. 게시하기 전에 결과를 확인하세요.",
      "Article": "기사",
      "Compression": "압축 수준",
      "Light compression": "약한 압축",
      "Medium compression": "보통 압축",
      "Strong compression": "강한 압축",
      "Shorten article": "기사 줄이기",
      "Compress with AI": "AI로 압축",
      "Copy shorter draft": "짧은 초안 복사",
      "Shorter draft": "짧은 초안",
      "The shorter draft will appear here.": "여기에 짧은 초안이 표시됩니다.",
      "AI shorter draft": "AI 짧은 초안",
      "Copy AI draft": "AI 초안 복사",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "압축 전 {0}단어, 압축 후 {1}단어. 사용하기 전에 짧은 초안을 읽어 보세요.",
      "Paste an article first.": "먼저 기사를 붙여 넣으세요.",
      "Paste a longer article. A few words is not enough to shorten.": "더 긴 기사를 붙여 넣으세요. 몇 단어로는 줄일 수 없습니다.",
      "Nothing was left after compression. Try a lighter setting.": "압축 후 남은 내용이 없습니다. 더 약한 수준을 시도하세요."
    },
    "note": "'기사 줄이기'는 영어 표현 목록을 사용하므로 한국어 글은 거의 바뀌지 않습니다. 'AI로 압축'은 한국어 글에도 사용할 수 있습니다."
  },
  "ai-text-humanizer": {
    "answer": "AI 텍스트 휴머나이저는 고정 목록에 따라 브라우저에서 상투적인 표현을 바꿉니다. 'AI로 자연스럽게'는 초안을 ToolStarHub를 거쳐 Google Gemini API로 보냅니다. 이 도구는 AI 감지기를 피하려 하지 않으며, 결과가 특정 유형의 작성자가 쓴 것처럼 보인다고 주장하지도 않습니다.",
    "content": {
      "about": "AI 텍스트 휴머나이저는 고정된 상투 표현 목록을 더 간단한 말로 바꿉니다. '텍스트 다시 쓰기'는 이 탭에서 처리합니다. 'AI로 자연스럽게'는 초안을 ToolStarHub를 거쳐 Google Gemini API로 보내 다시 쓴 버전을 돌려받습니다. 텍스트는 저장되지 않습니다. 사용하기 전에 결과를 확인하세요. 어느 결과도 초안이 어떻게 만들어졌는지 숨기는 수단이 아닙니다.",
      "howTo": [
        "초안을 붙여 넣으세요. 12단어 이상, 4,000자 이하여야 합니다.",
        "브라우저의 상투 표현 목록을 쓰려면 '텍스트 다시 쓰기'를, Gemini가 다시 쓰게 하려면 'AI로 자연스럽게'를 클릭하세요.",
        "결과를 확인하세요. 표현이 지워진 뒤 다음 단어가 소문자로 남을 수 있습니다.",
        "뜻이 그대로 전달되면 다시 쓴 버전을 복사하세요.",
        "'지우기'는 입력 칸과 로컬 결과를 비웁니다."
      ],
      "features": [
        "브라우저에서 적용하는 고정 상투 표현 목록.",
        "'AI로 자연스럽게' 결과는 따로 표시.",
        "두 버튼 모두 4,000자 제한.",
        "문장이나 중복 문장을 지우지 않습니다."
      ],
      "examples": [
        {
          "title": "뻔한 도입부",
          "body": "'In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.'는 'here is the setup. you can use a short checklist.'가 됩니다."
        },
        {
          "title": "반복된 문장",
          "body": "'The form is short. The form is short. Please sign it before noon today and bring a pen.'은 두 문장이 모두 남습니다. 이 처리는 반복된 문장을 지우지 않습니다."
        }
      ],
      "explanation": "'텍스트 다시 쓰기'는 고정 목록을 한 번만 적용합니다. 지운 뒤 대문자로 되돌리지 않으며, 둥근 아포스트로피는 일치하지 않습니다. 'AI로 자연스럽게'는 같은 사실, 이름, 숫자를 유지하고 초안을 요약으로 줄이지 말라고 Gemini에 요청합니다. 두 결과 모두 사용하기 전에 확인하세요.",
      "limitations": "'텍스트 다시 쓰기'에는 12단어 이상이 필요하고, 두 버튼 모두 4,000자까지입니다. 로컬 처리는 목록에 있는 표현만 바꿉니다. 둥근 아포스트로피는 일치하지 않습니다. 이 도구는 AI 감지기를 피하려 하지 않으며, 결과가 특정 유형의 작성자가 쓴 것처럼 보인다고 주장하지도 않습니다.",
      "tips": [
        "사용하기 전에 결과를 확인하세요. 표현이 지워진 뒤 다음 단어가 소문자로 남을 수 있습니다.",
        "반복된 문장은 그대로 남습니다. 이 처리는 지우지 않습니다.",
        "어느 결과도 초안이 어떻게 만들어졌는지 숨기는 수단이 아닙니다."
      ],
      "faqs": [
        {
          "question": "AI 텍스트 휴머나이저는 무료인가요?",
          "answer": "네. 결제나 계정 없이 여기서 초안을 다시 쓸 수 있습니다. '텍스트 다시 쓰기'는 이 탭 안에서만 작동합니다. 'AI로 자연스럽게'는 초안을 ToolStarHub를 거쳐 Google Gemini API로 보냅니다."
        },
        {
          "question": "AI 감지기를 피할 수 있나요?",
          "answer": "아니요. 이 도구는 그런 시도를 하지 않으며, 결과가 특정 유형의 작성자가 쓴 것처럼 보인다고 주장하지도 않습니다."
        },
        {
          "question": "제 핵심 내용은 유지되나요?",
          "answer": "'텍스트 다시 쓰기'는 상투 표현 목록에 없는 단어를 모두 남깁니다. 'AI로 자연스럽게'는 같은 사실, 이름, 숫자를 유지하고 초안을 요약하지 말라는 지시를 받습니다. 사용하기 전에 결과를 확인하세요."
        },
        {
          "question": "제 텍스트가 서버로 전송되나요?",
          "answer": "'텍스트 다시 쓰기'는 이 탭에서 작동하며 초안을 업로드하지 않습니다. 'AI로 자연스럽게'는 초안을 ToolStarHub를 거쳐 Google Gemini API로 보내 다시 쓴 버전을 돌려받습니다. ToolStarHub는 이 텍스트를 저장하지 않습니다. 무료 등급에서는 Google이 제품 개선에 사용할 수 있습니다."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "'텍스트 다시 쓰기'는 브라우저에서 고정된 상투 표현 목록을 사용합니다. 'AI로 자연스럽게'는 텍스트를 ToolStarHub를 거쳐 Google Gemini API로 보내 다시 쓴 버전을 돌려받습니다. 텍스트는 저장되지 않습니다. 사용하기 전에 결과를 확인하세요. 어느 결과도 초안이 어떻게 만들어졌는지 숨기는 수단이 아닙니다.",
      "Draft": "초안",
      "Rewrite text": "텍스트 다시 쓰기",
      "Humanize with AI": "AI로 자연스럽게",
      "Copy rewritten draft": "다시 쓴 초안 복사",
      "Rewritten draft": "다시 쓴 초안",
      "The rewritten draft will appear here.": "여기에 다시 쓴 초안이 표시됩니다.",
      "AI rewrite": "AI 다시 쓰기",
      "Copy AI rewrite": "AI 다시 쓰기 복사",
      "Paste a draft first.": "먼저 초안을 붙여 넣으세요.",
      "That text is too long for this rewrite. Shorten it and try again.": "이 텍스트는 다시 쓰기에 너무 깁니다. 줄인 뒤 다시 시도하세요.",
      "Paste a longer draft. A few words is not enough to rewrite.": "더 긴 초안을 붙여 넣으세요. 몇 단어로는 다시 쓸 수 없습니다.",
      "Nothing was left after the rewrite. Try different wording.": "다시 쓴 뒤 남은 내용이 없습니다. 다른 표현을 시도하세요."
    },
    "note": "'텍스트 다시 쓰기'는 영어 상투 표현 목록을 사용하므로 한국어 글은 거의 바뀌지 않습니다. 'AI로 자연스럽게'는 한국어 글에도 사용할 수 있습니다."
  }
};

export default data;
