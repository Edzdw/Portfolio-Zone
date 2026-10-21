> Lưu trữ: bộ AI này đã được thay bằng ảnh thật từ Drive. Xem `real-images.md` để biết trạng thái hiện tại.

# Bộ ảnh AI minh họa

Tạo bằng công cụ imagegen tích hợp trong Codex, không dùng CLI/API key riêng. Đây là bộ ảnh demo để duyệt giao diện; không phải tác phẩm nhiếp ảnh thực tế. Ảnh giới thiệu photographer chưa thay.

## Prompt set

Tất cả: `Use case: photorealistic-natural`. Ảnh editorial tự nhiên, chủ thể người trưởng thành hư cấu, trang phục fantasy nguyên bản, không chữ/logo/collage. Ánh sáng và texture vải/da chân thực.

- **Hero / moonlight:** wide 16:9; adult East Asian woman cosplayer, long silver-white hair, original blue and black fantasy costume with ribbons, translucent blue parasol, looking back at camera. Pale blue glass conservatory, airy ice blue and cream. Face at 65% horizontally, leftmost 35% soft pale negative space for HTML headline; darker blue right edge for quote. 85mm shallow depth of field.
- **Studio / afternoon:** portrait 4:5; adult East Asian woman, natural black shoulder-length hair, ivory linen blouse, seated by a sheer-curtain window in a cream studio, waist-up candid portrait. Delicate afternoon sunlight, beige and peach.
- **Cosplay / sakura:** portrait 4:5; adult East Asian woman cosplayer, elegant pink kimono-inspired fantasy costume with embroidered flowers, long pastel pink wig, ornate hair accessories, paper parasol in a cherry blossom garden. Soft light, pink and pale blue.
- **Golden:** portrait 4:5; adult East Asian woman cosplayer, gold/navy fantasy adventurer costume, short blonde wig, embroidered jacket, sunlit garden at golden hour. Waist-up, green foliage bokeh, gold and cream highlights.
- **Slow Sunday:** portrait 4:5; adult East Asian woman, dark hair loosely tied back, cream knit cardigan and linen dress, seated beside an open sunny window. Gentle smile, ivory, beige and sage, natural morning light.
- **Winter:** portrait 4:5; adult East Asian woman cosplayer, long ice-blue wig, elegant white/navy winter fantasy costume, silver snowflake accessories, frosted glass conservatory. Head and upper torso visible, cool soft light.
- **Neon:** portrait 4:5; adult East Asian woman cosplayer, short black/red wig, crimson/black fantasy jacket, rainy city street after a convention. Waist-up, visible face, red/blue reflections and warm lantern bokeh.

## Gắn ảnh

Hero: `public/images/hero/ai-moonlight.jpg` và bản 960px. Hai dịch vụ: `public/images/services/ai-studio.jpg`, `ai-sakura.jpg`. Portfolio: `public/images/portfolio/ai-*.jpg` và dùng lại hero/dịch vụ cho các concept tương ứng. Mỗi album hiện có một ảnh demo; thêm ảnh thật vào danh sách `images` để chuyển ảnh.

Ảnh được chuyển JPEG nén để tải nhẹ; bản PNG gốc giữ nguyên trong thư mục generated_images của Codex. Không thay asset có sẵn của người dùng.

Khi đã thay toàn bộ ảnh AI bằng ảnh chụp thật, đổi `demoImages` thành `false` trong `src/data/site.ts` để bỏ nhãn minh họa.
