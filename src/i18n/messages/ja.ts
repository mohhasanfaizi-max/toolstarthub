import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "ホーム",
      allTools: "すべてのツール",
      categories: "カテゴリ",
      guides: "ガイド",
      popularTools: "人気のツール",
      about: "サイトについて",
      howItWorks: "使い方",
      contact: "お問い合わせ",
      exploreTools: "ツールを探す",
      mobileNav: "モバイル",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      openSearch: "検索を開く",
      closeSearch: "検索を閉じる",
    },
    theme: {
      toLight: "ライトテーマに切り替え",
      toDark: "ダークテーマに切り替え",
    },
    language: {
      label: "言語",
      current: "言語: {name}",
      englishOnly: "英語のみ",
    },
    search: {
      placeholder: "ツールを検索…",
      label: "ツールを検索",
      clear: "検索をクリア",
      suggestions: "検索候補",
      noResults: "ツールが見つかりません",
    },
    consent: {
      title: "アクセス解析 Cookie",
      body: "訪問数の計測に Google Analytics を使用しますが、同意いただいた場合に限ります。どちらを選んでもツールは同じように使えます。詳しくは{link}をご覧ください。",
      privacyLink: "プライバシーポリシー",
      accept: "同意する",
      decline: "拒否する",
      settings: "Cookie 設定",
    },
    favorites: {
      add: "{name}をお気に入りに追加",
      remove: "{name}をお気に入りから削除",
    },
    card: { popular: "人気", new: "新着", openTool: "ツールを開く" },
    categoryNames: {
      calculators: "計算ツール",
      "text-tools": "テキストツール",
      "developer-tools": "開発者向けツール",
      "image-tools": "画像ツール",
      "seo-utilities": "SEO・ユーティリティ",
      "ai-tools": "AI ツール",
    },
    home: {
      filterAria: "ツールを絞り込む",
      filters: {
        all: "すべて",
        pdf: "PDF",
        images: "画像",
        "text-tools": "テキスト",
        "developer-tools": "開発者向け",
        calculators: "計算",
        "seo-utilities": "ユーティリティ",
        "ai-tools": "AI",
      },
      noToolsInGroup: "このグループにはツールがありません。",
    },
    catalog: {
      filterAria: "ツールを絞り込む",
      filters: {
        all: "すべて",
        calculators: "計算",
        "image-tools": "画像",
        pdf: "PDF",
        "text-tools": "テキスト",
        "developer-tools": "開発者向け",
        color: "カラー",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "AI",
      },
      favorites: "お気に入り",
      sort: "並べ替え",
      sortName: "名前順",
      sortNewest: "新しい順",
      sortCategory: "カテゴリ順",
      recentlyUsed: "最近使ったツール",
      recentEmpty: "使ったツールがここに表示されます。",
      viewAll: "すべて表示",
      searchResults: "検索結果",
      allTools: "すべてのツール",
      tools: "ツール",
      noFavorites: "お気に入りに追加したツールはまだありません。",
      noToolsFound: "ツールが見つかりません",
      noToolsCategory: "このカテゴリにはまだツールがありません。",
      countFavorites: { other: "お気に入り {count} 件" },
      countResults: { other: "「{query}」の検索結果 {count} 件" },
      countOf: "{total} 件中 {count} 件のツール",
    },
    tool: {
      loading: "ツールを読み込み中…",
      copy: "コピー",
      copied: "コピーしました",
      copyCss: "CSS をコピー",
      copyLink: "リンクをコピー",
      linkCopied: "リンクをコピーしました",
      download: "ダウンロード",
      dropPrompt:
        "ここに画像をドラッグ＆ドロップするか、ファイルを選択してください。",
      selected: "選択中: {name}",
      copySuccess: "{what}をクリップボードにコピーしました。",
      copyFailed:
        "自動でコピーできませんでした。{what}を選択した状態にしてあるので、Ctrl+C（Mac では Cmd+C）を押してコピーしてください。",
    },
  },
  meta: {
    tagline: "すぐに使える無料オンラインツール",
    description:
      "計算、テキスト、開発、画像、SEO、日常の作業に使える、速くて無料で使いやすいオンラインツール。登録は不要です。",
    toolsTitle: "すべてのツール",
    toolsDescription:
      "計算、テキスト、開発、画像、SEO、日常の作業に役立つ無料オンラインツールの一覧です。",
    categoriesTitle: "カテゴリ",
    categoriesDescription:
      "Tools Star Hub をカテゴリ別に探す: 計算ツール、テキストツール、開発者向けツール、画像・PDF ツール、SEO ユーティリティ、AI ツール。",
    categoryTitle: "{name} – 無料オンラインツール",
    categoryShareAlt: "{name} – 無料オンラインツール",
    toolShareAlt: "{name} – 無料オンラインツール",
  },
  header: {
    primaryNav: "メインナビゲーション",
    logoHome: "{name} ホーム",
    skip: "メインコンテンツへスキップ",
  },
  breadcrumbs: {
    label: "パンくずリスト",
    home: "ホーム",
    tools: "ツール",
    categories: "カテゴリ",
  },
  footer: {
    blurb:
      "計算、テキスト、開発、画像、SEO、日常の作業のための、速くてシンプルなオンラインツール。",
    tagline: "高速 • 無料 • ブラウザで動作 • 登録不要",
    explore: "探す",
    categories: "カテゴリ",
    legal: "規約・ポリシー",
    favorites: "お気に入り",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    disclaimer: "免責事項",
    languages: "言語",
    rights: "© {year} {name}. All rights reserved.",
  },
  home: {
    h1: "毎日の作業に使える無料オンラインツール",
    intro:
      "ツールを見つけて、使って、結果を受け取るだけ。{name} は、PDF・画像・計算・テキストをアカウントなしで扱えるシンプルなサイトです。",
    popularLabel: "人気:",
    trust: [
      "無料で使える",
      "登録不要",
      "速くて簡単",
      "ファイルはブラウザ内で処理",
    ],
    popularTitle: "人気のツール",
    popularDescription:
      "ファイル、画像、テキスト、日常の計算によく使われるツールです。",
    viewAllTools: "すべてのツールを見る",
    catalogTitle: "必要なものが、ひとつの場所に。",
    catalogDescription:
      "このサイトのツールを絞り込めます。どれもブラウザですぐに開けます。",
    categoriesTitle: "カテゴリから探す",
    categoriesDescription:
      "計算、テキスト、開発者向けユーティリティ、画像と PDF、ウェブサイト向けツール。",
    allCategories: "すべてのカテゴリ",
    whyTitle: "{name} が選ばれる理由",
    whyDescription:
      "本来なら別のアプリが必要な作業を、わかりやすいユーティリティでまとめました。",
    values: {
      fast: {
        title: "高速",
        note: "ほとんどのツールはブラウザで動作し、同じページに結果を表示します。",
      },
      free: { title: "無料", note: "このサイトのツールは料金がかかりません。" },
      private: {
        title: "プライベート",
        note: "ファイルや貼り付けたテキストはお使いの端末で処理されます。ページの閲覧数は、プライバシーポリシーで説明しているとおり別途計測します。",
      },
      noAccount: {
        title: "アカウント不要",
        note: "ツールを開いてそのまま使えます。アカウントは必要ありません。",
      },
    },
    howTitle: "使い方",
    howDescription: "3 ステップ。インストールは不要です。",
    steps: [
      {
        title: "ツールを選ぶ",
        description:
          "計算ツール、ファイルツール、開発者向けユーティリティを検索または選択します。",
      },
      {
        title: "アップロードまたは入力",
        description: "ツールが必要とするファイル、数値、テキストを追加します。",
      },
      {
        title: "結果を受け取る",
        description:
          "同じページで結果をコピー、ダウンロード、または確認できます。",
      },
    ],
    guidesTitle: "お役立ちガイド",
    guidesDescription: "このサイトのツールでできる作業を短く解説しています。",
    allGuides: "すべてのガイド",
    pricingTitle: "料金",
    pricingBody:
      "ツールは無料でお使いいただけます。アカウント、インストール、有料プランはありません。",
    ctaTitle: "作業をもっと速く片付けませんか？",
    ctaBody: "{name} のシンプルなオンラインツールをご覧ください。",
    ctaPrimary: "すべてのツールを見る",
    ctaSecondary: "ツールを試す",
  },
  toolsPage: {
    title: "すべてのツール",
    description:
      "検索したり、カテゴリで絞り込んだり、最近使ったツールやお気に入りを開き直したりできます。新しいツールは追加されしだいここに表示されます。",
  },
  categoriesPage: {
    title: "カテゴリ",
    description: "カテゴリを選ぶと、目的のツールがすばやく見つかります。",
    body: "計算ツールは日常の数字を扱います。テキストツールは文章の文字数を数えたり整えたりします。開発者向けツールは整形、エンコード、圧縮（ミニファイ）を行います。画像ツールには、PDF の結合・分割・テキスト抽出といった作業も含まれます。SEO・ユーティリティでは、キャンペーン用リンク、スラッグ、QR コード、パスワードを扱います。AI ツールはブラウザ内でプロンプトを作成したり下書きを短くしたりでき、AI ボタンを押すと入力したテキストが Google の Gemini モデルに送られて結果が生成されます。それ以外のツールはすべてブラウザ内で動作します。",
  },
  category: {
    cardCount: { other: "{count} 個のツール" },
    pageCount: { other: "このカテゴリには {count} 個のツールがあります。" },
    browse: "ツールを見る",
    starting: "おすすめの入り口",
    related: "関連カテゴリ",
    none: "このカテゴリにはまだツールがありません。",
  },
  toolPage: {
    whatIs: "{name}とは？",
    categorySr: "カテゴリ",
    relatedTools: "関連ツール",
    helpfulGuides: "お役立ちガイド",
    englishContent:
      "このツールの詳しい解説（使い方、例、よくある質問）は、現在英語のみでご用意しています。",
    details: {
      about: "このツールでできること",
      howTo: "使い方",
      examples: "例",
      examplesFallback:
        "ここに例がない場合は、説明にある簡単な例で上の作業エリアを試してください。",
      features: "主な機能",
      howItWorks: "仕組み",
      tips: "ヒント",
      limitations: "制限事項",
      limitationsFallback:
        "結果を利用する前に確認してください。端末のメモリが少ないと、大きなファイルは処理が遅くなったり失敗したりすることがあります。",
      disclaimer: "これらのツールの対象外については{link}をご覧ください。",
      disclaimerLink: "免責事項",
      faq: "よくある質問",
      howToName: "{name}の使い方",
      defaultHowTo: [
        "値を入力するか、必要に応じてファイルを選びます。",
        "このページで処理を実行します。",
        "結果を確認し、必要に応じてコピー、ダウンロード、リセットします。",
      ],
      mobileQuestion: "スマートフォンでも使えますか？",
      mobileAnswer:
        "はい。このページはスマートフォンやタブレットでも開けます。ファイルの選択とダウンロードは端末のブラウザで行います。大きなファイルは、小型のスマートフォンではパソコンより時間がかかることがあります。",
      workspaceNote: "注意",
    },
    privacy: {
      browser:
        "このツールはブラウザ内で動作します。入力内容、ファイル、生成した値はこの端末に残ります。お気に入りと最近使ったツールを利用する場合も、ローカルストレージに保存されるのはツール名だけで、パスワード、文書、QR コードの内容は保存されません。",
      gemini:
        "通常のボタンはブラウザ内で動作します。「Generate with AI」「Analyze with AI」「Compress with AI」は、入力したテキストを ToolStarHub 経由で Google の Gemini API に送信します。そのテキストはこのサイトには保存されません。無料枠では、Google が製品改善のために利用する場合があります。お気に入りに保存されるのはツール名だけです。",
      humanizer:
        "「Rewrite text」はブラウザ内で動作します。「Humanize with AI」は、入力したテキストを ToolStarHub 経由で Google の Gemini API に送信します。そのテキストはこのサイトには保存されません。無料枠では、Google が製品改善のために利用する場合があります。お気に入りに保存されるのはツール名だけです。",
      fetch:
        "「Check preview」は URL をこのサイトに送信し、サイトがその公開ページを取得してタグを読み取ります。ページはここに保存されません。プライベートなアドレスや http 以外のアドレスは拒否されます。お気に入りに保存されるのはツール名だけです。",
      see: "詳しくは{link}をご覧ください。",
      link: "プライバシーポリシー",
    },
  },
  categories: {
    calculators: {
      name: "計算ツール",
      description: "毎日使える計算ツール",
      shortDescription: "パーセント、年齢、単位など、日常のさまざまな計算に。",
      intro:
        "これらの計算ツールは、具体的な数値の疑問に答えます。パーセント、増減率、割引後の価格、チップ、売上税、年齢、2 つの日付の間の日数や営業日数、単位換算、ローンや住宅ローンの試算、給与、部屋の面積、GPA、指定範囲の乱数などです。",
      audience:
        "表計算ソフトを使うほどでもないときにどうぞ。あくまで計算の補助です。ローン、税金、給与の結果は概算であり、金融・税務・医療・技術上の助言ではありません。",
    },
    "text-tools": {
      name: "テキストツール",
      description: "文章作成とテキスト処理のためのツール",
      shortDescription:
        "ブラウザでテキストを数える、整える、変換する、整形する。",
      intro:
        "テキストツールでは、単語数や文字数のカウント、大文字・小文字の変換、検索と置換、改行の削除、行番号の付与、重複行や余分なスペースの削除、行の並べ替え、2 つの原稿の比較、レイアウト用のダミーテキスト生成ができます。",
      audience:
        "ライターや編集者、文書や表計算ソフトから貼り付けたテキストを整えたいすべての方に。貼り付けたテキストはブラウザ内にとどまります。",
    },
    "developer-tools": {
      name: "開発者向けツール",
      description: "ブラウザでデータを整形・エンコード・圧縮・変換",
      shortDescription:
        "JSON の整形、データのエンコード、コードの圧縮、Markdown や HTML の変換をローカルで。",
      intro:
        "開発者向けツールでは、JSON の整形、JSON と CSV の相互変換、正規表現のテスト、SHA-256 や SHA-512 でのハッシュ化、Base64・URL・HTML のエンコードとデコード、HTML・CSS・JavaScript の圧縮、Markdown の変換、UUID や Unix タイムスタンプの生成ができます。カラーツールでは、16 進カラーの RGB 変換、コントラストのチェック、CSS グラデーションやボックスシャドウの作成ができます。",
      audience:
        "パッケージをインストールせずに、ページ上で結果を得たいコードやデータの編集者向けです。圧縮ツールや変換ツールは各形式のルールに従うため、不正な入力は黙って書き換えられることなくエラーになります。",
    },
    "image-tools": {
      name: "画像ツール",
      description: "ブラウザで使える画像・PDF ツール",
      shortDescription:
        "画像や PDF をアップロードせずに圧縮・変換・確認できます。",
      intro:
        "画像ツールでは、画像の圧縮、リサイズ、トリミング、形式変換、色の抽出ができます。このカテゴリの PDF ツールでは、結合、分割、圧縮、ページ数のカウント、メタデータの確認や削除、テキスト抽出、ページの JPG 画像化、画像やテキストからの PDF 作成ができます。",
      audience:
        "ファイルはブラウザ内で処理されます。スキャンした PDF からは選択可能なテキストを取り出せない場合があります。圧縮や変換で画質が下がることがあるので、元のファイルを置き換える前にダウンロードしたファイルを確認してください。",
    },
    "seo-utilities": {
      name: "SEO・ユーティリティ",
      description: "リンク、スラッグ、QR コード、パスワード",
      shortDescription:
        "UTM リンクやスラッグの作成、QR コードの作成・読み取り、パスワード生成。",
      intro:
        "これらのユーティリティでは、キャンペーン用 URL の作成、タイトルから URL スラッグへの変換、テキストや構造化データからの QR コード作成、カメラや画像からの QR コード読み取り、ローカルでのパスワード生成ができます。",
      audience:
        "基本の QR ツールはプレーンテキストまたは URL をエンコードします。QR Code Generator Pro では Wi-Fi、連絡先、色の設定が加わります。パスワード生成ツールはこの端末上で文字列を作成します。パスワードマネージャーではありません。",
    },
    "ai-tools": {
      name: "AI ツール",
      description: "プロンプト作成と文章ツール（Gemini AI はオプション）",
      shortDescription:
        "プロンプトの作成、文章の傾向分析、下書きの短縮を、ブラウザ内または Gemini AI で。",
      intro:
        "これらのツールは、プロンプトの作成、画像や動画のシーンの描写、文章の傾向の確認、長い下書きの短縮に役立ちます。各ツールのメインボタンはブラウザ内で動作します。AI ボタン（Generate、Analyze、Compress、Humanize with AI）は、入力したテキストを Google の Gemini モデルに送信して結果を生成します。",
      audience:
        "テキストを端末の外に出したくないときはブラウザのボタンを、Gemini に書き直しや肉付けをしてほしいときは AI ボタンを使ってください。Gemini に送信したテキストはこのサイトには保存されません。プロンプトツールが返すのはテキストで、画像や動画ではありません。文章ツールは書き手を判定するものではなく、短くした下書きが検出ツールを通過することも保証しません。",
    },
  },
};

export default messages;
