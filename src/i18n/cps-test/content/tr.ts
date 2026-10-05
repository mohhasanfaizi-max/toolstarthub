import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "CPS Testi: Tıklama Hızı ve Saniyede Tıklama",
  quickAnswer:
    "CPS testi, belirli bir sürede kaç kez tıkladığınızı sayar ve bunu saniyeye bölerek saniyedeki tıklama sayınızı verir. Tek parmakla normal tıklama çoğu zaman 6 ile 7 CPS civarındadır; ortalama olarak en sık söylenen değer budur. Jitter ve butterfly tıklama daha yüksek sonuç verebilir.",
  headings: {
    about: "Bu araç ne yapar",
    howTo: "Nasıl kullanılır",
    examples: "Örnekler",
    features: "Başlıca özellikler",
    howItWorks: "Nasıl çalışır",
    tips: "İpuçları",
    limitations: "Sınırlamalar",
    faq: "Sık sorulan sorular",
    disclaimer: "Bu araçların neyi kapsamadığı için {link} metnine bakın.",
    disclaimerLink: "sorumluluk reddi",
  },
  content: {
    about:
      "Tıklama hızınızı saniyede tıklama (CPS) olarak ölçün. 1, 5, 10, 15, 30 veya 60 saniyeyi seçin, sonra kutuya olabildiğince hızlı tıklayın ya da dokunun. Süre ilk tıklamayla başlar. Süre bitince CPS değerinizi, Kaplumbağa'dan Şimşek'e kadar bir seviyeyi ve o süre için en iyi skorunuzu görürsünüz. Sağ tık ve Boşluk tuşu modları da vardır.",
    howTo: [
      "Test süresini seçin. 10 saniye en yaygın tıklama testidir. 1 ve 5 saniye kısa patlamaları, 30 ve 60 saniye dayanıklılığı ölçer.",
      "Neyin sayılacağını seçin: sol tık, sağ tık veya Boşluk tuşu. Telefon ya da tablette sol tıkı bırakın ve ekrana dokunun.",
      "Kutuya tıklayın veya dokunun. İlk tıklama sayılır ve süreyi başlatır.",
      "Süre 0 olana kadar tıklamaya devam edin. Saniyedeki tıklama, seviye ve en iyi skor hemen görünür. Baştan başlamak için Sıfırla'ya basın.",
    ],
    features: [
      "Altı test süresi: 1, 5, 10, 15, 30 ve 60 saniye.",
      "Tıklarken canlı güncellenen süre, tıklama sayısı ve saniyedeki tıklama.",
      "Kaplumbağa'dan (5 CPS altı) Şimşek'e (14 CPS ve üstü) kadar bir seviye.",
      "Her süre ve mod için bu tarayıcıda saklanan en iyi skor.",
      "Sol tık, sağ tık ve Boşluk tuşu modları. Tıklama modlarında Boşluk ve Enter sayılmaz; Boşluk modunda basılı tutulan tuş asla tekrarlanmaz.",
      "Dokunmatik desteği, her dokunuşta tam olarak bir sayım.",
    ],
    examples: [
      {
        title: "10 saniyelik tıklama testi",
        body: "10 saniyede 72 tıklama, 72 ÷ 10 = 7,2 CPS eder; bu Tavşan seviyesidir.",
      },
      {
        title: "1 saniyelik patlama",
        body: "1 saniyede 9 tıklama 9 CPS eder, At seviyesi. Kısa testler genelde uzun testlerden daha yüksek skor verir, çünkü el yorulmaya fırsat bulmaz.",
      },
    ],
    explanation:
      "CPS, sayılan tıklamaların saniye cinsinden test süresine bölünmesiyle bulunur. Süre sabittir; 10 saniyelik bir test, son tıklamanız biraz erken gelse bile her zaman 10'a bölünür. Her basış bir kez sayılır: bir fare tuşu, ekrana bir dokunuş ya da Boşluk modunda Boşluk tuşu. Basılı tutulan tuş, Enter ve bağlam menüsünü açacak tıklama fazladan bir şey eklemez.",
    tips: [
      "Bileğinizi masaya dayayın ve tüm kolla değil, parmak ucuyla tıklayın.",
      "10 saniye veya daha uzun bir testte rekor denemeden önce 5 saniyelik bir testle ısının.",
      "Jitter veya butterfly tıklamayı yalnızca kısa testlerde deneyin; eliniz ya da bileğiniz ağrırsa bırakın.",
    ],
    limitations:
      "Sonuç farenize, dokunmatik ekranınıza ve tarayıcınıza bağlıdır; bu yüzden farklı cihazlardaki skorlar doğrudan karşılaştırılamaz. Kendi kendine çift tıklayan bir fare sayımı şişirir. Test, otomatik tıklayıcı ya da makro kullanılıp kullanılmadığını anlayamaz. En iyi skorlar bu tarayıcının yerel depolamasında durur; site verilerini silmek onları da siler.",
    faqs: [
      {
        question: "CPS testi nedir?",
        answer:
          "CPS testi saniyedeki tıklama sayısını ölçer. Belirli bir süre boyunca olabildiğince hızlı tıklarsınız ve toplam tıklama saniyeye bölünür. 10 saniyelik tıklama testi en yaygın sürümdür.",
      },
      {
        question: "Ortalama CPS kaçtır?",
        answer:
          "Tek parmakla normal tıklamada en sık söylenen değer yaklaşık 6 ile 7 CPS'dir. Bunu ölçülmüş bir standart değil, kaba bir rehber olarak görün. Eliniz, fareniz ve test süresi sonucu değiştirir.",
      },
      {
        question: "10 CPS iyi mi?",
        answer:
          "Evet. 10 saniye boyunca 10 CPS, çoğu kişinin normal tıklamayla ulaştığının üstündedir ve burada At seviyesini verir. 10 CPS'yi geçenlerin çoğu jitter veya butterfly tıklama kullanır.",
      },
      {
        question: "Daha hızlı nasıl tıklarım?",
        answer:
          "Kavrayışınızı gevşetin, bileğinizi masaya dayayın ve koldan değil parmaktan tıklayın. Kısa testlerle çalışın ve en iyi skorunuzu takip edin. Jitter ve butterfly tıklama CPS'yi artırabilir ama isabeti düşürür ve eli daha çok yorar.",
      },
      {
        question: "Jitter tıklama ile butterfly tıklama arasındaki fark nedir?",
        answer:
          "Jitter tıklamada ön kolunuzu gerersiniz, böylece tek parmak tuşun üzerinde titrer. Butterfly tıklamada iki parmak aynı tuşa sırayla basar. Butterfly çoğu zaman daha yüksek skor verir, ancak bazı fareler ve bazı oyun sunucuları bunu iyi karşılamaz.",
      },
      {
        question: "Skorlarım bir sunucuya gönderiliyor mu?",
        answer:
          "Hayır. Test bu tarayıcı sekmesinde çalışır. En iyi skorlar yalnızca bu tarayıcının yerel depolamasında saklanır ve En iyi skorları sil düğmesi onları kaldırır.",
      },
    ],
  },
};

export default page;
