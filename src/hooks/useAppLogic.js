import { useState, useEffect, useMemo } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export const useFilteredStyles = (stylesData, currentCategory, pinnedStyles, searchTerm = '') => {
  const categoryRanges = useMemo(() => ({
    all: [-1, -1], // Special case
    business: [0, 4],
    art: [5, 10],
    fun: [11, 16],
    retro: [17, 21],
    tech: [22, 25],
    special: [26, 31],
  }), []);

  const counts = useMemo(() => {
      const countsMap = { all: stylesData.length };
      Object.entries(categoryRanges).forEach(([key, range]) => {
          if (key === 'all') return;
          const [start, end] = range;
          countsMap[key] = (end - start + 1);
      });
      return countsMap;
  }, [stylesData.length, categoryRanges]);

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

    let result = list;

    if (currentCategory !== 'all') {
      const range = categoryRanges[currentCategory];
      if (range) {
        result = result.filter(item => item.originalIndex >= range[0] && item.originalIndex <= range[1]);
      }
    }

    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(style => {
        return (
          style.name.toLowerCase().includes(lowerTerm) ||
          style.prompt.toLowerCase().includes(lowerTerm) ||
          style.features.some(f => f.toLowerCase().includes(lowerTerm)) ||
          style.scenarios.some(s => s.toLowerCase().includes(lowerTerm))
        );
      });
    }

    return result;
  }, [stylesData, currentCategory, pinnedStyles, categoryRanges, searchTerm]);

  return { filteredStyles, counts };
};

export const usePromptBuilder = (customContent, aspectRatio) => {
  const buildFullPrompt = (style) => {
    const NEGATIVE_PROMPT = `
負向約束
Negative prompt: blurry text, gibberish, typo, misspelling, distorted graphs, extra limbs, low resolution, watermark, signature, cut off text, ugly, deformed, lowpoly, amateur design, cluttered, unreadable text, incorrect spelling, broken layout, pixelated, jpeg artifacts, cropped content`;

    let promptText = style.prompt;
    if (customContent) {
      promptText = promptText.replace(/{PROMPT}/g, customContent);
    }
    promptText += "\n" + NEGATIVE_PROMPT;
    return promptText.trim() + "\n\n" + aspectRatio;
  };

  return buildFullPrompt;
};
