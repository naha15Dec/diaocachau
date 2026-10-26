import React from 'react';
import { ArrowRight, Briefcase, CheckCircle2, Award, Info } from 'lucide-react';
import { POSITIONS_DATA } from '../data/recruitmentData';
import type { JobPosition } from '../types';

interface PositionsProps {
  onSelectPosition: (positionTitle: JobPosition) => void;
}

export const Positions: React.FC<PositionsProps> = ({ onSelectPosition }) => {
  return (
    <section className="section" id="positions" aria-labelledby="positions-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} aria-hidden="true" />
            <span>Vị Trí Đang Tuyển Dụng</span>
          </div>
          <h2 id="positions-title" className="section-title">
            Khám Phá Cơ Hội Nghề Nghiệp Phù Hợp
          </h2>
          <p className="section-desc">
            Địa Ốc Á Châu đang mở rộng đội ngũ và tìm kiếm những nhân tố nhiệt huyết cùng đồng hành kiến tạo giá trị tại các vị trí then chốt.
          </p>
        </div>

        {/* 3 Positions Grid */}
        <div className="positions-grid">
          {POSITIONS_DATA.map((pos) => (
            <article
              key={pos.id}
              id={`card-${pos.id}`}
              className="position-card"
              aria-labelledby={`pos-title-${pos.id}`}
            >
              <div className="position-header">
                <div className="position-badge-wrap">
                  <span className="position-level">{pos.level}</span>
                  <span className="position-tag">{pos.badge}</span>
                </div>
                <h3 id={`pos-title-${pos.id}`} className="position-title">
                  {pos.title}
                </h3>
                <p className="position-summary">{pos.summary}</p>
              </div>

              <div className="position-body">
                {/* Responsibilities */}
                <div>
                  <h4 className="position-group-title">
                    <Briefcase size={14} color="var(--color-primary)" aria-hidden="true" />
                    Nhiệm vụ chính
                  </h4>
                  <ul className="position-list">
                    {pos.responsibilities.map((resp, idx) => (
                      <li key={idx} className="position-list-item">{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="position-group-title">
                    <CheckCircle2 size={14} color="var(--color-primary)" aria-hidden="true" />
                    Yêu cầu ứng viên
                  </h4>
                  <ul className="position-list">
                    {pos.requirements.map((req, idx) => (
                      <li key={idx} className="position-list-item">{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="position-group-title">
                    <Award size={14} color="var(--color-accent-gold-dark)" aria-hidden="true" />
                    Quyền lợi vị trí
                  </h4>
                  <ul className="position-list">
                    {pos.benefits.map((ben, idx) => (
                      <li key={idx} className="position-list-item">{ben}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="position-footer">
                <button
                  type="button"
                  className="btn btn--secondary btn--full"
                  onClick={() => onSelectPosition(pos.title)}
                  aria-label={`Ứng tuyển vị trí ${pos.title}`}
                >
                  Ứng tuyển vị trí này
                  <ArrowRight size={16} aria-hidden="true" />
                </button>

                <p className="position-note">
                  {pos.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Note Notice */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1rem 1.25rem',
          backgroundColor: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-text-muted)'
        }}>
          <Info size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} aria-hidden="true" />
          <span>
            <strong>Lưu ý từ Ban Tuyển dụng:</strong> Bản mô tả trên thể hiện bản chất trách nhiệm và năng lực thông thường của từng vị trí. Chỉ tiêu KPI, mức thu nhập cụ thể và chế độ đãi ngộ chi tiết sẽ được thảo luận công khai, minh bạch tại buổi phỏng vấn trực tiếp.
          </span>
        </div>
      </div>
    </section>
  );
};
