import React from 'react';

const PinIcon = ({ isFilled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={isFilled ? "14" : "20"}
    height={isFilled ? "14" : "20"}
    viewBox="0 0 24 24"
    fill={isFilled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={isFilled ? "0" : "2"}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2z" />
  </svg>
);

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
        <PinIcon isFilled={isPinned} />
        {isPinned && <span>Pinned</span>}
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
