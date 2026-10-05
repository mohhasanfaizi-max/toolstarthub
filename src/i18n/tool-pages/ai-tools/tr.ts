import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Yapay zekâ istem oluşturucu, girdiğiniz konu, amaç, hedef kitle ve biçimden yapılandırılmış bir istem hazırlar. \"İstem oluştur\" tarayıcınızda kalır. \"Yapay zekâyla oluştur\" bu alanları ToolStarHub üzerinden Google'ın Gemini API'sine gönderir.",
    "content": {
      "about": "Yapay zekâ istem oluşturucu, doldurduğunuz alanları kopyalayabileceğiniz bir isteme dönüştürür. Hazır ayar yalnızca kullanım amacını, tonu, biçimi, ayrıntı düzeyini ve ilk talimatı doldurur. Konuyu sizin girmeniz gerekir.",
      "howTo": [
        "Bir hazır ayar seçin ya da kendi kullanım amacınızı yazın.",
        "Bir konu veya amaç girin. En az biri gereklidir.",
        "Hedef kitleyi, tonu, dili, biçimi ve istediğiniz ayrıntı düzeyini belirleyin.",
        "İstemi tarayıcıda hazırlamak için \"İstem oluştur\"a, Gemini'nin geliştirmesi için \"Yapay zekâyla oluştur\"a tıklayın.",
        "Formu sıfırlamak için \"Temizle\"yi kullanın."
      ],
      "features": [
        "Makale, gönderi, senaryo, ürün metni, araştırma taslağı ve kodlama görevleri için on iki hazır ayar.",
        "Görevi, hedef kitleyi, tonu, dili ve biçimi belirten yapılandırılmış bir istem.",
        "Modelden eksik bilgileri uydurmamasını isteyen bir satır.",
        "Kopyala ve temizle. Hiçbir şey kaydedilmez."
      ],
      "examples": [
        {
          "title": "Artık yıl yaşları hakkında bir blog yazısı",
          "body": "Hazır ayar: blog yazısı. Konu: 29 Şubat'ta doğan birinin yaşı nasıl hesaplanır. Hedef kitle: tarih hesaplayıcı kullananlar. İstem kısa bir giriş ve şişirilmemiş bir sonuç ister."
        },
        {
          "title": "Bir kodlama görevi",
          "body": "Hazır ayar: kodlama istemi. Amaç: boş bir sayfa aralığını reddeden bir fonksiyon yazmak. Ek talimat: TypeScript kullan ve başarısız olan bir örnek göster. İstem dili, girdileri ve neyin bitmiş sayılacağını sorar."
        }
      ],
      "explanation": "\"İstem oluştur\" yanıtlarınızı etiketli satırlarda birleştirir. Konu ve amaç ikisi de boşsa araç durur ve birini ister. \"Yapay zekâyla oluştur\" bu alanları Gemini'ye gönderir ve geliştirilmiş bir istem döndürür.",
      "limitations": "\"İstem oluştur\" yalnızca doldurulan alanları birleştirir ve bir konu ya da amaç gerektirir. Hazır ayar stil alanlarını doldurur ama konu uydurmaz. \"Yapay zekâyla oluştur\" istemi Gemini ile geliştirir. Sayfa istemi bir yazı modelinde çalıştırmaz.",
      "tips": [
        "Okuyucuları belirtin. \"Yeni ebeveynler\" ifadesi \"herkes\"ten daha faydalıdır.",
        "Sonucun nasıl görünmesi gerektiğini söyleyin: liste, e-posta, senaryo.",
        "Bildiğiniz gerçekleri ek talimatlara yazın, böylece model tahmin etmek zorunda kalmaz."
      ],
      "faqs": [
        {
          "question": "Bu araç yapay zekâ kullanıyor mu?",
          "answer": "\"İstem oluştur\" istemi bu sayfada hazırlar. \"Yapay zekâyla oluştur\" alanları ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve geliştirilmiş bir istem döndürür. İkisini de başka bir modele yapıştırabilirsiniz."
        },
        {
          "question": "Yalnızca konuyu biliyorsam ne olur?",
          "answer": "Oluşturmak için bir konu yeterlidir. Okuyucuların sonrasında ne yapabilmesi gerektiğini bildiğinizde bir amaç ekleyin."
        },
        {
          "question": "Metnim bir sunucuya gönderiliyor mu?",
          "answer": "\"İstem oluştur\" bu sekmede kalır ve alanları yüklemez. \"Yapay zekâyla oluştur\" alanları ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve geliştirilmiş bir istem döndürür. ToolStarHub bu metni kaydetmez. Ücretsiz katmanda Google bunu ürünlerini geliştirmek için kullanabilir."
        },
        {
          "question": "İyi bir yapay zekâ istemini ne oluşturur?",
          "answer": "Ne istediğinizi, kimin için olduğunu, tonu, biçimi ve uzunluğu söyleyin. Net bir amaç ve çıktıdan bir örnek genellikle fazladan sıfatlardan daha çok işe yarar."
        },
        {
          "question": "İstemi ChatGPT, Gemini veya Claude'da kullanabilir miyim?",
          "answer": "Evet. Sonuç, herhangi bir sohbet asistanına yapıştırabileceğiniz düz metindir. Yine de farklı modeller aynı isteme farklı yanıt verebilir."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "\"İstem oluştur\" tarayıcınızda bir istem hazırlar. \"Yapay zekâyla oluştur\" doldurulan alanları ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve özenle yazılmış bir istem döndürür. Metin kaydedilmez.",
      "Platform or use case": "Platform veya kullanım amacı",
      "Topic": "Konu",
      "Goal": "Amaç",
      "Audience": "Hedef kitle",
      "Tone": "Ton",
      "Language": "Dil",
      "Output format": "Çıktı biçimi",
      "Level of detail": "Ayrıntı düzeyi",
      "Brief": "Kısa",
      "Medium": "Orta",
      "High": "Yüksek",
      "Additional instructions": "Ek talimatlar",
      "Generate prompt": "İstem oluştur",
      "Prompt": "İstem",
      "AI prompt": "YZ istemi",
      "Blog article": "Blog yazısı",
      "SEO article": "SEO makalesi",
      "Social media post": "Sosyal medya gönderisi",
      "YouTube script": "YouTube senaryosu",
      "YouTube thumbnail prompt": "YouTube küçük resim istemi",
      "Image generation": "Görsel oluşturma",
      "Video generation": "Video oluşturma",
      "Product description": "Ürün açıklaması",
      "Email": "E-posta",
      "Marketing copy": "Pazarlama metni",
      "Academic/research prompt": "Akademik/araştırma istemi",
      "Coding prompt": "Kodlama istemi",
      "Add a topic or a goal before generating a prompt.": "İstem oluşturmadan önce bir konu veya amaç girin."
    },
    "note": "\"İstem oluştur\" istemi, yapay zekâ modellerinin en doğru izlediği dil olan İngilizce yazar. \"Dil\" alanı yanıtın hangi dilde geleceğini belirler. \"Yapay zekâyla oluştur\" Türkçe girdileri de anlar."
  },
  "prompt-to-image": {
    "answer": "İstemden görsele aracı, konu ve stilden kopyalanabilir bir görsel istemi yazar. Görselin kendisini oluşturmaz. \"Yapay zekâyla oluştur\" yalnızca daha ayrıntılı bir istem döndürür.",
    "content": {
      "about": "İstemden görsele oluşturucu, bir görsel modeli için istem yazar. Konuyu, yeri, ışığı ve kadrajı siz tarif edersiniz. Bağlı bir görsel API'si olmadığı için sayfa görseli çizmez.",
      "howTo": [
        "Bir başlangıç noktası istiyorsanız bir stil hazır ayarı seçin.",
        "Konuyu tarif edin. Konu olmadan araç istem oluşturmaz.",
        "Önemliyse ortam, ışık, kamera, renkler, atmosfer ve en-boy oranı ekleyin.",
        "Görselde olmaması gerekenler için bir negatif istem girin.",
        "\"İstem oluştur\"a tıklayın, ardından istemi ve negatif istemi ayrı ayrı kopyalayın."
      ],
      "features": [
        "Fotoğraf, sinematik, illüstrasyon, ürün, portre, manzara, mimari, fantastik, anime, 3B ve küçük resim hazır ayarları.",
        "Ana istem ve negatif istem için ayrı kopyalama düğmeleri.",
        "Boş alanlar atlanır, böylece istemde boş etiket kalmaz."
      ],
      "examples": [
        {
          "title": "Bir ürün fotoğrafı",
          "body": "Konu: paslanmaz çelik bir su şişesi. Hazır ayar: ürün fotoğrafçılığı. En-boy oranı: 1:1. Negatif istem: fazladan logolar, insanlar, dağınık masa. Sonuç bir dosya değil, stüdyo tarifidir."
        },
        {
          "title": "Bir küçük resim",
          "body": "Konu: işaretlenmiş bir PDF tutan bir kişi. Hazır ayar: YouTube küçük resmi. Kompozisyon \"tek konu, kısa bir başlık için boşluk\" olarak kalır. Başlık metnini yine siz yazarsınız."
        }
      ],
      "explanation": "Doldurulan her alan kısa bir ifadeye dönüşür. İstemin belirli bir şeyi tarif etmesi için konu zorunludur. Hazır ayar stili ve ilgili birkaç alanı değiştirir ama önceden yazdığınız konuyu silmez.",
      "limitations": "Sayfa bir istem ve isterseniz bir negatif istem yazar. Görsel dosyası vermez. Konu zorunludur. \"Yapay zekâyla oluştur\" Gemini'den daha uzun bir istem ister; bunu daha sonra bir görsel aracına yapıştırırsınız.",
      "tips": [
        "Tek bir konuyu tarif etmek kalabalığı tarif etmekten kolaydır.",
        "Işığı belirtin. \"Pencere ışığı\" ile \"sert öğle güneşi\" çok farklı görseller verir.",
        "Fazladan parmak veya bozuk yazı gibi tekrar eden hatalar için negatif istemi kullanın."
      ],
      "faqs": [
        {
          "question": "Neden görsel yok?",
          "answer": "Bu sayfa bir istem yazar ve görsel oluşturmaz. \"Yapay zekâyla oluştur\" Gemini'den daha ayrıntılı bir istem ister. Bunu görsel oluşturan bir hizmete yapıştırın."
        },
        {
          "question": "Her model istemi aynı şekilde mi okur?",
          "answer": "Hayır. Modeller ifadelere farklı tepki verir. Sonucu net bir brif olarak görün ve aracınıza göre ayarlayın."
        },
        {
          "question": "Metnim bir sunucuya gönderiliyor mu?",
          "answer": "\"İstem oluştur\" bu tarayıcıda kalır ve brifi yüklemez. \"Yapay zekâyla oluştur\" brifi ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve daha uzun bir istem döndürür. ToolStarHub bu metni kaydetmez. Ücretsiz katmanda Google bunu ürünlerini geliştirmek için kullanabilir. Sayfa yine de görsel oluşturmaz."
        },
        {
          "question": "İyi bir görsel istemi nasıl yazarım?",
          "answer": "Konuyla başlayın, ardından ortamı, ışığı, kamera veya sanat stilini, renk paletini, atmosferi ve en-boy oranını ekleyin. Önemli olan konusunda net olun, gerisini bırakın."
        },
        {
          "question": "Negatif istem nedir?",
          "answer": "Negatif istem, yazı, fazladan parmak veya bulanıklık gibi görselde olmaması gereken şeyleri listeler. Her görsel modeli bunu okumaz."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "\"İstem oluştur\" tarayıcınızda bir görsel istemi yazar. \"Yapay zekâyla oluştur\" brifinizi ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve daha zengin bir görsel istemi döndürür. Bu sayfa görsel oluşturmaz. Metin kaydedilmez.",
      "Style presets": "Stil hazır ayarları",
      "Composition": "Kompozisyon",
      "Colors": "Renkler",
      "Quality and detail": "Kalite ve ayrıntı",
      "Things you want left out of the picture.": "Görselde olmasını istemedikleriniz.",
      "Image prompt": "Görsel istemi",
      "AI image prompt": "YZ görsel istemi",
      "Photorealistic": "Fotogerçekçi",
      "Cinematic": "Sinematik",
      "Illustration": "İllüstrasyon",
      "Product photography": "Ürün fotoğrafçılığı",
      "Portrait": "Portre",
      "Landscape": "Manzara",
      "Architecture": "Mimari",
      "Fantasy": "Fantastik",
      "Anime": "Anime",
      "3D render": "3B render",
      "YouTube thumbnail": "YouTube küçük resmi",
      "Describe the subject before building the prompt.": "İstemi oluşturmadan önce konuyu tarif edin."
    },
    "note": "Oluşturulan istem, görsel modellerinin en iyi anladığı İngilizce etiketleri kullanır. Açıklamalarınızı istediğiniz dilde yazabilirsiniz."
  },
  "prompt-to-video": {
    "answer": "İstemden videoya aracı, bir video modeline yapıştırabileceğiniz bir çekim tarifi yazar. Klip oluşturmaz. \"Yapay zekâyla oluştur\" yalnızca yazılı istemi döndürür.",
    "content": {
      "about": "İstemden videoya oluşturucu tek bir çekimin tarifini yazar: karede kim veya ne var, ne hareket ediyor, kamera nasıl hareket ediyor ve çekim ne kadar sürüyor. Video oluşturmaz.",
      "howTo": [
        "Başlangıç stili olarak bir hazır ayar seçin ya da alanları boş bırakıp kendiniz yazın.",
        "Bir konu veya eylem girin. Biri zorunludur.",
        "Sahneyi, kamerayı, objektifi, ışığı, süreyi ve en-boy oranını tarif edin.",
        "Ses veya diyaloğu yalnızca çekimin ihtiyacı varsa ekleyin.",
        "\"İstem oluştur\"a tıklayıp metni kopyalayın. \"Temizle\" formu varsayılan süre dahil sıfırlar."
      ],
      "features": [
        "Sinematik, ürün reklamı, sosyal medya, YouTube, belgesel, seyahat, aksiyon, moda, doğa, tarihî sahneler ve animasyon hazır ayarları.",
        "İsteği tek bir kesintisiz çekimle sınırlayan bir kapanış satırı.",
        "Kaçınmak istediğiniz hareket veya görüntü hataları için ayrı bir negatif istem."
      ],
      "examples": [
        {
          "title": "Etrafında dönülen bir ürün",
          "body": "Konu: seramik bir kupa. Eylem: buhar yükseliyor. Hazır ayar: ürün reklamı. Süre 6 saniyede kalır. İstem dairesel bir kamera hareketi ve stüdyo ışığı ister."
        },
        {
          "title": "Sakin bir seyahat çekimi",
          "body": "Konu: bir sahil patikası. Eylem: bir kişi kameradan uzaklaşıyor. Hazır ayar: seyahat. Işığın belirsiz kalmaması için günün saatini ortam alanına yazın."
        }
      ],
      "explanation": "Video modelleri bir sahne dizisinden çok tek bir eylemle daha iyi sonuç verir. Oluşturucu ifadelerinizi sabit bir sırada tutar ve isteğin storyboard'a dönüşmemesi için \"tek kesintisiz çekim\" ekler.",
      "limitations": "Oluşturucu tek bir kesintisiz çekimi tarif eder. Video oluşturmaz veya indirmez. Bir konu ya da eylem gerekir. Süre, kamera ve diyalog yalnızca siz yazarsanız eklenir.",
      "tips": [
        "Neyin hareket ettiğini ve neyin sabit kaldığını söyleyin.",
        "\"5 saniye\" gibi bir süre \"kısa\"dan daha faydalıdır.",
        "Diyalog gerekiyorsa repliği yazın. Modelden konuşma uydurmasını istemeyin."
      ],
      "faqs": [
        {
          "question": "Bu sayfadan video indirebilir miyim?",
          "answer": "Hayır. Bu sayfa video oluşturmaz. \"Yapay zekâyla oluştur\" yalnızca Gemini'nin yazdığı bir çekim istemi döndürür. Bunu güvendiğiniz bir video aracına kopyalayın."
        },
        {
          "question": "Yalnızca eylemi tarif edersem ne olur?",
          "answer": "Bir eylem yeterlidir. Bir konu eklemek çekimi hayal etmeyi kolaylaştırır."
        },
        {
          "question": "Metnim bir sunucuya gönderiliyor mu?",
          "answer": "\"İstem oluştur\" çekimi bu sekmede yazar. \"Yapay zekâyla oluştur\" çekim alanlarını ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve yazılı bir istem döndürür. ToolStarHub bu metni kaydetmez. Ücretsiz katmanda Google bunu ürünlerini geliştirmek için kullanabilir. Hiçbir video dosyası oluşturulmaz."
        },
        {
          "question": "Yapay zekâ videosu için nasıl istem yazarım?",
          "answer": "Tek bir çekimi tarif edin: konu, eylem, ortam, kamera hareketi, objektif, ışık ve süre. Kısa ve somut istemler genellikle uzun hikâyelerden daha iyi çalışır."
        },
        {
          "question": "Bu istemleri hangi video modelleri kullanabilir?",
          "answer": "Çıktı düz metindir, bu yüzden herhangi bir metinden videoya aracına yapıştırabilirsiniz. Her model kamera ve zamanlama yönergelerini kendi yöntemiyle uygular."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "\"İstem oluştur\" tarayıcınızda bir video istemi yazar. \"Yapay zekâyla oluştur\" brifinizi ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve bir çekim istemi döndürür. Bu sayfa video oluşturmaz. Metin kaydedilmez.",
      "Video subject": "Video konusu",
      "Scene": "Sahne",
      "Action": "Eylem",
      "Camera movement": "Kamera hareketi",
      "Lens": "Objektif",
      "Visual style": "Görsel stil",
      "Duration": "Süre",
      "Audio or dialogue": "Ses veya diyalog",
      "Video prompt": "Video istemi",
      "AI video prompt": "YZ video istemi",
      "Cinematic": "Sinematik",
      "Product commercial": "Ürün reklamı",
      "Social media": "Sosyal medya",
      "YouTube": "YouTube",
      "Documentary": "Belgesel",
      "Travel": "Seyahat",
      "Fashion": "Moda",
      "Nature": "Doğa",
      "Historical": "Tarihî",
      "Animation": "Animasyon",
      "Add a subject or an action before building the prompt.": "İstemi oluşturmadan önce bir konu veya eylem girin."
    },
    "note": "Oluşturulan istem, video modellerinin en iyi anladığı İngilizce etiketleri kullanır. Açıklamalarınızı istediğiniz dilde yazabilirsiniz."
  },
  "ai-article-detector": {
    "answer": "Bu sayfa cümle uzunluğu ve tekrar eden ifadeler gibi yazım kalıplarını inceler. \"Yapay zekâyla analiz et\" de bir yazım kalıbı analizidir. Metni bir insanın mı yoksa bir modelin mi yazdığına karar vermez.",
    "content": {
      "about": "Yapay zekâ makale dedektörü, yapıştırılan taslağı inceler ve cümle uzunluğunu, bu uzunlukların ne kadar değiştiğini, kelime dağarcığının genişliğini ve tekrar eden kısa ifadeleri bildirir. Sonucun adı \"yazım kalıbı analizi\"dir ve bundan fazlasını iddia etmez.",
      "howTo": [
        "En az 40 kelime yapıştırın.",
        "Tarayıcıdaki kontrol için \"Yazıyı analiz et\"e, Gemini'nin yazım kalıbı analizi için \"Yapay zekâyla analiz et\"e tıklayın.",
        "Değerleri ve altındaki notu okuyun.",
        "Örnek çok kısaysa sayfa puan vermek yerine bunu söyler.",
        "\"Temizle\" metni sayfadan kaldırır."
      ],
      "features": [
        "Düşük, orta veya çeşitli değişkenlikle ortalama cümle uzunluğu.",
        "Farklı kelime sayısına göre bir kelime dağarcığı değerlendirmesi.",
        "Üç veya daha fazla kez geçen dört kelimelik ifadeler.",
        "Varsa kısa bir klişe ifade listesi."
      ],
      "examples": [
        {
          "title": "Kendini tekrar eden bir taslak",
          "body": "Aynı dört kelime birkaç cümlede geçiyorsa, sayısıyla birlikte listelenir. Bu, taslağın kendini tekrar ettiği anlamına gelir; bir modelin yazdığı anlamına gelmez."
        },
        {
          "title": "Kısa bir alt yazı",
          "body": "Yirmi kelime yetmez. Araç, tek bir cümlenin kalıp sayılmaması için 40 kelime ister."
        }
      ],
      "explanation": "Cümle değişkenliği, uzunlukların dağılımını ortalamayla karşılaştırır. Kelime dağarcığı, farklı kelimeleri toplamla karşılaştırır. İki değer de olağan düzeltmelerle değişir. Özenli bir insan taslağı düzenli görünebilir, üretilmiş bir taslak çeşitli görünebilir. Sonuç bunu da belirtir.",
      "limitations": "Tarayıcıdaki kontrol en az 40 kelime ister. Cümle uzunluğunu, kelime dağarcığının genişliğini ve tekrar eden ifadeleri bildirir. Yüzde ya da taslağı bir modelin yazdığına dair bir hüküm vermez. \"Yapay zekâyla analiz et\" aynı türden bir açıklama için metni Gemini'ye gönderir.",
      "tips": [
        "Başlık değil, tam bir paragraf kullanın.",
        "Tekrar eden ifadeleri düzeltme ipucu olarak görün. Okuyucuların fark edeceği yerlerde çıkarın.",
        "Bu değerlendirmeleri birini model kullanmakla suçlamak için kullanmayın."
      ],
      "faqs": [
        {
          "question": "Bir metni yapay zekânın yazıp yazmadığını söyleyebilir mi?",
          "answer": "Kesin olarak hayır. Kalıp kontrolleri iki yönde de yanılır. Sonuç taslağı tarif eder; bir hüküm değildir."
        },
        {
          "question": "Neden yüzde yok?",
          "answer": "Bir yüzde kanıt gibi görünürdü. \"Yazıyı analiz et\" ve \"Yapay zekâyla analiz et\" ikisi de kalıpları tarif eder. Hiçbiri metni kimin yazdığını bildiğini iddia etmez."
        },
        {
          "question": "Metnim bir sunucuya gönderiliyor mu?",
          "answer": "\"Yazıyı analiz et\" kalıpları bu sekmede sayar ve taslağı yüklemez. \"Yapay zekâyla analiz et\" taslağı yazılı bir açıklama almak için ToolStarHub üzerinden Google'ın Gemini API'sine gönderir. ToolStarHub bu metni kaydetmez. Ücretsiz katmanda Google bunu ürünlerini geliştirmek için kullanabilir."
        },
        {
          "question": "Yapay zekâ dedektörleri doğru mu?",
          "answer": "Hiçbir dedektör bir metni kimin yazdığını kanıtlayamaz. Kalıba dayalı puanlar insan yazısını işaretleyebilir ve düzenlenmiş yapay zekâ yazısını kaçırabilir; bu yüzden her sonucu kanıt değil, gözden geçirme nedeni olarak görün."
        },
        {
          "question": "Bu araç hangi kalıplara bakar?",
          "answer": "Cümle uzunluğunu, kelime dağarcığının ne kadar çeşitli olduğunu ve tekrar eden ifadeleri bildirir; böylece taslağın nerede düz veya tekrarlı durduğunu görebilirsiniz."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "\"Yazıyı analiz et\" kalıpları tarayıcınızda kontrol eder. \"Yapay zekâyla analiz et\" taslağı yazım kalıbı analizi için ToolStarHub üzerinden Google'ın Gemini API'sine gönderir. Hiçbir sonuç metni kimin yazdığına karar veremez. Taslak kaydedilmez.",
      "Article or draft": "Makale veya taslak",
      "Paste at least 40 words.": "En az 40 kelime yapıştırın.",
      "Analyze writing": "Yazıyı analiz et",
      "Analyze with AI": "Yapay zekâyla analiz et",
      "Avg. sentence": "Ort. cümle",
      "{0} words": "{0} kelime",
      "Sentence variation": "Cümle değişkenliği",
      "Vocabulary": "Kelime dağarcığı",
      "Writing pattern analysis": "Yazım kalıbı analizi",
      "No four-word phrase repeats three or more times.": "Hiçbir dört kelimelik ifade üç veya daha fazla kez geçmiyor.",
      "Familiar stock phrases found:": "Bulunan klişe ifadeler:",
      "AI writing analysis": "YZ yazım analizi",
      "Paste some writing first.": "Önce biraz metin yapıştırın.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "En az 40 kelime yapıştırın. Kısa bir parça kalıp göstermez.",
      "Low": "Düşük",
      "Moderate": "Orta",
      "Varied": "Çeşitli",
      "Narrow": "Dar",
      "Mixed": "Karışık",
      "Broad": "Geniş",
      "\"{0}\" appears {1} times": "\"{0}\" {1} kez geçiyor",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Bunlar yazım kalıplarıdır, metni kimin yazdığının kanıtı değildir. Benzer kalıplar düzeltilmiş insan taslaklarında da üretilmiş taslaklarda da görülür. Bir dedektör iki yönde de yanılabilir."
    },
    "note": "Tarayıcıdaki kontrol İngilizce kelime ve klişe listeleri kullanır, bu yüzden en iyi İngilizce metinlerde çalışır. \"Yapay zekâyla analiz et\" Türkçe metinlerle de çalışır."
  },
  "ai-article-compressor": {
    "answer": "Makale sıkıştırıcı, dolgu ifadeleri ve tekrar eden cümleleri çıkararak bir taslağı kısaltır. \"Yapay zekâyla sıkıştır\" Gemini'den ana fikri korumasını ister. Yayımlamadan önce sonucu kontrol edin.",
    "content": {
      "about": "Yapay zekâ makale sıkıştırıcı uzun bir taslağı kısaltır. Hafif sıkıştırma bazı dolambaçlı ifadeleri değiştirir ve boşlukları düzeltir. Orta ve güçlü sıkıştırma tekrar eden cümleleri de çıkarır. Sonucu okuyun: bir cümle kaybolduğunda anlam değişebilir.",
      "howTo": [
        "Makaleyi yapıştırın. En az 12 kelime olmalıdır.",
        "Hafif, orta veya güçlü sıkıştırmayı seçin.",
        "Tarayıcıdaki kurallar için \"Makaleyi kısalt\"a, Gemini'nin kısaltması için \"Yapay zekâyla sıkıştır\"a tıklayın.",
        "Kelime sayılarını karşılaştırın ve hâlâ kastettiğinizi söylüyorsa kısa taslağı kopyalayın.",
        "\"Temizle\" iki kutuyu da boşaltır ve düzeyi ortaya döndürür."
      ],
      "features": [
        "Hafif bir geçişin cümle silmemesi için üç düzey.",
        "Öncesi ve sonrası kelime sayıları.",
        "\"in order to\" yerine \"to\" gibi sabit değişiklikler.",
        "Orta ve güçlü düzeyde yinelenen cümlelerin kaldırılması."
      ],
      "examples": [
        {
          "title": "Dolambaçlı bir cümle",
          "body": "\"In order to finish the form, you need to sign it\" her düzeyde \"to finish the form, you need to sign it\" olur."
        },
        {
          "title": "Aynı cümle iki kez",
          "body": "Orta ve güçlü düzey ilkini tutar ve sonraki birebir tekrarı çıkarır. Hafif düzey ikisini de bırakır."
        }
      ],
      "explanation": "\"Makaleyi kısalt\" sabit bir değişiklik listesi kullanır. Güçlü sıkıştırma, önceki bir cümleyle aynı altı kelimeyle başlayan sonraki cümleyi de atlar. \"Yapay zekâyla sıkıştır\" Gemini'den makaleyi seçilen düzeyde kısaltmasını ister. Güvenmeden önce iki sonucu da okuyun.",
      "limitations": "Hafif sıkıştırma sabit bir dolambaçlı ifade listesini değiştirir. Orta ve güçlü düzey sonraki birebir tekrarları da çıkarır; güçlü düzey aynı altı kelimeyle başlayan sonraki bir cümleyi atlayabilir. Taslak en az 12 kelime olmalıdır. Sıkıştırma, tutmak istediğiniz bir cümleyi silebilir.",
      "tips": [
        "Makale zaten öz ise hafif düzeyle başlayın.",
        "Dağınık bir ilk taslakta güçlü düzeyi kullanın, ardından önemli cümleleri geri ekleyin.",
        "Bu, bir taslağın nasıl üretildiğini gizlemenin bir yolu değildir."
      ],
      "faqs": [
        {
          "question": "Sıkıştırılmış metin yapay zekâ dedektöründen kaçar mı?",
          "answer": "Hayır. Araç bunu denemez ve sonucun belirli bir yazar türünün elinden çıkmış gibi görüneceğini iddia etmez."
        },
        {
          "question": "Ana fikrim korunur mu?",
          "answer": "\"Makaleyi kısalt\" kelimelerin çoğunu tutar, biraz dolgu ve tekrarı çıkarır. \"Yapay zekâyla sıkıştır\" Gemini'den ana fikri ve önemli bilgileri korumasını ister. Güvenmeden önce kısa taslağı okuyun."
        },
        {
          "question": "Metnim bir sunucuya gönderiliyor mu?",
          "answer": "\"Makaleyi kısalt\" bu sekmede çalışır ve taslağı yüklemez. \"Yapay zekâyla sıkıştır\" taslağı ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve daha kısa bir sürüm döndürür. ToolStarHub bu metni kaydetmez. Ücretsiz katmanda Google bunu ürünlerini geliştirmek için kullanabilir."
        },
        {
          "question": "Bir makaleyi anlamını kaybetmeden nasıl kısaltırım?",
          "answer": "Önce dolambaçlı ifadeleri, sonra tekrar eden noktaları, ardından hiçbir şey katmayan cümlelerin tamamını çıkarın. Kullanmadan önce sonucu özgün metinle karşılaştırın."
        },
        {
          "question": "Hangi sıkıştırma düzeyini seçmeliyim?",
          "answer": "Hafif yalnızca dolambaçlı ifadeleri değiştirir. Orta tekrarları da çıkarır. Güçlü aynı şekilde başlayan cümleleri atlayabilir, bu yüzden onu daha dikkatli kontrol edin."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "\"Makaleyi kısalt\" tarayıcınızda sabit kurallar uygular. \"Yapay zekâyla sıkıştır\" makaleyi ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve daha kısa bir taslak döndürür. Makale kaydedilmez. Yayımlamadan önce sonucu kontrol edin.",
      "Article": "Makale",
      "Compression": "Sıkıştırma",
      "Light compression": "Hafif sıkıştırma",
      "Medium compression": "Orta sıkıştırma",
      "Strong compression": "Güçlü sıkıştırma",
      "Shorten article": "Makaleyi kısalt",
      "Compress with AI": "Yapay zekâyla sıkıştır",
      "Copy shorter draft": "Kısa taslağı kopyala",
      "Shorter draft": "Kısa taslak",
      "The shorter draft will appear here.": "Kısa taslak burada görünecek.",
      "AI shorter draft": "YZ kısa taslağı",
      "Copy AI draft": "YZ taslağını kopyala",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "Önce {0} kelime, sonra {1} kelime. Kullanmadan önce kısa taslağı okuyun.",
      "Paste an article first.": "Önce bir makale yapıştırın.",
      "Paste a longer article. A few words is not enough to shorten.": "Daha uzun bir makale yapıştırın. Birkaç kelime kısaltmak için yetmez.",
      "Nothing was left after compression. Try a lighter setting.": "Sıkıştırmadan sonra hiçbir şey kalmadı. Daha hafif bir düzey deneyin."
    },
    "note": "\"Makaleyi kısalt\" İngilizce bir ifade listesi kullanır, bu yüzden Türkçe metinleri pek değiştirmez. \"Yapay zekâyla sıkıştır\" Türkçe metinlerle de çalışır."
  },
  "ai-text-humanizer": {
    "answer": "Yapay zekâ metin insanlaştırıcı, sabit bir listeye göre tarayıcınızda klişe ifadeleri değiştirir. \"Yapay zekâyla insanlaştır\" taslağı ToolStarHub üzerinden Google'ın Gemini API'sine gönderir. Araç bir yapay zekâ dedektörünü atlatmaya çalışmaz ve sonucun belirli bir yazar türünün elinden çıkmış gibi görüneceğini iddia etmez.",
    "content": {
      "about": "Yapay zekâ metin insanlaştırıcı, sabit bir klişe ifade listesini daha sade ifadelerle değiştirir. \"Metni yeniden yaz\" bunu bu sekmede yapar. \"Yapay zekâyla insanlaştır\" taslağı ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve yeniden yazılmış bir sürüm döndürür. Metin kaydedilmez. Kullanmadan önce sonucu kontrol edin. Hiçbir sonuç, bir taslağın nasıl üretildiğini gizlemenin bir yolu değildir.",
      "howTo": [
        "Taslağı yapıştırın. En az 12 kelime ve en fazla 4.000 karakter olmalıdır.",
        "Tarayıcıdaki ifade listesi için \"Metni yeniden yaz\"a, Gemini'nin yeniden yazması için \"Yapay zekâyla insanlaştır\"a tıklayın.",
        "Sonucu kontrol edin. Bir silmeden sonra gelen kelime küçük harfle kalabilir.",
        "Hâlâ kastettiğinizi söylüyorsa yeniden yazılan sürümü kopyalayın.",
        "\"Temizle\" kutuyu ve yerel sonucu boşaltır."
      ],
      "features": [
        "Tarayıcınızda uygulanan sabit bir klişe ifade listesi.",
        "\"Yapay zekâyla insanlaştır\" için ayrı bir sonuç.",
        "İki düğme için de 4.000 karakter sınırı.",
        "Cümle veya yinelenen cümle silme yok."
      ],
      "examples": [
        {
          "title": "Kalıp girişler",
          "body": "\"In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.\" ifadesi \"here is the setup. you can use a short checklist.\" olur."
        },
        {
          "title": "Tekrar eden bir cümle",
          "body": "\"The form is short. The form is short. Please sign it before noon today and bring a pen.\" iki kopyayı da tutar. Bu geçiş tekrar eden cümleleri silmez."
        }
      ],
      "explanation": "\"Metni yeniden yaz\" sabit bir listeyi bir kez tarar. Bir silmeden sonra büyük harfi geri koymaz ve tipografik kesme işareti eşleşmez. \"Yapay zekâyla insanlaştır\" Gemini'den aynı bilgileri, adları ve sayıları korumasını ve taslağı bir özete indirgememesini ister. Kullanmadan önce iki sonucu da kontrol edin.",
      "limitations": "\"Metni yeniden yaz\" en az 12 kelime ister; iki düğme de en fazla 4.000 karakter kabul eder. Yerel geçiş yalnızca listedeki ifadeleri değiştirir. Tipografik kesme işareti eşleşmez. Araç bir yapay zekâ dedektörünü atlatmaya çalışmaz ve sonucun belirli bir yazar türünün elinden çıkmış gibi görüneceğini iddia etmez.",
      "tips": [
        "Kullanmadan önce sonucu kontrol edin. Silinen bir ifadeden sonra gelen kelime küçük harfle kalabilir.",
        "Tekrar eden bir cümle yerinde kalır. Bu geçiş onu silmez.",
        "Hiçbir sonuç, bir taslağın nasıl üretildiğini gizlemenin bir yolu değildir."
      ],
      "faqs": [
        {
          "question": "Yapay zekâ metin insanlaştırıcı ücretsiz mi?",
          "answer": "Evet. Burada ödeme yapmadan veya hesap açmadan bir taslağı yeniden yazabilirsiniz. \"Metni yeniden yaz\" bu sekmede kalır. \"Yapay zekâyla insanlaştır\" ise taslağı yine ToolStarHub üzerinden Google'ın Gemini API'sine gönderir."
        },
        {
          "question": "Bu bir yapay zekâ dedektörünü atlatır mı?",
          "answer": "Hayır. Araç bunu denemez ve sonucun belirli bir yazar türünün elinden çıkmış gibi görüneceğini iddia etmez."
        },
        {
          "question": "Ana fikrim korunur mu?",
          "answer": "\"Metni yeniden yaz\" klişe listesinde olmayan tüm kelimeleri tutar. \"Yapay zekâyla insanlaştır\" aynı bilgileri, adları ve sayıları korumak ve taslağı özetlememek üzere yönlendirilir. Kullanmadan önce sonucu kontrol edin."
        },
        {
          "question": "Metnim bir sunucuya gönderiliyor mu?",
          "answer": "\"Metni yeniden yaz\" bu sekmede çalışır ve taslağı yüklemez. \"Yapay zekâyla insanlaştır\" taslağı ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve yeniden yazılmış bir sürüm döndürür. ToolStarHub bu metni kaydetmez. Ücretsiz katmanda Google bunu ürünlerini geliştirmek için kullanabilir."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "\"Metni yeniden yaz\" tarayıcınızda sabit bir klişe ifade listesi kullanır. \"Yapay zekâyla insanlaştır\" metni ToolStarHub üzerinden Google'ın Gemini API'sine gönderir ve yeniden yazılmış bir sürüm döndürür. Metin kaydedilmez. Kullanmadan önce sonucu kontrol edin. Hiçbir sonuç, bir taslağın nasıl üretildiğini gizlemenin bir yolu değildir.",
      "Draft": "Taslak",
      "Rewrite text": "Metni yeniden yaz",
      "Humanize with AI": "Yapay zekâyla insanlaştır",
      "Copy rewritten draft": "Yeniden yazılan taslağı kopyala",
      "Rewritten draft": "Yeniden yazılan taslak",
      "The rewritten draft will appear here.": "Yeniden yazılan taslak burada görünecek.",
      "AI rewrite": "YZ ile yeniden yazım",
      "Copy AI rewrite": "YZ yeniden yazımını kopyala",
      "Paste a draft first.": "Önce bir taslak yapıştırın.",
      "That text is too long for this rewrite. Shorten it and try again.": "Bu metin bu yeniden yazım için çok uzun. Kısaltıp yeniden deneyin.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Daha uzun bir taslak yapıştırın. Birkaç kelime yeniden yazmak için yetmez.",
      "Nothing was left after the rewrite. Try different wording.": "Yeniden yazımdan sonra hiçbir şey kalmadı. Farklı bir ifade deneyin."
    },
    "note": "\"Metni yeniden yaz\" İngilizce bir klişe listesi kullanır, bu yüzden Türkçe metinleri pek değiştirmez. \"Yapay zekâyla insanlaştır\" Türkçe metinlerle de çalışır."
  }
};

export default data;
