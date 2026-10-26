import React, { useState, useRef } from 'react';
import {
  Send,
  Upload,
  FileCheck,
  AlertCircle,
  Phone,
  MessageCircle,
  Mail,
  X,
  CheckCircle,
  HelpCircle,
  Loader2
} from 'lucide-react';
import type { JobPosition, FormValidationErrors } from '../types';
import { COMPANY_INFO } from '../data/recruitmentData';

interface ApplicationFormProps {
  selectedPosition: JobPosition;
  onPositionChange: (pos: JobPosition) => void;
  onOpenPrivacyModal: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  selectedPosition,
  onPositionChange,
  onOpenPrivacyModal
}) => {
  const [formData, setFormData] = useState<{
    fullName: string;
    phone: string;
    email: string;
    experience: string;
    message: string;
    cvFile: File | null;
    agreedToPolicy: boolean;
  }>({
    fullName: '',
    phone: '',
    email: '',
    experience: 'Chưa có kinh nghiệm',
    message: '',
    cvFile: null,
    agreedToPolicy: false
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmissionDialog, setShowSubmissionDialog] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: FormValidationErrors = {};

    // Full name: at least 2 words
    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      newErrors.fullName = 'Vui lòng nhập họ và tên của bạn';
    } else if (trimmedName.split(/\s+/).length < 2) {
      newErrors.fullName = 'Vui lòng nhập đầy đủ cả họ và tên';
    }

    // Phone: Vietnam 10 digits
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    const cleanPhone = formData.phone.replace(/[\s.-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Vui lòng nhập số điện thoại liên hệ';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ (Ví dụ: 0989661661)';
    }

    // Email: basic valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Email không đúng định dạng (Ví dụ: hoten@gmail.com)';
    }

    // Position
    if (!selectedPosition) {
      newErrors.position = 'Vui lòng chọn vị trí muốn ứng tuyển';
    }

    // Agreed to policy
    if (!formData.agreedToPolicy) {
      newErrors.agreedToPolicy = 'Vui lòng xác nhận đồng ý với chính sách bảo mật thông tin';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors[name as keyof FormValidationErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === 'position') {
        onPositionChange(value as JobPosition);
      }
      if (errors[name as keyof FormValidationErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type) && !/\.(pdf|doc|docx)$/i.test(file.name)) {
        setErrors((prev) => ({
          ...prev,
          cvFile: 'Chỉ chấp nhận file định dạng PDF, DOC hoặc DOCX'
        }));
        return;
      }

      if (file.size > maxSize) {
        setErrors((prev) => ({
          ...prev,
          cvFile: 'Dung lượng file tối đa là 5MB'
        }));
        return;
      }

      setFormData((prev) => ({ ...prev, cvFile: file }));
      setErrors((prev) => ({ ...prev, cvFile: undefined }));
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, cvFile: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Focus on first invalid field
      const firstErrorKey = Object.keys(errors)[0];
      const elem = document.querySelector(`[name="${firstErrorKey}"]`) as HTMLElement;
      if (elem) elem.focus();
      return;
    }

    setIsSubmitting(true);
    // Simulate validation & preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSubmissionDialog(true);
    }, 600);
  };

  // Generate mailto link for applicants
  const generateMailto = () => {
    const subject = encodeURIComponent(`Ứng tuyển ${selectedPosition} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Kính gửi Ban Tuyển dụng Địa Ốc Á Châu,\n\n` +
      `Tôi xin gửi thông tin ứng tuyển vào vị trí ${selectedPosition}:\n` +
      `- Họ và tên: ${formData.fullName}\n` +
      `- Số điện thoại: ${formData.phone}\n` +
      `- Email: ${formData.email}\n` +
      `- Kinh nghiệm: ${formData.experience}\n` +
      `- Lời nhắn: ${formData.message || 'Không có'}\n\n` +
      `(Tôi đã đính kèm CV chi tiết trong email này)\n\n` +
      `Trân trọng cảm ơn!`
    );
    return `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section apply-section" id="apply" aria-labelledby="apply-title">
      <div className="container apply-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Send size={14} aria-hidden="true" />
            <span>Đăng Ký Trực Tuyến</span>
          </div>
          <h2 id="apply-title" className="section-title">
            Gửi Thông Tin Ứng Tuyển
          </h2>
          <p className="section-desc">
            Điền thông tin bên dưới để kết nối nhanh chóng cùng Bộ phận Tuyển dụng Địa Ốc Á Châu. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>
        </div>

        {/* Form Card */}
        <div className="form-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              {/* Họ và tên */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Họ và tên <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Số điện thoại */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Số điện thoại <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? 'has-error' : ''}`}
                  placeholder="Ví dụ: 0989 661 661"
                  value={formData.phone}
                  onChange={handleInputChange}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Địa chỉ Email <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-input ${errors.email ? 'has-error' : ''}`}
                  placeholder="Ví dụ: nguyenvanan@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Vị trí ứng tuyển */}
              <div className="form-group">
                <label htmlFor="position" className="form-label">
                  Vị trí ứng tuyển <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  className={`form-select ${errors.position ? 'has-error' : ''}`}
                  value={selectedPosition}
                  onChange={(e) => {
                    onPositionChange(e.target.value as JobPosition);
                    if (errors.position) {
                      setErrors((prev) => ({ ...prev, position: undefined }));
                    }
                  }}
                  aria-required="true"
                >
                  <option value="Chuyên viên kinh doanh">Chuyên viên kinh doanh</option>
                  <option value="Phó phòng kinh doanh">Phó phòng kinh doanh</option>
                  <option value="Trưởng phòng kinh doanh">Trưởng phòng kinh doanh</option>
                </select>
                {errors.position && (
                  <p className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.position}
                  </p>
                )}
              </div>

              {/* Kinh nghiệm */}
              <div className="form-group form-group--full">
                <label htmlFor="experience" className="form-label">
                  Kinh nghiệm làm việc
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="form-select"
                  value={formData.experience}
                  onChange={handleInputChange}
                >
                  <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm (Được đào tạo từ A-Z)</option>
                  <option value="Dưới 1 năm">Dưới 1 năm kinh nghiệm BĐS / Bán hàng</option>
                  <option value="1 - 3 năm">Từ 1 – 3 năm kinh nghiệm trong ngành</option>
                  <option value="Trên 3 năm">Trên 3 năm kinh nghiệm / Đã có kinh nghiệm quản lý</option>
                </select>
              </div>

              {/* File upload CV */}
              <div className="form-group form-group--full">
                <label className="form-label">
                  Đính kèm CV / Hồ sơ năng lực (Tùy chọn)
                </label>
                
                {!formData.cvFile ? (
                  <label htmlFor="cvUpload" className="file-upload-box">
                    <input
                      id="cvUpload"
                      ref={fileInputRef}
                      type="file"
                      className="file-upload-input"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange}
                    />
                    <Upload size={28} className="file-upload-icon" aria-hidden="true" />
                    <span className="file-upload-text">Nhấp để tải lên tệp CV hoặc kéo thả vào đây</span>
                    <span className="file-upload-hint">Định dạng hỗ trợ: PDF, DOC, DOCX (Dung lượng tối đa 5MB)</span>
                  </label>
                ) : (
                  <div className="file-selected-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FileCheck size={20} color="var(--color-primary)" aria-hidden="true" />
                      <span><strong>{formData.cvFile.name}</strong> ({(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </div>
                    <button
                      type="button"
                      className="file-remove-btn"
                      onClick={handleRemoveFile}
                    >
                      Xóa tệp
                    </button>
                  </div>
                )}

                {errors.cvFile && (
                  <p className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.cvFile}
                  </p>
                )}
              </div>

              {/* Lời nhắn */}
              <div className="form-group form-group--full">
                <label htmlFor="message" className="form-label">
                  Giới thiệu thêm hoặc nguyện vọng (Tùy chọn)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="form-textarea"
                  placeholder="Ghi chú thêm về thời gian có thể phỏng vấn hoặc nguyện vọng làm việc của bạn..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              {/* Chính sách bảo mật */}
              <div className="form-group form-group--full">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <input
                    id="agreedToPolicy"
                    type="checkbox"
                    name="agreedToPolicy"
                    className="checkbox-input"
                    checked={formData.agreedToPolicy}
                    onChange={handleInputChange}
                    aria-required="true"
                  />
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', lineHeight: '1.45' }}>
                    <label htmlFor="agreedToPolicy" style={{ cursor: 'pointer' }}>
                      Tôi cam kết thông tin cung cấp là chính xác và đồng ý để Bộ phận Tuyển dụng Địa Ốc Á Châu liên hệ phục vụ mục đích phỏng vấn.
                    </label>
                    {' '}
                    <button
                      type="button"
                      className="checkbox-link"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenPrivacyModal();
                      }}
                      style={{
                        border: 'none',
                        background: 'none',
                        padding: 0,
                        font: 'inherit',
                        display: 'inline',
                        cursor: 'pointer',
                        color: 'var(--color-primary)'
                      }}
                    >
                      (Xem chính sách bảo mật)
                    </button>
                  </div>
                </div>
                {errors.agreedToPolicy && (
                  <p className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.agreedToPolicy}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-submit-row">
              <button
                type="submit"
                className="btn btn--primary btn--full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin-animation" aria-hidden="true" />
                    Đang xử lý thông tin...
                  </>
                ) : (
                  <>
                    Gửi Thông Tin Ứng Tuyển
                    <Send size={18} aria-hidden="true" />
                  </>
                )}
              </button>

              <div className="direct-contact-hint">
                <span>Hoặc ứng tuyển nhanh trực tiếp qua:</span>
                <a
                  href={`tel:${COMPANY_INFO.hotlineClean}`}
                  className="direct-contact-link"
                  aria-label={`Gọi hotline tuyển dụng ${COMPANY_INFO.hotline}`}
                >
                  <Phone size={14} aria-hidden="true" />
                  Hotline {COMPANY_INFO.hotline}
                </a>
                <span>•</span>
                <a
                  href={COMPANY_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-contact-link"
                  aria-label="Nhắn tin qua Zalo tuyển dụng"
                >
                  <MessageCircle size={14} aria-hidden="true" />
                  Zalo Tuyển dụng
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Submission Guidance Modal (Transparent & Honest State) */}
      {showSubmissionDialog && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-status-title"
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-icon-wrap">
                <CheckCircle size={26} color="var(--color-primary)" aria-hidden="true" />
              </div>
              <div>
                <h3 id="modal-status-title" className="modal-title">
                  Thông Tin Ứng Tuyển Đã Sẵn Sàng
                </h3>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-primary-dark)', fontWeight: 'bold' }}>
                  Ứng viên: {formData.fullName} • Vị trí: {selectedPosition}
                </span>
              </div>
              <button
                type="button"
                className="drawer-close-btn"
                style={{ marginLeft: 'auto' }}
                onClick={() => setShowSubmissionDialog(false)}
                aria-label="Đóng thông báo"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="modal-body">
              <p>
                Cảm ơn bạn đã quan tâm đến cơ hội nghề nghiệp tại <strong>Địa Ốc Á Châu</strong>!
              </p>

              <div className="modal-callout">
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <HelpCircle size={16} color="var(--color-primary-dark)" style={{ flexShrink: 0 }} aria-hidden="true" />
                  <strong>Phương thức tiếp nhận trực tiếp:</strong>
                </div>
                Để hồ sơ của bạn được chuyên viên nhân sự tiếp nhận và ưu tiên xếp lịch phỏng vấn sớm nhất, xin vui lòng gửi thông tin hoặc file CV trực tiếp qua kênh Zalo Tuyển dụng hoặc gọi Hotline:
              </div>

              <div className="modal-actions">
                <a
                  href={COMPANY_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary btn--full"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Mở Zalo Tuyển Dụng Ngay (Ưu tiên)
                </a>

                <div className="modal-action-row">
                  <a
                    href={`tel:${COMPANY_INFO.hotlineClean}`}
                    className="btn btn--outline"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Gọi Hotline: {COMPANY_INFO.hotline}
                  </a>

                  <a
                    href={generateMailto()}
                    className="btn btn--outline"
                  >
                    <Mail size={16} aria-hidden="true" />
                    Tạo Thư Email
                  </a>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button
                type="button"
                className="btn btn--sm"
                style={{ color: 'var(--color-text-muted)' }}
                onClick={() => setShowSubmissionDialog(false)}
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
