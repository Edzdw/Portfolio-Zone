# Shutter & Magic

Portfolio nhiếp ảnh bằng React + TypeScript + Vite, chạy local. Đã thay bộ ảnh AI đang hiển thị bằng 68 ảnh thật từ Drive của chủ website.

## Chạy và kiểm tra

```sh
npm install
npm run dev
npm run build
```

`npm run build` kiểm tra TypeScript và đóng gói vào `dist/`. `npm run preview` xem bản build. Không cần truy cập Drive khi khách xem web: ảnh được phục vụ từ project.

## Nội dung và ảnh

- `src/data/site.ts`: thương hiệu, giới thiệu, thiết bị, địa điểm và URL Facebook / Instagram. `demoImages: false` vì các ảnh đang hiển thị đã dùng bộ ảnh thật.
- `src/data/hero.ts`: ba ảnh trong thư mục **3 Ảnh chính** trên Drive, thứ tự hiện tại là `IMG_9548.JPG`, `IMG_9663.JPG`, `0D1D7839-72E7-47C3-A427-31B58E19BE4C.jpeg`. Ảnh tự đổi mỗi 7 giây bằng crossfade 1,4 giây; dấu nhỏ báo ảnh hiện tại và nút dừng/phát thay cho các nút số. Trình chiếu tạm dừng khi hero ngoài màn hình, tab bị ẩn, người dùng focus vào hero hoặc rê chuột vào cụm điều khiển. Khi bật giảm chuyển động, trình chiếu không tự chạy; có thể chủ động bấm phát. `position` và `mobilePosition` điều chỉnh vị trí ảnh cho từng cỡ màn hình.
- `src/data/services.ts`: nội dung và ảnh hai dịch vụ Studio Daily / Fes Cosplay.
- `src/data/albums.ts`: 7 bộ ảnh với bộ lọc **Tất cả / Cosplay / Studio / Gundam**. Các ảnh Cosplay được chia thành tuyển tập để duyệt, chưa khẳng định là cùng một buổi chụp. Đổi tên và nhóm lại theo tên nhân vật/buổi chụp nếu muốn.
- `src/data/testimonials.ts`: vẫn là đánh giá minh họa, cần thay bằng phản hồi có thật trước khi công khai.
- `src/styles/tokens.css`: màu sắc, font và chiều rộng nội dung.

## Thư mục ảnh thật

`public/images/real/hero`, `cosplay`, `studio`, `gundam` chứa 68 ảnh và bản 640px tương ứng. Hero tối đa 2200px; album tối đa 1600px. Các bản JPEG đã nén, sửa hướng theo EXIF và không đưa metadata gốc vào bản web. Ảnh trên Drive giữ nguyên.

`docs/real-images.json` ghi file gốc, Drive ID/URL, kích thước và đường dẫn local để đối chiếu. Không chứa token hoặc đường dẫn tải có thời hạn. Web không tự đồng bộ khi Drive thay đổi.

Bấm vào một bộ ảnh để xem gallery, chuyển bằng nút hoặc phím mũi tên, Escape để đóng. Gallery giữ nguyên tỉ lệ ảnh, còn ảnh bìa dùng crop. Thumbnail và `srcSet` giúp trang đầu tải nhẹ; ảnh lớn chỉ được tải khi xem album, kèm tải trước một ảnh kế tiếp.

Ảnh giới thiệu photographer vẫn là khung chờ ảnh thật, không lấy chân dung khách hàng để thay thế. Bộ ảnh AI cũ được giữ trong các thư mục cũ làm bản dự phòng, nhưng không còn được dùng trong hero, dịch vụ hoặc portfolio.

## Bố cục

`components/layout`: header/footer. `components/sections`: các phần trang. `components/ui`: nút, ảnh, dialog/gallery. `data`: nội dung. `styles`: giao diện và responsive.

Chưa có CMS, backend hoặc chức năng gửi form. Đặt lịch qua URL mạng xã hội do chủ website cấu hình. Website chưa được triển khai lên hosting.

Ảnh thật dùng tên ngắn theo nhóm: `cosplay-1.jpg`, `gundam-1.jpg`, `hero-1.jpg`, `studio-1.jpg`; bản nhỏ thêm `-640`. Thứ tự hiển thị do các mảng dữ liệu quyết định, không theo số trong tên file. Bảng đối chiếu tên cũ/mới nằm trong `docs/image-renames.json`.
