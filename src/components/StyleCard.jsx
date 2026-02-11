import React from 'react';

const StyleCard = ({ style, index, isPinned, onPin, onViewDetails, promptText }) => {
  return (
    <div className="card" onClick={() => onViewDetails(style, index)} style={{cursor: 'pointer'}}>
      <button
        className={`pin-btn ${isPinned ? 'active' : ''}`}
        onClick={(e) => {
            e.stopPropagation();
            onPin(index);
        }}
        title={isPinned ? "Unpin style" : "Pin style"}
      >
        {isPinned ? '📌 PINNED' : '☆'}
      </button>

      <h3 className="card-title" style={{ marginBottom: '16px' }}>{style.name}</h3>

      <div className="card-image-container">
        <img
            src={`images/style_${index + 1}.png`}
            alt={style.name}
            className="card-image"
            loading="lazy"
        />
        <div className="card-image-overlay">
          <button className="btn-view-details" style={{pointerEvents: 'none'}}>
            查看詳情
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
