import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "ai-prompt-generator": {
    "answer": "Generator prompt AI menyusun prompt terstruktur dari topik, tujuan, audiens, dan format yang Anda isi. \"Buat prompt\" tetap berjalan di browser Anda. \"Buat dengan AI\" mengirim kolom tersebut ke API Gemini milik Google melalui ToolStarHub.",
    "content": {
      "about": "Generator prompt AI mengubah kolom yang Anda isi menjadi prompt yang bisa disalin. Preset hanya mengisi kegunaan, nada, format, tingkat detail, dan instruksi awal. Topiknya tetap harus Anda isi sendiri.",
      "howTo": [
        "Pilih preset atau ketik kegunaan Anda sendiri.",
        "Isi topik atau tujuan. Minimal salah satunya wajib.",
        "Atur audiens, nada, bahasa, format, dan tingkat detail yang diinginkan.",
        "Klik \"Buat prompt\" untuk menyusunnya di browser, atau \"Buat dengan AI\" agar Gemini menyempurnakannya.",
        "Gunakan \"Hapus\" untuk mengosongkan formulir."
      ],
      "features": [
        "Dua belas preset untuk artikel, unggahan, naskah, teks produk, kerangka riset, dan tugas pemrograman.",
        "Prompt terstruktur yang menyebutkan tugas, audiens, nada, bahasa, dan format.",
        "Satu baris yang meminta model tidak mengarang fakta yang kurang.",
        "Salin dan hapus. Tidak ada yang disimpan."
      ],
      "examples": [
        {
          "title": "Artikel blog tentang usia di tahun kabisat",
          "body": "Preset: artikel blog. Topik: cara menghitung usia orang yang lahir pada 29 Februari. Audiens: orang yang memakai kalkulator tanggal. Prompt meminta pembuka singkat dan penutup yang tidak bertele-tele."
        },
        {
          "title": "Tugas pemrograman",
          "body": "Preset: prompt pemrograman. Tujuan: menulis fungsi yang menolak rentang halaman kosong. Instruksi tambahan: gunakan TypeScript dan tunjukkan contoh yang gagal. Prompt menanyakan bahasa, input, dan kapan tugas dianggap selesai."
        }
      ],
      "explanation": "\"Buat prompt\" menggabungkan jawaban Anda menjadi baris-baris berlabel. Jika topik dan tujuan sama-sama kosong, alat berhenti dan meminta salah satunya. \"Buat dengan AI\" mengirim kolom tersebut ke Gemini dan mengembalikan prompt yang sudah disempurnakan.",
      "limitations": "\"Buat prompt\" hanya menggabungkan kolom yang terisi dan memerlukan topik atau tujuan. Preset mengisi kolom gaya, tetapi tidak mengarang topik. \"Buat dengan AI\" menyempurnakan prompt dengan Gemini. Halaman ini tidak menjalankan prompt di model penulisan.",
      "tips": [
        "Sebutkan pembacanya. \"Orang tua baru\" lebih membantu daripada \"semua orang\".",
        "Katakan bentuk hasil yang diinginkan: daftar, email, naskah.",
        "Masukkan fakta yang sudah Anda ketahui ke instruksi tambahan agar model tidak perlu menebak."
      ],
      "faqs": [
        {
          "question": "Apakah alat ini menggunakan AI?",
          "answer": "\"Buat prompt\" menyusun prompt di halaman ini. \"Buat dengan AI\" mengirim kolom ke API Gemini milik Google melalui ToolStarHub dan mengembalikan prompt yang disempurnakan. Keduanya bisa Anda tempel ke model lain."
        },
        {
          "question": "Bagaimana jika saya hanya tahu topiknya?",
          "answer": "Topik saja sudah cukup untuk membuat prompt. Tambahkan tujuan setelah Anda tahu apa yang harus bisa dilakukan pembaca sesudahnya."
        },
        {
          "question": "Apakah teks saya dikirim ke server?",
          "answer": "\"Buat prompt\" tetap di tab ini dan tidak mengunggah kolom. \"Buat dengan AI\" mengirim kolom ke API Gemini milik Google melalui ToolStarHub dan mengembalikan prompt yang disempurnakan. ToolStarHub tidak menyimpan teks tersebut. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya."
        },
        {
          "question": "Apa yang membuat prompt AI bagus?",
          "answer": "Sebutkan apa yang Anda inginkan, untuk siapa, nadanya, formatnya, dan panjangnya. Tujuan yang jelas dan contoh hasil biasanya lebih membantu daripada tambahan kata sifat."
        },
        {
          "question": "Bisakah prompt ini dipakai di ChatGPT, Gemini, atau Claude?",
          "answer": "Bisa. Hasilnya berupa teks biasa yang bisa ditempel ke asisten chat mana pun. Meski begitu, model yang berbeda bisa menjawab prompt yang sama secara berbeda."
        }
      ]
    },
    "ui": {
      "Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.": "\"Buat prompt\" menyusun prompt di browser Anda. \"Buat dengan AI\" mengirim kolom yang terisi ke API Gemini milik Google melalui ToolStarHub dan mengembalikan prompt yang sudah ditulis rapi. Teks tidak disimpan.",
      "Platform or use case": "Platform atau kegunaan",
      "Topic": "Topik",
      "Goal": "Tujuan",
      "Audience": "Audiens",
      "Tone": "Nada",
      "Language": "Bahasa",
      "Output format": "Format keluaran",
      "Level of detail": "Tingkat detail",
      "Brief": "Singkat",
      "Medium": "Sedang",
      "High": "Tinggi",
      "Additional instructions": "Instruksi tambahan",
      "Generate prompt": "Buat prompt",
      "Prompt": "Prompt",
      "AI prompt": "Prompt AI",
      "Blog article": "Artikel blog",
      "SEO article": "Artikel SEO",
      "Social media post": "Unggahan media sosial",
      "YouTube script": "Naskah YouTube",
      "YouTube thumbnail prompt": "Prompt thumbnail YouTube",
      "Image generation": "Pembuatan gambar",
      "Video generation": "Pembuatan video",
      "Product description": "Deskripsi produk",
      "Email": "Email",
      "Marketing copy": "Teks pemasaran",
      "Academic/research prompt": "Prompt akademik/riset",
      "Coding prompt": "Prompt pemrograman",
      "Add a topic or a goal before generating a prompt.": "Isi topik atau tujuan sebelum membuat prompt."
    },
    "note": "\"Buat prompt\" menulis prompt dalam bahasa Inggris, bahasa yang paling akurat diikuti model AI. Kolom \"Bahasa\" menentukan bahasa jawabannya. \"Buat dengan AI\" juga memahami isian berbahasa Indonesia."
  },
  "prompt-to-image": {
    "answer": "Alat prompt ke gambar menulis prompt gambar yang bisa disalin dari subjek dan gaya. Alat ini tidak membuat gambarnya. \"Buat dengan AI\" hanya mengembalikan prompt yang lebih rinci.",
    "content": {
      "about": "Generator prompt ke gambar menulis prompt untuk model gambar. Anda menjelaskan subjek, tempat, cahaya, dan pembingkaian. Halaman ini tidak menggambar karena tidak ada API gambar yang terhubung.",
      "howTo": [
        "Pilih preset gaya jika ingin titik awal.",
        "Jelaskan subjeknya. Tanpa subjek, alat tidak membuat prompt.",
        "Tambahkan latar, cahaya, kamera, warna, suasana, dan rasio aspek jika penting.",
        "Isi prompt negatif untuk hal yang tidak boleh ada di gambar.",
        "Klik \"Buat prompt\", lalu salin prompt dan prompt negatif secara terpisah."
      ],
      "features": [
        "Preset untuk foto, sinematik, ilustrasi, produk, potret, lanskap, arsitektur, fantasi, anime, 3D, dan thumbnail.",
        "Tombol salin terpisah untuk prompt utama dan prompt negatif.",
        "Kolom kosong dilewati agar prompt tidak berisi label kosong."
      ],
      "examples": [
        {
          "title": "Foto produk",
          "body": "Subjek: botol minum baja tahan karat. Preset: fotografi produk. Rasio aspek: 1:1. Prompt negatif: logo tambahan, orang, meja berantakan. Hasilnya berupa deskripsi studio, bukan file."
        },
        {
          "title": "Thumbnail",
          "body": "Subjek: seseorang memegang PDF yang ditandai. Preset: thumbnail YouTube. Komposisinya tetap \"satu subjek, ruang untuk judul pendek\". Teks judulnya tetap Anda tulis sendiri."
        }
      ],
      "explanation": "Setiap kolom yang terisi menjadi frasa pendek. Subjek wajib diisi agar prompt menggambarkan sesuatu yang spesifik. Preset mengubah gaya dan beberapa kolom terkait, tetapi tidak menghapus subjek yang sudah Anda ketik.",
      "limitations": "Halaman ini menulis prompt dan, jika Anda mau, prompt negatif. Halaman ini tidak memberikan file gambar. Subjek wajib diisi. \"Buat dengan AI\" meminta Gemini membuat prompt yang lebih panjang, lalu Anda tempel ke alat gambar.",
      "tips": [
        "Satu subjek lebih mudah dijelaskan daripada kerumunan.",
        "Sebutkan cahayanya. \"Cahaya jendela\" dan \"matahari terik tengah hari\" menghasilkan gambar yang sangat berbeda.",
        "Gunakan prompt negatif untuk kesalahan yang sering muncul, seperti jari berlebih atau tulisan yang rusak."
      ],
      "faqs": [
        {
          "question": "Mengapa tidak ada gambar?",
          "answer": "Halaman ini menulis prompt dan tidak membuat gambar. \"Buat dengan AI\" meminta Gemini membuat prompt yang lebih rinci. Tempelkan ke layanan yang membuat gambar."
        },
        {
          "question": "Apakah setiap model membaca prompt dengan cara yang sama?",
          "answer": "Tidak. Setiap model bereaksi berbeda terhadap susunan kata. Anggap hasilnya sebagai brief yang jelas dan sesuaikan dengan alat Anda."
        },
        {
          "question": "Apakah teks saya dikirim ke server?",
          "answer": "\"Buat prompt\" tetap di browser ini dan tidak mengunggah brief. \"Buat dengan AI\" mengirim brief ke API Gemini milik Google melalui ToolStarHub dan mengembalikan prompt yang lebih panjang. ToolStarHub tidak menyimpan teks tersebut. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya. Halaman ini tetap tidak membuat gambar."
        },
        {
          "question": "Bagaimana cara menulis prompt gambar yang bagus?",
          "answer": "Mulailah dari subjek, lalu tambahkan latar, cahaya, gaya kamera atau seni, palet warna, suasana, dan rasio aspek. Spesifiklah pada hal yang penting dan tinggalkan sisanya."
        },
        {
          "question": "Apa itu prompt negatif?",
          "answer": "Prompt negatif berisi daftar hal yang tidak boleh ada di gambar, seperti tulisan, jari berlebih, atau blur. Tidak semua model gambar membacanya."
        }
      ]
    },
    "ui": {
      "Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.": "\"Buat prompt\" menulis prompt gambar di browser Anda. \"Buat dengan AI\" mengirim brief Anda ke API Gemini milik Google melalui ToolStarHub dan mengembalikan prompt gambar yang lebih lengkap. Halaman ini tidak membuat gambar. Teks tidak disimpan.",
      "Style presets": "Preset gaya",
      "Composition": "Komposisi",
      "Colors": "Warna",
      "Quality and detail": "Kualitas dan detail",
      "Things you want left out of the picture.": "Hal yang tidak ingin ada di gambar.",
      "Image prompt": "Prompt gambar",
      "AI image prompt": "Prompt gambar AI",
      "Photorealistic": "Fotorealistis",
      "Cinematic": "Sinematik",
      "Illustration": "Ilustrasi",
      "Product photography": "Fotografi produk",
      "Portrait": "Potret",
      "Landscape": "Lanskap",
      "Architecture": "Arsitektur",
      "Fantasy": "Fantasi",
      "Anime": "Anime",
      "3D render": "Render 3D",
      "YouTube thumbnail": "Thumbnail YouTube",
      "Describe the subject before building the prompt.": "Jelaskan subjek sebelum membuat prompt."
    },
    "note": "Prompt yang dibuat memakai label berbahasa Inggris, yang paling mudah dipahami model gambar. Anda bisa mengetik deskripsi dalam bahasa apa pun."
  },
  "prompt-to-video": {
    "answer": "Alat prompt ke video menulis deskripsi shot yang bisa ditempel ke model video. Alat ini tidak membuat klip. \"Buat dengan AI\" hanya mengembalikan prompt tertulis.",
    "content": {
      "about": "Generator prompt ke video menulis deskripsi satu shot: siapa atau apa yang terlihat, apa yang bergerak, bagaimana kamera bergerak, dan berapa lama shot berlangsung. Alat ini tidak membuat video.",
      "howTo": [
        "Pilih preset sebagai gaya awal, atau biarkan kolom kosong dan tulis sendiri.",
        "Isi subjek atau aksi. Salah satunya wajib.",
        "Jelaskan adegan, kamera, lensa, cahaya, durasi, dan rasio aspek.",
        "Tambahkan audio atau dialog hanya jika shot memerlukannya.",
        "Klik \"Buat prompt\" lalu salin teksnya. \"Hapus\" mengembalikan formulir, termasuk durasi bawaan."
      ],
      "features": [
        "Preset untuk sinematik, iklan produk, media sosial, YouTube, dokumenter, perjalanan, aksi, mode, alam, adegan bersejarah, dan animasi.",
        "Baris penutup yang membatasi permintaan pada satu shot tanpa potongan.",
        "Prompt negatif terpisah untuk kesalahan gerak atau visual yang ingin dihindari."
      ],
      "examples": [
        {
          "title": "Produk yang dikelilingi kamera",
          "body": "Subjek: mug keramik. Aksi: uap mengepul. Preset: iklan produk. Durasi tetap 6 detik. Prompt meminta gerakan kamera memutar dan cahaya studio."
        },
        {
          "title": "Shot perjalanan yang tenang",
          "body": "Subjek: jalan setapak di pesisir. Aksi: seseorang berjalan menjauhi kamera. Preset: perjalanan. Isi waktu dalam sehari di kolom latar agar cahayanya tidak dibiarkan kosong."
        }
      ],
      "explanation": "Model video lebih baik menangani satu aksi daripada rangkaian adegan. Generator menjaga frasa Anda dalam urutan tetap dan menambahkan \"satu shot tanpa potongan\" agar permintaan tidak berubah menjadi storyboard.",
      "limitations": "Generator menggambarkan satu shot tanpa potongan. Alat ini tidak membuat atau mengunduh video. Anda memerlukan subjek atau aksi. Durasi, kamera, dan dialog hanya dimasukkan jika Anda mengetiknya.",
      "tips": [
        "Sebutkan apa yang bergerak dan apa yang diam.",
        "Durasi seperti \"5 detik\" lebih berguna daripada \"pendek\".",
        "Jika perlu dialog, tulis kalimatnya. Jangan minta model mengarang pidato."
      ],
      "faqs": [
        {
          "question": "Bisakah saya mengunduh video dari halaman ini?",
          "answer": "Tidak. Halaman ini tidak membuat video. \"Buat dengan AI\" hanya mengembalikan prompt shot tertulis dari Gemini. Salin ke alat video yang Anda percayai."
        },
        {
          "question": "Bagaimana jika saya hanya menjelaskan aksinya?",
          "answer": "Aksi saja sudah cukup. Menambahkan subjek membuat shot lebih mudah dibayangkan."
        },
        {
          "question": "Apakah teks saya dikirim ke server?",
          "answer": "\"Buat prompt\" menulis shot di tab ini. \"Buat dengan AI\" mengirim kolom shot ke API Gemini milik Google melalui ToolStarHub dan mengembalikan prompt tertulis. ToolStarHub tidak menyimpan teks tersebut. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya. Tidak ada file video yang dibuat."
        },
        {
          "question": "Bagaimana cara menulis prompt untuk video AI?",
          "answer": "Jelaskan satu shot: subjek, aksi, latar, gerakan kamera, lensa, cahaya, dan durasinya. Prompt yang pendek dan konkret biasanya lebih berhasil daripada cerita panjang."
        },
        {
          "question": "Model video apa yang bisa memakai prompt ini?",
          "answer": "Hasilnya berupa teks biasa, jadi bisa ditempel ke alat teks ke video mana pun. Setiap model mengikuti arahan kamera dan waktu dengan caranya sendiri."
        }
      ]
    },
    "ui": {
      "Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.": "\"Buat prompt\" menulis prompt video di browser Anda. \"Buat dengan AI\" mengirim brief Anda ke API Gemini milik Google melalui ToolStarHub dan mengembalikan prompt shot. Halaman ini tidak membuat video. Teks tidak disimpan.",
      "Video subject": "Subjek video",
      "Scene": "Adegan",
      "Action": "Aksi",
      "Camera movement": "Gerakan kamera",
      "Lens": "Lensa",
      "Visual style": "Gaya visual",
      "Duration": "Durasi",
      "Audio or dialogue": "Audio atau dialog",
      "Video prompt": "Prompt video",
      "AI video prompt": "Prompt video AI",
      "Cinematic": "Sinematik",
      "Product commercial": "Iklan produk",
      "Social media": "Media sosial",
      "YouTube": "YouTube",
      "Documentary": "Dokumenter",
      "Travel": "Perjalanan",
      "Fashion": "Mode",
      "Nature": "Alam",
      "Historical": "Bersejarah",
      "Animation": "Animasi",
      "Add a subject or an action before building the prompt.": "Isi subjek atau aksi sebelum membuat prompt."
    },
    "note": "Prompt yang dibuat memakai label berbahasa Inggris, yang paling mudah dipahami model video. Anda bisa mengetik deskripsi dalam bahasa apa pun."
  },
  "ai-article-detector": {
    "answer": "Halaman ini memeriksa pola tulisan seperti panjang kalimat dan frasa yang berulang. \"Analisis dengan AI\" juga merupakan analisis pola tulisan. Halaman ini tidak memutuskan apakah teks ditulis manusia atau model.",
    "content": {
      "about": "Detektor artikel AI memeriksa draf yang ditempel dan melaporkan panjang kalimat, seberapa bervariasi panjangnya, seberapa luas kosakatanya, dan frasa pendek yang berulang. Hasilnya disebut \"analisis pola tulisan\" dan tidak mengklaim lebih dari itu.",
      "howTo": [
        "Tempel minimal 40 kata.",
        "Klik \"Analisis tulisan\" untuk pemeriksaan di browser, atau \"Analisis dengan AI\" untuk analisis pola tulisan oleh Gemini.",
        "Baca nilai dan catatan di bawahnya.",
        "Jika sampel terlalu pendek, halaman akan memberi tahu alih-alih memberi nilai.",
        "\"Hapus\" mengosongkan teks dari halaman."
      ],
      "features": [
        "Rata-rata panjang kalimat dengan variasi rendah, sedang, atau beragam.",
        "Penilaian kosakata berdasarkan jumlah kata yang berbeda.",
        "Frasa empat kata yang muncul tiga kali atau lebih.",
        "Daftar singkat frasa klise jika ada."
      ],
      "examples": [
        {
          "title": "Draf yang berulang",
          "body": "Jika empat kata yang sama muncul di beberapa kalimat, frasa itu ditampilkan beserta jumlahnya. Artinya draf tersebut berulang, bukan berarti ditulis oleh model."
        },
        {
          "title": "Keterangan singkat",
          "body": "Dua puluh kata tidak cukup. Alat meminta 40 kata agar satu kalimat tidak dianggap sebagai pola."
        }
      ],
      "explanation": "Variasi kalimat membandingkan sebaran panjang kalimat dengan rata-ratanya. Kosakata membandingkan jumlah kata berbeda dengan totalnya. Kedua nilai ini berubah dengan penyuntingan biasa. Draf manusia yang rapi bisa tampak seragam, dan draf hasil generasi bisa tampak beragam. Hasilnya juga menyebutkan hal ini.",
      "limitations": "Pemeriksaan di browser memerlukan minimal 40 kata. Pemeriksaan ini melaporkan panjang kalimat, keluasan kosakata, dan frasa berulang. Tidak ada persentase atau putusan bahwa draf ditulis oleh model. \"Analisis dengan AI\" mengirim teks ke Gemini untuk deskripsi sejenis.",
      "tips": [
        "Gunakan satu paragraf utuh, bukan judul.",
        "Anggap frasa berulang sebagai petunjuk penyuntingan. Hapus jika pembaca akan menyadarinya.",
        "Jangan gunakan penilaian ini untuk menuduh seseorang memakai model."
      ],
      "faqs": [
        {
          "question": "Bisakah alat ini tahu apakah teks ditulis AI?",
          "answer": "Tidak dengan pasti. Pemeriksaan pola bisa keliru ke dua arah. Hasilnya menggambarkan draf, bukan putusan."
        },
        {
          "question": "Mengapa tidak ada persentase?",
          "answer": "Persentase akan terlihat seperti bukti. \"Analisis tulisan\" dan \"Analisis dengan AI\" sama-sama menggambarkan pola. Tidak satu pun mengklaim tahu siapa penulisnya."
        },
        {
          "question": "Apakah teks saya dikirim ke server?",
          "answer": "\"Analisis tulisan\" menghitung pola di tab ini dan tidak mengunggah draf. \"Analisis dengan AI\" mengirim draf ke API Gemini milik Google melalui ToolStarHub untuk mendapatkan deskripsi tertulis. ToolStarHub tidak menyimpan teks tersebut. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya."
        },
        {
          "question": "Apakah detektor AI akurat?",
          "answer": "Tidak ada detektor yang bisa membuktikan siapa penulis sebuah teks. Skor berbasis pola bisa menandai tulisan manusia dan melewatkan tulisan AI yang sudah disunting, jadi anggap setiap hasil sebagai dorongan untuk meninjau, bukan sebagai bukti."
        },
        {
          "question": "Pola apa yang diperiksa alat ini?",
          "answer": "Alat ini melaporkan panjang kalimat, seberapa beragam kosakatanya, dan frasa yang berulang, sehingga Anda bisa melihat bagian draf yang terasa datar atau berulang."
        }
      ]
    },
    "ui": {
      "Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.": "\"Analisis tulisan\" memeriksa pola di browser Anda. \"Analisis dengan AI\" mengirim draf ke API Gemini milik Google melalui ToolStarHub untuk analisis pola tulisan. Tidak satu pun hasil bisa menentukan siapa penulis teks. Draf tidak disimpan.",
      "Article or draft": "Artikel atau draf",
      "Paste at least 40 words.": "Tempel minimal 40 kata.",
      "Analyze writing": "Analisis tulisan",
      "Analyze with AI": "Analisis dengan AI",
      "Avg. sentence": "Rata-rata kalimat",
      "{0} words": "{0} kata",
      "Sentence variation": "Variasi kalimat",
      "Vocabulary": "Kosakata",
      "Writing pattern analysis": "Analisis pola tulisan",
      "No four-word phrase repeats three or more times.": "Tidak ada frasa empat kata yang muncul tiga kali atau lebih.",
      "Familiar stock phrases found:": "Frasa klise yang ditemukan:",
      "AI writing analysis": "Analisis tulisan AI",
      "Paste some writing first.": "Tempel teks terlebih dahulu.",
      "Paste at least 40 words. A short snippet does not show a pattern.": "Tempel minimal 40 kata. Potongan pendek tidak menunjukkan pola.",
      "Low": "Rendah",
      "Moderate": "Sedang",
      "Varied": "Beragam",
      "Narrow": "Sempit",
      "Mixed": "Campuran",
      "Broad": "Luas",
      "\"{0}\" appears {1} times": "\"{0}\" muncul {1} kali",
      "These are writing patterns, not proof of who wrote the text. Similar patterns show up in edited human drafts and in generated drafts. A detector can be wrong in both directions.": "Ini adalah pola tulisan, bukan bukti siapa penulisnya. Pola serupa muncul pada draf manusia yang sudah disunting dan pada draf hasil generasi. Detektor bisa keliru ke dua arah."
    },
    "note": "Pemeriksaan di browser memakai daftar kata dan frasa klise berbahasa Inggris, jadi paling cocok untuk teks bahasa Inggris. \"Analisis dengan AI\" juga bisa dipakai untuk teks bahasa Indonesia."
  },
  "ai-article-compressor": {
    "answer": "Kompresor artikel memperpendek draf dengan membuang kata pengisi dan kalimat yang berulang. \"Ringkas dengan AI\" meminta Gemini mempertahankan inti tulisan. Periksa hasilnya sebelum diterbitkan.",
    "content": {
      "about": "Kompresor artikel AI memperpendek draf panjang. Kompresi ringan mengganti beberapa frasa bertele-tele dan merapikan spasi. Kompresi sedang dan kuat juga membuang kalimat yang berulang. Baca hasilnya: ketika satu kalimat hilang, maknanya bisa bergeser.",
      "howTo": [
        "Tempel artikelnya. Minimal 12 kata.",
        "Pilih kompresi ringan, sedang, atau kuat.",
        "Klik \"Perpendek artikel\" untuk aturan di browser, atau \"Ringkas dengan AI\" agar Gemini yang meringkas.",
        "Bandingkan jumlah kata dan salin draf yang lebih pendek jika masih menyampaikan maksud Anda.",
        "\"Hapus\" mengosongkan kedua kotak dan mengembalikan tingkat ke sedang."
      ],
      "features": [
        "Tiga tingkat agar putaran ringan tidak menghapus kalimat.",
        "Jumlah kata sebelum dan sesudah.",
        "Penggantian tetap, seperti \"in order to\" menjadi \"to\".",
        "Penghapusan kalimat ganda pada tingkat sedang dan kuat."
      ],
      "examples": [
        {
          "title": "Kalimat bertele-tele",
          "body": "\"In order to finish the form, you need to sign it\" menjadi \"to finish the form, you need to sign it\" di semua tingkat."
        },
        {
          "title": "Kalimat yang sama dua kali",
          "body": "Tingkat sedang dan kuat mempertahankan yang pertama dan membuang pengulangan persis berikutnya. Tingkat ringan membiarkan keduanya."
        }
      ],
      "explanation": "\"Perpendek artikel\" memakai daftar penggantian tetap. Kompresi kuat juga melewati kalimat berikutnya yang diawali enam kata yang sama dengan kalimat sebelumnya. \"Ringkas dengan AI\" meminta Gemini memperpendek artikel pada tingkat yang dipilih. Baca kedua hasil sebelum mengandalkannya.",
      "limitations": "Kompresi ringan mengganti daftar tetap frasa bertele-tele. Tingkat sedang dan kuat juga membuang pengulangan persis berikutnya, dan tingkat kuat bisa melewati kalimat yang diawali enam kata yang sama. Draf memerlukan minimal 12 kata. Kompresi bisa membuang kalimat yang masih Anda perlukan.",
      "tips": [
        "Mulailah dengan tingkat ringan jika artikel sudah ringkas.",
        "Gunakan tingkat kuat untuk draf awal yang berantakan, lalu kembalikan kalimat penting.",
        "Ini bukan cara untuk menyembunyikan bagaimana sebuah draf dibuat."
      ],
      "faqs": [
        {
          "question": "Apakah teks ringkasan lolos dari detektor AI?",
          "answer": "Tidak. Alat ini tidak mencobanya dan tidak mengklaim hasilnya akan terlihat seperti tulisan jenis penulis tertentu."
        },
        {
          "question": "Apakah maksud saya tetap terjaga?",
          "answer": "\"Perpendek artikel\" mempertahankan sebagian besar kata dan membuang sedikit pengisi dan pengulangan. \"Ringkas dengan AI\" meminta Gemini mempertahankan inti dan fakta penting. Baca draf yang lebih pendek sebelum mengandalkannya."
        },
        {
          "question": "Apakah teks saya dikirim ke server?",
          "answer": "\"Perpendek artikel\" berjalan di tab ini dan tidak mengunggah draf. \"Ringkas dengan AI\" mengirim draf ke API Gemini milik Google melalui ToolStarHub dan mengembalikan versi yang lebih pendek. ToolStarHub tidak menyimpan teks tersebut. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya."
        },
        {
          "question": "Bagaimana cara memperpendek artikel tanpa kehilangan makna?",
          "answer": "Buang dulu frasa bertele-tele, lalu poin yang berulang, kemudian kalimat utuh yang tidak menambah apa pun. Bandingkan hasilnya dengan aslinya sebelum digunakan."
        },
        {
          "question": "Tingkat kompresi mana yang sebaiknya dipilih?",
          "answer": "Ringan hanya mengganti frasa bertele-tele. Sedang juga membuang pengulangan. Kuat bisa melewati kalimat yang diawali dengan cara yang sama, jadi periksa dengan lebih teliti."
        }
      ]
    },
    "ui": {
      "Shorten article uses fixed rules in your browser. Compress with AI sends the article to Google's Gemini API through ToolStarHub and returns a shorter draft. The article is not stored. Check the result before you publish it.": "\"Perpendek artikel\" menerapkan aturan tetap di browser Anda. \"Ringkas dengan AI\" mengirim artikel ke API Gemini milik Google melalui ToolStarHub dan mengembalikan draf yang lebih pendek. Artikel tidak disimpan. Periksa hasilnya sebelum diterbitkan.",
      "Article": "Artikel",
      "Compression": "Kompresi",
      "Light compression": "Kompresi ringan",
      "Medium compression": "Kompresi sedang",
      "Strong compression": "Kompresi kuat",
      "Shorten article": "Perpendek artikel",
      "Compress with AI": "Ringkas dengan AI",
      "Copy shorter draft": "Salin draf pendek",
      "Shorter draft": "Draf pendek",
      "The shorter draft will appear here.": "Draf pendek akan muncul di sini.",
      "AI shorter draft": "Draf pendek AI",
      "Copy AI draft": "Salin draf AI",
      "{0} words in, {1} words out. Read the shorter draft before you use it.": "{0} kata sebelum, {1} kata sesudah. Baca draf pendek sebelum menggunakannya.",
      "Paste an article first.": "Tempel artikel terlebih dahulu.",
      "Paste a longer article. A few words is not enough to shorten.": "Tempel artikel yang lebih panjang. Beberapa kata saja tidak cukup untuk diperpendek.",
      "Nothing was left after compression. Try a lighter setting.": "Tidak ada yang tersisa setelah kompresi. Coba tingkat yang lebih ringan."
    },
    "note": "\"Perpendek artikel\" memakai daftar frasa berbahasa Inggris, jadi hampir tidak mengubah teks bahasa Indonesia. \"Ringkas dengan AI\" juga bisa dipakai untuk teks bahasa Indonesia."
  },
  "ai-text-humanizer": {
    "answer": "Humanizer teks AI mengganti frasa klise di browser Anda berdasarkan daftar tetap. \"Humanisasi dengan AI\" mengirim draf ke API Gemini milik Google melalui ToolStarHub. Alat ini tidak mencoba mengelabui detektor AI dan tidak mengklaim hasilnya akan terlihat seperti tulisan jenis penulis tertentu.",
    "content": {
      "about": "Humanizer teks AI mengganti daftar tetap frasa klise dengan susunan kata yang lebih sederhana. \"Tulis ulang teks\" melakukannya di tab ini. \"Humanisasi dengan AI\" mengirim draf ke API Gemini milik Google melalui ToolStarHub dan mengembalikan versi yang ditulis ulang. Teks tidak disimpan. Periksa hasilnya sebelum digunakan. Tidak satu pun hasil merupakan cara untuk menyembunyikan bagaimana sebuah draf dibuat.",
      "howTo": [
        "Tempel draf. Minimal 12 kata dan maksimal 4.000 karakter.",
        "Klik \"Tulis ulang teks\" untuk daftar frasa di browser, atau \"Humanisasi dengan AI\" agar Gemini menulis ulang.",
        "Periksa hasilnya. Setelah ada yang dihapus, kata berikutnya bisa tetap berhuruf kecil.",
        "Salin versi yang ditulis ulang jika masih menyampaikan maksud Anda.",
        "\"Hapus\" mengosongkan kotak dan hasil lokal."
      ],
      "features": [
        "Daftar tetap frasa klise yang diterapkan di browser Anda.",
        "Hasil terpisah untuk \"Humanisasi dengan AI\".",
        "Batas 4.000 karakter untuk kedua tombol.",
        "Tidak ada penghapusan kalimat maupun kalimat ganda."
      ],
      "examples": [
        {
          "title": "Pembuka klise",
          "body": "\"In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.\" menjadi \"here is the setup. you can use a short checklist.\""
        },
        {
          "title": "Kalimat berulang",
          "body": "\"The form is short. The form is short. Please sign it before noon today and bring a pen.\" tetap memuat kedua salinan. Putaran ini tidak menghapus kalimat yang berulang."
        }
      ],
      "explanation": "\"Tulis ulang teks\" menelusuri daftar tetap satu kali. Huruf kapital tidak dikembalikan setelah penghapusan, dan apostrof tipografis tidak cocok. \"Humanisasi dengan AI\" meminta Gemini mempertahankan fakta, nama, dan angka yang sama serta tidak memangkas draf menjadi ringkasan. Periksa kedua hasil sebelum digunakan.",
      "limitations": "\"Tulis ulang teks\" memerlukan minimal 12 kata, dan kedua tombol maksimal 4.000 karakter. Putaran lokal hanya mengganti frasa yang ada di daftar. Apostrof tipografis tidak cocok. Alat ini tidak mencoba mengelabui detektor AI dan tidak mengklaim hasilnya akan terlihat seperti tulisan jenis penulis tertentu.",
      "tips": [
        "Periksa hasilnya sebelum digunakan. Setelah frasa dihapus, kata berikutnya bisa tetap berhuruf kecil.",
        "Kalimat yang berulang tetap ada. Putaran ini tidak menghapusnya.",
        "Tidak satu pun hasil merupakan cara untuk menyembunyikan bagaimana sebuah draf dibuat."
      ],
      "faqs": [
        {
          "question": "Apakah humanizer teks AI gratis?",
          "answer": "Ya. Anda bisa menulis ulang draf di sini tanpa membayar atau membuat akun. \"Tulis ulang teks\" tetap di tab ini. \"Humanisasi dengan AI\" tetap mengirim draf ke API Gemini milik Google melalui ToolStarHub."
        },
        {
          "question": "Apakah ini bisa mengelabui detektor AI?",
          "answer": "Tidak. Alat ini tidak mencobanya dan tidak mengklaim hasilnya akan terlihat seperti tulisan jenis penulis tertentu."
        },
        {
          "question": "Apakah maksud saya tetap terjaga?",
          "answer": "\"Tulis ulang teks\" mempertahankan semua kata yang tidak ada di daftar frasa klise. \"Humanisasi dengan AI\" diminta mempertahankan fakta, nama, dan angka yang sama serta tidak meringkas draf. Periksa hasilnya sebelum digunakan."
        },
        {
          "question": "Apakah teks saya dikirim ke server?",
          "answer": "\"Tulis ulang teks\" berjalan di tab ini dan tidak mengunggah draf. \"Humanisasi dengan AI\" mengirim draf ke API Gemini milik Google melalui ToolStarHub dan mengembalikan versi yang ditulis ulang. ToolStarHub tidak menyimpan teks tersebut. Pada paket gratis, Google dapat menggunakannya untuk meningkatkan produknya."
        }
      ]
    },
    "ui": {
      "Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.": "\"Tulis ulang teks\" memakai daftar tetap frasa klise di browser Anda. \"Humanisasi dengan AI\" mengirim teks ke API Gemini milik Google melalui ToolStarHub dan mengembalikan versi yang ditulis ulang. Teks tidak disimpan. Periksa hasilnya sebelum digunakan. Tidak satu pun hasil merupakan cara untuk menyembunyikan bagaimana sebuah draf dibuat.",
      "Draft": "Draf",
      "Rewrite text": "Tulis ulang teks",
      "Humanize with AI": "Humanisasi dengan AI",
      "Copy rewritten draft": "Salin draf tulis ulang",
      "Rewritten draft": "Draf tulis ulang",
      "The rewritten draft will appear here.": "Draf tulis ulang akan muncul di sini.",
      "AI rewrite": "Tulis ulang AI",
      "Copy AI rewrite": "Salin tulis ulang AI",
      "Paste a draft first.": "Tempel draf terlebih dahulu.",
      "That text is too long for this rewrite. Shorten it and try again.": "Teks itu terlalu panjang untuk penulisan ulang ini. Persingkat, lalu coba lagi.",
      "Paste a longer draft. A few words is not enough to rewrite.": "Tempel draf yang lebih panjang. Beberapa kata saja tidak cukup untuk ditulis ulang.",
      "Nothing was left after the rewrite. Try different wording.": "Tidak ada yang tersisa setelah penulisan ulang. Coba susunan kata lain."
    },
    "note": "\"Tulis ulang teks\" memakai daftar frasa klise berbahasa Inggris, jadi hampir tidak mengubah teks bahasa Indonesia. \"Humanisasi dengan AI\" juga bisa dipakai untuk teks bahasa Indonesia."
  }
};

export default data;
