PRD — Website Inti Speed Bengkel Mobil
1. Overview Proyek

    Nama Klien : Inti Speed Bengkel Mobil (Owner: Om Benny)

    Jenis Bisnis : Bengkel Spesialis Tune Up & Perawatan Mesin

    Tujuan Website : Landing page profil bisnis untuk meningkatkan konversi booking.

    Tech Stack : React.js (TypeScript), Shadcn UI, Tailwind CSS.

    Deadline : [TBD]

2. Struktur Folder & Halaman

Struktur folder komponen berbasis React:
Plaintext

src/
└── components/
    ├── Hero/           → Nama bisnis + CTA Booking
    ├── About/          → Profil Om Benny & Keunggulan Bengkel
    ├── Services/       → Daftar layanan (Tune Up, Carbon Clean, dll)
    ├── Gallery/        → Placeholder foto aktivitas bengkel
    ├── Testimonial/    → Ulasan dari Google Maps (minimal 3-5 ulasan)
    ├── BookingForm/    → Form simpel (Nama & Keperluan)
    ├── CTA/            → Floating WhatsApp Button
    └── Footer/         → Alamat lengkap + Embed Maps

3. Detail Konten Per Section
Hero/

    Nama Bisnis : Inti Speed Bengkel Mobil

    Tagline : [TBD] (Saran: "Solusi Performa Mesin Optimal & Irit Bahan Bakar")

    CTA Button : "Booking Service Sekarang" (Anchor ke Form)

    Visual : Gambar dummy otomotif berkualitas tinggi dengan overlay cerah.

About/

    Konten: Bengkel spesialis di Bandung yang dipimpin oleh Om Benny. Dikenal karena pelayanan yang ramah, edukatif (tidak asal ganti part), dan transparan. Fokus pada solusi tarikan mesin enteng dan efisiensi BBM.

Services/

    Tune Up++ & Gurah Mesin: Pembersihan ruang bakar (Carbon Clean) agar mesin kembali responsif.

    Service Rem: Perawatan sistem keamanan pengereman.

    Perbaikan Kaki-Kaki: Solusi bunyi dan kenyamanan berkendara.

    Ganti Oli & Scan Tool: Penggunaan oli berkualitas dan diagnosa komputer akurat.

Gallery/

    Status Foto : Menggunakan gambar dummy (placeholder).

    Layout : Grid 3 kolom (minimal 6 foto).

Testimonial/

    Sumber: Google Maps (4.8 Stars).

    Sampel Ulasan:

        "Setelah tune up disini mobil jadi enteng, irit & lebih bertenaga." – (Pelanggan)

        "Mekanik ramah dan gak pelit ilmu. Terimakasih owner dan mekanik." – (Pelanggan)

        "Tarikan mesin jadi jauh lebih kencang dan steer jadi sangat enteng." – (Pelanggan)

BookingForm/

    Input Field:

        Nama Lengkap (Text)

        Keperluan/Keluhan (Textarea)

    Submit: Mengarah ke integrasi state atau simulasi kirim data.

Footer/

    Alamat : Jl. Ciganitri Mukti No.55, Cipagalo, Kec. Bojongsoang, Bandung.

    WhatsApp: 087723451875

    Fitur : Google Maps Embed (Bojongsoang Area).

4. Fitur Teknis

    [x] Responsive Mobile-First: Wajib nyaman dibuka di HP saat pelanggan di jalan.

    [x] Floating WA: Tombol hijau di pojok kanan bawah.

    [x] Shadcn UI Components: Menggunakan Card, Button, Input, dan Form components.

    [x] Type Safety: Full TypeScript untuk props dan data ulasan.

5. Aset yang Dibutuhkan dari Klien

    [ ] Logo resmi (jika ada).

    [ ] Foto asli bengkel (untuk mengganti dummy nantinya).

    [ ] Detail paket harga promo (opsional).

6. Panduan Desain

    Warna Utama : Cerah & Profesional (Saran: Putih/Abu terang dengan aksen Biru Elektrik atau Merah Sporty).

    Tone Desain : Minimalis (Clean, banyak whitespace, font sans-serif modern seperti Inter atau Geist).

    Komponen UI : Border radius kecil (slightly rounded) untuk kesan modern.

7. Catatan Tambahan

    Website dibuat statik namun data testimonial bisa diletakkan di satu file constants/data.ts agar mudah dikelola di masa depan.