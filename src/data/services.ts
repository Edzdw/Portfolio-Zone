export const services = [
  {
    id: "studio",
    title: "Studio Daily",
    subtitle: "Một chút dịu dàng, một chút là chính bạn.",
    description: "Chân dung, đời thường, concept cá nhân…",
    points: [
      "Chụp tại studio / ngoại cảnh",
      "Chỉnh màu tự nhiên, tinh tế",
      "Cá nhân, couple hoặc nhóm bạn",
    ],
    note: "Natural\nSoft\nYou ♡",
    tone: "peach",
    image: "/images/real/studio/studio-6-640.jpg",
    detail:
      "Một buổi chụp dành riêng cho bạn, từ chân dung đời thường đến concept cá nhân. Mình sẽ trao đổi moodboard, trang phục và địa điểm trước buổi chụp. Thời lượng, số ảnh chỉnh sửa và chi phí được thống nhất khi tư vấn.",
  },
  {
    id: "cosplay",
    title: "Fes Cosplay",
    subtitle: "Bước ra từ thế giới bạn yêu.",
    description: "Sự kiện, lễ hội, cosplay character…",
    points: [
      "Chụp tại sự kiện & convention",
      "Bắt trọn thần thái nhân vật",
      "Cá nhân, nhóm hoặc cosplay team",
    ],
    note: "Your character,\nmy lens ✧",
    tone: "rose",
    image:
      "/images/real/cosplay/cosplay-23.jpg",
    detail:
      "Lưu giữ nhân vật bạn yêu tại lễ hội hoặc trong một concept riêng. Mình cùng bạn trao đổi góc chụp, pose và tinh thần nhân vật. Địa điểm, lịch fes, số ảnh và chi phí sẽ được xác nhận khi đặt lịch.",
  },
  
  {
    id: "Gundam",
    title: " Figure",
    subtitle: "Đừng quên những điều nhỏ nhặt nhất",
    description: "Chụp sản phẩm, figure",
    points: [
      "Chụp tại studio / ngoại cảnh",
      "Chỉnh màu tự nhiên, tinh tế",
      "Model Posing & Product Styling",
    ],
    note: "Some Tiny Things",
    tone: "black",
    image:
      "/images/real/gundam/gundam-7-640.jpg",
    detail:
      "Lưu giữ nhân vật bạn yêu tại lễ hội hoặc trong một concept riêng. Mình cùng bạn trao đổi góc chụp, pose và tinh thần nhân vật. Địa điểm, lịch fes, số ảnh và chi phí sẽ được xác nhận khi đặt lịch.",
  },
];
export type Service = (typeof services)[number];
