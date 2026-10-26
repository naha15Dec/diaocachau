# Landing Page Tuyển Dụng - Công Ty Cổ Phần Phát Triển Địa Ốc Á Châu

Landing page tuyển dụng chính thức cho **Công ty Cổ phần Phát triển Địa Ốc Á Châu (ACHAU REAL ESTATE)**, tập trung vào ba vị trí then chốt:
1. **Chuyên viên kinh doanh**
2. **Phó phòng kinh doanh**
3. **Trưởng phòng kinh doanh**

---

## 1. Công Nghệ Sử Dụng

- **Framework & Runtime**: React 19, TypeScript 5, Vite 6
- **Styling**: CSS hiện đại có tổ chức (Design Tokens, CSS Variables, BEM-inspired classes, Responsive Mobile-First)
- **Icons**: Lucide Icons (`lucide-react`)
- **Typography**: Font tiếng Việt `Be Vietnam Pro` (Google Fonts)
- **Linter & Code Quality**: Oxlint & TypeScript Typecheck
- **Assets**: Logo ACHAU REAL ESTATE chính thức, hình ảnh thực tế từ sự kiện và khóa đào tạo của công ty

---

## 2. Cấu Trúc Thư Mục

```text
DiaOcAChau/
├── public/                     # Tài nguyên tĩnh công khai
│   ├── favicon.ico             # Favicon Á Châu
│   ├── logo.png                # Logo thương hiệu phiên bản nền sáng
│   ├── logo-footer.png         # Logo thương hiệu phiên bản chữ trắng nền tối
│   └── images/                 # Hình ảnh hoạt động và đào tạo thực tế
│       ├── hall-event.png      # Toàn cảnh hội trường gặp gỡ sinh viên khởi nghiệp
│       ├── awards-sales.jpg    # Trao giải học viên xuất sắc
│       ├── training-sales.jpg  # Đào tạo nghiệp vụ cùng Ban Lãnh đạo
│       └── office-team.jpg     # Lễ ký kết hợp tác đào tạo MOU cùng trường ĐH
├── src/
│   ├── components/             # Các khối giao diện theo đặc tả
│   │   ├── Header.tsx          # Sticky Header, menu điều hướng, mobile drawer
│   │   ├── Hero.tsx            # Hero section, thông điệp định hướng, số liệu có căn cứ
│   │   ├── Positions.tsx       # 3 vị trí tuyển dụng với card riêng biệt
│   │   ├── Benefits.tsx        # 6 trụ cột đãi ngộ có căn cứ xác thực
│   │   ├── WorkEnvironment.tsx # Môi trường làm việc & giá trị cốt lõi
│   │   ├── RecruitmentProcess.tsx # Quy trình 4 bước tinh gọn
│   │   ├── ApplicationForm.tsx # Form ứng tuyển + Validation tiếng Việt + Modal hướng dẫn
│   │   ├── ContactSection.tsx  # Hotline, Zalo, Facebook, địa chỉ trụ sở & chi nhánh
│   │   ├── Footer.tsx          # Chân trang đầy đủ thông tin pháp nhân
│   │   ├── FloatingContact.tsx # Nút gọi nhanh hotline và chat Zalo góc màn hình
│   │   └── PrivacyModal.tsx    # Chính sách bảo mật dữ liệu ứng viên
│   ├── data/
│   │   └── recruitmentData.ts  # Dữ liệu công ty, vị trí, quyền lợi đã xác minh
│   ├── styles/
│   │   ├── variables.css       # Design tokens (màu sắc Á Châu, font, shadow, radius)
│   │   ├── main.css            # CSS reset, responsive container, buttons, typography
│   │   └── components.css      # CSS chi tiết cho toàn bộ components
│   ├── types/
│   │   └── index.ts            # Khai báo TypeScript types & interfaces
│   ├── App.tsx                 # Điều phối state và mượt mà cuộn trang
│   ├── main.tsx                # Entry point
│   └── index.css               # Import các styles
├── index.html                  # Metadata SEO, font, favicon
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Cài Đặt & Phát Triển

### Yêu cầu môi trường
- **Node.js**: >= 18.0.0 (khuyến nghị Node 20+)
- **npm**: >= 9.0.0

### Các lệnh thực thi

```bash
# 1. Cài đặt dependencies
npm install

