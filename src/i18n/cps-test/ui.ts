import type { Locale } from "../config.ts";
import type { CpsMode, CpsTierId } from "../../lib/tools/cps-test.ts";

/** Workspace strings for the CPS Test, in every site language. */
export type CpsUi = {
  intro: string;
  durationLegend: string;
  /** Short duration label, {n} is the number of seconds. */
  seconds: string;
  modeLegend: string;
  modes: Record<CpsMode, string>;
  padStart: Record<CpsMode, string>;
  padRunning: Record<CpsMode, string>;
  padDone: string;
  padAgain: Record<CpsMode, string>;
  hints: Record<CpsMode, string>;
  timeLeft: string;
  clicks: string;
  cps: string;
  best: string;
  resultHeading: string;
  cpsLong: string;
  rating: string;
  tiers: Record<CpsTierId, string>;
  scaleHeading: string;
  /** {max} is a number of clicks per second. */
  scaleBelow: string;
  /** {min} is a number of clicks per second. */
  scaleFrom: string;
  newBest: string;
  /** {seconds} test length, {mode} the input name. */
  bestFor: string;
  reset: string;
  clearBest: string;
  cleared: string;
  started: string;
  /** {clicks}, {cps}, {rating}. */
  finished: string;
  privacy: string;
  guideLink: string;
};

const en: CpsUi = {
  intro:
    "Click or tap the box as fast as you can. The timer starts with your first click and stops on its own.",
  durationLegend: "Test length",
  seconds: "{n} s",
  modeLegend: "What counts",
  modes: { left: "Left clicks", right: "Right clicks", space: "Spacebar" },
  padStart: {
    left: "Click or tap here to start",
    right: "Right-click here to start",
    space: "Press Space here to start",
  },
  padRunning: {
    left: "Keep clicking!",
    right: "Keep right-clicking!",
    space: "Keep pressing Space!",
  },
  padDone: "Time's up!",
  padAgain: {
    left: "Click to try again",
    right: "Right-click to try again",
    space: "Press Space to try again",
  },
  hints: {
    left: "Space and Enter do not count in this mode. Keyboard users can choose Spacebar.",
    right: "Only right clicks count. The menu that usually opens is blocked inside the box.",
    space: "Focus the box, then press Space. Holding the key does not repeat; each press counts once.",
  },
  timeLeft: "Time left",
  clicks: "Clicks",
  cps: "CPS",
  best: "Best",
  resultHeading: "Your result",
  cpsLong: "clicks per second",
  rating: "Rating",
  tiers: {
    turtle: "Turtle",
    cat: "Cat",
    rabbit: "Rabbit",
    horse: "Horse",
    cheetah: "Cheetah",
    lightning: "Lightning",
  },
  scaleHeading: "Rating scale",
  scaleBelow: "under {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "New best score!",
  bestFor: "Best for {seconds} ({mode})",
  reset: "Reset",
  clearBest: "Clear best scores",
  cleared: "Best scores cleared.",
  started: "Test started.",
  finished: "Time's up. Clicks: {clicks}. Clicks per second: {cps}. Rating: {rating}.",
  privacy:
    "The test runs in this tab and keeps working offline once the page has loaded. Best scores are saved only in this browser's local storage.",
  guideLink: "Read how to click faster",
};

const ptBr: CpsUi = {
  intro:
    "Clique ou toque na caixa o mais rápido que puder. O cronômetro começa no primeiro clique e para sozinho.",
  durationLegend: "Duração do teste",
  seconds: "{n} s",
  modeLegend: "O que conta",
  modes: { left: "Clique esquerdo", right: "Clique direito", space: "Barra de espaço" },
  padStart: {
    left: "Clique ou toque aqui para começar",
    right: "Clique com o botão direito aqui para começar",
    space: "Pressione Espaço aqui para começar",
  },
  padRunning: {
    left: "Continue clicando!",
    right: "Continue clicando com o botão direito!",
    space: "Continue apertando Espaço!",
  },
  padDone: "Tempo esgotado!",
  padAgain: {
    left: "Clique para tentar de novo",
    right: "Clique com o botão direito para tentar de novo",
    space: "Pressione Espaço para tentar de novo",
  },
  hints: {
    left: "Espaço e Enter não contam neste modo. Quem usa o teclado pode escolher Barra de espaço.",
    right: "Só cliques com o botão direito contam. O menu que costuma abrir fica bloqueado dentro da caixa.",
    space: "Selecione a caixa e pressione Espaço. Segurar a tecla não repete; cada toque conta uma vez.",
  },
  timeLeft: "Tempo restante",
  clicks: "Cliques",
  cps: "CPS",
  best: "Recorde",
  resultHeading: "Seu resultado",
  cpsLong: "cliques por segundo",
  rating: "Classificação",
  tiers: {
    turtle: "Tartaruga",
    cat: "Gato",
    rabbit: "Coelho",
    horse: "Cavalo",
    cheetah: "Guepardo",
    lightning: "Relâmpago",
  },
  scaleHeading: "Escala de classificação",
  scaleBelow: "menos de {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "Novo recorde!",
  bestFor: "Recorde em {seconds} ({mode})",
  reset: "Reiniciar",
  clearBest: "Apagar recordes",
  cleared: "Recordes apagados.",
  started: "Teste iniciado.",
  finished: "Tempo esgotado. Cliques: {clicks}. Cliques por segundo: {cps}. Classificação: {rating}.",
  privacy:
    "O teste roda nesta aba e continua funcionando offline depois que a página carrega. Os recordes ficam salvos só no armazenamento local deste navegador.",
  guideLink: "Veja como clicar mais rápido (em inglês)",
};

