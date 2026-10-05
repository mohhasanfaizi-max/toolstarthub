import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "word-counter": {
    "answer": "Penghitung kata menampilkan jumlah kata, karakter, dan kalimat dari teks yang Anda tempel, beserta perkiraan sederhana waktu baca.",
    "content": {
      "about": "Lihat jumlah kata, karakter, kalimat, paragraf, dan perkiraan waktu baca untuk teks yang Anda tempel. Saat memeriksa keterangan foto, abstrak, atau unggahan singkat, totalnya ikut berubah selagi Anda mengetik. Waktu baca mengasumsikan sekitar 225 kata per menit; itu perkiraan, bukan kecepatan yang diukur.",
      "howTo": [
        "Tempel atau ketik teks di kotak.",
        "Jumlah kata, karakter, kalimat, dan paragraf diperbarui selagi Anda mengetik.",
        "Gunakan “Teks contoh” untuk mencoba, “Hapus” untuk mengosongkan kotak, atau “Salin” untuk menyalin teks Anda."
      ],
      "examples": [
        {
          "title": "Kalimat pendek",
          "body": "“Hello world.” berisi 2 kata dan 1 kalimat."
        },
        {
          "title": "Baris kosong",
          "body": "Teks yang dipisahkan satu baris kosong dihitung sebagai dua paragraf."
        }
      ],
      "explanation": "Kata adalah kelompok karakter tanpa spasi. Karakter adalah titik kode Unicode, jadi huruf, tanda baca, dan sebagian besar emoji masing-masing dihitung satu karakter. Kalimat dipisahkan pada . ! ? dan …. Paragraf adalah blok yang tidak kosong dan dipisahkan oleh baris baru. Waktu baca memakai sekitar 225 kata per menit.",
      "limitations": "Kata adalah kelompok karakter tanpa spasi, dan kalimat dipisahkan pada . ! ? dan …. Waktu baca mengasumsikan sekitar 225 kata per menit; itu perkiraan, bukan kecepatan baca yang diukur. Penghitung ini tidak memeriksa tata bahasa atau mengenali penulis.",
      "faqs": [
        {
          "question": "Apakah penghitung kata ini gratis?",
          "answer": "Ya. Menghitung kata, karakter, kalimat, dan paragraf gratis, dan Anda tidak perlu akun."
        },
        {
          "question": "Apakah teks saya diunggah?",
          "answer": "Tidak. Penghitungan berjalan di browser Anda. Teks tidak dikirim ke Tools Star Hub dan tidak disimpan."
        },
        {
          "question": "Bagaimana spasi berlebih dihitung?",
          "answer": "Spasi berturut-turut tidak menambah jumlah kata, tetapi tetap dihitung sebagai karakter."
        },
        {
          "question": "Berapa kata dalam pidato 5 menit?",
          "answer": "Kecepatan bicara berbeda-beda, tetapi 130 sampai 150 kata per menit adalah patokan umum, jadi pidato 5 menit biasanya sekitar 650 sampai 750 kata."
        },
        {
          "question": "Bagaimana waktu baca diperkirakan?",
          "answer": "Jumlah kata dibagi sekitar 225 kata per menit. Ini perkiraan untuk pembaca rata-rata, bukan kecepatan baca yang diukur."
        }
      ]
    },
    "ui": {
      "Counting happens in your browser. Nothing is sent to a server.": "Penghitungan berjalan di browser Anda. Tidak ada yang dikirim ke server.",
      "Paste or type text here...": "Tempel atau ketik teks di sini…",
      "Sample text": "Teks contoh",
      "Reading time": "Waktu baca",
      "0 min": "0 mnt",
      "{0} min": "{0} mnt"
    }
  },
  "character-counter": {
    "answer": "Penghitung karakter menghitung karakter, kata, dan baris selagi Anda mengetik; spasi termasuk dalam total utama.",
    "content": {
      "about": "Hitung karakter, kata, dan baris, dengan total terpisah tanpa spasi. Berguna saat formulir, unggahan media sosial, atau meta description punya batas karakter. Satu emoji dihitung satu karakter, dan berbeda dengan penghitung kata, halaman ini tidak memecah teks menjadi kalimat.",
      "howTo": [
        "Ketik atau tempel teks di kotak.",
        "Jumlah karakter, kata, dan baris langsung diperbarui.",
        "Salin jumlah karakter atau kosongkan kotak setelah selesai."
      ],
      "examples": [
        {
          "title": "Emoji dan huruf",
          "body": "“A😀” berisi 2 karakter: satu huruf dan satu emoji."
        },
        {
          "title": "Baris",
          "body": "Baris baru memulai baris berikutnya. Kotak kosong berisi 0 baris."
        }
      ],
      "explanation": "Karakter dihitung sebagai titik kode Unicode. Spasi termasuk dalam total utama dan tidak termasuk dalam total “tanpa spasi”. Baris mengikuti baris baru di kotak, termasuk baris kosong terakhir.",
      "limitations": "Satu karakter adalah satu titik kode Unicode, jadi satu emoji dihitung satu meskipun tersusun dari beberapa simbol. Spasi tetap di total utama dan dikeluarkan dari total tanpa spasi. Batas kalimat tidak dideteksi di sini.",
      "faqs": [
        {
          "question": "Apakah penghitung karakter ini gratis?",
          "answer": "Ya. Anda bisa menghitung karakter, kata, dan baris selagi mengetik tanpa membayar atau membuat akun."
        },
        {
          "question": "Apakah teks keluar dari komputer saya?",
          "answer": "Tidak. Teks tetap di browser Anda dan tidak dikirim ke server."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Hitungan dibuat di tab ini. Mengosongkan kotak menghapus teks dari halaman, dan teks tidak ditulis ke penyimpanan lokal."
        },
        {
          "question": "Apakah spasi dihitung sebagai karakter?",
          "answer": "Ya, dalam total utama. Penghitung juga menampilkan total kedua tanpa spasi, yang diminta oleh sebagian formulir dan tugas."
        },
        {
          "question": "Berapa karakter sebuah emoji?",
          "answer": "Di halaman ini, satu emoji dihitung sebagai satu karakter Unicode. Beberapa aplikasi menghitung emoji tertentu sebagai dua atau lebih, jadi batasnya bisa sedikit berbeda."
        }
      ]
    },
    "ui": {
      "Counts update as you type. Text stays in your browser.": "Hitungan diperbarui selagi Anda mengetik. Teks tetap di browser Anda.",
      "Type or paste text...": "Ketik atau tempel teks…",
      "Copy count": "Salin jumlah"
    }
  },
  "case-converter": {
    "answer": "Pengubah huruf besar-kecil mengubah teks menjadi huruf kapital, huruf kecil, format judul, camelCase, dan gaya serupa.",
    "content": {
      "about": "Ubah teks menjadi huruf kapital, huruf kecil, format judul, format kalimat, camelCase, PascalCase, snake_case, dan kebab-case. Developer yang mengganti nama identifier dan editor yang merapikan judul bisa mengubah format dalam satu langkah. Format kalimat mengikuti tanda baca bahasa Inggris, jadi aturan kapitalisasi bahasa lain tidak diterapkan.",
      "howTo": [
        "Tempel teks di kotak.",
        "Pilih format. Hasilnya langsung diperbarui.",
        "Salin hasilnya atau kosongkan kedua kotak."
      ],
      "examples": [
        {
          "title": "Format judul",
          "body": "“hello world” menjadi “Hello World”. Setiap kata diawali huruf kapital."
        },
        {
          "title": "camelCase",
          "body": "“Hello world example” menjadi helloWorldExample."
        }
      ],
      "explanation": "Huruf kapital dan huruf kecil memakai aturan bahasa Inggris. Format judul mengapitalkan huruf pertama setiap kata. Format kalimat mengubah teks menjadi huruf kecil, lalu mengapitalkan awal teks dan huruf setelah . ! ? atau … — aturan sederhana yang berorientasi bahasa Inggris, bukan pemeriksa tata bahasa untuk semua bahasa. camelCase, PascalCase, snake_case, dan kebab-case dibentuk dari kelompok huruf dan angka.",
      "limitations": "Format kalimat mengikuti tanda baca bahasa Inggris, bukan aturan kapitalisasi bahasa lain. camelCase, snake_case, dan kebab-case mempertahankan kelompok huruf dan angka serta membuang tanda baca di antaranya.",
      "faqs": [
        {
          "question": "Apakah pengubah ini gratis?",
          "answer": "Ya. Mengubah teks ke huruf kapital, huruf kecil, format judul, dan format kode gratis tanpa akun."
        },
        {
          "question": "Apakah format kalimat berlaku untuk semua bahasa?",
          "answer": "Tidak. Format ini mengikuti pola tanda baca dasar bahasa Inggris dan tidak menerapkan aturan khusus tiap bahasa."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Teks yang Anda tempel diubah di tab ini. Teks tidak diunggah dan tidak ditulis ke penyimpanan lokal."
        },
        {
          "question": "Apa bedanya huruf judul dan huruf kalimat?",
          "answer": "Huruf judul membuat huruf pertama setiap kata menjadi kapital, seperti judul berita berbahasa Inggris. Huruf kalimat hanya membuat huruf pertama setiap kalimat menjadi kapital, seperti tulisan biasa."
        },
        {
          "question": "Apa itu camelCase, snake_case, dan kebab-case?",
          "answer": "Itu gaya penamaan yang dipakai dalam kode. camelCase menyambung kata dengan huruf kapital (myVariableName), snake_case memakai garis bawah (my_variable_name), dan kebab-case memakai tanda hubung (my-variable-name)."
        }
      ]
    },
    "ui": {
      "Paste text to convert": "Tempel teks yang ingin diubah",
      "Case": "Format",
      "Result ({0})": "Hasil ({0})",
      "UPPERCASE": "HURUF KAPITAL",
      "lowercase": "huruf kecil",
      "Title Case": "Format Judul",
      "Sentence case": "Format kalimat"
    }
  },
  "lorem-ipsum-generator": {
    "answer": "Generator lorem ipsum membuat paragraf, kalimat, atau kata pengisi untuk tata letak dan draf.",
    "content": {
      "about": "Buat paragraf, kalimat, atau kata pengisi dari daftar kata Latin yang tetap. Desainer memakainya untuk mengisi mockup saat teks aslinya belum ada. Paragraf pertama diawali kalimat pembuka klasik, dan satu permintaan dibatasi 20 paragraf, 50 kalimat, atau 500 kata.",
      "howTo": [
        "Pilih paragraf, kalimat, atau kata.",
        "Atur jumlah dalam batas yang ditampilkan, lalu tekan “Buat”.",
        "Salin teks, buat ulang, atau kembalikan ke pengaturan awal."
      ],
      "examples": [
        {
          "title": "Tiga paragraf",
          "body": "Paragraf pertama diawali kalimat klasik “Lorem ipsum dolor sit amet…”, lalu dilanjutkan dengan kata-kata acak dari daftar kata lokal."
        },
        {
          "title": "Lima puluh kata",
          "body": "Berguna sebagai pengisi singkat di mockup."
        }
      ],
      "explanation": "Lorem ipsum adalah teks Latin acak yang dipakai sebagai teks contoh agar tata letak bisa dinilai tanpa isi asli. Generator ini memakai daftar kata lokal dan nilai acak kriptografis yang kuat dari browser. Tidak ada API eksternal yang dipanggil. Jumlahnya dibatasi agar halaman tetap bisa dipakai.",
      "limitations": "Hasilnya adalah teks Latin pengisi dari daftar kata tetap, bukan terjemahan dan bukan teks untuk produk sungguhan. Paragraf dibatasi 20, kalimat 50, dan kata 500.",
      "faqs": [
        {
          "question": "Apakah generator lorem ipsum ini gratis?",
          "answer": "Ya. Membuat paragraf, kalimat, atau kata pengisi gratis dan tidak perlu akun."
        },
        {
          "question": "Apakah teksnya diunduh dari internet?",
          "answer": "Tidak. Kata-katanya tersimpan di halaman ini dan disusun di browser Anda."
        },
        {
          "question": "Mengapa ada batas maksimum?",
          "answer": "Blok yang sangat besar bisa membuat tab macet. Paragraf dibatasi 20, kalimat 50, dan kata 500."
        },
        {
          "question": "Apa arti lorem ipsum?",
          "answer": "Lorem ipsum adalah bahasa Latin acak yang dipakai sebagai teks pengisi. Teks ini mirip tulisan asli, sehingga tata letak bisa dinilai tanpa pembaca terpaku pada kata-katanya."
        },
        {
          "question": "Kapan sebaiknya memakai teks pengisi?",
          "answer": "Untuk mockup, templat, dan uji font. Ganti dengan teks asli sebelum halaman ditayangkan, karena teks pengisi tidak memberi informasi apa pun kepada pengunjung."
        }
      ]
    },
    "ui": {
      "Quantity": "Jumlah",
      "Enter a whole number from {0} to {1}.": "Masukkan bilangan bulat dari {0} sampai {1}.",
      "Enter a quantity.": "Masukkan jumlah.",
      "Choose between {0} and {1} {2}.": "Pilih antara {0} dan {1} {2}.",
      "paragraphs": "paragraf",
      "sentences": "kalimat",
      "words": "kata",
      "A secure random source is not available in this browser.": "Sumber acak yang aman tidak tersedia di browser ini."
    }
  },
  "text-diff": {
    "answer": "Pembanding teks membandingkan teks asli dan yang sudah diubah di perangkat Anda, lalu menandai baris atau kata yang ditambahkan, dihapus, dan tidak berubah.",
    "content": {
      "about": "Tempel teks asli dan revisinya, lalu bandingkan per baris atau per kata. Saat memeriksa dua draf paragraf yang sama, pakai mode baris untuk perubahan satu baris penuh dan mode kata jika satu kalimat diedit di tempat. Setiap sisi harus di bawah 200.000 karakter dan di bawah 4.000 baris atau kata.",
      "howTo": [
        "Tempel teks asli di kiri dan teks yang diubah di kanan.",
        "Pilih perbandingan per baris atau per kata.",
        "Tekan “Bandingkan”. Blok yang ditambahkan, dihapus, dan tidak berubah diberi label, bukan hanya warna.",
        "Salin diff teks biasa jika Anda memerlukannya di editor lain. Kosongkan kedua sisi setelah selesai."
      ],
      "examples": [
        {
          "title": "Dua versi paragraf",
          "body": "Mode baris menyorot baris utuh yang berubah. Mode kata lebih cocok jika satu kalimat diedit di tempat."
        },
        {
          "title": "Teks identik",
          "body": "Jika kedua sisi sama, ringkasan hanya menampilkan konten yang tidak berubah tanpa blok tambahan atau hapusan."
        }
      ],
      "explanation": "Perbandingan berjalan di browser Anda. Teks tidak dikirim ke mana pun dan draf tidak disimpan di penyimpanan lokal. Perbedaan ditampilkan sebagai node teks React, sehingga konten tidak bisa menyisipkan HTML. Input yang sangat besar ditolak agar tab tetap responsif.",
      "limitations": "Bergantung pada mode, setiap sisi harus di bawah 200.000 karakter dan di bawah 4.000 baris atau kata. Tampilan memberi label pada blok yang ditambahkan, dihapus, dan tidak berubah. Alat ini tidak menggabungkan file dan tidak membuka dokumen Word.",
      "faqs": [
        {
          "question": "Apakah pembanding teks ini gratis?",
          "answer": "Ya. Membandingkan dua teks per baris atau per kata gratis, dan Anda tidak perlu akun."
        },
        {
          "question": "Bagaimana cara membandingkan dua file teks?",
          "answer": "Tempel setiap versi ke panel, pilih Baris atau Kata, lalu tekan “Bandingkan”. Anda bisa menyalin tampilan +/- dari hasilnya."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Kedua panel dibandingkan di tab ini. Teks tidak dikirim ke server dan tidak disimpan di penyimpanan lokal."
        },
        {
          "question": "Apa itu diff?",
          "answer": "Diff adalah daftar perbedaan antara dua versi teks: apa yang ditambahkan, apa yang dihapus, dan apa yang tetap sama."
        },
        {
          "question": "Sebaiknya pakai mode baris atau mode kata?",
          "answer": "Gunakan mode baris untuk kode, daftar, dan file yang berubah per baris utuh. Gunakan mode kata jika sebuah kalimat disunting di tempat."
        }
      ]
    },
    "ui": {
      "Original": "Asli",
      "Modified": "Diubah",
      "Compare": "Bandingkan",
      "Copy diff": "Salin diff",
      "Both sides are empty.": "Kedua sisi kosong.",
      "The two texts are the same.": "Kedua teks sama.",
      "Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled Added, Removed, or Unchanged.": "Teks yang dibandingkan ditampilkan sebagai teks biasa, bukan HTML. Warna hanya petunjuk; setiap blok juga diberi label Ditambahkan, Dihapus, atau Tidak berubah.",
      "Both drafts are compared in this tab. The text is not sent to a server.": "Kedua draf dibandingkan di tab ini. Teks tidak dikirim ke server.",
      "Keep each side under 200,000 characters so comparison stays responsive.": "Jaga setiap sisi di bawah 200.000 karakter agar perbandingan tetap lancar.",
      "This comparison handles up to {0} {1}. Shorten the input or split it.": "Perbandingan ini mendukung hingga {0} {1}. Persingkat input atau bagi menjadi beberapa bagian.",
      "lines": "baris",
      "words": "kata"
    }
  },
  "duplicate-line-remover": {
    "answer": "Penghapus baris duplikat mempertahankan kemunculan pertama setiap baris dan membuang pengulangan berikutnya, dengan opsi pemangkasan spasi dan huruf besar-kecil.",
    "content": {
      "about": "Pertahankan salinan pertama setiap baris dan buang pengulangannya, sesuai urutan saat Anda menempel. Berguna untuk daftar email atau log yang barisnya muncul lebih dari sekali. Dengan pencocokan tanpa membedakan huruf besar-kecil dan pemangkasan, apple dan Apple menjadi satu baris, dan ejaan pertama yang dipertahankan.",
      "howTo": [
        "Tempel teks beberapa baris. Input tidak berubah sampai Anda menjalankan alat.",
        "Jika perlu, abaikan huruf besar-kecil, pangkas spasi sebelum membandingkan, atau buang baris kosong.",
        "Tekan “Hapus duplikat”. Kemunculan pertama setiap baris dipertahankan sesuai urutan.",
        "Salin atau unduh daftar unik. Kosongkan kedua kotak setelah selesai."
      ],
      "examples": [
        {
          "title": "Daftar email",
          "body": "apple, Apple, apple dengan pemangkasan dan tanpa membedakan huruf besar-kecil menjadi satu apple, dengan ejaan pertama yang Anda tempel."
        },
        {
          "title": "Baris kosong",
          "body": "Aktifkan “Hapus baris kosong” jika Anda hanya ingin baris unik yang tidak kosong. Jika tidak, baris kosong dianggap nilai seperti lainnya."
        }
      ],
      "explanation": "Setiap baris diberi kunci sesuai opsi perbandingan. Saat kunci muncul pertama kali, barisnya dipertahankan; pengulangan berikutnya dihitung sebagai duplikat yang dihapus. Urutan kemunculan pertama tetap dijaga.",
      "limitations": "Baris pertama yang cocok dipertahankan sesuai urutan tempel. Opsi huruf besar-kecil, pemangkasan, dan baris kosong menentukan apa yang dianggap baris yang sama. Pengulangan berikutnya dihitung lalu dibuang. Lebih dari 400.000 karakter ditolak. Kotak input sendiri tidak ditulis ulang.",
      "faqs": [
        {
          "question": "Apakah alat ini gratis?",
          "answer": "Ya. Menghapus baris berulang sambil mempertahankan salinan pertama gratis tanpa pendaftaran."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Penghapusan duplikat berjalan di tab ini. Daftar tidak diunggah dan tidak ditulis ke penyimpanan lokal."
        },
        {
          "question": "Apakah kotak aslinya berubah?",
          "answer": "Tidak. Input tetap seperti yang Anda tempel. Daftar unik muncul di kotak hasil setelah Anda menjalankan proses."
        },
        {
          "question": "Bagaimana cara menghapus duplikat dari daftar?",
          "answer": "Tempel daftar dengan satu item per baris, lalu jalankan alat. Salinan pertama setiap baris dipertahankan sesuai urutan aslinya dan pengulangan berikutnya dibuang."
        },
        {
          "question": "Bisakah alat ini mengabaikan perbedaan huruf besar-kecil atau spasi?",
          "answer": "Bisa. Aktifkan opsi huruf besar-kecil dan pemangkasan spasi agar baris seperti Apple dan apple, atau baris dengan spasi berlebih, dianggap sama."
        }
      ]
    },
    "ui": {
      "One line per row": "Satu baris per entri",
      "Case-insensitive match": "Cocokkan tanpa membedakan huruf besar-kecil",
      "Trim spaces before comparing": "Pangkas spasi sebelum membandingkan",
      "Remove empty lines": "Hapus baris kosong",
      "First occurrence of each line is kept, in the original order.": "Kemunculan pertama setiap baris dipertahankan sesuai urutan asli.",
      "Unique lines": "Baris unik",
      "Repeated lines are dropped in this tab. The list is not uploaded.": "Baris berulang dibuang di tab ini. Daftar tidak diunggah.",
      "Keep text under 400,000 characters so the browser stays responsive.": "Jaga teks di bawah 400.000 karakter agar browser tetap responsif."
    }
  },
  "whitespace-remover": {
    "answer": "Penghapus spasi memangkas baris, menyatukan spasi, mengubah tab, dan membersihkan baris kosong sesuai opsi yang Anda pilih.",
    "content": {
      "about": "Bersihkan spasi, tab, dan baris kosong berlebih hanya dengan opsi yang Anda aktifkan. Berguna untuk log yang ditempel atau daftar dengan indentasi yang berantakan. “Pangkas setiap baris” mengesampingkan kotak awal dan akhir terpisah, dan jika opsi itu dimatikan indentasi tetap utuh.",
      "howTo": [
        "Tempel teks yang punya spasi, tab, atau baris kosong berlebih.",
        "Pilih hanya pembersihan yang Anda inginkan. Tidak ada yang berjalan sampai Anda menekan “Bersihkan teks”.",
        "Periksa jumlah baris dan karakter, lalu salin atau unduh hasilnya.",
        "Kosongkan kotak untuk membuang teks. Teks tidak disimpan."
      ],
      "examples": [
        {
          "title": "Baris log berindentasi",
          "body": "Pangkas setiap baris, atau hapus spasi awal saja jika Anda perlu mempertahankan spasi di akhir."
        },
        {
          "title": "Campuran tab dan spasi",
          "body": "Ubah tab menjadi 2 atau 4 spasi, lalu satukan spasi berulang jika Anda ingin spasi tunggal."
        }
      ],
      "explanation": "Setiap opsi bersifat eksplisit. “Pangkas setiap baris” mengesampingkan kotak awal dan akhir pada proses itu. “Hapus baris kosong” membuang semua baris kosong; menyatukan baris kosong menyisakan satu baris kosong di antara blok.",
      "limitations": "Hanya opsi yang Anda aktifkan yang diterapkan. “Pangkas setiap baris” mengesampingkan kotak awal dan akhir pada proses itu. “Hapus baris kosong” membuang semua baris kosong, sedangkan menyatukan menyisakan satu di antara blok. Lebih dari 400.000 karakter ditolak.",
      "faqs": [
        {
          "question": "Apakah penghapus spasi ini gratis?",
          "answer": "Ya. Membersihkan spasi, tab, dan baris kosong berlebih gratis dan tidak perlu akun."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Pembersihan tetap di tab ini. Teks tidak dikirim ke mana pun dan tidak disimpan di penyimpanan lokal."
        },
        {
          "question": "Apakah indentasi saya akan rusak?",
          "answer": "Hanya jika Anda mengaktifkan pemangkasan, penghapusan spasi awal, atau konversi tab. Matikan opsi itu untuk mempertahankan indentasi."
        },
        {
          "question": "Bagaimana cara menghapus spasi ganda dari teks?",
          "answer": "Aktifkan opsi yang menggabungkan spasi berulang. Deretan spasi di dalam setiap baris menjadi satu spasi."
        },
        {
          "question": "Bagaimana cara menghapus baris kosong?",
          "answer": "Gunakan hapus baris kosong untuk membuang semua baris kosong, atau gabungkan baris kosong untuk menyisakan satu baris kosong di antara paragraf."
        }
      ]
    },
    "ui": {
      "Cleanup options": "Opsi pembersihan",
      "Trim each line": "Pangkas setiap baris",
      "Remove leading whitespace": "Hapus spasi di awal",
      "Remove trailing whitespace": "Hapus spasi di akhir",
      "Collapse repeated spaces": "Satukan spasi berulang",
      "Convert tabs to spaces": "Ubah tab menjadi spasi",
      "Remove blank lines": "Hapus baris kosong",
      "Collapse multiple blank lines": "Satukan baris kosong berulang",
      "Trim entire document": "Pangkas seluruh dokumen",
      "Tab width": "Lebar tab",
      "2 spaces": "2 spasi",
      "4 spaces": "4 spasi",
      "Lines before": "Baris sebelum",
      "Lines after": "Baris sesudah",
      "Characters before": "Karakter sebelum",
      "Characters after": "Karakter sesudah",
      "Spaces, tabs, and blank lines are cleaned in this tab. The text is not posted to a server.": "Spasi, tab, dan baris kosong dibersihkan di tab ini. Teks tidak dikirim ke server."
    }
  },
  "line-sorter": {
    "answer": "Pengurut baris menyusun teks beberapa baris menurut abjad, angka, atau panjang, dengan opsi menghapus duplikat.",
    "content": {
      "about": "Urutkan satu item per baris dari A ke Z, Z ke A, menurut angka di awal, atau menurut panjang. Berguna saat daftar nama atau ekspor bernomor perlu diurutkan tanpa spreadsheet. Dalam urutan angka, 10 berada setelah 2, dan baris tanpa angka di awal ditempatkan setelah baris bernomor.",
      "howTo": [
        "Tempel satu item per baris.",
        "Pilih A→Z, Z→A, urutan angka, atau panjang. Atur huruf besar-kecil, pemangkasan, baris kosong, dan duplikat sesuai kebutuhan.",
        "Tekan “Urutkan baris”. Item yang sama mempertahankan urutan relatif aslinya.",
        "Salin atau unduh daftar yang sudah diurutkan."
      ],
      "examples": [
        {
          "title": "Nama",
          "body": "A→Z tanpa membedakan huruf besar-kecil menempatkan ada dan Ada berdampingan, dan jika keduanya sama, ejaan yang muncul lebih dulu tetap di depan."
        },
        {
          "title": "Baris bernomor",
          "body": "“Angka naik” membaca angka di awal, jadi 10 berada setelah 2. Baris tanpa angka ditempatkan setelah baris bernomor."
        }
      ],
      "explanation": "Pengurutan bersifat stabil: jika dua baris dianggap sama, baris yang dimasukkan lebih dulu tetap di depan. Mode angka membaca bilangan bulat atau desimal di awal baris. Penghapusan duplikat opsional memakai kunci perbandingan yang sama dengan opsi huruf besar-kecil dan pemangkasan.",
      "limitations": "Mode yang tersedia adalah A ke Z, Z ke A, angka naik, angka turun, terpendek, dan terpanjang. Baris yang sama mempertahankan urutan aslinya. Mode angka membaca angka di awal, dan baris tanpa angka ditempatkan setelah baris bernomor. Lebih dari 400.000 karakter ditolak.",
      "faqs": [
        {
          "question": "Apakah pengurut baris ini gratis?",
          "answer": "Ya. Mengurutkan daftar baris gratis tanpa akun."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Pengurutan berjalan di tab ini. Baris tidak dikirim ke server dan tidak disimpan di penyimpanan lokal."
        },
        {
          "question": "Apakah baris kosong dipertahankan?",
          "answer": "Ya, kecuali Anda memilih “Abaikan baris kosong”. Dalam mode abjad, baris kosong diurutkan sebagai teks kosong."
        },
        {
          "question": "Bagaimana cara mengurutkan daftar secara alfabetis?",
          "answer": "Tempel satu item per baris dan pilih A ke Z, atau Z ke A untuk urutan terbalik. Baris yang sama tetap pada urutan aslinya."
        },
        {
          "question": "Bagaimana cara mengurutkan baris berdasarkan angka?",
          "answer": "Pilih numerik naik atau turun. Setiap baris diurutkan menurut angka di awalnya, jadi 2 muncul sebelum 10."
        }
      ]
    },
    "ui": {
      "One item per line": "Satu item per baris",
      "Numeric ascending": "Angka naik",
      "Numeric descending": "Angka turun",
      "Shortest → longest": "Terpendek → terpanjang",
      "Longest → shortest": "Terpanjang → terpendek",
      "Trim before comparing": "Pangkas sebelum membandingkan",
      "Ignore empty lines": "Abaikan baris kosong",
      "Sort lines": "Urutkan baris",
      "Result lines": "Baris hasil",
      "The lines are sorted in this tab. The list is not sent to Tools Star Hub.": "Baris diurutkan di tab ini. Daftar tidak dikirim ke Tools Star Hub."
    }
  },
  "find-and-replace": {
    "answer": "Cari dan ganti mengubah kecocokan pertama atau semua kecocokan di teks yang Anda tempel. Anda bisa mengaktifkan atau menonaktifkan pembedaan huruf besar-kecil.",
    "content": {
      "about": "Tempel teks, ketik yang ingin dicari, lalu ketik penggantinya. Anda bisa mengubah kecocokan pertama atau semuanya, dan mengabaikan huruf besar-kecil.",
      "howTo": [
        "Tempel teks asli.",
        "Ketik teks yang dicari. Kolom pencarian kosong ditolak.",
        "Ketik penggantinya. Biarkan kosong jika Anda ingin menghapus kecocokan.",
        "Pilih “Ganti yang pertama” atau “Ganti semua”, lalu aktifkan atau nonaktifkan “Bedakan huruf besar-kecil”.",
        "Tekan “Ganti”, lalu salin hasilnya atau kosongkan formulir."
      ],
      "features": [
        "Kecocokan pertama atau semua kecocokan yang tidak tumpang tindih.",
        "Pencarian yang membedakan huruf besar-kecil atau tidak; pengganti selalu disisipkan persis seperti yang Anda ketik.",
        "Jumlah penggantian yang dilakukan."
      ],
      "examples": [
        {
          "title": "Memperbaiki nama yang berulang",
          "body": "Asli: “Ana sent the file. ana sent the notes.” Cari: ana. Pengganti: Ana. Pembedaan huruf mati, “Ganti semua”. Kedua nama menjadi Ana, dan jumlahnya 2."
        },
        {
          "title": "Mengubah judul pertama saja",
          "body": "Sebuah draf mengulang “Draft” tiga kali. “Ganti yang pertama” mengubah yang pertama dan membiarkan dua lainnya. Jumlahnya 1."
        }
      ],
      "explanation": "Pencarian menelusuri teks asli dari awal. Setelah satu kecocokan, pencarian berikutnya dimulai sesudahnya, jadi pengganti tidak dicari lagi. Mode tanpa membedakan huruf membandingkan salinan huruf kecil tetapi tidak mengubah teks di sekitarnya.",
      "tips": [
        "Jika Anda butuh pola seperti “angka apa pun”, gunakan penguji regex. Alat ini mencari karakter persis seperti yang Anda ketik.",
        "Pengganti yang mengandung teks yang dicari disisipkan apa adanya dan tidak diganti lagi dalam proses yang sama."
      ],
      "limitations": "Ini bukan regular expression. Batas kata tidak diperhatikan dan teks di dalam tanda kutip tidak dilewati. Kecocokan yang tumpang tindih tidak dihitung dua kali.",
      "faqs": [
        {
          "question": "Bisakah saya menghapus kecocokan?",
          "answer": "Bisa. Biarkan pengganti kosong. Setiap kecocokan dihapus dan tetap dihitung sebagai penggantian."
        },
        {
          "question": "Mengapa kata pendek berubah di dalam kata yang lebih panjang?",
          "answer": "Pencarian ini berbasis karakter. Mencari “cat” juga cocok dengan awal “catalog”. Tambahkan spasi jika Anda hanya ingin kata utuh, atau gunakan penguji regex dengan batas kata."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Teks dan kata kunci pencarian tetap di tab ini. Keduanya tidak dikirim ke server."
        },
        {
          "question": "Bagaimana cara mengganti satu kata di seluruh teks?",
          "answer": "Masukkan kata yang dicari dan penggantinya, pilih Ganti semua, lalu salin hasilnya. Aktifkan pencarian peka huruf besar-kecil jika huruf kapital penting."
        },
        {
          "question": "Apakah cari dan ganti mendukung ekspresi reguler?",
          "answer": "Tidak. Alat ini mencari teks persis seperti yang Anda ketik. Untuk pencocokan pola, uji polanya terlebih dahulu di Regex Tester."
        }
      ]
    },
    "ui": {
      "Replacement": "Pengganti",
      "How many matches": "Kecocokan yang diganti",
      "Replace first": "Ganti yang pertama",
      "Replace all": "Ganti semua",
      "Case-sensitive": "Bedakan huruf besar-kecil",
      "{0} replacement.": "{0} penggantian.",
      "{0} replacements.": "{0} penggantian.",
      "Paste the text you want to change.": "Tempel teks yang ingin Anda ubah.",
      "Enter the text to find.": "Ketik teks yang dicari."
    }
  },
  "remove-line-breaks": {
    "answer": "Hapus baris baru menyambung baris yang terpotong dengan spasi, menghapus jeda baris, atau mempertahankan satu baris kosong di antara paragraf.",
    "content": {
      "about": "Tempel teks yang terpotong menjadi banyak baris. Anda bisa menyambung baris-baris itu dengan spasi, menghapus jeda baris, atau mempertahankan baris kosong di antara paragraf.",
      "howTo": [
        "Tempel teks asli. Kotak tetap menampilkan jeda baris agar Anda bisa melihatnya.",
        "Pilih satu opsi: ganti baris baru dengan spasi, hapus baris baru, atau pertahankan jeda paragraf.",
        "Tekan “Bersihkan teks”.",
        "Salin teks yang sudah bersih atau kosongkan kedua kotak."
      ],
      "features": [
        "Teks asli tetap di kotak pertama; teks bersih terpisah.",
        "Mode spasi menyambung baris dan menyatukan spasi berulang.",
        "Mode paragraf mempertahankan baris kosong di tempat yang memang sudah ada."
      ],
      "examples": [
        {
          "title": "Email yang terpotong",
          "body": "Tiga baris pendek dari satu kalimat menjadi satu baris dengan spasi tunggal di antara kata saat Anda memilih “Ganti baris baru dengan spasi”."
        },
        {
          "title": "Dua paragraf",
          "body": "Satu blok, satu baris kosong, lalu blok lain. “Pertahankan jeda paragraf” menyambung baris di dalam setiap blok dan menyisakan satu baris kosong di antaranya."
        }
      ],
      "explanation": "Akhir baris Windows dan Mac lama diperlakukan sebagai jeda yang sama. Mode spasi mengubah setiap rangkaian jeda menjadi satu spasi, lalu memangkas ujungnya. Mode hapus membuang jeda dan bisa menempelkan kata terakhir satu baris ke kata pertama baris berikutnya. Mode paragraf memisahkan teks pada baris kosong dulu, lalu menyambung baris di dalam setiap paragraf.",
      "tips": [
        "Gunakan spasi untuk prosa. Gunakan hapus hanya jika jeda baris berada di tengah satu kesatuan, seperti angka panjang yang terbagi ke beberapa baris.",
        "Jika puisi atau daftar harus mempertahankan barisnya, jangan jalankan alat ini padanya."
      ],
      "limitations": "Alat ini tidak bisa membedakan kalimat terpotong dari daftar. Dalam mode paragraf, satu baris baru dianggap potongan baris. Hanya baris kosong yang memisahkan paragraf.",
      "faqs": [
        {
          "question": "Apakah spasi di dalam baris ikut dihapus?",
          "answer": "Mode spasi menyatukan spasi dan tab berulang. Mode hapus dan mode paragraf membiarkan spasi yang sudah ada di dalam baris."
        },
        {
          "question": "Bagaimana jika saya hanya menempel spasi?",
          "answer": "Halaman akan meminta Anda menempel teks. Spasi saja tidak cukup."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Teks yang ditempel ditulis ulang di tab ini. Teks tidak diunggah."
        },
        {
          "question": "Bagaimana cara menghapus jeda baris dari teks yang disalin dari PDF?",
          "answer": "Tempel teks dan pilih opsi yang mempertahankan paragraf. Jeda baris tunggal di dalam paragraf menjadi spasi, sedangkan baris kosong di antara paragraf tetap ada."
        },
        {
          "question": "Apa bedanya mengganti dan menghapus jeda baris?",
          "answer": "Mengganti mengubah setiap jeda menjadi spasi sehingga kata tetap terpisah. Menghapus membuang jeda, sehingga akhir satu baris menyambung ke awal baris berikutnya."
        }
      ]
    },
    "ui": {
      "Line breaks": "Baris baru",
      "Replace line breaks with spaces": "Ganti baris baru dengan spasi",
      "Remove line breaks": "Hapus baris baru",
      "Keep paragraph breaks": "Pertahankan jeda paragraf",
      "Cleaned text": "Teks bersih",
      "Paste some text first.": "Tempel teks terlebih dahulu."
    }
  },
  "add-line-numbers": {
    "answer": "Tambah nomor baris menaruh nomor dan pemisah di depan setiap baris tanpa mengubah isi baris itu sendiri.",
    "content": {
      "about": "Tempel beberapa baris dan beri nomor di depan masing-masing. Anda memilih nomor awal dan karakter di antara nomor dan baris.",
      "howTo": [
        "Tempel teks. Setiap baris tetap seperti yang Anda ketik.",
        "Atur nomor awal. Biasanya 1; bilangan bulat di bawah 0 juga boleh.",
        "Atur pemisah. Bawaannya titik dan spasi.",
        "Tekan “Tambah nomor”, lalu salin baris bernomor atau kosongkan formulir."
      ],
      "features": [
        "Teks baris tidak dipangkas atau ditulis ulang.",
        "Pemisah khusus, seperti \") \" atau tab.",
        "Nomor awal selain 1."
      ],
      "examples": [
        {
          "title": "Daftar tiga baris",
          "body": "Baris “Baris pertama”, “Baris kedua”, dan “Baris ketiga” dengan awal 1 dan pemisah “. ” menjadi “1. Baris pertama”, “2. Baris kedua”, dan “3. Baris ketiga”."
        },
        {
          "title": "Melanjutkan daftar dari 10",
          "body": "Dengan nomor awal 10 dan pemisah \") \", baris pertama yang ditempel menjadi “10) ” ditambah baris aslinya."
        }
      ],
      "explanation": "Teks dipecah pada baris baru. Setiap baris mendapat nomor awal ditambah posisinya, lalu pemisah, lalu karakter aslinya. Baris kosong juga diberi nomor, karena tetap dihitung sebagai baris.",
      "tips": [
        "Jika teks sudah bernomor, hapus nomornya dulu agar setiap baris tidak punya dua nomor.",
        "Gunakan tab sebagai pemisah jika Anda ingin menempel hasilnya ke spreadsheet."
      ],
      "limitations": "Baris baru di akhir menciptakan baris kosong terakhir, dan baris itu ikut diberi nomor. Teks yang terbungkus otomatis di kotak bukan baris baru; hanya baris baru sungguhan yang dihitung.",
      "faqs": [
        {
          "question": "Apakah ejaan atau spasinya berubah?",
          "answer": "Tidak. Karakter setelah pemisah adalah baris aslinya."
        },
        {
          "question": "Bisakah dimulai dari 0?",
          "answer": "Bisa. 0 dan bilangan bulat negatif diterima. Desimal seperti 1,5 tidak."
        },
        {
          "question": "Apakah input saya dikirim ke server?",
          "answer": "Tidak. Baris dan nomor awal tetap di tab ini. Keduanya tidak dikirim ke server."
        },
        {
          "question": "Bagaimana cara memberi nomor baris pada teks?",
          "answer": "Tempel teks, atur nomor awal dan pemisahnya, misalnya titik dan spasi, lalu tambahkan nomor dan salin hasilnya."
        },
        {
          "question": "Apakah baris kosong diberi nomor?",
          "answer": "Ya. Setiap jeda baris yang sebenarnya memulai baris bernomor baru, termasuk baris kosong dan baris kosong di bagian akhir."
        }
      ]
    },
    "ui": {
      "Starting number": "Nomor awal",
      "Separator": "Pemisah",
      "Placed between the number and the original line.": "Ditaruh di antara nomor dan baris asli.",
      "Add numbers": "Tambah nomor",
      "Numbered lines": "Baris bernomor",
      "Paste the lines you want to number.": "Tempel baris yang ingin diberi nomor.",
      "starting number": "nomor awal",
      "Enter a whole number for the starting line.": "Masukkan bilangan bulat untuk baris pertama."
    }
  },
  "number-to-words": {
    "answer": "Pengubah angka ke kata menuliskan bilangan bulat dari -999.999.999 sampai 999.999.999 dalam bahasa Inggris. Alat ini juga bisa membaca kata bilangan sederhana dalam bahasa Inggris kembali menjadi angka.",
    "content": {
      "about": "Tulis bilangan bulat dengan kata-kata dalam bahasa Inggris, atau ubah kata bilangan bahasa Inggris yang sederhana kembali menjadi angka. Rentangnya -999.999.999 sampai 999.999.999.",
      "howTo": [
        "Pilih angka ke kata atau kata ke angka.",
        "Masukkan angka atau katanya.",
        "Tekan “Konversi”."
      ],
      "features": [
        "Bilangan bulat hingga jutaan.",
        "Bilangan negatif dan nol.",
        "Pembacaan balik kata bahasa Inggris sederhana."
      ],
      "examples": [
        {
          "title": "1.234",
          "body": "Dalam bahasa Inggris: one thousand two hundred thirty-four."
        }
      ],
      "explanation": "Pengubah ini mengelompokkan angka menjadi jutaan, ribuan, dan sisanya. Puluhan dan satuan dari 21 sampai 99 memakai tanda hubung. Kata “and” tidak dipakai. Nol di depan diabaikan, jadi 007 adalah seven.",
      "tips": [
        "Tulis twenty-one dengan tanda hubung, atau twenty one.",
        "Gunakan minus untuk bilangan negatif."
      ],
      "limitations": "Desimal, miliaran, dan frasa yang memakai kata “and” tidak didukung. Hasilnya selalu dalam bahasa Inggris, bukan bahasa Indonesia.",
      "faqs": [
        {
          "question": "Bagaimana cara menulis angka dengan kata-kata?",
          "answer": "Halaman ini mengelompokkan jutaan, ribuan, dan ratusan, lalu menulis puluhan dan satuan. 123 adalah one hundred twenty-three."
        },
        {
          "question": "Rentang apa yang didukung?",
          "answer": "Bilangan bulat dari -999.999.999 sampai 999.999.999."
        },
        {
          "question": "Apa yang terjadi dengan nol di depan?",
          "answer": "Diabaikan. 007 adalah seven."
        },
        {
          "question": "Bisakah desimal dikonversi?",
          "answer": "Tidak. Masukkan bilangan bulat."
        },
        {
          "question": "Bisakah kata diubah kembali menjadi angka?",
          "answer": "Bisa, untuk kata bahasa Inggris sederhana dalam rentang ini, seperti one hundred twenty-three atau minus twenty."
        },
        {
          "question": "Apakah angka ini dikirim ke server?",
          "answer": "Tidak. Angka atau kata tetap di tab ini selama dikonversi. Tidak ada yang diunggah."
        }
      ]
    },
    "ui": {
      "Whole numbers from -999,999,999 through 999,999,999. Words use American form without the word and, such as one hundred twenty-three. Leading zeros are ignored.": "Bilangan bulat dari -999.999.999 sampai 999.999.999. Kata-katanya memakai bahasa Inggris Amerika tanpa kata “and”, misalnya one hundred twenty-three. Nol di depan diabaikan.",
      "Number to words": "Angka ke kata",
      "Words to number": "Kata ke angka",
      "Number words": "Kata bilangan (Inggris)",
      "Enter a whole number. Decimals are outside this converter.": "Masukkan bilangan bulat. Desimal tidak didukung.",
      "Enter a whole number using digits.": "Masukkan bilangan bulat dengan digit.",
      "This converter supports -999,999,999 through 999,999,999.": "Pengubah ini mendukung -999.999.999 sampai 999.999.999.",
      "Enter number words.": "Masukkan kata bilangan bahasa Inggris.",
      "Enter number words after minus.": "Masukkan kata bilangan bahasa Inggris setelah minus.",
      "This converter does not use the word and.": "Pengubah ini tidak memakai kata “and”.",
      "\"{0}\" is not a supported number word.": "“{0}” bukan kata bilangan yang didukung.",
      "That number is outside -999,999,999 through 999,999,999.": "Angka itu berada di luar -999.999.999 sampai 999.999.999."
    },
    "note": "Alat ini hanya menulis dan membaca kata bilangan dalam bahasa Inggris. Antarmuka dan panduannya sudah diterjemahkan."
  },
  "morse-code": {
    "answer": "Penerjemah kode Morse mengubah teks A–Z dan 0–9 menjadi Morse internasional, atau membaca Morse kembali menjadi teks. Huruf dipisahkan spasi dan kata dipisahkan garis miring.",
    "content": {
      "about": "Ubah huruf dan angka menjadi kode Morse internasional, atau Morse kembali menjadi teks.",
      "howTo": [
        "Pilih teks ke Morse atau Morse ke teks.",
        "Masukkan A–Z, 0–9, atau Morse yang terdiri dari titik, garis, spasi, dan /.",
        "Tekan “Konversi”."
      ],
      "features": [
        "A–Z dan 0–9.",
        "Spasi di antara huruf dan / di antara kata.",
        "Pesan kesalahan yang jelas untuk karakter yang tidak didukung."
      ],
      "examples": [
        {
          "title": "HELLO",
          "body": "HELLO adalah .... . .-.. .-.. ---."
        }
      ],
      "explanation": "Setiap huruf dan angka punya satu pola Morse internasional. Spasi memisahkan huruf. Garis miring memisahkan kata. Huruf kecil dibaca sebagai huruf kapital. Karakter di luar A–Z dan 0–9 menghentikan konversi.",
      "tips": [
        "SOS ditulis ... --- ...",
        "Beri satu spasi di antara huruf Morse."
      ],
      "limitations": "Tanda baca dan huruf di luar A–Z tidak dikonversi. Pola Morse yang tidak dikenal ditolak.",
      "faqs": [
        {
          "question": "Bagaimana teks ditulis dalam kode Morse?",
          "answer": "Setiap huruf menjadi pola Morse internasionalnya. Huruf dipisahkan spasi, dan kata dipisahkan /."
        },
        {
          "question": "Apakah huruf kecil bisa dipakai?",
          "answer": "Bisa. Huruf kecil dibaca sebagai huruf kapital."
        },
        {
          "question": "Apa pemisah antar kata?",
          "answer": "Garis miring memisahkan kata. Spasi memisahkan huruf di dalam satu kata."
        },
        {
          "question": "Bagaimana jika saya mengetik tanda baca?",
          "answer": "Halaman menyebutkan karakter yang tidak didukung dan tidak menebak kodenya."
        },
        {
          "question": "Apakah teks dikirim ke mana pun?",
          "answer": "Tidak. Konversi berjalan di browser Anda."
        },
        {
          "question": "Apakah data dikirim ke server?",
          "answer": "Tidak. Huruf dan pola Morse dikonversi di tab ini. Tidak ada yang dikirim ke server."
        }
      ]
    },
    "ui": {
      "International Morse for A-Z and 0-9. Letters are separated by a space. Words are separated by /. Unsupported characters are rejected.": "Morse internasional untuk A–Z dan 0–9. Huruf dipisahkan spasi, kata dipisahkan /. Karakter yang tidak didukung ditolak.",
      "Text to Morse": "Teks ke Morse",
      "Morse to text": "Morse ke teks",
      "Morse code": "Kode Morse",
      "Morse": "Morse",
      "Enter text to convert.": "Masukkan teks untuk dikonversi.",
      "\"{0}\" is not supported. Use A-Z and 0-9.": "“{0}” tidak didukung. Gunakan A–Z dan 0–9.",
      "Enter Morse code to convert.": "Masukkan kode Morse untuk dikonversi.",
      "Morse code can use only dots, dashes, spaces, and /.": "Kode Morse hanya boleh berisi titik, garis, spasi, dan /.",
      "A word separator is missing letters.": "Ada pemisah kata tanpa huruf di sekitarnya.",
      "\"{0}\" is not a supported Morse letter.": "“{0}” bukan huruf Morse yang didukung."
    }
  },
  "roman-numeral-converter": {
    "answer": "Pengubah angka Romawi mengubah bilangan bulat dari 1 sampai 3999 menjadi angka Romawi standar, dan membaca angka Romawi itu kembali menjadi bilangan. Nilai di atas 3999 tidak didukung.",
    "content": {
      "about": "Ubah bilangan bulat dari 1 sampai 3999 menjadi angka Romawi standar, dan ubah angka Romawi itu kembali menjadi bilangan.",
      "howTo": [
        "Pilih angka ke Romawi atau Romawi ke angka.",
        "Masukkan angka dari 1 sampai 3999, atau angka Romawi dengan I, V, X, L, C, D, dan M.",
        "Tekan “Konversi”."
      ],
      "features": [
        "Notasi pengurangan standar.",
        "Konversi balik.",
        "Penolakan angka Romawi yang bukan bentuk standar."
      ],
      "examples": [
        {
          "title": "1994",
          "body": "1994 adalah MCMXCIV."
        }
      ],
      "explanation": "Halaman ini menyusun angka dari M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, dan I. Rangkaian Romawi hanya diterima jika merupakan bentuk standar dari nilainya. IIII, IC, dan IL ditolak. Angka di atas 3999, termasuk notasi vinculum, tidak didukung.",
      "tips": [
        "4 adalah IV, bukan IIII.",
        "9 adalah IX, bukan VIIII."
      ],
      "limitations": "Rentangnya 1 sampai 3999. Nol, bilangan negatif, dan bilangan yang lebih besar ditolak.",
      "faqs": [
        {
          "question": "Bagaimana cara mengubah angka menjadi angka Romawi?",
          "answer": "Halaman ini memakai notasi pengurangan standar. 4 adalah IV, 9 adalah IX, 40 adalah XL, dan 3999 adalah MMMCMXCIX."
        },
        {
          "question": "Angka apa saja yang didukung?",
          "answer": "Bilangan bulat dari 1 sampai 3999."
        },
        {
          "question": "Mengapa IIII ditolak?",
          "answer": "IIII bukan bentuk standar dari 4. Bentuk standarnya IV."
        },
        {
          "question": "Bisakah angka di atas 3999 dikonversi?",
          "answer": "Tidak. Notasi lanjutan untuk angka yang lebih besar tidak didukung."
        },
        {
          "question": "Bisakah angka Romawi diubah kembali menjadi bilangan?",
          "answer": "Bisa, jika angka Romawi itu berbentuk standar dari 1 sampai 3999."
        },
        {
          "question": "Apakah angka ini dikirim ke server?",
          "answer": "Tidak. Angka atau angka Romawi dikonversi di tab ini. Tidak ada yang diunggah."
        }
      ]
    },
    "ui": {
      "Standard Roman numerals from 1 through 3999. Numerals above 3999, including vinculum notation, are not supported. Invalid sequences such as IIII are rejected.": "Angka Romawi standar dari 1 sampai 3999. Angka di atas 3999, termasuk notasi vinculum, tidak didukung. Urutan tidak valid seperti IIII ditolak.",
      "Number to Roman": "Angka ke Romawi",
      "Roman to number": "Romawi ke angka",
      "Roman numeral": "Angka Romawi",
      "Enter a whole number from 1 through 3999.": "Masukkan bilangan bulat dari 1 sampai 3999.",
      "This converter supports 1 through 3999. Numerals above 3999 are not supported.": "Pengubah ini mendukung 1 sampai 3999. Angka di atas 3999 tidak didukung.",
      "Enter a Roman numeral.": "Masukkan angka Romawi.",
      "Use only I, V, X, L, C, D, and M.": "Gunakan hanya I, V, X, L, C, D, dan M.",
      "\"{0}\" is not a valid Roman numeral.": "“{0}” bukan angka Romawi yang valid."
    }
  },
  "text-repeater": {
    "answer": "Pengulang teks menyalin kata, frasa, atau baris 1 sampai 200 kali, dengan tanpa pemisah, spasi, atau baris baru di antara salinan.",
    "content": {
      "about": "Ulangi kata, frasa, atau baris 1 sampai 200 kali. Beri tanpa pemisah, spasi, atau baris baru di antara salinan. Teks sumber bisa sampai 5.000 karakter, dan hasil gabungannya sampai 100.000 karakter.",
      "howTo": [
        "Masukkan teks yang ingin diulang. Kotak kosong ditolak.",
        "Masukkan bilangan bulat dari 1 sampai 200.",
        "Pilih tanpa pemisah, spasi, atau baris baru di antara salinan, lalu tekan “Ulangi”."
      ],
      "features": [
        "Satu salinan saat jumlahnya 1, tanpa pemisah tambahan.",
        "Spasi atau baris baru hanya di antara salinan, tidak setelah salinan terakhir.",
        "Batas panjang agar hasil yang sangat besar tidak memenuhi halaman."
      ],
      "examples": [
        {
          "title": "Satu kata tiga kali",
          "body": "ha, jumlah 3, dengan spasi di antara salinan, menjadi ha ha ha."
        },
        {
          "title": "Satu baris dua kali",
          "body": "Siap, jumlah 2, dengan baris baru di antara salinan, menjadi Siap di satu baris dan Siap di baris berikutnya."
        }
      ],
      "explanation": "Halaman ini menyalin teks sebanyak yang Anda minta dan menggabungkan salinan dengan pemisah pilihan Anda. Alat ini tidak membuat teks Latin pengisi dan tidak menghapus duplikat.",
      "tips": [
        "Gunakan baris baru untuk daftar baris yang sama. Gunakan spasi jika ingin semuanya dalam satu baris."
      ],
      "limitations": "Teks sumber bisa sampai 5.000 karakter, jumlah sampai 200, dan hasil gabungan sampai 100.000 karakter. Hasil yang lebih panjang ditolak.",
      "faqs": [
        {
          "question": "Apakah pengulang teks ini gratis?",
          "answer": "Ya. Anda bisa mengulang teks di sini tanpa membayar atau membuat akun."
        },
        {
          "question": "Apakah jumlah 1 menambahkan pemisah?",
          "answer": "Tidak. Satu salinan adalah teks yang Anda ketik, tanpa tambahan."
        },
        {
          "question": "Bisakah saya mengulang baris kosong?",
          "answer": "Kotak kosong ditolak. Baris yang hanya berisi spasi diterima, karena spasi itu termasuk teks."
        },
        {
          "question": "Apakah teks dikirim ke server?",
          "answer": "Tidak. Salinan dibuat di tab browser ini. Tools Star Hub tidak mengirim teks itu ke server atau menyimpannya di penyimpanan lokal."
        }
      ]
    },
    "ui": {
      "The copies are built in this tab. The text is not sent to a server.": "Salinan dibuat di tab ini. Teks tidak dikirim ke server.",
      "Text to repeat": "Teks yang diulang",
      "Repeat count": "Jumlah pengulangan",
      "From 1 to 200.": "Dari 1 sampai 200.",
      "Between copies": "Di antara salinan",
      "Nothing": "Tanpa pemisah",
      "Space": "Spasi",
      "New line": "Baris baru",
      "Enter the text to repeat.": "Masukkan teks yang ingin diulang.",
      "Keep the text under {0} characters.": "Jaga teks di bawah {0} karakter.",
      "repeat count": "jumlah pengulangan",
      "Enter a whole number of repeats.": "Masukkan bilangan bulat untuk jumlah pengulangan.",
      "Choose a repeat count from {0} to {1}.": "Pilih jumlah pengulangan dari {0} sampai {1}.",
      "That repeat is too long for this page. Use a shorter text or a smaller count.": "Pengulangan itu terlalu panjang untuk halaman ini. Gunakan teks yang lebih pendek atau jumlah yang lebih kecil."
    }
  }
};

export default data;
