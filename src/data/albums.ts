export type Category =
  "Tất cả" | "Studio Daily" | "Fes Cosplay" | "Anime / Game";
export const categories: Category[] = [
  "Tất cả",
  "Studio Daily",
  "Fes Cosplay",
  "Anime / Game",
];
export type Album = {
  id: string;
  title: string;
  category: Exclude<Category, "Tất cả">;
  character: string;
  tone: string;
  featured?: boolean;
  images: { src: string; alt: string; position?: string }[];
};
export const albums: Album[] = [
  {
    id: "moonlight",
    title: "A little blue magic",
    category: "Fes Cosplay",
    character: "Giấc mơ trong nhà kính",
    tone: "blue",
    featured: true,
    images: [{ src: "/images/hero/ai-moonlight.jpg", alt: "Ảnh AI: cosplay tóc bạc, dù xanh trong nhà kính", position: "65% 35%" }],
  },
  {
    id: "afternoon",
    title: "An ordinary afternoon",
    category: "Studio Daily",
    character: "Portrait / Natural light",
    tone: "peach",
    images: [{ src: "/images/services/ai-studio.jpg", alt: "Ảnh AI: chân dung studio bên cửa sổ", position: "50% 30%" }],
  },
  {
    id: "sakura",
    title: "Sakura dreams",
    category: "Fes Cosplay",
    character: "Một giấc mơ màu hồng",
    tone: "rose",
    images: [{ src: "/images/services/ai-sakura.jpg", alt: "Ảnh AI: cosplay kimono hồng giữa hoa anh đào", position: "50% 28%" }],
  },
  {
    id: "golden",
    title: "Golden hour",
    category: "Anime / Game",
    character: "Your favorite character",
    tone: "gold",
    images: [{ src: "/images/portfolio/ai-golden.jpg", alt: "Ảnh AI: cosplay navy và vàng trong nắng chiều", position: "50% 28%" }],
  },
  {
    id: "slow",
    title: "Slow Sunday",
    category: "Studio Daily",
    character: "Những điều thật bình yên",
    tone: "cream",
    images: [{ src: "/images/portfolio/ai-slow.jpg", alt: "Ảnh AI: chân dung tự nhiên bên cửa sổ buổi sáng", position: "50% 28%" }],
  },
  {
    id: "winter",
    title: "Winter reverie",
    category: "Anime / Game",
    character: "A story in blue",
    tone: "ice",
    images: [{ src: "/images/portfolio/ai-winter.jpg", alt: "Ảnh AI: cosplay tóc xanh bên kính mùa đông", position: "50% 28%" }],
  },
  {
    id: "neon",
    title: "After the festival",
    category: "Fes Cosplay",
    character: "City lights / Night portrait",
    tone: "night",
    images: [{ src: "/images/portfolio/ai-neon.jpg", alt: "Ảnh AI: cosplay đỏ đen trên phố đêm", position: "50% 28%" }],
  },
];
