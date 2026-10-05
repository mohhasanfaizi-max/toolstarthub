import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "utm-builder": {
    "answer": "Pembuat UTM menambahkan parameter kampanye ke URL agar Anda bisa melacak sumber lalu lintas di alat analitik.",
    "content": {
      "about": "Tambahkan utm_source, utm_medium, dan utm_campaign ke tautan, serta term dan content opsional. Pemasar memakainya untuk menandai tautan kampanye sebelum URL dimasukkan ke iklan atau email. Kolom kosong tidak dimasukkan ke tautan, dan halaman ini tidak mencatat kunjungan atau memendekkan alamat.",
      "howTo": [
        "Masukkan URL situs, dengan atau tanpa https://.",
        "Isi sumber, media, dan kampanye. Term dan content opsional.",
        "Salin URL yang dihasilkan. Parameter kueri yang sudah ada di tautan asli tetap dipertahankan."
      ],
      "examples": [
        {
          "title": "Tautan kampanye sederhana",
          "body": "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale"
        },
        {
          "title": "URL yang sudah punya parameter",
          "body": "https://example.com/page?ref=nav mempertahankan ref=nav dan menambahkan kolom UTM di sebelahnya."
        }
      ],
      "explanation": "Parameter UTM memberi tahu alat analitik dari mana sebuah kunjungan berasal. utm_source adalah platform, utm_medium adalah saluran, dan utm_campaign adalah nama promosi. utm_term dan utm_content opsional. Nilai dikodekan untuk URL agar spasi dan karakter khusus tetap valid.",
      "limitations": "Sumber, media, atau kampanye yang kosong tidak dimasukkan, bukan ditulis sebagai parameter kosong. Halaman ini tidak memendekkan alamat dan tidak mencatat kunjungan. Teks yang bukan URL situs akan ditolak.",
      "faqs": [
        {
          "question": "Apakah Pembuat UTM gratis?",
          "answer": "Ya. Menambahkan utm_source, utm_medium, dan utm_campaign ke tautan gratis, dan tidak perlu akun."
        },
        {
          "question": "Apakah ini akan menimpa parameter kueri saya yang lain?",
          "answer": "Tidak. Hanya kolom UTM yang Anda isi yang ditambahkan atau diperbarui. Parameter lain tetap seperti semula."
        },
        {
          "question": "Apakah alat ini memanggil layanan pelacakan?",
          "answer": "Tidak. Alat ini hanya membuat URL di browser Anda. Pelacakan terjadi nanti, jika Anda memakai tautan itu dalam penyiapan analitik."
        },
        {
          "question": "Apa itu parameter UTM?",
          "answer": "Parameter UTM adalah tanda yang ditambahkan ke tautan, seperti utm_source, utm_medium, dan utm_campaign, yang memberi tahu alat analitik dari mana sebuah kunjungan berasal."
        },
        {
          "question": "Parameter UTM mana yang wajib?",
          "answer": "Sumber, media, dan kampanye adalah minimum yang umum. Term dan content opsional dan membantu membedakan kata kunci atau versi iklan."
        }
      ]
    },
    "ui": {
      "Website URL": "URL situs",
      "Existing query parameters are kept. UTM values are added or updated.": "Parameter kueri yang ada tetap dipertahankan. Nilai UTM ditambahkan atau diperbarui.",
      "Campaign source": "Sumber kampanye",
      "Campaign medium": "Media kampanye",
      "Campaign name": "Nama kampanye",
      "Campaign term (optional)": "Term kampanye (opsional)",
      "running shoes": "sepatu lari",
      "Campaign content (optional)": "Content kampanye (opsional)",
      "Copy URL": "Salin URL",
      "Enter a URL to generate a campaign link.": "Masukkan URL untuk membuat tautan kampanye.",
      "Campaign URL": "URL kampanye",
      "Enter a website URL.": "Masukkan URL situs.",
      "Enter a valid website URL.": "Masukkan URL situs yang valid."
    }
  },
  "slug-generator": {
    "answer": "Pembuat slug mengubah judul menjadi teks huruf kecil dengan tanda hubung yang aman dipakai di URL.",
    "content": {
      "about": "Ubah judul menjadi permalink huruf kecil dengan tanda hubung. Penulis memakainya saat memberi nama tulisan sebelum alamatnya dimasukkan ke CMS. Aksen pada huruf Latin dihapus, huruf seperti 你好 tetap ada, dan hasilnya tidak memeriksa apakah alamat itu belum dipakai.",
      "howTo": [
        "Ketik atau tempel judul.",
        "Slug diperbarui saat Anda mengetik.",
        "Salin slug atau kosongkan kotak."
      ],
      "examples": [
        {
          "title": "Judul blog",
          "body": "“How to Compress an Image Without Losing Quality” menjadi how-to-compress-an-image-without-losing-quality."
        },
        {
          "title": "Aksen dan aksara lain",
          "body": "Aksen pada huruf Latin dihapus (Café → cafe). Huruf seperti 你好 tetap ada sehingga slug tetap terbaca."
        }
      ],
      "explanation": "Pembuat ini memangkas teks, memisahkan tanda gabungan setelah normalisasi Unicode NFKD, mengubah huruf Latin menjadi huruf kecil, mengganti pemisah lain dengan tanda hubung, dan menggabungkan pengulangan. Huruf dan angka Unicode tetap dipertahankan, bukan menghapus setiap karakter non-Inggris. Hasilnya adalah permalink yang praktis, bukan ID yang dijamin unik.",
      "limitations": "Aksen pada huruf Latin dihapus, sedangkan huruf seperti 你好 tetap ada. Hasilnya berbentuk permalink, tetapi bukan bukti bahwa alamat itu belum dipakai. Beberapa pembuat situs menghapus huruf non-Latin; halaman ini tidak.",
      "faqs": [
        {
          "question": "Apakah Pembuat Slug gratis?",
          "answer": "Ya. Mengubah judul menjadi permalink dengan tanda hubung gratis, dan Anda tidak perlu akun."
        },
        {
          "question": "Apakah ini cocok untuk semua CMS?",
          "answer": "Sebagian besar situs menerima slug huruf kecil dengan tanda hubung. Beberapa menghapus huruf non-Latin; alat ini mempertahankannya jika berupa huruf atau angka."
        },
        {
          "question": "Apakah masukan saya dikirim ke server?",
          "answer": "Tidak. Judul ditulis ulang di tab ini. Judul tidak diunggah dan tidak disimpan di penyimpanan lokal."
        },
        {
          "question": "Apa itu slug URL?",
          "answer": "Slug adalah bagian alamat web yang mudah dibaca dan menamai sebuah halaman, seperti cara-membuat-roti di example.com/blog/cara-membuat-roti."
        },
        {
          "question": "Seperti apa slug yang baik untuk SEO?",
          "answer": "Buat pendek, huruf kecil, dan deskriptif, dengan kata dipisahkan tanda hubung. Hindari tanggal atau kata pengisi jika halaman mungkin diperbarui nanti."
        }
      ]
    },
    "ui": {
      "Title or text": "Judul atau teks",
      "Accents are stripped from Latin letters. Other letters, such as Chinese, are kept.": "Aksen dihapus dari huruf Latin. Huruf lain, seperti huruf Tionghoa, tetap dipertahankan.",
      "Example": "Contoh",
      "Copy slug": "Salin slug",
      "Generated slug": "Slug yang dihasilkan",
      "How to Compress an Image Without Losing Quality": "Cara mengompres gambar tanpa kehilangan kualitas"
    }
  },
  "qr-code-generator": {
    "answer": "Pembuat kode QR mengubah teks atau URL menjadi gambar QR yang bisa diunduh, dibuat di perangkat Anda.",
    "content": {
      "about": "Kodekan teks biasa atau URL sebagai kode QR PNG, hingga 1.200 karakter. Gunakan untuk tautan pendek yang akan dipindai orang. Format Wi-Fi, email, dan kontak ada di Pembuat Kode QR Pro, dan teks yang panjang menghasilkan pola padat yang tidak terbaca oleh sebagian kamera.",
      "howTo": [
        "Tempel teks atau URL lengkap, termasuk https:// jika berupa tautan web.",
        "Tekan Buat. Pratinjau dan deskripsi yang aksesibel akan muncul.",
        "Unduh PNG, lalu atur ulang jika Anda perlu kode lain."
      ],
      "examples": [
        {
          "title": "Situs web",
          "body": "https://example.com menjadi kode QR yang membuka alamat itu saat dipindai."
        },
        {
          "title": "Teks biasa",
          "body": "Catatan singkat atau pengingat Wi-Fi bisa dikodekan sebagai teks. Tetap di bawah 1.200 karakter agar pola tetap terbaca."
        }
      ],
      "explanation": "Kode QR adalah kode batang matriks. Alat ini membuat pola di browser Anda dengan pustaka sisi klien. Teks tidak dikirim ke API QR mana pun. Konten yang sangat panjang menghasilkan kode padat yang sulit dibaca banyak kamera, jadi panjangnya dibatasi.",
      "limitations": "Yang dikodekan adalah teks biasa atau URL, dan teksnya harus 1.200 karakter atau kurang. Format Wi-Fi, email, dan kontak ada di Pembuat Kode QR Pro. Teks yang panjang menghasilkan pola padat yang tidak terbaca oleh sebagian kamera.",
      "faqs": [
        {
          "question": "Apakah Pembuat Kode QR gratis?",
          "answer": "Ya. Membuat gambar QR dari teks atau URL di browser ini gratis, tanpa akun."
        },
        {
          "question": "Apakah teks diunggah?",
          "answer": "Tidak. Kode QR dibuat di browser Anda. Teks tidak dikirim ke server."
        },
        {
          "question": "Apakah semua pemindai bisa membaca PNG ini?",
          "answer": "Sebagian besar kamera bisa membaca PNG berkontras tinggi dari URL pendek. Cetakan yang sangat kecil, cahaya redup, atau teks yang sangat panjang bisa gagal."
        },
        {
          "question": "Apakah kode QR yang dibuat di sini kedaluwarsa?",
          "answer": "Tidak. Teks atau tautan disimpan langsung di dalam pola, tanpa layanan pengalihan di antaranya, jadi kode berfungsi selama tautannya sendiri berfungsi."
        },
        {
          "question": "Bagaimana cara membuat kode QR untuk situs web?",
          "answer": "Tempel alamat lengkap, termasuk https://, buat kodenya, unduh PNG, dan uji dengan kamera ponsel sebelum mencetaknya."
        }
      ]
    },
    "ui": {
      "The QR code is created in your browser. Keep content reasonably short.": "Kode QR dibuat di browser Anda. Usahakan isinya cukup pendek.",
      "QR code for {0}": "Kode QR untuk {0}",
      "QR code for:": "Kode QR untuk:",
      "The QR code is generated in your browser. The text is not sent to a server.": "Kode QR dibuat di browser Anda. Teks tidak dikirim ke server."
    }
  },
  "qr-code-scanner": {
    "answer": "Pemindai kode QR membaca gambar QR yang Anda pilih dan menampilkan teks hasil dekode di perangkat Anda.",
    "content": {
      "about": "Baca kode QR pertama dari kamera atau dari PNG atau JPG. Gunakan saat Anda ingin melihat teksnya sebelum memutuskan membuka tautan. Kamera tetap mati sampai Anda menekan Mulai kamera, dan jenis kode batang lain tidak didekode.",
      "howTo": [
        "Tekan Mulai kamera hanya jika Anda ingin memindai dengan kamera perangkat. Izin diminta saat itu, bukan saat halaman dimuat.",
        "Arahkan kode ke kamera sampai hasil muncul, atau tekan Hentikan kamera untuk melepas siaran.",
        "Jika kamera diblokir, unggah PNG atau JPG kode itu sebagai gantinya.",
        "Salin hasilnya. Jika berupa URL http(s), tombol Buka tautan ditawarkan. Halaman tidak berpindah dengan sendirinya."
      ],
      "examples": [
        {
          "title": "Memindai dengan kamera",
          "body": "Setelah kamera dimulai, bingkai didekode di tab. Siaran berhenti saat kode ditemukan atau saat Anda menekan Hentikan."
        },
        {
          "title": "Mengunggah gambar",
          "body": "Tangkapan layar kode QR tetap bisa didekode meskipun izin kamera ditolak."
        }
      ],
      "explanation": "Dekode memakai pembaca JavaScript lokal pada bingkai kamera atau gambar yang diunggah. Akses kamera baru dimulai setelah Anda mengeklik Mulai kamera. Trek dihentikan saat Hentikan ditekan, setelah pemindaian berhasil, dan saat Anda meninggalkan halaman. URL yang terdeteksi ditampilkan lebih dulu; membukanya adalah tindakan terpisah.",
      "limitations": "Yang ditampilkan adalah kode pertama yang ditemukan pembaca. Jenis kode batang lain tidak didekode. Tautan tetap di halaman sampai Anda menekan Buka tautan, dan kamera tetap mati sampai Anda menekan Mulai kamera.",
      "faqs": [
        {
          "question": "Apakah Pemindai Kode QR gratis?",
          "answer": "Ya. Membaca kode QR dari kamera atau dari gambar gratis, dan tidak perlu akun."
        },
        {
          "question": "Apakah bingkai kamera diunggah?",
          "answer": "Tidak. Bingkai setelah Mulai kamera, serta PNG atau JPG yang Anda pilih, didekode di tab ini. Keduanya tidak dikirim ke Tools Star Hub."
        },
        {
          "question": "Mengapa situs web tidak terbuka otomatis?",
          "answer": "Membuka URL hasil pindaian secara otomatis tidak aman. Periksa teksnya, lalu gunakan Buka tautan jika Anda memercayainya."
        },
        {
          "question": "Bagaimana jika gambar berisi lebih dari satu kode QR?",
          "answer": "Pembaca ini melaporkan kode pertama yang berhasil didekode. Pangkas gambar jika Anda memerlukan kode tertentu."
        }
      ]
    },
    "ui": {
      "Camera access is requested only when you choose to scan with your camera.": "Akses kamera hanya diminta saat Anda memilih memindai dengan kamera.",
      "Start camera": "Mulai kamera",
      "Stop camera": "Hentikan kamera",
      "Or upload a QR image": "Atau unggah gambar QR",
      "Drag and drop a QR image here, or choose a file.": "Seret dan lepas gambar QR di sini, atau pilih file.",
      "Image upload works even if the camera is blocked.": "Unggah gambar tetap berfungsi meskipun kamera diblokir.",
      "Scan result": "Hasil pindaian",
      "Open link": "Buka tautan",
      "Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.": "Bingkai setelah Mulai kamera, serta PNG atau JPG yang Anda pilih, didekode di tab ini. Keduanya tidak dikirim ke Tools Star Hub.",
      "This browser does not support camera access. Upload an image instead.": "Browser ini tidak mendukung akses kamera. Unggah gambar sebagai gantinya.",
      "Camera permission was denied. You can still upload an image.": "Izin kamera ditolak. Anda tetap bisa mengunggah gambar.",
      "No camera was found. Upload an image instead.": "Kamera tidak ditemukan. Unggah gambar sebagai gantinya.",
      "The camera could not be started. Upload an image instead.": "Kamera tidak dapat dimulai. Unggah gambar sebagai gantinya.",
      "This browser could not read that image.": "Browser ini tidak dapat membaca gambar itu.",
      "No QR code was found in that image.": "Tidak ada kode QR di gambar itu.",
      "That file could not be read as an image.": "File itu tidak dapat dibaca sebagai gambar."
    }
  },
  "password-generator": {
    "answer": "Pembuat kata sandi membuat kata sandi acak dari kumpulan karakter yang Anda pilih, memakai pembangkit acak kriptografis.",
    "content": {
      "about": "Buat kata sandi 8 sampai 64 karakter dengan jenis karakter pilihan Anda. Gunakan saat akun baru memerlukan rangkaian campuran yang belum pernah Anda pakai. Label kekuatan adalah perkiraan dari panjang dan ukuran kumpulan, dan tidak memeriksa apakah sebuah situs pernah dibobol.",
      "howTo": [
        "Pilih panjang 8 sampai 64 dan jenis karakter yang diinginkan.",
        "Jika mau, kecualikan karakter yang mirip seperti O, 0, I, l, dan 1.",
        "Tekan Buat, lalu salin kata sandinya. Tidak ada yang disimpan."
      ],
      "examples": [
        {
          "title": "16 karakter campuran",
          "body": "Kata sandi 16 karakter dengan huruf besar, huruf kecil, angka, dan simbol memiliki ruang karakter yang besar. Label kekuatan adalah perkiraan dari panjang dan ukuran kumpulan."
        },
        {
          "title": "Hanya huruf",
          "body": "Mematikan angka dan simbol memperkecil kumpulan. Pembuat ini tetap mewajibkan setidaknya satu jenis yang dipilih."
        }
      ],
      "explanation": "Setiap karakter dipilih dengan crypto.getRandomValues(), bukan Math.random(). Pembuat ini menyertakan setidaknya satu karakter dari setiap kumpulan yang dipilih, lalu mengisi sisanya dari kumpulan gabungan dengan pengambilan sampel tanpa bias. Label kekuatan (Lemah / Sedang / Kuat) diperkirakan dari panjang × log2(ukuran kumpulan). Ini bukan jaminan terhadap tebakan, pemakaian ulang, atau situs yang bocor.",
      "limitations": "Panjang harus bilangan bulat 8 sampai 64, dan setidaknya satu jenis karakter harus tetap aktif. Label kekuatan diperkirakan dari panjang dan ukuran kumpulan. Label ini tidak memeriksa pemakaian ulang, phishing, atau situs yang dibobol. Karakter yang mirip bisa dikecualikan; sisa daftar simbol tetap.",
      "faqs": [
        {
          "question": "Apakah Pembuat Kata Sandi gratis?",
          "answer": "Ya. Membuat kata sandi 8 sampai 64 karakter gratis, dan tidak perlu akun."
        },
        {
          "question": "Apakah kata sandi disimpan?",
          "answer": "Tidak. Kata sandi tidak disimpan, dicatat, dimasukkan ke URL, atau ditulis ke localStorage. Salin nilainya jika Anda membutuhkannya."
        },
        {
          "question": "Apakah Kuat berarti tidak bisa diretas?",
          "answer": "Tidak. Pengukur ini adalah perkiraan dari panjang dan ukuran kumpulan karakter. Pengukur ini tidak memperhitungkan pemakaian ulang, phishing, atau layanan yang disusupi."
        },
        {
          "question": "Seberapa panjang kata sandi seharusnya?",
          "answer": "Makin panjang makin kuat. Banyak panduan keamanan menyarankan minimal 12 sampai 16 karakter untuk akun penting, dengan kata sandi berbeda untuk setiap situs."
        },
        {
          "question": "Apakah aman memakai pembuat kata sandi online?",
          "answer": "Alat ini membuat kata sandi di browser Anda dengan crypto.getRandomValues dan tidak mengirim atau menyimpannya. Simpan di pengelola kata sandi, bukan di catatan."
        }
      ]
    },
    "ui": {
      "From {0} to {1} characters.": "Dari {0} sampai {1} karakter.",
      "Uppercase letters": "Huruf besar",
      "Lowercase letters": "Huruf kecil",
      "Exclude ambiguous characters (O, 0, I, l, 1)": "Kecualikan karakter yang mirip (O, 0, I, l, 1)",
      "Generated password": "Kata sandi yang dihasilkan",
      "Length: {0}": "Panjang: {0}",
      "Character set size: {0}": "Ukuran kumpulan karakter: {0}",
      "Estimated entropy: {0} bits ({1})": "Perkiraan entropi: {0} bit ({1})",
      "This meter is an estimate from length and character set size. It is not a guarantee of security.": "Pengukur ini adalah perkiraan dari panjang dan ukuran kumpulan karakter. Ini bukan jaminan keamanan.",
      "Passwords are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server.": "Kata sandi dibuat dengan crypto.getRandomValues di browser Anda. Kata sandi tidak disimpan, dicatat, atau dikirim ke server.",
      "Enter a password length.": "Masukkan panjang kata sandi.",
      "Length must be a whole number.": "Panjang harus bilangan bulat.",
      "Choose a length from {0} to {1}.": "Pilih panjang dari {0} sampai {1}.",
      "Select at least one character type.": "Pilih setidaknya satu jenis karakter.",
      "Length must be at least the number of selected character types.": "Panjang harus setidaknya sama dengan jumlah jenis karakter yang dipilih."
    }
  },
  "qr-code-generator-pro": {
    "answer": "Pembuat Kode QR Pro membuat kode QR berwarna untuk URL, Wi-Fi, email, telepon, SMS, atau kontak.",
    "content": {
      "about": "Buat kode QR untuk teks biasa, Wi-Fi, email, telepon, SMS, atau kontak vCard, dengan pengaturan warna dan koreksi kesalahan. Gunakan saat ponsel perlu bergabung ke jaringan atau menyimpan kontak dari hasil pindaian. Nama jaringan yang kosong akan ditolak, dan teks yang dikodekan tetap harus dalam batas 1.200 karakter.",
      "howTo": [
        "Pilih jenis: teks/URL, Wi-Fi, email, telepon, SMS, atau kontak.",
        "Isi kolom untuk jenis itu. Nilai yang tidak valid ditolak sebelum kode digambar.",
        "Jika mau, ubah warna, ukuran, zona tenang, dan koreksi kesalahan, lalu buat dan unduh PNG."
      ],
      "examples": [
        {
          "title": "Wi-Fi",
          "body": "Jaringan WPA bernama Cafe dikodekan sebagai WIFI:T:WPA;S:Cafe;P:Password;;"
        },
        {
          "title": "Telepon",
          "body": "Nomor seperti +1 202 555 0100 menjadi isi tel: tanpa spasi."
        }
      ],
      "explanation": "Jenis terstruktur diubah ke format teks QR yang umum (WIFI, mailto, tel, SMSTO, vCard 3.0). Pembuatannya memakai pustaka QR lokal yang sama dengan pembuat dasar. Isi tidak disimpan, dicatat, atau dimasukkan ke URL halaman.",
      "limitations": "Jenisnya adalah teks biasa, Wi-Fi, email, telepon, SMS, dan kontak vCard 3.0. Nama jaringan yang kosong, email yang gagal pemeriksaan sederhana, atau nomor telepon yang berisi selain angka dan + ( ) opsional ditolak sebelum kode digambar. Teks yang dikodekan tetap harus dalam batas 1.200 karakter.",
      "faqs": [
        {
          "question": "Apakah Pembuat Kode QR Pro gratis?",
          "answer": "Ya. Membuat kode QR Wi-Fi, email, telepon, SMS, kontak, atau teks gratis, dan tidak perlu akun."
        },
        {
          "question": "Apakah ini berbeda dari pembuat QR dasar?",
          "answer": "Ya. Alat dasar mengodekan teks biasa atau URL. Versi ini menambahkan jenis terstruktur, warna, dan pengaturan koreksi kesalahan. Alat dasar tidak berubah."
        },
        {
          "question": "Apakah kata sandi Wi-Fi disimpan?",
          "answer": "Tidak. Kata sandi tetap di halaman ini sampai Anda mengatur ulang atau keluar. Kata sandi tidak ditulis ke localStorage atau dikirim ke server."
        },
        {
          "question": "Bagaimana cara membuat kode QR untuk Wi-Fi?",
          "answer": "Pilih Wi-Fi, masukkan nama jaringan, kata sandi, dan jenis keamanan, lalu unduh kodenya. Ponsel yang memindainya bisa tersambung tanpa mengetik kata sandi."
        },
        {
          "question": "Bisakah saya mengubah warna kode QR?",
          "answer": "Bisa, tetapi pertahankan kontras yang kuat, dengan pola gelap di latar terang, agar kamera tetap bisa membacanya. Uji kodenya sebelum dicetak."
        }
      ]
    },
    "ui": {
      "QR type": "Jenis QR",
      "Network name (SSID)": "Nama jaringan (SSID)",
      "Security": "Keamanan",
      "Hidden network": "Jaringan tersembunyi",
      "Email": "Email",
      "Subject (optional)": "Subjek (opsional)",
      "Body (optional)": "Isi (opsional)",
      "Phone number": "Nomor telepon",
      "Message (optional)": "Pesan (opsional)",
      "First name": "Nama depan",
      "Last name": "Nama belakang",
      "Phone (optional)": "Telepon (opsional)",
      "Email (optional)": "Email (opsional)",
      "Foreground": "Latar depan",
      "Background": "Latar belakang",
      "Size": "Ukuran",
      "Quiet zone": "Zona tenang",
      "Error correction": "Koreksi kesalahan",
      "Generated QR code": "Kode QR yang dihasilkan",
      "The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.": "Kode QR dibuat di browser Anda. Kata sandi Wi-Fi dan kolom lain tidak disimpan atau dikirim ke server.",
      "Foreground and background colors need to be different.": "Warna latar depan dan latar belakang harus berbeda.",
      "Text / URL": "Teks / URL",
      "Wi-Fi": "Wi-Fi",
      "Phone": "Telepon",
      "Contact": "Kontak",
      "WPA/WPA2": "WPA/WPA2",
      "No password": "Tanpa kata sandi",
      "Enter a hex color such as #336699.": "Masukkan warna hex seperti #336699.",
      "Use 3-digit, 6-digit or 8-digit hex, with or without #.": "Gunakan hex 3, 6, atau 8 digit, dengan atau tanpa #.",
      "Enter a network name (SSID).": "Masukkan nama jaringan (SSID).",
      "Enter the Wi-Fi password, or choose no password.": "Masukkan kata sandi Wi-Fi, atau pilih Tanpa kata sandi.",
      "Enter a valid email address.": "Masukkan alamat email yang valid.",
      "Enter a phone number, with digits and optional + ( ).": "Masukkan nomor telepon berisi angka dan + ( ) opsional.",
      "Enter a first or last name for the contact.": "Masukkan nama depan atau nama belakang untuk kontak."
    }
  },
  "url-parser": {
    "answer": "Pengurai URL memecah satu URL absolut menjadi protokol, nama host, port, jalur, fragmen, dan setiap parameter kueri. URL tetap di browser Anda.",
    "content": {
      "about": "Tempel satu URL absolut dan lihat protokol, nama host, port, jalur, fragmen, dan parameter kuerinya.",
      "howTo": [
        "Tempel URL lengkap yang diawali http atau https.",
        "Tekan Uraikan."
      ],
      "features": [
        "Setiap kunci kueri di barisnya sendiri.",
        "Nilai kueri yang kosong tetap dipertahankan.",
        "Fragmen ditampilkan terpisah dari jalur."
      ],
      "examples": [
        {
          "title": "URL dengan port dan dua kunci yang sama",
          "body": "https://example.com:8080/docs?topic=a&topic= mempertahankan port 8080 dan dua baris topic, yang kedua dengan nilai kosong."
        }
      ],
      "explanation": "Halaman ini memakai pengurai URL bawaan browser. Kunci kueri ganda tetap menjadi entri terpisah. Protokol yang tidak ada atau jalur relatif akan ditolak. Nama host adalah nilai yang dikembalikan pengurai URL, termasuk nama internasional dalam bentuk terkodekan.",
      "tips": [
        "Sertakan https:// atau http://.",
        "Tanda pagar setelah kueri adalah fragmen, bukan parameter lain."
      ],
      "limitations": "Hanya URL absolut http dan https yang diuraikan. URL tidak dibuka atau dikirim ke mana pun.",
      "faqs": [
        {
          "question": "Bagaimana URL diuraikan?",
          "answer": "Pengurai URL browser memisahkan protokol, nama host, port, jalur, fragmen, dan setiap parameter kueri."
        },
        {
          "question": "Apa yang terjadi pada kunci kueri ganda?",
          "answer": "Masing-masing dicantumkan. Kunci itu tidak digabung menjadi satu nilai."
        },
        {
          "question": "Bagaimana dengan nilai kueri yang kosong?",
          "answer": "Kunci tanpa isi setelah tanda sama dengan tetap dipertahankan dan ditampilkan sebagai kosong."
        },
        {
          "question": "Mengapa URL relatif ditolak?",
          "answer": "Jalur relatif tidak punya protokol atau host, jadi bukan URL absolut."
        },
        {
          "question": "Apakah URL dikirim ke server?",
          "answer": "Tidak. Penguraian terjadi di browser Anda."
        }
      ]
    },
    "ui": {
      "The URL is parsed in your browser. It is not sent to another service.": "URL diuraikan di browser Anda. URL tidak dikirim ke layanan lain.",
      "Absolute URL": "URL absolut",
      "Parse": "Uraikan",
      "Query parameters": "Parameter kueri",
      "No query parameters.": "Tidak ada parameter kueri.",
      "(empty)": "(kosong)",
      "Protocol": "Protokol",
      "Hostname": "Nama host",
      "Port": "Port",
      "Path": "Jalur",
      "Fragment": "Fragmen",
      "Enter an absolute URL.": "Masukkan URL absolut.",
      "Enter a URL of 100000 characters or fewer.": "Masukkan URL dengan 100000 karakter atau kurang.",
      "Enter an absolute URL that includes a protocol, such as https://.": "Masukkan URL absolut yang menyertakan protokol, seperti https://.",
      "That text is not a valid absolute URL.": "Teks itu bukan URL absolut yang valid.",
      "Enter an http or https URL.": "Masukkan URL http atau https."
    }
  },
  "robots-txt-generator": {
    "answer": "Pembuat robots.txt menulis baris User-agent, Allow, dan Disallow dari aturan yang Anda ketik. Alat ini bisa menambahkan URL sitemap. Alat ini tidak memublikasikan atau menguji situs yang aktif.",
    "content": {
      "about": "Tulis teks robots.txt dari satu atau beberapa grup user-agent dan URL sitemap opsional.",
      "howTo": [
        "Masukkan user-agent.",
        "Tambahkan jalur Allow dan Disallow, satu per baris.",
        "Tambahkan URL sitemap jika Anda mau.",
        "Tekan Buat."
      ],
      "features": [
        "Beberapa grup user-agent.",
        "Beberapa baris Allow dan Disallow.",
        "URL sitemap absolut opsional."
      ],
      "examples": [
        {
          "title": "Folder pribadi",
          "body": "User-agent * dengan Disallow: /admin memberi tahu crawler untuk tidak mengambil jalur di bawah /admin. File ini hanya berupa teks."
        }
      ],
      "explanation": "Setiap grup diawali User-agent, lalu satu baris Allow untuk setiap jalur dan satu baris Disallow untuk setiap jalur. Baris jalur kosong dilewati. Sitemap hanya ditambahkan jika berupa URL absolut http atau https. Halaman ini tidak mengunggah file atau menguji situs yang aktif.",
      "tips": [
        "Gunakan * untuk semua crawler.",
        "Tulis setiap jalur di barisnya sendiri."
      ],
      "limitations": "Hasilnya berupa teks yang bisa disalin. Alat ini tidak memublikasikan aturan atau memeriksa apa yang diizinkan situs yang aktif.",
      "faqs": [
        {
          "question": "Bagaimana cara menulis file robots.txt?",
          "answer": "Mulai dengan baris User-agent, lalu tambahkan baris Allow dan Disallow. Tambahkan baris Sitemap jika Anda punya URL sitemap absolut."
        },
        {
          "question": "Bisakah saya memakai lebih dari satu user-agent?",
          "answer": "Bisa. Setiap grup punya user-agent dan aturannya sendiri."
        },
        {
          "question": "Apa yang terjadi pada jalur kosong?",
          "answer": "Baris kosong dilewati, jadi tidak membuat aturan Allow atau Disallow yang kosong."
        },
        {
          "question": "Apakah ini menguji situs saya yang aktif?",
          "answer": "Tidak. Alat ini hanya membuat teks. Alat ini tidak memublikasikan file atau mengakses situs Anda."
        },
        {
          "question": "URL sitemap seperti apa yang diterima?",
          "answer": "URL absolut http atau https. Jalur tanpa protokol akan ditolak."
        },
        {
          "question": "Apakah data ini dikirim ke server?",
          "answer": "Tidak. Baris user-agent dan jalur disusun di tab ini. Semuanya tidak diunggah, dan halaman ini tidak mengakses situs Anda."
        }
      ]
    },
    "ui": {
      "This writes robots.txt text from the rules you type. It does not test or publish a live site.": "Alat ini menulis teks robots.txt dari aturan yang Anda ketik. Alat ini tidak menguji atau memublikasikan situs yang aktif.",
      "Group {0} user-agent": "User-agent grup {0}",
      "Allow paths, one per line": "Jalur Allow, satu per baris",
      "Disallow paths, one per line": "Jalur Disallow, satu per baris",
      "Remove group": "Hapus grup",
      "Add group": "Tambah grup",
      "Sitemap URL, optional": "URL sitemap, opsional",
      "Add at least one user-agent group.": "Tambahkan setidaknya satu grup user-agent.",
      "Group {0} needs a user-agent.": "Grup {0} memerlukan user-agent.",
      "Enter a sitemap as an absolute http or https URL.": "Masukkan sitemap sebagai URL absolut http atau https."
    }
  },
  "password-strength-checker": {
    "answer": "Pemeriksa kekuatan kata sandi memperkirakan bit dari panjang dan jenis karakter yang benar-benar ada. Kata sandi tidak diunggah dan tidak dibandingkan dengan daftar kebocoran.",
    "content": {
      "about": "Ketik kata sandi dan lihat penilaian Lemah, Sedang, atau Kuat. Perkiraan memakai panjang dan jenis karakter yang muncul di dalamnya. Alat ini tidak mencari data bocor dan tidak tahu apakah sebuah situs akan menerima kata sandi itu.",
      "howTo": [
        "Ketik kata sandi. Kotak kosong akan ditolak.",
        "Tekan Periksa.",
        "Baca penilaian, panjang, perkiraan bit, dan jenis karakter yang ditemukan."
      ],
      "features": [
        "Huruf besar, huruf kecil, angka, dan kumpulan simbol hanya dihitung jika muncul.",
        "Karakter lain, termasuk spasi atau backtick, menambah satu ke kumpulan untuk setiap karakter yang berbeda.",
        "Lemah berarti di bawah 50 bit, Sedang di bawah 80, dan Kuat 80 atau lebih."
      ],
      "examples": [
        {
          "title": "Kata huruf kecil",
          "body": "password terdiri dari 8 huruf kecil. Kumpulannya 26, perkiraan dibulatkan menjadi 38 bit, dan penilaiannya Lemah."
        },
        {
          "title": "Huruf, angka, dan simbol",
          "body": "Abcdefghijklm12! terdiri dari 16 karakter dengan huruf besar, huruf kecil, angka, dan simbol. Kumpulannya 85, perkiraan dibulatkan menjadi 103 bit, dan penilaiannya Kuat."
        }
      ],
      "explanation": "Bit adalah panjang dikali logaritma basis 2 dari kumpulan. Kumpulannya 26 untuk huruf besar jika ada huruf A sampai Z, 26 untuk huruf kecil, 10 untuk angka, dan 23 untuk simbol dari !@#$%^&*()-_=+[]{};:,.?. Karakter di luar kumpulan itu tidak dihitung sebagai seluruh kumpulan simbol, melainkan menambah satu. Ini bukan pembuat kata sandi, yang menilai kata sandi berdasarkan jenis yang dipilih sebelum dibuat.",
      "tips": [
        "Kata sandi yang lebih panjang dari beberapa jenis karakter mendapat nilai lebih tinggi daripada kata pendek.",
        "Gunakan Pembuat Kata Sandi jika Anda ingin kata sandi baru, bukan penilaian."
      ],
      "limitations": "Hingga 256 karakter. Halaman ini tidak mencari data bocor dan tidak tahu apakah sebuah situs akan menerima kata sandi itu. Huruf beraksen dihitung sebagai karakter lain, bukan A sampai Z.",
      "faqs": [
        {
          "question": "Apakah Pemeriksa Kekuatan Kata Sandi gratis?",
          "answer": "Ya. Anda bisa menilai kata sandi di sini tanpa membayar atau membuat akun."
        },
        {
          "question": "Apakah kata sandi dibandingkan dengan kata sandi yang bocor?",
          "answer": "Tidak. Penilaian hanya berdasarkan panjang dan jenis karakter dari yang Anda ketik."
        },
        {
          "question": "Mengapa kata sandi yang hanya angka dinilai Lemah?",
          "answer": "Delapan angka memakai kumpulan 10. Itu sekitar 27 bit, di bawah 50, jadi penilaiannya Lemah."
        },
        {
          "question": "Apakah kata sandi dikirim ke server?",
          "answer": "Tidak. Pemeriksaan berjalan di tab browser ini. Tools Star Hub tidak mengirim kata sandi ke server atau menyimpannya di penyimpanan lokal."
        }
      ]
    },
    "ui": {
      "{0} characters, {1}, {2} bits": "{0} karakter, {1}, {2} bit",
      "The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.": "Penilaian memakai jenis karakter dalam kata sandi yang Anda ketik. Kata sandi tetap di tab ini, tidak diunggah, dan tidak dibandingkan dengan daftar kebocoran.",
      "Show password": "Tampilkan kata sandi",
      "Check": "Periksa",
      "Copy rating": "Salin penilaian",
      "Rating": "Penilaian",
      "Estimated bits": "Perkiraan bit",
      "Enter a password.": "Masukkan kata sandi.",
      "Enter a password of {0} characters or fewer.": "Masukkan kata sandi dengan {0} karakter atau kurang.",
      "Uppercase": "Huruf besar",
      "Lowercase": "Huruf kecil",
      "Other": "Lainnya"
    }
  },
  "meta-tag-generator": {
    "answer": "Pembuat meta tag menulis tag HTML untuk judul, deskripsi, robots, kanonis, Open Graph, dan Twitter. Alat ini tidak mengambil halaman apa pun.",
    "content": {
      "about": "Isi judul dan tag opsional yang Anda inginkan. Halaman ini menulis HTML yang bisa Anda tempel di bagian head sebuah halaman. Alat ini tidak mengambil URL yang aktif atau memeriksa bagaimana sebuah situs akan membagikan tautan.",
      "howTo": [
        "Masukkan judul. Judul kosong akan ditolak.",
        "Tambahkan deskripsi, URL kanonis, pilihan robots, dan kolom Open Graph atau Twitter yang Anda inginkan.",
        "Tekan Buat, lalu salin HTML-nya."
      ],
      "features": [
        "Tag charset, judul, dan tag robots di setiap hasil.",
        "Deskripsi, tautan kanonis, tag Open Graph, dan tag Twitter opsional.",
        "Tanda kutip dan ampersand dalam teks di-escape."
      ],
      "examples": [
        {
          "title": "Judul dan deskripsi",
          "body": "Judul Sample page dan deskripsi A short description of the page., dengan index dan follow, menghasilkan tag charset, judul, deskripsi, dan tag robots index, follow."
        },
        {
          "title": "Ampersand di judul",
          "body": "Judul A & B ditulis sebagai A &amp; B di dalam tag title."
        }
      ],
      "explanation": "HTML disusun dari kolom yang Anda isi. Kolom opsional yang kosong dihilangkan. URL kanonis, gambar Open Graph, URL Open Graph, dan gambar Twitter harus berupa URL absolut http atau https. Halaman ini tidak mengakses URL tersebut.",
      "tips": [
        "Gunakan kolom Open Graph di sini jika Anda ingin tag itu ada di HTML Anda sendiri. Pratinjau berbagi secara langsung adalah pemeriksaan yang berbeda."
      ],
      "limitations": "Judul bisa sampai 200 karakter dan deskripsi sampai 500. Jenis Open Graph adalah website, article, atau tidak ada. Kartu Twitter adalah summary, summary_large_image, atau tidak ada. Judul Twitter tanpa kartu akan ditolak.",
      "faqs": [
        {
          "question": "Apakah Pembuat Meta Tag gratis?",
          "answer": "Ya. Anda bisa menulis tag di sini tanpa membayar atau membuat akun."
        },
        {
          "question": "Apakah ini memeriksa tampilan tautan di media sosial?",
          "answer": "Tidak. Alat ini hanya menulis tag. Alat ini tidak membuka URL."
        },
        {
          "question": "Nilai robots apa yang ditulis?",
          "answer": "Pilihan index dan pilihan follow, seperti index, follow atau noindex, nofollow."
        },
        {
          "question": "Apakah teks dikirim ke server?",
          "answer": "Tidak. HTML dibuat di tab browser ini. Tools Star Hub tidak mengirim kolom tersebut ke server atau menyimpannya di penyimpanan lokal."
        }
      ]
    },
    "ui": {
      "Sample page": "Halaman contoh",
      "A short description of the page.": "Deskripsi singkat halaman.",
      "This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.": "Alat ini menulis HTML untuk bagian head sebuah halaman. Alat ini tidak mengambil URL yang aktif atau memeriksa bagaimana situs akan membagikannya.",
      "Title": "Judul",
      "Description": "Deskripsi",
      "Canonical URL, optional": "URL kanonis, opsional",
      "Robots index": "Robots indeks",
      "Robots follow": "Robots ikuti",
      "Open Graph title, optional": "Judul Open Graph, opsional",
      "Open Graph description, optional": "Deskripsi Open Graph, opsional",
      "Open Graph image URL, optional": "URL gambar Open Graph, opsional",
      "Open Graph URL, optional": "URL Open Graph, opsional",
      "Open Graph type": "Jenis Open Graph",
      "Twitter title, optional": "Judul Twitter, opsional",
      "Copy HTML": "Salin HTML",
      "Head tags": "Tag head",
      "None": "Tidak ada",
      "Enter a {0} of {1} characters or fewer.": "{0}: maksimal {1} karakter.",
      "Enter {0} as an absolute http or https URL.": "{0}: masukkan URL absolut http atau https.",
      "Enter a title.": "Masukkan judul.",
      "the canonical URL": "URL kanonis",
      "Open Graph title": "Judul Open Graph",
      "Open Graph description": "Deskripsi Open Graph",
      "the Open Graph image URL": "URL gambar Open Graph",
      "the Open Graph URL": "URL Open Graph",
      "Choose website, article, or no Open Graph type.": "Pilih website, article, atau tanpa jenis Open Graph.",
      "Choose a Twitter card of summary or summary_large_image.": "Pilih kartu Twitter summary atau summary_large_image.",
      "the Twitter image URL": "URL gambar Twitter",
      "Choose a Twitter card before adding Twitter text or an image.": "Pilih kartu Twitter sebelum menambahkan teks atau gambar Twitter.",
      "title": "Judul",
      "description": "Deskripsi"
    }
  },
  "open-graph-preview": {
    "answer": "Pratinjau Open Graph mengirim URL halaman ke situs ini, membaca judul publik dan tag berbagi, dan tidak menyimpan halaman. Alamat pribadi dan non-http ditolak.",
    "content": {
      "about": "Masukkan URL publik http atau https. Periksa pratinjau mengirim URL itu ke situs ini. Situs ini mengambil halaman dan menampilkan judul, deskripsi, gambar, dan kartu Twitter yang ditemukan. Halaman tidak disimpan di sini. Alamat pribadi atau lokal ditolak sebelum halaman dibaca.",
      "howTo": [
        "Masukkan URL absolut http atau https.",
        "Tekan Periksa pratinjau.",
        "Baca kartunya. Alamat yang ditolak, waktu habis, atau URL non-http menampilkan galat singkat tanpa isi halaman."
      ],
      "features": [
        "Kolom judul, deskripsi, alamat gambar, dan kartu Twitter dari halaman publik.",
        "Alamat setelah pengalihan, jika pengalihan tetap di URL publik http atau https.",
        "Galat singkat jika alamat bersifat pribadi, permintaan habis waktu, atau protokolnya bukan http atau https."
      ],
      "examples": [
        {
          "title": "Halaman publik",
          "body": "https://example.com/ mengembalikan judul Example Domain. Halaman itu tidak punya deskripsi, gambar, atau kartu Twitter, jadi kolom tersebut menampilkan Tidak ditemukan."
        },
        {
          "title": "Alamat lokal",
          "body": "http://127.0.0.1/ dan bentuk desimal http://2130706433/ sama-sama menampilkan Alamat itu tidak dapat diambil."
        }
      ],
      "explanation": "Browser hanya mengirim URL ke situs ini. Situs ini me-resolve host, menolak alamat pribadi, loopback, link-local, atau yang dicadangkan, dan memeriksa lagi setelah setiap pengalihan. Situs ini membaca paling banyak 512 KiB halaman yang sudah didekompresi, lalu mengembalikan tag. Halaman mentah tidak dikembalikan dan tidak disimpan.",
      "tips": [
        "Gunakan Pembuat Meta Tag jika Anda ingin menulis tag sendiri. Halaman ini membaca tag yang sudah ada di URL publik."
      ],
      "limitations": "Hanya http dan https. URL file, URL dengan nama pengguna, dan alamat pribadi ditolak. Permintaan berhenti setelah 8 detik. Gambar berbagi bisa tercantum meskipun host gambar memblokir gambar pratinjau.",
      "faqs": [
        {
          "question": "Apakah Pratinjau Open Graph gratis?",
          "answer": "Ya. Anda bisa memeriksa tag berbagi di halaman publik tanpa membayar atau membuat akun. URL tetap dikirim ke situs ini agar tag bisa dibaca."
        },
        {
          "question": "Apakah URL dikirim keluar dari perangkat ini?",
          "answer": "Ya. Periksa pratinjau mengirim URL ke situs ini, yang mengambil halaman publik itu dan membaca tagnya. Halaman tidak disimpan di sini. Alamat pribadi atau non-http ditolak."
        },
        {
          "question": "Mengapa URL lokal ditolak?",
          "answer": "Alamat seperti 127.0.0.1, jaringan pribadi, dan bentuk desimal alamat loopback ditolak sebelum halaman dibaca."
        },
        {
          "question": "Seperti apa tampilan waktu habis?",
          "answer": "Kartu tidak ditampilkan. Halaman memberi tahu bahwa permintaan pratinjau sudah habis waktu."
        }
      ]
    },
    "ui": {
      "Not found": "Tidak ditemukan",
      "Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.": "Periksa pratinjau mengirim URL ke situs ini. Situs ini membaca judul dan tag berbagi halaman publik itu dan tidak menyimpan halamannya. Alamat pribadi atau URL non-http ditolak.",
      "Page URL": "URL halaman",
      "Checking the page…": "Memeriksa halaman…",
      "Image": "Gambar",
      "The image address was found, but it did not load.": "Alamat gambar ditemukan, tetapi gambar tidak dimuat.",
      "Twitter image": "Gambar Twitter",
      "That page could not be previewed.": "Pratinjau halaman itu tidak dapat dibuat.",
      "Enter an http or https page URL.": "Masukkan URL halaman http atau https.",
      "Checking…": "Memeriksa…",
      "Check preview": "Periksa pratinjau",
      "That address cannot be fetched.": "Alamat itu tidak dapat diambil.",
      "The preview request timed out.": "Permintaan pratinjau habis waktu.",
      "That page redirected too many times.": "Halaman itu dialihkan terlalu banyak kali.",
      "That page is not HTML.": "Halaman itu bukan HTML.",
      "Too many preview requests. Wait a minute and try again.": "Terlalu banyak permintaan pratinjau. Tunggu satu menit lalu coba lagi.",
      "Send a JSON request with a url.": "Kirim permintaan JSON berisi URL."
    }
  }
};

export default data;
