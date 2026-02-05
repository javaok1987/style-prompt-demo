import React from 'react';

const categories = [
  {
    id: "all",
    name: "全部顯示",
    icon: "📋",
    className: "filter-btn-all",
  },
  {
    id: "business",
    name: "專業商務",
    icon: "💼",
    className: "filter-btn-business",
  },
  {
    id: "art",
    name: "插畫藝術",
    icon: "🎨",
    className: "filter-btn-art",
  },
  {
    id: "fun",
    name: "趣味創意",
    icon: "🎮",
    className: "filter-btn-fun",
  },
  {
    id: "retro",
    name: "復古經典",
    icon: "📜",
    className: "filter-btn-retro",
  },
  {
    id: "tech",
    name: "技術圖解",
    icon: "🔬",
    className: "filter-btn-tech",
  },
  {
    id: "special",
    name: "特殊風格",
    icon: "✨",
    className: "filter-btn-special",
  },
];

const CategoryFilter = ({ currentCategory, setCurrentCategory, counts }) => {
  return (
    <div className="category-filters" id="categoryFilters">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-btn ${cat.className} ${currentCategory === cat.id ? 'active' : ''}`}
          onClick={() => setCurrentCategory(cat.id)}
        >
          <span>{cat.icon}</span>
          <span>{cat.name} {counts[cat.id] !== undefined ? `(${counts[cat.id]}種)` : ''}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
