import WhatsAppButton from "../components/WhatsAppButton";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-cursive text-brown-light text-center mb-8">
        Tentang Dapur Cinta
      </h1>

      {/* Cerita Mama Ina */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/about-mama.jpg"
            alt="Mama Ina di dapur"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-medium mb-4">Cerita Mama Ina</h2>
          <p className="text-gray-700 mb-4">
            Perkenalkan, saya Ina Susanti, pendiri dari Dapur Cinta. Sejak kecil, saya selalu
            menyukai dunia kuliner, terutama dalam membuat kue. Hobi ini saya warisi dari 
            ibu saya yang juga seorang pembuat kue tradisional di kampung.
          </p>
          <p className="text-gray-700 mb-4">
            Setelah menikah dan memiliki dua anak, saya sering membuat kue untuk keluarga,
            terutama saat ada acara spesial. Berawal dari permintaan tetangga dan saudara
            yang menyukai kue buatan saya, saya mulai menerima pesanan kecil-kecilan pada 
            tahun 2018.
          </p>
          <p className="text-gray-700">
            Berkat dukungan keluarga dan respon positif dari pelanggan, akhirnya pada tahun 
            2020 saya memberanikan diri untuk membuka Dapur Cinta secara resmi. Nama "Cinta" 
            saya pilih karena setiap kue yang saya buat selalu saya buat dengan penuh cinta, 
            seperti saat membuat makanan untuk keluarga sendiri.
          </p>
        </div>
      </div>

      {/* Filosofi & Nilai */}
      <div className="bg-cream-pastel rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-medium mb-4 text-center">Filosofi & Nilai Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg
                className="w-8 h-8 text-pink-pastel"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Dibuat dengan Cinta</h3>
            <p className="text-gray-700">
              Setiap kue yang kami buat selalu dibuat dengan cinta dan perhatian 
              seperti saat memasak untuk keluarga sendiri.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg
                className="w-8 h-8 text-pink-pastel"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Kualitas Terbaik</h3>
            <p className="text-gray-700">
              Kami hanya menggunakan bahan-bahan berkualitas terbaik dan selalu 
              mengutamakan kebersihan dalam proses pembuatan.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg
                className="w-8 h-8 text-pink-pastel"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Kepuasan Pelanggan</h3>
            <p className="text-gray-700">
              Kami berkomitmen untuk memberikan pelayanan terbaik dan 
              memastikan pelanggan puas dengan produk kami.
            </p>
          </div>
        </div>
      </div>

      {/* Dapur Kami */}
      <div className="mb-16">
        <h2 className="text-2xl font-medium mb-6 text-center">Dapur Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="/src/assets/kitchen-1.jpg"
              alt="Dapur Cinta"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
          <div>
            <img
              src="/src/assets/kitchen-2.jpg"
              alt="Proses pembuatan kue"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
        <p className="text-gray-700 mt-6 text-center">
          Dapur Cinta beroperasi dari rumah Mama Ina yang telah direnovasi khusus untuk 
          memenuhi standar kebersihan dan kenyamanan dalam pembuatan kue. Kami juga 
          memiliki sertifikat halal dan perizinan UMKM yang resmi.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-pink-pastel/30 rounded-lg p-8 text-center max-w-2xl mx-auto">
        <h2 className="font-cursive text-3xl mb-4 text-brown-light">
          Siap Memesan Kue?
        </h2>
        <p className="text-gray-700 mb-6">
          Jika Anda tertarik untuk memesan kue dari Dapur Cinta, jangan ragu untuk 
          menghubungi kami melalui WhatsApp atau kunjungi halaman Menu kami.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <WhatsAppButton
            text="Hubungi via WhatsApp"
            message="Halo Dapur Cinta, saya tertarik dengan kue Anda..."
          />
          <a
            href="/menu"
            className="bg-brown-light hover:bg-brown-600 text-white py-2 px-6 rounded-full inline-flex items-center justify-center transition-colors"
          >
            Lihat Menu Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;