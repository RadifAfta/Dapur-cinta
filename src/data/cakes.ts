
// src/data/cakes.ts
export interface Cake {
    id: number;
    name: string;
    category: "kue_basah" | "kue_ulang_tahun" | "snack_box";
    price: number;
    image: string;
    description: string;
  }
  
  export const cakes: Cake[] = [
    {
      id: 1,
      name: "Kue Lapis Legit",
      category: "kue_basah",
      price: 120000,
      image: "/src/assets/kue-lapis.jpg",
      description: "Kue lapis legit premium dengan aroma pandan dan cengkeh yang khas."
    },
    {
      id: 2,
      name: "Brownies Fudgy",
      category: "kue_basah",
      price: 85000,
      image: "/src/assets/brownies.jpg",
      description: "Brownies coklat dengan tekstur fudgy dan topping kacang mete."
    },
    {
      id: 3,
      name: "Bolu Kukus Pelangi",
      category: "kue_basah",
      price: 65000,
      image: "/src/assets/bolu-kukus.jpg",
      description: "Bolu kukus lembut dengan lapisan warna pelangi yang menawan."
    },
    {
      id: 4,
      name: "Kue Ulang Tahun Bunga",
      category: "kue_ulang_tahun",
      price: 250000,
      image: "/src/assets/cake-bunga.jpg",
      description: "Kue ulang tahun dengan dekorasi bunga segar dan krim lembut."
    },
    {
      id: 5,
      name: "Kue Ultah Anak Karakter",
      category: "kue_ulang_tahun",
      price: 300000,
      image: "/src/assets/cake-karakter.jpg",
      description: "Kue ulang tahun dengan karakter kartun favorit untuk si kecil."
    },
    {
      id: 6,
      name: "Snack Box Medium",
      category: "snack_box",
      price: 35000,
      image: "/src/assets/snack-box.jpg",
      description: "Berisi 4 macam kue dengan kemasan cantik, ideal untuk acara kantor."
    },
    {
      id: 7,
      name: "Snack Box Premium",
      category: "snack_box",
      price: 50000,
      image: "/src/assets/snack-premium.jpg",
      description: "Berisi 6 macam kue premium dengan kemasan eksklusif."
    },
    {
      id: 8,
      name: "Risoles Mayo",
      category: "kue_basah",
      price: 7500,
      image: "/src/assets/risoles.jpg",
      description: "Risoles dengan isian mayonaise, telur, dan daging asap."
    },
    {
      id: 9,
      name: "Kue Nastar",
      category: "kue_basah",
      price: 100000,
      image: "/src/assets/nastar.jpg",
      description: "Kue nastar lembut dengan isian selai nanas homemade."
    }
  ];