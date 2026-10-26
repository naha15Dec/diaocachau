import React from 'react';
import { Users, Target, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WorkEnvironment: React.FC = () => {
  return (
    <section className="section" id="culture" aria-labelledby="culture-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} aria-hidden="true" />
            <span>Môi Trường & Văn Hóa</span>
          </div>
          <h2 id="culture-title" className="section-title">
            Nơi Đam Mê Được Tiếp Sức, Năng Lực Được Tỏa Sáng
          </h2>
          <p className="section-desc">
            Không khí làm việc sôi nổi, tinh thần đồng đội gắn kết và văn hóa sẻ chia kinh nghiệm là bệ phóng giúp mỗi nhân sự tại Địa Ốc Á Châu tự tin bứt phá.
          </p>
        </div>

        {/* Real Photos Grid */}
        <div className="culture-grid">
          {/* Main Large Item: Hall Event */}
          <div className="culture-item culture-item--large">
            <img
              src="/images/hall-event.png"
              alt="Hội trường đào tạo và chương trình gặp gỡ tại Địa Ốc Á Châu"
              loading="lazy"
            />
            <div className="culture-caption">
              <div className="culture-caption-title">Chương Trình Gặp Gỡ & Đào Tạo Định Hướng</div>
              <div className="culture-caption-desc">Không khí nhiệt huyết của đội ngũ trẻ trong các sự kiện khởi nghiệp và đào tạo hội nhập</div>
            </div>
          </div>

          {/* Small Item: Awards */}
          <div className="culture-item culture-item--small">
            <img
              src="/images/awards-sales.jpg"
              alt="Vinh danh học viên xuất sắc trong khóa đào tạo thực chiến"
              loading="lazy"
            />
            <div className="culture-caption">
              <div className="culture-caption-title">Ghi Nhận & Tôn Vinh Thành Tích</div>
              <div className="culture-caption-desc">Khen thưởng kịp thời những cá nhân có thành tích xuất sắc</div>
            </div>
          </div>

          {/* Half Item: Training Certificate */}
          <div className="culture-item culture-item--half">
            <img
              src="/images/training-sales.jpg"
              alt="Ban Lãnh đạo trao giải học viên hoàn thành khóa đào tạo trực tuyến"
              loading="lazy"
            />
            <div className="culture-caption">
              <div className="culture-caption-title">Đào Tạo Chuyên Sâu Cùng Lãnh Đạo</div>
              <div className="culture-caption-desc">Được truyền đạt kinh nghiệm trực tiếp từ Ban Lãnh đạo và chuyên gia đầu ngành</div>
            </div>
          </div>

          {/* Half Item: Partnership */}
          <div className="culture-item culture-item--half">
            <img
              src="/images/office-team.jpg"
              alt="Lễ ký kết thỏa thuận hợp tác đào tạo nguồn nhân lực chất lượng cao"
              loading="lazy"
            />
            <div className="culture-caption">
              <div className="culture-caption-title">Hợp Tác Phát Triển Nguồn Nhân Lực</div>
              <div className="culture-caption-desc">Hợp tác bền vững với các trường Đại học lớn nhằm nâng cao chất lượng nhân tài</div>
            </div>
          </div>
        </div>

        {/* 4 Core Cultural Values */}
        <div className="core-values">
          <div className="value-card">
            <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
              <HeartHandshake size={32} aria-hidden="true" />
            </div>
            <h3 className="value-card-title">Tận Tâm</h3>
            <p className="value-card-desc">Đặt sự chân thành và trách nhiệm lên hàng đầu trong quan hệ với khách hàng và đồng nghiệp.</p>
          </div>

          <div className="value-card">
            <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
              <Target size={32} aria-hidden="true" />
            </div>
            <h3 className="value-card-title">Chuyên Nghiệp</h3>
            <p className="value-card-desc">Chuẩn mực trong tác phong, sâu sắc về kiến thức pháp lý và kỷ luật trong hành động.</p>
          </div>

          <div className="value-card">
            <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
              <Users size={32} aria-hidden="true" />
            </div>
            <h3 className="value-card-title">Chia Sẻ</h3>
            <p className="value-card-desc">Đồng hành kèm cặp người mới, cùng chia sẻ kinh nghiệm thực tế để cả tập thể cùng lớn mạnh.</p>
          </div>

          <div className="value-card">
            <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
              <ShieldCheck size={32} aria-hidden="true" />
            </div>
            <h3 className="value-card-title">Bền Vững</h3>
            <p className="value-card-desc">Phát triển sự nghiệp dựa trên giá trị thật, sản phẩm minh bạch và niềm tin lâu dài.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
