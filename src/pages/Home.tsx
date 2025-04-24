import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import { cakes } from "../data/cakes";

const Home = () => {
  // Select 3 featured products
  const featuredCakes = cakes.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-96 md:h-[500px] bg-cover bg-center relative" style={{ 
          backgroundImage: "url(/src/assets/hero-image.jpg)",
          backgroundSize: "cover"
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="font-cursive text-4xl md:text-5xl lg:text-6xl mb-4">
                  Dapur Cinta by Mama Ina
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  Kue Rumahan Rasa Sayang Mama – Fresh, Halal, dan Bisa Custom!
                </p>
                <WhatsAppButton className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cursive text-3xl mb-6 text-brown-light">
              Selamat Datang di Dapur Cinta
            </h2>
            <p className="text-gray-700 mb-6">
              Dapur Cinta by Mama Ina adalah toko kue rumahan yang menyediakan berbagai
              macam kue basah tradisional dan kue ulang tahun custom. Setiap kue dibuat
              dengan bahan berkualitas dan penuh cinta, persis seperti masakan ibu di rumah.
              Kami siap memenuhi kebutuhan kue untuk acara spesial, keluarga, maupun kantor Anda.
            </p>
            <Link to="/about" className="text-pink-pastel hover:text-pink-700 font-medium">
              Baca Cerita Kami →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-pink-pastel/20">
        <div className="container mx-auto px-4">
          <h2 className="font-cursive text-3xl mb-8 text-center text-brown-light">
            Kue Favorit Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCakes.map((cake) => (
              <div key={cake.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{cake.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cake.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-brown-light">
                      Rp {cake.price.toLocaleString("id-ID")}
                    </span>
                    <WhatsAppButton 
                      text="Pesan" 
                      message={`Halo, saya ingin memesan ${cake.name}`}
                      className="py-1 px-4 text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-block bg-brown-light hover:bg-brown-600 text-white py-2 px-6 rounded-full transition-colors"
            >
              Lihat Semua Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-pink-pastel/30 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <h2 className="font-cursive text-3xl mb-4 text-brown-light">
              Butuh Kue Custom?
            </h2>
            <p className="text-gray-700 mb-6">
              Buat momen spesial Anda lebih berkesan dengan kue ulang tahun 
              custom dari Dapur Cinta. Hubungi kami sekarang untuk diskusi desain!
            </p>
            <WhatsAppButton
              text="Diskusi Pesanan Custom"
              message="Halo Dapur Cinta, saya ingin memesan kue custom!"
              className="text-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;