const nl: CpsUi = {
  intro:
    "Klik of tik zo snel mogelijk op het vak. De timer start bij je eerste klik en stopt vanzelf.",
  durationLegend: "Duur van de test",
  seconds: "{n} s",
  modeLegend: "Wat telt",
  modes: { left: "Linkermuisklik", right: "Rechtermuisklik", space: "Spatiebalk" },
  padStart: {
    left: "Klik of tik hier om te starten",
    right: "Klik hier met rechts om te starten",
    space: "Druk hier op spatie om te starten",
  },
  padRunning: {
    left: "Blijf klikken!",
    right: "Blijf met rechts klikken!",
    space: "Blijf op spatie drukken!",
  },
  padDone: "De tijd is om!",
  padAgain: {
    left: "Klik om het opnieuw te proberen",
    right: "Klik met rechts om het opnieuw te proberen",
    space: "Druk op spatie om het opnieuw te proberen",
  },
  hints: {
    left: "Spatie en Enter tellen in deze modus niet mee. Toetsenbordgebruikers kunnen Spatiebalk kiezen.",
    right: "Alleen rechtermuisklikken tellen. Het menu dat normaal opent, is in het vak geblokkeerd.",
    space: "Zet de focus op het vak en druk op spatie. Ingedrukt houden herhaalt niet; elke druk telt één keer.",
  },
  timeLeft: "Resterende tijd",
  clicks: "Klikken",
  cps: "CPS",
  best: "Record",
  resultHeading: "Je resultaat",
  cpsLong: "klikken per seconde",
  rating: "Niveau",
  tiers: {
    turtle: "Schildpad",
    cat: "Kat",
    rabbit: "Konijn",
    horse: "Paard",
    cheetah: "Jachtluipaard",
    lightning: "Bliksem",
  },
  scaleHeading: "Niveauschaal",
  scaleBelow: "minder dan {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "Nieuw record!",
  bestFor: "Record voor {seconds} ({mode})",
  reset: "Opnieuw",
  clearBest: "Records wissen",
  cleared: "Records gewist.",
  started: "Test gestart.",
  finished: "De tijd is om. Klikken: {clicks}. Klikken per seconde: {cps}. Niveau: {rating}.",
  privacy:
    "De test draait in dit tabblad en werkt ook offline zodra de pagina geladen is. Records worden alleen in de lokale opslag van deze browser bewaard.",
  guideLink: "Lees hoe je sneller klikt (Engels)",
};

const ar: CpsUi = {
  intro:
    "انقر أو المس المربع بأسرع ما يمكنك. يبدأ المؤقت مع أول نقرة ويتوقف تلقائيًا.",
  durationLegend: "مدة الاختبار",
  seconds: "{n} ث",
  modeLegend: "ما الذي يُحتسب",
  modes: { left: "النقر الأيسر", right: "النقر الأيمن", space: "مفتاح المسافة" },
  padStart: {
    left: "انقر أو المس هنا للبدء",
    right: "انقر بالزر الأيمن هنا للبدء",
    space: "اضغط مفتاح المسافة هنا للبدء",
  },
  padRunning: {
    left: "واصل النقر!",
    right: "واصل النقر بالزر الأيمن!",
    space: "واصل الضغط على المسافة!",
  },
  padDone: "انتهى الوقت!",
  padAgain: {
    left: "انقر للمحاولة مجددًا",
    right: "انقر بالزر الأيمن للمحاولة مجددًا",
    space: "اضغط المسافة للمحاولة مجددًا",
  },
  hints: {
    left: "لا يُحتسب مفتاح المسافة ولا Enter في هذا الوضع. يمكن لمستخدمي لوحة المفاتيح اختيار «مفتاح المسافة».",
    right: "تُحتسب النقرات اليمنى فقط. القائمة التي تظهر عادةً محجوبة داخل المربع.",
    space: "ضع التركيز على المربع ثم اضغط المسافة. الضغط المطوّل لا يتكرر؛ كل ضغطة تُحتسب مرة واحدة.",
  },
  timeLeft: "الوقت المتبقي",
  clicks: "النقرات",
  cps: "CPS",
  best: "أفضل نتيجة",
  resultHeading: "نتيجتك",
  cpsLong: "نقرة في الثانية",
  rating: "التصنيف",
  tiers: {
    turtle: "سلحفاة",
    cat: "قطة",
    rabbit: "أرنب",
    horse: "حصان",
    cheetah: "فهد",
    lightning: "برق",
  },
  scaleHeading: "مقياس التصنيف",
  scaleBelow: "أقل من {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "أفضل نتيجة جديدة!",
  bestFor: "أفضل نتيجة لمدة {seconds} ({mode})",
  reset: "إعادة الضبط",
  clearBest: "مسح أفضل النتائج",
  cleared: "تم مسح أفضل النتائج.",
  started: "بدأ الاختبار.",
  finished: "انتهى الوقت. النقرات: {clicks}. النقرات في الثانية: {cps}. التصنيف: {rating}.",
  privacy:
    "يعمل الاختبار في هذه الصفحة ويستمر دون اتصال بعد تحميلها. تُحفظ أفضل النتائج في التخزين المحلي لهذا المتصفح فقط.",
  guideLink: "اقرأ كيف تنقر أسرع (بالإنجليزية)",
};

