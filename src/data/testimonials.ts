export interface Testimonial {
    id: number;
    name: string;
    image: string;
    text: string;
    rating: number;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ibu Sari",
      image: "/src/assets/testimonial-1.jpg",
      text: "Kue ulang tahun untuk anak saya cantik banget! Rasanya juga enak nggak terlalu manis. Anak-anak pada suka. Pasti pesan lagi!",
      rating: 5
    },
    {
      id: 2,
      name: "Pak Budi",
      image: "/src/assets/testimonial-2.jpg",
      text: "Snack box untuk meeting kantor kami selalu dari Dapur Cinta. Pelayanannya ramah, kuenya fresh dan variatif. Recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Mbak Dina",
      image: "/src/assets/testimonial-3.jpg",
      text: "Bolu kukus pelanginya lembut banget. Selalu beli untuk acara keluarga. Sukses terus Dapur Cinta!",
      rating: 4
    },
    {
      id: 4,
      name: "Keluarga Santoso",
      image: "/src/assets/testimonial-4.jpg",
      text: "Kue lapis legitnya juara! Teksturnya pas dan rasanya otentik. Pesen buat lebaran kemaren, semua keluarga pada suka!",
      rating: 5
    },
    {
      id: 5,
      name: "Ibu Ani",
      image: "/src/assets/testimonial-5.jpg",
      text: "Kue ultah custom untuk suami saya bagus banget! Sesuai dengan request dan rasanya enak. Harganya juga terjangkau. Terima kasih Mama Ina!",
      rating: 5
    }
  ];