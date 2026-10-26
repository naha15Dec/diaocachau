import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/recruitmentData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div className="modal-header">
          <div className="modal-icon-wrap" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary-dark)' }}>
            <ShieldCheck size={26} aria-hidden="true" />
          </div>
          <div>
            <h3 id="privacy-modal-title" className="modal-title">
              Chính Sách Bảo Mật Dữ Liệu Ứng Viên
            </h3>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
              {COMPANY_INFO.name}
            </span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            style={{ marginLeft: 'auto' }}
            onClick={onClose}
            aria-label="Đóng chính sách bảo mật"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: 'var(--font-size-sm)' }}>
          <p>
            <strong>1. Mục đích thu thập thông tin:</strong><br />
            Thông tin cá nhân (Họ tên, Số điện thoại, Email, Kinh nghiệm làm việc và CV đính kèm) do ứng viên cung cấp chỉ được sử dụng duy nhất cho mục đích xem xét mức độ phù hợp với các vị trí tuyển dụng tại {COMPANY_INFO.name} và liên hệ đặt lịch phỏng vấn.
          </p>

          <p>
            <strong>2. Phạm vi sử dụng thông tin:</strong><br />
            Chỉ những nhân sự có thẩm quyền trong Ban Tuyển dụng và Ban Lãnh đạo phụ trách khối kinh doanh của công ty mới được quyền tiếp cận hồ sơ của ứng viên.
          </p>

          <p>
            <strong>3. Cam kết không chia sẻ bên thứ ba:</strong><br />
            {COMPANY_INFO.name} cam kết không bán, chia sẻ hoặc cung cấp thông tin cá nhân của ứng viên cho bất kỳ bên thứ ba nào vì mục đích thương mại hay quảng cáo.
          </p>

          <p>
            <strong>4. Thời gian lưu trữ & Quyền của ứng viên:</strong><br />
            Hồ sơ được lưu trữ phục vụ cho các đợt tuyển dụng phù hợp. Ứng viên có toàn quyền yêu cầu chỉnh sửa, cập nhật hoặc xóa thông tin của mình khỏi danh sách liên hệ bằng cách gọi điện trực tiếp đến Hotline Tuyển dụng: <strong>{COMPANY_INFO.hotline}</strong>.
          </p>
        </div>

        <div style={{ textAlign: 'right', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
          <button
            type="button"
            className="btn btn--secondary btn--sm"
            onClick={onClose}
          >
            Tôi đã hiểu và đóng
          </button>
        </div>
      </div>
    </div>
  );
};