const es: CpsUi = {
  intro:
    "Haz clic o toca el recuadro lo más rápido que puedas. El temporizador empieza con tu primer clic y se detiene solo.",
  durationLegend: "Duración de la prueba",
  seconds: "{n} s",
  modeLegend: "Qué cuenta",
  modes: { left: "Clic izquierdo", right: "Clic derecho", space: "Barra espaciadora" },
  padStart: {
    left: "Haz clic o toca aquí para empezar",
    right: "Haz clic derecho aquí para empezar",
    space: "Pulsa Espacio aquí para empezar",
  },
  padRunning: {
    left: "¡Sigue haciendo clic!",
    right: "¡Sigue con el clic derecho!",
    space: "¡Sigue pulsando Espacio!",
  },
  padDone: "¡Se acabó el tiempo!",
  padAgain: {
    left: "Haz clic para intentarlo de nuevo",
    right: "Haz clic derecho para intentarlo de nuevo",
    space: "Pulsa Espacio para intentarlo de nuevo",
  },
  hints: {
    left: "Espacio y Enter no cuentan en este modo. Si usas el teclado, elige Barra espaciadora.",
    right: "Solo cuentan los clics derechos. El menú que suele abrirse está bloqueado dentro del recuadro.",
    space: "Selecciona el recuadro y pulsa Espacio. Mantener la tecla no repite; cada pulsación cuenta una vez.",
  },
  timeLeft: "Tiempo restante",
  clicks: "Clics",
  cps: "CPS",
  best: "Récord",
  resultHeading: "Tu resultado",
  cpsLong: "clics por segundo",
  rating: "Nivel",
  tiers: {
    turtle: "Tortuga",
    cat: "Gato",
    rabbit: "Conejo",
    horse: "Caballo",
    cheetah: "Guepardo",
    lightning: "Rayo",
  },
  scaleHeading: "Escala de niveles",
  scaleBelow: "menos de {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "¡Nuevo récord!",
  bestFor: "Récord en {seconds} ({mode})",
  reset: "Reiniciar",
  clearBest: "Borrar récords",
  cleared: "Récords borrados.",
  started: "Prueba iniciada.",
  finished: "Se acabó el tiempo. Clics: {clicks}. Clics por segundo: {cps}. Nivel: {rating}.",
  privacy:
    "La prueba funciona en esta pestaña y sigue funcionando sin conexión una vez cargada la página. Los récords se guardan solo en el almacenamiento local de este navegador.",
  guideLink: "Lee cómo hacer clic más rápido (en inglés)",
};

const fr: CpsUi = {
  intro:
    "Cliquez ou touchez la zone le plus vite possible. Le chrono démarre au premier clic et s'arrête tout seul.",
  durationLegend: "Durée du test",
  seconds: "{n} s",
  modeLegend: "Ce qui compte",
  modes: { left: "Clic gauche", right: "Clic droit", space: "Barre d'espace" },
  padStart: {
    left: "Cliquez ou touchez ici pour commencer",
    right: "Faites un clic droit ici pour commencer",
    space: "Appuyez sur Espace ici pour commencer",
  },
  padRunning: {
    left: "Continuez à cliquer !",
    right: "Continuez le clic droit !",
    space: "Continuez d'appuyer sur Espace !",
  },
  padDone: "Temps écoulé !",
  padAgain: {
    left: "Cliquez pour réessayer",
    right: "Faites un clic droit pour réessayer",
    space: "Appuyez sur Espace pour réessayer",
  },
  hints: {
    left: "Espace et Entrée ne comptent pas dans ce mode. Au clavier, choisissez Barre d'espace.",
    right: "Seuls les clics droits comptent. Le menu qui s'ouvre d'habitude est bloqué dans la zone.",
    space: "Placez le focus sur la zone puis appuyez sur Espace. Maintenir la touche ne répète pas ; chaque appui compte une fois.",
  },
  timeLeft: "Temps restant",
  clicks: "Clics",
  cps: "CPS",
  best: "Record",
  resultHeading: "Votre résultat",
  cpsLong: "clics par seconde",
  rating: "Niveau",
  tiers: {
    turtle: "Tortue",
    cat: "Chat",
    rabbit: "Lapin",
    horse: "Cheval",
    cheetah: "Guépard",
    lightning: "Éclair",
  },
  scaleHeading: "Échelle des niveaux",
  scaleBelow: "moins de {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "Nouveau record !",
  bestFor: "Record sur {seconds} ({mode})",
  reset: "Réinitialiser",
  clearBest: "Effacer les records",
  cleared: "Records effacés.",
  started: "Test lancé.",
  finished: "Temps écoulé. Clics : {clicks}. Clics par seconde : {cps}. Niveau : {rating}.",
  privacy:
    "Le test s'exécute dans cet onglet et fonctionne hors ligne une fois la page chargée. Les records sont enregistrés uniquement dans le stockage local de ce navigateur.",
  guideLink: "Lire comment cliquer plus vite (en anglais)",
};

