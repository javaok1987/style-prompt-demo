import React from 'react';

const DetailsModal = ({ show, style, index, onClose, onImageClick, promptText, onCopy }) => {
  if (!show || !style) return null;

  return (
    <div className={`details-modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="details-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="details-modal-close" onClick={onClose}>&times;</button>

        <div className="details-modal-header">
          <img
            src={`images/style_${index + 1}.webp`}
            alt={style.name}
            className="details-modal-image"
            onClick={() => onImageClick(index + 1)}
          />
          <div>
            <h2 className="details-modal-title">{style.name}</h2>
            <div className="btn-container" style={{marginTop: '16px'}}>
              <button className="btn-copy" onClick={() => onCopy(promptText)}>
                📋 Copy Prompt
              </button>
            </div>
          </div>
        </div>

        <div className="details-modal-section">
          <div className="card-section-title">核心特色 Feature</div>
          <ul className="card-features">
            {style.features.map((feature, i) => {
                // Parse markdown bold **text**
                const parts = feature.split(/(\*\*.*?\*\*)/g);
                return (
                    <li key={i}>
                        {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={j}>{part.slice(2, -2)}</strong>;
                            }
                            return part;
                        })}
                    </li>
                );
            })}
          </ul>
        </div>

        <div className="details-modal-section">
          <div className="card-section-title">適用場景 Scenarios</div>
          <div className="card-scenarios">
            {style.scenarios.map((scenario, i) => (
              <span key={i} className="scenario-tag">{scenario}</span>
            ))}
          </div>
        </div>

        <div className="details-modal-section">
          <div className="card-section-title">完整提示詞 Full Prompt</div>
          <div className="card-prompt" style={{maxHeight: '200px', overflowY: 'auto'}}>
            {promptText}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsModal;
