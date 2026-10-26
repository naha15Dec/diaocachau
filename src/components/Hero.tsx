import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/recruitmentData';

interface HeroProps {
  onApplyClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onExploreClick }) => {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="section-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>Cơ hội nghề nghiệp 2026 • Bình Dương & TP.HCM</span>
            </div>

            <h1 id="hero-title" className="hero-headline">
              GIA NHẬP ĐỘI NGŨ <br />
              <span className="hero-headline-highlight">KIẾN TẠO TƯƠNG LAI</span>
            </h1>

            <p className="hero-subhead">
              Khám phá cơ hội nghề nghiệp trong lĩnh vực bất động sản cùng <strong>{COMPANY_INFO.name}</strong>. Môi trường làm việc năng động, chính sách thu nhập cạnh tranh, đào tạo thực chiến và lộ trình thăng tiến rõ ràng cho từng cá nhân.
            </p>

            <div className="hero-ctas">
              <button
                type="button"
                className="btn btn--primary"
                onClick={onApplyClick}
              >
                Ứng tuyển ngay
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="btn btn--outline"
                onClick={onExploreClick}
              >
                <Compass size={18} aria-hidden="true" />
                Khám phá vị trí
              </button>
            </div>

            {/* Credible Highlights & Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">2017</span>
                <span className="stat-label">Năm thành lập với nền tảng phát triển bền vững</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">A–Z</span>
                <span className="stat-label">Chương trình đào tạo thực chiến từ cơ bản</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Sản phẩm pháp lý minh bạch, sổ sẵn trao tay</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/images/hall-event.png"
                alt="Đội ngũ nhân sự và chương trình hội thảo tại Địa Ốc Á Châu"
                width="640"
                height="480"
                loading="eager"
              />
              <div className="hero-floating-badge">
                <div className="hero-badge-icon">
                  <ShieldCheck size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="hero-badge-title">Thương Hiệu Tuyển Dụng Uy Tín</div>
                  <div className="hero-badge-sub">Đồng hành xây dựng sự nghiệp bất động sản vững bền</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
