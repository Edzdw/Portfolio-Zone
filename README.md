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

Chưa có CMS hoặc backend riêng. Popup đặt lịch gửi yêu cầu trực tiếp đến Formspree; các kênh Facebook / Instagram vẫn hoạt động để trao đổi. Website chưa được triển khai lên hosting.

Ảnh thật dùng tên ngắn theo nhóm: `cosplay-1.jpg`, `gundam-1.jpg`, `hero-1.jpg`, `studio-1.jpg`; bản nhỏ thêm `-640`. Thứ tự hiển thị do các mảng dữ liệu quyết định, không theo số trong tên file. Bảng đối chiếu tên cũ/mới nằm trong `docs/image-renames.json`.


## Popup gửi yêu cầu chụp

Các nút đặt lịch mở cùng một popup tự thiết kế. Endpoint công khai ở `src/lib/booking.ts`: `https://formspree.io/f/xaeqrzwk`. Không có API key hay token gửi email trong frontend.

Nickname, số điện thoại và dịch vụ là bắt buộc. Chọn Cosplay thì cần thêm nhân vật. Ngày dự kiến, địa điểm/tên fes và ghi chú là tùy chọn. Nút trong chi tiết dịch vụ chọn sẵn loại dịch vụ tương ứng.

Popup giữ bản nháp trong bộ nhớ khi đóng/mở lại và khi gửi lỗi, không lưu dữ liệu khách vào localStorage. Tải lại trang sẽ mất bản nháp. Đang gửi thì khóa nút và tạm chặn đóng popup để giữ trạng thái; hết 25 giây sẽ hiện thông báo chưa xác nhận được kết quả. Không tự gửi lại. Thành công chỉ sau phản hồi xác nhận từ Formspree; không tự chốt lịch hoặc kiểm tra lịch trống.

Email nhận, xác minh email và tích hợp Discord / Telegram cần cấu hình trong dashboard Formspree. Đợt triển khai này kiểm tra bằng yêu cầu mô phỏng, chưa gửi thử thật hoặc xác minh email đến. Sau khi cấu hình, có thể gửi một yêu cầu thử từ web để kiểm tra thông báo.


## Zalo QR

Nút Zalo nổi góc dưới bên phải và nút Zalo trong Liên hệ cùng mở popup. QR được lấy riêng từ ảnh danh thiếp, giữ nguyên pixel và khoảng trắng quanh mã, lưu PNG tại `public/images/real/contact/zalo-qr.png`. Có thể lưu mã bằng nút tải trong popup. Không dùng lại ảnh đại diện hoặc nền danh thiếp.

Cấu hình ở `site.zalo` trong `src/data/site.ts`: `qrImage` là ảnh QR; `profileUrl` để trống khi chưa xác nhận được đường dẫn Zalo. Khi có URL đúng, điền vào để hiện nút Mở Zalo. Không suy đoán số điện thoại hay URL tài khoản từ tên trong danh thiếp.