const id: CpsUi = {
  intro:
    "Klik atau ketuk kotak secepat mungkin. Timer mulai saat klik pertama dan berhenti sendiri.",
  durationLegend: "Durasi tes",
  seconds: "{n} dtk",
  modeLegend: "Yang dihitung",
  modes: { left: "Klik kiri", right: "Klik kanan", space: "Spasi" },
  padStart: {
    left: "Klik atau ketuk di sini untuk mulai",
    right: "Klik kanan di sini untuk mulai",
    space: "Tekan Spasi di sini untuk mulai",
  },
  padRunning: {
    left: "Terus klik!",
    right: "Terus klik kanan!",
    space: "Terus tekan Spasi!",
  },
  padDone: "Waktu habis!",
  padAgain: {
    left: "Klik untuk mencoba lagi",
    right: "Klik kanan untuk mencoba lagi",
    space: "Tekan Spasi untuk mencoba lagi",
  },
  hints: {
    left: "Spasi dan Enter tidak dihitung di mode ini. Pengguna keyboard bisa memilih Spasi.",
    right: "Hanya klik kanan yang dihitung. Menu yang biasanya muncul diblokir di dalam kotak.",
    space: "Fokuskan kotak, lalu tekan Spasi. Menahan tombol tidak diulang; setiap tekanan dihitung sekali.",
  },
  timeLeft: "Sisa waktu",
  clicks: "Klik",
  cps: "CPS",
  best: "Terbaik",
  resultHeading: "Hasil Anda",
  cpsLong: "klik per detik",
  rating: "Peringkat",
  tiers: {
    turtle: "Kura-kura",
    cat: "Kucing",
    rabbit: "Kelinci",
    horse: "Kuda",
    cheetah: "Cheetah",
    lightning: "Kilat",
  },
  scaleHeading: "Skala peringkat",
  scaleBelow: "di bawah {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "Skor terbaik baru!",
  bestFor: "Terbaik untuk {seconds} ({mode})",
  reset: "Atur ulang",
  clearBest: "Hapus skor terbaik",
  cleared: "Skor terbaik dihapus.",
  started: "Tes dimulai.",
  finished: "Waktu habis. Klik: {clicks}. Klik per detik: {cps}. Peringkat: {rating}.",
  privacy:
    "Tes berjalan di tab ini dan tetap bisa dipakai offline setelah halaman dimuat. Skor terbaik hanya disimpan di penyimpanan lokal browser ini.",
  guideLink: "Baca cara klik lebih cepat (bahasa Inggris)",
};

const de: CpsUi = {
  intro:
    "Klicke oder tippe so schnell du kannst auf das Feld. Der Timer startet mit dem ersten Klick und stoppt von selbst.",
  durationLegend: "Testdauer",
  seconds: "{n} s",
  modeLegend: "Was zählt",
  modes: { left: "Linksklicks", right: "Rechtsklicks", space: "Leertaste" },
  padStart: {
    left: "Hier klicken oder tippen zum Starten",
    right: "Hier rechtsklicken zum Starten",
    space: "Hier die Leertaste drücken zum Starten",
  },
  padRunning: {
    left: "Weiterklicken!",
    right: "Weiter rechtsklicken!",
    space: "Weiter die Leertaste drücken!",
  },
  padDone: "Zeit abgelaufen!",
  padAgain: {
    left: "Klicken für einen neuen Versuch",
    right: "Rechtsklicken für einen neuen Versuch",
    space: "Leertaste für einen neuen Versuch",
  },
  hints: {
    left: "Leertaste und Enter zählen in diesem Modus nicht. Mit der Tastatur wähle Leertaste.",
    right: "Nur Rechtsklicks zählen. Das Kontextmenü ist im Feld blockiert.",
    space: "Setze den Fokus auf das Feld und drücke die Leertaste. Gedrückt halten wiederholt nicht; jeder Druck zählt einmal.",
  },
  timeLeft: "Restzeit",
  clicks: "Klicks",
  cps: "CPS",
  best: "Bestwert",
  resultHeading: "Dein Ergebnis",
  cpsLong: "Klicks pro Sekunde",
  rating: "Stufe",
  tiers: {
    turtle: "Schildkröte",
    cat: "Katze",
    rabbit: "Hase",
    horse: "Pferd",
    cheetah: "Gepard",
    lightning: "Blitz",
  },
  scaleHeading: "Stufenskala",
  scaleBelow: "unter {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "Neuer Bestwert!",
  bestFor: "Bestwert für {seconds} ({mode})",
  reset: "Zurücksetzen",
  clearBest: "Bestwerte löschen",
  cleared: "Bestwerte gelöscht.",
  started: "Test gestartet.",
  finished: "Zeit abgelaufen. Klicks: {clicks}. Klicks pro Sekunde: {cps}. Stufe: {rating}.",
  privacy:
    "Der Test läuft in diesem Tab und funktioniert nach dem Laden der Seite auch offline. Bestwerte werden nur im lokalen Speicher dieses Browsers gespeichert.",
  guideLink: "So klickst du schneller (Englisch)",
};

