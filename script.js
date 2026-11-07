/* ============================================
   KEDAI TERAS ROEMAH
   DATA MENU
============================================ */

const kategoriMenu = [
    {
        nama: "Per Makanan Duniawi",
        produk: [
            { nama: "Intel Goreng", harga: 12000, gambar: "images/menu-makanan.jpg" },
            { nama: "Intel Rebus", harga: 12000, gambar: "images/menu-makanan.jpg" },
            { nama: "Nasi Ayam Geprek Sambal Bawang", harga: 15000, gambar: "images/menu-makanan.jpg" }
        ]
    },
    {
        nama: "Per Cemilan Duniawi",
        produk: [
            { nama: "Otak Otak Goreng", harga: 10000, gambar: "images/menu-cemilan.jpg" },
            { nama: "Roti Bakar Coklat Keju", harga: 10000, gambar: "images/menu-cemilan.jpg" },
            { nama: "Omlete", harga: 12000, gambar: "images/menu-cemilan.jpg" }
        ]
    },
    {
        nama: "Per Minuman Duniawi",
        produk: [
            { nama: "Es Susu Cocopandan", harga: 8000, gambar: "images/menu-minuman.jpg" },
            { nama: "Es Susu Yakult", harga: 8000, gambar: "images/menu-minuman.jpg" },
            { nama: "Es Yakult Frambozen", harga: 8000, gambar: "images/menu-minuman.jpg" }
        ]
    },
    {
        nama: "Per Mie Baksoan",
        produk: [
            { nama: "Bakso Tetelan", harga: 22000, gambar: "images/menu-bakso.jpg" },
            { nama: "Bakso Urat", harga: 14000, gambar: "images/menu-bakso.jpg" },
            { nama: "Mie Ayam Bakso Tetelan Ceker", harga: 28000, gambar: "images/menu-bakso.jpg" }
        ]
    },
    {
        nama: "Per Kopian Duniawi",
        produk: [
            { nama: "Oreo Latte Ice", harga: 12000, gambar: "images/menu-kopi.jpg" },
            { nama: "Kopi Mocca Latte", harga: 12000, gambar: "images/menu-kopi.jpg" },
            { nama: "Kopi Susu Gula Aren", harga: 12000, gambar: "images/menu-kopi.jpg" }
        ]
    },
    {
        nama: "Penyegaran Duniawi",
        produk: [
            { nama: "Milkshake Strawberry M", harga: 8000, gambar: "images/menu-milkshake.jpg" },
            { nama: "Milkshake Cappuccino L", harga: 10000, gambar: "images/menu-milkshake.jpg" },
            { nama: "Milkshake Cappuccino M", harga: 8000, gambar: "images/menu-milkshake.jpg" }
        ]
    },
    {
        nama: "Per Toppingan Duniawi",
        produk: [
            { nama: "Oreo", harga: 2000, gambar: "images/menu-topping.jpg" },
            { nama: "Keju", harga: 2000, gambar: "images/menu-topping.jpg" }
        ]
    },
    {
        nama: "Per Smoothiesan Duniawi",
        produk: [
            { nama: "Dragona (Dragon Banana)", harga: 20000, gambar: "images/menu-smoothies.jpg" }
        ]
    },
    {
        nama: "Menu Baru",
        produk: [
            { nama: "Nasi Ayam Bakar", harga: 17000, gambar: "images/menu-nasi.jpg" },
            { nama: "Mocca Latte", harga: 12000, gambar: "images/menu-nasi.jpg" },
            { nama: "Kopi Mocca Latte", harga: 12000, gambar: "images/menu-nasi.jpg" }
        ]
    },
    {
        nama: "Kelapa Muda (Jus)",
        produk: [
            { nama: "Es Kelapa Muda Sirup", harga: 12000, gambar: "images/menu-kelapa.jpg" },
            { nama: "Es Kelapa Muda Jeruk", harga: 12000, gambar: "images/menu-kelapa.jpg" },
            { nama: "Es Kelapa Muda Susu", harga: 10000, gambar: "images/menu-kelapa.jpg" }
        ]
    },
    {
        nama: "Per Nasi an Duniawi",
        produk: [
            { nama: "Nasi Ayam Saus Mentega", harga: 18000, gambar: "images/menu-nasi.jpg" },
            { nama: "Nasi Ayam Saus Teriyaki", harga: 18000, gambar: "images/menu-nasi.jpg" },
            { nama: "Nasi Ayam Saus Lada Hitam", harga: 18000, gambar: "images/menu-nasi.jpg" }
        ]
    },
    {
        nama: "Aneka Jus",
        produk: [
            { nama: "Jus Jambu Biji", harga: 10000, gambar: "images/menu-minuman.jpg" },
            { nama: "Jus Pisang", harga: 10000, gambar: "images/menu-minuman.jpg" },
            { nama: "Jus Buah Naga", harga: 10000, gambar: "images/menu-minuman.jpg" }
        ]
    }
];

function rupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

function buatKartuMenu(produk) {
    const kartu = document.createElement("article");
    kartu.className = "kartu-menu";

    const areaFoto = document.createElement("div");
    areaFoto.className = "foto-menu";

    const gambar = document.createElement("img");
    gambar.src = produk.gambar;
    gambar.alt = produk.nama;
    gambar.loading = "lazy";

    const placeholder = document.createElement("div");
    placeholder.className = "foto-placeholder";
    placeholder.textContent = "Foto Menu";
    placeholder.style.display = "none";

    gambar.onerror = function () {
        gambar.style.display = "none";
        placeholder.style.display = "flex";
    };

    areaFoto.appendChild(gambar);
    areaFoto.appendChild(placeholder);

    const informasi = document.createElement("div");
    informasi.className = "info-menu";

    const nama = document.createElement("h4");
    nama.className = "nama-menu";
    nama.textContent = produk.nama;

    const harga = document.createElement("p");
    harga.className = "harga-menu";
    harga.textContent = rupiah(produk.harga);

    informasi.appendChild(nama);
    informasi.appendChild(harga);
    kartu.appendChild(areaFoto);
    kartu.appendChild(informasi);

    return kartu;
}

function tampilkanProduk() {
    const daftarProduk = document.getElementById("daftar-produk");
    if (!daftarProduk) return;

    daftarProduk.innerHTML = "";

    kategoriMenu.forEach(function (kategori) {
        const bagianKategori = document.createElement("div");
        bagianKategori.className = "bagian-kategori";

        const judul = document.createElement("h3");
        judul.className = "judul-kategori";
        judul.textContent = kategori.nama;

        const daftar = document.createElement("div");
        daftar.className = "daftar-menu";

        kategori.produk.forEach(function (produk) {
            daftar.appendChild(buatKartuMenu(produk));
        });

        bagianKategori.appendChild(judul);
        bagianKategori.appendChild(daftar);
        daftarProduk.appendChild(bagianKategori);
    });
}

function tampilkanStatusBuka() {
    const status = document.getElementById("status-buka");
    if (!status) return;

    const waktu = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    }).format(new Date());

    const [jam, menit] = waktu.split(":").map(Number);
    const totalMenit = jam * 60 + menit;
    const jamBuka = 10 * 60 + 30;
    const jamTutup = 21 * 60 + 30;

    if (totalMenit >= jamBuka && totalMenit < jamTutup) {
        status.textContent = "Buka Sekarang (10.30 - 21.30 WIB)";
        status.className = "buka";
    } else {
        status.textContent = "Sedang Tutup (Buka pukul 10.30 WIB)";
        status.className = "tutup";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    tampilkanProduk();
    tampilkanStatusBuka();
    // Perbarui status otomatis setiap menit agar selalu sesuai waktu WIB.
    window.setInterval(tampilkanStatusBuka, 60 * 1000);
});
