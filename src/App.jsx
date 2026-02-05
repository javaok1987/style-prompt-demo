import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import StyleCard from './components/StyleCard';
import DetailsModal from './components/DetailsModal';
import ImageModal from './components/ImageModal';
import Toast from './components/Toast';
import { stylesData } from './data/stylesData';

const NEGATIVE_PROMPT = `
負向約束
Negative prompt: blurry text, gibberish, typo, misspelling, distorted graphs, extra limbs, low resolution, watermark, signature, cut off text, ugly, deformed, lowpoly, amateur design, cluttered, unreadable text, incorrect spelling, broken layout, pixelated, jpeg artifacts, cropped content`;

const categoryRanges = {
  business: [0, 4],
  art: [5, 10],
  fun: [11, 16],
  retro: [17, 21],
  tech: [22, 25],
  special: [26, 31],
};

function App() {
  const [aspectRatio, setAspectRatio] = useState("Aspect ratio: 16:9 horizontal");
  const [customContent, setCustomContent] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [pinnedStyles, setPinnedStyles] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Modal states
  const [selectedStyle, setSelectedStyle] = useState(null); // For Details Modal
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(null);
  const [zoomedImageSrc, setZoomedImageSrc] = useState(null); // For Image Modal

  // Load pinned styles from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('pinnedStyles');
      if (stored) {
        setPinnedStyles(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load pinned styles", e);
    }
  }, []);

  // Save pinned styles to localStorage
  useEffect(() => {
    localStorage.setItem('pinnedStyles', JSON.stringify(pinnedStyles));
  }, [pinnedStyles]);

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
      setToastMessage("已複製到剪貼簿！");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setToastMessage("複製失敗");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const buildFullPrompt = (style) => {
    let promptText = style.prompt;
    if (customContent) {
      promptText = promptText.replace(/{PROMPT}/g, customContent);
    }
    promptText += "\n" + NEGATIVE_PROMPT;
    return promptText.trim() + "\n\n" + aspectRatio;
  };

  const filteredStyles = useMemo(() => {
    const list = stylesData.map((style, index) => ({ ...style, originalIndex: index }));

    // Sort: pinned first
    list.sort((a, b) => {
      const aPinned = pinnedStyles.includes(a.originalIndex);
      const bPinned = pinnedStyles.includes(b.originalIndex);
      if (aPinned && !bPinned) return -1;
      if (!aPinned && bPinned) return 1;
      return a.originalIndex - b.originalIndex;
    });

    if (currentCategory === 'all') return list;

    const range = categoryRanges[currentCategory];
    if (!range) return list;

    return list.filter(item => item.originalIndex >= range[0] && item.originalIndex <= range[1]);
  }, [currentCategory, pinnedStyles]);

  // Calculate counts for filters
  const counts = useMemo(() => {
    const countsMap = { all: stylesData.length };
    Object.keys(categoryRanges).forEach(key => {
        const [start, end] = categoryRanges[key];
        countsMap[key] = (end - start + 1);
    });
    return countsMap;
  }, []);

  return (
    <>
      <Header
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        customContent={customContent}
        setCustomContent={setCustomContent}
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
            onImageClick={(imgIndex) => setZoomedImageSrc(`images/style_${imgIndex}.webp`)}
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
            setSelectedStyle(null);
            setZoomedImageSrc(`images/style_${imgIndex}.webp`);
        }}
        promptText={selectedStyle ? buildFullPrompt(selectedStyle) : ''}
        onCopy={handleCopy}
      />
    </>
  );
}

export default App;