const it: CpsUi = {
  intro:
    "Clicca o tocca il riquadro il più velocemente possibile. Il timer parte al primo clic e si ferma da solo.",
  durationLegend: "Durata del test",
  seconds: "{n} s",
  modeLegend: "Cosa conta",
  modes: { left: "Clic sinistro", right: "Clic destro", space: "Barra spaziatrice" },
  padStart: {
    left: "Clicca o tocca qui per iniziare",
    right: "Fai clic destro qui per iniziare",
    space: "Premi Spazio qui per iniziare",
  },
  padRunning: {
    left: "Continua a cliccare!",
    right: "Continua con il clic destro!",
    space: "Continua a premere Spazio!",
  },
  padDone: "Tempo scaduto!",
  padAgain: {
    left: "Clicca per riprovare",
    right: "Fai clic destro per riprovare",
    space: "Premi Spazio per riprovare",
  },
  hints: {
    left: "Spazio e Invio non contano in questa modalità. Da tastiera scegli Barra spaziatrice.",
    right: "Contano solo i clic destri. Il menu che di solito si apre è bloccato nel riquadro.",
    space: "Metti il focus sul riquadro e premi Spazio. Tenere premuto non ripete; ogni pressione conta una volta.",
  },
  timeLeft: "Tempo rimasto",
  clicks: "Clic",
  cps: "CPS",
  best: "Record",
  resultHeading: "Il tuo risultato",
  cpsLong: "clic al secondo",
  rating: "Livello",
  tiers: {
    turtle: "Tartaruga",
    cat: "Gatto",
    rabbit: "Coniglio",
    horse: "Cavallo",
    cheetah: "Ghepardo",
    lightning: "Fulmine",
  },
  scaleHeading: "Scala dei livelli",
  scaleBelow: "meno di {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "Nuovo record!",
  bestFor: "Record su {seconds} ({mode})",
  reset: "Azzera",
  clearBest: "Cancella i record",
  cleared: "Record cancellati.",
  started: "Test avviato.",
  finished: "Tempo scaduto. Clic: {clicks}. Clic al secondo: {cps}. Livello: {rating}.",
  privacy:
    "Il test funziona in questa scheda e anche offline dopo il caricamento della pagina. I record sono salvati solo nella memoria locale di questo browser.",
  guideLink: "Leggi come cliccare più veloce (in inglese)",
};

const tr: CpsUi = {
  intro:
    "Kutuya olabildiğince hızlı tıklayın veya dokunun. Süre ilk tıklamayla başlar ve kendiliğinden durur.",
  durationLegend: "Test süresi",
  seconds: "{n} sn",
  modeLegend: "Sayılan",
  modes: { left: "Sol tık", right: "Sağ tık", space: "Boşluk tuşu" },
  padStart: {
    left: "Başlamak için buraya tıklayın veya dokunun",
    right: "Başlamak için buraya sağ tıklayın",
    space: "Başlamak için burada Boşluk tuşuna basın",
  },
  padRunning: {
    left: "Tıklamaya devam!",
    right: "Sağ tıklamaya devam!",
    space: "Boşluk tuşuna basmaya devam!",
  },
  padDone: "Süre doldu!",
  padAgain: {
    left: "Tekrar denemek için tıklayın",
    right: "Tekrar denemek için sağ tıklayın",
    space: "Tekrar denemek için Boşluk tuşuna basın",
  },
  hints: {
    left: "Bu modda Boşluk ve Enter sayılmaz. Klavye kullanıcıları Boşluk tuşu modunu seçebilir.",
    right: "Yalnızca sağ tıklar sayılır. Normalde açılan menü kutunun içinde engellenir.",
    space: "Kutuya odaklanın ve Boşluk tuşuna basın. Basılı tutmak tekrarlamaz; her basış bir kez sayılır.",
  },
  timeLeft: "Kalan süre",
  clicks: "Tıklama",
  cps: "CPS",
  best: "En iyi",
  resultHeading: "Sonucunuz",
  cpsLong: "saniyede tıklama",
  rating: "Seviye",
  tiers: {
    turtle: "Kaplumbağa",
    cat: "Kedi",
    rabbit: "Tavşan",
    horse: "At",
    cheetah: "Çita",
    lightning: "Şimşek",
  },
  scaleHeading: "Seviye ölçeği",
  scaleBelow: "{max} CPS altı",
  scaleFrom: "{min}+ CPS",
  newBest: "Yeni rekor!",
  bestFor: "{seconds} için en iyi ({mode})",
  reset: "Sıfırla",
  clearBest: "En iyi skorları sil",
  cleared: "En iyi skorlar silindi.",
  started: "Test başladı.",
  finished: "Süre doldu. Tıklama: {clicks}. Saniyede tıklama: {cps}. Seviye: {rating}.",
  privacy:
    "Test bu sekmede çalışır ve sayfa yüklendikten sonra çevrimdışı da çalışır. En iyi skorlar yalnızca bu tarayıcının yerel depolamasında saklanır.",
  guideLink: "Daha hızlı tıklamanın yollarını okuyun (İngilizce)",
};

