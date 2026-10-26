import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/recruitmentData';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    closeMenu();
    onApplyClick();
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a href="#" className="header-logo" aria-label="Địa Ốc Á Châu - Về đầu trang">
            <img src="/logo.png" alt="Logo Địa Ốc Á Châu" width="160" height="48" />
          </a>

          {/* Desktop Navigation */}
          <nav className="header-nav" aria-label="Điều hướng chính">
            <a href="#positions" className="nav-link" onClick={(e) => handleNavClick(e, 'positions')}>
              Vị trí tuyển dụng
            </a>
            <a href="#benefits" className="nav-link" onClick={(e) => handleNavClick(e, 'benefits')}>
              Quyền lợi
            </a>
            <a href="#culture" className="nav-link" onClick={(e) => handleNavClick(e, 'culture')}>
              Môi trường làm việc
            </a>
            <a href="#process" className="nav-link" onClick={(e) => handleNavClick(e, 'process')}>
              Quy trình ứng tuyển
            </a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
              Liên hệ
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={handleCtaClick}
            >
              Ứng tuyển ngay
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Mở menu điều hướng"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-drawer-menu"
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <aside
        id="mobile-drawer-menu"
        className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`}
        aria-label="Menu trên điện thoại"
        role="dialog"
        aria-modal="true"
      >
        <div className="drawer-header">
          <img src="/logo.png" alt="Logo Địa Ốc Á Châu" height="38" />
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Đóng menu"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Menu di động">
          <a href="#positions" className="drawer-link" onClick={(e) => handleNavClick(e, 'positions')}>
            Vị trí tuyển dụng
          </a>
          <a href="#benefits" className="drawer-link" onClick={(e) => handleNavClick(e, 'benefits')}>
            Quyền lợi & Đãi ngộ
          </a>
          <a href="#culture" className="drawer-link" onClick={(e) => handleNavClick(e, 'culture')}>
            Môi trường & Văn hóa
          </a>
          <a href="#process" className="drawer-link" onClick={(e) => handleNavClick(e, 'process')}>
            Quy trình ứng tuyển
          </a>
          <a href="#contact" className="drawer-link" onClick={(e) => handleNavClick(e, 'contact')}>
            Liên hệ tuyển dụng
          </a>
        </nav>

        <div style={{ padding: '0 0.5rem 1rem 0.5rem' }}>
          <button
            type="button"
            className="btn btn--primary btn--full"
            onClick={handleCtaClick}
          >
            Ứng tuyển ngay
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="drawer-contact-info">
          <div className="drawer-contact-item">
            <Phone size={16} color="var(--color-primary)" aria-hidden="true" />
            <span>Hotline: <strong>{COMPANY_INFO.hotline}</strong></span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
            {COMPANY_INFO.workingHours}
          </p>
        </div>
      </aside>
    </>
  );
};
