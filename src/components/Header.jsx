import React from 'react';

const Header = ({ aspectRatio, setAspectRatio, customContent, setCustomContent, searchTerm, setSearchTerm }) => {
  return (
    <header>
      <h1>Nano Banana 繪圖風格提示詞庫</h1>

      <div className="controls">
        <div className="color-picker-wrapper select-wrapper">
          <label htmlFor="aspectRatio">比例</label>
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
          <label htmlFor="customContent">Content</label>
          <input
            type="text"
            id="customContent"
            placeholder="自訂提示詞..."
            value={customContent}
            onChange={(e) => setCustomContent(e.target.value)}
            style={{ border: 'none', background: 'none', outline: 'none', font: 'inherit', color: 'inherit', width: '120px' }}
          />
        </div>

        <div className="color-picker-wrapper">
          <label htmlFor="searchTerm">Search</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="搜尋..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: 'none', background: 'none', outline: 'none', font: 'inherit', color: 'inherit', width: '120px' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