const ru: CpsUi = {
  intro:
    "Кликайте или нажимайте на поле как можно быстрее. Таймер запускается с первым кликом и останавливается сам.",
  durationLegend: "Длительность теста",
  seconds: "{n} с",
  modeLegend: "Что считается",
  modes: { left: "Левый клик", right: "Правый клик", space: "Пробел" },
  padStart: {
    left: "Кликните или коснитесь здесь, чтобы начать",
    right: "Кликните правой кнопкой здесь, чтобы начать",
    space: "Нажмите здесь пробел, чтобы начать",
  },
  padRunning: {
    left: "Кликайте дальше!",
    right: "Кликайте правой кнопкой!",
    space: "Жмите пробел дальше!",
  },
  padDone: "Время вышло!",
  padAgain: {
    left: "Кликните, чтобы попробовать ещё раз",
    right: "Кликните правой кнопкой, чтобы попробовать ещё раз",
    space: "Нажмите пробел, чтобы попробовать ещё раз",
  },
  hints: {
    left: "Пробел и Enter в этом режиме не считаются. С клавиатуры выберите режим «Пробел».",
    right: "Считаются только правые клики. Контекстное меню внутри поля заблокировано.",
    space: "Наведите фокус на поле и нажимайте пробел. Удержание клавиши не повторяется: каждое нажатие считается один раз.",
  },
  timeLeft: "Осталось",
  clicks: "Клики",
  cps: "CPS",
  best: "Рекорд",
  resultHeading: "Ваш результат",
  cpsLong: "кликов в секунду",
  rating: "Уровень",
  tiers: {
    turtle: "Черепаха",
    cat: "Кошка",
    rabbit: "Кролик",
    horse: "Лошадь",
    cheetah: "Гепард",
    lightning: "Молния",
  },
  scaleHeading: "Шкала уровней",
  scaleBelow: "меньше {max} CPS",
  scaleFrom: "{min}+ CPS",
  newBest: "Новый рекорд!",
  bestFor: "Рекорд за {seconds} ({mode})",
  reset: "Сбросить",
  clearBest: "Удалить рекорды",
  cleared: "Рекорды удалены.",
  started: "Тест начался.",
  finished: "Время вышло. Клики: {clicks}. Кликов в секунду: {cps}. Уровень: {rating}.",
  privacy:
    "Тест работает в этой вкладке и после загрузки страницы работает даже офлайн. Рекорды сохраняются только в локальном хранилище этого браузера.",
  guideLink: "Как кликать быстрее (на английском)",
};

const hi: CpsUi = {
  intro:
    "बॉक्स पर जितनी तेज़ी से हो सके क्लिक या टैप करें। टाइमर पहले क्लिक से शुरू होता है और अपने आप रुक जाता है।",
  durationLegend: "टेस्ट की अवधि",
  seconds: "{n} से.",
  modeLegend: "क्या गिना जाएगा",
  modes: { left: "लेफ़्ट क्लिक", right: "राइट क्लिक", space: "स्पेसबार" },
  padStart: {
    left: "शुरू करने के लिए यहाँ क्लिक या टैप करें",
    right: "शुरू करने के लिए यहाँ राइट-क्लिक करें",
    space: "शुरू करने के लिए यहाँ स्पेस दबाएँ",
  },
  padRunning: {
    left: "क्लिक करते रहें!",
    right: "राइट-क्लिक करते रहें!",
    space: "स्पेस दबाते रहें!",
  },
  padDone: "समय खत्म!",
  padAgain: {
    left: "फिर से कोशिश करने के लिए क्लिक करें",
    right: "फिर से कोशिश करने के लिए राइट-क्लिक करें",
    space: "फिर से कोशिश करने के लिए स्पेस दबाएँ",
  },
  hints: {
    left: "इस मोड में स्पेस और Enter नहीं गिने जाते। कीबोर्ड उपयोगकर्ता स्पेसबार मोड चुन सकते हैं।",
    right: "सिर्फ़ राइट क्लिक गिने जाते हैं। आम तौर पर खुलने वाला मेन्यू बॉक्स के अंदर बंद रहता है।",
    space: "बॉक्स पर फ़ोकस करें और स्पेस दबाएँ। कुंजी दबाए रखने से दोहराव नहीं होता; हर दबाव एक बार गिना जाता है।",
  },
  timeLeft: "बचा समय",
  clicks: "क्लिक",
  cps: "CPS",
  best: "सर्वश्रेष्ठ",
  resultHeading: "आपका परिणाम",
  cpsLong: "क्लिक प्रति सेकंड",
  rating: "रेटिंग",
  tiers: {
    turtle: "कछुआ",
    cat: "बिल्ली",
    rabbit: "खरगोश",
    horse: "घोड़ा",
    cheetah: "चीता",
    lightning: "बिजली",
  },
  scaleHeading: "रेटिंग स्केल",
  scaleBelow: "{max} CPS से कम",
  scaleFrom: "{min}+ CPS",
  newBest: "नया सर्वश्रेष्ठ स्कोर!",
  bestFor: "{seconds} का सर्वश्रेष्ठ ({mode})",
  reset: "रीसेट करें",
  clearBest: "सर्वश्रेष्ठ स्कोर मिटाएँ",
  cleared: "सर्वश्रेष्ठ स्कोर मिटा दिए गए।",
  started: "टेस्ट शुरू हुआ।",
  finished: "समय खत्म। क्लिक: {clicks}। क्लिक प्रति सेकंड: {cps}। रेटिंग: {rating}।",
  privacy:
    "यह टेस्ट इसी टैब में चलता है और पेज लोड होने के बाद ऑफ़लाइन भी काम करता है। सर्वश्रेष्ठ स्कोर सिर्फ़ इस ब्राउज़र के लोकल स्टोरेज में सेव होते हैं।",
  guideLink: "तेज़ क्लिक करने का तरीका पढ़ें (अंग्रेज़ी में)",
};

