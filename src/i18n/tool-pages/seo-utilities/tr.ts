import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "UTM oluşturucu, analiz araçlarında trafik kaynaklarını izleyebilmeniz için bir URL’ye kampanya parametreleri ekler.",
    "content": {
      "about": "Bir bağlantıya utm_source, utm_medium ve utm_campaign ile isteğe bağlı term ve content ekleyin. Pazarlamacılar bir kampanya bağlantısını reklama veya e-postaya koymadan önce etiketlemek için kullanır. Boş bir alan bağlantıya eklenmez; bu sayfa ziyaret kaydetmez ve adresi kısaltmaz.",
      "howTo": [
        "Site URL’sini https:// ile veya olmadan girin.",
        "Kaynak, ortam ve kampanyayı doldurun. Term ve content isteğe bağlıdır.",
        "Oluşturulan URL’yi kopyalayın. Özgün bağlantıdaki mevcut sorgu parametreleri korunur."
      ],
      "examples": [
        {
          "title": "Basit bir kampanya bağlantısı",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "Zaten parametresi olan bir URL",
          "body": "https://example.com/page?ref=nav, ref=nav değerini korur ve UTM alanlarını yanına ekler."
        }
      ],
      "explanation": "UTM parametreleri, analiz araçlarına bir ziyaretin nereden geldiğini söyler. utm_source platform, utm_medium kanal, utm_campaign ise kampanyanın adıdır. utm_term ve utm_content isteğe bağlıdır. Değerler URL için kodlanır, böylece boşluklar ve özel karakterler geçerli kalır.",
      "limitations": "Boş bir kaynak, ortam veya kampanya boş parametre olarak yazılmak yerine bağlantıdan çıkarılır. Sayfa adresi kısaltmaz ve ziyaret kaydetmez. Site URL’si olmayan metin reddedilir.",
      "faqs": [
        {
          "question": "UTM oluşturucu ücretsiz mi?",
          "answer": "Evet. Bir bağlantıya utm_source, utm_medium ve utm_campaign eklemek ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Diğer sorgu parametrelerimin üzerine yazar mı?",
          "answer": "Hayır. Yalnızca doldurduğunuz UTM alanları eklenir veya güncellenir. Diğer parametreler olduğu gibi kalır."
        },
        {
          "question": "Bu araç bir izleme hizmetini çağırır mı?",
          "answer": "Hayır. Yalnızca tarayıcınızda bir URL oluşturur. İzleme daha sonra, bağlantıyı bir analiz düzeninde kullanırsanız gerçekleşir."
        },
        {
          "question": "UTM parametreleri nedir?",
          "answer": "UTM parametreleri, utm_source, utm_medium ve utm_campaign gibi bir bağlantıya eklenen ve analiz araçlarına ziyaretin nereden geldiğini söyleyen etiketlerdir."
        },
        {
          "question": "Hangi UTM parametreleri zorunludur?",
          "answer": "Kaynak, ortam ve kampanya olağan asgari parametrelerdir. Term ve content isteğe bağlıdır ve anahtar kelimeleri veya reklam sürümlerini ayırt etmeye yardımcı olur."
        }
      ]
    },
    "ui": {
      "Website URL": "Site URL’si",
      "Existing query parameters are kept. UTM values are added or updated.": "Mevcut sorgu parametreleri korunur. UTM değerleri eklenir veya güncellenir.",
      "Campaign source": "Kampanya kaynağı",
      "Campaign medium": "Kampanya ortamı",
      "Campaign name": "Kampanya adı",
      "Campaign term (optional)": "Kampanya terimi (isteğe bağlı)",
      "running shoes": "koşu ayakkabısı",
      "Campaign content (optional)": "Kampanya içeriği (isteğe bağlı)",
      "Copy URL": "URL’yi kopyala",
      "Enter a URL to generate a campaign link.": "Kampanya bağlantısı oluşturmak için bir URL girin.",
      "Campaign URL": "Kampanya URL’si",
      "Enter a website URL.": "Bir site URL’si girin.",
      "Enter a valid website URL.": "Geçerli bir site URL’si girin."
    }
  },
  "slug-generator": {
    "answer": "Slug oluşturucu, bir başlığı URL’de güvenle kullanılabilecek, küçük harfli ve tireli bir metne dönüştürür.",
    "content": {
      "about": "Bir başlığı küçük harfli, tireli bir kalıcı bağlantıya dönüştürün. Yazarlar bir yazıya ad verirken, adres CMS’ye girmeden önce kullanır. Latin harflerdeki aksanlar kaldırılır, 你好 gibi harfler kalır ve sonuç adresin boşta olduğunu kontrol etmez.",
      "howTo": [
        "Bir başlık yazın veya yapıştırın.",
        "Slug siz yazdıkça güncellenir.",
        "Slug’ı kopyalayın veya kutuyu temizleyin."
      ],
      "examples": [
        {
          "title": "Bir blog başlığı",
          "body": "“How to Compress an Image Without Losing Quality”, how-to-compress-an-image-without-losing-quality olur."
        },
        {
          "title": "Aksanlar ve diğer yazı sistemleri",
          "body": "Latin aksanları kaldırılır (Café → cafe). 你好 gibi harfler kalır, böylece slug okunabilir olur."
        }
      ],
      "explanation": "Oluşturucu metnin başındaki ve sonundaki boşlukları kırpar, Unicode NFKD normalleştirmesinden sonra birleşik işaretleri ayırır, Latin harfleri küçültür, diğer ayırıcıları tireye çevirir ve tekrarları birleştirir. İngilizce olmayan her karakteri silmek yerine Unicode harf ve rakamları korur. Sonuç pratik bir kalıcı bağlantıdır, benzersizliği garanti edilen bir kimlik değildir.",
      "limitations": "Latin aksanları kaldırılır, 你好 gibi harfler kalır. Sonuç kalıcı bağlantı biçimindedir ama adresin boşta olduğunu kanıtlamaz. Bazı site oluşturucular Latin olmayan harfleri siler; bu sayfa silmez.",
      "faqs": [
        {
          "question": "Slug oluşturucu ücretsiz mi?",
          "answer": "Evet. Bir başlığı tireli bir kalıcı bağlantıya dönüştürmek ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Her CMS ile uyumlu mu?",
          "answer": "Çoğu site küçük harfli, tireli slug’ları kabul eder. Bazıları Latin olmayan harfleri çıkarır; bu araç harf veya rakam oldukları sürece onları korur."
        },
        {
          "question": "Girdiğim metin sunucuya gönderilir mi?",
          "answer": "Hayır. Başlık bu sekmede yeniden yazılır. Yüklenmez ve yerel depolamaya kaydedilmez."
        },
        {
          "question": "URL slug’ı nedir?",
          "answer": "Slug, bir web adresinin sayfayı adlandıran okunabilir kısmıdır; örneğin example.com/blog/ekmek-yapimi içindeki ekmek-yapimi."
        },
        {
          "question": "SEO için iyi bir slug nasıl olmalı?",
          "answer": "Kısa, küçük harfli ve açıklayıcı olsun, kelimeler tireyle ayrılsın. Sayfa ileride güncellenebilecekse tarih ve dolgu kelimelerden kaçının."
        }
      ]
    },
    "ui": {
      "Title or text": "Başlık veya metin",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Latin harflerdeki aksanlar kaldırılır. Çince gibi diğer harfler korunur.",
      "Example": "Örnek",
      "Copy slug": "Slug’ı kopyala",
      "Generated slug": "Oluşturulan slug",
      "How to Compress an Image Without Losing Quality": "Bir görsel kalite kaybı olmadan nasıl sıkıştırılır"
    }
  },
  "qr-code-generator": {
    "answer": "QR kod oluşturucu, bir metni veya URL’yi cihazınızda oluşturulan, indirilebilir bir QR görseline dönüştürür.",
    "content": {
      "about": "Düz metni veya bir URL’yi en fazla 1.200 karakterle PNG QR koda dönüştürün. Birinin tarayacağı kısa bir bağlantı için kullanın. Wi-Fi, e-posta ve kişi düzenleri QR Kod Oluşturucu Pro’dadır; uzun bir metin bazı kameraların okuyamadığı yoğun bir desen oluşturur.",
      "howTo": [
        "Metni veya tam URL’yi yapıştırın; web bağlantısıysa https:// ekleyin.",
        "Oluştur’a basın. Bir önizleme ve erişilebilir bir açıklama görünür.",
        "PNG’yi indirin; farklı bir kod gerekirse sıfırlayın."
      ],
      "examples": [
        {
          "title": "Bir web sitesi",
          "body": "https://example.com, tarandığında o adresi açan bir QR koda dönüşür."
        },
        {
          "title": "Düz metin",
          "body": "Kısa bir not veya Wi-Fi hatırlatması metin olarak kodlanabilir. Desenin okunabilir kalması için 1.200 karakterin altında kalın."
        }
      ],
      "explanation": "QR kod, matris biçiminde bir barkoddur. Bu araç deseni tarayıcınızda istemci tarafı bir kitaplıkla oluşturur. Metin hiçbir QR API’sine gönderilmez. Çok uzun içerik, birçok kameranın zor okuduğu yoğun bir kod oluşturur; bu yüzden uzunluk sınırlıdır.",
      "limitations": "Düz metin veya URL kodlanır ve metin en fazla 1.200 karakter olmalıdır. Wi-Fi, e-posta ve kişi düzenleri QR Kod Oluşturucu Pro’dadır. Uzun bir metin bazı kameraların okuyamadığı yoğun bir desen oluşturur.",
      "faqs": [
        {
          "question": "QR kod oluşturucu ücretsiz mi?",
          "answer": "Evet. Bu tarayıcıda metinden veya URL’den QR görseli oluşturmak ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Metin yükleniyor mu?",
          "answer": "Hayır. QR kod tarayıcınızda oluşturulur. Metin hiçbir sunucuya gönderilmez."
        },
        {
          "question": "Her tarayıcı PNG’yi okur mu?",
          "answer": "Çoğu kamera kısa bir URL’nin yüksek kontrastlı PNG’sini okur. Çok küçük baskılar, loş ışık veya çok uzun metinler başarısız olabilir."
        },
        {
          "question": "Burada oluşturulan QR kodların süresi dolar mı?",
          "answer": "Hayır. Metin veya bağlantı, arada bir yönlendirme hizmeti olmadan doğrudan desende saklanır; bu yüzden kod, bağlantının kendisi çalıştığı sürece çalışır."
        },
        {
          "question": "Bir web sitesi için QR kodu nasıl oluştururum?",
          "answer": "https:// dahil tam adresi yapıştırın, kodu oluşturun, PNG’yi indirin ve basmadan önce bir telefon kamerasıyla test edin."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "QR kod tarayıcınızda oluşturulur. İçeriği makul ölçüde kısa tutun.",
      "QR code for {0}": "{0} için QR kod",
      "QR code for:": "QR kod içeriği:",
      "The QR code is generated in your browser. The text is not sent to a server.": "QR kod tarayıcınızda oluşturulur. Metin hiçbir sunucuya gönderilmez."
    }
  },
  "qr-code-scanner": {
    "answer": "QR kod tarayıcı, seçtiğiniz QR görselini okur ve çözülen metni cihazınızda gösterir.",
    "content": {
      "about": "İlk QR kodu kameradan veya bir PNG ya da JPG’den okuyun. Bir bağlantıyı açıp açmamaya karar vermeden önce metni görmek istediğinizde kullanın. Kamera, Kamerayı başlat’a basana kadar kapalı kalır ve diğer barkod türleri çözülmez.",
      "howTo": [
        "Yalnızca cihaz kamerasıyla taramak istiyorsanız Kamerayı başlat’a basın. İzin, sayfa yüklenirken değil, o anda istenir.",
        "Bir sonuç görünene kadar kodu görüntüde tutun veya akışı serbest bırakmak için Kamerayı durdur’a basın.",
        "Kamera engellenmişse bunun yerine kodun PNG veya JPG dosyasını yükleyin.",
        "Sonucu kopyalayın. Bir http(s) URL’siyse Bağlantıyı aç seçeneği sunulur. Sayfa kendiliğinden yönlendirme yapmaz."
      ],
      "examples": [
        {
          "title": "Kamerayla tarama",
          "body": "Kamerayı başlattıktan sonra kareler sekmede çözülür. Bir kod bulunduğunda veya Durdur’a bastığınızda akış durur."
        },
        {
          "title": "Görsel yükleme",
          "body": "Bir QR kodun ekran görüntüsü, kamera izni reddedilse bile çözülebilir."
        }
      ],
      "explanation": "Çözme işlemi, kamera kareleri veya yüklenen bir görsel üzerinde yerel bir JavaScript okuyucu kullanır. Kamera erişimi yalnızca Kamerayı başlat’a tıkladıktan sonra başlar. İzler Durdur’da, başarılı bir taramadan sonra ve sayfadan ayrıldığınızda kapatılır. Algılanan bir URL önce gösterilir; onu açmak ayrı bir işlemdir.",
      "limitations": "Okuyucunun bulduğu ilk kod gösterilir. Diğer barkod türleri çözülmez. Bağlantı, Bağlantıyı aç’a basana kadar sayfada kalır ve kamera, Kamerayı başlat’a basana kadar kapalı kalır.",
      "faqs": [
        {
          "question": "QR kod tarayıcı ücretsiz mi?",
          "answer": "Evet. Kameradan veya bir görselden QR kod okumak ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Kamera kareleri yükleniyor mu?",
          "answer": "Hayır. Kamerayı başlat’tan sonraki kareler ve seçtiğiniz PNG veya JPG bu sekmede çözülür. Hiçbiri Tools Star Hub’a gönderilmez."
        },
        {
          "question": "Web sitesi neden otomatik olarak açılmadı?",
          "answer": "Taranan bir URL’ye otomatik gitmek güvenli değildir. Metni inceleyin, güveniyorsanız Bağlantıyı aç’ı kullanın."
        },
        {
          "question": "Görselde birden fazla QR kod varsa ne olur?",
          "answer": "Bu okuyucu çözebildiği ilk kodu bildirir. Belirli bir koda ihtiyacınız varsa görseli kırpın."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "Kamera erişimi yalnızca kamerayla taramayı seçtiğinizde istenir.",
      "Start camera": "Kamerayı başlat",
      "Stop camera": "Kamerayı durdur",
      "Or upload a QR image": "Veya bir QR görseli yükleyin",
      "Drag and drop a QR image here, or choose a file.": "Bir QR görselini buraya sürükleyip bırakın veya bir dosya seçin.",
      "Image upload works even if the camera is blocked.": "Görsel yükleme, kamera engelli olsa bile çalışır.",
      "Scan result": "Tarama sonucu",
      "Open link": "Bağlantıyı aç",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "Kamerayı başlat’tan sonraki kareler ve seçtiğiniz PNG veya JPG bu sekmede çözülür. Hiçbiri Tools Star Hub’a gönderilmez.",
      "This browser does not support camera access. Upload an image instead.": "Bu tarayıcı kamera erişimini desteklemiyor. Bunun yerine bir görsel yükleyin.",
      "Camera permission was denied. You can still upload an image.": "Kamera izni reddedildi. Yine de bir görsel yükleyebilirsiniz.",
      "No camera was found. Upload an image instead.": "Kamera bulunamadı. Bunun yerine bir görsel yükleyin.",
      "The camera could not be started. Upload an image instead.": "Kamera başlatılamadı. Bunun yerine bir görsel yükleyin.",
      "This browser could not read that image.": "Bu tarayıcı o görseli okuyamadı.",
      "No QR code was found in that image.": "O görselde QR kod bulunamadı.",
      "That file could not be read as an image.": "O dosya görsel olarak okunamadı."
    }
  },
  "password-generator": {
    "answer": "Parola oluşturucu, seçtiğiniz karakter kümelerinden kriptografik bir rastgele sayı üreteciyle rastgele parolalar oluşturur.",
    "content": {
      "about": "Seçtiğiniz karakter türleriyle 8 ile 64 karakter arasında bir parola oluşturun. Yeni bir hesabın daha önce kullanmadığınız karışık bir diziye ihtiyacı olduğunda kullanın. Güç etiketi uzunluk ve küme boyutundan yapılan bir tahmindir ve bir sitenin ihlale uğrayıp uğramadığını kontrol etmez.",
      "howTo": [
        "8 ile 64 arasında bir uzunluk ve istediğiniz karakter türlerini seçin.",
        "İsterseniz O, 0, I, l ve 1 gibi karıştırılabilen karakterleri hariç tutun.",
        "Oluştur’a basın, ardından parolayı kopyalayın. Hiçbir şey saklanmaz."
      ],
      "examples": [
        {
          "title": "16 karışık karakter",
          "body": "Büyük ve küçük harf, rakam ve sembol içeren 16 karakterlik bir parolanın karakter alanı geniştir. Güç etiketi uzunluk ve küme boyutundan yapılan bir tahmindir."
        },
        {
          "title": "Yalnızca harfler",
          "body": "Rakamları ve sembolleri kapatmak kümeyi küçültür. Oluşturucu yine de en az bir türün seçili olmasını ister."
        }
      ],
      "explanation": "Her karakter Math.random() ile değil, crypto.getRandomValues() ile seçilir. Oluşturucu seçilen her kümeden en az bir karakter ekler, ardından kalanı birleşik kümeden yansız örneklemeyle doldurur. Güç etiketi (Zayıf / Orta / Güçlü) uzunluk × log2(küme boyutu) ile tahmin edilir. Tahmin edilmeye, yeniden kullanıma veya sızan bir siteye karşı garanti değildir.",
      "limitations": "Uzunluk 8 ile 64 arasında bir tam sayı olmalı ve en az bir karakter türü açık kalmalıdır. Güç etiketi uzunluk ve küme boyutundan tahmin edilir. Yeniden kullanımı, kimlik avını veya ihlale uğramış siteleri kontrol etmez. Karıştırılabilen karakterler hariç tutulabilir; sembol listesinin geri kalanı sabittir.",
      "faqs": [
        {
          "question": "Parola oluşturucu ücretsiz mi?",
          "answer": "Evet. 8 ile 64 karakter arasında bir parola oluşturmak ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Parolalar kaydediliyor mu?",
          "answer": "Hayır. Saklanmaz, günlüğe yazılmaz, URL’ye konmaz ve localStorage’a yazılmaz. Gerekirse değeri kopyalayın."
        },
        {
          "question": "Güçlü, kırılamaz demek mi?",
          "answer": "Hayır. Gösterge, uzunluk ve karakter kümesi boyutundan yapılan bir tahmindir. Yeniden kullanımı, kimlik avını veya ele geçirilmiş bir hizmeti hesaba katmaz."
        },
        {
          "question": "Bir parola ne kadar uzun olmalı?",
          "answer": "Uzun olan daha güçlüdür. Birçok güvenlik kılavuzu önemli hesaplar için en az 12 ila 16 karakter ve her site için farklı bir parola önerir."
        },
        {
          "question": "Çevrimiçi bir parola oluşturucu kullanmak güvenli mi?",
          "answer": "Bu araç parolayı tarayıcınızda crypto.getRandomValues ile oluşturur, göndermez ve saklamaz. Parolayı bir notta değil, bir parola yöneticisinde saklayın."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "{0} ile {1} karakter arası.",
      "Uppercase letters": "Büyük harfler",
      "Lowercase letters": "Küçük harfler",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Karıştırılabilen karakterleri hariç tut (O, 0, I, l, 1)",
      "Generated password": "Oluşturulan parola",
      "Length: {0}": "Uzunluk: {0}",
      "Character set size: {0}": "Karakter kümesi boyutu: {0}",
      "Estimated entropy: {0} bits ({1})": "Tahmini entropi: {0} bit ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Bu gösterge, uzunluk ve karakter kümesi boyutundan yapılan bir tahmindir. Güvenlik garantisi değildir.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "Parolalar tarayıcınızda crypto.getRandomValues ile oluşturulur. Saklanmaz, günlüğe yazılmaz ve sunucuya gönderilmez.",
      "Enter a password length.": "Bir parola uzunluğu girin.",
      "Length must be a whole number.": "Uzunluk bir tam sayı olmalıdır.",
      "Choose a length from {0} to {1}.": "{0} ile {1} arasında bir uzunluk seçin.",
      "Select at least one character type.": "En az bir karakter türü seçin.",
      "Length must be at least the number of selected character types.": "Uzunluk, seçilen karakter türü sayısından az olamaz."
    }
  },
  "qr-code-generator-pro": {
    "answer": "QR Kod Oluşturucu Pro; URL, Wi-Fi, e-posta, telefon, SMS veya kişiler için renkli QR kodlar oluşturur.",
    "content": {
      "about": "Düz metin, Wi-Fi, e-posta, telefon, SMS veya vCard kişisi için renk ve hata düzeltme ayarlarıyla bir QR kod oluşturun. Bir telefonun tarayarak bir ağa katılması veya bir kişiyi kaydetmesi gerektiğinde kullanın. Eksik ağ adı reddedilir ve kodlanan metin yine 1.200 karakteri aşmamalıdır.",
      "howTo": [
        "Bir tür seçin: metin/URL, Wi-Fi, e-posta, telefon, SMS veya kişi.",
        "O türün alanlarını doldurun. Geçersiz değerler kod çizilmeden önce reddedilir.",
        "İsterseniz renkleri, boyutu, sessiz bölgeyi ve hata düzeltmeyi değiştirin, ardından kodu oluşturup PNG olarak indirin."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Cafe adlı bir WPA ağı WIFI:T:WPA;S:Cafe;P:Password;; olarak kodlanır."
        },
        {
          "title": "Telefon",
          "body": "+1 202 555 0100 gibi bir numara boşluksuz bir tel: içeriğine dönüşür."
        }
      ],
      "explanation": "Yapılandırılmış türler olağan QR metin biçimlerine (WIFI, mailto, tel, SMSTO, vCard 3.0) dönüştürülür. Oluşturma, temel oluşturucuyla aynı yerel QR kitaplığını kullanır. İçerik saklanmaz, günlüğe yazılmaz veya sayfa URL’sine konmaz.",
      "limitations": "Türler düz metin, Wi-Fi, e-posta, telefon, SMS ve vCard 3.0 kişisidir. Eksik bir ağ adı, basit denetimi geçemeyen bir e-posta veya rakamlar ve isteğe bağlı + ( ) dışında karakter içeren bir telefon numarası, kod çizilmeden önce reddedilir. Kodlanan metin yine 1.200 karakteri aşmamalıdır.",
      "faqs": [
        {
          "question": "QR Kod Oluşturucu Pro ücretsiz mi?",
          "answer": "Evet. Wi-Fi, e-posta, telefon, SMS, kişi veya metin için QR kod oluşturmak ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Temel QR oluşturucudan farklı mı?",
          "answer": "Evet. Temel araç düz metin veya URL kodlar. Bu sürüm yapılandırılmış türler, renkler ve hata düzeltme ayarları ekler. Temel araç değişmeden kalır."
        },
        {
          "question": "Wi-Fi parolaları kaydediliyor mu?",
          "answer": "Hayır. Siz sıfırlayana veya ayrılana kadar bu sayfada kalır. localStorage’a yazılmaz ve sunucuya gönderilmez."
        },
        {
          "question": "Wi-Fi için QR kodu nasıl oluştururum?",
          "answer": "Wi-Fi’yi seçin, ağ adını, parolayı ve güvenlik türünü girin, ardından kodu indirin. Kodu tarayan telefonlar parolayı yazmadan bağlanabilir."
        },
        {
          "question": "QR kodun renklerini değiştirebilir miyim?",
          "answer": "Evet, ancak kameraların okuyabilmesi için açık bir zemin üzerinde koyu bir desenle güçlü kontrastı koruyun. Basmadan önce kodu test edin."
        }
      ]
    },
    "ui": {
      "QR type": "QR türü",
      "Network name (SSID)": "Ağ adı (SSID)",
      "Security": "Güvenlik",
      "Hidden network": "Gizli ağ",
      "Email": "E-posta",
      "Subject (optional)": "Konu (isteğe bağlı)",
      "Body (optional)": "İleti metni (isteğe bağlı)",
      "Phone number": "Telefon numarası",
      "Message (optional)": "Mesaj (isteğe bağlı)",
      "First name": "Ad",
      "Last name": "Soyad",
      "Phone (optional)": "Telefon (isteğe bağlı)",
      "Email (optional)": "E-posta (isteğe bağlı)",
      "Foreground": "Ön plan",
      "Background": "Arka plan",
      "Size": "Boyut",
      "Quiet zone": "Sessiz bölge",
      "Error correction": "Hata düzeltme",
      "Generated QR code": "Oluşturulan QR kod",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "QR kod tarayıcınızda oluşturulur. Wi-Fi parolaları ve diğer alanlar saklanmaz veya sunucuya gönderilmez.",
      "Foreground and background colors need to be different.": "Ön plan ve arka plan renkleri farklı olmalıdır.",
      "Text / URL": "Metin / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "Telefon",
      "Contact": "Kişi",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Parola yok",
      "Enter a hex color such as #336699.": "#336699 gibi bir hex renk girin.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "# ile veya olmadan 3, 6 ya da 8 haneli hex kullanın.",
      "Enter a network name (SSID).": "Bir ağ adı (SSID) girin.",
      "Enter the Wi-Fi password, or choose no password.": "Wi-Fi parolasını girin veya Parola yok’u seçin.",
      "Enter a valid email address.": "Geçerli bir e-posta adresi girin.",
      "Enter a phone number, with digits and optional + ( ).": "Rakamlardan ve isteğe bağlı + ( ) karakterlerinden oluşan bir telefon numarası girin.",
      "Enter a first or last name for the contact.": "Kişi için bir ad veya soyad girin."
    }
  },
  "url-parser": {
    "answer": "URL ayrıştırıcı, mutlak bir URL’yi protokol, ana makine adı, bağlantı noktası, yol, parça ve her bir sorgu parametresine ayırır. URL tarayıcınızda kalır.",
    "content": {
      "about": "Mutlak bir URL yapıştırın ve protokolünü, ana makine adını, bağlantı noktasını, yolunu, parçasını ve sorgu parametrelerini okuyun.",
      "howTo": [
        "http veya https ile başlayan tam bir URL yapıştırın.",
        "Ayrıştır’a basın."
      ],
      "features": [
        "Her sorgu anahtarı kendi satırında.",
        "Boş sorgu değerleri korunur.",
        "Parça, yoldan ayrı gösterilir."
      ],
      "examples": [
        {
          "title": "Bağlantı noktası ve iki aynı anahtar içeren bir URL",
          "body": "https://example.com:8080/docs?topic=a&topic=, 8080 bağlantı noktasını ve ikincisi boş değerli iki topic satırını korur."
        }
      ],
      "explanation": "Sayfa, tarayıcının URL ayrıştırıcısını kullanır. Yinelenen sorgu anahtarları ayrı girişler olarak kalır. Eksik protokol veya göreli yol reddedilir. Ana makine adı, URL ayrıştırıcısının döndürdüğü değerdir; uluslararası adlar kodlanmış biçimleriyle gösterilir.",
      "tips": [
        "https:// veya http:// ekleyin.",
        "Sorgudan sonraki # işareti başka bir parametreyi değil, parçayı başlatır."
      ],
      "limitations": "Yalnızca mutlak http ve https URL’leri ayrıştırılır. URL açılmaz ve hiçbir yere gönderilmez.",
      "faqs": [
        {
          "question": "Bir URL nasıl ayrıştırılır?",
          "answer": "Tarayıcının URL ayrıştırıcısı protokolü, ana makine adını, bağlantı noktasını, yolu, parçayı ve her sorgu parametresini ayırır."
        },
        {
          "question": "Yinelenen sorgu anahtarlarına ne olur?",
          "answer": "Her biri listelenir. Tek bir değerde birleştirilmezler."
        },
        {
          "question": "Peki boş bir sorgu değeri?",
          "answer": "Eşittir işaretinden sonra hiçbir şey olmayan bir anahtar korunur ve boş olarak gösterilir."
        },
        {
          "question": "Göreli bir URL neden reddedilir?",
          "answer": "Göreli bir yolun protokolü veya ana makinesi yoktur, bu yüzden mutlak bir URL değildir."
        },
        {
          "question": "URL sunucuya gönderilir mi?",
          "answer": "Hayır. Ayrıştırma tarayıcınızda yapılır."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "URL tarayıcınızda ayrıştırılır. Başka bir hizmete gönderilmez.",
      "Absolute URL": "Mutlak URL",
      "Parse": "Ayrıştır",
      "Query parameters": "Sorgu parametreleri",
      "No query parameters.": "Sorgu parametresi yok.",
      "(empty)": "(boş)",
      "Protocol": "Protokol",
      "Hostname": "Ana makine adı",
      "Port": "Bağlantı noktası",
      "Path": "Yol",
      "Fragment": "Parça",
      "Enter an absolute URL.": "Mutlak bir URL girin.",
      "Enter a URL of 100000 characters or fewer.": "En fazla 100000 karakterlik bir URL girin.",
      "Enter an absolute URL that includes a protocol, such as https://.": "https:// gibi bir protokol içeren mutlak bir URL girin.",
      "That text is not a valid absolute URL.": "Bu metin geçerli bir mutlak URL değil.",
      "Enter an http or https URL.": "Bir http veya https URL’si girin."
    }
  },
  "robots-txt-generator": {
    "answer": "robots.txt oluşturucu, yazdığınız kurallardan User-agent, Allow ve Disallow satırları yazar. Bir site haritası URL’si ekleyebilir. Canlı bir siteyi yayımlamaz veya test etmez.",
    "content": {
      "about": "Bir veya daha fazla user-agent grubundan ve isteğe bağlı bir site haritası URL’sinden robots.txt metni yazın.",
      "howTo": [
        "Bir user-agent girin.",
        "Her satıra bir tane olacak şekilde Allow ve Disallow yolları ekleyin.",
        "İsterseniz bir site haritası URL’si ekleyin.",
        "Oluştur’a basın."
      ],
      "features": [
        "Birden fazla user-agent grubu.",
        "Birden fazla Allow ve Disallow satırı.",
        "İsteğe bağlı mutlak bir site haritası URL’si."
      ],
      "examples": [
        {
          "title": "Özel bir klasör",
          "body": "User-agent * ile Disallow: /admin, tarayıcı botlarına /admin altındaki yolları getirmemelerini söyler. Dosya yalnızca metindir."
        }
      ],
      "explanation": "Her grup User-agent ile başlar, ardından her yol için bir Allow satırı ve her yol için bir Disallow satırı gelir. Boş yol satırları atlanır. Site haritası yalnızca mutlak bir http veya https URL’siyse eklenir. Sayfa dosyayı yüklemez ve canlı bir siteyi test etmez.",
      "tips": [
        "Tüm botlar için * kullanın.",
        "Her yolu ayrı bir satıra yazın."
      ],
      "limitations": "Sonuç, kopyalayabileceğiniz bir metindir. Kural yayımlamaz ve canlı bir sitenin neye izin verdiğini kontrol etmez.",
      "faqs": [
        {
          "question": "robots.txt dosyası nasıl yazılır?",
          "answer": "Bir User-agent satırıyla başlayın, ardından Allow ve Disallow satırları ekleyin. Mutlak bir site haritası URL’niz varsa bir Sitemap satırı ekleyin."
        },
        {
          "question": "Birden fazla user-agent kullanabilir miyim?",
          "answer": "Evet. Her grubun kendi user-agent’ı ve kuralları vardır."
        },
        {
          "question": "Boş bir yola ne olur?",
          "answer": "Boş bir satır atlanır, bu yüzden boş bir Allow veya Disallow kuralı oluşturmaz."
        },
        {
          "question": "Bu, canlı sitemi test eder mi?",
          "answer": "Hayır. Yalnızca metni oluşturur. Dosyayı yayımlamaz ve sitenize istek göndermez."
        },
        {
          "question": "Hangi site haritası URL’si kabul edilir?",
          "answer": "Mutlak bir http veya https URL’si. Protokolü olmayan bir yol reddedilir."
        },
        {
          "question": "Bu bilgiler sunucuya gönderilir mi?",
          "answer": "Hayır. User-agent satırları ve yollar bu sekmede bir araya getirilir. Yüklenmezler ve sayfa sitenize istek göndermez."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Bu araç, yazdığınız kurallardan robots.txt metni yazar. Canlı bir siteyi test etmez veya yayımlamaz.",
      "Group {0} user-agent": "{0}. grubun user-agent’ı",
      "Allow paths, one per line": "Allow yolları, her satıra bir tane",
      "Disallow paths, one per line": "Disallow yolları, her satıra bir tane",
      "Remove group": "Grubu kaldır",
      "Add group": "Grup ekle",
      "Sitemap URL, optional": "Site haritası URL’si, isteğe bağlı",
      "Add at least one user-agent group.": "En az bir user-agent grubu ekleyin.",
      "Group {0} needs a user-agent.": "{0}. grubun bir user-agent’a ihtiyacı var.",
      "Enter a sitemap as an absolute http or https URL.": "Site haritasını mutlak bir http veya https URL’si olarak girin."
    }
  },
  "password-strength-checker": {
    "answer": "Parola gücü denetleyicisi, uzunluktan ve gerçekten bulunan karakter türlerinden bit tahmini yapar. Parolayı yüklemez ve bir sızıntı listesiyle karşılaştırmaz.",
    "content": {
      "about": "Bir parola yazın ve Zayıf, Orta veya Güçlü değerlendirmesini görün. Tahmin, uzunluğu ve parolada geçen karakter türlerini kullanır. Veri ihlallerini aramaz ve bir sitenin parolayı kabul edip etmeyeceğini bilmez.",
      "howTo": [
        "Parolayı yazın. Boş kutu reddedilir.",
        "Denetle’ye basın.",
        "Değerlendirmeyi, uzunluğu, tahmini biti ve bulunan karakter türlerini okuyun."
      ],
      "features": [
        "Büyük harf, küçük harf, rakam ve sembol kümesi yalnızca parolada geçiyorsa sayılır.",
        "Boşluk veya ters tırnak dahil diğer her karakter, her farklı karakter için havuza bir ekler.",
        "Zayıf 50 bitin altı, Orta 80’in altı, Güçlü ise 80 ve üzeridir."
      ],
      "examples": [
        {
          "title": "Küçük harfli bir kelime",
          "body": "password 8 küçük harften oluşur. Havuz 26’dır, tahmin yuvarlanınca 38 bit olur ve değerlendirme Zayıf’tır."
        },
        {
          "title": "Harfler, bir rakam ve bir sembol",
          "body": "Abcdefghijklm12!, büyük ve küçük harf, rakam ve bir sembol içeren 16 karakterdir. Havuz 85’tir, tahmin yuvarlanınca 103 bit olur ve değerlendirme Güçlü’dür."
        }
      ],
      "explanation": "Bit, uzunluğun havuzun 2 tabanında logaritmasıyla çarpımıdır. Havuz, A’dan Z’ye bir harf varsa büyük harfler için 26, küçük harfler için 26, bir rakam için 10 ve !@#$%^&*()-_=+[]{};:,.? içinden bir sembol için 23’tür. Bu kümelerin dışındaki bir karakter tüm sembol kümesi sayılmaz, bir ekler. Bu, parolayı oluşturulmadan önce seçilen türlere göre değerlendiren parola oluşturucu değildir.",
      "tips": [
        "Birkaç karakter türünden oluşan daha uzun bir parola, kısa bir kelimeden daha yüksek puan alır.",
        "Değerlendirme yerine yeni bir parola istiyorsanız Parola Oluşturucu’yu kullanın."
      ],
      "limitations": "En fazla 256 karakter. Sayfa veri ihlallerini aramaz ve bir sitenin parolayı kabul edip etmeyeceğini bilmez. Aksanlı harfler A’dan Z’ye değil, diğer karakterler olarak sayılır.",
      "faqs": [
        {
          "question": "Parola gücü denetleyicisi ücretsiz mi?",
          "answer": "Evet. Burada ödeme yapmadan veya hesap açmadan bir parolayı değerlendirebilirsiniz."
        },
        {
          "question": "Parola sızdırılmış parolalarla karşılaştırılıyor mu?",
          "answer": "Hayır. Değerlendirme yalnızca yazdığınız metnin uzunluğuna ve karakter türlerine dayanır."
        },
        {
          "question": "Yalnızca rakamlardan oluşan bir parola neden Zayıf?",
          "answer": "Sekiz rakam 10’luk bir havuz kullanır. Bu yaklaşık 27 bittir, yani 50’nin altındadır; bu yüzden değerlendirme Zayıf’tır."
        },
        {
          "question": "Parola sunucuya gönderilir mi?",
          "answer": "Hayır. Denetim bu tarayıcı sekmesinde çalışır. Tools Star Hub parolayı bir sunucuya göndermez veya yerel depolamaya kaydetmez."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} karakter, {1}, {2} bit",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "Değerlendirme, yazdığınız paroladaki karakter türlerini kullanır. Parola bu sekmede kalır, yüklenmez ve bir sızıntı listesiyle karşılaştırılmaz.",
      "Show password": "Parolayı göster",
      "Check": "Denetle",
      "Copy rating": "Değerlendirmeyi kopyala",
      "Rating": "Değerlendirme",
      "Estimated bits": "Tahmini bit",
      "Enter a password.": "Bir parola girin.",
      "Enter a password of {0} characters or fewer.": "En fazla {0} karakterlik bir parola girin.",
      "Uppercase": "Büyük harf",
      "Lowercase": "Küçük harf",
      "Other": "Diğer"
    }
  },
  "meta-tag-generator": {
    "answer": "Meta etiket oluşturucu; başlık, açıklama, robots, canonical, Open Graph ve Twitter için HTML etiketleri yazar. Hiçbir sayfayı getirmez.",
    "content": {
      "about": "Bir başlık ve istediğiniz isteğe bağlı etiketleri girin. Sayfa, bir sayfanın head bölümüne yapıştırabileceğiniz HTML yazar. Canlı bir URL’yi getirmez ve bir sitenin bağlantıyı nasıl paylaşacağını kontrol etmez.",
      "howTo": [
        "Bir başlık girin. Boş başlık reddedilir.",
        "Açıklama, canonical URL, robots seçimleri ve istediğiniz Open Graph veya Twitter alanlarını ekleyin.",
        "Oluştur’a basın, ardından HTML’yi kopyalayın."
      ],
      "features": [
        "Her sonuçta bir charset etiketi, bir başlık ve bir robots etiketi.",
        "İsteğe bağlı açıklama, canonical bağlantı, Open Graph etiketleri ve Twitter etiketleri.",
        "Metindeki tırnak işaretleri ve & işaretleri kaçış karakterine dönüştürülür."
      ],
      "examples": [
        {
          "title": "Bir başlık ve açıklama",
          "body": "Sample page başlığı ve A short description of the page. açıklaması, index ve follow ile birlikte bir charset etiketi, başlık, açıklama ve index, follow değerli bir robots etiketi yazar."
        },
        {
          "title": "Başlıkta & işareti",
          "body": "A & B başlığı, title etiketinin içinde A &amp; B olarak yazılır."
        }
      ],
      "explanation": "HTML, doldurduğunuz alanlardan oluşturulur. Boş isteğe bağlı alanlar çıkarılır. Canonical URL, Open Graph görseli, Open Graph URL’si ve Twitter görseli mutlak http veya https URL’leri olmalıdır. Sayfa bu URL’lere istek göndermez.",
      "tips": [
        "Etiketleri kendi HTML’nizde istediğinizde buradaki Open Graph alanlarını kullanın. Canlı bir paylaşım önizlemesi farklı bir denetimdir."
      ],
      "limitations": "Başlık en fazla 200, açıklama en fazla 500 karakter olabilir. Open Graph türü website, article veya hiçbiridir. Twitter kartı summary, summary_large_image veya hiçbiridir. Kartı olmayan bir Twitter başlığı reddedilir.",
      "faqs": [
        {
          "question": "Meta etiket oluşturucu ücretsiz mi?",
          "answer": "Evet. Etiketleri burada ödeme yapmadan veya hesap açmadan yazabilirsiniz."
        },
        {
          "question": "Bir bağlantının sosyal medyada nasıl görüneceğini gösterir mi?",
          "answer": "Hayır. Yalnızca etiketleri yazar. URL’yi açmaz."
        },
        {
          "question": "Hangi robots değeri yazılır?",
          "answer": "Index seçimi ve follow seçimi; örneğin index, follow veya noindex, nofollow."
        },
        {
          "question": "Metin sunucuya gönderilir mi?",
          "answer": "Hayır. HTML bu tarayıcı sekmesinde oluşturulur. Tools Star Hub bu alanları bir sunucuya göndermez veya yerel depolamaya kaydetmez."
        }
      ]
    },
    "ui": {
      "Sample page": "Örnek sayfa",
      "A short description of the page.": "Sayfanın kısa bir açıklaması.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Bu araç, bir sayfanın head bölümü için HTML yazar. Canlı bir URL’yi getirmez ve bir sitenin bağlantıyı nasıl paylaşacağını kontrol etmez.",
      "Title": "Başlık",
      "Description": "Açıklama",
      "Canonical URL, optional": "Canonical URL, isteğe bağlı",
      "Robots index": "Robots: index",
      "Robots follow": "Robots: follow",
      "Open Graph title, optional": "Open Graph başlığı, isteğe bağlı",
      "Open Graph description, optional": "Open Graph açıklaması, isteğe bağlı",
      "Open Graph image URL, optional": "Open Graph görsel URL’si, isteğe bağlı",
      "Open Graph URL, optional": "Open Graph URL’si, isteğe bağlı",
      "Open Graph type": "Open Graph türü",
      "Twitter title, optional": "Twitter başlığı, isteğe bağlı",
      "Copy HTML": "HTML’yi kopyala",
      "Head tags": "Head etiketleri",
      "None": "Yok",
      "Enter a {0} of {1} characters or fewer.": "{0}: en fazla {1} karakter.",
      "Enter {0} as an absolute http or https URL.": "{0}: mutlak bir http veya https URL’si girin.",
      "Enter a title.": "Bir başlık girin.",
      "the canonical URL": "Canonical URL",
      "Open Graph title": "Open Graph başlığı",
      "Open Graph description": "Open Graph açıklaması",
      "the Open Graph image URL": "Open Graph görsel URL’si",
      "the Open Graph URL": "Open Graph URL’si",
      "Choose website, article, or no Open Graph type.": "website, article veya Open Graph türü yok seçeneğini seçin.",
      "Choose a Twitter card of summary or summary_large_image.": "Twitter kartı olarak summary veya summary_large_image seçin.",
      "the Twitter image URL": "Twitter görsel URL’si",
      "Choose a Twitter card before adding Twitter text or an image.": "Twitter metni veya görseli eklemeden önce bir Twitter kartı seçin.",
      "title": "Başlık",
      "description": "Açıklama"
    }
  },
  "open-graph-preview": {
    "answer": "Open Graph önizlemesi bir sayfa URL’sini bu siteye gönderir, herkese açık başlığı ve paylaşım etiketlerini okur ve sayfayı kaydetmez. Özel ve http olmayan adresler reddedilir.",
    "content": {
      "about": "Herkese açık bir http veya https URL’si girin. Önizlemeyi denetle bu URL’yi bu siteye gönderir. Site sayfayı ister ve bulduğu başlığı, açıklamayı, görseli ve Twitter kartını gösterir. Sayfa burada kaydedilmez. Özel veya yerel bir adres, sayfa okunmadan önce reddedilir.",
      "howTo": [
        "Mutlak bir http veya https URL’si girin.",
        "Önizlemeyi denetle’ye basın.",
        "Kartı okuyun. Reddedilen bir adres, zaman aşımı veya http olmayan bir URL, sayfa içeriği olmadan kısa bir hata gösterir."
      ],
      "features": [
        "Herkese açık sayfadan başlık, açıklama, görsel adresi ve Twitter kartı alanları.",
        "Yönlendirme herkese açık bir http veya https URL’sinde kaldığında yönlendirmelerden sonraki adres.",
        "Adres özel olduğunda, istek zaman aşımına uğradığında veya protokol http ya da https olmadığında kısa bir hata."
      ],
      "examples": [
        {
          "title": "Herkese açık bir sayfa",
          "body": "https://example.com/ Example Domain başlığını döndürür. Bu sayfanın açıklaması, görseli veya Twitter kartı yoktur; bu yüzden bu alanlarda Bulunamadı yazar."
        },
        {
          "title": "Yerel bir adres",
          "body": "http://127.0.0.1/ ve ondalık biçimi http://2130706433/ ikisi de Bu adres getirilemiyor gösterir."
        }
      ],
      "explanation": "Tarayıcı bu siteye yalnızca URL’yi gönderir. Site ana makineyi çözümler; özel, geri döngü, bağlantı yerel veya ayrılmış bir adresi reddeder ve her yönlendirmeden sonra yeniden denetler. Açılmış sayfanın en fazla 512 KiB’ını okur, ardından etiketleri döndürür. Ham sayfa döndürülmez ve kaydedilmez.",
      "tips": [
        "Etiketleri kendiniz yazmak istediğinizde Meta Etiket Oluşturucu’yu kullanın. Bu sayfa, herkese açık bir URL’de zaten bulunan etiketleri okur."
      ],
      "limitations": "Yalnızca http ve https. Bir file URL’si, kullanıcı adı içeren bir URL ve özel bir adres reddedilir. İstek 8 saniye sonra durur. Görsel sunucusu önizleme resmini engellese bile bir paylaşım görseli listelenebilir.",
      "faqs": [
        {
          "question": "Open Graph önizlemesi ücretsiz mi?",
          "answer": "Evet. Herkese açık bir sayfadaki paylaşım etiketlerini ödeme yapmadan veya hesap açmadan denetleyebilirsiniz. Etiketlerin okunabilmesi için URL yine de bu siteye gönderilir."
        },
        {
          "question": "URL bu cihazın dışına gönderilir mi?",
          "answer": "Evet. Önizlemeyi denetle URL’yi bu siteye gönderir; site o herkese açık sayfayı ister ve etiketlerini okur. Sayfa burada kaydedilmez. Özel veya http olmayan bir adres reddedilir."
        },
        {
          "question": "Yerel bir URL neden reddedildi?",
          "answer": "127.0.0.1 gibi adresler, özel bir ağ ve bir geri döngü adresinin ondalık biçimi, sayfa okunmadan önce reddedilir."
        },
        {
          "question": "Zaman aşımı nasıl görünür?",
          "answer": "Kart gösterilmez. Sayfa, önizleme isteğinin zaman aşımına uğradığını söyler."
        }
      ]
    },
    "ui": {
      "Not found": "Bulunamadı",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Önizlemeyi denetle URL’yi bu siteye gönderir. Site, herkese açık sayfanın başlığını ve paylaşım etiketlerini okur ve sayfayı kaydetmez. Özel bir adres veya http olmayan bir URL reddedilir.",
      "Page URL": "Sayfa URL’si",
      "Checking the page…": "Sayfa denetleniyor…",
      "Image": "Görsel",
      "The image address was found, but it did not load.": "Görsel adresi bulundu ancak görsel yüklenmedi.",
      "Twitter image": "Twitter görseli",
      "That page could not be previewed.": "Bu sayfanın önizlemesi oluşturulamadı.",
      "Enter an http or https page URL.": "Bir http veya https sayfa URL’si girin.",
      "Checking…": "Denetleniyor…",
      "Check preview": "Önizlemeyi denetle",
      "That address cannot be fetched.": "Bu adres getirilemiyor.",
      "The preview request timed out.": "Önizleme isteği zaman aşımına uğradı.",
      "That page redirected too many times.": "Bu sayfa çok fazla kez yönlendirildi.",
      "That page is not HTML.": "Bu sayfa HTML değil.",
      "Too many preview requests. Wait a minute and try again.": "Çok fazla önizleme isteği. Bir dakika bekleyip yeniden deneyin.",
      "Send a JSON request with a url.": "URL içeren bir JSON isteği gönderin."
    }
  }
};

export default data;
