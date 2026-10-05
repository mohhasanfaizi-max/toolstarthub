import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "AIプロンプトジェネレーターは、入力したトピック・目的・対象読者・形式から構造化されたプロンプトを組み立てます。「プロンプトを生成」はブラウザ内で完結します。「AIで生成」は、これらの項目をToolStarHub経由でGoogleのGemini APIに送ります。",
    "content": {
      "about": "AIプロンプトジェネレーターは、入力した項目をコピーできるプロンプトにまとめます。プリセットが埋めるのは用途・トーン・形式・詳しさと最初の指示だけです。テーマはご自身で入力してください。",
      "howTo": [
        "プリセットを選ぶか、用途を自分で入力します。",
        "トピックか目的を入力します。少なくともどちらか一方が必要です。",
        "対象読者、トーン、言語、形式、詳しさを設定します。",
        "ブラウザ内で組み立てるなら「プロンプトを生成」、Geminiに仕上げてもらうなら「AIで生成」をクリックします。",
        "「クリア」でフォームをリセットできます。"
      ],
      "features": [
        "記事、投稿、台本、商品説明、調査の構成、コーディング用の12種類のプリセット。",
        "タスク・対象読者・トーン・言語・形式を明記した構造化プロンプト。",
        "足りない事実を作り上げないようモデルに求める一文。",
        "コピーとクリアのみ。何も保存されません。"
      ],
      "examples": [
        {
          "title": "うるう年生まれの年齢についてのブログ記事",
          "body": "プリセット：ブログ記事。トピック：2月29日生まれの人の年齢の計算方法。対象読者：日付計算ツールを使う人。プロンプトは短い導入と、水増ししない締めくくりを求めます。"
        },
        {
          "title": "コーディングの依頼",
          "body": "プリセット：コーディング用プロンプト。目的：空のページ範囲を受け付けない関数を書く。追加の指示：TypeScriptを使い、失敗する例も示す。プロンプトは言語、入力、完了の条件を尋ねます。"
        }
      ],
      "explanation": "「プロンプトを生成」は回答をラベル付きの行にまとめます。トピックと目的が両方空なら、処理を止めてどちらかの入力を求めます。「AIで生成」はこれらの項目をGeminiに送り、仕上げたプロンプトを返します。",
      "limitations": "「プロンプトを生成」は入力済みの項目だけをまとめ、トピックか目的が必要です。プリセットはスタイル項目を埋めますが、テーマは作りません。「AIで生成」はGeminiでプロンプトを仕上げます。このページが文章生成モデルでプロンプトを実行することはありません。",
      "tips": [
        "読者を具体的に。「子育て中の新米の親」のほうが「すべての人」より役立ちます。",
        "結果の形を伝えましょう。リスト、メール、台本などです。",
        "分かっている事実は追加の指示に書いておくと、モデルが推測せずに済みます。"
      ],
      "faqs": [
        {
          "question": "このツールはAIを使いますか？",
          "answer": "「プロンプトを生成」はこのページ内でプロンプトを組み立てます。「AIで生成」は項目をToolStarHub経由でGoogleのGemini APIに送り、仕上げたプロンプトを返します。どちらも別のモデルに貼り付けて使えます。"
        },
        {
          "question": "トピックしか決まっていない場合は？",
          "answer": "トピックだけで生成できます。読み終えた人に何をしてほしいかが決まったら、目的を加えてください。"
        },
        {
          "question": "入力したテキストはサーバーに送られますか？",
          "answer": "「プロンプトを生成」はこのタブ内で完結し、項目をアップロードしません。「AIで生成」は項目をToolStarHub経由でGoogleのGemini APIに送り、仕上げたプロンプトを返します。ToolStarHubはそのテキストを保存しません。無料枠では、Googleが製品改善のために利用する場合があります。"
        },
        {
          "question": "良いAIプロンプトの条件は？",
          "answer": "何がほしいのか、誰向けか、トーン、形式、長さを伝えましょう。形容詞を増やすより、明確な目的と出力例を示すほうが効果的なことが多いです。"
        },
        {
          "question": "このプロンプトはChatGPT、Gemini、Claudeで使えますか？",
          "answer": "はい。結果はプレーンテキストなので、どのチャットアシスタントにも貼り付けられます。ただし、同じプロンプトでもモデルによって答えが変わることがあります。"
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "「プロンプトを生成」はブラウザ内でプロンプトを組み立てます。「AIで生成」は入力した項目をToolStarHub経由でGoogleのGemini APIに送り、仕上げたプロンプトを返します。テキストは保存されません。",
      "Platform or use case": "プラットフォーム・用途",
      "Topic": "トピック",
      "Goal": "目的",
      "Audience": "対象読者",
      "Tone": "トーン",
      "Language": "言語",
      "Output format": "出力形式",
      "Level of detail": "詳しさ",
      "Brief": "簡潔",
      "Medium": "標準",
      "High": "詳細",
      "Additional instructions": "追加の指示",
      "Generate prompt": "プロンプトを生成",
      "Prompt": "プロンプト",
      "AI prompt": "AIプロンプト",
      "Blog article": "ブログ記事",
      "SEO article": "SEO記事",
      "Social media post": "SNS投稿",
      "YouTube script": "YouTube台本",
      "YouTube thumbnail prompt": "YouTubeサムネイル用プロンプト",
      "Image generation": "画像生成",
      "Video generation": "動画生成",
      "Product description": "商品説明",
      "Email": "メール",
      "Marketing copy": "マーケティング文",
      "Academic/research prompt": "学術・調査用プロンプト",
      "Coding prompt": "コーディング用プロンプト",
      "Add a topic or a goal before generating a prompt.": "プロンプトを生成する前に、トピックか目的を入力してください。"
    },
    "note": "「プロンプトを生成」は、AIモデルが最も正確に従う英語でプロンプトを書きます。回答の言語は「言語」欄で指定できます。「AIで生成」は日本語の入力も理解します。"
  },
  "prompt-to-image": {
    "answer": "プロンプトから画像ツールは、被写体とスタイルからコピーできる画像プロンプトを書きます。画像そのものは作りません。「AIで生成」が返すのも、より詳しいプロンプトだけです。",
    "content": {
      "about": "プロンプトから画像ジェネレーターは、画像モデル向けのプロンプトを書きます。被写体、場所、光、構図を説明してください。画像APIは接続されていないため、このページが画像を描くことはありません。",
      "howTo": [
        "出発点がほしければスタイルのプリセットを選びます。",
        "被写体を説明します。被写体がないとプロンプトは作成されません。",
        "必要に応じて環境、光、カメラ、色、雰囲気、アスペクト比を加えます。",
        "画像に入れたくないものはネガティブプロンプトに書きます。",
        "「プロンプトを作成」をクリックし、プロンプトとネガティブプロンプトを別々にコピーします。"
      ],
      "features": [
        "写真、映画風、イラスト、商品、ポートレート、風景、建築、ファンタジー、アニメ、3D、サムネイルのプリセット。",
        "メインのプロンプトとネガティブプロンプトそれぞれのコピーボタン。",
        "空欄は省かれるので、プロンプトに空のラベルが残りません。"
      ],
      "examples": [
        {
          "title": "商品写真",
          "body": "被写体：ステンレス製の水筒。プリセット：商品写真。アスペクト比：1:1。ネガティブプロンプト：余計なロゴ、人物、散らかった机。結果はスタジオ撮影の説明文で、ファイルではありません。"
        },
        {
          "title": "サムネイル",
          "body": "被写体：マーカーを引いたPDFを持つ人。プリセット：YouTubeサムネイル。構図は「被写体は1つ、短いタイトル用の余白」のままです。タイトルの文字はご自身で書いてください。"
        }
      ],
      "explanation": "入力した項目はそれぞれ短いフレーズになります。プロンプトが具体的なものを描写するよう、被写体は必須です。プリセットはスタイルと関連する項目をいくつか変えますが、入力済みの被写体は消しません。",
      "limitations": "このページはプロンプトと、必要ならネガティブプロンプトを書きます。画像ファイルは出力しません。被写体は必須です。「AIで生成」はGeminiにより長いプロンプトを依頼し、それを画像ツールに貼り付けて使います。",
      "tips": [
        "被写体は1つのほうが、群衆より説明しやすくなります。",
        "光を具体的に。「窓からの光」と「真昼の強い日差し」では仕上がりがまったく違います。",
        "指が多い、文字が崩れるなど、繰り返し起きる失敗はネガティブプロンプトで防ぎましょう。"
      ],
      "faqs": [
        {
          "question": "なぜ画像が出ないのですか？",
          "answer": "このページはプロンプトを書くだけで、画像は生成しません。「AIで生成」はGeminiにより詳しいプロンプトを依頼します。それを画像を作るサービスに貼り付けてください。"
        },
        {
          "question": "どのモデルもプロンプトを同じように読みますか？",
          "answer": "いいえ。言い回しへの反応はモデルによって異なります。結果は分かりやすい指示書と考え、使うツールに合わせて調整してください。"
        },
        {
          "question": "入力したテキストはサーバーに送られますか？",
          "answer": "「プロンプトを作成」はこのブラウザ内で完結し、内容をアップロードしません。「AIで生成」は内容をToolStarHub経由でGoogleのGemini APIに送り、より長いプロンプトを返します。ToolStarHubはそのテキストを保存しません。無料枠では、Googleが製品改善のために利用する場合があります。それでもこのページが画像を作ることはありません。"
        },
        {
          "question": "良い画像プロンプトを書くには？",
          "answer": "まず被写体を書き、次に環境、光、カメラや画風、配色、雰囲気、アスペクト比を加えます。大事な点は具体的に書き、それ以外は省きましょう。"
        },
        {
          "question": "ネガティブプロンプトとは？",
          "answer": "文字、余分な指、ぼけなど、画像に入れたくないものを並べたものです。すべての画像モデルが読み取るわけではありません。"
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "「プロンプトを作成」はブラウザ内で画像プロンプトを書きます。「AIで生成」は内容をToolStarHub経由でGoogleのGemini APIに送り、より詳しい画像プロンプトを返します。このページは画像を作りません。テキストは保存されません。",
      "Style presets": "スタイルのプリセット",
      "Composition": "構図",
      "Colors": "色",
      "Quality and detail": "品質とディテール",
      "Things you want left out of the picture.": "画像に入れたくないもの。",
      "Image prompt": "画像プロンプト",
      "AI image prompt": "AI画像プロンプト",
      "Photorealistic": "フォトリアル",
      "Cinematic": "映画風",
      "Illustration": "イラスト",
      "Product photography": "商品写真",
      "Portrait": "ポートレート",
      "Landscape": "風景",
      "Architecture": "建築",
      "Fantasy": "ファンタジー",
      "Anime": "アニメ",
      "3D render": "3Dレンダリング",
      "YouTube thumbnail": "YouTubeサムネイル",
      "Describe the subject before building the prompt.": "プロンプトを作成する前に、被写体を説明してください。"
    },
    "note": "作成されるプロンプトには、画像モデルが最も理解しやすい英語のラベルが使われます。説明はどの言語で入力してもかまいません。"
  },
  "prompt-to-video": {
    "answer": "プロンプトから動画ツールは、動画モデルに貼り付けられるショットの説明を書きます。クリップは生成しません。「AIで生成」が返すのも、文章のプロンプトだけです。",
    "content": {
      "about": "プロンプトから動画ジェネレーターは、1つのショットの説明を書きます。誰または何が映るか、何が動くか、カメラがどう動くか、何秒続くかです。動画は作りません。",
      "howTo": [
        "出発点のスタイルとしてプリセットを選ぶか、空欄のまま自分で書きます。",
        "被写体か動作を入力します。どちらか一方が必須です。",
        "シーン、カメラ、レンズ、光、長さ、アスペクト比を説明します。",
        "音声やセリフは、ショットに必要なときだけ加えます。",
        "「プロンプトを作成」をクリックしてテキストをコピーします。「クリア」は既定の長さも含めてフォームをリセットします。"
      ],
      "features": [
        "映画風、商品CM、SNS、YouTube、ドキュメンタリー、旅行、アクション、ファッション、自然、歴史、アニメーションのプリセット。",
        "依頼を1つの連続したショットに限定する締めの一文。",
        "避けたい動きや映像の乱れのための独立したネガティブプロンプト。"
      ],
      "examples": [
        {
          "title": "商品の周りを回るショット",
          "body": "被写体：陶器のマグカップ。動作：湯気が立ちのぼる。プリセット：商品CM。長さは6秒のまま。プロンプトは周回するカメラワークとスタジオ照明を求めます。"
        },
        {
          "title": "静かな旅のショット",
          "body": "被写体：海沿いの小道。動作：人がカメラから遠ざかっていく。プリセット：旅行。光があいまいにならないよう、時間帯を環境欄に書きます。"
        }
      ],
      "explanation": "動画モデルは、いくつもの場面より1つの動作のほうがうまく扱えます。ジェネレーターはフレーズを一定の順序に保ち、「1つの連続したショット」と加えて、依頼が絵コンテにならないようにします。",
      "limitations": "ジェネレーターが説明するのは1つの連続したショットです。動画の生成やダウンロードはしません。被写体か動作が必要です。長さ、カメラ、セリフは入力したときだけ含まれます。",
      "tips": [
        "何が動き、何が止まっているかを書きましょう。",
        "「短め」より「5秒」のような長さのほうが役立ちます。",
        "セリフが必要なら、そのセリフを書いてください。モデルにスピーチを作らせないようにしましょう。"
      ],
      "faqs": [
        {
          "question": "このページから動画をダウンロードできますか？",
          "answer": "いいえ。このページは動画を生成しません。「AIで生成」が返すのは、Geminiが書いたショットのプロンプトだけです。信頼できる動画ツールにコピーしてください。"
        },
        {
          "question": "動作だけを説明した場合は？",
          "answer": "動作だけで十分です。被写体を加えると、ショットを思い描きやすくなります。"
        },
        {
          "question": "入力したテキストはサーバーに送られますか？",
          "answer": "「プロンプトを作成」はこのタブ内でショットを書きます。「AIで生成」はショットの項目をToolStarHub経由でGoogleのGemini APIに送り、文章のプロンプトを返します。ToolStarHubはそのテキストを保存しません。無料枠では、Googleが製品改善のために利用する場合があります。動画ファイルは作られません。"
        },
        {
          "question": "AI動画のプロンプトはどう書けばいいですか？",
          "answer": "1つのショットを説明します。被写体、動作、環境、カメラの動き、レンズ、光、長さです。長い物語より、短く具体的なプロンプトのほうがうまくいくことが多いです。"
        },
        {
          "question": "どの動画モデルでこのプロンプトを使えますか？",
          "answer": "出力はプレーンテキストなので、どのテキストから動画ツールにも貼り付けられます。カメラや時間の指示の解釈はモデルごとに異なります。"
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "「プロンプトを作成」はブラウザ内で動画プロンプトを書きます。「AIで生成」は内容をToolStarHub経由でGoogleのGemini APIに送り、ショットのプロンプトを返します。このページは動画を作りません。テキストは保存されません。",
      "Video subject": "動画の被写体",
      "Scene": "シーン",
      "Action": "動作",
      "Camera movement": "カメラの動き",
      "Lens": "レンズ",
      "Visual style": "映像スタイル",
      "Duration": "長さ",
      "Audio or dialogue": "音声・セリフ",
      "Video prompt": "動画プロンプト",
      "AI video prompt": "AI動画プロンプト",
      "Cinematic": "映画風",
      "Product commercial": "商品CM",
      "Social media": "SNS",
      "YouTube": "YouTube",
      "Documentary": "ドキュメンタリー",
      "Travel": "旅行",
      "Fashion": "ファッション",
      "Nature": "自然",
      "Historical": "歴史",
      "Animation": "アニメーション",
      "Add a subject or an action before building the prompt.": "プロンプトを作成する前に、被写体か動作を入力してください。"
    },
    "note": "作成されるプロンプトには、動画モデルが最も理解しやすい英語のラベルが使われます。説明はどの言語で入力してもかまいません。"
  },
  "ai-article-detector": {
    "answer": "このページは、文の長さや繰り返される言い回しなどの文章パターンを確認します。「AIで分析」も文章パターンの分析です。人とモデルのどちらが書いたかを判定するものではありません。",
    "content": {
      "about": "AI記事判定ツールは、貼り付けた下書きを調べて、文の長さ、その長さのばらつき、語彙の幅、繰り返される短い言い回しを示します。結果の名前は「文章パターンの分析」で、それ以上のことは主張しません。",
      "howTo": [
        "40語以上を貼り付けます。",
        "ブラウザ内で確認するなら「文章を分析」、Geminiに文章パターンを分析させるなら「AIで分析」をクリックします。",
        "数値とその下の注記を読みます。",
        "サンプルが短すぎる場合は、評価せずにその旨を表示します。",
        "「クリア」でページからテキストを消します。"
      ],
      "features": [
        "平均文長と、ばらつき（小・中・大）。",
        "異なる語の数にもとづく語彙の評価。",
        "3回以上出てくる4語の言い回し。",
        "決まり文句があれば、その短いリスト。"
      ],
      "examples": [
        {
          "title": "繰り返しの多い下書き",
          "body": "同じ4語が複数の文に出てくると、その回数とともに表示されます。これは下書きが繰り返しているという意味で、モデルが書いたという意味ではありません。"
        },
        {
          "title": "短いキャプション",
          "body": "20語では足りません。1文だけをパターンとみなさないよう、40語が必要です。"
        }
      ],
      "explanation": "文のばらつきは、文長の散らばりを平均と比べたものです。語彙は、異なる語の数を総語数と比べたものです。どちらも普通の推敲で変わります。丁寧に書かれた人の文章が均一に見えることも、生成された文章が変化に富んで見えることもあります。結果にもそう書かれています。",
      "limitations": "ブラウザでの確認には40語以上が必要です。文の長さ、語彙の幅、繰り返しの言い回しを示します。パーセンテージや「モデルが書いた」という判定は出しません。「AIで分析」は同じ種類の説明を得るためにテキストをGeminiに送ります。",
      "tips": [
        "見出しではなく、段落をまるごと使いましょう。",
        "繰り返しの言い回しは推敲のヒントとして扱い、読者が気づきそうなら削りましょう。",
        "この評価を、誰かがモデルを使ったと責める根拠にしないでください。"
      ],
      "faqs": [
        {
          "question": "AIが書いた文章かどうか分かりますか？",
          "answer": "確実には分かりません。パターンによる判定は、どちらの方向にも誤ります。結果は下書きの説明であり、判定ではありません。"
        },
        {
          "question": "なぜパーセンテージがないのですか？",
          "answer": "パーセンテージは証拠のように見えてしまうからです。「文章を分析」も「AIで分析」もパターンを説明するだけで、誰が書いたかを知っているとは主張しません。"
        },
        {
          "question": "入力したテキストはサーバーに送られますか？",
          "answer": "「文章を分析」はこのタブ内でパターンを数え、下書きをアップロードしません。「AIで分析」は下書きをToolStarHub経由でGoogleのGemini APIに送り、文章による説明を受け取ります。ToolStarHubはそのテキストを保存しません。無料枠では、Googleが製品改善のために利用する場合があります。"
        },
        {
          "question": "AI判定ツールは正確ですか？",
          "answer": "誰が書いたかを証明できる判定ツールはありません。パターンにもとづくスコアは、人の文章を誤って指摘したり、推敲されたAIの文章を見逃したりします。結果は証拠ではなく、見直しのきっかけとして扱ってください。"
        },
        {
          "question": "このツールはどんなパターンを見ますか？",
          "answer": "文の長さ、語彙のばらつき、繰り返しの言い回しを示します。下書きが単調な箇所や繰り返しの多い箇所が分かります。"
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "「文章を分析」はブラウザ内でパターンを確認します。「AIで分析」は下書きをToolStarHub経由でGoogleのGemini APIに送り、文章パターンを分析します。どちらの結果も、誰が書いたかは判定できません。下書きは保存されません。",
      "Article or draft": "記事・下書き",
      "Paste at least 40 words.": "40語以上を貼り付けてください。",
      "Analyze writing": "文章を分析",
      "Analyze with AI": "AIで分析",
      "Avg. sentence": "平均文長",
      "{0} words": "{0}語",
      "Sentence variation": "文のばらつき",
      "Vocabulary": "語彙",
      "Writing pattern analysis": "文章パターンの分析",
      "No four-word phrase repeats three or more times.": "3回以上出てくる4語の言い回しはありません。",
      "Familiar stock phrases found:": "見つかった決まり文句：",
      "AI writing analysis": "AIによる文章分析",
      "Paste some writing first.": "まずテキストを貼り付けてください。",
      "Paste at least 40 words. A short snippet does not show a pattern.": "40語以上を貼り付けてください。短い抜粋ではパターンが分かりません。",
      "Low": "小",
      "Moderate": "中",
      "Varied": "大",
      "Narrow": "狭い",
      "Mixed": "標準",
      "Broad": "広い",
      "\"{0}\" appears {1} times": "「{0}」が{1}回出てきます",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "これは文章のパターンであり、誰が書いたかの証拠ではありません。似たパターンは、推敲された人の文章にも生成された文章にも現れます。判定ツールはどちらの方向にも誤ることがあります。"
    },
    "note": "ブラウザでの確認は英語の単語リストと決まり文句を使い、語をスペースで数えるため、英語の文章に最も適しています。日本語の文章には「AIで分析」をお使いください。"
  },
  "ai-article-compressor": {
    "answer": "記事圧縮ツールは、冗長な表現や繰り返しの文を削って下書きを短くします。「AIで圧縮」はGeminiに要点を残すよう依頼します。公開前に結果を確認してください。",
    "content": {
      "about": "AI記事圧縮ツールは、長い下書きを短くします。軽い圧縮は回りくどい表現をいくつか置き換え、空白を整えます。標準と強い圧縮では、繰り返しの文も削除します。結果は必ず読んでください。文が消えると意味が変わることがあります。",
      "howTo": [
        "記事を貼り付けます。12語以上が必要です。",
        "軽い・標準・強いの圧縮レベルを選びます。",
        "ブラウザのルールで短くするなら「記事を短くする」、Geminiに短くしてもらうなら「AIで圧縮」をクリックします。",
        "語数を比べ、意図が伝わっていれば短い下書きをコピーします。",
        "「クリア」で両方の欄を空にし、レベルを標準に戻します。"
      ],
      "features": [
        "3つのレベル。軽い圧縮では文を削除しません。",
        "圧縮前と後の語数。",
        "「in order to」を「to」にするなどの固定の置き換え。",
        "標準と強いレベルでの重複文の削除。"
      ],
      "examples": [
        {
          "title": "回りくどい文",
          "body": "「In order to finish the form, you need to sign it」は、どのレベルでも「to finish the form, you need to sign it」になります。"
        },
        {
          "title": "同じ文が2回",
          "body": "標準と強いレベルでは最初の文を残し、後に出てくる完全な繰り返しを削ります。軽いレベルでは両方残ります。"
        }
      ],
      "explanation": "「記事を短くする」は固定の置き換えリストを使います。強い圧縮では、前の文と同じ6語で始まる後の文も飛ばします。「AIで圧縮」は選んだレベルで記事を短くするようGeminiに依頼します。どちらの結果も、頼る前に読んでください。",
      "limitations": "軽い圧縮は回りくどい表現の固定リストを置き換えます。標準と強いレベルは後に出てくる完全な繰り返しも削り、強いレベルは同じ6語で始まる文を飛ばすことがあります。下書きには12語以上が必要です。圧縮によって残したかった文が消えることがあります。",
      "tips": [
        "すでに簡潔な記事なら、軽いレベルから始めましょう。",
        "粗い初稿には強いレベルを使い、あとで大事な文を戻しましょう。",
        "下書きの作り方を隠すための手段ではありません。"
      ],
      "faqs": [
        {
          "question": "圧縮した文章はAI判定ツールをすり抜けますか？",
          "answer": "いいえ。このツールはそれを狙っておらず、特定のタイプの書き手が書いたように見えるとも主張しません。"
        },
        {
          "question": "言いたいことは残りますか？",
          "answer": "「記事を短くする」はほとんどの語を残し、冗長な部分と繰り返しを少し削ります。「AIで圧縮」は要点と重要な事実を残すようGeminiに依頼します。頼る前に短い下書きを読んでください。"
        },
        {
          "question": "入力したテキストはサーバーに送られますか？",
          "answer": "「記事を短くする」はこのタブ内で動作し、下書きをアップロードしません。「AIで圧縮」は下書きをToolStarHub経由でGoogleのGemini APIに送り、短いバージョンを返します。ToolStarHubはそのテキストを保存しません。無料枠では、Googleが製品改善のために利用する場合があります。"
        },
        {
          "question": "意味を損なわずに記事を短くするには？",
          "answer": "まず回りくどい表現を削り、次に繰り返しの論点、最後に何も加えていない文をまるごと削ります。使う前に元の文章と比べてください。"
        },
        {
          "question": "どの圧縮レベルを選べばいいですか？",
          "answer": "軽いレベルは回りくどい表現を置き換えるだけです。標準は繰り返しも削ります。強いレベルは同じ書き出しの文を飛ばすことがあるので、より丁寧に確認してください。"
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "「記事を短くする」はブラウザ内で固定のルールを適用します。「AIで圧縮」は記事をToolStarHub経由でGoogleのGemini APIに送り、短い下書きを返します。記事は保存されません。公開前に結果を確認してください。",
      "Article": "記事",
      "Compression": "圧縮レベル",
      "Light compression": "軽い圧縮",
      "Medium compression": "標準の圧縮",
      "Strong compression": "強い圧縮",
      "Shorten article": "記事を短くする",
      "Compress with AI": "AIで圧縮",
      "Copy shorter draft": "短い下書きをコピー",
      "Shorter draft": "短い下書き",
      "The shorter draft will appear here.": "ここに短い下書きが表示されます。",
      "AI shorter draft": "AIによる短い下書き",
      "Copy AI draft": "AIの下書きをコピー",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "圧縮前{0}語、圧縮後{1}語。使う前に短い下書きを読んでください。",
      "Paste an article first.": "まず記事を貼り付けてください。",
      "Paste a longer article. A few words is not enough to shorten.": "もっと長い記事を貼り付けてください。数語では短くできません。",
      "Nothing was left after compression. Try a lighter setting.": "圧縮後に何も残りませんでした。軽いレベルをお試しください。"
    },
    "note": "「記事を短くする」は英語の表現リストを使い、語をスペースで数えるため、日本語の文章はほとんど変わりません。日本語には「AIで圧縮」をお使いください。"
  },
  "ai-text-humanizer": {
    "answer": "AI文章ヒューマナイザーは、固定リストにもとづいてブラウザ内で決まり文句を置き換えます。「AIで自然な文章に」は下書きをToolStarHub経由でGoogleのGemini APIに送ります。AI判定ツールをすり抜けようとするものではなく、特定のタイプの書き手が書いたように見えるとも主張しません。",
    "content": {
      "about": "AI文章ヒューマナイザーは、決まり文句の固定リストをよりシンプルな言い回しに置き換えます。「文章を書き直す」はこのタブ内で処理します。「AIで自然な文章に」は下書きをToolStarHub経由でGoogleのGemini APIに送り、書き直した文章を返します。テキストは保存されません。使う前に結果を確認してください。どちらの結果も、下書きの作り方を隠すための手段ではありません。",
      "howTo": [
        "下書きを貼り付けます。12語以上、4,000文字以内が必要です。",
        "ブラウザ内の決まり文句リストを使うなら「文章を書き直す」、Geminiに書き直してもらうなら「AIで自然な文章に」をクリックします。",
        "結果を確認します。削除のあと、次の語が小文字のまま残ることがあります。",
        "意図が伝わっていれば、書き直した文章をコピーします。",
        "「クリア」で入力欄とローカルの結果を空にします。"
      ],
      "features": [
        "ブラウザ内で適用する決まり文句の固定リスト。",
        "「AIで自然な文章に」の結果は別に表示。",
        "どちらのボタンも4,000文字まで。",
        "文や重複文の削除はしません。"
      ],
      "examples": [
        {
          "title": "ありがちな書き出し",
          "body": "「In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.」は「here is the setup. you can use a short checklist.」になります。"
        },
        {
          "title": "繰り返しの文",
          "body": "「The form is short. The form is short. Please sign it before noon today and bring a pen.」は両方の文が残ります。この処理では繰り返しの文を削除しません。"
        }
      ],
      "explanation": "「文章を書き直す」は固定リストを1回だけ適用します。削除後に大文字へ戻すことはなく、カーリーアポストロフィーは一致しません。「AIで自然な文章に」は、同じ事実・名前・数字を残し、要約に縮めないようGeminiに依頼します。どちらの結果も使う前に確認してください。",
      "limitations": "「文章を書き直す」には12語以上が必要で、どちらのボタンも4,000文字までです。ローカル処理が置き換えるのはリストにある表現だけです。カーリーアポストロフィーは一致しません。AI判定ツールをすり抜けようとするものではなく、特定のタイプの書き手が書いたように見えるとも主張しません。",
      "tips": [
        "使う前に結果を確認してください。表現を削ったあと、次の語が小文字のまま残ることがあります。",
        "繰り返しの文はそのまま残ります。この処理では削除しません。",
        "どちらの結果も、下書きの作り方を隠すための手段ではありません。"
      ],
      "faqs": [
        {
          "question": "AI文章ヒューマナイザーは無料ですか？",
          "answer": "はい。料金もアカウントも不要で下書きを書き直せます。「文章を書き直す」はこのタブ内で完結します。「AIで自然な文章に」は下書きをToolStarHub経由でGoogleのGemini APIに送ります。"
        },
        {
          "question": "AI判定ツールをすり抜けられますか？",
          "answer": "いいえ。このツールはそれを狙っておらず、特定のタイプの書き手が書いたように見えるとも主張しません。"
        },
        {
          "question": "言いたいことは残りますか？",
          "answer": "「文章を書き直す」は決まり文句リストにない語をすべて残します。「AIで自然な文章に」は、同じ事実・名前・数字を残し、下書きを要約しないよう指示されています。使う前に結果を確認してください。"
        },
        {
          "question": "入力したテキストはサーバーに送られますか？",
          "answer": "「文章を書き直す」はこのタブ内で動作し、下書きをアップロードしません。「AIで自然な文章に」は下書きをToolStarHub経由でGoogleのGemini APIに送り、書き直した文章を返します。ToolStarHubはそのテキストを保存しません。無料枠では、Googleが製品改善のために利用する場合があります。"
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "「文章を書き直す」はブラウザ内で決まり文句の固定リストを使います。「AIで自然な文章に」はテキストをToolStarHub経由でGoogleのGemini APIに送り、書き直した文章を返します。テキストは保存されません。使う前に結果を確認してください。どちらの結果も、下書きの作り方を隠すための手段ではありません。",
      "Draft": "下書き",
      "Rewrite text": "文章を書き直す",
      "Humanize with AI": "AIで自然な文章に",
      "Copy rewritten draft": "書き直した文章をコピー",
      "Rewritten draft": "書き直した文章",
      "The rewritten draft will appear here.": "ここに書き直した文章が表示されます。",
      "AI rewrite": "AIによる書き直し",
      "Copy AI rewrite": "AIの書き直しをコピー",
      "Paste a draft first.": "まず下書きを貼り付けてください。",
      "That text is too long for this rewrite. Shorten it and try again.": "このテキストは書き直すには長すぎます。短くしてからもう一度お試しください。",
      "Paste a longer draft. A few words is not enough to rewrite.": "もっと長い下書きを貼り付けてください。数語では書き直せません。",
      "Nothing was left after the rewrite. Try different wording.": "書き直した結果、何も残りませんでした。別の言い回しをお試しください。"
    },
    "note": "「文章を書き直す」は英語の決まり文句リストを使い、語をスペースで数えるため、日本語の文章はほとんど変わりません。日本語には「AIで自然な文章に」をお使いください。"
  }
};

export default data;
