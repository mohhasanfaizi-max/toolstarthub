import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Kelime sayacı, yapıştırdığınız metindeki kelime, karakter ve cümle sayısını ve basit bir okuma süresi tahminini gösterir.",
    "content": {
      "about": "Yapıştırdığınız metnin kelime, karakter, cümle, paragraf sayısını ve yaklaşık okuma süresini görün. Bir fotoğraf açıklamasını, özeti veya kısa bir gönderiyi kontrol ederken toplamlar siz yazdıkça güncellenir. Okuma süresi dakikada yaklaşık 225 kelime varsayar; bu ölçülmüş bir hız değil, bir tahmindir.",
      "howTo": [
        "Metni kutuya yapıştırın veya yazın.",
        "Kelime, karakter, cümle ve paragraf sayıları siz yazdıkça güncellenir.",
        "Sayacı denemek için “Örnek metin”, kutuyu boşaltmak için “Temizle”, metninizi kopyalamak için “Kopyala” düğmesini kullanın."
      ],
      "examples": [
        {
          "title": "Kısa bir cümle",
          "body": "“Hello world.” 2 kelime ve 1 cümledir."
        },
        {
          "title": "Boş satırlar",
          "body": "Boş bir satırla ayrılan metin iki paragraf sayılır."
        }
      ],
      "explanation": "Kelimeler, boşluk içermeyen karakter gruplarıdır. Karakterler Unicode kod noktalarıdır; harfler, noktalama işaretleri ve çoğu emoji birer karakter sayılır. Cümleler . ! ? ve … işaretlerinden bölünür. Paragraflar, satır sonlarıyla ayrılan boş olmayan bloklardır. Okuma süresi dakikada yaklaşık 225 kelime kullanır.",
      "limitations": "Kelimeler boşluk içermeyen karakter gruplarıdır ve cümleler . ! ? ve … işaretlerinden bölünür. Okuma süresi dakikada yaklaşık 225 kelime varsayar; bu ölçülmüş bir okuma hızı değil, bir tahmindir. Sayaç dil bilgisini denetlemez ve yazarı belirlemez.",
      "faqs": [
        {
          "question": "Kelime sayacı ücretsiz mi?",
          "answer": "Evet. Kelime, karakter, cümle ve paragraf saymak ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Metnim bir yere yükleniyor mu?",
          "answer": "Hayır. Sayım tarayıcınızda yapılır. Metin Tools Star Hub’a gönderilmez ve saklanmaz."
        },
        {
          "question": "Fazladan boşluklar nasıl sayılır?",
          "answer": "Art arda gelen boşluklar fazladan kelime oluşturmaz, ancak karakter olarak sayılır."
        },
        {
          "question": "5 dakikalık bir konuşma kaç kelimedir?",
          "answer": "Konuşma hızı değişir, ancak dakikada 130 ila 150 kelime yaygın bir ölçüdür. Bu yüzden 5 dakikalık bir konuşma çoğunlukla yaklaşık 650 ila 750 kelimedir."
        },
        {
          "question": "Okuma süresi nasıl tahmin edilir?",
          "answer": "Kelime sayısı dakikada yaklaşık 225 kelimeye bölünür. Bu, ortalama bir okuyucu için yapılmış bir tahmindir, ölçülmüş bir okuma hızı değildir."
        }
      ]
    },
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "Sayım tarayıcınızda yapılır. Hiçbir şey sunucuya gönderilmez.",
      "Paste or type text here...": "Metni buraya yapıştırın veya yazın…",
      "Sample text": "Örnek metin",
      "Reading time": "Okuma süresi",
      "0 min": "0 dk",
      "{0} min": "{0} dk"
    }
  },
  "character-counter": {
    "answer": "Karakter sayacı, siz yazarken karakterleri, kelimeleri ve satırları sayar; ana toplama boşluklar dahildir.",
    "content": {
      "about": "Karakterleri, kelimeleri ve satırları sayın; boşlukları hariç tutan ayrı bir toplam da görün. Bir form, sosyal medya gönderisi veya meta açıklamada karakter sınırı olduğunda işe yarar. Bir emoji tek karakter sayılır ve kelime sayacından farklı olarak bu sayfa metni cümlelere ayırmaz.",
      "howTo": [
        "Metni kutuya yazın veya yapıştırın.",
        "Karakter, kelime ve satır sayıları anında güncellenir.",
        "İşiniz bitince karakter sayısını kopyalayın veya kutuyu temizleyin."
      ],
      "examples": [
        {
          "title": "Emoji ve harfler",
          "body": "“A😀” 2 karakterdir: bir harf ve bir emoji."
        },
        {
          "title": "Satırlar",
          "body": "Satır sonu yeni bir satır başlatır. Boş kutu 0 satırdır."
        }
      ],
      "explanation": "Karakterler Unicode kod noktası olarak sayılır. Boşluklar ana toplama dahildir, “boşluksuz” toplama dahil değildir. Satırlar, sondaki boş satır da dahil olmak üzere kutudaki satır sonlarını izler.",
      "limitations": "Bir karakter bir Unicode kod noktasıdır; bu yüzden tek bir emoji, birkaç simgeden oluşsa bile bir sayılır. Boşluklar ana toplamda kalır, boşluksuz toplamdan çıkar. Cümle sınırları burada algılanmaz.",
      "faqs": [
        {
          "question": "Karakter sayacı ücretsiz mi?",
          "answer": "Evet. Ödeme yapmadan veya hesap açmadan, yazarken karakter, kelime ve satır sayabilirsiniz."
        },
        {
          "question": "Metin bilgisayarımdan çıkıyor mu?",
          "answer": "Hayır. Metin tarayıcınızda kalır ve hiçbir sunucuya gönderilmez."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Sayımlar bu sekmede oluşturulur. Kutuyu temizlemek metni sayfadan kaldırır ve metin yerel depolamaya yazılmaz."
        },
        {
          "question": "Boşluklar karakter sayılır mı?",
          "answer": "Evet, ana toplamda sayılır. Sayaç ayrıca bazı formların ve ödevlerin istediği boşluksuz ikinci bir toplam da gösterir."
        },
        {
          "question": "Bir emoji kaç karakterdir?",
          "answer": "Bu sayfada tek bir emoji bir Unicode karakteri sayılır. Bazı uygulamalar belirli emojileri iki veya daha fazla sayar, bu yüzden onların sınırı biraz farklı olabilir."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "Sayılar siz yazdıkça güncellenir. Metin tarayıcınızda kalır.",
      "Type or paste text...": "Metni yazın veya yapıştırın…",
      "Copy count": "Sayıyı kopyala"
    }
  },
  "case-converter": {
    "answer": "Büyük/küçük harf dönüştürücü, metni büyük harf, küçük harf, başlık biçimi, camelCase ve benzeri stiller arasında değiştirir.",
    "content": {
      "about": "Metni büyük harf, küçük harf, başlık biçimi, cümle biçimi, camelCase, PascalCase, snake_case ve kebab-case arasında değiştirin. Tanımlayıcıları yeniden adlandıran geliştiriciler ve başlık düzelten editörler biçimi tek adımda değiştirebilir. Cümle biçimi İngilizce noktalamayı izler; başka dillerin büyük harf kurallarını uygulamaz. Türkçedeki i/İ ve ı/I ayrımı da korunmaz.",
      "howTo": [
        "Metni kutuya yapıştırın.",
        "Bir biçim seçin. Sonuç anında güncellenir.",
        "Sonucu kopyalayın veya iki kutuyu da temizleyin."
      ],
      "examples": [
        {
          "title": "Başlık biçimi",
          "body": "“hello world”, “Hello World” olur. Her kelime büyük harfle başlar."
        },
        {
          "title": "camelCase",
          "body": "“Hello world example”, helloWorldExample olur."
        }
      ],
      "explanation": "Büyük ve küçük harf dönüşümü İngilizce yerel ayarını kullanır. Başlık biçimi her kelimenin ilk harfini büyütür. Cümle biçimi metni küçük harfe çevirir, ardından metnin başını ve . ! ? veya … sonrasındaki harfleri büyütür; bu, her dil için bir dil bilgisi denetleyicisi değil, İngilizce odaklı basit bir kuraldır. camelCase, PascalCase, snake_case ve kebab-case harf ve rakam gruplarından oluşturulur.",
      "limitations": "Cümle biçimi İngilizce noktalamayı izler, diğer dillerin büyük harf kurallarını değil. camelCase, snake_case ve kebab-case harf ve rakam gruplarını korur, aralarındaki noktalamayı atar.",
      "faqs": [
        {
          "question": "Dönüştürücü ücretsiz mi?",
          "answer": "Evet. Metni büyük harf, küçük harf, başlık biçimi ve kod stilleri arasında değiştirmek ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Cümle biçimi her dilde çalışır mı?",
          "answer": "Hayır. Temel bir İngilizce noktalama düzenini izler, dile özgü kuralları uygulamaz."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Yapıştırdığınız metin bu sekmede dönüştürülür. Yüklenmez ve yerel depolamaya yazılmaz."
        },
        {
          "question": "Başlık düzeni ile cümle düzeni arasındaki fark nedir?",
          "answer": "Başlık düzeni, İngilizce manşetlerde olduğu gibi her kelimenin ilk harfini büyük yapar. Cümle düzeni ise normal yazıda olduğu gibi yalnızca her cümlenin ilk harfini büyük yapar."
        },
        {
          "question": "camelCase, snake_case ve kebab-case nedir?",
          "answer": "Bunlar kodda kullanılan adlandırma stilleridir. camelCase kelimeleri büyük harflerle birleştirir (myVariableName), snake_case alt çizgi kullanır (my_variable_name), kebab-case ise kısa çizgi kullanır (my-variable-name)."
        }
      ]
    },
    "ui": {
      "Paste text to convert": "Dönüştürülecek metni yapıştırın",
      "Case": "Biçim",
      "Result ({0})": "Sonuç ({0})",
      "UPPERCASE": "BÜYÜK HARF",
      "lowercase": "küçük harf",
      "Title Case": "Başlık Biçimi",
      "Sentence case": "Cümle biçimi"
    }
  },
  "lorem-ipsum-generator": {
    "answer": "Lorem ipsum oluşturucu, düzenler ve taslaklar için yer tutucu paragraflar, cümleler veya kelimeler üretir.",
    "content": {
      "about": "Sabit bir Latince kelime listesinden yer tutucu paragraf, cümle veya kelime üretin. Tasarımcılar, gerçek metin henüz yazılmadığında bir maketi doldurmak için kullanır. İlk paragraf klasik açılış satırıyla başlar ve bir istek 20 paragraf, 50 cümle veya 500 kelimede durur.",
      "howTo": [
        "Paragraf, cümle veya kelime seçin.",
        "Gösterilen sınırlar içinde bir miktar belirleyin ve “Oluştur”a basın.",
        "Metni kopyalayın, yeniden oluşturun veya varsayılanlara sıfırlayın."
      ],
      "examples": [
        {
          "title": "Üç paragraf",
          "body": "İlk paragraf klasik “Lorem ipsum dolor sit amet…” satırıyla başlar, ardından yerel bir kelime listesinden karıştırılmış kelimelerle devam eder."
        },
        {
          "title": "Elli kelime",
          "body": "Bir maketteki kısa yer tutucu metin için kullanışlıdır."
        }
      ],
      "explanation": "Lorem ipsum, gerçek metin olmadan düzeni değerlendirmek için sahte metin olarak kullanılan karışık Latincedir. Bu oluşturucu yerel bir kelime listesi ve tarayıcının kriptografik olarak güçlü rastgele değerlerini kullanır. Harici bir API çağırmaz. Sayfanın kullanılabilir kalması için miktar sınırlıdır.",
      "limitations": "Çıktı, sabit bir kelime listesinden gelen yer tutucu Latincedir; çeviri değildir ve gerçek bir ürün için metin değildir. Paragraflar 20’de, cümleler 50’de, kelimeler 500’de durur.",
      "faqs": [
        {
          "question": "Lorem ipsum oluşturucu ücretsiz mi?",
          "answer": "Evet. Yer tutucu paragraf, cümle veya kelime üretmek ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Metin internetten mi indiriliyor?",
          "answer": "Hayır. Kelimeler bu sayfada saklanır ve tarayıcınızda bir araya getirilir."
        },
        {
          "question": "Neden bir üst sınır var?",
          "answer": "Çok büyük bloklar bir sekmeyi dondurabilir. Paragraflar 20’de, cümleler 50’de, kelimeler 500’de durur."
        },
        {
          "question": "Lorem ipsum ne demektir?",
          "answer": "Lorem ipsum, yer tutucu metin olarak kullanılan karıştırılmış Latincedir. Gerçek bir metne benzediği için, okuyucular kelimelere odaklanmadan bir sayfa düzeni değerlendirilebilir."
        },
        {
          "question": "Yer tutucu metni ne zaman kullanmalıyım?",
          "answer": "Taslak tasarımlarda, şablonlarda ve yazı tipi denemelerinde. Sayfa yayına girmeden önce gerçek metinle değiştirin, çünkü yer tutucu metin ziyaretçilere hiçbir şey anlatmaz."
        }
      ]
    },
    "ui": {
      "Quantity": "Miktar",
      "Enter a whole number from {0} to {1}.": "{0} ile {1} arasında bir tam sayı girin.",
      "Enter a quantity.": "Bir miktar girin.",
      "Choose between {0} and {1} {2}.": "{0} ile {1} arasında {2} seçin.",
      "paragraphs": "paragraf",
      "sentences": "cümle",
      "words": "kelime",
      "A secure random source is not available in this browser.": "Bu tarayıcıda güvenli bir rastgele kaynak yok."
    }
  },
  "text-diff": {
    "answer": "Metin karşılaştırıcı, orijinal ve değiştirilmiş metni cihazınızda karşılaştırır; eklenen, silinen ve değişmeyen satırları veya kelimeleri işaretler.",
    "content": {
      "about": "Bir orijinal ile bir düzeltmeyi yapıştırın ve satır ya da kelime bazında karşılaştırın. Aynı paragrafın iki taslağını kontrol ederken satırın tamamı değiştiyse satır modunu, bir cümle yerinde düzenlendiyse kelime modunu kullanın. Her taraf 200.000 karakterin ve 4.000 satır ya da kelimenin altında kalmalıdır.",
      "howTo": [
        "Orijinal metni sola, değiştirilmiş metni sağa yapıştırın.",
        "Satır veya kelime karşılaştırmasını seçin.",
        "“Karşılaştır”a basın. Eklenen, silinen ve değişmeyen bloklar yalnızca renkle değil, etiketle de gösterilir.",
        "Başka bir düzenleyicide gerekirse düz metin farkını kopyalayın. İşiniz bitince iki tarafı da temizleyin."
      ],
      "examples": [
        {
          "title": "Bir paragrafın iki sürümü",
          "body": "Satır modu değişen satırların tamamını vurgular. Bir cümle yerinde düzenlendiyse kelime modu daha uygundur."
        },
        {
          "title": "Aynı metinler",
          "body": "İki taraf aynıysa özet yalnızca değişmeyen içeriği gösterir; eklenen veya silinen blok olmaz."
        }
      ],
      "explanation": "Karşılaştırma tarayıcınızda yapılır. Metin hiçbir yere gönderilmez ve taslaklar yerel depolamada tutulmaz. Farklar React metin düğümleri olarak gösterilir, bu yüzden içerik HTML enjekte edemez. Sekmenin yanıt vermeye devam etmesi için çok büyük girdiler reddedilir.",
      "limitations": "Moda bağlı olarak her taraf 200.000 karakterin ve 4.000 satır ya da kelimenin altında kalmalıdır. Görünüm eklenen, silinen ve değişmeyen blokları etiketler. Dosyaları birleştirmez ve Word belgesi açmaz.",
      "faqs": [
        {
          "question": "Metin karşılaştırıcı ücretsiz mi?",
          "answer": "Evet. İki metni satır satır veya kelime kelime karşılaştırmak ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "İki metin dosyasını nasıl karşılaştırırım?",
          "answer": "Her sürümü bir panele yapıştırın, Satırlar veya Kelimeler’i seçin, ardından “Karşılaştır”a basın. Sonucun +/- görünümünü kopyalayabilirsiniz."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. İki panel bu sekmede karşılaştırılır. Metin bir sunucuya gönderilmez ve yerel depolamaya kaydedilmez."
        },
        {
          "question": "Diff nedir?",
          "answer": "Diff, bir metnin iki sürümü arasındaki farkların listesidir: neyin eklendiği, neyin çıkarıldığı ve neyin aynı kaldığı."
        },
        {
          "question": "Satır modunu mu, kelime modunu mu kullanmalıyım?",
          "answer": "Satırların tamamen değiştiği kod, liste ve dosyalar için satır modunu kullanın. Bir cümle yerinde düzenlendiyse kelime modunu kullanın."
        }
      ]
    },
    "ui": {
      "Original": "Orijinal",
      "Modified": "Değiştirilmiş",
      "Compare": "Karşılaştır",
      "Copy diff": "Farkı kopyala",
      "Both sides are empty.": "İki taraf da boş.",
      "The two texts are the same.": "İki metin aynı.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "Karşılaştırılan metin HTML olarak değil, düz metin olarak gösterilir. Renk yalnızca bir ipucudur; her blok ayrıca Eklendi, Kaldırılan veya Değişmedi olarak etiketlenir.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "İki taslak bu sekmede karşılaştırılır. Metin bir sunucuya gönderilmez.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Karşılaştırmanın akıcı kalması için her tarafı 200.000 karakterin altında tutun.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Bu karşılaştırma en fazla {0} {1} işler. Girdiyi kısaltın veya bölün.",
      "lines": "satır",
      "words": "kelime"
    }
  },
  "duplicate-line-remover": {
    "answer": "Yinelenen satır temizleyici her satırın ilk geçtiği yeri tutar ve sonraki tekrarları atar; boşluk kırpma ve büyük/küçük harf seçenekleri vardır.",
    "content": {
      "about": "Her satırın ilk kopyasını tutun ve tekrarları yapıştırdığınız sırayla atın. Aynı satırın birden fazla geçtiği bir e-posta listesi veya günlük için kullanışlıdır. Büyük/küçük harf duyarsız eşleştirme ve kırpma açıkken apple ve Apple tek satır olur ve ilk yazım korunur.",
      "howTo": [
        "Çok satırlı metni yapıştırın. Aracı çalıştırana kadar girdi değişmez.",
        "İsterseniz büyük/küçük harfi yok sayın, karşılaştırmadan önce boşlukları kırpın veya boş satırları atın.",
        "“Yinelenenleri kaldır”a basın. Her satırın ilk geçtiği yer sırasıyla korunur.",
        "Benzersiz listeyi kopyalayın veya indirin. İşiniz bitince iki kutuyu da temizleyin."
      ],
      "examples": [
        {
          "title": "Bir e-posta listesi",
          "body": "apple, Apple, apple; kırpma ve büyük/küçük harf duyarsız eşleştirmeyle ilk yapıştırdığınız yazımla tek bir apple olur."
        },
        {
          "title": "Boş satırlar",
          "body": "Yalnızca boş olmayan benzersiz satırlar istiyorsanız “Boş satırları kaldır”ı açın. Aksi halde boş satır da diğerleri gibi bir değerdir."
        }
      ],
      "explanation": "Her satır, karşılaştırma seçeneklerine göre bir anahtar alır. Bir anahtar ilk kez göründüğünde satır tutulur; sonraki tekrarlar kaldırılan yinelenenler olarak sayılır. İlk geçişlerin sırası korunur.",
      "limitations": "Eşleşen ilk satır, yapıştırdığınız sırayla tutulur. Büyük/küçük harf, kırpma ve boş satır seçenekleri neyin aynı satır sayılacağını belirler. Sonraki tekrarlar sayılır ve atılır. 400.000 karakterden fazlası reddedilir. Giriş kutusunun kendisi yeniden yazılmaz.",
      "faqs": [
        {
          "question": "Araç ücretsiz mi?",
          "answer": "Evet. İlk kopyayı tutarak tekrarlanan satırları kaldırmak ücretsizdir ve kayıt gerekmez."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Yinelenenleri kaldırma bu sekmede yapılır. Liste yüklenmez ve yerel depolamaya yazılmaz."
        },
        {
          "question": "Orijinal kutu değişiyor mu?",
          "answer": "Hayır. Girdi yapıştırdığınız gibi kalır. Benzersiz liste, işlemi çalıştırdıktan sonra sonuç kutusunda görünür."
        },
        {
          "question": "Bir listeden yinelenenleri nasıl kaldırırım?",
          "answer": "Listeyi her satıra bir öğe gelecek şekilde yapıştırın ve aracı çalıştırın. Her satırın ilk kopyası özgün sırasıyla korunur, sonraki tekrarlar çıkarılır."
        },
        {
          "question": "Büyük/küçük harf veya boşluk farklarını yok sayabilir mi?",
          "answer": "Evet. Büyük/küçük harf ve kırpma seçeneklerini açın; böylece Apple ve apple gibi satırlar ya da fazladan boşluk içeren satırlar aynı sayılır."
        }
      ]
    },
    "ui": {
      "One line per row": "Her satıra bir kayıt",
      "Case-insensitive match": "Büyük/küçük harf duyarsız eşleştir",
      "Trim spaces before comparing": "Karşılaştırmadan önce boşlukları kırp",
      "Remove empty lines": "Boş satırları kaldır",
      "First occurrence of each line is kept, in the original order.": "Her satırın ilk geçtiği yer, orijinal sırayla korunur.",
      "Unique lines": "Benzersiz satırlar",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "Tekrarlanan satırlar bu sekmede atılır. Liste yüklenmez.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Tarayıcının yanıt vermeye devam etmesi için metni 400.000 karakterin altında tutun."
    }
  },
  "whitespace-remover": {
    "answer": "Boşluk temizleyici, seçtiğiniz seçeneklere göre satırları kırpar, boşlukları daraltır, sekmeleri dönüştürür ve boş satırları temizler.",
    "content": {
      "about": "Fazla boşlukları, sekmeleri ve boş satırları yalnızca açtığınız seçeneklerle temizleyin. Yapıştırılmış bir günlük veya dağınık girintili bir liste için kullanışlıdır. “Her satırı kırp”, ayrı baştaki ve sondaki kutularının önüne geçer; bu seçenekleri kapalı bırakırsanız girinti korunur.",
      "howTo": [
        "Fazla boşluk, sekme veya boş satır içeren metni yapıştırın.",
        "Yalnızca istediğiniz temizlikleri seçin. “Metni temizle”ye basana kadar hiçbir şey çalışmaz.",
        "Satır ve karakter sayılarını kontrol edin, ardından sonucu kopyalayın veya indirin.",
        "Metni atmak için kutuları temizleyin. Metin kaydedilmez."
      ],
      "examples": [
        {
          "title": "Girintili günlük satırları",
          "body": "Her satırı kırpın; sondaki boşlukları korumanız gerekiyorsa yalnızca baştaki boşlukları kaldırın."
        },
        {
          "title": "Karışık sekme ve boşluklar",
          "body": "Sekmeleri 2 veya 4 boşluğa dönüştürün, ardından tek boşluklu bir düzen istiyorsanız tekrarlanan boşlukları daraltın."
        }
      ],
      "explanation": "Her seçenek açıkça belirtilir. “Her satırı kırp”, o geçişte baştaki/sondaki kutularının önüne geçer. “Boş satırları kaldır” tüm boş satırları atar; boş satırları daraltmak bloklar arasında tek bir boş satır bırakır.",
      "limitations": "Yalnızca açtığınız seçenekler uygulanır. “Her satırı kırp”, o geçişte baştaki ve sondaki kutularının önüne geçer. “Boş satırları kaldır” tüm boş satırları atarken daraltma bloklar arasında bir boş satır bırakır. 400.000 karakterden fazlası reddedilir.",
      "faqs": [
        {
          "question": "Boşluk temizleyici ücretsiz mi?",
          "answer": "Evet. Fazla boşlukları, sekmeleri ve boş satırları temizlemek ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Temizlik bu sekmede kalır. Metin hiçbir yere gönderilmez ve yerel depolamada tutulmaz."
        },
        {
          "question": "Girintim bozulur mu?",
          "answer": "Yalnızca kırpmayı, baştaki boşluk kaldırmayı veya sekme dönüştürmeyi açarsanız. Girintiyi korumak için bunları kapalı bırakın."
        },
        {
          "question": "Metindeki çift boşlukları nasıl kaldırırım?",
          "answer": "Tekrarlanan boşlukları birleştiren seçeneği açın. Her satırdaki ardışık boşluklar tek boşluğa dönüşür."
        },
        {
          "question": "Boş satırları nasıl silerim?",
          "answer": "Tüm boş satırları atmak için boş satırları kaldır seçeneğini, paragraflar arasında tek bir boş satır bırakmak için boş satırları birleştir seçeneğini kullanın."
        }
      ]
    },
    "ui": {
      "Cleanup options": "Temizlik seçenekleri",
      "Trim each line": "Her satırı kırp",
      "Remove leading whitespace": "Baştaki boşlukları kaldır",
      "Remove trailing whitespace": "Sondaki boşlukları kaldır",
      "Collapse repeated spaces": "Tekrarlanan boşlukları daralt",
      "Convert tabs to spaces": "Sekmeleri boşluğa dönüştür",
      "Remove blank lines": "Boş satırları kaldır",
      "Collapse multiple blank lines": "Çoklu boş satırları daralt",
      "Trim entire document": "Tüm belgeyi kırp",
      "Tab width": "Sekme genişliği",
      "2 spaces": "2 boşluk",
      "4 spaces": "4 boşluk",
      "Lines before": "Önceki satır",
      "Lines after": "Sonraki satır",
      "Characters before": "Önceki karakter",
      "Characters after": "Sonraki karakter",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Boşluklar, sekmeler ve boş satırlar bu sekmede temizlenir. Metin bir sunucuya gönderilmez."
    }
  },
  "line-sorter": {
    "answer": "Satır sıralayıcı, çok satırlı metni alfabetik, sayısal veya uzunluğa göre sıralar; isteğe bağlı olarak yinelenenleri kaldırır.",
    "content": {
      "about": "Her satırdaki bir öğeyi A’dan Z’ye, Z’den A’ya, baştaki sayıya veya uzunluğa göre sıralayın. Bir ad listesi veya numaralı bir dışa aktarım tablo programı olmadan sıraya konacaksa kullanışlıdır. Sayısal sırada 10, 2’den sonra gelir; başında sayı olmayan bir satır numaralı satırlardan sonra sıralanır.",
      "howTo": [
        "Her satıra bir öğe yapıştırın.",
        "A→Z, Z→A, sayısal sıra veya uzunluk seçin. Büyük/küçük harf, kırpma, boş satır ve yinelenen seçeneklerini gerektiği gibi ayarlayın.",
        "“Satırları sırala”ya basın. Eşit öğeler orijinal göreli sıralarını korur.",
        "Sıralanmış listeyi kopyalayın veya indirin."
      ],
      "examples": [
        {
          "title": "Adlar",
          "body": "Büyük/küçük harf duyarsız A→Z, ada ve Ada’yı yan yana koyar; eşit sayıldıklarında önce görünen yazım önde kalır."
        },
        {
          "title": "Numaralı satırlar",
          "body": "“Sayısal artan” baştaki sayıyı okur, bu yüzden 10, 2’den sonra gelir. Sayısı olmayan satırlar numaralı satırlardan sonra gelir."
        }
      ],
      "explanation": "Sıralama kararlıdır: iki satır eşit sayıldığında önce girilen satır önde kalır. Sayısal modlar baştaki tam sayıyı veya ondalık sayıyı okur. İsteğe bağlı yinelenen kaldırma, büyük/küçük harf ve kırpma seçenekleriyle aynı karşılaştırma anahtarını kullanır.",
      "limitations": "Modlar A’dan Z’ye, Z’den A’ya, sayısal artan, sayısal azalan, en kısa ve en uzundur. Eşit satırlar orijinal sıralarını korur. Sayısal mod baştaki sayıyı okur; sayısı olmayan bir satır numaralı satırlardan sonra gelir. 400.000 karakterden fazlası reddedilir.",
      "faqs": [
        {
          "question": "Satır sıralayıcı ücretsiz mi?",
          "answer": "Evet. Bir satır listesini sıralamak ücretsizdir ve hesap gerekmez."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Sıralama bu sekmede yapılır. Satırlar bir sunucuya gönderilmez ve yerel depolamaya kaydedilmez."
        },
        {
          "question": "Boş satırlar korunuyor mu?",
          "answer": "Evet, “Boş satırları yok say”ı seçmediğiniz sürece. Harf modlarında boş metin olarak sıralanırlar."
        },
        {
          "question": "Bir listeyi alfabetik olarak nasıl sıralarım?",
          "answer": "Her satıra bir öğe yapıştırın ve A'dan Z'ye ya da ters sıra için Z'den A'ya seçin. Eşit satırlar özgün sıralarını korur."
        },
        {
          "question": "Satırları sayıya göre nasıl sıralarım?",
          "answer": "Sayısal artan veya azalan seçin. Her satır başındaki sayıya göre sıralanır, böylece 2, 10'dan önce gelir."
        }
      ]
    },
    "ui": {
      "One item per line": "Her satıra bir öğe",
      "Numeric ascending": "Sayısal artan",
      "Numeric descending": "Sayısal azalan",
      "Shortest → longest": "En kısa → en uzun",
      "Longest → shortest": "En uzun → en kısa",
      "Trim before comparing": "Karşılaştırmadan önce kırp",
      "Ignore empty lines": "Boş satırları yok say",
      "Sort lines": "Satırları sırala",
      "Result lines": "Sonuç satırları",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "Satırlar bu sekmede sıralanır. Liste Tools Star Hub’a gönderilmez."
    }
  },
  "find-and-replace": {
    "answer": "Bul ve değiştir, yapıştırdığınız metindeki ilk eşleşmeyi veya tüm eşleşmeleri değiştirir. Büyük/küçük harf eşleştirmeyi açıp kapatabilirsiniz.",
    "content": {
      "about": "Metni yapıştırın, aranacak ifadeyi ve yerine gelecek metni yazın. İlk eşleşmeyi veya tümünü değiştirebilir, büyük/küçük harfi yok sayabilirsiniz.",
      "howTo": [
        "Orijinal metni yapıştırın.",
        "Aranacak metni girin. Boş arama kutusu reddedilir.",
        "Yerine gelecek metni girin. Eşleşmeleri silmek istiyorsanız boş bırakın.",
        "“İlkini değiştir” veya “Tümünü değiştir”i seçin ve “Büyük/küçük harfe duyarlı” seçeneğini açın ya da kapatın.",
        "“Değiştir”e basın, ardından sonucu kopyalayın veya formu temizleyin."
      ],
      "features": [
        "İlk eşleşme veya çakışmayan tüm eşleşmeler.",
        "Büyük/küçük harfe duyarlı ya da duyarsız arama; yeni metin her zaman yazdığınız gibi eklenir.",
        "Kaç değişiklik yapıldığının sayısı."
      ],
      "examples": [
        {
          "title": "Tekrarlanan bir adı düzeltmek",
          "body": "Orijinal: “Ana sent the file. ana sent the notes.” Bul: ana. Yeni metin: Ana. Büyük/küçük harf duyarlılığı kapalı, “Tümünü değiştir”. İki ad da Ana olur ve sayı 2’dir."
        },
        {
          "title": "Yalnızca ilk başlığı değiştirmek",
          "body": "Bir taslakta “Draft” üç kez geçiyor. “İlkini değiştir” ilkini değiştirir, diğer ikisine dokunmaz. Sayı 1’dir."
        }
      ],
      "explanation": "Arama orijinal metni baştan tarar. Bir eşleşmeden sonra sonraki arama o eşleşmenin ardından başlar, bu yüzden eklenen metin yeniden aranmaz. Büyük/küçük harf duyarsız mod küçük harfli kopyaları karşılaştırır ama çevredeki metni değiştirmez.",
      "tips": [
        "“Herhangi bir sayı” gibi bir desene ihtiyacınız varsa regex test aracını kullanın. Bu araç tam olarak yazdığınız karakterleri arar.",
        "Aranan metni içeren yeni metin olduğu gibi eklenir ve aynı geçişte yeniden değiştirilmez."
      ],
      "limitations": "Bu bir düzenli ifade değildir. Kelime sınırlarını dikkate almaz ve tırnak içindeki metni atlamaz. Çakışan eşleşmeler iki kez sayılmaz.",
      "faqs": [
        {
          "question": "Eşleşmeleri silebilir miyim?",
          "answer": "Evet. Yeni metin kutusunu boş bırakın. Her eşleşme kaldırılır ve yine de bir değişiklik olarak sayılır."
        },
        {
          "question": "Kısa bir kelime neden daha uzun bir kelimenin içinde değişti?",
          "answer": "Arama karakter bazlıdır. “cat” aramak “catalog” kelimesinin başını da bulur. Yalnızca tam kelimeyi istiyorsanız boşluk ekleyin veya kelime sınırıyla regex test aracını kullanın."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Metin ve arama ifadesi bu sekmede kalır. Bir sunucuya gönderilmez."
        },
        {
          "question": "Bir kelimeyi metnin her yerinde nasıl değiştiririm?",
          "answer": "Aranacak kelimeyi ve yerine geçecek kelimeyi girin, Tümünü değiştir'i seçin ve sonucu kopyalayın. Büyük harfler önemliyse büyük/küçük harf duyarlı aramayı açın."
        },
        {
          "question": "Bul ve değiştir düzenli ifadeleri destekliyor mu?",
          "answer": "Hayır. Yazdığınız metnin tam olarak aynısını arar. Kalıp eşleştirme için kalıbı önce Regex Test Aracı'nda deneyin."
        }
      ]
    },
    "ui": {
      "Replacement": "Yeni metin",
      "How many matches": "Hangi eşleşmeler",
      "Replace first": "İlkini değiştir",
      "Replace all": "Tümünü değiştir",
      "Case-sensitive": "Büyük/küçük harfe duyarlı",
      "{0} replacement.": "{0} değişiklik.",
      "{0} replacements.": "{0} değişiklik.",
      "Paste the text you want to change.": "Değiştirmek istediğiniz metni yapıştırın.",
      "Enter the text to find.": "Aranacak metni girin."
    }
  },
  "remove-line-breaks": {
    "answer": "Satır sonlarını kaldır, bölünmüş satırları boşlukla birleştirir, satır sonlarını siler veya paragraflar arasında bir boş satır bırakır.",
    "content": {
      "about": "Birçok satıra bölünmüş metni yapıştırın. Bu satırları boşlukla birleştirebilir, satır sonlarını silebilir veya paragraflar arasında bir boş satır bırakabilirsiniz.",
      "howTo": [
        "Orijinal metni yapıştırın. Kutu, görebilmeniz için satır sonlarını korur.",
        "Bir seçenek seçin: satır sonlarını boşlukla değiştir, kaldır veya paragraf aralarını koru.",
        "“Metni temizle”ye basın.",
        "Temizlenmiş metni kopyalayın veya iki kutuyu da temizleyin."
      ],
      "features": [
        "Orijinal ilk kutuda kalır; temizlenmiş metin ayrıdır.",
        "Boşluk modu satırları birleştirir ve tekrarlanan boşlukları daraltır.",
        "Paragraf modu, zaten boş satır olan yerde bir boş satır bırakır."
      ],
      "examples": [
        {
          "title": "Bölünmüş bir e-posta",
          "body": "Tek bir cümlenin üç kısa satırı, “Satır sonlarını boşlukla değiştir” seçildiğinde kelimeler arasında tek boşluk olan tek bir satır olur."
        },
        {
          "title": "İki paragraf",
          "body": "Bir blok, bir boş satır, sonra başka bir blok. “Paragraf aralarını koru”, her bloğun içindeki satırları birleştirir ve aralarında bir boş satır bırakır."
        }
      ],
      "explanation": "Windows ve eski Mac satır sonları aynı satır sonu olarak ele alınır. Boşluk modu her satır sonu dizisini tek bir boşluğa çevirir, ardından uçları kırpar. Kaldırma modu satır sonlarını siler ve bir satırın son kelimesini sonraki satırın ilk kelimesine yapıştırabilir. Paragraf modu önce boş satırlardan böler, sonra her paragrafın içindeki satırları birleştirir.",
      "tips": [
        "Düz yazı için boşluk modunu kullanın. Kaldırmayı yalnızca satır sonu bir öğenin ortasına girdiyse kullanın; örneğin birkaç satıra bölünmüş uzun bir sayı.",
        "Bir şiir veya liste satırlarını korumalıysa bu aracı onlarda kullanmayın."
      ],
      "limitations": "Araç bölünmüş bir cümleyi listeden ayırt edemez. Paragraf modunda tek bir satır sonu, satır kaydırma olarak ele alınır. Paragrafları yalnızca boş bir satır ayırır.",
      "faqs": [
        {
          "question": "Satır içindeki boşluklar da kaldırılır mı?",
          "answer": "Boşluk modu tekrarlanan boşlukları ve sekmeleri daraltır. Kaldırma ve paragraf modları satırın içindeki mevcut boşluklara dokunmaz."
        },
        {
          "question": "Yalnızca boşluk yapıştırırsam ne olur?",
          "answer": "Sayfa sizden metin yapıştırmanızı ister. Yalnızca boşluk yeterli değildir."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Yapıştırılan metin bu sekmede yeniden yazılır. Yüklenmez."
        },
        {
          "question": "PDF'den kopyalanan metindeki satır sonlarını nasıl kaldırırım?",
          "answer": "Metni yapıştırın ve paragraf sonlarını koruyan seçeneği seçin. Paragraf içindeki tek satır sonları boşluğa dönüşür, paragraflar arasındaki boş satırlar kalır."
        },
        {
          "question": "Satır sonlarını değiştirmek ile kaldırmak arasındaki fark nedir?",
          "answer": "Değiştirmek her satır sonunu boşluğa çevirir, böylece kelimeler ayrı kalır. Kaldırmak satır sonunu siler ve bir satırın sonunu sonraki satırın başına birleştirir."
        }
      ]
    },
    "ui": {
      "Line breaks": "Satır sonları",
      "Replace line breaks with spaces": "Satır sonlarını boşlukla değiştir",
      "Remove line breaks": "Satır sonlarını kaldır",
      "Keep paragraph breaks": "Paragraf aralarını koru",
      "Cleaned text": "Temizlenmiş metin",
      "Paste some text first.": "Önce biraz metin yapıştırın."
    }
  },
  "add-line-numbers": {
    "answer": "Satır numarası ekle, her satırın önüne bir numara ve ayırıcı koyar; satırın kendisini değiştirmez.",
    "content": {
      "about": "Birkaç satır yapıştırın ve her birinin önüne bir numara koyun. Başlangıç numarasını ve numara ile satır arasındaki karakterleri siz seçersiniz.",
      "howTo": [
        "Metni yapıştırın. Her satır yazdığınız gibi kalır.",
        "Başlangıç numarasını belirleyin. Genellikle 1’dir; 0’ın altındaki tam sayılar da kabul edilir.",
        "Ayırıcıyı belirleyin. Varsayılan, bir nokta ve bir boşluktur.",
        "“Numara ekle”ye basın, ardından numaralı satırları kopyalayın veya formu temizleyin."
      ],
      "features": [
        "Satır metni kırpılmaz veya yeniden yazılmaz.",
        "\") \" veya sekme gibi özel bir ayırıcı.",
        "1 dışında bir başlangıç numarası."
      ],
      "examples": [
        {
          "title": "Üç satırlık bir liste",
          "body": "“Birinci satır”, “İkinci satır” ve “Üçüncü satır” satırları, başlangıç 1 ve “. ” ayırıcısıyla “1. Birinci satır”, “2. İkinci satır” ve “3. Üçüncü satır” olur."
        },
        {
          "title": "Listeyi 10’dan sürdürmek",
          "body": "Başlangıç numarası 10 ve \") \" ayırıcısıyla yapıştırılan ilk satır, “10) ” artı orijinal satır olur."
        }
      ],
      "explanation": "Metin satır sonlarından bölünür. Her satır başlangıç numarası artı konumunu, ardından ayırıcıyı, ardından o satırın orijinal karakterlerini alır. Boş satırlar da numaralandırılır, çünkü onlar da satırdır.",
      "tips": [
        "Metinde zaten numara varsa önce bunları kaldırın; yoksa her satırda iki numara olur.",
        "Sonucu bir tabloya yapıştırmak istiyorsanız ayırıcı olarak sekme kullanın."
      ],
      "limitations": "Sondaki satır sonu, sonda boş bir satır oluşturur ve bu boş satır da numaralandırılır. Kutudaki otomatik kaydırmalar yeni satır değildir; yalnızca gerçek satır sonları sayılır.",
      "faqs": [
        {
          "question": "Yazım veya boşluklar değişiyor mu?",
          "answer": "Hayır. Ayırıcıdan sonraki karakterler orijinal satırdır."
        },
        {
          "question": "0’dan başlayabilir miyim?",
          "answer": "Evet. 0 ve negatif tam sayılar kabul edilir. 1,5 gibi bir ondalık sayı kabul edilmez."
        },
        {
          "question": "Girdim bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Satırlar ve başlangıç numarası bu sekmede kalır. Bir sunucuya gönderilmez."
        },
        {
          "question": "Metindeki satırları nasıl numaralandırırım?",
          "answer": "Metni yapıştırın, başlangıç numarasını ve nokta ile boşluk gibi bir ayırıcıyı belirleyin, ardından numaraları ekleyip sonucu kopyalayın."
        },
        {
          "question": "Boş satırlar numaralandırılır mı?",
          "answer": "Evet. Her gerçek satır sonu, boş satırlar ve sondaki boş satır dahil yeni bir numaralı satır başlatır."
        }
      ]
    },
    "ui": {
      "Starting number": "Başlangıç numarası",
      "Separator": "Ayırıcı",
      "Placed between the number and the original line.": "Numara ile orijinal satır arasına konur.",
      "Add numbers": "Numara ekle",
      "Numbered lines": "Numaralı satırlar",
      "Paste the lines you want to number.": "Numaralandırmak istediğiniz satırları yapıştırın.",
      "starting number": "başlangıç numarası",
      "Enter a whole number for the starting line.": "Başlangıç satırı için bir tam sayı girin."
    }
  },
  "number-to-words": {
    "answer": "Sayıyı yazıya çevirici, -999.999.999 ile 999.999.999 arasındaki tam sayıları İngilizce yazar. Basit İngilizce sayı kelimelerini de yeniden sayıya çevirebilir.",
    "content": {
      "about": "Bir tam sayıyı İngilizce yazıyla yazın veya basit İngilizce sayı kelimelerini yeniden sayıya çevirin. Aralık -999.999.999 ile 999.999.999 arasıdır.",
      "howTo": [
        "Sayıdan yazıya veya yazıdan sayıya seçin.",
        "Sayıyı veya kelimeleri girin.",
        "“Dönüştür”e basın."
      ],
      "features": [
        "Milyonlara kadar tam sayılar.",
        "Negatif sayılar ve sıfır.",
        "Basit İngilizce kelimelerin tersine okunması."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "İngilizce: one thousand two hundred thirty-four."
        }
      ],
      "explanation": "Çevirici sayıyı milyonlar, binler ve kalan olarak gruplar. 21’den 99’a kadar onlar ve birler kısa çizgiyle yazılır. “and” kelimesi kullanılmaz. Baştaki sıfırlar yok sayılır, yani 007 seven olur.",
      "tips": [
        "twenty-one’ı kısa çizgiyle veya twenty one olarak yazın.",
        "Negatif sayı için minus kullanın."
      ],
      "limitations": "Ondalık sayılar, milyarlar ve “and” kelimesini kullanan ifadeler desteklenmez. Çıktı her zaman İngilizcedir, Türkçe değildir.",
      "faqs": [
        {
          "question": "Bir sayı yazıyla nasıl yazılır?",
          "answer": "Sayfa milyonları, binleri ve yüzleri gruplar, sonra onlar ve birleri yazar. 123, one hundred twenty-three olur."
        },
        {
          "question": "Hangi aralık destekleniyor?",
          "answer": "-999.999.999 ile 999.999.999 arasındaki tam sayılar."
        },
        {
          "question": "Baştaki sıfırlara ne olur?",
          "answer": "Yok sayılırlar. 007, seven olur."
        },
        {
          "question": "Ondalık sayılar dönüştürülebilir mi?",
          "answer": "Hayır. Bir tam sayı girin."
        },
        {
          "question": "Kelimeler yeniden sayıya çevrilebilir mi?",
          "answer": "Evet, bu aralıktaki basit İngilizce kelimeler için; örneğin one hundred twenty-three veya minus twenty."
        },
        {
          "question": "Bu sayılar bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Sayı veya kelimeler dönüştürülürken bu sekmede kalır. Yüklenmez."
        }
      ]
    },
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "-999.999.999 ile 999.999.999 arasındaki tam sayılar. Kelimeler “and” kelimesi olmadan Amerikan İngilizcesi biçimindedir; örneğin one hundred twenty-three. Baştaki sıfırlar yok sayılır.",
      "Number to words": "Sayıdan yazıya",
      "Words to number": "Yazıdan sayıya",
      "Number words": "Sayı kelimeleri (İngilizce)",
      "Enter a whole number. Decimals are outside this converter.": "Bir tam sayı girin. Ondalık sayılar desteklenmez.",
      "Enter a whole number using digits.": "Rakamlarla bir tam sayı girin.",
      "This converter supports -999,999,999 through 999,999,999.": "Bu çevirici -999.999.999 ile 999.999.999 arasını destekler.",
      "Enter number words.": "İngilizce sayı kelimeleri girin.",
      "Enter number words after minus.": "minus’tan sonra İngilizce sayı kelimeleri girin.",
      "This converter does not use the word and.": "Bu çevirici “and” kelimesini kullanmaz.",
      "\"{0}\" is not a supported number word.": "“{0}” desteklenen bir sayı kelimesi değil.",
      "That number is outside -999,999,999 through 999,999,999.": "Bu sayı -999.999.999 ile 999.999.999 aralığının dışında."
    },
    "note": "Bu araç sayıları yalnızca İngilizce yazar ve okur. Arayüz ve yardım metinleri çevrilmiştir."
  },
  "morse-code": {
    "answer": "Mors kodu çevirici, A–Z ve 0–9 metnini uluslararası Mors koduna çevirir veya Mors kodunu yeniden metne okur. Harfler boşlukla, kelimeler eğik çizgiyle ayrılır.",
    "content": {
      "about": "Harfleri ve rakamları uluslararası Mors koduna veya Mors kodunu yeniden metne çevirin.",
      "howTo": [
        "Metinden Mors’a veya Mors’tan metne seçin.",
        "A–Z, 0–9 ya da nokta, çizgi, boşluk ve / içeren Mors kodu girin.",
        "“Dönüştür”e basın."
      ],
      "features": [
        "A–Z ve 0–9.",
        "Harfler arasında boşluk, kelimeler arasında /.",
        "Desteklenmeyen bir karakter için açık bir hata."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO, .... . .-.. .-.. --- olur."
        }
      ],
      "explanation": "Her harf ve rakamın bir uluslararası Mors deseni vardır. Boşluk harfleri, eğik çizgi kelimeleri ayırır. Küçük harfler büyük harf olarak okunur. A–Z ve 0–9 dışındaki bir karakter dönüştürmeyi durdurur.",
      "tips": [
        "SOS ... --- ... diye yazılır.",
        "Mors harfleri arasında bir boşluk bırakın."
      ],
      "limitations": "Noktalama işaretleri ve A–Z dışındaki harfler (ç, ğ, ı, ö, ş, ü gibi) dönüştürülmez. Bilinmeyen bir Mors deseni reddedilir.",
      "faqs": [
        {
          "question": "Metin Mors koduyla nasıl yazılır?",
          "answer": "Her harf, uluslararası Mors desenine dönüşür. Harfler boşlukla, kelimeler / ile ayrılır."
        },
        {
          "question": "Küçük harfler çalışır mı?",
          "answer": "Evet. Küçük harfler büyük harf olarak okunur."
        },
        {
          "question": "Kelimeleri ne ayırır?",
          "answer": "Eğik çizgi kelimeleri ayırır. Boşluk, bir kelimenin içindeki harfleri ayırır."
        },
        {
          "question": "Noktalama işareti yazarsam ne olur?",
          "answer": "Sayfa desteklenmeyen karakteri belirtir ve onun için bir kod tahmin etmez."
        },
        {
          "question": "Metin bir yere gönderiliyor mu?",
          "answer": "Hayır. Dönüştürme tarayıcınızda yapılır."
        },
        {
          "question": "Veriler bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Harfler ve Mors desenleri bu sekmede dönüştürülür. Bir sunucuya gönderilmez."
        }
      ]
    },
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "A–Z ve 0–9 için uluslararası Mors. Harfler boşlukla, kelimeler / ile ayrılır. Desteklenmeyen karakterler reddedilir.",
      "Text to Morse": "Metinden Mors’a",
      "Morse to text": "Mors’tan metne",
      "Morse code": "Mors kodu",
      "Morse": "Mors",
      "Enter text to convert.": "Dönüştürülecek metni girin.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "“{0}” desteklenmiyor. A–Z ve 0–9 kullanın.",
      "Enter Morse code to convert.": "Dönüştürülecek Mors kodunu girin.",
      "Morse code can use only dots, dashes, spaces, and /.": "Mors kodu yalnızca nokta, çizgi, boşluk ve / içerebilir.",
      "A word separator is missing letters.": "Bir kelime ayırıcının yanında harf eksik.",
      "\"{0}\" is not a supported Morse letter.": "“{0}” desteklenen bir Mors harfi değil."
    }
  },
  "roman-numeral-converter": {
    "answer": "Roma rakamı çevirici, 1 ile 3999 arasındaki tam sayıları standart Roma rakamlarına çevirir ve bu rakamları yeniden sayıya okur. 3999’un üzerindeki değerler desteklenmez.",
    "content": {
      "about": "1 ile 3999 arasındaki tam sayıları standart Roma rakamlarına, bu rakamları da yeniden sayılara çevirin.",
      "howTo": [
        "Sayıdan Roma rakamına veya Roma rakamından sayıya seçin.",
        "1 ile 3999 arasında bir sayı ya da I, V, X, L, C, D ve M kullanan bir Roma rakamı girin.",
        "“Dönüştür”e basın."
      ],
      "features": [
        "Standart çıkarmalı gösterim.",
        "Ters dönüştürme.",
        "Standart biçimde olmayan rakamların reddedilmesi."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994, MCMXCIV’dir."
        }
      ],
      "explanation": "Sayfa rakamları M, CM, D, CD, C, XC, L, XL, X, IX, V, IV ve I’dan oluşturur. Bir Roma dizisi yalnızca değerinin standart biçimiyse kabul edilir. IIII, IC ve IL reddedilir. Vinculum gösterimi dahil 3999’un üzerindeki rakamlar desteklenmez.",
      "tips": [
        "4, IV’tür; IIII değil.",
        "9, IX’tir; VIIII değil."
      ],
      "limitations": "Aralık 1 ile 3999’dur. Sıfır, negatif ve daha büyük sayılar reddedilir.",
      "faqs": [
        {
          "question": "Bir sayı Roma rakamına nasıl çevrilir?",
          "answer": "Sayfa standart çıkarmalı gösterimi kullanır. 4 IV, 9 IX, 40 XL ve 3999 MMMCMXCIX’tir."
        },
        {
          "question": "Hangi sayılar destekleniyor?",
          "answer": "1 ile 3999 arasındaki tam sayılar."
        },
        {
          "question": "IIII neden reddediliyor?",
          "answer": "IIII, 4’ün standart biçimi değildir. Standart biçim IV’tür."
        },
        {
          "question": "3999’un üzerindeki sayılar çevrilebilir mi?",
          "answer": "Hayır. Büyük sayılar için genişletilmiş gösterim desteklenmez."
        },
        {
          "question": "Bir Roma rakamı yeniden sayıya çevrilebilir mi?",
          "answer": "Evet, 1 ile 3999 arasında standart bir Roma rakamıysa."
        },
        {
          "question": "Bu sayılar bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Sayı veya Roma rakamı bu sekmede dönüştürülür. Yüklenmez."
        }
      ]
    },
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "1 ile 3999 arasındaki standart Roma rakamları. Vinculum gösterimi dahil 3999’un üzerindeki rakamlar desteklenmez. IIII gibi geçersiz diziler reddedilir.",
      "Number to Roman": "Sayıdan Roma rakamına",
      "Roman to number": "Roma rakamından sayıya",
      "Roman numeral": "Roma rakamı",
      "Enter a whole number from 1 through 3999.": "1 ile 3999 arasında bir tam sayı girin.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Bu çevirici 1 ile 3999 arasını destekler. 3999’un üzerindeki rakamlar desteklenmez.",
      "Enter a Roman numeral.": "Bir Roma rakamı girin.",
      "Use only I, V, X, L, C, D, and M.": "Yalnızca I, V, X, L, C, D ve M kullanın.",
      "\"{0}\" is not a valid Roman numeral.": "“{0}” geçerli bir Roma rakamı değil."
    }
  },
  "text-repeater": {
    "answer": "Metin tekrarlayıcı bir kelimeyi, ifadeyi veya satırı 1 ile 200 kez kopyalar; kopyalar arasına hiçbir şey, boşluk veya yeni satır koyar.",
    "content": {
      "about": "Bir kelimeyi, ifadeyi veya satırı 1 ile 200 kez tekrarlayın. Kopyalar arasına hiçbir şey, boşluk veya yeni satır koyun. Kaynak metin en fazla 5.000 karakter, birleştirilmiş sonuç en fazla 100.000 karakter olabilir.",
      "howTo": [
        "Tekrarlanacak metni girin. Boş kutu reddedilir.",
        "1 ile 200 arasında bir tam sayı girin.",
        "Kopyalar arasında hiçbir şey, boşluk veya yeni satır seçin, ardından “Tekrarla”ya basın."
      ],
      "features": [
        "Sayı 1 olduğunda ek ayırıcı olmadan tek kopya.",
        "Boşluk veya yeni satır yalnızca kopyalar arasında, sonuncudan sonra değil.",
        "Çok büyük bir sonucun sayfayı doldurmaması için uzunluk sınırı."
      ],
      "examples": [
        {
          "title": "Bir kelimeyi üç kez",
          "body": "ha, sayı 3, kopyalar arasında boşlukla ha ha ha olur."
        },
        {
          "title": "Bir satırı iki kez",
          "body": "Hazır, sayı 2, kopyalar arasında yeni satırla bir satırda Hazır ve sonraki satırda Hazır olur."
        }
      ],
      "explanation": "Sayfa metni istediğiniz kadar kopyalar ve kopyaları seçtiğiniz ayırıcıyla birleştirir. Yer tutucu Latince üretmez ve yinelenenleri kaldırmaz.",
      "tips": [
        "Aynı satırlardan oluşan bir liste için yeni satır, tek satır için boşluk kullanın."
      ],
      "limitations": "Kaynak metin en fazla 5.000 karakter, sayı en fazla 200 ve birleştirilmiş sonuç en fazla 100.000 karakter olabilir. Daha uzun bir sonuç reddedilir.",
      "faqs": [
        {
          "question": "Metin tekrarlayıcı ücretsiz mi?",
          "answer": "Evet. Burada ödeme yapmadan veya hesap açmadan metin tekrarlayabilirsiniz."
        },
        {
          "question": "Sayı 1 olunca ayırıcı ekleniyor mu?",
          "answer": "Hayır. Tek kopya, yazdığınız metnin aynısıdır; hiçbir şey eklenmez."
        },
        {
          "question": "Boş bir satırı tekrarlayabilir miyim?",
          "answer": "Boş kutu reddedilir. Yalnızca boşluk içeren bir satır kabul edilir, çünkü bu boşluklar da metindir."
        },
        {
          "question": "Metin bir sunucuya gönderiliyor mu?",
          "answer": "Hayır. Kopyalar bu tarayıcı sekmesinde oluşturulur. Tools Star Hub bu metni bir sunucuya göndermez ve yerel depolamaya kaydetmez."
        }
      ]
    },
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "Kopyalar bu sekmede oluşturulur. Metin bir sunucuya gönderilmez.",
      "Text to repeat": "Tekrarlanacak metin",
      "Repeat count": "Tekrar sayısı",
      "From 1 to 200.": "1 ile 200 arası.",
      "Between copies": "Kopyalar arasında",
      "Nothing": "Hiçbir şey",
      "Space": "Boşluk",
      "New line": "Yeni satır",
      "Enter the text to repeat.": "Tekrarlanacak metni girin.",
      "Keep the text under {0} characters.": "Metni {0} karakterin altında tutun.",
      "repeat count": "tekrar sayısı",
      "Enter a whole number of repeats.": "Tekrar sayısı için bir tam sayı girin.",
      "Choose a repeat count from {0} to {1}.": "{0} ile {1} arasında bir tekrar sayısı seçin.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Bu tekrar bu sayfa için çok uzun. Daha kısa bir metin veya daha küçük bir sayı kullanın."
    }
  }
};

export default data;
