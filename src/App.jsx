import React, { useState } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import StyleCard from './components/StyleCard';
import DetailsModal from './components/DetailsModal';
import ImageModal from './components/ImageModal';
import Toast from './components/Toast';
import { stylesData } from './data/stylesData';
import { useLocalStorage, useFilteredStyles, usePromptBuilder } from './hooks/useAppLogic';
import { useToast } from './hooks/useToast';

function App() {
  const [aspectRatio, setAspectRatio] = useState("Aspect ratio: 16:9 horizontal");
  const [customContent, setCustomContent] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Custom hooks
  const [pinnedStyles, setPinnedStyles] = useLocalStorage('pinnedStyles', []);
  const { filteredStyles, counts } = useFilteredStyles(stylesData, currentCategory, pinnedStyles, searchTerm);
  const buildFullPrompt = usePromptBuilder(customContent, aspectRatio);
  const { show: showToast, message: toastMessage, triggerToast } = useToast();

  // Modal states
  const [selectedStyle, setSelectedStyle] = useState(null); // For Details Modal
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(null);
  const [zoomedImageSrc, setZoomedImageSrc] = useState(null); // For Image Modal

  const togglePin = (index) => {
    setPinnedStyles(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      triggerToast("已複製到剪貼簿！");
    } catch (err) {
      console.error('Failed to copy: ', err);
      triggerToast("複製失敗");
    }
  };

  return (
    <>
      <Header
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        customContent={customContent}
        setCustomContent={setCustomContent}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        counts={counts}
      />

      <div className="grid">
        {filteredStyles.map((style) => (
          <StyleCard
            key={style.originalIndex}
            style={style}
            index={style.originalIndex}
            isPinned={pinnedStyles.includes(style.originalIndex)}
            onPin={togglePin}
            promptText={buildFullPrompt(style)}
            onCopy={handleCopy}
            onViewDetails={(s, i) => {
                setSelectedStyle(s);
                setSelectedStyleIndex(i);
            }}
            onImageClick={(imgIndex) => setZoomedImageSrc(`images/style_${imgIndex}.png`)}
          />
        ))}
      </div>

      <Toast show={showToast} message={toastMessage} />

      <ImageModal
        show={!!zoomedImageSrc}
        imageSrc={zoomedImageSrc}
        onClose={() => setZoomedImageSrc(null)}
      />

      <DetailsModal
        show={!!selectedStyle}
        style={selectedStyle}
        index={selectedStyleIndex}
        onClose={() => setSelectedStyle(null)}
        onImageClick={(imgIndex) => {
            setZoomedImageSrc(`images/style_${imgIndex}.png`);
        }}
        promptText={selectedStyle ? buildFullPrompt(selectedStyle) : ''}
        onCopy={handleCopy}
      />
    </>
  );
}

export default App;