# 2. Khởi chạy máy chủ phát triển (Development Server)
npm run dev

# 3. Kiểm tra lỗi mã nguồn (Linting)
npm run lint

# 4. Kiểm tra kiểu dữ liệu TypeScript & Biên dịch Production (Production Build)
npm run build

# 5. Xem trước bản build Production (Preview)
npm run preview
```

---

## 4. Hướng Dẫn Triển Khai Production (Deployment)

### Thư mục đầu ra
- Lệnh `npm run build` sẽ tạo toàn bộ mã nguồn tĩnh tại thư mục: **`dist/`**.
- Thư mục `dist/` bao gồm `index.html`, thư mục `assets/` (chứa JS/CSS đã minified và chunked), và các tài nguyên từ `public/`.

### Triển khai lên Vercel / Netlify / Cloudflare Pages
1. Kết nối repository Git với nền tảng lưu trữ (Vercel, Netlify hoặc Cloudflare Pages).
2. Thiết lập cấu hình build:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node Version**: 20.x hoặc mới hơn
3. Nhấn Deploy.

### Triển khai lên Nginx / Shared Hosting (cPanel)
1. Chạy `npm run build` trên máy local hoặc CI/CD pipeline.
2. Tải toàn bộ nội dung bên trong thư mục `dist/` lên thư mục gốc website (thường là `public_html/` hoặc `/var/www/html/`).
3. Cấu hình định tuyến Single Page Application (SPA fallback về `index.html`).
   - Ví dụ Nginx:
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

---

## 5. Tích Hợp Tiếp Nhận Hồ Sơ (Backend Form Submission)

Hiện tại, theo nguyên tắc bảo mật và tính xác thực:
- Form đã hoàn thiện toàn diện phần **Giao diện (UI)**, **Kiểm tra hợp lệ tiếng Việt (Validation)**, **Chọn tệp CV (giới hạn 5MB)**.
- Khi ứng viên gửi hồ sơ, hệ thống mở **Hộp thoại Hướng dẫn Tiếp nhận Trực tiếp** để ứng viên gửi thông tin qua:
  - **Zalo Tuyển Dụng chính thức**: https://zalo.me/2642909754794097414
  - **Hotline Tuyển Dụng trực tiếp**: 0989 661 661
  - **Soạn thảo Email trực tiếp** (`mailto:` prefilled).

### Các phương án kết nối Backend được đề xuất cho Product Owner:
1. **Phương án 1 (Khuyến nghị): Serverless Function (Vercel Serverless / Cloudflare Worker / Node.js API)**
   - Nhận `multipart/form-data`, kiểm tra MIME type của file CV và dung lượng.
   - Gửi thông báo ngay lập tức về Email tuyển dụng chính thức của công ty qua SMTP (ví dụ: SendGrid, Resend hoặc Google Workspace SMTP) và gửi webhook thông báo về nhóm Zalo / Telegram nội bộ của HR.
   - Ưu điểm: Chi phí gần như 0đ, bảo mật cao, không lưu trữ dữ liệu nhạy cảm ở dịch vụ thứ ba.
2. **Phương án 2: Tích hợp Google Sheets & Drive API (nội bộ)**
   - Form gửi thông tin vào Google Sheet của HR và lưu file CV vào thư mục Google Drive nội bộ của phòng Tuyển dụng.
   - Ưu điểm: Dễ theo dõi và quản lý bảng ứng viên.
3. **Phương án 3: Kết nối Form Service bên thứ ba (như Formspree, Formkeep)**
   - Cần Product Owner phê duyệt chi phí và điều khoản lưu trữ dữ liệu.
