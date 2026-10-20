# Shutter & Magic

Website portfolio nhiếp ảnh — React + TypeScript + Vite. Bản đầu chạy local, ảnh và đánh giá là nội dung minh họa.

## Chạy

```sh
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị. `npm run build` kiểm tra TypeScript và đóng gói vào `dist/`. `npm run preview` xem bản build.

## Thay nội dung

- `src/data/site.ts`: tên thương hiệu, giới thiệu, địa điểm, thiết bị, URL Facebook / Instagram. Để trống URL sẽ hiện thông báo chưa cấu hình, không dẫn đến tài khoản giả.
- `src/data/services.ts`: dịch vụ, điểm nổi bật, nội dung chi tiết và ảnh.
- `src/data/albums.ts`: album, thể loại, ảnh, mô tả ảnh, vị trí crop (`position`, ví dụ `50% 30%`). Bộ lọc và số ảnh lấy từ dữ liệu.
- `src/data/testimonials.ts`: thay đánh giá minh họa bằng phản hồi có thật. Khi đã thay, bỏ nhãn minh họa trong `Testimonials.tsx`.
- `src/styles/tokens.css`: màu, font, chiều rộng nội dung.

## Thay ảnh

Chép ảnh vào `public/images/` theo nhóm. Đường dẫn trong dữ liệu bắt đầu bằng `/images/`, ví dụ:

```ts
images: [
  {
    src: "/images/portfolio/moonlight-01.webp",
    alt: "Mô tả ảnh",
    position: "50% 30%",
  },
  { src: "/images/portfolio/moonlight-02.webp", alt: "Mô tả ảnh thứ hai" },
];
```

`src` trống hoặc ảnh không tải được sẽ hiện khung mockup. Nên dùng WebP/AVIF/JPEG đã nén, khoảng 1600–2400px cho hero và 1000–1600px cho album; giữ bản gốc ở nơi khác.

Ảnh hero: thêm `src="/images/hero/cover.webp"` vào `ImagePlaceholder` trong `src/components/sections/Hero.tsx`. Ảnh photographer: tương tự tại `About.tsx`. Ảnh dịch vụ: chỉnh trường `image` trong `services.ts`.

## Bố cục

`components/layout`: header / footer. `components/sections`: các phần trang. `components/ui`: nút, khung ảnh, hộp thoại và gallery. `data`: nội dung. `styles`: thiết kế và responsive.

Album hỗ trợ phím mũi tên, Escape đóng, click nền đóng và giữ focus trong hộp thoại native. Website có menu mobile, skip link, focus bàn phím và hỗ trợ reduced motion. Google Fonts có font dự phòng nếu không có mạng.

Chưa có backend, CMS hoặc chức năng gửi form. Đặt lịch qua URL mạng xã hội do chủ website cấu hình. Chưa triển khai lên hosting.

## Bộ ảnh AI đã gắn

Hero, hai dịch vụ và bảy album đã dùng bộ ảnh AI demo. Nguồn và prompt set ghi trong `docs/ai-images.md`. Mỗi album hiện có một ảnh; thêm ảnh thật vào `src/data/albums.ts` để mở rộng bộ ảnh. Ảnh photographer vẫn giữ khung chờ ảnh thật. Thay toàn bộ ảnh demo rồi đổi `site.demoImages` thành `false` để bỏ nhãn AI.
