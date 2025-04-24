import { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton";
import { cakes } from "../data/cakes";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", label: "Semua Menu" },
    { id: "kue_basah", label: "Kue Basah" },
    { id: "kue_ulang_tahun", label: "Kue Ulang Tahun" },
    { id: "snack_box", label: "Snack Box" },
  ];

  const filteredCakes = activeCategory === "all" 
    ? cakes 
    : cakes.filter(cake => cake.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-cursive text-brown-light text-center mb-8">
        Menu Kue Kami
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? "bg-brown-light text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Cakes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCakes.map((cake) => (
          <div
            key={cake.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{cake.name}</h3>
                <span className="bg-pink-pastel/30 text-pink-800 rounded-full px-2 py-1 text-xs">
                  {
                    cake.category === "kue_basah" ? "Kue Basah" :
                    cake.category === "kue_ulang_tahun" ? "Kue Ulang Tahun" :
                    "Snack Box"
                  }
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{cake.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-brown-light">
                  Rp {cake.price.toLocaleString("id-ID")}
                </span>
                <WhatsAppButton 
                  text="Pesan via WA" 
                  message={`Halo, saya ingin memesan ${cake.name}`}
                  className="py-1 px-4 text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCakes.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Tidak ada produk dalam kategori ini.
        </div>
      )}

      {/* Custom Order CTA */}
      <div className="mt-12 bg-cream-pastel rounded-lg p-6 text-center">
        <h2 className="font-medium text-2xl mb-2">Ingin Kue dengan Desain Khusus?</h2>
        <p className="text-gray-700 mb-4">
          Kami menerima pesanan kue custom sesuai keinginan Anda untuk acara 
          spesial. Hubungi kami untuk diskusi lebih lanjut!
        </p>
        <WhatsAppButton 
          text="Diskusi Pesanan Custom" 
          message="Halo, saya ingin memesan kue dengan desain khusus!"
          className="text-base"
        />
      </div>

      {/* Pemesanan Bulk/Grosir */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h2 className="font-medium text-2xl mb-2">Pemesanan untuk Acara Besar?</h2>
            <p className="text-gray-700 mb-4">
              Kami menyediakan layanan pemesanan dalam jumlah besar untuk acara 
              pernikahan, ulang tahun perusahaan, atau berbagai perayaan lainnya. 
              Dapatkan penawaran khusus untuk pemesanan minimum 50 box.
            </p>
          </div>
          <div className="md:w-1/3 md:text-right mt-4 md:mt-0">
            <WhatsAppButton 
              text="Tanya Penawaran Grosir" 
              message="Halo, saya ingin bertanya tentang pemesanan dalam jumlah besar untuk acara."
              className="text-base w-full md:w-auto justify-center"
            />
          </div>
        </div>
      </div>

      {/* Informasi Pemesanan */}
      <div className="mt-12">
        <h2 className="text-2xl font-cursive text-brown-light mb-4">
          Informasi Pemesanan
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Cara Pemesanan</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Pilih menu kue yang diinginkan</li>
                <li>Klik tombol "Pesan via WA" pada item yang dipilih</li>
                <li>Isi detail pesanan (jumlah, tanggal pengambilan, dll)</li>
                <li>Lakukan pembayaran DP minimal 50%</li>
                <li>Konfirmasi pembayaran dan tunggu pesanan siap</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Ketentuan Pemesanan</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pemesanan dilakukan minimal H-2 untuk kue reguler</li>
                <li>Kue ulang tahun custom minimal pemesanan H-7</li>
                <li>Pembatalan pesanan maksimal H-3 dengan pengurangan biaya admin 10%</li>
                <li>Pengiriman tersedia untuk area tertentu (minimal pembelian Rp 200.000)</li>
                <li>Pembayaran dapat dilakukan via transfer bank atau e-wallet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;