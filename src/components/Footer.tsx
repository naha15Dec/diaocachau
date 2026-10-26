import React from 'react';
import { Phone, MessageCircle, Globe, MapPin, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/recruitmentData';

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand info */}
          <div className="footer-brand">
            <img
              src="/logo-footer.png"
              alt="Logo Địa Ốc Á Châu - Nền tối"
              className="footer-logo"
              width="150"
              height="48"
            />
            <div className="footer-company-name">
              {COMPANY_INFO.name}
            </div>
            <p className="footer-desc">
              Doanh nghiệp hàng đầu chuyên phân phối và phát triển các dự án bất động sản chất lượng tại Bình Dương và khu vực phía Nam. Môi trường làm việc chuyên nghiệp, cơ hội bứt phá thu nhập và thăng tiến bền vững.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer-heading">Khám Phá Cơ Hội</div>
            <ul className="footer-links">
              <li>
                <a href="#positions" className="footer-link" onClick={(e) => handleNavClick(e, 'positions')}>
                  Chuyên viên kinh doanh
                </a>
              </li>
              <li>
                <a href="#positions" className="footer-link" onClick={(e) => handleNavClick(e, 'positions')}>
                  Phó phòng kinh doanh
                </a>
              </li>
              <li>
                <a href="#positions" className="footer-link" onClick={(e) => handleNavClick(e, 'positions')}>
                  Trưởng phòng kinh doanh
                </a>
              </li>
              <li>
                <a href="#benefits" className="footer-link" onClick={(e) => handleNavClick(e, 'benefits')}>
                  Chính sách quyền lợi
                </a>
              </li>
              <li>
                <a href="#culture" className="footer-link" onClick={(e) => handleNavClick(e, 'culture')}>
                  Môi trường làm việc
                </a>
              </li>
              <li>
                <a href="#process" className="footer-link" onClick={(e) => handleNavClick(e, 'process')}>
                  Quy trình tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="footer-heading">Thông Tin Tuyển Dụng</div>
            <div className="footer-contact-item">
              <Phone size={18} aria-hidden="true" />
              <span>
                Hotline: <a href={`tel:${COMPANY_INFO.hotlineClean}`} style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{COMPANY_INFO.hotline}</a>
              </span>
            </div>

            <div className="footer-contact-item">
              <MessageCircle size={18} aria-hidden="true" />
              <span>
                Zalo: <a href={COMPANY_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-gold)' }}>Nhắn tin tuyển dụng</a>
              </span>
            </div>

            <div className="footer-contact-item">
              <Globe size={18} aria-hidden="true" />
              <span>
                Website: <a href={COMPANY_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>diaocachau.com.vn</a>
              </span>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} aria-hidden="true" />
              <span>
                Trụ sở: {COMPANY_INFO.headquarters}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2017–2026 {COMPANY_INFO.name}. Tất cả các quyền được bảo lưu.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              type="button"
              className="footer-link"
              onClick={onOpenPrivacyModal}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Shield size={14} aria-hidden="true" />
              Chính sách bảo mật hồ sơ
            </button>
            <a
              href={COMPANY_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Trang chủ doanh nghiệp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
