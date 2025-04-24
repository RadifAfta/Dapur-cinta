// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brown-light text-white pt-8 pb-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-cursive text-2xl mb-3">Dapur Cinta</h3>
            <p className="text-sm max-w-xs">
              Toko kue rumahan yang menyediakan aneka kue basah dan kue ulang
              tahun custom, cocok untuk berbagai acara spesial Anda.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-bold mb-3">Jam Operasional</h4>
            <ul className="text-sm">
              <li className="mb-1">Senin - Jumat: 08.00 - 17.00</li>
              <li className="mb-1">Sabtu: 08.00 - 15.00</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-bold mb-3">Kontak Kami</h4>
            <ul className="text-sm">
              <li className="mb-1">
                <a href="tel:+6281234567890" className="hover:text-pink-pastel">
                  0812-3456-7890
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="mailto:info@dapurcinta.com"
                  className="hover:text-pink-pastel"
                >
                  info@dapurcinta.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/dapurcinta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-pastel"
                >
                  @dapurcinta
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Alamat</h4>
            <address className="text-sm not-italic">
              Jl. Kenangan No. 123<br />
              Kelurahan Indah, Kecamatan Bahagia<br />
              Kota Damai, 12345
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dapur Cinta by Mama Ina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;