const ur: CpsUi = {
  intro:
    "باکس پر جتنی تیزی سے ہو سکے کلک یا ٹیپ کریں۔ ٹائمر پہلے کلک سے شروع ہوتا ہے اور خود ہی رک جاتا ہے۔",
  durationLegend: "ٹیسٹ کا دورانیہ",
  seconds: "{n} سیکنڈ",
  modeLegend: "کیا گنا جائے گا",
  modes: { left: "بایاں کلک", right: "دایاں کلک", space: "اسپیس بار" },
  padStart: {
    left: "شروع کرنے کے لیے یہاں کلک یا ٹیپ کریں",
    right: "شروع کرنے کے لیے یہاں دایاں کلک کریں",
    space: "شروع کرنے کے لیے یہاں اسپیس دبائیں",
  },
  padRunning: {
    left: "کلک کرتے رہیں!",
    right: "دایاں کلک کرتے رہیں!",
    space: "اسپیس دباتے رہیں!",
  },
  padDone: "وقت ختم!",
  padAgain: {
    left: "دوبارہ کوشش کے لیے کلک کریں",
    right: "دوبارہ کوشش کے لیے دایاں کلک کریں",
    space: "دوبارہ کوشش کے لیے اسپیس دبائیں",
  },
  hints: {
    left: "اس موڈ میں اسپیس اور Enter نہیں گنے جاتے۔ کی بورڈ استعمال کرنے والے اسپیس بار موڈ چن سکتے ہیں۔",
    right: "صرف دائیں کلک گنے جاتے ہیں۔ عام طور پر کھلنے والا مینو باکس کے اندر بند رہتا ہے۔",
    space: "باکس پر فوکس کریں اور اسپیس دبائیں۔ کلید دبائے رکھنے سے تکرار نہیں ہوتی؛ ہر دباؤ ایک بار گنا جاتا ہے۔",
  },
  timeLeft: "باقی وقت",
  clicks: "کلکس",
  cps: "CPS",
  best: "بہترین",
  resultHeading: "آپ کا نتیجہ",
  cpsLong: "کلک فی سیکنڈ",
  rating: "درجہ",
  tiers: {
    turtle: "کچھوا",
    cat: "بلی",
    rabbit: "خرگوش",
    horse: "گھوڑا",
    cheetah: "چیتا",
    lightning: "بجلی",
  },
  scaleHeading: "درجہ بندی کا پیمانہ",
  scaleBelow: "{max} CPS سے کم",
  scaleFrom: "{min}+ CPS",
  newBest: "نیا بہترین اسکور!",
  bestFor: "{seconds} کا بہترین ({mode})",
  reset: "ری سیٹ",
  clearBest: "بہترین اسکور مٹائیں",
  cleared: "بہترین اسکور مٹا دیے گئے۔",
  started: "ٹیسٹ شروع ہو گیا۔",
  finished: "وقت ختم۔ کلکس: {clicks}۔ کلک فی سیکنڈ: {cps}۔ درجہ: {rating}۔",
  privacy:
    "یہ ٹیسٹ اسی ٹیب میں چلتا ہے اور صفحہ لوڈ ہونے کے بعد آف لائن بھی کام کرتا ہے۔ بہترین اسکور صرف اس براؤزر کی لوکل اسٹوریج میں محفوظ ہوتے ہیں۔",
  guideLink: "تیز کلک کرنے کا طریقہ پڑھیں (انگریزی میں)",
};

