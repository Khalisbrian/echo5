# 🚀 Echo5 - Website Profil Kelompok

Repositori resmi untuk proyek akhir **IT Bootcamp Web Development**. Website ini dibangun secara kolaboratif oleh **Kelompok 5 (Echo5)** sebagai website portofolio tim yang menampilkan beranda bersama dan halaman profil masing-masing anggota.

Proyek ini dibuat murni menggunakan teknologi web native (*pure HTML, CSS, JavaScript*) tanpa framework/library eksternal dan bersifat statis (*pure static*).

---

## 👥 Anggota Kelompok (5 Orang)

| No | Nama Anggota | Peran / Fokus | Berkas Halaman |
|:--:|:---|:---|:---|
| 1 | **Artha Dharmayasa** | Fullstack / Developer | `page/anggota.html` |
| 2 | **Khalisbrian** | Project Lead / Git Lead | `page/khalis.html` |
| 3 | **Alvio** | Frontend Developer | `page/alvio.html` |
| 4 | **Adi** | UI/UX Designer & Frontend | `page/adi.html` |
| 5 | **Adhi** | Content & Asset Specialist | `page/adhi.html` |

---

## 📂 Struktur Repositori

Struktur folder disusun secara rapi dan modular untuk meminimalkan konflik Git (*merge conflict*):

```text
echo5/
├── .vscode/                 # Konfigurasi Live Server lokal
├── asset/                  # Aset gambar, foto profil, dan ikon
│   ├── Foto-Profil.jpg     # Foto profil Artha
│   ├── foto biru adi .png  # Foto profil Adi
│   ├── Foto jas.png        # Foto profil anggota
│   ├── fashion.jpeg
│   ├── flower.jpeg
│   └── logo-vibecoding.webp
├── css/                    # Lembar gaya visual (CSS Native)
│   ├── style.css           # Styling beranda utama
│   └── anggota.css         # Styling halaman profil anggota
├── js/                     # Logika interaktif (Vanilla JavaScript DOM)
│   ├── script.js           # Interaktivitas beranda utama
│   └── anggota.js          # Interaktivitas halaman profil
├── page/                   # Halaman mandiri tiap anggota (Satu Orang, Satu Berkas)
│   ├── anggota.html        # Halaman profil Artha
│   ├── khalis.html         # Halaman profil Khalis
│   ├── alvio.html          # Halaman profil Alvio
│   ├── adi.html            # Halaman profil Adi
│   └── adhi.html           # Halaman profil Adhi
├── .gitignore              # Daftar berkas yang diabaikan Git
├── index.html              # Halaman beranda utama kelompok
└── README.md               # Dokumentasi proyek
