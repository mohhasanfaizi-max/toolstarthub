import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "UTMビルダーはURLにキャンペーンパラメータを追加し、アクセス解析ツールで流入元を追跡できるようにします。",
    "content": {
      "about": "リンクにutm_source、utm_medium、utm_campaignを追加します。termとcontentも任意で付けられます。広告やメールにURLを載せる前に、キャンペーンリンクにラベルを付けたいマーケター向けです。空欄の項目はリンクに含まれません。このページは訪問を記録せず、アドレスを短縮することもありません。",
      "howTo": [
        "ウェブサイトのURLを入力します。https://は付けても付けなくてもかまいません。",
        "source、medium、campaignを入力します。termとcontentは任意です。",
        "生成されたURLをコピーします。元のリンクにあるクエリパラメータはそのまま残ります。"
      ],
      "examples": [
        {
          "title": "シンプルなキャンペーンリンク",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "すでにパラメータがあるURL",
          "body": "https://example.com/page?ref=nav は ref=nav を残したまま、その横にUTM項目が追加されます。"
        }
      ],
      "explanation": "UTMパラメータは、訪問がどこから来たかをアクセス解析ツールに伝えます。utm_sourceはプラットフォーム、utm_mediumはチャネル、utm_campaignはプロモーション名です。utm_termとutm_contentは任意です。値はURLエンコードされるため、スペースや特殊文字があっても有効なままです。",
      "limitations": "source、medium、campaignが空欄の場合は、空のパラメータとして書き込まず、リンクから省きます。このページはアドレスを短縮せず、訪問も記録しません。ウェブサイトのURLではないテキストは受け付けません。",
      "faqs": [
        {
          "question": "UTMビルダーは無料ですか？",
          "answer": "はい。リンクにutm_source、utm_medium、utm_campaignを追加するのは無料で、アカウントも不要です。"
        },
        {
          "question": "ほかのクエリパラメータは上書きされますか？",
          "answer": "いいえ。追加・更新されるのは入力したUTM項目だけです。ほかのパラメータはそのまま残ります。"
        },
        {
          "question": "このツールはトラッキングサービスに接続しますか？",
          "answer": "いいえ。ブラウザ内でURLを組み立てるだけです。トラッキングが行われるのは、そのリンクをアクセス解析の設定で使ったときです。"
        },
        {
          "question": "UTMパラメータとは何ですか？",
          "answer": "UTMパラメータは、utm_source、utm_medium、utm_campaignのようにリンクに付けるタグで、訪問がどこから来たかをアクセス解析ツールに伝えます。"
        },
        {
          "question": "必須のUTMパラメータはどれですか？",
          "answer": "一般的にはsource、medium、campaignが最低限です。termとcontentは任意で、キーワードや広告のバージョンを区別するのに役立ちます。"
        }
      ]
    },
    "ui": {
      "Website URL": "ウェブサイトのURL",
      "Existing query parameters are kept. UTM values are added or updated.": "既存のクエリパラメータは残ります。UTMの値は追加または更新されます。",
      "Campaign source": "キャンペーンのsource",
      "Campaign medium": "キャンペーンのmedium",
      "Campaign name": "キャンペーン名",
      "Campaign term (optional)": "キャンペーンのterm（任意）",
      "running shoes": "ランニングシューズ",
      "Campaign content (optional)": "キャンペーンのcontent（任意）",
      "Copy URL": "URLをコピー",
      "Enter a URL to generate a campaign link.": "キャンペーンリンクを作成するにはURLを入力してください。",
      "Campaign URL": "キャンペーンURL",
      "Enter a website URL.": "ウェブサイトのURLを入力してください。",
      "Enter a valid website URL.": "有効なウェブサイトのURLを入力してください。"
    }
  },
  "slug-generator": {
    "answer": "スラッグジェネレーターは、タイトルを小文字とハイフンで構成された、URLで安全に使える文字列に変換します。",
    "content": {
      "about": "タイトルを小文字・ハイフン区切りのパーマリンクに変換します。記事の名前を決めて、アドレスをCMSに入れる前に使うのに向いています。ラテン文字のアクセントは取り除かれ、你好のような文字は残ります。結果は、そのアドレスが未使用かどうかを確認するものではありません。",
      "howTo": [
        "タイトルを入力するか貼り付けます。",
        "入力に合わせてスラッグが更新されます。",
        "スラッグをコピーするか、ボックスをクリアします。"
      ],
      "examples": [
        {
          "title": "ブログのタイトル",
          "body": "「How to Compress an Image Without Losing Quality」は how-to-compress-an-image-without-losing-quality になります。"
        },
        {
          "title": "アクセントとほかの文字体系",
          "body": "ラテン文字のアクセントは取り除かれます（Café → cafe）。你好のような文字は残るので、スラッグは読みやすいままです。"
        }
      ],
      "explanation": "ジェネレーターは前後の空白を除き、Unicode NFKD正規化のあとで結合記号を切り離し、ラテン文字を小文字にし、ほかの区切り文字をハイフンに変え、連続した記号をまとめます。英語以外の文字をすべて削除するのではなく、Unicodeの文字と数字は残します。結果は実用的なパーマリンクであり、一意性が保証されたIDではありません。",
      "limitations": "ラテン文字のアクセントは取り除かれますが、你好のような文字は残ります。結果はパーマリンクの形をしているだけで、アドレスが未使用であることの証明ではありません。ラテン文字以外を削除するサイトビルダーもありますが、このページは削除しません。",
      "faqs": [
        {
          "question": "スラッグジェネレーターは無料ですか？",
          "answer": "はい。タイトルをハイフン区切りのパーマリンクに変換するのは無料で、アカウントも不要です。"
        },
        {
          "question": "どのCMSでも使えますか？",
          "answer": "ほとんどのサイトは小文字・ハイフン区切りのスラッグを受け付けます。ラテン文字以外を削除するものもありますが、このツールは文字や数字であれば残します。"
        },
        {
          "question": "入力内容はサーバーに送信されますか？",
          "answer": "いいえ。タイトルはこのタブ内で書き換えられます。アップロードされず、ローカルストレージにも保存されません。"
        },
        {
          "question": "URLスラッグとは何ですか？",
          "answer": "スラッグは、ページを表すウェブアドレスの読みやすい部分です。たとえば example.com/blog/how-to-make-bread の how-to-make-bread がそれにあたります。"
        },
        {
          "question": "SEOに良いスラッグとは？",
          "answer": "短く、小文字で、内容がわかるものにし、単語はハイフンで区切ります。あとでページを更新する可能性があるなら、日付や不要な語は避けましょう。"
        }
      ]
    },
    "ui": {
      "Title or text": "タイトルまたはテキスト",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "ラテン文字のアクセントは取り除かれます。中国語などほかの文字は残ります。",
      "Example": "例",
      "Copy slug": "スラッグをコピー",
      "Generated slug": "生成されたスラッグ",
      "How to Compress an Image Without Losing Quality": "画質を落とさずに画像を圧縮する方法"
    }
  },
  "qr-code-generator": {
    "answer": "QRコード作成は、テキストやURLをダウンロード可能なQR画像に変換します。画像はお使いの端末上で作成されます。",
    "content": {
      "about": "プレーンテキストまたはURLを、最大1,200文字までQRコードのPNGにエンコードします。誰かにスキャンしてもらいたい短いリンクに向いています。Wi-Fi、メール、連絡先の形式はQRコード作成 Proにあります。長い文字列は密なパターンになり、読み取れないカメラもあります。",
      "howTo": [
        "テキストか完全なURLを貼り付けます。ウェブリンクならhttps://も含めてください。",
        "生成を押します。プレビューと、支援技術向けの説明が表示されます。",
        "PNGをダウンロードします。別のコードが必要ならリセットします。"
      ],
      "examples": [
        {
          "title": "ウェブサイト",
          "body": "https://example.com は、スキャンするとそのアドレスを開くQRコードになります。"
        },
        {
          "title": "プレーンテキスト",
          "body": "短いメモやWi-Fiの覚え書きもテキストとしてエンコードできます。パターンが読み取りやすいよう1,200文字未満にしてください。"
        }
      ],
      "explanation": "QRコードはマトリックス型のバーコードです。このツールはクライアント側のライブラリを使って、ブラウザ内でパターンを作成します。テキストがQR APIに送られることはありません。内容が長すぎると密なコードになり、多くのカメラで読み取りにくくなるため、長さに上限を設けています。",
      "limitations": "エンコードされるのはプレーンテキストかURLで、テキストは1,200文字以内である必要があります。Wi-Fi、メール、連絡先の形式はQRコード作成 Proにあります。長い文字列は密なパターンになり、読み取れないカメラもあります。",
      "faqs": [
        {
          "question": "QRコード作成は無料ですか？",
          "answer": "はい。このブラウザでテキストやURLからQR画像を作るのは無料で、アカウントも不要です。"
        },
        {
          "question": "テキストはアップロードされますか？",
          "answer": "いいえ。QRコードはブラウザ内で生成されます。テキストがサーバーに送られることはありません。"
        },
        {
          "question": "どのスキャナーでもPNGを読み取れますか？",
          "answer": "短いURLのコントラストが高いPNGなら、ほとんどのカメラで読み取れます。印刷が小さすぎる場合、暗い場所、テキストが長すぎる場合は失敗することがあります。"
        },
        {
          "question": "ここで作ったQRコードに有効期限はありますか？",
          "answer": "いいえ。テキストやリンクはリダイレクトサービスを挟まず、パターンに直接保存されます。そのため、リンク自体が有効である限りコードも使えます。"
        },
        {
          "question": "ウェブサイト用のQRコードはどう作りますか？",
          "answer": "https://を含む完全なアドレスを貼り付けてコードを生成し、PNGをダウンロードします。印刷する前にスマートフォンのカメラで試してください。"
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "QRコードはブラウザ内で作成されます。内容はなるべく短くしてください。",
      "QR code for {0}": "{0}のQRコード",
      "QR code for:": "QRコードの内容:",
      "The QR code is generated in your browser. The text is not sent to a server.": "QRコードはブラウザ内で生成されます。テキストがサーバーに送られることはありません。"
    }
  },
  "qr-code-scanner": {
    "answer": "QRコードスキャナーは、選んだQR画像を読み取り、デコードしたテキストを端末上で表示します。",
    "content": {
      "about": "カメラ、またはPNGやJPG画像から最初のQRコードを読み取ります。リンクを開くかどうか決める前に、テキストを画面で確認したいときに使います。「カメラを起動」を押すまでカメラはオフのままで、ほかの種類のバーコードはデコードしません。",
      "howTo": [
        "端末のカメラでスキャンしたい場合だけ「カメラを起動」を押します。許可を求めるのはその時点で、ページの読み込み時ではありません。",
        "結果が表示されるまでコードを映し続けるか、「カメラを停止」を押して映像を解放します。",
        "カメラがブロックされている場合は、代わりにコードのPNGまたはJPGをアップロードします。",
        "結果をコピーします。http(s)のURLなら「リンクを開く」が表示されます。ページが勝手に移動することはありません。"
      ],
      "examples": [
        {
          "title": "カメラでスキャン",
          "body": "カメラを起動すると、フレームはこのタブ内でデコードされます。コードが見つかるか、停止を押すと映像は止まります。"
        },
        {
          "title": "画像のアップロード",
          "body": "カメラの許可が拒否されていても、QRコードのスクリーンショットならデコードできます。"
        }
      ],
      "explanation": "デコードには、カメラのフレームやアップロードした画像に対してローカルで動くJavaScriptリーダーを使います。カメラへのアクセスは「カメラを起動」をクリックしたあとにだけ始まります。停止したとき、スキャンに成功したとき、ページを離れたときにトラックは停止します。検出したURLはまず表示されるだけで、開くのは別の操作です。",
      "limitations": "表示されるのは、リーダーが最初に見つけたコードです。ほかの種類のバーコードはデコードしません。リンクは「リンクを開く」を押すまでページに表示されたままで、カメラは「カメラを起動」を押すまでオフのままです。",
      "faqs": [
        {
          "question": "QRコードスキャナーは無料ですか？",
          "answer": "はい。カメラや画像からQRコードを読み取るのは無料で、アカウントも不要です。"
        },
        {
          "question": "カメラのフレームはアップロードされますか？",
          "answer": "いいえ。「カメラを起動」後のフレームも、選んだPNGやJPGも、このタブ内でデコードされます。どちらもTools Star Hubには送信されません。"
        },
        {
          "question": "なぜウェブサイトが自動で開かなかったのですか？",
          "answer": "スキャンしたURLに自動で移動するのは安全ではないためです。テキストを確認し、信頼できる場合は「リンクを開く」を使ってください。"
        },
        {
          "question": "画像に複数のQRコードがある場合は？",
          "answer": "このリーダーは、デコードできた最初のコードを表示します。特定のコードが必要なら画像を切り抜いてください。"
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "カメラへのアクセスは、カメラでスキャンすることを選んだときにだけ求められます。",
      "Start camera": "カメラを起動",
      "Stop camera": "カメラを停止",
      "Or upload a QR image": "またはQR画像をアップロード",
      "Drag and drop a QR image here, or choose a file.": "ここにQR画像をドラッグ＆ドロップするか、ファイルを選択してください。",
      "Image upload works even if the camera is blocked.": "カメラがブロックされていても、画像のアップロードは使えます。",
      "Scan result": "スキャン結果",
      "Open link": "リンクを開く",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "「カメラを起動」後のフレームも、選んだPNGやJPGも、このタブ内でデコードされます。どちらもTools Star Hubには送信されません。",
      "This browser does not support camera access. Upload an image instead.": "このブラウザはカメラへのアクセスに対応していません。代わりに画像をアップロードしてください。",
      "Camera permission was denied. You can still upload an image.": "カメラの許可が拒否されました。画像のアップロードは引き続き使えます。",
      "No camera was found. Upload an image instead.": "カメラが見つかりませんでした。代わりに画像をアップロードしてください。",
      "The camera could not be started. Upload an image instead.": "カメラを起動できませんでした。代わりに画像をアップロードしてください。",
      "This browser could not read that image.": "このブラウザではその画像を読み込めませんでした。",
      "No QR code was found in that image.": "その画像からQRコードは見つかりませんでした。",
      "That file could not be read as an image.": "そのファイルを画像として読み込めませんでした。"
    }
  },
  "password-generator": {
    "answer": "パスワード生成ツールは、暗号論的な乱数生成器を使い、選んだ文字セットからランダムなパスワードを作成します。",
    "content": {
      "about": "選んだ文字の種類を使って、8〜64文字のパスワードを生成します。新しいアカウントに、使い回していない複雑な文字列が必要なときに便利です。強度の表示は長さと文字セットの大きさから推定したもので、サイトが情報漏えいしたかどうかは確認しません。",
      "howTo": [
        "長さを8〜64から選び、使いたい文字の種類を選びます。",
        "必要に応じて、O、0、I、l、1のような紛らわしい文字を除外します。",
        "生成を押して、パスワードをコピーします。何も保存されません。"
      ],
      "examples": [
        {
          "title": "16文字の混在",
          "body": "大文字、小文字、数字、記号を含む16文字のパスワードは、文字空間が大きくなります。強度の表示は長さと文字セットの大きさからの推定です。"
        },
        {
          "title": "英字のみ",
          "body": "数字と記号をオフにすると文字セットは小さくなります。少なくとも1種類は選択されている必要があります。"
        }
      ],
      "explanation": "各文字はMath.random()ではなくcrypto.getRandomValues()で選ばれます。ジェネレーターは選択した各セットから少なくとも1文字を含め、残りは偏りのないサンプリングで結合したセットから埋めます。強度の表示（弱い／普通／強い）は、長さ × log2(セットの大きさ)で推定しています。推測、使い回し、サイトからの漏えいに対する保証ではありません。",
      "limitations": "長さは8〜64の整数で、少なくとも1種類の文字をオンにしておく必要があります。強度の表示は長さと文字セットの大きさからの推定です。使い回し、フィッシング、漏えいしたサイトは確認しません。紛らわしい文字は除外できますが、それ以外の記号リストは固定です。",
      "faqs": [
        {
          "question": "パスワード生成ツールは無料ですか？",
          "answer": "はい。8〜64文字のパスワードの生成は無料で、アカウントも不要です。"
        },
        {
          "question": "パスワードは保存されますか？",
          "answer": "いいえ。保存も記録もされず、URLに入れられることも、localStorageに書き込まれることもありません。必要なら値をコピーしてください。"
        },
        {
          "question": "「強い」なら破られないということですか？",
          "answer": "いいえ。このメーターは長さと文字セットの大きさからの推定です。使い回し、フィッシング、侵害されたサービスは考慮していません。"
        },
        {
          "question": "パスワードは何文字にすべきですか？",
          "answer": "長いほど強くなります。多くのセキュリティガイドは、重要なアカウントには少なくとも12〜16文字を使い、サイトごとに別のパスワードにすることを勧めています。"
        },
        {
          "question": "オンラインのパスワード生成ツールを使っても安全ですか？",
          "answer": "このツールはcrypto.getRandomValuesを使ってブラウザ内でパスワードを作り、送信も保存もしません。メモではなくパスワードマネージャーに保存してください。"
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "{0}〜{1}文字。",
      "Uppercase letters": "大文字",
      "Lowercase letters": "小文字",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "紛らわしい文字を除外（O、0、I、l、1）",
      "Generated password": "生成されたパスワード",
      "Length: {0}": "長さ: {0}",
      "Character set size: {0}": "文字セットの大きさ: {0}",
      "Estimated entropy: {0} bits ({1})": "推定エントロピー: {0}ビット（{1}）",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "このメーターは長さと文字セットの大きさからの推定です。安全性を保証するものではありません。",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "パスワードはブラウザ内でcrypto.getRandomValuesを使って作成されます。保存、記録、サーバーへの送信は行われません。",
      "Enter a password length.": "パスワードの長さを入力してください。",
      "Length must be a whole number.": "長さは整数で入力してください。",
      "Choose a length from {0} to {1}.": "長さは{0}〜{1}の範囲で選んでください。",
      "Select at least one character type.": "文字の種類を少なくとも1つ選んでください。",
      "Length must be at least the number of selected character types.": "長さは、選んだ文字の種類の数以上にしてください。"
    }
  },
  "qr-code-generator-pro": {
    "answer": "QRコード作成 Proは、URL、Wi-Fi、メール、電話、SMS、連絡先のQRコードを色付きで作成します。",
    "content": {
      "about": "プレーンテキスト、Wi-Fi、メール、電話、SMS、vCardの連絡先用のQRコードを、色と誤り訂正の設定付きで作成します。スキャンするだけでスマートフォンをネットワークに接続させたり、連絡先を保存させたりしたいときに便利です。ネットワーク名がない場合は受け付けず、エンコードするテキストは1,200文字以内に収める必要があります。",
      "howTo": [
        "種類を選びます: テキスト/URL、Wi-Fi、メール、電話、SMS、連絡先。",
        "その種類の項目を入力します。無効な値はコードを描く前に拒否されます。",
        "必要に応じて色、サイズ、クワイエットゾーン、誤り訂正を変更し、生成してPNGをダウンロードします。"
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Cafeという名前のWPAネットワークは WIFI:T:WPA;S:Cafe;P:Password;; としてエンコードされます。"
        },
        {
          "title": "電話",
          "body": "+1 202 555 0100 のような番号は、スペースのない tel: ペイロードになります。"
        }
      ],
      "explanation": "構造化された種類は、一般的なQRテキスト形式（WIFI、mailto、tel、SMSTO、vCard 3.0）に変換されます。生成には基本版ジェネレーターと同じローカルのQRライブラリを使います。内容は保存も記録もされず、ページのURLにも入りません。",
      "limitations": "種類はプレーンテキスト、Wi-Fi、メール、電話、SMS、vCard 3.0の連絡先です。ネットワーク名がない場合、簡易チェックを通らないメールアドレス、数字と任意の + ( ) 以外を含む電話番号は、コードを描く前に拒否されます。エンコードするテキストは1,200文字以内に収める必要があります。",
      "faqs": [
        {
          "question": "QRコード作成 Proは無料ですか？",
          "answer": "はい。Wi-Fi、メール、電話、SMS、連絡先、テキストのQRコード作成は無料で、アカウントも不要です。"
        },
        {
          "question": "基本版のQRジェネレーターとは違いますか？",
          "answer": "はい。基本版はプレーンテキストかURLをエンコードします。この版では構造化された種類、色、誤り訂正の設定が加わります。基本版は変わっていません。"
        },
        {
          "question": "Wi-Fiのパスワードは保存されますか？",
          "answer": "いいえ。リセットするかページを離れるまで、このページ内にだけ残ります。localStorageに書き込まれることも、サーバーに送られることもありません。"
        },
        {
          "question": "Wi-Fi用のQRコードはどう作りますか？",
          "answer": "Wi-Fiを選び、ネットワーク名、パスワード、セキュリティの種類を入力して、コードをダウンロードします。スキャンしたスマートフォンは、パスワードを入力せずに接続できます。"
        },
        {
          "question": "QRコードの色は変えられますか？",
          "answer": "はい。ただし、カメラが読み取れるよう、明るい背景に暗いパターンという強いコントラストを保ってください。印刷する前にコードを試しましょう。"
        }
      ]
    },
    "ui": {
      "QR type": "QRの種類",
      "Network name (SSID)": "ネットワーク名（SSID）",
      "Security": "セキュリティ",
      "Hidden network": "非公開ネットワーク",
      "Email": "メール",
      "Subject (optional)": "件名（任意）",
      "Body (optional)": "本文（任意）",
      "Phone number": "電話番号",
      "Message (optional)": "メッセージ（任意）",
      "First name": "名",
      "Last name": "姓",
      "Phone (optional)": "電話（任意）",
      "Email (optional)": "メール（任意）",
      "Foreground": "前景色",
      "Background": "背景色",
      "Size": "サイズ",
      "Quiet zone": "クワイエットゾーン",
      "Error correction": "誤り訂正",
      "Generated QR code": "生成されたQRコード",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "QRコードはブラウザ内で生成されます。Wi-Fiのパスワードやほかの項目は保存もサーバーへの送信もされません。",
      "Foreground and background colors need to be different.": "前景色と背景色は別の色にしてください。",
      "Text / URL": "テキスト / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "電話",
      "Contact": "連絡先",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "パスワードなし",
      "Enter a hex color such as #336699.": "#336699 のような16進カラーを入力してください。",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "3桁、6桁、8桁の16進数を使ってください。#は付けても付けなくてもかまいません。",
      "Enter a network name (SSID).": "ネットワーク名（SSID）を入力してください。",
      "Enter the Wi-Fi password, or choose no password.": "Wi-Fiのパスワードを入力するか、「パスワードなし」を選んでください。",
      "Enter a valid email address.": "有効なメールアドレスを入力してください。",
      "Enter a phone number, with digits and optional + ( ).": "数字と任意の + ( ) で電話番号を入力してください。",
      "Enter a first or last name for the contact.": "連絡先の名または姓を入力してください。"
    }
  },
  "url-parser": {
    "answer": "URLパーサーは1つの絶対URLを、プロトコル、ホスト名、ポート、パス、フラグメント、各クエリパラメータに分解します。URLはブラウザ内にとどまります。",
    "content": {
      "about": "絶対URLを1つ貼り付けて、プロトコル、ホスト名、ポート、パス、フラグメント、クエリパラメータを確認します。",
      "howTo": [
        "httpまたはhttpsで始まる完全なURLを貼り付けます。",
        "解析を押します。"
      ],
      "features": [
        "各クエリキーを1行ずつ表示。",
        "空のクエリ値も保持。",
        "フラグメントはパスと分けて表示。"
      ],
      "examples": [
        {
          "title": "ポートと同じキーが2つあるURL",
          "body": "https://example.com:8080/docs?topic=a&topic= では、ポート8080と2行のtopicが残り、2行目は空の値になります。"
        }
      ],
      "explanation": "このページはブラウザのURLパーサーを使います。重複したクエリキーは別々の項目として残ります。プロトコルがない場合や相対パスは拒否されます。ホスト名はURLパーサーが返す値で、国際化ドメイン名はエンコードされた形で表示されます。",
      "tips": [
        "https:// または http:// を含めてください。",
        "クエリのあとの # はフラグメントで、別のパラメータではありません。"
      ],
      "limitations": "解析できるのはhttpとhttpsの絶対URLだけです。URLが開かれたり、どこかに送られたりすることはありません。",
      "faqs": [
        {
          "question": "URLはどのように解析されますか？",
          "answer": "ブラウザのURLパーサーが、プロトコル、ホスト名、ポート、パス、フラグメント、各クエリパラメータに分けます。"
        },
        {
          "question": "重複したクエリキーはどうなりますか？",
          "answer": "それぞれが一覧に表示されます。1つの値にまとめられることはありません。"
        },
        {
          "question": "クエリの値が空の場合は？",
          "answer": "等号のあとに何もないキーも残り、空として表示されます。"
        },
        {
          "question": "相対URLが拒否されるのはなぜですか？",
          "answer": "相対パスにはプロトコルもホストもないため、絶対URLではないからです。"
        },
        {
          "question": "URLはサーバーに送信されますか？",
          "answer": "いいえ。解析はブラウザ内で行われます。"
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "URLはブラウザ内で解析されます。ほかのサービスには送信されません。",
      "Absolute URL": "絶対URL",
      "Parse": "解析",
      "Query parameters": "クエリパラメータ",
      "No query parameters.": "クエリパラメータはありません。",
      "(empty)": "（空）",
      "Protocol": "プロトコル",
      "Hostname": "ホスト名",
      "Port": "ポート",
      "Path": "パス",
      "Fragment": "フラグメント",
      "Enter an absolute URL.": "絶対URLを入力してください。",
      "Enter a URL of 100000 characters or fewer.": "100000文字以内のURLを入力してください。",
      "Enter an absolute URL that includes a protocol, such as https://.": "https:// のようにプロトコルを含む絶対URLを入力してください。",
      "That text is not a valid absolute URL.": "そのテキストは有効な絶対URLではありません。",
      "Enter an http or https URL.": "httpまたはhttpsのURLを入力してください。"
    }
  },
  "robots-txt-generator": {
    "answer": "robots.txt作成は、入力したルールからUser-agent、Allow、Disallowの行を書き出します。サイトマップのURLも追加できます。公開中のサイトへの反映やテストは行いません。",
    "content": {
      "about": "1つ以上のuser-agentグループと、任意のサイトマップURLからrobots.txtのテキストを作成します。",
      "howTo": [
        "user-agentを入力します。",
        "許可するパスと禁止するパスを1行に1つずつ追加します。",
        "必要ならサイトマップのURLを追加します。",
        "生成を押します。"
      ],
      "features": [
        "複数のuser-agentグループ。",
        "複数のAllow行とDisallow行。",
        "任意の絶対サイトマップURL。"
      ],
      "examples": [
        {
          "title": "非公開フォルダー",
          "body": "User-agent * と Disallow: /admin で、/admin 以下のパスを取得しないようクローラーに伝えます。ファイルはテキストのみです。"
        }
      ],
      "explanation": "各グループはUser-agentで始まり、パスごとにAllow行、パスごとにDisallow行が続きます。空のパス行はスキップされます。サイトマップはhttpまたはhttpsの絶対URLの場合にだけ追加されます。このページはファイルをアップロードせず、公開中のサイトもテストしません。",
      "tips": [
        "すべてのクローラーには * を使います。",
        "パスは1行に1つずつ書きます。"
      ],
      "limitations": "結果はコピーできるテキストです。ルールを公開したり、公開中のサイトで何が許可されているかを確認したりはしません。",
      "faqs": [
        {
          "question": "robots.txtファイルはどう書きますか？",
          "answer": "User-agent行から始め、Allow行とDisallow行を追加します。サイトマップの絶対URLがあればSitemap行も加えます。"
        },
        {
          "question": "user-agentは複数使えますか？",
          "answer": "はい。各グループに独自のuser-agentとルールがあります。"
        },
        {
          "question": "空のパスはどうなりますか？",
          "answer": "空行はスキップされるため、空のAllowやDisallowのルールはできません。"
        },
        {
          "question": "公開中のサイトをテストしますか？",
          "answer": "いいえ。テキストを生成するだけです。ファイルを公開することも、サイトにリクエストを送ることもありません。"
        },
        {
          "question": "どんなサイトマップURLが使えますか？",
          "answer": "httpまたはhttpsの絶対URLです。プロトコルのないパスは拒否されます。"
        },
        {
          "question": "入力内容はサーバーに送信されますか？",
          "answer": "いいえ。user-agentの行とパスはこのタブ内で組み立てられます。アップロードされず、このページがサイトにリクエストを送ることもありません。"
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "入力したルールからrobots.txtのテキストを作成します。公開中のサイトのテストや公開は行いません。",
      "Group {0} user-agent": "グループ{0}のuser-agent",
      "Allow paths, one per line": "許可するパス（1行に1つ）",
      "Disallow paths, one per line": "禁止するパス（1行に1つ）",
      "Remove group": "グループを削除",
      "Add group": "グループを追加",
      "Sitemap URL, optional": "サイトマップURL（任意）",
      "Add at least one user-agent group.": "user-agentグループを少なくとも1つ追加してください。",
      "Group {0} needs a user-agent.": "グループ{0}にはuser-agentが必要です。",
      "Enter a sitemap as an absolute http or https URL.": "サイトマップはhttpまたはhttpsの絶対URLで入力してください。"
    }
  },
  "password-strength-checker": {
    "answer": "パスワード強度チェッカーは、長さと実際に含まれる文字の種類からビット数を推定します。パスワードをアップロードしたり、漏えいリストと照合したりはしません。",
    "content": {
      "about": "パスワードを入力すると、弱い・普通・強いの評価が表示されます。推定には長さと、含まれる文字の種類を使います。漏えい情報は調べず、サイトがそのパスワードを受け付けるかどうかもわかりません。",
      "howTo": [
        "パスワードを入力します。空欄は受け付けません。",
        "チェックを押します。",
        "評価、長さ、推定ビット数、見つかった文字の種類を確認します。"
      ],
      "features": [
        "大文字、小文字、数字、記号セットは、含まれている場合にだけ数えます。",
        "それ以外の文字（スペースやバッククォートなど）は、異なる文字ごとにプールに1を加えます。",
        "弱いは50ビット未満、普通は80ビット未満、強いは80ビット以上です。"
      ],
      "examples": [
        {
          "title": "小文字の単語",
          "body": "password は小文字8文字です。プールは26、推定は約38ビットで、評価は弱いです。"
        },
        {
          "title": "英字、数字、記号",
          "body": "Abcdefghijklm12! は大文字、小文字、数字、記号を含む16文字です。プールは85、推定は約103ビットで、評価は強いです。"
        }
      ],
      "explanation": "ビット数は、長さ × プールの2を底とする対数です。プールは、AからZがあれば大文字で26、小文字で26、数字で10、!@#$%^&*()-_=+[]{};:,.? の記号で23です。これらのセット以外の文字は記号セット全体としては扱わず、1を加えます。これはパスワード生成ツールとは別物です。ジェネレーターは、作成前に選んだ文字の種類からパスワードを評価します。",
      "tips": [
        "複数の種類の文字を使った長いパスワードは、短い単語より高く評価されます。",
        "評価ではなく新しいパスワードが欲しいときはパスワード生成ツールを使ってください。"
      ],
      "limitations": "最大256文字です。このページは漏えい情報を調べず、サイトがそのパスワードを受け付けるかどうかもわかりません。アクセント付きの文字はAからZではなく、その他の文字として数えます。",
      "faqs": [
        {
          "question": "パスワード強度チェッカーは無料ですか？",
          "answer": "はい。支払いやアカウント作成なしでパスワードを評価できます。"
        },
        {
          "question": "漏えいしたパスワードと照合しますか？",
          "answer": "いいえ。評価は入力した内容の長さと文字の種類だけに基づきます。"
        },
        {
          "question": "数字だけのパスワードが弱いのはなぜですか？",
          "answer": "8桁の数字はプールが10です。約27ビットで50未満なので、評価は弱いになります。"
        },
        {
          "question": "パスワードはサーバーに送信されますか？",
          "answer": "いいえ。チェックはこのブラウザタブ内で行われます。Tools Star Hubはパスワードをサーバーに送らず、ローカルストレージにも保存しません。"
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0}文字、{1}、{2}ビット",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "評価は入力したパスワードに含まれる文字の種類に基づきます。パスワードはこのタブ内にとどまり、アップロードも漏えいリストとの照合もされません。",
      "Show password": "パスワードを表示",
      "Check": "チェック",
      "Copy rating": "評価をコピー",
      "Rating": "評価",
      "Estimated bits": "推定ビット数",
      "Enter a password.": "パスワードを入力してください。",
      "Enter a password of {0} characters or fewer.": "{0}文字以内のパスワードを入力してください。",
      "Uppercase": "大文字",
      "Lowercase": "小文字",
      "Other": "その他"
    }
  },
  "meta-tag-generator": {
    "answer": "メタタグ作成は、HTMLのtitle、description、robots、canonical、Open Graph、Twitterタグを書き出します。ページを取得することはありません。",
    "content": {
      "about": "タイトルと、必要な任意のタグを入力します。ページのheadに貼り付けられるHTMLが作成されます。公開中のURLを取得したり、サイトでリンクがどう共有されるかを確認したりはしません。",
      "howTo": [
        "タイトルを入力します。空のタイトルは受け付けません。",
        "説明文、canonical URL、robotsの選択、必要なOpen GraphやTwitterの項目を追加します。",
        "生成を押して、HTMLをコピーします。"
      ],
      "features": [
        "すべての結果にcharsetタグ、タイトル、robotsタグを含みます。",
        "説明文、canonicalリンク、Open Graphタグ、Twitterタグは任意です。",
        "テキスト内の引用符と&はエスケープされます。"
      ],
      "examples": [
        {
          "title": "タイトルと説明文",
          "body": "タイトル Sample page と説明文 A short description of the page. を index と follow で生成すると、charsetタグ、タイトル、説明文、index, follow のrobotsタグが書き出されます。"
        },
        {
          "title": "タイトル内の&",
          "body": "タイトル A & B は、titleタグ内で A &amp; B と書き出されます。"
        }
      ],
      "explanation": "HTMLは入力した項目から組み立てられます。空の任意項目は省かれます。canonical URL、Open Graphの画像、Open GraphのURL、Twitterの画像は、httpまたはhttpsの絶対URLである必要があります。このページがそれらのURLにリクエストを送ることはありません。",
      "tips": [
        "自分のHTMLにタグを入れたいときは、ここのOpen Graph項目を使います。公開中の共有プレビューは別のチェックです。"
      ],
      "limitations": "タイトルは最大200文字、説明文は最大500文字です。Open Graphのタイプはwebsite、article、なしのいずれかです。Twitterカードはsummary、summary_large_image、なしのいずれかです。カードなしのTwitterタイトルは受け付けません。",
      "faqs": [
        {
          "question": "メタタグ作成は無料ですか？",
          "answer": "はい。支払いやアカウント作成なしでタグを作成できます。"
        },
        {
          "question": "SNSでリンクがどう見えるかを確認しますか？",
          "answer": "いいえ。タグを書き出すだけで、URLは開きません。"
        },
        {
          "question": "どんなrobotsの値が書き出されますか？",
          "answer": "indexの選択とfollowの選択です。たとえば index, follow や noindex, nofollow です。"
        },
        {
          "question": "テキストはサーバーに送信されますか？",
          "answer": "いいえ。HTMLはこのブラウザタブ内で組み立てられます。Tools Star Hubはこれらの項目をサーバーに送らず、ローカルストレージにも保存しません。"
        }
      ]
    },
    "ui": {
      "Sample page": "サンプルページ",
      "A short description of the page.": "ページの短い説明です。",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "ページのhead用のHTMLを作成します。公開中のURLを取得したり、サイトでの共有のされ方を確認したりはしません。",
      "Title": "タイトル",
      "Description": "説明文",
      "Canonical URL, optional": "canonical URL（任意）",
      "Robots index": "robots: index",
      "Robots follow": "robots: follow",
      "Open Graph title, optional": "Open Graphタイトル（任意）",
      "Open Graph description, optional": "Open Graph説明文（任意）",
      "Open Graph image URL, optional": "Open Graph画像URL（任意）",
      "Open Graph URL, optional": "Open Graph URL（任意）",
      "Open Graph type": "Open Graphタイプ",
      "Twitter title, optional": "Twitterタイトル（任意）",
      "Copy HTML": "HTMLをコピー",
      "Head tags": "headタグ",
      "None": "なし",
      "Enter a {0} of {1} characters or fewer.": "{0}: 最大{1}文字です。",
      "Enter {0} as an absolute http or https URL.": "{0}: httpまたはhttpsの絶対URLを入力してください。",
      "Enter a title.": "タイトルを入力してください。",
      "the canonical URL": "canonical URL",
      "Open Graph title": "Open Graphタイトル",
      "Open Graph description": "Open Graph説明文",
      "the Open Graph image URL": "Open Graph画像URL",
      "the Open Graph URL": "Open Graph URL",
      "Choose website, article, or no Open Graph type.": "website、article、またはOpen Graphタイプなしを選んでください。",
      "Choose a Twitter card of summary or summary_large_image.": "Twitterカードはsummaryかsummary_large_imageを選んでください。",
      "the Twitter image URL": "Twitter画像URL",
      "Choose a Twitter card before adding Twitter text or an image.": "Twitterのテキストや画像を追加する前に、Twitterカードを選んでください。",
      "title": "タイトル",
      "description": "説明文"
    }
  },
  "open-graph-preview": {
    "answer": "Open Graphプレビューは、ページのURLをこのサイトに送り、公開されているタイトルと共有タグを読み取ります。ページは保存しません。プライベートなアドレスやhttp以外のアドレスは拒否されます。",
    "content": {
      "about": "公開されているhttpまたはhttpsのURLを入力します。「プレビューを確認」を押すと、そのURLがこのサイトに送られます。サイトがページを取得し、見つかったタイトル、説明文、画像、Twitterカードを表示します。ページはここに保存されません。プライベートやローカルのアドレスは、ページを読む前に拒否されます。",
      "howTo": [
        "httpまたはhttpsの絶対URLを入力します。",
        "「プレビューを確認」を押します。",
        "カードを確認します。拒否されたアドレス、タイムアウト、http以外のURLでは、ページの内容は表示されず短いエラーが出ます。"
      ],
      "features": [
        "公開ページのタイトル、説明文、画像アドレス、Twitterカードの項目。",
        "リダイレクト先が公開されたhttpまたはhttpsのURLである場合は、リダイレクト後のアドレス。",
        "アドレスがプライベートな場合、リクエストがタイムアウトした場合、プロトコルがhttpでもhttpsでもない場合の短いエラー。"
      ],
      "examples": [
        {
          "title": "公開ページ",
          "body": "https://example.com/ はタイトル Example Domain を返します。このページには説明文、画像、Twitterカードがないため、それらの項目は「見つかりません」と表示されます。"
        },
        {
          "title": "ローカルアドレス",
          "body": "http://127.0.0.1/ も、10進数表記の http://2130706433/ も、「そのアドレスは取得できません。」と表示されます。"
        }
      ],
      "explanation": "ブラウザがこのサイトに送るのはURLだけです。サイトはホストを名前解決し、プライベート、ループバック、リンクローカル、予約済みのアドレスを拒否し、リダイレクトのたびに再確認します。展開後のページを最大512 KiBまで読み、タグを返します。ページの生データは返さず、保存もしません。",
      "tips": [
        "タグを自分で書きたいときはメタタグ作成を使ってください。このページは、公開URLにすでにあるタグを読み取ります。"
      ],
      "limitations": "httpとhttpsのみです。file URL、ユーザー名を含むURL、プライベートなアドレスは拒否されます。リクエストは8秒で打ち切られます。画像のホストがプレビュー画像をブロックしていても、共有画像が一覧に表示されることがあります。",
      "faqs": [
        {
          "question": "Open Graphプレビューは無料ですか？",
          "answer": "はい。支払いやアカウント作成なしで、公開ページの共有タグを確認できます。ただし、タグを読み取るためにURLはこのサイトに送られます。"
        },
        {
          "question": "URLはこの端末の外に送られますか？",
          "answer": "はい。「プレビューを確認」でURLがこのサイトに送られ、サイトがその公開ページを取得してタグを読み取ります。ページはここに保存されません。プライベートやhttp以外のアドレスは拒否されます。"
        },
        {
          "question": "ローカルのURLが拒否されたのはなぜですか？",
          "answer": "127.0.0.1、プライベートネットワーク、ループバックアドレスの10進数表記などは、ページを読む前に拒否されます。"
        },
        {
          "question": "タイムアウトするとどうなりますか？",
          "answer": "カードは表示されず、プレビューのリクエストがタイムアウトしたと表示されます。"
        }
      ]
    },
    "ui": {
      "Not found": "見つかりません",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "「プレビューを確認」を押すと、URLがこのサイトに送られます。サイトはその公開ページのタイトルと共有タグを読み取り、ページは保存しません。プライベートなアドレスやhttp以外のURLは拒否されます。",
      "Page URL": "ページのURL",
      "Checking the page…": "ページを確認中…",
      "Image": "画像",
      "The image address was found, but it did not load.": "画像のアドレスは見つかりましたが、読み込めませんでした。",
      "Twitter image": "Twitter画像",
      "That page could not be previewed.": "そのページはプレビューできませんでした。",
      "Enter an http or https page URL.": "httpまたはhttpsのページURLを入力してください。",
      "Checking…": "確認中…",
      "Check preview": "プレビューを確認",
      "That address cannot be fetched.": "そのアドレスは取得できません。",
      "The preview request timed out.": "プレビューのリクエストがタイムアウトしました。",
      "That page redirected too many times.": "そのページはリダイレクトが多すぎます。",
      "That page is not HTML.": "そのページはHTMLではありません。",
      "Too many preview requests. Wait a minute and try again.": "プレビューのリクエストが多すぎます。1分待ってからもう一度お試しください。",
      "Send a JSON request with a url.": "urlを含むJSONリクエストを送信してください。"
    }
  }
};

export default data;
