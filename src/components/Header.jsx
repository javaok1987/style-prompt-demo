import React, { useState, useEffect, useCallback } from 'react';

const Header = ({ aspectRatio, setAspectRatio, customContent, setCustomContent, extraContent, setExtraContent, searchTerm, setSearchTerm }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsCollapsed(false);
      return;
    }

    let lastScrollY = window.scrollY;
    const THRESHOLD = 10;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (diff > THRESHOLD) {
        setIsCollapsed(true);
      } else if (diff < -THRESHOLD) {
        setIsCollapsed(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleHeaderClick = useCallback(() => {
    if (isMobile && isCollapsed) {
      setIsCollapsed(false);
    }
  }, [isMobile, isCollapsed]);

  return (
    <header
      className={isMobile && isCollapsed ? 'header-collapsed' : ''}
      onClick={handleHeaderClick}
    >
      <h1>
        Nano Banana 繪圖風格提示詞庫
        {isMobile && isCollapsed && <span className="expand-hint">▼ 點擊展開</span>}
      </h1>

      <div className="controls">
        <div className="color-picker-wrapper select-wrapper">
          <label htmlFor="aspectRatio" style={{ whiteSpace: 'nowrap' }}>圖片比例</label>
          <select
            id="aspectRatio"
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
          >
            <option value="Aspect ratio: 16:9 horizontal">16:9 橫向</option>
            <option value="Aspect ratio: 9:16 vertical">9:16 直向</option>
            <option value="Aspect ratio: 1:1 square">1:1 方形</option>
            <option value="Aspect ratio: 4:3 horizontal">4:3 橫向</option>
            <option value="Aspect ratio: 3:4 vertical">3:4 直向</option>
            <option value="Aspect ratio: 21:9 ultrawide">21:9 超寬</option>
          </select>
        </div>

        <div className="color-picker-wrapper">
          <label htmlFor="searchTerm" style={{ whiteSpace: 'nowrap' }}>搜尋</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="提示詞、標籤、內容"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="transparent-input"
          />
          {searchTerm && (
            <button
              className="clear-btn"
              onClick={() => setSearchTerm('')}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="color-picker-wrapper">
          <label htmlFor="customContent" style={{ whiteSpace: 'nowrap' }}>主題</label>
          <input
            type="text"
            id="customContent"
            placeholder="自訂提示詞"
            value={customContent}
            onChange={(e) => setCustomContent(e.target.value)}
            className="transparent-input"
          />
          {customContent && (
            <button
              className="clear-btn"
              onClick={() => setCustomContent('')}
              title="Clear content"
            >
              ×
            </button>
          )}
        </div>

        <div className="color-picker-wrapper">
          <label htmlFor="extraContent" style={{ whiteSpace: 'nowrap' }}>內容</label>
          <input
            type="text"
            id="extraContent"
            placeholder="額外提示詞（加在風格與參數中間）"
            value={extraContent}
            onChange={(e) => setExtraContent(e.target.value)}
            className="transparent-input"
          />
          {extraContent && (
            <button
              className="clear-btn"
              onClick={() => setExtraContent('')}
              title="Clear extra content"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
