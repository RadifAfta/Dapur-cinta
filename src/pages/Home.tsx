import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import { cakes } from "../data/cakes";

const Home = () => {
  // Select 3 featured products
  const featuredCakes = cakes.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Improved Wave Design */}
      <section className="relative">
        <div className="w-full h-screen max-h-[650px] bg-cover bg-center relative overflow-hidden" style={{
          backgroundImage: "url(/src/assets/hero-image.jpg)",
          backgroundColor: "#a59a8c",
          backgroundBlendMode: "overlay"
        }}>
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-[#a59a8c] bg-opacity-75"></div>

          {/* Main Content */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white ml-4 md:ml-12">
                <div className="bg-[#c3a991] rounded-full inline-block px-4 py-1 mb-5">
                  <span className="text-white font-medium text-sm">Kue Rumahan Penuh Cinta</span>
                </div>

                <h1 className="font-cursive text-5xl md:text-6xl lg:text-7xl mb-5 text-white">
                  Dapur Cinta
                </h1>
                <h2 className="font-cursive text-4xl md:text-5xl text-[#e7b9c6] mb-5">
                  by Mama Ina
                </h2>

                <p className="text-white text-xl md:text-2xl mb-8 max-w-lg leading-relaxed">
                  Kue Rumahan Rasa Sayang Mama – <br />
                  Fresh, Halal, dan Bisa Custom!
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <button className="bg-[#e7b9c6] hover:bg-[#d6a0ae] text-white font-medium py-3 px-8 rounded-lg flex items-center transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Pesan Sekarang
                  </button>

                  <Link to="/menu" className="inline-flex items-center justify-center bg-[#c3a991] hover:bg-[#b09780] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                    Lihat Menu <span className="ml-2">→</span>
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 max-w-md">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-10 h-10 rounded-full border-2 border-[#e7b9c6] bg-gray-200 flex items-center justify-center overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#e7b9c6] bg-gray-200 flex items-center justify-center overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#e7b9c6] bg-gray-200 flex items-center justify-center overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">500+ pelanggan bahagia</span>
                    <div className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-white font-medium">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Improved Wave Design - Multiple Waves with Different Opacities */}
          <div className="absolute -bottom-px left-0 right-0">
            {/* First wave - lighter */}
            <div className="absolute bottom-0 left-0 right-0 opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130" preserveAspectRatio="none" className="w-full h-16">
                <path fill="#ffffff" fillOpacity="1" d="M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,48C560,43,640,53,720,69.3C800,85,880,107,960,112C1040,117,1120,107,1200,90.7C1280,75,1360,53,1400,42.7L1440,32L1440,130L1400,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"></path>
              </svg>
            </div>

            {/* Second wave - main */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" preserveAspectRatio="none" className="w-full h-14">
                <path fill="#ffffff" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,53.3C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,110L1392,110C1344,110,1248,110,1152,110C1056,110,960,110,864,110C768,110,672,110,576,110C480,110,384,110,288,110C192,110,96,110,48,110L0,110Z"></path>
              </svg>
            </div>

            {/* Third wave - small details */}
            <div className="absolute bottom-0 left-0 right-0 opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 85" preserveAspectRatio="none" className="w-full h-12">
                <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,85L1360,85C1280,85,1120,85,960,85C800,85,640,85,480,85C320,85,160,85,80,85L0,85Z"></path>
              </svg>
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