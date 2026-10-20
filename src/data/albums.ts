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
    title: "A little moonlight",
    category: "Fes Cosplay",
    character: "Thế giới dưới ánh trăng",
    tone: "blue",
    featured: true,
    images: [
      { src: "", alt: "Cosplay dưới ánh trăng — ảnh 01" },
      { src: "", alt: "Chi tiết trang phục — ảnh 02" },
      { src: "", alt: "Chân dung nhân vật — ảnh 03" },
    ],
  },
  {
    id: "afternoon",
    title: "An ordinary afternoon",
    category: "Studio Daily",
    character: "Portrait / Natural light",
    tone: "peach",
    images: [
      { src: "", alt: "Chân dung trong nắng chiều" },
      { src: "", alt: "Khoảnh khắc bên cửa sổ" },
    ],
  },
  {
    id: "sakura",
    title: "Sakura dreams",
    category: "Fes Cosplay",
    character: "Một giấc mơ màu hồng",
    tone: "rose",
    images: [
      { src: "", alt: "Cosplay giữa mùa hoa" },
      { src: "", alt: "Chi tiết phụ kiện nhân vật" },
    ],
  },
  {
    id: "golden",
    title: "Golden hour",
    category: "Anime / Game",
    character: "Your favorite character",
    tone: "gold",
    images: [
      { src: "", alt: "Nhân vật trong ánh hoàng hôn" },
      { src: "", alt: "Chân dung ánh sáng vàng" },
    ],
  },
  {
    id: "slow",
    title: "Slow Sunday",
    category: "Studio Daily",
    character: "Những điều thật bình yên",
    tone: "cream",
    images: [
      { src: "", alt: "Buổi sáng cuối tuần" },
      { src: "", alt: "Chân dung tự nhiên" },
    ],
  },
  {
    id: "winter",
    title: "Winter reverie",
    category: "Anime / Game",
    character: "A story in blue",
    tone: "ice",
    images: [
      { src: "", alt: "Concept mùa đông" },
      { src: "", alt: "Chi tiết concept mùa đông" },
    ],
  },
  {
    id: "neon",
    title: "After the festival",
    category: "Fes Cosplay",
    character: "City lights / Night portrait",
    tone: "night",
    images: [
      { src: "", alt: "Chân dung đêm lễ hội" },
      { src: "", alt: "Ánh đèn thành phố" },
    ],
  },
];
