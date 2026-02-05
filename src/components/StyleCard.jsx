import React from 'react';

const StyleCard = ({ style, index, isPinned, onPin, onCopy, onViewDetails, onImageClick, promptText }) => {
  return (
    <div className="card">
      {isPinned && (
        <div className="pinned-badge">
          <span>📌</span> Pinned
        </div>
      )}

      <button
        className={`pin-btn ${isPinned ? 'active' : ''}`}
        onClick={(e) => {
            e.stopPropagation();
            onPin(index);
        }}
        title={isPinned ? "Unpin style" : "Pin style"}
      >
        {isPinned ? '★' : '☆'}
      </button>

      <div className="card-image-container" onClick={() => onImageClick(index + 1)}>
        <img
            src={`images/style_${index + 1}.webp`}
            alt={style.name}
            className="card-image"
            loading="lazy"
        />
        <div className="card-image-overlay">
          <span style={{color: 'white', fontWeight: 'bold'}}>View Large</span>
        </div>
      </div>

      <h3 className="card-title">{style.name}</h3>

      <div className="card-prompt">
        {promptText}
      </div>

      <div className="btn-container">
        <button className="btn-copy" onClick={() => onCopy(promptText)}>
          📋 Copy Prompt
        </button>
        <button className="btn-view-details" onClick={() => onViewDetails(style, index)}>
          💡 View Details
        </button>
      </div>
    </div>
  );
};

export default StyleCard;
