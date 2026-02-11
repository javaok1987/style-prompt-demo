import React, { useState } from 'react';
import { shortPromptsData } from '../data/shortPromptsData';

const ShortPrompts = ({ onCopy }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="short-prompts-container">
      <div className="short-prompts-header">
        <div className="short-prompts-header-title" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
          <h2 className="short-prompts-title">指令式短提示詞</h2>
          <div className={`toggle-switch ${isOpen ? 'active' : ''}`}>
            <div className="toggle-knob"></div>
          </div>
        </div>
        <p className="short-prompts-subtitle">點擊按鈕即可複製對應的英文指令</p>
      </div>
      <div className={`short-prompts-grid ${isOpen ? 'expanded' : 'collapsed'}`}>
        {shortPromptsData.map((group) => (
          <div key={group.category} className="short-prompts-group">
            <h3 className="short-prompts-group-title">
              <span>{group.icon}</span>
              <span>{group.category}</span>
            </h3>
            <div className="short-prompts-buttons">
              {group.prompts.map((item) => (
                <button
                  key={item.label}
                  className="short-prompt-btn"
                  onClick={() => onCopy(item.prompt)}
                  title={`複製: ${item.prompt}`}
                >
                  <span className="short-prompt-label">{item.label}</span>
                  <span className="short-prompt-value">{item.prompt}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortPrompts;