const ja: CpsUi = {
  intro:
    "ボックスをできるだけ速くクリックまたはタップしてください。最初のクリックでタイマーが始まり、自動で止まります。",
  durationLegend: "テスト時間",
  seconds: "{n}秒",
  modeLegend: "カウント対象",
  modes: { left: "左クリック", right: "右クリック", space: "スペースキー" },
  padStart: {
    left: "ここをクリックまたはタップしてスタート",
    right: "ここを右クリックしてスタート",
    space: "ここでスペースキーを押してスタート",
  },
  padRunning: {
    left: "クリックし続けて！",
    right: "右クリックし続けて！",
    space: "スペースを押し続けて！",
  },
  padDone: "時間切れ！",
  padAgain: {
    left: "クリックしてもう一度",
    right: "右クリックしてもう一度",
    space: "スペースキーでもう一度",
  },
  hints: {
    left: "このモードではスペースとEnterはカウントされません。キーボードで試す場合はスペースキーを選んでください。",
    right: "右クリックだけがカウントされます。ボックス内では通常のメニューは開きません。",
    space: "ボックスにフォーカスしてスペースを押します。長押しは連打扱いになりません。1回押すごとに1回カウントされます。",
  },
  timeLeft: "残り時間",
  clicks: "クリック数",
  cps: "CPS",
  best: "ベスト",
  resultHeading: "結果",
  cpsLong: "クリック/秒",
  rating: "ランク",
  tiers: {
    turtle: "カメ",
    cat: "ネコ",
    rabbit: "ウサギ",
    horse: "ウマ",
    cheetah: "チーター",
    lightning: "イナズマ",
  },
  scaleHeading: "ランクの目安",
  scaleBelow: "{max} CPS未満",
  scaleFrom: "{min} CPS以上",
  newBest: "ベスト更新！",
  bestFor: "{seconds}のベスト（{mode}）",
  reset: "リセット",
  clearBest: "ベストスコアを消去",
  cleared: "ベストスコアを消去しました。",
  started: "テスト開始。",
  finished: "時間切れ。クリック数：{clicks}。1秒あたりのクリック数：{cps}。ランク：{rating}。",
  privacy:
    "テストはこのタブ内で動作し、ページの読み込み後はオフラインでも使えます。ベストスコアはこのブラウザのローカルストレージにのみ保存されます。",
  guideLink: "速くクリックするコツを読む（英語）",
};

const ko: CpsUi = {
  intro:
    "상자를 최대한 빠르게 클릭하거나 탭하세요. 첫 클릭과 함께 타이머가 시작되고 자동으로 멈춥니다.",
  durationLegend: "테스트 시간",
  seconds: "{n}초",
  modeLegend: "집계 방식",
  modes: { left: "왼쪽 클릭", right: "오른쪽 클릭", space: "스페이스바" },
  padStart: {
    left: "여기를 클릭하거나 탭해서 시작",
    right: "여기를 오른쪽 클릭해서 시작",
    space: "여기서 스페이스를 눌러 시작",
  },
  padRunning: {
    left: "계속 클릭하세요!",
    right: "계속 오른쪽 클릭하세요!",
    space: "계속 스페이스를 누르세요!",
  },
  padDone: "시간 종료!",
  padAgain: {
    left: "클릭해서 다시 도전",
    right: "오른쪽 클릭해서 다시 도전",
    space: "스페이스를 눌러 다시 도전",
  },
  hints: {
    left: "이 모드에서는 스페이스와 Enter가 집계되지 않습니다. 키보드로 하려면 스페이스바를 선택하세요.",
    right: "오른쪽 클릭만 집계됩니다. 상자 안에서는 평소 열리는 메뉴가 차단됩니다.",
    space: "상자에 포커스를 두고 스페이스를 누르세요. 길게 눌러도 반복되지 않으며, 한 번 누를 때마다 한 번 집계됩니다.",
  },
  timeLeft: "남은 시간",
  clicks: "클릭 수",
  cps: "CPS",
  best: "최고 기록",
  resultHeading: "결과",
  cpsLong: "초당 클릭 수",
  rating: "등급",
  tiers: {
    turtle: "거북이",
    cat: "고양이",
    rabbit: "토끼",
    horse: "말",
    cheetah: "치타",
    lightning: "번개",
  },
  scaleHeading: "등급 기준",
  scaleBelow: "{max} CPS 미만",
  scaleFrom: "{min} CPS 이상",
  newBest: "최고 기록 경신!",
  bestFor: "{seconds} 최고 기록 ({mode})",
  reset: "초기화",
  clearBest: "최고 기록 지우기",
  cleared: "최고 기록을 지웠습니다.",
  started: "테스트가 시작되었습니다.",
  finished: "시간 종료. 클릭 수: {clicks}. 초당 클릭 수: {cps}. 등급: {rating}.",
  privacy:
    "테스트는 이 탭에서 실행되며 페이지가 로드된 뒤에는 오프라인에서도 작동합니다. 최고 기록은 이 브라우저의 로컬 저장소에만 저장됩니다.",
  guideLink: "더 빠르게 클릭하는 방법 읽기 (영어)",
};

export const cpsUi: Record<Locale, CpsUi> = {
  en,
  "pt-br": ptBr,
  nl,
  ar,
  es,
  fr,
  id,
  de,
  it,
  tr,
  ru,
  hi,
  ur,
  ja,
  ko,
};
