import type { PrefixedLocale } from "../config.ts";

/**
 * CPS Test name and short description per language. Kept separate from the
 * long page content because the search box loads these on the client.
 */
export const cpsTestNames: Record<PrefixedLocale, readonly [name: string, description: string]> = {
  "pt-br": [
    "Teste de CPS",
    "Teste de CPS (teste de velocidade de clique) grátis: clique de 1 a 60 segundos, incluindo o teste de 10 segundos, e veja seus cliques por segundo, sua classificação e seu recorde.",
  ],
  nl: [
    "CPS-test",
    "Gratis CPS-test (kliksnelheidstest): klik 1 tot 60 seconden, ook de klassieke test van 10 seconden, en zie je klikken per seconde, je niveau en je record.",
  ],
  ar: [
    "اختبار CPS",
    "اختبار CPS مجاني لقياس سرعة النقر: انقر من ثانية واحدة إلى 60 ثانية، ومنها اختبار النقر لمدة 10 ثوانٍ، واعرف عدد نقراتك في الثانية وتصنيفك وأفضل نتيجة لك.",
  ],
  es: [
    "Test de CPS",
    "Test de CPS gratis (prueba de velocidad de clic): haz clic de 1 a 60 segundos, incluida la prueba de 10 segundos, y mira tus clics por segundo, tu nivel y tu récord.",
  ],
  fr: [
    "Test CPS",
    "Test CPS gratuit (test de vitesse de clic) : cliquez de 1 à 60 secondes, dont le test de 10 secondes, et voyez vos clics par seconde, votre niveau et votre record.",
  ],
  id: [
    "Tes CPS",
    "Tes CPS gratis (tes kecepatan klik): klik selama 1 sampai 60 detik, termasuk tes klik 10 detik, lalu lihat klik per detik, peringkat, dan skor terbaik Anda.",
  ],
  de: [
    "CPS-Test",
    "Kostenloser CPS-Test (Klickgeschwindigkeitstest): 1 bis 60 Sekunden klicken, auch der 10-Sekunden-Klicktest, und Klicks pro Sekunde, Stufe und Bestwert sehen.",
  ],
  it: [
    "Test CPS",
    "Test CPS gratuito (test di velocità di clic): clicca da 1 a 60 secondi, compreso il test da 10 secondi, e vedi i tuoi clic al secondo, il livello e il record.",
  ],
  tr: [
    "CPS Testi",
    "Ücretsiz CPS testi (tıklama hızı testi): 10 saniyelik tıklama testi dahil 1 ile 60 saniye arasında tıklayın; saniyedeki tıklama sayınızı, seviyenizi ve en iyi skorunuzu görün.",
  ],
  ru: [
    "CPS тест",
    "Бесплатный CPS тест (тест скорости кликов): кликайте от 1 до 60 секунд, включая тест на 10 секунд, и узнайте свои клики в секунду, уровень и рекорд.",
  ],
  hi: [
    "CPS टेस्ट",
    "मुफ़्त CPS टेस्ट (क्लिक स्पीड टेस्ट): 1 से 60 सेकंड तक क्लिक करें, 10 सेकंड वाला क्लिक टेस्ट भी, और अपने क्लिक प्रति सेकंड, रेटिंग और सर्वश्रेष्ठ स्कोर देखें।",
  ],
  ur: [
    "CPS ٹیسٹ",
    "مفت CPS ٹیسٹ (کلک اسپیڈ ٹیسٹ): 1 سے 60 سیکنڈ تک کلک کریں، 10 سیکنڈ کا کلک ٹیسٹ بھی، اور اپنے کلک فی سیکنڈ، درجہ اور بہترین اسکور دیکھیں۔",
  ],
  ja: [
    "CPSテスト",
    "無料のCPSテスト（クリック速度テスト）。定番の10秒テストを含む1〜60秒でクリックし、1秒あたりのクリック数、ランク、ベストスコアを確認できます。",
  ],
  ko: [
    "CPS 테스트",
    "무료 CPS 테스트(클릭 속도 테스트): 10초 클릭 테스트를 포함해 1~60초 동안 클릭하고 초당 클릭 수, 등급, 최고 기록을 확인하세요.",
  ],
};
