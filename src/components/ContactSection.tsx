import React from 'react';
import { Phone, MessageCircle, Globe, MapPin, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/recruitmentData';

export const ContactSection: React.FC = () => {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Phone size={14} aria-hidden="true" />
            <span>Kết Nối Trực Tiếp</span>
          </div>
          <h2 id="contact-title" className="section-title">
            Liên Hệ Bộ Phận Tuyển Dụng
          </h2>
          <p className="section-desc">
            Bạn có câu hỏi về các vị trí tuyển dụng hoặc môi trường làm việc? Đội ngũ tuyển dụng Địa Ốc Á Châu luôn sẵn sàng lắng nghe và giải đáp.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left: Channels & Locations */}
          <div className="contact-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--color-text-main)' }}>
              Kênh Tiếp Nhận Chính Thức
            </h3>

            <div className="contact-channels">
              {/* Hotline */}
              <a
                href={`tel:${COMPANY_INFO.hotlineClean}`}
                className="channel-box"
                aria-label={`Gọi điện thoại đến hotline tuyển dụng ${COMPANY_INFO.hotline}`}
              >
                <div className="channel-icon">
                  <Phone size={22} color="var(--color-primary)" aria-hidden="true" />
                </div>
                <div>
                  <div className="channel-title">Hotline Tuyển Dụng</div>
                  <div className="channel-val">{COMPANY_INFO.hotline}</div>
                </div>
              </a>

              {/* Zalo */}
              <a
                href={COMPANY_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-box"
                aria-label="Nhắn tin qua Zalo tuyển dụng Địa Ốc Á Châu"
              >
                <div className="channel-icon">
                  <MessageCircle size={22} color="#0068FF" aria-hidden="true" />
                </div>
                <div>
                  <div className="channel-title">Zalo Tuyển Dụng</div>
                  <div className="channel-val">Nhắn tin Zalo</div>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-box"
                aria-label="Truy cập Fanpage Facebook Địa Ốc Á Châu"
              >
                <div className="channel-icon">
                  <ExternalLink size={22} color="#1877F2" aria-hidden="true" />
                </div>
                <div>
                  <div className="channel-title">Fanpage Facebook</div>
                  <div className="channel-val">fb.com/diaocachau</div>
                </div>
              </a>

              {/* Website */}
              <a
                href={COMPANY_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-box"
                aria-label="Truy cập website chính thức diaocachau.com.vn"
              >
                <div className="channel-icon">
                  <Globe size={22} color="var(--color-primary-dark)" aria-hidden="true" />
                </div>
                <div>
                  <div className="channel-title">Website Doanh Nghiệp</div>
                  <div className="channel-val">diaocachau.com.vn</div>
                </div>
              </a>
            </div>

            {/* Locations */}
            <div className="locations-box">
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                Địa Điểm Làm Việc & Tiếp Nhận Hồ Sơ
              </h4>

              <div className="location-item">
                <MapPin size={20} className="location-icon" aria-hidden="true" />
                <div>
                  <div className="location-name">Trụ sở chính</div>
                  <div className="location-addr">{COMPANY_INFO.headquarters}</div>
                </div>
              </div>

              <div className="location-item">
                <MapPin size={20} className="location-icon" aria-hidden="true" />
                <div>
                  <div className="location-name">Chi nhánh</div>
                  <div className="location-addr">{COMPANY_INFO.branchOffice}</div>
                </div>
              </div>

              <div className="location-item" style={{ marginBottom: 0 }}>
                <Clock size={20} className="location-icon" aria-hidden="true" />
                <div>
                  <div className="location-name">Thời gian làm việc</div>
                  <div className="location-addr">{COMPANY_INFO.workingHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Action Banner */}
          <div className="quick-call-card">
            <div>
              <span className="section-badge section-badge--dark">
                Trực tiếp 24/7
              </span>
              <h3 className="quick-call-title">
                Sẵn Sàng Cho Bước Ngoặt Sự Nghiệp?
              </h3>
              <p className="quick-call-desc">
                Đừng ngần ngại gọi trực tiếp hoặc gửi tin nhắn để được tư vấn cụ thể về quyền lợi, dự án đang phân phối và lịch phỏng vấn gần nhất.
              </p>

              <div className="hotline-highlight-box">
                <span style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.85 }}>
                  Hotline Tuyển Dụng Trực Tiếp
                </span>
                <a
                  href={`tel:${COMPANY_INFO.hotlineClean}`}
                  className="hotline-number"
                  aria-label={`Gọi ngay số hotline ${COMPANY_INFO.hotline}`}
                >
                  {COMPANY_INFO.hotline}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={COMPANY_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--full"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Kết nối Zalo Tuyển Dụng
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-light btn--full"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Xem Fanpage Địa Ốc Á Châu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
