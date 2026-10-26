import React from 'react';
import {
  Gift,
  BadgePercent,
  GraduationCap,
  Megaphone,
  Building2,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import { BENEFITS_DATA } from '../data/recruitmentData';

export const Benefits: React.FC = () => {
  // Map icon names to Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BadgePercent':
        return <BadgePercent size={28} aria-hidden="true" />;
      case 'GraduationCap':
        return <GraduationCap size={28} aria-hidden="true" />;
      case 'Megaphone':
        return <Megaphone size={28} aria-hidden="true" />;
      case 'Building2':
        return <Building2 size={28} aria-hidden="true" />;
      case 'TrendingUp':
        return <TrendingUp size={28} aria-hidden="true" />;
      case 'HeartHandshake':
        return <HeartHandshake size={28} aria-hidden="true" />;
      default:
        return <Gift size={28} aria-hidden="true" />;
    }
  };

  return (
    <section className="section section--alt" id="benefits" aria-labelledby="benefits-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Gift size={14} aria-hidden="true" />
            <span>Chính Sách & Đãi Ngộ</span>
          </div>
          <h2 id="benefits-title" className="section-title">
            Quyền Lợi Toàn Diện Khi Gia Nhập Á Châu
          </h2>
          <p className="section-desc">
            Chúng tôi tin rằng con người là yếu tố then chốt tạo nên thành công. Tại Địa Ốc Á Châu, mọi nỗ lực và cống hiến của bạn đều được ghi nhận bằng chính sách đãi ngộ xứng đáng.
          </p>
        </div>

        {/* Benefits 6 Grid */}
        <div className="benefits-grid">
          {BENEFITS_DATA.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon-wrapper">
                {renderIcon(benefit.iconName)}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
              {benefit.highlight && (
                <div className="benefit-highlight">
                  <span>✓</span>
                  <span>{benefit.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
