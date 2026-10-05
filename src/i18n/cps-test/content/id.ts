import type { LocalizedToolPage } from "../types.ts";

const page: LocalizedToolPage = {
  metaTitle: "Tes CPS: Kecepatan Klik & Klik per Detik",
  quickAnswer:
    "Tes CPS menghitung berapa kali Anda mengklik dalam waktu tertentu, lalu membaginya dengan jumlah detik untuk mendapatkan klik per detik. Klik biasa dengan satu jari sering berada di kisaran 6 sampai 7 CPS, angka yang paling sering disebut sebagai rata-rata. Jitter click dan butterfly click bisa lebih tinggi.",
  headings: {
    about: "Fungsi alat ini",
    howTo: "Cara menggunakan",
    examples: "Contoh",
    features: "Fitur utama",
    howItWorks: "Cara kerjanya",
    tips: "Tips",
    limitations: "Batasan",
    faq: "Pertanyaan umum",
    disclaimer: "Lihat {link} untuk hal-hal yang tidak dicakup alat ini.",
    disclaimerLink: "penafian",
  },
  content: {
    about:
      "Uji kecepatan klik Anda dalam klik per detik (CPS). Pilih 1, 5, 10, 15, 30, atau 60 detik, lalu klik atau ketuk kotak secepat mungkin. Timer mulai saat klik pertama. Saat waktu habis, Anda melihat CPS, peringkat dari Kura-kura sampai Kilat, dan skor terbaik untuk durasi itu. Tersedia juga mode klik kanan dan mode spasi.",
    howTo: [
      "Pilih durasi tes. 10 detik adalah tes klik yang paling umum. 1 dan 5 detik mengukur ledakan singkat, sedangkan 30 dan 60 detik mengukur daya tahan.",
      "Pilih yang dihitung: klik kiri, klik kanan, atau spasi. Di ponsel atau tablet, biarkan klik kiri dan ketuk layar.",
      "Klik atau ketuk kotak. Klik pertama ikut dihitung dan memulai timer.",
      "Terus klik sampai timer mencapai 0. Klik per detik, peringkat, dan skor terbaik langsung muncul. Tekan Atur ulang untuk mulai lagi.",
    ],
    features: [
      "Enam durasi tes: 1, 5, 10, 15, 30, dan 60 detik.",
      "Timer, jumlah klik, dan klik per detik yang diperbarui langsung saat Anda mengklik.",
      "Peringkat dari Kura-kura (di bawah 5 CPS) sampai Kilat (14 CPS atau lebih).",
      "Skor terbaik disimpan di browser ini untuk setiap durasi dan mode.",
      "Mode klik kiri, klik kanan, dan spasi. Spasi dan Enter tidak dihitung di mode klik, dan menahan tombol tidak pernah berulang di mode spasi.",
      "Dukungan layar sentuh dengan tepat satu hitungan per ketukan.",
    ],
    examples: [
      {
        title: "Tes klik 10 detik",
        body: "72 klik dalam 10 detik berarti 72 ÷ 10 = 7,2 CPS, yaitu peringkat Kelinci.",
      },
      {
        title: "Ledakan 1 detik",
        body: "9 klik dalam 1 detik berarti 9 CPS, peringkat Kuda. Tes singkat biasanya memberi skor lebih tinggi daripada tes panjang karena tangan belum sempat lelah.",
      },
    ],
    explanation:
      "CPS adalah jumlah klik yang dihitung dibagi durasi tes dalam detik. Durasinya tetap, jadi tes 10 detik selalu dibagi 10, walaupun klik terakhir Anda sedikit lebih awal. Setiap tekanan dihitung sekali: tombol mouse, ketukan di layar, atau tombol Spasi di mode spasi. Tombol yang ditahan, Enter, dan klik yang biasanya membuka menu konteks tidak menambah hitungan.",
    tips: [
      "Letakkan pergelangan tangan di meja dan klik dengan ujung jari, bukan seluruh lengan.",
      "Lakukan pemanasan dengan tes 5 detik sebelum mengejar skor terbaik di 10 detik atau lebih.",
      "Coba jitter click atau butterfly click hanya untuk tes singkat, dan berhenti jika tangan atau pergelangan terasa sakit.",
    ],
    limitations:
      "Hasilnya bergantung pada mouse, layar sentuh, dan browser, jadi skor dari perangkat berbeda tidak bisa dibandingkan langsung. Mouse yang melakukan klik ganda sendiri akan menggelembungkan hitungan. Tes ini tidak bisa mengetahui apakah auto clicker atau makro digunakan. Skor terbaik disimpan di penyimpanan lokal browser ini; menghapus data situs akan menghapusnya.",
    faqs: [
      {
        question: "Apa itu tes CPS?",
        answer:
          "Tes CPS mengukur klik per detik. Anda mengklik secepat mungkin selama waktu tertentu, lalu jumlah klik dibagi dengan jumlah detik. Tes klik 10 detik adalah versi yang paling umum.",
      },
      {
        question: "Berapa CPS rata-rata?",
        answer:
          "Untuk klik biasa dengan satu jari, angka yang paling sering disebut adalah sekitar 6 sampai 7 CPS. Anggap itu panduan kasar, bukan standar hasil pengukuran. Tangan, mouse, dan durasi tes semuanya memengaruhi hasil.",
      },
      {
        question: "Apakah 10 CPS bagus?",
        answer:
          "Ya. 10 CPS selama 10 detik berada di atas capaian kebanyakan orang dengan klik biasa dan mendapat peringkat Kuda di sini. Banyak orang yang melewati 10 CPS memakai jitter click atau butterfly click.",
      },
      {
        question: "Bagaimana cara klik lebih cepat?",
        answer:
          "Longgarkan genggaman, letakkan pergelangan di meja, dan klik dari jari, bukan dari lengan. Berlatihlah dengan tes singkat dan pantau skor terbaik Anda. Jitter click dan butterfly click bisa menaikkan CPS, tetapi mengurangi akurasi dan lebih membebani tangan.",
      },
      {
        question: "Apa beda jitter click dan butterfly click?",
        answer:
          "Pada jitter click, Anda menegangkan lengan bawah sehingga satu jari bergetar di atas tombol. Pada butterfly click, dua jari bergantian menekan tombol yang sama. Butterfly sering memberi skor lebih tinggi, tetapi beberapa mouse dan server game tidak menanganinya dengan baik.",
      },
      {
        question: "Apakah skor saya dikirim ke server?",
        answer:
          "Tidak. Tes berjalan di tab browser ini. Skor terbaik hanya disimpan di penyimpanan lokal browser ini, dan tombol Hapus skor terbaik akan menghapusnya.",
      },
    ],
  },
};

export default page;
