import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Ana sayfa",
      allTools: "Tüm Araçlar",
      categories: "Kategoriler",
      guides: "Rehberler",
      popularTools: "Popüler Araçlar",
      about: "Hakkında",
      howItWorks: "Nasıl Çalışır",
      contact: "İletişim",
      exploreTools: "Araçları Keşfet",
      mobileNav: "Mobil",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      openSearch: "Aramayı aç",
      closeSearch: "Aramayı kapat",
    },
    theme: { toLight: "Açık temaya geç", toDark: "Koyu temaya geç" },
    language: { label: "Dil", current: "Dil: {name}", englishOnly: "Yalnızca İngilizce" },
    search: {
      placeholder: "Araç ara...",
      label: "Araç ara",
      clear: "Aramayı temizle",
      suggestions: "Arama önerileri",
      noResults: "Araç bulunamadı",
    },
    consent: {
      title: "Analiz çerezleri",
      body: "Ziyaretleri saymak için Google Analytics kullanıyoruz, ancak yalnızca kabul ederseniz. Araçlar her iki durumda da aynı şekilde çalışır. {link} sayfasına göz atın.",
      privacyLink: "Gizlilik politikası",
      accept: "Kabul et",
      decline: "Reddet",
      settings: "Çerez ayarları",
    },
    favorites: { add: "{name} aracını favorilere ekle", remove: "{name} aracını favorilerden çıkar" },
    card: { popular: "Popüler", new: "Yeni", openTool: "Aracı aç" },
    categoryNames: {
      calculators: "Hesap Makineleri",
      "text-tools": "Metin Araçları",
      "developer-tools": "Geliştirici Araçları",
      "image-tools": "Görsel Araçları",
      "seo-utilities": "SEO ve Yardımcı Araçlar",
      "ai-tools": "Yapay Zekâ Araçları",
    },
    home: {
      filterAria: "Araçları filtrele",
      filters: {
        all: "Tümü",
        pdf: "PDF",
        images: "Görseller",
        "text-tools": "Metin",
        "developer-tools": "Geliştirici",
        calculators: "Hesap makineleri",
        "seo-utilities": "Yardımcılar",
        "ai-tools": "Yapay zekâ",
      },
      noToolsInGroup: "Bu grupta araç yok.",
    },
    catalog: {
      filterAria: "Araçları filtrele",
      filters: {
        all: "Tümü",
        calculators: "Hesap makineleri",
        "image-tools": "Görsel",
        pdf: "PDF",
        "text-tools": "Metin",
        "developer-tools": "Geliştirici",
        color: "Renk",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "Yapay zekâ",
      },
      favorites: "Favoriler",
      sort: "Sırala",
      sortName: "Ad",
      sortNewest: "En yeni",
      sortCategory: "Kategori",
      recentlyUsed: "Son kullanılanlar",
      recentEmpty: "Kullandığınız araçlar burada görünür.",
      viewAll: "Tümünü gör",
      searchResults: "Arama sonuçları",
      allTools: "Tüm araçlar",
      tools: "Araçlar",
      noFavorites: "Henüz favorilere araç eklemediniz.",
      noToolsFound: "Araç bulunamadı",
      noToolsCategory: "Bu kategoride henüz araç yok.",
      countFavorites: { one: "{count} favori", other: "{count} favori" },
      countResults: { one: "“{query}” için {count} sonuç", other: "“{query}” için {count} sonuç" },
      countOf: "{total} araçtan {count} tanesi",
    },
    tool: {
      loading: "Araç yükleniyor…",
      copy: "Kopyala",
      copied: "Kopyalandı",
      copyCss: "CSS’i kopyala",
      copyLink: "Bağlantıyı kopyala",
      linkCopied: "Bağlantı kopyalandı",
      download: "İndir",
      dropPrompt: "Bir görseli buraya sürükleyip bırakın veya dosya seçin.",
      selected: "Seçilen: {name}",
      copySuccess: "{what} panoya kopyalandı.",
      copyFailed:
        "Otomatik kopyalanamadı. {what} seçili durumda; kopyalamak için Ctrl+C (Mac’te Cmd+C) tuşlarına basın.",
    },
  },
  meta: {
    tagline: "Sorunsuz Çalışan Ücretsiz Çevrimiçi Araçlar",
    description:
      "Hesaplamalar, metin, geliştiriciler, görseller, SEO ve günlük işler için hızlı, ücretsiz ve kolay çevrimiçi araçlar. Kayıt gerekmez.",
    toolsTitle: "Tüm Araçlar",
    toolsDescription:
      "Hesaplamalar, metin, geliştiriciler, görseller, SEO ve günlük işler için ücretsiz çevrimiçi araçlara göz atın.",
    categoriesTitle: "Kategoriler",
    categoriesDescription:
      "Tools Star Hub’ı kategoriye göre keşfedin: hesap makineleri, metin araçları, geliştirici araçları, görsel ve PDF araçları, SEO yardımcıları ve yapay zekâ araçları.",
    categoryTitle: "{name} – Ücretsiz Çevrimiçi Araçlar",
    categoryShareAlt: "{name} – ücretsiz çevrimiçi araçlar",
    toolShareAlt: "{name} – ücretsiz çevrimiçi araç",
  },
  header: { primaryNav: "Ana menü", logoHome: "{name} ana sayfa", skip: "Ana içeriğe geç" },
  breadcrumbs: { label: "İçerik yolu", home: "Ana sayfa", tools: "Araçlar", categories: "Kategoriler" },
  footer: {
    blurb: "Hesaplamalar, metin, geliştiriciler, görseller, SEO ve günlük işler için hızlı ve basit çevrimiçi araçlar.",
    tagline: "Hızlı • Ücretsiz • Tarayıcıda • Kayıtsız",
    explore: "Keşfet",
    categories: "Kategoriler",
    legal: "Yasal",
    favorites: "Favoriler",
    privacy: "Gizlilik Politikası",
    terms: "Koşullar",
    disclaimer: "Sorumluluk Reddi",
    languages: "Diller",
    rights: "© {year} {name}. Tüm hakları saklıdır.",
  },
  home: {
    h1: "Günlük İşler için Ücretsiz Çevrimiçi Araçlar",
    intro:
      "Bir araç bulun, kullanın ve sonucu alın. {name}; PDF’ler, görseller, hesaplamalar ve metinler için hesap gerektirmeyen basit bir yerdir.",
    popularLabel: "Popüler:",
    trust: ["Ücretsiz", "Kayıt gerekmez", "Hızlı ve kolay", "Dosyalar tarayıcınızda kalır"],
    popularTitle: "Popüler Araçlar",
    popularDescription: "Dosyalar, görseller, metinler ve günlük hesaplamalar için sık kullanılan araçlar.",
    viewAllTools: "Tüm araçları gör",
    catalogTitle: "İhtiyacınız olan her şey tek bir yerde.",
    catalogDescription: "Bu sitedeki araçları filtreleyin. Her biri tarayıcıda açılır.",
    categoriesTitle: "Kategoriye göz atın",
    categoriesDescription: "Hesap makineleri, metin, geliştirici yardımcıları, görseller ve PDF’ler, web sitesi araçları.",
    allCategories: "Tüm kategoriler",
    whyTitle: "Neden {name}?",
    whyDescription: "Normalde ayrı bir uygulama gerektirecek işler için sade bir araç seti.",
    values: {
      fast: { title: "Hızlı", note: "Araçların çoğu tarayıcıda çalışır ve sonucu aynı sayfada gösterir." },
      free: { title: "Ücretsiz", note: "Bu sitedeki araçlar ücret gerektirmez." },
      private: {
        title: "Gizli",
        note: "Dosyalar ve yapıştırılan metinler cihazınızda işlenir. Sayfa ziyaretleri, gizlilik politikasında açıklandığı gibi ayrıca ölçülür.",
      },
      noAccount: { title: "Hesap yok", note: "Bir aracı açın ve kullanın. Hesap gerekmez." },
    },
    howTitle: "Nasıl çalışır",
    howDescription: "Üç adım. Kurulum yok.",
    steps: [
      { title: "Bir araç seçin", description: "Bir hesap makinesi, dosya aracı veya geliştirici aracı arayın ya da seçin." },
      { title: "İçeriğinizi yükleyin veya girin", description: "Aracın istediği dosyayı, sayıları veya metni ekleyin." },
      { title: "Sonucu alın", description: "Sonucu aynı sayfada kopyalayın, indirin veya okuyun." },
    ],
    guidesTitle: "Faydalı Rehberler",
    guidesDescription: "Bu sitedeki araçların zaten yaptığı işler hakkında kısa açıklamalar.",
    allGuides: "Tüm rehberler",
    pricingTitle: "Fiyatlandırma",
    pricingBody: "Araçlar ücretsizdir. Hesap, kurulum veya ücretli plan yoktur.",
    ctaTitle: "İşlerinizi daha hızlı halletmeye hazır mısınız?",
    ctaBody: "{name} koleksiyonundaki basit çevrimiçi araçları keşfedin.",
    ctaPrimary: "Tüm Araçları Keşfet",
    ctaSecondary: "Bir Araç Deneyin",
  },
  toolsPage: {
    title: "Tüm Araçlar",
    description:
      "Arayın, kategoriye göre filtreleyin veya son kullandığınız ya da favori bir aracı yeniden açın. Yeni araçlar eklendikçe burada görünür.",
  },
  categoriesPage: {
    title: "Kategoriler",
    description: "Doğru aracı daha hızlı bulmak için bir kategori seçin.",
    body: "Hesap makineleri günlük sayı işlerini halleder. Metin araçları yazıları sayar ve temizler. Geliştirici araçları biçimlendirir, kodlar ve küçültür. Görsel araçları birleştirme, bölme ve metin çıkarma gibi PDF işlerini de kapsar. SEO ve yardımcı araçlar kampanya bağlantılarını, slug’ları, QR kodlarını ve şifreleri içerir. Yapay zekâ araçları tarayıcıda prompt oluşturur ve taslakları kısaltır; yapay zekâ düğmeleri ise girdiğiniz metni sonuç üretmesi için Google’ın Gemini modeline gönderir. Diğer tüm araçlar tarayıcınızda çalışır.",
  },
  category: {
    cardCount: { one: "{count} araç", other: "{count} araç" },
    pageCount: { one: "Bu kategoride {count} araç var.", other: "Bu kategoride {count} araç var." },
    browse: "Araçlara göz at",
    starting: "Başlamak için iyi seçenekler",
    related: "İlgili kategoriler",
    none: "Bu kategoride henüz araç yok.",
  },
  toolPage: {
    whatIs: "{name} nedir?",
    categorySr: "kategorisi",
    relatedTools: "İlgili araçlar",
    helpfulGuides: "Faydalı rehberler",
    englishContent:
      "Bu aracın ayrıntılı rehberi (kullanım, örnekler ve SSS) şimdilik yalnızca İngilizce.",
    privacy: {
      browser:
        "Bu araç tarayıcınızda çalışır. Girdiler, dosyalar ve üretilen değerler bu cihazda kalır. Favoriler ve son kullanılan araçlar, kullanırsanız, yerel depolamada yalnızca araç adlarını saklar; asla şifre, belge veya QR içeriği saklamaz.",
      gemini:
        "Temel düğmeler tarayıcınızda çalışır. “Generate with AI”, “Analyze with AI” ve “Compress with AI”, gönderdiğiniz metni ToolStarHub üzerinden Google’ın Gemini API’sine iletir. Bu metin burada saklanmaz. Ücretsiz katmanda Google onu ürünlerini geliştirmek için kullanabilir. Favoriler yalnızca araç adlarını saklar.",
      humanizer:
        "“Rewrite text” tarayıcınızda kalır. “Humanize with AI”, gönderdiğiniz metni ToolStarHub üzerinden Google’ın Gemini API’sine iletir. Bu metin burada saklanmaz. Ücretsiz katmanda Google onu ürünlerini geliştirmek için kullanabilir. Favoriler yalnızca araç adlarını saklar.",
      fetch:
        "“Check preview” URL’yi bu siteye gönderir; site o herkese açık sayfayı ister ve etiketlerini okur. Sayfa burada saklanmaz. Özel veya http olmayan adresler reddedilir. Favoriler yalnızca araç adlarını saklar.",
      see: "{link} sayfasına göz atın.",
      link: "Gizlilik politikası",
    },
  },
  categories: {
    calculators: {
      name: "Hesap Makineleri",
      description: "Günlük hesaplama araçları",
      shortDescription: "Yüzdeler, yaş, birimler ve diğer günlük hesaplamalar.",
      intro:
        "Bu hesap makineleri belirli bir sayısal soruyu yanıtlar: yüzde, yüzde değişim, indirimli fiyat, bahşiş, satış vergisi, yaş, iki tarih arasındaki gün veya iş günü sayısı, birim dönüştürme, kredi veya konut kredisi tahmini, ücret, oda alanı, not ortalaması (GPA) ya da bir aralıkta rastgele sayı.",
      audience:
        "Bir elektronik tablonun fazla geleceği durumlarda kullanın. Bunlar aritmetik yardımcılarıdır. Kredi, vergi ve ücret sonuçları tahminidir; finansal, vergi, tıbbi veya mühendislik tavsiyesi değildir.",
    },
    "text-tools": {
      name: "Metin Araçları",
      description: "Yazma ve metin işleme araçları",
      shortDescription: "Tarayıcıda metin sayın, temizleyin, dönüştürün ve biçimlendirin.",
      intro:
        "Metin araçları kelime ve karakter sayar, büyük/küçük harfi değiştirir, bulup değiştirir, satır sonlarını kaldırır, satırları numaralandırır, yinelenen satırları veya fazla boşlukları siler, satırları sıralar, iki taslağı karşılaştırır ve bir tasarım için yer tutucu metin üretir.",
      audience:
        "Yazarlar, editörler ve bir belgeden ya da tablodan yapıştırılan metni temizleyen herkes içindir. Yapıştırdığınız metin tarayıcıda kalır.",
    },
    "developer-tools": {
      name: "Geliştirici Araçları",
      description: "Verileri tarayıcıda biçimlendirin, kodlayın, küçültün ve dönüştürün",
      shortDescription: "JSON’u biçimlendirin, veri kodlayın, kodu küçültün ve Markdown ya da HTML’i yerelde dönüştürün.",
      intro:
        "Geliştirici araçları JSON’u biçimlendirir, JSON ile CSV arasında dönüştürür, düzenli ifadeleri test eder, metnin SHA-256 veya SHA-512 özetini alır, Base64, URL ve HTML kodlar ve çözer, HTML, CSS veya JavaScript’i küçültür, Markdown’ı dönüştürür ve UUID ya da Unix zaman damgası üretir. Buradaki renk araçları hex değerlerini RGB’ye çevirir, kontrastı kontrol eder ve CSS gradyanları ile gölgeleri oluşturur.",
      audience:
        "Kod veya veri düzenleyen ve paket kurmadan sonucu sayfada görmek isteyenler içindir. Küçültücüler ve dönüştürücüler her biçimin kurallarına uyar; geçersiz girdi sessizce yeniden yazılmak yerine reddedilir.",
    },
    "image-tools": {
      name: "Görsel Araçları",
      description: "Tarayıcı tabanlı görsel ve PDF araçları",
      shortDescription: "Görselleri ve PDF’leri yüklemeden sıkıştırın, dönüştürün ve inceleyin.",
      intro:
        "Görsel araçları bir resmi sıkıştırır, yeniden boyutlandırır, kırpar, dönüştürür ve renk örnekler. Bu kategorideki PDF araçları birleştirir, böler, sıkıştırır, sayfa sayar, meta verileri okur veya kaldırır, metin çıkarır, sayfaları JPG görsellere dönüştürür ve görsellerden ya da metinden PDF oluşturur.",
      audience:
        "Dosyalar tarayıcıda işlenir. Taranmış bir PDF seçilebilir metin vermeyebilir. Sıkıştırma ve dönüştürme kaliteyi düşürebilir; orijinali değiştirmeden önce indirilen dosyayı kontrol edin.",
    },
    "seo-utilities": {
      name: "SEO ve Yardımcı Araçlar",
      description: "Bağlantılar, slug’lar, QR kodları ve şifreler",
      shortDescription: "UTM bağlantıları ve slug’lar oluşturun, QR kodu oluşturun veya tarayın ve şifre üretin.",
      intro:
        "Bu yardımcı araçlar bir kampanya URL’si oluşturur, bir başlığı URL slug’ına çevirir, metinden veya yapılandırılmış veriden QR kodu üretir, kamerayla ya da bir görselden QR kodu tarar ve yerelde şifre üretir.",
      audience:
        "Temel QR aracı düz metin veya URL kodlar. QR Code Generator Pro; Wi-Fi, kişi ve renk seçenekleri ekler. Şifre üreteci bu cihazda bir dize oluşturur. Bir şifre yöneticisi değildir.",
    },
    "ai-tools": {
      name: "Yapay Zekâ Araçları",
      description: "Prompt oluşturucular ve yazma araçları, isteğe bağlı Gemini yapay zekâsıyla",
      shortDescription: "Tarayıcıda veya Gemini yapay zekâsıyla prompt oluşturun, yazı kalıplarını inceleyin ve taslağı kısaltın.",
      intro:
        "Bu araçlar bir prompt yazmanıza, bir görsel ya da video sahnesini tarif etmenize, yazı kalıplarını incelemenize veya uzun bir taslağı kısaltmanıza yardımcı olur. Her aracın ana düğmesi tarayıcınızda çalışır. Yapay zekâ düğmeleri (Generate, Analyze, Compress veya Humanize with AI) girdiğiniz metni sonucu üretmesi için Google’ın Gemini modeline gönderir.",
      audience:
        "Metninizin bu cihazdan çıkmasını istemiyorsanız tarayıcı düğmesini, Gemini’nin metni yeniden yazmasını veya genişletmesini istiyorsanız bir yapay zekâ düğmesini kullanın. Gemini’ye gönderilen metin bu sitede saklanmaz. Prompt araçları görsel ya da video değil, metin döndürür. Yazma araçları yazarlığa karar vermez ve kısaltılmış bir taslağın bir dedektörü geçeceğini garanti etmez.",
    },
  },
};

export default messages;
