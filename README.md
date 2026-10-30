# Website WARSOED (Teman Makan, Teman Nyaman)

Website landing page interaktif untuk Warung Makan **WARSOED**. Website ini menampilkan katalog menu makanan, pencarian menu, informasi lokasi, dan kontak pemesanan.

> **Catatan Branch:**
> Karena pengerjaan dibagi per anggota, file proyek berada di branch masing-masing. Branch `main` ini hanya berisi `README.md`.

---

## Kelompok: HA? HAYUUUK

| Nama | GitHub | Branch | File | Tugas Utama |
| --- | --- | --- | --- | --- |
| **Raisya Shava Ramadhani** | [@raisyaramadhani-max](https://github.com/raisyaramadhani-max) | `StrukturHalamanDanHero` | `index.html` | Membuat struktur HTML & konten halaman |
| **Naura Salsabila** | [@NauraSalsabila29](https://github.com/NauraSalsabila29) | `DesaindanTampilanWebsite` | `style.css` | Styling tampilan visual & layout responsif |
| **Alya Difa Azzahra** | [@alydfazz](https://github.com/alydfazz) | `KatalogMenu` | `script.js` | Data menu, fitur pencarian, & filter kategori |
| **Anindita Asha Hameeda** | [@HameedaHere](https://github.com/HameedaHere) | `Contact` | `contact.js` | Navigasi menu mobile & update tahun footer |

---

## Tujuan Project

Website ini dibuat untuk mempermudah pelanggan WARSOED dalam:
1. Melihat daftar menu makanan lengkap beserta harga dan gambarnya.
2. Mencari menu favorit atau menyaring berdasarkan kategori (Ayam, Nasi, Telur).
3. Mengakses kontak pemesanan (WhatsApp, Instagram) dan lokasi Google Maps secara langsung.

---

## Fitur & Section Website

* **Header & Navbar:** Navigasi antar section dan menu hamburger untuk layar HP.
* **Hero Section:** Salam pembuka dan visual utama WARSOED.
* **Katalog Menu:** Fitur pencarian nama menu (search) dan filter kategori secara real-time.
* **Tentang WARSOED:** Informasi singkat mengenai tempat makan.
* **Kontak & Lokasi:** Tautan langsung ke WhatsApp, Instagram, dan Google Maps.
* **Footer:** Hak cipta dengan tahun dinamis dan tombol kembali ke atas.

---

## Teknologi yang Digunakan

* HTML
* CSS
* JavaScript

---

## Cara Menjalankan Website di Komputer Lokal

Karena file `index.html`, `style.css`, `script.js`, dan `contact.js` terpisah di branch masing-masing, gunakan salah satu cara berikut untuk menjalankannya di lokal:

### Cara 1: Gabungkan di Branch Lokal Sementara (Paling Praktis)

1. Clone repositori ini:
   ```bash
   git clone https://github.com/alydfazz/catalyst_warsoed.git
   cd catalyst_warsoed
   git fetch --all
   ```
2. Buat branch lokal baru:
   ```bash
   git checkout -b tes-lokal
   ```
3. Tarik isi dari semua branch anggota:
   ```bash
   git merge origin/StrukturHalamanDanHero origin/DesaindanTampilanWebsite origin/KatalogMenu origin/Contact
   ```
4. Buka file `index.html` di browser (atau klik *Go Live* jika pakai extension Live Server di VS Code).

---

### Cara 2: Ambil File dari Branch Lain

1. Pindah ke branch HTML:
   ```bash
   git checkout StrukturHalamanDanHero
   ```
2. Ambil file CSS dan JS dari branch lain ke folder lokal:
   ```bash
   git checkout origin/DesaindanTampilanWebsite -- style.css
   git checkout origin/KatalogMenu -- script.js
   git checkout origin/Contact -- contact.js
   ```
3. Buka file `index.html` di browser.

---

### Cara 3: Manual (Download File)

1. Buka halaman GitHub proyek ini.
2. Pindah ke branch masing-masing anggota dan salin/download filenya:
   * `index.html` (dari branch `StrukturHalamanDanHero`)
   * `style.css` (dari branch `DesaindanTampilanWebsite`)
   * `script.js` (dari branch `KatalogMenu`)
   * `contact.js` (dari branch `Contact`)
3. Taruh keempat file tersebut dalam **satu folder yang sama**.
4. Buka `index.html` di browser.

---

## Cara Pindah Branch di Git

Jika ingin mengecek pengerjaan di masing-masing branch:

```bash
git checkout StrukturHalamanDanHero   # Untuk melihat HTML
git checkout DesaindanTampilanWebsite     # Untuk melihat CSS
git checkout KatalogMenu   # Untuk melihat JS Katalog
git checkout Contact    # Untuk melihat JS Navigasi
```

---

## Pembagian Tugas & Kontribusi

* **Raisya (`StrukturHalamanDanHero`)**: Menulis seluruh markup `index.html`, menyusun struktur section dari header sampai footer, dan memasukkan konten teks.
* **Naura (`DesaindanTampilanWebsite`)**: Menulis styling `style.css`, menentukan variabel warna, membuat layout grid katalog & kontak, serta membuat tampilan responsif untuk layar HP.
* **Alya (`KatalogMenu`)**: Menulis logika di `script.js` untuk render data menu, fungsi format Rupiah, dan filter pencarian menu secara langsung.
* **Asha (`Contact`)**: Menulis fungsi di `contact.js` untuk event buka/tutup navbar mobile dan pengisian tahun otomatis di footer.