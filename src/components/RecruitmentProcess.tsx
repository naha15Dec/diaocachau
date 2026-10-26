import React from 'react';
import { Route, Info } from 'lucide-react';
import { RECRUITMENT_PROCESS } from '../data/recruitmentData';

export const RecruitmentProcess: React.FC = () => {
  return (
    <section className="section section--alt" id="process" aria-labelledby="process-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Route size={14} aria-hidden="true" />
            <span>Lộ Trình Tuyển Dụng</span>
          </div>
          <h2 id="process-title" className="section-title">
            Quy Trình Ứng Tuyển Tinh Gọn
          </h2>
          <p className="section-desc">
            Chúng tôi tối ưu hóa các bước tiếp nhận và phản hồi nhanh chóng, tôn trọng thời gian của ứng viên.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="process-grid">
          {RECRUITMENT_PROCESS.map((step) => (
            <div key={step.step} className="process-card">
              <div className="process-step-number" aria-hidden="true">
                {step.step}
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
              <div className="process-details">
                {step.details}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div style={{
          marginTop: '2.5rem',
          textAlign: 'center',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <Info size={15} color="var(--color-primary)" aria-hidden="true" />
          <span>
            * Lưu ý: Quy trình trên có thể được điều chỉnh linh hoạt theo từng vị trí và sự sắp xếp thời gian của ứng viên.
          </span>
        </div>
      </div>
    </section>
  );
};
