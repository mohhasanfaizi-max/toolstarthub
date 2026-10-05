import type { Messages } from "./en.ts";

const messages: Messages = {
  client: {
    nav: {
      home: "Beranda",
      allTools: "Semua Alat",
      categories: "Kategori",
      guides: "Panduan",
      popularTools: "Alat Populer",
      about: "Tentang",
      howItWorks: "Cara Kerja",
      contact: "Kontak",
      exploreTools: "Jelajahi Alat",
      mobileNav: "Seluler",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      openSearch: "Buka pencarian",
      closeSearch: "Tutup pencarian",
    },
    theme: {
      toLight: "Beralih ke tema terang",
      toDark: "Beralih ke tema gelap",
    },
    language: {
      label: "Bahasa",
      current: "Bahasa: {name}",
      englishOnly: "Hanya bahasa Inggris",
    },
    search: {
      placeholder: "Cari alat...",
      label: "Cari alat",
      clear: "Hapus pencarian",
      suggestions: "Saran pencarian",
      noResults: "Alat tidak ditemukan",
    },
    consent: {
      title: "Cookie analitik",
      body: "Kami memakai Google Analytics untuk menghitung kunjungan, tetapi hanya jika Anda setuju. Alat tetap berfungsi sama dalam kedua kasus. Lihat {link}.",
      privacyLink: "kebijakan privasi",
      accept: "Terima",
      decline: "Tolak",
      settings: "Pengaturan cookie",
    },
    favorites: {
      add: "Tambahkan {name} ke favorit",
      remove: "Hapus {name} dari favorit",
    },
    card: { popular: "Populer", new: "Baru", openTool: "Buka alat" },
    categoryNames: {
      calculators: "Kalkulator",
      "text-tools": "Alat Teks",
      "developer-tools": "Alat Developer",
      "image-tools": "Alat Gambar",
      "seo-utilities": "SEO & Utilitas",
      "ai-tools": "Alat AI",
    },
    home: {
      filterAria: "Filter alat",
      filters: {
        all: "Semua",
        pdf: "PDF",
        images: "Gambar",
        "text-tools": "Teks",
        "developer-tools": "Developer",
        calculators: "Kalkulator",
        "seo-utilities": "Utilitas",
        "ai-tools": "AI",
      },
      noToolsInGroup: "Tidak ada alat di grup ini.",
    },
    catalog: {
      filterAria: "Filter alat",
      filters: {
        all: "Semua",
        calculators: "Kalkulator",
        "image-tools": "Gambar",
        pdf: "PDF",
        "text-tools": "Teks",
        "developer-tools": "Developer",
        color: "Warna",
        qr: "QR",
        "seo-utilities": "SEO",
        "ai-tools": "AI",
      },
      favorites: "Favorit",
      sort: "Urutkan",
      sortName: "Nama",
      sortNewest: "Terbaru",
      sortCategory: "Kategori",
      recentlyUsed: "Baru dipakai",
      recentEmpty: "Alat yang Anda pakai akan muncul di sini.",
      viewAll: "Lihat semua",
      searchResults: "Hasil pencarian",
      allTools: "Semua alat",
      tools: "Alat",
      noFavorites: "Anda belum menambahkan alat favorit.",
      noToolsFound: "Alat tidak ditemukan",
      noToolsCategory: "Belum ada alat di kategori ini.",
      countFavorites: { other: "{count} favorit" },
      countResults: { other: "{count} hasil untuk “{query}”" },
      countOf: "{count} dari {total} alat",
    },
    tool: {
      loading: "Memuat alat…",
      copy: "Salin",
      copied: "Tersalin",
      copyCss: "Salin CSS",
      copyLink: "Salin tautan",
      linkCopied: "Tautan disalin",
      download: "Unduh",
      dropPrompt: "Seret dan lepas gambar di sini, atau pilih file.",
      selected: "Dipilih: {name}",
      copySuccess: "{what} disalin ke papan klip.",
      copyFailed:
        "Tidak dapat menyalin otomatis. {what} sudah dipilih, jadi tekan Ctrl+C (atau Cmd+C di Mac) untuk menyalinnya.",
    },
  },
  meta: {
    tagline: "Alat Online Gratis yang Langsung Berfungsi",
    description:
      "Alat online yang cepat, gratis, dan mudah untuk perhitungan, teks, developer, gambar, SEO, dan tugas sehari-hari. Tanpa daftar.",
    toolsTitle: "Semua Alat",
    toolsDescription:
      "Jelajahi alat online gratis untuk perhitungan, teks, developer, gambar, SEO, dan tugas sehari-hari.",
    categoriesTitle: "Kategori",
    categoriesDescription:
      "Jelajahi Tools Star Hub per kategori: kalkulator, alat teks, alat developer, alat gambar dan PDF, utilitas SEO, dan alat AI.",
    categoryTitle: "{name} – Alat Online Gratis",
    categoryShareAlt: "{name} – alat online gratis",
    toolShareAlt: "{name} – alat online gratis",
  },
  header: {
    primaryNav: "Navigasi utama",
    logoHome: "Beranda {name}",
    skip: "Langsung ke konten utama",
  },
  breadcrumbs: {
    label: "Breadcrumb",
    home: "Beranda",
    tools: "Alat",
    categories: "Kategori",
  },
  footer: {
    blurb:
      "Alat online yang cepat dan sederhana untuk perhitungan, teks, developer, gambar, SEO, dan tugas sehari-hari.",
    tagline: "Cepat • Gratis • Di browser • Tanpa daftar",
    explore: "Jelajahi",
    categories: "Kategori",
    legal: "Legal",
    favorites: "Favorit",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan",
    disclaimer: "Penafian",
    languages: "Bahasa",
    rights: "© {year} {name}. Hak cipta dilindungi.",
  },
  home: {
    h1: "Alat Online Gratis untuk Tugas Sehari-hari",
    intro:
      "Cari alat, gunakan, dan dapatkan hasilnya. {name} adalah tempat sederhana untuk PDF, gambar, perhitungan, dan teks, tanpa akun.",
    popularLabel: "Populer:",
    trust: [
      "Gratis digunakan",
      "Tanpa perlu daftar",
      "Cepat dan mudah",
      "File tetap di browser Anda",
    ],
    popularTitle: "Alat Populer",
    popularDescription:
      "Alat yang sering dipakai untuk file, gambar, teks, dan perhitungan sehari-hari.",
    viewAllTools: "Lihat semua alat",
    catalogTitle: "Semua yang Anda butuhkan, di satu tempat.",
    catalogDescription:
      "Filter alat yang tersedia di situs ini. Setiap alat terbuka di browser.",
    categoriesTitle: "Telusuri per kategori",
    categoriesDescription:
      "Kalkulator, teks, utilitas developer, gambar dan PDF, serta alat situs web.",
    allCategories: "Semua kategori",
    whyTitle: "Mengapa {name}?",
    whyDescription:
      "Kumpulan utilitas yang lugas untuk pekerjaan yang biasanya membutuhkan aplikasi terpisah.",
    values: {
      fast: {
        title: "Cepat",
        note: "Sebagian besar alat berjalan di browser dan menampilkan hasil di halaman yang sama.",
      },
      free: {
        title: "Gratis",
        note: "Alat di situs ini tidak memerlukan pembayaran.",
      },
      private: {
        title: "Privat",
        note: "File dan teks yang ditempel diproses di perangkat Anda. Kunjungan halaman diukur secara terpisah, seperti dijelaskan dalam kebijakan privasi.",
      },
      noAccount: {
        title: "Tanpa akun",
        note: "Buka alat dan langsung gunakan. Akun tidak diperlukan.",
      },
    },
    howTitle: "Cara kerja",
    howDescription: "Tiga langkah. Tanpa instalasi.",
    steps: [
      {
        title: "Pilih alat",
        description:
          "Cari atau pilih kalkulator, alat file, atau utilitas developer.",
      },
      {
        title: "Unggah atau masukkan konten",
        description: "Tambahkan file, angka, atau teks yang diminta alat.",
      },
      {
        title: "Dapatkan hasilnya",
        description: "Salin, unduh, atau baca hasilnya di halaman yang sama.",
      },
    ],
    guidesTitle: "Panduan Bermanfaat",
    guidesDescription:
      "Penjelasan singkat tentang tugas yang sudah bisa ditangani alat di situs ini.",
    allGuides: "Semua panduan",
    pricingTitle: "Harga",
    pricingBody:
      "Alat ini gratis digunakan. Tanpa akun, tanpa instalasi, dan tanpa paket berbayar.",
    ctaTitle: "Siap menyelesaikan pekerjaan lebih cepat?",
    ctaBody: "Jelajahi koleksi alat online sederhana dari {name}.",
    ctaPrimary: "Jelajahi Semua Alat",
    ctaSecondary: "Coba Alat",
  },
  toolsPage: {
    title: "Semua Alat",
    description:
      "Cari, filter berdasarkan kategori, atau buka lagi alat terbaru atau favorit. Alat baru muncul di sini begitu ditambahkan.",
  },
  categoriesPage: {
    title: "Kategori",
    description: "Pilih kategori untuk menemukan alat yang tepat lebih cepat.",
    body: "Kalkulator menangani angka sehari-hari. Alat teks menghitung dan merapikan tulisan. Alat developer memformat, mengodekan, dan meminifikasi. Alat gambar juga mencakup tugas PDF seperti menggabungkan, memisahkan, dan mengekstrak teks. SEO & utilitas mencakup tautan kampanye, slug, kode QR, dan kata sandi. Alat AI membuat prompt dan meringkas draf di browser, dan tombol AI-nya mengirim teks yang Anda masukkan ke model Gemini milik Google untuk menghasilkan hasil. Semua alat lainnya berjalan di browser Anda.",
  },
  category: {
    cardCount: { other: "{count} alat" },
    pageCount: { other: "{count} alat di kategori ini." },
    browse: "Lihat alat",
    starting: "Titik awal yang berguna",
    related: "Kategori terkait",
    none: "Belum ada alat di kategori ini.",
  },
  toolPage: {
    whatIs: "Apa itu {name}?",
    categorySr: "kategori",
    relatedTools: "Alat terkait",
    helpfulGuides: "Panduan bermanfaat",
    englishContent:
      "Untuk saat ini, panduan lengkap alat ini (cara pakai, contoh, dan FAQ) masih dalam bahasa Inggris.",
    details: {
      about: "Fungsi alat ini",
      howTo: "Cara menggunakan",
      examples: "Contoh",
      examplesFallback:
        "Jika belum ada contoh di sini, coba area kerja di atas dengan contoh sederhana dari deskripsi alat.",
      features: "Fitur utama",
      howItWorks: "Cara kerjanya",
      tips: "Tips",
      limitations: "Batasan",
      limitationsFallback:
        "Periksa hasilnya sebelum mengandalkannya. File besar bisa lebih lambat atau gagal jika memori perangkat hampir penuh.",
      disclaimer: "Lihat {link} untuk hal-hal yang tidak dicakup alat ini.",
      disclaimerLink: "penafian",
      faq: "Tanya jawab",
      defaultHowTo: [
        "Masukkan nilai Anda atau pilih file jika alat memerlukannya.",
        "Jalankan aksi di halaman ini.",
        "Periksa hasilnya, lalu salin, unduh, atau atur ulang sesuai kebutuhan.",
      ],
      mobileQuestion: "Apakah bisa dipakai di ponsel?",
      mobileAnswer:
        "Ya. Anda bisa membuka halaman ini di ponsel atau tablet. Pemilihan file dan unduhan memakai browser di perangkat Anda. File besar bisa lebih lambat di ponsel kecil dibandingkan di komputer.",
      workspaceNote: "Catatan",
    },
    privacy: {
      browser:
        "Alat ini berjalan di browser Anda. Input, file, dan nilai yang dihasilkan tetap di perangkat ini. Favorit dan alat yang baru dipakai, jika Anda menggunakannya, hanya menyimpan nama alat di penyimpanan lokal — tidak pernah kata sandi, dokumen, atau isi kode QR.",
      gemini:
        "Tombol biasa bekerja di browser Anda. “Generate with AI”, “Analyze with AI”, dan “Compress with AI” mengirim teks yang Anda masukkan ke Gemini API milik Google melalui ToolStarHub. Teks itu tidak disimpan di sini. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya. Favorit hanya menyimpan nama alat.",
      humanizer:
        "“Rewrite text” tetap di browser Anda. “Humanize with AI” mengirim teks yang Anda masukkan ke Gemini API milik Google melalui ToolStarHub. Teks itu tidak disimpan di sini. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya. Favorit hanya menyimpan nama alat.",
      fetch:
        "“Check preview” mengirim URL ke situs ini, yang meminta halaman publik tersebut dan membaca tag-nya. Halaman itu tidak disimpan di sini. Alamat privat atau non-http ditolak. Favorit hanya menyimpan nama alat.",
      see: "Lihat {link}.",
      link: "kebijakan privasi",
    },
  },
  categories: {
    calculators: {
      name: "Kalkulator",
      description: "Alat hitung untuk sehari-hari",
      shortDescription:
        "Persentase, usia, satuan, dan perhitungan sehari-hari lainnya.",
      intro:
        "Kalkulator ini menjawab pertanyaan angka tertentu: persentase, perubahan persentase, harga diskon, tip, pajak penjualan, usia, jumlah hari atau hari kerja di antara dua tanggal, konversi satuan, perkiraan pinjaman atau KPR, upah, luas ruangan, IPK (GPA), atau angka acak dalam rentang tertentu.",
      audience:
        "Gunakan saat spreadsheet terlalu berlebihan. Ini adalah alat bantu aritmetika. Hasil pinjaman, pajak, dan upah hanyalah perkiraan, bukan nasihat keuangan, pajak, medis, atau teknik.",
    },
    "text-tools": {
      name: "Alat Teks",
      description: "Alat untuk menulis dan mengolah teks",
      shortDescription: "Hitung, rapikan, ubah, dan format teks di browser.",
      intro:
        "Alat teks menghitung kata dan karakter, mengubah huruf besar-kecil, mencari dan mengganti, menghapus jeda baris, memberi nomor baris, menghapus baris duplikat atau spasi berlebih, mengurutkan baris, membandingkan dua draf, dan membuat teks pengisi untuk tata letak.",
      audience:
        "Alat ini untuk penulis, editor, dan siapa saja yang merapikan teks yang ditempel dari dokumen atau spreadsheet. Teks yang Anda tempel tetap di browser.",
    },
    "developer-tools": {
      name: "Alat Developer",
      description: "Format, kodekan, minifikasi, dan konversi data di browser",
      shortDescription:
        "Format JSON, kodekan data, minifikasi kode, dan konversi Markdown atau HTML secara lokal.",
      intro:
        "Alat developer memformat JSON, mengonversi JSON dan CSV, menguji ekspresi reguler, membuat hash teks dengan SHA-256 atau SHA-512, mengodekan dan mendekodekan Base64, URL, dan HTML, meminifikasi HTML, CSS, atau JavaScript, mengonversi Markdown, serta membuat UUID atau timestamp Unix. Alat warna di sini mengubah nilai hex menjadi RGB, memeriksa kontras, dan membuat gradien serta bayangan CSS.",
      audience:
        "Alat ini untuk orang yang mengedit kode atau data dan ingin hasilnya langsung di halaman tanpa memasang paket. Minifier dan konverter mengikuti aturan setiap format, jadi input yang tidak valid ditolak alih-alih diubah diam-diam.",
    },
    "image-tools": {
      name: "Alat Gambar",
      description: "Alat gambar dan PDF berbasis browser",
      shortDescription:
        "Kompres, konversi, dan periksa gambar serta PDF tanpa mengunggah.",
      intro:
        "Alat gambar mengompres, mengubah ukuran, memotong, mengonversi, dan mengambil sampel warna dari gambar. Alat PDF di kategori ini menggabungkan, memisahkan, mengompres, menghitung halaman, membaca atau menghapus metadata, mengekstrak teks, mengubah halaman menjadi gambar JPG, dan membuat PDF dari gambar atau teks.",
      audience:
        "File diproses di browser. PDF hasil pindaian mungkin tidak menghasilkan teks yang bisa dipilih. Kompresi dan konversi dapat menurunkan kualitas, jadi periksa hasil unduhan sebelum mengganti file asli.",
    },
    "seo-utilities": {
      name: "SEO & Utilitas",
      description: "Tautan, slug, kode QR, dan kata sandi",
      shortDescription:
        "Buat tautan UTM dan slug, buat atau pindai kode QR, dan buat kata sandi.",
      intro:
        "Utilitas ini membuat URL kampanye, mengubah judul menjadi slug URL, membuat kode QR dari teks atau data terstruktur, memindai kode QR dari kamera atau gambar, dan membuat kata sandi secara lokal.",
      audience:
        "Alat QR dasar mengodekan teks biasa atau URL. QR Code Generator Pro menambahkan Wi-Fi, kontak, dan pengaturan warna. Generator kata sandi membuat rangkaian karakter di perangkat ini. Ini bukan pengelola kata sandi.",
    },
    "ai-tools": {
      name: "Alat AI",
      description: "Pembuat prompt dan alat menulis, dengan AI Gemini opsional",
      shortDescription:
        "Buat prompt, pelajari pola tulisan, dan ringkas draf, di browser atau dengan AI Gemini.",
      intro:
        "Alat ini membantu Anda menulis prompt, mendeskripsikan adegan gambar atau video, melihat pola tulisan, atau meringkas draf yang panjang. Tombol utama setiap alat berjalan di browser Anda. Tombol AI (Generate, Analyze, Compress, atau Humanize with AI) mengirim teks yang Anda masukkan ke model Gemini milik Google untuk menghasilkan hasilnya.",
      audience:
        "Gunakan tombol browser jika Anda tidak ingin teks keluar dari perangkat ini, dan tombol AI jika Anda ingin Gemini menulis ulang atau mengembangkannya. Teks yang dikirim ke Gemini tidak disimpan di situs ini. Alat prompt menghasilkan teks, bukan gambar atau video. Alat menulis tidak menentukan siapa penulisnya dan tidak menjanjikan bahwa draf yang lebih pendek akan lolos detektor.",
    },
  },
};

export default messages;
