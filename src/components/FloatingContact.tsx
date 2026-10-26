import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/recruitmentData';

export const FloatingContact: React.FC = () => {
  return (
    <aside className="floating-actions" aria-label="Kênh liên hệ nhanh">
      {/* Hotline Button */}
      <a
        href={`tel:${COMPANY_INFO.hotlineClean}`}
        className="floating-btn floating-btn--phone"
        aria-label={`Gọi hotline tuyển dụng ${COMPANY_INFO.hotline}`}
      >
        <Phone size={22} aria-hidden="true" />
        <span className="floating-tooltip">Gọi Hotline: {COMPANY_INFO.hotline}</span>
      </a>

      {/* Zalo Button */}
      <a
        href={COMPANY_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--zalo"
        aria-label="Nhắn tin qua Zalo tuyển dụng"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span className="floating-tooltip">Chat Zalo Tuyển Dụng</span>
      </a>
    </aside>
  );
};
