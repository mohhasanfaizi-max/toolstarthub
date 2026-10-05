import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "UTM 빌더는 URL에 캠페인 매개변수를 추가해 분석 도구에서 트래픽 출처를 추적할 수 있게 합니다.",
    "content": {
      "about": "링크에 utm_source, utm_medium, utm_campaign을 추가하고, 원하면 term과 content도 넣습니다. 마케터가 캠페인 링크를 광고나 이메일에 넣기 전에 라벨을 붙일 때 사용합니다. 빈 칸은 링크에 포함되지 않으며, 이 페이지는 방문을 기록하거나 주소를 줄이지 않습니다.",
      "howTo": [
        "웹사이트 URL을 입력합니다. https://는 있어도 없어도 됩니다.",
        "source, medium, campaign을 입력합니다. term과 content는 선택 사항입니다.",
        "생성된 URL을 복사합니다. 원래 링크에 있던 쿼리 매개변수는 그대로 유지됩니다."
      ],
      "examples": [
        {
          "title": "간단한 캠페인 링크",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "이미 매개변수가 있는 URL",
          "body": "https://example.com/page?ref=nav 는 ref=nav를 유지하고 그 옆에 UTM 항목을 추가합니다."
        }
      ],
      "explanation": "UTM 매개변수는 방문이 어디에서 왔는지 분석 도구에 알려 줍니다. utm_source는 플랫폼, utm_medium은 채널, utm_campaign은 프로모션 이름입니다. utm_term과 utm_content는 선택 사항입니다. 값은 URL 인코딩되므로 공백과 특수 문자도 유효하게 유지됩니다.",
      "limitations": "source, medium, campaign이 비어 있으면 빈 매개변수로 쓰지 않고 링크에서 뺍니다. 이 페이지는 주소를 줄이지 않고 방문도 기록하지 않습니다. 웹사이트 URL이 아닌 텍스트는 거부됩니다.",
      "faqs": [
        {
          "question": "UTM 빌더는 무료인가요?",
          "answer": "네. 링크에 utm_source, utm_medium, utm_campaign을 추가하는 것은 무료이며 계정이 필요 없습니다."
        },
        {
          "question": "다른 쿼리 매개변수를 덮어쓰나요?",
          "answer": "아니요. 입력한 UTM 항목만 추가되거나 업데이트됩니다. 다른 매개변수는 그대로 남습니다."
        },
        {
          "question": "이 도구가 추적 서비스에 연결하나요?",
          "answer": "아니요. 브라우저에서 URL을 만들 뿐입니다. 추적은 나중에 그 링크를 분석 설정에서 사용할 때 이루어집니다."
        },
        {
          "question": "UTM 매개변수란 무엇인가요?",
          "answer": "UTM 매개변수는 utm_source, utm_medium, utm_campaign처럼 링크에 붙이는 태그로, 방문이 어디에서 왔는지 분석 도구에 알려 줍니다."
        },
        {
          "question": "꼭 필요한 UTM 매개변수는 무엇인가요?",
          "answer": "보통 source, medium, campaign이 최소 구성입니다. term과 content는 선택 사항이며 키워드나 광고 버전을 구분하는 데 도움이 됩니다."
        }
      ]
    },
    "ui": {
      "Website URL": "웹사이트 URL",
      "Existing query parameters are kept. UTM values are added or updated.": "기존 쿼리 매개변수는 유지됩니다. UTM 값은 추가되거나 업데이트됩니다.",
      "Campaign source": "캠페인 source",
      "Campaign medium": "캠페인 medium",
      "Campaign name": "캠페인 이름",
      "Campaign term (optional)": "캠페인 term(선택)",
      "running shoes": "러닝화",
      "Campaign content (optional)": "캠페인 content(선택)",
      "Copy URL": "URL 복사",
      "Enter a URL to generate a campaign link.": "캠페인 링크를 만들려면 URL을 입력하세요.",
      "Campaign URL": "캠페인 URL",
      "Enter a website URL.": "웹사이트 URL을 입력하세요.",
      "Enter a valid website URL.": "올바른 웹사이트 URL을 입력하세요."
    }
  },
  "slug-generator": {
    "answer": "슬러그 생성기는 제목을 URL에 안전하게 쓸 수 있는 소문자·하이픈 문자열로 바꿉니다.",
    "content": {
      "about": "제목을 소문자와 하이픈으로 된 고유 주소(퍼머링크)로 바꿉니다. 글 이름을 정하고 주소를 CMS에 넣기 전에 쓰기 좋습니다. 라틴 문자의 악센트는 제거되고 你好 같은 글자는 남으며, 결과가 아직 사용되지 않은 주소인지 확인해 주지는 않습니다.",
      "howTo": [
        "제목을 입력하거나 붙여 넣습니다.",
        "입력하는 동안 슬러그가 바로 바뀝니다.",
        "슬러그를 복사하거나 입력란을 비웁니다."
      ],
      "examples": [
        {
          "title": "블로그 제목",
          "body": "“How to Compress an Image Without Losing Quality”는 how-to-compress-an-image-without-losing-quality가 됩니다."
        },
        {
          "title": "악센트와 다른 문자 체계",
          "body": "라틴 문자의 악센트는 제거됩니다(Café → cafe). 你好 같은 글자는 남아서 슬러그를 읽기 쉽게 유지합니다."
        }
      ],
      "explanation": "생성기는 앞뒤 공백을 지우고, 유니코드 NFKD 정규화 후 결합 기호를 분리하고, 라틴 문자를 소문자로 바꾸고, 다른 구분 문자를 하이픈으로 바꾸고, 반복되는 하이픈을 하나로 합칩니다. 영어가 아닌 문자를 모두 지우지 않고 유니코드 문자와 숫자는 유지합니다. 결과는 실용적인 퍼머링크이며, 고유성이 보장된 ID는 아닙니다.",
      "limitations": "라틴 문자의 악센트는 제거되지만 你好 같은 글자는 남습니다. 결과는 퍼머링크 형태일 뿐, 주소가 사용되지 않았다는 증거는 아닙니다. 일부 사이트 빌더는 라틴 문자가 아닌 글자를 지우지만 이 페이지는 지우지 않습니다.",
      "faqs": [
        {
          "question": "슬러그 생성기는 무료인가요?",
          "answer": "네. 제목을 하이픈으로 연결된 퍼머링크로 바꾸는 것은 무료이며 계정이 필요 없습니다."
        },
        {
          "question": "모든 CMS에 맞나요?",
          "answer": "대부분의 사이트는 소문자·하이픈 슬러그를 받습니다. 일부는 라틴 문자가 아닌 글자를 지우지만, 이 도구는 문자나 숫자라면 유지합니다."
        },
        {
          "question": "입력한 내용이 서버로 전송되나요?",
          "answer": "아니요. 제목은 이 탭 안에서 변환됩니다. 업로드되지 않고 로컬 저장소에도 저장되지 않습니다."
        },
        {
          "question": "URL 슬러그란 무엇인가요?",
          "answer": "슬러그는 웹 주소에서 페이지 이름을 나타내는 읽기 쉬운 부분입니다. 예를 들어 example.com/blog/how-to-make-bread의 how-to-make-bread입니다."
        },
        {
          "question": "SEO에 좋은 슬러그는 어떤 것인가요?",
          "answer": "짧고 소문자로, 내용을 잘 설명하게 만들고 단어는 하이픈으로 구분하세요. 페이지를 나중에 업데이트할 수 있다면 날짜나 불필요한 단어는 피하세요."
        }
      ]
    },
    "ui": {
      "Title or text": "제목 또는 텍스트",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "라틴 문자의 악센트는 제거됩니다. 중국어 같은 다른 글자는 유지됩니다.",
      "Example": "예시",
      "Copy slug": "슬러그 복사",
      "Generated slug": "생성된 슬러그",
      "How to Compress an Image Without Losing Quality": "화질 손실 없이 이미지를 압축하는 방법"
    }
  },
  "qr-code-generator": {
    "answer": "QR 코드 생성기는 텍스트나 URL을 다운로드할 수 있는 QR 이미지로 바꾸며, 이미지는 기기에서 만들어집니다.",
    "content": {
      "about": "일반 텍스트나 URL을 최대 1,200자까지 QR 코드 PNG로 인코딩합니다. 누군가 스캔하길 원하는 짧은 링크에 사용하세요. Wi-Fi, 이메일, 연락처 형식은 QR 코드 생성기 Pro에 있으며, 긴 문자열은 촘촘한 패턴이 되어 일부 카메라가 읽지 못할 수 있습니다.",
      "howTo": [
        "텍스트나 전체 URL을 붙여 넣습니다. 웹 링크라면 https://도 포함하세요.",
        "생성을 누릅니다. 미리보기와 접근성 설명이 나타납니다.",
        "PNG를 다운로드하고, 다른 코드가 필요하면 초기화합니다."
      ],
      "examples": [
        {
          "title": "웹사이트",
          "body": "https://example.com은 스캔하면 그 주소를 여는 QR 코드가 됩니다."
        },
        {
          "title": "일반 텍스트",
          "body": "짧은 메모나 Wi-Fi 안내도 텍스트로 인코딩할 수 있습니다. 패턴을 읽기 쉽게 1,200자 미만으로 유지하세요."
        }
      ],
      "explanation": "QR 코드는 매트릭스 바코드입니다. 이 도구는 클라이언트 측 라이브러리로 브라우저에서 패턴을 만듭니다. 텍스트는 QR API로 전송되지 않습니다. 내용이 너무 길면 촘촘한 코드가 되어 많은 카메라가 읽기 어려워하므로 길이에 제한이 있습니다.",
      "limitations": "일반 텍스트나 URL이 인코딩되며, 텍스트는 1,200자 이하여야 합니다. Wi-Fi, 이메일, 연락처 형식은 QR 코드 생성기 Pro에 있습니다. 긴 문자열은 촘촘한 패턴이 되어 일부 카메라가 읽지 못할 수 있습니다.",
      "faqs": [
        {
          "question": "QR 코드 생성기는 무료인가요?",
          "answer": "네. 이 브라우저에서 텍스트나 URL로 QR 이미지를 만드는 것은 무료이며 계정이 필요 없습니다."
        },
        {
          "question": "텍스트가 업로드되나요?",
          "answer": "아니요. QR 코드는 브라우저에서 생성됩니다. 텍스트는 서버로 전송되지 않습니다."
        },
        {
          "question": "모든 스캐너가 PNG를 읽을 수 있나요?",
          "answer": "짧은 URL의 고대비 PNG는 대부분의 카메라가 읽을 수 있습니다. 아주 작은 인쇄물, 어두운 조명, 너무 긴 텍스트는 실패할 수 있습니다."
        },
        {
          "question": "여기서 만든 QR 코드는 만료되나요?",
          "answer": "아니요. 텍스트나 링크는 중간 리디렉션 서비스 없이 패턴에 직접 저장되므로, 링크 자체가 작동하는 한 코드도 작동합니다."
        },
        {
          "question": "웹사이트용 QR 코드는 어떻게 만드나요?",
          "answer": "https://를 포함한 전체 주소를 붙여 넣고 코드를 생성한 뒤 PNG를 다운로드하고, 인쇄하기 전에 휴대폰 카메라로 테스트하세요."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "QR 코드는 브라우저에서 만들어집니다. 내용은 적당히 짧게 유지하세요.",
      "QR code for {0}": "{0}의 QR 코드",
      "QR code for:": "QR 코드 내용:",
      "The QR code is generated in your browser. The text is not sent to a server.": "QR 코드는 브라우저에서 생성됩니다. 텍스트는 서버로 전송되지 않습니다."
    }
  },
  "qr-code-scanner": {
    "answer": "QR 코드 스캐너는 선택한 QR 이미지를 읽고, 디코딩한 텍스트를 기기에서 보여 줍니다.",
    "content": {
      "about": "카메라나 PNG, JPG 이미지에서 첫 번째 QR 코드를 읽습니다. 링크를 열지 결정하기 전에 텍스트를 화면에서 먼저 보고 싶을 때 사용하세요. ‘카메라 시작’을 누르기 전까지 카메라는 꺼져 있고, 다른 종류의 바코드는 디코딩하지 않습니다.",
      "howTo": [
        "기기 카메라로 스캔하고 싶을 때만 ‘카메라 시작’을 누릅니다. 권한은 페이지를 열 때가 아니라 그때 요청됩니다.",
        "결과가 나올 때까지 코드를 화면에 비추거나, ‘카메라 중지’를 눌러 스트림을 해제합니다.",
        "카메라가 차단되어 있으면 코드의 PNG나 JPG를 대신 업로드합니다.",
        "결과를 복사합니다. http(s) URL이면 ‘링크 열기’가 표시됩니다. 페이지가 저절로 이동하지는 않습니다."
      ],
      "examples": [
        {
          "title": "카메라 스캔",
          "body": "카메라를 시작하면 프레임이 이 탭에서 디코딩됩니다. 코드를 찾거나 중지를 누르면 스트림이 멈춥니다."
        },
        {
          "title": "이미지 업로드",
          "body": "카메라 권한이 거부되어도 QR 코드 스크린숏은 디코딩할 수 있습니다."
        }
      ],
      "explanation": "디코딩은 카메라 프레임이나 업로드한 이미지에 대해 로컬 JavaScript 리더로 이루어집니다. 카메라 접근은 ‘카메라 시작’을 클릭한 뒤에만 시작됩니다. 중지할 때, 스캔에 성공했을 때, 페이지를 떠날 때 트랙이 중지됩니다. 감지된 URL은 먼저 표시만 되며, 여는 것은 별도의 동작입니다.",
      "limitations": "리더가 처음 찾은 코드가 표시됩니다. 다른 종류의 바코드는 디코딩하지 않습니다. 링크는 ‘링크 열기’를 누를 때까지 페이지에 머물고, 카메라는 ‘카메라 시작’을 누를 때까지 꺼져 있습니다.",
      "faqs": [
        {
          "question": "QR 코드 스캐너는 무료인가요?",
          "answer": "네. 카메라나 이미지에서 QR 코드를 읽는 것은 무료이며 계정이 필요 없습니다."
        },
        {
          "question": "카메라 프레임이 업로드되나요?",
          "answer": "아니요. ‘카메라 시작’ 이후의 프레임과 선택한 PNG나 JPG는 이 탭에서 디코딩됩니다. 어느 것도 Tools Star Hub로 전송되지 않습니다."
        },
        {
          "question": "웹사이트가 자동으로 열리지 않은 이유는 무엇인가요?",
          "answer": "스캔한 URL로 자동 이동하는 것은 안전하지 않습니다. 텍스트를 확인한 뒤 믿을 수 있으면 ‘링크 열기’를 사용하세요."
        },
        {
          "question": "이미지에 QR 코드가 여러 개 있으면 어떻게 되나요?",
          "answer": "이 리더는 디코딩할 수 있는 첫 번째 코드를 보여 줍니다. 특정 코드가 필요하면 이미지를 잘라 내세요."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "카메라 접근은 카메라로 스캔하기를 선택할 때만 요청됩니다.",
      "Start camera": "카메라 시작",
      "Stop camera": "카메라 중지",
      "Or upload a QR image": "또는 QR 이미지 업로드",
      "Drag and drop a QR image here, or choose a file.": "QR 이미지를 여기로 끌어다 놓거나 파일을 선택하세요.",
      "Image upload works even if the camera is blocked.": "카메라가 차단되어도 이미지 업로드는 작동합니다.",
      "Scan result": "스캔 결과",
      "Open link": "링크 열기",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "‘카메라 시작’ 이후의 프레임과 선택한 PNG나 JPG는 이 탭에서 디코딩됩니다. 어느 것도 Tools Star Hub로 전송되지 않습니다.",
      "This browser does not support camera access. Upload an image instead.": "이 브라우저는 카메라 접근을 지원하지 않습니다. 대신 이미지를 업로드하세요.",
      "Camera permission was denied. You can still upload an image.": "카메라 권한이 거부되었습니다. 이미지는 계속 업로드할 수 있습니다.",
      "No camera was found. Upload an image instead.": "카메라를 찾을 수 없습니다. 대신 이미지를 업로드하세요.",
      "The camera could not be started. Upload an image instead.": "카메라를 시작할 수 없습니다. 대신 이미지를 업로드하세요.",
      "This browser could not read that image.": "이 브라우저에서 그 이미지를 읽을 수 없습니다.",
      "No QR code was found in that image.": "그 이미지에서 QR 코드를 찾지 못했습니다.",
      "That file could not be read as an image.": "그 파일을 이미지로 읽을 수 없습니다."
    }
  },
  "password-generator": {
    "answer": "비밀번호 생성기는 암호학적 난수 생성기를 사용해, 선택한 문자 집합으로 무작위 비밀번호를 만듭니다.",
    "content": {
      "about": "선택한 문자 종류로 8~64자 비밀번호를 생성합니다. 새 계정에 다른 곳에서 쓰지 않은 복잡한 문자열이 필요할 때 사용하세요. 강도 표시는 길이와 문자 집합 크기로 추정한 값이며, 사이트가 유출된 적이 있는지는 확인하지 않습니다.",
      "howTo": [
        "8~64 사이의 길이와 원하는 문자 종류를 고릅니다.",
        "원하면 O, 0, I, l, 1처럼 헷갈리는 문자를 제외합니다.",
        "생성을 누른 뒤 비밀번호를 복사합니다. 아무것도 저장되지 않습니다."
      ],
      "examples": [
        {
          "title": "혼합 16자",
          "body": "대문자, 소문자, 숫자, 기호를 포함한 16자 비밀번호는 문자 공간이 큽니다. 강도 표시는 길이와 집합 크기로 추정한 값입니다."
        },
        {
          "title": "영문자만",
          "body": "숫자와 기호를 끄면 집합이 작아집니다. 생성기는 여전히 최소 한 가지 종류를 선택해야 합니다."
        }
      ],
      "explanation": "각 문자는 Math.random()이 아니라 crypto.getRandomValues()로 선택됩니다. 생성기는 선택한 각 집합에서 최소 한 글자를 넣고, 나머지는 합친 집합에서 편향 없는 샘플링으로 채웁니다. 강도 표시(약함 / 보통 / 강함)는 길이 × log2(집합 크기)로 추정합니다. 추측, 재사용, 사이트 유출에 대한 보장은 아닙니다.",
      "limitations": "길이는 8~64의 정수여야 하고, 최소 한 가지 문자 종류는 켜져 있어야 합니다. 강도 표시는 길이와 집합 크기로 추정합니다. 재사용, 피싱, 유출된 사이트는 확인하지 않습니다. 헷갈리는 문자는 제외할 수 있지만 나머지 기호 목록은 고정되어 있습니다.",
      "faqs": [
        {
          "question": "비밀번호 생성기는 무료인가요?",
          "answer": "네. 8~64자 비밀번호 생성은 무료이며 계정이 필요 없습니다."
        },
        {
          "question": "비밀번호가 저장되나요?",
          "answer": "아니요. 저장되거나 기록되지 않고, URL에 들어가거나 localStorage에 쓰이지도 않습니다. 필요하면 값을 복사하세요."
        },
        {
          "question": "‘강함’이면 해킹할 수 없다는 뜻인가요?",
          "answer": "아니요. 이 측정기는 길이와 문자 집합 크기로 추정한 값입니다. 재사용, 피싱, 침해된 서비스는 고려하지 않습니다."
        },
        {
          "question": "비밀번호는 얼마나 길어야 하나요?",
          "answer": "길수록 강합니다. 많은 보안 가이드는 중요한 계정에 최소 12~16자를 쓰고, 사이트마다 다른 비밀번호를 쓰라고 권합니다."
        },
        {
          "question": "온라인 비밀번호 생성기를 써도 안전한가요?",
          "answer": "이 생성기는 crypto.getRandomValues로 브라우저에서 비밀번호를 만들며, 전송하거나 저장하지 않습니다. 메모 대신 비밀번호 관리자에 저장하세요."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "{0}~{1}자.",
      "Uppercase letters": "대문자",
      "Lowercase letters": "소문자",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "헷갈리는 문자 제외(O, 0, I, l, 1)",
      "Generated password": "생성된 비밀번호",
      "Length: {0}": "길이: {0}",
      "Character set size: {0}": "문자 집합 크기: {0}",
      "Estimated entropy: {0} bits ({1})": "추정 엔트로피: {0}비트({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "이 측정기는 길이와 문자 집합 크기로 추정한 값입니다. 보안을 보장하지는 않습니다.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "비밀번호는 브라우저에서 crypto.getRandomValues로 만들어집니다. 저장, 기록, 서버 전송은 하지 않습니다.",
      "Enter a password length.": "비밀번호 길이를 입력하세요.",
      "Length must be a whole number.": "길이는 정수여야 합니다.",
      "Choose a length from {0} to {1}.": "길이는 {0}~{1} 사이로 선택하세요.",
      "Select at least one character type.": "문자 종류를 하나 이상 선택하세요.",
      "Length must be at least the number of selected character types.": "길이는 선택한 문자 종류의 수 이상이어야 합니다."
    }
  },
  "qr-code-generator-pro": {
    "answer": "QR 코드 생성기 Pro는 URL, Wi-Fi, 이메일, 전화, SMS, 연락처용 QR 코드를 원하는 색상으로 만듭니다.",
    "content": {
      "about": "일반 텍스트, Wi-Fi, 이메일, 전화, SMS, vCard 연락처용 QR 코드를 색상 및 오류 정정 설정과 함께 만듭니다. 스캔만으로 휴대폰이 네트워크에 연결되거나 연락처를 저장하게 하고 싶을 때 사용하세요. 네트워크 이름이 없으면 거부되며, 인코딩되는 텍스트는 여전히 1,200자 이내여야 합니다.",
      "howTo": [
        "유형을 선택합니다: 텍스트/URL, Wi-Fi, 이메일, 전화, SMS, 연락처.",
        "해당 유형의 항목을 입력합니다. 잘못된 값은 코드를 그리기 전에 거부됩니다.",
        "원하면 색상, 크기, 여백(quiet zone), 오류 정정을 바꾼 뒤 생성하고 PNG를 다운로드합니다."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "이름이 Cafe인 WPA 네트워크는 WIFI:T:WPA;S:Cafe;P:Password;; 로 인코딩됩니다."
        },
        {
          "title": "전화",
          "body": "+1 202 555 0100 같은 번호는 공백 없는 tel: 페이로드가 됩니다."
        }
      ],
      "explanation": "구조화된 유형은 일반적인 QR 텍스트 형식(WIFI, mailto, tel, SMSTO, vCard 3.0)으로 변환됩니다. 생성에는 기본 생성기와 같은 로컬 QR 라이브러리를 사용합니다. 내용은 저장되거나 기록되지 않으며 페이지 URL에도 들어가지 않습니다.",
      "limitations": "유형은 일반 텍스트, Wi-Fi, 이메일, 전화, SMS, vCard 3.0 연락처입니다. 네트워크 이름이 없거나, 간단한 검사를 통과하지 못한 이메일, 숫자와 선택적 + ( ) 외의 문자가 들어간 전화번호는 코드를 그리기 전에 거부됩니다. 인코딩되는 텍스트는 여전히 1,200자 이내여야 합니다.",
      "faqs": [
        {
          "question": "QR 코드 생성기 Pro는 무료인가요?",
          "answer": "네. Wi-Fi, 이메일, 전화, SMS, 연락처, 텍스트 QR 코드를 만드는 것은 무료이며 계정이 필요 없습니다."
        },
        {
          "question": "기본 QR 생성기와 다른가요?",
          "answer": "네. 기본 도구는 일반 텍스트나 URL을 인코딩합니다. 이 버전은 구조화된 유형, 색상, 오류 정정 설정을 추가합니다. 기본 도구는 바뀌지 않았습니다."
        },
        {
          "question": "Wi-Fi 비밀번호가 저장되나요?",
          "answer": "아니요. 초기화하거나 페이지를 떠날 때까지 이 페이지에만 남습니다. localStorage에 쓰이거나 서버로 전송되지 않습니다."
        },
        {
          "question": "Wi-Fi용 QR 코드는 어떻게 만드나요?",
          "answer": "Wi-Fi를 선택하고 네트워크 이름, 비밀번호, 보안 유형을 입력한 뒤 코드를 다운로드하세요. 스캔한 휴대폰은 비밀번호를 입력하지 않고 연결할 수 있습니다."
        },
        {
          "question": "QR 코드 색상을 바꿀 수 있나요?",
          "answer": "네. 다만 카메라가 읽을 수 있도록 밝은 배경에 어두운 패턴처럼 대비를 강하게 유지하세요. 인쇄하기 전에 코드를 테스트하세요."
        }
      ]
    },
    "ui": {
      "QR type": "QR 유형",
      "Network name (SSID)": "네트워크 이름(SSID)",
      "Security": "보안",
      "Hidden network": "숨겨진 네트워크",
      "Email": "이메일",
      "Subject (optional)": "제목(선택)",
      "Body (optional)": "본문(선택)",
      "Phone number": "전화번호",
      "Message (optional)": "메시지(선택)",
      "First name": "이름",
      "Last name": "성",
      "Phone (optional)": "전화(선택)",
      "Email (optional)": "이메일(선택)",
      "Foreground": "전경색",
      "Background": "배경색",
      "Size": "크기",
      "Quiet zone": "여백(quiet zone)",
      "Error correction": "오류 정정",
      "Generated QR code": "생성된 QR 코드",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "QR 코드는 브라우저에서 생성됩니다. Wi-Fi 비밀번호와 다른 항목은 저장되거나 서버로 전송되지 않습니다.",
      "Foreground and background colors need to be different.": "전경색과 배경색은 서로 달라야 합니다.",
      "Text / URL": "텍스트 / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "전화",
      "Contact": "연락처",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "비밀번호 없음",
      "Enter a hex color such as #336699.": "#336699 같은 16진수 색상을 입력하세요.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "3자리, 6자리, 8자리 16진수를 사용하세요. #은 있어도 없어도 됩니다.",
      "Enter a network name (SSID).": "네트워크 이름(SSID)을 입력하세요.",
      "Enter the Wi-Fi password, or choose no password.": "Wi-Fi 비밀번호를 입력하거나 ‘비밀번호 없음’을 선택하세요.",
      "Enter a valid email address.": "올바른 이메일 주소를 입력하세요.",
      "Enter a phone number, with digits and optional + ( ).": "숫자와 선택적 + ( )로 전화번호를 입력하세요.",
      "Enter a first or last name for the contact.": "연락처의 이름 또는 성을 입력하세요."
    }
  },
  "url-parser": {
    "answer": "URL 파서는 절대 URL 하나를 프로토콜, 호스트 이름, 포트, 경로, 프래그먼트, 각 쿼리 매개변수로 나눕니다. URL은 브라우저 안에 머뭅니다.",
    "content": {
      "about": "절대 URL 하나를 붙여 넣고 프로토콜, 호스트 이름, 포트, 경로, 프래그먼트, 쿼리 매개변수를 확인하세요.",
      "howTo": [
        "http 또는 https로 시작하는 전체 URL을 붙여 넣습니다.",
        "분석을 누릅니다."
      ],
      "features": [
        "쿼리 키마다 별도의 행으로 표시.",
        "빈 쿼리 값도 유지.",
        "프래그먼트는 경로와 따로 표시."
      ],
      "examples": [
        {
          "title": "포트와 같은 키 두 개가 있는 URL",
          "body": "https://example.com:8080/docs?topic=a&topic= 는 포트 8080과 topic 행 두 개를 유지하며, 두 번째 행의 값은 비어 있습니다."
        }
      ],
      "explanation": "이 페이지는 브라우저의 URL 파서를 사용합니다. 중복된 쿼리 키는 별도 항목으로 남습니다. 프로토콜이 없거나 상대 경로이면 거부됩니다. 호스트 이름은 URL 파서가 돌려주는 값이며, 국제화 도메인 이름은 인코딩된 형태로 표시됩니다.",
      "tips": [
        "https:// 또는 http://를 포함하세요.",
        "쿼리 뒤의 #은 프래그먼트이며, 또 다른 매개변수가 아닙니다."
      ],
      "limitations": "http와 https 절대 URL만 분석합니다. URL을 열거나 어디로도 보내지 않습니다.",
      "faqs": [
        {
          "question": "URL은 어떻게 분석되나요?",
          "answer": "브라우저의 URL 파서가 프로토콜, 호스트 이름, 포트, 경로, 프래그먼트, 각 쿼리 매개변수를 나눕니다."
        },
        {
          "question": "중복된 쿼리 키는 어떻게 되나요?",
          "answer": "각각 따로 나열됩니다. 하나의 값으로 합쳐지지 않습니다."
        },
        {
          "question": "쿼리 값이 비어 있으면요?",
          "answer": "등호 뒤에 아무것도 없는 키도 유지되며 빈 값으로 표시됩니다."
        },
        {
          "question": "상대 URL이 거부되는 이유는 무엇인가요?",
          "answer": "상대 경로에는 프로토콜이나 호스트가 없으므로 절대 URL이 아닙니다."
        },
        {
          "question": "URL이 서버로 전송되나요?",
          "answer": "아니요. 분석은 브라우저에서 이루어집니다."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "URL은 브라우저에서 분석됩니다. 다른 서비스로 전송되지 않습니다.",
      "Absolute URL": "절대 URL",
      "Parse": "분석",
      "Query parameters": "쿼리 매개변수",
      "No query parameters.": "쿼리 매개변수가 없습니다.",
      "(empty)": "(비어 있음)",
      "Protocol": "프로토콜",
      "Hostname": "호스트 이름",
      "Port": "포트",
      "Path": "경로",
      "Fragment": "프래그먼트",
      "Enter an absolute URL.": "절대 URL을 입력하세요.",
      "Enter a URL of 100000 characters or fewer.": "100000자 이하의 URL을 입력하세요.",
      "Enter an absolute URL that includes a protocol, such as https://.": "https://처럼 프로토콜을 포함한 절대 URL을 입력하세요.",
      "That text is not a valid absolute URL.": "이 텍스트는 올바른 절대 URL이 아닙니다.",
      "Enter an http or https URL.": "http 또는 https URL을 입력하세요."
    }
  },
  "robots-txt-generator": {
    "answer": "robots.txt 생성기는 입력한 규칙으로 User-agent, Allow, Disallow 줄을 작성합니다. 사이트맵 URL도 추가할 수 있습니다. 실제 사이트에 게시하거나 테스트하지는 않습니다.",
    "content": {
      "about": "하나 이상의 user-agent 그룹과 선택적인 사이트맵 URL로 robots.txt 텍스트를 작성합니다.",
      "howTo": [
        "user-agent를 입력합니다.",
        "허용 경로와 차단 경로를 한 줄에 하나씩 추가합니다.",
        "원하면 사이트맵 URL을 추가합니다.",
        "생성을 누릅니다."
      ],
      "features": [
        "여러 개의 user-agent 그룹.",
        "여러 개의 Allow 및 Disallow 줄.",
        "선택적인 절대 사이트맵 URL."
      ],
      "examples": [
        {
          "title": "비공개 폴더",
          "body": "User-agent * 와 Disallow: /admin 은 크롤러에게 /admin 아래 경로를 가져가지 말라고 알립니다. 파일은 텍스트일 뿐입니다."
        }
      ],
      "explanation": "각 그룹은 User-agent로 시작하고, 경로마다 Allow 줄 하나와 경로마다 Disallow 줄 하나가 이어집니다. 빈 경로 줄은 건너뜁니다. 사이트맵은 http 또는 https 절대 URL일 때만 추가됩니다. 이 페이지는 파일을 업로드하거나 실제 사이트를 테스트하지 않습니다.",
      "tips": [
        "모든 크롤러에는 *를 사용하세요.",
        "경로는 한 줄에 하나씩 쓰세요."
      ],
      "limitations": "결과는 복사할 수 있는 텍스트입니다. 규칙을 게시하거나 실제 사이트가 무엇을 허용하는지 확인하지 않습니다.",
      "faqs": [
        {
          "question": "robots.txt 파일은 어떻게 작성하나요?",
          "answer": "User-agent 줄로 시작한 뒤 Allow와 Disallow 줄을 추가합니다. 절대 사이트맵 URL이 있으면 Sitemap 줄도 넣습니다."
        },
        {
          "question": "user-agent를 여러 개 쓸 수 있나요?",
          "answer": "네. 각 그룹에 고유한 user-agent와 규칙이 있습니다."
        },
        {
          "question": "빈 경로는 어떻게 되나요?",
          "answer": "빈 줄은 건너뛰므로 빈 Allow나 Disallow 규칙이 생기지 않습니다."
        },
        {
          "question": "실제 사이트를 테스트하나요?",
          "answer": "아니요. 텍스트만 생성합니다. 파일을 게시하거나 사이트에 요청을 보내지 않습니다."
        },
        {
          "question": "어떤 사이트맵 URL을 쓸 수 있나요?",
          "answer": "http 또는 https 절대 URL입니다. 프로토콜이 없는 경로는 거부됩니다."
        },
        {
          "question": "입력한 내용이 서버로 전송되나요?",
          "answer": "아니요. user-agent 줄과 경로는 이 탭에서 조합됩니다. 업로드되지 않으며, 이 페이지가 사이트에 요청을 보내지도 않습니다."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "입력한 규칙으로 robots.txt 텍스트를 작성합니다. 실제 사이트를 테스트하거나 게시하지 않습니다.",
      "Group {0} user-agent": "그룹 {0} user-agent",
      "Allow paths, one per line": "허용 경로(한 줄에 하나)",
      "Disallow paths, one per line": "차단 경로(한 줄에 하나)",
      "Remove group": "그룹 삭제",
      "Add group": "그룹 추가",
      "Sitemap URL, optional": "사이트맵 URL(선택)",
      "Add at least one user-agent group.": "user-agent 그룹을 하나 이상 추가하세요.",
      "Group {0} needs a user-agent.": "그룹 {0}에 user-agent가 필요합니다.",
      "Enter a sitemap as an absolute http or https URL.": "사이트맵은 http 또는 https 절대 URL로 입력하세요."
    }
  },
  "password-strength-checker": {
    "answer": "비밀번호 강도 검사기는 길이와 실제로 들어 있는 문자 종류로 비트 수를 추정합니다. 비밀번호를 업로드하거나 유출 목록과 비교하지 않습니다.",
    "content": {
      "about": "비밀번호를 입력하면 약함, 보통, 강함 중 하나로 평가합니다. 추정에는 길이와 비밀번호에 나타난 문자 종류를 사용합니다. 유출 여부는 조회하지 않으며, 사이트가 그 비밀번호를 받아들일지도 알 수 없습니다.",
      "howTo": [
        "비밀번호를 입력합니다. 빈 칸은 거부됩니다.",
        "검사를 누릅니다.",
        "평가, 길이, 추정 비트 수, 발견된 문자 종류를 확인합니다."
      ],
      "features": [
        "대문자, 소문자, 숫자, 기호 집합은 실제로 나타날 때만 계산합니다.",
        "공백이나 백틱 같은 그 밖의 문자는 서로 다른 문자마다 풀에 1을 더합니다.",
        "약함은 50비트 미만, 보통은 80비트 미만, 강함은 80비트 이상입니다."
      ],
      "examples": [
        {
          "title": "소문자 단어",
          "body": "password는 소문자 8자입니다. 풀은 26, 추정치는 반올림해 38비트이며 평가는 약함입니다."
        },
        {
          "title": "문자, 숫자, 기호",
          "body": "Abcdefghijklm12!는 대문자, 소문자, 숫자, 기호가 들어간 16자입니다. 풀은 85, 추정치는 반올림해 103비트이며 평가는 강함입니다."
        }
      ],
      "explanation": "비트 수는 길이 × 풀의 밑이 2인 로그입니다. 풀은 A~Z가 있으면 대문자로 26, 소문자로 26, 숫자로 10, !@#$%^&*()-_=+[]{};:,.? 중 기호가 있으면 23입니다. 이 집합에 없는 문자는 기호 집합 전체로 치지 않고 1을 더합니다. 이 도구는 비밀번호 생성기가 아닙니다. 생성기는 만들기 전에 선택한 문자 종류로 비밀번호를 평가합니다.",
      "tips": [
        "여러 문자 종류로 된 긴 비밀번호는 짧은 단어보다 높게 평가됩니다.",
        "평가 대신 새 비밀번호가 필요하면 비밀번호 생성기를 사용하세요."
      ],
      "limitations": "최대 256자입니다. 이 페이지는 유출 여부를 조회하지 않으며, 사이트가 그 비밀번호를 받아들일지도 알 수 없습니다. 악센트가 있는 문자는 A~Z가 아니라 기타 문자로 계산됩니다.",
      "faqs": [
        {
          "question": "비밀번호 강도 검사기는 무료인가요?",
          "answer": "네. 결제나 계정 생성 없이 여기서 비밀번호를 평가할 수 있습니다."
        },
        {
          "question": "유출된 비밀번호와 비교하나요?",
          "answer": "아니요. 평가는 입력한 내용의 길이와 문자 종류만으로 정해집니다."
        },
        {
          "question": "숫자로만 된 비밀번호가 약함인 이유는 무엇인가요?",
          "answer": "숫자 8자는 풀이 10입니다. 약 27비트로 50 미만이므로 평가는 약함입니다."
        },
        {
          "question": "비밀번호가 서버로 전송되나요?",
          "answer": "아니요. 검사는 이 브라우저 탭에서 실행됩니다. Tools Star Hub는 비밀번호를 서버로 보내거나 로컬 저장소에 저장하지 않습니다."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0}자, {1}, {2}비트",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "평가는 입력한 비밀번호의 문자 종류를 기준으로 합니다. 비밀번호는 이 탭에 머물며, 업로드되거나 유출 목록과 비교되지 않습니다.",
      "Show password": "비밀번호 표시",
      "Check": "검사",
      "Copy rating": "평가 복사",
      "Rating": "평가",
      "Estimated bits": "추정 비트 수",
      "Enter a password.": "비밀번호를 입력하세요.",
      "Enter a password of {0} characters or fewer.": "{0}자 이하의 비밀번호를 입력하세요.",
      "Uppercase": "대문자",
      "Lowercase": "소문자",
      "Other": "기타"
    }
  },
  "meta-tag-generator": {
    "answer": "메타 태그 생성기는 HTML title, description, robots, canonical, Open Graph, Twitter 태그를 작성합니다. 페이지를 가져오지 않습니다.",
    "content": {
      "about": "제목과 원하는 선택 태그를 입력하세요. 페이지의 head에 붙여 넣을 수 있는 HTML이 작성됩니다. 실제 URL을 가져오거나 사이트에서 링크가 어떻게 공유될지 확인하지는 않습니다.",
      "howTo": [
        "제목을 입력합니다. 빈 제목은 거부됩니다.",
        "설명, canonical URL, robots 선택, 원하는 Open Graph나 Twitter 항목을 추가합니다.",
        "생성을 누른 뒤 HTML을 복사합니다."
      ],
      "features": [
        "모든 결과에 charset 태그, 제목, robots 태그 포함.",
        "설명, canonical 링크, Open Graph 태그, Twitter 태그는 선택 사항.",
        "텍스트의 따옴표와 &는 이스케이프 처리."
      ],
      "examples": [
        {
          "title": "제목과 설명",
          "body": "제목 Sample page와 설명 A short description of the page.를 index, follow로 생성하면 charset 태그, 제목, 설명, index, follow 값의 robots 태그가 작성됩니다."
        },
        {
          "title": "제목의 &",
          "body": "제목 A & B는 title 태그 안에서 A &amp; B로 작성됩니다."
        }
      ],
      "explanation": "HTML은 입력한 항목으로 조합됩니다. 비어 있는 선택 항목은 빠집니다. canonical URL, Open Graph 이미지, Open Graph URL, Twitter 이미지는 http 또는 https 절대 URL이어야 합니다. 이 페이지는 그 URL에 요청을 보내지 않습니다.",
      "tips": [
        "직접 만든 HTML에 태그를 넣고 싶을 때 여기의 Open Graph 항목을 사용하세요. 실제 공유 미리보기는 별도의 검사입니다."
      ],
      "limitations": "제목은 최대 200자, 설명은 최대 500자입니다. Open Graph 유형은 website, article, 없음 중 하나입니다. Twitter 카드는 summary, summary_large_image, 없음 중 하나입니다. 카드 없이 Twitter 제목만 넣으면 거부됩니다.",
      "faqs": [
        {
          "question": "메타 태그 생성기는 무료인가요?",
          "answer": "네. 결제나 계정 생성 없이 여기서 태그를 작성할 수 있습니다."
        },
        {
          "question": "소셜 사이트에서 링크가 어떻게 보일지 확인하나요?",
          "answer": "아니요. 태그를 작성할 뿐이며 URL을 열지 않습니다."
        },
        {
          "question": "robots 값은 어떻게 작성되나요?",
          "answer": "index 선택과 follow 선택으로, 예를 들어 index, follow 또는 noindex, nofollow입니다."
        },
        {
          "question": "텍스트가 서버로 전송되나요?",
          "answer": "아니요. HTML은 이 브라우저 탭에서 만들어집니다. Tools Star Hub는 이 항목들을 서버로 보내거나 로컬 저장소에 저장하지 않습니다."
        }
      ]
    },
    "ui": {
      "Sample page": "샘플 페이지",
      "A short description of the page.": "페이지에 대한 짧은 설명입니다.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "페이지 head용 HTML을 작성합니다. 실제 URL을 가져오거나 사이트에서 어떻게 공유될지 확인하지 않습니다.",
      "Title": "제목",
      "Description": "설명",
      "Canonical URL, optional": "canonical URL(선택)",
      "Robots index": "robots index",
      "Robots follow": "robots follow",
      "Open Graph title, optional": "Open Graph 제목(선택)",
      "Open Graph description, optional": "Open Graph 설명(선택)",
      "Open Graph image URL, optional": "Open Graph 이미지 URL(선택)",
      "Open Graph URL, optional": "Open Graph URL(선택)",
      "Open Graph type": "Open Graph 유형",
      "Twitter title, optional": "Twitter 제목(선택)",
      "Copy HTML": "HTML 복사",
      "Head tags": "head 태그",
      "None": "없음",
      "Enter a {0} of {1} characters or fewer.": "{0}: 최대 {1}자입니다.",
      "Enter {0} as an absolute http or https URL.": "{0}: http 또는 https 절대 URL을 입력하세요.",
      "Enter a title.": "제목을 입력하세요.",
      "the canonical URL": "canonical URL",
      "Open Graph title": "Open Graph 제목",
      "Open Graph description": "Open Graph 설명",
      "the Open Graph image URL": "Open Graph 이미지 URL",
      "the Open Graph URL": "Open Graph URL",
      "Choose website, article, or no Open Graph type.": "website, article 또는 Open Graph 유형 없음을 선택하세요.",
      "Choose a Twitter card of summary or summary_large_image.": "Twitter 카드는 summary 또는 summary_large_image를 선택하세요.",
      "the Twitter image URL": "Twitter 이미지 URL",
      "Choose a Twitter card before adding Twitter text or an image.": "Twitter 텍스트나 이미지를 추가하기 전에 Twitter 카드를 선택하세요.",
      "title": "제목",
      "description": "설명"
    }
  },
  "open-graph-preview": {
    "answer": "Open Graph 미리보기는 페이지 URL을 이 사이트로 보내 공개된 제목과 공유 태그를 읽으며, 페이지는 저장하지 않습니다. 비공개 주소와 http가 아닌 주소는 거부됩니다.",
    "content": {
      "about": "공개된 http 또는 https URL을 입력하세요. ‘미리보기 확인’을 누르면 그 URL이 이 사이트로 전송됩니다. 사이트가 페이지를 요청해 찾은 제목, 설명, 이미지, Twitter 카드를 보여 줍니다. 페이지는 여기에 저장되지 않습니다. 비공개 또는 로컬 주소는 페이지를 읽기 전에 거부됩니다.",
      "howTo": [
        "http 또는 https 절대 URL을 입력합니다.",
        "‘미리보기 확인’을 누릅니다.",
        "카드를 확인합니다. 거부된 주소, 시간 초과, http가 아닌 URL은 페이지 내용 없이 짧은 오류를 표시합니다."
      ],
      "features": [
        "공개 페이지의 제목, 설명, 이미지 주소, Twitter 카드 항목.",
        "리디렉션이 공개된 http 또는 https URL에 머무는 경우 리디렉션 후 주소.",
        "주소가 비공개이거나, 요청 시간이 초과되거나, 프로토콜이 http 또는 https가 아닐 때의 짧은 오류."
      ],
      "examples": [
        {
          "title": "공개 페이지",
          "body": "https://example.com/ 은 제목 Example Domain을 돌려줍니다. 이 페이지에는 설명, 이미지, Twitter 카드가 없으므로 해당 항목은 ‘찾을 수 없음’으로 표시됩니다."
        },
        {
          "title": "로컬 주소",
          "body": "http://127.0.0.1/ 과 10진수 형식인 http://2130706433/ 모두 ‘그 주소는 가져올 수 없습니다.’라고 표시됩니다."
        }
      ],
      "explanation": "브라우저는 이 사이트로 URL만 보냅니다. 사이트는 호스트를 확인하고, 비공개, 루프백, 링크 로컬, 예약된 주소를 거부하며, 리디렉션할 때마다 다시 확인합니다. 압축을 푼 페이지를 최대 512 KiB까지 읽은 뒤 태그를 돌려줍니다. 원본 페이지는 반환되지 않으며 저장되지도 않습니다.",
      "tips": [
        "태그를 직접 작성하려면 메타 태그 생성기를 사용하세요. 이 페이지는 공개 URL에 이미 있는 태그를 읽습니다."
      ],
      "limitations": "http와 https만 지원합니다. file URL, 사용자 이름이 포함된 URL, 비공개 주소는 거부됩니다. 요청은 8초 후 중단됩니다. 이미지 호스트가 미리보기 이미지를 차단해도 공유 이미지가 목록에 표시될 수 있습니다.",
      "faqs": [
        {
          "question": "Open Graph 미리보기는 무료인가요?",
          "answer": "네. 결제나 계정 생성 없이 공개 페이지의 공유 태그를 확인할 수 있습니다. 다만 태그를 읽기 위해 URL은 이 사이트로 전송됩니다."
        },
        {
          "question": "URL이 이 기기 밖으로 전송되나요?",
          "answer": "네. ‘미리보기 확인’은 URL을 이 사이트로 보내고, 사이트가 그 공개 페이지를 요청해 태그를 읽습니다. 페이지는 여기에 저장되지 않습니다. 비공개 주소나 http가 아닌 주소는 거부됩니다."
        },
        {
          "question": "로컬 URL이 거부된 이유는 무엇인가요?",
          "answer": "127.0.0.1, 사설 네트워크, 루프백 주소의 10진수 형식 같은 주소는 페이지를 읽기 전에 거부됩니다."
        },
        {
          "question": "시간이 초과되면 어떻게 보이나요?",
          "answer": "카드가 표시되지 않고, 미리보기 요청 시간이 초과되었다고 안내합니다."
        }
      ]
    },
    "ui": {
      "Not found": "찾을 수 없음",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "‘미리보기 확인’을 누르면 URL이 이 사이트로 전송됩니다. 사이트는 그 공개 페이지의 제목과 공유 태그를 읽고 페이지는 저장하지 않습니다. 비공개 주소나 http가 아닌 URL은 거부됩니다.",
      "Page URL": "페이지 URL",
      "Checking the page…": "페이지 확인 중…",
      "Image": "이미지",
      "The image address was found, but it did not load.": "이미지 주소는 찾았지만 불러오지 못했습니다.",
      "Twitter image": "Twitter 이미지",
      "That page could not be previewed.": "그 페이지는 미리 볼 수 없습니다.",
      "Enter an http or https page URL.": "http 또는 https 페이지 URL을 입력하세요.",
      "Checking…": "확인 중…",
      "Check preview": "미리보기 확인",
      "That address cannot be fetched.": "그 주소는 가져올 수 없습니다.",
      "The preview request timed out.": "미리보기 요청 시간이 초과되었습니다.",
      "That page redirected too many times.": "그 페이지의 리디렉션이 너무 많습니다.",
      "That page is not HTML.": "그 페이지는 HTML이 아닙니다.",
      "Too many preview requests. Wait a minute and try again.": "미리보기 요청이 너무 많습니다. 1분 후 다시 시도하세요.",
      "Send a JSON request with a url.": "url이 포함된 JSON 요청을 보내세요."
    }
  }
};

export default data;
